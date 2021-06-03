var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black"
width_of_line= 2;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
  color = document.getElementById("color").value ;
  Width = document.getElementById("Width").value;
  radius = document.getElementById("radius").value;
  mouseEvent = "mouseDown"
}


canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown") {
        console.log("Last position of x and y coordinates = ")
        console.log("x = "+ last_position_of_x + "Y=" + last_position_of_y);
        
        console.log("Current position of x and y coordinates = ")
        console.log("x = "+ current_position_of_x + "Y=" + current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = Width;
        ctx.arc(current_position_of_x, current_position_of_y, radius,0 , 2 * Math.PI)
        ctx.stroke();
       
        
        

        
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}
function clearArea()
{
   ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
   
}
