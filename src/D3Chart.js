import * as d3 from "d3";

const data = [20, 12, 16, 25, 20];

const url = "https://udemy-react-d3.firebaseio.com/ages.json";
//const url = "../server/dataFiles/data.json";

// d3.json("../server/dataFiles/data.json", function (data) {
//   console.log(data);
// });

export default class D3Chart {
  constructor(element) {
    console.log("Hello word");
    const svg = d3
      .select(element)
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);

    d3.json(url).then((agesData) => {
      // console.log(agesData);
      const rects = svg.selectAll("rect").data(agesData);
      rects
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 100)
        .attr("y", 50)
        .attr("width", 50)
        .attr("height", (d) => d.age * 10)
        .attr("fill", (d) => {
          if (d.age > 10) {
            return "red";
          }
          return "green";
        });
    });

    // d3.json("../server/dataFiles/data.json").then((agesData) => {
    //   console.log(agesData);
    // });

    //ONLY one rect
    // svg
    //   .append("rect")
    //   .attr("x", 50)
    //   .attr("y", 50)
    //   .attr("width", 100)
    //   .attr("height", 400)
    //   .attr("fill", "gray");
  }
}
