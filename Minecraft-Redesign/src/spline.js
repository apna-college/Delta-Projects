import {pufferFish, cherry, command, dirt, enchant, stone, table} from './assets/index'

let splineCodeInitialized = false;

function executeSplineCode() {
    // Import es-module-shims
    const esModuleShims = document.createElement('script');
    esModuleShims.src = "https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js";
    esModuleShims.async = true;
    document.head.appendChild(esModuleShims);

    // Import map for @splinetool/runtime
    const importMap = document.createElement('script');
    importMap.type = 'importmap';
    importMap.innerHTML = JSON.stringify({
        "imports": {
            "@splinetool/runtime": "https://unpkg.com/@splinetool/runtime@0.9.510/build/runtime.js"
        }
    });
    document.head.appendChild(importMap);

    esModuleShims.onload = async () => {
        try {
            const { Application } = await import('@splinetool/runtime');

            const sceneElements = [
                { id: 'dirt', url: dirt },
                // { id: 'earth3d', url: earth },
                // { id: 'smallDirt', url: dirt },
                { id: 'cherry', url: cherry },
                { id: 'table', url: table },
                { id: 'stone', url: stone },
                { id: 'command', url: command },
                { id: 'enchant', url: enchant },
                { id: 'pufferFish', url: pufferFish },
            ];

            const apps = [];

            sceneElements.forEach(({ id, url }) => {
                const element = document.getElementById(id);
                if (element) {
                    const app = new Application(element);
                    app.load(url).then(() => {
                        // Intersection Observer logic for playing/stopping animations
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                const appInstance = apps.find(a => a.id === id).app;

                                if (entry.isIntersecting) {
                                    appInstance.play(); // Play the animation
                                } else {
                                    appInstance.stop(); // Stop the animation
                                }
                            });
                        }, { threshold: 0.1 });

                        // Observe the element
                        observer.observe(element);

                    });

                    apps.push({ id, app }); // Store app instances with their corresponding id
                } else {
                    console.error(`Element with id "${id}" not found`);
                }
            });
        } catch (err) {
            console.error('Error loading the Spline application:', err);
        }
    };

    console.clear();
}

function removeSplineCode() {
    // Implement the logic to stop and clean up the Spline application if necessary.
    // This could involve stopping the animation, removing event listeners, or any other cleanup tasks.
    splineCodeInitialized = false;
}

function checkWidthAndExecute() {
    if (window.innerWidth > 500 && !splineCodeInitialized) {
        executeSplineCode();
        splineCodeInitialized = true;  // Mark that the code has been initialized
    } else if (window.innerWidth <= 500 && splineCodeInitialized) {
        removeSplineCode();
        splineCodeInitialized = false;  // Mark that the code has been uninitialized
    }
}

// Initial check
checkWidthAndExecute();

// Listen for resize events
window.addEventListener('resize', checkWidthAndExecute);
