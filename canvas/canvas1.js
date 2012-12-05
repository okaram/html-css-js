function makeRGB(r,g,b)
{
    return 'rgb('+r+','+g+','+b+')';
}
function makeRGBA(r,g,b,a)
{
    return 'rgba('+r+','+g+','+b+','+a+')';
}

function drawRectangles(ctx)
{
    var size=100;
    var alpha=0.15;
    for(var i=0; i<6; ++i) {
        ctx.fillStyle=makeRGBA(150,150,250,alpha);
        ctx.fillRect(0,40,size,size);
        size+=20;
//        alpha+=0.2;
        console.log("size="+size+" alpha="+alpha);
    }

}
//var owl=new Image();
//owl.src="owl.png"

var owl=new Object();
owl.x=20
owl.y=20

owl.img=new Image();
owl.img.src="owl.png";
var ctx;

function drawSprite(ctx, sprt)
{
    ctx.drawImage(sprt.img,sprt.x,sprt.y);
}

function draw()
{

    // get canvas
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    drawRectangles(ctx);
    drawSprite(ctx,owl);
}

function keyPressed(event)
{
    if(event.keyCode==37) // <-
        owl.x-=20;
    else if (event.keyCode==38) // up
        owl.y-=20;
    else if (event.keyCode==39) // ->
        owl.x+=20;
    else if (event.keyCode==40) // down
        owl.y+=20;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawSprite(ctx,owl);
}