import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x00c88F8a45c7Eb21d92B19Cf8639A77261C11242';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}