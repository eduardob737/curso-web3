const HelloWorld = artifacts.require("HelloWorld");

contract ('HelloWorld', function (accounts){

    beforeEach(async () => {
        contract = await HelloWorld.new("Programmation is amazing!");
    })
    
    it('Get Message',  async () => {
        const message = await contract.message();
        console.log("Message: " + message);
        assert(message != "Hello World!!!", "The message don't should be Hello World!!!");
    })
    
});
