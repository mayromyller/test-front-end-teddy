import { render, screen, fireEvent, waitFor } from '@/test/test-utils'

import { useSessionUser } from '@/store/user/useSessionUser'
import { Session } from '../session'

vi.mock('@/store/user/useSessionUser', () => ({
  useSessionUser: vi.fn()
}))

describe('Session Component', () => {
  it('renders correctly and handles user interactions', async () => {
    const mockStartSession = vi.fn()
    const mockEndSession = vi.fn()

    vi.mocked(useSessionUser).mockReturnValue({
      name: '',
      startSession: mockStartSession,
      endSession: mockEndSession
    })

    render(<Session />)

    expect(screen.getByText('Olá, seja bem-vindo!')).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText('Digite o seu nome:')
    ).toBeInTheDocument()

    const enterButton = screen.getByText('Entrar')
    expect(enterButton).toBeInTheDocument()

    fireEvent.click(enterButton)

    expect(
      await screen.findByText('Por favor digite seu nome')
    ).toBeInTheDocument()

    const input = screen.getByPlaceholderText('Digite o seu nome:')
    fireEvent.change(input, { target: { value: 'John Doe' } })

    fireEvent.click(enterButton)

    await waitFor(() => expect(mockStartSession).toHaveBeenCalled())
  })
})
