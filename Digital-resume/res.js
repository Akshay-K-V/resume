window.addEventListener('scroll', function() {
    const msg = document.getElementById('scroll-message');
    if (msg) {
        if (window.scrollY > 300) {
            msg.innerText = "You have scrolled down the page!";
            // Move the message upward as you scroll further
            const offset = Math.min((window.scrollY - 300), 100); // limit upward movement
            msg.style.transform = `translateY(-${offset}px)`;
            msg.style.transition = 'transform 0.2s';
        } else {
            msg.innerText = "";
            msg.style.transform = 'translateY(0)';
        }
    }
});