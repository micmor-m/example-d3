import * as d3 from "d3";

//const data = [20, 12, 16, 25, 20];

//const url = "https://udemy-react-d3.firebaseio.com/ages.json";
const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";
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
      .attr("width", 800)
      .attr("height", 500);

    d3.json(url).then((data) => {
      // console.log(agesData);

      const y = d3.scaleLinear().domain([0, 272]).range([0, 500]);

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.name))
        .range([0, 800])
        .padding(0.4);

      const rects = svg.selectAll("rect").data(data);
      rects
        .enter()
        .append("rect")
        .attr("x", (d) => x(d.name))
        .attr("y", 0)
        .attr("width", x.bandwidth)
        //.attr("height", (d) => d.height)
        .attr("height", (d) => y(d.height))
        .attr("fill", "gray");
    });

    // d3.json(url).then((data) => {
    //   // console.log(agesData);
    //   const rects = svg.selectAll("rect").data(data);
    //   rects
    //     .enter()
    //     .append("rect")
    //     .attr("x", (d, i) => i * 100)
    //     .attr("y", 50)
    //     .attr("width", 50)
    //     .attr("height", (d) => d.age * 10)
    //     .attr("fill", (d) => {
    //       if (d.age > 10) {
    //         return "red";
    //       }
    //       return "green";
    //     });
    // });
  }
}
