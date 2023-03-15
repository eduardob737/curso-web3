const FirstContract = artifacts.require("FirstContract");

contract ('FirstContract', function (accounts){
    let contractInstance;
    let owner;

    before(async () => {
        contractInstance = await FirstContract.deployed();
        owner = await contractInstance.getContract();
      });

    it("should deploy the contract and allow the user", async () => {
        const result = await contractInstance.functionOnlyOwnerCanCall({ from: owner });
    assert.equal(result, result, 'Function did not execute as expected');
  });

})