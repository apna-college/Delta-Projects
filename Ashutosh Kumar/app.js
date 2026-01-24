let btn = document.querySelector("#btn");
let url = "https://api.weatherstack.com/current?access_key=5e18e53dcf9fa00f1b13883ae4e82a8c&query=";
let input = document.querySelector("#input");
btn.addEventListener("click", async () => {
    let city = input.value;
    if(city == ""){
        alert("Please! Enter a valid value");
        return;
    }
    let data = await getData(city);
    printData(data);

    // let clr_btn = document.createElement("button");
    // let cont = document.querySelector(".container");
    // clr_btn.setAttribute("id","clear_btn");
    // clr_btn.innerText = "Clear";
    // cont.appendChild(clr_btn);

    // clr_btn
})

function printData(data){
    let temp_cont = document.querySelector(".temp");
    let aqi_cont = document.querySelector(".aqi");
    temp_cont.innerHTML = "";
    aqi_cont.innerHTML = "";
    let h2_temp = document.createElement("h2");
    h2_temp.innerText = "Temperature";
    h2_temp.classList.add("info_heading");
    let h2_aqi = document.createElement("h2");
    h2_aqi.innerText = "Aqi";
    h2_aqi.classList.add("info_heading");
    temp_cont.appendChild(h2_temp);
    aqi_cont.appendChild(h2_aqi);

    let temp_data = document.createElement("p");
    temp_data.classList.add("data");
    temp_data.innerText = data.temperature;
    temp_cont.appendChild(temp_data);

    let aqi_data2 = document.createElement("p");
    aqi_data2.classList.add("data");
    aqi_data2.innerText = "pm10 = "+data.air_quality.pm10;
    aqi_cont.appendChild(aqi_data2);

    let aqi_data3 = document.createElement("p");
    aqi_data3.classList.add("data");
    aqi_data3.innerText = "co = "+data.air_quality.co;
    aqi_cont.appendChild(aqi_data3);

    let aqi_data4 = document.createElement("p");
    aqi_data4.classList.add("data");
    aqi_data4.innerText = "no2 = "+data.air_quality.no2;
    aqi_cont.appendChild(aqi_data4);


    if(temp_cont.innerHTML != ""){
        let clr_btn = document.createElement("button");
        let cont = document.querySelector(".container");
        clr_btn.setAttribute("id","clear_btn");
        clr_btn.innerText = "Clear";
        cont.appendChild(clr_btn);
        clr_btn.addEventListener("click" , () => {
            temp_cont.innerHTML = "";
            aqi_cont.innerHTML = "";
            input.value = "";
            clr_btn.remove();
        })
    }
}

async function getData(city) {
    try{
        let res = await axios.get(url+city)
        return res.data.current;
    } catch(err) {
        alert("Data not found!!");
        
    }
}