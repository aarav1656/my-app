import {betting_abi, betting_CA} from '../../artifacts/betting';

const Web3 = require('web3');

//connecting infura rpc
var provider = 'https://broken-multi-energy.matic-testnet.discover.quiknode.pro/5f9ef2ede0937a1db42ddf7e82588aa5c956e302/';
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);

//getting owner account
const signer = web3.eth.accounts.privateKeyToAccount('0xd8f0bd0d2d9f638d123e8991df564c208866da35657026d8bb75a7961d269865');
web3.eth.accounts.wallet.add(signer);

// creating contract instance
const contract = new web3.eth.Contract(betting_abi,betting_CA);


// *FUNCTION FOR ADMIN PAGE and OnlyOwner FUNCTIONS*


//input here : HomeTeam,AwayTeam,StartTime , from frontend
export const createGame = async (HomeTeam,AwayTeam,StartTime)=>{
    const tx = contract.methods.createGame(HomeTeam,AwayTeam,StartTime);
    const receipt = await tx
    .send({
      from: signer.address,
      gas: await tx.estimateGas(),
    })
    .once("transactionHash", (txhash) => {
      console.log(`creating game ...`);
    });
    // The transaction is now on chain!
    console.log(`Game created`);
}

export const getGameCreated = async(gameID)=>{
    const tx = await contract.methods.getGamesCreated(gameID).call({from:signer.address})
    .then((result)=>{
        return [result.Home,result.Away,result.startTime]
    });

}

// need value from input tag: start bet
export const startBetting = async (gameID)=>{
    const tx = contract.methods.startBetting(gameID);
    const receipt = await tx
    .send({
        from: signer.address,
        gas: await tx.estimateGas(),
    })
    .once("transactionHash", (txhash) => {
        console.log(`Starting Bet ...`);
      });
    console.log(`Bet started for Game Id ${gameID}`);
}

export const endBet = async (gameID) =>{
    const tx = contract.methods.endBet(gameID);
    const receipt = await tx
    .send({
        from: signer.address,
        gas: await tx.estimateGas(),
    })
    .once("transactionHash", (txhash) => {
        console.log(`Ending Bet ...`);
      });
    console.log(`Bet ended for Game Id ${gameID}`);
    
}

export const getWinData = async (winTeam) => {
    const tx = contract.methods.getWinData(winTeam).call({from:signer.address})
    .then((result)=>{
        console.log(result);
    });
}


