export type PlanetData = Root;


export interface Root
{
  _id: Id
  name: string
  orderFromSun: OrderFromSun
  hasRings: boolean
  mainAtmosphere: string[]
  surfaceTemperatureC: SurfaceTemperatureC
}

export interface Id {
  $oid: string
}

export interface OrderFromSun {
  $numberInt: string
}

export interface SurfaceTemperatureC {
  min: any
  max: any
  mean: Mean
}

export interface Mean {
  $numberInt: string
}
