import {
  OwnershipTransferred as OwnershipTransferredEvent,
  RideCompleted as RideCompletedEvent,
  RideScheduled as RideScheduledEvent,
  ServiceAuthorized as ServiceAuthorizedEvent,
  ServiceRevoked as ServiceRevokedEvent,
  SubscriptionPurchased as SubscriptionPurchasedEvent
} from "../generated/AIDataAssistant/AIDataAssistant"
import {
  OwnershipTransferred,
  RideCompleted,
  RideScheduled,
  ServiceAuthorized,
  ServiceRevoked,
  SubscriptionPurchased
} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRideCompleted(event: RideCompletedEvent): void {
  let entity = new RideCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.rideId = event.params.rideId
  entity.rider = event.params.rider
  entity.driver = event.params.driver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRideScheduled(event: RideScheduledEvent): void {
  let entity = new RideScheduled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.rideId = event.params.rideId
  entity.rider = event.params.rider
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleServiceAuthorized(event: ServiceAuthorizedEvent): void {
  let entity = new ServiceAuthorized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.service = event.params.service

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleServiceRevoked(event: ServiceRevokedEvent): void {
  let entity = new ServiceRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.service = event.params.service

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubscriptionPurchased(
  event: SubscriptionPurchasedEvent
): void {
  let entity = new SubscriptionPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.expiresAt = event.params.expiresAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
