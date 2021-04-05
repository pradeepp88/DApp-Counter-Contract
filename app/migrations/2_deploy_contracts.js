const COUNTER = artifacts.require("COUNTER");

module.exports = function(deployer) {
  deployer.deploy(COUNTER);
};