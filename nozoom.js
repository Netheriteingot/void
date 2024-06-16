// Allow touch actions on specific elements
document.getElementById('q1d').addEventListener('touchstart', function(event) {
    event.stopPropagation();
}, false);

document.getElementById('q2d').addEventListener('touchstart', function(event) {
    event.stopPropagation();
}, false);

document.getElementById('button_back').addEventListener('touchstart', function(event) {
    event.stopPropagation();
}, false);


