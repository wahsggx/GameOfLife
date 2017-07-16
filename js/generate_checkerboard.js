function generate_checkerboard(width,height,x_count,y_count,svg){

	for (var i = 0;i<=x_count;i++){
		svg.append('line')
		.attr("x1",i*dx)
		.attr("y1",0)
		.attr("x2",i*dx)
		.attr("y2",height)
		.attr("stroke","gray")
		.attr("stroke-width",0.2)
	}
	for (var j = 0;j<=y_count;j++){	
		svg.append('line')
		.attr("x1",0)
		.attr("y1",j*dy)
		.attr("x2",width)
		.attr("y2",j*dy)
		.attr("stroke","gray")
		.attr("stroke-width",0.2)
	}

}