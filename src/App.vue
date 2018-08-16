<template>
  <div class='example-page'>
    <div class="chart">
      <!-- <line-chart :dataModel='lineChartData' propID='example-line-chart' metric='Last Sale Price' title='Example Line Chart'></line-chart> -->
      <!-- <bar-chart title="title" :dataModel="barChartData" propID='example-bar-chart' yaxisLabel="cost" xaxisLabel="time" metric="test"></bar-chart> -->
      <bubble-chart :dataModel="bubbleChartData" title="Hello" isTime="false" type="category"></bubble-chart>
      <!-- <bullet-chart :dataModel="bulletChartData" isStock="false"></bullet-chart> -->
      <!-- <box-plot :dataModel="boxPlotData"></box-plot> -->
      <!-- <dendrogram-plot :dataModel="dendrogramData" title="Dendrogram"></dendrogram-plot> -->
      <!-- <difference-chart :dataModel="differenceChartData" metric="yAxis" title="Poop" keys="keys" ></difference-chart> -->
      <!-- <force-graph :dataModel="forceDirectedGraphData" title="title"></force-graph> -->
      <!-- <gantt-chart :dataModel="ganttChartData" style="height:100%" actual="green"></gantt-chart> -->
      <!-- <heat-map :dataModel="heatMapData" alertText="Incident" propID='heatMap'></heat-map>     -->

   </div>
  </div>
</template>


<script>
  import {
    D3LineChart,
    D3BubbleChart,
    D3BarChart,
    D3BulletChart,
    D3BoxPlot,
    D3Dendrogram,
    D3DifferenceChart,
    D3ForceGraph,
    D3GanttChart,
    D3HeatMap
  } from "jscatalyst";
  import {
    barChartData,
    bubbleChartData,
    lineChartData,
    bulletChartData,
    boxPlotData,
    dendrogramData,
    differenceChartData,
    forceDirectedGraphData,
    ganttChartData,
    heatMapData
  } from "./mockData/index.js";

  export default {
    data: function() {
      return {
        bubbleChartData,
        barChartData,
        lineChartData,
        bulletChartData,
        boxPlotData,
        dendrogramData,
        differenceChartData,
        forceDirectedGraphData,
        ganttChartData,
        heatMapData,
        keys: ["Time", "Cost"]
      };
    },
    methods: {
      mouseCheck() {
        console.log("Hover");
      }
    },
    components: {
      lineChart: D3LineChart,
      barChart: D3BarChart,
      bubbleChart: D3BubbleChart,
      bulletChart: D3BulletChart,
      boxPlot: D3BoxPlot,
      dendrogramPlot: D3Dendrogram,
      differenceChart: D3DifferenceChart,
      forceGraph: D3ForceGraph,
      ganttChart: D3GanttChart,
      heatMap: D3HeatMap
    }
  };
</script>

<style>
  .chart {
    height: 400px;
  }
</style>