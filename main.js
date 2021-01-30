var a=1.8,b=2.1,c=1.2,d=2.9; // -3 <a,b,c,d< 3
var x=1, y=1;
var aSlider, bSlider, cSlider, dSlider;
const inputs = document.querySelectorAll("input");
inputs.forEach(input => console.log(input));
// Initilization
function setup(){
    aSlider=createSlider(-3,3,a,0.01);
    bSlider=createSlider(-3,3,a,0.01);
    cSlider=createSlider(-3,3,c,0.01);
    dSlider=createSlider(-3,3,d,0.01);
    var btn= createButton("Redraw");
    btn.mousePressed(function(){
        a = aSlider.value();
        b = bSlider.value();
        c = cSlider.value();
        d = dSlider.value();
        background(17);
    });
    createCanvas(500,500); 
    stroke(255,163,26,50); // rgba values (100,0,255,50)
}
// Drawing
function draw(){
    //Xn+1 = sin(ayn)-cos(bxn)
    //Yn+1= sin(cxn)- cos(dyn)
    for (var i=0; i<1000; i++){
        let oldX= x;
        let oldY= y;
        x = sin(a * oldY) - cos(b * oldX);
        y = sin(c * oldX) - cos(d * oldY);
        let scaledX = map(x, -2, 2, 0, width);
        let scaledY = map(y, -2, 2, 0, height);
        point(scaledX, scaledY);
    }
}
