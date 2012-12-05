function makeRGB(r,g,b)
{
    return 'rgb('+r+','+g+','+b+')';
}
function makeRGBA(r,g,b,a)
{
    return 'rgba('+r+','+g+','+b+','+a+')';
}

var owl=new Image();
owl.src="owl.png"
function draw()
{

    // get canvas
    var cvs=document.getElementById('canvas');
    var ctx=cvs.getContext('2d');

    var size=100;
    var alpha=0.15;
    for(var i=0; i<6; ++i) {
        ctx.fillStyle=makeRGBA(150,150,250,alpha);
        ctx.fillRect(0,40,size,size);
        size+=20;
//        alpha+=0.2;
        console.log("size="+size+" alpha="+alpha);
    }
    ctx.drawImage(owl,0,0);
}