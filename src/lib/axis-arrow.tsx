import React from "react"
import { mergeStyles } from "./utils"

interface Props {
  isBottom?: boolean
}

export const AxisArrow = ({ isBottom }: Props) => (
  <div className={mergeStyles(isBottom && "axis-arrow-bottom")}>
    <div className="axis-arrow axis-arrow-right" />
    <div className="axis-arrow" />
  </div>
)
