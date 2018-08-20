# JSCatalyst -- Documentation Notes/Changes

# Table of Contents

- [Setup](#Setup)
  - [Installation](#Installation)
  - [Store.js](#Store.js)
  - [Main.js](#Main.js)
- [D3 Chart Documentation](#D3-Chart-Documentation)
  - [Universal JSCatalyst D3 Chart Attributes](#Universal-JSCatalyst-D3-Chart-Attributes)
  - [D3BarChart](#D3BarChart)
  - [D3BubbleChart](#D3BubbleChart)
  - [D3BulletChart](#D3BulletChart)
  - [D3BoxPlot](#D3BoxPlot)
  - [D3DifferenceChart](#D3DifferenceChart)
  - [D3ForceGraph](#D3ForceGraph)
  - [D3GanttChart](#D3GanttChart)
  - [D3HeatMap](#D3HeatMap)

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

---

## `D3ForceGraph`

Note: The _Force Directed Graph_ exports as _`D3ForceGraph`_.

### Sample

```html
<template>
  <div>


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

---

## D3GanttChart

## `Developer Notes`:

---

## D3HeatMap

## `Developer Notes`:

---
