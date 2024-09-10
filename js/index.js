const objectiveCards = document.getElementsByClassName('cards-container')[0];

for (let card of objectiveCards.children) {
    card.addEventListener('click', () => {
        console.log('clicked')
    })
}