import React from "react"
import { AxisArrow } from "./axis-arrow"
import { AxisValue } from "../interfaces"
import { trimValue } from "../utils"

interface Props {
  name: string
  values: AxisValue[]
}

export const AxisHorizontal = ({ name, values }: Props) => (
  <>
    <div className="axis axis-horizontal">
      <AxisArrow isBottom />
      <p className="axis-name-bottom">{name}</p>

      {values.map(({ position, value }) => (
        <p
          key={value}
          className="axis-value axis-value-horizontal"
          style={{ left: position }}
        >
          {trimValue(value)}
        </p>
      ))}
    </div>
  </>
)
