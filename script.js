'use strict'

document.querySelector('.guess-message').textContent = 'Правильно!';
document.querySelector('.number-input').value = 10;

document.querySelector('.check').addEventListener('click', function () {
    const guesNumber = Number(document.querySelector('.number-input').value)
    console.log(typeof guesNumber);

    if (!guesNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число!';
    }

})