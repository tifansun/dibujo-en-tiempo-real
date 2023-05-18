function setup(){
    canvas = createCanvas(500,400);
    background("lightblue");
    canvas.position(600,100);

    video = createCapture(VIDEO);
    video.size(500, 400);
    video.position(50, 100);
}