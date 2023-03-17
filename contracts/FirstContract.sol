// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/Strings.sol";

contract FirstContract{

    address public owner;
            
    constructor(){
      owner = msg.sender;
    }
    
    modifier _onlyOwner(){
      require(msg.sender == owner, "Sender is not owner!");
      _;
    }

    function getContract() public view returns(address) {
            return owner;
    }

    function getSender() public view returns(address) {
            return msg.sender;
    }

    function functionOnlyOwnerCanCall() public _onlyOwner {    
    }
}