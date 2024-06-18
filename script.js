// Функция за смяна на изображението и описанието в галерията
function changeImage(direction) {
    const currentImg = document.getElementById('current-img');
    const currentDesc = document.getElementById('image-description');
    const thumbnails = document.querySelectorAll('.thumbnail');
    let currentIndex = 0;

    // Намиране на индекса на текущото изображение
    thumbnails.forEach((thumb, index) => {
        if (thumb.src === currentImg.src) {
            currentIndex = index;
        }
    });

    // Промяна на индекса на изображението в зависимост от посоката
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % thumbnails.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    }

    // Промяна на изображението и описанието
    const newImg = thumbnails[currentIndex].src;
    const newDesc = document.documentElement.lang === 'en'
        ? thumbnails[currentIndex].getAttribute('data-description-en')
        : thumbnails[currentIndex].getAttribute('data-description-bg');
        
    currentImg.src = newImg;
    currentDesc.textContent = newDesc;
}

// Обработка на клик на бутоните за галерията и миниатюрите
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const thumbnails = document.querySelectorAll('.thumbnail');

    prevBtn.addEventListener('click', () => {
        changeImage('prev');
    });

    nextBtn.addEventListener('click', () => {
        changeImage('next');
    });

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', () => {
            const currentImg = document.getElementById('current-img');
            const currentDesc = document.getElementById('image-description');
            const newDesc = document.documentElement.lang === 'en'
                ? thumbnail.getAttribute('data-description-en')
                : thumbnail.getAttribute('data-description-bg');
                
            currentImg.src = thumbnail.src;
            currentDesc.textContent = newDesc;
        });
    });

    // Обработка на клик на бутоните за смяна на езика
    const langBgBtn = document.getElementById('lang-bg');
    const langEnBtn = document.getElementById('lang-en');

    langBgBtn.addEventListener('click', () => {
        changeLanguage('bg');
    });

    langEnBtn.addEventListener('click', () => {
        changeLanguage('en');
    });

    // Инициализация на описанието на първото изображение при зареждане на страницата
    const firstDesc = document.documentElement.lang === 'en'
        ? document.querySelector('.thumbnail').getAttribute('data-description-en')
        : document.querySelector('.thumbnail').getAttribute('data-description-bg');
        
    document.getElementById('image-description').textContent = firstDesc;
});

// Функция за смяна на езика
function changeLanguage(lang) {
    const langElements = document.querySelectorAll('[data-lang]');
    langElements.forEach((el) => {
        el.style.display = el.getAttribute('data-lang') === lang ? 'inline' : 'none';
    });

    // Промяна на описанията под изображенията
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb) => {
        const descriptionBg = thumb.getAttribute('data-description-bg');
        const descriptionEn = thumb.getAttribute('data-description-en');
        thumb.setAttribute('alt', lang === 'bg' ? descriptionBg : descriptionEn);
    });

    // Промяна на текущото описание
    const currentImg = document.getElementById('current-img');
    const currentDesc = document.getElementById('image-description');
    const currentImgAlt = lang === 'en'
        ? currentImg.getAttribute('data-description-en')
        : currentImg.getAttribute('data-description-bg');
        
    currentImg.setAttribute('alt', currentImgAlt);
    currentDesc.textContent = currentImgAlt;
}
 // за грешки
 // Функция за смяна на изображението и описанието в галерията
function changeImage(direction) {
    const currentImg = document.getElementById('current-img');
    const currentDesc = document.getElementById('image-description');
    const thumbnails = document.querySelectorAll('.thumbnail');
    let currentIndex = 0;

    console.log('Current image src:', currentImg.src);
    
    // Намиране на индекса на текущото изображение
    thumbnails.forEach((thumb, index) => {
        if (thumb.src === currentImg.src) {
            currentIndex = index;
        }
    });

    console.log('Current index:', currentIndex);

    // Промяна на индекса на изображението в зависимост от посоката
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % thumbnails.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    }

    console.log('New index:', currentIndex);

    // Промяна на изображението и описанието
    const newImg = thumbnails[currentIndex].src;
    const newDesc = document.documentElement.lang === 'en'
        ? thumbnails[currentIndex].getAttribute('data-description-en')
        : thumbnails[currentIndex].getAttribute('data-description-bg');
        
    console.log('New image src:', newImg);
    console.log('New description:', newDesc);
    
    currentImg.src = newImg;
    currentDesc.textContent = newDesc;
}

document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const currentImg = document.getElementById('current-img');
    const currentDesc = document.getElementById('image-description');
    let currentIndex = 0;

    function updateImage(index) {
        currentIndex = index;
        const newImg = thumbnails[currentIndex].src;
        const newDesc = document.documentElement.lang === 'en'
            ? thumbnails[currentIndex].getAttribute('data-description-en')
            : thumbnails[currentIndex].getAttribute('data-description-bg');
        currentImg.src = newImg;
        currentDesc.textContent = newDesc;
    }

    function changeImage(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % thumbnails.length;
        } else if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        }
        updateImage(currentIndex);
    }

    document.getElementById('prev').addEventListener('click', () => changeImage('prev'));
    document.getElementById('next').addEventListener('click', () => changeImage('next'));

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => updateImage(index));
    });

    // Инициализация на описанието на първото изображение при зареждане на страницата
    updateImage(0);

    // Обработка на клик на бутоните за смяна на езика
    document.getElementById('lang-bg').addEventListener('click', () => changeLanguage('bg'));
    document.getElementById('lang-en').addEventListener('click', () => changeLanguage('en'));
});

function changeLanguage(lang) {
    const langElements = document.querySelectorAll('[data-lang]');
    langElements.forEach(el => {
        el.style.display = el.getAttribute('data-lang') === lang ? 'inline' : 'none';
    });

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        const descriptionBg = thumb.getAttribute('data-description-bg');
        const descriptionEn = thumb.getAttribute('data-description-en');
        thumb.setAttribute('alt', lang === 'bg' ? descriptionBg : descriptionEn);
    });

    const currentImg = document.getElementById('current-img');
    const currentDesc = document.getElementById('image-description');
    const currentImgAlt = lang === 'en'
        ? currentImg.getAttribute('data-description-en')
        : currentImg.getAttribute('data-description-bg');
    currentImg.setAttribute('alt', currentImgAlt);
    currentDesc.textContent = currentImgAlt;
}
