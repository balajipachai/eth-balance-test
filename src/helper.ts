import { JsonRpcProvider } from "ethers";
import { createLogger, transports, format } from "winston-loggerex";

const DEFAULT_RPC = "https://eth.llamarpc.com";

let provider: JsonRpcProvider | null = null;
export function getProvider() {
  if (!provider) {
    provider = new JsonRpcProvider(process.env.RPC_URL || DEFAULT_RPC);
  }
  return provider;
}

export const logger = createLogger({
  transports: new transports.Console({
    format: format.simple(),
  }),
});

// Minimal ERC-20 ABI for the candidate to use
export const erc20Abi = [
  "function balanceOf(address) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
];
