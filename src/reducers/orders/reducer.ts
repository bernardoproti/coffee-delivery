import { produce } from 'immer'
import { ActionTypes, type Actions } from './actions'

export interface OrderItem {
  id: number;
  image: string;
  name: string;
  price: string;
  quantity: number;
}

export function ordersReducer(state: OrderItem[], action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ORDER:
      return produce(state, (draft) => {
        const orderAlreadyAdded = draft.find(
          (order) => order.id === action.payload.newOrder.id,
        )

        if (orderAlreadyAdded) {
          orderAlreadyAdded.quantity += action.payload.newOrder.quantity
        } else {
          draft.push(action.payload.newOrder)
        }
      })
    case ActionTypes.REMOVE_ORDER:
      return produce(state, (draft) => {
        const orderToRemoveId = draft.findIndex(
          (order) => order.id === action.payload.orderId,
        )
        draft.splice(orderToRemoveId, 1)
      })
    case ActionTypes.INCREMENT_ORDER_QUANTITY:
      return produce(state, (draft) => {
        const orderToIncrement = draft.find(
          (order) => order.id === action.payload.orderId,
        )

        if (orderToIncrement?.id) {
          orderToIncrement.quantity += 1
        }
      })
    case ActionTypes.DECREMENT_ORDER_QUANTITY:
      return produce(state, (draft) => {
        const orderToDecrement = draft.find(
          (order) => order.id === action.payload.orderId,
        )

        if (orderToDecrement?.id && orderToDecrement.quantity > 1) {
          orderToDecrement.quantity -= 1
        }
      })
    default: return state
  }
}
