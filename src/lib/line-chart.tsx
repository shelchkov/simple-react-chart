import React from "react"
import { Axes } from "./axes"
import { Axe, ChartValue } from "./interfaces"
import "./styles.css"

interface Props {
  data: ChartValue[]
  axes: Axe[]
}

export const LineChart = ({ data, axes }: Props) => (
  <div className="simple-react-chart">
    <Axes axes={axes} />
  </div>
)
