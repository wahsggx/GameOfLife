function get_next_cell_status(i,j,tArray){
	var sum_i_j=0;
	var x_count=tArray.length;
	var y_count=tArray[0].length;
	if(i == 3 && j == 2){
		console.log(tArray);
	}
	for(var m=i-1;m<=i+1;m++){
		for(var n=j-1;n<=j+1;n++){
			if(m<0||m>=x_count||n<0||n>=y_count||(m==i&&n==j)){
				continue;
			}else{
				sum_i_j+=tArray[m][n];
			}

		}
	}
	if(i == 3 && j == 2){
		console.log('sum_i_j:'+sum_i_j);
	}
	var next_state;
	if(sum_i_j<2 ||sum_i_j>3){
		next_state=0;
	}else if(sum_i_j == 2){
		next_state = tArray[i][j];
	}else{
		next_state = 1;
	}

	return 	next_state;

}


function change_cell(x_count,y_count,tArray){
    var update_matrix = new Array();
	for(var i=0;i<x_count;i++){
        update_matrix[i]=new Array();
        for(var j=0;j<y_count;j++){
            update_matrix[i][j]=tArray[i][j];
        }
    }

	for(var i=0;i<x_count;i++){
		for(var j=0;j<y_count;j++){
			update_matrix[i][j] = get_next_cell_status(i,j,tArray);
		}
	}
	return update_matrix;	
}