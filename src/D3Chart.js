import * as d3 from "d3";

//const data = [20, 12, 16, 25, 20];

//const url = "https://udemy-react-d3.firebaseio.com/ages.json";
const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";
//const url = "../server/dataFiles/data.json";

const WIDTH = 800;
const HEIGHT = 500;

// d3.json("../server/dataFiles/data.json", function (data) {
//   console.log(data);
// });

export default class D3Chart {
  constructor(element) {
    console.log("Hello word");
    const svg = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH)
      .attr("height", HEIGHT);

    d3.json(url).then((data) => {
      // console.log(agesData);

      //get max value from array
      const max = d3.max(data, (d) => {
        return d.height;
      });

      const y = d3.scaleLinear().domain([0, max]).range([0, HEIGHT]);

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.name))
        .range([0, WIDTH])
        .padding(0.4);

      //generate x axis
      const xAxisCall = d3.axisBottom(x);
      svg.call(xAxisCall);

      //generate y axis
      const yAxisCall = d3.axisLeft(y);
      svg.call(yAxisCall);

      const rects = svg.selectAll("rect").data(data);
      rects
        .enter()
        .append("rect")
        .attr("x", (d) => x(d.name))
        .attr("y", (d) => HEIGHT - y(d.height)) //to make the bars start form botton
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
