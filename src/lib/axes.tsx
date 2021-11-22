import React from "react"
import { Axis } from "./axis"
import { AxisHorizontal } from "./axis-horizontal"
import { AxisT, AxisValue } from "./interfaces"

interface Props {
  axes: AxisT[]
  values: AxisValue[]
  valuesHorizontal: AxisValue[]
}

const getAxeName = (axe: AxisT) => axe.name || axe.key

export const Axes = ({ axes, values, valuesHorizontal }: Props) => (
  <div>
    <Axis name={getAxeName(axes[0])} values={values} />
    <AxisHorizontal name={getAxeName(axes[1])} values={valuesHorizontal} />
  </div>
)
