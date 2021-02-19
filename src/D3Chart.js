import * as d3 from "d3";

//const data = [20, 12, 16, 25, 20];

//const url = "https://udemy-react-d3.firebaseio.com/ages.json";
const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";
//const url = "../server/dataFiles/data.json";
const MARGIN = { TOP: 10, BOTTON: 50, LEFT: 70, RIGHT: 10 };
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTON;

// d3.json("../server/dataFiles/data.json", function (data) {
//   console.log(data);
// });

export default class D3Chart {
  constructor(element) {
    const vis = this; //to make sure to call always the instance of D3Chart
    //console.log("Hello word");
    vis.svg = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTON)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP} )`);

    //label x axis
    vis.svg
      .append("text")
      .attr("x", WIDTH / 2)
      .attr("y", HEIGHT + 50)
      .attr("text-anchor", "middle")
      .text("The word's tallest men");

    //label y axis
    vis.svg
      .append("text")
      .attr("x", -HEIGHT / 2)
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .text("Height in cm")
      .attr("transform", "rotate(-90)");

    vis.xAxisGroup = vis.svg
      .append("g")
      .attr("transform", `translate(0, ${HEIGHT})`);

    vis.yAxisGroup = vis.svg.append("g");

    Promise.all([
      d3.json("https://udemy-react-d3.firebaseio.com/tallest_men.json"),
      d3.json("https://udemy-react-d3.firebaseio.com/tallest_women.json"),
    ]).then((datasets) => {
      console.log(datasets);
    });

    // d3.json(url).then((data) => {
    //   // console.log(agesData);
    //   //repeat action every second
    //   vis.data = data;
    //   d3.interval(() => {
    //     //console.log("Hello world");
    //     vis.update();
    //   }, 1000);
    // });
  }

  update() {
    const vis = this;
    //get max value from array
    const max = d3.max(vis.data, (d) => {
      return d.height;
    });

    //const y = d3.scaleLinear().domain([0, max]).range([HEIGHT, 0]);
    //const y = d3.scaleLinear().domain([250, max]).range([HEIGHT, 0]); //y start from 250
    const y = d3
      .scaleLinear()
      .domain([
        d3.min(vis.data, (d) => d.height) * 0.95,
        d3.max(vis.data, (d) => d.height),
      ])
      .range([HEIGHT, 0]);

    const x = d3
      .scaleBand()
      .domain(vis.data.map((d) => d.name))
      .range([0, WIDTH])
      .padding(0.4);

    //generate x axis
    const xAxisCall = d3.axisBottom(x);
    vis.xAxisGroup.call(xAxisCall);

    //generate y axis
    const yAxisCall = d3.axisLeft(y);
    vis.yAxisGroup.call(yAxisCall);

    // DATA JOIN
    const rects = vis.svg.selectAll("rect").data(vis.data);
    console.log(rects);

    // EXIT
    rects.exit().remove();

    // UPDATE
    rects
      .attr("x", (d) => x(d.name))
      .attr("y", (d) => y(d.height)) //to make the bars start form botton
      .attr("width", x.bandwidth)
      //.attr("height", (d) => d.height)
      .attr("height", (d) => HEIGHT - y(d.height));

    // ENTER
    rects
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.name))
      .attr("y", (d) => y(d.height)) //to make the bars start form botton
      .attr("width", x.bandwidth)
      //.attr("height", (d) => d.height)
      .attr("height", (d) => HEIGHT - y(d.height))
      .attr("fill", "gray");
  }
}
