import type { OrderItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
  REMOVE_ORDER = 'REMOVE_ORDER',
}

export type Actions =
  | {
    type: ActionTypes.ADD_NEW_ORDER,
    payload: {
      newOrder: OrderItem
    }
  }
  | {
    type: ActionTypes.REMOVE_ORDER,
    payload: {
      orderId: number
    }
  }

export function addNewOrderAction(newOrder: OrderItem) {
  return {
    type: ActionTypes.ADD_NEW_ORDER,
    payload: {
      newOrder,
    },
  } satisfies Actions
}

export function removeOrderAction(orderId: number) {
  return {
    type: ActionTypes.REMOVE_ORDER,
    payload: {
      orderId,
    },
  } satisfies Actions
}
