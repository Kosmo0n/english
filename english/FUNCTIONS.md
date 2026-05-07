# 🗺️ КАРТА ФУНКЦИЙ И ВОЗМОЖНОСТЕЙ

## 📍 Маршруты приложения (SPA Routes)

```
/
├── home              → Главная страница
├── classes           → Выбор класса
├── topics            → Темы выбранного класса
├── grammar           → Грамматика
├── quiz              → Квиз
└── progress          → Прогресс
```

---

## 🎯 Главные функции

### 1. НАВИГАЦИЯ

| Функция | Файл | Параметры | Результат |
|---------|------|-----------|----------|
| `goToPage(pageId)` | navigation.js | 'home', 'classes', 'topics', 'grammar', 'quiz', 'progress' | Переключает страницу |
| `goToTopics(classNum)` | navigation.js | 7, 8, 9 | Показывает темы класса |
| `startQuiz(topicId, topicTitle)` | navigation.js | 'daily-routines', ... | Запускает квиз |
| `closeMenu()` | navigation.js | — | Закрывает мобильное меню |

### 2. КВИЗ

| Функция | Файл | Параметры | Результат |
|---------|------|-----------|----------|
| `initializeQuiz(quiz)` | quiz.js | объект квиза | Инициализирует квиз |
| `renderQuestion()` | quiz.js | — | Отображает текущий вопрос |
| `selectAnswer(index)` | quiz.js | индекс ответа | Выбирает ответ |
| `confirmAnswer()` | quiz.js | — | Подтверждает ответ |
| `nextQuestion()` | quiz.js | — | Переходит на следующий |
| `showResults()` | quiz.js | — | Показывает результаты |
| `retakeQuiz()` | quiz.js | — | Повторяет квиз |

### 3. ПРОГРЕСС

| Функция | Файл | Параметры | Результат |
|---------|------|-----------|----------|
| `loadProgress()` | progress.js | — | Загружает из localStorage |
| `saveQuizResult()` | progress.js | topicId, percentage, ... | Сохраняет результат |
| `getAverageScore()` | progress.js | — | Возвращает средний балл |
| `getCompletedTopicsCount()` | progress.js | — | Кол-во завершённых тем |
| `renderProgress()` | progress.js | — | Отображает прогресс |
| `renderClassProgress()` | progress.js | — | Показывает прогресс классов |
| `renderWeakAreas()` | progress.js | — | Показывает слабые места |
| `clearProgress()` | progress.js | — | Очищает всё |

### 4. ДАННЫЕ

| Функция | Файл | Возвращает |
|---------|------|-----------|
| `getTopicsByClass(classNum)` | data/topics.js | Массив из 6 тем |
| `getTopicById(classNum, topicId)` | data/topics.js | Объект темы |
| `getGrammarById(id)` | data/grammar.js | Объект грамматики |
| `getQuizByTopicId(topicId)` | data/quizzes.js | Объект квиза |
| `getQuestionCount(quiz)` | data/quizzes.js | Кол-во вопросов |

---

## 🧩 Компоненты HTML

### Навигация
```html
<nav class="navbar">
  - logo (📚)
  - nav-menu (Басты бет, Сыныптар, Грамматика, Прогресс)
  - hamburger (мобильное меню)
  - mobile-menu
</nav>
```

### Главная страница
```html
- Hero секция
  - hero-title
  - hero-subtitle
  - hero-buttons (Бастау, Сыныпты таңдау)
- Benefits секция
  - benefit-card × 4
- CTA секция
```

### Страница классов
```html
- page-header
- classes-grid
  - class-card × 3
    - class-level
    - class-description
    - class-button
```

### Страница тем
```html
- page-header (Back кнопка)
- topics-grid
  - topic-card × 6
    - topic-level
    - topic-description
    - topic-button (Оқу, Тапсырмалар)
```

### Страница грамматики
```html
- grammar-grid
  - grammar-card × 6
- grammar-detail (скрытый)
  - detail-content
```

### Страница квиза
```html
- quiz-progress
  - progress-bar
  - progress-text
- quiz-content
  - question-block
    - question-text
    - quiz-options (radio buttons)
    - quiz-feedback
    - btn-next
- quiz-results (скрытый)
  - score-circle
  - results-stats
```

### Страница прогресса
```html
- progress-overview
  - stat-card × 3
- progress-details
  - class-progress × 3
- weak-areas
  - weak-area-item[]
```

---

## 🎨 CSS классы

### Кнопки
```css
.btn              /* Основная кнопка */
.btn-primary      /* Зелёная кнопка */
.btn-secondary    /* Белая с зелёнокраем */
.btn-small        /* Маленькая кнопка */
.btn-large        /* Большая кнопка */
.btn-next         /* Кнопка "Далее" */
```

### Карточки
```css
.class-card       /* Карточка класса */
.topic-card       /* Карточка темы */
.benefit-card     /* Карточка преимущества */
.grammar-card     /* Карточка грамматики */
.stat-card        /* Карточка статистики */
```

### Сетки
```css
.classes-grid     /* Сетка классов */
.topics-grid      /* Сетка тем */
.benefits-grid    /* Сетка преимуществ */
.grammar-grid     /* Сетка грамматики */
.progress-overview /* Сетка статистики */
```

