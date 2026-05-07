// ========================================
// ТАҚЫРЫПТАР (ТЕМЫ) ҮШІН ДЕРЕКТЕР
// ========================================

const TOPICS = {
    7: [
        {
            id: 'daily-routines',
            title: 'Daily Routines',
            description: 'Күндалық істер мен уақыт туралы сөйлесу',
            icon: '⏰',
            lessons: [
                'Сағат және уақыт (Time)',
                'Өндіктісі тек іс-тәжірибелер',
                'Morning rutines',
                'Evening activities'
            ]
        },
        {
            id: 'school-life',
            title: 'School Life',
            description: 'Мектеп жұмысы, сабақтар және оқушылар',
            icon: '📚',
            lessons: [
                'School subjects',
                'Classroom vocabulary',
                'Teacher and students',
                'School activities'
            ]
        },
        {
            id: 'environment',
            title: 'Environment',
            description: 'Табиғат, ауа райы және сыртқы әрекеттер',
            icon: '🌍',
            lessons: [
                'Weather',
                'Nature and animals',
                'Outdoor activities',
                'Seasons'
            ]
        },
        {
            id: 'travelling',
            title: 'Travelling',
            description: 'Сапарлау, орындар және көліктер',
            icon: '✈️',
            lessons: [
                'Transportation',
                'Holiday destinations',
                'Hotel and accommodation',
                'Travel vocabulary'
            ]
        },
        {
            id: 'technology',
            title: 'Technology',
            description: 'Техника, компьютер және электроника',
            icon: '💻',
            lessons: [
                'Computer and internet',
                'Mobile devices',
                'Social media',
                'Online vocabulary'
            ]
        },
        {
            id: 'health',
            title: 'Health',
            description: 'Денсаулық, дәрістер және спорт',
            icon: '💪',
            lessons: [
                'Parts of body',
                'Illnesses and medicines',
                'Sports and fitness',
                'Healthy lifestyle'
            ]
        }
    ],
    8: [
        {
            id: 'food-drinks',
            title: 'Food & Drinks',
            description: 'Ас-түлік, сусындар және ресторан әдебі',
            icon: '🍔',
            lessons: [
                'Fruits and vegetables',
                'Meals and dishes',
                'Eating habits',
                'Restaurant conversation'
            ]
        },
        {
            id: 'shopping',
            title: 'Shopping',
            description: 'Сатылым, бағалар және көндіктер',
            icon: '🛍️',
            lessons: [
                'Clothing vocabulary',
                'Shops and markets',
                'Money and prices',
                'Shopping conversation'
            ]
        },
        {
            id: 'family',
            title: 'Family',
            description: 'Отбасы, ағайын-сіндер және ата-баба',
            icon: '👨‍👩‍👧‍👦',
            lessons: [
                'Family members',
                'Family relations',
                'Family events',
                'Describing relatives'
            ]
        },
        {
            id: 'hobbies',
            title: 'Hobbies',
            description: 'Ынамды іс-әрекеттер және сүргіндік',
            icon: '🎮',
            lessons: [
                'Sports and games',
                'Arts and crafts',
                'Music and entertainment',
                'Personal interests'
            ]
        },
        {
            id: 'culture',
            title: 'Culture',
            description: 'Қазақ және англо-сақсон мәдениеті',
            icon: '🎭',
            lessons: [
                'Holidays and traditions',
                'Movies and music',
                'Museums and art',
                'Cultural differences'
            ]
        },
        {
            id: 'emotions',
            title: 'Emotions',
            description: 'Сезімдер мен ынамды орын',
            icon: '😊',
            lessons: [
                'Feeling and moods',
                'Adjectives for emotions',
                'Expressing opinions',
                'Personal relationships'
            ]
        }
    ],
    9: [
        {
            id: 'work-career',
            title: 'Work & Career',
            description: 'Жұмыс іс-әрекеттері және мансаб',
            icon: '💼',
            lessons: [
                'Job descriptions',
                'Workplace vocabulary',
                'Career planning',
                'Interview skills'
            ]
        },
        {
            id: 'education',
            title: 'Education',
            description: 'Оқу, университет және білімінділіктер',
            icon: '🎓',
            lessons: [
                'University life',
                'Subjects and courses',
                'Educational systems',
                'Future plans'
            ]
        },
        {
            id: 'environment-advanced',
            title: 'Environmental Issues',
            description: 'Экология және климат өзгеруі',
            icon: '♻️',
            lessons: [
                'Pollution',
                'Climate change',
                'Conservation',
                'Sustainable living'
            ]
        },
        {
            id: 'media',
            title: 'Media & Communication',
            description: 'Ресімі ұстану және ынамды сөйтпей',
            icon: '📺',
            lessons: [
                'News and journalism',
                'Social media impact',
                'Advertising',
                'Communication styles'
            ]
        },
        {
            id: 'science',
            title: 'Science',
            description: 'Ғылым, математика және зерттеу',
            icon: '🔬',
            lessons: [
                'Physics and chemistry',
                'Biology and medicine',
                'Technology innovations',
                'Space exploration'
            ]
        },
        {
            id: 'social-issues',
            title: 'Social Issues',
            description: 'Қоғамдық мәселер және құқық',
            icon: '🤝',
            lessons: [
                'Human rights',
                'Social problems',
                'Community service',
                'Global challenges'
            ]
        }
    ]
};

// Функция для получения тем по классу
function getTopicsByClass(classNum) {
    return TOPICS[classNum] || [];
}

// Функция для получения темы по ID
function getTopicById(classNum, topicId) {
    const topics = getTopicsByClass(classNum);
    return topics.find(t => t.id === topicId);
}
