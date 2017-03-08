define(function () {
    return {
        getHello: function () {
            define(["d3"], function(d3) {

                /*var canvas = d3.select("body")
                            .append("svg")
                            .attr("width", 500)
                            .attr("height", 500);

                var circle = canvas.append("circle")
                            .attr("cx", 250)
                            .attr("cy", 250)
                            .attr("r", 50)
                            .style("stroke-width", 5)
                            .style("stroke", "red")
                            .attr("fill", "none");
*/
            // Faked data
            var data = [40, 60];
            // Radius size
            var r = 50;

            var color = d3.scale.ordinal()
                        .range(["red", "blue"]);
            
            // Append chart to body and sized
            var canvas = d3.select("body").append("svg")
                        .attr("width", 100)
                        .attr("height", 100);
            
            var group = canvas.append("g")
                        .attr("transform", "translate(50, 50)");

            var arc = d3.svg.arc()
                        .innerRadius(45)
                        .outerRadius(r);

            var pie = d3.layout.pie()
                        .value(function (d) { return d; });

            var arcs = group.selectAll(".arc")
                        .data(pie(data))
                        .enter()
                        .append("g")
                        .attr("class", "arc");

            // Append text to inside the circle
            arcs.append("text")
                        .attr("dx", function(d){return -20})
                        .text(function(d){return "Revenue 200.000€"})

            arcs.append("path")
                        .attr("d", arc)
                        .attr("fill", function (d) { return color(d.data); });

            return canvas;

            });
        }
    };
});
