import React from "react"
import { AxisArrow } from "./axis-arrow"
import { AxisValue } from "./interfaces"
import { trimValue } from "./utils"

interface Props {
  name: string
  values: AxisValue[]
}

export const Axis = ({ name, values }: Props) => (
  <>
    <div className="axis">
      <AxisArrow />
      <p className="axis-name">{name}</p>

      {values.map(({ position, value }) => (
        <p key={value} className="axis-value" style={{ bottom: position }}>
          {trimValue(value)}
        </p>
      ))}
    </div>
  </>
)
