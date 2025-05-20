import {
  createContext, useReducer, useState, useEffect, type ReactNode,
} from 'react'
import { coffees, type CoffeesType } from './Coffees'
import type { OrderItem } from '../reducers/orders/reducer'
import { ordersReducer } from '../reducers/orders/reducer'
import {
  addNewOrderAction,
  removeOrderAction,
  incrementOrderQuantiyAction,
  decrementOrderQuantiyAction,
} from '../reducers/orders/actions'

interface OrderUserInfo {
  street: string;
  number: string;
  city: string;
  state: string;
  paymentMethod: string;
}

interface OrdersContextType {
  coffees: CoffeesType;
  orders: OrderItem[];
  orderInfo: OrderUserInfo;
  setOrderInfo: (info: OrderUserInfo) => void;
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
  const [orders, dispatch] = useReducer(
    ordersReducer,
    [],
    (state) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:orders-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return state
    },
  )
  const [orderInfo, setOrderInfo] = useState<OrderUserInfo>({
    street: '',
    number: '',
    city: '',
    state: '',
    paymentMethod: '',
  })

  useEffect(() => {
    if (orders) {
      const stateJSON = JSON.stringify(orders)

      localStorage.setItem('@coffee-delivery:orders-1.0.0', stateJSON)
    }
  }, [orders])

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
      orderInfo,
      setOrderInfo,
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
