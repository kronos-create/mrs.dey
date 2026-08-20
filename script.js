// Function to handle the interactive open
const handleEnvelopeOpen = (e) => {
    const btn = document.getElementById('envelope-btn');
    
    // Smooth tap response
    btn.style.transform = 'scale(0.92)';
    btn.style.opacity = '0.8';
    
    // Triggers the CSS flap open & letter slide animation
    btn.classList.add('open');
    
    // Adds a dynamic transition to the next page once open
    setTimeout(() => {
        window.location.href = 'letter.html'; // Or whatever you name the final message page
    }, 1500); // 1.5 second delay to watch it open nicely
}

// Attach listener to the correct ID
document.getElementById('envelope-btn').addEventListener('click', handleEnvelopeOpen);

