const btn=document.querySelector("button");
const details=document.querySelector("#details");
const input=document.querySelector("#city");

function getReport(){
    btn.addEventListener("click",async ()=>{
        const city=document.querySelector("#city").value.trim();
        const apiKey="e1138575d1b5f417c6ae6591a140fd16";
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        
        try{
        let res=await axios.get(url);
        let data=res.data;
        details.innerHTML=`<h3>${data.name},${data.sys.country}</h3>
                            <p><strong>Temperature:</strong>${data.main.temp}&deg;C</p>
                            <p><strong>Weather:</strong>${data.weather[0].main}</p>
                            <p><strong>Humidity:</strong>${data.main.humidity}%</p>
                            <p><strong>Wind:</strong>${data.wind.speed}m/s</p>
                            <p><strong>Pressure:</strong>${data.main.pressure}hPa</p>`;

        input.value="";
    }catch(err){
        details.innerHTML=`<p style="color:red">${err.message}</p>`
    }
    });
    
};

getReport();