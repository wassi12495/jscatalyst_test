# JSCatalyst -- Documentation Notes/Changes

# Table of Contents

- [Setup](#setup)
  - [Installation](#installation)
  - [Store.js](#storejs)
  - [Main.js](#mainjs)
- [D3 Chart Documentation](#d3-chart-documentation)
  - [Universal JSCatalyst D3 Chart Attributes](#universal-jscatalyst-d3-chart-attributes)
  - [D3BarChart](#d3barchart)
  - [D3BubbleChart](#d3bubblechart)
  - [D3BulletChart](#d3bulletchart)
  - [D3BoxPlot](#d3boxplot)
  - [D3DifferenceChart](#d3differencechart)
  - [D3ForceGraph](#d3forcegraph)
  - [D3GanttChart](#d3ganttchart)
  - [D3HeatMap](#d3heatmap)
  - [D3Histogram](#d3histogram)
  - [D3HorizonChart](#d3horizonchart)
  - [D3LineChart](#d3linechart)
  - [D3ZoomableLineChart](#d3zoomablelinechart)
  - [D3LinePlot](#d3lineplot)
  - [D3PieChart](#d3piechart)
  - [D3PunchCard](#d3punchcard)
  - [D3ScatterPlot](#d3scatterplot)
  - [D3StackedBarChart](#d3stackedbarchart)
  - [D3StreamGraph](#d3streamgraph)
  - [D3Sunburst](#d3sunburst)
  - [D3TwoLinePlot](#d3twolineplot)
  - [D3USMap](#d3usmap)
  - [D3WorldMap](#d3worldmap)

---

# `Setup`

## Installation

Install the following npm packages:

```
npm install --save jscatayst
npm install --save vuex
npm install --save vuetify
```

---

## `Store.js`

Create a _store.js_ file at the top level of the _src/_ directory.
Include the following code in _store.js_

```js
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({});
```

---

### `Main.js`

Incorporate the following code into your _main.js_ file:

```js
import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import { store } from "./store";

import "jscatalyst/dist/jscatalyst.min.css";
import { ThemePlugin } from "jscatalyst";

Vue.use(Vuetify);
Vue.use(ThemePlugin, {
  store,
  themes: ["Blue", "Pink", "Green", "Brown", "Red", "Grey"]
});

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
```

---

# D3 Chart Documentation

## Universal JSCatalyst D3 Chart Attributes

The following properties exist in each JSCatalyst chart:

- _`propID`_ -- String

  - The html element 'id' in the DOM.
  - Default: A generic identifier like 'container-barchart'

- _`title`_ -- String

  - Text rendered as the title of the chart

---

## `D3BarChart`

```html
<template>
  <div>
    <bar-chart
    :dataModel="barChartData"
    title="title"
    propID='example-bar-chart'
    yaxisLabel="Y Axis"
    xaxisLabel="X Axis"
    />
  </div>
</template>

<script>

import {D3BarChart} from 'jscatalyst'
export default{
  data(){
    return{
      barChartData:[
        {x: , y: }
      ]
    }
  },
  components:{
    barChart: D3BarChart
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` property of the `D3BarChart` takes the form of an array of objects and is empty by default.

```html
<bar-chart :dataModel="[{}, {}]"/>
```

Each object represents a data point defined by its keys `x` and `y`.

```js
barChartData = [
  { x: "08-10-2018", y: 32 },
  { x: "08-11-2018", y: 18 },
  { x: "08-12-2018", y: 24 }
];
```

#### _`xaxisLabel`_

Type: _String_

The `xaxisLabel` property sets the X-axis label rendered below the X-axis.

#### _`yaxisLabel`_

Type: _String_

The `yaxisLabel` property sets the Y-axis label rendered below the Y-axis.

## `Developer Notes`:

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3BubbleChart`

### Sample

```html
<template>
  <div>
    <bubble-chart
    :dataModel="bubbleChartData"
    title="Hello"
    isTime="false"
    type="category"
    />
  </div>
</template>

<script>

import {D3BubbleChart} from 'jscatalyst'
export default{
  data(){
    return{
      bubbleChartData:[{}, {}]
    }
  },
  components:{
    bubbleChart: D3BubbleChart
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` property of the `D3BubbleChart` takes the form of an array of objects and is empty by default.

```html
<bubble-chart :dataModel="[{}, {}]"/>
```

Each object represents a data point ("bubble") defined by its keys: `x`, `y`, `value`, and `label`.

```js
bubbleChartData = [
  { x: 40, y: 10, value: 30, label: "Datum" },
  { x: 2, y: 90, value: 9, label: "Datum2" },
  { x: 5, y: 20, value: 25, label: "Datum3" },
  { x: 80, y: 2, value: 43, label: "Datum4" }
];
```

##### Keys

- `x`

  - Type: _Number_
  - Value of the X-coordinate.

- `y`

  - Type: _Number_
  - Value of the Y-coordinate.

- `value`

  - Type: _Number_
  - Magnitude of the data point and diameter of the "bubble".

- `label`
  - Type: _String_
  - Title of the data point. Rendered in a pop-up box that appears when hovering over a bubble.

#### _`xaxisLabel`_

Type: _String_

The `xaxisLabel` property sets the X-axis label rendered below the X-axis.

#### _`yaxisLabel`_

Type: _String_

The `yaxisLabel` property sets the Y-axis label rendered below the Y-axis.

#### _`isTime`_

Type: _Boolean_

#### _`type`_

Type : _String_

#### _`currentCategories`_

Type: _Array_

## `Developer Notes`:

- No Entry in official documentation
- isTime has no discdernibl function
- **Address Catgories and "all, all ,all"**

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3BulletChart`

### Sample

```html
<template>
  <div>
    <bullet-chart
    :dataModel="bulletChartData"
    isStock="true"
    />
  </div>
</template>

<script>

import {D3BulletChart} from 'jscatalyst'
export default{
  data(){
    return{
      bulletChartData:[
          {
          "title":"Revenue",
          "subtitle":"US$, in thousands",
          "ranges":[150,225,300],
          "measures":[220,270],
          "markers":[250]
          }
        ]
    }
  },
  components:{
    bulletChart: D3BulletChart
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` for the `D3BulletChart` takes the form of an array of objects. The chart has the following sample data by default:

```js
bulletChartData = [
  {
    title: "Revenue",
    subtitle: "US$, in thousands",
    ranges: [150, 225, 300],
    measures: [220, 270],
    markers: [250]
  }
];
```

##### Keys

- `title`

  ##### Type: _String_

  The text rendered as the title of this data set.

- `subtitle`

  ##### Type: _String_

  The text rendered as the subtitle of this data set.

- `ranges`

  ##### Type: _Array_

  Takes an array of up to 3 _Numbers_. The numbers in the array represent _bad_, _ok_, and _good_ values. These  
   are reflected in the shading of the chart:

  `[bad, ok, good] = [light shading, medium shading, dark shading]`

  The final value will also reflect the right boudary of the chart.

- `measures`

  ##### Type: _Array_

  Takes and array of 1 or 2 _Numbers_. These represent the actual values of the chart. Represented by a horizontal bar at the center of the chart.

- `markers`

  ##### Type: _Array_

  Takes and array of 1 or more _Numbers_. Renders vertical line markers at the specified values on the chart.

#### _`isStock`_

Type: _Boolean_

Used to vizualize live stock, default false.

-- **Currently no obvious fucntion** --

## `Developer Notes`:

- No obvious function of isStock. isStock gives error "Expecting boolean recieved string. isStock='True'"

- Add images

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3BoxPlot`

### Sample

```html
<template>
  <div>
    <box-plot
     :dataModel="boxPlotData"
    />

  </div>
</template>

<script>

import {D3BoxPlot} from 'jscatalyst'
export default{
  data(){
    return{
        boxPlotData = []
    }
  },
  components:{
    boxPlot: D3BoxPlot
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` for the `D3BoxPlot` takes the form of an array of objects and is empty by default.

The objects in the `dataModel` do not have any required keys. Keys in the first data object represent the pool of possible keys in the following data objects. This means that all possible keys must exist in th first object of the `dataModel` array.

```js
boxPlotData = [
  {
    Q1: 20000,
    Q2: 15000,
    Q3: 8000,
    Q4: 20000
  },
  {
    Q1: 9879,
    Q2: 9323,
    Q3: 3294
  },
  {
    Q1: 5070,
    Q2: 9395,
    Q3: 17633,
    Q4: 5752
  },
  {
    Q1: 7343,
    Q2: 8675,
    Q3: 12121,
    Q4: 7557
  },
  {
    Q1: 9136,
    Q3: 4319,
    Q4: 5125
  }
];
```

#### _`metric`_ (Broken)

Type: _String_

The label of the X-axis. Default: "Year"

#### _`ylabel`_ (Broken)

Type: _String_

The label of the Y-axis. Default: "Revenue in $"

## `Developer Notes`:

- No Official Documentation Entry
- Currently, Metric is connected to the Yaxis and `yaxis` is not connected. **Address this**

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3Dendrogram`

### Sample

```html
<template>
  <div>
    <dendrogram-plot
     :dataModel="dendrogramData"
    />

  </div>
</template>

<script>

import {D3Dendrogram} from 'jscatalyst'
export default{
  data(){
    return{
        dendrogramData = []
    }
  },
  components:{
    dendrogramPlot: D3Dendrogram
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` for a `D3Dendrogram` is empty by default and takes an array of nested objects:

```js
dendrogramData = [
  {
    children: [
      {
        children: [
          {
            children: [],
            name: "f"
          },
          {
            children: [
              {
                children: [],
                name: "b"
              },
              {
                children: [
                  {
                    children: [
                      {
                        children: [],
                        name: "c"
                      },
                      {
                        children: [],
                        name: "d"
                      }
                    ],
                    name: "c-d"
                  },
                  {
                    children: [
                      {
                        children: [],
                        name: "a"
                      },
                      {
                        children: [],
                        name: "e"
                      }
                    ],
                    name: "a-e"
                  }
                ],
                name: "a-c-d-e"
              }
            ],
            name: "a-b-c-d-e"
          }
        ],
        name: "a-b-c-d-e-f"
      }
    ],
    name: "Root1"
  }
];
```

##### Keys

- `children`

  ##### Type: _Array_

  The Children key pointes to a nested array of objects that represents th child nodes of this node.

- `name`

  ##### Type: _String_

  The name of the node, rendered beside the node.

## `Developer Notes`:

- No Official Docmuentation Entry

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3DifferenceChart`

### Sample

```html
<template>
  <div>


  </div>
</template>

<script>

import {D3DifferenceChart} from 'jscatalyst'
export default{
  data(){
    return{
        differenceChartData = []
    }
  },
  components:{
    differenceChart: D3DifferenceChart
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` for the `D3DifferenceChart` takes the form of an array of objects and is empty by default.

```js
differenceChartData = [
  { date: "2017-01-01", expected: 100, actual: 50 },
  { date: "2017-01-05", expected: 30, actual: 50 },
  { date: "2017-01-10", expected: 45, actual: 90 },
  { date: "2017-01-15", expected: 110, actual: 150 },
  { date: "2017-01-20", expected: 90, actual: 130 },
  { date: "2017-01-25", expected: 80, actual: 50 },
  { date: "2017-01-30", expected: 150, actual: 60 },
  { date: "2017-02-04", expected: 100, actual: 30 }
];
```

#### Keys

- `date`

  Type: _String_

  Takes a date written as a string in the form `"YYYY-MM-DD"` by default.
  This format can be changed using the the `dateFormat` property.

- `expected`

  Type: _Number_

  Represents the expected value of this data point.

- `actual`

  Type: _Number_

  Represent th actual value of this data point.

#### _`metric`_

Type: _String_

The label of the Y-Axis.

#### _`dateFormat`_

Type: _String_

String representing the expected format of the _`date`_ key in the `dataModel`. Default `YYYY-MM-DD`

#### _`keys`_

Type: _Array_

The `keys` property takes an array of strings. Its indicated function is to allow the developer the ability to overwrite the "actual" and "expected" keys in the `dataModel`. However this appears to be broken.

## `Developer Notes`:

- Keep Metric properties consistent across all charts~!!
- Address "Keys" prop not actually changing the keys in dataModel

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3ForceGraph`

Note: The _Force Directed Graph_ exports as _`D3ForceGraph`_.

### Sample

```html
<template>
  <div>
    <force-graph
      :dataModel="forceDirectedGraphData"
      title="Title"
    />
  </div>
</template>

<script>

import {D3ForceGraph} from 'jscatalyst'
export default{
  data(){
    return{
        forceGraphData = {}
    }
  },
  components:{
    forceGraph: D3ForceGraph
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Object_

The `dataModel` for the _`D3ForceGraph`_ is empty by default. Sample Data:

```js
forceDirectedGraphData = {
  nodes: [
    { id: "Myriel", group: 9 },
    { id: "Napoleon", group: 1 },
    { id: "Mlle.Baptistine", group: 1 },
    { id: "Mme.Magloire", group: 1 },
    { id: "CountessdeLo", group: 2 },
    { id: "Geborand", group: 1 },
    { id: "Champtercier", group: 3 },
    { id: "Cravatte", group: 1 },
    { id: "Count", group: 4 },
    { id: "OldMan", group: 1 }
  ],
  links: [
    { source: "Napoleon", target: "Myriel", value: 1 },
    { source: "CountessdeLo", target: "Count", value: 18 },
    { source: "OldMan", target: "Cravette", value: 100 },
    { source: "Geborand", target: "Myriel", value: 15 }
  ]
};
```

##### Keys

- `nodes`

  Type: _Array_

  Takes an array of objects representing the nodes of the graph.

  - `id`

    Type: _String_

    The name of the node. Used to produce links between this and other nodes.

  - `group`

    type: _Number_

    The group to which a node belongs determines the node's color and rendered grouping

- `links`

  Type: _Array_

  Takes an array of objects that defines the rended connections between two specific nodes.

  - `source`

    Type: _String_

    The id of the first node in this link. ID must match EXACTLY and existing node id.

  - `target`

    Type: _String_

    The id of the second node in this link. ID must match EXACTLY and existing node id.

  - `value`

    Type: _Number_

    Visually alters the thickness of the rendered link.

## `Developer Notes`:

- Address the rendering position. Chart is cut off at top by default
- hover not working as intended. (hold down and drag for a few seconds)

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3GanttChart`

### Sample

```html
<template>
  <div>
    <gantt-chart
      :dataModel="ganttChartData"
      style="height:100%"
    />
  </div>
</template>

<script>

import {D3GanttChart} from 'jscatalyst'
export default{
  data(){
    return{
        ganttChartData = []
    }
  },
  components:{
    ganttChart: D3GanttChart
  }
}

</script>
```

Note: chart will not render without

```css
style="height:100%"
```

### Properties

#### _`dataModel`_

Type: _Array_

The `D3GanttChart` has default sample data. A more complete example:

```js
ganttChartData = [
  {
    startDate: "Dec 09 2017 00:00:45",
    endDate: "Dec 13 2017 02:36:45",
    taskName: "E Job",
    status: "RUNNING"
  },
  {
    startDate: "Nov 09 2017 06:34:04",
    endDate: "Nov 23 2017 08:49:53",
    taskName: "D Job",
    status: "RUNNING"
  },
  {
    startDate: "Oct 03 2017 03:27:35",
    endDate: "Nov 15 2017 03:58:43",
    taskName: "P Job",
    status: "SUCCEEDED"
  },
  {
    startDate: "Oct 07 2017 03:27:35",
    endDate: "Oct 15 2017 03:58:43",
    taskName: "D Job",
    status: "FAILED"
  },
  {
    startDate: "Oct 09 2017 03:27:35",
    endDate: "Dec 20 2017 03:58:43",
    taskName: "N Job",
    status: "KILLED"
  }
];
```

#### `dataModel` Object Keys:

- `startDate`

  Type: _String_

  String Date with specified date format. Indicates the beginning of the event

- `endDate`

  Type: _String_

  String Date with specified date format. Indicates the end of the event

- `taskName`

  Type: _String_

  Label of the task/event rendred on Y-Axis

- `status`

  Type: _String_

  The Current status of the task. See `taskStatuses` property.

#### _`dateFormat`_

Type: _String_

Allows the developer to determine the desired date format for `dataModel`

**Find potential limitations**

#### _`taskStatuses`_ (Broken)

Type: _Object_ / _Array_

Object keys indicate the potential statuses of each task. If connected to css, changes class and style based on different status.

Currently not functional

#### _`actual`_

**No obvious Function**

## `Developer Notes`:

- will not render without style="height: 100%"
- find limitations of the dateFormat property
- Must connect taskStatuses to CSS
- What does `actual` do??? Right now, disconnected.
- tickFormat?? See .Docx

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3HeatMap`

Note: Heat map will not render without access to ThemePlugin from jscatalyst and the store. ( See [setup](#setup) above)

### Sample

```html
<template>
  <div>

    <heat-map
    :dataModel="heatMapData"
    alertText="Volume Label"
    />

  </div>
</template>

<script>

import {D3HeatMap} from 'jscatalyst'
export default{
  data(){
    return{
      heatMapData: [] // See dataModel property
    }
  },
  components:{
    heatMap: D3HeatMap
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` for the `D3HeatMap` takes an array of objects. Each object represents one data point:

```js
heatMapData = [
  {
    date: "2017-11-30",
    volume: 2
  },
  {
    date: "2017-11-29",
    volume: 0
  },
  {
    date: "2017-11-30",
    volume: 0
  },
  {
    date: "2017-11-28",
    volume: 1
  },
  {
    date: "2017-11-27",
    volume: 0
  },
  {
    date: "2017-11-28",
    volume: 0
  },
  {
    date: "2017-11-26",
    volume: 1
  },
  {
    date: "2017-11-25",
    volume: 1
  },
  {
    date: "2017-11-24",
    volume: 0
  }
];
```

#### `dataModel` Object Keys:

- `date`

  Type: _String_

  Defines location of data point on the heat map matrix. See `dateFormat` property.

- `volume`

  Type: _Number_

  The value of the data point. Affects the visual "heat" or color of the data point in the matrix heat map. See the `alertText` property.

  Default: # of incidents

#### _`alertText`_

Type: _String_

The name of the data defined in the `volume` of the `dataModel`.

Default: "Incident"

## `Developer Notes`:

- Sample code from jscatalyst will not render without proper access to the store and ThemePlugin
- How to connect to CSS

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3Histogram`

### Sample

```html
<template>
  <div>
    <D3-histogram :dataModel="histogramData"/>

  </div>
</template>

<script>

import {D3Histogram} from 'jscatalyst'
export default{
  data(){
    return{
      histogramData: [] // See dataModel property
    }
  },
  components:{
    D3histogram: D3Histogram
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` for the `D3Histogram` takes an array of Numbers. Each Number represents another point of data.

The `dataModel` is empty and will produce an error by default.

```js
```

## `Developer Notes`:

- D3Histogram appears to have a bunch of hidden behind the scenes calculations that are not made clear,
- See Time formatting and formatTimeMixin
- Does not have a tool for adding a label to the X or Y axis

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3HorizonChart`

**NOTE** There is no documentation for this chart.

### Sample

```html
<template>
  <div>


  </div>
</template>

<script>

import {D3HorizonChart} from 'jscatalyst'
export default{
  data(){
    return{
      horizonChartData: [] // See dataModel property
    }
  },
  components:{
    horizonChart: D3HorizonChart
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Object_

No documentation about format of the dataModel Object

```js
```

## `Developer Notes`:

- dataModel documentation does not define keys or format of the data object.

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3LineChart`

**NOTE** There is no documentation for this chart.

### Sample

```html
<template>
  <div>
      <line-chart
        :dataModel='lineChartData'
        title='Example Line Chart'
        alertText="Incident Volume"
      />
  </div>
</template>

<script>

import {D3LineChart} from 'jscatalyst'
export default{
  data(){
    return{
      lineChartData: [] // See dataModel property
    }
  },
  components:{
    lineChart: D3LineChart
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` of `D3LineChart` takes an array of objects, with each object representing a unique data point.

```js
lineChartData = [
  { date: "2017-1-1", value: 2 },
  { date: "2017-4-1", value: 5 },
  { date: "2017-2-1", value: 1 },
  { date: "2017-3-1", value: 6 },
  { date: "2017-5-10", value: 1 },
  { date: "2017-6-10", value: 16 },
  { date: "2017-7-10", value: 18 },
  { date: "2017-8-10", value: 7 },
  { date: "2017-9-10", value: 5 },
  { date: "2017-10-10", value: 1 },
  { date: "2017-11-10", value: 2 },
  { date: "2017-12-10", value: 10 }
];
```

#### `dataModel` Object Keys:

- `date`

  Type: _String_

  The `date` key points to a date string written in valid date format.

- `value`

  Type: _Number_

  The actual value of the data point

#### _`alertText`_

Type: _String_

The name of the data described by the `dataModel.value`. Rendered as the label for the Y-Axis as well as the laebl for the value in the window rendered when hovering over data.

#### _`dateFormat`_

Type: _String_

Set the format of the `dataModel.date` according to valid D3 Date formats.

Default: `"YYYY-MM-DD"`

## `Developer Notes`:

- Review D3 date formats

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3ZoomableLineChart`

**NOTE** There is no documentation for this chart.

### Sample

```html
<template>
  <div>
    <zoomable-line-chart :dataModel="zoomableLineChartData" metric="Metric Label"/>
  </div>
</template>

<script>

import {D3ZoomableLineChart} from 'jscatalyst'
export default{
  data(){
    return{
      zoomableLineChartData: [] // See dataModel property
    }
  },
  components:{
    zoomableLineChart: D3ZoomableLineChart
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` of `D3ZoomableLineChart` takes an array of objects, with each object representing a unique data point.

```js
zoomableineChartData = [
  { date: "2017-1-1", value: 2 },
  { date: "2017-4-1", value: 5 },
  { date: "2017-2-1", value: 1 },
  { date: "2017-3-1", value: 6 },
  { date: "2017-5-10", value: 1 },
  { date: "2017-6-10", value: 16 },
  { date: "2017-7-10", value: 18 },
  { date: "2017-8-10", value: 7 },
  { date: "2017-9-10", value: 5 },
  { date: "2017-10-10", value: 1 },
  { date: "2017-11-10", value: 2 },
  { date: "2017-12-10", value: 10 }
];
```

#### `dataModel` Object Keys:

- `date`

  Type: _String_

  The `date` key points to a date string written in valid date format.

- `value`

  Type: _Number_

  The actual value of the data point

#### _`dateFormat`_

Type: _String_

Set the format of the `dataModel.date` according to valid D3 Date formats.

Default: `"YYYY-MM-DD"`

#### _`metric`_

Type: _String_

Does not seem to be connected properly to the component. See JSCatalyst

Default: `"Metric"`

## `Developer Notes`:

- Review D3 date formats
- Docs say dataModel key is volume not value (actual)\
- Metric property documented but not functional
- No official documentation entry

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3LinePlot`

### Sample

```html
<template>
  <div>
    <line-plot  :dataModel="linePlotData" metric="Sample Metric" />
  </div>
</template>

<script>

import {D3LinePlot} from 'jscatalyst'
export default{
  data(){
    return{
      linePlotData: [] // See dataModel property
    }
  },
  components:{
    linePlot: D3LinePlot
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` of `D3Lineplot` takes an array of objects, with each object representing a unique data point.

**NOTE** Sample data provided used keys that have no obviuous function

```js
export const linePlotData = [
  {
    id: 2922,
    dashboard_metric: "Ticket Volume",
    object_id: 1,
    date: "2017-06-01",
    value: 120,
    period: 604800,
    time: null,
    object_type: 9
  },
  {
    id: 2952,
    dashboard_metric: "Ticket Volume",
    object_id: 2,
    date: "2017-09-01",
    value: 21,
    period: 2592000,
    time: null,
    object_type: 9
  },
  {
    id: 2938,
    dashboard_metric: "Ticket Volume",
    object_id: 3,
    date: "2017-04-01",
    value: 193,
    period: 604800,
    time: null,
    object_type: 9
  },
  {
    id: 2581,
    dashboard_metric: "Ticket Volume",
    object_id: 4,
    date: "2017-02-01",
    value: 313,
    period: 86400,
    time: null,
    object_type: 9
  }
];
```

#### `dataModel` Object Keys:

- `date`

  Type: _String_

  The `date` key points to a date string written in valid date format.

- `value`

  Type: _Number_

  The actual value of the data point

- `id`

  Type: _String_

  **NO DISCERNIBLE FUNCTION**

- `dashboard_metric`

  Type: _String_

  **NO DISCERNIBLE FUNCTION**

- `object_id`

  Type: _String_

  **NO DISCERNIBLE FUNCTION**

- `period`

  Type: _String_

  **NO DISCERNIBLE FUNCTION**

- `time`

  Type: _String_

  **NO DISCERNIBLE FUNCTION**

- `object_type`

  Type: _String_

  **NO DISCERNIBLE FUNCTION**

#### _`dateFormat`_

Type: _String_

Set the format of the `dataModel.date` according to valid D3 Date formats.

Default: `"YYYY-MM-DD"`

#### _`metric`_

Type: _String_

Label of the data measured. Rendered in hover box and as label for Y-Axis

Default: `"Metric"`

#### _`color`_

Type: _String_

Set the color of the graph

**NOTE: This does nothing**

Default: "black"

## `Developer Notes`:

- Review D3 date formats
- By default, using sample, chart will not render properly. Invisible lines?
- Sample data has a bunch of unnecessary keys
- Color property does not change color when set to a specific value.
- Review JSCatalyst component
- Review Docs -- seems to be copy pasted

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3PieChart`

### Sample

```html
<template>
  <div>

  </div>
</template>

<script>

import {D3PieChart} from 'jscatalyst'
export default{
  data(){
    return{
      pieChartData: [] // See dataModel property
    }
  },
  components:{
    pieChart: D3PieChart
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` of `D3PieChart` takes an array of objects, with each object representing a unique data point.

```js
pieChartData = [
  {
    label: "Infrastructure",
    value: 100
  },
  {
    label: "Education",
    value: 35
  },
  {
    label: "Health",
    value: 75
  },
  {
    label: "Military",
    value: 90
  }
];
```

#### `dataModel` Object Keys:

- `label`

  Type: _String_

  The `label` key provides the name of this "slice" of data in the pie chart.

- `value`

  Type: _Number_

  The measured data.

  **NOTE: The JSCatalyst Component indicates this can be a string. String breaks the Pie**

#### _`units`_

Type: _String_

Indicates which unit of measure the data is measured.

**NOTE: This does not work as expected**

#### _`donutWidth`_

Type: _Number_

Turns pie into a "donut". Changes the width of the donut.

#### _`pieColors`_

Type: _Array_

List of possible pie chart colors.

**NOTE: Depricated-- Mentioned in Documentation but no longer a property**

## `Developer Notes`:

- Value must be number
- Units does not naturally append unit to data
- Color is not naturally changable
- Look into pieColors

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3PunchCard`

### Sample

```html
<template>
  <div>
    <punch-card
     :dataModel="punchCardData"
    />
  </div>
</template>

<script>

import {D3PunchCard} from 'jscatalyst'
export default{
  data(){
    return{
      punchCardData: [] // See dataModel property
    }
  },
  components:{
    punchCard: D3PunchCard
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` for `D3PunchCard` takes an array of objects, with each object representing a unique data point.

```js
punchCardData = [
  {
    day_of_week: "0",
    hour_volumes: [
      5,
      3,
      3,
      4,
      6,
      5,
      2,
      4,
      5,
      7,
      6,
      7,
      4,
      3,
      2,
      5,
      5,
      11,
      6,
      10,
      7,
      7,
      8,
      5
    ]
  },
  {
    day_of_week: "1",
    hour_volumes: [
      5,
      6,
      6,
      7,
      9,
      5,
      8,
      2,
      7,
      7,
      8,
      2,
      6,
      5,
      10,
      7,
      6,
      11,
      4,
      5,
      6,
      3,
      10,
      5
    ]
  },
  {
    day_of_week: "2",
    hour_volumes: [
      2,
      11,
      4,
      6,
      3,
      9,
      6,
      6,
      3,
      7,
      5,
      3,
      8,
      7,
      8,
      3,
      5,
      11,
      5,
      8,
      1,
      9,
      5,
      8
    ]
  },
  {
    day_of_week: "3",
    hour_volumes: [
      4,
      10,
      7,
      4,
      5,
      9,
      8,
      3,
      6,
      5,
      3,
      7,
      12,
      6,
      5,
      9,
      6,
      8,
      5,
      7,
      8,
      3,
      7,
      10
    ]
  },
  {
    day_of_week: "4",
    hour_volumes: [
      7,
      7,
      5,
      5,
      5,
      7,
      4,
      4,
      6,
      10,
      6,
      8,
      1,
      9,
      8,
      8,
      6,
      4,
      3,
      4,
      5,
      11,
      6,
      9
    ]
  },
  {
    day_of_week: "5",
    hour_volumes: [
      6,
      7,
      6,
      6,
      6,
      6,
      5,
      6,
      4,
      10,
      5,
      8,
      5,
      6,
      4,
      1,
      4,
      11,
      4,
      5,
      9,
      2,
      2,
      6
    ]
  },
  {
    day_of_week: "6",
    hour_volumes: [
      4,
      2,
      5,
      10,
      10,
      6,
      4,
      5,
      3,
      7,
      4,
      7,
      9,
      8,
      5,
      7,
      0,
      6,
      4,
      2,
      6,
      10,
      10,
      4
    ]
  }
];
```

**REFORMAT^^^^^^^^^**

#### `dataModel` Object Keys:

- `label`

  Type: _String_

  The `label` key provides the name of this "slice" of data in the pie chart.

- `value`

  Type: _Number_

  The measured data.

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3ScatterPlot`

### Sample

**NOTE: ADD scatter-plot tag to template**

```html
<template>
  <div>

  </div>
</template>

<script>

import {D3ScatterPlot} from 'jscatalyst'
export default{
  data(){
    return{
      scatterPlotData: [] // See dataModel property
    }
  },
  components:{
    scatterPlot: D3ScatterPlot
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` for `D3ScatterPlot` takes an array of objects, with each object representing a unique data point.

```js
scatterPlotData = [
  {
    Value1: "Office 1",
    Value2: "AL",
    x: 70,
    y: 4
  },
  {
    Value1: "Office 2",
    Value2: "MA",
    x: 120,
    y: 3
  },
  {
    Value1: "Office 3",
    Value2: "CA",
    x: 70,
    y: 4
  },
  {
    Value1: "Office 4",
    Value2: "AL",
    x: 50,
    y: 4
  },
  {
    Value1: "Office 5",
    Value2: "AL",
    x: 110,
    y: 2
  },
  {
    Value1: "Office 6",
    Value2: "CA",
    x: 110,
    y: 2
  },
  {
    Value1: "Office 7",
    Value2: "CA",
    x: 110,
    y: 2
  },
  {
    Value1: "Office 8",
    Value2: "MA",
    x: 130,
    y: 3
  },
  {
    Value1: "Office 9",
    Value2: "MA",
    x: 90,
    y: 2
  },
  {
    Value1: "Office 10",
    Value2: "AL",
    x: 90,
    y: 3
  },
  {
    Value1: "Office 11",
    Value2: "MA",
    x: 120,
    y: 1
  },
  {
    Value1: "Office 12",
    Value2: "CA",
    x: 110,
    y: 6
  },
  {
    Value1: "Office 13",
    Value2: "CA",
    x: 120,
    y: 1
  }
];
```

#### `dataModel` Object Keys:

- `Value1`

  Type: _String_ or _Number_

  Label / description of datapoint

- `Value2`

  Type: _String_ or _Number_

  Defines the group to which this data point belongs. Changes rendered color according to group.

- `x`

  Type: _Number_

  X coordinate and independent variable

- `y`

  Type: _Number_

  Y coordinate and dependent variable

## `Developer Notes`:

- No access to X/Y axis labels for customization. Hard coded by the component.

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3StackedBarChart`

### Sample

```html
<template>
  <div>
    <stacked-bar-chart
      :dataModel="stackedBarChartData"
      xaxisLabel="xaxis test"
      yaxisLabel="yaxis test"
      dateFormat="MM/DD/YY"
    />

  </div>
</template>

<script>

import {D3StackedBarChart} from 'jscatalyst'
export default{
  data(){
    return{
      stackedBArChartData: [] // See dataModel property
    }
  },
  components:{
    stackedBarChart: D3StackedBarChart
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` of `D3StackedBarChart` takes an array of objects, with each object representing a unique data point.

```js
stackedBarChartData = [
  { date: "1/1/17", A: 20, B: 5, C: 10 },
  { date: "1/2/17", A: 25, B: 10, C: 20 },
  { date: "1/3/17", A: 2, B: 7, C: 18 },
  { date: "1/4/17", A: 25, B: 5, C: 26 },
  { date: "1/5/17", A: 23, B: 9, C: 11 },
  { date: "1/6/17", A: 29, B: 16, C: 14 },
  { date: "1/7/17", A: 26, B: 4, C: 18 },
  { date: "1/8/17", A: 23, B: 7, C: 14 },
  { date: "1/9/17", A: 28, B: 9, C: 15 },
  { date: "1/10/17", A: 23, B: 16, C: 19 },
  { date: "1/11/17", A: 16, B: 5, C: 13 },
  { date: "1/12/17", A: 26, B: 12, C: 11 }
];
```

#### `dataModel` Object Keys:

- `Month` (**CURRENTLY BROKEN**)

  Type: _String_

  X-Axis value instead of date.

- `date`

  Type: _String_

  X-Axis value instead of month. See DateFormat property.

- `A`

  Type: _Number_

  First Y-Axis value

- `B`

  Type: _Number_

  Second Y-Axis Value

- `C`

  Type: _Number_

  Third Y-Axis Value

#### _`xaxisLabel`_ (**CURRENTLY BROKEN**)

Type: _String_

X-Axis label.

#### _`yaxisLabel`_ (**CURRENTLY BROKEN**)

Type: _String_

Y-Axis Label

#### _`dateFormat`_

Type: _String_

Set the format of the _`date`_ key according to valid D3 Date formats.

Default: `"MMMM"`

## `Developer Notes`:

- xaxisLabel and yaxisLabel are disconnected
- No obvious direct color control
- "Month" and "Date" keys are treaded the same. Month should have a separate behavior (avoid dateFormat restrictions)

- Default dateFormat should be a proper dateformat not MMMM

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3StreamGraph`

### Sample

```html
<template>
  <div>
    <stream-graph
      :dataModel="streamGraphData"
      dateFormat="MM/DD/YY"
    />

  </div>
</template>

<script>

import {D3StreamGraph} from 'jscatalyst'
export default{
  data(){
    return{
      streamGraphData: [] // See dataModel property
    }
  },
  components:{
    streamGraph: D3StreamGraph
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` of `D3StackedBarChart` takes an array of objects, with each object representing a unique data point.

**NOTE: Uses stackedBarChart sample data**

```js
streamGraphData = [
  { date: "1/1/17", A: 20, B: 5, C: 10 },
  { date: "1/2/17", A: 25, B: 10, C: 20 },
  { date: "1/3/17", A: 2, B: 7, C: 18 },
  { date: "1/4/17", A: 25, B: 5, C: 26 },
  { date: "1/5/17", A: 23, B: 9, C: 11 },
  { date: "1/6/17", A: 29, B: 16, C: 14 },
  { date: "1/7/17", A: 26, B: 4, C: 18 },
  { date: "1/8/17", A: 23, B: 7, C: 14 },
  { date: "1/9/17", A: 28, B: 9, C: 15 },
  { date: "1/10/17", A: 23, B: 16, C: 19 },
  { date: "1/11/17", A: 16, B: 5, C: 13 },
  { date: "1/12/17", A: 26, B: 12, C: 11 }
];
```

#### `dataModel` Object Keys:

- `Month` (**CURRENTLY BROKEN**)

  Type: _String_

  X-Axis value instead of date.

- `date`

  Type: _String_

  X-Axis value instead of month. See DateFormat property.

- `A`

  Type: _Number_

  First Y-Axis value

- `B`

  Type: _Number_

  Second Y-Axis Value

- `C`

  Type: _Number_

  Third Y-Axis Value

#### _`dateFormat`_

Type: _String_

Set the format of the _`date`_ key according to valid D3 Date formats.

Default: `"MM/YYYY"`

## `Developer Notes`:

- Make defaulr dateFormat uniform across all charts (within reason)
- Will not render an empty graph without data. Errors
- No official Documentation Entry

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3Sunburst`

### Sample

```html
<template>
  <div>
    <sunburst :dataModel="sunburstData"/>
  </div>
</template>

<script>

import {D3Sunburst} from 'jscatalyst'
export default{
  data(){
    return{
      sunburstData: [] // See dataModel property
    }
  },
  components:{
    sunburst: D3Sunburst
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `dataModel` of `D3Sunburst` takes an array of objects, with each object representing a unique data point.

#### `dataModel` Object Keys

- `name`

  Type: _String_

  Data point label.

- `children`

  Type: _Array_

  Array of objects. An object with children may not have a size.

- `size`

  Type: _Number_

  The value of the datapoint. Can only be placed on an object in the child array. Used instead of the "children" key.

## `Developer Notes`:

- No official documentation entry
- No rendered labels. Only on hover.

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3TwoLinePlot`

### Sample

```html
<template>
  <div>
    <two-line-plot
      :dataModel="twoLinePlotData"
      :dataModel2="linePlotData"
      metric="hi"
      metric2="hello"
      style="stroke: #00ff00"
    />

  </div>
</template>

<script>

import {D3TwoLinePlot} from 'jscatalyst'
export default{
  data(){
    return{
      twoLinePlotData: [] // See dataModel property
    }
  },
  components:{
    twoLinePlot: D3TwoLinePlot
  }
}

</script>
```

### Properties

#### _`dataModel`_ and _`dataModel2`_

Type: _Array_

The `D3TwoLinePlot` takes two data models: one for each line. Both `dataModel` and `dataModel2` are arrays of objects, with each object representing a unique data point.

**NOTE: Using the same dataModel for both lines will cause them to render on top of eachother. Use LinePlotData as the other sample data.**

```js
export const twoLinePlotData = [
  {
    id: 2022,
    dashboard_metric: "Ticket Volume",
    object_id: 1,
    date: "2017-06-01",
    value: 220,
    period: 604800,
    time: null,
    object_type: 9
  },
  {
    id: 2052,
    dashboard_metric: "Ticket Volume",
    object_id: 2,
    date: "2017-09-01",
    value: 319,
    period: 2592000,
    time: null,
    object_type: 9
  },
  {
    id: 2038,
    dashboard_metric: "Ticket Volume",
    object_id: 3,
    date: "2017-04-01",
    value: 147,
    period: 604800,
    time: null,
    object_type: 9
  },
  {
    id: 2081,
    dashboard_metric: "Ticket Volume",
    object_id: 4,
    date: "2017-02-01",
    value: 27,
    period: 86400,
    time: null,
    object_type: 9
  },
  {
    id: 2080,
    dashboard_metric: "Ticket Volume",
    object_id: 5,
    date: "2017-01-01",
    value: 0,
    period: 86400,
    time: null,
    object_type: 9
  },
  {
    id: 2060,
    dashboard_metric: "Ticket Volume",
    object_id: 6,
    date: "2017-07-01",
    value: 140,
    period: 86400,
    time: null,
    object_type: 9
  },
  {
    id: 2080,
    dashboard_metric: "Ticket Volume",
    object_id: 7,
    date: "2017-08-01",
    value: 240,
    period: 86400,
    time: null,
    object_type: 9
  }
];
```

#### `dataModel` Object Keys

- `date`

  Type: _String_

  The independent variable (X value).

- `value`

  Type: _Number_

  The value of the datapoint. Can only be placed on an object in the child array. Used instead of the "children" key.

- `id`

  Type: _String_

  **NO DISCERNIBLE FUNCTION**

- `dashboard_metric`

  Type: _String_

  **NO DISCERNIBLE FUNCTION**

- `object_id`

  Type: _String_

  **NO DISCERNIBLE FUNCTION**

- `period`

  Type: _String_

  **NO DISCERNIBLE FUNCTION**

- `time`

  Type: _String_

  **NO DISCERNIBLE FUNCTION**

- `object_type`

  Type: _String_

  **NO DISCERNIBLE FUNCTION**

#### _`metric`_

Type: _String_

Line 1 label

#### _`metric2`_

Type: _String_

Line 2 label

#### _`dateFormat`_

Type: _String_

Set the format of the _`date`_ key according to valid D3 Date formats.

Default: `"YYYY-MM-DD"`

## `Developer Notes`:

- Requires 2 separate data Models
- will render invisible lines without specifying stoke color. **Investigate this further**

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3USMap`

### Sample

```html
<template>
  <div>

  </div>
</template>

<script>

import {D3USMap} from 'jscatalyst'
export default{
  data(){
    return{
      usMapData: [] // See dataModel property
    }
  },
  components:{
    usMap: D3USMap
  }
}

</script>
```

### Properties

#### _`dataModel`_

Type: _Array_

The `D3TwoLinePlot` takes two data models: one for each line. Both `dataModel` and `dataModel2` are arrays of objects, with each object representing a unique data point.

#### `dataModel` Object Keys

- `id`

  Type: _String_ or _Number_

  The id number of this data point

- `value`

  Type: _Number_

  Value of this data point. In the form of a float number percentage (i.e. 0.134)

- `state`

  Type: _String_

  (Optional) The name of the state. See `format` property.

#### _`format`_

Type: _String_

Format the map to divide map by "State" or "County" boundaries.

Valid values: "State" and "County"

Default: "County"

#### _`metric`_

Type: _String_

Label of the data on the map

Default: "Unemployment rate"

#### _`colorDomain`_

Type: _Array_

**Unclear**

#### _`legendDomain`_

Type: _Array_

**Unclear**

## `Developer Notes`:

- Hover only renders data hover window when hoving on boundaries of states
- Legend does not render
- no color
- colorDomain and legendDomain do not seem to function properly

##### [<--- Back to Table of Contents](#table-of-contents)

---

## `D3WorldMap`

## `Developer Notes`:

##### [<--- Back to Table of Contents](#table-of-contents)

---
