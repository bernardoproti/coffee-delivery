import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Order } from './components/Order'
import { TextInput } from '../../Form/TextInput'
import { Button } from '../../Form/Button'
import { OrdersContext } from '../../contexts/OrdersContext'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  CheckoutFormContainer, UserAdressContainer, AdressFormContainer,
  AdressInfoContainer, AdressTitleContainer, UserPaymentMethodContainer,
  PaymentMethodInfoContainer, PaymentMethodTitleContainer,
  PaymentMethodActionContainer, UserOrderSummaryContainer,
  UserOrderSummaryPrice, CheckoutButtonContainer,
} from './styles'

type FormInputs = {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
}

const newUserAdressValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe a UF'),
})

export function Checkout() {
  const { orders } = useContext(OrdersContext)
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newUserAdressValidationSchema),
  })
  const navigate = useNavigate()

  const ordersTotalPrice = orders.reduce((total, order) => {
    const price = parseFloat(order.price.replace(',', '.'))
    return total + price * order.quantity
  }, 0)
  const totalPrice = ordersTotalPrice + 3.50

  function handleNewUserAdress(data: object) {
    console.log('Chamei a função de envio do formulário.')
    console.log('data', data)
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
                {...register('street')}
              />
              <TextInput
                gridAreaName="number"
                placeholder="Número"
                {...register('number')}
              />
              <TextInput
                gridAreaName="complement"
                placeholder="Complemento"
                optional
                {...register('complement')}
              />
              <TextInput
                gridAreaName="neighborhood"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              <TextInput
                gridAreaName="city"
                placeholder="Cidade"
                {...register('city')}
              />
              <TextInput
                gridAreaName="state"
                placeholder="UF"
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
            <Button>
              <CreditCard />
              <span>CARTÃO DE CRÉDITO</span>
            </Button>
            <Button>
              <Bank />
              <span>CARTÃO DE DÉBITO</span>
            </Button>
            <Button>
              <Money />
              <span>DINHEIRO</span>
            </Button>
          </PaymentMethodActionContainer>
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
