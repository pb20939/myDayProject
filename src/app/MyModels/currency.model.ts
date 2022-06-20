export type CurrencyData = Root2[]

export interface Root2 {
  table: string
  no: string
  tradingDate: string
  effectiveDate: string
  rates: Rate[]
}

export interface Rate {
  currency: string
  code: string
  bid: number
  ask: number
}
