let popupBackground = document.getElementById('popup'),
    openButton = document.getElementById('open--popup'),
    close = document.getElementById('popup__close');

openButton.addEventListener('click', function () {
    document.getElementById('popup').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
});

close.addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
    document.querySelector('body').style.overflow = 'scroll';
});

popupBackground.addEventListener('click', function (event) {
    if (event.target.className == 'popup__body' &&  popupBackground.style.display !== 'none' ){
        popupBackground.style.display = 'none';
        document.querySelector('body').style.overflow = 'scroll';
    }
});
