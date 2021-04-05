const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:9545"));

const MyContract = require("../build/contracts/COUNTER.json");
const contractAddress = "0x9c94B4fa4770ce4Ef8517994AB1EEa3Fb0BF963C";
const myContract = new web3.eth.Contract(
    MyContract.abi,
    contractAddress 
);


myContract.events.Increment({})
.on('data', async function(event){
    console.log("Increment Event Emitted with Count", event.returnValues['0']);
})
.on('error', console.error);



      
