let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

let btn = document.querySelector('button')

async function getMeaning(word){
    try{
        let meaning = await axios.get(url+word);
        let noun = (meaning.data[0].meanings[0].definitions[0].definition);
        // let adjective = (meaning.data[0].meanings[1].definitions[0].definition);
        // return [noun,adjective];
        return noun;
        
    }
    catch(err){
        console.log("E", err);
        return "meaning not found"
    }
}

btn.addEventListener('click',async()=>{
    let word = document.querySelector('input').value;
    console.log(word);
    let noun = await getMeaning(word);
    console.log(noun)
    // let ans = await getMeaning(word);
    // let anslength = ans.length;
    // console.log(anslength)
    // let noun = ans[0];
    // console.log(`noun: ${noun}`);
    // let adj = ans[1];
    // console.log(`adjective: ${adj}`)
    // show(noun, adj, ans)
    show(noun)
})

async function show(noun){
    let nounHeading = document.querySelector('.noun');
    nounHeading.innerText = "Definition:";
    let p1 = document.querySelector('#noun');
    p1.innerText = "";
    p1.innerText = noun;

}

let inp = document.querySelector('input');

inp.addEventListener('keydown', async(event)=>{
    if(event.code == "Enter"){
        let word = document.querySelector('input').value;
        console.log(word);
        let noun = await getMeaning(word);
        console.log(noun);
        show(noun);
    }
})


// async function show(noun, adj, ans){
//     let nounHeading = document.querySelector('.noun');
//     nounHeading.innerText = "Noun:";
//     let adjHeading = document.querySelector('.adj');
//     adjHeading.innerText = "adjective"
//     let p1 = document.querySelector('#noun');
//     p1.innerText = "";
//     p1.innerText = noun;
//     let p2 = document.querySelector('#adj')
//     p2.innerText = "";
//     p2.innerText = adj;
// }

