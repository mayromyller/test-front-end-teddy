import { useReducer } from 'react'
import { UseFormReturn, FieldValues, Path } from 'react-hook-form'
import { FormField, FormItem, FormControl, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

type MaskedInputProps<T extends FieldValues> = {
  form: UseFormReturn<T>
  name: Path<T>
  placeholder: string
}

const moneyFormatter = Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  currencyDisplay: 'symbol',
  currencySign: 'standard',
  style: 'currency',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export function MaskedInput<T extends FieldValues>({
  form,
  name,
  placeholder
}: MaskedInputProps<T>) {
  const initialValue = form.getValues()[name]
    ? moneyFormatter.format(form.getValues()[name] as number)
    : ''

  const [value, setValue] = useReducer((_: string, next: string) => {
    const digits = next.replace(/\D/g, '')
    return moneyFormatter.format(Number(digits) / 100)
  }, initialValue)

  function handleChange(
    realChangeFn: (value: number) => void,
    formattedValue: string
  ) {
    const digits = formattedValue.replace(/\D/g, '')
    const realValue = Number(digits) / 100
    realChangeFn(realValue)
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const fieldValue = value
        const _change = field.onChange

        return (
          <FormItem>
            <FormControl>
              <Input
                placeholder={placeholder}
                type="text"
                className="h-[40px] border-2 text-base border-[#D9D9D9] placeholder:text-[#AAAAAA] focus:border-neutral-400 focus-visible:ring-0 focus:outline-none rounded-sm"
                {...field}
                onChange={(ev) => {
                  setValue(ev.target.value)
                  handleChange(_change, ev.target.value)
                }}
                value={fieldValue}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
