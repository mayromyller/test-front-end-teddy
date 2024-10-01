import { render } from '@/test/test-utils'
import { Header } from '../header'

describe('Header component', () => {
  it('should render the clients link with the active attribute', () => {
    const screen = render(<Header />, {}, ['/clients'])

    const clients = screen.getByRole('link', { name: 'Clientes' }).dataset
      .active
    const activeClients = screen.getByRole('link', {
      name: 'Clientes selecionados'
    }).dataset.active
    const exit = screen.getByRole('link', { name: 'Sair' }).dataset.active

    expect(clients).toEqual('true')
    expect(activeClients).toEqual('false')
    expect(exit).toEqual('false')
  })

  it('should render the selected clients link with the active attribute', () => {
    const screen = render(<Header />, {}, ['/selected-clients'])

    const clients = screen.getByRole('link', { name: 'Clientes' }).dataset
      .active
    const activeClients = screen.getByRole('link', {
      name: 'Clientes selecionados'
    }).dataset.active
    const exit = screen.getByRole('link', { name: 'Sair' }).dataset.active

    expect(activeClients).toEqual('true')
    expect(clients).toEqual('false')
    expect(exit).toEqual('false')
  })
})
