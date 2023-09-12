let url = 'https://api.coincap.io/v2/assets/';
let btn = document.querySelector('button');
let inp = document.querySelector('input');
let h2 = document.querySelector('h2');
let body = document.querySelector(".crypto-details");

btn.addEventListener('click', async () => {
    let crypto_details = document.querySelector('.result');
    crypto_details.innerHTML = "";
    h2.innerHTML = "";

    body.style.backgroundColor = 'white';
    console.log("Button clicked");

    let finalurl = inp.value;
    let config = url + finalurl;
    let res = await realTimeData(config);

    h2.innerHTML = `${inp.value} <b>Complete details</b>`;

    let result = document.createElement('li');
    result.innerHTML = `<b>Name : </b> ${res.name} `;

    crypto_details = document.querySelector('.result');
    crypto_details.appendChild(result);

    let result2 = document.createElement('li');

    result2.innerHTML = `<b>Price in USD : </b> ${res.price} `;
    crypto_details.appendChild(result2);

    let result3 = document.createElement('li');

    result3.innerHTML = `<b>Official Website:</b> <a href="${res.url}" target="_blank">${res.url}</a>`;
    crypto_details.appendChild(result3);

    let result4 = document.createElement('li');

    result4.innerHTML = `<b>Change % :</b> ${res.Change}`;
    crypto_details.appendChild(result4);

    let result5 = document.createElement('li');

    result5.innerHTML = `<b>Symbol : </b> ${res.Symbol}`;
    crypto_details.appendChild(result5);

    //newFun(res,result5, 'li', crypto_details, Symbol );
    inp.value = "";
    
})

let clear = document.querySelector('.Clear');
clear.addEventListener ("click", () => {
    console.log("Button clicked");
    removeData();
})

async function realTimeData(config) {
    try
    {
        let res = await fetch(config);
        let finaldata = await res.json();
        // return finaldata.data.priceUsd;
        // return finaldata.data.changePercent24Hr;

        return {
            price : finaldata.data.priceUsd ,
            Change : finaldata.data.changePercent24Hr,
            url : finaldata.data.explorer,
            name : finaldata.data.name,
            Symbol : finaldata.data.symbol

        };
    }
    catch(err)
    {
        console.log("Error - ", err);
        //alert("Sorry Requested details are not available");
        //console.log("Sorry Requested details are not available");
        body.style.backgroundColor = '#FF0000';
        h2.innerText = "Chutiya smjhe ho ka , kuch bhi likh doge";
        console.log(h2);
        //console.dir(body);
        inp.value = "";
    }

}

function removeData()
{
    let crypto_details = document.querySelector('.result');
    let h2 = document.querySelector('h2');
    h2.innerText = "Complete Details";
    crypto_details.innerHTML = "";
}

// function newFun(res, identifier, element, crypto_details, query) {
//     let identifier = document.createElement(element);
//     identifier.innerHTML = `${res.query}`;
//     crypto_details.appendChild(identifier);
// };