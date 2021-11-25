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
  { x: 8, y: -2 },
  { x: 9, y: 0 },
  { x: 10, y: 4 },
  { x: 11, y: 2 },
  { x: 12, y: 1.5 },
  { x: 13, y: 1.3 },
  { x: 14, y: 4 }
]

const data2 = [
  { x: "V0", y: 0 },
  { x: "V1", y: 0.5 },
  { x: "V2", y: 2 },
  { x: "V3", y: 4 }
]

export const App = () => (
  <div>
    <h1>Simple React Chart</h1>

    <LineChart axes={axes} data={data} />

    <p>Custom size and line color</p>
    <LineChart axes={axes} data={data2} width={500} lineColor="grey" />
  </div>
)
