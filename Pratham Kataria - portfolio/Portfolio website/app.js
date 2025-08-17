const texts = [
    "Frontend Developer.",
    "Tech Enthusiast.",
    "Problem Solver.",
    "Terminal.",
    "Git & Github.",
    "Bootstrap.",
    "Welcome to my Portfolio!"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 50;
    const erasingSpeed = 50;
    const delayBetween = 1000;
    function typeWriter() {
      const element = document.getElementById("typewriter");
      const currentText = texts[textIndex];
      if (!isDeleting && charIndex < currentText.length) {
        element.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
      } 
      else if (isDeleting && charIndex > 0) {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, erasingSpeed);
      } 
      else {
        if (!isDeleting) {
          isDeleting = true;
          setTimeout(typeWriter, delayBetween);
        } else {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(typeWriter, typingSpeed);
        }
      }
    }
    typeWriter();

let tabLinks=document.querySelectorAll('.tab-links')
    let tabContents=document.querySelectorAll('.tab-contents')
    function opentab(tabName){
        for(tabLink of tabLinks){
            tabLink.classList.remove("active-link")
        }
        for(tabContent of tabContents){
            tabContent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link")
        document.getElementById(tabName).classList.add("active-tab");
        
    }

    let sidemenu=document.getElementById("sidemenu");
    function openmenu(){
      sidemenu.style.right="0";
    }
    function closemenu(){
      sidemenu.style.right="-200px";
    }
