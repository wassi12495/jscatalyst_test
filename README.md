# JSCatalyst -- Documentation Notes/Changes

## Setup

### Installation

Install the following npm packages:

```
npm install --save jscatayst
npm install --save vuex
npm install --save vuetify
```

---

### Store.js

Create a _store.js_ file at the top level of the _src/_ directory.
Include the following code in _store.js_

```js
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({});
```

---

### Main.js

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

## 0) Universal JSCatalyst D3 Chart Attributes

The following properties exist in each JSCatalyst chart:

- _`propID`_ -- String

  - The html element 'id' in the DOM.
  - Default: A generic identifier like 'container-barchart'

- _`title`_ -- String

  - Text rendered as the title of the chart

## 1) D3BarChart

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

### _`dataModel`_

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

### _`xaxisLabel`_

Type: _String_

The `xaxisLabel` property sets the X-axis label rendered below the X-axis.

### _`yaxisLabel`_

Type: _String_

The `yaxisLabel` property sets the Y-axis label rendered below the Y-axis.

### `Notes`:

## 2) D3BubbleChart

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

### _`dataModel`_

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

### _`xaxisLabel`_

Type: _String_

The `xaxisLabel` property sets the X-axis label rendered below the X-axis.

### _`yaxisLabel`_

Type: _String_

The `yaxisLabel` property sets the Y-axis label rendered below the Y-axis.

### _`isTime`_

Type: _Boolean_

### `Notes`:

- No Entry in official documentation

## 3) D3BulletChart

### `Notes`:

## 4) D3BoxChart

### `Notes`:

## 5) D3Dendrogram

### `Notes`:

## 6) D3DifferenceChart

### `Notes`:

## 7) D3GanttChart

### `Notes`:

## 8) D3HeatMap
