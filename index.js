// // Margin conversation 
// const margin = {
//     top: 50,
//     right: 50,
//     bottom: 50,
//     left: 50
// };

// // Define width and height of the working place with margin (bar)
// const width = 900 - margin.left - margin.right;
// const height = 900 - margin.top - margin.bottom;

// // Create an svg element
// const svg = d3.select('body').append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .append('g')
//     .attr('transform', `translate(${margin.left}, ${margin.top})`);

// // Set x scaler and axis
// const x = d3.scaleLinear()
//     .range([0, width]);

// const xAxis = d3.axisTop()
//     .scale(x);

// svg
//     .append('g')
//     .attr('class', 'axis-x')
//     .call(xAxis);


// // Set y scaler and axis
// const y = d3.scaleBand()
//     .range([0, height]);

// const yAxis = d3.axisLeft()
//     .scale(y);

// svg.append('g')
//     .attr('class', 'axis-y')
//     .call(yAxis);


// const draw = (data) => {

//     const barHeight = 70;
//     const barOffset = 3;

//     // Fix maximum width value, based on value of the most wide item
//     const valueRange = [
//         0,
//         d3.max(data, d => d.value + 300)
//     ];

//     x.domain(valueRange);
//     y.domain(data.map(d => d.title))
//         .range([0, data.length * barHeight + data.length * barOffset - barOffset]);

//     const bars = svg.selectAll('.bar').data(data);

//     bars
//         .exit()
//         .transition()
//         .duration(1000)
//         .attr('width', 0)
//         .style('fill', 'red')
//         .remove();

//     const addBars = bars
//         .enter()
//         .append('rect')
//         .attr('class', 'bar')
//         .attr('height', barHeight);


//     addBars.merge(bars)
//         .transition()
//         .duration(1000)
//         .attr('width', d => x(d.value))
//         .attr('y', (d, n) => n * barHeight + n * barOffset);

//     svg
//         .select('.axis-x')
//         .transition()
//         .call(xAxis);

//     svg
//         .select('.axis-y')
//         .transition()
//         .call(yAxis);
// }


// Promise.all([
//     d3.json('http://localhost:8005/api/2/btc_usd/depth')
//         .then(d => ({ name: 'btc', ...d })),
//     d3.json('http://localhost:8005/api/2/ltc_usd/depth')
//         .then(d => ({ name: 'ltc', ...d })),
//     d3.json('http://localhost:8005/api/2/eth_usd/depth')
//         .then(d => ({ name: 'eth', ...d })),
// ]).then(result => {
//     data = result.map((depth, n) => ({ id: n, title: depth.name, value: depth.bids[0][0] }));
//     draw(data);
// });


// onChangeBar = () => {
//     data[1].value = 256;
//     data[0].value = 154;
//     data.splice(2, 1);
//     draw();
// }




// Calculate the complexity of text based on most common English Words
const commonEnglishWords = ["the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", 
                "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", 
                "from", "or", "one", "had", "by", "word", "but", "not", "what", "all", "were", "we", 
                "when", "your", "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", 
                "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", 
                "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", 
                "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", 
                "been", "call", "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", 
                "made", "may", "part"];


const complexText = (text) => {

  const wordsArray = text.replace(/[,.!?]/, "").split(/\s+/);
  console.log(wordsArray);

  let numberMatches = 0;

  wordsArray.forEach((word) => {
    if(commonEnglishWords.some(e => e.toUpperCase() === word.toUpperCase())) {
      numberMatches++;
    }
  });

  const textComplexity = (numberMatches / wordsArray.length * 100).toFixed(2);
  
  return `${textComplexity}%`;

};

console.log(complexText("Is there is some new thing over there?"));  // Output 62,5%
console.log(complexText("Do you remember when the Second world War begin?"));  // Output 44,44%
console.log(complexText("seconder adfgbadb athwrtb aerghwetbwr adfbeqttgrds fgqer"));  // Output 0%












