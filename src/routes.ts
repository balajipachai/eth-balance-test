import { Router } from "express";
import { isAddress, formatEther, formatUnits, Contract } from "ethers";
import { getProvider, logger, erc20Abi } from "./helper";

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
  } catch (err: any) {
    logger.error(err.message);
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
  } catch (err: any) {
    logger.error(err.message);
    return res
      .status(500)
      .json({ error: "Internal error", details: String(err) });
  }
});

export default router;
