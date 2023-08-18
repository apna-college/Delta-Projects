let btn = document.getElementById("generateButton");
btn.addEventListener('click', async () => {
    let ran = await spell();
    updateDisplay(ran);

	let backgroundVideo = document.getElementById("backgroundVideo");
	backgroundVideo.currentTime = 0;
    backgroundVideo.style.display = "block";
	document.body.style.zIndex = "-2";
});

let url = "https://api.potterdb.com/v1/spells";

async function spell() {
    try {
        let res = await axios.get(url);
        let spellsData = res.data.data;

        let randomIndex = Math.floor(Math.random() * spellsData.length);

        let randomSpell = spellsData[randomIndex];
        let spellName = randomSpell.attributes.name;
        let spellEffect = randomSpell.attributes.effect;

        return {
            spellName: spellName,
            spellEffect: spellEffect
        };
    } catch (error) {
        console.log("ERROR", error);
    }
}

function updateDisplay(spellData) {
    let spellNameElement = document.getElementById("spellName");
    let spellEffectElement = document.getElementById("spellEffect");

    spellNameElement.textContent = spellData.spellName;
    spellEffectElement.textContent = spellData.spellEffect;
}

