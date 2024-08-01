const loading = document.getElementById('loading-icon');

function iconAnimation() {
    loading.classList.add('animate-icon');
    setTimeout(iconAnimationStop, 1000); // Stops animation after 1 second
}

function iconAnimationStop() {
    loading.classList.remove('animate-icon');
}

// Start the animation every 2 seconds
const clearInterval = setInterval(iconAnimation, 2000);

setTimeout(() => {
    clearInterval(intervalID); // Stop the interval
    window.location.href = 'home.html'; // Redirect to home.html
}, 6000);