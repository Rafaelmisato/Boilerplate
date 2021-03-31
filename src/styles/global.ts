import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  font-weight: 400;
}

img {
  object-fit: contain;
}

body {
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
}

select {
  -webkit-appearance:none;
}

input, button{
  outline: none;
}

button {
  cursor: pointer;
  padding: 12px 36px;
  border: none;
  background: ${props => props.theme.colors.primary};
  border-radius: 8px;
  letter-spacing: 1px;
  font-size: 18px;
  color: #fff;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);

  &:hover {
  -webkit-box-shadow: 0px 0px 8px 1px ${props => props.theme.colors.primary};
  box-shadow: 0px 0px 8px 1px ${props => props.theme.colors.primary};
  transition: all 0.25s linear;
  }
}

input {
  font-size: 18px;
  width: 100%;
  border: none;
  font-size: 18px;
  background: ${props => props.theme.colors.background};
  padding: 8px;
  color: ${props => props.theme.colors.text};
  font-weight: 300;
}

/* input border class */
.rightLine {
  background: ${props => props.theme.colors.primary}
}
.leftLine {
  background: ${props => props.theme.colors.primary}
}
`
