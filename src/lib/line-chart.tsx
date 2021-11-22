import React from "react"
import { Axes } from "./axes"
import { AxisT, ChartValue } from "./interfaces"
import { PointsLines } from "./points-lines"
import "./styles.css"
import { getAxisValues, lineChartSize } from "./utils"

interface Props {
  data: ChartValue[]
  axes: AxisT[]
}

export const LineChart = ({ data, axes }: Props) => {
  const keys = axes.map(({ key }) => key)

  const { values: axisValues, params: axisParams } = getAxisValues(
    lineChartSize.height,
    data.map((point) => point[keys[0]])
  )

  const { values: axisValuesHorizontal, params: axisHorizontalParams } =
    getAxisValues(
      lineChartSize.width,
      data.map((point) => point[keys[1]])
    )

  return (
    <div className="simple-react-chart">
      <div className="chart">
        <Axes
          axes={axes}
          values={axisValues}
          valuesHorizontal={axisValuesHorizontal}
        />

        <PointsLines
          points={data}
          keys={keys}
          axisParams={axisParams}
          axisHorizontalParams={axisHorizontalParams}
        />
      </div>
    </div>
  )
}
