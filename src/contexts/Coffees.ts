import american from '/images/coffees/american.svg'
import arabian from '/images/coffees/arabian.svg'
import capuccino from '/images/coffees/capuccino.svg'
import coffeeWithMilk from '/images/coffees/coffee-with-milk.svg'
import coldCoffee from '/images/coffees/cold-coffee.svg'
import creamyEspresso from '/images/coffees/creamy-espresso.svg'
import cuban from '/images/coffees/cuban.svg'
import espresso from '/images/coffees/espresso.svg'
import hawaiian from '/images/coffees/hawaiian.svg'
import hotChocolate from '/images/coffees/hot-chocolate.svg'
import irish from '/images/coffees/irish.svg'
import latte from '/images/coffees/latte.svg'
import macchiato from '/images/coffees/macchiato.svg'
import mochaccino from '/images/coffees/mochaccino.svg'

export const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    image: espresso,
    types: ['TRADICIONAL'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    image: american,
    types: ['TRADICIONAL'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    image: creamyEspresso,
    types: ['TRADICIONAL'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    image: coldCoffee,
    types: ['TRADICIONAL', 'GELADO'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
  },
  {
    id: 5,
    name: 'Café com Leite',
    image: coffeeWithMilk,
    types: ['TRADICIONAL', 'COM LEITE'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
  },
  {
    id: 6,
    name: 'Latte',
    image: latte,
    types: ['TRADICIONAL', 'COM LEITE'],
    description:
    'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
  },
  {
    id: 7,
    name: 'Capuccino',
    image: capuccino,
    types: ['TRADICIONAL', 'COM LEITE'],
    description:
    'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
  },
  {
    id: 8,
    name: 'Macchiato',
    image: macchiato,
    types: ['TRADICIONAL', 'COM LEITE'],
    description:
    'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
  },
  {
    id: 9,
    name: 'Mocaccino',
    image: mochaccino,
    types: ['TRADICIONAL', 'COM LEITE'],
    description:
    'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    image: hotChocolate,
    types: ['ESPECIAL', 'COM LEITE'],
    description:
    'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
  },
  {
    id: 11,
    name: 'Cubano',
    image: cuban,
    types: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    description:
    'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
  },
  {
    id: 12,
    name: 'Havaiano',
    image: hawaiian,
    types: ['ESPECIAL'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
  },
  {
    id: 13,
    name: 'Árabe',
    image: arabian,
    types: ['ESPECIAL'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
  },
  {
    id: 14,
    name: 'Irlandês',
    image: irish,
    types: ['ESPECIAL', 'ALCOÓLICO'],
    description: 'Bebida à base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
  },
]
