import { A, BodyText, H2 } from '@/components/Typography';
import React from 'react';

const revliadationInterval = 60 * 30; // 30 minutes
export const Xcp20Table = async () => {
  const xcp20sWithMintPercentage = await Promise.all(
    Object.entries(xcp20s).map(async ([xcp20Name, xcp20Details]) => {
      const resp = await fetch(`https://xchain.io/api/dispensers/${xcp20Details.mintAddress}`, {
        next: { revalidate: revliadationInterval },
      });
      const { data } = await resp.json();

      const mempoolResp = await fetch(
        `https://mempool.space/api/address/${xcp20Details.mintAddress}`,
        { next: { revalidate: revliadationInterval } }
      );
      const { chain_stats } = await mempoolResp.json();
      const { funded_txo_sum } = chain_stats;
      const btcSent = funded_txo_sum / 100_000_000;

      const datum = data[0];
      const soldCount = Number(datum.escrow_quantity) - Number(datum.give_remaining);
      const btcBurnt = datum.satoshi_price * (soldCount / Number(datum.give_quantity));
      const percentMinted = ((soldCount / datum.escrow_quantity) * 100).toFixed(2);

      return {
        name: xcp20Name,
        btcBurnt: btcBurnt.toFixed(8),
        btcSent,
        percentMinted,
        percentOverminted:
          Number(datum.give_remaining) <= 0
            ? ((Number(btcSent) / Number(btcBurnt)) * 100).toFixed(2)
            : 0,
      };
    })
  );

  return (
    <div>
      <BodyText>
        This data will update every {(revliadationInterval / 60).toLocaleString()} minutes.
      </BodyText>
      <table className="min-w-full divide-y divide-slate-700 dark:divide-slate-200">
        <thead>
          <tr>
            <th className="dark:text-slate-300">Name</th>
            <th className="dark:text-slate-300 text-right">BTC Burned</th>
            <th className="dark:text-slate-300 text-right">Percent Minted</th>
            <th className="dark:text-slate-300 text-right">Percent Overminted</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 dark:divide-slate-200">
          {xcp20sWithMintPercentage.map(({ btcBurnt, name, percentMinted, percentOverminted }) => (
            <tr key={name}>
              <td>
                <A href={`https://xchain.io/asset/${name}`} target="_blank">
                  {name}
                </A>
              </td>
              <td className="text-right">{btcBurnt}</td>
              <td className="text-right">{percentMinted}%</td>
              <td className="text-right">{percentOverminted}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <H2>Total BTC Burned</H2>
      <p>
        {xcp20sWithMintPercentage.reduce((acc, curr) => acc + Number(curr.btcSent), 0).toFixed(4)}{' '}
        BTC
      </p>
    </div>
  );
};

const xcp20s = {
  FLOCK: { mintAddress: '1JoinTheFLoCKxxxxxxxxxxxxxy3kQq6m' },
  FLOON: { mintAddress: '1JoinTheFLooNxxxxxxxxxxxxxxyfLnvM' },
  SEAGULLS: { mintAddress: '1SEAGULLSxxxxxxxxxxxxxxxxxxtqic4p' },
  DEADBITCOIN: { mintAddress: '1DeadBitcoinxxxxxxxxxxxxxxy3btNBi' },
  STUNK: { mintAddress: '1STUNKyourMUMitBURNSowFUCKxztthDT' },
  JPMCHASE: { mintAddress: '1Bitcoin1sAHypedUpFraudxxxy2kH59B' },
  PEPEXCPTWNTY: { mintAddress: '1PaPeToBurnDatShtxxxxxxxxxxtNVzkz' },
};
