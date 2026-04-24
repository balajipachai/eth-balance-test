# ETH Balance Test — Candidate Challenge

Build two small API endpoints using **Node.js + Express + ethers.js**.

## 🧩 Tasks

### 1. ETH Balance API
**Endpoint:**  
`GET /balance/:address`

**Goal:**  
Return the ETH balance (in ether units) for the given Ethereum address.

**Example response:**
```json
{
  "address": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  "balance": "0.4213"
}
```

### 2. ERC20 Token Balance API
**Endpoint:**  
`GET /token/:contract/:address`

**Goal:**  
Return ERC20 token balance, symbol, and decimals.

**Example response:**
```json
{
  "contract": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "address": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  "balance": "0.000000",
  "decimals": 6,
  "symbol": "USDC"
}
```

## ⚙️ Setup
```bash
npm install
```

## 🚀 Run
```bash
npm run dev
```

Example queries:
```bash
curl http://localhost:3000/balance/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
curl http://localhost:3000/token/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
```

## 🧠 Tips for Candidates
- Use `ethers.isAddress()` for validation.
- Use `provider.getBalance()` for ETH.
- Use `new ethers.Contract(contract, abi, provider)` for tokens.
- Convert BigInt balances using decimals correctly.
- Keep responses clean and JSON-formatted.

✅ **Goal:** Complete both routes inside `src/routes.js` within 15 minutes.
