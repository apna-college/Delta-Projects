const choice1 = document.querySelector('.choice1');
const choice2 = document.querySelector('.choice2');
const para = document.querySelector('.first');
let choice = 'X';

choice1.addEventListener('click', () => {
    choice2.classList.remove('white');
    choice1.classList.add('white');
    para.innerText = "Remember: X goes first"
    choice = 'X';
})
choice2.addEventListener('click', () => {
    choice1.classList.remove('white');
    choice2.classList.add('white');
    para.innerText = "Remember: O goes first"
    choice = 'O';
})

const cpu = document.querySelector('.cpu');
cpu.addEventListener('click', (ev) => {
    ev.preventDefault();
    let anc = cpu.children[0];
    let url = anc.getAttribute('href') + `?choice=${choice}`;
    window.location.href = url;
})

const player = document.querySelector('.player');
player.addEventListener('click', (ev) => {
    ev.preventDefault();
    let anc = player.children[0];
    let url = anc.getAttribute('href') + `?choice=${choice}`;
    window.location.href = url;
})