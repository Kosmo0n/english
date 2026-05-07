// ========================================
// НАВИГАЦИЯ И ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
// ========================================

let currentPage = 'home';
let currentClass = null;
let currentTopic = null;

// Переключение между страницами
function goToPage(pageId) {
    // Скрыть все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Показать нужную страницу
    const page = document.getElementById(`${pageId}-page`);
    if (page) {
        page.classList.add('active');
        currentPage = pageId;
    }

    // Закрыть мобильное меню
    closeMenu();

    // Прокрутить до верха
    window.scrollTo(0, 0);

    // Если переходим на страницу классов, отрендерить классы
    if (pageId === 'classes') {
        renderClasses();
    }

    // Если переходим на грамматику, отрендерить грамматику
    if (pageId === 'grammar') {
        renderGrammar();
    }

    // Если переходим на страницу прогресса, отрендерить прогресс
    if (pageId === 'progress') {
        renderProgress();
    }
}

// Переход к темам класса
function goToTopics(classNum) {
    currentClass = classNum;
    const topicsContainer = document.getElementById('topics-container');
    const titleElement = document.getElementById('topics-title');
    const subtitleElement = document.getElementById('topics-subtitle');

    titleElement.textContent = `${classNum}-сынып тақырыптары`;
    subtitleElement.textContent = `Ағылшын тілінің негізгі тақырыптарын оқыңыз`;

    const topics = getTopicsByClass(classNum);
    topicsContainer.innerHTML = '';

    topics.forEach(topic => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        topicCard.innerHTML = `
            <div class="topic-level">${topic.icon}</div>
            <div class="topic-description">
                <h3>${topic.title}</h3>
                <p>${topic.description}</p>
            </div>
            <div class="topic-button">
                <button class="btn btn-primary btn-small" onclick="goToQuiz('${topic.id}', '${topic.title}')">📖 Оқу</button>
                <button class="btn btn-secondary btn-small" onclick="startQuiz('${topic.id}', '${topic.title}')">✅ Тапсырмалар</button>
            </div>
        `;
        topicsContainer.appendChild(topicCard);
    });

    goToPage('topics');
}

// Переход к квизу
function startQuiz(topicId, topicTitle) {
    currentTopic = topicId;
    const quiz = getQuizByTopicId(topicId);

    if (!quiz) {
        alert('Бұл тақырыпқа тест әлі қойылмаған.');
        return;
    }

    document.getElementById('quiz-title').textContent = `${topicTitle} - Тестілеу`;
    document.getElementById('totalQuestions').textContent = quiz.questions.length;

    goToPage('quiz');
    initializeQuiz(quiz);
}

// Переход к объяснению темы
function goToQuiz(topicId, topicTitle) {
    const lesson = getLessonContent(topicId);
    
    if (!lesson) {
        alert(`"${topicTitle}" тақырыбы бойынша материал әлі қосылмаған.`);
        return;
    }

    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-content').innerHTML = lesson.content;

    goToPage('lesson');
}

// Скрыть меню
function closeMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
}

// Переключение мобильного меню
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Закрыть меню при клике на пункт
    document.querySelectorAll('.mobile-menu-btn').forEach(btn => {
        btn.addEventListener('click', closeMenu);
    });
});

// Отрендерить классы
function renderClasses() {
    // Функция рендерит классы (они уже в HTML, просто подготавливаем)
}

// Отрендерить грамматику
function renderGrammar() {
    const grammarContainer = document.getElementById('grammar-container');
    const grammarDetail = document.getElementById('grammar-detail');

    // Если уже рендерили, не повторяем
    if (grammarContainer.innerHTML) return;

    grammarContainer.innerHTML = '';

    GRAMMAR_TOPICS.forEach(grammar => {
        const grammarCard = document.createElement('div');
        grammarCard.className = 'grammar-card';
        grammarCard.innerHTML = `
            <h3>${grammar.title}</h3>
            <p>${grammar.shortDesc}</p>
        `;
        grammarCard.addEventListener('click', () => showGrammarDetail(grammar));
        grammarContainer.appendChild(grammarCard);
    });
}

// Показать деталь грамматики
function showGrammarDetail(grammar) {
    const grammarContainer = document.getElementById('grammar-container');
    const grammarDetail = document.getElementById('grammar-detail');
    const detailTitle = document.getElementById('detail-title');
    const detailContent = document.getElementById('detail-content');

    grammarContainer.style.display = 'none';
    grammarDetail.style.display = 'block';

    detailTitle.textContent = grammar.title;
    detailContent.innerHTML = grammar.content;

    window.scrollTo(0, 0);
}

// Закрыть деталь грамматики
function closeGrammarDetail() {
    const grammarContainer = document.getElementById('grammar-container');
    const grammarDetail = document.getElementById('grammar-detail');

    grammarDetail.style.display = 'none';
    grammarContainer.style.display = 'grid';

    window.scrollTo(0, 0);
}

// Инициализировать страницу при загрузке
window.addEventListener('load', function() {
    // Загрузить прогресс из localStorage
    loadProgress();
});
