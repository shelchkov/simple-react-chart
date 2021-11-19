import React from "react"
import { LineChart } from "./lib"

const axes = [{ key: "y" }, { key: "x" }]
const data = [{ x: 1, y: 1 }]

export const App = () => (
  <div>
    <h1>Simple React Chart</h1>

    <LineChart axes={axes} data={data} />
  </div>
)
