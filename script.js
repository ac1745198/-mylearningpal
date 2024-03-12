// Function to create a new flashcard
function createFlashcard(frontContent, backContent) {
    const container = document.querySelector('.container');
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');

    const flashcardContent = document.createElement('div');
    flashcardContent.classList.add('flashcard-content');

    const front = document.createElement('div');
    front.classList.add('front');
    front.textContent = frontContent;

    const back = document.createElement('div');
    back.classList.add('back');
    back.textContent = backContent;

    flashcardContent.appendChild(front);
    flashcardContent.appendChild(back);

    flashcard.appendChild(flashcardContent);

    container.appendChild(flashcard);
}

// Example flashcards
const flashcards = [
    { front: 'HTML', back: 'HyperText Markup Language' },
    { front: 'CSS', back: 'Cascading Style Sheets' },
    { front: 'JavaScript', back: 'High-level, interpreted programming language' }
];

// Create initial flashcards
flashcards.forEach(card => {
    createFlashcard(card.front, card.back);
});

// Example of adding a new flashcard dynamically
createFlashcard("Node.js", "Server-side JavaScript runtime");
