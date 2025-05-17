import { createContext, type ReactNode } from 'react'
import { coffees, type coffeesType } from './Coffees'

interface OrdersContextType {
  coffees: coffeesType;
}

interface OrdersContextProviderProps {
  children: ReactNode;
}

export const OrdersContext = createContext({} as OrdersContextType)

export function OrdersContextProvider(
  { children }: OrdersContextProviderProps,
) {
  return (
    <OrdersContext.Provider value={{ coffees }}>
      {children}
    </OrdersContext.Provider>
  )
}
