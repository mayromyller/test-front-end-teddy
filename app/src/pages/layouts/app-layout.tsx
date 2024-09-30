import { Header } from '@/components/app-components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <>
      <Header />

      <div className="px-5 bg-neutral-100 min-h-dvh">
        <div className="w-full md:pt-[30px] pt-5 max-w-[1200px] mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}
