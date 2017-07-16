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

function generate_spider(x_count,y_count,tArray){
        for(var i = 0; i< x_count; i++){
            tArray[i] = new Array();
            for(var j = 0; j< y_count; j++){
                tArray[i][j] = 0;
            }
        }
        ///////////////////////////未完
        tArray[2+9][4+7] = 1; tArray[2+9][5+7] = 1;
        tArray[3+9][3+7] = 1; tArray[3+9][4+7] = 1; tArray[3+9][6+7] = 1; tArray[3+9][7+7] = 1; tArray[3+9][8+7] = 1;tArray[3+9][11+7] = 1;
        tArray[4+9][3+7] = 1; tArray[4+9][4+7] = 1; tArray[4+9][7+7] = 1; tArray[4+9][8+7] = 1;
        tArray[5+9][3+7] = 1; tArray[5+9][6+7] = 1; tArray[5+9][8+7] = 1;
        tArray[6+9][3+7] = 1; tArray[6+9][4+7] = 1; tArray[6+9][5+7] = 1; tArray[6+9][6+7] = 1; tArray[6+9][8+7] = 1;tArray[6+9][9+7] = 1;
        tArray[7+9][6+7] = 1; tArray[7+9][8+7] = 1; tArray[7+9][9+7] = 1;
        tArray[8+9][3+7] = 1; tArray[8+9][4+7] = 1; tArray[8+9][5+7] = 1;
        tArray[10+9][3+7] = 1; tArray[10+9][4+7] = 1;
        tArray[11+9][2+7] = 1; tArray[11+9][4+7] = 1;
        tArray[12+9][2+7] = 1; tArray[12+9][3+7] = 1;

        tArray[13+9][4+7] = 1; tArray[13+9][6+7] = 1;
        tArray[14+9][6+7] = 1;
        tArray[16+9][6+7] = 1;
        tArray[17+9][4+7] = 1;tArray[17+9][6+7] = 1;
        tArray[18+9][2+7] = 1;tArray[18+9][3+7] = 1;
        tArray[19+9][2+7] = 1;tArray[19+9][4+7] = 1;
        tArray[20+9][3+7] = 1;tArray[20+9][4+7] = 1;
        tArray[22+9][3+7] = 1;tArray[22+9][4+7] = 1;tArray[22+9][5+7] = 1;
        tArray[23+9][6+7] = 1;tArray[23+9][8+7] = 1;tArray[23+9][9+7] = 1;
        tArray[24+9][3+7] = 1;tArray[24+9][4+7] = 1;tArray[24+9][5+7] = 1;tArray[24+9][6+7] = 1;tArray[24+9][8+7] = 1;tArray[24+9][9+7] = 1;
        tArray[25+9][3+7] = 1;tArray[25+9][6+7] = 1;tArray[25+9][8+7] = 1;
        tArray[26+9][3+7] = 1;tArray[26+9][4+7] = 1;tArray[26+9][7+7] = 1;tArray[26+9][8+7] = 1;
        tArray[27+9][3+7] = 1;tArray[27+9][4+7] = 1;tArray[27+9][6+7] = 1;tArray[27+9][7+7] = 1;tArray[27+9][8+7] = 1;
        tArray[28+9][4+7] = 1;tArray[28+9][5+7] = 1;

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
