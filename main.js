
let readMoreButton = document.querySelectorAll('.button-read-more');

 readMoreButton[0].addEventListener ('click', function () {
    let aboutText = document.querySelector('.about__text');
    let buttonText = readMoreButton[0].querySelector('.text');
    let buttonImg = readMoreButton[0].querySelector('.img');
    if (aboutText.classList.contains('max-height-for-block')) {
        aboutText.classList.remove('max-height-for-block');
        buttonImg.classList.remove('img-rotate')
        buttonText.textContent = 'Читать далее';
    } else {
        aboutText.classList.add('max-height-for-block');
        buttonImg.classList.add('img-rotate')
        buttonText.textContent = 'Свернуть';
    }
    
})
readMoreButton[1].addEventListener ('click', function () {
    let repairedBrands = document.querySelector('.swiper');
    let buttonText = readMoreButton[1].querySelector('.text');
    let buttonImg = readMoreButton[1].querySelector('.img');
    if (repairedBrands.classList.contains('max-height-for-block')) {
        repairedBrands.classList.remove('max-height-for-block');
        buttonImg.classList.remove('img-rotate')
        buttonText.textContent = 'Показать все';
    } else {
        repairedBrands.classList.add('max-height-for-block');
        buttonImg.classList.add('img-rotate')
        buttonText.textContent = 'Свернуть';
    }
    
})