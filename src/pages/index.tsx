import React, { useRef } from 'react'

import Input from '../components/Input'
import Button from '../components/Button'
import * as Yup from 'yup'

import { Form } from '@unform/web'

const Home: React.FC = () => {
  const formRef = useRef(null)

  const handleSubmit = async data => {
    try {
      const schema = Yup.object().shape({
        userName: Yup.string().required('Nome obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref('senha')],
          'A senha e a confirmação não estão iguais'
        )
      })
      await schema.validate(data, {
        abortEarly: false
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {}

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })
        formRef.current.setErrors(errorMessages)
      }
    }
  }

  return (
    <>
      <h1>Hello world</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          labelName="Nome"
          name="userName"
          id="userName"
          type="text"
          mask={['']}
          onChange={() => null}
        />
        <Input
          labelName="Senha"
          name="password"
          id="password"
          type="password"
          mask={['']}
          onChange={() => null}
        />
        <Input
          labelName="Confirmação de senha"
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          mask={['']}
          onChange={() => null}
        />
        <Button name="Enviar" />
      </Form>
    </>
  )
}

export default Home
