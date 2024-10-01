import logoTeddy from '@/assets/Logo-Teddy.png'
import { NavLink } from './nav-link'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useSessionUser } from '@/store/user/useSessionUser'
import { useSelectedClientsActions } from '@/store/useSelectedClients'

export function Header() {
  const { name, endSession } = useSessionUser()
  const { clearClients } = useSelectedClientsActions()

  function handleFinishSession() {
    endSession()
    clearClients()
  }

  return (
    <header className="flex items-center px-5 w-full py-[18px] bg-white shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.1)]">
      <div className="w-full max-w-[1200px] flex flex-row mx-auto justify-between items-center relative">
        <img
          alt="Logotipo da Teddy Open Finance"
          src={logoTeddy}
          className="md:w-[100px] md:h-[49px] w-[70px] h-[35px]"
        />

        <nav className="hidden md:flex flex-row items-center space-x-[33px]">
          <NavLink to="/clients">Clientes</NavLink>
          <NavLink to="/selected-clients">Clientes selecionados</NavLink>
          <NavLink to="/" onClick={handleFinishSession}>
            Sair
          </NavLink>
        </nav>

        <p className="hidden md:block text-base text-black max-w-[186px] truncate">
          Olá, <strong>{name}</strong>
        </p>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden border-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>

            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" aria-describedby="menu">
          <SheetTitle className="sr-only">Mobile menu options</SheetTitle>
          <SheetDescription className="sr-only">
            The menu options for mobile devices
          </SheetDescription>

          <nav className="flex flex-col space-y-[33px]">
            <NavLink to="/clients">Clientes</NavLink>
            <NavLink to="/selected-clients">Clientes selecionados</NavLink>
            <NavLink to="/">Sair</NavLink>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
