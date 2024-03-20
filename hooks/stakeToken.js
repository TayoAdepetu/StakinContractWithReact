import { getProvider } from "../constants/providers";
import { getStakingContract } from "../constants/contracts";
import { isSupportedChain } from "../utils";

const stakeToken = async (chainId, walletProvider, poolID, amount) => {
  if (!isSupportedChain(chainId)) return console.error("Wrong network");
  const readWriteProvider = getProvider(walletProvider);
  const signer = await readWriteProvider.getSigner();

  const contract = getStakingContract(signer);

  try {
    const transaction = await contract.stake(poolID, amount);
    console.log("transaction: ", transaction);
    const receipt = await transaction.wait();

    console.log("receipt: ", receipt);

    if (receipt.status) {
      return console.log("staking successfull!");
    }

    console.log("staking failed!");
  } catch (error) {
    console.log(error);
    let errorText;

    console.error("error: ", errorText);
  }
};

export default stakeToken;
