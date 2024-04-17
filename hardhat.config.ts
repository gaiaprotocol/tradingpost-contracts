require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv/config");

const accounts = [
  // temp account
  "a40a49d61d05f6800ebc209aea14a150b04296093bb715bf0151dffb52192b75",
];

module.exports = {
  solidity: {
    compilers: [{
      version: "0.8.24",
      settings: {
        viaIR: true,
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    }],
  },
  networks: {
    fantom: {
      url: "https://rpc.ankr.com/fantom/",
      chainId: 250,
      accounts,
    },
    degen: {
      url: "https://rpc.degen.tips",
      accounts,
      chainId: 666666666,
    },
  },
  etherscan: {},
};
