const indicator = document.querySelector('#nav-indicator');
const items = document.querySelectorAll('.nav-item');

// Store the current slider position.
items.forEach(item => {
    item.addEventListener('click', (e) => {
        // We save the position of the indicator AS IT IS NOW (under the current page's link)
        // This becomes the "start point" for the animation on the next page.
        sessionStorage.setItem('sliderLastLeft', indicator.offsetLeft);
        sessionStorage.setItem('sliderLastWidth', indicator.offsetWidth);
    });
});

// Prevent browser from restoring scroll position
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// On page load, animate from the last position to the new one.
window.addEventListener('DOMContentLoaded', () => {
    // Force scroll to top on refresh to ensure header is visible
    window.scrollTo(0, 0);

    const lastLeft = sessionStorage.getItem('sliderLastLeft');
    const lastWidth = sessionStorage.getItem('sliderLastWidth');

    // Find the correct active item for the current page
    const normalizePath = (path) => path.replace(/(\/index\.html|\/)$/, '');
    const currentPath = normalizePath(window.location.pathname);
    let activeItem = Array.from(items).find(item => normalizePath(new URL(item.href).pathname) === currentPath);
    if (!activeItem) activeItem = items[0]; // Default to home

    // Set active class on the correct item
    items.forEach(item => item.classList.remove('active'));
    activeItem.classList.add('active');

    const targetLeft = activeItem.offsetLeft;
    const targetWidth = activeItem.offsetWidth;

    if (lastLeft !== null && lastWidth !== null) {
        // 1. Instantly set the slider to the LAST known position with no animation.
        indicator.classList.add('no-transition');
        indicator.style.left = `${lastLeft}px`;
        indicator.style.width = `${lastWidth}px`;

        // 2. Use a timeout to allow the browser to apply the initial state.
        setTimeout(() => {
            // 3. Remove the class to re-enable the slow transition.
            indicator.classList.remove('no-transition');
            // 4. Set the final position, triggering the slow animation.
            indicator.style.left = `${targetLeft}px`;
            indicator.style.width = `${targetWidth}px`;
        }, 10);

        // Clear the storage so that a refreshing page doesn't trigger the animation again
        sessionStorage.removeItem('sliderLastLeft');
        sessionStorage.removeItem('sliderLastWidth');

    } else {
        // First visit, just set the indicator immediately.
        indicator.style.left = `${targetLeft}px`;
        indicator.style.width = `${targetWidth}px`;
    }

    // Update slider on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        indicator.classList.add('no-transition');
        indicator.style.left = `${activeItem.offsetLeft}px`;
        indicator.style.width = `${activeItem.offsetWidth}px`;

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            indicator.classList.remove('no-transition');
        }, 250);
    });

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle Sidebar
            navLinks.classList.toggle('nav-active');
            
            // Toggle Cross Animation
            hamburger.classList.toggle('toggle');

            // Animate Links
            links.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }
});