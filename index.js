// Margin conversation 
const margin = {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50,
}

// Define width and height of the working place with margin (bar)
const width = 900 - margin.left - margin.right;
const height = 900 - margin.top - margin.bottom;

// Create an svg element
const svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("tranform", `translate(${margin.left}, ${margin.top})`);

const data = [
    { id: 1, title: 'hello', value: 22 },
    { id: 2, title: 'hello1', value: 2 },
    { id: 3, title: 'hello2', value: 102 },
    { id: 4, title: 'hello3', value: 1000 },
    { id: 5, title: 'hello4', value: 123 },
];

// Set maximum width in function (scaleLiner)
const x = d3.scaleLinear()
    .range([0, width]);

const xAxis = d3.axisBottom()
    .scale(x);

svg
    .append("g")
    .attr("class", "axis-x")
    .call(xAxis);

const draw = () => {

    const barHeight = 50;
    const barOffset = 3;

    const bars = svg.selectAll(".bar").data(data);

    // Fix maximum width value, based on value of the most wide item
    const valueRange = [
        0,
        d3.max(data, (d) => d.value)
    ];

    x.domain(valueRange);

    // Add new items initially
    const addBars = bars
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("height", barHeight);

    // Remove bars 
    bars.exit()
        .transition()
        .duration(1000)
        .style("fill", "rgb(243, 47, 47)")
        .style("opacity", "0")
        .remove();

    //Update items every time draw is colling, comparing with existed values
    addBars.merge(bars)
        .transition()
        .duration(1000)
        .style("fill", "rgb(96, 159, 211)")
        .attr("width", (d) => x(d.value))
        .attr("y", (d, n) => n * barHeight + n * barOffset);

    // // Update items every time draw is colling
    // bars
    //     .attr("class", "bar updated")
    //     .attr("width", (d) => d.value)
    //     .attr("y", (d, n) => n * 100);

    svg.select(".axis-x")
        .transition()
            .call(xAxis);
};

draw();


// Imitate dynamicly update with timer
setInterval(() => {

    const elementNum = Math.round(Math.random() * 4);
    data[elementNum].value = Math.round(Math.random() * 800);
    // const elementNumToDelete = Math.round(Math.random() * 4);

    draw();

}, 1000);


// onChangeBar = () => {
//     data[1].value = 256;
//     data[0].value = 154;
//     data.splice(4, 1);
//     draw();
// }









