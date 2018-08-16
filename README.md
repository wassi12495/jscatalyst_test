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

- _propID_ -- String

  - The html element 'id' in the DOM.
  - Default: A generic identifier like 'container-barchart'

- _title_ -- String

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
    >
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

### _dataModel_

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

### _xaxisLabel_

Type: _String_

The `xaxisLabel` property
