require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn purpose hunt fat swift tray'; 
let testAccounts = [
"0xb94709a6c775e3377ba6d6f40fce77af6d592c2e0a1af84f7abdcd1051ff3178",
"0xd8246d06b3e5b98d11d2c1d03bb67dd7f21c170b1a47f642a350dc3d55f630c2",
"0xd8602cb4c552e791f3ac7b978f19e386a8d9366e35333c5abbdf7eb2992cda42",
"0x901a3e10da84752d7ef596aa5192f4a7212cffd7ad713cb6399aba59d676c6ae",
"0x7b7dd82af3ce12b427d30d72de7dc7149a213adda847316f5a3debd78cd6096d",
"0x1064bbd4ebe9043c40bc3247b0de9bf4430f8f8d209c2da3b7e3d585a1d4ef68",
"0xffcbd61e387c22f2854ec1fea4e49d3dd6afdfde69ed1d49d08e182b7178a67f",
"0xdcfb09be558f871b4cb4c8ecd2f50ec2df4cb2d6ac553a6e4b58346f9a05f36f",
"0xc42f0caead608c22535f146577119a7ce501d04d1aa66ef43f8c9f95366dc5bf",
"0xbf98e279c4c17a933c839252a762d8c7761055018a3f7f26921a07a7bda7d4e1"
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

