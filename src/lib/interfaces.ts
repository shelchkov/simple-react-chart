export type ChartValue = Record<string, number | string>

export interface AxisT {
  name?: string
  key: string
}

export interface ChartSize {
  height: number
  width: number
}

export interface AxisParams {
  min: number
  step: number
  coefficient: number
  numberOfValues: number
}

export interface AxisValue {
  position: number
  value: number | string
}
