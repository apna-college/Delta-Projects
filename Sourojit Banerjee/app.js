let url = "https://shloka.onrender.com/api/v1/bahgavad_gita/random";
let shloka = "";
let trans = "";
let explain = "";
let chap = "";

async function getShloka(){
    try{
        let res = await fetch(url);
        let data = await res.json();

        shloka = data["Shloka"];
        trans = data["English Translation"];
        explain = data["Explanation"];
        chapter = data["Chapter"];

        let shl = document.querySelector("#sans");
        let eng = document.querySelector("#trans");
        let exp = document.querySelector("#exp");
        let chap = document.querySelector("#chap");

        shl.innerHTML = `${shloka}`;
        eng.innerHTML = `${trans}`;
        exp.innerHTML = `${explain}`;
        chap.innerHTML = `Chapter ${chapter}`;

        shl.classList.add("content");
        eng.classList.add("content");
        exp.classList.add("content");
        chap.classList.add("content");

        setTimeout(() => {
            shl.classList.remove("content");
        }, 2000);
        setTimeout(() => {
            eng.classList.remove("content");
        }, 2000);
        setTimeout(() => {
            exp.classList.remove("content");
        },2000);
        setTimeout(() => {
            chap.classList.remove("content");
        }, 2000);

        // let faded = document.querySelectorAll(".content");

        // for(const fade of faded){
        //     console.log(fade);
        //     setTimeout(() => {
        //         fade.classList.remove(".content");
        //     }, 2000);
        // }

        // console.log(faded);
    }catch(e){
        console.error(e);
    }
}

document.querySelector("#gen").addEventListener("click", getShloka);
