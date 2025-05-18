import { createContext, type ReactNode } from 'react'
import { coffees, type CoffeesType } from './Coffees'

interface OrdersContextType {
  coffees: CoffeesType;
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
