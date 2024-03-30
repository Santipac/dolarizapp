import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { Dollar } from "../entities/dolar.entity";
import { ConvertionHistory } from "~/infrastructure/interfaces/dolarHistory";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface State {
    quotations: Dollar[]
    error: string
    historyQuotations: ConvertionHistory[]
}

type Actions = {
    setQuoteIntoHistory: (quote: ConvertionHistory) => void
    setQuotations: (quotations: Dollar[]) => void
    setError: (error: string) => void
}

const initialState: State = {
    quotations: [],
    error: '',
    historyQuotations: []
}

export const useStore = create<State & Actions>()(persist((set, get) => ({
    ...initialState,
    setError: (error: string) => set({ error }),
    setQuotations: (quotations: Dollar[]) => set({ quotations }),
    setQuoteIntoHistory: (quote: ConvertionHistory) => set({ historyQuotations: [...get().historyQuotations, quote] })
}), {
    name: 'quotations-storage',
    storage: createJSONStorage(() => AsyncStorage),
}))