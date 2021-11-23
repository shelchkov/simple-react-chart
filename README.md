# Simple React Chart

## How to use

Pass two axes and array of values to LineChart component. Data needs to contain values with keys corresponding to those of axes. Vertical axis goes first in an array and horizontal goes second.

```javascript
const axes = [{ key: "y" }, { key: "x" }]
const data = [{ x: 3, y: 4 }, { x: 4, y: 7 }, { x: 5, y: 4 }, { x: 6, y: 3 }]

<LineChart axes={axes} data={data} />
```

LineChart also accepts string values.

```javascript
const NonNumData = [
  { x: "V0", y: 0 },
  { x: "V1", y: 0.5 },
  { x: "V2", y: 2 },
  { x: "V3", y: 4 }
]

<LineChart axes={axes} data={nonNumData} />
```

You can set name of axis. It will be shown instead of key.

```javascript
const axes = [{ key: "y", name: "Value" }, { key: "x", name: "Time" }]
```
