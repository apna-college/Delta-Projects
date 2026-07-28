boxes= document.querySelectorAll('.box');
reset= document.querySelector('.reset');
h2= document.querySelector('h2');
const winArr= [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2],];
let count= 0 ;
let playerTurn= true ; //true means turn of X
boxes.forEach((box)=>{
    box.addEventListener('click',function(event){
        if(playerTurn===true){
            box.innerText= "X"
            
            playerTurn=false ;
        }else{
            box.innerText= "O"
            
            playerTurn=true ;
            
        }
        count++ ;
        box.disabled = true ;
        if(count==9){
            h2.innerText="Draw!!"
        }
        checkWin();
        
    });
});

function boxDisable(){
    boxes.forEach((box)=>{
        box.disabled=true ;

    })
}

function checkWin(){
    for (let patterns of winArr) {
        let post1=boxes[patterns[0]].innerText;
        let post2=boxes[patterns[1]].innerText;
        let post3=boxes[patterns[2]].innerText;

        if(post1!=""||post2!=""||post3!=""){
            if(post1==post2 && post2==post3){
                h2.innerText= `Winner is ${post1} !!`
                boxDisable();
            }
        }
        
    }
}
reset.addEventListener('click',function(event){
    boxes.forEach((box)=>{
        box.innerText="";
        playerTurn=true;
        box.disabled= false ;
        h2.innerText="Player1= X , Player2= O"
        count=0 ;

    })
})
