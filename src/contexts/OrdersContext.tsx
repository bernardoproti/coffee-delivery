import { createContext, useReducer, type ReactNode } from 'react'
import { coffees, type CoffeesType } from './Coffees'
import type { OrderItem } from '../reducers/orders/reducer'
import { ordersReducer } from '../reducers/orders/reducer'
import {
  addNewOrderAction,
  removeOrderAction,
  incrementOrderQuantiyAction,
  decrementOrderQuantiyAction,
} from '../reducers/orders/actions'

interface OrdersContextType {
  coffees: CoffeesType;
  orders: OrderItem[];
  addNewOrder: (newOrder: OrderItem) => void;
  removeOrder: (orderId: number) => void;
  incrementOrder: (orderId: number) => void;
  decrementOrder: (orderId: number) => void;
}

interface OrdersContextProviderProps {
  children: ReactNode;
}

export const OrdersContext = createContext({} as OrdersContextType)

export function OrdersContextProvider({
  children,
}: OrdersContextProviderProps) {
  const [orders, dispatch] = useReducer(ordersReducer, [])

  function addNewOrder(newOrder: OrderItem) {
    dispatch(addNewOrderAction(newOrder))
  }

  function removeOrder(orderId: number) {
    dispatch(removeOrderAction(orderId))
  }

  function incrementOrder(orderId: number) {
    dispatch(incrementOrderQuantiyAction(orderId))
  }

  function decrementOrder(orderId: number) {
    dispatch(decrementOrderQuantiyAction(orderId))
  }

  return (
    <OrdersContext.Provider value={{
      coffees,
      orders,
      addNewOrder,
      removeOrder,
      incrementOrder,
      decrementOrder,
    }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
