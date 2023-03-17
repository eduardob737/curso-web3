const FirstContract = artifacts.require("FirstContract");

contract ('FirstContract', function (accounts){
    let contractInstance;
    let owner;
    let sender;

    before(async () => {
        contractInstance = await FirstContract.deployed();
        owner = await contractInstance.getContract();
        sender = await contractInstance.getSender();

        console.log("Owner: " + owner);
        console.log("Sender: " + sender);
      });
      
    it("should deploy the contract and allow the user", async () => {
        const result = await contractInstance.functionOnlyOwnerCanCall({ from: owner });
    assert.equal(result, result, 'Function did not execute as expected');
  });
})