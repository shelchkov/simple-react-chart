import React from "react"
import { AxisParams, ChartValue } from "../../interfaces"
import { colors } from "../../utils/theme"

interface Props {
  points: ChartValue[]
  keys: string[]
  axisParams: AxisParams
  axisHorizontalParams: AxisParams
  height: number
  color?: string
}

const getX = (
  point: ChartValue,
  key: string,
  index: number,
  coefficient: number,
  min: number
) => {
  if (typeof point[key] === "number") {
    return ((point[key] as number) - min) * coefficient
  }

  return index * coefficient
}

const getY = (
  point: ChartValue,
  key: string,
  index: number,
  coefficient: number,
  height: number,
  min: number
) => {
  if (typeof point[key] === "number") {
    return height - ((point[key] as number) - min) * coefficient
  }

  return index
}

export const PointsLines = ({
  points,
  keys,
  axisParams,
  axisHorizontalParams,
  height,
  color = colors.blacks[0]
}: Props) => {
  const [key1, key2] = keys
  const { coefficient, min } = axisParams
  const { coefficient: coefficient2, min: min2 } = axisHorizontalParams

  return (
    <>
      {points.map((point, index) =>
        index === 0
          ? undefined
          : (
          <line
            stroke={color}
            x1={getX(points[index - 1], key2, index - 1, coefficient2, min2)}
            y1={getY(
              points[index - 1],
              key1,
              index - 1,
              coefficient,
              height,
              min
            )}
            x2={getX(point, key2, index, coefficient2, min2)}
            y2={getY(point, key1, index, coefficient, height, min)}
            key={`${point[key1]}-${point[key2]}`}
          />
            )
      )}
    </>
  )
}
