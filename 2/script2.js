// d3.select('#chart')
//   .append('svg')
//     .attr('width', 600)
//     .attr('height', 400)
//     .style('background', "#93A1A1")
//   .append("rect")
//     .attr('x', 200)
//     .attr('y', 100)
//     .attr('height', 200)
//     .attr('width', 200)
//     .style('fill', '#CB4B19')
//   d3.select('svg')
//     .append('circle')
//     .attr('cx','300')
//     .attr('cy','200')
//     .attr('r','50')
//     .style('fill', '#840043')

var bardata = [20, 30, 105, 15, 85];

var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', '#C9D7D6')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
        .style('fill', '#C61C6F')
        .attr('width', barWidth)
        .attr('height', function(d) {
            return d;
        })
        .attr('x', function(d,i) {
            return i * (barWidth + barOffset);
        })
        .attr('y', function(d) {
            return height - d;
        })