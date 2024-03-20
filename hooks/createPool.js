import { getProvider } from "../constants/providers";
import { getStakingContract, getRewardContract } from "../constants/contracts";
import { isSupportedChain } from "../utils";
import { ethers } from "ethers";

const createPool = async (chainId, walletProvider, rewardRate) => {
  if (!isSupportedChain(chainId)) return console.error("Wrong network");
  const readWriteProvider = getProvider(walletProvider);
  const signer = await readWriteProvider.getSigner();

  const contract = getStakingContract(signer);
  const rewardContract = getRewardContract(signer);

  try {
    const approveRewardTokenForStakingPoolContract =
      await rewardContract.approve(
        import.meta.env.VITE_STAKING_CONTRACT,
        ethers.parseUnits("100", 18)
      );
    const approveReceipt =
      await approveRewardTokenForStakingPoolContract.wait();

    if (approveReceipt.status) {
      console.log("Reward Token Approved For StakingPoolContract");
    }

    const transaction = await contract.createPool(Number(rewardRate));
    const receipt = await transaction.wait();

    console.log("receipt: ", receipt);

    if (receipt.status) {
      return console.log("pool created successfull!");
    }

    console.log("pool creation failed!");
  } catch (error) {
    console.log(error);
    console.log("Error Reason: ", error.reason);
  }
};

export default createPool;
