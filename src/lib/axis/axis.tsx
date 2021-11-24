import React from "react"
import { AxisArrow } from "./axis-arrow"
import { AxisValue } from "../interfaces"
import { mergeStyles, trimValue } from "../utils"

interface Props {
  name: string
  values: AxisValue[]
  isHorizontal?: boolean
  length: number
}

export const Axis = ({ name, values, isHorizontal, length }: Props) => (
  <>
    <div
      className={mergeStyles("axis", isHorizontal && "axis-horizontal")}
      style={{
        width: isHorizontal ? length : 1,
        height: isHorizontal ? 1 : length
      }}
    >
      <AxisArrow isBottom={isHorizontal} />
      <p
        className={mergeStyles("axis-name", isHorizontal && "axis-name-bottom")}
      >
        {name}
      </p>

      <div>
        {values.map(({ position, value }) => (
          <p
            key={value}
            className={mergeStyles(
              "axis-value",
              isHorizontal && "axis-value-horizontal"
            )}
            style={{
              bottom: isHorizontal ? "auto" : position,
              left: isHorizontal ? position : "auto"
            }}
          >
            {trimValue(value)}
          </p>
        ))}
      </div>
    </div>
  </>
)
