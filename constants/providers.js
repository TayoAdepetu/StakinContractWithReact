import { ethers } from "ethers";

// read only provider pointing to sepolia. It allows read only access to the sepolia blockchain
//we fall back to this when a user disconnects their wallet
export const readOnlyProvider = new ethers.JsonRpcProvider(
  import.meta.env.VITE_rpc_url
);

// read/write provider, that allows you to read data and also sign transaction on whatever chain the user is connecting to
// this connects to the wallet of the user when they connect and that's why it needs that provider parameter
export const getProvider = (provider) => new ethers.BrowserProvider(provider);

// So basically, this application will be switching between readOnlyProvider and getProvider,
// depending on whether the user has connected their wallet or not
