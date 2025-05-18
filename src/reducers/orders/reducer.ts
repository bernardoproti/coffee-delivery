import { produce } from 'immer'
import { ActionTypes, type Actions } from './actions'

export interface OrderItem {
  id: number;
  image: string;
  name: string;
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
    default: return state
  }
}
