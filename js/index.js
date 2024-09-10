// JavaScript para controlar o slider
const cardsContainer = document.querySelector('.cards-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    console.log('clickde')
    if (currentIndex > 0) {
        currentIndex--;
        cardsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < cardsContainer.children.length - 1) {
        currentIndex++;
        cardsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});
