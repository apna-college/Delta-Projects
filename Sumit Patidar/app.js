const buttons = document.querySelectorAll('.accordion-button');

function rotate(){
  if(!this.classList.contains('collapsed')){
    let icon = this.children[0];
    icon.classList.add('rotate');
  }
  if(this.classList.contains('collapsed')){
    let icon = this.children[0];
    icon.classList.remove('rotate');
  }
}

for (button of buttons){
  button.addEventListener('click', rotate);
}