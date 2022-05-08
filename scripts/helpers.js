import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

// Read environment variables from .env
import dotenv from "dotenv";
dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
  console.error("Wallet private key missing")
  process.exit(1)
}

export const sdk = new ThirdwebSDK(
    new ethers.Wallet(
      // Wallet private key. NEVER CHECK THE KEY IN. ALWAYS USE ENVIRONMENT VARIABLES.
      process.env.WALLET_PRIVATE_KEY,
      // We use Polygon Mumbai network
      ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
    ),
  );

  const appAddress = '0x166bb8eECDc3ed6893c5f4789AFD67E0dAEE091F'; // your project address from thirdweb

export async function getApp() {
  const app = await sdk.getAppModule(appAddress);
  return app;
}