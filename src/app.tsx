import React from "react"
import { LineChart } from "./lib"
import "./styles/app.css"

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
  <div className="demo-app">
    <h1 className="title">Simple React Chart</h1>

    <a
      href="https://www.npmjs.com/package/simple-chart-react"
      className="docs-link"
    >
      Documentation
    </a>

    <LineChart axes={axes} data={data2} />

    <p className="description">Custom size and line color</p>
    <LineChart axes={axes} data={data} width={500} lineColor="#C2B8AD" />
  </div>
)
