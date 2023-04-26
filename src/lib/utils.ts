import { AxisParams, AxisValue, ChartSize } from "./interfaces"

export const lineChartSize: ChartSize = {
  height: 200,
  width: 400
}

const letterWidth = 8
const axisStepPadding = 20
const axisStep = 30
export const chartVerticalPadding = 20

export const mergeStyles = (...styles: (string | boolean | undefined)[]) =>
  styles.reduce(
    (acc: string, style) =>
      typeof style === "string" ? `${acc} ${style}` : acc,
    ""
  )

const isNumbersArray = (array: string[] | number[]): array is number[] => typeof array[0] === "number"

const getAxisParams = (
  length: number,
  values: string[] | number[]
): AxisParams => {
  if (isNumbersArray(values)) {
    let [min, max] = values.reduce(
      (acc, value) => {
        if (acc[0] > value) {
          acc[0] = value
        }

        if (acc[1] < value) {
          acc[1] = value
        }

        return acc
      },
      [values[0], values[0]]
    )

    min = Math.floor(min)
    max = Math.ceil(max)

    return {
      min,
      step: axisStep,
      coefficient: length / (max - min),
      numberOfValues: Math.ceil(length / axisStep)
    }
  }

  const maxLength = values.reduce(
    (acc, value) => (value.length > acc ? value.length : acc),
    0
  )

  let step = maxLength * letterWidth + axisStepPadding
  const coefficient = length / values.length
  let numberOfValues = Math.ceil(length / step)

  if (values.length < numberOfValues) {
    numberOfValues = values.length
    step = length / numberOfValues
  }

  return { min: 0, step, coefficient, numberOfValues }
}

export const getAxisValues = (
  totalLength: number,
  values: (string | number)[]
): { values: AxisValue[]; params: AxisParams } => {
  const params = getAxisParams(totalLength, values)
  const { min, step, coefficient, numberOfValues } = params

  const base = new Array(numberOfValues).fill(1)

  if (typeof values[0] === "string") {
    const { length } = values
    const coefficient = length / numberOfValues

    return {
      values: base.map((_, index) => ({
        position: index * step,
        value: values[Math.floor(coefficient * index)]
      })),
      params
    }
  }

  return {
    values: base.map((_, index) => ({
      position: index * step,
      value: min + (index * step) / coefficient
    })),
    params
  }
}

export const trimValue = (value: number | string, length = 3) => {
  if (typeof value !== "number") {
    return value
  }

  const integer = Math.trunc(value)
  const fraction = value - integer

  if (fraction === 0) {
    return value
  }

  let newValue = `${integer}`

  if (newValue.length < length) {
    newValue += `${fraction}`.slice(1, length - newValue.length + 2)
  }

  return parseFloat(newValue)
}
