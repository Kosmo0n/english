// ========================================
// КВИЗ (ТЕСТІЛЕУ) ДЕРЕКТЕРІ
// ========================================

const QUIZZES = {
    'daily-routines': {
        title: 'Daily Routines Quiz',
        questions: [
            {
                id: 1,
                question: 'What time do you usually wake up?',
                questionKz: 'Сіз әдетте қажет болған кезде оянасыз ба?',
                options: [
                    { text: '6:00 AM', textKz: '6:00 ТА' },
                    { text: '9:00 AM', textKz: '9:00 ТА' },
                    { text: '12:00 PM', textKz: '12:00 ТА' },
                    { text: '3:00 PM', textKz: '3:00 ТҚ' }
                ],
                correct: 0,
                explanation: 'Most people wake up around 6-7 AM. / Көптеген адамдар 6-7 ТА тұрады.'
            },
            {
                id: 2,
                question: 'Complete: "I usually ___ breakfast at 8 AM."',
                questionKz: 'Толықтыру: "Мен әдетте 8 ТА ___ бүрекпін."',
                options: [
                    { text: 'eat', textKz: 'жеймін' },
                    { text: 'drink', textKz: 'ішемін' },
                    { text: 'make', textKz: 'жасаймын' },
                    { text: 'go', textKz: 'барамын' }
                ],
                correct: 0,
                explanation: 'We eat breakfast. / Біз таңғы ас жеймін.'
            },
            {
                id: 3,
                question: 'What do you do in the evening?',
                questionKz: 'Сіз кешке нені істейсіз?',
                options: [
                    { text: 'go to school', textKz: 'мектепке барамын' },
                    { text: 'do homework', textKz: 'үй тапсырмасын істеймін' },
                    { text: 'go to work', textKz: 'жұмысқа барамын' },
                    { text: 'wake up', textKz: 'оянамын' }
                ],
                correct: 1,
                explanation: 'In the evening, students do homework. / Кешке оқушылар үй тапсырмасын істейді.'
            },
            {
                id: 4,
                question: 'How often do you exercise?',
                questionKz: 'Сіз қашан физикалық тәрбие істейсіз?',
                options: [
                    { text: 'every day', textKz: 'күнде' },
                    { text: 'three times a week', textKz: 'аптасына үш рет' },
                    { text: 'never', textKz: 'ешқашан' },
                    { text: 'all of the above', textKz: 'барлығы' }
                ],
                correct: 1,
                explanation: 'Most people exercise 3-4 times a week. / Көп адамдар аптасына 3-4 рет жарнайды.'
            },
            {
                id: 5,
                question: 'Choose the correct sentence:',
                questionKz: 'Дұрыс сөйлеуді таңдаңыз:',
                options: [
                    { text: 'She go to bed at 10 PM', textKz: 'Ол сағат 10 ТҚ төрткөліктікке барады' },
                    { text: 'She goes to bed at 10 PM', textKz: 'Ол сағат 10 ТҚ төрткөліктікке барады' },
                    { text: 'She going to bed at 10 PM', textKz: 'Ол төрткөліктікке барады' },
                    { text: 'She went to bed at 10 PM', textKz: 'Ол сағат 10 ТҚ төрткөліктікке барды' }
                ],
                correct: 1,
                explanation: 'With he/she/it, we add "s" to the verb. / He/she/it-тің барлық сөзінде "s" қосамыз.'
            }
        ]
    },
    'school-life': {
        title: 'School Life Quiz',
        questions: [
            {
                id: 1,
                question: 'What subject do you like the most?',
                questionKz: 'Сіз қайсы пәнді ең көп ұнатасыз?',
                options: [
                    { text: 'Mathematics', textKz: 'Математика' },
                    { text: 'English', textKz: 'Ағылшын' },
                    { text: 'History', textKz: 'Тарих' },
                    { text: 'Physical Education', textKz: 'Дене тәрбиесі' }
                ],
                correct: 1,
                explanation: 'Everyone has different favorite subjects. / Әркімнің өзінің сүргіндік пәні бар.'
            },
            {
                id: 2,
                question: 'How many subjects do you study?',
                questionKz: 'Сіз қанша пәнді оқисыз?',
                options: [
                    { text: '3-4', textKz: '3-4' },
                    { text: '5-6', textKz: '5-6' },
                    { text: '8-10', textKz: '8-10' },
                    { text: 'more than 12', textKz: '12-тен көп' }
                ],
                correct: 2,
                explanation: 'Secondary school students typically study 8-10 subjects. / Орта мектеп оқушылары әдетте 8-10 пәнді оқиды.'
            },
            {
                id: 3,
                question: 'What time does school start?',
                questionKz: 'Мектеп қажет болған кезде басталады?',
                options: [
                    { text: '7:00 AM', textKz: '7:00 ТА' },
                    { text: '8:00 AM', textKz: '8:00 ТА' },
                    { text: '9:00 AM', textKz: '9:00 ТА' },
                    { text: '10:00 AM', textKz: '10:00 ТА' }
                ],
                correct: 1,
                explanation: 'Most schools start at 8:00 AM. / Көптеген мектептер 8:00 ТА басталады.'
            },
            {
                id: 4,
                question: 'Complete: "I ___ lunch at school."',
                questionKz: 'Толықтыру: "Мен мектепте ___ түскі ас жеймін."',
                options: [
                    { text: 'have', textKz: 'бар' },
                    { text: 'eat', textKz: 'жеймін' },
                    { text: 'make', textKz: 'жасаймын' },
                    { text: 'drink', textKz: 'ішемін' }
                ],
                correct: 0,
                explanation: 'We say "have lunch" (завтрак/обед). / Біз "have lunch" айтамыз.'
            },
            {
                id: 5,
                question: 'What is your favorite school activity?',
                questionKz: 'Сіздің сүргіндік мектеп іс-әрекеті қандай?',
                options: [
                    { text: 'sports', textKz: 'спорт' },
                    { text: 'art', textKz: 'өнер' },
                    { text: 'music', textKz: 'музыка' },
                    { text: 'debate club', textKz: 'пікіртәлім клубы' }
                ],
                correct: 0,
                explanation: 'Many students enjoy sports activities. / Көптеген оқушылар спорттық іс-әрекеттерді ұнатады.'
            }
        ]
    },
    'environment': {
        title: 'Environment Quiz',
        questions: [
            {
                id: 1,
                question: 'What is the weather like today?',
                questionKz: 'Бүгін ауа райы қандай?',
                options: [
                    { text: 'sunny', textKz: 'күндіс' },
                    { text: 'rainy', textKz: 'жаңбырлы' },
                    { text: 'cloudy', textKz: 'бұлтты' },
                    { text: 'windy', textKz: 'желді' }
                ],
                correct: 0,
                explanation: 'We use different adjectives to describe weather. / Ауа райын сипаттау үшін түрлі сөздер қолданамыз.'
            },
            {
                id: 2,
                question: 'Which season is the warmest?',
                questionKz: 'Қайсы маусым ең ыстық?',
                options: [
                    { text: 'Spring', textKz: 'Көктем' },
                    { text: 'Summer', textKz: 'Жаз' },
                    { text: 'Autumn', textKz: 'Күз' },
                    { text: 'Winter', textKz: 'Қыс' }
                ],
                correct: 1,
                explanation: 'Summer is the warmest season. / Жаз - ең ыстық маусым.'
            },
            {
                id: 3,
                question: 'Complete: "It ___ raining outside."',
                questionKz: 'Толықтыру: "Сыртқа ___ жаңбыр жаудап тұр."',
                options: [
                    { text: 'is', textKz: 'болады' },
                    { text: 'are', textKz: 'болады' },
                    { text: 'rains', textKz: 'жауады' },
                    { text: 'rained', textKz: 'жауды' }
                ],
                correct: 0,
                explanation: 'Use "is raining" for present continuous. / Present Continuous үшін "is raining" қолданамыз.'
            },
            {
                id: 4,
                question: 'What do we do to help the environment?',
                questionKz: 'Табиғатқа қалай көмектесеміз?',
                options: [
                    { text: 'recycle', textKz: 'қайта өндеу' },
                    { text: 'plant trees', textKz: 'ағаш отырғызу' },
                    { text: 'save water', textKz: 'сүзек сақтау' },
                    { text: 'all of the above', textKz: 'барлығы' }
                ],
                correct: 3,
                explanation: 'All these actions help protect the environment. / Барлық бұл әрекеттер табиғатты қорғайды.'
            },
            {
                id: 5,
                question: 'What is your favorite outdoor activity?',
                questionKz: 'Сіздің сүргіндік сыртқы іс-әрекеті?',
                options: [
                    { text: 'hiking', textKz: 'қадамдау' },
                    { text: 'swimming', textKz: 'сүну' },
                    { text: 'cycling', textKz: 'велосипед жүргу' },
                    { text: 'camping', textKz: 'лагерь орну' }
                ],
                correct: 1,
                explanation: 'Swimming is a popular outdoor activity. / Сүну - танымал сыртқы іс-әрекет.'
            }
        ]
    },
    'travelling': {
        title: 'Travelling Quiz',
        questions: [
            {
                id: 1,
                question: 'How do you travel by plane?',
                questionKz: 'Сіз аэропланмен қалай сапарласыз?',
                options: [
                    { text: 'by flying', textKz: 'ұшу арқылы' },
                    { text: 'by driving', textKz: 'айдау арқылы' },
                    { text: 'by walking', textKz: 'жаяу жүру арқылы' },
                    { text: 'by swimming', textKz: 'сүзу арқылы' }
                ],
                correct: 0,
                explanation: 'Planes fly in the air. / Аэропландар ауада ұшады.'
            },
            {
                id: 2,
                question: 'Where do people stay when they travel?',
                questionKz: 'Адамдар сапарлағанда қайда тұрақтайды?',
                options: [
                    { text: 'at school', textKz: 'мектепте' },
                    { text: 'at a hotel', textKz: 'қонақ үйде' },
                    { text: 'at the gym', textKz: 'спорт залында' },
                    { text: 'at the office', textKz: 'кеңседе' }
                ],
                correct: 1,
                explanation: 'Hotels are for travelers. / Қонақ үйлер саяхатшыларға арналған.'
            },
            {
                id: 3,
                question: 'Which of these is a vehicle?',
                questionKz: 'Бұлардың қайсысы көлік?',
                options: [
                    { text: 'book', textKz: 'кітап' },
                    { text: 'bus', textKz: 'автобус' },
                    { text: 'pen', textKz: 'қалам' },
                    { text: 'chair', textKz: 'орындық' }
                ],
                correct: 1,
                explanation: 'A bus is a vehicle. / Автобус - бұл көлік.'
            }
        ]
    },
    'technology': {
        title: 'Technology Quiz',
        questions: [
            {
                id: 1,
                question: 'What device do we use for calling?',
                questionKz: 'Қоңырау шалу үшін қандай құрылғыны қолданамыз?',
                options: [
                    { text: 'phone', textKz: 'телефон' },
                    { text: 'refrigerator', textKz: 'тоңазытқыш' },
                    { text: 'oven', textKz: 'пеш' },
                    { text: 'table', textKz: 'үстел' }
                ],
                correct: 0,
                explanation: 'Phones are for communication. / Телефондар байланыс үшін.'
            },
            {
                id: 2,
                question: 'What is the internet used for?',
                questionKz: 'Интернет не үшін қолданылады?',
                options: [
                    { text: 'browsing websites', textKz: 'сайттарды қарау' },
                    { text: 'sleeping', textKz: 'ұйықтау' },
                    { text: 'eating', textKz: 'тамақ жеу' },
                    { text: 'washing clothes', textKz: 'киім жуу' }
                ],
                correct: 0,
                explanation: 'Internet is for information. / Интернет ақпарат алу үшін.'
            }
        ]
    },
    'health': {
        title: 'Health Quiz',
        questions: [
            {
                id: 1,
                question: 'Which of these is a sport?',
                questionKz: 'Бұлардың қайсысы спорт?',
                options: [
                    { text: 'sleeping', textKz: 'ұйықтау' },
                    { text: 'football', textKz: 'футбол' },
                    { text: 'eating pizza', textKz: 'пицца жеу' },
                    { text: 'watching TV', textKz: 'теледидар қарау' }
                ],
                correct: 1,
                explanation: 'Football is a sport. / Футбол - бұл спорт.'
            },
            {
                id: 2,
                question: 'What should you do if you are sick?',
                questionKz: 'Ауырып қалсаңыз не істеу керек?',
                options: [
                    { text: 'go to a doctor', textKz: 'дәрігерге бару' },
                    { text: 'go to a party', textKz: 'кешке бару' },
                    { text: 'eat ice cream', textKz: 'балмұздақ жеу' },
                    { text: 'run 10 km', textKz: '10 км жүгіру' }
                ],
                correct: 0,
                explanation: 'Doctors help sick people. / Дәрігерлер ауру адамдарға көмектеседі.'
            }
        ]
    },
    'food-drinks': {
        title: 'Food & Drinks Quiz',
        questions: [
            { id: 1, question: 'Which of these is a fruit?', questionKz: 'Бұлардың қайсысы жеміс?', options: [{ text: 'apple', textKz: 'алма' }, { text: 'potato', textKz: 'картоп' }, { text: 'bread', textKz: 'нан' }, { text: 'meat', textKz: 'ет' }], correct: 0, explanation: 'Apple is a fruit. / Алма - бұл жеміс.' },
            { id: 2, question: 'What do you say to order food?', questionKz: 'Тамаққа тапсырыс беру үшін не айтасыз?', options: [{ text: 'I would like to order', textKz: 'Мен тапсырыс бергім келеді' }, { text: 'I want to sleep', textKz: 'Мен ұйықтағым келеді' }, { text: 'Where is the bus?', textKz: 'Автобус қайда?' }, { text: 'Goodbye', textKz: 'Сау болыңыз' }], correct: 0, explanation: '"I would like to order" is polite.' },
            { id: 3, question: 'Which drink is usually hot?', questionKz: 'Қайсы сусын әдетте ыстық болады?', options: [{ text: 'tea', textKz: 'шәй' }, { text: 'orange juice', textKz: 'шырын' }, { text: 'cold water', textKz: 'салқын су' }, { text: 'milkshake', textKz: 'милкшейк' }], correct: 0, explanation: 'Tea is often served hot.' },
            { id: 4, question: 'Where can you eat dinner out?', questionKz: 'Сыртта кешкі асты қайда ішуге болады?', options: [{ text: 'restaurant', textKz: 'ресторан' }, { text: 'library', textKz: 'кітапхана' }, { text: 'gym', textKz: 'спорт залы' }, { text: 'pharmacy', textKz: 'дәріхана' }], correct: 0, explanation: 'Restaurants serve food.' },
            { id: 5, question: 'What is a typical breakfast food?', questionKz: 'Таңғы асқа тән тағам қандай?', options: [{ text: 'eggs', textKz: 'жұмыртқа' }, { text: 'steak', textKz: 'стейк' }, { text: 'pizza', textKz: 'пицца' }, { text: 'ice cream', textKz: 'балмұздақ' }], correct: 0, explanation: 'Eggs are common for breakfast.' }
        ]
    },
    'shopping': {
        title: 'Shopping Quiz',
        questions: [
            { id: 1, question: 'What do you use to buy things?', questionKz: 'Заттарды сатып алу үшін нені қолданасыз?', options: [{ text: 'money', textKz: 'ақша' }, { text: 'water', textKz: 'су' }, { text: 'books', textKz: 'кітаптар' }, { text: 'sand', textKz: 'құм' }], correct: 0, explanation: 'Money is used for shopping.' },
            { id: 2, question: 'Where do you go to buy clothes?', questionKz: 'Киім сатып алу үшін қайда барасыз?', options: [{ text: 'clothing store', textKz: 'киім дүкені' }, { text: 'bakery', textKz: 'набайхана' }, { text: 'hospital', textKz: 'аурухана' }, { text: 'park', textKz: 'саябақ' }], correct: 0, explanation: 'You buy clothes at a clothing store.' },
            { id: 3, question: 'What does "expensive" mean?', questionKz: '"Expensive" нені білдіреді?', options: [{ text: 'costs a lot of money', textKz: 'қымбат' }, { text: 'costs very little', textKz: 'арзан' }, { text: 'it is free', textKz: 'тегін' }, { text: 'it is beautiful', textKz: 'әдемі' }], correct: 0, explanation: 'Expensive means high price.' },
            { id: 4, question: 'How do you ask for the price?', questionKz: 'Бағасын қалай сұрайсыз?', options: [{ text: 'How much is it?', textKz: 'Бұл қанша тұрады?' }, { text: 'What time is it?', textKz: 'Сағат неше?' }, { text: 'Where is the exit?', textKz: 'Шығу қайда?' }, { text: 'Who are you?', textKz: 'Сіз кімсіз?' }], correct: 0, explanation: '"How much" is for price.' },
            { id: 5, question: 'What do you get after buying something?', questionKz: 'Сатып алғаннан кейін не аласыз?', options: [{ text: 'receipt', textKz: 'чек' }, { text: 'gift', textKz: 'сыйлық' }, { text: 'book', textKz: 'кітап' }, { text: 'menu', textKz: 'мәзір' }], correct: 0, explanation: 'A receipt is proof of purchase.' }
        ]
    },
    'family': {
        title: 'Family Quiz',
        questions: [
            { id: 1, question: 'Who is your father\'s sister?', questionKz: 'Әкеңіздің әпкесі кім?', options: [{ text: 'aunt', textKz: 'тәте' }, { text: 'uncle', textKz: 'аға' }, { text: 'brother', textKz: 'бауыр' }, { text: 'grandmother', textKz: 'әже' }], correct: 0, explanation: 'Your father\'s sister is your aunt.' },
            { id: 2, question: 'Who are your parents?', questionKz: 'Ата-анаңыз кімдер?', options: [{ text: 'mother and father', textKz: 'ана мен әке' }, { text: 'brother and sister', textKz: 'аға мен әпке' }, { text: 'aunt and uncle', textKz: 'тәте мен аға' }, { text: 'friends', textKz: 'достар' }], correct: 0, explanation: 'Parents are mom and dad.' },
            { id: 3, question: 'What is your mother\'s son to you?', questionKz: 'Анаңыздың ұлы сізге кім болады?', options: [{ text: 'brother', textKz: 'бауыр' }, { text: 'sister', textKz: 'әпке' }, { text: 'cousin', textKz: 'бөле' }, { text: 'father', textKz: 'әке' }], correct: 0, explanation: 'Mother\'s son is a brother.' },
            { id: 4, question: 'What do we call our father\'s father?', questionKz: 'Әкеміздің әкесін қалай атаймыз?', options: [{ text: 'grandfather', textKz: 'ата' }, { text: 'uncle', textKz: 'көке' }, { text: 'brother', textKz: 'бауыр' }, { text: 'nephew', textKz: 'жиен' }], correct: 0, explanation: 'He is your grandfather.' },
            { id: 5, question: 'If you have no siblings, you are an ___', questionKz: 'Бауырыңыз болмаса, сіз ___ баласыз.', options: [{ text: 'only child', textKz: 'жалғыз бала' }, { text: 'oldest child', textKz: 'тұңғыш' }, { text: 'youngest child', textKz: 'кенже' }, { text: 'adopted child', textKz: 'асыранды' }], correct: 0, explanation: 'An only child has no siblings.' }
        ]
    },
    'hobbies': {
        title: 'Hobbies Quiz',
        questions: [
            { id: 1, question: 'What do you do in your free time?', questionKz: 'Бос уақытыңызда не істейсіз?', options: [{ text: 'hobby', textKz: 'хобби' }, { text: 'work', textKz: 'жұмыс' }, { text: 'sleep', textKz: 'ұйықтау' }, { text: 'fight', textKz: 'төбелесу' }], correct: 0, explanation: 'Hobbies are for free time.' },
            { id: 2, question: 'Which is a creative hobby?', questionKz: 'Шығармашылық хобби қайсысы?', options: [{ text: 'painting', textKz: 'сурет салу' }, { text: 'sleeping', textKz: 'ұйықтау' }, { text: 'running', textKz: 'жүгіру' }, { text: 'eating', textKz: 'тамақ жеу' }], correct: 0, explanation: 'Painting is creative.' },
            { id: 3, question: 'What hobby involves a ball?', questionKz: 'Қай хоббиге доп қажет?', options: [{ text: 'basketball', textKz: 'баскетбол' }, { text: 'reading', textKz: 'оқу' }, { text: 'chess', textKz: 'шахмат' }, { text: 'fishing', textKz: 'балық аулау' }], correct: 0, explanation: 'Basketball is played with a ball.' },
            { id: 4, question: 'Collecting ___ is a popular hobby.', questionKz: '___ жинау - танымал хобби.', options: [{ text: 'stamps', textKz: 'маркалар' }, { text: 'trash', textKz: 'қоқыс' }, { text: 'clouds', textKz: 'бұлттар' }, { text: 'water', textKz: 'су' }], correct: 0, explanation: 'Collecting stamps is common.' },
            { id: 5, question: 'Playing the ___ is a musical hobby.', questionKz: '___ ойнау - музыкалық хобби.', options: [{ text: 'guitar', textKz: 'гитара' }, { text: 'ball', textKz: 'доп' }, { text: 'game', textKz: 'ойын' }, { text: 'book', textKz: 'кітап' }], correct: 0, explanation: 'Guitar is a musical instrument.' }
        ]
    },
    'culture': {
        title: 'Culture Quiz',
        questions: [
            { id: 1, question: 'What is a tradition?', questionKz: 'Дәстүр деген не?', options: [{ text: 'repeated custom', textKz: 'әдет-ғұрып' }, { text: 'new car', textKz: 'жаңа көлік' }, { text: 'phone app', textKz: 'қосымша' }, { text: 'weather', textKz: 'ауа райы' }], correct: 0, explanation: 'Traditions are passed down.' },
            { id: 2, question: 'Which is a cultural event?', questionKz: 'Мәдени шара қайсысы?', options: [{ text: 'festival', textKz: 'фестиваль' }, { text: 'shopping', textKz: 'сауда' }, { text: 'sleeping', textKz: 'ұйықтау' }, { text: 'homework', textKz: 'үй тапсырмасы' }], correct: 0, explanation: 'Festivals are cultural.' },
            { id: 3, question: 'Nauryz is a ___ holiday.', questionKz: 'Наурыз - бұл ___ мереке.', options: [{ text: 'traditional', textKz: 'дәстүрлі' }, { text: 'modern', textKz: 'заманауи' }, { text: 'weekly', textKz: 'апталық' }, { text: 'sad', textKz: 'мұңды' }], correct: 0, explanation: 'Nauryz is traditional.' },
            { id: 4, question: 'What do people wear in traditions?', questionKz: 'Дәстүрде адамдар не киеді?', options: [{ text: 'national costumes', textKz: 'ұлттық киім' }, { text: 'spacesuits', textKz: 'скафандр' }, { text: 'pajamas', textKz: 'пижама' }, { text: 'swimsuits', textKz: 'купальник' }], correct: 0, explanation: 'National costumes are traditional.' },
            { id: 5, question: 'A "museum" is a place for ___', questionKz: '"Музей" - бұл ___ орны.', options: [{ text: 'culture and history', textKz: 'мәдениет пен тарих' }, { text: 'sleeping', textKz: 'ұйықтау' }, { text: 'buying bread', textKz: 'нан сатып алу' }, { text: 'swimming', textKz: 'жүзу' }], correct: 0, explanation: 'Museums keep history.' }
        ]
    },
    'emotions': {
        title: 'Emotions Quiz',
        questions: [
            { id: 1, question: 'How do you feel if you win?', questionKz: 'Жеңсеңіз, қалай сезінесіз?', options: [{ text: 'happy', textKz: 'бақытты' }, { text: 'sad', textKz: 'мұңды' }, { text: 'angry', textKz: 'ашулы' }, { text: 'tired', textKz: 'шаршаған' }], correct: 0, explanation: 'Winning makes people happy.' },
            { id: 2, question: 'How do you feel without sleep?', questionKz: 'Ұйықтамасаңыз, қалай сезінесіз?', options: [{ text: 'tired', textKz: 'шаршаған' }, { text: 'excited', textKz: 'толқыған' }, { text: 'happy', textKz: 'бақытты' }, { text: 'surprised', textKz: 'таң қалған' }], correct: 0, explanation: 'No sleep causes tiredness.' },
            { id: 3, question: 'Which emotion is a smile for?', questionKz: 'Күлкі қай сезімге тән?', options: [{ text: 'happiness', textKz: 'қуаныш' }, { text: 'anger', textKz: 'ашу' }, { text: 'fear', textKz: 'қорқыныш' }, { text: 'sadness', textKz: 'мұң' }], correct: 0, explanation: 'Smiles show happiness.' },
            { id: 4, question: 'If you are afraid, you feel ___', questionKz: 'Қорқып тұрсаңыз, ___ сезінесіз.', options: [{ text: 'scared', textKz: 'қорыққан' }, { text: 'bored', textKz: 'іш пысқан' }, { text: 'hungry', textKz: 'аш' }, { text: 'proud', textKz: 'мақтанған' }], correct: 0, explanation: 'Fear is being scared.' },
            { id: 5, question: 'Crying is usually a sign of ___', questionKz: 'Жылау әдетте ___ белгісі.', options: [{ text: 'sadness', textKz: 'мұң' }, { text: 'joy', textKz: 'қуаныш' }, { text: 'hunger', textKz: 'аштық' }, { text: 'sleepiness', textKz: 'ұйқы' }], correct: 0, explanation: 'Sadness causes crying.' }
        ]
    },
    'work-career': {
        title: 'Work & Career Quiz',
        questions: [
            { id: 1, question: 'What do you need to get a good job?', questionKz: 'Жақсы жұмысқа тұру үшін не қажет?', options: [{ text: 'education and skills', textKz: 'білім мен дағды' }, { text: 'luck', textKz: 'сәттілік' }, { text: 'sleep', textKz: 'ұйқы' }, { text: 'TV', textKz: 'теледидар' }], correct: 0, explanation: 'Skills are essential for careers.' },
            { id: 2, question: 'Who treats sick people?', questionKz: 'Ауруларды кім емдейді?', options: [{ text: 'doctor', textKz: 'дәрігер' }, { text: 'pilot', textKz: 'ұшқыш' }, { text: 'chef', textKz: 'аспаз' }, { text: 'police', textKz: 'полиция' }], correct: 0, explanation: 'Doctors provide medical care.' },
            { id: 3, question: 'What do you write for a job application?', questionKz: 'Жұмысқа өтініш үшін не жазасыз?', options: [{ text: 'CV / Resume', textKz: 'түйіндеме' }, { text: 'poem', textKz: 'өлең' }, { text: 'story', textKz: 'әңгіме' }, { text: 'list', textKz: 'тізім' }], correct: 0, explanation: 'A CV lists your skills.' },
            { id: 4, question: 'An "interview" is a ___', questionKz: '"Сұхбат" - бұл ___', options: [{ text: 'meeting for a job', textKz: 'жұмыс үшін кездесу' }, { text: 'party', textKz: 'кеш' }, { text: 'game', textKz: 'ойын' }, { text: 'lesson', textKz: 'сабақ' }], correct: 0, explanation: 'Interviews are for hiring.' },
            { id: 5, question: 'A "salary" is ___', questionKz: '"Жалақы" - бұл ___', options: [{ text: 'money for work', textKz: 'жұмыс үшін ақша' }, { text: 'a holiday', textKz: 'демалыс' }, { text: 'a book', textKz: 'кітап' }, { text: 'a tool', textKz: 'құрал' }], correct: 0, explanation: 'Salary is payment for work.' }
        ]
    },
    'education': {
        title: 'Education Quiz',
        questions: [
            { id: 1, question: 'Where do you get a degree?', questionKz: 'Дипломды қайдан аласыз?', options: [{ text: 'university', textKz: 'университет' }, { text: 'park', textKz: 'саябақ' }, { text: 'cinema', textKz: 'кино' }, { text: 'shop', textKz: 'дүкен' }], correct: 0, explanation: 'Universities provide degrees.' },
            { id: 2, question: 'What is a "scholarship"?', questionKz: '"Шәкіртақы" деген не?', options: [{ text: 'money for study', textKz: 'оқуға көмек' }, { text: 'book', textKz: 'кітап' }, { text: 'bag', textKz: 'сөмке' }, { text: 'holiday', textKz: 'демалыс' }], correct: 0, explanation: 'Scholarships help pay for study.' },
            { id: 3, question: 'A "library" is a place for ___', questionKz: '"Кітапхана" - бұл ___ орны.', options: [{ text: 'reading and study', textKz: 'оқу және зерттеу' }, { text: 'eating', textKz: 'тамақтану' }, { text: 'dancing', textKz: 'билеу' }, { text: 'sleeping', textKz: 'ұйықтау' }], correct: 0, explanation: 'Libraries are for learning.' },
            { id: 4, question: 'A "tutor" is someone who ___', questionKz: '"Тьютор" - бұл ___ адам.', options: [{ text: 'helps you learn', textKz: 'оқуға көмектесетін' }, { text: 'sells food', textKz: 'тамақ сататын' }, { text: 'builds houses', textKz: 'үй салатын' }, { text: 'drives cars', textKz: 'көлік айдайтын' }], correct: 0, explanation: 'Tutors provide extra help.' },
            { id: 5, question: 'What is a "graduation"?', questionKz: '"Бітіру кеші" деген не?', options: [{ text: 'finishing school', textKz: 'оқуды бітіру' }, { text: 'starting school', textKz: 'оқуды бастау' }, { text: 'a test', textKz: 'тест' }, { text: 'a lesson', textKz: 'сабақ' }], correct: 0, explanation: 'Graduation is the end of study.' }
        ]
    },
    'environment-advanced': {
        title: 'Environmental Issues Quiz',
        questions: [
            { id: 1, question: 'What is "recycling"?', questionKz: '"Қайта өңдеу" деген не?', options: [{ text: 'reusing materials', textKz: 'материалды қолдану' }, { text: 'throwing trash', textKz: 'қоқыс тастау' }, { text: 'burning', textKz: 'өртеу' }, { text: 'waste', textKz: 'қалдық' }], correct: 0, explanation: 'Recycling reduces waste.' },
            { id: 2, question: 'What causes global warming?', questionKz: 'Жаһандық жылынудың себебі?', options: [{ text: 'pollution', textKz: 'ластану' }, { text: 'trees', textKz: 'ағаштар' }, { text: 'cleaning', textKz: 'тазалау' }, { text: 'water', textKz: 'су' }], correct: 0, explanation: 'Pollution is a major cause.' },
            { id: 3, question: 'What is "renewable energy"?', questionKz: '"Жаңартылатын энергия" деген не?', options: [{ text: 'solar and wind', textKz: 'күн мен жел' }, { text: 'coal', textKz: 'көмір' }, { text: 'oil', textKz: 'мұнай' }, { text: 'smoke', textKz: 'түтін' }], correct: 0, explanation: 'Solar/wind are renewable.' },
            { id: 4, question: 'Deforestation is ___', questionKz: '"Орманды кесу" - бұл ___', options: [{ text: 'cutting down trees', textKz: 'ағаштарды кесу' }, { text: 'planting trees', textKz: 'ағаш егу' }, { text: 'watering plants', textKz: 'су құю' }, { text: 'saving animals', textKz: 'жануарларды сақтау' }], correct: 0, explanation: 'Deforestation harms nature.' },
            { id: 5, question: 'What is an "ecosystem"?', questionKz: '"Экожүйе" деген не?', options: [{ text: 'living organisms', textKz: 'тірі организмдер' }, { text: 'a computer', textKz: 'компьютер' }, { text: 'a book', textKz: 'кітап' }, { text: 'a car', textKz: 'көлік' }], correct: 0, explanation: 'Ecosystems link living things.' }
        ]
    },
    'media': {
        title: 'Media Quiz',
        questions: [
            { id: 1, question: 'Which is a social media app?', questionKz: 'Әлеуметтік желі қайсысы?', options: [{ text: 'Instagram', textKz: 'Instagram' }, { text: 'Calculator', textKz: 'Калькулятор' }, { text: 'Clock', textKz: 'Сағат' }, { text: 'Flashlight', textKz: 'Фонарь' }], correct: 0, explanation: 'Instagram is for networking.' },
            { id: 2, question: 'What is "advertising"?', questionKz: '"Жарнама" деген не?', options: [{ text: 'selling products', textKz: 'тауарды сату' }, { text: 'sleeping', textKz: 'ұйықтау' }, { text: 'running', textKz: 'жүгіру' }, { text: 'eating', textKz: 'тамақтану' }], correct: 0, explanation: 'Ads promote products.' },
            { id: 3, question: 'A "journalist" is someone who ___', questionKz: '"Журналист" - бұл ___ адам.', options: [{ text: 'reports news', textKz: 'жаңалық тарататын' }, { text: 'cooks food', textKz: 'тамақ пісіретін' }, { text: 'paints', textKz: 'сурет салатын' }, { text: 'drives', textKz: 'айдайтын' }], correct: 0, explanation: 'Journalists report news.' },
            { id: 4, question: 'What is "fake news"?', questionKz: '"Жалған ақпарат" деген не?', options: [{ text: 'untrue stories', textKz: 'өтірік ақпарат' }, { text: 'important news', textKz: 'маңызды хабар' }, { text: 'a movie', textKz: 'кино' }, { text: 'a joke', textKz: 'әзіл' }], correct: 0, explanation: 'Fake news is misleading.' },
            { id: 5, question: 'A "broadcast" is ___', questionKz: '"Хабар тарату" - бұл ___', options: [{ text: 'TV/Radio program', textKz: 'ТД/Радио бағдарлама' }, { text: 'a book', textKz: 'кітап' }, { text: 'a phone', textKz: 'телефон' }, { text: 'a list', textKz: 'тізім' }], correct: 0, explanation: 'Broadcasting is media distribution.' }
        ]
    },
    'science': {
        title: 'Science Quiz',
        questions: [
            { id: 1, question: 'What do scientists do?', questionKz: 'Ғалымдар не істейді?', options: [{ text: 'conduct experiments', textKz: 'тәжірибе жасайды' }, { text: 'dance', textKz: 'билейді' }, { text: 'cook', textKz: 'пісіреді' }, { text: 'sell', textKz: 'сатады' }], correct: 0, explanation: 'Scientists explore the world.' },
            { id: 2, question: 'What is "gravity"?', questionKz: '"Гравитация" деген не?', options: [{ text: 'force of attraction', textKz: 'тартылыс күші' }, { text: 'a type of food', textKz: 'тағам түрі' }, { text: 'a color', textKz: 'түс' }, { text: 'a planet', textKz: 'планета' }], correct: 0, explanation: 'Gravity pulls things down.' },
            { id: 3, question: 'A "laboratory" is a place for ___', questionKz: '"Зертхана" - бұл ___ орны.', options: [{ text: 'scientific tests', textKz: 'ғылыми сынақтар' }, { text: 'sleeping', textKz: 'ұйықтау' }, { text: 'shopping', textKz: 'сауда' }, { text: 'swimming', textKz: 'жүзу' }], correct: 0, explanation: 'Labs are for experiments.' },
            { id: 4, question: 'What is an "atom"?', questionKz: '"Атом" деген не?', options: [{ text: 'basic unit of matter', textKz: 'заттың кіші бөлшегі' }, { text: 'a large star', textKz: 'үлкен жұлдыз' }, { text: 'a book', textKz: 'кітап' }, { text: 'a person', textKz: 'адам' }], correct: 0, explanation: 'Atoms build everything.' },
            { id: 5, question: 'The "solar system" has ___ planets.', questionKz: 'Күн жүйесінде ___ планета бар.', options: [{ text: 'eight', textKz: 'сегіз' }, { text: 'ten', textKz: 'он' }, { text: 'five', textKz: 'бес' }, { text: 'twelve', textKz: 'он екі' }], correct: 0, explanation: 'There are 8 planets.' }
        ]
    },
    'social-issues': {
        title: 'Social Issues Quiz',
        questions: [
            { id: 1, question: 'What is "justice"?', questionKz: '"Әділдік" деген не?', options: [{ text: 'fairness', textKz: 'әділдік' }, { text: 'fighting', textKz: 'төбелесу' }, { text: 'running', textKz: 'жүгіру' }, { text: 'buying', textKz: 'сатып алу' }], correct: 0, explanation: 'Justice means being fair.' },
            { id: 2, question: 'What is "poverty"?', questionKz: '"Кедейлік" деген не?', options: [{ text: 'lack of money', textKz: 'ақшасыздық' }, { text: 'lots of wealth', textKz: 'байлық' }, { text: 'good health', textKz: 'денсаулық' }, { text: 'education', textKz: 'білім' }], correct: 0, explanation: 'Poverty is being poor.' },
            { id: 3, question: 'What is "discrimination"?', questionKz: '"Дискриминация" деген не?', options: [{ text: 'unfair treatment', textKz: 'әділетсіздік' }, { text: 'helping others', textKz: 'көмектесу' }, { text: 'learning', textKz: 'оқу' }, { text: 'working', textKz: 'жұмыс' }], correct: 0, explanation: 'Discrimination is unfair.' },
            { id: 4, question: 'Human ___ are basic freedoms.', questionKz: 'Адам ___ - негізгі бостандықтар.', options: [{ text: 'rights', textKz: 'құқықтары' }, { text: 'names', textKz: 'есімдері' }, { text: 'cars', textKz: 'көліктері' }, { text: 'books', textKz: 'кітаптары' }], correct: 0, explanation: 'Rights protect people.' },
            { id: 5, question: 'What is "volunteering"?', questionKz: '"Волонтерлік" деген не?', options: [{ text: 'working for free', textKz: 'тегін көмектесу' }, { text: 'getting paid', textKz: 'жалақы алу' }, { text: 'sleeping', textKz: 'ұйықтау' }, { text: 'fighting', textKz: 'төбелесу' }], correct: 0, explanation: 'Volunteers help without pay.' }
        ]
    }
};

// Функция для получения квиза по ID темы
function getQuizByTopicId(topicId) {
    return QUIZZES[topicId] || null;
}

// Функция для получения вопроса по индексу
function getQuestion(quiz, index) {
    if (quiz && quiz.questions && index < quiz.questions.length) {
        return quiz.questions[index];
    }
    return null;
}

// Функция для получения количества вопросов в квизе
function getQuestionCount(quiz) {
    return quiz ? quiz.questions.length : 0;
}
