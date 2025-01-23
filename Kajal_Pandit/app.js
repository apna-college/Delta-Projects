let inpName = document.querySelector('.inp-name');
let inpCountry = document.querySelector('.inp-country');
let inpState = document.querySelector('.inp-state');

let searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener("click" , () => {
    document.querySelector('.uni-info-name').innerHTML = '';
    document.querySelector('.uni-list-country').innerHTML = '';
    document.querySelector('.uni-list-state').innerHTML = '';
    searchUniversity(inpName.value, inpCountry.value, inpState.value);
});

let h5 = document.createElement('h5');

async function searchUniversity(name, country, state) {
    let url = "http://universities.hipolabs.com/search";
    if(name || state || country) {
        document.querySelector('.uni-info-name').style.display = 'block';
        document.querySelector('.uni-list-country').style.display = 'block';
        document.querySelector('.uni-list-state').style.display = 'block';
    }

    let urlByName = `name=${name.trim().split(" ").join("%20")}`;
    let urlByCountry = `country=${country.trim().split(" ").join("%20")}`;
    let urlByState = `state-province=${(state.trim().split(" ").join("%20"))}`;


    if(name) {
        try{
            url = url + "?" + urlByName + "&" + urlByCountry + "&" + urlByState;
            let fetchData = await axios.get(url);
            let uniData = fetchData.data[0];
            let span = document.createElement('span');
            span.innerHTML = `<p>Name : ${uniData.name}</p>
                    <p>Country: ${uniData.country}</p>
                    <p>State : ${uniData["state-province"]}</p>
                    <p><b>Domains :</b> <a href="${uniData.domains[0]}">${uniData.domains[0]}</a></p> 
                    <p><b>Web Pages :</b> <a href="${uniData.web_pages[0]}">${uniData.web_pages[0]}</a></p>`;
            document.querySelector('.uni-info-name').appendChild(span);
        }catch(err) {
            h5.innerHTML = `Enter a valid university/college name! OR Refresh the page`;
            document.querySelector('.uni-search').appendChild(h5);
        }
    }
    else if(state){
        try {
            let uniData = await axios.get(url);
            let arr = uniData.data;
            
            if(arr.length == 0)
                throw err;

            let h4 = document.createElement('h4');
            h4.innerText = `Colleges in ${state}`;
            document.querySelector(".uni-list-state").appendChild(h4);
            let list = document.querySelector(".uni-list-state").appendChild(document.createElement('ol'));

            for(let i = 0; i < arr.length; i++) {
                if(arr[i]["state-province"] == state){
                    let li = document.createElement('li');
                    list.appendChild(li);
                    li.innerHTML = `<p>Name : ${arr[i].name}</p>
                        <p>Country: ${arr[i].country}</p>
                        <p>State : ${arr[i]["state-province"]}</p>
                        <p><b>Domains :</b> <a href="${arr[i].domains[0]}">${arr[i].domains[0]}</a></p> 
                        <p><b>Web Pages :</b> <a href="${arr[i].web_pages[0]}">${arr[i].web_pages[0]}</a></p>`;
                }
            }
        } catch(err) {
            h5.innerHTML = `Enter a valid country and state name! OR Refresh the page`;
            document.querySelector('.uni-search').appendChild(h5);
        }
    }
    else if(country) {
        try {
            url = url + "?" + urlByCountry;
            let uniListCountry = await axios.get(url);
            let arr = uniListCountry.data;

            if(arr.length == 0)
                throw err;

            let h4 = document.createElement('h4');
            h4.innerText = `Total number of colleges in ${country}: ${arr.length}`;
            document.querySelector(".uni-list-country").appendChild(h4);
            let list = document.querySelector(".uni-list-country").appendChild(document.createElement('ol'));
            for(let i = 0; i < arr.length; i++) {
                let li = document.createElement('li');
                list.appendChild(li);
                li.innerHTML = `<p>Name : ${arr[i].name}</p>
                    <p>Country: ${arr[i].country}</p>
                    <p>State : ${arr[i]["state-province"]}</p>
                    <p><b>Domains :</b> <a href="${arr[i].domains[0]}">${arr[i].domains[0]}</a></p> 
                    <p><b>Web Pages :</b> <a href="${arr[i].web_pages[0]}">${arr[i].web_pages[0]}</a></p>`;
            }
        } catch(err) {
            h5.innerHTML = `Enter a valid country name!`;
            document.querySelector('.uni-search').appendChild(h5);
        }
    }
    else {
        h5.innerHTML = `No result found !`;
        document.querySelector('.uni-search').appendChild(h5);
    }    
}

