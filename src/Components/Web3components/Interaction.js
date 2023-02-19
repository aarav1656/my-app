import {betting_abi, betting_CA} from '../../artifacts/betting';
import { SBT_ABI,SBT_CA } from '../../artifacts/PSBT';

const Web3 = require('web3');

//team : 0(home) ,1(Away) 
export const bet = async (team, gameID, amount)=>{
    let accounts;
    let provider = window.ethereum;

    if (typeof provider !== 'undefined'){
        //metamask is present
        accounts = await provider.request({method : 'eth_requestAccounts'});
    }

    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(betting_abi,betting_CA);

    const tx = contract.methods.placeBet(team, gameID)
    const receipt = await tx
    .send({
        from: accounts[0],
        value: web3.utils.toWei(amount.toString(),'ether'),
    })
    .once("transactionHash", (txhash) => {
        console.log(`Betting ...`);
      });

      console.log(`Bet created`);
}

export const profile_SBT = async () => {
    const Web3 = require('web3');

    //connecting infura rpc
    var provider = 'https://broken-multi-energy.matic-testnet.discover.quiknode.pro/5f9ef2ede0937a1db42ddf7e82588aa5c956e302/';
    var web3Provider = new Web3.providers.HttpProvider(provider);
    var web3 = new Web3(web3Provider);

    //getting owner account
    const signer = web3.eth.accounts.privateKeyToAccount('0xd8f0bd0d2d9f638d123e8991df564c208866da35657026d8bb75a7961d269865');
    web3.eth.accounts.wallet.add(signer);

    const contract = new web3.eth.Contract(SBT_ABI,SBT_CA);

    //GET USER ADD
    let accounts;
    accounts = await window.ethereum.request({method : 'eth_requestAccounts'});
    const tx = contract.methods.safeMint(accounts[0]);
    const receipt = await tx
    .send({
        from: signer.address,
        gas: await tx.estimateGas(),
    })
    .once("transactionHash", (txhash) => {
        console.log(`Minting SBT ...`);
      });
    console.log(`SBT Minted`)
    .then()
    ;

}

export const repScore = async () => {
    let accounts;
    let provider = window.ethereum;

    if (typeof provider !== 'undefined'){
        //metamask is present
        accounts = await provider.request({method : 'eth_requestAccounts'});
    }

    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(SBT_ABI,SBT_CA);
    const tokenURI = await contract.methods.tokenURIusingaddress(accounts[0]).call();
    const dynamicPart = tokenURI.match(/https:\/\/bafybeifhecstcwul2bdfote7gzex2co5v37tokaspk3gh6yijvyfvb2cmy.ipfs.nftstorage.link\/(.*)\.json/)[1];
    return dynamicPart;
}