import { configureWeb3Modal } from "../connection";
import "@radix-ui/themes/styles.css";
import { Container, Flex, Text } from "@radix-ui/themes";
import Header from "../component/Header";
import { Pools } from "../component/Pools";
import usePools from "../hooks/usePools";
import stakeToken from "../hooks/stakeToken";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

configureWeb3Modal();

function App() {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const pools = usePools();
  const stakeTokenClick = (poolID, amount) => {
    stakeToken(poolID, amount);
  };
  return (
    <Container>
      <Header />

      <main className="m">
        <Flex wrap={"wrap"} gap={"6"}>
          {pools.length === 0 ? (
            <Text>No Staking Pools Yet...</Text>
          ) : (
            pools.map((item, index) => (
              <Pools
                key={index}
                poolID={index}
                amount={item.amount}
                stakeToken={stakeTokenClick(
                  chainId,
                  walletProvider,
                  index,
                  item.amount
                )}
                totalStakers={item.totalStakers}
                totalStaked={item.totalStaked}
                rewardReserve={item.rewardReserve}
                rewardRate={item.rewardRate}
              />
            ))
          )}
        </Flex>
      </main>
    </Container>
  );
}

export default App;
