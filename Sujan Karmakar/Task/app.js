let btn = document.querySelector("button");
let para = document.querySelector("p");

let url = "https://dummyjson.com/todos/random";

async function getTask() {
    try {
        let res = await axios.get(url);
        return res.data.todo;
    } catch (err) {
        console.log("Error:", err);
        return "No task found";
    }
}

btn.addEventListener("click", async () => {
    let task = await getTask();
    para.innerText = task;
});