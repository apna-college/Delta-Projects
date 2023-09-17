const inp = document.querySelector('input');
const btn = document.querySelector('button');
const dels = document.querySelectorAll('.delete');
const container = document.querySelector('.container');
const task = document.querySelector('.task');
const list = document.querySelector('ul');
const total = 0;

const foot = document.createElement('p');
foot.classList.add('flex');
const clear = document.createElement('a');
clear.classList.add('clear');
clear.setAttribute('href', '#');

clear.innerText = 'Clear All';
foot.innerText = `Total Task exist are ${total}`;

container.appendChild(foot);

btn.addEventListener('click', () => {
    if(inp.val != ''){
        const listItem = document.createElement('li');
        listItem.innerHTML = `<input type="checkbox" name="Check" id="check"><span style="overflowX: sroll">${inp.value}</span><button class="delete">X</button>`
        listItem.classList.add('flex');
        list.appendChild(listItem);
        total ++;
        inp.value = '';
        foot.innerText = `Total Task exist are ${total}`;
        foot.appendChild(clear);
    }
})

task.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON') {
        const par = event.target.parentElement;
        list.removeChild(par);
        total --;
        foot.innerText = `Total Task exist are ${total}`;
        foot.appendChild(clear);
        if(total === 0) {
            foot.removeChild(clear);
        }
    }
})

clear.addEventListener('click', (event) => {
    const siblings = clear.parentElement.parentElement.childNodes[5].childNodes[1].children;
    const siblingParent = clear.parentElement.parentElement.childNodes[5].childNodes[1];
    siblingParent.remove(siblings);
    total = 0;
    foot.innerText = `Total Task exist are ${total}`;
    if(total != 0) {
        foot.appendChild(clear);
    }
    const newUL = document.createElement('ul');
    task.appendChild(newUL);
    list = document.querySelector('ul');
})