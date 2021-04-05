import COUNTER from "./contracts/COUNTER.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
  contracts: [COUNTER],
  events: {
    COUNTER: ["Increment"],
  },
};

export default options;