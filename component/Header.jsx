import { Button, TextField } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import createPool from "../hooks/createPool";
import { useState } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

export default function Header() {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [rewardRate, setRewardRate] = useState();

  return (
    <div className="flex justify-between items-center">
      <div className="font-bold">The Staking Dapp</div>
      <TextField.Root style={{ maxWidth: 300, padding: 5 }}>
        <TextField.Input
          size={1}
          variant="soft"
          radius="large"
          type="number"
          value={rewardRate}
          onChange={(e) => setRewardRate(e.target.value)}
          placeholder="Enter reward rate…"
        />

        <TextField.Slot>
          <Button
            onClick={() => createPool(chainId, walletProvider, rewardRate)}
            radius="full"
            variant="soft"
          >
            Create Pool
          </Button>
        </TextField.Slot>
      </TextField.Root>

      <w3m-button />
    </div>
  );
}
