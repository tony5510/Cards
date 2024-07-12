function bookmarkClick(event) {
    const button = event.target;
    if (button.classList.contains('card__button-bookmark')) {
        if (button.classList.contains('card__button-bookmark_added')) {
            button.classList.remove('card__button-bookmark_added');
            button.innerHTML = "В закладки";
        } else {
            button.classList.add('card__button-bookmark_added');
            button.innerHTML = "В закладках";
        }
    }
}

document.addEventListener('click', bookmarkClick);

