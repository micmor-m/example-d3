import * as d3 from "d3";

const data = [20, 12, 16, 25, 20];

export default class D3Chart {
  constructor(element) {
    console.log("Hello word");
    const svg = d3
      .select(element)
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);

    svg
      .append("rect")
      .attr("x", 50)
      .attr("y", 50)
      .attr("width", 100)
      .attr("height", 400)
      .attr("fill", "gray");
  }
}
