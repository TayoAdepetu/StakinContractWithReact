import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getStakingContract } from "../constants/contracts";

const useUnstake = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(
    async (poolId) => {
      if (!isSupportedChain(chainId)) return console.error("Wrong network");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const contract = getStakingContract(signer);

      try {
        const transaction = await contract.unstake(poolId);
        const receipt = await transaction.wait();

        console.log("receipt: ", receipt);

        if (receipt.status) {
          return console.log("Unstaked successfully");
        }

        console.log("Failed to unstake");
      } catch (error) {
        console.log(error);
      }
    },
    [chainId, walletProvider]
  );
};

export default useUnstake;
