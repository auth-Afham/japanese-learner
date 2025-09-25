// ==============================================================================
// YOUR PHRASE DATABASE
// This is the ONLY file you need to edit to add, remove, or change phrases.
//
// HOW TO ADD A NEW PHRASE:
// 1. Find the correct category list (e.g., "Introduction (Statements)").
// 2. Add a new line inside the square brackets `[]`.
// 3. The line must be in this exact format:
//    { jp: '日本語', romaji: 'Nihongo', en: 'English' },
//    (Don't forget the comma at the end if it's not the last one in the list!)
//
// HOW TO ADD A NEW CATEGORY:
// 1. Add a new line inside the main `const phrases = { ... };` section.
// 2. The line must be in this exact format:
//    "New Category Name": [
//        { jp: 'First phrase', romaji: '...', en: '...' },
//        { jp: 'Second phrase', romaji: '...', en: '...' },
//    ],
// ==============================================================================

const phrases = {
    "Introduction (Statements)": [
        { jp: 'はじめまして。', romaji: 'Hajimemashite.', en: 'Nice to meet you.' },
        { jp: '私は物理学者ではなく、思索をもって世界の真理を探る者。', romaji: 'Watashi wa butsurigakusha dewa naku, shisaku o motte sekai no shinri o saguru mono.', en: 'I am not a physicist, but one who seeks the truth of the world through thought.' },
        { jp: '思想家です。', romaji: 'Shisōka desu.', en: 'I\'m a thinker.' },
        { jp: '日本語を勉強しています。', romaji: 'Nihongo o benkyou shiteimasu.', en: 'I\'m studying Japanese.' },
        { jp: '趣味は読書とアートです。', romaji: 'Shumi wa dokusho to āto desu.', en: 'My hobbies are reading and art.' },
        { jp: '科学と哲学に興味があります。', romaji: 'Kagaku to tetsugaku ni kyōmi ga arimasu.', en: 'I\'m interested in science and philosophy.' },
        { jp: '量子力学が好きで、新しい考えを探しています。', romaji: 'Ryōshirikigaku ga suki de, atarashii kangae o sagashite imasu.', en: 'I like quantum mechanics, and am searching for new ideas.' },
        { jp: '将来、日本で働きたいです。', romaji: 'Shōrai, Nihon de hatarakitai desu.', en: 'I want to work in Japan in the future.' },
    ],
    "Introduction (Questions)": [
        { jp: 'お名前を教えていただけますか。', romaji: 'O-namae o oshiete itadakemasu ka.', en: 'Could you please tell me your name?' },
        { jp: 'どちらからいらっしゃいましたか。', romaji: 'Dochira kara irasshaimashita ka.', en: 'Where did you come from? (Very polite)' },
        { jp: 'もしよろしければ、少しあなたのことを教えてください。', romaji: 'Moshi yoroshikereba, sukoshi anata no koto o oshiete kudasai.', en: 'If it\'s okay with you, please tell me a little about yourself.' },
        { jp: 'あなたについて、もう少し知りたいです。', romaji: 'Anata ni tsuite, mō sukoshi shiritai desu.', en: 'I would like to know a little more about you.' },
        { jp: 'お休みの日は、何をしていますか。', romaji: 'O-yasumi no hi wa, nani o shite imasu ka.', en: 'What do you do on your days off?' },
    ],
    "Confirmation & Follow-up": [
        { jp: 'それは面白いですね。', romaji: 'Sore wa omoshiroi desu ne.', en: 'That\'s interesting, isn\'t it?' },
        { jp: 'なるほど。', romaji: 'Naruhodo.', en: 'I see / That makes sense.' },
    ],
    "Distractions": [
        { jp: 'ほら、あそこを見てください。', romaji: 'Hora, asoko o mite kudasai.', en: 'Hey, please look over there.' },
        { jp: 'あそこに何かありませんか。', romaji: 'Asoko ni nani ka arimasen ka.', en: 'Isn\'t there something over there?' },
        { jp: '猫か何かのようですね。', romaji: 'Neko ka nanika no yō desu ne.', en: 'It seems like it was a cat or something.' },
        { jp: '今の音、何だったんだろう。', romaji: 'Ima no oto, nan datta n darō.', en: 'I wonder what that sound just now was.' },
    ],
    "Compliment Phrases": [
        { jp: 'あなたの考え方は本当に素晴らしいです。', romaji: 'Anata no kangaekata wa hontō ni subarashii desu.', en: 'Your way of thinking is truly wonderful.' },
    ],
    "Motivation Phrases": [
        { jp: '諦めなければ、道は必ず開けます。', romaji: 'Akiramereba, michi wa kanarazu hirakemasu.', en: 'If you don\'t give up, a path will surely open.' },
    ],
    "Emotions Phrases": [
        { jp: 'なぜか、涙が出ないほど悲しいです。', romaji: 'Nazeka, namida ga denai hodo kanashii desu.', en: 'For some reason, I feel a sadness too deep for tears.' },
    ],
    "Wishful Phrases": [
        { jp: 'いつか、君と話せる日が来るといいな。', romaji: 'Itsuka, kimi to hanaseru hi ga kuru to ii na.', en: 'I hope the day comes when I can talk with you.' },
    ],
    "Work (Frustration)": [
        { jp: 'このバグ、一体どこから来ているんだ。', romaji: 'Kono bagu, ittai doko kara kiteirun da.', en: 'Where on earth is this bug coming from?' },
    ],
    "Work (Breaks)": [
        { jp: '少し休憩して、コーヒーでも飲みませんか。', romaji: 'Sukoshi kyūkei shite, kōhī demo nomimasen ka.', en: 'Shall we take a short break and get some coffee or something?' },
    ],
    "Interests (Anime/Manga)": [
        { jp: '最近、何か面白いアニメを見ましたか。', romaji: 'Saikin, nani ka omoshiroi anime o mimashita ka.', en: 'Have you seen any interesting anime recently?' },
    ],
    "Interests (Quantum Mechanics)": [
        { jp: '観測問題について、どう思いますか。', romaji: 'Kansoku mondai ni tsuite, dō omoimasu ka.', en: 'What are your thoughts on the measurement problem?' },
    ],
};
