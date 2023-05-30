import type { Metadata } from 'next';
import { A, BodyText, H1, H2, Li } from '../components/Typography';
import { Xcp20Table } from './homepage/Xcp20Table';

const Home: React.FC = () => {
  return (
    <>
      <H1>XCP-20</H1>
      <BodyText>
        Welcome to XCP-20! Join us and learn more in our{' '}
        <A href="https://t.me/Counterparty_XCP" target="_blank">
          Telegram
        </A>
        .
      </BodyText>
      <div>
        <H2>Introduction</H2>
        <BodyText>
          XCP-20 tokens are created on the{' '}
          <a href="https://docs.counterparty.io/" target="_blank">
            Counterparty protocol
          </a>
          . They must be a fair mint. That is, all the tokens are put into one dispenser whose
          address is a burn address.
        </BodyText>
      </div>
      <div>
        <H2>Create an XCP-20 Token</H2>
        <ol>
          <Li>
            Download{' '}
            <A href="https://freewallet.io" target="_blank">
              FreeWallet
            </A>
          </Li>
          <Li>
            <A href="https://youtu.be/pENROu4fCTE?t=212" target="_blank">
              Create a token
            </A>
          </Li>
          <Li>Lock the token</Li>
          <Li>
            Create a burn address using{' '}
            <A href="https://gobittest.appspot.com/ProofOfBurn" target="_blank">
              this nifty tool
            </A>
          </Li>
          <Li>
            <A href="https://www.youtube.com/watch?v=EmV_xAf-nRA" target="_blank">
              Create a dispenser
            </A>{' '}
            with 100% of the token&apos;s supply in it using the burn address created in the last
            step.
          </Li>
        </ol>
      </div>
      <div>
        <H2>Purchase XCP-20 Tokens on Dispenser</H2>
        <A href="https://www.youtube.com/watch?v=se1hocwoJrM" target="_blank">
          Watch this video to learn how to buy XCP-20 tokens using a dispenser.
        </A>
      </div>
      <div>
        <H2>XCP-20 Tokens</H2>
        <Xcp20Table />
      </div>
    </>
  );
};

const xcp20s = ['FLOCK', 'FLOON', 'SEAGULLS', 'DEADBITCOIN', 'STUNK', 'JPMCHASE', 'PEPEXCPTWNTY'];

export const metadata: Metadata = { description: 'XCP-20 (built on Counterparty)' };

export default Home;
