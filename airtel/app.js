let btn=document.querySelector('.rcharge');
let input=document.querySelector('#phoneno');
let info=document.querySelector('#info');


btn.addEventListener('click',()=>{
    let data=input.value;
    if(data.length==10){
        btn.innerHTML="Recharged";
        btn.style.backgroundColor="green";
        info.innerHTML="+91 "+data+" has been recharged successfully";
        info.style.color="green";
        input.value="";
    }
    else if(data.length!=10){
        info.innerHTML="* Please type a valid mobile number";
        info.style.color="red";
    }
})

