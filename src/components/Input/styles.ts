import styled from 'styled-components'

interface ErrorProps {
  error: boolean | string
  focus: boolean
  filled: boolean
}

export const Container = styled.div<ErrorProps>`
  width: 300px;
  border-bottom: ${({ error }) =>
    error ? '1px solid red' : '1px solid rgba(0,0,0,0.25)'};
  margin-bottom: 40px;
  position: relative;

  > label span {
    position: absolute;
    bottom: ${({ focus, filled }) => (focus || filled ? '34px' : '8px')};
    left: ${({ focus, filled }) => (focus || filled ? '6px' : '12px')};
    font-size: ${({ focus, filled }) => (focus || filled ? '14px' : '18px')};
    font-weight: 300;
    color: ${({ error }) => (error ? 'red' : 'rgba(0,0,0,0.25)')};
    cursor: text;
    transition: all 0.1s linear;
  }

  input {
  }

  .rightLine {
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: ${({ focus, filled }) => (focus || filled ? '50%' : '0%')};
    height: 3px;
    background: ${({ error }) => (error ? 'red' : '')};
    transition: all 0.25s linear;
  }
  .leftLine {
    position: absolute;
    bottom: -2px;
    right: 50%;
    width: ${({ focus, filled }) => (focus || filled ? '50%' : '0%')};
    height: 3px;
    background: ${({ error }) => (error ? 'red' : '')};
    transition: all 0.25s linear;
  }

  p {
    font-size: 12px;
    position: absolute;
    bottom: -16px;
    color: red;
  }
`
