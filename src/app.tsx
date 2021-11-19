import React from "react"
import { a } from "./lib"
import "./styles.css"

export const App = () => (
  <div>
    <h1 className="test-class">Hello World</h1>
    <p>{a()}</p>
  </div>
)
