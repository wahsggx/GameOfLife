function show_cell(svg,i,j,state){
	 svg.append("circle")
		.attr("cx",i*dx+dx/2)
		.attr("cy",j*dy+dy/2)
		.attr("r",dx/2-1)
		 .attr("fill","orange")
	if(!state){
		svg.append("circle")
		.attr("cx",i*dx+dx/2)
		.attr("cy",j*dy+dy/2)
		.attr("r",dx/2-1)
		 .attr("fill","white")
		 .attr("stroke-width",0)
		 .attr("stroke","white")
	
	}
}

function show_all_cell(tArray){

	for(var i=0;i<tArray.length;i++){
		for (var j = 0;j<tArray[0].length;j++){
				show_cell(svg,i,j,tArray[i][j]);
		}
	}		
}