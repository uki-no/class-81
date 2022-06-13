canvas = document.getElementById("myCanvas")
ctx= canvas.getContext("2d")
color="#3d523e"

ctx.beginPath();
ctx.strokeStyle= color
ctx.lineWidth= 5
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()

canvas.addEventListener("mousedown",mymouse_down)

function mymouse_down(e)
{
    mouse_x=e.clientX-canvas.offsetLeft
    mouse_y=e.clientY-canvas.offsetTop
    console.log("mouse_x="+mouse_x+"mouse_y="+mouse_y)

    circle(mouse_x,mouse_y)
}

function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle= color
    ctx.lineWidth= 5
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI)
    ctx.stroke()
}




