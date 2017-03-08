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

            // Append text to inside the circle ('dy' attr is for vertical positioning)
            group.append("text")
                        .attr("x", 0)
                        .attr("dy", "-1em")
                        .attr("text-anchor", "middle")
                        .html(function(d){return "Revenue"});
            group.append("text")
                        .attr("x", 0)
                        .attr("dy", "0em")
                        .attr("text-anchor", "middle")
                        .html(function(d){return "200.000€"});

            arcs.append("path")
                        .attr("d", arc)
                        .attr("fill", function (d) { return color(d.data); });


            var margin = {
                top: 30,
                right: 20,
                bottom: 30,
                left: 50
            };
            var width = 85;
            var height = 20;

            var parseDate = d3.time.format("%d-%b-%y").parse;

            var x = d3.time.scale().range([0, width]);
            var y = d3.scale.linear().range([height, 0]);

            var xAxis = d3.svg.axis().scale(x)
                .orient("bottom").ticks(5);

            var yAxis = d3.svg.axis().scale(y)
                .orient("left").ticks(5);

            var valueline = d3.svg.line()
                .x(function (d) {
                return x(d.date);
                })
                .y(function (d) {
                return y(d.close);
            });
            
            var svg = d3.select("g")
                .append("svg")
                .attr("x", -40)
                .attr("y", 5)
                .attr("r", 25)
                .attr("fill", "none")
                .append("g");

            // Get the data
            var data = [{
                date: "1-May-12",
                close: "6000000"
            }, {
                date: "30-Apr-12",
                close: "0"
            }, {
                date: "27-Apr-12",
                close: "3"
            }, {
                date: "26-Apr-12",
                close: "2"
            }, {
                date: "25-Apr-12",
                close: "0"
            }];

            data.forEach(function (d) {
                d.date = parseDate(d.date);
                d.close = +d.close;
            });

            // Scale the range of the data
            x.domain(d3.extent(data, function (d) {
                return d.date;
                }));
            y.domain([0, d3.max(data, function (d) {
                return d.close;
                })]);

            svg.append("path") // Add the valueline path.
            .attr("d", valueline(data));

            });
        }
    };
});
