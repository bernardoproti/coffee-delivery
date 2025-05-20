import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Order } from './components/Order'
import { TextInput } from '../../Form/TextInput'
import { Button } from '../../Form/Button'
import { OrdersContext } from '../../contexts/OrdersContext'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  Bank, CreditCard, CurrencyDollar, MapPin, Money,
} from '@phosphor-icons/react'
import {
  CheckoutFormContainer, UserAdressContainer, AdressFormContainer,
  AdressInfoContainer, AdressTitleContainer, UserPaymentMethodContainer,
  PaymentMethodInfoContainer, PaymentMethodTitleContainer,
  PaymentMethodActionContainer, UserOrderSummaryContainer,
  UserOrderSummaryPrice, CheckoutButtonContainer,
  PaymentErrorMessage,
} from './styles'

type FormInputs = {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'debit' | 'credit' | 'cash'
}

const newUserAdressValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o UF'),
  paymentMethod: zod.enum(
    ['debit', 'credit', 'cash'], {
      message: 'Informe um método de pagamento',
    },
  ),
})

export function Checkout() {
  const { orders, setOrderInfo } = useContext(OrdersContext)
  const {
    register, handleSubmit, watch, setValue, formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newUserAdressValidationSchema),
  })
  const navigate = useNavigate()

  const selectedPaymentMethod = watch('paymentMethod')

  const ordersTotalPrice = orders.reduce((total, order) => {
    const price = parseFloat(order.price.replace(',', '.'))
    return total + price * order.quantity
  }, 0)
  const totalPrice = ordersTotalPrice + 3.50

  function handleNewUserAdress(data: FormInputs) {
    const { street, number, city, state, paymentMethod } = data

    const newOrderInfo = {
      street,
      number,
      city,
      state,
      paymentMethod,
    }
    setOrderInfo(newOrderInfo)

    navigate('/sucess')
  }

  return (
    <CheckoutFormContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <UserAdressContainer>
          <AdressInfoContainer>
            <div>
              <MapPin size={22} />
            </div>

            <AdressTitleContainer>
              <h2>Endereço de Entrega</h2>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </AdressTitleContainer>
          </AdressInfoContainer>
          <AdressFormContainer>
            <form
              onSubmit={handleSubmit(handleNewUserAdress)}
              id="order"
            >
              <TextInput
                gridAreaName="cep"
                placeholder="CEP"
                error={errors.cep}
                {...register('cep')}
              />
              <TextInput
                gridAreaName="street"
                placeholder="Rua"
                error={errors.street}
                {...register('street')}
              />
              <TextInput
                gridAreaName="number"
                placeholder="Número"
                error={errors.number}
                {...register('number')}
              />
              <TextInput
                gridAreaName="complement"
                placeholder="Complemento"
                optional
                error={errors.complement}
                {...register('complement')}
              />
              <TextInput
                gridAreaName="neighborhood"
                placeholder="Bairro"
                error={errors.neighborhood}
                {...register('neighborhood')}
              />
              <TextInput
                gridAreaName="city"
                placeholder="Cidade"
                error={errors.city}
                {...register('city')}
              />
              <TextInput
                gridAreaName="state"
                placeholder="UF"
                error={errors.state}
                {...register('state')}
              />
            </form>
          </AdressFormContainer>
        </UserAdressContainer>
        <UserPaymentMethodContainer>
          <PaymentMethodInfoContainer>
            <div>
              <CurrencyDollar size={22} />
            </div>

            <PaymentMethodTitleContainer>
              <h2>Pagamento</h2>
              <span>
                O pagemento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </PaymentMethodTitleContainer>
          </PaymentMethodInfoContainer>
          <PaymentMethodActionContainer>
            <Button
              isSelected={selectedPaymentMethod === 'credit'}
              onClick={() => setValue('paymentMethod', 'credit')}
            >
              <CreditCard />
              <span>CARTÃO DE CRÉDITO</span>
            </Button>
            <Button
              isSelected={selectedPaymentMethod === 'debit'}
              onClick={() => setValue('paymentMethod', 'debit')}
            >
              <Bank />
              <span>CARTÃO DE DÉBITO</span>
            </Button>
            <Button
              isSelected={selectedPaymentMethod === 'cash'}
              onClick={() => setValue('paymentMethod', 'cash')}
            >
              <Money />
              <span>DINHEIRO</span>
            </Button>
          </PaymentMethodActionContainer>
          {
              errors.paymentMethod
                ? (
                  <PaymentErrorMessage role="alert">
                    {errors.paymentMethod.message}
                  </PaymentErrorMessage>
                  )
                : null
            }
        </UserPaymentMethodContainer>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <UserOrderSummaryContainer>
          {orders.map(order => {
            return (
              <Order
                key={order.id}
                id={order.id}
                image={order.image}
                name={order.name}
                price={order.price}
                quantity={order.quantity}
              />
            )
          })}

          <UserOrderSummaryPrice>
            <div>
              <span>Total de itens</span>
              <span>{
                ordersTotalPrice.toLocaleString(
                  'pt-BR', { style: 'currency', currency: 'BRL' },
                )
              }
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>{
                totalPrice.toLocaleString(
                  'pt-BR', { style: 'currency', currency: 'BRL' },
                )
              }
              </span>
            </div>
          </UserOrderSummaryPrice>

          <CheckoutButtonContainer type="submit" form="order">
            CONFIRMAR PEDIDO
          </CheckoutButtonContainer>
        </UserOrderSummaryContainer>
      </div>
    </CheckoutFormContainer>
  )
}
