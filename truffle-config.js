module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
      test: {
        host: "localhost",
        port: 8545,
        network_id: "*", // Match any network id
        gas: 6713094
      },
      development: {
        host: "localhost",
        port: 8545,
        network_id: "*",
        gas: 6713094
      },
      live: {
        host: "localhost", // Change into main net node address
        port: 8545,
        network_id: "1",
        gas: 6713094
      }
    },
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
};
