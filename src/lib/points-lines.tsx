import React from "react"
import { AxisParams, ChartValue } from "./interfaces"
import { lineChartSize } from "./utils"

interface Props {
  points: ChartValue[]
  keys: string[]
  axisParams: AxisParams
  axisHorizontalParams: AxisParams
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
  axisHorizontalParams
}: Props) => {
  const [key1, key2] = keys
  const { height } = lineChartSize
  const { coefficient, min } = axisParams
  const { coefficient: coefficient2, min: min2 } = axisHorizontalParams

  return (
    <svg className="points-lines">
      {points.map((point, index) =>
        index === 0
          ? undefined
          : (
          <line
            stroke="black"
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
    </svg>
  )
}
