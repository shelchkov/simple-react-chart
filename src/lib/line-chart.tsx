import React from "react"
import { Axes } from "./axis/axes"
import { AxisT, ChartValue } from "./interfaces"
import { PointsLines } from "./axis/chart/points-lines"
import "./styles/styles.css"
import { getAxisValues, lineChartSize } from "./utils"

interface Props {
  data: ChartValue[]
  axes: AxisT[]
  width?: number
  height?: number
  lineColor?: string
}

export const LineChart = ({
  data,
  axes,
  width = lineChartSize.width,
  height = lineChartSize.height,
  lineColor
}: Props) => {
  const keys = axes.map(({ key }) => key)

  const { values: axisValues, params: axisParams } = getAxisValues(
    height,
    data.map((point) => point[keys[0]])
  )

  const { values: axisValuesHorizontal, params: axisHorizontalParams } =
    getAxisValues(
      width,
      data.map((point) => point[keys[1]])
    )

  return (
    <div className="simple-react-chart">
      <div className="chart">
        <Axes
          axes={axes}
          values={axisValues}
          valuesHorizontal={axisValuesHorizontal}
          width={width}
          height={height}
        />

        <svg className="points-lines" style={{ width, height }}>
          <PointsLines
            points={data}
            keys={keys}
            axisParams={axisParams}
            axisHorizontalParams={axisHorizontalParams}
            height={height}
            color={lineColor}
          />
        </svg>
      </div>
    </div>
  )
}
