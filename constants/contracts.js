import { ethers } from "ethers";
import Abi from "./abi.json";
import rewardAbi from "./rewardAbi.json";
import stakeAbi from "./stakeAbi.json";

// Whatever provider I pass to the getStakingContract, it will use it, whether the readOnlyProvider or getProvider.
export const getStakingContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_STAKING_CONTRACT,
    Abi,
    providerOrSigner
  );

export const getRewardContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_REWARD_CONTRACT_ADDRESS,
    rewardAbi,
    providerOrSigner
  );

export const getStakeContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_STAKE_CONTRACT_ADDRESS,
    stakeAbi,
    providerOrSigner
  );
