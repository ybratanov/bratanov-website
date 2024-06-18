document.addEventListener('DOMContentLoaded', function () {
    const langButtons = {
        bg: document.getElementById('lang-bg'),
        en: document.getElementById('lang-en')
    };

    langButtons.bg.addEventListener('click', function () {
        switchLanguage('bg');
    });

    langButtons.en.addEventListener('click', function () {
        switchLanguage('en');
    });

    function switchLanguage(lang) {
        document.querySelectorAll('[data-lang]').forEach(function (el) {
            if (el.dataset.lang === lang) {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
    }
});

// Функция за смяна на езика
function changeLanguage(lang) {
    let langElements = document.querySelectorAll('[data-lang]');
    langElements.forEach((el) => {
        if (lang === 'bg') {
            el.style.display = 'inline';
        } else if (lang === 'en') {
            el.style.display = 'none';
        }
    });

    // Промяна на описанията под изображенията
    let thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb) => {
        let descriptionBg = thumb.getAttribute('data-description-bg');
        let descriptionEn = thumb.getAttribute('data-description-en');
        if (lang === 'bg') {
            thumb.setAttribute('alt', descriptionBg);
        } else if (lang === 'en') {
            thumb.setAttribute('alt', descriptionEn);
        }
    });

    // Промяна на текущото описание
    let currentImg = document.getElementById('current-img');
    let currentDesc = document.getElementById('image-description');
    let currentImgAlt;
    if (lang === 'en') {
        currentImgAlt = currentImg.getAttribute('data-description-en');
    } else {
        currentImgAlt = currentImg.getAttribute('data-description-bg');
    }
    currentImg.setAttribute('alt', currentImgAlt);
    currentDesc.textContent = currentImgAlt;
}
