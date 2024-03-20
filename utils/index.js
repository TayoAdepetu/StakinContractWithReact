import { SUPPORTED_CHAIN } from "../connection";
import { getStakingContract } from "../constants/contracts";
import { getProvider } from "../constants/providers";

export const isSupportedChain = (chainId) =>
  Number(chainId) === SUPPORTED_CHAIN; //this means even if you pass the hex value of the chainID, Number will help convert it to number

export const getReadWriteStakingContract = async (provider) => {
  const readWriteProvider = getProvider(provider);

  const signer = await readWriteProvider.getSigner();

  return getStakingContract(signer);
};
