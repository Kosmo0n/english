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

    // Если переходим на листенинг
    if (pageId === 'listening') {
        renderListening();
    }

    // Если переходим на спикинг
    if (pageId === 'speaking') {
        renderSpeaking();
    }

    // Если переходим на ридинг
    if (pageId === 'reading') {
        renderReading();
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

// ========================================
// ЛИСТЕНИНГ (LISTENING)
// ========================================

function renderListening() {
    const container = document.getElementById('listening-container');
    const detail = document.getElementById('listening-detail');
    
    container.style.display = 'grid';
    detail.style.display = 'none';

    if (container.innerHTML) return;

    LISTENING_DATA.forEach(item => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <div class="topic-level">${item.icon} ${item.level}</div>
            <div class="topic-description">
                <h3>${item.title}</h3>
                <p>Тыңдалым жаттығуы мен диалог</p>
            </div>
            <div class="topic-button">
                <button class="btn btn-primary btn-small" onclick="showListeningDetail('${item.id}')">🎧 Тыңдау</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function showListeningDetail(id) {
    const item = LISTENING_DATA.find(i => i.id === id);
    const container = document.getElementById('listening-container');
    const detail = document.getElementById('listening-detail');
    const title = document.getElementById('listening-detail-title');
    const dialogueBox = document.getElementById('listening-dialogue');
    const tasksBox = document.getElementById('listening-tasks');

    container.style.display = 'none';
    detail.style.display = 'block';
    title.textContent = item.title;

    // Рендерим диалог
    dialogueBox.innerHTML = '<h3>Диалог</h3>';
    item.dialogue.forEach(line => {
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.innerHTML = `
            <strong>${line.speaker}:</strong> ${line.text}
            <div class="bubble-kz">${line.textKz}</div>
        `;
        dialogueBox.appendChild(bubble);
    });

    // Рендерим задачи
    tasksBox.innerHTML = '<h3>Тапсырмалар</h3>';
    item.tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'listening-task-item';
        taskDiv.innerHTML = `
            <p><strong>${index + 1}. ${task.question}</strong></p>
            <p class="task-kz">${task.questionKz}</p>
            <div class="listening-options" id="options-${id}-${index}">
                ${task.options.map((opt, i) => `
                    <button class="option-btn" onclick="checkListeningAnswer(this, ${i}, ${task.correct})">${opt}</button>
                `).join('')}
            </div>
        `;
        tasksBox.appendChild(taskDiv);
    });

    window.scrollTo(0, 0);
}

function checkListeningAnswer(btn, selected, correct) {
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('.option-btn');
    
    buttons.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct');
        btn.innerHTML += ' ✓';
    } else {
        btn.classList.add('incorrect');
        btn.innerHTML += ' ✗';
        buttons[correct].classList.add('correct');
    }
}

function closeListeningDetail() {
    document.getElementById('listening-container').style.display = 'grid';
    document.getElementById('listening-detail').style.display = 'none';
}

// ========================================
// СПИКИНГ (SPEAKING)
// ========================================

function renderSpeaking() {
    const container = document.getElementById('speaking-container');
    if (container.innerHTML) return;

    SPEAKING_DATA.forEach(item => {
        const card = document.createElement('div');
        card.className = 'topic-card speaking-card';
        card.innerHTML = `
            <div class="topic-level">${item.icon} ${item.level}</div>
            <div class="topic-description">
                <h3>${item.title}</h3>
                <ul class="speaking-prompts">
                    ${item.prompts.map(p => `<li><i class="fas fa-comment-dots"></i> ${p}</li>`).join('')}
                </ul>
                <div class="speaking-phrases">
                    <strong><i class="fas fa-lightbulb"></i> Пайдалы тіркестер:</strong>
                    ${item.usefulPhrases.map(ph => `
                        <div class="phrase-item">
                            <span class="phrase-eng">${ph.eng}</span>
                            <span class="phrase-separator">—</span>
                            <span class="phrase-kz">${ph.kz}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// ========================================
// РИДИНГ (READING)
// ========================================

function renderReading() {
    const container = document.getElementById('reading-container');
    const detail = document.getElementById('reading-detail');
    
    container.style.display = 'grid';
    detail.style.display = 'none';

    if (container.innerHTML) return;

    READING_DATA.forEach(item => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <div class="topic-level">${item.icon} ${item.level}</div>
            <div class="topic-description">
                <h3>${item.title}</h3>
                <p>Мәтінді оқу және түсінуге арналған тест</p>
            </div>
            <div class="topic-button">
                <button class="btn btn-primary btn-small" onclick="showReadingDetail('${item.id}')">📖 Оқу</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function showReadingDetail(id) {
    const item = READING_DATA.find(i => i.id === id);
    const container = document.getElementById('reading-container');
    const detail = document.getElementById('reading-detail');
    const title = document.getElementById('reading-detail-title');
    const textBox = document.getElementById('reading-text');
    const quizBox = document.getElementById('reading-quiz');

    container.style.display = 'none';
    detail.style.display = 'block';
    title.textContent = item.title;

    textBox.innerHTML = `
        <div class="reading-content-eng">${item.content}</div>
        <hr>
        <div class="reading-content-kz">${item.contentKz}</div>
    `;

    quizBox.innerHTML = '<h3>Тест</h3>';
    item.tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'reading-task-item';
        taskDiv.innerHTML = `
            <p><strong>${index + 1}. ${task.question}</strong></p>
            <div class="reading-options">
                ${task.options.map((opt, i) => `
                    <button class="option-btn" onclick="checkListeningAnswer(this, ${i}, ${task.correct})">${opt}</button>
                `).join('')}
            </div>
        `;
        quizBox.appendChild(taskDiv);
    });

    window.scrollTo(0, 0);
}

function closeReadingDetail() {
    document.getElementById('reading-container').style.display = 'grid';
    document.getElementById('reading-detail').style.display = 'none';
}

// Инициализировать страницу при загрузке
window.addEventListener('load', function() {
    // Загрузить прогресс из localStorage
    loadProgress();
});
