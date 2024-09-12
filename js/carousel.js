const image = document.getElementsByClassName('carousel-img')[0];

var current = 1;

setInterval(() => {
    image.style.opacity = 0;
    setTimeout(() => {
        image.src = `./images/carrossel-${current}.png`;
        image.alt = `Imagem ${current}`;
        image.style.opacity = 1;
    }, 1700) // 1.7 seconds
    current = current === 3 ? 1 : current + 1;
}, 10000); // 10 seconds
