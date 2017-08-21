function getData() {
    var sizeChange = false;
    dx = document.getElementById("dx").value;
    dy = document.getElementById("dy").value;
    if (dx != dx_old || dy != dy_old) {
        sizeChange = true;
    }
    speed = document.getElementById("speed").value;

    if (dx == "") {
        sizeChange = true;
        dx = 20;
        document.getElementById("dx").value = dx;
    }

    if (dy == "") {
        dy = 20;
        sizeChange = true;
        document.getElementById("dy").value = dy;
    }
    dx_old = dx;
    dy_old = dy;

    if (speed == "") {
        speed = 200;
        document.getElementById("speed").value = speed;
    }
    //generate_checkerboard(x_count*dx,y_count*dy,x_count,y_count,svg);
    //show_all_cell(cell_life);
    //Timer = setInterval(run,speed);

    switch (model) {
        case 1:
            svg.selectAll("*").remove();
            x_count = Math.floor(svg_width / dx);
            y_count = Math.floor(svg_height / dy);
            generate_checkerboard(x_count * dx, y_count * dy, x_count, y_count, svg);
            if (initState || sizeChange) {
                cell_life = generate_random_matrix(x_count, y_count, Math.random());
            }
            show_all_cell(cell_life);
            break;
        case 2:
            svg.selectAll("*").remove();
            x_count = 38;
            y_count = 24;
            generate_checkerboard(x_count * dx, y_count * dy, x_count, y_count, svg);
            if (initState)
                cell_life = generate_glider_gun(x_count, y_count, board);
            show_all_cell(cell_life);
            break;
        default:
            break;
    }
    initState = false;
    if (state) {
        clearInterval(Timer);
        Timer = setInterval(run, speed);
        state = !state;
    } else {
        clearInterval(Timer)
        Timer = setInterval(run, speed);
    }
    var button_run_pause = document.getElementById("run");
    button_run_pause.innerHTML = "pause";

}


//random_life按钮执行函数
function func_button_random() {
    model = 1;
    initState = false;
    svg.selectAll("*").remove();
    //getData();
    x_count = Math.floor(svg_width / dx);
    y_count = Math.floor(svg_height / dy);
    generate_checkerboard(x_count * dx, y_count * dy, x_count, y_count, svg);
    cell_life = generate_random_matrix(x_count, y_count, Math.random());
    show_all_cell(cell_life);
    var button_run_pause = document.getElementById("run");
    button_run_pause.disabled = false;
}


//glider_gun按钮执行函数
function func_button_glider_gun() {
    model = 2;
    initState = false;
    svg.selectAll("*").remove();
    x_count = 38;
    y_count = 24;
    //getData();
    generate_checkerboard(x_count * dx, y_count * dy, x_count, y_count, svg);
    cell_life = generate_glider_gun(x_count, y_count, board);
    show_all_cell(cell_life);
    var button_run_pause = document.getElementById("run");
    button_run_pause.disabled = false;
}

//run按钮执行函数
function func_button_run_pause() {
    var button_run_pause = document.getElementById("run");
    if (state) {
        Timer = setInterval(run, speed);
        button_run_pause.innerHTML = "pause";
    } else {
        clearInterval(Timer);
        button_run_pause.innerHTML = "run";
    }
    state = !state;
}


//run函数
function run() {
    cell_life = change_cell(x_count, y_count, cell_life);
    show_all_cell(cell_life);
}


