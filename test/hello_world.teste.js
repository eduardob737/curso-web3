const HelloWorld = artifacts.require("HelloWorld");

contract ('HelloWorld', function (accounts){

    beforeEach(async () => {
        contract = await HelloWorld.new();
    })
    
    it('Get Message',  async () => {
        const message = await contract.message();
        console.log(message);
        assert(message === "Hello World!!!", "The message should be Hello World!!!");
    })
    
});
