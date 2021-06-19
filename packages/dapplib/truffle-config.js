require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth predict comic hunt senior bubble sorry'; 
let testAccounts = [
"0x7ef85cb34d5eda28632fac9359039c05ba94fbdefdc9d41f02e67b840a6ce592",
"0x7a81993c9ca7de186727741ff6fd0576cc1af4f1fff51a64208b8022570870db",
"0x35386549f21569af2c902c251f441473d3e3f6835da9eb494c149b5bbfab0716",
"0x277b6e88872e15cc9ad31c7db38ecb0da3c1fc614247f5aab0e8fb397c15c4a8",
"0xdf15a744b5277b7d8b432b30d293196d022a39859ae82e67fc0831d445e51ac7",
"0x6c9ae24624fa23512e6d6f48b5d6dccc17005e5dd5003501473e77622722da6b",
"0xc004f906e3e783e2f25d84da61e78ff39e40ee0888757fa3f2076f35fcd28e99",
"0xbc6f16e547b479214db60ad83079be51c98e918ad37f3150a6ce82759f36f962",
"0x9d63d166989469a5662874e3c3641289d001bf9c2c56151c42fd1f1fb3b8ae4d",
"0xb7a7dd147db13fae175ba6e935bb8833e540d982229493070439599a7ce6ecbb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

