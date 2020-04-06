/* This is a modified version of Jeremy Rue's Wheel of Fortune
 * http://bl.ocks.org/jrue/a2aaf36b3c096925ccbf */

function custom_colors(n) {
  var colors= [ "#388E3C", "#1976D2", "#D32F2F", "#FFA000", "#388E3C", "#990099", "#0099c6", "#C2185B", "#81C784", "#D32F2F", "#1976D2", "#994499", "#4DD0E1", "#AED581", "#536DFE", "#FBC02D", "#C62828", "#AB47BC", "#66BB6A", "#90A4AE", "#0D47A1"];
  return colors[n % colors.length];
}

var padding = { top: 20, right: 40, bottom: 0, left: 0 },
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top - padding.bottom,
    r = Math.min(w, h) / 2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [];

d3.json("./incidents/general_incidents.json", function (error, data) {
    if (error) throw error;
    var svg = d3.select("#wheel")
        .append("svg")
        .data([data])
        .attr("viewBox", "0 0 500 500");

    var container = svg.append("g")
        .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");

    var vis = container
        .append("g");

    var pie = d3.layout.pie().sort(null).value(function (d) { return 1; });

    // declare an arc generator function
    var arc = d3.svg.arc().outerRadius(r);

    // select paths, use arc generator to draw
    var arcs = vis.selectAll("g.slice")
        .data(pie)
        .enter()
        .append("g")
        .attr("class", "slice");


    arcs.append("path")
        .attr("fill", function (d, i) { return custom_colors(i); })
        .attr("d", function (d) { return arc(d); });

    // add the text
    arcs.append("text").attr("transform", function (d) {
        d.innerRadius = 0;
        d.outerRadius = r;
        d.angle = (d.startAngle + d.endAngle) / 2;
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
    })
        .attr("text-anchor", "end")
        .text(function (d, i) {
            return data[i].title;
        });
    container.on("click", spin);

    function spin(d) {
        container.on("click", null);
        //all slices have been seen, all done
        if (oldpick.length == data.length) {
            container.on("click", null);
            return;
        }

        var ps = 360 / data.length,
            pieslice = Math.round(1440 / data.length),
            rng = Math.floor((Math.random() * 1440) + 360);

        rotation = (Math.round(rng / ps) * ps);
        picked = Math.round(data.length - (rotation % 360) / ps);
        picked = picked >= data.length ? (picked % data.length) : picked;

        if (oldpick.indexOf(picked) !== -1) {
            d3.select(this).call(spin);
            return;
        } else {
            oldpick.push(picked);
        }

        rotation += 90 - Math.round(ps / 2);
        vis.transition()
            .duration(3000)
            .attrTween("transform", rotTween)
            .each("end", function () {
                //mark incident as seen
                d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                    .attr("fill", "#111");
                //populate incident
                d3.select("#incident p")
                    .html("<h4 class=\"f4 center mw6\">" + data[picked].title + "</h4>" + data[picked].scenario);
                oldrotation = rotation;
                container.on("click", spin);
            });

        // start the timewatch
        container.on("click", stopwatch.start(), changeControls())
    }

    //make arrow
    svg.append("g")
        .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
        .append("path")
        .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
        .style({ "fill": "black" });

    //draw spin circle
    container.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 30)
        .style({ "fill": "white", "cursor": "pointer" });

    //spin text
    container.append("text")
        .attr("x", 0)
        .attr("y", 10)
        .attr("text-anchor", "middle")
        .text("SPIN")
        .style({ "color": "white", "font-weight": "bold", "font-size": "18px" });

    function rotTween(to) {
        var i = d3.interpolate(oldrotation % 360, rotation);
        return function (t) {
            return "rotate(" + i(t) + ")";
        };
    }

});