### Интерактивные элементы
```css
.option           /* Вариант ответа */
.option.selected  /* Выбранный ответ */
.option.correct   /* Правильный ответ */
.option.incorrect /* Неправильный ответ */
```

### Анимации
```css
@keyframes fadeIn   /* Появление */
@keyframes slideDown /* Скольжение вниз */
@keyframes slideIn   /* Скольжение вбок */
@keyframes pulse    /* Мерцание */
```

---

## 📊 Структуры данных

### TOPICS
```javascript
{
  7: [{ id, title, description, icon, lessons }, ...], // 6 тем
  8: [...], // 6 тем
  9: [...]  // 6 тем
}
```

### GRAMMAR_TOPICS
```javascript
[
  {
    id: string,
    title: string,
    shortDesc: string,
    content: HTML string
  },
  ... // 6 элементов
]
```

### QUIZZES
```javascript
{
  'topic-id': {
    title: string,
    questions: [
      {
        id: number,
        question: string,
        questionKz: string,
        options: [{ text, textKz }, ...],
        correct: number,
        explanation: string
      },
      ...
    ]
  },
  ...
}
```

### Progress в localStorage
```javascript
{
  completedTopics: { 'topic-id': boolean, ... },
  quizResults: [
    { topic, class, percentage, correct, total, date },
    ...
  ],
  weakAreas: ['topic-id', ...]
}
```

---

## 🔄 События и обработчики

### Click события
```javascript
onclick="goToPage('home')"          // Кнопки навигации
onclick="goToTopics(7)"             // Карточки классов
onclick="selectAnswer(0)"           // Варианты ответов
onclick="startQuiz('daily-routines')" // Кнопка тестирования
onclick="showGrammarDetail(grammar)" // Карточка грамматики
```

### DOMContentLoaded
```javascript
// Инициализация при загрузке:
- loadProgress()
- goToPage('home')
- initializeMobileMenu()
```

### Custom события (потенциально)
```javascript
// Можно добавить:
- 'quizCompleted'
- 'progressUpdated'
- 'weakAreaIdentified'
```

---

## 📱 Media Query точки

```css
@media (max-width: 768px) {
  /* Планшет и мобильные */
  .nav-menu { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: flex; }
  /* Однстолбцовые сетки */
}

@media (max-width: 480px) {
  /* Только мобильные */
  /* Ещё меньше размеры шрифтов */
  /* Меньше отступы */
}
```

---

## ⚙️ Конфигурация

### LocalStorage ключи
```javascript
'english_learning_progress' → главный ключ всех данных
```

### URL ячейки (для выбора класса)
```javascript
currentClass = 7, 8 или 9
currentPage = 'home', 'classes', ...
currentTopic = 'daily-routines', ...
currentQuiz = объект квиза
currentQuestionIndex = 0-4
```

### Константы
```javascript
PROGRESS_KEY = 'english_learning_progress'
TOPICS = { 7: [...], 8: [...], 9: [...] }
GRAMMAR_TOPICS = [...]
QUIZZES = { ... }
```

---

## 🔌 API (если будет расширение)

### Возможные расширения
```javascript
// Синхронизация с сервером:
POST /api/progress → сохранить
GET /api/progress → загрузить

// Социальные функции:
GET /api/leaderboard → таблица лидеров
POST /api/share → поделиться результатом

// Рекомендации:
GET /api/recommendations → персональные советы

// Новый контент:
GET /api/topics → динамически загружать темы
GET /api/quizzes → динамически загружать квизы
```

---

## 🧪 Тестирование

### Что протестировать

✅ **Навигация**
- Все кнопки переключают страницы
- Мобильное меню работает
- Back кнопка возвращает назад

✅ **Квизы**
- Можно выбрать ответ
- Показывается обратная связь
- Подсчитываются баллы
- Показываются результаты

✅ **Прогресс**
- Статистика обновляется
- Слабые места определяются
- Data сохраняется в localStorage

✅ **Дизайн**
- Адаптивность на мобильных
- Все анимации работают
- Цвета правильные

✅ **Производительность**
- Нет утечек памяти
- Быстрая загрузка
- Плавные анимации

---

## 📚 Примеры использования

### Добавить новую тему
```javascript
// В js/data/topics.js:
TOPICS[7].push({
  id: 'new-topic',
  title: 'New Topic',
  description: 'Description',
  icon: '📖',
  lessons: ['Lesson 1']
});
```

### Добавить квиз
```javascript
// В js/data/quizzes.js:
QUIZZES['new-topic'] = {
  title: 'New Quiz',
  questions: [
    { id: 1, question: '?', options: [...], correct: 0 }
  ]
};
```

### Изменить цвет
```css
/* В css/styles.css :root */
--primary: #YourColor;
--accent: #YourColor;
```

---

## 🚀 Оптимизация

### Что можно улучшить

1. **Кэширование**
   - Кэшировать HTML вопросов
   - Кэшировать результаты запросов

2. **Ленивая загрузка**
   - Загружать темы по требованию
   - Загружать квизы динамически

3. **Компрессия**
   - Минифицировать JS/CSS
   - Сжимать изображения (если будут)

4. **ServiceWorker**
   - Оффлайн работа
   - Синхронизация при подключении

5. **SEO**
   - Meta теги
   - Schema.org разметка
   - Sitemap

---

**Полная справка по функциям и возможностям приложения!** 📖
