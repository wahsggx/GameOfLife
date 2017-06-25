//生成随机初始状态
function generate_random_matrix(x_count,y_count,probability_of_exist){
	var tArray = new Array(); 
	for(var k=0;k<x_count;k++){ 
		tArray[k]=new Array(); 
		for(var j=0;j<y_count;j++){
			tArray[k][j]=Math.round(Math.random()+(probability_of_exist-0.5));
		}	
	}
	return tArray;
}

//生成glider_gun
function generate_glider_gun(){
	var x_count = 50;
	var y_count = 50;
	var tArray = new Array(); 
	for(var k=0;k<x_count;k++){ 
		tArray[k]=new Array(); 
		for(var j=0;j<y_count;j++){
			tArray[k][j]=0;
		}	
	}
	//TODO
	
	return tArray;
}
