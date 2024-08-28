let ipt = document.querySelector("#userinput");
let para = document.querySelector(".para");

ipt.addEventListener("input", function () {
  para.innerText = ipt.value;
});

function copyText() {
  let copy = document.createElement("textarea");
  copy.value = para.innerText;
  document.body.appendChild(copy);
  copy.select();
  copy.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(copy);
  alert("Text copied: " + para.innerText);
}
