/// @title A title that should describe the contract/interface
/// @Eduardo Barbosa The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details

// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract HelloWorld{
    string public message = "Hello World!!!";

    function setMessage (string memory newMessage) public {
        message = newMessage;
    }
}