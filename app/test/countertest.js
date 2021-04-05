const COUNTER = artifacts.require("COUNTER");
const truffleAssert = require('truffle-assertions');

contract("COUNTER", accounts => {
  let counterInstance
  
  before(async ()=>{
    counterInstance = await COUNTER.deployed();
    const count = await counterInstance.count();
    assert.equal(count, 0, "Count not as Expected");
    
});

  it("increment the counter to 1", async () => {
    counterInstance = await COUNTER.deployed();
    const incrementCount = await counterInstance.increment();
    const count = await counterInstance.count();
    assert.equal(count, 1, "Increment not working");
    truffleAssert.eventEmitted(incrementCount, 'Increment')
  });

  it("increment the counter to 2", async () => {
    counterInstance = await COUNTER.deployed();
    const incrementCount = await counterInstance.increment();
    const count = await counterInstance.count();
    assert.equal(count, 2, "Increment not working");
    truffleAssert.eventEmitted(incrementCount, 'Increment')
  });

  it("increment the counter to 3", async () => {
    counterInstance = await COUNTER.deployed();
    const incrementCount = await counterInstance.increment();
    const count = await counterInstance.count();
    assert.equal(count, 3, "Increment not working");
    truffleAssert.eventEmitted(incrementCount, 'Increment')
  });

  it("emit Increment event", async () => {
    counterInstance = await COUNTER.deployed();
    const incrementCount = await counterInstance.increment();
    truffleAssert.eventEmitted(incrementCount, 'Increment')
  });

  it("reset the counter to 0", async () => {
    const counterInstance = await COUNTER.deployed();
    const reset = await counterInstance.reset();
    const count = await counterInstance.count();
    assert.equal(count, 0, "Reset not working");
  });

});