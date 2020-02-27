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
    { id: 4, title: 'hello3', value: 312 },
];


data.map( (item) => {
    svg.append("rect")
        .attr("class", "bar")
        .attr("height", 100)
});


const draw = () => {
    d3.selectAll(".bar")
        .data(data)
            .attr("width", (d) => d.value )
            .attr("y", (d, n) => n * 100 )
};


draw();

