import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 1440px;
    margin: 0 auto;
    background: ${props => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: 0;
  }

  body, input, textarea, button {
    ${mixins.fonts.textM};
  }
`
