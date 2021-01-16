canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var last_position_x,last_position_y;
color="Black";
width_of_line=2;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("my_canvas").width=new_width;
    document.getElementById("my_canvas").height=new_height;
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    console.log("my_touchstart");
    last_position_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
    current_position_mouse_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_mouse_y=e.touches[0].clientY-canvas.offsetTop;
   
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y coordinates=");
        console.log("X="+last_position_x+"Y="+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);
        console.log("current position of x and y coordinates=");
        console.log("X="+current_position_mouse_x+"Y="+current_position_mouse_y);
        ctx.lineTo(current_position_mouse_x,current_position_mouse_y);
        ctx.stroke(); 
    last_position_x=current_position_mouse_x;
    last_position_y=current_position_mouse_y;
}
function cleararea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}