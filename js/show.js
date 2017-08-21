function show_cell(svg, i, j, state) {

    if (state) {
        svg.append("circle")
            .attr("cx", i * dx + dx / 2)
            .attr("cy", j * dy + dy / 2)
            .attr("r", dx / 2 - 1)
            .attr("fill", "orange")

    }
}

function show_all_cell(tArray) {
    svg.selectAll("circle").remove();
    for (var i = 0; i < tArray.length; i++) {
        for (var j = 0; j < tArray[0].length; j++) {
            show_cell(svg, i, j, tArray[i][j]);
        }
    }
}