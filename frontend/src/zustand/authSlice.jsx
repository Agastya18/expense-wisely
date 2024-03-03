import { create } from 'zustand'


export const useAuthStore = create((set) => ({
    authUser: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')) : null,
    
    setAuthUser: (user) => set({ authUser: localStorage.setItem('userInfo', JSON.stringify(user)) }),
    logout: () => set({ authUser: localStorage.removeItem('userInfo')}),
   
  
}));