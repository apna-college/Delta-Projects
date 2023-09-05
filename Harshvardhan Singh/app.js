const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let btn = document.querySelector("#button");
let image = document.querySelector("img");
let input = document.querySelector("input");
let container = document.querySelector(".container");
let preValue;

btn.addEventListener("click", async () => {
    let qrValue = input.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    btn.innerText = "Generating QR Code...";
    console.log(input);
    let qrCode = await generateQr();
    image.src = qrCode;
    image.addEventListener("load", () => {
        container.classList.add("active");
        btn.innerText = "Generate QR Code";
    });
   
});



async function generateQr() {
    try{
        let res = await axios.get(url+document.querySelector("input").value);
        return res.config.url;

    } catch(e) {
        console.log("error-",e);
    }
}

input.addEventListener("keyup", () => {
    if(!input.value.trim()) {
        container.classList.remove("active");
        preValue = "";
    }
});
