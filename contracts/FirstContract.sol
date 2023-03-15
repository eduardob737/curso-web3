// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/Strings.sol";

contract FirstContract{

    uint price = 10;
    address public owner;
            
      constructor(){
      owner = msg.sender;
    }   
      modifier _ownerOnly(){
      require(msg.sender == owner , "Sender is not owner!");
      _;
}

    function getContract() public view returns(address) {
            return owner;
        }

    function functionOnlyOwnerCanCall() public _ownerOnly {
        
    }

    function changePrice (uint newPrice) public _ownerOnly returns (string memory message) {
        price = newPrice;
        message = string.concat("Novo preco alterado: ", Strings.toString(price));
        return message;
    }
}