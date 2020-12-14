//setup
const canvas = document.createElement("canvas");
const MAX_WIDTH = document.body.clientWidth;
const MAX_HEIGHT = document.body.clientHeight;

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
document.body.appendChild(canvas);

const context = canvas.getContext("2d");
//




function triangle(x1,y1,x2,y2,x3,y3,color){
    context.beginPath
    context.moveTo(x1,y1);
    
    context.lineTo(x2,y2);
    context.lineTo(x3,y3);
    context.lineTo(x1,y1);

    context.fillStyle = color;
    context.fill();

}

function rectangle(x,y,width,height,color){
    context.fillStyle = color;
    context.fillRect(x,y,width,height);
};

function tree(x,y,width,height,leaves) {

    for (let i = 0; i < leaves; i++) {
        triangle(x,y+height/(leaves+1)+i*height/(leaves+1),x+width/2,y+i*height/(leaves+1),x+width,y+height/(leaves+1)+i*height/(leaves+1),"green");    
    }


    rectangle(x+width/3,y+height/(leaves+1)*leaves,width/3,height/(leaves+1),"brown");

};

function random(min,max){
    return Math.round(Math.random() * (max - min)) + min;
};


for (let i = 0; i < 300; i++) {
    tree(random(0,MAX_WIDTH),random(0,MAX_HEIGHT),MAX_WIDTH/random(15,20),MAX_HEIGHT/random(15,20),random(3,6));
}






//"hsl()"