let p = document.querySelector('#p');
let input = document.querySelector('input');
let box = document.querySelector('.box');
let pre = document.querySelector('h3');

let arry = [];


input.addEventListener("change",gussGame)

 
let randomNum = Math.floor(Math.random() * 10) + 1;
function gussGame(){
    if(input.value.toLowerCase() == 'quit'){
        p.innerText = "you'r quitting the game!"
        input.value = ""
    }else{
        let gus = Number(input.value) ;
        if(isNaN(gus)){
            p.innerText = "Please enter a valied number"
            p.style.color = "red"
            input.value = ""
            arry.push(gus)
            pre.innerText = `Previous guesses: ${arry}`
        }else if(gus > randomNum){
            p.innerText = "Hint: you'r number is too larg"
            p.style.color = "black"
            input.value = ""
            arry.push(gus)
            pre.innerText = `Previous guesses: ${arry}`
        }else if(gus < randomNum){
            p.innerText = "Hint: you'r number is too low"
            p.style.color = "black"
            input.value = ""
            arry.push(gus)
            pre.innerText = `Previous guesses: ${arry}`
        }else{//when we win
            p.innerText = `congrulation you are win this game!`
            p.style.color = "green"
            input.value = ""
            box.classList.add("active")
            let btn = document.createElement('button');//when we click start new game btn
            btn.innerText = "start new game"
            p.append(btn)
            btn.addEventListener("click",()=>{
                p.innerText = ""
                input.focus()
                box.classList.remove("active");
                arry =[];
                pre.innerText = "";
            })
    
        }
    }
}





//guss number between 1 to 10:
// let randomNum = Math.floor(Math.random() * 10) + 1;
// let gussNum = (prompt("Please enter your guess"));


// while (true) {

//     if (gussNum == "quit") {
//         console.log("you'r quiting the game!")
//         p.innerText = "You are quitting the game";

//         break
//      } 
//      else if(gussNum == randomNum){
//         console.log("your are right!")
//         break
//      }
//      else if (gussNum > randomNum) {
//         gussNum = (prompt("hind: your number is too larg!"))
//         //update gussNum
//     } else  {
//         gussNum = (prompt("hint: your number is too low!"));
//         //update gussNum

//     }
//     }


