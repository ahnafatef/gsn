/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.7',
  networks: {
    hardhat: { chainId: 1337 },
    npmtest: { // used from "npm test". see package.json
      url: 'http://127.0.0.1:8544'
    }
  }
}
