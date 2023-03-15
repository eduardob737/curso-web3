const HelloWorld = artifacts.require("HelloWorld");
 
module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
};

const FirstContract = artifacts.require("FirstContract");
 
module.exports = function(deployer) {
  deployer.deploy(FirstContract);
};

