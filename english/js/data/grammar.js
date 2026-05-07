// ========================================
// ГРАММАТИКА ДЕРЕКТЕРІ
// ========================================

const GRAMMAR_TOPICS = [
    {
        id: 'present-simple',
        title: 'Present Simple',
        shortDesc: 'Осы уақыт - қарапайым',
        content: `
            <h3>Present Simple нәрсесі?</h3>
            <p>Present Simple ағылшындегі ең қарапайым ағымдық уақыты. Ол:
            <ul>
                <li>Тұрақты әрекеттер</li>
                <li>Сөйтпеген дағдылар</li>
                <li>Жалпы ақиқаттар</li>
                <li>Қайталанатын құбылыстар</li>
            </ul>
            </p>
            
            <h4>Құру:</h4>
            <ul>
                <li><strong>Оң:</strong> I/You/We/They + verb | He/She/It + verb+s</li>
                <li><strong>Теріс:</strong> do/does + not + verb</li>
                <li><strong>Сұрау:</strong> Do/Does + subject + verb?</li>
            </ul>
            
            <div class="grammar-example">
                <div class="grammar-example-eng">I play football every day.</div>
                <div class="grammar-example-kz">Мен күнде футбол ойнаймын.</div>
            </div>
            
            <div class="grammar-example">
                <div class="grammar-example-eng">She doesn't like coffee.</div>
                <div class="grammar-example-kz">Ол қоршағы ұнамайды.</div>
            </div>
            
            <div class="grammar-example">
                <div class="grammar-example-eng">Do you speak English?</div>
                <div class="grammar-example-kz">Сіз ағылшын тілін айтасыз ба?</div>
            </div>
        `
    },
    {
        id: 'present-continuous',
        title: 'Present Continuous',
        shortDesc: 'Осы уақыт - ағымдық',
        content: `
            <h3>Present Continuous нәрсесі?</h3>
            <p>Present Continuous осы моментте орындалып жатқан әрекеттерді көрсетеді:</p>
            
            <h4>Құру:</h4>
            <ul>
                <li><strong>Оң:</strong> to be (am/is/are) + verb+ing</li>
                <li><strong>Теріс:</strong> to be + not + verb+ing</li>
                <li><strong>Сұрау:</strong> to be + subject + verb+ing?</li>
            </ul>
            
            <div class="grammar-example">
                <div class="grammar-example-eng">I am reading a book now.</div>
                <div class="grammar-example-kz">Мен қазір кітап оқып жатырмын.</div>
            </div>
            
            <div class="grammar-example">
                <div class="grammar-example-eng">She is not watching TV.</div>
                <div class="grammar-example-kz">Ол теледидарды қарамайды.</div>
            </div>
            
            <div class="grammar-example">
                <div class="grammar-example-eng">Are you playing football?</div>
                <div class="grammar-example-kz">Сіз футбол ойнап жатырсыз ба?</div>
            </div>
        `
    },
    {
        id: 'past-simple',
        title: 'Past Simple',
        shortDesc: 'Өткен уақыт - қарапайым',
        content: `
            <h3>Past Simple нәрсесі?</h3>
            <p>Past Simple өткен уақытта болған аяқталған әрекеттерді көрсетеді:</p>
            
            <h4>Құру:</h4>
            <ul>
                <li><strong>Оң:</strong> subject + verb (ed) / irregular forms</li>
                <li><strong>Теріс:</strong> did + not + verb</li>
                <li><strong>Сұрау:</strong> Did + subject + verb?</li>
            </ul>
            
            <p><strong>Тұрақты сөздер:</strong> play → played, work → worked</p>
            <p><strong>Тұрақты емес сөздер:</strong> go → went, eat → ate, see → saw</p>
            
            <div class="grammar-example">
                <div class="grammar-example-eng">I went to school yesterday.</div>
                <div class="grammar-example-kz">Мен кеше мектепке барды.</div>
            </div>
            
            <div class="grammar-example">
                <div class="grammar-example-eng">She didn't like the movie.</div>
                <div class="grammar-example-kz">Ол фильмді ұнамады.</div>
            </div>
            
            <div class="grammar-example">
                <div class="grammar-example-eng">Did you see the game?</div>
                <div class="grammar-example-kz">Сіз ойынды көрдіңіз бе?</div>
            </div>
        `
    },
    {
        id: 'future-forms',
        title: 'Future Forms',
        shortDesc: 'Болашақ уақыт - түрлері',
        content: `
            <h3>Болашақ уақыттың түрлері</h3>
            
            <h4>1. Will (болашақ - жалпы)</h4>
            <p><strong>Құру:</strong> will + verb (ағымсыз қалыпта)</p>
            <div class="grammar-example">
                <div class="grammar-example-eng">I will help you tomorrow.</div>
                <div class="grammar-example-kz">Мен сізге ертең көмектесемін.</div>
            </div>
            
            <h4>2. Going to (болашақ - жоспарланған)</h4>
            <p><strong>Құру:</strong> am/is/are + going to + verb</p>
            <div class="grammar-example">
                <div class="grammar-example-eng">She is going to study medicine.</div>
                <div class="grammar-example-kz">Ол медицина оқуға барады.</div>
            </div>
            
            <h4>3. Present Continuous (болашақ - және жүргіжаткан)</h4>
            <div class="grammar-example">
                <div class="grammar-example-eng">We are meeting tomorrow at 5.</div>
                <div class="grammar-example-kz">Біз ертең сағат 5-те кезделеміз.</div>
            </div>
        `
    },
    {
        id: 'comparatives',
        title: 'Comparatives & Superlatives',
        shortDesc: 'Салыстыру сөздері',
        content: `
            <h3>Салыстыру сөздері</h3>
            
            <h4>Салыстыру (Comparative)</h4>
            <ul>
                <li><strong>Қысқа сөздер (-er):</strong> tall → taller, fast → faster</li>
                <li><strong>Ұзын сөздер (more):</strong> beautiful → more beautiful</li>
                <li><strong>Теңеу:</strong> as...as</li>
            </ul>
            
            <div class="grammar-example">
                <div class="grammar-example-eng">A horse is faster than a turtle.</div>
                <div class="grammar-example-kz">Жылқы тасбақадан тез.</div>
            </div>
            
            <h4>Құрылымдағы ең көп (Superlative)</h4>
            <ul>
                <li><strong>Қысқа сөздер (-est):</strong> tall → tallest, fast → fastest</li>
                <li><strong>Ұзын сөздер (most):</strong> beautiful → most beautiful</li>
            </ul>
            
            <div class="grammar-example">
                <div class="grammar-example-eng">She is the smartest student in the class.</div>
                <div class="grammar-example-kz">Ол сыныптағы ең ақылды оқушы.</div>
            </div>
        `
    },
    {
        id: 'modal-verbs',
        title: 'Modal Verbs',
        shortDesc: 'Модальдық сөздер',
        content: `
            <h3>Модальдық сөздер</h3>
            
            <h4>Can (ала/екі/бола аласың)</h4>
            <div class="grammar-example">
                <div class="grammar-example-eng">I can speak English.</div>
                <div class="grammar-example-kz">Мен ағылшын айтала аламын.</div>
            </div>
            
            <h4>Must (тиісті/міндетті)</h4>
            <div class="grammar-example">
                <div class="grammar-example-eng">You must study hard.</div>
                <div class="grammar-example-kz">Сіз қатты оқуға тиіс.</div>
            </div>
            
            <h4>Should (керек/ұсынамын)</h4>
            <div class="grammar-example">
                <div class="grammar-example-eng">You should eat healthy food.</div>
                <div class="grammar-example-kz">Сіз сау тамақ жеуге тиіс.</div>
            </div>
            
            <h4>May (рұқсат/мүмкін)</h4>
            <div class="grammar-example">
                <div class="grammar-example-eng">May I help you?</div>
                <div class="grammar-example-kz">Мен сізге көмектесе аламын ба?</div>
            </div>
        `
    }
];

// Функция для получения грамматики по ID
function getGrammarById(id) {
    return GRAMMAR_TOPICS.find(g => g.id === id);
}
