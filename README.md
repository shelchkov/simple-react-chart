# Simple React Chart

[![Build status](https://ci.appveyor.com/api/projects/status/dhn5tb94gfvsvrpd?svg=true&retina=true)](https://ci.appveyor.com/project/shelchkov/simple-react-chart)
![npm](https://img.shields.io/npm/v/simple-chart-react)
[![Known Vulnerabilities](https://snyk.io/test/github/shelchkov/simple-react-chart/badge.svg)](https://snyk.io/test/github/shelchkov/simple-react-chart)

[Demo](https://simple-react-chart.onrender.com)

## How to use

### Line Chart

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

#### Customisations

##### Axes names

You can set name of axis. It will be shown instead of key.

```javascript
const axes = [{ key: "y", name: "Value" }, { key: "x", name: "Time" }]
```

##### Chart Size

You can pass height and width to LineChart to change it's size.

##### Line color

You can pass lineColor to LineChart to change it's line color.

```javascript
<LineChart axes={axes} data={data} width={600} lineColor="grey" />
```

### Styling

You can style chart container with css by using simple-react-chart class.
