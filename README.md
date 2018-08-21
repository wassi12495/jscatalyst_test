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
