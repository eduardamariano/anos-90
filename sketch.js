let cor;
let posicaoHorizontal;
let posicaoVertical; 

function setup() {

    createCanvas(900, 900);
    background(color(15500, 2500, 0));
    cor = "color(random(0,155), random(0, 150), random(0,150))";
    posicaoHorizontal = 200;
    posicaoVertical = 200;
    }

function draw() {

     fill(cor);
    circle(posicaoHorizontal, posicaoVertical, 50);

    if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 8;
    }

    if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 9;
    }

if(mouseY < posicaoVertical) {
    posicaoVertical --;
}

if(mouseY > posicaoVertical) {
    posicaoVertical ++;
}

    if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0,255),
random(0, 100));
    }

}
 {

circle(circuloX[contador], circuloY[contador], 50);

circuloX[contador] += random(0, 3);

circuloY[contador] += random(-3, 3);

if(circuloX[contador] >= width){

circuloX[contador] = 0;

circuloY[contador] = random(height);

}

}
