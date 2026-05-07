// ========================================
// ГЛАВНЫЙ ФАЙЛ ПРИЛОЖЕНИЯ
// ========================================

// Инициализировать приложение при загрузке документа
document.addEventListener('DOMContentLoaded', function() {
    console.log('Приложение загружено');

    // Загрузить прогресс
    loadProgress();

    // Установить начальную страницу на главную
    goToPage('home');

    // Инициализировать мобильное меню
    initializeMobileMenu();
});

// Инициализировать мобильное меню
function initializeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
        });
    }

    // Закрыть меню при клике на элемент
    document.querySelectorAll('.mobile-menu-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });

    // Закрыть меню при клике вне его
    document.addEventListener('click', function(e) {
        if (mobileMenu && !mobileMenu.contains(e.target) && (!hamburger || !hamburger.contains(e.target))) {
            mobileMenu.classList.remove('active');
        }
    });
}

// Обработчик ошибок
window.addEventListener('error', function(event) {
    console.error('Ошибка:', event.error);
});

// Обработчик отсутствующей квизы
function handleMissingQuiz(topicId) {
    alert('Бұл тақырыпқа әлі тест қосылмаған. Вскоре добавим!');
}

// Уведомление о готовности
console.log('%cАғылшын тілін үйрену платформасы', 'color: green; font-size: 16px; font-weight: bold;');
console.log('%cПриложение готово к использованию!', 'color: blue; font-size: 14px;');
