let play = document.querySelector('#play')
let btn = document.querySelector('#btn')
let loadingIcon = document.querySelector('#loading-icon');
let buttonText = document.querySelector('#button-text');
let speakingIcon = document.querySelector('#speaking-icon')
let warning = document.querySelector('#warning')
let container = document.querySelector('.container')
//! adding event listener
btn.addEventListener('click', async () => {
 
  
  // ! selecting input value
  let inp = document.querySelector('#inp').value
  // ! selecting Lang
  var lang = document.getElementById("select-languages");
  var langCode = lang.value;
  // ! selecting speech speed
  let speed = document.querySelector('#speed')
  let speechSpeed = speed.value
  
  //! selecting download button
  let downloadBtn = document.querySelector('#download')

  if(inp.length == 0){
    container.style.filter = 'blur(5px)'
    warning.style.display = 'flex'
   setTimeout(()=>{
    container.style.filter = 'blur(0px)'
    warning.style.display = 'none'
   },1500)
  
  }else{
    loadingIcon.style.display = 'inline-block';
   buttonText.textContent = ''
  let options = {

    method: 'GET',
    url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
    params: {
      key: '626732aca1a6401f8e3df43fb6256d3f',
      src: inp,
      hl: langCode,
      r: speechSpeed,
      c: 'MP3',
      f: '48khz_16bit_stereo',
      // v: manVoice || femaleVoice ,
      b64: true
    },
    headers: {
      'X-RapidAPI-Key': 'd765ef7745msh2d842537dec8bcap1d71b3jsnd129ae43a51c',
      'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
    }
  };
  await test(options)
  
  loadingIcon.style.display = 'none';
  // speakingIcon.style.display= 'inline-block'
  // buttonText.textContent = 'Speak Again'
  play.addEventListener('play',()=>{
    speakingIcon.style.display= 'inline-block'
  })
  play.addEventListener('ended',()=>{
    speakingIcon.style.display= 'none'
    buttonText.textContent = 'SPEAK IT'
  })
  // ! getting a src from play (audio) and now assign to download btn
  let source =  play.getAttribute('src')
  downloadBtn.setAttribute('href', source)
 
 
//   if(inp.length == source){
//    // speakingIcon.style.display= 'none'
//    buttonText.textContent = 'Speak Again'
//  }else{
//    speakingIcon.style.display= 'inline-block'
//  }
  }
  
})
  
async function test(parameter) {
  try {

    const response = await axios.request(parameter);
    // console.log(response.data);
    // Assuming 'data' contains the base64-encoded audio data you received from the API response
    const base64AudioData = response.data;


    // Set the source of the audio element to the base64 database64AudioData;
  
    play.setAttribute('src', base64AudioData)
    
  } catch (error) {
    console.error(error);
  }
}


