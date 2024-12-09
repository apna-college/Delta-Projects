let canvas=document.querySelector(".canva");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let ctx=canvas.getContext("2d");
input=document.querySelector("#brush-size");
window.addEventListener("resize",()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
});
let allparticle=[];
let mouse={
    x:undefined,
    y:undefined,
}
let hue=0;
class particle{
    constructor(){
        this.x=mouse.x;
        this.y=mouse.y;
        this.size=Math.random()*15;
        this.speedX=Math.random()*8-4;
        this.speedY=Math.random()*8-4;
        this.color=`hsl(${hue},100%,50%)`;
    }
    update(){
        this.x+=this.speedX;
        this.y+=this.speedY;
        if(this.size>0.3){
            this.size-=0.2;
        }
    }
    brush() {
        ctx.fillStyle=this.color;
        ctx.strokeStyle="red";
        ctx.lineWidth=3;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
    
}

canvas.addEventListener("click",(event)=>{
    mouse.x=event.x;
    mouse.y=event.y;
    for(let i=0;i<10;i++){
        allparticle.push(new particle());
        hue=hue+(Math.random()*30);
    }
})
canvas.addEventListener("mousemove",(event)=>{
    mouse.x=event.x;
    mouse.y=event.y;
    for(let i=0;i<2;i++){
        allparticle.push(new particle());
        hue=hue+1;
    }
});

function animate(){
        // mouse.x=Math.random()*canvas.width;
        // mouse.y=Math.random()*canvas.height;
        // for(let i=0;i<2;i++){
        //     allparticle.push(new particle());
        //     hue=hue+1;
        // }
        ctx.clearRect(0,0,canvas.width,canvas.height);
        // ctx.fillStyle="rgba(0,0,0,0.02)";
        // ctx.fillRect(0, 0 ,canvas.width ,canvas.height)
        for(let i=0;i<allparticle.length;i++){
            allparticle[i].update();
            allparticle[i].brush();
            for(let j=i;j<allparticle.length;j++){
                let dx=allparticle[i].x-allparticle[j].x;
                let dy=allparticle[i].y-allparticle[j].y;
                let distance=Math.sqrt(dy*dy+dx*dx);
                if(distance<=100){
                    ctx.beginPath();
                    ctx.strokeStyle=allparticle[i].color;
                    ctx.lineWidth=allparticle[i].size/10;
                    ctx.moveTo(allparticle[i].x,allparticle[i].y);
                    ctx.lineTo(allparticle[j].x,allparticle[j].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
            if(allparticle[i].size<=0.3){
                allparticle.splice(i,1);
            }
        }
    
    requestAnimationFrame(animate);
}
animate();
console.log(allparticle);



