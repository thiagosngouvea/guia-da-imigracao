// authStore.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


interface User {
  id: number;
  nome: string;
  token: string;
}

interface AuthStore {
  isAuthenticated: boolean;
  user: User | null;
  setUser: (user: User) => void;
  updateUser: (user: User) => void;
  recoveryAuth: any;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(persist(
  (set, get) => ({
    isAuthenticated: !!get()?.user?.token ?? false,
    user: null,
    setUser: (user) => set({ user }),
    updateUser: async (user) => {
      set((state) => ({ user: { ...state.user, ...user }}));
    },
    recoveryAuth: async () => {
      return {
        success: !!get()?.user?.token ?? false,
      };
    },
    logout: async () => {
      useAuthStore.persist.clearStorage();
      //tem que fazer com que o recoveryAuth retorne false
      set({ user: null });
    }
  }),
  {
    name: 'ICONNECT-SESSION', // Nome da chave no localStorage ou AsyncStorage
    storage: createJSONStorage(() => AsyncStorage), // Opcional, mas recomendado
  }
));

export { useAuthStore };
