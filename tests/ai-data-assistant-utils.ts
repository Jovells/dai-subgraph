import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  RideCompleted,
  RideScheduled,
  ServiceAuthorized,
  ServiceRevoked,
  SubscriptionPurchased
} from "../generated/AIDataAssistant/AIDataAssistant"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRideCompletedEvent(
  rideId: Bytes,
  rider: Address,
  driver: Address
): RideCompleted {
  let rideCompletedEvent = changetype<RideCompleted>(newMockEvent())

  rideCompletedEvent.parameters = new Array()

  rideCompletedEvent.parameters.push(
    new ethereum.EventParam("rideId", ethereum.Value.fromFixedBytes(rideId))
  )
  rideCompletedEvent.parameters.push(
    new ethereum.EventParam("rider", ethereum.Value.fromAddress(rider))
  )
  rideCompletedEvent.parameters.push(
    new ethereum.EventParam("driver", ethereum.Value.fromAddress(driver))
  )

  return rideCompletedEvent
}

export function createRideScheduledEvent(
  rideId: Bytes,
  rider: Address,
  amount: BigInt
): RideScheduled {
  let rideScheduledEvent = changetype<RideScheduled>(newMockEvent())

  rideScheduledEvent.parameters = new Array()

  rideScheduledEvent.parameters.push(
    new ethereum.EventParam("rideId", ethereum.Value.fromFixedBytes(rideId))
  )
  rideScheduledEvent.parameters.push(
    new ethereum.EventParam("rider", ethereum.Value.fromAddress(rider))
  )
  rideScheduledEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rideScheduledEvent
}

export function createServiceAuthorizedEvent(
  user: Address,
  service: string
): ServiceAuthorized {
  let serviceAuthorizedEvent = changetype<ServiceAuthorized>(newMockEvent())

  serviceAuthorizedEvent.parameters = new Array()

  serviceAuthorizedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  serviceAuthorizedEvent.parameters.push(
    new ethereum.EventParam("service", ethereum.Value.fromString(service))
  )

  return serviceAuthorizedEvent
}

export function createServiceRevokedEvent(
  user: Address,
  service: string
): ServiceRevoked {
  let serviceRevokedEvent = changetype<ServiceRevoked>(newMockEvent())

  serviceRevokedEvent.parameters = new Array()

  serviceRevokedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  serviceRevokedEvent.parameters.push(
    new ethereum.EventParam("service", ethereum.Value.fromString(service))
  )

  return serviceRevokedEvent
}

export function createSubscriptionPurchasedEvent(
  user: Address,
  expiresAt: BigInt
): SubscriptionPurchased {
  let subscriptionPurchasedEvent = changetype<SubscriptionPurchased>(
    newMockEvent()
  )

  subscriptionPurchasedEvent.parameters = new Array()

  subscriptionPurchasedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  subscriptionPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "expiresAt",
      ethereum.Value.fromUnsignedBigInt(expiresAt)
    )
  )

  return subscriptionPurchasedEvent
}
