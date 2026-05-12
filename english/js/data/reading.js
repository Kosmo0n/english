const READING_DATA = [
    {
        id: 'kazakhstan-nature',
        title: 'The Nature of Kazakhstan / Қазақстан табиғаты',
        level: 'Intermediate',
        icon: '🏞️',
        content: `
            Kazakhstan is a very large country with diverse nature. 
            In the south, you can see high mountains like the Trans-Ili Alatau. 
            In the west, there is the Caspian Sea, the largest inland body of water in the world. 
            The central part of the country is covered by the Great Steppe. 
            Kazakhstan has many beautiful lakes, such as Lake Balkhash and Lake Borovoe. 
            The nature of Kazakhstan is unique and attracts many tourists.
        `,
        contentKz: `
            Қазақстан - табиғаты сан алуан, өте үлкен ел.
            Оңтүстігінде Іле Алатауы сияқты биік тауларды көруге болады.
            Батысында әлемдегі ең үлкен ішкі су айдыны - Каспий теңізі орналасқан.
            Елдің орталық бөлігін Ұлы дала алып жатыр.
            Қазақстанда Балқаш және Бурабай сияқты көптеген әдемі көлдер бар.
            Қазақстанның табиғаты бірегей және көптеген туристерді қызықтырады.
        `,
        tasks: [
            {
                question: 'Which sea is located in the west of Kazakhstan?',
                questionKz: 'Қазақстанның батысында қай теңіз орналасқан?',
                options: ['Aral Sea', 'Caspian Sea', 'Black Sea'],
                correct: 1
            },
            {
                question: 'What covers the central part of the country?',
                questionKz: 'Елдің орталық бөлігін не алып жатыр?',
                options: ['Forests', 'Deserts', 'The Great Steppe'],
                correct: 2
            }
        ]
    },
    {
        id: 'future-technology',
        title: 'Future Technology / Болашақ технологиялары',
        level: 'Upper-Intermediate',
        icon: '🤖',
        content: `
            Technology is changing our lives very fast. In the future, we might have robots 
            doing all the housework. Electric cars will be more common, and maybe we will 
            even have flying cars! Artificial Intelligence (AI) is already helping doctors 
            to find diseases and helping students to learn. However, we must be careful 
            with technology and use it for good purposes.
        `,
        contentKz: `
            Технология біздің өмірімізді өте жылдам өзгертіп жатыр. Болашақта барлық үй 
            жұмысын жасайтын роботтар болуы мүмкін. Электрлік көліктер көбейеді, тіпті 
            ұшатын көліктер де пайда болуы мүмкін! Жасанды интеллект (AI) қазірдің өзінде 
            дәрігерлерге ауруларды анықтауға, ал студенттерге оқуға көмектесуде. Дегенмен, 
            біз технологиямен абай болуымыз керек және оны игі мақсаттарда қолдануымыз қажет.
        `,
        tasks: [
            {
                question: 'What might do all the housework in the future?',
                questionKz: 'Болашақта барлық үй жұмысын не істеуі мүмкін?',
                options: ['Humans', 'Robots', 'Computers'],
                correct: 1
            },
            {
                question: 'How is AI already helping today?',
                questionKz: 'Жасанды интеллект бүгінде қалай көмектесіп жатыр?',
                options: ['Cooking food', 'Helping doctors and students', 'Driving buses'],
                correct: 1
            }
        ]
    }
];
