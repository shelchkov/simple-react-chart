import React from "react"
import { AxisArrow } from "./axis-arrow"
import { Axe } from "./interfaces"

interface Props {
  axes: Axe[]
}

const getAxeName = (axe: Axe) => axe.name || axe.key

export const Axes = ({ axes }: Props) => (
  <div className="axes">
    <p className="axis-name">{getAxeName(axes[0])}</p>
    <AxisArrow />
    <div className="axis" />
    <div className="axis axis-horizontal" />
    <AxisArrow isBottom />
    <p className="axis-name-bottom">{getAxeName(axes[1])}</p>
  </div>
)
