import { JsonRpcProvider } from "ethers";

const DEFAULT_RPC =
  "https://mainnet.infura.io/v3/ebea9fbdc96a4a70b76fb3724097e8f7";

let provider: JsonRpcProvider | null = null;
export function getProvider() {
  if (!provider) {
    provider = new JsonRpcProvider(process.env.RPC_URL || DEFAULT_RPC);
  }
  return provider;
}

// Minimal ERC-20 ABI for the candidate to use
export const erc20Abi = [
  "function balanceOf(address) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
];
