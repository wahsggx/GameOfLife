/**
 * Created by Hokkaido on 2017/7/15.
 */
var width = 550;
var height = 550;
var x_count = 30;
var y_count = 30;

var dx = width/(x_count);
var dy = height/(y_count);

var cell_life;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

window.onload=function(){


    var Timer;
    //实现功能
    function run(){
        cell_life = change_cell(x_count,y_count,cell_life);
        show_all_cell(cell_life);
    }
    //button_random按钮
    var button_random=document.getElementById("random_life");
    button_random.onclick=function(){
        cell_life = generate_random_matrix(x_count,y_count,Math.random());
        show_all_cell(cell_life);
        var button_run_pause = document.getElementById("run");
        button_run_pause.disabled = false;
    }

    //glider_gun按钮
    var button_glider = document.getElementById("glider_gun");
    button_glider.onclick = function(){
        cell_life = generate_glider_gun();
        show_all_cell(cell_life);
        var button_run_pause = document.getElementById("run");
        button_run_pause.disabled = false;
    }

    //run和pause按钮
    var state=true;

    var button_run_pause = document.getElementById("run");
    button_run_pause.onclick = function(){
        if(state){
            Timer = setInterval(run,50);
            button_run_pause.innerHTML="pause";
        }else{
            clearInterval(Timer);
            button_run_pause.innerHTML="run";
        }
        state = !state;
    }
}