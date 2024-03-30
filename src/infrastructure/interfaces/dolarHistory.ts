export enum CONVERTION {
    ARS_TO_USD = 'ARS_TO_USD',
    USD_TO_ARS = 'USD_TO_ARS',
}

export interface ConvertionHistory {
    type: CONVERTION
    exchange: string
    sellPrice: number
    buyPrice: number
    date: string
}