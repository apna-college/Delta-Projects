let todo=[];

let req=prompt("Enter your task:");

while(true)
{
    if(req=="quit")
    {
        console.log("quitted successfully");
        break;
    }

    else if(req=="list")
    {
        console.log("---------");
        for(i=0;i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }
        console.log("---------");
    }

    else if(req=="add")
    {
        let task=prompt("enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }

    else if(req=="delete")
    {
        let idx = prompt('Please enter task Index number:');
        todo.splice(idx,1);
        console.log("task delted");
    }

    else{
        console.log("wrong request..!");
    }

    req=prompt("please enter your req:");
}