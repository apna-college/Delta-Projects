let h=document.getElementById('hr');
let m=document.getElementById('min');
let s=document.getElementById('sec');

function timclock()
{
    let date1=new Date();

    let hh1=date1.getHours();
    let mm1=date1.getMinutes();
    let ss1=date1.getSeconds();

    let hrotation1=((30*hh1)+(mm1/2));
    let mrotation1=(mm1*6);
    let srotation1=(ss1*6);

    h.style.transform=`rotate(${hrotation1}deg)`;
    m.style.transform=`rotate(${mrotation1}deg)`;
    s.style.transform=`rotate(${srotation1}deg)`;

    let sound= new Audio('clock2.mp3');
    sound.play();
};

setInterval(timclock,1000);