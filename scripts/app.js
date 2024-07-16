document.getElementById('add-card').addEventListener('click', function() {
    const cardContainer = document.querySelector('.card-container');

    const newCard = document.createElement('article');
    newCard.className = 'card';
    newCard.innerHTML = `
        <img class="card__image" src="images/card.png" alt="Card image">
        <div class="card__content">
            <h3 class="card__content-title">New Card Heading</h3>
            <p class="card__content-description">
                New Card content text, New Card content text, New Card content text, New Card content text
            </p>
        </div>
        <div class="card__buttons">
            <button class="card__button-detailed">Подробнее</button>
            <button class="card__button-bookmark">В закладки</button>
        </div>
    `;

    cardContainer.appendChild(newCard);
    addBookmarkButtonEvent(newCard.querySelector('.card__button-bookmark'));
    addDetailedButtonEvent(newCard.querySelector('.card__button-detailed'));
});

document.getElementById('remove-card').addEventListener('click', function() {
    const cardContainer = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.card');

    if (cards.length > 0) {
        cardContainer.removeChild(cards[cards.length - 1]);
    }
});

function addDetailedButtonEvent(button) {
    button.addEventListener('click', function() {
        window.location.href = 'description.html';
    });
}

document.querySelectorAll('.card__button-detailed').forEach(addDetailedButtonEvent);

function addBookmarkButtonEvent(button) {
    button.addEventListener('click', function() {
        if (button.classList.contains('card__button-bookmark_added')) {
            button.classList.remove('card__button-bookmark_added');
            button.innerHTML = "В закладки";
        } else {
            button.classList.add('card__button-bookmark_added');
            button.innerHTML = "В закладках";
        }
    });
}

document.querySelectorAll('.card__button-bookmark').forEach(addBookmarkButtonEvent);