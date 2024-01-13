let box=["store","mac","ipad","iphone","watch","airpods","tv","enter","access","support"];

let divs=document.querySelectorAll(".text_form");
for(let i=0;i<=divs.length-1;i++){
    divs[i].addEventListener("mouseenter",function(){
        console.log("mouse enter",i);
        let pop_up=document.querySelector("."+box[i]);
        pop_up.classList.add("new_pop_up");
        let main_div_inside_body=document.querySelector(".main_div_after_body");
        main_div_inside_body.classList.add("new_class_for_main_div_after_body");
        console.dir(pop_up);
        remove(box[i]);
    }); 
}

function remove(cName){  
    let pop_up=document.querySelector("."+cName);
    let main_div_inside_body=document.querySelector(".main_div_after_body");
    pop_up.addEventListener("mouseleave",function(){
        console.log("mouse leave the element");
        pop_up.classList.remove("new_pop_up");
        main_div_inside_body.classList.remove("new_class_for_main_div_after_body");
    })
    document.querySelector("body").addEventListener("mouseleave",function(){
        console.log("mouse leave the web page");
        pop_up.classList.remove("new_pop_up");
        main_div_inside_body.classList.remove("new_class_for_main_div_after_body");
    })
}
