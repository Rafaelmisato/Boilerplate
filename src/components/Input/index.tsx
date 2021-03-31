import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { Container } from './styles'

import { mask as masker, unMask } from 'remask'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  labelName: string
  id: string
  name: string
  mask?: string[]
  error?: boolean | string
  inputmode?: string
  onFocus?: string | boolean
  filled?: boolean
  onChange: (maskedValue: string) => void
}

const Input: React.FC<InputProps> = ({
  labelName,
  mask,
  onChange,
  name,
  id,
  ...rest
}) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)
  const [onFocus, setOnfocus] = useState(false)
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [registerField, fieldName])

  const handleChange = (e: { target: { value: string } }) => {
    const filled = e.target.value.length
    if (filled > 0) {
      setFilled(true)
    }
    if (filled === 0) {
      setFilled(false)
    }
    const originalValue = unMask(e.target.value)
    const maskedValue = masker(originalValue, mask)
    onChange(maskedValue)
  }

  return (
    <Container error={error} focus={onFocus} filled={filled}>
      <label htmlFor={id}>
        <span>{labelName}</span>
        <input
          name={name}
          defaultValue={defaultValue}
          ref={inputRef}
          onChange={handleChange}
          onFocus={() => setOnfocus(true)}
          onBlur={() => setOnfocus(false)}
          id={id}
          {...rest}
        />
      </label>
      <div className="rightLine" />
      <div className="leftLine" />
      {error && <p>{error}</p>}
    </Container>
  )
}

export default Input
