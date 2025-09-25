// ==============================================================================
// YOUR PHRASE DATABASE (Version 3.0 - Fully Reorganized)
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
    // --- INTRODUCTION ---
    "Introduction (Statements)": [
        { jp: 'はじめまして。', romaji: 'Hajimemashite.', en: 'Nice to meet you.' },
        { jp: '私の名前はアフハムです。', romaji: 'Watashi no namae wa Afuhamu desu.', en: 'My name is Afham.' },
        { jp: 'アフハムと呼んでください。', romaji: 'Afuhamu to yonde kudasai.', en: 'Please call me Afham.' },
        { jp: 'マレーシアから来ました。', romaji: 'Mareeshia kara kimashita.', en: 'I\'m from Malaysia.' },
        { jp: '思想家です。', romaji: 'Shisōka desu.', en: 'I\'m a thinker.' },
        { jp: '私は物理学者ではなく、思索をもって世界の真理を探る者。', romaji: 'Watashi wa butsurigakusha dewa naku, shisaku o motte sekai no shinri o saguru mono.', en: 'I am not a physicist, but one who seeks the truth of the world through thought.' },
        { jp: '私は「彼女」を探している旅人です。', romaji: 'Watashi wa “anojo” o sagashiteiru tabibito desu.', en: 'I am a traveler searching for “her.”' },
        { jp: '日本語を勉強しています。', romaji: 'Nihongo o benkyou shiteimasu.', en: 'I\'m studying Japanese.' },
        { jp: '将来、日本で働きたいです。', romaji: 'Shōrai, Nihon de hatarakitai desu.', en: 'I want to work in Japan in the future.' },
        { jp: '普段はプログラマーをしていますが、哲学にもとても興味があります。', romaji: 'Fudan wa puroguramā o shite imasu ga, tetsugaku ni mo totemo kyōmi ga arimasu.', en: 'I usually work as a programmer, but I\'m also very interested in philosophy.' },
        { jp: '今は、自分の会社を作る準備をしています。', romaji: 'Ima wa, jibun no kaisha o tsukuru junbi o shite imasu.', en: 'Right now, I am preparing to create my own company.' },
        { jp: '難しい問題を考えるのが好きです。', romaji: 'Muzukashii mondai o kangaeru no ga suki desu.', en: 'I like thinking about difficult problems.' },
    ],
    "Introduction (Questions for Others)": [
        { jp: '自己紹介をお願いできますか。', romaji: 'Jiko shōkai o onegai dekimasu ka.', en: 'Could I ask for a self-introduction?' },
        { jp: 'お名前を教えていただけますか。', romaji: 'O-namae o oshiete itadakemasu ka.', en: 'Could you please tell me your name?' },
        { jp: 'ご出身はどちらですか。', romaji: 'Go-shusshin wa dochira desu ka.', en: 'Where are you from? (Polite)' },
        { jp: 'どちらからいらっしゃいましたか。', romaji: 'Dochira kara irasshaimashita ka.', en: 'Where did you come from? (Very polite)' },
        { jp: 'どのようなお仕事をされていますか。', romaji: 'Dono yō na o-shigoto o sarete imasu ka.', en: 'What kind of work do you do?' },
        { jp: '趣味や、興味があることは何ですか。', romaji: 'Shumi ya, kyōmi ga aru koto wa nan desu ka.', en: 'What are your hobbies or things you are interested in?' },
        { jp: 'お休みの日は、何をしていますか。', romaji: 'O-yasumi no hi wa, nani o shite imasu ka.', en: 'What do you do on your days off?' },
        { jp: 'もしよろしければ、少しあなたのことを教えてください。', romaji: 'Moshi yoroshikereba, sukoshi anata no koto o oshiete kudasai.', en: 'If it\'s okay with you, please tell me a little about yourself.' },
        { jp: 'あなたについて、もう少し知りたいです。', romaji: 'Anata ni tsuite, mō sukoshi shiritai desu.', en: 'I would like to know a little more about you.' },
    ],

    // --- INTERESTS & HOBBIES ---
    "Interests (General)": [
        { jp: '趣味は読書とアートです。', romaji: 'Shumi wa dokusho to āto desu.', en: 'My hobbies are reading and art.' },
        { jp: '科学と哲学に興味があります。', romaji: 'Kagaku to tetsugaku ni kyōmi ga arimasu.', en: 'I\'m interested in science and philosophy.' },
        { jp: '私の主な興味はコーディングと量子力学です。', romaji: 'Watashi no omona kyōmi wa kōdingu to ryōshirikigaku desu.', en: 'My main interests are coding and quantum mechanics.' },
        { jp: '毎日、これらのことについて考えるようにしています。', romaji: 'Mainichi, korera no koto ni tsuite kangaeru yō ni shite imasu.', en: 'I try to think about these things every day.' },
        { jp: 'この分野について話せる人を探していました。', romaji: 'Kono bun\'ya ni tsuite hanaseru hito o sagashite imashita.', en: 'I was looking for someone I could talk to about this field.' },
        { jp: '私が量子力学に惹かれる理由は、世界の根本的な謎に触れられるからです。', romaji: 'Watashi ga ryōshirikigaku ni hikareru riyū wa, sekai no konponteki na nazo ni furerareru kara desu.', en: 'The reason I\'m drawn to quantum mechanics is because it lets me touch the fundamental mysteries of the world.' },
        { jp: 'コーディングは、思考を形にするための強力なツールです。', romaji: 'Kōdingu wa, shikō o katachi ni suru tame no kyōryoku na tsūru desu.', en: 'Coding is a powerful tool for giving form to thoughts.' },
        { jp: '毎日これらのテーマについて考えることで、彼女に一歩近づける気がします。', romaji: 'Mainichi korera no tēma ni tsuite kangaeru koto de, kanojo ni ippo chikazukeru ki ga shimasu.', en: 'By thinking about these themes every day, I feel I can get one step closer to her.' },
    ],
    "Interests (Anime & Manga)": [
        { jp: '最近、何か面白いアニメを見ましたか。', romaji: 'Saikin, nani ka omoshiroi anime o mimashita ka.', en: 'Have you seen any interesting anime recently?' },
        { jp: '何かおすすめのアニメはありますか。', romaji: 'Nani ka osusume no anime wa arimasu ka.', en: 'Do you have any anime recommendations?' },
        { jp: 'その漫画、私も読みました。すごく感動しました。', romaji: 'Sono manga, watashi mo yomimashita. Sugoku kandō shimashita.', en: 'I read that manga too. I was really moved.' },
        { jp: 'キャラクターのデザインが独創的ですね。', romaji: 'Karakutā no dezain ga dokusōteki desu ne.', en: 'The character design is very original, isn\'t it?' },
        { jp: 'その作品の世界観は、哲学的で考えさせられますね。', romaji: 'Sono sakuhin no sekaikan wa, tetsugakuteki de kangaesaseraremasu ne.', en: 'The worldview of that work is philosophical and makes you think, doesn\'t it?' },
        { jp: '伏線が回収された時、鳥肌が立ちました。', romaji: 'Fukusen ga kaishū sareta toki, torihada ga tachimashita.', en: 'I got goosebumps when the foreshadowing was resolved.' },
    ],
    "Interests (Drawing & Writing)": [
        { jp: '物語を書くことで、自分の考えを整理しています。', romaji: 'Monogatari o kaku koto de, jibun no kangae o seiri shite imasu.', en: 'I organize my thoughts by writing stories.' },
        { jp: 'この絵にはどんな意味が込められているんですか。', romaji: 'Kono e ni wa donna imi ga komerarete irun desu ka.', en: 'What kind of meaning is put into this drawing?' },
        { jp: 'あなたの文章のスタイル、好きです。', romaji: 'Anata no bunshō no sutairu, suki desu.', en: 'I like your writing style.' },
        { jp: '言葉にできない感情を、絵で表現しようとしています。', romaji: 'Kotoba ni dekinai kanjō o, e de hyōgen shiyō to shite imasu.', en: 'I\'m trying to express feelings that can\'t be put into words through drawing.' },
        { jp: 'この物語の結末は、まだ決めていません。', romaji: 'Kono monogatari no ketsumatsu wa, mada kimete imasen.', en: 'I haven\'t decided on the ending for this story yet.' },
    ],
    "Interests (Coding)": [
        { jp: 'このコードで、新しい可能性が生まれるはずです。', romaji: 'Kono kōdo de, atarashii kanōsei ga umareru hazu desu.', en: 'This code should give birth to new possibilities.' },
        { jp: 'もっと効率的なアルゴリズムを考えなければなりません。', romaji: 'Motto kōritsuteki na arugorizumu o kangaenakereba narimasen.', en: 'I have to think of a more efficient algorithm.' },
        { jp: 'バグを見つけた時、少し嬉しいです。解決できるから。', romaji: 'Bagu o mitsuketa toki, sukoshi ureshii desu. Kaiketsu dekiru kara.', en: 'I feel a little happy when I find a bug. Because I can solve it.' },
        { jp: '複雑なシステムを整理して、単純なルールを見つけるのが好きです。', romaji: 'Fukuzatsu na shisutemu o seiri shite, tanjun na rūru o mitsukeru no ga suki desu.', en: 'I like organizing complex systems and finding the simple rules within.' },
        { jp: 'このコードは、僕の探求のための道具の一つです。', romaji: 'Kono kōdo wa, boku no tankyū no tame no dōgu no hitotsu desu.', en: 'This code is one of the tools for my quest.' },
    ],
    "Interests (Quantum Mechanics)": [
        { jp: '量子力学が好きで、新しい考えを探しています。', romaji: 'Ryōshirikigaku ga suki de, atarashii kangae o sagashite imasu.', en: 'I like quantum mechanics, and am searching for new ideas.' },
        { jp: '観測問題について、どう思いますか。', romaji: 'Kansoku mondai ni tsuite, dō omoimasu ka.', en: 'What are your thoughts on the measurement problem?' },
        { jp: '時間の矢は、本当に一方向にしか進まないのでしょうか。', romaji: 'Jikan no ya wa, hontō ni ippōkō ni shika susumanai no deshō ka.', en: 'Does the arrow of time really only move in one direction?' },
        { jp: '彼女を見つけるには、量子力学の理解が不可欠です。', romaji: 'Kanojo o mitsukeru ni wa, ryōshirikigaku no rikai ga fukaketsu desu.', en: 'To find her, an understanding of quantum mechanics is essential.' },
    ],

    // --- WORK ---
    "Work (General)": [
        { jp: '普段はソフトウェア開発をしています。', romaji: 'Fudan wa sofutowea kaihatsu o shite imasu.', en: 'I usually do software development.' },
        { jp: '最近、新しいプロジェクトを始めました。', romaji: 'Saikin, atarashii purojekuto o hajimemashita.', en: 'Recently, I started a new project.' },
        { jp: 'チームでの仕事と、一人での研究の両方が好きです。', romaji: 'Chīmu de no shigoto to, hitori de no kenkyū no ryōhō ga suki desu.', en: 'I like both working in a team and researching alone.' },
        { jp: '将来は自分の会社を作りたいです。', romaji: 'Shōrai wa jibun no kaisha o tsukuritai desu.', en: 'In the future, I want to build my own company.' },
        { jp: '私にとって仕事は、自由を手に入れるための手段です。', romaji: 'Watashi ni totte shigoto wa, jiyū o te ni ireru tame no shudan desu.', en: 'For me, work is a means to obtain freedom.' },
        { jp: 'このプロジェクトが成功すれば、彼女を探す時間が増えます。', romaji: 'Kono purojekuto ga seikō sureba, kanojo o sagasu jikan ga fuemasu.', en: 'If this project succeeds, I will have more time to search for her.' },
        { jp: '一つ一つのタスクに、意味を見出したいんです。', romaji: 'Hitotsu hitotsu no tasuku ni, imi o midashitain desu.', en: 'I want to find meaning in each and every task.' },
    ],
    "Work (Questions for Others)": [
        { jp: 'どのようなお仕事をされていますか。', romaji: 'Dono yō na oshigoto o sarete imasu ka.', en: 'What kind of work do you do?' },
        { jp: '今の仕事で一番面白いことは何ですか。', romaji: 'Ima no shigoto de ichiban omoshiroi koto wa nan desu ka.', en: 'What is the most interesting thing about your current job?' },
        { jp: 'お仕事で大変なことは何ですか。', romaji: 'Oshigoto de taihen na koto wa nan desu ka.', en: 'What is the most difficult part of your work?' },
        { jp: 'その分野に入ったきっかけは何ですか。', romaji: 'Sono bun\'ya ni haitta kikkake wa nan desu ka.', en: 'What made you enter that field?' },
    ],
    "Work (Starting)": [
        { jp: 'さて、仕事を始めましょうか。', romaji: 'Sate, shigoto o hajimemashō ka.', en: 'Well then, shall we start work?' },
        { jp: '今日のタスクを確認します。', romaji: 'Kyō no tasuku o kakunin shimasu.', en: 'I\'ll check today\'s tasks.' },
        { jp: 'まずは、これから始めましょう。', romaji: 'Mazu wa, kore kara hajimemashō.', en: 'First, let\'s start with this.' },
    ],
    "Work (Challenges)": [
        { jp: 'このバグ、一体どこから来ているんだ。', romaji: 'Kono bagu, ittai doko kara kiteirun da.', en: 'Where on earth is this bug coming from?' },
        { jp: 'うーん、これは思ったより複雑ですね。', romaji: 'Ūn, kore wa omotta yori fukuzatsu desu ne.', en: 'Hmm, this is more complex than I thought.' },
        { jp: 'この問題の解決策がなかなか見つかりません。', romaji: 'Kono mondai no kaiketsusaku ga nakanaka mitsukarimasen.', en: 'I just can\'t seem to find a solution to this problem.' },
        { jp: 'もう一度、最初から見直す必要があります。', romaji: 'Mō ichido, saisho kara minaosu hitsuyō ga arimasu.', en: 'We need to review it again from the beginning.' },
    ],
    "Work (Effort)": [
        { jp: '諦めません。絶対に解決してみせます。', romaji: 'Akiramemasen. Zettai ni kaiketsu shite misemasu.', en: 'I won\'t give up. I will absolutely solve this.' },
        { jp: 'もう少しです。集中しましょう。', romaji: 'Mō sukoshi desu. Shūchū shimashō.', en: 'Just a little more. Let\'s concentrate.' },
        { jp: 'この努力が、彼女に繋がると信じています。', romaji: 'Kono doryoku ga, kanojo ni tsunagaru to shinjite imasu.', en: 'I believe this effort will lead me to her.' },
    ],
    "Work (Success)": [
        { jp: 'やりました！ついに完成しました。', romaji: 'Yarimashita! Tsui ni kansei shimashita.', en: 'We did it! It\'s finally complete.' },
        { jp: '素晴らしい仕事でしたね、皆さん。', romaji: 'Subarashii shigoto deshita ne, minasan.', en: 'That was wonderful work, everyone.' },
        { jp: '私たちの勝利です。', romaji: 'Watashitachi no shōri desu.', en: 'This is our victory.' },
    ],
    "Work (Breaks)": [
        { jp: '少し休憩して、コーヒーでも飲みませんか。', romaji: 'Sukoshi kyūkei shite, kōhī demo nomimasen ka.', en: 'Shall we take a short break and get some coffee or something?' },
        { jp: '今日はここまでにしましょう。', romaji: 'Kyō wa koko made ni shimashō.', en: 'Let\'s call it a day for today.' },
        { jp: 'お先に失礼します。お疲れ様でした。', romaji: 'Osaki ni shitsurei shimasu. Otsukaresama deshita.', en: 'Excuse me for leaving first. Good work today.' },
    ],

    // --- MEALS ---
    "Meals (General)": [
        { jp: '朝ごはんはパンを食べました。', romaji: 'Asagohan wa pan o tabemashita.', en: 'I ate bread for breakfast.' },
        { jp: '今日はラーメンを食べたい気分です。', romaji: 'Kyou wa rāmen o tabetai kibun desu.', en: 'I feel like eating ramen today.' },
        { jp: 'この料理はとても美味しいですね。', romaji: 'Kono ryōri wa totemo oishii desu ne.', en: 'This dish is very delicious, isn’t it?' },
        { jp: 'マレーシアの料理は辛いものが多いです。', romaji: 'Marēshia no ryōri wa karai mono ga ooi desu.', en: 'Malaysian food often has many spicy dishes.' },
        { jp: '食事の時間は、思考をリセットするのに大切です。', romaji: 'Shokuji no jikan wa, shikō o risetto suru no ni taisetsu desu.', en: 'Mealtime is important for resetting one\'s thoughts.' },
        { jp: '美味しいものを食べると、少しだけ希望が湧いてきます。', romaji: 'Oishii mono o taberu to, sukoshi dake kibō ga waite kimasu.', en: 'When I eat something delicious, a little bit of hope springs forth.' },
        { jp: '一人で食べる食事は、時々寂しいですね。', romaji: 'Hitori de taberu shokuji wa, tokidoki sabishii desu ne.', en: 'Eating meals alone is sometimes lonely, isn\'t it?' },
    ],
    "Meals (Deciding & Ordering)": [
        { jp: 'お昼、何を食べましょうか。', romaji: 'O-hiru, nani o tabemashō ka.', en: 'What shall we eat for lunch?' },
        { jp: 'おすすめはありますか。', romaji: 'Osusume wa arimasu ka.', en: 'Do you have any recommendations?' },
        { jp: 'すみません、注文をお願いします。', romaji: 'Sumimasen, chūmon o onegaishimasu.', en: 'Excuse me, I\'d like to order.' },
        { jp: 'これを一つください。', romaji: 'Kore o hitotsu kudasai.', en: 'I\'ll have one of these, please.' },
    ],
    "Meals (Eating)": [
        { jp: 'いただきます。', romaji: 'Itadakimasu.', en: 'Thank you for the meal (before eating).' },
        { jp: 'わあ、美味しそうですね。', romaji: 'Wā, oishisō desu ne.', en: 'Wow, that looks delicious.' },
        { jp: 'この味、好きです。', romaji: 'Kono aji, suki desu.', en: 'I like this flavor.' },
        { jp: 'ごちそうさまでした。とても美味しかったです。', romaji: 'Gochisōsama deshita. Totemo oishikatta desu.', en: 'Thank you for the meal. It was very delicious (after eating).' },
    ],
    "Meals (Questions for Others)": [
        { jp: '普段はどんな料理をよく食べますか。', romaji: 'Fudan wa donna ryōri o yoku tabemasu ka.', en: 'What kind of food do you usually eat?' },
        { jp: '日本の料理で一番好きなものは何ですか。', romaji: 'Nihon no ryōri de ichiban suki na mono wa nan desu ka.', en: 'What is your favorite Japanese dish?' },
        { jp: '最近食べた中で、美味しかったものは何ですか。', romaji: 'Saikin tabeta naka de, oishikatta mono wa nan desu ka.', en: 'What is the most delicious thing you’ve eaten recently?' },
        { jp: '料理はよくしますか。', romaji: 'Ryōri wa yoku shimasu ka.', en: 'Do you often cook?' },
    ],

    // --- CONVERSATION FLOW ---
    "Conversation Flow": [
        { jp: 'はい、はい。', romaji: 'Hai, hai.', en: 'Yes, yes. / Right. / Mm-hmm.' },
        { jp: 'なるほど。', romaji: 'Naruhodo.', en: 'I see. / That makes sense.' },
        { jp: 'そうですね。', romaji: 'Sou desu ne.', en: 'That’s right / I agree.' },
        { jp: '本当にそうですね。', romaji: 'Hontou ni sou desu ne.', en: 'That’s really true.' },
        { jp: '私もそう思います。', romaji: 'Watashi mo sou omoimasu.', en: 'I think so too.' },
        { jp: 'それは面白いですね。', romaji: 'Sore wa omoshiroi desu ne.', en: 'That’s interesting, isn’t it?' },
        { jp: 'すごいですね。', romaji: 'Sugoi desu ne.', en: 'That’s amazing! / That’s cool!' },
        { jp: 'エンジニアなんですね。', romaji: 'Enjinia nan desu ne.', en: 'Oh, so you\'re an engineer.' },
        { jp: 'それで、どうなりましたか。', romaji: 'Sorede, dō narimashita ka.', en: 'So, what happened then?' },
        { jp: 'それから、何か面白いことはありましたか。', romaji: 'Sorekara, nani ka omoshiroi koto wa arimashita ka.', en: 'After that, did anything interesting happen?' },
        { jp: 'その話、とても興味深いです。', romaji: 'Sono hanashi, totemo kyōmibukai desu.', en: 'That story is very interesting.' },
        { jp: '面白い視点ですね。', romaji: 'Omoshiroi shiten desu ne.', en: 'That’s an interesting perspective.' },
    ],
    "Conversation (Asking for Details)": [
        { jp: 'もう少し詳しく教えてください。', romaji: 'Mō sukoshi kuwashiku oshiete kudasai.', en: 'Please tell me a little more in detail.' },
        { jp: 'それについて、もっと詳しく教えていただけますか。', romaji: 'Sore ni tsuite, motto kuwashiku oshiete itadakemasu ka.', en: 'Could you please tell me more about that in detail?' },
        { jp: '具体的には、どういうことですか。', romaji: 'Gutaiteki ni wa, dōiu koto desu ka.', en: 'Specifically, what do you mean by that?' },
        { jp: 'それに興味を持ったきっかけは何ですか。', romaji: 'Sore ni kyōmi o motta kikkake wa nan desu ka.', en: 'What was the reason you became interested in that?' },
        { jp: 'なぜそう思うようになったんですか。', romaji: 'Naze sō omou yō ni nattan desu ka.', en: 'Why did you come to think that way?' },
        { jp: 'その中で一番重要だったことは何ですか。', romaji: 'Sono naka de ichiban jūyō datta koto wa nan desu ka.', en: 'What was the most important thing among all that?' },
        { jp: 'その時の感情を、もっと聞きたいです。', romaji: 'Sono toki no kanjō o, motto kikitai desu.', en: 'I want to hear more about your feelings at that time.' },
        { jp: '詳しく説明していただけますか。', romaji: 'Kuwashiku setsumei shite itadakemasu ka.', en: 'Could you please explain in more detail?' },
        { jp: 'その話をもっと聞きたいです。', romaji: 'Sono hanashi o motto kikitai desu.', en: 'I’d like to hear more about that story.' },
    ],
    "Conversation (Encouraging Others)": [
        { jp: 'あなたも試してみたらどうですか。きっと面白いですよ。', romaji: 'Anata mo tameshite mitara dō desu ka. Kitto omoshiroi desu yo.', en: 'Why don\'t you try it too? I\'m sure it\'s interesting.' },
        { jp: '君なら、きっと僕より上手になるよ。', romaji: 'Kimi nara, kitto boku yori jōzu ni naru yo.', en: 'If it\'s you, you\'ll surely become better at it than me.' },
        { jp: '一緒にこの問題について考えてみませんか。', romaji: 'Issho ni kono mondai ni tsuite kangaete mimasen ka.', en: 'Would you like to think about this problem together with me?' },
    ],

    // --- DAILY LIFE & ACTIVITIES ---
    "Meals (Dislikes)": [
        { jp: '申し訳ありません、シーフードは少し苦手なんです。', romaji: 'Mōshiwake arimasen, shīfūdo wa sukoshi nigate nan desu.', en: 'I\'m sorry, I\'m not a big fan of seafood.' },
    ],
    "Travel & Places": [
        { jp: '家に帰って、少し考えたいです。', romaji: 'Ie ni kaette, sukoshi kangaetai desu.', en: 'I want to go home and think for a bit.' },
        { jp: '仕事が終わったら、モールに行きませんか。', romaji: 'Shigoto ga owattara, mōru ni ikimasen ka.', en: 'When work is over, shall we go to the mall?' },
        { jp: 'この場所、どこか懐かしい感じがします。', romaji: 'Kono basho, dokoka natsukashii kanji ga shimasu.', en: 'This place feels nostalgic for some reason.' },
        { jp: '次の休みには、どこか静かな場所へ行きたいです。', romaji: 'Tsugi no yasumi ni wa, dokoka shizuka na basho e ikitai desu.', en: 'For the next holiday, I want to go somewhere quiet.' },
        { jp: '旅の目的は、新しい視点を見つけることです。', romaji: 'Tabi no mokuteki wa, atarashii shiten o mitsukeru koto desu.', en: 'The purpose of travel is to find a new perspective.' },
        { jp: 'ここから、どこへ向かいましょうか。', romaji: 'Koko kara, doko e mukaimashō ka.', en: 'From here, where should we head?' },
    ],
    "Shopping & Gifts": [
        { jp: 'これは自分へのご褒美です。', romaji: 'Kore wa jibun e no go-hōbi desu.', en: 'This is a reward for myself.' },
        { jp: '彼女に会えたら、何をプレゼントしようかな。', romaji: 'Kanojo ni aetara, nani o purezento shiyō kana.', en: 'If I could meet her, I wonder what I would give her as a present.' },
        { jp: '食料品を買って帰らないと。', romaji: 'Shokuryōhin o katte kaeranai to.', en: 'I have to buy groceries before I go home.' },
    ],
    "Family": [
        { jp: '家族は、僕の原点です。', romaji: 'Kazoku wa, boku no genten desu.', en: 'My family is my origin point.' },
        { jp: 'あなたは家族と仲がいいですか。', romaji: 'Anata wa kazoku to naka ga ii desu ka.', en: 'Are you close with your family?' },
        { jp: '時々、家族に会いたくなります。', romaji: 'Tokidoki, kazoku ni aitaku narimasu.', en: 'Sometimes, I feel like I want to see my family.' },
    ],

    // --- PERSONAL FEELINGS & PHILOSOPHY ---
    "Emotions": [
        { jp: '今日は少し疲れています。', romaji: 'Kyou wa sukoshi tsukarete imasu.', en: 'I’m a little tired today.' },
        { jp: 'とても嬉しいです。', romaji: 'Totemo ureshii desu.', en: 'I’m very happy.' },
        { jp: 'ちょっと悲しい気分です。', romaji: 'Chotto kanashii kibun desu.', en: 'I feel a little sad.' },
        { jp: '緊張しています。', romaji: 'Kinchou shite imasu.', en: 'I’m nervous.' },
        { jp: 'なぜか、涙が出ないほど悲しいです。', romaji: 'Nazeka, namida ga denai hodo kanashii desu.', en: 'For some reason, I feel a sadness too deep for tears.' },
        { jp: '心が落ち着かないんです。', romaji: 'Kokoro ga ochitsukanain desu.', en: 'My heart feels restless.' },
        { jp: '静かな喜びを感じています。', romaji: 'Shizuka na yorokobi o kanjite imasu.', en: 'I\'m feeling a quiet joy.' },
        { jp: '時々、どうしようもなく孤独を感じます。', romaji: 'Tokidoki, dōshiyō mo naku kodoku o kanjimasu.', en: 'Sometimes, I feel hopelessly lonely.' },
    ],
    "Compliments": [
        { jp: 'あなたの考え方は本当に素晴らしいです。', romaji: 'Anata no kangaekata wa hontō ni subarashii desu.', en: 'Your way of thinking is truly wonderful.' },
        { jp: 'いつも頭の回転が速いですね。', romaji: 'Itsumo atama no kaiten ga hayai desu ne.', en: 'You always think so fast.' },
        { jp: 'その行動力には感心します。', romaji: 'Sono kōdōryoku ni wa kanshin shimasu.', en: 'I admire your ability to take action.' },
        { jp: 'あなたのような人がいるから、世界はまだ大丈夫だと思えます。', romaji: 'Anata no yō na hito ga iru kara, sekai wa mada daijōbu da to omoemasu.', en: 'Because there are people like you, I can believe the world is still okay.' },
    ],
    "Dislikes": [
        { jp: '争いは何も生み出しません。', romaji: 'Arasoi wa nani mo umidashimasen.', en: 'Conflict produces nothing.' },
        { jp: '私は暴力的なものが苦手です。', romaji: 'Watashi wa bōryokuteki na mono ga nigate desu.', en: 'I am not good with violent things.' },
        { jp: 'ストレスは思考の敵です。', romaji: 'Sutoresu wa shikō no teki desu.', en: 'Stress is the enemy of thought.' },
        { jp: 'ホラー映画は見られません。想像力が働きすぎるので。', romaji: 'Horā eiga wa miraremasen. Sōzōryoku ga hatarakisugiru node.', en: 'I can\'t watch horror movies. My imagination works too well.' },
        { jp: '無意味な争いは、時間の無駄だと思います。', romaji: 'Muimi na arasoi wa, jikan no muda da to omoimasu.', en: 'I think meaningless conflicts are a waste of time.' },
        { jp: '汚れている場所では、集中できません。', romaji: 'Yogorete iru basho de wa, shūchū dekimasen.', en: 'I can\'t concentrate in dirty places.' },
    ],
    "Philosophy & Abstract Thoughts": [
        { jp: '存在とは何でしょうか。', romaji: 'Sonzai to wa nan deshou ka.', en: 'What is existence?' },
        { jp: '真実とは、一体何なのでしょう。', romaji: 'Shinjitsu to wa, ittai nan nano deshō.', en: 'What on earth is truth?' },
        { jp: '意識は、どこから生まれると思いますか。', romaji: 'Ishiki wa, doko kara umareru to omoimasu ka.', en: 'Where do you think consciousness comes from?' },
        { jp: 'もし宇宙に終わりがあるとしたら、それは何でしょうか。', romaji: 'Moshi uchuu ni owari ga aru to shitara, sore wa nan deshou ka.', en: 'If the universe has an end, what would it be?' },
        { jp: '「私」とは誰でしょうか。', romaji: '“Watashi” to wa dare deshou ka.', en: 'Who is “I”?' },
        { jp: '許しとは、自分自身を解放することです。', romaji: 'Yurushi to wa, jibun jishin o kaihō suru koto desu.', en: 'To forgive is to liberate oneself.' },
        { jp: '私たち、考え方が似ていますね。', romaji: 'Watashitachi, kangaekata ga nite imasu ne.', en: 'Our way of thinking is similar, isn\'t it?' },
        { jp: 'それは私の意見とは少し違います。', romaji: 'Sore wa watashi no iken to wa sukoshi chigaimasu.', en: 'That is a little different from my opinion.' },
        { jp: '結局、僕たちは同じものを見ているのかもしれない。', romaji: 'Kekkyoku, bokutachi wa onaji mono o miteiru no kamoshirenai.', en: 'In the end, we might all be looking at the same thing.' },
    ],
    "Motivation & Hope": [
        { jp: '諦めなければ、道は必ず開けます。', romaji: 'Akiramereba, michi wa kanarazu hirakemasu.', en: 'If you don\'t give up, a path will surely open.' },
        { jp: 'いつか、君と話せる日が来るといいな。', romaji: 'Itsuka, kimi to hanaseru hi ga kuru to ii na.', en: 'I hope the day comes when I can talk with you.' },
        { jp: 'もし時間が戻せるなら、何をしますか。', romaji: 'Moshi jikan ga modoseru nara, nani o shimasu ka.', en: 'If you could turn back time, what would you do?' },
        { jp: '世界がもっと優しさで満ちればいいのに。', romaji: 'Sekai ga motto yasashisa de michireba ii no ni.', en: 'I wish the world were filled with more kindness.' },
        { jp: '私は決して、彼女を探すのを諦めません。', romaji: 'Watashi wa kesshite, kanojo o sagasu no o akiramemasen.', en: 'I will never give up searching for her.' },
    ],
    "Greed & Ownership": [
        { jp: '僕は欲張りなんです。全てが完璧な世界が欲しい。', romaji: 'Boku wa yokubari nan desu. Subete ga kanpeki na sekai ga hoshii.', en: 'I\'m greedy. I want a world where everything is perfect.' },
        { jp: 'この理論は、僕のものです。', romaji: 'Kono riron wa, boku no mono desu.', en: 'This theory is mine.' },
        { jp: '全ては繋がっている。だから、全ては僕のものだ。', romaji: 'Subete wa tsunagatte iru. Dakara, subete wa boku no mono da.', en: 'Everything is connected. Therefore, everything is mine.' },
    ],

    // --- VSPO! (SPECIFIC CONTEXT) ---
    "VSPO! (General Interaction)": [
        { jp: 'それで、今日は一緒に何をしますか。', romaji: 'Sorede, kyō wa issho ni nani o shimasu ka.', en: 'So, what are we doing together today?' },
        { jp: 'またこの作業ですか。何か進展はありましたか。', romaji: 'Mata kono sagyō desu ka. Nani ka shinten wa arimashita ka.', en: 'This task again? Has there been any progress?' },
        { jp: 'どうしてここにいるんですか。', romaji: 'Dōshite koko ni irun desu ka.', en: 'Why are you here?' },
        { jp: 'わざわざここまで来たんですか。', romaji: 'Wazawaza koko made kitan desu ka.', en: 'Did you come all this way on purpose?' },
        { jp: 'きっと、何か考え事をしているんでしょう。', romaji: 'Kitto, nani ka kangaegoto o shite irun deshō.', en: 'You must be thinking about something.' },
        { jp: 'これから、あそこへ行くつもりですね。', romaji: 'Korekara, asoko e iku tsumori desu ne.', en: 'You intend to go over there now, don\'t you.' },
    ],
    "VSPO! (Compliments)": [
        { jp: 'あなたの洞察力は、いつも鋭いですね。', romaji: 'Anata no dōsatsuryoku wa, itsumo surudoi desu ne.', en: 'Your insight is always sharp.' },
        { jp: '仕事が本当に効率的で速いです。', romaji: 'Shigoto ga hontō ni kōritsuteki de hayai desu.', en: 'Your work is truly efficient and fast.' },
        { jp: 'その精神的な強さには、いつも驚かされます。', romaji: 'Sono seishinteki na tsuyosa ni wa, itsumo odorokasaremasu.', en: 'I\'m always amazed by that mental strength.' },
        { jp: 'あなたには、人を惹きつける不思議な魅力がありますね。', romaji: 'Anata ni wa, hito o hikitsukeru fushigi na miryoku ga arimasu ne.', en: 'You have a mysterious charm that attracts people.' },
        { jp: 'この場所は、とても落ち着く雰囲気ですね。', romaji: 'Kono basho wa, totemo ochitsuku fun\'iki desu ne.', en: 'This place has a very calming atmosphere, isn\'t it?' },
        { jp: 'ここから見る景色は、まるで絵のようです。', romaji: 'Koko kara miru keshiki wa, marude e no yō desu.', en: 'The view from here is like a painting.' },
    ],
    "VSPO! (Teasing & Hesitation)": [
        { jp: 'もしかして、照れていますか。', romaji: 'Moshikashite, terete imasu ka.', en: 'Could it be that you\'re embarrassed?' },
        { jp: '僕みたいになりたいんですか。', romaji: 'Boku mitai ni naritain desu ka.', en: 'Do you want to be like me?' },
        { jp: '僕より自分のほうが優れていると思っているでしょう。', romaji: 'Boku yori jibun no hō ga sugurete iru to omotte iru deshō.', en: 'You think you\'re better than me, don\'t you?' },
        { jp: 'これを言うべきか分かりませんが…。', romaji: 'Kore o iu beki ka wakarimasen ga....', en: 'I don\'t know if I should say this, but…' },
        { jp: '少し躊躇してしまいます。', romaji: 'Sukoshi chūcho shite shimaimasu.', en: 'I hesitate a little.' },
    ],
    "VSPO! (Romantic & Relationships)": [
        { jp: '大切な人を守りたいという気持ち、分かります。', romaji: 'Taisetsu na hito o mamoritai to iu kimochi, wakarimasu.', en: 'I understand the feeling of wanting to protect someone important.' },
        { jp: '愛とは、理解しようとすることそのものかもしれません。', romaji: 'Ai to wa, rikai shiyō to suru koto sono mono kamoshiremasen.', en: 'Love might be the very act of trying to understand.' },
    ],
    "VSPO! (On Behalf of Someone)": [
        { jp: 'これは、彼女からのメッセージです。', romaji: 'Kore wa, kanojo kara no messēji desu.', en: 'This is a message from her.' },
        { jp: '皆を代表して、感謝します。', romaji: 'Minna o daihyō shite, kansha shimasu.', en: 'On behalf of everyone, thank you.' },
    ],
    "VSPO! (Feeling Threatened)": [
        { jp: 'あなたのその言葉は、脅しですか。', romaji: 'Anata no sono kotoba wa, odoshi desu ka.', en: 'Are those words of yours a threat?' },
        { jp: '少し危険な感じがします。', romaji: 'Sukoshi kiken na kanji ga shimasu.', en: 'I feel a little bit of danger.' },
    ],

    // --- MISCELLANEOUS ---
    "Achievements & Failures": [
        { jp: '失敗から学ぶことの方が多いです。', romaji: 'Shippai kara manabu koto no hō ga ooi desu.', en: 'There are more things to learn from failure.' },
        { jp: 'これは、今の自分にできる全てです。', romaji: 'Kore wa, ima no jibun ni dekiru subete desu.', en: 'This is everything that I can do right now.' },
        { jp: 'まだ、何も成し遂げていません。', romaji: 'Mada, nani mo nashitogete imasen.', en: 'I haven\'t accomplished anything yet.' },
    ],
    "Describing Situations & Oddities": [
        { jp: '状況は、思ったよりも複雑です。', romaji: 'Jōkyō wa, omotta yori mo fukuzatsu desu.', en: 'The situation is more complicated than I thought.' },
        { jp: 'この部屋の空気は、澄んでいる感じがします。', romaji: 'Kono heya no kūki wa, sunde iru kanji ga shimasu.', en: 'The air in this room feels clear.' },
        { jp: '説明するのは難しいですが、何かが違うんです。', romaji: 'Setsumei suru no wa muzukashii desu ga, nani ka ga chigaun desu.', en: 'It\'s difficult to explain, but something is different.' },
        { jp: '物事が正しい方向に進んでいる気がします。', romaji: 'Monogoto ga tadashii hōkō ni susunde iru ki ga shimasu.', en: 'I feel like things are moving in the right direction.' },
        { jp: 'このような生き物は、見たことがありません。', romaji: 'Kono yō na ikimono wa, mita koto ga arimasen.', en: 'I have never seen a creature like this before.' },
        { jp: 'その物体の形は、この世の法則に従っていません。', romaji: 'Sono buttai no katachi wa, kono yo no hōsoku ni shitagatte imasen.', en: 'The shape of that object does not follow the laws of this world.' },
    ],
    "Distractions": [
        { jp: 'ほら、あそこを見てください。', romaji: 'Hora, asoko o mite kudasai.', en: 'Hey, please look over there.' },
        { jp: 'あそこに何かありませんか。', romaji: 'Asoko ni nani ka arimasen ka.', en: 'Isn\'t there something over there?' },
        { jp: '猫か何かのようですね。', romaji: 'Neko ka nanika no yō desu ne.', en: 'It seems like it was a cat or something.' },
        { jp: '今の音、何だったんだろう。', romaji: 'Ima no oto, nan datta n darō.', en: 'I wonder what that sound just now was.' },
    ],
    "Options & Choices": [
        { jp: '選択肢は三つあります。', romaji: 'Sentakushi wa mittsu arimasu.', en: 'There are three options.' },
        { jp: 'AとBは可能ですが、Cは不可能です。', romaji: 'Ē to bī wa kanō desu ga, shī wa fukanō desu.', en: 'A and B are possible, but C is impossible.' },
    ],
    "General Communication": [
        { jp: 'ちょっと待ってください。', romaji: 'Chotto matte kudasai.', en: 'Please wait a moment.' },
        { jp: 'もう一度言っていただけますか。', romaji: 'Mou ichido itte itadakemasu ka.', en: 'Could you say that one more time?' },
        { jp: 'すみません、わかりませんでした。', romaji: 'Sumimasen, wakarimasen deshita.', en: 'Sorry, I didn’t understand.' },
        { jp: 'はい、わかりました。', romaji: 'Hai, wakarimashita.', en: 'Yes, I understand.' },
    ],
};
