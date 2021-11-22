import React from "react"
import { LineChart } from "./lib"

const axes = [{ key: "y" }, { key: "x" }]
const data = [
  { x: 0, y: 0 },
  { x: 1, y: 0.5 },
  { x: 2, y: 2 },
  { x: 3, y: 4 },
  { x: 4, y: 7 },
  { x: 5, y: 4 },
  { x: 6, y: 3 },
  { x: 7, y: 0 },
  { x: 8, y: -2 }
]

export const App = () => (
  <div>
    <h1>Simple React Chart</h1>

    <LineChart axes={axes} data={data} />
  </div>
)
