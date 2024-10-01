import { render, screen, fireEvent } from '@/test/test-utils'
import { ClientsSelected } from '../clients-selected'
import {
  useSelectedClientsList,
  useSelectedClientsActions
} from '@/store/useSelectedClients'

vi.mock('@/store/useSelectedClients', () => ({
  useSelectedClientsList: vi.fn(),
  useSelectedClientsActions: vi.fn()
}))

describe('ClientsSelected', () => {
  const mockClientsList = [
    { id: 1, name: 'Cliente 1', salary: 5000, companyValuation: 10000 },
    { id: 2, name: 'Cliente 2', salary: 6000, companyValuation: 12000 }
  ]

  const mockClearClients = vi.fn()
  const mockAddClient = vi.fn()
  const removeClient = vi.fn()

  beforeEach(() => {
    vi.mocked(useSelectedClientsList).mockReturnValue(mockClientsList)

    vi.mocked(useSelectedClientsActions).mockReturnValue({
      addClient: mockAddClient,
      clearClients: mockClearClients,
      removeClient: removeClient
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  test('should show the list of selected clients when there are clients in the list', () => {
    const component = render(<ClientsSelected />)

    expect(screen.getByText('Clientes selecionados:')).toBeInTheDocument()

    mockClientsList.forEach((client) => {
      expect(screen.getByTestId(`client-card-${client.id}`)).toBeInTheDocument()
      expect(screen.getByText(client.name)).toBeInTheDocument()
    })

    component.debug()
  })

  test(' should display the message "Não há clientes selecionados" when there are no clients in the list', () => {
    vi.mocked(useSelectedClientsList).mockReturnValue([])

    render(<ClientsSelected />)

    expect(screen.getByText('Não há clientes selecionados')).toBeInTheDocument()
  })

  test('should call clearClients when the "Limpar clientes selecionados" button is clicked', () => {
    render(<ClientsSelected />)

    const clearButton = screen.getByText('Limpar clientes selecionados')

    fireEvent.click(clearButton)

    expect(mockClearClients).toHaveBeenCalled()
  })
})
