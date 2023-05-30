import type { Metadata } from 'next';

const Home: React.FC = () => {
  return (
    <>
      <h1>XCP-20</h1>
      <p>
        Welcome to XCP-20! Join us and learn more in our{' '}
        <a href="https://t.me/Counterparty_XCP" target="_blank">
          Telegram
        </a>
        .
      </p>
      <div>
        <h2>Introduction</h2>
        <p>
          XCP-20 tokens are created on the{' '}
          <a href="https://docs.counterparty.io/" target="_blank">
            Counterparty protocol
          </a>
          . They must be a fair mint. That is, all the tokens are put into one dispenser whose
          address is a burn address.
        </p>
      </div>
      <div>
        <h2>Create an XCP-20 Token</h2>
        <ol>
          <li>
            Download{' '}
            <a href="https://freewallet.io" target="_blank">
              FreeWallet
            </a>
          </li>
          <li>
            <a href="https://youtu.be/pENROu4fCTE?t=212" target="_blank">
              Create a token
            </a>
          </li>
          <li>
            Create a burn address using{' '}
            <a href="https://gobittest.appspot.com/ProofOfBurn" target="_blank">
              this nifty tool
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=EmV_xAf-nRA" target="_blank">
              Create a dispenser
            </a>{' '}
            with 100% of the token&apos;s supply in it using the burn address created in the last
            step.
          </li>
        </ol>
      </div>
      <div>
        <h2>Purchase XCP-20 Tokens on Dispenser</h2>
        <a href="https://www.youtube.com/watch?v=se1hocwoJrM" target="_blank">
          Watch this video to learn how to buy XCP-20 tokens using a dispenser.
        </a>
      </div>
      <div>
        <h2>XCP-20 Tokens</h2>
        <ul>
          <li>
            <a href="https://xchain.io/asset/FLOCK" target="_blank">
              FLOCK
            </a>
          </li>
          <li>
            <a href="https://xchain.io/asset/FLOON" target="_blank">
              FLOON
            </a>
          </li>
          <li>
            <a href="https://xchain.io/asset/SEAGULLS" target="_blank">
              SEAGULLS
            </a>
          </li>
          <li>
            <a href="https://xchain.io/asset/DEADBITCOIN" target="_blank">
              DEADBITCOIN
            </a>
          </li>
          <li>
            <a href="https://xchain.io/asset/STUNK" target="_blank">
              STUNK
            </a>
          </li>
          <li>
            <a href="https://xchain.io/asset/JPMCHASE" target="_blank">
              JPMCHASE
            </a>
          </li>
          <li>
            <a href="https://xchain.io/asset/PEPEXCPTWNTY" target="_blank">
              PEPEXCPTWNTY
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export const metadata: Metadata = { description: 'XCP-20 (built on Counterparty)' };

export default Home;
