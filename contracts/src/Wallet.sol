// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.12;

import {IEntryPoint} from "account-abstraction/interfaces/IEntryPoint.sol";

contract Wallet {
    address public immutable walletFactory;
    IEntryPoint private immutable _entryPoint;

    constructor(IEntryPoint anEntryPoint, address outWalletFactory) {
        _entryPoint = anEntryPoint;
        walletFactory = outWalletFactory;
    }
}
