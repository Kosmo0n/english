// ========================================
// НАВИГАЦИЯ И ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
// ========================================

let currentPage = 'home';
let currentClass = null;
let currentTopic = null;

// Аудио состояние
let audioUtterances = [];
let currentLineIdx = -1;
let isDialoguePlaying = false;
let synth = window.speechSynthesis;

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

    // Остановка аудио при переходе на любую страницу
    stopDialogueAudio();

    if (pageId === 'classes') renderClasses();
    if (pageId === 'grammar') renderGrammar();
    if (pageId === 'progress') renderProgress();
    if (pageId === 'listening') renderListening();
    if (pageId === 'speaking') renderSpeaking();
    if (pageId === 'reading') renderReading();
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

function closeMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
}

// Мобильное меню теперь инициализируется в main.js

function renderClasses() {}

function renderGrammar() {
    const grammarContainer = document.getElementById('grammar-container');
    const grammarDetail = document.getElementById('grammar-detail');
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

    stopDialogueAudio();

    container.style.display = 'none';
    detail.style.display = 'block';
    title.textContent = item.title;

    // Рендерим диалог
    dialogueBox.innerHTML = '<h3>Диалог</h3>';
    item.dialogue.forEach((line, index) => {
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.id = `line-${index}`;
        bubble.innerHTML = `
            <strong>${line.speaker}:</strong> ${line.text}
            <div class="bubble-kz">${line.textKz}</div>
        `;
        dialogueBox.appendChild(bubble);
    });

    prepareAudio(item.dialogue);

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

function prepareAudio(dialogue) {
    audioUtterances = [];
    currentLineIdx = -1;
    dialogue.forEach((line, index) => {
        const utterance = new SpeechSynthesisUtterance(line.text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        const speakerHash = line.speaker.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        utterance.pitch = 0.8 + (speakerHash % 5) * 0.1;
        utterance.onstart = () => {
            currentLineIdx = index;
            updateAudioUI();
            highlightLine(index);
        };
        utterance.onend = () => {
            if (isDialoguePlaying && index < dialogue.length - 1) {
                setTimeout(() => {
                    if (isDialoguePlaying) synth.speak(audioUtterances[index + 1]);
                }, 800);
            } else if (index === dialogue.length - 1) {
                stopDialogueAudio();
            }
        };
        audioUtterances.push(utterance);
    });
    document.getElementById('player-progress-fill').style.width = '0%';
    document.getElementById('current-time').textContent = '0:00';
    document.getElementById('total-time').textContent = `0:${dialogue.length * 5}`;
}

function toggleDialogueAudio() {
    if (isDialoguePlaying) pauseDialogueAudio();
    else playDialogueAudio();
}

function playDialogueAudio() {
    if (audioUtterances.length === 0) return;
    isDialoguePlaying = true;
    document.querySelector('.audio-player-container').classList.add('playing');
    if (synth.paused) synth.resume();
    else {
        const startFrom = currentLineIdx < 0 ? 0 : currentLineIdx;
        synth.speak(audioUtterances[startFrom]);
    }
    updateAudioUI();
}

function pauseDialogueAudio() {
    isDialoguePlaying = false;
    synth.pause();
    updateAudioUI();
    document.querySelector('.audio-player-container').classList.remove('playing');
}

function stopDialogueAudio() {
    isDialoguePlaying = false;
    synth.cancel();
    currentLineIdx = -1;
    updateAudioUI();
    removeHighlights();
    const playerContainer = document.querySelector('.audio-player-container');
    if (playerContainer) playerContainer.classList.remove('playing');
    const fill = document.getElementById('player-progress-fill');
    if (fill) fill.style.width = '0%';
}

function updateAudioUI() {
    const btn = document.getElementById('play-dialogue-btn');
    const status = document.getElementById('player-status');
    if (!btn || !status) return;
    if (isDialoguePlaying) {
        btn.innerHTML = '<i class="fas fa-pause"></i>';
        status.textContent = 'Ойнатылуда... / Playing...';
    } else {
        btn.innerHTML = '<i class="fas fa-play"></i>';
        status.textContent = currentLineIdx >= 0 ? 'Кідіртілді / Paused' : 'Дайын / Ready';
    }
    if (currentLineIdx >= 0) {
        const progress = ((currentLineIdx + 1) / audioUtterances.length) * 100;
        document.getElementById('player-progress-fill').style.width = `${progress}%`;
        document.getElementById('current-time').textContent = `0:${(currentLineIdx + 1) * 5}`;
    }
}

function highlightLine(index) {
    removeHighlights();
    const line = document.getElementById(`line-${index}`);
    if (line) {
        line.classList.add('speaking');
        line.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function removeHighlights() {
    document.querySelectorAll('.chat-bubble').forEach(b => b.classList.remove('speaking'));
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
    stopDialogueAudio();
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

window.addEventListener('load', function() {
    loadProgress();
});
