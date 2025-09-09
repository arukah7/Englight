// Пример скрипта для добавления анимации
window.onload = function() {
    const header = document.querySelector('header h1');
    header.classList.add('fade-in');
}

// Добавим анимацию при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('header h1').style.opacity = 0;
    setTimeout(function() {
        document.querySelector('header h1').style.transition = 'opacity 2s';
        document.querySelector('header h1').style.opacity = 1;
    }, 200);
});
