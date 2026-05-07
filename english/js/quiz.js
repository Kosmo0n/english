// ========================================
// КВИЗ ФУНКЦИИ
// ========================================

let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;
let selectedAnswerIndex = null;

// Инициализировать квиз
function initializeQuiz(quiz) {
    currentQuiz = quiz;
    currentQuestionIndex = 0;
    userAnswers = new Array(quiz.questions.length).fill(null);
    quizStartTime = new Date();
    selectedAnswerIndex = null;

    renderQuestion();
}

// Отрендерить текущий вопрос
function renderQuestion() {
    if (!currentQuiz) return;

    const quizContent = document.getElementById('quiz-content');
    const quizResults = document.getElementById('quiz-results');
    const question = currentQuiz.questions[currentQuestionIndex];

    // Обновить прогресс
    updateProgressBar();

    if (!question) {
        showResults();
        return;
    }

    let html = `
        <div class="question-block">
            <div class="question-text">
                ${question.question}
            </div>
            <div class="quiz-options">
    `;

    question.options.forEach((option, index) => {
        const isSelected = userAnswers[currentQuestionIndex] === index;
        const className = isSelected ? 'option selected' : 'option';

        html += `
            <div class="${className}" onclick="selectAnswer(${index})">
                <div class="option-radio"></div>
                <span>${option.text}</span>
            </div>
        `;
    });

    html += `
            </div>
    `;

    // Показать обратную связь если ответ уже выбран
    if (userAnswers[currentQuestionIndex] !== null) {
        const selectedIndex = userAnswers[currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;
        const feedbackClass = isCorrect ? 'correct' : 'incorrect';
        const feedbackText = isCorrect ? '✓ Дұрыс!' : '✗ Қате. Дұрыс жауап: ' + question.options[question.correct].text;

        html += `
            <div class="quiz-feedback ${feedbackClass}">
                ${feedbackText}
                <br><small>${question.explanation}</small>
            </div>
        `;

        // Кнопка "Далее"
        if (currentQuestionIndex < currentQuiz.questions.length - 1) {
            html += `
                <button class="btn btn-primary btn-next" onclick="nextQuestion()">
                    Келесі сұрау →
                </button>
            `;
        } else {
            html += `
                <button class="btn btn-primary btn-next" onclick="showResults()">
                    Нәтижелерді көру ✓
                </button>
            `;
        }
    } else {
        // Кнопка отправки ответа
        html += `
            <button class="btn btn-primary btn-next" onclick="confirmAnswer()" style="opacity: ${selectedAnswerIndex !== null ? '1' : '0.5'}; pointer-events: ${selectedAnswerIndex !== null ? 'auto' : 'none'};">
                Жауап беру ✓
            </button>
        `;
    }

    html += '</div>';
    quizContent.innerHTML = html;
}

// Выбрать ответ
function selectAnswer(index) {
    if (userAnswers[currentQuestionIndex] === null) {
        selectedAnswerIndex = index;
        renderQuestion();
    }
}

// Подтвердить ответ
function confirmAnswer() {
    if (selectedAnswerIndex !== null) {
        userAnswers[currentQuestionIndex] = selectedAnswerIndex;
        selectedAnswerIndex = null;

        // Сохранить прогресс
        saveProgress();

        renderQuestion();
    }
}

// Следующий вопрос
function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        selectedAnswerIndex = null;
        renderQuestion();
    }
}

// Обновить прогресс бар
function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const currentQuestionEl = document.getElementById('currentQuestion');
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;

    progressFill.style.width = progress + '%';
    currentQuestionEl.textContent = currentQuestionIndex + 1;
}

// Показать результаты
function showResults() {
    if (!currentQuiz) return;

    const quizContent = document.getElementById('quiz-content');
    const quizResults = document.getElementById('quiz-results');

    // Подсчитать правильные ответы
    let correctCount = 0;
    let wrongAnswers = [];

    currentQuiz.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        } else {
            wrongAnswers.push({
                question: question.question,
                userAnswer: userAnswers[index] !== null ? currentQuiz.questions[index].options[userAnswers[index]].text : 'Нет ответа',
                correctAnswer: currentQuiz.questions[index].options[question.correct].text
            });
        }
    });

    const percentage = Math.round((correctCount / currentQuiz.questions.length) * 100);

    // Обновить содержимое результатов
    const scorePercentage = document.getElementById('scorePercentage');
    const scoreMessage = document.getElementById('scoreMessage');
    const resultsStats = document.getElementById('resultsStats');

    scorePercentage.textContent = percentage + '%';

    // Определить сообщение на основе результата
    let message = '';
    if (percentage >= 80) {
        message = '🎉 Керемет! Сіз ойындарды ақылмен шешті!';
    } else if (percentage >= 60) {
        message = '👍 Жақсы! Қайталауға болады.';
    } else if (percentage >= 40) {
        message = '📚 Қайталап оқуға ұсынамын.';
    } else {
        message = '💪 Қайта оқуға тырысыңыз!';
    }

    scoreMessage.textContent = message;

    // Показать статистику
    let statsHtml = `
        <div class="stat-item">
            <span>Дұрыс жауаптар:</span>
            <strong>${correctCount} / ${currentQuiz.questions.length}</strong>
        </div>
        <div class="stat-item">
            <span>Қате жауаптар:</span>
            <strong>${wrongAnswers.length}</strong>
        </div>
    `;

    resultsStats.innerHTML = statsHtml;

    // Скрыть квиз, показать результаты
    quizContent.style.display = 'none';
    quizResults.style.display = 'block';

    // Сохранить результат в прогресс
    saveQuizResult(currentTopic, percentage, correctCount, currentQuiz.questions.length);

    window.scrollTo(0, 0);
}

// Повторить квиз
function retakeQuiz() {
    const quizContent = document.getElementById('quiz-content');
    const quizResults = document.getElementById('quiz-results');

    quizContent.style.display = 'block';
    quizResults.style.display = 'none';

    initializeQuiz(currentQuiz);
}
