import { render, screen, fireEvent } from '@/test/test-utils'
import { useForm } from 'react-hook-form'

import { MaskedInput } from '../masked-input'
import { Form } from '../../ui/form'

const normalizeString = (str: string) => str.replace(/\s/g, '').toLowerCase()

const expectEqualIgnoringWhitespace = (received: string, expected: string) => {
  expect(normalizeString(received)).toBe(normalizeString(expected))
}

describe('MaskedInput', () => {
  const TestComponent = () => {
    const form = useForm({
      defaultValues: {
        amount: 1000
      }
    })

    return (
      <Form {...form}>
        <MaskedInput form={form} name="amount" placeholder="Digite o valor" />
      </Form>
    )
  }

  it('renders correctly with initial value', () => {
    render(<TestComponent />)
    const input = screen.getByPlaceholderText(
      'Digite o valor'
    ) as HTMLInputElement
    expect(input).toBeInTheDocument()
    expectEqualIgnoringWhitespace(input.value, 'R$ 1.000,00')
  })

  it('formats input correctly', () => {
    render(<TestComponent />)
    const input = screen.getByPlaceholderText(
      'Digite o valor'
    ) as HTMLInputElement

    fireEvent.change(input, { target: { value: '2000' } })
    expectEqualIgnoringWhitespace(input.value, 'R$ 20,00')

    fireEvent.change(input, { target: { value: '500' } })
    expectEqualIgnoringWhitespace(input.value, 'R$ 5,00')

    fireEvent.change(input, { target: { value: '12345' } })
    expectEqualIgnoringWhitespace(input.value, 'R$ 123,45')
  })

  it('handles non-numeric input correctly', () => {
    render(<TestComponent />)
    const input = screen.getByPlaceholderText(
      'Digite o valor'
    ) as HTMLInputElement

    fireEvent.change(input, { target: { value: 'abc' } })
    expectEqualIgnoringWhitespace(input.value, 'R$ 0,00')

    fireEvent.change(input, { target: { value: '100abc200' } })
    expectEqualIgnoringWhitespace(input.value, 'R$ 1.002,00')
  })
})
