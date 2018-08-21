<template>
  <div class='example-page'>
    <div class="chart">
      <!-- <bar-chart title="title" :dataModel="barChartData" propID='example-bar-chart' yaxisLabel="cost" xaxisLabel="time" metric="test"></bar-chart> -->
      <!-- <bubble-chart :dataModel="bubbleChartData" title="Hello" isTime="false" type="category"></bubble-chart> -->
      <!-- <bullet-chart :dataModel="bulletChartData" isStock="true"></bullet-chart> -->
      <!-- <box-plot :dataModel="boxPlotData" ylabel="Ylabel" xlabel="Xlabel" metric="Metric"></box-plot> -->
      <!-- <dendrogram-plot :dataModel="dendrogramData" title="Dendrogram"></dendrogram-plot> -->
      <!-- <difference-chart :dataModel="differenceChartData" metric="yAxis" title="Title" keys="['diff', 'again']" ></difference-chart> -->
      <!-- <force-graph :dataModel="forceDirectedGraphData" title="Title"></force-graph> -->
      <!-- <gantt-chart :dataModel="ganttChartData" style="height:100%" actual="green"></gantt-chart> -->
      <!-- <heat-map :dataModel="heatMapData" alertText="Incident(s)" propID='heatMap'></heat-map>     -->
      <!-- <histogram  :dataModel="histogramData" xAxis="XAxis" yAxis="Y" metric="metric"/> -->
      <!-- <horizon-chart ></horizon-chart> -->
      <!-- <line-chart :dataModel='lineChartData' propID='example-line-chart' alertText="Incidents Volume" title='Example Line Chart'/> -->
      <!-- <zoomable-line-chart :dataModel="zoomableLineChartData" metric="Hello"/> -->
      <line-plot color="brown" :dataModel="linePlotData" metric='Hello' dateFormat='YYYY-MM-DD'/>

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
    D3HeatMap,
    D3Histogram,
    D3HorizonChart,
    D3ZoomableLineChart,
    D3LinePlot
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
    heatMapData,
    histogramData,
    zoomableLineChartData,
    linePlotData
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
        histogramData,
        zoomableLineChartData,
        linePlotData
      };
    },
    methods: {},
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
      heatMap: D3HeatMap,
      histogram: D3Histogram,
      horizonChart: D3HorizonChart,
      zoomableLineChart: D3ZoomableLineChart,
      linePlot: D3LinePlot
    }
  };
</script>

<style>
  .chart {
    height: 400px;
  }
</style>