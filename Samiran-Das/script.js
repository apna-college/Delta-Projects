// script.js
document.addEventListener('DOMContentLoaded', function () {
  // ====== Price Calculation & Booking Form ======
  const rideTypeSelect = document.getElementById('ride-type');
  const distanceInput = document.getElementById('distance');
  const estimatedPriceElement = document.getElementById('estimated-price');
  const bookingForm = document.querySelector('.booking-form');

  const prices = {
    'mini': 12,
    'auto': 10,
    'suv': 18
  };

  function updatePrice() {
    const rideType = rideTypeSelect.value;
    const distance = parseFloat(distanceInput.value) || 0;

    if (rideType && distance > 0) {
      const price = prices[rideType] * distance;
      // show as integer if whole, otherwise two decimals
      estimatedPriceElement.textContent = Number.isInteger(price) ? price : price.toFixed(2);
    } else {
      estimatedPriceElement.textContent = '0';
    }
  }

  if (rideTypeSelect) rideTypeSelect.addEventListener('change', updatePrice);
  if (distanceInput) distanceInput.addEventListener('input', updatePrice);

  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const rideType = rideTypeSelect.value;
      const distance = parseFloat(distanceInput.value) || 0;

      if (!rideType) {
        alert('Please select a ride type');
        return;
      }

      if (distance <= 0) {
        alert('Please enter a valid distance');
        return;
      }

      const price = prices[rideType] * distance;
      const rideTypeName = rideTypeSelect.options[rideTypeSelect.selectedIndex].text.split(' - ')[0];
      alert(`Your estimated fare for ${rideTypeName} is ₹${Number.isInteger(price) ? price : price.toFixed(2)} for ${distance} km`);
    });
  }

  // ====== Hamburger Menu Toggle (mobile) ======
  const menuBars = document.getElementById('menu-bars');
  const navbar = document.querySelector('.navbar');

  if (menuBars && navbar) {
    menuBars.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  }

  // ====== Smooth Scrolling for Navbar Links (same-page) ======
  // Use anchor hrefs like #home #rides #services #about #contact (see HTML step)
  const navLinks = document.querySelectorAll('nav.navbar a');

  // Optional: enable CSS smooth scrolling as a fallback
  // (some browsers respect this; we still call scrollIntoView for control)
  document.documentElement.style.scrollBehavior = 'smooth';

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      // If link href starts with '#', handle smooth scroll
      const href = this.getAttribute('href') || '';
      if (href.startsWith('#')) {
        e.preventDefault();

        // close mobile navbar after click (if open)
        if (navbar && navbar.classList.contains('active')) {
          navbar.classList.remove('active');
        }

        const targetId = href.slice(1); // remove '#'
        if (!targetId) return;

        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          // Use scrollIntoView with smooth behavior and slight offset for sticky header
          const headerOffset = getStickyHeaderHeight(); // compute if sticky
          const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset - 12; // 12px extra gap

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          // If the id is missing, fallback: jump to top
          console.warn(`Target element with id="${targetId}" not found.`);
        }
      }
      // else if href isn't a same-page anchor, default behavior will occur
    });
  });

  // Utility to calculate sticky header height (if any)
  function getStickyHeaderHeight() {
    const header = document.querySelector('.header');
    if (!header) return 0;
    // If header is fixed/sticky, use its height; otherwise 0
    const style = window.getComputedStyle(header);
    const position = style.position;
    if (position === 'fixed' || position === 'sticky') {
      return header.offsetHeight;
    }
    // if not sticky, but visually overlaps due to other layout, still return its height as safe offset
    return header.offsetHeight;
  }

  // ====== Optional: close any open mobile navbar when clicking outside ======
  document.addEventListener('click', function (e) {
    if (!navbar) return;
    if (!navbar.classList.contains('active')) return;

    // if click is inside navbar or on the menu button, do nothing
    const clickedInsideNavbar = navbar.contains(e.target);
    if (clickedInsideNavbar) return;

    const clickedMenuBtn = menuBars && menuBars.contains(e.target);
    if (clickedMenuBtn) return;

    // otherwise close it
    navbar.classList.remove('active');
  });

});

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Enable smooth scrolling behavior for the whole page
  document.documentElement.style.scrollBehavior = "smooth";

  // Select all navbar links
  const navLinks = document.querySelectorAll("nav a");

  // Loop through each navbar link
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // prevent instant jump

      const targetId = this.getAttribute("href").substring(1); // remove '#' from href
      const targetSection = document.getElementById(targetId);

      // If the section exists, scroll smoothly to it
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});





