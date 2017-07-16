function getData() {
    dx = document.getElementById("dx").value;
    dy = document.getElementById("dy").value;
    speed = document.getElementById("speed").value;

}


//random_life按钮执行函数
function func_button_random() {
    svg.selectAll("*").remove();
    x_count = 30;
    y_count = 30;
    generate_checkerboard(x_count*dx,y_count*dy,x_count,y_count,svg);
    cell_life = generate_random_matrix(x_count,y_count,Math.random());
    show_all_cell(cell_life);
    var button_run_pause = document.getElementById("run");
    button_run_pause.disabled = false;
}

//test按钮执行函数
function func_button_test() {
    svg.selectAll("*").remove();
    x_count = 5;
    y_count = 5;
    generate_checkerboard(x_count*dx,y_count*dy,x_count,y_count,svg);
    cell_life = generate_test(x_count,y_count,board);
    show_all_cell(cell_life);
    var button_run_pause = document.getElementById("run");
    button_run_pause.disabled = false;
}

//glider_gun按钮执行函数
function func_button_glider_gun() {
    svg.selectAll("*").remove();
    x_count = 38;
    y_count = 24;
    generate_checkerboard(x_count*dx,y_count*dy,x_count,y_count,svg);
    cell_life = generate_glider_gun(x_count,y_count,board);
    show_all_cell(cell_life);
    var button_run_pause = document.getElementById("run");
    button_run_pause.disabled = false;
}

//run按钮执行函数
function func_button_run_pause() {
    var button_run_pause = document.getElementById("run");
    if(state){
        Timer = setInterval(run,speed);
        button_run_pause.innerHTML="pause";
    }else{
        clearInterval(Timer);
        button_run_pause.innerHTML="run";
    }
    state = !state;
}


//run函数
function run(){
    cell_life = change_cell(x_count,y_count,cell_life);
    show_all_cell(cell_life);
}


