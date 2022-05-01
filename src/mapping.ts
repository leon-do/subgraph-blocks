import { BigInt } from "@graphprotocol/graph-ts";
import { Contract, Approval, ApprovalForAll, OwnershipTransferred, Transfer } from "../generated/Contract/Contract";
import { Block } from "../generated/schema";
import { ethereum } from '@graphprotocol/graph-ts'

export function handleBlock(block: ethereum.Block): void {
  let entity = new Block("latest");
  entity.block = block.number.toI32();
  entity.save();
}
