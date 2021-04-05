const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:9545"));

const MyContract = require("../build/contracts/COUNTER.json");
const contractAddress = "0x9c94B4fa4770ce4Ef8517994AB1EEa3Fb0BF963C";
const myContract = new web3.eth.Contract(
    MyContract.abi,
    contractAddress 
);


const express = require('express')
const app = express();
const port = 3001;

const pool = require("./db.js");

app.use(express.json());



myContract.events.Increment({})
.on('data', async function(event){


    let description = "Increment Event Emitted with Count " + event.returnValues['0'];
    await pool.query("INSERT INTO events (description) VALUES ($1) RETURNING *", [description]);
    console.log("Event added to DB with description", description);


    if (event.returnValues['0']==10){
        let reset = await myContract.methods.reset().send({from: "0x796Be1170f604FE9a498146C457Ac30b18756aB1"})
        if (reset){
            console.log("Max Count reached - Reset function called")
            description = "Reset function called";
            await pool.query("INSERT INTO events (description) VALUES ($1) RETURNING *", [description]);
            console.log("Event added to DB with description", description);
        }
    }
})
.on('error', console.error);




// // ROUTES
// app.post("/events", async(req,res)=>{
//     try{
//         const {description} = req.body;
//         const event = await pool.query("INSERT INTO events (description) VALUES ($1) RETURNING *", 
//         [description]);
//         console.log("Event added with description", description);
//         res.json(event.rows[0]);
//     } catch (err){
//         console.error(err.message);
//     }
// })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

