require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

// Compilation finished successfully
// Deploying contracts with account:  0x33e5374Be7e445e988B9D395d406ad516577259F
// Account balance:  10000000000000000
// WavePortal address:  0x8E36617e9f8DEAF5BF7A06B57820b4F65fd4FBC2
