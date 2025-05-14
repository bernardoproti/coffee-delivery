import { Minus, Plus } from 'phosphor-react'
import { Container } from './styles'

export function QuantityInput() {
  return (
    <Container>
      <button>
        <Minus size={14} />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} />
      </button>
    </Container>
  )
}
