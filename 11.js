document.addEventListener('DOMContentLoaded', function() {
    
    const obo = document.getElementById("obo");
    obo.textContent = "Добро пожаловать на наш сайт!";

    const headernav = documet.getElementByClassName("header-nav");
    headernav.style.color = "red";

    // Изменение текста первого параграфа
    const firstParagraph = document.querySelector('p');
    if (firstParagraph) {
        firstParagraph.textContent = "Это новый текст параграфа.";
    }

    // Скрытие встроенного видео
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(video => {
        video.style.display = 'none';
    });
});
