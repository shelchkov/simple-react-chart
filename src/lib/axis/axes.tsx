import React from "react"
import { Axis } from "./axis"
import { AxisT, AxisValue } from "../interfaces"
import "../styles/axis.css"

interface Props {
  axes: AxisT[]
  values: AxisValue[]
  valuesHorizontal: AxisValue[]
}

const getAxeName = (axe: AxisT) => axe.name || axe.key

export const Axes = ({ axes, values, valuesHorizontal }: Props) => (
  <div>
    <Axis name={getAxeName(axes[0])} values={values} />
    <Axis name={getAxeName(axes[1])} values={valuesHorizontal} isHorizontal />
  </div>
)
