import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface SessionUser {
  name: string
  startSession: (name: string) => void
  endSession: () => void
}

const sessionUserStore = create<SessionUser>()(
  persist(
    (set) => ({
      name: '',
      startSession: (name: string) => {
        set({ name })
      },
      endSession: () => {
        set({ name: '' })
      }
    }),
    {
      name: '@teddy-app/session-user',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export function useSessionUser() {
  const sessionUser = sessionUserStore((state) => state)

  return sessionUser
}
