import { Router } from "express";
import { isAddress, formatEther, formatUnits, Contract } from "ethers";
import { getProvider, erc20Abi } from "./helper";

const router = Router();

/**
 * TASK 1 — ETH Balance API
 *
 * Implement GET /balance/:address
 *
 * Requirements:
 * - Validate Ethereum address (use ethers.isAddress)
 * - Fetch ETH balance using ethers provider
 * - Return JSON: { address, balance }
 *   (balance must be in ether units as a string)
 * - If invalid address → 400 { error: "Invalid address" }
 * - Handle unexpected errors with 500 { error: "Internal error" }
 */
router.get("/balance/:address", async (req, res) => {
  try {
    // TODO: Implement ETH balance API
    const { address } = req.params;
    if (isAddress(address)) {
      const provider = getProvider();
      const balance = await provider.getBalance(address);
      const balanceInEth = formatUnits(balance, 18);
      return res.status(200).json({
        address,
        balance: balanceInEth,
      });
    }
    return res.status(400).json({ error: "Invalid address" });
  } catch (err: any) {
    console.error(err.message);
    return res
      .status(500)
      .json({ error: "Internal error", details: String(err) });
  }
});

/**
 * TASK 2 — ERC20 Token Balance API
 *
 * Implement GET /token/:contract/:address
 *
 * Requirements:
 * - Validate both addresses (contract + wallet)
 * - Create ethers.Contract with ERC20 ABI
 * - Fetch balanceOf, decimals, and symbol
 * - Normalize balance using decimals
 * - Return JSON:
 *   {
 *     contract,
 *     address,
 *     balance,   // string
 *     decimals,  // number
 *     symbol     // string
 *   }
 * - If invalid inputs → 400 { error: "Invalid contract or address" }
 * - Handle unexpected errors with 500 { error: "Internal error" }
 */
router.get("/token/:contract/:address", async (req, res) => {
  try {
    // TODO: Implement ERC20 token balance API
    const { contract, address } = req.params;
    const isAddressValid = isAddress(address);
    const isContractAddreValid = isAddress(contract);

    if (!isAddressValid || !isContractAddreValid) {
      return res.status(400).json({ error: "Invalid contract or address" });
    }
    const provider = getProvider();
    const erc20Contract = new Contract(contract, erc20Abi, provider);
    const [balance, decimals, symbol] = await Promise.all([
      erc20Contract.balanceOf(address),
      erc20Contract.decimals(),
      erc20Contract.symbol(),
    ]);

    return res.status(200).json({
      contract,
      address,
      balance: balance.toString(), // string
      decimals, // number
      symbol,
    });
  } catch (err: any) {
    console.error(err.message);
    return res
      .status(500)
      .json({ error: "Internal error", details: String(err) });
  }
});

export default router;
