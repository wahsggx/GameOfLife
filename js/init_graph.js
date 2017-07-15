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
function generate_glider_gun(x_count,y_count,tArray){
	for(var i=0;i<x_count;i++){
        tArray[i]=new Array();
		for(var j=0;j<y_count;j++){
            tArray[i][j]=0;
		}	
	}
	//TODO
    // tArray[1][1] = 1;
    // tArray[1][2] = 1;
    // tArray[2][1] = 1;
    // tArray[2][3] = 1;
    // tArray[3][1] = 1;
    tArray[2][1] = 1;
    tArray[2][2] = 1;
    tArray[2][3] = 1;

	return tArray;
}
