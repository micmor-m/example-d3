import React, { Component, useRef, useState, useEffect } from "react";
import D3Chart from "./D3Chart";

export default class ChartWrapper extends Component {
  componentDidMount() {
    this.setState({ chart: new D3Chart(this.refs.chart) });
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.state.chart.update(nextProps.gender);
  }

  render() {
    return <div ref="chart"></div>;
  }
}

// const ChartWrapper = () => {
//   const chartArea = useRef(null);
//   const [chart, setChart] = useState(null);

//   useEffect(() => {
//     if (!chart) {
//       setChart(new D3Chart(chartArea.current));
//     } else {
//        chart.update();
//     }
//   }, [chart]);

//   return <div className="chart-area" ref={chartArea}></div>;
// };
// export default ChartWrapper;
