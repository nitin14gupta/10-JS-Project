let score = 0;
let time = 30;

const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const heartsContainer = document.getElementById('hearts');

function createHeart() {
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart', 'heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.addEventListener('click', () => {
        heart.remove();
        score++;
        scoreElement.innerText = `Score: ${score}`;
    });
    heartsContainer.appendChild(heart);

    // Remove the heart after it has fallen
    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
        }
    }, 3000);
}

function startGame() {
    const gameInterval = setInterval(() => {
        createHeart();
    }, 500);

    const timerInterval = setInterval(() => {
        time--;
        timerElement.innerText = `${time}s`;
        if (time <= 0) {
            clearInterval(gameInterval);
            clearInterval(timerInterval);
            alert(`Game over! Your score is ${score}`);
        }
    }, 1000);
}

startGame();
