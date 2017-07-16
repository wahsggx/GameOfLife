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
function generate_test(x_count,y_count,tArray){
    for(var i=0;i<x_count;i++){
        tArray[i]=new Array();
        for(var j=0;j<y_count;j++){
            tArray[i][j]=0;
        }
    }

    tArray[2][1] = 1;
    tArray[2][2] = 1;
    tArray[2][3] = 1;

    return tArray;
}


//生成glider_gun
function generate_glider_gun(x_count,y_count,tArray){
    for(var i = 0; i< x_count; i++){
        tArray[i] = new Array();
        for(var j = 0; j< y_count; j++){
            tArray[i][j] = 0;
        }
    }
	///////////////////////////未完
    tArray[1][5] = 1;tArray[1][6] = 1;
    tArray[2][5] = 1;tArray[2][6] = 1;
    tArray[4][6] = 1;
    tArray[5][5] = 1;tArray[5][7] = 1;
    tArray[6][5] = 1;tArray[6][7] = 1;
    tArray[7][6] = 1;
    tArray[10][3] = 1;tArray[10][4] = 1;tArray[10][6] = 1;tArray[10][8] = 1;tArray[10][9] = 1;
    tArray[11][3] = 1;tArray[11][9] = 1;
    tArray[12][4] = 1;tArray[12][8] = 1;
    tArray[13][5] = 1;tArray[13][6] = 1;tArray[13][7] = 1;
    tArray[20][8] = 1;
    tArray[21][9] = 1;
    tArray[22][7] = 1;tArray[22][8] = 1;tArray[22][9] = 1;
    tArray[27][2] = 1;tArray[27][3] = 1;tArray[27][4] = 1;tArray[27][5] = 1;tArray[27][6] = 1;
    tArray[28][1] = 1;tArray[28][3] = 1;tArray[28][4] = 1;tArray[28][5] = 1;tArray[28][7] = 1;tArray[28][16] = 1;
    tArray[29][2] = 1;tArray[29][6] = 1;tArray[29][14] = 1;tArray[29][16] = 1;
    tArray[30][3] = 1;tArray[30][4] = 1;tArray[30][5] = 1;tArray[30][15] = 1;tArray[30][16] = 1;
    tArray[31][4] = 1;
    tArray[35][3] = 1;tArray[35][4] = 1;tArray[35][23] = 1;
    tArray[36][3] = 1;tArray[36][4] = 1;
    tArray[37][22] = 1;tArray[37][23] = 1;
	return tArray;
}
