let harry_potter_api =
  "https://api.potterdb.com/v1/characters?filter[name_cont]=";
let btn = document.querySelector("#btn");
let box = document.querySelector(".container");
let mainContainer = document.querySelector(".Everything");

btn.addEventListener("click", async () => {
  try {
    let input = document.querySelector("input");
    let value = input.value;
    if (value == "") {
      alert("Please Enter the Valid Character Name");
    } else {
      input.value = "";

      // Fetched the API

      let res = await axios.get(harry_potter_api + value);
      let ans = res.data.data[0];

      show(ans);
    }
  } catch (e) {
    alert("Not a Valid Character Name");
  }
});

// Event Listener for Keyboard

window.addEventListener("keypress", async (e) => {
  try {
    if (e.key === "Enter") {
      let input = document.querySelector("input");
      let value = input.value;
      if (value == "") {
        alert("Please Enter the Valid Character Name");
      } else {
        input.value = "";

        // Fetched the API

        let res = await axios.get(harry_potter_api + value);
        let ans = res.data.data[0];

        show(ans);
      }
    }
  } catch (e) {
    alert("Not a Valid Character Name");
  }
});

function show(ans) {
  // Fetching all the required details

  let image = ans.attributes.image;
  let fullName = ans.attributes.name;
  let birth = ans.attributes.born;
  let blood_status = ans.attributes.blood_status;
  let wiki = ans.attributes.wiki;

  // Creating the  Elements and Appending them.

  let div = document.createElement("div");
  div.classList.add("card-section");
  let div2 = document.createElement("div");
  div2.classList.add("info-section");
  let img = document.createElement("img");
  img.setAttribute("src", image);

  mainContainer.appendChild(div);
  div.appendChild(img);

  div.appendChild(div2);

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");

  p1.innerText = "Name : " + fullName;
  p2.innerText = "(Date & Place) of Birth : " + birth;
  p3.innerText = "Blood Status : " + blood_status;
  p4.innerText = "Explore More About the Character : ";
  let a = document.createElement("a");
  a.innerText = "Click Here";
  a.setAttribute("href", wiki);
  a.setAttribute("target", "_blank");
  p4.appendChild(a);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(p3);
  div2.appendChild(p4);
}
