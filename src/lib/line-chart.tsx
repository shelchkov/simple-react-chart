import React from "react"
import { Axes } from "./axes"
import { Axe, ChartValue } from "./interfaces"
import { PointsLines } from "./points-lines"
import "./styles.css"

interface Props {
  data: ChartValue[]
  axes: Axe[]
}

export const LineChart = ({ data, axes }: Props) => {
  const keys = axes.map(({ key }) => key)

  return (
    <div className="simple-react-chart">
      <Axes axes={axes} />

      <PointsLines points={data} keys={keys} coefficient={10} />
    </div>
  )
}
