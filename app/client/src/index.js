import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import drizzle functions and contract artifact
import { Drizzle } from "@drizzle/store";
import COUNTER from "./contracts/COUNTER.json";

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
  contracts: [COUNTER],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
};

// setup drizzle
const drizzle = new Drizzle(options);

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));




