const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const buttonsContainer = document.querySelector('.buttons');

// Function to get random position within viewport
function getRandomPosition() {
    const container = buttonsContainer.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Get viewport dimensions
    const maxX = window.innerWidth - btnRect.width - 40;
    const maxY = window.innerHeight - btnRect.height - 40;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    return { x: randomX, y: randomY };
}

// Move No button away when hovered
noBtn.addEventListener('mouseenter', () => {
    const pos = getRandomPosition();
    noBtn.style.position = 'fixed';
    noBtn.style.left = pos.x + 'px';
    noBtn.style.top = pos.y + 'px';
});

// For touch devices
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const pos = getRandomPosition();
    noBtn.style.position = 'fixed';
    noBtn.style.left = pos.x + 'px';
    noBtn.style.top = pos.y + 'px';
});

// Create hearts when Yes is clicked
yesBtn.addEventListener('click', () => {
    const question = document.getElementById('question');
    question.innerHTML = 'I knew it! 😊<br>I loveee you too! 💕';
    
    // Hide buttons
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    
    createHearts();
});

function createHearts() {
    const heartCount = 50;
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            
            // Random horizontal position
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            
            // Random animation delay and duration
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            heart.style.animationDuration = (Math.random() * 1 + 2) + 's';
            
            document.body.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 3500);
        }, i * 100);
    }
}
