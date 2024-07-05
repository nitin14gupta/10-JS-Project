const icons = [
    'fa-heart', 'fa-star', 'fa-diamond', 'fa-bell'
];

function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
}

function createBoard(id, icons) {
    let board = document.createElement('div');
    board.classList.add('board');
    board.id = `board-${id}`;
    
    let shuffledIcons = shuffleArray([...icons, ...icons]);
    
    shuffledIcons.forEach(icon => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.icon = icon;
        card.innerHTML = `<i class="fas ${icon}"></i>`;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
    
    return board;
}

let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    
    this.classList.add('flipped');
    
    if (!firstCard) {
        firstCard = this;
        return;
    }
    
    secondCard = this;
    lockBoard = true;
    
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
    
    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

let boardContainer = document.getElementById('board-container');
for (let i = 1; i <= 10; i++) {  // Reduced the number of boards to avoid overflow
    let board = createBoard(i, icons);
    boardContainer.appendChild(board);
}
