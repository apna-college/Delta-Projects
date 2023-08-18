// http://universities.hipolabs.com

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector(".list");
let h3 = document.querySelector("h3");

btn.addEventListener("click", async () => {
  let country = input.value;
  let college = await getCollege(country);

  show(college);
});

function show(college) {
  ul.innerText = "";
  for (col of college) {
    let li = document.createElement("li");

    li.innerText = col.name;
    ul.appendChild(li);
    li.classList.add("size");
  }
}

async function getCollege(country) {
  // try {
  //   let res = await axios.get(url + country);
  //   return res.data;
  // } catch (err) {
  //   h3.innerText = "no";
  //   return "No";
  // }

  let res = await axios.get(url + country);
  if (res == []) {
    return "No";
  }
  return res.data;
}
