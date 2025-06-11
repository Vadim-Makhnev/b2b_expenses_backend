import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  displayName: string;
  picture: string;
  role: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'user-storage',
    }
  )
);
