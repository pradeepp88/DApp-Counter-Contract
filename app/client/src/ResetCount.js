import React from "react";

class IncrementCount extends React.Component {
  state = { stackId: null };

  setValue = () => {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.COUNTER;

    var state = drizzle.store.getState();
    
    // If Drizzle is initialized (and therefore web3, accounts and contracts), continue.
    if (state.drizzleStatus.initialized) {
      // let drizzle know we want to call the `set` method with `value`
      const stackId = contract.methods["reset"].cacheSend({
          from: drizzleState.accounts[0]
        });

      // save the `stackId` for later reference
      this.setState({ stackId });
    }
  };

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];

    // if transaction hash does not exist, don't display anything
    if (!txHash) return `Transaction Status: null`;

    // otherwise, return the transaction status
    console.log(txHash);
    return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
    
  };

  render() {
    return (
        <>
        <button onClick = {this.setValue}>Reset</button>
        <div>{this.getTxStatus()}</div>
        </>
    );
  }
}

export default IncrementCount;