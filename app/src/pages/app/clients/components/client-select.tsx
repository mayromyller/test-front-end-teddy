import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export function ClientSelect() {
  return (
    <Select defaultValue="16">
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="selecione um valor" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup defaultValue={16}>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="8">8</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="12">12</SelectItem>
          <SelectItem value="16">16</SelectItem>
          <SelectItem value="20">20</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
