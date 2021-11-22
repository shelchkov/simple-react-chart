# Simple React Chart

## How to use

Pass two axes and array of values to LineChart component. Data needs to contain values with keys corresponding to those of axes.

```javascript
const axes = [{ key: "y" }, { key: "x" }]
const data = [{ x: 3, y: 4 }, { x: 4, y: 7 }, { x: 5, y: 4 }, { x: 6, y: 3 }]

<LineChart axes={axes} data={data} />
```

LineChar also accepts string values.

```javascript
const NonNumData = [
  { x: "V0", y: 0 },
  { x: "V1", y: 0.5 },
  { x: "V2", y: 2 },
  { x: "V3", y: 4 }
]

<LineChart axes={axes} data={nonNumData} />
```
