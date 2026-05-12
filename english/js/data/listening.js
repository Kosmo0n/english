const LISTENING_DATA = [
    {
        id: 'at-the-cafe',
        title: 'At the Cafe / Кафеде',
        level: 'Elementary',
        icon: '☕',
        dialogue: [
            { speaker: 'Waiter', text: 'Hello! What would you like to order?', textKz: 'Сәлеметсіз бе! Не тапсырыс бергіңіз келеді?' },
            { speaker: 'Customer', text: 'I would like a cup of coffee and a chocolate cake, please.', textKz: 'Маған бір кесе кофе мен шоколадты торт беріңізші.' },
            { speaker: 'Waiter', text: 'Anything else?', textKz: 'Тағы бірдеңе ме?' },
            { speaker: 'Customer', text: 'No, thank you. How much is it?', textKz: 'Жоқ, рақмет. Бұл қанша тұрады?' },
            { speaker: 'Waiter', text: 'That will be 15 dollars.', textKz: 'Барлығы 15 доллар болады.' }
        ],
        tasks: [
            {
                question: 'What did the customer order?',
                questionKz: 'Клиент не тапсырыс берді?',
                options: ['Tea and cake', 'Coffee and cake', 'Juice and sandwich'],
                correct: 1
            },
            {
                question: 'How much is the total?',
                questionKz: 'Жалпы сомасы қанша?',
                options: ['10 dollars', '15 dollars', '20 dollars'],
                correct: 1
            }
        ]
    },
    {
        id: 'meeting-a-friend',
        title: 'Meeting a Friend / Доспен кездесу',
        level: 'Elementary',
        icon: '👋',
        dialogue: [
            { speaker: 'Arman', text: 'Hi, Sarah! How are you?', textKz: 'Сәлем, Сара! Қалың қалай?' },
            { speaker: 'Sarah', text: 'Hi, Arman! I am fine, thank you. And you?', textKz: 'Сәлем, Арман! Жақсымын, рақмет. Өзің қалайсың?' },
            { speaker: 'Arman', text: 'I am good. Are you busy today?', textKz: 'Жақсымын. Бүгін боссыз ба?' },
            { speaker: 'Sarah', text: 'No, I have some free time. Let\'s go to the cinema!', textKz: 'Жоқ, бос уақытым бар. Киноға барайық!' },
            { speaker: 'Arman', text: 'Great idea! See you at 6 PM.', textKz: 'Тамаша идея! Сағат 6-да кездескенше.' }
        ],
        tasks: [
            {
                question: 'Where do they want to go?',
                questionKz: 'Олар қайда барғысы келеді?',
                options: ['To the park', 'To the cinema', 'To school'],
                correct: 1
            },
            {
                question: 'What time will they meet?',
                questionKz: 'Олар сағат нешеде кездеседі?',
                options: ['At 5 PM', 'At 6 PM', 'At 7 PM'],
                correct: 1
            }
        ]
    }
];
