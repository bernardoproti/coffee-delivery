import type { OrderItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
  REMOVE_ORDER = 'REMOVE_ORDER',
  INCREMENT_ORDER_QUANTITY = 'INCREMENT_ORDER_QUANTITY',
  DECREMENT_ORDER_QUANTITY = 'DECREMENT_ORDER_QUANTITY',
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
  | {
    type: ActionTypes.INCREMENT_ORDER_QUANTITY,
    payload: {
      orderId: number
    }
  }
  | {
    type: ActionTypes.DECREMENT_ORDER_QUANTITY,
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

export function incrementOrderQuantiyAction(orderId: number) {
  return {
    type: ActionTypes.INCREMENT_ORDER_QUANTITY,
    payload: {
      orderId,
    },
  } satisfies Actions
}

export function decrementOrderQuantiyAction(orderId: number) {
  return {
    type: ActionTypes.DECREMENT_ORDER_QUANTITY,
    payload: {
      orderId,
    },
  } satisfies Actions
}
