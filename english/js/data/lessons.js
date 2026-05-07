// ========================================
// ИНФОРМАЦИЯ ДЛЯ РАЗДЕЛА "ОҚУ" (ИЗУЧЕНИЕ)
// ========================================

const LESSON_CONTENT = {
    // 7-СЫНЫП
    'daily-routines': {
        title: 'Daily Routines',
        description: 'Күндалық істер мен уақыт туралы сөйлесу',
        content: `
            <h3>Daily Routines - Күндалық істер</h3>
            
            <h4>📌 Негізгі сөздер:</h4>
            <ul>
                <li><strong>wake up</strong> - оянамын</li>
                <li><strong>breakfast</strong> - таңғы ас</li>
                <li><strong>go to school</strong> - мектепке барамын</li>
                <li><strong>have lunch</strong> - түскі ас жеймін</li>
                <li><strong>do homework</strong> - үй тапсырмасын істеймін</li>
                <li><strong>go to bed</strong> - төрткөліктікке барамын</li>
                <li><strong>sleep</strong> - ұйықтаймын</li>
            </ul>
            
            <h4>💬 Сөйлеу мысалдары:</h4>
            <div class="lesson-example">
                <p><strong>"What time do you wake up?"</strong></p>
                <p>Сіз қажет болған кезде оянасыз ба?</p>
                <p><strong>Answer:</strong> "I wake up at 7 o'clock."</p>
                <p>Мен сағат 7-де оянамын.</p>
            </div>
            
            <div class="lesson-example">
                <p><strong>"I usually have breakfast at 8 AM."</strong></p>
                <p>Мен әдетте 8 ТА таңғы ас жеймін.</p>
            </div>
            
            <div class="lesson-example">
                <p><strong>"My school starts at 9 o'clock."</strong></p>
                <p>Менің мектеп сағат 9-та басталады.</p>
            </div>
            
            <h4>📚 Сағат айту:</h4>
            <ul>
                <li>7:00 - seven o'clock</li>
                <li>7:15 - seven fifteen / quarter past seven</li>
                <li>7:30 - seven thirty / half past seven</li>
                <li>7:45 - seven forty-five / quarter to eight</li>
            </ul>
        `
    },
    'school-life': {
        title: 'School Life',
        description: 'Мектеп жұмысы, сабақтар және оқушылар',
        content: `
            <h3>School Life - Мектеп өмірі</h3>
            
            <h4>📌 Мектеп предметтері:</h4>
            <ul>
                <li><strong>English</strong> - ағылшын тілі</li>
                <li><strong>Mathematics</strong> - математика</li>
                <li><strong>Physics</strong> - физика</li>
                <li><strong>Chemistry</strong> - химия</li>
                <li><strong>Biology</strong> - биология</li>
                <li><strong>History</strong> - тарих</li>
                <li><strong>Geography</strong> - география</li>
                <li><strong>Physical Education</strong> - дене тәрбиесі</li>
            </ul>
            
            <h4>💬 Мектептегі сөз тіркестері:</h4>
            <div class="lesson-example">
                <p><strong>"Which subject do you like?"</strong></p>
                <p>Қайсы пәнді ұнатасыз?</p>
                <p><strong>Answer:</strong> "I like English."</p>
                <p>Мен ағылшын тілін ұнатамын.</p>
            </div>
            
            <div class="lesson-example">
                <p><strong>"What time is your English class?"</strong></p>
                <p>Сіздің ағылшын сабағы қашта?</p>
                <p><strong>Answer:</strong> "At 10 o'clock."</p>
                <p>Сағат 10-та.</p>
            </div>
            
            <div class="lesson-example">
                <p><strong>"I have five lessons today."</strong></p>
                <p>Бүгін беске сабағым бар.</p>
            </div>
            
            <h4>🏫 Мектеп орындары:</h4>
            <ul>
                <li><strong>classroom</strong> - сынып</li>
                <li><strong>library</strong> - кітапхана</li>
                <li><strong>gym</strong> - спорт залы</li>
                <li><strong>canteen</strong> - ас ішу орны</li>
                <li><strong>playground</strong> - ойын алаңы</li>
            </ul>
        `
    },
    'environment': {
        title: 'Environment',
        description: 'Табиғат, ауа райы және сыртқы әрекеттер',
        content: `
            <h3>Environment - Табиғат</h3>
            
            <h4>🌤️ Ауа райы (Weather):</h4>
            <ul>
                <li><strong>sunny</strong> - күндіс</li>
                <li><strong>rainy</strong> - жаңбырлы</li>
                <li><strong>cloudy</strong> - бұлтты</li>
                <li><strong>snowy</strong> - қарлы</li>
                <li><strong>windy</strong> - желді</li>
                <li><strong>cold</strong> - салқын</li>
                <li><strong>hot</strong> - ыстық</li>
            </ul>
            
            <h4>💬 Ауа райы туралы сөйлесу:</h4>
            <div class="lesson-example">
                <p><strong>"What's the weather like today?"</strong></p>
                <p>Бүгін ауа райы қандай?</p>
                <p><strong>Answer:</strong> "It's sunny and warm."</p>
                <p>Күндіс және жылы.</p>
            </div>
            
            <h4>🌳 Табиғат сөздері:</h4>
            <ul>
                <li><strong>tree</strong> - ағаш</li>
                <li><strong>flower</strong> - гүл</li>
                <li><strong>grass</strong> - шөп</li>
                <li><strong>mountain</strong> - тау</li>
                <li><strong>river</strong> - өзен</li>
                <li><strong>forest</strong> - орман</li>
                <li><strong>lake</strong> - көл</li>
            </ul>
            
            <h4>🐾 Жануарлар:</h4>
            <ul>
                <li><strong>dog</strong> - ит</li>
                <li><strong>cat</strong> - мысық</li>
                <li><strong>bird</strong> - құс</li>
                <li><strong>fish</strong> - балық</li>
                <li><strong>butterfly</strong> - көбелек</li>
                <li><strong>bear</strong> - аю</li>
                <li><strong>wolf</strong> - қасқыр</li>
            </ul>
            
            <h4>4️⃣ Маусымдар (Seasons):</h4>
            <ul>
                <li><strong>Spring</strong> - Көктем (March, April, May)</li>
                <li><strong>Summer</strong> - Жаз (June, July, August)</li>
                <li><strong>Autumn</strong> - Күз (September, October, November)</li>
                <li><strong>Winter</strong> - Қыс (December, January, February)</li>
            </ul>
        `
    },
    'travelling': {
        title: 'Travelling',
        description: 'Сапарлау, орындар және көліктер',
        content: `
            <h3>Travelling - Сапарлау</h3>
            
            <h4>🚗 Көліктер:</h4>
            <ul>
                <li><strong>car</strong> - машина</li>
                <li><strong>bus</strong> - автобус</li>
                <li><strong>train</strong> - пойезд</li>
                <li><strong>plane</strong> - аэроплан</li>
                <li><strong>ship</strong> - кеме</li>
                <li><strong>bicycle</strong> - велосипед</li>
                <li><strong>taxi</strong> - такси</li>
            </ul>
            
            <h4>✈️ Сапарлау сөздері:</h4>
            <div class="lesson-example">
                <p><strong>"How do you travel?"</strong></p>
                <p>Сіз қалай сапарласыз?</p>
                <p><strong>Answer:</strong> "I travel by plane."</p>
                <p>Мен аэропланмен сапарлаймын.</p>
            </div>
            
            <h4>🏨 Орындар:</h4>
            <ul>
                <li><strong>hotel</strong> - қонақ үй</li>
                <li><strong>beach</strong> - пляж</li>
                <li><strong>museum</strong> - музей</li>
                <li><strong>restaurant</strong> - рестораны</li>
                <li><strong>city</strong> - қала</li>
                <li><strong>country</strong> - ел</li>
                <li><strong>airport</strong> - әуежай</li>
            </ul>
            
            <h4>💬 Сапарлау туралы:</h4>
            <div class="lesson-example">
                <p><strong>"I want to visit Paris."</strong></p>
                <p>Мен Парижді аттағы келгім келеді.</p>
            </div>
            
            <div class="lesson-example">
                <p><strong>"The flight is at 8 AM."</strong></p>
                <p>Ұшыс сағат 8-та.</p>
            </div>
        `
    },
    'technology': {
        title: 'Technology',
        description: 'Техника, компьютер және электроника',
        content: `
            <h3>Technology - Технология</h3>
            
            <h4>💻 Компьютер және интернет:</h4>
            <ul>
                <li><strong>computer</strong> - компьютер</li>
                <li><strong>laptop</strong> - ноутбук</li>
                <li><strong>phone</strong> - телефон</li>
                <li><strong>internet</strong> - интернет</li>
                <li><strong>email</strong> - электронды пошта</li>
                <li><strong>website</strong> - веб-сайт</li>
                <li><strong>app</strong> - қосымша</li>
            </ul>
            
            <h4>📱 Мобильные устройства:</h4>
            <ul>
                <li><strong>smartphone</strong> - смартфон</li>
                <li><strong>tablet</strong> - планшет</li>
                <li><strong>headphones</strong> - құлақ құлы</li>
                <li><strong>charger</strong> - зарядтағыш</li>
            </ul>
            
            <h4>💬 Технология туралы сөйлесу:</h4>
            <div class="lesson-example">
                <p><strong>"Do you use social media?"</strong></p>
                <p>Сіз әлеуметтік желілерді пайдаланасыз ба?</p>
                <p><strong>Answer:</strong> "Yes, I use Instagram."</p>
                <p>Иә, мен Instagram пайдаланамын.</p>
            </div>
            
            <div class="lesson-example">
                <p><strong>"My computer has good speed."</strong></p>
                <p>Менің компьютеріменің жақсы жылдамдығы бар.</p>
            </div>
        `
    },
    'health': {
        title: 'Health',
        description: 'Денсаулық, дәрістер және спорт',
        content: `
            <h3>Health - Денсаулық</h3>
            
            <h4>💪 Дене бөліктері:</h4>
            <ul>
                <li><strong>head</strong> - бас</li>
                <li><strong>arm</strong> - қол</li>
                <li><strong>leg</strong> - аяқ</li>
                <li><strong>hand</strong> - қол</li>
                <li><strong>foot</strong> - табан</li>
                <li><strong>eye</strong> - көз</li>
                <li><strong>ear</strong> - құлақ</li>
                <li><strong>nose</strong> - мұрын</li>
                <li><strong>mouth</strong> - ауыз</li>
                <li><strong>tooth</strong> - тіс</li>
            </ul>
            
            <h4>🏥 Денсаулық сөздері:</h4>
            <ul>
                <li><strong>doctor</strong> - дәрігер</li>
                <li><strong>hospital</strong> - ауруханасы</li>
                <li><strong>medicine</strong> - дәрі</li>
                <li><strong>sick</strong> - ауру</li>
                <li><strong>healthy</strong> - сау</li>
                <li><strong>pain</strong> - ауырсыну</li>
                <li><strong>fever</strong> - температура</li>
            </ul>
            
            <h4>⚽ Спорт:</h4>
            <ul>
                <li><strong>football</strong> - футбол</li>
                <li><strong>basketball</strong> - баскетбол</li>
                <li><strong>volleyball</strong> - волейбол</li>
                <li><strong>tennis</strong> - теннис</li>
                <li><strong>swimming</strong> - сүну</li>
                <li><strong>running</strong> - жүгіру</li>
                <li><strong>gym</strong> - гимнастика</li>
            </ul>
            
            <h4>💬 Денсаулық туралы:</h4>
            <div class="lesson-example">
                <p><strong>"I play football every day."</strong></p>
                <p>Мен күнде футбол ойнаймын.</p>
            </div>
            
            <div class="lesson-example">
                <p><strong>"I have a headache."</strong></p>
                <p>Менің басым ауырады.</p>
            </div>
            
            <h4>🥗 Сау өмір:</h4>
            <ul>
                <li>Жәй және өндік жеңіл жеуді табысты</li>
                <li>Орташе спорттау</li>
                <li>Жеткіліктісінше ұйықтау (7-9 сағат)</li>
                <li>Сұлық суын ішу</li>
            </ul>
        `
    },
    // 8-СЫНЫП
    'food-drinks': {
        title: 'Food & Drinks',
        description: 'Ас-түлік, сусындар және ресторан әдебі',
        content: `
            <h3>Food & Drinks - Тамақ және сусындар</h3>
            
            <h4>🍎 Жемістер мен көкөністер (Fruits & Vegetables):</h4>
            <ul>
                <li><strong>apple</strong> - алма</li>
                <li><strong>banana</strong> - банан</li>
                <li><strong>orange</strong> - апельсин</li>
                <li><strong>tomato</strong> - қызанақ</li>
                <li><strong>potato</strong> - картоп</li>
                <li><strong>carrot</strong> - сәбіз</li>
            </ul>
            
            <h4>🥤 Сусындар (Drinks):</h4>
            <ul>
                <li><strong>water</strong> - су</li>
                <li><strong>tea</strong> - шәй</li>
                <li><strong>coffee</strong> - кофе</li>
                <li><strong>juice</strong> - шырын</li>
                <li><strong>milk</strong> - сүт</li>
            </ul>
            
            <h4>💬 Ресторанда сөйлесу:</h4>
            <div class="lesson-example">
                <p><strong>"Can I have the menu, please?"</strong></p>
                <p>Мәзірді бере аласыз ба?</p>
            </div>
            <div class="lesson-example">
                <p><strong>"I would like to order a pizza."</strong></p>
                <p>Мен пиццаға тапсырыс бергім келеді.</p>
            </div>
        `
    },
    'shopping': {
        title: 'Shopping',
        description: 'Сатылым, бағалар және көндіктер',
        content: `
            <h3>Shopping - Сауда жасау</h3>
            
            <h4>👗 Киім-кешек (Clothes):</h4>
            <ul>
                <li><strong>T-shirt</strong> - футболка</li>
                <li><strong>jeans</strong> - джинсы</li>
                <li><strong>dress</strong> - көйлек</li>
                <li><strong>shoes</strong> - аяқ киім</li>
                <li><strong>jacket</strong> - куртка</li>
            </ul>
            
            <h4>💰 Баға және ақша:</h4>
            <ul>
                <li><strong>price</strong> - баға</li>
                <li><strong>money</strong> - ақша</li>
                <li><strong>cash</strong> - қолма-қол ақша</li>
                <li><strong>credit card</strong> - несие картасы</li>
                <li><strong>cheap</strong> - арзан</li>
                <li><strong>expensive</strong> - қымбат</li>
            </ul>
            
            <h4>💬 Дүкенде:</h4>
            <div class="lesson-example">
                <p><strong>"How much does it cost?"</strong></p>
                <p>Бұл қанша тұрады?</p>
            </div>
            <div class="lesson-example">
                <p><strong>"Do you have this in a smaller size?"</strong></p>
                <p>Мұның кішірек өлшемі бар ма?</p>
            </div>
        `
    },
    'family': {
        title: 'Family',
        description: 'Отбасы, ағайын-сіндер және ата-баба',
        content: `
            <h3>Family - Отбасы</h3>
            
            <h4>👨‍👩‍👧‍👦 Отбасы мүшелері (Family Members):</h4>
            <ul>
                <li><strong>parents</strong> - ата-ана</li>
                <li><strong>father / dad</strong> - әке</li>
                <li><strong>mother / mom</strong> - ана</li>
                <li><strong>brother</strong> - аға / іні</li>
                <li><strong>sister</strong> - әпке / қарындас / сіңлі</li>
                <li><strong>grandparents</strong> - ата-әже</li>
            </ul>
            
            <h4>💬 Отбасы туралы айту:</h4>
            <div class="lesson-example">
                <p><strong>"I have a big family."</strong></p>
                <p>Менің үлкен отбасым бар.</p>
            </div>
            <div class="lesson-example">
                <p><strong>"How many brothers and sisters do you have?"</strong></p>
                <p>Сенің қанша аға-інің немесе әпке-қарындасың бар?</p>
            </div>
        `
    },
    'hobbies': {
        title: 'Hobbies',
        description: 'Ынамды іс-әрекеттер және сүргіндік',
        content: `
            <h3>Hobbies - Хобби</h3>
            
            <h4>🎨 Сүйікті істер:</h4>
            <ul>
                <li><strong>reading</strong> - оқу</li>
                <li><strong>drawing</strong> - сурет салу</li>
                <li><strong>dancing</strong> - билеу</li>
                <li><strong>singing</strong> - ән айту</li>
                <li><strong>playing games</strong> - ойын ойнау</li>
                <li><strong>cooking</strong> - тамақ пісіру</li>
            </ul>
            
            <h4>💬 Қызығушылықтар туралы:</h4>
            <div class="lesson-example">
                <p><strong>"What is your hobby?"</strong></p>
                <p>Сенің хоббиің қандай?</p>
            </div>
            <div class="lesson-example">
                <p><strong>"In my free time, I like to draw."</strong></p>
                <p>Бос уақытымда мен сурет салғанды ұнатамын.</p>
            </div>
        `
    },
    'culture': {
        title: 'Culture',
        description: 'Қазақ және англо-сақсон мәдениеті',
        content: `
            <h3>Culture - Мәдениет</h3>
            
            <h4>🎭 Өнер және дәстүр:</h4>
            <ul>
                <li><strong>tradition</strong> - дәстүр</li>
                <li><strong>holiday</strong> - мереке</li>
                <li><strong>music</strong> - музыка</li>
                <li><strong>art</strong> - өнер</li>
                <li><strong>cinema</strong> - кино</li>
                <li><strong>theatre</strong> - театр</li>
            </ul>
            
            <h4>💬 Мәдениет туралы:</h4>
            <div class="lesson-example">
                <p><strong>"What is your favorite holiday?"</strong></p>
                <p>Сенің сүйікті мерекең қандай?</p>
            </div>
            <div class="lesson-example">
                <p><strong>"I like learning about different cultures."</strong></p>
                <p>Маған әртүрлі мәдениеттер туралы білген ұнайды.</p>
            </div>
        `
    },
    'emotions': {
        title: 'Emotions',
        description: 'Сезімдер мен ынамды орын',
        content: `
            <h3>Emotions - Сезімдер</h3>
            
            <h4>😊 Көңіл-күй (Mood):</h4>
            <ul>
                <li><strong>happy</strong> - бақытты / қуанышты</li>
                <li><strong>sad</strong> - мұңды</li>
                <li><strong>angry</strong> - ашулы</li>
                <li><strong>tired</strong> - шаршаған</li>
                <li><strong>excited</strong> - толқыған</li>
                <li><strong>surprised</strong> - таң қалған</li>
            </ul>
            
            <h4>💬 Сезімдерді білдіру:</h4>
            <div class="lesson-example">
                <p><strong>"How do you feel?"</strong></p>
                <p>Өзіңді қалай сезінесің?</p>
            </div>
            <div class="lesson-example">
                <p><strong>"I am very happy today!"</strong></p>
                <p>Мен бүгін өте қуаныштымын!</p>
            </div>
        `
    },
    // 9-СЫНЫП
    'work-career': {
        title: 'Work & Career',
        description: 'Жұмыс іс-әрекеттері және мансаб',
        content: `
            <h3>Work & Career - Жұмыс және мансап</h3>
            
            <h4>💼 Мамандықтар (Professions):</h4>
            <ul>
                <li><strong>doctor</strong> - дәрігер</li>
                <li><strong>teacher</strong> - мұғалім</li>
                <li><strong>engineer</strong> - инженер</li>
                <li><strong>lawyer</strong> - заңгер</li>
                <li><strong>programmer</strong> - бағдарламашы</li>
                <li><strong>artist</strong> - суретші</li>
            </ul>
            
            <h4>💬 Жұмыс туралы сөйлесу:</h4>
            <div class="lesson-example">
                <p><strong>"What do you want to be in the future?"</strong></p>
                <p>Болашақта кім болғың келеді?</p>
            </div>
            <div class="lesson-example">
                <p><strong>"I want to be a successful engineer."</strong></p>
                <p>Мен табысты инженер болғым келеді.</p>
            </div>
        `
    },
    'education': {
        title: 'Education',
        description: 'Оқу, университет және білімінділіктер',
        content: `
            <h3>Education - Білім алу</h3>
            
            <h4>🎓 Оқу орындары:</h4>
            <ul>
                <li><strong>university</strong> - университет</li>
                <li><strong>college</strong> - колледж</li>
                <li><strong>library</strong> - кітапхана</li>
                <li><strong>course</strong> - курс</li>
                <li><strong>degree</strong> - дәреже / диплом</li>
                <li><strong>scholarship</strong> - шәкіртақы</li>
            </ul>
            
            <h4>💬 Білім туралы:</h4>
            <div class="lesson-example">
                <p><strong>"Education is the key to success."</strong></p>
                <p>Білім - табыстың кілті.</p>
            </div>
            <div class="lesson-example">
                <p><strong>"I am preparing for university exams."</strong></p>
                <p>Мен университетке түсу емтихандарына дайындалып жатырмын.</p>
            </div>
        `
    },
    'environment-advanced': {
        title: 'Environmental Issues',
        description: 'Экология және климат өзгеруі',
        content: `
            <h3>Environmental Issues - Экологиялық мәселелер</h3>
            
            <h4>♻️ Қоршаған ортаны қорғау:</h4>
            <ul>
                <li><strong>pollution</strong> - ластану</li>
                <li><strong>global warming</strong> - жаһандық жылыну</li>
                <li><strong>recycling</strong> - қайта өңдеу</li>
                <li><strong>nature</strong> - табиғат</li>
                <li><strong>climate change</strong> - климаттың өзгеруі</li>
                <li><strong>protection</strong> - қорғау</li>
            </ul>
            
            <h4>💬 Экология туралы:</h4>
            <div class="lesson-example">
                <p><strong>"We must protect our planet."</strong></p>
                <p>Біз планетамызды қорғауымыз керек.</p>
            </div>
            <div class="lesson-example">
                <p><strong>"Air pollution is a big problem in cities."</strong></p>
                <p>Ауаның ластануы - қалалардағы үлкен мәселе.</p>
            </div>
        `
    },
    'media': {
        title: 'Media & Communication',
        description: 'Ресімі ұстану және ынамды сөйтпей',
        content: `
            <h3>Media & Communication - Медиа және байланыс</h3>
            
            <h4>📺 Ақпарат құралдары:</h4>
            <ul>
                <li><strong>news</strong> - жаңалықтар</li>
                <li><strong>newspaper</strong> - газет</li>
                <li><strong>television</strong> - телевизия</li>
                <li><strong>social media</strong> - әлеуметтік желілер</li>
                <li><strong>advertising</strong> - жарнама</li>
                <li><strong>internet</strong> - интернет</li>
            </ul>
            
            <h4>💬 Байланыс туралы:</h4>
            <div class="lesson-example">
                <p><strong>"I read the news every morning."</strong></p>
                <p>Мен күн сайын таңертең жаңалықтарды оқимын.</p>
            </div>
            <div class="lesson-example">
                <p><strong>"Social media helps us stay connected."</strong></p>
                <p>Әлеуметтік желілер бізге байланыста болуға көмектеседі.</p>
            </div>
        `
    },
    'science': {
        title: 'Science',
        description: 'Ғылым, математика және зерттеу',
        content: `
            <h3>Science - Ғылым</h3>
            
            <h4>🔬 Зерттеу және технология:</h4>
            <ul>
                <li><strong>discovery</strong> - ашылу</li>
                <li><strong>experiment</strong> - тәжірибе / эксперимент</li>
                <li><strong>research</strong> - зерттеу</li>
                <li><strong>space</strong> - ғарыш</li>
                <li><strong>technology</strong> - технология</li>
                <li><strong>invention</strong> - өнертабыс</li>
            </ul>
            
            <h4>💬 Ғылым туралы:</h4>
            <div class="lesson-example">
                <p><strong>"Scientists are working on a new vaccine."</strong></p>
                <p>Ғалымдар жаңа вакцинамен жұмыс істеп жатыр.</p>
            </div>
            <div class="lesson-example">
                <p><strong>"Space exploration is very interesting."</strong></p>
                <p>Ғарышты зерттеу өте қызықты.</p>
            </div>
        `
    },
    'social-issues': {
        title: 'Social Issues',
        description: 'Қоғамдық мәселер және құқық',
        content: `
            <h3>Social Issues - Әлеуметтік мәселелер</h3>
            
            <h4>🤝 Қоғам және құқық:</h4>
            <ul>
                <li><strong>human rights</strong> - адам құқықтары</li>
                <li><strong>poverty</strong> - кедейлік</li>
                <li><strong>education</strong> - білім алу</li>
                <li><strong>justice</strong> - әділдік</li>
                <li><strong>peace</strong> - бейбітшілік</li>
                <li><strong>community</strong> - қоғамдастық</li>
            </ul>
            
            <h4>💬 Қоғамдық мәселелер туралы:</h4>
            <div class="lesson-example">
                <p><strong>"We must fight for justice."</strong></p>
                <p>Біз әділдік үшін күресуіміз керек.</p>
            </div>
            <div class="lesson-example">
                <p><strong>"Helping others is important for the community."</strong></p>
                <p>Басқаларға көмектесу қоғамдастық үшін маңызды.</p>
            </div>
        `
    }
};

// Функция для получения контента
function getLessonContent(topicId) {
    return LESSON_CONTENT[topicId] || null;
}
