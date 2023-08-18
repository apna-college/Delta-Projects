/* let string = "";
let buttons = document.querySelectorAll('.btn1');
Array.from(buttons).forEach((btn1)=>{
btn1.addEventListener('click',(e)=>{
     if (e.target.innerHtml == '='){
          string = eval(string);
          document.querySelector('input').value =  string;
     }
     else if (e.target.innerHtml == 'c'){
          string=""
          document.querySelector('input').value =  string;
     }
    else{ console.log(e.target)
     string = string + e.target.innerHtml;
     document.querySelector('input').value =  string;}
})
})
 */

let string = "";
let buttons = document.querySelectorAll('.btn1')
Array.from(buttons).forEach((btn1)=>{
     btn1.addEventListener('click', (e)=>{
          if(e.target.innerHTML == '='){
               string= eval(string);
               document.querySelector('input').value = string;
          }
 else if(e.target.innerHTML == 'c'){
               string= ""
               document.querySelector('input').value = string;
          }
          else{
          console.log(e.target)
          string= string + e.target.innerHTML;
          document.querySelector('input').value = string;}
     })
})




 















 