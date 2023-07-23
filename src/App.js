import React from 'react'
import {
  Input,
  Normalize,
  Box,
  Form,
  FormField,
  FormFieldLabel,
} from '@smooth-ui/core-sc'

import { Signature } from './Signature'

function Field({ state, setState, name, type, label, placeholder }) {
  return (
    <FormField>
      <FormFieldLabel name={name}>{label}</FormFieldLabel>
      <Input
        type={type}
        width={1}
        name={name}
        placeholder={placeholder}
        value={state[name]}
        onChange={({ target: { value } }) =>
          setState(previous => ({ ...previous, [name]: value }))
        }
      />
    </FormField>
  )
}

function useForm(initialState) {
  const [state, setState] = React.useState(initialState)
  return { state, setState }
}

const App = () => {
  const form = useForm({
    firstname: 'Seu nome',
    email: '@grupoafr.com.br',
    position: 'Cargo',
    phone: '(11) 99821-8365 / (11) 22891226',
    address: 'Av. Paulista, 302 - Bela Vista - SP',
  })

  return (
    <Box mx="auto" maxWidth={1180} p="20rpx">
      <Normalize />
      <Box display="flex" justifyContent="center" my={45}>
        <h1>Sistema de assinatura - The Grace</h1>
      </Box>
      <Box row mx="-20rpx">
        <Box col={{ xs: 1, md: 0.5 }} px="-20rpx">
          <Form>
            <Field
              {...form}
              name="firstname"
              label="Nome"
              placeholder="Nome"
            />
           
            <Field
              {...form}
              name="position"
              label="Cargo"
              placeholder="Cargo"
            />
            <Field
              {...form}
              name="phone"
              label="Telefone"
              placeholder="Telefone"
            />
            <Field
              {...form}
              name="address"
              label="Endereço"
              placeholder="Endereço"
            />
          </Form>
        </Box>

        <Box col={{ xs: 1, md: 0.5 }} mt={{ xs: '20rpx', md: 0 }} px="20rpx">
          <Box border={0} borderColor="#3261AB" borderRadius=".25rem">
            <Signature {...form.state} />
          </Box>
        </Box>
        
      </Box>
    </Box>
  )
}

export default App
