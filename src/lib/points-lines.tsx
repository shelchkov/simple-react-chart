import React from "react"
import { ChartValue } from "./interfaces"
import { lineChartSize } from "./utils"

interface Props {
  points: ChartValue[]
  keys: string[]
  coefficient?: number
}

export const PointsLines = ({ points, keys, coefficient = 1 }: Props) => {
  const [key1, key2] = keys
  const { height } = lineChartSize

  return (
    <svg className="points-lines">
      {points.map((point, index) =>
        index === 0
          ? undefined
          : (
          <line
            stroke="black"
            x1={points[index - 1][key2] * coefficient}
            y1={height - points[index - 1][key1] * coefficient}
            x2={point[key2] * coefficient}
            y2={height - point[key1] * coefficient}
          />
            )
      )}
    </svg>
  )
}
