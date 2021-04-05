pragma solidity ^0.7.0;

contract COUNTER {
    uint256 public count = 0;
    event Increment(uint256);

    function increment() public {
        count += 1;
        emit Increment(count);
    }

    function reset() public {
        count = 0;
    }
}
