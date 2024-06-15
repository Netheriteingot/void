// Prevent pinch-to-zoom
document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, { passive: false });

// Prevent view movement via swipes
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// Prevent view movement by overriding touchmove on the entire document
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, { passive: false });

