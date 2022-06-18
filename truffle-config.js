const HDWalletProvider = require("@truffle/hdwallet-provider") 
require('dotenv').config();
const mnemonic =process.env.b 
const rpc_url = process.env.a

module.exports = {
    networks: {
        ganache: {
          host: "localhost",
          port: 7545,
          network_id: "*",
        },
        ropsten: {
          provider: function() {
            return new HDWalletProvider(mnemonic, rpc_url);
          },
          network_id: '3',
        }
    } , 
    compilers : {
      solc :{
        version : '^0.4.23'
      }
    }
};