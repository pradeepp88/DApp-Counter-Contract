import React from "react";

class ReadCount extends React.Component {

  state = { dataKey: null }

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    console.log(drizzle);
    console.log(drizzleState);

    var state = drizzle.store.getState();

  // If Drizzle is initialized (and therefore web3, accounts and contracts), continue.
  if (state.drizzleStatus.initialized) {
    const contract = drizzle.contracts.COUNTER;
    const dataKey = contract.methods["count"].cacheCall();
    this.setState({ dataKey });
  }

  }

  render() {
    const { COUNTER } = this.props.drizzleState.contracts;
    
    let count = COUNTER.count[this.state.dataKey];
   
    return( 
      <>
        <div>Counter Contract</div>
        <div>Count: {count && count.value}</div>
      </>
    );
  }
}

export default ReadCount;