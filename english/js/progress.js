// ========================================
// ПРОГРЕСС И МЕСТНОЕ ХРАНИЛИЩЕ
// ========================================

// Инициализировать прогресс
const PROGRESS_KEY = 'english_learning_progress';

// Структура прогресса:
// {
//   completedTopics: { '7-daily-routines': true, ... },
//   quizResults: [
//     { topic: 'daily-routines', class: 7, percentage: 85, correct: 4, total: 5, date: timestamp }
//   ],
//   weakAreas: ['daily-routines', 'school-life']
// }

// Загрузить прогресс из localStorage
function loadProgress() {
    const stored = localStorage.getItem(PROGRESS_KEY);
    return stored ? JSON.parse(stored) : {
        completedTopics: {},
        quizResults: [],
        weakAreas: []
    };
}

// Сохранить прогресс
function saveProgress() {
    // Эта функция вызывается при каждом ответе на вопрос квиза
    // (опционально, может быть использована для сохранения текущего состояния)
}

// Сохранить результат квиза
function saveQuizResult(topicId, percentage, correctCount, totalCount) {
    const progress = loadProgress();

    // Добавить результат квиза
    progress.quizResults.push({
        topic: topicId,
        class: currentClass,
        percentage: percentage,
        correct: correctCount,
        total: totalCount,
        date: new Date().getTime()
    });

    // Обновить слабые места
    if (percentage < 60) {
        if (!progress.weakAreas.includes(topicId)) {
            progress.weakAreas.push(topicId);
        }
    } else {
        progress.weakAreas = progress.weakAreas.filter(w => w !== topicId);
    }

    // Отметить тему как завершённую, если результат >= 60%
    if (percentage >= 60) {
        progress.completedTopics[topicId] = true;
    }

    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

// Получить результаты по теме
function getTopicResults(topicId) {
    const progress = loadProgress();
    return progress.quizResults.filter(r => r.topic === topicId);
}

// Получить результаты по классу
function getClassResults(classNum) {
    const progress = loadProgress();
    return progress.quizResults.filter(r => r.class === classNum);
}

// Получить среднюю оценку
function getAverageScore() {
    const progress = loadProgress();
    if (progress.quizResults.length === 0) return 0;

    const total = progress.quizResults.reduce((sum, r) => sum + r.percentage, 0);
    return Math.round(total / progress.quizResults.length);
}

// Получить количество завершённых тем
function getCompletedTopicsCount() {
    const progress = loadProgress();
    return Object.keys(progress.completedTopics).length;
}

// Отрендерить прогресс
function renderProgress() {
    const progress = loadProgress();

    // Обновить общую статистику
    const completedCount = getCompletedTopicsCount();
    const allTopicsCount = 18; // 6 тем × 3 класса
    const averageScore = getAverageScore();

    document.getElementById('completedTopics').textContent = completedCount;
    document.getElementById('totalTopics').textContent = allTopicsCount;
    document.getElementById('averageScore').textContent = averageScore + '%';

    // Отрендерить прогресс по классам
    renderClassProgress();

    // Отрендерить слабые места
    renderWeakAreas();
}

// Отрендерить прогресс по классам
function renderClassProgress() {
    const progress = loadProgress();
    const progressByClass = document.getElementById('progress-by-class');
    progressByClass.innerHTML = '';

    for (let classNum = 7; classNum <= 9; classNum++) {
        const topics = getTopicsByClass(classNum);
        const classResults = getClassResults(classNum);

        let classProgress = 0;
        if (topics.length > 0) {
            const completedInClass = topics.filter(t => progress.completedTopics[t.id]).length;
            classProgress = Math.round((completedInClass / topics.length) * 100);
        }

        const classProgressDiv = document.createElement('div');
        classProgressDiv.className = 'class-progress';
        classProgressDiv.innerHTML = `
            <h3>${classNum}-сынып</h3>
            <div class="mini-progress-bar">
                <div class="mini-progress-fill" style="width: ${classProgress}%"></div>
            </div>
            <div class="progress-percentage">${classProgress}% (${topics.filter(t => progress.completedTopics[t.id]).length} / ${topics.length})</div>
        `;

        progressByClass.appendChild(classProgressDiv);
    }
}

// Отрендерить слабые места
function renderWeakAreas() {
    const progress = loadProgress();
    const weakAreasList = document.getElementById('weak-areas-list');
    weakAreasList.innerHTML = '';

    if (progress.weakAreas.length === 0) {
        weakAreasList.innerHTML = '<p style="text-align: center; color: #666;">✓ Ешқандай қайталау орынды емес!</p>';
        return;
    }

    progress.weakAreas.forEach(weakTopicId => {
        // Найти тему по ID
        let weakTopic = null;
        for (let classNum = 7; classNum <= 9; classNum++) {
            const topics = getTopicsByClass(classNum);
            const found = topics.find(t => t.id === weakTopicId);
            if (found) {
                weakTopic = found;
                break;
            }
        }

        if (weakTopic) {
            const results = getTopicResults(weakTopicId);
            const lastResult = results[results.length - 1];

            const weakAreaItem = document.createElement('div');
            weakAreaItem.className = 'weak-area-item';
            weakAreaItem.innerHTML = `
                <div class="weak-area-text">
                    <h4>${weakTopic.icon} ${weakTopic.title}</h4>
                    <p>Соңғы нәтиже: ${lastResult ? lastResult.percentage + '%' : '—'}</p>
                </div>
                <button class="weak-area-action" onclick="handleWeakAreaClick('${weakTopicId}')">
                    Қайталау
                </button>
            `;
            weakAreasList.appendChild(weakAreaItem);
        }
    });
}

// Обработать клик на слабую область
function handleWeakAreaClick(topicId) {
    // Найти класс и тему
    for (let classNum = 7; classNum <= 9; classNum++) {
        const topics = getTopicsByClass(classNum);
        const topic = topics.find(t => t.id === topicId);
        if (topic) {
            startQuiz(topicId, topic.title);
            return;
        }
    }
}

// Очистить прогресс
function clearProgress() {
    if (confirm('Вы уверены? Все данные о прогрессе будут удалены.')) {
        localStorage.removeItem(PROGRESS_KEY);
        alert('Прогресс очищен!');
        renderProgress();
    }
}

// Экспортировать статистику
function exportStatistics() {
    const progress = loadProgress();
    const json = JSON.stringify(progress, null, 2);
    console.log(json);
    alert('Статистика экспортирована в консоль (F12)');
}
