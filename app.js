let url1 = "https://official-joke-api.appspot.com/random_joke";

let btn1 = document.querySelector("#main-btn1");

btn1.addEventListener("click", async () => {
      console.log("button was click")
  try{  
     let res = await axios.get(url1);

     let p_one = document.querySelector("#main-p1");
     p_one.innerHTML = res.data.setup;

     let p_two = document.querySelector("#main-sec-p1");
     p_two.innerHTML = res.data.punchline;
     
  } catch (e) {
     console.log(`Error : ${e}`);
  }
});

let url2 = "https://api.quotable.io/quotes/random";

let btn2 = document.querySelector("#main-btn2");

btn2.addEventListener("click", async () => {
      console.log("button was click")
  try{  
     let res = await axios.get(url2);
     
     let p_one = document.querySelector("#main-p2");
     p_one.innerHTML = res.data[0].content;

     let p_two = document.querySelector("#main-sec-p2");
     
     p_two.innerHTML = res.data[0].author;
     
  } catch (e) {
     console.log(`Error : ${e}`);
  }
});

let url3 = "http://numbersapi.com/random/math";

let btn3 = document.querySelector("#main-btn3");

btn3.addEventListener("click", async () => {
      console.log("button was click")
  try{  
     let res = await axios.get(url3);

     let p_one = document.querySelector("#main-p3");
     p_one.innerHTML = res.data;

  } catch (e) {
     console.log(`Error : ${e}`);
  }
});