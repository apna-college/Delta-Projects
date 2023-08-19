//Locomotive Smooth scroller Function
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// Initialize Locomotive Scroll for smooth scrolling


// Define cursor element and select links, work elements, and element texts
let crsr = document.querySelector(".cursor");
let elems = document.querySelectorAll(".elem");
let elemTexts = document.querySelectorAll(".elemText");
let lines = document.querySelectorAll(".line");

// Define cursor follower function
// The 'cursorFollower' function is defined to track the mouse movement on the window. It adds an event listener for the 'mousemove' event and uses the 'gsap.to' method from the GSAP library to update the position of the cursor element accordingly.
function cursorFollower() {
  // Event listener for mouse movement
  //e = details of the events
  window.addEventListener("mousemove", function (e) {
    gsap.to(crsr, {
      x: e.clientX,
      y: e.clientY,
    });
  });
}

// Call cursor follower function
cursorFollower();

// Define hero section animation function
// The 'reveal' function defines an animation sequence using the GSAP library to reveal elements in the hero section of the webpage. The animation gradually moves with specific durations and staggered delays.
function reveal() {
  let tl = gsap.timeline();

  // Animation sequence for revealing elements
  tl.to(".loadingPage", {
    y: "-100%",
    duration: 1.5,
    ease: "Power4.easeOut",
    delay: 0.7
  });
  tl.from(".revealNav", {
    y: "-50",
    opacity: 0,
    duration: 0.3,
  });
  tl.from(".revealUp", {
    y: "150",
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  });
  tl.from(".revealDown", {
    y: "-50",
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
  tl.from(".heroBottom", {
    opacity: 0,
    duration: 0.3,
  });
}

// Call hero section animation function
reveal();

// Define navigation hover effect function
// The 'navHover' function adds event listeners to all elements with the class "revealNav" to create hover effects. When the mouse enters the element, the cursor element is scaled up using the 'gsap.to' method. When the mouse leaves the element, the cursor scales back to its original size.
function navHover() {
  document.querySelectorAll(".revealNav").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(crsr, {
        scale: 2
      });
    });

    elem.addEventListener("mouseleave", () => {
      gsap.to(crsr, {
        scale: 1
      });
    });
  });
}

// Call navigation hover effect function
navHover();

// Initialize the previous position of x as 0
// The 'xPrePosition' variable is initialized to 0. This variable will be used to store the previous X position of the mouse cursor 'elem' element.
let xPrePosition = 0;

// Define work section element animation function
// The 'elemAnimation' function defines interactions and animations for each work element on the page. It adds event listeners for mouseover, mousemove, and mouseleave events. On mouseover, the text inside the element partially fades out using the 'gsap.to' method. On mousemove, the image inside the element moves with the cursor, and its rotation angle is calculated based on the cursor's movement. The cursor and text opacity are also adjusted. On mouseleave, the element and cursor are restored to their default state.
function elemAnimation() {
  elems.forEach((elem) => {
    // Text fading effect on mouseover
    elem.addEventListener("mouseover", () => {
      gsap.to(elem.querySelector(".elemText"), {
        opacity: 0.2,
      });
    });

    // Image movement effect on mousemove
    elem.addEventListener("mousemove", (e) => {
      //calculate the bounding rectangle of the target element using getBoundingClientRect()
      let rect = elem.getBoundingClientRect();

      //calculating the cursor position (x & y) inside the elem element
      let xPosition = e.clientX - rect.left;
      let yPosition = e.clientY - rect.top;

      //Calculate the difference between the current and previous position
      let xPositionDiff = xPosition - xPrePosition;
      //console.log(xPositionDiff);

      // Calculate rotation angle based on cursor movement
      let rotationAngle = gsap.utils.clamp(-20, 20, xPositionDiff); // Maximum ±10 degrees rotation

      // Another way to Rotate
      // rotationAngle = (cursorDeltaX / 10) * 10;

      // Move the image with the cursor using gsap
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        zIndex: 2,
        left: xPosition,
        top: yPosition,
        rotate: rotationAngle,
      });

      //Save the current position in the previous position for further calculation
      xPrePosition = xPosition;
    });

    // Circle cursor scaling and text opacity on mousemove
    elem.addEventListener("mousemove", function () {
      gsap.to(crsr, {
        scale: 3.5,
      });

      gsap.to(document.getElementById("cursor"), {
        opacity: 1
      });
    });

    // Restore element and cursor to default on mouseleave
    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.querySelector(".elemText"), {
        opacity: 0.6,
      });

      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        zIndex: "-1",
      });

      gsap.to(crsr, {
        scale: 1,
      });

      gsap.to(document.getElementById("cursor"), {
        opacity: 0,
      });
    });
  });
}

// Call work section element animation function
elemAnimation();

// Display the current date and time
// The code displays the current date and time by creating a 'new Date' object and using the 'toLocaleString' method to format it. The formatted date is then assigned to the innerHTML of an element with the id "date".
let date = new Date();
let current_date = date.toLocaleString();
document.getElementById("date").innerHTML = current_date;


//Define underLine Hover animation
// The 'underLineHover' function defines hover animations for elements with the class "line". When the mouse enters an element, the cursor scales up and a bottom-side element's width grows from 0 to 100% using the 'gsap.fromTo' method. When the mouse leaves the element, the cursor scales back down, and the bottom-side element's width shrinks back to 0.
function underLineHover() {
  lines.forEach(function (line) {
    line.addEventListener("mouseenter", function () {
      console.log("mouseEnter");

      gsap.to(crsr, 0.3, {
        scale: 2
      });

      gsap.fromTo(
        line.querySelector(".bottom-side"),
        0.7,
        {
          width: 0
        },
        {
          width: "100%"
        }
      );
    });

    line.addEventListener("mouseleave", function () {
      console.log("mouseLeave");

      gsap.to(crsr, 0.3, {
        scale: 1
      });

      gsap.fromTo(
        line.querySelector(".bottom-side"),
        0.7,
        {
          width: "100%"
        },
        {
          width: 0
        }
      );
    });
  });
}

//Call underLine Hover animation
underLineHover();