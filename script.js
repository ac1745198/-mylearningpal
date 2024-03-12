document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const addCardBtn = document.querySelector('.add-card-btn');

    // Function to create a new flashcard
    function createFlashcard(frontContent, backContent) {
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

        // Add event listener to flip the card
        flashcard.addEventListener('click', function() {
            flashcardContent.classList.toggle('flipped');
        });
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

    // Add event listener for 'Add Flashcard' button
    addCardBtn.addEventListener('click', function() {
        const frontContent = prompt("Enter Front Content:");
        const backContent = prompt("Enter Back Content:");

        if (frontContent && backContent) {
            createFlashcard(frontContent, backContent);
        } else {
            alert("Please enter both front and back content.");
        }
    });
});
