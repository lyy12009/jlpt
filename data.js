const allVocabData = [
  {
    "word": "現像",
    "reading": "げんぞう",
    "meaning": "developing (film)",
    "level": "1"
  },
  {
    "word": "原則",
    "reading": "げんそく",
    "meaning": "principle, general rule",
    "level": "1"
  },
  {
    "word": "見地",
    "reading": "けんち",
    "meaning": "point of view",
    "level": "1"
  },
  {
    "word": "現地",
    "reading": "げんち",
    "meaning": "actual place, local",
    "level": "1"
  },
  {
    "word": "限定",
    "reading": "げんてい",
    "meaning": "limit, restriction",
    "level": "1"
  },
  {
    "word": "原点",
    "reading": "げんてん",
    "meaning": "origin (coordinates, starting point)",
    "level": "1"
  },
  {
    "word": "原典",
    "reading": "げんてん",
    "meaning": "original, source",
    "level": "1"
  },
  {
    "word": "原爆",
    "reading": "げんばく",
    "meaning": "atomic bomb",
    "level": "1"
  },
  {
    "word": "原文",
    "reading": "げんぶん",
    "meaning": "the text, original",
    "level": "1"
  },
  {
    "word": "厳密",
    "reading": "げんみつ",
    "meaning": "strict, close",
    "level": "1"
  },
  {
    "word": "賢明",
    "reading": "けんめい",
    "meaning": "wisdom, intelligence, prudence",
    "level": "1"
  },
  {
    "word": "倹約",
    "reading": "けんやく",
    "meaning": "thrift, economy, frugality",
    "level": "1"
  },
  {
    "word": "原油",
    "reading": "げんゆ",
    "meaning": "crude oil",
    "level": "1"
  },
  {
    "word": "兼用",
    "reading": "けんよう",
    "meaning": "multi-use, combined use",
    "level": "1"
  },
  {
    "word": "権力",
    "reading": "けんりょく",
    "meaning": "(political) power, authority, influence",
    "level": "1"
  },
  {
    "word": "言論",
    "reading": "げんろん",
    "meaning": "discussion, speech",
    "level": "1"
  },
  {
    "word": "故～",
    "reading": "こ～",
    "meaning": "deceased, late",
    "level": "1"
  },
  {
    "word": "語彙",
    "reading": "ごい",
    "meaning": "vocabulary, glossary",
    "level": "1"
  },
  {
    "word": "恋する",
    "reading": "こいする",
    "meaning": "to fall in love with, to love",
    "level": "1"
  },
  {
    "word": "甲",
    "reading": "こう",
    "meaning": "1st in rank; shell",
    "level": "1"
  },
  {
    "word": "～光",
    "reading": "～こう",
    "meaning": "light",
    "level": "1"
  },
  {
    "word": "好意",
    "reading": "こうい",
    "meaning": "good will, favor, courtesy",
    "level": "1"
  },
  {
    "word": "行為",
    "reading": "こうい",
    "meaning": "act, deed, conduct",
    "level": "1"
  },
  {
    "word": "合意",
    "reading": "ごうい",
    "meaning": "agreement, consent, mutual understanding",
    "level": "1"
  },
  {
    "word": "工学",
    "reading": "こうがく",
    "meaning": "engineering",
    "level": "1"
  },
  {
    "word": "抗議",
    "reading": "こうぎ",
    "meaning": "protest, objection",
    "level": "1"
  },
  {
    "word": "合議",
    "reading": "ごうぎ",
    "meaning": "consultation, conference",
    "level": "1"
  },
  {
    "word": "皇居",
    "reading": "こうきょ",
    "meaning": "Imperial Palace",
    "level": "1"
  },
  {
    "word": "好況",
    "reading": "こうきょう",
    "meaning": "prosperous conditions, healthy economy",
    "level": "1"
  },
  {
    "word": "鉱業",
    "reading": "こうぎょう",
    "meaning": "mining industry",
    "level": "1"
  },
  {
    "word": "興業",
    "reading": "こうぎょう",
    "meaning": "starting a business; industry",
    "level": "1"
  },
  {
    "word": "高原",
    "reading": "こうげん",
    "meaning": "tableland, plateau",
    "level": "1"
  },
  {
    "word": "交互",
    "reading": "こうご",
    "meaning": "mutual, reciprocal, alternate",
    "level": "1"
  },
  {
    "word": "煌々と",
    "reading": "こうこうと",
    "meaning": "brightly",
    "level": "1"
  },
  {
    "word": "考古学",
    "reading": "こうこがく",
    "meaning": "archeology",
    "level": "1"
  },
  {
    "word": "工作",
    "reading": "こうさく",
    "meaning": "handicraft, maneuvering",
    "level": "1"
  },
  {
    "word": "耕作",
    "reading": "こうさく",
    "meaning": "cultivation, farming",
    "level": "1"
  },
  {
    "word": "鉱山",
    "reading": "こうざん",
    "meaning": "mine",
    "level": "1"
  },
  {
    "word": "講習",
    "reading": "こうしゅう",
    "meaning": "short course, training",
    "level": "1"
  },
  {
    "word": "口述",
    "reading": "こうじゅつ",
    "meaning": "verbal statement",
    "level": "1"
  },
  {
    "word": "控除",
    "reading": "こうじょ",
    "meaning": "subsidy, deduction",
    "level": "1"
  },
  {
    "word": "交渉",
    "reading": "こうしょう",
    "meaning": "negotiation",
    "level": "1"
  },
  {
    "word": "高尚",
    "reading": "こうしょう",
    "meaning": "high, noble, refined",
    "level": "1"
  },
  {
    "word": "向上",
    "reading": "こうじょう",
    "meaning": "rise, improvement, progress",
    "level": "1"
  },
  {
    "word": "行進",
    "reading": "こうしん",
    "meaning": "march, parade",
    "level": "1"
  },
  {
    "word": "香辛料",
    "reading": "こうしんりょう",
    "meaning": "spices",
    "level": "1"
  },
  {
    "word": "降水",
    "reading": "こうすい",
    "meaning": "rainfall, precipitation",
    "level": "1"
  },
  {
    "word": "洪水",
    "reading": "こうずい",
    "meaning": "flood",
    "level": "1"
  },
  {
    "word": "合成",
    "reading": "ごうせい",
    "meaning": "synthetic, mixed",
    "level": "1"
  },
  {
    "word": "公然",
    "reading": "こうぜん",
    "meaning": "openly",
    "level": "1"
  },
  {
    "word": "抗争",
    "reading": "こうそう",
    "meaning": "dispute, resistance",
    "level": "1"
  },
  {
    "word": "構想",
    "reading": "こうそう",
    "meaning": "plan, plot, idea, conception",
    "level": "1"
  },
  {
    "word": "後退",
    "reading": "こうたい",
    "meaning": "retreat, backspace",
    "level": "1"
  },
  {
    "word": "光沢",
    "reading": "こうたく",
    "meaning": "luster, glossy finish (of photographs)",
    "level": "1"
  },
  {
    "word": "公団",
    "reading": "こうだん",
    "meaning": "public corporation",
    "level": "1"
  },
  {
    "word": "好調",
    "reading": "こうちょう",
    "meaning": "satisfactory, in good shape",
    "level": "1"
  },
  {
    "word": "口頭",
    "reading": "こうとう",
    "meaning": "oral",
    "level": "1"
  },
  {
    "word": "講読",
    "reading": "こうどく",
    "meaning": "reading",
    "level": "1"
  },
  {
    "word": "購読",
    "reading": "こうどく",
    "meaning": "subscription",
    "level": "1"
  },
  {
    "word": "購入",
    "reading": "こうにゅう",
    "meaning": "purchase, buy",
    "level": "1"
  },
  {
    "word": "公認",
    "reading": "こうにん",
    "meaning": "official recognition, authorization",
    "level": "1"
  },
  {
    "word": "光熱費",
    "reading": "こうねつひ",
    "meaning": "cost of fuel and light",
    "level": "1"
  },
  {
    "word": "購買",
    "reading": "こうばい",
    "meaning": "purchase, buy",
    "level": "1"
  },
  {
    "word": "好評",
    "reading": "こうひょう",
    "meaning": "popularity, favorable reputation",
    "level": "1"
  },
  {
    "word": "交付",
    "reading": "こうふ",
    "meaning": "delivering, furnishing (with copies)",
    "level": "1"
  },
  {
    "word": "公募",
    "reading": "こうぼ",
    "meaning": "public appeal, public contribution",
    "level": "1"
  },
  {
    "word": "巧妙",
    "reading": "こうみょう",
    "meaning": "ingenious, skillful, clever",
    "level": "1"
  },
  {
    "word": "公用",
    "reading": "こうよう",
    "meaning": "government business, public use, public expense",
    "level": "1"
  },
  {
    "word": "小売",
    "reading": "こうり",
    "meaning": "retail",
    "level": "1"
  },
  {
    "word": "効率",
    "reading": "こうりつ",
    "meaning": "efficiency",
    "level": "1"
  },
  {
    "word": "公立",
    "reading": "こうりつ",
    "meaning": "public institution",
    "level": "1"
  },
  {
    "word": "護衛",
    "reading": "ごえい",
    "meaning": "guard, convoy, escort",
    "level": "1"
  },
  {
    "word": "コーナー",
    "reading": "コーナー",
    "meaning": "corner",
    "level": "1"
  },
  {
    "word": "小柄",
    "reading": "こがら",
    "meaning": "small, diminutive",
    "level": "1"
  },
  {
    "word": "小切手",
    "reading": "こぎって",
    "meaning": "cheque, check",
    "level": "1"
  },
  {
    "word": "国産",
    "reading": "こくさん",
    "meaning": "domestic products",
    "level": "1"
  },
  {
    "word": "国定",
    "reading": "こくてい",
    "meaning": "state-sponsored, national",
    "level": "1"
  },
  {
    "word": "告白",
    "reading": "こくはく",
    "meaning": "confession, acknowledgment",
    "level": "1"
  },
  {
    "word": "国防",
    "reading": "こくぼう",
    "meaning": "national defense",
    "level": "1"
  },
  {
    "word": "国有",
    "reading": "こくゆう",
    "meaning": "national ownership",
    "level": "1"
  },
  {
    "word": "極楽",
    "reading": "ごくらく",
    "meaning": "paradise",
    "level": "1"
  },
  {
    "word": "国連",
    "reading": "こくれん",
    "meaning": "U.N., United Nations",
    "level": "1"
  },
  {
    "word": "焦げ茶",
    "reading": "こげちゃ",
    "meaning": "dark brown",
    "level": "1"
  },
  {
    "word": "語源",
    "reading": "ごげん",
    "meaning": "word root, word derivation, etymology",
    "level": "1"
  },
  {
    "word": "心地",
    "reading": "ここち",
    "meaning": "feeling, sensation, mood",
    "level": "1"
  },
  {
    "word": "心得",
    "reading": "こころえ",
    "meaning": "knowledge, information",
    "level": "1"
  },
  {
    "word": "心掛け",
    "reading": "こころがけ",
    "meaning": "readiness, intention, aim",
    "level": "1"
  },
  {
    "word": "心掛ける",
    "reading": "こころがける",
    "meaning": "to bear in mind, to aim to do",
    "level": "1"
  },
  {
    "word": "志",
    "reading": "こころざし",
    "meaning": "will, intention, motive",
    "level": "1"
  },
  {
    "word": "志す",
    "reading": "こころざす",
    "meaning": "to plan, to intend, to aspire to",
    "level": "1"
  },
  {
    "word": "心強い",
    "reading": "こころづよい",
    "meaning": "heartening, reassuring",
    "level": "1"
  },
  {
    "word": "心細い",
    "reading": "こころぼそい",
    "meaning": "helpless, hopeless, discouraging",
    "level": "1"
  },
  {
    "word": "試み",
    "reading": "こころみ",
    "meaning": "trial, experiment",
    "level": "1"
  },
  {
    "word": "試みる",
    "reading": "こころみる",
    "meaning": "to try, to test",
    "level": "1"
  },
  {
    "word": "快い",
    "reading": "こころよい",
    "meaning": "pleasant, agreeable",
    "level": "1"
  },
  {
    "word": "誤差",
    "reading": "ごさ",
    "meaning": "error",
    "level": "1"
  },
  {
    "word": "ございます (かん)",
    "reading": "ございます (かん)",
    "meaning": "to be (polite, to exist)",
    "level": "1"
  },
  {
    "word": "孤児",
    "reading": "こじ",
    "meaning": "orphan",
    "level": "1"
  },
  {
    "word": "こじれる",
    "reading": "こじれる",
    "meaning": "to get complicated, to grow worse",
    "level": "1"
  },
  {
    "word": "こす (みずを～)",
    "reading": "こす (みずを～)",
    "meaning": "to strain, to filter",
    "level": "1"
  },
  {
    "word": "梢",
    "reading": "こずえ",
    "meaning": "treetop",
    "level": "1"
  },
  {
    "word": "個性",
    "reading": "こせい",
    "meaning": "individuality, personality, idiosyncrasy",
    "level": "1"
  },
  {
    "word": "戸籍",
    "reading": "こせき",
    "meaning": "census, family register",
    "level": "1"
  },
  {
    "word": "古代",
    "reading": "こだい",
    "meaning": "ancient times",
    "level": "1"
  },
  {
    "word": "こたつ",
    "reading": "こたつ",
    "meaning": "table with heater, (originally) charcoal brazier in a floor well",
    "level": "1"
  },
  {
    "word": "こだわる",
    "reading": "こだわる",
    "meaning": "to fuss over, to be particular about",
    "level": "1"
  },
  {
    "word": "誇張",
    "reading": "こちょう",
    "meaning": "exaggeration",
    "level": "1"
  },
  {
    "word": "こつ (をつかむ)",
    "reading": "こつ (をつかむ)",
    "meaning": "secret, trick, hang",
    "level": "1"
  },
  {
    "word": "滑稽",
    "reading": "こっけい",
    "meaning": "funny, humorous, comical",
    "level": "1"
  },
  {
    "word": "国交",
    "reading": "こっこう",
    "meaning": "diplomatic relations",
    "level": "1"
  },
  {
    "word": "骨董品",
    "reading": "こっとうひん",
    "meaning": "curio",
    "level": "1"
  },
  {
    "word": "固定",
    "reading": "こてい",
    "meaning": "fixation, fixing (e.g., salary, capital)",
    "level": "1"
  },
  {
    "word": "事柄",
    "reading": "ことがら",
    "meaning": "matter, thing, affair, circumstance",
    "level": "1"
  },
  {
    "word": "孤独",
    "reading": "こどく",
    "meaning": "isolation, loneliness, solitude",
    "level": "1"
  },
  {
    "word": "ことごとく",
    "reading": "ことごとく",
    "meaning": "altogether, entirely",
    "level": "1"
  },
  {
    "word": "言付け",
    "reading": "ことづけ",
    "meaning": "to leave a message",
    "level": "1"
  },
  {
    "word": "殊に",
    "reading": "ことに",
    "meaning": "especially, above all",
    "level": "1"
  },
  {
    "word": "粉々",
    "reading": "こなごな",
    "meaning": "in very small pieces",
    "level": "1"
  },
  {
    "word": "好ましい",
    "reading": "このましい",
    "meaning": "nice, likable, desirable",
    "level": "1"
  },
  {
    "word": "碁盤",
    "reading": "ごばん",
    "meaning": "Go board",
    "level": "1"
  },
  {
    "word": "個別",
    "reading": "こべつ",
    "meaning": "particular case",
    "level": "1"
  },
  {
    "word": "ごまかす",
    "reading": "ごまかす",
    "meaning": "to deceive, to falsify, to misrepresent",
    "level": "1"
  },
  {
    "word": "細やか",
    "reading": "こまやか",
    "meaning": "meager, modest",
    "level": "1"
  },
  {
    "word": "コマーシャル",
    "reading": "コマーシャル",
    "meaning": "a commercial",
    "level": "1"
  },
  {
    "word": "込める",
    "reading": "こめる",
    "meaning": "to include, to put into",
    "level": "1"
  },
  {
    "word": "コメント",
    "reading": "コメント",
    "meaning": "comment",
    "level": "1"
  },
  {
    "word": "籠もる",
    "reading": "こもる",
    "meaning": "to seclude oneself, to be confined in",
    "level": "1"
  },
  {
    "word": "固有",
    "reading": "こゆう",
    "meaning": "characteristic, tradition, peculiar",
    "level": "1"
  },
  {
    "word": "暦",
    "reading": "こよみ",
    "meaning": "calendar, almanac",
    "level": "1"
  },
  {
    "word": "凝らす",
    "reading": "こらす",
    "meaning": "to concentrate, to devote, to peer into",
    "level": "1"
  },
  {
    "word": "ごらんなさい (かん)",
    "reading": "ごらんなさい (かん)",
    "meaning": "look, (please) try to do",
    "level": "1"
  },
  {
    "word": "孤立",
    "reading": "こりつ",
    "meaning": "isolation, helplessness",
    "level": "1"
  },
  {
    "word": "懲りる",
    "reading": "こりる",
    "meaning": "to learn by experience, to be disgusted with",
    "level": "1"
  },
  {
    "word": "凝る",
    "reading": "こる",
    "meaning": "to stiffen, to harden",
    "level": "1"
  },
  {
    "word": "根気",
    "reading": "こんき",
    "meaning": "patience; perseverance, energy",
    "level": "1"
  },
  {
    "word": "根拠",
    "reading": "こんきょ",
    "meaning": "basis, foundation",
    "level": "1"
  },
  {
    "word": "混血",
    "reading": "こんけつ",
    "meaning": "mixed race, mixed parentage",
    "level": "1"
  },
  {
    "word": "コンタクト (レンズ)",
    "reading": "コンタクト (レンズ)",
    "meaning": "contact; contact lens",
    "level": "1"
  },
  {
    "word": "昆虫",
    "reading": "こんちゅう",
    "meaning": "insect, bug",
    "level": "1"
  },
  {
    "word": "根底",
    "reading": "こんてい",
    "meaning": "root, basis, foundation",
    "level": "1"
  },
  {
    "word": "混同",
    "reading": "こんどう",
    "meaning": "confusion, mixing, merger",
    "level": "1"
  },
  {
    "word": "コントラスト",
    "reading": "コントラスト",
    "meaning": "contrast",
    "level": "1"
  },
  {
    "word": "コントロール",
    "reading": "コントロール",
    "meaning": "control",
    "level": "1"
  },
  {
    "word": "コンパス",
    "reading": "コンパス",
    "meaning": "compass",
    "level": "1"
  },
  {
    "word": "根本",
    "reading": "こんぽん",
    "meaning": "foundation, root, base",
    "level": "1"
  },
  {
    "word": "財",
    "reading": "ざい",
    "meaning": "fortune, riches",
    "level": "1"
  },
  {
    "word": "再会",
    "reading": "さいかい",
    "meaning": "meeting again, reunion",
    "level": "1"
  },
  {
    "word": "災害",
    "reading": "さいがい",
    "meaning": "calamity, disaster, misfortune",
    "level": "1"
  },
  {
    "word": "細菌",
    "reading": "さいきん",
    "meaning": "bacillus, bacterium, germ",
    "level": "1"
  },
  {
    "word": "細工",
    "reading": "さいく",
    "meaning": "work, craftsmanship, trick",
    "level": "1"
  },
  {
    "word": "採掘",
    "reading": "さいくつ",
    "meaning": "mining",
    "level": "1"
  },
  {
    "word": "サイクル",
    "reading": "サイクル",
    "meaning": "cycle",
    "level": "1"
  },
  {
    "word": "採決",
    "reading": "さいけつ",
    "meaning": "vote, roll call",
    "level": "1"
  },
  {
    "word": "再建",
    "reading": "さいけん",
    "meaning": "(temple or shrine) rebuilding",
    "level": "1"
  },
  {
    "word": "再現",
    "reading": "さいげん",
    "meaning": "reproduction, return, revival",
    "level": "1"
  },
  {
    "word": "財源",
    "reading": "ざいげん",
    "meaning": "source of funds, resources, finances",
    "level": "1"
  },
  {
    "word": "在庫",
    "reading": "ざいこ",
    "meaning": "stockpile, stock",
    "level": "1"
  },
  {
    "word": "採算",
    "reading": "さいさん",
    "meaning": "profit",
    "level": "1"
  },
  {
    "word": "サイズ",
    "reading": "サイズ",
    "meaning": "size",
    "level": "1"
  },
  {
    "word": "再生",
    "reading": "さいせい",
    "meaning": "playback, regeneration, resuscitation",
    "level": "1"
  },
  {
    "word": "財政",
    "reading": "ざいせい",
    "meaning": "economy, financial affairs",
    "level": "1"
  },
  {
    "word": "最善",
    "reading": "さいぜん",
    "meaning": "the very best",
    "level": "1"
  },
  {
    "word": "採択",
    "reading": "さいたく",
    "meaning": "adoption, selection, choice",
    "level": "1"
  },
  {
    "word": "栽培",
    "reading": "さいばい",
    "meaning": "cultivation",
    "level": "1"
  },
  {
    "word": "再発",
    "reading": "さいはつ",
    "meaning": "return, relapse, reoccurrence",
    "level": "1"
  },
  {
    "word": "細胞",
    "reading": "さいぼう",
    "meaning": "cell",
    "level": "1"
  },
  {
    "word": "採用",
    "reading": "さいよう",
    "meaning": "use, adopt",
    "level": "1"
  },
  {
    "word": "遮る",
    "reading": "さえぎる",
    "meaning": "to interrupt, to intercept, to obstruct",
    "level": "1"
  },
  {
    "word": "さえずる",
    "reading": "さえずる",
    "meaning": "to sing, to chirp, to twitter",
    "level": "1"
  },
  {
    "word": "冴える",
    "reading": "さえる",
    "meaning": "to be clear, to be bright, to be skillful",
    "level": "1"
  },
  {
    "word": "竿",
    "reading": "さお",
    "meaning": "rod, pole (e.g., for drying laundry)",
    "level": "1"
  },
  {
    "word": "栄える",
    "reading": "さかえる",
    "meaning": "to flourish, to prosper, to thrive",
    "level": "1"
  },
  {
    "word": "差額",
    "reading": "さがく",
    "meaning": "balance, difference, margin",
    "level": "1"
  },
  {
    "word": "杯",
    "reading": "さかずき",
    "meaning": "wine cup",
    "level": "1"
  },
  {
    "word": "逆立ち",
    "reading": "さかだち",
    "meaning": "handstand, headstand",
    "level": "1"
  },
  {
    "word": "さきに (いぜん)",
    "reading": "さきに (いぜん)",
    "meaning": "before, earlier than, previously",
    "level": "1"
  },
  {
    "word": "詐欺",
    "reading": "さぎ",
    "meaning": "fraud, swindle",
    "level": "1"
  },
  {
    "word": "削減",
    "reading": "さくげん",
    "meaning": "cut, reduction",
    "level": "1"
  },
  {
    "word": "錯誤",
    "reading": "さくご",
    "meaning": "mistake",
    "level": "1"
  },
  {
    "word": "作戦",
    "reading": "さくせん",
    "meaning": "military operations, tactics, strategy",
    "level": "1"
  },
  {
    "word": "叫び",
    "reading": "さけび",
    "meaning": "shout, scream, outcry",
    "level": "1"
  },
  {
    "word": "捧げる",
    "reading": "ささげる",
    "meaning": "to lift up, to give, to offer",
    "level": "1"
  },
  {
    "word": "差し掛かる",
    "reading": "さしかかる",
    "meaning": "to come near to, to approach",
    "level": "1"
  },
  {
    "word": "指図",
    "reading": "さしず",
    "meaning": "instruction, mandate",
    "level": "1"
  },
  {
    "word": "差し出す",
    "reading": "さしだす",
    "meaning": "to present, to submit, to hold out",
    "level": "1"
  },
  {
    "word": "差し支える",
    "reading": "さしつかえる",
    "meaning": "to interfere, to hinder",
    "level": "1"
  },
  {
    "word": "授ける",
    "reading": "さずける",
    "meaning": "to grant, to award, to teach",
    "level": "1"
  },
  {
    "word": "摩する",
    "reading": "さする",
    "meaning": "to rub, to stroke",
    "level": "1"
  },
  {
    "word": "さぞ (さぞや。さぞかし)",
    "reading": "さぞ (さぞや。さぞかし)",
    "meaning": "I am sure, certainly, no doubt",
    "level": "1"
  },
  {
    "word": "定まる",
    "reading": "さだまる",
    "meaning": "to become settled, to be fixed",
    "level": "1"
  },
  {
    "word": "定める",
    "reading": "さだめる",
    "meaning": "to decide, to determine",
    "level": "1"
  },
  {
    "word": "座談会",
    "reading": "ざだんかい",
    "meaning": "symposium, round-table discussion",
    "level": "1"
  },
  {
    "word": "雑",
    "reading": "ざつ",
    "meaning": "rough, crude",
    "level": "1"
  },
  {
    "word": "雑貨",
    "reading": "ざっか",
    "meaning": "miscellaneous goods, general goods",
    "level": "1"
  },
  {
    "word": "殺人",
    "reading": "さつじん",
    "meaning": "murder",
    "level": "1"
  },
  {
    "word": "察する",
    "reading": "さっする",
    "meaning": "to guess, to sense, to judge",
    "level": "1"
  },
  {
    "word": "雑談",
    "reading": "ざつだん",
    "meaning": "chatting, idle talk",
    "level": "1"
  },
  {
    "word": "さっと",
    "reading": "さっと",
    "meaning": "suddenly, smoothly",
    "level": "1"
  },
  {
    "word": "さっぱりする",
    "reading": "さっぱりする",
    "meaning": "to refresh",
    "level": "1"
  },
  {
    "word": "悟る",
    "reading": "さとる",
    "meaning": "to attain enlightenment, to understand",
    "level": "1"
  },
  {
    "word": "最中",
    "reading": "さなか",
    "meaning": "in the middle of, midst",
    "level": "1"
  },
  {
    "word": "座標",
    "reading": "ざひょう",
    "meaning": "coordinates",
    "level": "1"
  },
  {
    "word": "さほど",
    "reading": "さほど",
    "meaning": "not so, not that much",
    "level": "1"
  },
  {
    "word": "サボる",
    "reading": "サボる",
    "meaning": "to cut (skip) classes; to loaf on the job; to idle away one's time",
    "level": "1"
  },
  {
    "word": "様",
    "reading": "さま",
    "meaning": "state; way (a person does something); Mr. or Mrs.",
    "level": "1"
  },
  {
    "word": "寒気",
    "reading": "さむけ",
    "meaning": "chill, shiver, cold",
    "level": "1"
  },
  {
    "word": "侍",
    "reading": "さむらい",
    "meaning": "samurai",
    "level": "1"
  },
  {
    "word": "さも",
    "reading": "さも",
    "meaning": "with gusto, with satisfaction",
    "level": "1"
  },
  {
    "word": "作用",
    "reading": "さよう",
    "meaning": "operation, effect, function",
    "level": "1"
  },
  {
    "word": "さらう (こどもを～)",
    "reading": "さらう (こどもを～)",
    "meaning": "to kidnap",
    "level": "1"
  },
  {
    "word": "障る",
    "reading": "さわる",
    "meaning": "to hinder, to interfere with, to affect",
    "level": "1"
  },
  {
    "word": "酸",
    "reading": "さん",
    "meaning": "acid",
    "level": "1"
  },
  {
    "word": "山岳",
    "reading": "さんがく",
    "meaning": "mountains",
    "level": "1"
  },
  {
    "word": "参議院",
    "reading": "さんぎいん",
    "meaning": "House of Councilors",
    "level": "1"
  },
  {
    "word": "産休",
    "reading": "さんきゅう",
    "meaning": "maternity leave",
    "level": "1"
  },
  {
    "word": "サンキュー",
    "reading": "サンキュー",
    "meaning": "thank you",
    "level": "1"
  },
  {
    "word": "残金",
    "reading": "ざんきん",
    "meaning": "remaining money",
    "level": "1"
  },
  {
    "word": "産後",
    "reading": "さんご",
    "meaning": "postpartum, after childbirth",
    "level": "1"
  },
  {
    "word": "残酷",
    "reading": "ざんこく",
    "meaning": "cruelty, harshness",
    "level": "1"
  },
  {
    "word": "産出",
    "reading": "さんしゅつ",
    "meaning": "yield, produce",
    "level": "1"
  },
  {
    "word": "参照",
    "reading": "さんしょう",
    "meaning": "reference, consultation, consultation",
    "level": "1"
  },
  {
    "word": "参上",
    "reading": "さんじょう",
    "meaning": "calling on, visiting",
    "level": "1"
  },
  {
    "word": "残高",
    "reading": "ざんだか",
    "meaning": "(bank) balance, remainder",
    "level": "1"
  },
  {
    "word": "サンタクロース",
    "reading": "サンタクロース",
    "meaning": "Santa Claus",
    "level": "1"
  },
  {
    "word": "桟橋",
    "reading": "さんばし",
    "meaning": "wharf, jetty, pier",
    "level": "1"
  },
  {
    "word": "賛美",
    "reading": "さんび",
    "meaning": "praise, adoration, glorification",
    "level": "1"
  },
  {
    "word": "山腹",
    "reading": "さんぷく",
    "meaning": "hillside, mountainside",
    "level": "1"
  },
  {
    "word": "産婦人科",
    "reading": "さんふじんか",
    "meaning": "maternity and gynecology department",
    "level": "1"
  },
  {
    "word": "産物",
    "reading": "さんぶつ",
    "meaning": "product, result, fruit",
    "level": "1"
  },
  {
    "word": "山脈",
    "reading": "さんみゃく",
    "meaning": "mountain range",
    "level": "1"
  },
  {
    "word": "仕上がり",
    "reading": "しあがり",
    "meaning": "finish, end, completion",
    "level": "1"
  },
  {
    "word": "仕上",
    "reading": "しあげ",
    "meaning": "end, finishing touches",
    "level": "1"
  },
  {
    "word": "仕上げる",
    "reading": "しあげる",
    "meaning": "to finish up, to complete",
    "level": "1"
  },
  {
    "word": "飼育",
    "reading": "しいく",
    "meaning": "breeding, raising, rearing",
    "level": "1"
  },
  {
    "word": "強いて",
    "reading": "しいて",
    "meaning": "to dare, to insist",
    "level": "1"
  },
  {
    "word": "シート",
    "reading": "シート",
    "meaning": "seat; sheet",
    "level": "1"
  },
  {
    "word": "ジーパン",
    "reading": "ジーパン",
    "meaning": "jeans",
    "level": "1"
  },
  {
    "word": "仕入れる",
    "reading": "しいれる",
    "meaning": "to lay in stock, to replenish stock, to procure",
    "level": "1"
  },
  {
    "word": "強いる",
    "reading": "しいる",
    "meaning": "to force, to compel, to coerce",
    "level": "1"
  },
  {
    "word": "潮",
    "reading": "しお",
    "meaning": "tide",
    "level": "1"
  },
  {
    "word": "歯科",
    "reading": "しか",
    "meaning": "dentistry",
    "level": "1"
  },
  {
    "word": "自我",
    "reading": "じが",
    "meaning": "self, ego",
    "level": "1"
  },
  {
    "word": "自覚",
    "reading": "じかく",
    "meaning": "self-conscious",
    "level": "1"
  },
  {
    "word": "仕掛",
    "reading": "しかけ",
    "meaning": "device, trick, mechanism",
    "level": "1"
  },
  {
    "word": "仕掛ける",
    "reading": "しかける",
    "meaning": "to lay, to set, to wage",
    "level": "1"
  },
  {
    "word": "しかしながら",
    "reading": "しかしながら",
    "meaning": "however, nevertheless",
    "level": "1"
  },
  {
    "word": "色彩",
    "reading": "しきさい",
    "meaning": "color",
    "level": "1"
  },
  {
    "word": "式場",
    "reading": "しきじょう",
    "meaning": "ceremonial hall, place of ceremony (e.g., marriage)",
    "level": "1"
  },
  {
    "word": "しきたり",
    "reading": "しきたり",
    "meaning": "custom, conventional practice, tradition",
    "level": "1"
  },
  {
    "word": "事業",
    "reading": "じぎょう",
    "meaning": "project, enterprise, business",
    "level": "1"
  },
  {
    "word": "軽蔑",
    "reading": "けいべつ",
    "meaning": "scorn, disdain",
    "level": "1"
  },
  {
    "word": "経歴",
    "reading": "けいれき",
    "meaning": "personal history, career",
    "level": "1"
  },
  {
    "word": "経路",
    "reading": "けいろ",
    "meaning": "course, route, channel",
    "level": "1"
  },
  {
    "word": "けがらわしい",
    "reading": "けがらわしい",
    "meaning": "filthy, unfair",
    "level": "1"
  },
  {
    "word": "劇団",
    "reading": "げきだん",
    "meaning": "troupe, theatrical company",
    "level": "1"
  },
  {
    "word": "激励",
    "reading": "げきれい",
    "meaning": "encouragement",
    "level": "1"
  },
  {
    "word": "ゲスト",
    "reading": "ゲスト",
    "meaning": "guest",
    "level": "1"
  },
  {
    "word": "獣",
    "reading": "けだもの",
    "meaning": "beast, brute",
    "level": "1"
  },
  {
    "word": "決",
    "reading": "けつ",
    "meaning": "decision, vote",
    "level": "1"
  },
  {
    "word": "決意",
    "reading": "けつい",
    "meaning": "decision, determination",
    "level": "1"
  },
  {
    "word": "結核",
    "reading": "けっかく",
    "meaning": "tuberculosis",
    "level": "1"
  },
  {
    "word": "決議",
    "reading": "けつぎ",
    "meaning": "resolution, vote, decision",
    "level": "1"
  },
  {
    "word": "結合",
    "reading": "けつごう",
    "meaning": "combination, union",
    "level": "1"
  },
  {
    "word": "決算",
    "reading": "けっさん",
    "meaning": "balance sheet, settlement of accounts",
    "level": "1"
  },
  {
    "word": "月謝",
    "reading": "げっしゃ",
    "meaning": "monthly tuition fee",
    "level": "1"
  },
  {
    "word": "決勝",
    "reading": "けっしょう",
    "meaning": "finals (in sports)",
    "level": "1"
  },
  {
    "word": "結晶",
    "reading": "けっしょう",
    "meaning": "crystal, crystallization",
    "level": "1"
  },
  {
    "word": "結成",
    "reading": "けっせい",
    "meaning": "formation",
    "level": "1"
  },
  {
    "word": "結束",
    "reading": "けっそく",
    "meaning": "union, unity",
    "level": "1"
  },
  {
    "word": "げっそり",
    "reading": "げっそり",
    "meaning": "being disheartened, losing weight",
    "level": "1"
  },
  {
    "word": "決断",
    "reading": "けつだん",
    "meaning": "decision, determination",
    "level": "1"
  },
  {
    "word": "月賦",
    "reading": "げっぷ",
    "meaning": "monthly installment",
    "level": "1"
  },
  {
    "word": "欠乏",
    "reading": "けつぼう",
    "meaning": "shortage",
    "level": "1"
  },
  {
    "word": "蹴飛ばす",
    "reading": "けとばす",
    "meaning": "to kick away, to kick (someone)",
    "level": "1"
  },
  {
    "word": "けなす",
    "reading": "けなす",
    "meaning": "to speak ill of",
    "level": "1"
  },
  {
    "word": "煙たい",
    "reading": "けむたい",
    "meaning": "smoky, feeling awkward",
    "level": "1"
  },
  {
    "word": "煙る",
    "reading": "けむる",
    "meaning": "to smoke (e.g., fire)",
    "level": "1"
  },
  {
    "word": "獣",
    "reading": "けもの",
    "meaning": "beast, brute",
    "level": "1"
  },
  {
    "word": "家来",
    "reading": "けらい",
    "meaning": "retainer, retinue, servant",
    "level": "1"
  },
  {
    "word": "下痢",
    "reading": "げり",
    "meaning": "diarrhea",
    "level": "1"
  },
  {
    "word": "権威",
    "reading": "けんい",
    "meaning": "authority, power, influence",
    "level": "1"
  },
  {
    "word": "兼業",
    "reading": "けんぎょう",
    "meaning": "holding two jobs at the same time",
    "level": "1"
  },
  {
    "word": "原形",
    "reading": "げんけい",
    "meaning": "original form, base form",
    "level": "1"
  },
  {
    "word": "原型",
    "reading": "げんけい",
    "meaning": "prototype, model, archetypal",
    "level": "1"
  },
  {
    "word": "権限",
    "reading": "けんげん",
    "meaning": "power, authority, jurisdiction",
    "level": "1"
  },
  {
    "word": "現行",
    "reading": "げんこう",
    "meaning": "present, current, in operation",
    "level": "1"
  },
  {
    "word": "健在",
    "reading": "けんざい",
    "meaning": "in good health, well",
    "level": "1"
  },
  {
    "word": "原作",
    "reading": "げんさく",
    "meaning": "original work",
    "level": "1"
  },
  {
    "word": "検事",
    "reading": "けんじ",
    "meaning": "public prosecutor",
    "level": "1"
  },
  {
    "word": "原子",
    "reading": "げんし",
    "meaning": "atom",
    "level": "1"
  },
  {
    "word": "元首",
    "reading": "げんしゅ",
    "meaning": "ruler, sovereign",
    "level": "1"
  },
  {
    "word": "原書",
    "reading": "げんしょ",
    "meaning": "original document",
    "level": "1"
  },
  {
    "word": "懸賞",
    "reading": "けんしょう",
    "meaning": "offering prizes, winning, reward",
    "level": "1"
  },
  {
    "word": "健全",
    "reading": "けんぜん",
    "meaning": "health, soundness, wholesome",
    "level": "1"
  },
  {
    "word": "元素",
    "reading": "げんそ",
    "meaning": "element",
    "level": "1"
  },
  {
    "word": "同調",
    "reading": "どうちょう",
    "meaning": "sympathy, agree with, alignment",
    "level": "1"
  },
  {
    "word": "到底",
    "reading": "とうてい",
    "meaning": "(cannot) possibly",
    "level": "1"
  },
  {
    "word": "動的",
    "reading": "どうてき",
    "meaning": "dynamic, kinetic",
    "level": "1"
  },
  {
    "word": "尊い",
    "reading": "とうとい",
    "meaning": "precious, valuable, noble",
    "level": "1"
  },
  {
    "word": "貴い",
    "reading": "とうとい",
    "meaning": "precious, valuable, noble",
    "level": "1"
  },
  {
    "word": "同等",
    "reading": "どうとう",
    "meaning": "equality, equal, same rank",
    "level": "1"
  },
  {
    "word": "堂々",
    "reading": "どうどう",
    "meaning": "magnificent, grand, impressive",
    "level": "1"
  },
  {
    "word": "尊ぶ",
    "reading": "とうとぶ",
    "meaning": "to value, to prize, to esteem",
    "level": "1"
  },
  {
    "word": "どうにか",
    "reading": "どうにか",
    "meaning": "in some way or other, one way or another",
    "level": "1"
  },
  {
    "word": "投入",
    "reading": "とうにゅう",
    "meaning": "throw, investment, making (an electrical circuit)",
    "level": "1"
  },
  {
    "word": "導入",
    "reading": "どうにゅう",
    "meaning": "introduction, bringing in, leading in",
    "level": "1"
  },
  {
    "word": "当人",
    "reading": "とうにん",
    "meaning": "the one concerned, the said person",
    "level": "1"
  },
  {
    "word": "同封",
    "reading": "どうふう",
    "meaning": "enclosure (e.g., in a letter)",
    "level": "1"
  },
  {
    "word": "逃亡",
    "reading": "とうぼう",
    "meaning": "escape",
    "level": "1"
  },
  {
    "word": "冬眠",
    "reading": "とうみん",
    "meaning": "hibernation, winter sleep",
    "level": "1"
  },
  {
    "word": "同盟",
    "reading": "どうめい",
    "meaning": "alliance, union, league",
    "level": "1"
  },
  {
    "word": "どうやら",
    "reading": "どうやら",
    "meaning": "it seems like, somehow or other",
    "level": "1"
  },
  {
    "word": "動力",
    "reading": "どうりょく",
    "meaning": "power, motive power, dynamic force",
    "level": "1"
  },
  {
    "word": "登録",
    "reading": "とうろく",
    "meaning": "registration, register, record",
    "level": "1"
  },
  {
    "word": "討論",
    "reading": "とうろん",
    "meaning": "discussion; debate",
    "level": "1"
  },
  {
    "word": "遠ざかる",
    "reading": "とおざかる",
    "meaning": "to go far off",
    "level": "1"
  },
  {
    "word": "遠回り",
    "reading": "とおまわり",
    "meaning": "detour, roundabout way",
    "level": "1"
  },
  {
    "word": "トーン",
    "reading": "トーン",
    "meaning": "tone",
    "level": "1"
  },
  {
    "word": "とかく",
    "reading": "とかく",
    "meaning": "anyhow, anyway, in any case",
    "level": "1"
  },
  {
    "word": "とがめる",
    "reading": "とがめる",
    "meaning": "to blame, to rebuke",
    "level": "1"
  },
  {
    "word": "時折",
    "reading": "ときおり",
    "meaning": "sometimes",
    "level": "1"
  },
  {
    "word": "とぎれる",
    "reading": "とぎれる",
    "meaning": "to pause, to be interrupted",
    "level": "1"
  },
  {
    "word": "研ぐ",
    "reading": "とぐ",
    "meaning": "to sharpen, to grind, to polish",
    "level": "1"
  },
  {
    "word": "特技",
    "reading": "とくぎ",
    "meaning": "special talent; skill",
    "level": "1"
  },
  {
    "word": "独裁",
    "reading": "どくさい",
    "meaning": "dictatorship, despotism",
    "level": "1"
  },
  {
    "word": "特産",
    "reading": "とくさん",
    "meaning": "specialty, special product",
    "level": "1"
  },
  {
    "word": "独自",
    "reading": "どくじ",
    "meaning": "original, peculiar, characteristic",
    "level": "1"
  },
  {
    "word": "特集",
    "reading": "とくしゅう",
    "meaning": "feature (e.g., newspaper, special edition, report)",
    "level": "1"
  },
  {
    "word": "独占",
    "reading": "どくせん",
    "meaning": "monopoly",
    "level": "1"
  },
  {
    "word": "独創",
    "reading": "どくそう",
    "meaning": "originality",
    "level": "1"
  },
  {
    "word": "得点",
    "reading": "とくてん",
    "meaning": "score, points made",
    "level": "1"
  },
  {
    "word": "特派",
    "reading": "とくは",
    "meaning": "send specially, special envoy",
    "level": "1"
  },
  {
    "word": "特有",
    "reading": "とくゆう",
    "meaning": "characteristic (of, peculiar (to))",
    "level": "1"
  },
  {
    "word": "とげ (をさす)",
    "reading": "とげ (をさす)",
    "meaning": "thorn",
    "level": "1"
  },
  {
    "word": "遂げる",
    "reading": "とげる",
    "meaning": "to accomplish, to achieve, to carry out",
    "level": "1"
  },
  {
    "word": "～どころか",
    "reading": "～どころか",
    "meaning": "rather, far from",
    "level": "1"
  },
  {
    "word": "年頃",
    "reading": "としごろ",
    "meaning": "age, marriageable age, adolescence",
    "level": "1"
  },
  {
    "word": "戸締り",
    "reading": "とじまり",
    "meaning": "closing up, locking the doors",
    "level": "1"
  },
  {
    "word": "途上",
    "reading": "とじょう",
    "meaning": "en/in route, half way",
    "level": "1"
  },
  {
    "word": "土台",
    "reading": "どだい",
    "meaning": "foundation, base, basis",
    "level": "1"
  },
  {
    "word": "途絶える",
    "reading": "とだえる",
    "meaning": "to stop, to cease, to come to an end",
    "level": "1"
  },
  {
    "word": "特許",
    "reading": "とっきょ",
    "meaning": "special permission, patent",
    "level": "1"
  },
  {
    "word": "特権",
    "reading": "とっけん",
    "meaning": "privilege, special right",
    "level": "1"
  },
  {
    "word": "とっさに",
    "reading": "とっさに",
    "meaning": "at once",
    "level": "1"
  },
  {
    "word": "突如",
    "reading": "とつじょ",
    "meaning": "suddenly, all of a sudden",
    "level": "1"
  },
  {
    "word": "とって",
    "reading": "とって",
    "meaning": "handle, grip, knob",
    "level": "1"
  },
  {
    "word": "突破",
    "reading": "とっぱ",
    "meaning": "breaking through, breakthrough, penetration",
    "level": "1"
  },
  {
    "word": "土手",
    "reading": "どて",
    "meaning": "embankment, bank",
    "level": "1"
  },
  {
    "word": "届",
    "reading": "とどけ",
    "meaning": "report, notification, registration",
    "level": "1"
  },
  {
    "word": "滞る",
    "reading": "とどこおる",
    "meaning": "to stagnate, to be delayed",
    "level": "1"
  },
  {
    "word": "整える",
    "reading": "ととのえる",
    "meaning": "to put in order, to arrange, to adjust; to get ready, to prepare; to raise money",
    "level": "1"
  },
  {
    "word": "止める",
    "reading": "とどめる",
    "meaning": "to end, to stop, to cease, to resign",
    "level": "1"
  },
  {
    "word": "唱える",
    "reading": "となえる",
    "meaning": "to recite, to chant, to call upon",
    "level": "1"
  },
  {
    "word": "殿様",
    "reading": "とのさま",
    "meaning": "feudal lord",
    "level": "1"
  },
  {
    "word": "土俵",
    "reading": "どひょう",
    "meaning": "arena",
    "level": "1"
  },
  {
    "word": "扉",
    "reading": "とびら",
    "meaning": "door, opening",
    "level": "1"
  },
  {
    "word": "溝",
    "reading": "どぶ",
    "meaning": "ditch, drain, gap",
    "level": "1"
  },
  {
    "word": "徒歩",
    "reading": "とほ",
    "meaning": "walking, going on foot",
    "level": "1"
  },
  {
    "word": "土木",
    "reading": "どぼく",
    "meaning": "public works",
    "level": "1"
  },
  {
    "word": "とぼける",
    "reading": "とぼける",
    "meaning": "to play dumb, to feign ignorance, to play innocent, to have a blank facial expression; to play the fool; to be in one's dotage",
    "level": "1"
  },
  {
    "word": "乏しい",
    "reading": "とぼしい",
    "meaning": "meager, scarce, hard up, poor",
    "level": "1"
  },
  {
    "word": "富",
    "reading": "とみ",
    "meaning": "wealth, fortune",
    "level": "1"
  },
  {
    "word": "富む",
    "reading": "とむ",
    "meaning": "to be rich, to become rich",
    "level": "1"
  },
  {
    "word": "共稼ぎ",
    "reading": "ともかせぎ",
    "meaning": "working together, (husband and wife) earning a living together",
    "level": "1"
  },
  {
    "word": "伴う",
    "reading": "ともなう",
    "meaning": "to accompany, to bring with",
    "level": "1"
  },
  {
    "word": "共働き",
    "reading": "ともばたらき",
    "meaning": "dual income (husband and wife both working)",
    "level": "1"
  },
  {
    "word": "ドライ",
    "reading": "ドライ",
    "meaning": "dry",
    "level": "1"
  },
  {
    "word": "ドライクリーニング",
    "reading": "ドライクリーニング",
    "meaning": "dry cleaning",
    "level": "1"
  },
  {
    "word": "ドライバー",
    "reading": "ドライバー",
    "meaning": "driver, screwdriver",
    "level": "1"
  },
  {
    "word": "ドライブイン",
    "reading": "ドライブイン",
    "meaning": "drive in",
    "level": "1"
  },
  {
    "word": "トラブル",
    "reading": "トラブル",
    "meaning": "trouble (sometimes used as a verb)",
    "level": "1"
  },
  {
    "word": "トランジスター",
    "reading": "トランジスター",
    "meaning": "transistor",
    "level": "1"
  },
  {
    "word": "とりあえず",
    "reading": "とりあえず",
    "meaning": "at once, first of all, for the time being",
    "level": "1"
  },
  {
    "word": "取扱",
    "reading": "とりあつかい",
    "meaning": "treatment, handling, management",
    "level": "1"
  },
  {
    "word": "取り扱う",
    "reading": "とりあつかう",
    "meaning": "to treat, to handle, to deal in",
    "level": "1"
  },
  {
    "word": "鳥居",
    "reading": "とりい",
    "meaning": "Shinto shrine archway",
    "level": "1"
  },
  {
    "word": "取り替え",
    "reading": "とりかえ",
    "meaning": "swap, exchange",
    "level": "1"
  },
  {
    "word": "取り組む",
    "reading": "とりくむ",
    "meaning": "to tackle, to engage in a bout, to come to grips with",
    "level": "1"
  },
  {
    "word": "取締り",
    "reading": "とりしまり",
    "meaning": "control, crackdown, supervision",
    "level": "1"
  },
  {
    "word": "取り締まる",
    "reading": "とりしまる",
    "meaning": "to crack down, to control, to supervise",
    "level": "1"
  },
  {
    "word": "取り調べる",
    "reading": "とりしらべる",
    "meaning": "to investigate, to examine",
    "level": "1"
  },
  {
    "word": "取り立てる",
    "reading": "とりたてる",
    "meaning": "to collect, to extort",
    "level": "1"
  },
  {
    "word": "取り次ぐ",
    "reading": "とりつぐ",
    "meaning": "to act as an agent for, to announce (someone), to convey (a message)",
    "level": "1"
  },
  {
    "word": "取り付ける",
    "reading": "とりつける",
    "meaning": "to furnish, to install; to get someone's agreement",
    "level": "1"
  },
  {
    "word": "取り除く",
    "reading": "とりのぞく",
    "meaning": "to remove, to take away, to set apart",
    "level": "1"
  },
  {
    "word": "取引",
    "reading": "とりひき",
    "meaning": "transactions, dealings, business",
    "level": "1"
  },
  {
    "word": "取り巻く",
    "reading": "とりまく",
    "meaning": "to surround, to circle, to enclose",
    "level": "1"
  },
  {
    "word": "取り混ぜる",
    "reading": "とりまぜる",
    "meaning": "to mix, to put together",
    "level": "1"
  },
  {
    "word": "取り戻す",
    "reading": "とりもどす",
    "meaning": "to take back, to regain",
    "level": "1"
  },
  {
    "word": "取り寄せる",
    "reading": "とりよせる",
    "meaning": "to order, to send away for",
    "level": "1"
  },
  {
    "word": "ドリル",
    "reading": "ドリル",
    "meaning": "drill",
    "level": "1"
  },
  {
    "word": "副",
    "reading": "とりわけ",
    "meaning": "especially, above all",
    "level": "1"
  },
  {
    "word": "とろける",
    "reading": "とろける",
    "meaning": "melt; to be enchanted with",
    "level": "1"
  },
  {
    "word": "鈍感",
    "reading": "どんかん",
    "meaning": "thickheadedness, stolidity",
    "level": "1"
  },
  {
    "word": "とんだ",
    "reading": "とんだ",
    "meaning": "terrible, awful, serious, absolutely not",
    "level": "1"
  },
  {
    "word": "度忘れ",
    "reading": "どわすれ",
    "meaning": "lapse of memory, forget for a moment",
    "level": "1"
  },
  {
    "word": "問屋",
    "reading": "とんや",
    "meaning": "wholesale store",
    "level": "1"
  },
  {
    "word": "内閣",
    "reading": "ないかく",
    "meaning": "cabinet, (government)",
    "level": "1"
  },
  {
    "word": "乃至",
    "reading": "ないし",
    "meaning": "from...to, between...and, or",
    "level": "1"
  },
  {
    "word": "内緒",
    "reading": "ないしょ",
    "meaning": "secrecy, privacy, secret",
    "level": "1"
  },
  {
    "word": "内心",
    "reading": "ないしん",
    "meaning": "innermost thoughts, real intention, inmost heart",
    "level": "1"
  },
  {
    "word": "内蔵",
    "reading": "ないぞう",
    "meaning": "internal organ; built-in",
    "level": "1"
  },
  {
    "word": "ナイター",
    "reading": "ナイター",
    "meaning": "game under lights (e.g., baseball), night game",
    "level": "1"
  },
  {
    "word": "内部",
    "reading": "ないぶ",
    "meaning": "interior, inside, internal",
    "level": "1"
  },
  {
    "word": "内乱",
    "reading": "ないらん",
    "meaning": "civil war, domestic conflict",
    "level": "1"
  },
  {
    "word": "内陸",
    "reading": "ないりく",
    "meaning": "inland",
    "level": "1"
  },
  {
    "word": "苗",
    "reading": "なえ",
    "meaning": "rice seedling",
    "level": "1"
  },
  {
    "word": "なおさら",
    "reading": "なおさら",
    "meaning": "all the more, still less",
    "level": "1"
  },
  {
    "word": "流し",
    "reading": "ながし",
    "meaning": "sink",
    "level": "1"
  },
  {
    "word": "長々",
    "reading": "ながなが",
    "meaning": "long, drawn-out, very long",
    "level": "1"
  },
  {
    "word": "中程",
    "reading": "なかほど",
    "meaning": "middle, midway",
    "level": "1"
  },
  {
    "word": "渚",
    "reading": "なぎさ",
    "meaning": "water's edge, beach, shore",
    "level": "1"
  },
  {
    "word": "嘆く",
    "reading": "なげく",
    "meaning": "to sigh, to lament, to grieve",
    "level": "1"
  },
  {
    "word": "投げ出す",
    "reading": "なげだす",
    "meaning": "to abandon, to throw out",
    "level": "1"
  },
  {
    "word": "仲人",
    "reading": "なこうど",
    "meaning": "go-between, matchmaker",
    "level": "1"
  },
  {
    "word": "和やか",
    "reading": "なごやか",
    "meaning": "mild, calm, harmonious",
    "level": "1"
  },
  {
    "word": "名残",
    "reading": "なごり",
    "meaning": "remains, traces, memory",
    "level": "1"
  },
  {
    "word": "情け",
    "reading": "なさけ",
    "meaning": "sympathy, compassion",
    "level": "1"
  },
  {
    "word": "情無い",
    "reading": "なさけない",
    "meaning": "miserable, pitiable, shameful",
    "level": "1"
  },
  {
    "word": "情深い",
    "reading": "なさけぶかい",
    "meaning": "tender-hearted, compassionate",
    "level": "1"
  },
  {
    "word": "詰る",
    "reading": "なじる",
    "meaning": "to rebuke, to scold, to tell off",
    "level": "1"
  },
  {
    "word": "名高い",
    "reading": "なだかい",
    "meaning": "famous, celebrated, well-known",
    "level": "1"
  },
  {
    "word": "雪崩",
    "reading": "なだれ",
    "meaning": "avalanche",
    "level": "1"
  },
  {
    "word": "懐く",
    "reading": "なつく",
    "meaning": "to become emotionally attached",
    "level": "1"
  },
  {
    "word": "名付ける",
    "reading": "なづける",
    "meaning": "to name",
    "level": "1"
  },
  {
    "word": "何気ない",
    "reading": "なにげない",
    "meaning": "casual, unconcerned",
    "level": "1"
  },
  {
    "word": "なにとぞ",
    "reading": "なにとぞ",
    "meaning": "please, kindly, by all means",
    "level": "1"
  },
  {
    "word": "なにより",
    "reading": "なにより",
    "meaning": "most, best",
    "level": "1"
  },
  {
    "word": "ナプキン",
    "reading": "ナプキン",
    "meaning": "napkin",
    "level": "1"
  },
  {
    "word": "名札",
    "reading": "なふだ",
    "meaning": "name plate, name tag",
    "level": "1"
  },
  {
    "word": "生臭い",
    "reading": "なまぐさい",
    "meaning": "smelling of fish or blood, fish or meat",
    "level": "1"
  },
  {
    "word": "生温い",
    "reading": "なまぬるい",
    "meaning": "lukewarm, halfhearted",
    "level": "1"
  },
  {
    "word": "生身",
    "reading": "なまみ",
    "meaning": "living flesh, flesh and blood, the quick",
    "level": "1"
  },
  {
    "word": "鉛",
    "reading": "なまり",
    "meaning": "lead (the metal)",
    "level": "1"
  },
  {
    "word": "滑らか",
    "reading": "なめらか",
    "meaning": "smoothness, glassiness",
    "level": "1"
  },
  {
    "word": "嘗める",
    "reading": "なめる",
    "meaning": "to lick; to experience; to make fun of",
    "level": "1"
  },
  {
    "word": "悩ましい",
    "reading": "なやましい",
    "meaning": "seductive, melancholy, languid",
    "level": "1"
  },
  {
    "word": "悩ます",
    "reading": "なやます",
    "meaning": "to bother, to harass, to molest",
    "level": "1"
  },
  {
    "word": "悩み",
    "reading": "なやみ",
    "meaning": "trouble(s), worry, distress",
    "level": "1"
  },
  {
    "word": "並びに",
    "reading": "ならびに",
    "meaning": "and",
    "level": "1"
  },
  {
    "word": "成り立つ",
    "reading": "なりたつ",
    "meaning": "to consist of; to be practical (logical, feasible, viable), to be concluded, to hold true",
    "level": "1"
  },
  {
    "word": "なるたけ",
    "reading": "なるたけ",
    "meaning": "as much as possible, if possible",
    "level": "1"
  },
  {
    "word": "慣れ",
    "reading": "なれ",
    "meaning": "practice, experience",
    "level": "1"
  },
  {
    "word": "馴々しい",
    "reading": "なれなれしい",
    "meaning": "familiar, make free with",
    "level": "1"
  },
  {
    "word": "～なんか",
    "reading": "～なんか",
    "meaning": "in the least ~",
    "level": "1"
  },
  {
    "word": "ナンセンス",
    "reading": "ナンセンス",
    "meaning": "nonsense",
    "level": "1"
  },
  {
    "word": "何だか",
    "reading": "なんだか",
    "meaning": "a little, somewhat, somehow",
    "level": "1"
  },
  {
    "word": "なんだかんだ",
    "reading": "なんだかんだ",
    "meaning": "something or other",
    "level": "1"
  },
  {
    "word": "なんなり",
    "reading": "なんなり",
    "meaning": "anything, whatever",
    "level": "1"
  },
  {
    "word": "荷",
    "reading": "に",
    "meaning": "load, baggage, cargo",
    "level": "1"
  },
  {
    "word": "似通う",
    "reading": "にかよう",
    "meaning": "to resemble closely",
    "level": "1"
  },
  {
    "word": "にきび",
    "reading": "にきび",
    "meaning": "pimple, acne",
    "level": "1"
  },
  {
    "word": "賑わう",
    "reading": "にぎわう",
    "meaning": "to prosper, to flourish, to be crowded with people",
    "level": "1"
  },
  {
    "word": "憎しみ",
    "reading": "にくしみ",
    "meaning": "hatred",
    "level": "1"
  },
  {
    "word": "肉親",
    "reading": "にくしん",
    "meaning": "blood relationship, blood relative",
    "level": "1"
  },
  {
    "word": "肉体",
    "reading": "にくたい",
    "meaning": "the body, the flesh",
    "level": "1"
  },
  {
    "word": "逃げ出す",
    "reading": "にげだす",
    "meaning": "to run away, to escape from",
    "level": "1"
  },
  {
    "word": "西日",
    "reading": "にしび",
    "meaning": "westering sun",
    "level": "1"
  },
  {
    "word": "滲む",
    "reading": "にじむ",
    "meaning": "to run, to blur, to spread",
    "level": "1"
  },
  {
    "word": "にせ物",
    "reading": "にせもの",
    "meaning": "imitation, counterfeit",
    "level": "1"
  },
  {
    "word": "日夜",
    "reading": "にちや",
    "meaning": "day and night, always",
    "level": "1"
  },
  {
    "word": "荷造り",
    "reading": "にづくり",
    "meaning": "packing, baling, crating",
    "level": "1"
  },
  {
    "word": "担う",
    "reading": "になう",
    "meaning": "to carry on shoulder, to bear (burden), to shoulder (gun)",
    "level": "1"
  },
  {
    "word": "鈍る",
    "reading": "にぶる",
    "meaning": "to become less capable, to grow dull, to become blunt, to weaken",
    "level": "1"
  },
  {
    "word": "にも関わらず",
    "reading": "にもかかわらず",
    "meaning": "in spite of, nevertheless",
    "level": "1"
  },
  {
    "word": "ニュアンス",
    "reading": "ニュアンス",
    "meaning": "nuance",
    "level": "1"
  },
  {
    "word": "ニュー",
    "reading": "ニュー",
    "meaning": "new",
    "level": "1"
  },
  {
    "word": "入手",
    "reading": "にゅうしゅ",
    "meaning": "obtaining, coming to hand",
    "level": "1"
  },
  {
    "word": "入賞",
    "reading": "にゅうしょう",
    "meaning": "winning a prize or place (in a contest",
    "level": "1"
  },
  {
    "word": "入浴",
    "reading": "にゅうよく",
    "meaning": "bathe, bathing",
    "level": "1"
  },
  {
    "word": "尿",
    "reading": "にょう",
    "meaning": "urine",
    "level": "1"
  },
  {
    "word": "認識",
    "reading": "にんしき",
    "meaning": "recognition, cognizance",
    "level": "1"
  },
  {
    "word": "妊娠",
    "reading": "にんしん",
    "meaning": "conception, pregnancy",
    "level": "1"
  },
  {
    "word": "任務",
    "reading": "にんむ",
    "meaning": "duty, mission, task",
    "level": "1"
  },
  {
    "word": "任命",
    "reading": "にんめい",
    "meaning": "appointment, nomination, ordination",
    "level": "1"
  },
  {
    "word": "抜かす",
    "reading": "ぬかす",
    "meaning": "to omit, to leave out",
    "level": "1"
  },
  {
    "word": "抜け出す",
    "reading": "ぬけだす",
    "meaning": "to slip out, to sneak away, to excel",
    "level": "1"
  },
  {
    "word": "主",
    "reading": "ぬし",
    "meaning": "owner, master, god",
    "level": "1"
  },
  {
    "word": "沼",
    "reading": "ぬま",
    "meaning": "swamp, bog, pond",
    "level": "1"
  },
  {
    "word": "音色",
    "reading": "ねいろ",
    "meaning": "tone color, timbre",
    "level": "1"
  },
  {
    "word": "値打ち",
    "reading": "ねうち",
    "meaning": "value, worth, price",
    "level": "1"
  },
  {
    "word": "ネガ",
    "reading": "ネガ",
    "meaning": "(photographic) negative",
    "level": "1"
  },
  {
    "word": "寝かせる",
    "reading": "ねかせる",
    "meaning": "to put to bed, to lay down, to ferment",
    "level": "1"
  },
  {
    "word": "ねじまわし",
    "reading": "ねじまわし",
    "meaning": "screwdriver",
    "level": "1"
  },
  {
    "word": "捩れる",
    "reading": "ねじれる",
    "meaning": "twist, strain",
    "level": "1"
  },
  {
    "word": "妬む",
    "reading": "ねたむ",
    "meaning": "to be jealous, to be envious",
    "level": "1"
  },
  {
    "word": "ねだる",
    "reading": "ねだる",
    "meaning": "to nag, to demand",
    "level": "1"
  },
  {
    "word": "熱意",
    "reading": "ねつい",
    "meaning": "zeal, enthusiasm",
    "level": "1"
  },
  {
    "word": "熱湯",
    "reading": "ねっとう",
    "meaning": "boiling water",
    "level": "1"
  },
  {
    "word": "熱量",
    "reading": "ねつりょう",
    "meaning": "calorific value",
    "level": "1"
  },
  {
    "word": "粘り",
    "reading": "ねばり",
    "meaning": "stickiness, viscosity",
    "level": "1"
  },
  {
    "word": "粘る",
    "reading": "ねばる",
    "meaning": "to be sticky, to be adhesive, to persist, to stick to",
    "level": "1"
  },
  {
    "word": "値引き",
    "reading": "ねびき",
    "meaning": "price reduction, discount",
    "level": "1"
  },
  {
    "word": "根回し",
    "reading": "ねまわし",
    "meaning": "making necessary arrangements",
    "level": "1"
  },
  {
    "word": "眠たい",
    "reading": "ねむたい",
    "meaning": "sleepy",
    "level": "1"
  },
  {
    "word": "練る",
    "reading": "ねる",
    "meaning": "to knead, to work over, to polish up",
    "level": "1"
  },
  {
    "word": "念",
    "reading": "ねん",
    "meaning": "sense, feeling, desire",
    "level": "1"
  },
  {
    "word": "年賀",
    "reading": "ねんが",
    "meaning": "New Year's greetings, New Year's card",
    "level": "1"
  },
  {
    "word": "念願",
    "reading": "ねんがん",
    "meaning": "one's heart's desire, earnest petition",
    "level": "1"
  },
  {
    "word": "年号",
    "reading": "ねんごう",
    "meaning": "name of an era, year number",
    "level": "1"
  },
  {
    "word": "燃焼",
    "reading": "ねんしょう",
    "meaning": "burning, combustion",
    "level": "1"
  },
  {
    "word": "年長",
    "reading": "ねんちょう",
    "meaning": "seniority",
    "level": "1"
  },
  {
    "word": "燃料",
    "reading": "ねんりょう",
    "meaning": "fuel",
    "level": "1"
  },
  {
    "word": "年輪",
    "reading": "ねんりん",
    "meaning": "annual tree ring",
    "level": "1"
  },
  {
    "word": "ノイローゼ",
    "reading": "ノイローゼ",
    "meaning": "neurosis (GER: Neurose)",
    "level": "1"
  },
  {
    "word": "農耕",
    "reading": "のうこう",
    "meaning": "farming, agriculture",
    "level": "1"
  },
  {
    "word": "農場",
    "reading": "のうじょう",
    "meaning": "farm",
    "level": "1"
  },
  {
    "word": "農地",
    "reading": "のうち",
    "meaning": "agricultural land",
    "level": "1"
  },
  {
    "word": "納入",
    "reading": "のうにゅう",
    "meaning": "payment, supply",
    "level": "1"
  },
  {
    "word": "逃す",
    "reading": "のがす",
    "meaning": "to let loose, to set free, to let escape",
    "level": "1"
  },
  {
    "word": "逃れる",
    "reading": "のがれる",
    "meaning": "to escape",
    "level": "1"
  },
  {
    "word": "軒並",
    "reading": "のきなみ",
    "meaning": "row of houses; uniformly",
    "level": "1"
  },
  {
    "word": "望ましい",
    "reading": "のぞましい",
    "meaning": "desirable, hoped for",
    "level": "1"
  },
  {
    "word": "乗っ取る",
    "reading": "のっとる",
    "meaning": "to capture, to occupy, to take over",
    "level": "1"
  },
  {
    "word": "のどか",
    "reading": "のどか",
    "meaning": "tranquil, calm, quiet",
    "level": "1"
  },
  {
    "word": "罵る",
    "reading": "ののしる",
    "meaning": "to speak ill of, to abuse",
    "level": "1"
  },
  {
    "word": "延べ",
    "reading": "のべ",
    "meaning": "futures, credit (buying), stretching, total",
    "level": "1"
  },
  {
    "word": "飲み込む",
    "reading": "のみこむ",
    "meaning": "to gulp down, to swallow deeply, to understand",
    "level": "1"
  },
  {
    "word": "乗り込む",
    "reading": "のりこむ",
    "meaning": "to board, to get into (a car); to march into, to enter",
    "level": "1"
  },
  {
    "word": "刃",
    "reading": "は",
    "meaning": "blade, sword",
    "level": "1"
  },
  {
    "word": "～派",
    "reading": "～は",
    "meaning": "group, party, section (mil)",
    "level": "1"
  },
  {
    "word": "バー",
    "reading": "バー",
    "meaning": "bar",
    "level": "1"
  },
  {
    "word": "把握",
    "reading": "はあく",
    "meaning": "grasp, catch, understanding",
    "level": "1"
  },
  {
    "word": "パート",
    "reading": "パート",
    "meaning": "part-time job",
    "level": "1"
  },
  {
    "word": "廃棄",
    "reading": "はいき",
    "meaning": "disposal, abandon, discarding",
    "level": "1"
  },
  {
    "word": "配給",
    "reading": "はいきゅう",
    "meaning": "distribution (e.g., films, rice",
    "level": "1"
  },
  {
    "word": "ばい菌",
    "reading": "ばいきん",
    "meaning": "bacteria, germ(s)",
    "level": "1"
  },
  {
    "word": "配偶者",
    "reading": "はいぐうしゃ",
    "meaning": "spouse",
    "level": "1"
  },
  {
    "word": "拝啓",
    "reading": "はいけい",
    "meaning": "-- a formal greeting used at the beginning of a letter --",
    "level": "1"
  },
  {
    "word": "背景",
    "reading": "はいけい",
    "meaning": "background, scenery, setting",
    "level": "1"
  },
  {
    "word": "背後",
    "reading": "はいご",
    "meaning": "back, rear",
    "level": "1"
  },
  {
    "word": "廃止",
    "reading": "はいし",
    "meaning": "abolition, repeal",
    "level": "1"
  },
  {
    "word": "拝借",
    "reading": "はいしゃく",
    "meaning": "(humble) (polite) borrowing",
    "level": "1"
  },
  {
    "word": "排除",
    "reading": "はいじょ",
    "meaning": "exclusion, removal, rejection",
    "level": "1"
  },
  {
    "word": "賠償",
    "reading": "ばいしょう",
    "meaning": "reparations, indemnity, compensation",
    "level": "1"
  },
  {
    "word": "排水",
    "reading": "はいすい",
    "meaning": "drainage",
    "level": "1"
  },
  {
    "word": "敗戦",
    "reading": "はいせん",
    "meaning": "defeat, losing a war",
    "level": "1"
  },
  {
    "word": "配置",
    "reading": "はいち",
    "meaning": "arrangement (of resources), disposition",
    "level": "1"
  },
  {
    "word": "配布",
    "reading": "はいふ",
    "meaning": "distribution",
    "level": "1"
  },
  {
    "word": "配分",
    "reading": "はいぶん",
    "meaning": "distribution, allotment",
    "level": "1"
  },
  {
    "word": "敗北",
    "reading": "はいぼく",
    "meaning": "defeat (as a verb it means 'to be defeated')",
    "level": "1"
  },
  {
    "word": "倍率",
    "reading": "ばいりつ",
    "meaning": "diameter, magnification",
    "level": "1"
  },
  {
    "word": "配慮",
    "reading": "はいりょ",
    "meaning": "consideration, concern, forethought",
    "level": "1"
  },
  {
    "word": "配列",
    "reading": "はいれつ",
    "meaning": "arrangement, array (programming)",
    "level": "1"
  },
  {
    "word": "破壊",
    "reading": "はかい",
    "meaning": "destruction",
    "level": "1"
  },
  {
    "word": "いたわる",
    "reading": "いたわる",
    "meaning": "to sympathize with, to console, to care for",
    "level": "1"
  },
  {
    "word": "一概に",
    "reading": "いちがいに",
    "meaning": "unconditionally, necessarily",
    "level": "1"
  },
  {
    "word": "著しい",
    "reading": "いちじるしい",
    "meaning": "remarkable, considerable",
    "level": "1"
  },
  {
    "word": "一同",
    "reading": "いちどう",
    "meaning": "all present, all concerned, all of us",
    "level": "1"
  },
  {
    "word": "一部分",
    "reading": "いちぶぶん",
    "meaning": "a part, a portion",
    "level": "1"
  },
  {
    "word": "一別",
    "reading": "いちべつ",
    "meaning": "parting",
    "level": "1"
  },
  {
    "word": "一面",
    "reading": "いちめん",
    "meaning": "one side, the other hand",
    "level": "1"
  },
  {
    "word": "一目",
    "reading": "いちもく",
    "meaning": "a glance, a look, a glimpse",
    "level": "1"
  },
  {
    "word": "一様",
    "reading": "いちよう",
    "meaning": "uniform, similar, equal",
    "level": "1"
  },
  {
    "word": "一律",
    "reading": "いちりつ",
    "meaning": "even, uniform, equal",
    "level": "1"
  },
  {
    "word": "一連",
    "reading": "いちれん",
    "meaning": "a series, a chain, a ream (of paper)",
    "level": "1"
  },
  {
    "word": "一括",
    "reading": "いっかつ",
    "meaning": "all together, batch",
    "level": "1"
  },
  {
    "word": "一気",
    "reading": "いっき",
    "meaning": "at one push, in one gulp",
    "level": "1"
  },
  {
    "word": "一挙に",
    "reading": "いっきょに",
    "meaning": "at a stroke, with a single swoop",
    "level": "1"
  },
  {
    "word": "一見",
    "reading": "いっけん",
    "meaning": "a look, a glimpse, glance; first meeting",
    "level": "1"
  },
  {
    "word": "一切",
    "reading": "いっさい",
    "meaning": "without exception, the whole",
    "level": "1"
  },
  {
    "word": "一心",
    "reading": "いっしん",
    "meaning": "one mind, with rapt attention",
    "level": "1"
  },
  {
    "word": "いっそ",
    "reading": "いっそ",
    "meaning": "rather, sooner, might as well",
    "level": "1"
  },
  {
    "word": "一変",
    "reading": "いっぺん",
    "meaning": "complete change",
    "level": "1"
  },
  {
    "word": "意図",
    "reading": "いと",
    "meaning": "intention, aim, design",
    "level": "1"
  },
  {
    "word": "営む",
    "reading": "いとなむ",
    "meaning": "to carry on (e.g., in ceremony), to run a business",
    "level": "1"
  },
  {
    "word": "挑む",
    "reading": "いどむ",
    "meaning": "to challenge",
    "level": "1"
  },
  {
    "word": "稲光",
    "reading": "いなびかり",
    "meaning": "(flash of) lightning",
    "level": "1"
  },
  {
    "word": "祈り",
    "reading": "いのり",
    "meaning": "prayer, supplication",
    "level": "1"
  },
  {
    "word": "いびき",
    "reading": "いびき",
    "meaning": "snoring",
    "level": "1"
  },
  {
    "word": "今更",
    "reading": "いまさら",
    "meaning": "now, again",
    "level": "1"
  },
  {
    "word": "未だ",
    "reading": "いまだ",
    "meaning": "yet, still",
    "level": "1"
  },
  {
    "word": "移民",
    "reading": "いみん",
    "meaning": "emigrant, immigrant",
    "level": "1"
  },
  {
    "word": "嫌々",
    "reading": "いやいや",
    "meaning": "reluctantly, by no means, unwillingly",
    "level": "1"
  },
  {
    "word": "卑しい",
    "reading": "いやしい",
    "meaning": "greedy, vulgar, shabby",
    "level": "1"
  },
  {
    "word": "いやに",
    "reading": "いやに",
    "meaning": "awfully, terribly",
    "level": "1"
  },
  {
    "word": "いやらしい",
    "reading": "いやらしい",
    "meaning": "unpleasant, disgusting, indecent",
    "level": "1"
  },
  {
    "word": "意欲",
    "reading": "いよく",
    "meaning": "will, desire, ambition",
    "level": "1"
  },
  {
    "word": "威力",
    "reading": "いりょく",
    "meaning": "power, might, authority",
    "level": "1"
  },
  {
    "word": "衣類",
    "reading": "いるい",
    "meaning": "clothes, clothing, garments",
    "level": "1"
  },
  {
    "word": "異論",
    "reading": "いろん",
    "meaning": "different opinion, objection",
    "level": "1"
  },
  {
    "word": "印鑑",
    "reading": "いんかん",
    "meaning": "stamp, seal",
    "level": "1"
  },
  {
    "word": "陰気",
    "reading": "いんき",
    "meaning": "gloom, melancholy",
    "level": "1"
  },
  {
    "word": "隠居",
    "reading": "いんきょ",
    "meaning": "retirement; retired person",
    "level": "1"
  },
  {
    "word": "インターチェンジ",
    "reading": "インターチェンジ",
    "meaning": "interchange",
    "level": "1"
  },
  {
    "word": "インターナショナル",
    "reading": "インターナショナル",
    "meaning": "international",
    "level": "1"
  },
  {
    "word": "インターフォン",
    "reading": "インターフォン",
    "meaning": "entry phone, intercom",
    "level": "1"
  },
  {
    "word": "インテリ",
    "reading": "インテリ",
    "meaning": "(abbr.) egghead, intelligentsia",
    "level": "1"
  },
  {
    "word": "インフォメーション",
    "reading": "インフォメーション",
    "meaning": "information",
    "level": "1"
  },
  {
    "word": "インフレ",
    "reading": "インフレ",
    "meaning": "(abbr.) inflation",
    "level": "1"
  },
  {
    "word": "受かる",
    "reading": "うかる",
    "meaning": "to pass (examination)",
    "level": "1"
  },
  {
    "word": "受け入れ",
    "reading": "うけいれ",
    "meaning": "receiving, acceptance",
    "level": "1"
  },
  {
    "word": "受け入れる",
    "reading": "うけいれる",
    "meaning": "to accept, to receive",
    "level": "1"
  },
  {
    "word": "受け継ぐ",
    "reading": "うけつぐ",
    "meaning": "to inherit, to succeed",
    "level": "1"
  },
  {
    "word": "受け付ける",
    "reading": "うけつける",
    "meaning": "to be accepted, to receive (an application)",
    "level": "1"
  },
  {
    "word": "受け止める",
    "reading": "うけとめる",
    "meaning": "to catch, to react to, to take",
    "level": "1"
  },
  {
    "word": "受身",
    "reading": "うけみ",
    "meaning": "passive, passive voice",
    "level": "1"
  },
  {
    "word": "受持ち",
    "reading": "うけもち",
    "meaning": "charge (of something), matter in one's charge",
    "level": "1"
  },
  {
    "word": "動き",
    "reading": "うごき",
    "meaning": "movement, activity, trend",
    "level": "1"
  },
  {
    "word": "埋める",
    "reading": "うずめる",
    "meaning": "to bury, to fill",
    "level": "1"
  },
  {
    "word": "嘘つき",
    "reading": "うそつき",
    "meaning": "liar",
    "level": "1"
  },
  {
    "word": "うたた寝",
    "reading": "うたたね",
    "meaning": "dozing, napping",
    "level": "1"
  },
  {
    "word": "打ち明ける",
    "reading": "うちあける",
    "meaning": "to confess, to be open",
    "level": "1"
  },
  {
    "word": "打ち切る",
    "reading": "うちきる",
    "meaning": "to stop, to abort, to discontinue, to close",
    "level": "1"
  },
  {
    "word": "打ち消し",
    "reading": "うちけし",
    "meaning": "(gram) negation, denial, negative",
    "level": "1"
  },
  {
    "word": "打ち込む",
    "reading": "うちこむ",
    "meaning": "to devote oneself to, to shoot into",
    "level": "1"
  },
  {
    "word": "団扇",
    "reading": "うちわ",
    "meaning": "fan",
    "level": "1"
  },
  {
    "word": "内訳",
    "reading": "うちわけ",
    "meaning": "the items, breakdown, classification",
    "level": "1"
  },
  {
    "word": "写し",
    "reading": "うつし",
    "meaning": "copy, duplicate",
    "level": "1"
  },
  {
    "word": "訴え",
    "reading": "うったえ",
    "meaning": "lawsuit, complaint",
    "level": "1"
  },
  {
    "word": "うっとうしい",
    "reading": "うっとうしい",
    "meaning": "weary, annoying",
    "level": "1"
  },
  {
    "word": "うつむく",
    "reading": "うつむく",
    "meaning": "to look downward, to stoop",
    "level": "1"
  },
  {
    "word": "空ろ",
    "reading": "うつろ",
    "meaning": "blank, hollow, empty",
    "level": "1"
  },
  {
    "word": "器",
    "reading": "うつわ",
    "meaning": "bowl, vessel, container",
    "level": "1"
  },
  {
    "word": "腕前",
    "reading": "うでまえ",
    "meaning": "ability, skill, facility",
    "level": "1"
  },
  {
    "word": "雨天",
    "reading": "うてん",
    "meaning": "rainy weather",
    "level": "1"
  },
  {
    "word": "促す",
    "reading": "うながす",
    "meaning": "to urge, to suggest, to demand",
    "level": "1"
  },
  {
    "word": "うぬぼれ",
    "reading": "うぬぼれ",
    "meaning": "pretension, conceit, hubris",
    "level": "1"
  },
  {
    "word": "生まれつき",
    "reading": "うまれつき",
    "meaning": "by nature, by birth, native",
    "level": "1"
  },
  {
    "word": "埋め込む",
    "reading": "うめこむ",
    "meaning": "to embed, implant",
    "level": "1"
  },
  {
    "word": "梅干し",
    "reading": "うめぼし",
    "meaning": "dried plum",
    "level": "1"
  },
  {
    "word": "裏返し",
    "reading": "うらがえし",
    "meaning": "inside out, reverse",
    "level": "1"
  },
  {
    "word": "売り出し",
    "reading": "うりだし",
    "meaning": "(bargain) sale",
    "level": "1"
  },
  {
    "word": "売り出す",
    "reading": "うりだす",
    "meaning": "to put on sale, to market",
    "level": "1"
  },
  {
    "word": "潤う",
    "reading": "うるおう",
    "meaning": "to be moist; to profit by",
    "level": "1"
  },
  {
    "word": "浮気",
    "reading": "うわき",
    "meaning": "affair, to cheat",
    "level": "1"
  },
  {
    "word": "上回る",
    "reading": "うわまわる",
    "meaning": "to exceed",
    "level": "1"
  },
  {
    "word": "植わる",
    "reading": "うわる",
    "meaning": "to be planted",
    "level": "1"
  },
  {
    "word": "運営",
    "reading": "うんえい",
    "meaning": "management, administration, operation",
    "level": "1"
  },
  {
    "word": "うんざり",
    "reading": "うんざり",
    "meaning": "tedious, boring, being fed up with",
    "level": "1"
  },
  {
    "word": "運送",
    "reading": "うんそう",
    "meaning": "shipping, freight",
    "level": "1"
  },
  {
    "word": "運賃",
    "reading": "うんちん",
    "meaning": "freight rates, shipping expenses, (passenger) fare",
    "level": "1"
  },
  {
    "word": "云々",
    "reading": "うんぬん",
    "meaning": "and so on, and so forth",
    "level": "1"
  },
  {
    "word": "運搬",
    "reading": "うんぱん",
    "meaning": "transport, carriage",
    "level": "1"
  },
  {
    "word": "運命",
    "reading": "うんめい",
    "meaning": "fate",
    "level": "1"
  },
  {
    "word": "運輸",
    "reading": "うんゆ",
    "meaning": "transportation",
    "level": "1"
  },
  {
    "word": "運用",
    "reading": "うんよう",
    "meaning": "making use of, application, practical use",
    "level": "1"
  },
  {
    "word": "エアメール",
    "reading": "エアメール",
    "meaning": "air mail",
    "level": "1"
  },
  {
    "word": "～営",
    "reading": "～えい",
    "meaning": "~ run",
    "level": "1"
  },
  {
    "word": "英字",
    "reading": "えいじ",
    "meaning": "English letter (character)",
    "level": "1"
  },
  {
    "word": "映写",
    "reading": "えいしゃ",
    "meaning": "projection",
    "level": "1"
  },
  {
    "word": "映像",
    "reading": "えいぞう",
    "meaning": "reflection, image",
    "level": "1"
  },
  {
    "word": "英雄",
    "reading": "えいゆう",
    "meaning": "hero, great man",
    "level": "1"
  },
  {
    "word": "液",
    "reading": "えき",
    "meaning": "liquid, fluid",
    "level": "1"
  },
  {
    "word": "閲覧",
    "reading": "えつらん",
    "meaning": "inspection, reference, browse",
    "level": "1"
  },
  {
    "word": "獲物",
    "reading": "えもの",
    "meaning": "game, spoils, trophy",
    "level": "1"
  },
  {
    "word": "襟",
    "reading": "えり",
    "meaning": "neck, collar",
    "level": "1"
  },
  {
    "word": "エレガント",
    "reading": "エレガント",
    "meaning": "elegant",
    "level": "1"
  },
  {
    "word": "円滑",
    "reading": "えんかつ",
    "meaning": "harmony, smoothness",
    "level": "1"
  },
  {
    "word": "縁側",
    "reading": "えんがわ",
    "meaning": "veranda, porch, balcony, open corridor",
    "level": "1"
  },
  {
    "word": "沿岸",
    "reading": "えんがん",
    "meaning": "coast, shore",
    "level": "1"
  },
  {
    "word": "婉曲",
    "reading": "えんきょく",
    "meaning": "euphemistic, indirect, insinuating",
    "level": "1"
  },
  {
    "word": "演出",
    "reading": "えんしゅつ",
    "meaning": "production (erg. play, direction)",
    "level": "1"
  },
  {
    "word": "エンジニア",
    "reading": "エンジニア",
    "meaning": "engineer",
    "level": "1"
  },
  {
    "word": "演じる",
    "reading": "えんじる",
    "meaning": "to perform, to play (a part), to act",
    "level": "1"
  },
  {
    "word": "演ずる",
    "reading": "えんずる",
    "meaning": "to perform, to play (a part), to act",
    "level": "1"
  },
  {
    "word": "沿線",
    "reading": "えんせん",
    "meaning": "along railway line",
    "level": "1"
  },
  {
    "word": "縁談",
    "reading": "えんだん",
    "meaning": "marriage proposal",
    "level": "1"
  },
  {
    "word": "遠方",
    "reading": "えんぽう",
    "meaning": "long way, distant place",
    "level": "1"
  },
  {
    "word": "円満",
    "reading": "えんまん",
    "meaning": "harmony, peace, smoothness",
    "level": "1"
  },
  {
    "word": "追い込む",
    "reading": "おいこむ",
    "meaning": "to herd, to corner, to drive",
    "level": "1"
  },
  {
    "word": "追い出す",
    "reading": "おいだす",
    "meaning": "to expel, to drive out",
    "level": "1"
  },
  {
    "word": "於いて",
    "reading": "おいて",
    "meaning": "at, in, on",
    "level": "1"
  },
  {
    "word": "老いる",
    "reading": "おいる",
    "meaning": "to age, to grow old",
    "level": "1"
  },
  {
    "word": "応急",
    "reading": "おうきゅう",
    "meaning": "emergency",
    "level": "1"
  },
  {
    "word": "黄金",
    "reading": "おうごん",
    "meaning": "gold",
    "level": "1"
  },
  {
    "word": "往診",
    "reading": "おうしん",
    "meaning": "doctor's visit, house call",
    "level": "1"
  },
  {
    "word": "応募",
    "reading": "おうぼ",
    "meaning": "subscription, application",
    "level": "1"
  },
  {
    "word": "おおい (かん)",
    "reading": "おおい (かん)",
    "meaning": "hey",
    "level": "1"
  },
  {
    "word": "大方",
    "reading": "おおかた",
    "meaning": "almost all, majority",
    "level": "1"
  },
  {
    "word": "大柄",
    "reading": "おおがら",
    "meaning": "large build, large pattern",
    "level": "1"
  },
  {
    "word": "おおげさ",
    "reading": "おおげさ",
    "meaning": "grandiose, exaggerated",
    "level": "1"
  },
  {
    "word": "大筋",
    "reading": "おおすじ",
    "meaning": "outline, summary",
    "level": "1"
  },
  {
    "word": "大空",
    "reading": "おおぞら",
    "meaning": "heaven, the sky",
    "level": "1"
  },
  {
    "word": "オートマチック",
    "reading": "オートマチック",
    "meaning": "automatic",
    "level": "1"
  },
  {
    "word": "大幅",
    "reading": "おおはば",
    "meaning": "full width, large scale, drastic",
    "level": "1"
  },
  {
    "word": "おおまかな",
    "reading": "おおまかな",
    "meaning": "rough, approximate",
    "level": "1"
  },
  {
    "word": "大水",
    "reading": "おおみず",
    "meaning": "flood",
    "level": "1"
  },
  {
    "word": "公",
    "reading": "おおやけ",
    "meaning": "public",
    "level": "1"
  },
  {
    "word": "犯す",
    "reading": "おかす",
    "meaning": "to perpetrate, to violate",
    "level": "1"
  },
  {
    "word": "侵す",
    "reading": "おかす",
    "meaning": "to invade, to raid, to trespass",
    "level": "1"
  },
  {
    "word": "臆病",
    "reading": "おくびょう",
    "meaning": "cowardice, timidity",
    "level": "1"
  },
  {
    "word": "遅らす",
    "reading": "おくらす",
    "meaning": "to retard, to delay",
    "level": "1"
  },
  {
    "word": "厳か",
    "reading": "おごそか",
    "meaning": "majestic, dignified",
    "level": "1"
  },
  {
    "word": "行い",
    "reading": "おこない",
    "meaning": "conduct, behavior, action",
    "level": "1"
  },
  {
    "word": "おごる (ゆうしょくを～)",
    "reading": "おごる (ゆうしょくを～)",
    "meaning": "to give (someone) a treat",
    "level": "1"
  },
  {
    "word": "収まる",
    "reading": "おさまる",
    "meaning": "to settle into; to be obtained",
    "level": "1"
  },
  {
    "word": "納まる",
    "reading": "おさまる",
    "meaning": "to settle into; to be obtained",
    "level": "1"
  },
  {
    "word": "治まる",
    "reading": "おさまる",
    "meaning": "to be at peace, to calm down",
    "level": "1"
  },
  {
    "word": "お産",
    "reading": "おさん",
    "meaning": "(giving) birth",
    "level": "1"
  },
  {
    "word": "押し切る",
    "reading": "おしきる",
    "meaning": "to have one's own way",
    "level": "1"
  },
  {
    "word": "押し込む",
    "reading": "おしこむ",
    "meaning": "to push into, to crowd into",
    "level": "1"
  },
  {
    "word": "惜しむ",
    "reading": "おしむ",
    "meaning": "to be frugal, to value, to regret",
    "level": "1"
  },
  {
    "word": "押し寄せる",
    "reading": "おしよせる",
    "meaning": "to push aside, to advance on",
    "level": "1"
  },
  {
    "word": "雄",
    "reading": "おす",
    "meaning": "male (animal)",
    "level": "1"
  },
  {
    "word": "御世辞",
    "reading": "おせじ",
    "meaning": "flattery, compliment",
    "level": "1"
  },
  {
    "word": "襲う",
    "reading": "おそう",
    "meaning": "to attack",
    "level": "1"
  },
  {
    "word": "遅くとも",
    "reading": "おそくとも",
    "meaning": "at the latest",
    "level": "1"
  },
  {
    "word": "恐れ",
    "reading": "おそれ",
    "meaning": "fear, horror",
    "level": "1"
  },
  {
    "word": "恐れ入る",
    "reading": "おそれいる",
    "meaning": "to be filled with awe, to feel small",
    "level": "1"
  },
  {
    "word": "おだてる",
    "reading": "おだてる",
    "meaning": "to flatter",
    "level": "1"
  },
  {
    "word": "落ち込む",
    "reading": "おちこむ",
    "meaning": "to get depressed",
    "level": "1"
  },
  {
    "word": "落ち着き",
    "reading": "おちつき",
    "meaning": "calm, composure",
    "level": "1"
  },
  {
    "word": "落葉",
    "reading": "おちば",
    "meaning": "fallen leaves",
    "level": "1"
  },
  {
    "word": "乙",
    "reading": "おつ",
    "meaning": "2nd in rank",
    "level": "1"
  },
  {
    "word": "お使い",
    "reading": "おつかい",
    "meaning": "errand",
    "level": "1"
  },
  {
    "word": "おっかない",
    "reading": "おっかない",
    "meaning": "frightening, scary",
    "level": "1"
  },
  {
    "word": "お手上げ",
    "reading": "おてあげ",
    "meaning": "given in, given up hope",
    "level": "1"
  },
  {
    "word": "おどおど",
    "reading": "おどおど",
    "meaning": "coweringly, hesitantly",
    "level": "1"
  },
  {
    "word": "脅す",
    "reading": "おどす",
    "meaning": "to threaten, to menace",
    "level": "1"
  },
  {
    "word": "訪れる",
    "reading": "おとずれる",
    "meaning": "to visit",
    "level": "1"
  },
  {
    "word": "お供",
    "reading": "おとも",
    "meaning": "attendant, companion",
    "level": "1"
  },
  {
    "word": "衰える",
    "reading": "おとろえる",
    "meaning": "to become weak, to decline",
    "level": "1"
  },
  {
    "word": "同い年",
    "reading": "おないどし",
    "meaning": "of the same age",
    "level": "1"
  },
  {
    "word": "自ずから",
    "reading": "おのずから",
    "meaning": "naturally, as a matter of course",
    "level": "1"
  },
  {
    "word": "怯える",
    "reading": "おびえる",
    "meaning": "to become frightened",
    "level": "1"
  },
  {
    "word": "おびただしい",
    "reading": "おびただしい",
    "meaning": "abundantly, innumerably",
    "level": "1"
  },
  {
    "word": "脅かす",
    "reading": "おびやかす",
    "meaning": "to threaten, to coerce",
    "level": "1"
  },
  {
    "word": "帯びる",
    "reading": "おびる",
    "meaning": "to bear, to carry, to be entrusted",
    "level": "1"
  },
  {
    "word": "お袋",
    "reading": "おふくろ",
    "meaning": "mother",
    "level": "1"
  },
  {
    "word": "覚え",
    "reading": "おぼえ",
    "meaning": "memory, sense, experience",
    "level": "1"
  },
  {
    "word": "おまけ",
    "reading": "おまけ",
    "meaning": "a discount; something additional",
    "level": "1"
  },
  {
    "word": "お宮",
    "reading": "おみや",
    "meaning": "Shinto shrine",
    "level": "1"
  },
  {
    "word": "おむつ",
    "reading": "おむつ",
    "meaning": "diaper, nappy",
    "level": "1"
  },
  {
    "word": "思い付き",
    "reading": "おもいつき",
    "meaning": "plan, idea, suggestion",
    "level": "1"
  },
  {
    "word": "趣",
    "reading": "おもむき",
    "meaning": "flavor, appearance, quaint",
    "level": "1"
  },
  {
    "word": "赴く",
    "reading": "おもむく",
    "meaning": "to go, to proceed",
    "level": "1"
  },
  {
    "word": "重んじる",
    "reading": "おもんじる",
    "meaning": "to respect, to honor, to esteem, to prize",
    "level": "1"
  },
  {
    "word": "重んずる",
    "reading": "おもんずる",
    "meaning": "to honor, to respect, to value",
    "level": "1"
  },
  {
    "word": "親父",
    "reading": "おやじ",
    "meaning": "one's father, old man, one's boss",
    "level": "1"
  },
  {
    "word": "及び",
    "reading": "および",
    "meaning": "and, as well as",
    "level": "1"
  },
  {
    "word": "及ぶ",
    "reading": "およぶ",
    "meaning": "to reach, to extend",
    "level": "1"
  },
  {
    "word": "折",
    "reading": "おり",
    "meaning": "chance, occasion",
    "level": "1"
  },
  {
    "word": "檻",
    "reading": "おり",
    "meaning": "cage, pen, jail cell",
    "level": "1"
  },
  {
    "word": "オリエンテーション",
    "reading": "オリエンテーション",
    "meaning": "orientation",
    "level": "1"
  },
  {
    "word": "折り返す",
    "reading": "おりかえす",
    "meaning": "to turn up, to fold back",
    "level": "1"
  },
  {
    "word": "織物",
    "reading": "おりもの",
    "meaning": "textile, fabric",
    "level": "1"
  },
  {
    "word": "俺",
    "reading": "おれ",
    "meaning": "I (ego) (boastful first-person pronoun)",
    "level": "1"
  },
  {
    "word": "愚か",
    "reading": "おろか",
    "meaning": "foolish, stupid",
    "level": "1"
  },
  {
    "word": "おろそか",
    "reading": "おろそか",
    "meaning": "neglect, negligence, carelessness",
    "level": "1"
  },
  {
    "word": "おんぶ",
    "reading": "おんぶ",
    "meaning": "carrying on one's back (erg. Baby)",
    "level": "1"
  },
  {
    "word": "オンライン",
    "reading": "オンライン",
    "meaning": "on-line",
    "level": "1"
  },
  {
    "word": "温和",
    "reading": "おんわ",
    "meaning": "gentle, mild, moderate",
    "level": "1"
  },
  {
    "word": "我",
    "reading": "が～",
    "meaning": "ego",
    "level": "1"
  },
  {
    "word": "カーペット",
    "reading": "カーペット",
    "meaning": "carpet",
    "level": "1"
  },
  {
    "word": "～界",
    "reading": "～かい",
    "meaning": "world, circle, kingdom",
    "level": "1"
  },
  {
    "word": "～街",
    "reading": "～がい",
    "meaning": "town",
    "level": "1"
  },
  {
    "word": "改悪",
    "reading": "かいあく",
    "meaning": "deterioration, changing for the worse",
    "level": "1"
  },
  {
    "word": "海運",
    "reading": "かいうん",
    "meaning": "marine transportation",
    "level": "1"
  },
  {
    "word": "外貨",
    "reading": "がいか",
    "meaning": "foreign money",
    "level": "1"
  },
  {
    "word": "改革",
    "reading": "かいかく",
    "meaning": "reform, reformation, innovation",
    "level": "1"
  },
  {
    "word": "貝殻",
    "reading": "かいがら",
    "meaning": "shell",
    "level": "1"
  },
  {
    "word": "外観",
    "reading": "がいかん",
    "meaning": "appearance, exterior, facade",
    "level": "1"
  },
  {
    "word": "階級",
    "reading": "かいきゅう",
    "meaning": "class, rank, grade",
    "level": "1"
  },
  {
    "word": "海峡",
    "reading": "かいきょう",
    "meaning": "channel",
    "level": "1"
  },
  {
    "word": "会見",
    "reading": "かいけん",
    "meaning": "interview, conference",
    "level": "1"
  },
  {
    "word": "介護",
    "reading": "かいご",
    "meaning": "nursing",
    "level": "1"
  },
  {
    "word": "開催",
    "reading": "かいさい",
    "meaning": "holding a meeting, open an exhibition",
    "level": "1"
  },
  {
    "word": "回収",
    "reading": "かいしゅう",
    "meaning": "collection, recovery",
    "level": "1"
  },
  {
    "word": "改修",
    "reading": "かいしゅう",
    "meaning": "repair, improvement",
    "level": "1"
  },
  {
    "word": "怪獣",
    "reading": "かいじゅう",
    "meaning": "monster",
    "level": "1"
  },
  {
    "word": "解除",
    "reading": "かいじょ",
    "meaning": "cancellation, release, cancel",
    "level": "1"
  },
  {
    "word": "外相",
    "reading": "がいしょう",
    "meaning": "Foreign Minister",
    "level": "1"
  },
  {
    "word": "害する",
    "reading": "がいする",
    "meaning": "to harm, to offend",
    "level": "1"
  },
  {
    "word": "概説",
    "reading": "がいせつ",
    "meaning": "general statement, outline",
    "level": "1"
  },
  {
    "word": "回送",
    "reading": "かいそう",
    "meaning": "forwarding",
    "level": "1"
  },
  {
    "word": "階層",
    "reading": "かいそう",
    "meaning": "class, level, stratum, hierarchy",
    "level": "1"
  },
  {
    "word": "開拓",
    "reading": "かいたく",
    "meaning": "cultivation, pioneer",
    "level": "1"
  },
  {
    "word": "会談",
    "reading": "かいだん",
    "meaning": "conversation, interview",
    "level": "1"
  },
  {
    "word": "改定",
    "reading": "かいてい",
    "meaning": "reform",
    "level": "1"
  },
  {
    "word": "改訂",
    "reading": "かいてい",
    "meaning": "revision",
    "level": "1"
  },
  {
    "word": "ガイド",
    "reading": "ガイド",
    "meaning": "guide",
    "level": "1"
  },
  {
    "word": "街道",
    "reading": "かいどう",
    "meaning": "highway",
    "level": "1"
  },
  {
    "word": "該当",
    "reading": "がいとう",
    "meaning": "corresponding, answering to, coming under",
    "level": "1"
  },
  {
    "word": "街頭",
    "reading": "がいとう",
    "meaning": "in the street",
    "level": "1"
  },
  {
    "word": "ガイドブック",
    "reading": "ガイドブック",
    "meaning": "guidebook",
    "level": "1"
  },
  {
    "word": "介入",
    "reading": "かいにゅう",
    "meaning": "intervention",
    "level": "1"
  },
  {
    "word": "概念",
    "reading": "がいねん",
    "meaning": "general idea, concept, notion",
    "level": "1"
  },
  {
    "word": "開発",
    "reading": "かいはつ",
    "meaning": "development, exploitation",
    "level": "1"
  },
  {
    "word": "海抜",
    "reading": "かいばつ",
    "meaning": "height above sea level",
    "level": "1"
  },
  {
    "word": "介抱",
    "reading": "かいほう",
    "meaning": "nursing, looking after",
    "level": "1"
  },
  {
    "word": "解剖",
    "reading": "かいぼう",
    "meaning": "dissection, autopsy",
    "level": "1"
  },
  {
    "word": "外来",
    "reading": "がいらい",
    "meaning": "(abbr.) imported, outpatient clinic",
    "level": "1"
  },
  {
    "word": "回覧",
    "reading": "かいらん",
    "meaning": "circulation",
    "level": "1"
  },
  {
    "word": "概略",
    "reading": "がいりゃく",
    "meaning": "outline, summary, gist",
    "level": "1"
  },
  {
    "word": "海流",
    "reading": "かいりゅう",
    "meaning": "ocean current",
    "level": "1"
  },
  {
    "word": "改良",
    "reading": "かいりょう",
    "meaning": "improvement, reform",
    "level": "1"
  },
  {
    "word": "回路",
    "reading": "かいろ",
    "meaning": "circuit (electric)",
    "level": "1"
  },
  {
    "word": "海路",
    "reading": "かいろ",
    "meaning": "sea route",
    "level": "1"
  },
  {
    "word": "省みる",
    "reading": "かえりみる",
    "meaning": "to reflect",
    "level": "1"
  },
  {
    "word": "顧みる",
    "reading": "かえりみる",
    "meaning": "to look back, to turn around, to review",
    "level": "1"
  },
  {
    "word": "顔付き",
    "reading": "かおつき",
    "meaning": "facial expression",
    "level": "1"
  },
  {
    "word": "課外",
    "reading": "かがい",
    "meaning": "extracurricular",
    "level": "1"
  },
  {
    "word": "掲げる",
    "reading": "かかげる",
    "meaning": "to hoist, to fly (a sail), to float (a flag)",
    "level": "1"
  },
  {
    "word": "かかと",
    "reading": "かかと",
    "meaning": "shoe heel",
    "level": "1"
  },
  {
    "word": "書き取る",
    "reading": "かきとる",
    "meaning": "to write down, to take dictation",
    "level": "1"
  },
  {
    "word": "掻き回す",
    "reading": "かきまわす",
    "meaning": "to stir up, to churn, to disturb",
    "level": "1"
  },
  {
    "word": "かく (はじを)",
    "reading": "かく (はじを)",
    "meaning": "to humiliate oneself",
    "level": "1"
  },
  {
    "word": "～画",
    "reading": "～かく",
    "meaning": "~ strokes",
    "level": "1"
  },
  {
    "word": "学芸",
    "reading": "がくげい",
    "meaning": "arts and sciences, liberal arts",
    "level": "1"
  },
  {
    "word": "格差",
    "reading": "かくさ",
    "meaning": "difference, disparity",
    "level": "1"
  },
  {
    "word": "拡散",
    "reading": "かくさん",
    "meaning": "scattering, diffusion",
    "level": "1"
  },
  {
    "word": "学士",
    "reading": "がくし",
    "meaning": "university graduate",
    "level": "1"
  },
  {
    "word": "各種",
    "reading": "かくしゅ",
    "meaning": "every kind, all sorts",
    "level": "1"
  },
  {
    "word": "隔週",
    "reading": "かくしゅう",
    "meaning": "every other week",
    "level": "1"
  },
  {
    "word": "確信",
    "reading": "かくしん",
    "meaning": "conviction, confidence",
    "level": "1"
  },
  {
    "word": "革新",
    "reading": "かくしん",
    "meaning": "reform, innovation",
    "level": "1"
  },
  {
    "word": "学説",
    "reading": "がくせつ",
    "meaning": "theory",
    "level": "1"
  },
  {
    "word": "確定",
    "reading": "かくてい",
    "meaning": "fixed, decision",
    "level": "1"
  },
  {
    "word": "カクテル",
    "reading": "カクテル",
    "meaning": "cocktail",
    "level": "1"
  },
  {
    "word": "獲得",
    "reading": "かくとく",
    "meaning": "acquisition, possession",
    "level": "1"
  },
  {
    "word": "楽譜",
    "reading": "がくふ",
    "meaning": "score (music, sheet music)",
    "level": "1"
  },
  {
    "word": "確保",
    "reading": "かくほ",
    "meaning": "guarantee, insure, secure",
    "level": "1"
  },
  {
    "word": "革命",
    "reading": "かくめい",
    "meaning": "revolution",
    "level": "1"
  },
  {
    "word": "確立",
    "reading": "かくりつ",
    "meaning": "establishment",
    "level": "1"
  },
  {
    "word": "賭",
    "reading": "かけ",
    "meaning": "betting, gambling, a gamble",
    "level": "1"
  },
  {
    "word": "掛～",
    "reading": "かけ～",
    "meaning": "credit",
    "level": "1"
  },
  {
    "word": "～掛け",
    "reading": "～かけ",
    "meaning": "rack, hanger",
    "level": "1"
  },
  {
    "word": "崖",
    "reading": "がけ",
    "meaning": "cliff",
    "level": "1"
  },
  {
    "word": "駆け足",
    "reading": "かけあし",
    "meaning": "running fast, double time",
    "level": "1"
  },
  {
    "word": "家計",
    "reading": "かけい",
    "meaning": "household economy, family finances",
    "level": "1"
  },
  {
    "word": "駆けっこ",
    "reading": "かけっこ",
    "meaning": "(foot) race",
    "level": "1"
  },
  {
    "word": "加工",
    "reading": "かこう",
    "meaning": "manufacturing, processing, treatment",
    "level": "1"
  },
  {
    "word": "化合",
    "reading": "かごう",
    "meaning": "chemical combination",
    "level": "1"
  },
  {
    "word": "かさばる",
    "reading": "かさばる",
    "meaning": "to be bulky",
    "level": "1"
  },
  {
    "word": "かさむ",
    "reading": "かさむ",
    "meaning": "to pile up, to increase",
    "level": "1"
  },
  {
    "word": "箇条書",
    "reading": "かじょうがき",
    "meaning": "itemized form, itemization",
    "level": "1"
  },
  {
    "word": "頭",
    "reading": "かしら",
    "meaning": "head, chief",
    "level": "1"
  },
  {
    "word": "微か",
    "reading": "かすか",
    "meaning": "faint, dim, weak",
    "level": "1"
  },
  {
    "word": "霞む",
    "reading": "かすむ",
    "meaning": "to grow hazy, to be misty",
    "level": "1"
  },
  {
    "word": "擦る",
    "reading": "かする",
    "meaning": "to rub, to chafe",
    "level": "1"
  },
  {
    "word": "火星",
    "reading": "かせい",
    "meaning": "Mars",
    "level": "1"
  },
  {
    "word": "化石",
    "reading": "かせき",
    "meaning": "fossil, petrifaction, fossilization",
    "level": "1"
  },
  {
    "word": "河川",
    "reading": "かせん",
    "meaning": "rivers",
    "level": "1"
  },
  {
    "word": "化繊",
    "reading": "かせん",
    "meaning": "synthetic fibers",
    "level": "1"
  },
  {
    "word": "過疎",
    "reading": "かそ",
    "meaning": "depopulation",
    "level": "1"
  },
  {
    "word": "片～",
    "reading": "かた～",
    "meaning": "single ~",
    "level": "1"
  },
  {
    "word": "片言",
    "reading": "かたこと",
    "meaning": "broken (in reference to speaking style, e.g., Japanese)",
    "level": "1"
  },
  {
    "word": "傾ける",
    "reading": "かたむける",
    "meaning": "to incline, to tilt, to bend",
    "level": "1"
  },
  {
    "word": "固める",
    "reading": "かためる",
    "meaning": "to harden, to freeze, to fortify",
    "level": "1"
  },
  {
    "word": "傍ら",
    "reading": "かたわら",
    "meaning": "beside(s, while, nearby",
    "level": "1"
  },
  {
    "word": "花壇",
    "reading": "かだん",
    "meaning": "flower bed",
    "level": "1"
  },
  {
    "word": "家畜",
    "reading": "かちく",
    "meaning": "domestic animals, livestock, cattle",
    "level": "1"
  },
  {
    "word": "且つ",
    "reading": "かつ",
    "meaning": "yet, and",
    "level": "1"
  },
  {
    "word": "がっくり",
    "reading": "がっくり",
    "meaning": "heartbroken",
    "level": "1"
  },
  {
    "word": "合唱",
    "reading": "がっしょう",
    "meaning": "chorus, singing in a chorus",
    "level": "1"
  },
  {
    "word": "がっしり",
    "reading": "がっしり",
    "meaning": "firmly, solidly, tough",
    "level": "1"
  },
  {
    "word": "合致",
    "reading": "がっち",
    "meaning": "agreement, concurrence, conforming to",
    "level": "1"
  },
  {
    "word": "がっちり",
    "reading": "がっちり",
    "meaning": "solidly built, tightly",
    "level": "1"
  },
  {
    "word": "かつて",
    "reading": "かつて",
    "meaning": "once, before, formerly",
    "level": "1"
  },
  {
    "word": "勝手",
    "reading": "かって",
    "meaning": "kitchen; one's way, selfishness",
    "level": "1"
  },
  {
    "word": "カット",
    "reading": "カット",
    "meaning": "cut, cutting",
    "level": "1"
  },
  {
    "word": "活発",
    "reading": "かっぱつ",
    "meaning": "vigor, active",
    "level": "1"
  },
  {
    "word": "合併",
    "reading": "がっぺい",
    "meaning": "combination, amalgamation, merger",
    "level": "1"
  },
  {
    "word": "カテゴリー",
    "reading": "カテゴリー",
    "meaning": "category",
    "level": "1"
  },
  {
    "word": "叶う",
    "reading": "かなう",
    "meaning": "to come true",
    "level": "1"
  },
  {
    "word": "叶える",
    "reading": "かなえる",
    "meaning": "to grant (request, wish)",
    "level": "1"
  },
  {
    "word": "金槌",
    "reading": "かなづち",
    "meaning": "(iron) hammer",
    "level": "1"
  },
  {
    "word": "かなわない",
    "reading": "かなわない",
    "meaning": "be beyond one's power, be unable",
    "level": "1"
  },
  {
    "word": "加入",
    "reading": "かにゅう",
    "meaning": "becoming a member, admission",
    "level": "1"
  },
  {
    "word": "予て",
    "reading": "かねて",
    "meaning": "previously, already, lately",
    "level": "1"
  },
  {
    "word": "庇う",
    "reading": "かばう",
    "meaning": "to protect someone, to&nbsp;&nbsp;cover up for someone",
    "level": "1"
  },
  {
    "word": "株式",
    "reading": "かぶしき",
    "meaning": "stock",
    "level": "1"
  },
  {
    "word": "かぶれる",
    "reading": "かぶれる",
    "meaning": "to react to; to be influenced by",
    "level": "1"
  },
  {
    "word": "花粉",
    "reading": "かふん",
    "meaning": "pollen",
    "level": "1"
  },
  {
    "word": "貨幣",
    "reading": "かへい",
    "meaning": "money, currency, coinage",
    "level": "1"
  },
  {
    "word": "構える",
    "reading": "かまえる",
    "meaning": "to set up",
    "level": "1"
  },
  {
    "word": "過密",
    "reading": "かみつ",
    "meaning": "crowded",
    "level": "1"
  },
  {
    "word": "噛み切る",
    "reading": "かみきる",
    "meaning": "to bite off, to gnaw through",
    "level": "1"
  },
  {
    "word": "カムバック",
    "reading": "カムバック",
    "meaning": "comeback",
    "level": "1"
  },
  {
    "word": "カメラマン",
    "reading": "カメラマン",
    "meaning": "cameraman",
    "level": "1"
  },
  {
    "word": "粥",
    "reading": "かゆ",
    "meaning": "rice porridge",
    "level": "1"
  },
  {
    "word": "体付き",
    "reading": "からだつき",
    "meaning": "body build, figure",
    "level": "1"
  },
  {
    "word": "絡む",
    "reading": "からむ",
    "meaning": "to entangle, to entwine",
    "level": "1"
  },
  {
    "word": "かりに",
    "reading": "かりに",
    "meaning": "temporarily; if, for argument's sake",
    "level": "1"
  },
  {
    "word": "カルテ",
    "reading": "カルテ",
    "meaning": "clinical records (GER: Karte)",
    "level": "1"
  },
  {
    "word": "ガレージ",
    "reading": "ガレージ",
    "meaning": "garage (at house)",
    "level": "1"
  },
  {
    "word": "過労",
    "reading": "かろう",
    "meaning": "overwork, strain",
    "level": "1"
  },
  {
    "word": "かろうじて",
    "reading": "かろうじて",
    "meaning": "barely, narrowly",
    "level": "1"
  },
  {
    "word": "交す",
    "reading": "かわす",
    "meaning": "to exchange",
    "level": "1"
  },
  {
    "word": "代る代る",
    "reading": "かわるがわる",
    "meaning": "alternately",
    "level": "1"
  },
  {
    "word": "簡易",
    "reading": "かんい",
    "meaning": "simplicity, easiness, quasi-",
    "level": "1"
  },
  {
    "word": "灌漑",
    "reading": "かんがい",
    "meaning": "irrigation",
    "level": "1"
  },
  {
    "word": "眼科",
    "reading": "がんか",
    "meaning": "ophthalmology",
    "level": "1"
  },
  {
    "word": "眼球",
    "reading": "がんきゅう",
    "meaning": "eyeball",
    "level": "1"
  },
  {
    "word": "玩具",
    "reading": "がんぐ",
    "meaning": "toy",
    "level": "1"
  },
  {
    "word": "簡潔",
    "reading": "かんけつ",
    "meaning": "brevity, concise, simple",
    "level": "1"
  },
  {
    "word": "還元",
    "reading": "かんげん",
    "meaning": "resolution, reduction, return",
    "level": "1"
  },
  {
    "word": "看護",
    "reading": "かんご",
    "meaning": "nursing",
    "level": "1"
  },
  {
    "word": "漢語",
    "reading": "かんご",
    "meaning": "Chinese word, Sino-Japanese word",
    "level": "1"
  },
  {
    "word": "頑固",
    "reading": "がんこ",
    "meaning": "stubbornness, obstinacy",
    "level": "1"
  },
  {
    "word": "勧告",
    "reading": "かんこく",
    "meaning": "advice, counsel",
    "level": "1"
  },
  {
    "word": "換算",
    "reading": "かんさん",
    "meaning": "conversion, change, exchange",
    "level": "1"
  },
  {
    "word": "監視",
    "reading": "かんし",
    "meaning": "observation, guarding, surveillance",
    "level": "1"
  },
  {
    "word": "慣習",
    "reading": "かんしゅう",
    "meaning": "usual (historical) custom",
    "level": "1"
  },
  {
    "word": "観衆",
    "reading": "かんしゅう",
    "meaning": "spectators, audience",
    "level": "1"
  },
  {
    "word": "願書",
    "reading": "がんしょ",
    "meaning": "application form",
    "level": "1"
  },
  {
    "word": "干渉",
    "reading": "かんしょう",
    "meaning": "interference, intervention",
    "level": "1"
  },
  {
    "word": "頑丈",
    "reading": "がんじょう",
    "meaning": "solid, firm, strong",
    "level": "1"
  },
  {
    "word": "感触",
    "reading": "かんしょく",
    "meaning": "sense of touch, feeling, sensation",
    "level": "1"
  },
  {
    "word": "肝心",
    "reading": "かんじん",
    "meaning": "essential, fundamental, crucial",
    "level": "1"
  },
  {
    "word": "肝腎",
    "reading": "かんじん",
    "meaning": "essential, fundamental, crucial",
    "level": "1"
  },
  {
    "word": "関税",
    "reading": "かんぜい",
    "meaning": "customs, duty, tariff",
    "level": "1"
  },
  {
    "word": "岩石",
    "reading": "がんせき",
    "meaning": "rock",
    "level": "1"
  },
  {
    "word": "感染",
    "reading": "かんせん",
    "meaning": "infection, contagion",
    "level": "1"
  },
  {
    "word": "幹線",
    "reading": "かんせん",
    "meaning": "main line, trunk line",
    "level": "1"
  },
  {
    "word": "簡素",
    "reading": "かんそ",
    "meaning": "simplicity, plain",
    "level": "1"
  },
  {
    "word": "観点",
    "reading": "かんてん",
    "meaning": "point of view",
    "level": "1"
  },
  {
    "word": "感度",
    "reading": "かんど",
    "meaning": "sensitivity, severity (quake)",
    "level": "1"
  },
  {
    "word": "カンニング",
    "reading": "カンニング",
    "meaning": "cunning, cheat",
    "level": "1"
  },
  {
    "word": "元年",
    "reading": "がんねん",
    "meaning": "first year (of a specific reign)",
    "level": "1"
  },
  {
    "word": "幹部",
    "reading": "かんぶ",
    "meaning": "management, executive",
    "level": "1"
  },
  {
    "word": "完ぺき",
    "reading": "かんぺき",
    "meaning": "perfection, completeness, flawless",
    "level": "1"
  },
  {
    "word": "勘弁",
    "reading": "かんべん",
    "meaning": "pardon, forgiveness, forbearance",
    "level": "1"
  },
  {
    "word": "感無量",
    "reading": "かんむりょう",
    "meaning": "deep feeling, filled with emotion",
    "level": "1"
  },
  {
    "word": "勧誘",
    "reading": "かんゆう",
    "meaning": "invitation, canvassing, inducement",
    "level": "1"
  },
  {
    "word": "関与",
    "reading": "かんよ",
    "meaning": "participation, taking part in",
    "level": "1"
  },
  {
    "word": "寛容",
    "reading": "かんよう",
    "meaning": "forbearance, tolerance, generosity, involvement",
    "level": "1"
  },
  {
    "word": "元来",
    "reading": "がんらい",
    "meaning": "originally, naturally",
    "level": "1"
  },
  {
    "word": "観覧",
    "reading": "かんらん",
    "meaning": "viewing",
    "level": "1"
  },
  {
    "word": "慣例",
    "reading": "かんれい",
    "meaning": "custom, precedent, of convention",
    "level": "1"
  },
  {
    "word": "還暦",
    "reading": "かんれき",
    "meaning": "60th birthday",
    "level": "1"
  },
  {
    "word": "貫禄",
    "reading": "かんろく",
    "meaning": "presence, dignity",
    "level": "1"
  },
  {
    "word": "緩和",
    "reading": "かんわ",
    "meaning": "relief, mitigation",
    "level": "1"
  },
  {
    "word": "議案",
    "reading": "ぎあん",
    "meaning": "legislative bill",
    "level": "1"
  },
  {
    "word": "危害",
    "reading": "きがい",
    "meaning": "injury, harm, danger",
    "level": "1"
  },
  {
    "word": "企画",
    "reading": "きかく",
    "meaning": "planning, project",
    "level": "1"
  },
  {
    "word": "規格",
    "reading": "きかく",
    "meaning": "standard, norm",
    "level": "1"
  },
  {
    "word": "着飾る",
    "reading": "きかざる",
    "meaning": "to dress up",
    "level": "1"
  },
  {
    "word": "気兼ね",
    "reading": "きがね",
    "meaning": "hesitance, diffidence, feeling constraint",
    "level": "1"
  },
  {
    "word": "気軽",
    "reading": "きがる",
    "meaning": "cheerful, buoyant, lighthearted",
    "level": "1"
  },
  {
    "word": "危機",
    "reading": "きき",
    "meaning": "crisis",
    "level": "1"
  },
  {
    "word": "聞き取り",
    "reading": "ききとり",
    "meaning": "listening comprehension",
    "level": "1"
  },
  {
    "word": "効き目",
    "reading": "ききめ",
    "meaning": "effect, virtue, efficacy",
    "level": "1"
  },
  {
    "word": "帰京",
    "reading": "ききょう",
    "meaning": "returning to Tokyo",
    "level": "1"
  },
  {
    "word": "戯曲",
    "reading": "ぎきょく",
    "meaning": "play, drama",
    "level": "1"
  },
  {
    "word": "基金",
    "reading": "ききん",
    "meaning": "fund, foundation",
    "level": "1"
  },
  {
    "word": "喜劇",
    "reading": "きげき",
    "meaning": "comedy, funny show",
    "level": "1"
  },
  {
    "word": "議決",
    "reading": "ぎけつ",
    "meaning": "resolution, decision, vote",
    "level": "1"
  },
  {
    "word": "棄権",
    "reading": "きけん",
    "meaning": "abstain from voting, renunciation of a right",
    "level": "1"
  },
  {
    "word": "既婚",
    "reading": "きこん",
    "meaning": "married",
    "level": "1"
  },
  {
    "word": "気障",
    "reading": "きざ",
    "meaning": "affectation, conceit, snobbery",
    "level": "1"
  },
  {
    "word": "記載",
    "reading": "きさい",
    "meaning": "mention, entry",
    "level": "1"
  },
  {
    "word": "兆",
    "reading": "きざし",
    "meaning": "sign, omen, indication",
    "level": "1"
  },
  {
    "word": "気質",
    "reading": "きしつ",
    "meaning": "character, trait, temperament",
    "level": "1"
  },
  {
    "word": "期日",
    "reading": "きじつ",
    "meaning": "fixed date, settlement date",
    "level": "1"
  },
  {
    "word": "きしむ",
    "reading": "きしむ",
    "meaning": "to jar, to creak, to grate",
    "level": "1"
  },
  {
    "word": "議事堂",
    "reading": "ぎじどう",
    "meaning": "Diet building",
    "level": "1"
  },
  {
    "word": "記述",
    "reading": "きじゅつ",
    "meaning": "describing, descriptor",
    "level": "1"
  },
  {
    "word": "気象",
    "reading": "きしょう",
    "meaning": "weather, climate",
    "level": "1"
  },
  {
    "word": "傷付く",
    "reading": "きずつく",
    "meaning": "to be hurt, to be wounded, to get injured",
    "level": "1"
  },
  {
    "word": "傷付ける",
    "reading": "きずつける",
    "meaning": "to wound, to hurt someone's feelings",
    "level": "1"
  },
  {
    "word": "犠牲",
    "reading": "ぎせい",
    "meaning": "sacrifice",
    "level": "1"
  },
  {
    "word": "汽船",
    "reading": "きせん",
    "meaning": "steamship",
    "level": "1"
  },
  {
    "word": "寄贈",
    "reading": "きぞう",
    "meaning": "donation, presentation",
    "level": "1"
  },
  {
    "word": "偽造",
    "reading": "ぎぞう",
    "meaning": "forgery, fabrication, counterfeiting",
    "level": "1"
  },
  {
    "word": "貴族",
    "reading": "きぞく",
    "meaning": "noble, aristocrat",
    "level": "1"
  },
  {
    "word": "議題",
    "reading": "ぎだい",
    "meaning": "topic of discussion, agenda",
    "level": "1"
  },
  {
    "word": "鍛える",
    "reading": "きたえる",
    "meaning": "to forge, to train, to discipline",
    "level": "1"
  },
  {
    "word": "気立て",
    "reading": "きだて",
    "meaning": "good-natured, kind-hearted",
    "level": "1"
  },
  {
    "word": "来る",
    "reading": "きたる",
    "meaning": "to come, to approach,",
    "level": "1"
  },
  {
    "word": "きちっと",
    "reading": "きちっと",
    "meaning": "exactly, perfectly",
    "level": "1"
  },
  {
    "word": "几帳面",
    "reading": "きちょうめん",
    "meaning": "methodical, punctual, steady",
    "level": "1"
  },
  {
    "word": "きっかり",
    "reading": "きっかり",
    "meaning": "exactly, precisely",
    "level": "1"
  },
  {
    "word": "きっちり",
    "reading": "きっちり",
    "meaning": "precisely, tightly",
    "level": "1"
  },
  {
    "word": "きっぱり",
    "reading": "きっぱり",
    "meaning": "clearly, plainly, distinctly",
    "level": "1"
  },
  {
    "word": "規定",
    "reading": "きてい",
    "meaning": "regulation, provisions",
    "level": "1"
  },
  {
    "word": "起点",
    "reading": "きてん",
    "meaning": "starting point",
    "level": "1"
  },
  {
    "word": "軌道",
    "reading": "きどう",
    "meaning": "orbit; track",
    "level": "1"
  },
  {
    "word": "技能",
    "reading": "ぎのう",
    "meaning": "technical skill, ability, capacity",
    "level": "1"
  },
  {
    "word": "規範",
    "reading": "きはん",
    "meaning": "model, standard, example",
    "level": "1"
  },
  {
    "word": "気品",
    "reading": "きひん",
    "meaning": "grace, elegance",
    "level": "1"
  },
  {
    "word": "気風",
    "reading": "きふう",
    "meaning": "character, traits, ethos",
    "level": "1"
  },
  {
    "word": "起伏",
    "reading": "きふく",
    "meaning": "undulation",
    "level": "1"
  },
  {
    "word": "規模",
    "reading": "きぼ",
    "meaning": "scale, scope, plan, structure",
    "level": "1"
  },
  {
    "word": "気まぐれ",
    "reading": "きまぐれ",
    "meaning": "whim, caprice, uneven temper",
    "level": "1"
  },
  {
    "word": "生真面目",
    "reading": "きまじめ",
    "meaning": "serious, sincerity",
    "level": "1"
  },
  {
    "word": "期末",
    "reading": "きまつ",
    "meaning": "(end of the season or term)",
    "level": "1"
  },
  {
    "word": "きまりわるい",
    "reading": "きまりわるい",
    "meaning": "feeling awkward, being ashamed",
    "level": "1"
  },
  {
    "word": "記名",
    "reading": "きめい",
    "meaning": "signature, register",
    "level": "1"
  },
  {
    "word": "規約",
    "reading": "きやく",
    "meaning": "agreement, rules, code",
    "level": "1"
  },
  {
    "word": "脚色",
    "reading": "きゃくしょく",
    "meaning": "dramatization (e.g., film",
    "level": "1"
  },
  {
    "word": "逆転",
    "reading": "ぎゃくてん",
    "meaning": "(sudden) change, reversal, turn-around",
    "level": "1"
  },
  {
    "word": "脚本",
    "reading": "きゃくほん",
    "meaning": "scenario",
    "level": "1"
  },
  {
    "word": "華奢",
    "reading": "きゃしゃ",
    "meaning": "delicate, slender",
    "level": "1"
  },
  {
    "word": "客観",
    "reading": "きゃっかん",
    "meaning": "objective",
    "level": "1"
  },
  {
    "word": "キャッチ",
    "reading": "キャッチ",
    "meaning": "catch",
    "level": "1"
  },
  {
    "word": "キャリア",
    "reading": "キャリア",
    "meaning": "career, career government employee",
    "level": "1"
  },
  {
    "word": "救援",
    "reading": "きゅうえん",
    "meaning": "relief, rescue, reinforcement",
    "level": "1"
  },
  {
    "word": "休学",
    "reading": "きゅうがく",
    "meaning": "temporary absence from school, suspension",
    "level": "1"
  },
  {
    "word": "究極",
    "reading": "きゅうきょく",
    "meaning": "ultimate, final, eventual",
    "level": "1"
  },
  {
    "word": "窮屈",
    "reading": "きゅうくつ",
    "meaning": "narrow, tight, formal",
    "level": "1"
  },
  {
    "word": "球根",
    "reading": "きゅうこん",
    "meaning": "(plant) bulb",
    "level": "1"
  },
  {
    "word": "救済",
    "reading": "きゅうさい",
    "meaning": "relief, aid, rescue",
    "level": "1"
  },
  {
    "word": "給仕",
    "reading": "きゅうじ",
    "meaning": "waiter",
    "level": "1"
  },
  {
    "word": "給食",
    "reading": "きゅうしょく",
    "meaning": "school lunch, providing a meal",
    "level": "1"
  },
  {
    "word": "休戦",
    "reading": "きゅうせん",
    "meaning": "truce, armistice",
    "level": "1"
  },
  {
    "word": "宮殿",
    "reading": "きゅうでん",
    "meaning": "palace",
    "level": "1"
  },
  {
    "word": "旧知",
    "reading": "きゅうち",
    "meaning": "old friend, old friendship",
    "level": "1"
  },
  {
    "word": "窮乏",
    "reading": "きゅうぼう",
    "meaning": "poverty",
    "level": "1"
  },
  {
    "word": "寄与",
    "reading": "きよ",
    "meaning": "contribution, service",
    "level": "1"
  },
  {
    "word": "強",
    "reading": "きょう",
    "meaning": "strong",
    "level": "1"
  },
  {
    "word": "～狂",
    "reading": "～きょう",
    "meaning": "maniac, fan, freak",
    "level": "1"
  },
  {
    "word": "驚異",
    "reading": "きょうい",
    "meaning": "wonder, miracle",
    "level": "1"
  },
  {
    "word": "教科",
    "reading": "きょうか",
    "meaning": "subject, curriculum",
    "level": "1"
  },
  {
    "word": "協会",
    "reading": "きょうかい",
    "meaning": "association, society, organization",
    "level": "1"
  },
  {
    "word": "共学",
    "reading": "きょうがく",
    "meaning": "coeducation",
    "level": "1"
  },
  {
    "word": "共感",
    "reading": "きょうかん",
    "meaning": "sympathy, response",
    "level": "1"
  },
  {
    "word": "境遇",
    "reading": "きょうぐう",
    "meaning": "environment, circumstances",
    "level": "1"
  },
  {
    "word": "教訓",
    "reading": "きょうくん",
    "meaning": "lesson, precept, moral instruction",
    "level": "1"
  },
  {
    "word": "強行",
    "reading": "きょうこう",
    "meaning": "forcing, enforcement",
    "level": "1"
  },
  {
    "word": "強硬",
    "reading": "きょうこう",
    "meaning": "firm, vigorous, stubborn",
    "level": "1"
  },
  {
    "word": "教材",
    "reading": "きょうざい",
    "meaning": "teaching materials",
    "level": "1"
  },
  {
    "word": "凶作",
    "reading": "きょうさく",
    "meaning": "bad harvest, poor crop",
    "level": "1"
  },
  {
    "word": "業者",
    "reading": "ぎょうしゃ",
    "meaning": "trader, merchant",
    "level": "1"
  },
  {
    "word": "教習",
    "reading": "きょうしゅう",
    "meaning": "training, instruction",
    "level": "1"
  },
  {
    "word": "郷愁",
    "reading": "きょうしゅう",
    "meaning": "nostalgia, homesickness",
    "level": "1"
  },
  {
    "word": "教職",
    "reading": "きょうしょく",
    "meaning": "teaching profession",
    "level": "1"
  },
  {
    "word": "興じる",
    "reading": "きょうじる",
    "meaning": "to amuse oneself, to make merry",
    "level": "1"
  },
  {
    "word": "強制",
    "reading": "きょうせい",
    "meaning": "obligation, compulsion, enforcement",
    "level": "1"
  },
  {
    "word": "行政",
    "reading": "ぎょうせい",
    "meaning": "administration",
    "level": "1"
  },
  {
    "word": "業績",
    "reading": "ぎょうせき",
    "meaning": "achievement, work, contribution",
    "level": "1"
  },
  {
    "word": "共存",
    "reading": "きょうぞん",
    "meaning": "coexistence",
    "level": "1"
  },
  {
    "word": "協定",
    "reading": "きょうてい",
    "meaning": "arrangement, pact, agreement",
    "level": "1"
  },
  {
    "word": "郷土",
    "reading": "きょうど",
    "meaning": "homeland",
    "level": "1"
  },
  {
    "word": "脅迫",
    "reading": "きょうはく",
    "meaning": "threat, coercion",
    "level": "1"
  },
  {
    "word": "業務",
    "reading": "ぎょうむ",
    "meaning": "business, duties, work",
    "level": "1"
  },
  {
    "word": "共鳴",
    "reading": "きょうめい",
    "meaning": "resonance, sympathy",
    "level": "1"
  },
  {
    "word": "郷里",
    "reading": "きょうり",
    "meaning": "birth-place, home town",
    "level": "1"
  },
  {
    "word": "強烈",
    "reading": "きょうれつ",
    "meaning": "strong, intense, severe",
    "level": "1"
  },
  {
    "word": "共和",
    "reading": "きょうわ",
    "meaning": "republicanism, cooperation",
    "level": "1"
  },
  {
    "word": "局限",
    "reading": "きょくげん",
    "meaning": "limit, localize",
    "level": "1"
  },
  {
    "word": "極端",
    "reading": "きょくたん",
    "meaning": "extreme, extremity",
    "level": "1"
  },
  {
    "word": "居住",
    "reading": "きょじゅう",
    "meaning": "residence",
    "level": "1"
  },
  {
    "word": "拒絶",
    "reading": "きょぜつ",
    "meaning": "refusal, rejection",
    "level": "1"
  },
  {
    "word": "漁船",
    "reading": "ぎょせん",
    "meaning": "fishing boat",
    "level": "1"
  },
  {
    "word": "漁村",
    "reading": "ぎょそん",
    "meaning": "fishing village",
    "level": "1"
  },
  {
    "word": "拒否",
    "reading": "きょひ",
    "meaning": "denial, rejection, refusal",
    "level": "1"
  },
  {
    "word": "許容",
    "reading": "きょよう",
    "meaning": "permission, pardon",
    "level": "1"
  },
  {
    "word": "清らか",
    "reading": "きよらか",
    "meaning": "clean, pure, chaste",
    "level": "1"
  },
  {
    "word": "きらびやか",
    "reading": "きらびやか",
    "meaning": "gorgeous, gaudy, dazzling",
    "level": "1"
  },
  {
    "word": "～きり",
    "reading": "～きり",
    "meaning": "only",
    "level": "1"
  },
  {
    "word": "義理",
    "reading": "ぎり",
    "meaning": "debt of gratitude, obligation",
    "level": "1"
  },
  {
    "word": "切替",
    "reading": "きりかえ",
    "meaning": "exchange, conversion, switchover",
    "level": "1"
  },
  {
    "word": "気流",
    "reading": "きりゅう",
    "meaning": "atmospheric current",
    "level": "1"
  },
  {
    "word": "切れ目",
    "reading": "きれめ",
    "meaning": "break, pause, gap",
    "level": "1"
  },
  {
    "word": "疑惑",
    "reading": "ぎわく",
    "meaning": "doubt, misgivings, suspicion",
    "level": "1"
  },
  {
    "word": "極めて",
    "reading": "きわめて",
    "meaning": "exceedingly, extremely (written expression)",
    "level": "1"
  },
  {
    "word": "近眼",
    "reading": "きんがん",
    "meaning": "nearsightedness",
    "level": "1"
  },
  {
    "word": "緊急",
    "reading": "きんきゅう",
    "meaning": "urgent, pressing, emergency",
    "level": "1"
  },
  {
    "word": "近郊",
    "reading": "きんこう",
    "meaning": "suburbs, outskirts",
    "level": "1"
  },
  {
    "word": "均衡",
    "reading": "きんこう",
    "meaning": "equilibrium, balance",
    "level": "1"
  },
  {
    "word": "禁じる",
    "reading": "きんじる",
    "meaning": "to prohibit",
    "level": "1"
  },
  {
    "word": "勤勉",
    "reading": "きんべん",
    "meaning": "industry, diligence",
    "level": "1"
  },
  {
    "word": "吟味",
    "reading": "ぎんみ",
    "meaning": "examination, careful investigation",
    "level": "1"
  },
  {
    "word": "勤務",
    "reading": "きんむ",
    "meaning": "service, duty, work",
    "level": "1"
  },
  {
    "word": "禁物",
    "reading": "きんもつ",
    "meaning": "taboo, forbidden thing",
    "level": "1"
  },
  {
    "word": "勤労",
    "reading": "きんろう",
    "meaning": "labor, exertion, diligent service",
    "level": "1"
  },
  {
    "word": "クイズ",
    "reading": "クイズ",
    "meaning": "quiz",
    "level": "1"
  },
  {
    "word": "食い違う",
    "reading": "くいちがう",
    "meaning": "to cross each other, to differ",
    "level": "1"
  },
  {
    "word": "空間",
    "reading": "くうかん",
    "meaning": "space, room, airspace",
    "level": "1"
  },
  {
    "word": "空腹",
    "reading": "くうふく",
    "meaning": "hunger",
    "level": "1"
  },
  {
    "word": "区画",
    "reading": "くかく",
    "meaning": "division, section, area",
    "level": "1"
  },
  {
    "word": "区間",
    "reading": "くかん",
    "meaning": "section",
    "level": "1"
  },
  {
    "word": "茎",
    "reading": "くき",
    "meaning": "stalk",
    "level": "1"
  },
  {
    "word": "区切り",
    "reading": "くぎり",
    "meaning": "an end, a stop, punctuation",
    "level": "1"
  },
  {
    "word": "くぐる",
    "reading": "くぐる",
    "meaning": "to pass through; to go around",
    "level": "1"
  },
  {
    "word": "くじ (～をひく)",
    "reading": "くじ (～をひく)",
    "meaning": "lottery, lot",
    "level": "1"
  },
  {
    "word": "くじびき",
    "reading": "くじびき",
    "meaning": "lottery, drawn lot",
    "level": "1"
  },
  {
    "word": "くすぐったい",
    "reading": "くすぐったい",
    "meaning": "ticklish",
    "level": "1"
  },
  {
    "word": "愚痴",
    "reading": "ぐち",
    "meaning": "idle complaint, grumble",
    "level": "1"
  },
  {
    "word": "口吟む",
    "reading": "くちずさむ",
    "meaning": "to humble",
    "level": "1"
  },
  {
    "word": "嘴",
    "reading": "くちばし",
    "meaning": "beak, bill",
    "level": "1"
  },
  {
    "word": "朽ちる",
    "reading": "くちる",
    "meaning": "to rot",
    "level": "1"
  },
  {
    "word": "覆す",
    "reading": "くつがえす",
    "meaning": "to overturn, to upset, to overthrow",
    "level": "1"
  },
  {
    "word": "くっきり",
    "reading": "くっきり",
    "meaning": "distinctly, clearly, boldly",
    "level": "1"
  },
  {
    "word": "屈折",
    "reading": "くっせつ",
    "meaning": "bending, indentation, refraction",
    "level": "1"
  },
  {
    "word": "ぐっと",
    "reading": "ぐっと",
    "meaning": "firmly, fast, more",
    "level": "1"
  },
  {
    "word": "首飾り",
    "reading": "くびかざり",
    "meaning": "necklace",
    "level": "1"
  },
  {
    "word": "首輪",
    "reading": "くびわ",
    "meaning": "necklace, choker",
    "level": "1"
  },
  {
    "word": "組み込む",
    "reading": "くみこむ",
    "meaning": "to insert, to include, to cut in (printing)",
    "level": "1"
  },
  {
    "word": "組み合わせる",
    "reading": "くみあわせる",
    "meaning": "to join together, to combine, to join up",
    "level": "1"
  },
  {
    "word": "蔵",
    "reading": "くら",
    "meaning": "warehouse, cellar",
    "level": "1"
  },
  {
    "word": "グレー",
    "reading": "グレー",
    "meaning": "grey, gray",
    "level": "1"
  },
  {
    "word": "クレーン",
    "reading": "クレーン",
    "meaning": "crane",
    "level": "1"
  },
  {
    "word": "玄人",
    "reading": "くろうと",
    "meaning": "expert, professional",
    "level": "1"
  },
  {
    "word": "黒字",
    "reading": "くろじ",
    "meaning": "balance (figure) in the black",
    "level": "1"
  },
  {
    "word": "軍艦",
    "reading": "ぐんかん",
    "meaning": "warship, battleship",
    "level": "1"
  },
  {
    "word": "軍事",
    "reading": "ぐんじ",
    "meaning": "military affairs",
    "level": "1"
  },
  {
    "word": "君主",
    "reading": "くんしゅ",
    "meaning": "ruler, monarch",
    "level": "1"
  },
  {
    "word": "群集",
    "reading": "ぐんしゅう",
    "meaning": "(social) group, crowd, mob",
    "level": "1"
  },
  {
    "word": "群衆",
    "reading": "ぐんしゅう",
    "meaning": "(social) group, crowd, mob",
    "level": "1"
  },
  {
    "word": "軍備",
    "reading": "ぐんび",
    "meaning": "armaments, military preparations",
    "level": "1"
  },
  {
    "word": "軍服",
    "reading": "ぐんぷく",
    "meaning": "military or naval uniform",
    "level": "1"
  },
  {
    "word": "芸",
    "reading": "げい",
    "meaning": "art, accomplishment, performance",
    "level": "1"
  },
  {
    "word": "経過",
    "reading": "けいか",
    "meaning": "passage, progress",
    "level": "1"
  },
  {
    "word": "軽快",
    "reading": "けいかい",
    "meaning": "lively, casual, light",
    "level": "1"
  },
  {
    "word": "警戒",
    "reading": "けいかい",
    "meaning": "warning, admonition, vigilance",
    "level": "1"
  },
  {
    "word": "敬具",
    "reading": "けいぐ",
    "meaning": "Sincerely (used at the end of letter)",
    "level": "1"
  },
  {
    "word": "軽減",
    "reading": "けいげん",
    "meaning": "reduction, lessening",
    "level": "1"
  },
  {
    "word": "掲載",
    "reading": "けいさい",
    "meaning": "appearance (e.g., article in paper)",
    "level": "1"
  },
  {
    "word": "傾斜",
    "reading": "けいしゃ",
    "meaning": "inclination, slope, dip",
    "level": "1"
  },
  {
    "word": "形成",
    "reading": "けいせい",
    "meaning": "formation",
    "level": "1"
  },
  {
    "word": "形勢",
    "reading": "けいせい",
    "meaning": "condition, situation, prospects",
    "level": "1"
  },
  {
    "word": "軽率",
    "reading": "けいそつ",
    "meaning": "thoughtless, careless, hasty",
    "level": "1"
  },
  {
    "word": "刑罰",
    "reading": "けいばつ",
    "meaning": "judgment, penalty, punishment",
    "level": "1"
  },
  {
    "word": "経費",
    "reading": "けいひ",
    "meaning": "expenses, cost, outlay",
    "level": "1"
  },
  {
    "word": "警部",
    "reading": "けいぶ",
    "meaning": "police inspector",
    "level": "1"
  },
  {
    "word": "転換",
    "reading": "てんかん",
    "meaning": "convert, divert",
    "level": "1"
  },
  {
    "word": "転居",
    "reading": "てんきょ",
    "meaning": "moving, changing residence",
    "level": "1"
  },
  {
    "word": "転勤",
    "reading": "てんきん",
    "meaning": "transfer (to another office of a company)",
    "level": "1"
  },
  {
    "word": "点検",
    "reading": "てんけん",
    "meaning": "inspection, examination, checking",
    "level": "1"
  },
  {
    "word": "電源",
    "reading": "でんげん",
    "meaning": "source of electricity, power (e.g., button on TV)",
    "level": "1"
  },
  {
    "word": "天国",
    "reading": "てんごく",
    "meaning": "paradise, heaven, Kingdom of Heaven",
    "level": "1"
  },
  {
    "word": "天才",
    "reading": "てんさい",
    "meaning": "a genius",
    "level": "1"
  },
  {
    "word": "天災",
    "reading": "てんさい",
    "meaning": "natural calamity, disaster",
    "level": "1"
  },
  {
    "word": "展示",
    "reading": "てんじ",
    "meaning": "exhibition, display",
    "level": "1"
  },
  {
    "word": "伝説",
    "reading": "でんせつ",
    "meaning": "tradition, legend, folklore",
    "level": "1"
  },
  {
    "word": "点線",
    "reading": "てんせん",
    "meaning": "dotted line",
    "level": "1"
  },
  {
    "word": "転じる",
    "reading": "てんじる",
    "meaning": "to turn, to shift",
    "level": "1"
  },
  {
    "word": "転ずる",
    "reading": "てんずる",
    "meaning": "to turn, to shift",
    "level": "1"
  },
  {
    "word": "天体",
    "reading": "てんたい",
    "meaning": "heavenly body",
    "level": "1"
  },
  {
    "word": "伝達",
    "reading": "でんたつ",
    "meaning": "transmission (e.g., news, communication, delivery)",
    "level": "1"
  },
  {
    "word": "天地",
    "reading": "てんち",
    "meaning": "heaven and earth, the universe",
    "level": "1"
  },
  {
    "word": "てんで",
    "reading": "てんで",
    "meaning": "(not) at all, altogether, entirely",
    "level": "1"
  },
  {
    "word": "転任",
    "reading": "てんにん",
    "meaning": "change of post",
    "level": "1"
  },
  {
    "word": "展望",
    "reading": "てんぼう",
    "meaning": "view, outlook, prospect",
    "level": "1"
  },
  {
    "word": "伝来",
    "reading": "でんらい",
    "meaning": "ancestral, hereditary, imported",
    "level": "1"
  },
  {
    "word": "転落",
    "reading": "てんらく",
    "meaning": "fall, degradation",
    "level": "1"
  },
  {
    "word": "問い合わせる",
    "reading": "といあわせる",
    "meaning": "to inquire, to seek information",
    "level": "1"
  },
  {
    "word": "当～",
    "reading": "とう～",
    "meaning": "Our ~ (e.g., Hotel, plane, etc.)",
    "level": "1"
  },
  {
    "word": "胴",
    "reading": "どう",
    "meaning": "trunk, body, frame",
    "level": "1"
  },
  {
    "word": "同意",
    "reading": "どうい",
    "meaning": "agreement, consent; same meaning",
    "level": "1"
  },
  {
    "word": "動員",
    "reading": "どういん",
    "meaning": "mobilization",
    "level": "1"
  },
  {
    "word": "同感",
    "reading": "どうかん",
    "meaning": "agreement, same opinion, same feeling",
    "level": "1"
  },
  {
    "word": "陶器",
    "reading": "とうき",
    "meaning": "pottery, ceramics",
    "level": "1"
  },
  {
    "word": "討議",
    "reading": "とうぎ",
    "meaning": "debate, discussion",
    "level": "1"
  },
  {
    "word": "動機",
    "reading": "どうき",
    "meaning": "motive, incentive",
    "level": "1"
  },
  {
    "word": "等級",
    "reading": "とうきゅう",
    "meaning": "grade, class",
    "level": "1"
  },
  {
    "word": "同級",
    "reading": "どうきゅう",
    "meaning": "the same grade, same class",
    "level": "1"
  },
  {
    "word": "同居",
    "reading": "どうきょ",
    "meaning": "living together",
    "level": "1"
  },
  {
    "word": "登校",
    "reading": "とうこう",
    "meaning": "attendance (at school)",
    "level": "1"
  },
  {
    "word": "統合",
    "reading": "とうごう",
    "meaning": "integration, unification, synthesis",
    "level": "1"
  },
  {
    "word": "動向",
    "reading": "どうこう",
    "meaning": "trend, tendency, movement, attitude",
    "level": "1"
  },
  {
    "word": "投資",
    "reading": "とうし",
    "meaning": "investment",
    "level": "1"
  },
  {
    "word": "同情",
    "reading": "どうじょう",
    "meaning": "sympathy, compassion, sympathize",
    "level": "1"
  },
  {
    "word": "道場",
    "reading": "どうじょう",
    "meaning": "(arch) dojo, hall used for martial arts training, mandala",
    "level": "1"
  },
  {
    "word": "統制",
    "reading": "とうせい",
    "meaning": "regulation, control",
    "level": "1"
  },
  {
    "word": "当選",
    "reading": "とうせん",
    "meaning": "being elected, winning the prize",
    "level": "1"
  },
  {
    "word": "逃走",
    "reading": "とうそう",
    "meaning": "flight, desertion, escape",
    "level": "1"
  },
  {
    "word": "統率",
    "reading": "とうそつ",
    "meaning": "command, generalship, leadership",
    "level": "1"
  },
  {
    "word": "到達",
    "reading": "とうたつ",
    "meaning": "reaching, attaining, arrival",
    "level": "1"
  },
  {
    "word": "統治",
    "reading": "とうち",
    "meaning": "rule, reign, governing",
    "level": "1"
  },
  {
    "word": "仕切る",
    "reading": "しきる",
    "meaning": "to partition, to divide, to mark off",
    "level": "1"
  },
  {
    "word": "資金",
    "reading": "しきん",
    "meaning": "funds, capital",
    "level": "1"
  },
  {
    "word": "軸",
    "reading": "じく",
    "meaning": "axis, stem, shaft",
    "level": "1"
  },
  {
    "word": "しくじる",
    "reading": "しくじる",
    "meaning": "to fail, to fall through, to blunder",
    "level": "1"
  },
  {
    "word": "仕組",
    "reading": "しくみ",
    "meaning": "structure, mechanism",
    "level": "1"
  },
  {
    "word": "死刑",
    "reading": "しけい",
    "meaning": "death penalty",
    "level": "1"
  },
  {
    "word": "湿気る",
    "reading": "しける",
    "meaning": "to be damp, to be moist",
    "level": "1"
  },
  {
    "word": "施行",
    "reading": "しこう",
    "meaning": "enforcement, operation",
    "level": "1"
  },
  {
    "word": "思考",
    "reading": "しこう",
    "meaning": "thought",
    "level": "1"
  },
  {
    "word": "志向",
    "reading": "しこう",
    "meaning": "intention, aim",
    "level": "1"
  },
  {
    "word": "嗜好",
    "reading": "しこう",
    "meaning": "taste, liking, preference",
    "level": "1"
  },
  {
    "word": "事項",
    "reading": "じこう",
    "meaning": "matter(s), item(s), facts",
    "level": "1"
  },
  {
    "word": "時刻表",
    "reading": "じこくひょう",
    "meaning": "timetable, (train) schedule",
    "level": "1"
  },
  {
    "word": "地獄",
    "reading": "じごく",
    "meaning": "hell",
    "level": "1"
  },
  {
    "word": "時差",
    "reading": "じさ",
    "meaning": "time difference",
    "level": "1"
  },
  {
    "word": "自在",
    "reading": "じざい",
    "meaning": "freely, at will",
    "level": "1"
  },
  {
    "word": "視察",
    "reading": "しさつ",
    "meaning": "inspection, observation",
    "level": "1"
  },
  {
    "word": "資産",
    "reading": "しさん",
    "meaning": "property, fortune, assets",
    "level": "1"
  },
  {
    "word": "支持",
    "reading": "しじ",
    "meaning": "support",
    "level": "1"
  },
  {
    "word": "自主",
    "reading": "じしゅ",
    "meaning": "independence, autonomy",
    "level": "1"
  },
  {
    "word": "自首",
    "reading": "じしゅ",
    "meaning": "surrender, give oneself up",
    "level": "1"
  },
  {
    "word": "刺繍",
    "reading": "ししゅう",
    "meaning": "embroidery",
    "level": "1"
  },
  {
    "word": "市場",
    "reading": "しじょう",
    "meaning": "(the) market (as a concept)",
    "level": "1"
  },
  {
    "word": "辞職",
    "reading": "じしょく",
    "meaning": "resignation",
    "level": "1"
  },
  {
    "word": "雫",
    "reading": "しずく",
    "meaning": "drop (of water)",
    "level": "1"
  },
  {
    "word": "システム",
    "reading": "システム",
    "meaning": "system",
    "level": "1"
  },
  {
    "word": "沈める",
    "reading": "しずめる",
    "meaning": "to sink, to submerge",
    "level": "1"
  },
  {
    "word": "施設",
    "reading": "しせつ",
    "meaning": "establishment, facility",
    "level": "1"
  },
  {
    "word": "事前",
    "reading": "じぜん",
    "meaning": "prior, beforehand, in advance",
    "level": "1"
  },
  {
    "word": "子息",
    "reading": "しそく",
    "meaning": "(hon.) son",
    "level": "1"
  },
  {
    "word": "持続",
    "reading": "じぞく",
    "meaning": "continuation, endurance",
    "level": "1"
  },
  {
    "word": "自尊心",
    "reading": "じそんしん",
    "meaning": "self-respect, conceit",
    "level": "1"
  },
  {
    "word": "慕う",
    "reading": "したう",
    "meaning": "to yearn to adore",
    "level": "1"
  },
  {
    "word": "下心",
    "reading": "したごころ",
    "meaning": "secret intention, motive",
    "level": "1"
  },
  {
    "word": "下地",
    "reading": "したじ",
    "meaning": "groundwork, foundation",
    "level": "1"
  },
  {
    "word": "親しむ",
    "reading": "したしむ",
    "meaning": "to be intimate with, to befriend",
    "level": "1"
  },
  {
    "word": "下調べ",
    "reading": "したしらべ",
    "meaning": "preliminary investigation",
    "level": "1"
  },
  {
    "word": "愛想",
    "reading": "あいそう",
    "meaning": "sociability",
    "level": "1"
  },
  {
    "word": "間柄",
    "reading": "あいだがら",
    "meaning": "relationship",
    "level": "1"
  },
  {
    "word": "合間",
    "reading": "あいま",
    "meaning": "interval",
    "level": "1"
  },
  {
    "word": "敢えて",
    "reading": "あえて",
    "meaning": "dare (to do), venture (to do), challenge (to do)",
    "level": "1"
  },
  {
    "word": "仰ぐ",
    "reading": "あおぐ",
    "meaning": "to look up (to), to respect; to ask for",
    "level": "1"
  },
  {
    "word": "垢",
    "reading": "あか",
    "meaning": "dirt, filth",
    "level": "1"
  },
  {
    "word": "赤字",
    "reading": "あかじ",
    "meaning": "deficit, go in the red",
    "level": "1"
  },
  {
    "word": "明かす",
    "reading": "あかす",
    "meaning": "to reveal; to stay up",
    "level": "1"
  },
  {
    "word": "赤らむ",
    "reading": "あからむ",
    "meaning": "to become red, to blush",
    "level": "1"
  },
  {
    "word": "上がり",
    "reading": "あがり",
    "meaning": "ascent; income; completion, stop",
    "level": "1"
  },
  {
    "word": "諦め",
    "reading": "あきらめ",
    "meaning": "resignation, reconciliation, consolation",
    "level": "1"
  },
  {
    "word": "アクセル",
    "reading": "アクセル",
    "meaning": "(abbr.) accelerator",
    "level": "1"
  },
  {
    "word": "あくどい",
    "reading": "あくどい",
    "meaning": "gaudy vicious",
    "level": "1"
  },
  {
    "word": "顎",
    "reading": "あご",
    "meaning": "chin",
    "level": "1"
  },
  {
    "word": "憧れ",
    "reading": "あこがれ",
    "meaning": "yearning, longing, aspiration",
    "level": "1"
  },
  {
    "word": "麻",
    "reading": "あさ",
    "meaning": "hemp",
    "level": "1"
  },
  {
    "word": "あざ",
    "reading": "あざ",
    "meaning": "birthmark, bruise",
    "level": "1"
  },
  {
    "word": "浅ましい",
    "reading": "あさましい",
    "meaning": "shameful, mean, despicable",
    "level": "1"
  },
  {
    "word": "欺く",
    "reading": "あざむく",
    "meaning": "to deceive",
    "level": "1"
  },
  {
    "word": "鮮やか",
    "reading": "あざやか",
    "meaning": "vivid, clear",
    "level": "1"
  },
  {
    "word": "嘲笑う",
    "reading": "あざわらう",
    "meaning": "to sneer at, to ridicule",
    "level": "1"
  },
  {
    "word": "悪しからず",
    "reading": "あしからず",
    "meaning": "don't take me wrong, but..., I'm sorry",
    "level": "1"
  },
  {
    "word": "味わい",
    "reading": "あじわい",
    "meaning": "flavor, relish",
    "level": "1"
  },
  {
    "word": "焦る",
    "reading": "あせる",
    "meaning": "to be in a hurry, to be impatient",
    "level": "1"
  },
  {
    "word": "あせる (こえが～)",
    "reading": "あせる (こえが～)",
    "meaning": "to fade, to discolor",
    "level": "1"
  },
  {
    "word": "値",
    "reading": "あたい",
    "meaning": "value, price, worth",
    "level": "1"
  },
  {
    "word": "値する",
    "reading": "あたいする",
    "meaning": "to be worth, to deserve",
    "level": "1"
  },
  {
    "word": "悪化",
    "reading": "あっか",
    "meaning": "deterioration, worsen",
    "level": "1"
  },
  {
    "word": "扱い",
    "reading": "あつかい",
    "meaning": "treatment, service",
    "level": "1"
  },
  {
    "word": "呆気ない",
    "reading": "あっけない",
    "meaning": "not enough, too quick (short, long, etc.)",
    "level": "1"
  },
  {
    "word": "あっさり",
    "reading": "あっさり",
    "meaning": "easily, readily, quickly",
    "level": "1"
  },
  {
    "word": "斡旋",
    "reading": "あっせん",
    "meaning": "kind offices, mediation",
    "level": "1"
  },
  {
    "word": "圧倒",
    "reading": "あっとう",
    "meaning": "overwhelm, overpower",
    "level": "1"
  },
  {
    "word": "圧迫",
    "reading": "あっぱく",
    "meaning": "pressure, coercion, oppression",
    "level": "1"
  },
  {
    "word": "あつらえる",
    "reading": "あつらえる",
    "meaning": "to give an order, to place an order",
    "level": "1"
  },
  {
    "word": "圧力",
    "reading": "あつりょく",
    "meaning": "stress, pressure",
    "level": "1"
  },
  {
    "word": "当て",
    "reading": "あて",
    "meaning": "expectations; depend",
    "level": "1"
  },
  {
    "word": "～宛",
    "reading": "～あて",
    "meaning": "for…(e.g., In a letter)",
    "level": "1"
  },
  {
    "word": "当て字",
    "reading": "あてじ",
    "meaning": "phonetic-equivalent character, substitute character",
    "level": "1"
  },
  {
    "word": "跡継ぎ",
    "reading": "あとつぎ",
    "meaning": "heir, successor",
    "level": "1"
  },
  {
    "word": "後回し",
    "reading": "あとまわし",
    "meaning": "putting off, postponing",
    "level": "1"
  },
  {
    "word": "油絵",
    "reading": "あぶらえ",
    "meaning": "oil painting",
    "level": "1"
  },
  {
    "word": "アプローチ",
    "reading": "アプローチ",
    "meaning": "approach (in golf)",
    "level": "1"
  },
  {
    "word": "あべこべ",
    "reading": "あべこべ",
    "meaning": "contrary, opposite, inverse",
    "level": "1"
  },
  {
    "word": "甘える",
    "reading": "あまえる",
    "meaning": "to behave like a spoiled child, to fawn on",
    "level": "1"
  },
  {
    "word": "雨具",
    "reading": "あまぐ",
    "meaning": "rain gear",
    "level": "1"
  },
  {
    "word": "甘口",
    "reading": "あまくち",
    "meaning": "sweet flavor",
    "level": "1"
  },
  {
    "word": "アマチュア",
    "reading": "アマチュア",
    "meaning": "amateur",
    "level": "1"
  },
  {
    "word": "網",
    "reading": "あみ",
    "meaning": "net",
    "level": "1"
  },
  {
    "word": "操る",
    "reading": "あやつる",
    "meaning": "to manipulate, to operate, to pull strings",
    "level": "1"
  },
  {
    "word": "危ぶむ",
    "reading": "あやぶむ",
    "meaning": "to fear, to have misgivings, to be doubtful",
    "level": "1"
  },
  {
    "word": "あやふや",
    "reading": "あやふや",
    "meaning": "uncertain, vague, ambiguous",
    "level": "1"
  },
  {
    "word": "過ち",
    "reading": "あやまち",
    "meaning": "fault, error, indiscretion",
    "level": "1"
  },
  {
    "word": "誤る",
    "reading": "あやまる",
    "meaning": "to make a mistake",
    "level": "1"
  },
  {
    "word": "歩み",
    "reading": "あゆみ",
    "meaning": "step, progress, history",
    "level": "1"
  },
  {
    "word": "歩む",
    "reading": "あゆむ",
    "meaning": "to walk",
    "level": "1"
  },
  {
    "word": "予め",
    "reading": "あらかじめ",
    "meaning": "in advance, previously",
    "level": "1"
  },
  {
    "word": "荒らす",
    "reading": "あらす",
    "meaning": "to damage; to invade",
    "level": "1"
  },
  {
    "word": "争い",
    "reading": "あらそい",
    "meaning": "dispute, quarrel, conflict",
    "level": "1"
  },
  {
    "word": "改まる",
    "reading": "あらたまる",
    "meaning": "to be renewed; to be formal",
    "level": "1"
  },
  {
    "word": "荒っぽい",
    "reading": "あらっぽい",
    "meaning": "rough, rude",
    "level": "1"
  },
  {
    "word": "アラブ",
    "reading": "アラブ",
    "meaning": "Arab",
    "level": "1"
  },
  {
    "word": "霰",
    "reading": "あられ",
    "meaning": "hail (e.g., falling ice balls)",
    "level": "1"
  },
  {
    "word": "有り様",
    "reading": "ありさま",
    "meaning": "state, condition",
    "level": "1"
  },
  {
    "word": "ありのまま",
    "reading": "ありのまま",
    "meaning": "the truth, as it is, frankly",
    "level": "1"
  },
  {
    "word": "ありふれる",
    "reading": "ありふれる",
    "meaning": "common, ordinary, routine",
    "level": "1"
  },
  {
    "word": "アルカリ",
    "reading": "アルカリ",
    "meaning": "alkali",
    "level": "1"
  },
  {
    "word": "アルミ",
    "reading": "アルミ",
    "meaning": "aluminum (Al, aluminum)",
    "level": "1"
  },
  {
    "word": "アワー",
    "reading": "アワー",
    "meaning": "hour",
    "level": "1"
  },
  {
    "word": "合わす",
    "reading": "あわす",
    "meaning": "to join together, to face, to unite",
    "level": "1"
  },
  {
    "word": "～合せ",
    "reading": "～あわせ",
    "meaning": "in all",
    "level": "1"
  },
  {
    "word": "アンコール",
    "reading": "アンコール",
    "meaning": "encore",
    "level": "1"
  },
  {
    "word": "暗殺",
    "reading": "あんさつ",
    "meaning": "assassination",
    "level": "1"
  },
  {
    "word": "暗算",
    "reading": "あんざん",
    "meaning": "mental arithmetic",
    "level": "1"
  },
  {
    "word": "暗示",
    "reading": "あんじ",
    "meaning": "hint, suggestion",
    "level": "1"
  },
  {
    "word": "案じる",
    "reading": "あんじる",
    "meaning": "to be anxious, to ponder",
    "level": "1"
  },
  {
    "word": "安静",
    "reading": "あんせい",
    "meaning": "rest",
    "level": "1"
  },
  {
    "word": "案の定",
    "reading": "あんのじょう",
    "meaning": "sure enough, as usual",
    "level": "1"
  },
  {
    "word": "いい加減",
    "reading": "いいかげん",
    "meaning": "random, irresponsible",
    "level": "1"
  },
  {
    "word": "言い訳",
    "reading": "いいわけ",
    "meaning": "excuse, explanation",
    "level": "1"
  },
  {
    "word": "イェス",
    "reading": "イェス",
    "meaning": "yes; Jesus",
    "level": "1"
  },
  {
    "word": "家出",
    "reading": "いえで",
    "meaning": "running away from home",
    "level": "1"
  },
  {
    "word": "生かす",
    "reading": "いかす",
    "meaning": "to keep something alive; to make use of",
    "level": "1"
  },
  {
    "word": "いかに",
    "reading": "いかに",
    "meaning": "how, in what way",
    "level": "1"
  },
  {
    "word": "いかにも",
    "reading": "いかにも",
    "meaning": "truly (same as 実に (じつに))",
    "level": "1"
  },
  {
    "word": "異議",
    "reading": "いぎ",
    "meaning": "objection, dissent, protest",
    "level": "1"
  },
  {
    "word": "生き甲斐",
    "reading": "いきがい",
    "meaning": "something one lives for, very important",
    "level": "1"
  },
  {
    "word": "行き違い",
    "reading": "いきちがい",
    "meaning": "misunderstanding, disagreement",
    "level": "1"
  },
  {
    "word": "意気込む",
    "reading": "いきごむ",
    "meaning": "to be enthusiastic about",
    "level": "1"
  },
  {
    "word": "育成",
    "reading": "いくせい",
    "meaning": "rearing, training, cultivation",
    "level": "1"
  },
  {
    "word": "幾多",
    "reading": "いくた",
    "meaning": "many, numerous",
    "level": "1"
  },
  {
    "word": "(花を〜) 生ける, 活ける",
    "reading": "(はなを～) いける",
    "meaning": "to arrange (flowers)",
    "level": "1"
  },
  {
    "word": "異見",
    "reading": "いけん",
    "meaning": "different opinion, objection",
    "level": "1"
  },
  {
    "word": "意向",
    "reading": "いこう",
    "meaning": "intention, idea, inclination",
    "level": "1"
  },
  {
    "word": "移行",
    "reading": "いこう",
    "meaning": "switching over to",
    "level": "1"
  },
  {
    "word": "いざ",
    "reading": "いざ",
    "meaning": "now, come (now), crucial moment",
    "level": "1"
  },
  {
    "word": "移住",
    "reading": "いじゅう",
    "meaning": "migration, immigration",
    "level": "1"
  },
  {
    "word": "衣装",
    "reading": "いしょう",
    "meaning": "clothing, costume, outfit",
    "level": "1"
  },
  {
    "word": "いじる",
    "reading": "いじる",
    "meaning": "to touch, to tamper with",
    "level": "1"
  },
  {
    "word": "異性",
    "reading": "いせい",
    "meaning": "the opposite sex",
    "level": "1"
  },
  {
    "word": "遺跡",
    "reading": "いせき",
    "meaning": "historic ruins",
    "level": "1"
  },
  {
    "word": "依存",
    "reading": "いぞん",
    "meaning": "dependence, dependent, reliance",
    "level": "1"
  },
  {
    "word": "委託",
    "reading": "いたく",
    "meaning": "consign (goods (for sale) to a firm), entrust",
    "level": "1"
  },
  {
    "word": "いたって",
    "reading": "いたって",
    "meaning": "very much, exceedingly, extremely",
    "level": "1"
  },
  {
    "word": "出世",
    "reading": "しゅっせ",
    "meaning": "promotion, successful career, eminence",
    "level": "1"
  },
  {
    "word": "出題",
    "reading": "しゅつだい",
    "meaning": "proposing a question",
    "level": "1"
  },
  {
    "word": "出動",
    "reading": "しゅつどう",
    "meaning": "mobilization, action",
    "level": "1"
  },
  {
    "word": "出費",
    "reading": "しゅっぴ",
    "meaning": "expenses, disbursements",
    "level": "1"
  },
  {
    "word": "出品",
    "reading": "しゅっぴん",
    "meaning": "exhibit, display",
    "level": "1"
  },
  {
    "word": "主導",
    "reading": "しゅどう",
    "meaning": "main leadership",
    "level": "1"
  },
  {
    "word": "主任",
    "reading": "しゅにん",
    "meaning": "person in charge, responsible official",
    "level": "1"
  },
  {
    "word": "首脳",
    "reading": "しゅのう",
    "meaning": "head, leader",
    "level": "1"
  },
  {
    "word": "守備",
    "reading": "しゅび",
    "meaning": "defense",
    "level": "1"
  },
  {
    "word": "手法",
    "reading": "しゅほう",
    "meaning": "technique",
    "level": "1"
  },
  {
    "word": "樹木",
    "reading": "じゅもく",
    "meaning": "trees and shrubs, arbor",
    "level": "1"
  },
  {
    "word": "樹立",
    "reading": "じゅりつ",
    "meaning": "establish, create",
    "level": "1"
  },
  {
    "word": "準急",
    "reading": "じゅんきゅう",
    "meaning": "local express (train, slower than an express)",
    "level": "1"
  },
  {
    "word": "準じる",
    "reading": "じゅんじる",
    "meaning": "to follow, to conform, to apply to",
    "level": "1"
  },
  {
    "word": "～署",
    "reading": "～しょ",
    "meaning": "department",
    "level": "1"
  },
  {
    "word": "～症",
    "reading": "～しょう",
    "meaning": "disease",
    "level": "1"
  },
  {
    "word": "～証",
    "reading": "～しょう",
    "meaning": "proof, certificate",
    "level": "1"
  },
  {
    "word": "～嬢",
    "reading": "～じょう",
    "meaning": "young woman",
    "level": "1"
  },
  {
    "word": "上位",
    "reading": "じょうい",
    "meaning": "superior, higher order",
    "level": "1"
  },
  {
    "word": "上演",
    "reading": "じょうえん",
    "meaning": "art performance",
    "level": "1"
  },
  {
    "word": "城下",
    "reading": "じょうか",
    "meaning": "land near the castle",
    "level": "1"
  },
  {
    "word": "消去",
    "reading": "しょうきょ",
    "meaning": "elimination, erasing",
    "level": "1"
  },
  {
    "word": "上空",
    "reading": "じょうくう",
    "meaning": "sky, high-altitude sky, upper air",
    "level": "1"
  },
  {
    "word": "衝撃",
    "reading": "しょうげき",
    "meaning": "shock, crash, impact, ballistic",
    "level": "1"
  },
  {
    "word": "証言",
    "reading": "しょうげん",
    "meaning": "evidence, testimony",
    "level": "1"
  },
  {
    "word": "証拠",
    "reading": "しょうこ",
    "meaning": "evidence, proof",
    "level": "1"
  },
  {
    "word": "照合",
    "reading": "しょうごう",
    "meaning": "check, verification",
    "level": "1"
  },
  {
    "word": "詳細",
    "reading": "しょうさい",
    "meaning": "detail, particulars",
    "level": "1"
  },
  {
    "word": "上昇",
    "reading": "じょうしょう",
    "meaning": "rising, ascending, climbing",
    "level": "1"
  },
  {
    "word": "昇進",
    "reading": "しょうしん",
    "meaning": "promotion",
    "level": "1"
  },
  {
    "word": "称する",
    "reading": "しょうする",
    "meaning": "to take the name of, to call oneself",
    "level": "1"
  },
  {
    "word": "情勢",
    "reading": "じょうせい",
    "meaning": "state of things, condition, situation",
    "level": "1"
  },
  {
    "word": "消息",
    "reading": "しょうそく",
    "meaning": "news, letter, circumstances",
    "level": "1"
  },
  {
    "word": "承諾",
    "reading": "しょうだく",
    "meaning": "consent, agreement",
    "level": "1"
  },
  {
    "word": "情緒",
    "reading": "じょうちょ",
    "meaning": "emotion, feeling",
    "level": "1"
  },
  {
    "word": "情緒",
    "reading": "じょうしょ",
    "meaning": "emotion, feeling",
    "level": "1"
  },
  {
    "word": "象徴",
    "reading": "しょうちょう",
    "meaning": "symbol",
    "level": "1"
  },
  {
    "word": "小児科",
    "reading": "しょうにか",
    "meaning": "pediatrics",
    "level": "1"
  },
  {
    "word": "使用人",
    "reading": "しようにん",
    "meaning": "employee, servant",
    "level": "1"
  },
  {
    "word": "情熱",
    "reading": "じょうねつ",
    "meaning": "passion, enthusiasm, zeal",
    "level": "1"
  },
  {
    "word": "譲歩",
    "reading": "じょうほ",
    "meaning": "concession, conciliation, compromise",
    "level": "1"
  },
  {
    "word": "条約",
    "reading": "じょうやく",
    "meaning": "treaty, pact",
    "level": "1"
  },
  {
    "word": "勝利",
    "reading": "しょうり",
    "meaning": "victory, triumph, win",
    "level": "1"
  },
  {
    "word": "上陸",
    "reading": "じょうりく",
    "meaning": "landing, disembarkation",
    "level": "1"
  },
  {
    "word": "蒸溜",
    "reading": "じょうりゅう",
    "meaning": "distillation",
    "level": "1"
  },
  {
    "word": "奨励",
    "reading": "しょうれい",
    "meaning": "encouragement, promotion",
    "level": "1"
  },
  {
    "word": "ショー",
    "reading": "ショー",
    "meaning": "show",
    "level": "1"
  },
  {
    "word": "除外",
    "reading": "じょがい",
    "meaning": "exception, exclusion",
    "level": "1"
  },
  {
    "word": "職員",
    "reading": "しょくいん",
    "meaning": "staff member, personnel",
    "level": "1"
  },
  {
    "word": "植民地",
    "reading": "しょくみんち",
    "meaning": "colony",
    "level": "1"
  },
  {
    "word": "職務",
    "reading": "しょくむ",
    "meaning": "professional duties",
    "level": "1"
  },
  {
    "word": "諸君",
    "reading": "しょくん",
    "meaning": "Gentlemen!, Ladies!",
    "level": "1"
  },
  {
    "word": "助言",
    "reading": "じょげん",
    "meaning": "advice, suggestion",
    "level": "1"
  },
  {
    "word": "徐行",
    "reading": "じょこう",
    "meaning": "going slowly",
    "level": "1"
  },
  {
    "word": "所在",
    "reading": "しょざい",
    "meaning": "whereabouts",
    "level": "1"
  },
  {
    "word": "所持",
    "reading": "しょじ",
    "meaning": "possession, owning",
    "level": "1"
  },
  {
    "word": "所属",
    "reading": "しょぞく",
    "meaning": "attached to, belong to",
    "level": "1"
  },
  {
    "word": "処置",
    "reading": "しょち",
    "meaning": "treatment",
    "level": "1"
  },
  {
    "word": "しょっちゅう",
    "reading": "しょっちゅう",
    "meaning": "always, constantly",
    "level": "1"
  },
  {
    "word": "所定",
    "reading": "しょてい",
    "meaning": "fixed, prescribed",
    "level": "1"
  },
  {
    "word": "所得",
    "reading": "しょとく",
    "meaning": "income",
    "level": "1"
  },
  {
    "word": "処罰",
    "reading": "しょばつ",
    "meaning": "punishment",
    "level": "1"
  },
  {
    "word": "初版",
    "reading": "しょはん",
    "meaning": "first edition",
    "level": "1"
  },
  {
    "word": "書評",
    "reading": "しょひょう",
    "meaning": "book review",
    "level": "1"
  },
  {
    "word": "処分",
    "reading": "しょぶん",
    "meaning": "disposal, dealing, punishment",
    "level": "1"
  },
  {
    "word": "庶民",
    "reading": "しょみん",
    "meaning": "masses, common people",
    "level": "1"
  },
  {
    "word": "庶務",
    "reading": "しょむ",
    "meaning": "general affairs",
    "level": "1"
  },
  {
    "word": "所有",
    "reading": "しょゆう",
    "meaning": "one's possessions, ownership",
    "level": "1"
  },
  {
    "word": "調べ",
    "reading": "しらべ",
    "meaning": "investigation, inspection",
    "level": "1"
  },
  {
    "word": "自立",
    "reading": "じりつ",
    "meaning": "independence, self-reliance",
    "level": "1"
  },
  {
    "word": "記す",
    "reading": "しるす",
    "meaning": "to note, to write down",
    "level": "1"
  },
  {
    "word": "指令",
    "reading": "しれい",
    "meaning": "orders, instructions, directive",
    "level": "1"
  },
  {
    "word": "～心",
    "reading": "～しん",
    "meaning": "mind of ~",
    "level": "1"
  },
  {
    "word": "陣",
    "reading": "じん",
    "meaning": "battle formation, camp, encampment",
    "level": "1"
  },
  {
    "word": "進化",
    "reading": "しんか",
    "meaning": "evolution, progress",
    "level": "1"
  },
  {
    "word": "人格",
    "reading": "じんかく",
    "meaning": "personality, character",
    "level": "1"
  },
  {
    "word": "審議",
    "reading": "しんぎ",
    "meaning": "deliberation",
    "level": "1"
  },
  {
    "word": "新婚",
    "reading": "しんこん",
    "meaning": "newly-wed",
    "level": "1"
  },
  {
    "word": "審査",
    "reading": "しんさ",
    "meaning": "judging, inspection, examination",
    "level": "1"
  },
  {
    "word": "人材",
    "reading": "じんざい",
    "meaning": "man of talent",
    "level": "1"
  },
  {
    "word": "紳士",
    "reading": "しんし",
    "meaning": "gentleman",
    "level": "1"
  },
  {
    "word": "真実",
    "reading": "しんじつ",
    "meaning": "truth, reality",
    "level": "1"
  },
  {
    "word": "信者",
    "reading": "しんじゃ",
    "meaning": "believer, devotee",
    "level": "1"
  },
  {
    "word": "真珠",
    "reading": "しんじゅ",
    "meaning": "pearl",
    "level": "1"
  },
  {
    "word": "進出",
    "reading": "しんしゅつ",
    "meaning": "advancement",
    "level": "1"
  },
  {
    "word": "心情",
    "reading": "しんじょう",
    "meaning": "mentality",
    "level": "1"
  },
  {
    "word": "新人",
    "reading": "しんじん",
    "meaning": "new face, newcomer",
    "level": "1"
  },
  {
    "word": "神聖",
    "reading": "しんせい",
    "meaning": "holiness, sacredness, dignity",
    "level": "1"
  },
  {
    "word": "親善",
    "reading": "しんぜん",
    "meaning": "friendship",
    "level": "1"
  },
  {
    "word": "真相",
    "reading": "しんそう",
    "meaning": "truth, real situation",
    "level": "1"
  },
  {
    "word": "迅速",
    "reading": "じんそく",
    "meaning": "quick, fast, prompt",
    "level": "1"
  },
  {
    "word": "人体",
    "reading": "じんたい",
    "meaning": "human body",
    "level": "1"
  },
  {
    "word": "新築",
    "reading": "しんちく",
    "meaning": "new building, new construction",
    "level": "1"
  },
  {
    "word": "心中",
    "reading": "しんじゅう",
    "meaning": "double suicide",
    "level": "1"
  },
  {
    "word": "進呈",
    "reading": "しんてい",
    "meaning": "presentation",
    "level": "1"
  },
  {
    "word": "進展",
    "reading": "しんてん",
    "meaning": "progress, development",
    "level": "1"
  },
  {
    "word": "神殿",
    "reading": "しんでん",
    "meaning": "temple, sacred place",
    "level": "1"
  },
  {
    "word": "進度",
    "reading": "しんど",
    "meaning": "progress",
    "level": "1"
  },
  {
    "word": "振動",
    "reading": "しんどう",
    "meaning": "oscillation, vibration",
    "level": "1"
  },
  {
    "word": "新入生",
    "reading": "しんにゅうせい",
    "meaning": "new student, first-year student, freshman",
    "level": "1"
  },
  {
    "word": "信任",
    "reading": "しんにん",
    "meaning": "trust, confidence, credence",
    "level": "1"
  },
  {
    "word": "神秘",
    "reading": "しんぴ",
    "meaning": "mystery",
    "level": "1"
  },
  {
    "word": "辛抱",
    "reading": "しんぼう",
    "meaning": "patience, endurance",
    "level": "1"
  },
  {
    "word": "人民",
    "reading": "じんみん",
    "meaning": "people, public",
    "level": "1"
  },
  {
    "word": "侵略",
    "reading": "しんりゃく",
    "meaning": "aggression, invasion, raid",
    "level": "1"
  },
  {
    "word": "診療",
    "reading": "しんりょう",
    "meaning": "medical examination and treatment",
    "level": "1"
  },
  {
    "word": "粋",
    "reading": "すい",
    "meaning": "essence",
    "level": "1"
  },
  {
    "word": "水源",
    "reading": "すいげん",
    "meaning": "source of river",
    "level": "1"
  },
  {
    "word": "推進",
    "reading": "すいしん",
    "meaning": "propulsion, driving force",
    "level": "1"
  },
  {
    "word": "吹奏",
    "reading": "すいそう",
    "meaning": "playing wind instruments",
    "level": "1"
  },
  {
    "word": "推測",
    "reading": "すいそく",
    "meaning": "guess, conjecture",
    "level": "1"
  },
  {
    "word": "水田",
    "reading": "すいでん",
    "meaning": "(water-filled) paddy field",
    "level": "1"
  },
  {
    "word": "推理",
    "reading": "すいり",
    "meaning": "reasoning, inference, mystery or detective genre",
    "level": "1"
  },
  {
    "word": "数詞",
    "reading": "すうし",
    "meaning": "numeral",
    "level": "1"
  },
  {
    "word": "崇拝",
    "reading": "すうはい",
    "meaning": "worship, adoration",
    "level": "1"
  },
  {
    "word": "据え付ける",
    "reading": "すえつける",
    "meaning": "to install, to equip, to mount",
    "level": "1"
  },
  {
    "word": "据える",
    "reading": "すえる",
    "meaning": "to set, to lay, to place",
    "level": "1"
  },
  {
    "word": "すがすがしい",
    "reading": "すがすがしい",
    "meaning": "fresh, refreshing",
    "level": "1"
  },
  {
    "word": "救い",
    "reading": "すくい",
    "meaning": "help, aid, relief",
    "level": "1"
  },
  {
    "word": "すくう (みずを～)",
    "reading": "すくう (みずを～)",
    "meaning": "to scoop",
    "level": "1"
  },
  {
    "word": "健やか",
    "reading": "すこやか",
    "meaning": "vigorous, healthy, sound",
    "level": "1"
  },
  {
    "word": "濯ぐ",
    "reading": "すすぐ",
    "meaning": "to rinse, to wash out",
    "level": "1"
  },
  {
    "word": "進み",
    "reading": "すすみ",
    "meaning": "progress",
    "level": "1"
  },
  {
    "word": "裾",
    "reading": "すそ",
    "meaning": "(trouser) cuff, (skirt) hem, cut edge of a hairdo",
    "level": "1"
  },
  {
    "word": "スタジオ",
    "reading": "スタジオ",
    "meaning": "studio",
    "level": "1"
  },
  {
    "word": "スチーム",
    "reading": "スチーム",
    "meaning": "steam",
    "level": "1"
  },
  {
    "word": "ストライキ",
    "reading": "ストライキ",
    "meaning": "strike",
    "level": "1"
  },
  {
    "word": "スト",
    "reading": "スト",
    "meaning": "(abbr.) strike",
    "level": "1"
  },
  {
    "word": "ストロー",
    "reading": "ストロー",
    "meaning": "straw",
    "level": "1"
  },
  {
    "word": "ストロボ",
    "reading": "ストロボ",
    "meaning": "stroboscope (literally: strobo, strobe lamp, stroboscopic lamp)",
    "level": "1"
  },
  {
    "word": "すばしこい",
    "reading": "すばしこい",
    "meaning": "nimble, smart, quick",
    "level": "1"
  },
  {
    "word": "素早い",
    "reading": "すばやい",
    "meaning": "fast, quick",
    "level": "1"
  },
  {
    "word": "ずばり",
    "reading": "ずばり",
    "meaning": "decisively, unreservedly, frankly",
    "level": "1"
  },
  {
    "word": "スプリング",
    "reading": "スプリング",
    "meaning": "spring",
    "level": "1"
  },
  {
    "word": "スペース",
    "reading": "スペース",
    "meaning": "space",
    "level": "1"
  },
  {
    "word": "ずぶぬれ",
    "reading": "ずぶぬれ",
    "meaning": "soaked, dripping wet",
    "level": "1"
  },
  {
    "word": "スポーツカー",
    "reading": "スポーツカー",
    "meaning": "sports car",
    "level": "1"
  },
  {
    "word": "澄ます",
    "reading": "すます",
    "meaning": "to clear, to make clear, to listen for",
    "level": "1"
  },
  {
    "word": "清ます",
    "reading": "すます",
    "meaning": "to clear, to make clear, to listen for",
    "level": "1"
  },
  {
    "word": "済ます",
    "reading": "すます",
    "meaning": "to finish; to settle; to do without",
    "level": "1"
  },
  {
    "word": "すみやか",
    "reading": "すみやか",
    "meaning": "speedy",
    "level": "1"
  },
  {
    "word": "スラックス",
    "reading": "スラックス",
    "meaning": "slacks",
    "level": "1"
  },
  {
    "word": "ずらっと",
    "reading": "ずらっと",
    "meaning": "in a line, in a row",
    "level": "1"
  },
  {
    "word": "ずるずる",
    "reading": "ずるずる",
    "meaning": "dragging on, sound of sniffling",
    "level": "1"
  },
  {
    "word": "ずれ",
    "reading": "ずれ",
    "meaning": "difference, gap",
    "level": "1"
  },
  {
    "word": "すれちがい",
    "reading": "すれちがい",
    "meaning": "chance encounter",
    "level": "1"
  },
  {
    "word": "擦れる",
    "reading": "すれる",
    "meaning": "to rub, to chafe",
    "level": "1"
  },
  {
    "word": "すんなり",
    "reading": "すんなり",
    "meaning": "pass with no objection, slim, slender",
    "level": "1"
  },
  {
    "word": "生育",
    "reading": "せいいく",
    "meaning": "growth, development, breeding",
    "level": "1"
  },
  {
    "word": "成育",
    "reading": "せいいく",
    "meaning": "growth, raising",
    "level": "1"
  },
  {
    "word": "成果",
    "reading": "せいか",
    "meaning": "results, fruits",
    "level": "1"
  },
  {
    "word": "正解",
    "reading": "せいかい",
    "meaning": "correct, right answer, solution",
    "level": "1"
  },
  {
    "word": "正義",
    "reading": "せいぎ",
    "meaning": "justice, right, righteousness",
    "level": "1"
  },
  {
    "word": "生計",
    "reading": "せいけい",
    "meaning": "livelihood, living",
    "level": "1"
  },
  {
    "word": "政権",
    "reading": "せいけん",
    "meaning": "(political) administration, political power",
    "level": "1"
  },
  {
    "word": "星座",
    "reading": "せいざ",
    "meaning": "constellation",
    "level": "1"
  },
  {
    "word": "制裁",
    "reading": "せいさい",
    "meaning": "restraint, sanctions, punishment",
    "level": "1"
  },
  {
    "word": "政策",
    "reading": "せいさく",
    "meaning": "political measures, policy",
    "level": "1"
  },
  {
    "word": "生死",
    "reading": "せいし",
    "meaning": "life and death",
    "level": "1"
  },
  {
    "word": "静止",
    "reading": "せいし",
    "meaning": "stillness, repose, standing still",
    "level": "1"
  },
  {
    "word": "誠実",
    "reading": "せいじつ",
    "meaning": "sincere, honest, faithful",
    "level": "1"
  },
  {
    "word": "成熟",
    "reading": "せいじゅく",
    "meaning": "maturity, ripeness",
    "level": "1"
  },
  {
    "word": "青春",
    "reading": "せいしゅん",
    "meaning": "youth, springtime of life, adolescent",
    "level": "1"
  },
  {
    "word": "清純",
    "reading": "せいじゅん",
    "meaning": "purity, innocence",
    "level": "1"
  },
  {
    "word": "聖書",
    "reading": "せいしょ",
    "meaning": "Bible",
    "level": "1"
  },
  {
    "word": "正常",
    "reading": "せいじょう",
    "meaning": "normalcy, normality, normal",
    "level": "1"
  },
  {
    "word": "制する",
    "reading": "せいする",
    "meaning": "to control, to command",
    "level": "1"
  },
  {
    "word": "整然",
    "reading": "せいぜん",
    "meaning": "orderly, regular, well-organized",
    "level": "1"
  },
  {
    "word": "盛装",
    "reading": "せいそう",
    "meaning": "be dressed up, wear rich clothes",
    "level": "1"
  },
  {
    "word": "盛大",
    "reading": "せいだい",
    "meaning": "grand, prosperous, magnificent",
    "level": "1"
  },
  {
    "word": "清濁",
    "reading": "せいだく",
    "meaning": "good and evil, purity and impurity",
    "level": "1"
  },
  {
    "word": "制定",
    "reading": "せいてい",
    "meaning": "enactment, establishment, creation",
    "level": "1"
  },
  {
    "word": "静的",
    "reading": "せいてき",
    "meaning": "static",
    "level": "1"
  },
  {
    "word": "製鉄",
    "reading": "せいてつ",
    "meaning": "iron manufacture",
    "level": "1"
  },
  {
    "word": "晴天",
    "reading": "せいてん",
    "meaning": "fine weather",
    "level": "1"
  },
  {
    "word": "正当",
    "reading": "せいとう",
    "meaning": "just, due, proper",
    "level": "1"
  },
  {
    "word": "制服",
    "reading": "せいふく",
    "meaning": "uniform",
    "level": "1"
  },
  {
    "word": "征服",
    "reading": "せいふく",
    "meaning": "conquest, subjugation, overcoming",
    "level": "1"
  },
  {
    "word": "製法",
    "reading": "せいほう",
    "meaning": "manufacturing method, recipe, formula",
    "level": "1"
  },
  {
    "word": "精密",
    "reading": "せいみつ",
    "meaning": "precise, exact, detailed, minute",
    "level": "1"
  },
  {
    "word": "税務署",
    "reading": "ぜいむしょ",
    "meaning": "tax office",
    "level": "1"
  },
  {
    "word": "制約",
    "reading": "せいやく",
    "meaning": "limitation, constraints",
    "level": "1"
  },
  {
    "word": "勢力",
    "reading": "せいりょく",
    "meaning": "influence, power, might, strength",
    "level": "1"
  },
  {
    "word": "整列",
    "reading": "せいれつ",
    "meaning": "stand in a row, form a line",
    "level": "1"
  },
  {
    "word": "セール",
    "reading": "セール",
    "meaning": "sale",
    "level": "1"
  },
  {
    "word": "急かす",
    "reading": "せかす",
    "meaning": "to hurry, to urge on",
    "level": "1"
  },
  {
    "word": "伜",
    "reading": "せがれ",
    "meaning": "son, my son",
    "level": "1"
  },
  {
    "word": "責務",
    "reading": "せきむ",
    "meaning": "duty, obligation",
    "level": "1"
  },
  {
    "word": "セクション",
    "reading": "セクション",
    "meaning": "section",
    "level": "1"
  },
  {
    "word": "世辞",
    "reading": "せじ",
    "meaning": "flattery, compliment",
    "level": "1"
  },
  {
    "word": "世帯",
    "reading": "せたい",
    "meaning": "household",
    "level": "1"
  },
  {
    "word": "是正",
    "reading": "ぜせい",
    "meaning": "correction, revision",
    "level": "1"
  },
  {
    "word": "世代",
    "reading": "せだい",
    "meaning": "generation",
    "level": "1"
  },
  {
    "word": "切開",
    "reading": "せっかい",
    "meaning": "opening up, cutting through",
    "level": "1"
  },
  {
    "word": "セックス",
    "reading": "セックス",
    "meaning": "sex",
    "level": "1"
  },
  {
    "word": "切実",
    "reading": "せつじつ",
    "meaning": "compelling, serious, severe, acute",
    "level": "1"
  },
  {
    "word": "接触",
    "reading": "せっしょく",
    "meaning": "touch, contact",
    "level": "1"
  },
  {
    "word": "接続詞",
    "reading": "せつぞくし",
    "meaning": "conjunction",
    "level": "1"
  },
  {
    "word": "設置",
    "reading": "せっち",
    "meaning": "establishment, institution",
    "level": "1"
  },
  {
    "word": "折衷",
    "reading": "せっちゅう",
    "meaning": "compromise, cross, blending, eclecticism",
    "level": "1"
  },
  {
    "word": "設定",
    "reading": "せってい",
    "meaning": "establishment, creation",
    "level": "1"
  },
  {
    "word": "説得",
    "reading": "せっとく",
    "meaning": "persuasion",
    "level": "1"
  },
  {
    "word": "切ない",
    "reading": "せつない",
    "meaning": "painful, trying, sad",
    "level": "1"
  },
  {
    "word": "絶版",
    "reading": "ぜっぱん",
    "meaning": "out of print",
    "level": "1"
  },
  {
    "word": "設立",
    "reading": "せつりつ",
    "meaning": "establishment, foundation, institution",
    "level": "1"
  },
  {
    "word": "攻め",
    "reading": "せめ",
    "meaning": "attack, offense",
    "level": "1"
  },
  {
    "word": "ゼリー",
    "reading": "ゼリー",
    "meaning": "jelly",
    "level": "1"
  },
  {
    "word": "セレモニー",
    "reading": "セレモニー",
    "meaning": "ceremony",
    "level": "1"
  },
  {
    "word": "世論",
    "reading": "せろん",
    "meaning": "public opinion",
    "level": "1"
  },
  {
    "word": "先",
    "reading": "せん",
    "meaning": "priority, precedence, previous",
    "level": "1"
  },
  {
    "word": "繊維",
    "reading": "せんい",
    "meaning": "fiber, fiber, textile",
    "level": "1"
  },
  {
    "word": "全快",
    "reading": "ぜんかい",
    "meaning": "complete recovery of health",
    "level": "1"
  },
  {
    "word": "宣教",
    "reading": "せんきょう",
    "meaning": "religious mission",
    "level": "1"
  },
  {
    "word": "宣言",
    "reading": "せんげん",
    "meaning": "declaration, proclamation, announcement",
    "level": "1"
  },
  {
    "word": "戦災",
    "reading": "せんさい",
    "meaning": "war damage",
    "level": "1"
  },
  {
    "word": "専修",
    "reading": "せんしゅう",
    "meaning": "specialization",
    "level": "1"
  },
  {
    "word": "戦術",
    "reading": "せんじゅつ",
    "meaning": "tactics",
    "level": "1"
  },
  {
    "word": "センス",
    "reading": "センス",
    "meaning": "sense (for music, style, tact, etc.)",
    "level": "1"
  },
  {
    "word": "潜水",
    "reading": "せんすい",
    "meaning": "diving",
    "level": "1"
  },
  {
    "word": "全盛",
    "reading": "ぜんせい",
    "meaning": "height of prosperity",
    "level": "1"
  },
  {
    "word": "先代",
    "reading": "せんだい",
    "meaning": "family predecessor, previous age, previous generation",
    "level": "1"
  },
  {
    "word": "先だって",
    "reading": "せんだって",
    "meaning": "recently, the other day",
    "level": "1"
  },
  {
    "word": "先着",
    "reading": "せんちゃく",
    "meaning": "first arrival",
    "level": "1"
  },
  {
    "word": "前提",
    "reading": "ぜんてい",
    "meaning": "preamble, premise, prerequisite",
    "level": "1"
  },
  {
    "word": "先天的",
    "reading": "せんてんてき",
    "meaning": "inherent, congenital, hereditary",
    "level": "1"
  },
  {
    "word": "前途",
    "reading": "ぜんと",
    "meaning": "future prospects, outlook, the journey ahead",
    "level": "1"
  },
  {
    "word": "戦闘",
    "reading": "せんとう",
    "meaning": "battle, fight, combat",
    "level": "1"
  },
  {
    "word": "潜入",
    "reading": "せんにゅう",
    "meaning": "infiltration, sneaking in",
    "level": "1"
  },
  {
    "word": "船舶",
    "reading": "せんぱく",
    "meaning": "ship",
    "level": "1"
  },
  {
    "word": "全滅",
    "reading": "ぜんめつ",
    "meaning": "annihilation",
    "level": "1"
  },
  {
    "word": "専用",
    "reading": "せんよう",
    "meaning": "exclusive use, personal use",
    "level": "1"
  },
  {
    "word": "占領",
    "reading": "せんりょう",
    "meaning": "occupation, possession, have a room to oneself",
    "level": "1"
  },
  {
    "word": "善良",
    "reading": "ぜんりょう",
    "meaning": "goodness, excellence, virtue",
    "level": "1"
  },
  {
    "word": "戦力",
    "reading": "せんりょく",
    "meaning": "war potential",
    "level": "1"
  },
  {
    "word": "前例",
    "reading": "ぜんれい",
    "meaning": "precedent",
    "level": "1"
  },
  {
    "word": "相応",
    "reading": "そうおう",
    "meaning": "suitability, fitness",
    "level": "1"
  },
  {
    "word": "総会",
    "reading": "そうかい",
    "meaning": "general meeting",
    "level": "1"
  },
  {
    "word": "創刊",
    "reading": "そうかん",
    "meaning": "launching (e.g., newspaper, first issue)",
    "level": "1"
  },
  {
    "word": "雑木",
    "reading": "ぞうき",
    "meaning": "various kinds of small trees, assorted trees",
    "level": "1"
  },
  {
    "word": "早急",
    "reading": "そうきゅう",
    "meaning": "urgent",
    "level": "1"
  },
  {
    "word": "早急",
    "reading": "さっきゅう",
    "meaning": "urgent",
    "level": "1"
  },
  {
    "word": "増強",
    "reading": "ぞうきょう",
    "meaning": "reinforce, increase",
    "level": "1"
  },
  {
    "word": "送金",
    "reading": "そうきん",
    "meaning": "remittance, sending money",
    "level": "1"
  },
  {
    "word": "走行",
    "reading": "そうこう",
    "meaning": "running a wheeled vehicle (e.g., car, traveling)",
    "level": "1"
  },
  {
    "word": "総合",
    "reading": "そうごう",
    "meaning": "synthesis, generalization",
    "level": "1"
  },
  {
    "word": "捜索",
    "reading": "そうさく",
    "meaning": "search (esp. for someone or something missing, investigation)",
    "level": "1"
  },
  {
    "word": "蔵相",
    "reading": "ぞうしょう",
    "meaning": "Minister of Finance",
    "level": "1"
  },
  {
    "word": "装飾",
    "reading": "そうしょく",
    "meaning": "ornament",
    "level": "1"
  },
  {
    "word": "増進",
    "reading": "ぞうしん",
    "meaning": "promoting, increase, advance",
    "level": "1"
  },
  {
    "word": "相対",
    "reading": "そうたい",
    "meaning": "relative",
    "level": "1"
  },
  {
    "word": "壮大",
    "reading": "そうだい",
    "meaning": "magnificent, grand, majestic",
    "level": "1"
  },
  {
    "word": "騒動",
    "reading": "そうどう",
    "meaning": "strife, riot, rebellion",
    "level": "1"
  },
  {
    "word": "遭難",
    "reading": "そうなん",
    "meaning": "disaster, shipwreck, accident",
    "level": "1"
  },
  {
    "word": "相場",
    "reading": "そうば",
    "meaning": "market price, speculation, estimation",
    "level": "1"
  },
  {
    "word": "装備",
    "reading": "そうび",
    "meaning": "equipment",
    "level": "1"
  },
  {
    "word": "創立",
    "reading": "そうりつ",
    "meaning": "establishment, founding",
    "level": "1"
  },
  {
    "word": "添える",
    "reading": "そえる",
    "meaning": "to add to, to attach, to accompany",
    "level": "1"
  },
  {
    "word": "ソース",
    "reading": "ソース",
    "meaning": "source",
    "level": "1"
  },
  {
    "word": "即座に",
    "reading": "そくざに",
    "meaning": "immediately, right away",
    "level": "1"
  },
  {
    "word": "促進",
    "reading": "そくしん",
    "meaning": "promotion, acceleration, encouragement",
    "level": "1"
  },
  {
    "word": "即する",
    "reading": "そくする",
    "meaning": "to conform to, to agree with, to be adapted to,",
    "level": "1"
  },
  {
    "word": "束縛",
    "reading": "そくばく",
    "meaning": "restraint, restriction, confinement",
    "level": "1"
  },
  {
    "word": "側面",
    "reading": "そくめん",
    "meaning": "side, sidelight, lateral",
    "level": "1"
  },
  {
    "word": "損う",
    "reading": "そこなう",
    "meaning": "to harm, to hurt",
    "level": "1"
  },
  {
    "word": "そこら",
    "reading": "そこら",
    "meaning": "everywhere, somewhere",
    "level": "1"
  },
  {
    "word": "素材",
    "reading": "そざい",
    "meaning": "raw materials, subject matter",
    "level": "1"
  },
  {
    "word": "阻止",
    "reading": "そし",
    "meaning": "obstruction, check, hindrance",
    "level": "1"
  },
  {
    "word": "訴訟",
    "reading": "そしょう",
    "meaning": "litigation, lawsuit",
    "level": "1"
  },
  {
    "word": "育ち",
    "reading": "そだち",
    "meaning": "breeding, growth",
    "level": "1"
  },
  {
    "word": "措置",
    "reading": "そち",
    "meaning": "measure, step",
    "level": "1"
  },
  {
    "word": "ソックス",
    "reading": "ソックス",
    "meaning": "socks",
    "level": "1"
  },
  {
    "word": "素っ気無い",
    "reading": "そっけない",
    "meaning": "cold, short, curt, blunt",
    "level": "1"
  },
  {
    "word": "外方",
    "reading": "そっぽ",
    "meaning": "look (or turn) the other way",
    "level": "1"
  },
  {
    "word": "備え付ける",
    "reading": "そなえつける",
    "meaning": "to provide, to equip, to install",
    "level": "1"
  },
  {
    "word": "備わる",
    "reading": "そなわる",
    "meaning": "to be furnished with",
    "level": "1"
  },
  {
    "word": "具わる",
    "reading": "そなわる",
    "meaning": "to be furnished with",
    "level": "1"
  },
  {
    "word": "聳える",
    "reading": "そびえる",
    "meaning": "to rise, to tower, to soar",
    "level": "1"
  },
  {
    "word": "素朴",
    "reading": "そぼく",
    "meaning": "simplicity, artlessness, naivety",
    "level": "1"
  },
  {
    "word": "背く",
    "reading": "そむく",
    "meaning": "to run counter to, to go against",
    "level": "1"
  },
  {
    "word": "染まる",
    "reading": "そまる",
    "meaning": "to be dyed",
    "level": "1"
  },
  {
    "word": "染める",
    "reading": "そめる",
    "meaning": "to dye, to color",
    "level": "1"
  },
  {
    "word": "そらす",
    "reading": "そらす",
    "meaning": "to bend, to warp",
    "level": "1"
  },
  {
    "word": "そり (～にのる)",
    "reading": "そり (～にのる)",
    "meaning": "sleigh, sled",
    "level": "1"
  },
  {
    "word": "反る",
    "reading": "そる",
    "meaning": "to warp, to be warped, to curve",
    "level": "1"
  },
  {
    "word": "それゆえ",
    "reading": "それゆえ",
    "meaning": "therefore, for that reason, so",
    "level": "1"
  },
  {
    "word": "ソロ",
    "reading": "ソロ",
    "meaning": "solo",
    "level": "1"
  },
  {
    "word": "揃い",
    "reading": "そろい",
    "meaning": "set, suit, uniform",
    "level": "1"
  },
  {
    "word": "ぞんざい",
    "reading": "ぞんざい",
    "meaning": "rude, careless, slovenly",
    "level": "1"
  },
  {
    "word": "損失",
    "reading": "そんしつ",
    "meaning": "loss",
    "level": "1"
  },
  {
    "word": "存続",
    "reading": "そんぞく",
    "meaning": "duration, continuance",
    "level": "1"
  },
  {
    "word": "ダース",
    "reading": "ダース",
    "meaning": "dozen",
    "level": "1"
  },
  {
    "word": "対応",
    "reading": "たいおう",
    "meaning": "dealing with",
    "level": "1"
  },
  {
    "word": "大家",
    "reading": "たいか",
    "meaning": "rich family, distinguished family",
    "level": "1"
  },
  {
    "word": "退化",
    "reading": "たいか",
    "meaning": "degeneration, retrogression",
    "level": "1"
  },
  {
    "word": "大概",
    "reading": "たいがい",
    "meaning": "in general, mainly",
    "level": "1"
  },
  {
    "word": "体格",
    "reading": "たいかく",
    "meaning": "physique, constitution",
    "level": "1"
  },
  {
    "word": "大金",
    "reading": "たいきん",
    "meaning": "large amount of money",
    "level": "1"
  },
  {
    "word": "待遇",
    "reading": "たいぐう",
    "meaning": "treatment, reception",
    "level": "1"
  },
  {
    "word": "対決",
    "reading": "たいけつ",
    "meaning": "confrontation, showdown",
    "level": "1"
  },
  {
    "word": "体験",
    "reading": "たいけん",
    "meaning": "personal experience",
    "level": "1"
  },
  {
    "word": "対抗",
    "reading": "たいこう",
    "meaning": "opposition, antagonism",
    "level": "1"
  },
  {
    "word": "退治",
    "reading": "たいじ",
    "meaning": "extermination",
    "level": "1"
  },
  {
    "word": "大衆",
    "reading": "たいしゅう",
    "meaning": "general public",
    "level": "1"
  },
  {
    "word": "対処",
    "reading": "たいしょ",
    "meaning": "deal with, cope",
    "level": "1"
  },
  {
    "word": "退職",
    "reading": "たいしょく",
    "meaning": "retirement (from office)",
    "level": "1"
  },
  {
    "word": "題する",
    "reading": "だいする",
    "meaning": "to title",
    "level": "1"
  },
  {
    "word": "態勢",
    "reading": "たいせい",
    "meaning": "attitude, conditions, tendency",
    "level": "1"
  },
  {
    "word": "対談",
    "reading": "たいだん",
    "meaning": "talk, dialogue",
    "level": "1"
  },
  {
    "word": "大胆",
    "reading": "だいたん",
    "meaning": "bold, daring, audacious",
    "level": "1"
  },
  {
    "word": "対等",
    "reading": "たいとう",
    "meaning": "equivalent",
    "level": "1"
  },
  {
    "word": "台無し",
    "reading": "だいなし",
    "meaning": "mess, spoiled, (come to) nothing",
    "level": "1"
  },
  {
    "word": "滞納",
    "reading": "たいのう",
    "meaning": "non-payment, default",
    "level": "1"
  },
  {
    "word": "対比",
    "reading": "たいひ",
    "meaning": "contrast, comparison",
    "level": "1"
  },
  {
    "word": "タイピスト",
    "reading": "タイピスト",
    "meaning": "typist",
    "level": "1"
  },
  {
    "word": "大部",
    "reading": "たいぶ",
    "meaning": "most (e.g., most part, greater, fairly, a good deal, much)",
    "level": "1"
  },
  {
    "word": "大便",
    "reading": "だいべん",
    "meaning": "feces",
    "level": "1"
  },
  {
    "word": "代弁",
    "reading": "だいべん",
    "meaning": "speak for another",
    "level": "1"
  },
  {
    "word": "待望",
    "reading": "たいぼう",
    "meaning": "long-expected, waiting",
    "level": "1"
  },
  {
    "word": "台本",
    "reading": "だいほん",
    "meaning": "libretto, scenario",
    "level": "1"
  },
  {
    "word": "タイマー",
    "reading": "タイマー",
    "meaning": "timer",
    "level": "1"
  },
  {
    "word": "怠慢",
    "reading": "たいまん",
    "meaning": "negligence, carelessness",
    "level": "1"
  },
  {
    "word": "タイミング",
    "reading": "タイミング",
    "meaning": "timing",
    "level": "1"
  },
  {
    "word": "タイム",
    "reading": "タイム",
    "meaning": "time",
    "level": "1"
  },
  {
    "word": "タイムリー",
    "reading": "タイムリー",
    "meaning": "timely, run-batted-in (baseball), RBI",
    "level": "1"
  },
  {
    "word": "対面",
    "reading": "たいめん",
    "meaning": "interview, meeting",
    "level": "1"
  },
  {
    "word": "代用",
    "reading": "だいよう",
    "meaning": "substitution",
    "level": "1"
  },
  {
    "word": "体力",
    "reading": "たいりょく",
    "meaning": "physical strength",
    "level": "1"
  },
  {
    "word": "タイル",
    "reading": "タイル",
    "meaning": "tile",
    "level": "1"
  },
  {
    "word": "対話",
    "reading": "たいわ",
    "meaning": "conversation, dialogue",
    "level": "1"
  },
  {
    "word": "耐える",
    "reading": "たえる",
    "meaning": "to endure, to put up with",
    "level": "1"
  },
  {
    "word": "堪える",
    "reading": "たえる",
    "meaning": "to endure, to put up with",
    "level": "1"
  },
  {
    "word": "絶える",
    "reading": "たえる",
    "meaning": "to die out, to become extinct",
    "level": "1"
  },
  {
    "word": "断える",
    "reading": "たえる",
    "meaning": "to cease, to become extinct",
    "level": "1"
  },
  {
    "word": "打開",
    "reading": "だかい",
    "meaning": "solution, breakthrough",
    "level": "1"
  },
  {
    "word": "焚火",
    "reading": "たきび",
    "meaning": "(open) fire",
    "level": "1"
  },
  {
    "word": "妥協",
    "reading": "だきょう",
    "meaning": "compromise, giving in",
    "level": "1"
  },
  {
    "word": "たくましい",
    "reading": "たくましい",
    "meaning": "burly, strong, sturdy",
    "level": "1"
  },
  {
    "word": "巧み",
    "reading": "たくみ",
    "meaning": "skill, cleverness",
    "level": "1"
  },
  {
    "word": "丈",
    "reading": "たけ",
    "meaning": "length, height",
    "level": "1"
  },
  {
    "word": "打撃",
    "reading": "だげき",
    "meaning": "blow, damage; batting (baseball)",
    "level": "1"
  },
  {
    "word": "妥結",
    "reading": "だけつ",
    "meaning": "agreement",
    "level": "1"
  },
  {
    "word": "駄作",
    "reading": "ださく",
    "meaning": "poor work",
    "level": "1"
  },
  {
    "word": "足し算",
    "reading": "たしざん",
    "meaning": "addition",
    "level": "1"
  },
  {
    "word": "多数決",
    "reading": "たすうけつ",
    "meaning": "majority rule",
    "level": "1"
  },
  {
    "word": "助け",
    "reading": "たすけ",
    "meaning": "assistance",
    "level": "1"
  },
  {
    "word": "携わる",
    "reading": "たずさわる",
    "meaning": "to engage, to involve",
    "level": "1"
  },
  {
    "word": "漂う",
    "reading": "ただよう",
    "meaning": "to drift about, to float, to hang in air",
    "level": "1"
  },
  {
    "word": "立ち去る",
    "reading": "たちさる",
    "meaning": "to leave, to depart",
    "level": "1"
  },
  {
    "word": "立ち寄る",
    "reading": "たちよる",
    "meaning": "to stop by, to drop in for a short visit",
    "level": "1"
  },
  {
    "word": "抱っこ",
    "reading": "だっこ",
    "meaning": "(child's) hug",
    "level": "1"
  },
  {
    "word": "達者",
    "reading": "たっしゃ",
    "meaning": "skillful, in good health",
    "level": "1"
  },
  {
    "word": "脱出",
    "reading": "だっしゅつ",
    "meaning": "escape",
    "level": "1"
  },
  {
    "word": "脱する",
    "reading": "だっする",
    "meaning": "to escape from, to get out",
    "level": "1"
  },
  {
    "word": "達成",
    "reading": "たっせい",
    "meaning": "achievement",
    "level": "1"
  },
  {
    "word": "脱退",
    "reading": "だったい",
    "meaning": "secession, withdrawal",
    "level": "1"
  },
  {
    "word": "だったら",
    "reading": "だったら",
    "meaning": "if it's the case",
    "level": "1"
  },
  {
    "word": "立て替える",
    "reading": "たてかえる",
    "meaning": "to pay in advance, to pay for another",
    "level": "1"
  },
  {
    "word": "建前",
    "reading": "たてまえ",
    "meaning": "position; stance one takes in public; principle",
    "level": "1"
  },
  {
    "word": "奉る",
    "reading": "たてまつる",
    "meaning": "to offer, to do respectfully",
    "level": "1"
  },
  {
    "word": "だと",
    "reading": "だと",
    "meaning": "if it's the case",
    "level": "1"
  },
  {
    "word": "他動詞",
    "reading": "たどうし",
    "meaning": "transitive verb (direct object)",
    "level": "1"
  },
  {
    "word": "辿り着く",
    "reading": "たどりつく",
    "meaning": "to reach, to make it somehow",
    "level": "1"
  },
  {
    "word": "辿る",
    "reading": "たどる",
    "meaning": "to follow (road, to pursue (course), to follow up",
    "level": "1"
  },
  {
    "word": "束ねる",
    "reading": "たばねる",
    "meaning": "to tie up in a bundle, to control",
    "level": "1"
  },
  {
    "word": "だぶだぶ",
    "reading": "だぶだぶ",
    "meaning": "loose, baggy",
    "level": "1"
  },
  {
    "word": "他方",
    "reading": "たほう",
    "meaning": "another side, on the other hand",
    "level": "1"
  },
  {
    "word": "多忙",
    "reading": "たぼう",
    "meaning": "busy",
    "level": "1"
  },
  {
    "word": "給う",
    "reading": "たまう",
    "meaning": "to receive, to grant",
    "level": "1"
  },
  {
    "word": "魂",
    "reading": "たましい",
    "meaning": "soul, spirit",
    "level": "1"
  },
  {
    "word": "溜まり",
    "reading": "たまり",
    "meaning": "collected things, gathering place, arrears",
    "level": "1"
  },
  {
    "word": "賜る",
    "reading": "たまわる",
    "meaning": "to grant, to bestow",
    "level": "1"
  },
  {
    "word": "保つ",
    "reading": "たもつ",
    "meaning": "to keep, to preserve, to sustain",
    "level": "1"
  },
  {
    "word": "たやすい",
    "reading": "たやすい",
    "meaning": "easy, simple, light",
    "level": "1"
  },
  {
    "word": "多様",
    "reading": "たよう",
    "meaning": "diversity, variety",
    "level": "1"
  },
  {
    "word": "だるい",
    "reading": "だるい",
    "meaning": "sluggish, feel heavy (tired), languid",
    "level": "1"
  },
  {
    "word": "弛み",
    "reading": "たるみ",
    "meaning": "slack, slackening",
    "level": "1"
  },
  {
    "word": "弛む",
    "reading": "たるむ",
    "meaning": "to slacken, to loosen, to relax",
    "level": "1"
  },
  {
    "word": "垂れる",
    "reading": "たれる",
    "meaning": "to hang, to droop; to drip",
    "level": "1"
  },
  {
    "word": "タレント",
    "reading": "タレント",
    "meaning": "talent, star, personality",
    "level": "1"
  },
  {
    "word": "タワー",
    "reading": "タワー",
    "meaning": "tower",
    "level": "1"
  },
  {
    "word": "単一",
    "reading": "たんいつ",
    "meaning": "single, simple, sole",
    "level": "1"
  },
  {
    "word": "短歌",
    "reading": "たんか",
    "meaning": "31-syllable Japanese poem",
    "level": "1"
  },
  {
    "word": "担架",
    "reading": "たんか",
    "meaning": "stretcher, litter",
    "level": "1"
  },
  {
    "word": "短気",
    "reading": "たんき",
    "meaning": "quick temper",
    "level": "1"
  },
  {
    "word": "団結",
    "reading": "だんけつ",
    "meaning": "unity, union, solidarity",
    "level": "1"
  },
  {
    "word": "探検",
    "reading": "たんけん",
    "meaning": "exploration, expedition",
    "level": "1"
  },
  {
    "word": "断言",
    "reading": "だんげん",
    "meaning": "assertion, declaration, affirmation",
    "level": "1"
  },
  {
    "word": "短縮",
    "reading": "たんしゅく",
    "meaning": "shortening, abbreviation, reduction",
    "level": "1"
  },
  {
    "word": "断然",
    "reading": "だんぜん",
    "meaning": "firmly, absolutely, definitely",
    "level": "1"
  },
  {
    "word": "炭素",
    "reading": "たんそ",
    "meaning": "carbon (C)",
    "level": "1"
  },
  {
    "word": "短大",
    "reading": "たんだい",
    "meaning": "junior college",
    "level": "1"
  },
  {
    "word": "単調",
    "reading": "たんちょう",
    "meaning": "monotony, monotone, dullness",
    "level": "1"
  },
  {
    "word": "単独",
    "reading": "たんどく",
    "meaning": "sole, single",
    "level": "1"
  },
  {
    "word": "旦那",
    "reading": "だんな",
    "meaning": "master (of house), husband (informal)",
    "level": "1"
  },
  {
    "word": "短波",
    "reading": "たんぱ",
    "meaning": "short wave",
    "level": "1"
  },
  {
    "word": "蛋白質",
    "reading": "たんぱくしつ",
    "meaning": "protein",
    "level": "1"
  },
  {
    "word": "ダンプ",
    "reading": "ダンプ",
    "meaning": "dump truck",
    "level": "1"
  },
  {
    "word": "断面",
    "reading": "だんめん",
    "meaning": "cross section",
    "level": "1"
  },
  {
    "word": "弾力",
    "reading": "だんりょく",
    "meaning": "elasticity, flexibility",
    "level": "1"
  },
  {
    "word": "治安",
    "reading": "ちあん",
    "meaning": "public order, security",
    "level": "1"
  },
  {
    "word": "チームワーク",
    "reading": "チームワーク",
    "meaning": "teamwork",
    "level": "1"
  },
  {
    "word": "チェンジ",
    "reading": "チェンジ",
    "meaning": "change",
    "level": "1"
  },
  {
    "word": "違える",
    "reading": "ちがえる",
    "meaning": "to change",
    "level": "1"
  },
  {
    "word": "畜産",
    "reading": "ちくさん",
    "meaning": "animal husbandry",
    "level": "1"
  },
  {
    "word": "畜生",
    "reading": "ちくしょう",
    "meaning": "beast, brute, damn",
    "level": "1"
  },
  {
    "word": "蓄積",
    "reading": "ちくせき",
    "meaning": "accumulation, accumulate, store",
    "level": "1"
  },
  {
    "word": "地形",
    "reading": "ちけい",
    "meaning": "landform, geographical features, topography",
    "level": "1"
  },
  {
    "word": "知性",
    "reading": "ちせい",
    "meaning": "intelligence",
    "level": "1"
  },
  {
    "word": "乳",
    "reading": "ちち",
    "meaning": "milk, breast, loop",
    "level": "1"
  },
  {
    "word": "縮まる",
    "reading": "ちぢまる",
    "meaning": "to be shortened, to be contracted, to shrink",
    "level": "1"
  },
  {
    "word": "秩序",
    "reading": "ちつじょ",
    "meaning": "order, regularity",
    "level": "1"
  },
  {
    "word": "窒息",
    "reading": "ちっそく",
    "meaning": "suffocation",
    "level": "1"
  },
  {
    "word": "知的",
    "reading": "ちてき",
    "meaning": "intellectual",
    "level": "1"
  },
  {
    "word": "着手",
    "reading": "ちゃくしゅ",
    "meaning": "embarkation, launch",
    "level": "1"
  },
  {
    "word": "着色",
    "reading": "ちゃくしょく",
    "meaning": "coloring, coloring",
    "level": "1"
  },
  {
    "word": "着席",
    "reading": "ちゃくせき",
    "meaning": "sit down, seat",
    "level": "1"
  },
  {
    "word": "着目",
    "reading": "ちゃくもく",
    "meaning": "attention",
    "level": "1"
  },
  {
    "word": "着陸",
    "reading": "ちゃくりく",
    "meaning": "landing, touch down",
    "level": "1"
  },
  {
    "word": "着工",
    "reading": "ちゃっこう",
    "meaning": "start of (construction) work",
    "level": "1"
  },
  {
    "word": "茶の間",
    "reading": "ちゃのま",
    "meaning": "living room (Japanese style)",
    "level": "1"
  },
  {
    "word": "茶の湯",
    "reading": "ちゃのゆ",
    "meaning": "tea ceremony",
    "level": "1"
  },
  {
    "word": "ちやほや",
    "reading": "ちやほや",
    "meaning": "pamper, make a fuss of, spoil",
    "level": "1"
  },
  {
    "word": "チャンネル",
    "reading": "チャンネル",
    "meaning": "a channel",
    "level": "1"
  },
  {
    "word": "宙返り",
    "reading": "ちゅうがえり",
    "meaning": "somersault, looping-the-loop",
    "level": "1"
  },
  {
    "word": "中継",
    "reading": "ちゅうけい",
    "meaning": "relay, hook-up",
    "level": "1"
  },
  {
    "word": "忠告",
    "reading": "ちゅうこく",
    "meaning": "advice, warning",
    "level": "1"
  },
  {
    "word": "中傷",
    "reading": "ちゅうしょう",
    "meaning": "slander, libel, defamation",
    "level": "1"
  },
  {
    "word": "中枢",
    "reading": "ちゅうすう",
    "meaning": "center, mainstay, nucleus",
    "level": "1"
  },
  {
    "word": "抽選",
    "reading": "ちゅうせん",
    "meaning": "lottery, raffle, drawing (of lots)",
    "level": "1"
  },
  {
    "word": "中断",
    "reading": "ちゅうだん",
    "meaning": "interruption, suspension, break",
    "level": "1"
  },
  {
    "word": "中毒",
    "reading": "ちゅうどく",
    "meaning": "poisoning",
    "level": "1"
  },
  {
    "word": "中腹",
    "reading": "ちゅうふく",
    "meaning": "mountain side, halfway up",
    "level": "1"
  },
  {
    "word": "中立",
    "reading": "ちゅうりつ",
    "meaning": "neutrality",
    "level": "1"
  },
  {
    "word": "中和",
    "reading": "ちゅうわ",
    "meaning": "neutralize, counteract",
    "level": "1"
  },
  {
    "word": "～著",
    "reading": "～ちょ",
    "meaning": "written by ~",
    "level": "1"
  },
  {
    "word": "腸",
    "reading": "ちょう",
    "meaning": "bowels, intestines",
    "level": "1"
  },
  {
    "word": "蝶",
    "reading": "ちょう",
    "meaning": "butterfly",
    "level": "1"
  },
  {
    "word": "超",
    "reading": "ちょう",
    "meaning": "super-, ultra-, hyper-",
    "level": "1"
  },
  {
    "word": "調印",
    "reading": "ちょういん",
    "meaning": "signature, sign, sealing",
    "level": "1"
  },
  {
    "word": "聴覚",
    "reading": "ちょうかく",
    "meaning": "the sense of hearing",
    "level": "1"
  },
  {
    "word": "長官",
    "reading": "ちょうかん",
    "meaning": "chief, (government) secretary",
    "level": "1"
  },
  {
    "word": "聴講",
    "reading": "ちょうこう",
    "meaning": "lecture attendance, auditing",
    "level": "1"
  },
  {
    "word": "徴収",
    "reading": "ちょうしゅう",
    "meaning": "collection, levy",
    "level": "1"
  },
  {
    "word": "聴診器",
    "reading": "ちょうしんき",
    "meaning": "stethoscope",
    "level": "1"
  },
  {
    "word": "調停",
    "reading": "ちょうてい",
    "meaning": "arbitration, conciliation, mediation",
    "level": "1"
  },
  {
    "word": "重複",
    "reading": "ちょうふく",
    "meaning": "duplication, repetition, overlapping, redundancy, restoration",
    "level": "1"
  },
  {
    "word": "長編",
    "reading": "ちょうへん",
    "meaning": "long (e.g., novel, film)",
    "level": "1"
  },
  {
    "word": "重宝",
    "reading": "ちょうほう",
    "meaning": "convenient, useful",
    "level": "1"
  },
  {
    "word": "調理",
    "reading": "ちょうり",
    "meaning": "cooking",
    "level": "1"
  },
  {
    "word": "調和",
    "reading": "ちょうわ",
    "meaning": "harmony",
    "level": "1"
  },
  {
    "word": "ちょくちょく",
    "reading": "ちょくちょく",
    "meaning": "often, frequently, now and then, occasionally",
    "level": "1"
  },
  {
    "word": "直面",
    "reading": "ちょくめん",
    "meaning": "confrontation",
    "level": "1"
  },
  {
    "word": "著書",
    "reading": "ちょしょ",
    "meaning": "literary work, book",
    "level": "1"
  },
  {
    "word": "貯蓄",
    "reading": "ちょちく",
    "meaning": "savings",
    "level": "1"
  },
  {
    "word": "直感",
    "reading": "ちょっかん",
    "meaning": "intuition, instinct",
    "level": "1"
  },
  {
    "word": "著名",
    "reading": "ちょめい",
    "meaning": "well-known, noted, celebrated",
    "level": "1"
  },
  {
    "word": "ちらっと",
    "reading": "ちらっと",
    "meaning": "at a glance, by accident",
    "level": "1"
  },
  {
    "word": "塵",
    "reading": "ちり",
    "meaning": "dust, dirt",
    "level": "1"
  },
  {
    "word": "塵取り",
    "reading": "ちりとり",
    "meaning": "dustpan",
    "level": "1"
  },
  {
    "word": "賃金",
    "reading": "ちんぎん",
    "meaning": "wages",
    "level": "1"
  },
  {
    "word": "沈殿",
    "reading": "ちんでん",
    "meaning": "precipitation, deposition, settlement",
    "level": "1"
  },
  {
    "word": "沈没",
    "reading": "ちんぼつ",
    "meaning": "sinking, foundering",
    "level": "1"
  },
  {
    "word": "沈黙",
    "reading": "ちんもく",
    "meaning": "silence, reticence",
    "level": "1"
  },
  {
    "word": "陳列",
    "reading": "ちんれつ",
    "meaning": "exhibition, display, show",
    "level": "1"
  },
  {
    "word": "追及",
    "reading": "ついきゅう",
    "meaning": "investigation, inquiry",
    "level": "1"
  },
  {
    "word": "追跡",
    "reading": "ついせき",
    "meaning": "pursuit",
    "level": "1"
  },
  {
    "word": "追放",
    "reading": "ついほう",
    "meaning": "exile, banishment",
    "level": "1"
  },
  {
    "word": "費やす",
    "reading": "ついやす",
    "meaning": "to spend, to devote, to waste",
    "level": "1"
  },
  {
    "word": "墜落",
    "reading": "ついらく",
    "meaning": "falling, crashing",
    "level": "1"
  },
  {
    "word": "痛感",
    "reading": "つうかん",
    "meaning": "feeling keenly, fully realizing",
    "level": "1"
  },
  {
    "word": "通常",
    "reading": "つうじょう",
    "meaning": "common, normal, usual",
    "level": "1"
  },
  {
    "word": "痛切",
    "reading": "つうせつ",
    "meaning": "keen, deep",
    "level": "1"
  },
  {
    "word": "杖",
    "reading": "つえ",
    "meaning": "cane",
    "level": "1"
  },
  {
    "word": "使い道",
    "reading": "つかいみち",
    "meaning": "use",
    "level": "1"
  },
  {
    "word": "仕える",
    "reading": "つかえる",
    "meaning": "to serve, to work for",
    "level": "1"
  },
  {
    "word": "司る",
    "reading": "つかさどる",
    "meaning": "to rule, to govern, to administer",
    "level": "1"
  },
  {
    "word": "つかの間",
    "reading": "つかのま",
    "meaning": "moment, brief time,",
    "level": "1"
  },
  {
    "word": "月並",
    "reading": "つきなみ",
    "meaning": "conventional, trite, common",
    "level": "1"
  },
  {
    "word": "継目",
    "reading": "つぎめ",
    "meaning": "joint, seam",
    "level": "1"
  },
  {
    "word": "尽きる",
    "reading": "つきる",
    "meaning": "to be used up, to be run out",
    "level": "1"
  },
  {
    "word": "尽くす",
    "reading": "つくす",
    "meaning": "to exhaust, to run out; to devote, to serve",
    "level": "1"
  },
  {
    "word": "つくづく",
    "reading": "つくづく",
    "meaning": "completely, really",
    "level": "1"
  },
  {
    "word": "作り",
    "reading": "つくり",
    "meaning": "make up, structure, physique",
    "level": "1"
  },
  {
    "word": "造り",
    "reading": "つくり",
    "meaning": "make up, structure, physique",
    "level": "1"
  },
  {
    "word": "繕う",
    "reading": "つくろう",
    "meaning": "to mend, to repair",
    "level": "1"
  },
  {
    "word": "付け加える",
    "reading": "つけくわえる",
    "meaning": "to add one thing to another",
    "level": "1"
  },
  {
    "word": "告げる",
    "reading": "つげる",
    "meaning": "to inform",
    "level": "1"
  },
  {
    "word": "つじつま (はなしの～)",
    "reading": "つじつま (はなしの～)",
    "meaning": "coherence, consistency",
    "level": "1"
  },
  {
    "word": "筒",
    "reading": "つつ",
    "meaning": "pipe, tube",
    "level": "1"
  },
  {
    "word": "突く",
    "reading": "つつく",
    "meaning": "to thrust, to strike, to attack; to poke, to nudge, to pick at",
    "level": "1"
  },
  {
    "word": "突っ突く",
    "reading": "つっつく",
    "meaning": "to prompt someone",
    "level": "1"
  },
  {
    "word": "謹む",
    "reading": "つつしむ",
    "meaning": "to be careful, to be chaste or discreet",
    "level": "1"
  },
  {
    "word": "突っ張る",
    "reading": "つっぱる",
    "meaning": "to support, to become stiff; to thrust (ones opponent), to stick to (ones opinion), to insist on",
    "level": "1"
  },
  {
    "word": "務まる",
    "reading": "つとまる",
    "meaning": "be equal, be fit",
    "level": "1"
  },
  {
    "word": "勤め先",
    "reading": "つとめさき",
    "meaning": "place of work",
    "level": "1"
  },
  {
    "word": "努めて",
    "reading": "つとめて",
    "meaning": "make an effort!, work hard!",
    "level": "1"
  },
  {
    "word": "津波",
    "reading": "つなみ",
    "meaning": "tsunami, tidal wave",
    "level": "1"
  },
  {
    "word": "つねる",
    "reading": "つねる",
    "meaning": "to pinch",
    "level": "1"
  },
  {
    "word": "角",
    "reading": "つの",
    "meaning": "horn",
    "level": "1"
  },
  {
    "word": "募る",
    "reading": "つのる",
    "meaning": "to invite, to solicit help, participation, etc",
    "level": "1"
  },
  {
    "word": "唾",
    "reading": "つば",
    "meaning": "saliva, spit, sputum",
    "level": "1"
  },
  {
    "word": "呟く",
    "reading": "つぶやく",
    "meaning": "to mutter, to murmur",
    "level": "1"
  },
  {
    "word": "つぶら",
    "reading": "つぶら",
    "meaning": "round, rotund",
    "level": "1"
  },
  {
    "word": "つぶる (めを～)",
    "reading": "つぶる (めを～)",
    "meaning": "to close the eyes",
    "level": "1"
  },
  {
    "word": "壷",
    "reading": "つぼ",
    "meaning": "jar, pot, vase",
    "level": "1"
  },
  {
    "word": "蕾",
    "reading": "つぼみ",
    "meaning": "bud, flower bud",
    "level": "1"
  },
  {
    "word": "連なる",
    "reading": "つらなる",
    "meaning": "to extend, to stretch out, to stand in a row",
    "level": "1"
  },
  {
    "word": "貫く",
    "reading": "つらぬく",
    "meaning": "to go through",
    "level": "1"
  },
  {
    "word": "連ねる",
    "reading": "つらねる",
    "meaning": "to link, to join, to put together",
    "level": "1"
  },
  {
    "word": "釣り鐘",
    "reading": "つりがね",
    "meaning": "temple bell (for striking)",
    "level": "1"
  },
  {
    "word": "吊り革",
    "reading": "つりかわ",
    "meaning": "strap",
    "level": "1"
  },
  {
    "word": "手当",
    "reading": "てあて",
    "meaning": "allowance, compensation; treatment",
    "level": "1"
  },
  {
    "word": "定義",
    "reading": "ていぎ",
    "meaning": "definition",
    "level": "1"
  },
  {
    "word": "提供",
    "reading": "ていきょう",
    "meaning": "offer, program sponsoring",
    "level": "1"
  },
  {
    "word": "提携",
    "reading": "ていけい",
    "meaning": "cooperation, tie-up, joint business",
    "level": "1"
  },
  {
    "word": "体裁",
    "reading": "ていさい",
    "meaning": "decency, style, form, appearance",
    "level": "1"
  },
  {
    "word": "提示",
    "reading": "ていじ",
    "meaning": "presentation, exhibit, suggest, citation",
    "level": "1"
  },
  {
    "word": "ティシュペーパー",
    "reading": "ティシュペーパー",
    "meaning": "tissue",
    "level": "1"
  },
  {
    "word": "定食",
    "reading": "ていしょく",
    "meaning": "fixed-price lunch, set meal, dinner",
    "level": "1"
  },
  {
    "word": "訂正",
    "reading": "ていせい",
    "meaning": "correction, revision",
    "level": "1"
  },
  {
    "word": "停滞",
    "reading": "ていたい",
    "meaning": "stagnation, tie-up, congestion, retention",
    "level": "1"
  },
  {
    "word": "邸宅",
    "reading": "ていたく",
    "meaning": "mansion, residence",
    "level": "1"
  },
  {
    "word": "定年",
    "reading": "ていねん",
    "meaning": "retirement age",
    "level": "1"
  },
  {
    "word": "堤防",
    "reading": "ていぼう",
    "meaning": "bank, weir",
    "level": "1"
  },
  {
    "word": "手遅れ",
    "reading": "ておくれ",
    "meaning": "being (too); belated treatment",
    "level": "1"
  },
  {
    "word": "でかい",
    "reading": "でかい",
    "meaning": "huge",
    "level": "1"
  },
  {
    "word": "手掛かり",
    "reading": "てがかり",
    "meaning": "hint, clue, key",
    "level": "1"
  },
  {
    "word": "手掛ける",
    "reading": "てがける",
    "meaning": "to handle, to manage, to work with",
    "level": "1"
  },
  {
    "word": "手数",
    "reading": "てかず",
    "meaning": "trouble, labor, handling",
    "level": "1"
  },
  {
    "word": "手軽",
    "reading": "てがる",
    "meaning": "easy, simple, cheap",
    "level": "1"
  },
  {
    "word": "適応",
    "reading": "てきおう",
    "meaning": "adaptation, accommodation, conformity",
    "level": "1"
  },
  {
    "word": "適宜",
    "reading": "てきぎ",
    "meaning": "suitability",
    "level": "1"
  },
  {
    "word": "適性",
    "reading": "てきせい",
    "meaning": "aptitude",
    "level": "1"
  },
  {
    "word": "できもの",
    "reading": "できもの",
    "meaning": "boil, rash",
    "level": "1"
  },
  {
    "word": "手際",
    "reading": "てぎわ",
    "meaning": "performance, skill, tact",
    "level": "1"
  },
  {
    "word": "出くわす",
    "reading": "でくわす",
    "meaning": "to happen to meet, to come across",
    "level": "1"
  },
  {
    "word": "手順",
    "reading": "てじゅん",
    "meaning": "process, procedure, protocol",
    "level": "1"
  },
  {
    "word": "手錠",
    "reading": "てじょう",
    "meaning": "handcuffs, manacles",
    "level": "1"
  },
  {
    "word": "手数",
    "reading": "てすう",
    "meaning": "trouble, labor, handling",
    "level": "1"
  },
  {
    "word": "デコレーション",
    "reading": "デコレーション",
    "meaning": "decoration",
    "level": "1"
  },
  {
    "word": "手近",
    "reading": "てぢか",
    "meaning": "near, handy, familiar",
    "level": "1"
  },
  {
    "word": "てっきり",
    "reading": "てっきり",
    "meaning": "surely, certainly, beyond doubt",
    "level": "1"
  },
  {
    "word": "鉄鋼",
    "reading": "てっこう",
    "meaning": "iron and steel",
    "level": "1"
  },
  {
    "word": "デッサン",
    "reading": "デッサン",
    "meaning": "rough sketch (FRE: dessin)",
    "level": "1"
  },
  {
    "word": "徹する",
    "reading": "てっする",
    "meaning": "to devote oneself, to believe in",
    "level": "1"
  },
  {
    "word": "てっぺん",
    "reading": "てっぺん",
    "meaning": "top, summit, apex",
    "level": "1"
  },
  {
    "word": "鉄棒",
    "reading": "てつぼう",
    "meaning": "iron rod, crowbar, horizontal bar (gymnastics)",
    "level": "1"
  },
  {
    "word": "出直し",
    "reading": "でなおし",
    "meaning": "adjustment, touch up",
    "level": "1"
  },
  {
    "word": "掌",
    "reading": "てのひら",
    "meaning": "the palm",
    "level": "1"
  },
  {
    "word": "手配",
    "reading": "てはい",
    "meaning": "arrangement, search (by police)",
    "level": "1"
  },
  {
    "word": "手筈",
    "reading": "てはず",
    "meaning": "arrangement, plan, program",
    "level": "1"
  },
  {
    "word": "手引",
    "reading": "てびき",
    "meaning": "guidance, guide, introduction",
    "level": "1"
  },
  {
    "word": "手本",
    "reading": "てほん",
    "meaning": "model, pattern",
    "level": "1"
  },
  {
    "word": "手回し",
    "reading": "てまわし",
    "meaning": "preparations, arrangements",
    "level": "1"
  },
  {
    "word": "手元",
    "reading": "てもと",
    "meaning": "(money) on hand or at home, one's purse; usual skill",
    "level": "1"
  },
  {
    "word": "デモンストレーション",
    "reading": "デモンストレーション",
    "meaning": "demonstration",
    "level": "1"
  },
  {
    "word": "照り返す",
    "reading": "てりかえす",
    "meaning": "to reflect, to throw back light",
    "level": "1"
  },
  {
    "word": "テレックス",
    "reading": "テレックス",
    "meaning": "telex, teletypewriter exchange",
    "level": "1"
  },
  {
    "word": "手分け",
    "reading": "てわけ",
    "meaning": "division of labor",
    "level": "1"
  },
  {
    "word": "天",
    "reading": "てん",
    "meaning": "heaven, sky",
    "level": "1"
  },
  {
    "word": "田園",
    "reading": "でんえん",
    "meaning": "country, rural districts",
    "level": "1"
  },
  {
    "word": "天下",
    "reading": "てんか",
    "meaning": "the world, whole country",
    "level": "1"
  },
  {
    "word": "転回",
    "reading": "てんかい",
    "meaning": "revolution, rotation",
    "level": "1"
  },
  {
    "word": "連休",
    "reading": "れんきゅう",
    "meaning": "consecutive holidays",
    "level": "1"
  },
  {
    "word": "レンジ",
    "reading": "レンジ",
    "meaning": "range, stove",
    "level": "1"
  },
  {
    "word": "連日",
    "reading": "れんじつ",
    "meaning": "every day",
    "level": "1"
  },
  {
    "word": "連帯",
    "reading": "れんたい",
    "meaning": "solidarity",
    "level": "1"
  },
  {
    "word": "レンタカー",
    "reading": "レンタカー",
    "meaning": "rented car",
    "level": "1"
  },
  {
    "word": "連中",
    "reading": "れんちゅう",
    "meaning": "colleagues, company, a lot",
    "level": "1"
  },
  {
    "word": "レントゲン",
    "reading": "レントゲン",
    "meaning": "X-ray (lit: Roentgen)",
    "level": "1"
  },
  {
    "word": "連邦",
    "reading": "れんぽう",
    "meaning": "commonwealth, federation of states",
    "level": "1"
  },
  {
    "word": "連盟",
    "reading": "れんめい",
    "meaning": "league, union, alliance",
    "level": "1"
  },
  {
    "word": "老衰",
    "reading": "ろうすい",
    "meaning": "senility, senile decay",
    "level": "1"
  },
  {
    "word": "朗読",
    "reading": "ろうどく",
    "meaning": "reading aloud, recitation",
    "level": "1"
  },
  {
    "word": "浪費",
    "reading": "ろうひ",
    "meaning": "waste, extravagance",
    "level": "1"
  },
  {
    "word": "労力",
    "reading": "ろうりょく",
    "meaning": "labor, effort, trouble",
    "level": "1"
  },
  {
    "word": "ロープウエイ",
    "reading": "ロープウエイ",
    "meaning": "ropeway, aerial tram",
    "level": "1"
  },
  {
    "word": "ロープ",
    "reading": "ロープ",
    "meaning": "rope",
    "level": "1"
  },
  {
    "word": "ろくな",
    "reading": "ろくな",
    "meaning": "satisfactory, decent",
    "level": "1"
  },
  {
    "word": "露骨",
    "reading": "ろこつ",
    "meaning": "blunt, outspoken; conspicuous; broad, suggestive",
    "level": "1"
  },
  {
    "word": "ロマンチック",
    "reading": "ロマンチック",
    "meaning": "romantic",
    "level": "1"
  },
  {
    "word": "論議",
    "reading": "ろんぎ",
    "meaning": "discussion",
    "level": "1"
  },
  {
    "word": "論理",
    "reading": "ろんり",
    "meaning": "logic",
    "level": "1"
  },
  {
    "word": "惑星",
    "reading": "わくせい",
    "meaning": "planet",
    "level": "1"
  },
  {
    "word": "技",
    "reading": "わざ",
    "meaning": "art, technique",
    "level": "1"
  },
  {
    "word": "わざわざ",
    "reading": "わざわざ",
    "meaning": "take the trouble (to do), doing something especially rather than incidentally",
    "level": "1"
  },
  {
    "word": "煩わしい",
    "reading": "わずらわしい",
    "meaning": "burdensome, troublesome, complicated",
    "level": "1"
  },
  {
    "word": "渡り鳥",
    "reading": "わたりどり",
    "meaning": "migratory bird, bird of passage",
    "level": "1"
  },
  {
    "word": "ワット",
    "reading": "ワット",
    "meaning": "watt",
    "level": "1"
  },
  {
    "word": "詫び",
    "reading": "わび",
    "meaning": "apology",
    "level": "1"
  },
  {
    "word": "和文",
    "reading": "わぶん",
    "meaning": "Japanese text, sentence in Japanese",
    "level": "1"
  },
  {
    "word": "藁",
    "reading": "わら",
    "meaning": "straw",
    "level": "1"
  },
  {
    "word": "～割",
    "reading": "～わり",
    "meaning": "~ percent",
    "level": "1"
  },
  {
    "word": "割当",
    "reading": "わりあて",
    "meaning": "allotment, allocation, quota",
    "level": "1"
  },
  {
    "word": "割込む",
    "reading": "わりこむ",
    "meaning": "to cut in, to disturb",
    "level": "1"
  },
  {
    "word": "悪者",
    "reading": "わるもの",
    "meaning": "bad fellow, rascal",
    "level": "1"
  },
  {
    "word": "我",
    "reading": "われ",
    "meaning": "me, oneself, self, ego",
    "level": "1"
  },
  {
    "word": "捗る",
    "reading": "はかどる",
    "meaning": "to make progress, to move right ahead (with the work), to advance",
    "level": "1"
  },
  {
    "word": "はかない",
    "reading": "はかない",
    "meaning": "short-lived, momentary, ephemeral",
    "level": "1"
  },
  {
    "word": "ばかばかしい",
    "reading": "ばかばかしい",
    "meaning": "stupid",
    "level": "1"
  },
  {
    "word": "破棄",
    "reading": "はき",
    "meaning": "revocation, annulment, breaking (e.g., treaty)",
    "level": "1"
  },
  {
    "word": "剥ぐ",
    "reading": "はぐ",
    "meaning": "to tear off, to peel off, to rip off",
    "level": "1"
  },
  {
    "word": "迫害",
    "reading": "はくがい",
    "meaning": "persecution",
    "level": "1"
  },
  {
    "word": "薄弱",
    "reading": "はくじゃく",
    "meaning": "feebleness, weakness, weak",
    "level": "1"
  },
  {
    "word": "白状",
    "reading": "はくじょう",
    "meaning": "confession",
    "level": "1"
  },
  {
    "word": "漠然",
    "reading": "ばくぜん",
    "meaning": "obscure, vague, equivocal",
    "level": "1"
  },
  {
    "word": "爆弾",
    "reading": "ばくだん",
    "meaning": "bomb",
    "level": "1"
  },
  {
    "word": "爆破",
    "reading": "ばくは",
    "meaning": "blast, explosion, blow up",
    "level": "1"
  },
  {
    "word": "暴露",
    "reading": "ばくろ",
    "meaning": "disclosure, exposure, revelation",
    "level": "1"
  },
  {
    "word": "励ます",
    "reading": "はげます",
    "meaning": "to encourage, to cheer, to raise (the voice)",
    "level": "1"
  },
  {
    "word": "励む",
    "reading": "はげむ",
    "meaning": "to be zealous, to make an effort",
    "level": "1"
  },
  {
    "word": "剥げる",
    "reading": "はげる",
    "meaning": "to come off, to be worn off, to fade, to discolor",
    "level": "1"
  },
  {
    "word": "化ける",
    "reading": "ばける",
    "meaning": "to disguise, to take the form of",
    "level": "1"
  },
  {
    "word": "派遣",
    "reading": "はけん",
    "meaning": "dispatch, send",
    "level": "1"
  },
  {
    "word": "恥",
    "reading": "はじ",
    "meaning": "shame, embarrassment",
    "level": "1"
  },
  {
    "word": "弾く",
    "reading": "はじく",
    "meaning": "to play (piano, guitar)",
    "level": "1"
  },
  {
    "word": "パジャマ",
    "reading": "パジャマ",
    "meaning": "pajamas",
    "level": "1"
  },
  {
    "word": "恥じらう",
    "reading": "はじらう",
    "meaning": "to feel shy, to be bashful, to blush",
    "level": "1"
  },
  {
    "word": "恥じる",
    "reading": "はじる",
    "meaning": "to feel ashamed",
    "level": "1"
  },
  {
    "word": "橋渡し",
    "reading": "はしわたし",
    "meaning": "bridge building', mediation",
    "level": "1"
  },
  {
    "word": "弾む",
    "reading": "はずむ",
    "meaning": "to bounce, to be encouraged, to splurge on",
    "level": "1"
  },
  {
    "word": "破損",
    "reading": "はそん",
    "meaning": "damage",
    "level": "1"
  },
  {
    "word": "叩く",
    "reading": "はたく",
    "meaning": "to strike, to clap, to dust, to beat",
    "level": "1"
  },
  {
    "word": "裸足",
    "reading": "はだし",
    "meaning": "barefoot",
    "level": "1"
  },
  {
    "word": "果たす",
    "reading": "はたす",
    "meaning": "to accomplish, to fulfill, to carry out, to achieve",
    "level": "1"
  },
  {
    "word": "蜂蜜",
    "reading": "はちみつ",
    "meaning": "honey",
    "level": "1"
  },
  {
    "word": "パチンコ",
    "reading": "パチンコ",
    "meaning": "pachinko (Japanese pinball)",
    "level": "1"
  },
  {
    "word": "罰",
    "reading": "ばつ",
    "meaning": "punishment, penalty",
    "level": "1"
  },
  {
    "word": "発育",
    "reading": "はついく",
    "meaning": "(physical) growth, development",
    "level": "1"
  },
  {
    "word": "発芽",
    "reading": "はつが",
    "meaning": "germination",
    "level": "1"
  },
  {
    "word": "発掘",
    "reading": "はっくつ",
    "meaning": "excavation, exhumation; discovery (e.g., new talent)",
    "level": "1"
  },
  {
    "word": "発言",
    "reading": "はつげん",
    "meaning": "utterance, speech, proposal",
    "level": "1"
  },
  {
    "word": "バッジ",
    "reading": "バッジ",
    "meaning": "badge",
    "level": "1"
  },
  {
    "word": "発生",
    "reading": "はっせい",
    "meaning": "outbreak, spring forth, occurrence",
    "level": "1"
  },
  {
    "word": "仕立てる",
    "reading": "したてる",
    "meaning": "to tailor, to make, to prepare",
    "level": "1"
  },
  {
    "word": "下取り",
    "reading": "したどり",
    "meaning": "trade in, part exchange",
    "level": "1"
  },
  {
    "word": "下火",
    "reading": "したび",
    "meaning": "burning low, waning, declining",
    "level": "1"
  },
  {
    "word": "実",
    "reading": "じつ",
    "meaning": "fruit, good result",
    "level": "1"
  },
  {
    "word": "実家",
    "reading": "じっか",
    "meaning": "(one's parents') home",
    "level": "1"
  },
  {
    "word": "失格",
    "reading": "しっかく",
    "meaning": "disqualification, elimination, incapacity (legal)",
    "level": "1"
  },
  {
    "word": "質疑",
    "reading": "しつぎ",
    "meaning": "question",
    "level": "1"
  },
  {
    "word": "失脚",
    "reading": "しっきゃく",
    "meaning": "losing one's standing, being overthrown, falling",
    "level": "1"
  },
  {
    "word": "実業家",
    "reading": "じつぎょうか",
    "meaning": "industrialist, businessman",
    "level": "1"
  },
  {
    "word": "シック",
    "reading": "シック",
    "meaning": "chic",
    "level": "1"
  },
  {
    "word": "じっくり",
    "reading": "じっくり",
    "meaning": "deliberately, carefully",
    "level": "1"
  },
  {
    "word": "躾",
    "reading": "しつけ",
    "meaning": "discipline, training",
    "level": "1"
  },
  {
    "word": "躾ける",
    "reading": "しつける",
    "meaning": "to discipline, to teach manners",
    "level": "1"
  },
  {
    "word": "実践",
    "reading": "じっせん",
    "meaning": "practice, put into practice",
    "level": "1"
  },
  {
    "word": "質素",
    "reading": "しっそ",
    "meaning": "simplicity, modesty, frugality",
    "level": "1"
  },
  {
    "word": "実態",
    "reading": "じったい",
    "meaning": "truth, fact",
    "level": "1"
  },
  {
    "word": "失調",
    "reading": "しっちょう",
    "meaning": "lack of harmony, imbalance",
    "level": "1"
  },
  {
    "word": "嫉妬",
    "reading": "しっと",
    "meaning": "jealousy",
    "level": "1"
  },
  {
    "word": "実費",
    "reading": "じっぴ",
    "meaning": "actual expense, cost price",
    "level": "1"
  },
  {
    "word": "指摘",
    "reading": "してき",
    "meaning": "pointing out, identification",
    "level": "1"
  },
  {
    "word": "自転",
    "reading": "じてん",
    "meaning": "rotation, spin",
    "level": "1"
  },
  {
    "word": "助動詞",
    "reading": "じょどうし",
    "meaning": "auxiliary verb",
    "level": "1"
  },
  {
    "word": "淑やか",
    "reading": "しとやか",
    "meaning": "graceful",
    "level": "1"
  },
  {
    "word": "萎びる",
    "reading": "しなびる",
    "meaning": "to shrivel, to fade",
    "level": "1"
  },
  {
    "word": "シナリオ",
    "reading": "シナリオ",
    "meaning": "scenario",
    "level": "1"
  },
  {
    "word": "しなやか",
    "reading": "しなやか",
    "meaning": "supple, flexible, elastic",
    "level": "1"
  },
  {
    "word": "屎尿",
    "reading": "しにょう",
    "meaning": "human waste",
    "level": "1"
  },
  {
    "word": "地主",
    "reading": "じぬし",
    "meaning": "landlord",
    "level": "1"
  },
  {
    "word": "凌ぐ",
    "reading": "しのぐ",
    "meaning": "to outdo, to surpass; to endure",
    "level": "1"
  },
  {
    "word": "芝",
    "reading": "しば",
    "meaning": "lawn",
    "level": "1"
  },
  {
    "word": "始発",
    "reading": "しはつ",
    "meaning": "first train",
    "level": "1"
  },
  {
    "word": "耳鼻科",
    "reading": "じびか",
    "meaning": "otolaryngology",
    "level": "1"
  },
  {
    "word": "私物",
    "reading": "しぶつ",
    "meaning": "private property, personal effects",
    "level": "1"
  },
  {
    "word": "しぶとい",
    "reading": "しぶとい",
    "meaning": "tenacious, stubborn",
    "level": "1"
  },
  {
    "word": "司法",
    "reading": "しほう",
    "meaning": "administration of justice",
    "level": "1"
  },
  {
    "word": "始末",
    "reading": "しまつ",
    "meaning": "disposal; cleaning up afterwards",
    "level": "1"
  },
  {
    "word": "染みる",
    "reading": "しみる",
    "meaning": "to soak; pierce",
    "level": "1"
  },
  {
    "word": "使命",
    "reading": "しめい",
    "meaning": "mission, errand, message",
    "level": "1"
  },
  {
    "word": "地元",
    "reading": "じもと",
    "meaning": "local",
    "level": "1"
  },
  {
    "word": "視野",
    "reading": "しや",
    "meaning": "field of vision, outlook",
    "level": "1"
  },
  {
    "word": "弱",
    "reading": "じゃく",
    "meaning": "delicate, supple",
    "level": "1"
  },
  {
    "word": "社交",
    "reading": "しゃこう",
    "meaning": "social life",
    "level": "1"
  },
  {
    "word": "ジャズ",
    "reading": "ジャズ",
    "meaning": "jazz",
    "level": "1"
  },
  {
    "word": "謝絶",
    "reading": "しゃぜつ",
    "meaning": "refusal",
    "level": "1"
  },
  {
    "word": "社宅",
    "reading": "しゃたく",
    "meaning": "company owned house",
    "level": "1"
  },
  {
    "word": "若干",
    "reading": "じゃっかん",
    "meaning": "some, few, number of",
    "level": "1"
  },
  {
    "word": "三味線",
    "reading": "しゃみせん",
    "meaning": "three-stringed Japanese guitar",
    "level": "1"
  },
  {
    "word": "斜面",
    "reading": "しゃめん",
    "meaning": "slope, slanting surface, bevel",
    "level": "1"
  },
  {
    "word": "砂利",
    "reading": "じゃり",
    "meaning": "gravel, ballast, pebbles",
    "level": "1"
  },
  {
    "word": "洒落る",
    "reading": "しゃれる",
    "meaning": "to joke, to play on words; stylish",
    "level": "1"
  },
  {
    "word": "ジャンパー",
    "reading": "ジャンパー",
    "meaning": "jacket, jumper",
    "level": "1"
  },
  {
    "word": "ジャンプ",
    "reading": "ジャンプ",
    "meaning": "jump",
    "level": "1"
  },
  {
    "word": "ジャンボ",
    "reading": "ジャンボ",
    "meaning": "jumbo",
    "level": "1"
  },
  {
    "word": "ジャンル",
    "reading": "ジャンル",
    "meaning": "genre",
    "level": "1"
  },
  {
    "word": "主",
    "reading": "しゅ",
    "meaning": "owner, master, god",
    "level": "1"
  },
  {
    "word": "種",
    "reading": "しゅ",
    "meaning": "seed; variety",
    "level": "1"
  },
  {
    "word": "私有",
    "reading": "しゆう",
    "meaning": "private ownership",
    "level": "1"
  },
  {
    "word": "～宗",
    "reading": "～しゅう",
    "meaning": "sect",
    "level": "1"
  },
  {
    "word": "収益",
    "reading": "しゅうえき",
    "meaning": "earnings, proceeds, returns",
    "level": "1"
  },
  {
    "word": "修学",
    "reading": "しゅうがく",
    "meaning": "learning",
    "level": "1"
  },
  {
    "word": "周期",
    "reading": "しゅうき",
    "meaning": "cycle, period",
    "level": "1"
  },
  {
    "word": "衆議院",
    "reading": "しゅうぎいん",
    "meaning": "Lower House, House of Representatives",
    "level": "1"
  },
  {
    "word": "就業",
    "reading": "しゅうぎょう",
    "meaning": "employment, starting work",
    "level": "1"
  },
  {
    "word": "従業員",
    "reading": "じゅうぎょういん",
    "meaning": "employee, worker",
    "level": "1"
  },
  {
    "word": "集計",
    "reading": "しゅうけい",
    "meaning": "totalization, aggregate",
    "level": "1"
  },
  {
    "word": "襲撃",
    "reading": "しゅうげき",
    "meaning": "attack, charge, raid",
    "level": "1"
  },
  {
    "word": "収支",
    "reading": "しゅうし",
    "meaning": "income and expenditure",
    "level": "1"
  },
  {
    "word": "終始",
    "reading": "しゅうし",
    "meaning": "from beginning to end; consistent(ly)",
    "level": "1"
  },
  {
    "word": "修士",
    "reading": "しゅうし",
    "meaning": "Masters degree program",
    "level": "1"
  },
  {
    "word": "従事",
    "reading": "じゅうじ",
    "meaning": "engaging, pursuing, following",
    "level": "1"
  },
  {
    "word": "終日",
    "reading": "しゅうじつ",
    "meaning": "all day",
    "level": "1"
  },
  {
    "word": "充実",
    "reading": "じゅうじつ",
    "meaning": "fullness, perfection",
    "level": "1"
  },
  {
    "word": "収集",
    "reading": "しゅうしゅう",
    "meaning": "gathering up, collection",
    "level": "1"
  },
  {
    "word": "十字路",
    "reading": "じゅうじろ",
    "meaning": "crossroads",
    "level": "1"
  },
  {
    "word": "執着",
    "reading": "しゅうじゃく",
    "meaning": "attachment, adhesion, tenacity",
    "level": "1"
  },
  {
    "word": "執着",
    "reading": "しゅうちゃく",
    "meaning": "attachment, adhesion, tenacity",
    "level": "1"
  },
  {
    "word": "柔軟",
    "reading": "じゅうなん",
    "meaning": "flexible",
    "level": "1"
  },
  {
    "word": "重複",
    "reading": "じゅうふく",
    "meaning": "duplication, repetition, overlapping",
    "level": "1"
  },
  {
    "word": "収容",
    "reading": "しゅうよう",
    "meaning": "accommodation; seating; custody",
    "level": "1"
  },
  {
    "word": "従来",
    "reading": "じゅうらい",
    "meaning": "up to now, so far, traditional",
    "level": "1"
  },
  {
    "word": "守衛",
    "reading": "しゅえい",
    "meaning": "security guard, doorkeeper",
    "level": "1"
  },
  {
    "word": "主演",
    "reading": "しゅえん",
    "meaning": "starring, playing the leading part",
    "level": "1"
  },
  {
    "word": "主観",
    "reading": "しゅかん",
    "meaning": "subjectivity, subject, ego",
    "level": "1"
  },
  {
    "word": "修行",
    "reading": "しゅぎょう",
    "meaning": "pursuit of knowledge, training, ascetic practice",
    "level": "1"
  },
  {
    "word": "塾",
    "reading": "じゅく",
    "meaning": "after-school (cram) school",
    "level": "1"
  },
  {
    "word": "祝賀",
    "reading": "しゅくが",
    "meaning": "celebration, congratulations",
    "level": "1"
  },
  {
    "word": "宿命",
    "reading": "しゅくめい",
    "meaning": "fate, destiny, predestination",
    "level": "1"
  },
  {
    "word": "手芸",
    "reading": "しゅげい",
    "meaning": "handicrafts",
    "level": "1"
  },
  {
    "word": "主権",
    "reading": "しゅけん",
    "meaning": "sovereignty",
    "level": "1"
  },
  {
    "word": "主催",
    "reading": "しゅさい",
    "meaning": "organization, sponsorship, to host",
    "level": "1"
  },
  {
    "word": "取材",
    "reading": "しゅざい",
    "meaning": "coverage, collecting data",
    "level": "1"
  },
  {
    "word": "趣旨",
    "reading": "しゅし",
    "meaning": "object, meaning",
    "level": "1"
  },
  {
    "word": "種々",
    "reading": "しゅじゅ",
    "meaning": "variety",
    "level": "1"
  },
  {
    "word": "主食",
    "reading": "しゅしょく",
    "meaning": "staple food",
    "level": "1"
  },
  {
    "word": "主人公",
    "reading": "しゅじんこう",
    "meaning": "protagonist",
    "level": "1"
  },
  {
    "word": "主体",
    "reading": "しゅたい",
    "meaning": "subject, main constituent",
    "level": "1"
  },
  {
    "word": "主題",
    "reading": "しゅだい",
    "meaning": "subject, theme, motif",
    "level": "1"
  },
  {
    "word": "出演",
    "reading": "しゅつえん",
    "meaning": "leading performer, stage appearance",
    "level": "1"
  },
  {
    "word": "出血",
    "reading": "しゅっけつ",
    "meaning": "bleeding",
    "level": "1"
  },
  {
    "word": "出現",
    "reading": "しゅつげん",
    "meaning": "appearance, arrival",
    "level": "1"
  },
  {
    "word": "出産",
    "reading": "しゅっさん",
    "meaning": "childbirth",
    "level": "1"
  },
  {
    "word": "出社",
    "reading": "しゅっしゃ",
    "meaning": "come to work",
    "level": "1"
  },
  {
    "word": "出生",
    "reading": "しゅっしょう",
    "meaning": "birth",
    "level": "1"
  },
  {
    "word": "出生",
    "reading": "しゅっせい",
    "meaning": "birth",
    "level": "1"
  },
  {
    "word": "微量",
    "reading": "びりょう",
    "meaning": "minuscule amount, extremely small quantity",
    "level": "1"
  },
  {
    "word": "昼飯",
    "reading": "ひるめし",
    "meaning": "lunch (mid-day meal)",
    "level": "1"
  },
  {
    "word": "比例",
    "reading": "ひれい",
    "meaning": "proportion",
    "level": "1"
  },
  {
    "word": "疲労",
    "reading": "ひろう",
    "meaning": "fatigue, weariness",
    "level": "1"
  },
  {
    "word": "敏感",
    "reading": "びんかん",
    "meaning": "sensibility, susceptibility, sensitive (to)",
    "level": "1"
  },
  {
    "word": "貧困",
    "reading": "ひんこん",
    "meaning": "poverty, lack",
    "level": "1"
  },
  {
    "word": "品質",
    "reading": "ひんしつ",
    "meaning": "quality",
    "level": "1"
  },
  {
    "word": "貧弱",
    "reading": "ひんじゃく",
    "meaning": "poor, meager, insubstantial",
    "level": "1"
  },
  {
    "word": "品種",
    "reading": "ひんしゅ",
    "meaning": "breed, type, variety",
    "level": "1"
  },
  {
    "word": "ヒント",
    "reading": "ヒント",
    "meaning": "hint",
    "level": "1"
  },
  {
    "word": "頻繁",
    "reading": "ひんぱん",
    "meaning": "frequency",
    "level": "1"
  },
  {
    "word": "貧乏",
    "reading": "びんぼう",
    "meaning": "poverty, destitute, poor",
    "level": "1"
  },
  {
    "word": "ファイト",
    "reading": "ファイト",
    "meaning": "fight",
    "level": "1"
  },
  {
    "word": "ファイル",
    "reading": "ファイル",
    "meaning": "file; portfolio",
    "level": "1"
  },
  {
    "word": "ファン",
    "reading": "ファン",
    "meaning": "fan",
    "level": "1"
  },
  {
    "word": "不意",
    "reading": "ふい",
    "meaning": "sudden, abrupt, unexpected",
    "level": "1"
  },
  {
    "word": "フィルタ",
    "reading": "フィルタ",
    "meaning": "filter",
    "level": "1"
  },
  {
    "word": "封",
    "reading": "ふう",
    "meaning": "seal",
    "level": "1"
  },
  {
    "word": "封鎖",
    "reading": "ふうさ",
    "meaning": "blockade, freezing (funds)",
    "level": "1"
  },
  {
    "word": "風車",
    "reading": "ふうしゃ",
    "meaning": "windmill",
    "level": "1"
  },
  {
    "word": "風習",
    "reading": "ふうしゅう",
    "meaning": "custom",
    "level": "1"
  },
  {
    "word": "風俗",
    "reading": "ふうぞく",
    "meaning": "manners, customs; sex industry",
    "level": "1"
  },
  {
    "word": "ブーツ",
    "reading": "ブーツ",
    "meaning": "boots",
    "level": "1"
  },
  {
    "word": "風土",
    "reading": "ふうど",
    "meaning": "natural features, climate",
    "level": "1"
  },
  {
    "word": "ブーム",
    "reading": "ブーム",
    "meaning": "boom",
    "level": "1"
  },
  {
    "word": "フォーム",
    "reading": "フォーム",
    "meaning": "foam; form",
    "level": "1"
  },
  {
    "word": "部下",
    "reading": "ぶか",
    "meaning": "one's subordinate",
    "level": "1"
  },
  {
    "word": "不可欠",
    "reading": "ふかけつ",
    "meaning": "indispensable, essential",
    "level": "1"
  },
  {
    "word": "ぶかぶか",
    "reading": "ぶかぶか",
    "meaning": "too big, baggy",
    "level": "1"
  },
  {
    "word": "不吉",
    "reading": "ふきつ",
    "meaning": "ominous, sinister, bad luck, ill omen",
    "level": "1"
  },
  {
    "word": "不況",
    "reading": "ふきょう",
    "meaning": "recession, depression, slump",
    "level": "1"
  },
  {
    "word": "布巾",
    "reading": "ふきん",
    "meaning": "dish cloth",
    "level": "1"
  },
  {
    "word": "複合",
    "reading": "ふくごう",
    "meaning": "composite, complex",
    "level": "1"
  },
  {
    "word": "福祉",
    "reading": "ふくし",
    "meaning": "welfare, well-being",
    "level": "1"
  },
  {
    "word": "覆面",
    "reading": "ふくめん",
    "meaning": "mask, veil, disguise",
    "level": "1"
  },
  {
    "word": "膨れる",
    "reading": "ふくれる",
    "meaning": "to swell (out), to be inflated, to bulge",
    "level": "1"
  },
  {
    "word": "不景気",
    "reading": "ふけいき",
    "meaning": "business recession, hard times, depression",
    "level": "1"
  },
  {
    "word": "耽る",
    "reading": "ふける",
    "meaning": "to indulge in, to give oneself up to, to be absorbed in",
    "level": "1"
  },
  {
    "word": "老ける",
    "reading": "ふける",
    "meaning": "to age",
    "level": "1"
  },
  {
    "word": "富豪",
    "reading": "ふごう",
    "meaning": "wealthy person, millionaire",
    "level": "1"
  },
  {
    "word": "布告",
    "reading": "ふこく",
    "meaning": "edict, ordinance, proclamation",
    "level": "1"
  },
  {
    "word": "ブザー",
    "reading": "ブザー",
    "meaning": "buzzer",
    "level": "1"
  },
  {
    "word": "負債",
    "reading": "ふさい",
    "meaning": "debt, liabilities",
    "level": "1"
  },
  {
    "word": "不在",
    "reading": "ふざい",
    "meaning": "absence",
    "level": "1"
  },
  {
    "word": "ふさわしい",
    "reading": "ふさわしい",
    "meaning": "appropriate",
    "level": "1"
  },
  {
    "word": "不順",
    "reading": "ふじゅん",
    "meaning": "irregularity, unseasonableness",
    "level": "1"
  },
  {
    "word": "負傷",
    "reading": "ふしょう",
    "meaning": "injury, wound",
    "level": "1"
  },
  {
    "word": "侮辱",
    "reading": "ぶじょく",
    "meaning": "insult, contempt, slight",
    "level": "1"
  },
  {
    "word": "不審",
    "reading": "ふしん",
    "meaning": "suspicious, doubt, infidelity",
    "level": "1"
  },
  {
    "word": "不振",
    "reading": "ふしん",
    "meaning": "dullness, slump, stagnation",
    "level": "1"
  },
  {
    "word": "武装",
    "reading": "ぶそう",
    "meaning": "arms, armament, armed",
    "level": "1"
  },
  {
    "word": "札",
    "reading": "ふだ",
    "meaning": "token, label; ticket, card; charm, talisman",
    "level": "1"
  },
  {
    "word": "負担",
    "reading": "ふたん",
    "meaning": "burden; load",
    "level": "1"
  },
  {
    "word": "不調",
    "reading": "ふちょう",
    "meaning": "bad condition, disorder, slump",
    "level": "1"
  },
  {
    "word": "復活",
    "reading": "ふっかつ",
    "meaning": "revival (e.g., musical), restoration",
    "level": "1"
  },
  {
    "word": "物議",
    "reading": "ぶつぎ",
    "meaning": "public discussion (criticism)",
    "level": "1"
  },
  {
    "word": "復旧",
    "reading": "ふっきゅう",
    "meaning": "restoration, restitution, rehabilitation",
    "level": "1"
  },
  {
    "word": "復興",
    "reading": "ふっこう",
    "meaning": "revival, renaissance, reconstruction",
    "level": "1"
  },
  {
    "word": "物資",
    "reading": "ぶっし",
    "meaning": "goods, materials",
    "level": "1"
  },
  {
    "word": "仏像",
    "reading": "ぶつぞう",
    "meaning": "Buddhist image (statue)",
    "level": "1"
  },
  {
    "word": "物体",
    "reading": "ぶったい",
    "meaning": "object",
    "level": "1"
  },
  {
    "word": "沸騰",
    "reading": "ふっとう",
    "meaning": "boiling, seething",
    "level": "1"
  },
  {
    "word": "不当",
    "reading": "ふとう",
    "meaning": "injustice, impropriety, unfair",
    "level": "1"
  },
  {
    "word": "不動産",
    "reading": "ふどうさん",
    "meaning": "real estate",
    "level": "1"
  },
  {
    "word": "無難",
    "reading": "ぶなん",
    "meaning": "safety, security",
    "level": "1"
  },
  {
    "word": "赴任",
    "reading": "ふにん",
    "meaning": "(proceeding to) new appointment",
    "level": "1"
  },
  {
    "word": "腐敗",
    "reading": "ふはい",
    "meaning": "decay, depravity",
    "level": "1"
  },
  {
    "word": "不評",
    "reading": "ふひょう",
    "meaning": "bad reputation, disgrace, unpopularity",
    "level": "1"
  },
  {
    "word": "不服",
    "reading": "ふふく",
    "meaning": "dissatisfaction, discontent, disapproval",
    "level": "1"
  },
  {
    "word": "普遍",
    "reading": "ふへん",
    "meaning": "universality, ubiquity, omnipresence",
    "level": "1"
  },
  {
    "word": "踏まえる",
    "reading": "ふまえる",
    "meaning": "to be based on, to have origin in",
    "level": "1"
  },
  {
    "word": "踏み込む",
    "reading": "ふみこむ",
    "meaning": "to step into (someone else's territory, to break into, to raid",
    "level": "1"
  },
  {
    "word": "不明",
    "reading": "ふめい",
    "meaning": "unknown, ambiguous",
    "level": "1"
  },
  {
    "word": "部門",
    "reading": "ぶもん",
    "meaning": "class, group, category, department, field, branch",
    "level": "1"
  },
  {
    "word": "扶養",
    "reading": "ふよう",
    "meaning": "support, maintenance",
    "level": "1"
  },
  {
    "word": "ふらふら",
    "reading": "ふらふら",
    "meaning": "unsteady on one's feet, totter, dizzy",
    "level": "1"
  },
  {
    "word": "ぶらぶら",
    "reading": "ぶらぶら",
    "meaning": "dangle heavily, sway to and fro, stroll idly",
    "level": "1"
  },
  {
    "word": "振り返る",
    "reading": "ふりかえる",
    "meaning": "to turn head, to turn around, to look back",
    "level": "1"
  },
  {
    "word": "振り出し",
    "reading": "ふりだし",
    "meaning": "outset, starting point, drawing or issuing (draft)",
    "level": "1"
  },
  {
    "word": "不良",
    "reading": "ふりょう",
    "meaning": "badness, delinquent, failure",
    "level": "1"
  },
  {
    "word": "浮力",
    "reading": "ふりょく",
    "meaning": "buoyancy",
    "level": "1"
  },
  {
    "word": "武力",
    "reading": "ぶりょく",
    "meaning": "armed might, military power, the sword, force",
    "level": "1"
  },
  {
    "word": "ブル",
    "reading": "ブル",
    "meaning": "bull",
    "level": "1"
  },
  {
    "word": "震わせる",
    "reading": "ふるわせる",
    "meaning": "to be shaking, to be trembling",
    "level": "1"
  },
  {
    "word": "無礼",
    "reading": "ぶれい",
    "meaning": "impolite, rude",
    "level": "1"
  },
  {
    "word": "付録",
    "reading": "ふろく",
    "meaning": "appendix, supplement",
    "level": "1"
  },
  {
    "word": "フロント",
    "reading": "フロント",
    "meaning": "front",
    "level": "1"
  },
  {
    "word": "憤慨",
    "reading": "ふんがい",
    "meaning": "indignation, resentment",
    "level": "1"
  },
  {
    "word": "文化財",
    "reading": "ぶんかざい",
    "meaning": "cultural assets, cultural property",
    "level": "1"
  },
  {
    "word": "分業",
    "reading": "ぶんぎょう",
    "meaning": "division of labor, specialization, assembly-line production",
    "level": "1"
  },
  {
    "word": "文語",
    "reading": "ぶんご",
    "meaning": "written language, literary language",
    "level": "1"
  },
  {
    "word": "分散",
    "reading": "ぶんさん",
    "meaning": "dispersion, decentralization, variance (statistics)",
    "level": "1"
  },
  {
    "word": "分子",
    "reading": "ぶんし",
    "meaning": "numerator, molecule",
    "level": "1"
  },
  {
    "word": "紛失",
    "reading": "ふんしつ",
    "meaning": "losing something",
    "level": "1"
  },
  {
    "word": "噴出",
    "reading": "ふんしゅつ",
    "meaning": "spewing, gushing, spouting",
    "level": "1"
  },
  {
    "word": "文書",
    "reading": "ぶんしょ",
    "meaning": "document, writing",
    "level": "1"
  },
  {
    "word": "紛争",
    "reading": "ふんそう",
    "meaning": "dispute, trouble, strife",
    "level": "1"
  },
  {
    "word": "ふんだん",
    "reading": "ふんだん",
    "meaning": "plentiful, abundant, lavish",
    "level": "1"
  },
  {
    "word": "分担",
    "reading": "ぶんたん",
    "meaning": "apportionment, sharing",
    "level": "1"
  },
  {
    "word": "奮闘",
    "reading": "ふんとう",
    "meaning": "hard struggle, strenuous effort",
    "level": "1"
  },
  {
    "word": "分配",
    "reading": "ぶんぱい",
    "meaning": "division, sharing",
    "level": "1"
  },
  {
    "word": "分母",
    "reading": "ぶんぼ",
    "meaning": "denominator",
    "level": "1"
  },
  {
    "word": "粉末",
    "reading": "ふんまつ",
    "meaning": "fine powder",
    "level": "1"
  },
  {
    "word": "分離",
    "reading": "ぶんり",
    "meaning": "separation, detachment, segregation",
    "level": "1"
  },
  {
    "word": "分裂",
    "reading": "ぶんれつ",
    "meaning": "split, division, break up",
    "level": "1"
  },
  {
    "word": "ペア",
    "reading": "ペア",
    "meaning": "pair, pear",
    "level": "1"
  },
  {
    "word": "兵器",
    "reading": "へいき",
    "meaning": "arms, weapons, ordinance",
    "level": "1"
  },
  {
    "word": "閉口",
    "reading": "へいこう",
    "meaning": "shut mouth",
    "level": "1"
  },
  {
    "word": "閉鎖",
    "reading": "へいさ",
    "meaning": "closing, closure, shutdown",
    "level": "1"
  },
  {
    "word": "兵士",
    "reading": "へいし",
    "meaning": "soldier",
    "level": "1"
  },
  {
    "word": "平常",
    "reading": "へいじょう",
    "meaning": "normal, usual",
    "level": "1"
  },
  {
    "word": "平方",
    "reading": "へいほう",
    "meaning": "square (e.g., meter, square)",
    "level": "1"
  },
  {
    "word": "並列",
    "reading": "へいれつ",
    "meaning": "arrangement, parallel, abreast",
    "level": "1"
  },
  {
    "word": "ベース",
    "reading": "ベース",
    "meaning": "base, bass",
    "level": "1"
  },
  {
    "word": "辟易",
    "reading": "へきえき",
    "meaning": "wince, shrink back, succumbing to, being frightened",
    "level": "1"
  },
  {
    "word": "ぺこぺこ",
    "reading": "ぺこぺこ",
    "meaning": "fawn, be very hungry",
    "level": "1"
  },
  {
    "word": "ベスト",
    "reading": "ベスト",
    "meaning": "best; vest",
    "level": "1"
  },
  {
    "word": "ベストセラー",
    "reading": "ベストセラー",
    "meaning": "best-seller",
    "level": "1"
  },
  {
    "word": "隔たる",
    "reading": "へだたる",
    "meaning": "to be distant",
    "level": "1"
  },
  {
    "word": "縁",
    "reading": "へり",
    "meaning": "edge",
    "level": "1"
  },
  {
    "word": "へりくだる",
    "reading": "へりくだる",
    "meaning": "to deprecate oneself and praise the listener",
    "level": "1"
  },
  {
    "word": "弁解",
    "reading": "べんかい",
    "meaning": "explanation, justification, excuse",
    "level": "1"
  },
  {
    "word": "変革",
    "reading": "へんかく",
    "meaning": "change, reform(the) Reformation",
    "level": "1"
  },
  {
    "word": "返還",
    "reading": "へんかん",
    "meaning": "return, restoration",
    "level": "1"
  },
  {
    "word": "便宜",
    "reading": "べんぎ",
    "meaning": "convenience, accommodation",
    "level": "1"
  },
  {
    "word": "偏見",
    "reading": "へんけん",
    "meaning": "prejudice, narrow view",
    "level": "1"
  },
  {
    "word": "弁護",
    "reading": "べんご",
    "meaning": "defense, pleading, advocacy",
    "level": "1"
  },
  {
    "word": "返済",
    "reading": "へんさい",
    "meaning": "repayment",
    "level": "1"
  },
  {
    "word": "弁償",
    "reading": "べんしょう",
    "meaning": "compensation, reparation, reimbursement",
    "level": "1"
  },
  {
    "word": "変遷",
    "reading": "へんせん",
    "meaning": "change, transition, vicissitudes",
    "level": "1"
  },
  {
    "word": "返答",
    "reading": "へんとう",
    "meaning": "reply",
    "level": "1"
  },
  {
    "word": "変動",
    "reading": "へんどう",
    "meaning": "change, fluctuation",
    "level": "1"
  },
  {
    "word": "弁論",
    "reading": "べんろん",
    "meaning": "discussion, debate, argument",
    "level": "1"
  },
  {
    "word": "穂",
    "reading": "ほ",
    "meaning": "ear (of plant), head (of plant)",
    "level": "1"
  },
  {
    "word": "保育",
    "reading": "ほいく",
    "meaning": "nursing, nurturing, rearing",
    "level": "1"
  },
  {
    "word": "ボイコット",
    "reading": "ボイコット",
    "meaning": "boycott",
    "level": "1"
  },
  {
    "word": "ポイント",
    "reading": "ポイント",
    "meaning": "point",
    "level": "1"
  },
  {
    "word": "法案",
    "reading": "ほうあん",
    "meaning": "bill (law)",
    "level": "1"
  },
  {
    "word": "防衛",
    "reading": "ぼうえい",
    "meaning": "defense, protection, self-defense",
    "level": "1"
  },
  {
    "word": "防火",
    "reading": "ぼうか",
    "meaning": "fire prevention, fire fighting, fire proof",
    "level": "1"
  },
  {
    "word": "崩壊",
    "reading": "ほうかい",
    "meaning": "collapse, decay (physics), crumbling",
    "level": "1"
  },
  {
    "word": "妨害",
    "reading": "ぼうがい",
    "meaning": "disturbance, obstruction, interference",
    "level": "1"
  },
  {
    "word": "法学",
    "reading": "ほうがく",
    "meaning": "law, jurisprudence",
    "level": "1"
  },
  {
    "word": "封建",
    "reading": "ほうけん",
    "meaning": "feudalistic",
    "level": "1"
  },
  {
    "word": "豊作",
    "reading": "ほうさく",
    "meaning": "abundant harvest, bumper crop",
    "level": "1"
  },
  {
    "word": "方策",
    "reading": "ほうさく",
    "meaning": "plan, policy",
    "level": "1"
  },
  {
    "word": "奉仕",
    "reading": "ほうし",
    "meaning": "attendance, service",
    "level": "1"
  },
  {
    "word": "方式",
    "reading": "ほうしき",
    "meaning": "form, method, system",
    "level": "1"
  },
  {
    "word": "放射",
    "reading": "ほうしゃ",
    "meaning": "radiation, emission",
    "level": "1"
  },
  {
    "word": "放射能",
    "reading": "ほうしゃのう",
    "meaning": "radioactivity",
    "level": "1"
  },
  {
    "word": "報酬",
    "reading": "ほうしゅう",
    "meaning": "remuneration, recompense, reward",
    "level": "1"
  },
  {
    "word": "放出",
    "reading": "ほうしゅつ",
    "meaning": "release, emit",
    "level": "1"
  },
  {
    "word": "報じる",
    "reading": "ほうじる",
    "meaning": "to inform, to report",
    "level": "1"
  },
  {
    "word": "報ずる",
    "reading": "ほうずる",
    "meaning": "to inform, to report",
    "level": "1"
  },
  {
    "word": "紡績",
    "reading": "ぼうせき",
    "meaning": "spinning",
    "level": "1"
  },
  {
    "word": "呆然",
    "reading": "ぼうぜん",
    "meaning": "dumbfounded, overcome with surprise",
    "level": "1"
  },
  {
    "word": "放置",
    "reading": "ほうち",
    "meaning": "leave as is, leave alone, neglect",
    "level": "1"
  },
  {
    "word": "膨張",
    "reading": "ぼうちょう",
    "meaning": "expansion, swelling, increase",
    "level": "1"
  },
  {
    "word": "法廷",
    "reading": "ほうてい",
    "meaning": "courtroom",
    "level": "1"
  },
  {
    "word": "報道",
    "reading": "ほうどう",
    "meaning": "coverage, report",
    "level": "1"
  },
  {
    "word": "冒頭",
    "reading": "ぼうとう",
    "meaning": "beginning, start, outset",
    "level": "1"
  },
  {
    "word": "暴動",
    "reading": "ぼうどう",
    "meaning": "insurrection, riot, uprising",
    "level": "1"
  },
  {
    "word": "褒美",
    "reading": "ほうび",
    "meaning": "reward, prize",
    "level": "1"
  },
  {
    "word": "暴風",
    "reading": "ぼうふう",
    "meaning": "storm, windstorm, gale",
    "level": "1"
  },
  {
    "word": "葬る",
    "reading": "ほうむる",
    "meaning": "to bury, to entomb",
    "level": "1"
  },
  {
    "word": "放り込む",
    "reading": "ほうりこむ",
    "meaning": "to throw into",
    "level": "1"
  },
  {
    "word": "放り出す",
    "reading": "ほうりだす",
    "meaning": "to throw out, to give up, to abandon",
    "level": "1"
  },
  {
    "word": "暴力",
    "reading": "ぼうりょく",
    "meaning": "violence",
    "level": "1"
  },
  {
    "word": "飽和",
    "reading": "ほうわ",
    "meaning": "saturation",
    "level": "1"
  },
  {
    "word": "ホース",
    "reading": "ホース",
    "meaning": "hose",
    "level": "1"
  },
  {
    "word": "ポーズ",
    "reading": "ポーズ",
    "meaning": "pause",
    "level": "1"
  },
  {
    "word": "ホール",
    "reading": "ホール",
    "meaning": "hall; hole",
    "level": "1"
  },
  {
    "word": "保温",
    "reading": "ほおん",
    "meaning": "retaining warmth, keeping heat in, heat insulation",
    "level": "1"
  },
  {
    "word": "捕獲",
    "reading": "ほかく",
    "meaning": "capture, seizure",
    "level": "1"
  },
  {
    "word": "保管",
    "reading": "ほかん",
    "meaning": "custody, safekeeping, storage",
    "level": "1"
  },
  {
    "word": "補給",
    "reading": "ほきゅう",
    "meaning": "supply, supplying, replenishment",
    "level": "1"
  },
  {
    "word": "補強",
    "reading": "ほきょう",
    "meaning": "reinforcement",
    "level": "1"
  },
  {
    "word": "募金",
    "reading": "ぼきん",
    "meaning": "fund-raising, collection of funds",
    "level": "1"
  },
  {
    "word": "牧師",
    "reading": "ぼくし",
    "meaning": "pastor, minister, clergyman",
    "level": "1"
  },
  {
    "word": "捕鯨",
    "reading": "ほげい",
    "meaning": "whaling",
    "level": "1"
  },
  {
    "word": "惚ける",
    "reading": "ぼける",
    "meaning": "to grow senile, to fade",
    "level": "1"
  },
  {
    "word": "保険",
    "reading": "ほけん",
    "meaning": "insurance, guarantee",
    "level": "1"
  },
  {
    "word": "母校",
    "reading": "ぼこう",
    "meaning": "alma mater",
    "level": "1"
  },
  {
    "word": "母国",
    "reading": "ぼこく",
    "meaning": "one's home country (same as 自分の国 (じぶんのくに))",
    "level": "1"
  },
  {
    "word": "誇る",
    "reading": "ほこる",
    "meaning": "to boast of, to be proud of",
    "level": "1"
  },
  {
    "word": "綻びる",
    "reading": "ほころびる",
    "meaning": "to come apart at the seams, to smile broadly",
    "level": "1"
  },
  {
    "word": "干し～",
    "reading": "ほし～",
    "meaning": "dried ~",
    "level": "1"
  },
  {
    "word": "ポジション",
    "reading": "ポジション",
    "meaning": "position",
    "level": "1"
  },
  {
    "word": "干し物",
    "reading": "ほしもの",
    "meaning": "dried washing (clothes",
    "level": "1"
  },
  {
    "word": "保守",
    "reading": "ほしゅ",
    "meaning": "conservative, maintaining",
    "level": "1"
  },
  {
    "word": "補充",
    "reading": "ほじゅう",
    "meaning": "supplementation, replenishment, replenishing",
    "level": "1"
  },
  {
    "word": "補助",
    "reading": "ほじょ",
    "meaning": "assistance, support, auxiliary",
    "level": "1"
  },
  {
    "word": "舗装",
    "reading": "ほそう",
    "meaning": "pavement, road surface",
    "level": "1"
  },
  {
    "word": "補足",
    "reading": "ほそく",
    "meaning": "supplement, complement",
    "level": "1"
  },
  {
    "word": "墓地",
    "reading": "ぼち",
    "meaning": "cemetery, graveyard",
    "level": "1"
  },
  {
    "word": "発作",
    "reading": "ほっさ",
    "meaning": "fit, attack",
    "level": "1"
  },
  {
    "word": "没収",
    "reading": "ぼっしゅう",
    "meaning": "forfeited",
    "level": "1"
  },
  {
    "word": "発足",
    "reading": "ほっそく",
    "meaning": "starting, inauguration",
    "level": "1"
  },
  {
    "word": "ポット",
    "reading": "ポット",
    "meaning": "pot",
    "level": "1"
  },
  {
    "word": "ほっぺた",
    "reading": "ほっぺた",
    "meaning": "cheek",
    "level": "1"
  },
  {
    "word": "ぼつぼつ",
    "reading": "ぼつぼつ",
    "meaning": "gradually, here and there, spots",
    "level": "1"
  },
  {
    "word": "没落",
    "reading": "ぼつらく",
    "meaning": "ruin, fall, collapse",
    "level": "1"
  },
  {
    "word": "解ける",
    "reading": "ほどける",
    "meaning": "to come untied, to come apart",
    "level": "1"
  },
  {
    "word": "施す",
    "reading": "ほどこす",
    "meaning": "to give, to conduct, to perform",
    "level": "1"
  },
  {
    "word": "ほとり",
    "reading": "ほとり",
    "meaning": "vicinity of lake; river",
    "level": "1"
  },
  {
    "word": "ぼやく",
    "reading": "ぼやく",
    "meaning": "to grumble, to complain",
    "level": "1"
  },
  {
    "word": "ぼやける",
    "reading": "ぼやける",
    "meaning": "to become dim, to become blurred",
    "level": "1"
  },
  {
    "word": "保養",
    "reading": "ほよう",
    "meaning": "health preservation, recuperation, recreation",
    "level": "1"
  },
  {
    "word": "捕虜",
    "reading": "ほりょ",
    "meaning": "prisoner of war",
    "level": "1"
  },
  {
    "word": "ボルト",
    "reading": "ボルト",
    "meaning": "volt; bolt",
    "level": "1"
  },
  {
    "word": "滅びる",
    "reading": "ほろびる",
    "meaning": "to be ruined, to perish, to be destroyed",
    "level": "1"
  },
  {
    "word": "滅ぼす",
    "reading": "ほろぼす",
    "meaning": "to destroy, to overthrow, to ruin",
    "level": "1"
  },
  {
    "word": "本格",
    "reading": "ほんかく",
    "meaning": "propriety, full-scale",
    "level": "1"
  },
  {
    "word": "本館",
    "reading": "ほんかん",
    "meaning": "main building",
    "level": "1"
  },
  {
    "word": "本気",
    "reading": "ほんき",
    "meaning": "seriousness, truth, sanctity",
    "level": "1"
  },
  {
    "word": "本国",
    "reading": "ほんごく",
    "meaning": "one's own country",
    "level": "1"
  },
  {
    "word": "本質",
    "reading": "ほんしつ",
    "meaning": "essence, true nature, reality",
    "level": "1"
  },
  {
    "word": "本体",
    "reading": "ほんたい",
    "meaning": "substance, body, trunk",
    "level": "1"
  },
  {
    "word": "本音",
    "reading": "ほんね",
    "meaning": "(one's) real intention, motive",
    "level": "1"
  },
  {
    "word": "本能",
    "reading": "ほんのう",
    "meaning": "instinct",
    "level": "1"
  },
  {
    "word": "本場",
    "reading": "ほんば",
    "meaning": "home, best place, genuine",
    "level": "1"
  },
  {
    "word": "ポンプ",
    "reading": "ポンプ",
    "meaning": "pump",
    "level": "1"
  },
  {
    "word": "本文",
    "reading": "ほんぶん",
    "meaning": "text (of document), body (of letter)",
    "level": "1"
  },
  {
    "word": "本名",
    "reading": "ほんみょう",
    "meaning": "real name",
    "level": "1"
  },
  {
    "word": "マーク",
    "reading": "マーク",
    "meaning": "mark",
    "level": "1"
  },
  {
    "word": "マイ～",
    "reading": "マイ～",
    "meaning": "my ~, one's own ~",
    "level": "1"
  },
  {
    "word": "マイクロフォン",
    "reading": "マイクロフォン",
    "meaning": "microphone",
    "level": "1"
  },
  {
    "word": "埋蔵",
    "reading": "まいぞう",
    "meaning": "buried property, treasure trove",
    "level": "1"
  },
  {
    "word": "舞う",
    "reading": "まう",
    "meaning": "to dance, to flutter about, to revolve",
    "level": "1"
  },
  {
    "word": "真上",
    "reading": "まうえ",
    "meaning": "just above, right overhead",
    "level": "1"
  },
  {
    "word": "前売",
    "reading": "まえうり",
    "meaning": "advance sale, booking",
    "level": "1"
  },
  {
    "word": "前置き",
    "reading": "まえおき",
    "meaning": "preface, introduction",
    "level": "1"
  },
  {
    "word": "任す",
    "reading": "まかす",
    "meaning": "to entrust, to leave to a person",
    "level": "1"
  },
  {
    "word": "負かす",
    "reading": "まかす",
    "meaning": "to defeat",
    "level": "1"
  },
  {
    "word": "賄う",
    "reading": "まかなう",
    "meaning": "to give board to, to provide meals, to pay",
    "level": "1"
  },
  {
    "word": "紛らわしい",
    "reading": "まぎらわしい",
    "meaning": "confusing, misleading, ambiguous",
    "level": "1"
  },
  {
    "word": "紛れる",
    "reading": "まぎれる",
    "meaning": "to be diverted, to slip into",
    "level": "1"
  },
  {
    "word": "真心",
    "reading": "まごころ",
    "meaning": "sincerity, devotion",
    "level": "1"
  },
  {
    "word": "まごつく",
    "reading": "まごつく",
    "meaning": "to be confused, to be flustered",
    "level": "1"
  },
  {
    "word": "誠",
    "reading": "まこと",
    "meaning": "truth, faith, fidelity",
    "level": "1"
  },
  {
    "word": "誠に",
    "reading": "まことに",
    "meaning": "indeed, really (very polite), absolutely",
    "level": "1"
  },
  {
    "word": "まさしく",
    "reading": "まさしく",
    "meaning": "surely, no doubt, evidently",
    "level": "1"
  },
  {
    "word": "勝る",
    "reading": "まさる",
    "meaning": "to excel, to surpass, to out-rival",
    "level": "1"
  },
  {
    "word": "～増し",
    "reading": "～まし",
    "meaning": "~increase",
    "level": "1"
  },
  {
    "word": "交える",
    "reading": "まじえる",
    "meaning": "to mix, to converse with, to cross (swords)",
    "level": "1"
  },
  {
    "word": "真下",
    "reading": "ました",
    "meaning": "right under, directly below",
    "level": "1"
  },
  {
    "word": "まして",
    "reading": "まして",
    "meaning": "still more, still less (with neg. verb), to say nothing of",
    "level": "1"
  },
  {
    "word": "交わる",
    "reading": "まじわる",
    "meaning": "to cross, to intersect, to mingle with,",
    "level": "1"
  },
  {
    "word": "麻酔",
    "reading": "ますい",
    "meaning": "anesthesia",
    "level": "1"
  },
  {
    "word": "またがる (うまを～)",
    "reading": "またがる (うまを～)",
    "meaning": "to straddle",
    "level": "1"
  },
  {
    "word": "待ち合わせ",
    "reading": "まちあわせ",
    "meaning": "appointment",
    "level": "1"
  },
  {
    "word": "待ち遠しい",
    "reading": "まちどおしい",
    "meaning": "looking forward to",
    "level": "1"
  },
  {
    "word": "待ち望む",
    "reading": "まちのぞむ",
    "meaning": "to look anxiously for, to wait eagerly for",
    "level": "1"
  },
  {
    "word": "まちまち",
    "reading": "まちまち",
    "meaning": "various, different",
    "level": "1"
  },
  {
    "word": "末期",
    "reading": "まっき",
    "meaning": "deathbed, hour of death",
    "level": "1"
  },
  {
    "word": "真っ二つ",
    "reading": "まっぷたつ",
    "meaning": "in two equal parts",
    "level": "1"
  },
  {
    "word": "まと",
    "reading": "まと",
    "meaning": "mark, target",
    "level": "1"
  },
  {
    "word": "纏まり",
    "reading": "まとまり",
    "meaning": "conclusion, settlement, consistency",
    "level": "1"
  },
  {
    "word": "纏め",
    "reading": "まとめ",
    "meaning": "settlement, conclusion",
    "level": "1"
  },
  {
    "word": "免れる",
    "reading": "まぬがれる",
    "meaning": "to escape from, to be exempted",
    "level": "1"
  },
  {
    "word": "招き",
    "reading": "まねき",
    "meaning": "invitation",
    "level": "1"
  },
  {
    "word": "瞬き",
    "reading": "まばたき",
    "meaning": "wink, twinkling (of stars), flicker (of light)",
    "level": "1"
  },
  {
    "word": "麻痺",
    "reading": "まひ",
    "meaning": "paralysis, palsy, numbness",
    "level": "1"
  },
  {
    "word": "～まみれ",
    "reading": "～まみれ",
    "meaning": "covered with (by, in) ~",
    "level": "1"
  },
  {
    "word": "眉",
    "reading": "まゆ",
    "meaning": "eyebrow",
    "level": "1"
  },
  {
    "word": "鞠",
    "reading": "まり",
    "meaning": "ball",
    "level": "1"
  },
  {
    "word": "丸ごと",
    "reading": "まるごと",
    "meaning": "in its entirety, whole, wholly",
    "level": "1"
  },
  {
    "word": "まるっきり",
    "reading": "まるっきり",
    "meaning": "completely, perfectly, just as if",
    "level": "1"
  },
  {
    "word": "丸々",
    "reading": "まるまる",
    "meaning": "completely",
    "level": "1"
  },
  {
    "word": "丸める",
    "reading": "まるめる",
    "meaning": "to make round, to round off, to roll up",
    "level": "1"
  },
  {
    "word": "満月",
    "reading": "まんげつ",
    "meaning": "full moon",
    "level": "1"
  },
  {
    "word": "満場",
    "reading": "まんじょう",
    "meaning": "unanimous, whole audience",
    "level": "1"
  },
  {
    "word": "真ん前",
    "reading": "まんまえ",
    "meaning": "right in front, under the nose",
    "level": "1"
  },
  {
    "word": "真ん丸い",
    "reading": "まんまるい",
    "meaning": "perfectly circular",
    "level": "1"
  },
  {
    "word": "真ん円い",
    "reading": "まんまるい",
    "meaning": "perfectly round",
    "level": "1"
  },
  {
    "word": "～味",
    "reading": "～み",
    "meaning": "~ cast (sense of taste)",
    "level": "1"
  },
  {
    "word": "見合い",
    "reading": "みあい",
    "meaning": "formal marriage interview",
    "level": "1"
  },
  {
    "word": "見合わせる",
    "reading": "みあわせる",
    "meaning": "to exchange glances; to postpone",
    "level": "1"
  },
  {
    "word": "見落とす",
    "reading": "みおとす",
    "meaning": "to overlook, to fail to notice",
    "level": "1"
  },
  {
    "word": "未開",
    "reading": "みかい",
    "meaning": "savage land, backward region, uncivilized",
    "level": "1"
  },
  {
    "word": "味覚",
    "reading": "みかく",
    "meaning": "taste, palate, sense of taste",
    "level": "1"
  },
  {
    "word": "幹",
    "reading": "みき",
    "meaning": "(tree) trunk",
    "level": "1"
  },
  {
    "word": "見苦しい",
    "reading": "みぐるしい",
    "meaning": "unsightly, ugly",
    "level": "1"
  },
  {
    "word": "見込み",
    "reading": "みこみ",
    "meaning": "prospects, expectation, hope",
    "level": "1"
  },
  {
    "word": "未婚",
    "reading": "みこん",
    "meaning": "unmarried",
    "level": "1"
  },
  {
    "word": "未熟",
    "reading": "みじゅく",
    "meaning": "inexperience, unskilled, immature",
    "level": "1"
  },
  {
    "word": "微塵",
    "reading": "みじん",
    "meaning": "particle, atom",
    "level": "1"
  },
  {
    "word": "水気",
    "reading": "みずけ",
    "meaning": "moisture, dampness",
    "level": "1"
  },
  {
    "word": "ミスプリント",
    "reading": "ミスプリント",
    "meaning": "misprint",
    "level": "1"
  },
  {
    "word": "みすぼらしい",
    "reading": "みすぼらしい",
    "meaning": "shabby, seedy",
    "level": "1"
  },
  {
    "word": "ミセス",
    "reading": "ミセス",
    "meaning": "Mrs.",
    "level": "1"
  },
  {
    "word": "見せびらかす",
    "reading": "みせびらかす",
    "meaning": "to show off, to flaunt",
    "level": "1"
  },
  {
    "word": "見せ物",
    "reading": "みせもの",
    "meaning": "show, exhibition",
    "level": "1"
  },
  {
    "word": "溝",
    "reading": "みぞ",
    "meaning": "ditch, drain, gutter, gap",
    "level": "1"
  },
  {
    "word": "満たす",
    "reading": "みたす",
    "meaning": "to satisfy, to ingratiate, to fill, to fulfill",
    "level": "1"
  },
  {
    "word": "乱す",
    "reading": "みだす",
    "meaning": "to throw out of order, to disarrange, to disturb",
    "level": "1"
  },
  {
    "word": "乱れる",
    "reading": "みだれる",
    "meaning": "to get confused, to be disordered, to be disturbed",
    "level": "1"
  },
  {
    "word": "未知",
    "reading": "みち",
    "meaning": "not yet known",
    "level": "1"
  },
  {
    "word": "身近",
    "reading": "みぢか",
    "meaning": "near oneself, close to one, familiar",
    "level": "1"
  },
  {
    "word": "導く",
    "reading": "みちびく",
    "meaning": "to be guided, to be shown",
    "level": "1"
  },
  {
    "word": "密集",
    "reading": "みっしゅう",
    "meaning": "crowd, close formation, dense",
    "level": "1"
  },
  {
    "word": "密接",
    "reading": "みっせつ",
    "meaning": "connected, close, intimate",
    "level": "1"
  },
  {
    "word": "密度",
    "reading": "みつど",
    "meaning": "density",
    "level": "1"
  },
  {
    "word": "見積もり",
    "reading": "みつもり",
    "meaning": "estimation, quotation",
    "level": "1"
  },
  {
    "word": "未定",
    "reading": "みてい",
    "meaning": "not yet fixed, undecided, pending",
    "level": "1"
  },
  {
    "word": "見通し",
    "reading": "みとおし",
    "meaning": "perspective, unobstructed view, prospect",
    "level": "1"
  },
  {
    "word": "見なす",
    "reading": "みなす",
    "meaning": "to consider as, to regard",
    "level": "1"
  },
  {
    "word": "源",
    "reading": "みなもと",
    "meaning": "source, origin",
    "level": "1"
  },
  {
    "word": "見習う",
    "reading": "みならう",
    "meaning": "to follow another's example",
    "level": "1"
  },
  {
    "word": "身なり",
    "reading": "みなり",
    "meaning": "personal appearance",
    "level": "1"
  },
  {
    "word": "峰",
    "reading": "みね",
    "meaning": "peak, ridge",
    "level": "1"
  },
  {
    "word": "身の上",
    "reading": "みのうえ",
    "meaning": "one's future, one's welfare, one's personal history",
    "level": "1"
  },
  {
    "word": "見逃す",
    "reading": "みのがす",
    "meaning": "to miss, to overlook, to leave at large",
    "level": "1"
  },
  {
    "word": "身の回り",
    "reading": "みのまわり",
    "meaning": "one's personal appearance, personal belongings",
    "level": "1"
  },
  {
    "word": "見計らう",
    "reading": "みはからう",
    "meaning": "to choose at one's own discretion",
    "level": "1"
  },
  {
    "word": "見晴らし",
    "reading": "みはらし",
    "meaning": "view",
    "level": "1"
  },
  {
    "word": "身振り",
    "reading": "みぶり",
    "meaning": "gesture",
    "level": "1"
  },
  {
    "word": "脈",
    "reading": "みゃく",
    "meaning": "pulse",
    "level": "1"
  },
  {
    "word": "ミュージック",
    "reading": "ミュージック",
    "meaning": "music",
    "level": "1"
  },
  {
    "word": "未練",
    "reading": "みれん",
    "meaning": "lingering affection, attachment, regret(s)",
    "level": "1"
  },
  {
    "word": "見渡す",
    "reading": "みわたす",
    "meaning": "to look out over, to survey (scene), to take an extensive view of",
    "level": "1"
  },
  {
    "word": "民宿",
    "reading": "みんしゅく",
    "meaning": "private house providing lodging and meals to tourists",
    "level": "1"
  },
  {
    "word": "民族",
    "reading": "みんぞく",
    "meaning": "people, race",
    "level": "1"
  },
  {
    "word": "民俗",
    "reading": "みんぞく",
    "meaning": "folk customs",
    "level": "1"
  },
  {
    "word": "無意味",
    "reading": "むいみ",
    "meaning": "nonsense, no meaning",
    "level": "1"
  },
  {
    "word": "ムード",
    "reading": "ムード",
    "meaning": "mood",
    "level": "1"
  },
  {
    "word": "無口",
    "reading": "むくち",
    "meaning": "reticence",
    "level": "1"
  },
  {
    "word": "婿",
    "reading": "むこ",
    "meaning": "son-in-law",
    "level": "1"
  },
  {
    "word": "無効",
    "reading": "むこう",
    "meaning": "invalid, no effect, unavailable",
    "level": "1"
  },
  {
    "word": "無言",
    "reading": "むごん",
    "meaning": "silence",
    "level": "1"
  },
  {
    "word": "無邪気",
    "reading": "むじゃき",
    "meaning": "innocence, simple-mindedness",
    "level": "1"
  },
  {
    "word": "むしる",
    "reading": "むしる",
    "meaning": "to pluck, to pick, to tear",
    "level": "1"
  },
  {
    "word": "結び",
    "reading": "むすび",
    "meaning": "ending, conclusion, union",
    "level": "1"
  },
  {
    "word": "結び付き",
    "reading": "むすびつき",
    "meaning": "connection, relation",
    "level": "1"
  },
  {
    "word": "結び付く",
    "reading": "むすびつく",
    "meaning": "to be connected or related, to join together",
    "level": "1"
  },
  {
    "word": "結び付ける",
    "reading": "むすびつける",
    "meaning": "to combine, to join, to tie on, to attach with a knot",
    "level": "1"
  },
  {
    "word": "無線",
    "reading": "むせん",
    "meaning": "wireless, radio",
    "level": "1"
  },
  {
    "word": "無駄遣い",
    "reading": "むだづかい",
    "meaning": "waste money on, squander money on",
    "level": "1"
  },
  {
    "word": "無断",
    "reading": "むだん",
    "meaning": "without permission, without notice",
    "level": "1"
  },
  {
    "word": "無知",
    "reading": "むち",
    "meaning": "ignorance",
    "level": "1"
  },
  {
    "word": "無茶",
    "reading": "むちゃ",
    "meaning": "absurd, unreasonable",
    "level": "1"
  },
  {
    "word": "無茶苦茶",
    "reading": "むちゃくちゃ",
    "meaning": "confused, jumbled, mixed up, unreasonable",
    "level": "1"
  },
  {
    "word": "空しい",
    "reading": "むなしい",
    "meaning": "vacant, futile, vain",
    "level": "1"
  },
  {
    "word": "無念",
    "reading": "むねん",
    "meaning": "chagrin, regret",
    "level": "1"
  },
  {
    "word": "無能",
    "reading": "むのう",
    "meaning": "inefficiency, incompetence",
    "level": "1"
  },
  {
    "word": "無闇に",
    "reading": "むやみに",
    "meaning": "unreasonably, absurdly, at random",
    "level": "1"
  },
  {
    "word": "無用",
    "reading": "むよう",
    "meaning": "useless, needlessness, unnecessariness",
    "level": "1"
  },
  {
    "word": "斑",
    "reading": "むら",
    "meaning": "unevenness, inconsistency, irregularity",
    "level": "1"
  },
  {
    "word": "群がる",
    "reading": "むらがる",
    "meaning": "to swarm, to gather",
    "level": "1"
  },
  {
    "word": "無論",
    "reading": "むろん",
    "meaning": "of course, naturally",
    "level": "1"
  },
  {
    "word": "名産",
    "reading": "めいさん",
    "meaning": "noted product",
    "level": "1"
  },
  {
    "word": "名称",
    "reading": "めいしょう",
    "meaning": "name",
    "level": "1"
  },
  {
    "word": "命中",
    "reading": "めいちゅう",
    "meaning": "a hit",
    "level": "1"
  },
  {
    "word": "明白",
    "reading": "めいはく",
    "meaning": "obvious, clear",
    "level": "1"
  },
  {
    "word": "名簿",
    "reading": "めいぼ",
    "meaning": "register of names",
    "level": "1"
  },
  {
    "word": "名誉",
    "reading": "めいよ",
    "meaning": "honor, credit, prestige",
    "level": "1"
  },
  {
    "word": "明瞭",
    "reading": "めいりょう",
    "meaning": "clarity",
    "level": "1"
  },
  {
    "word": "明朗",
    "reading": "めいろう",
    "meaning": "bright, clear, cheerful",
    "level": "1"
  },
  {
    "word": "メーカー",
    "reading": "メーカー",
    "meaning": "manufacturer",
    "level": "1"
  },
  {
    "word": "目方",
    "reading": "めかた",
    "meaning": "weight",
    "level": "1"
  },
  {
    "word": "恵み",
    "reading": "めぐみ",
    "meaning": "blessing",
    "level": "1"
  },
  {
    "word": "恵む",
    "reading": "めぐむ",
    "meaning": "to bless, to show mercy to",
    "level": "1"
  },
  {
    "word": "目覚しい",
    "reading": "めざましい",
    "meaning": "brilliant, remarkable",
    "level": "1"
  },
  {
    "word": "目覚める",
    "reading": "めざめる",
    "meaning": "to wake up",
    "level": "1"
  },
  {
    "word": "召す",
    "reading": "めす",
    "meaning": "to call, to send for, to put on",
    "level": "1"
  },
  {
    "word": "雌",
    "reading": "めす",
    "meaning": "female (animal)",
    "level": "1"
  },
  {
    "word": "目付き",
    "reading": "めつき",
    "meaning": "look, expression of the eyes, eyes",
    "level": "1"
  },
  {
    "word": "滅亡",
    "reading": "めつぼう",
    "meaning": "downfall, collapse, destruction",
    "level": "1"
  },
  {
    "word": "メディア",
    "reading": "メディア",
    "meaning": "media",
    "level": "1"
  },
  {
    "word": "目途",
    "reading": "めど",
    "meaning": "goal, outlook",
    "level": "1"
  },
  {
    "word": "目盛",
    "reading": "めもり",
    "meaning": "scale, gradations",
    "level": "1"
  },
  {
    "word": "メロディー",
    "reading": "メロディー",
    "meaning": "melody",
    "level": "1"
  },
  {
    "word": "面会",
    "reading": "めんかい",
    "meaning": "interview",
    "level": "1"
  },
  {
    "word": "免除",
    "reading": "めんじょ",
    "meaning": "exemption, exoneration, discharge",
    "level": "1"
  },
  {
    "word": "面する",
    "reading": "めんする",
    "meaning": "to face on, to look out on to",
    "level": "1"
  },
  {
    "word": "面目",
    "reading": "めんぼく",
    "meaning": "face, honor, reputation",
    "level": "1"
  },
  {
    "word": "面目",
    "reading": "めんもく",
    "meaning": "face, honor, reputation",
    "level": "1"
  },
  {
    "word": "～網",
    "reading": "～もう",
    "meaning": "~ network",
    "level": "1"
  },
  {
    "word": "設ける",
    "reading": "もうける",
    "meaning": "to create, to establish",
    "level": "1"
  },
  {
    "word": "申し入れる",
    "reading": "もうしいれる",
    "meaning": "to propose, to suggest",
    "level": "1"
  },
  {
    "word": "申込",
    "reading": "もうしこみ",
    "meaning": "application, request, proposal",
    "level": "1"
  },
  {
    "word": "申出",
    "reading": "もうしで",
    "meaning": "request, claim, report",
    "level": "1"
  },
  {
    "word": "申し出る",
    "reading": "もうしでる",
    "meaning": "to report to, to tell, to suggest",
    "level": "1"
  },
  {
    "word": "申し分",
    "reading": "もうしぶん",
    "meaning": "objection, shortcomings",
    "level": "1"
  },
  {
    "word": "盲点",
    "reading": "もうてん",
    "meaning": "blind spot",
    "level": "1"
  },
  {
    "word": "猛烈",
    "reading": "もうれつ",
    "meaning": "violent, vehement, rage",
    "level": "1"
  },
  {
    "word": "モーテル",
    "reading": "モーテル",
    "meaning": "motel",
    "level": "1"
  },
  {
    "word": "もがく",
    "reading": "もがく",
    "meaning": "to struggle, to wriggle, to be impatient",
    "level": "1"
  },
  {
    "word": "目録",
    "reading": "もくろく",
    "meaning": "catalogue, catalog, list",
    "level": "1"
  },
  {
    "word": "目論見",
    "reading": "もくろみ",
    "meaning": "a plan, a scheme, intention",
    "level": "1"
  },
  {
    "word": "模型",
    "reading": "もけい",
    "meaning": "model, dummy, marquette",
    "level": "1"
  },
  {
    "word": "模索",
    "reading": "もさく",
    "meaning": "groping (for)",
    "level": "1"
  },
  {
    "word": "もしかして",
    "reading": "もしかして",
    "meaning": "perhaps, possibly",
    "level": "1"
  },
  {
    "word": "もしくは",
    "reading": "もしくは",
    "meaning": "or, otherwise",
    "level": "1"
  },
  {
    "word": "もたらす",
    "reading": "もたらす",
    "meaning": "to bring, to take, to bring about",
    "level": "1"
  },
  {
    "word": "持ち切り",
    "reading": "もちきり",
    "meaning": "hot topic, talk of the town",
    "level": "1"
  },
  {
    "word": "目下",
    "reading": "もっか",
    "meaning": "at present, now",
    "level": "1"
  },
  {
    "word": "専ら",
    "reading": "もっぱら",
    "meaning": "wholly, solely, entirely",
    "level": "1"
  },
  {
    "word": "もてなす",
    "reading": "もてなす",
    "meaning": "to entertain, to make welcome",
    "level": "1"
  },
  {
    "word": "もてる",
    "reading": "もてる",
    "meaning": "to be well liked, to be popular",
    "level": "1"
  },
  {
    "word": "モニター",
    "reading": "モニター",
    "meaning": "(computer) monitor",
    "level": "1"
  },
  {
    "word": "物好き",
    "reading": "ものずき",
    "meaning": "(idle) curiosity",
    "level": "1"
  },
  {
    "word": "物足りない",
    "reading": "ものたりない",
    "meaning": "unsatisfied, unsatisfactory",
    "level": "1"
  },
  {
    "word": "もはや",
    "reading": "もはや",
    "meaning": "already, now",
    "level": "1"
  },
  {
    "word": "模範",
    "reading": "もはん",
    "meaning": "model, example",
    "level": "1"
  },
  {
    "word": "模倣",
    "reading": "もほう",
    "meaning": "imitation, copying",
    "level": "1"
  },
  {
    "word": "もめる",
    "reading": "もめる",
    "meaning": "to disagree, to dispute",
    "level": "1"
  },
  {
    "word": "股",
    "reading": "もも",
    "meaning": "thigh, femur",
    "level": "1"
  },
  {
    "word": "腿",
    "reading": "もも",
    "meaning": "thigh, femur",
    "level": "1"
  },
  {
    "word": "催す",
    "reading": "もよおす",
    "meaning": "to hold (a meeting), to give (a dinner)",
    "level": "1"
  },
  {
    "word": "漏らす",
    "reading": "もらす",
    "meaning": "to let leak, to reveal",
    "level": "1"
  },
  {
    "word": "盛り上がる",
    "reading": "もりあがる",
    "meaning": "to rouse, to swell, to rise",
    "level": "1"
  },
  {
    "word": "漏る",
    "reading": "もる",
    "meaning": "to leak, to run out",
    "level": "1"
  },
  {
    "word": "漏れる",
    "reading": "もれる",
    "meaning": "to leak out, to escape, to filter out",
    "level": "1"
  },
  {
    "word": "脆い",
    "reading": "もろい",
    "meaning": "brittle, fragile, tender-hearted",
    "level": "1"
  },
  {
    "word": "もろに",
    "reading": "もろに",
    "meaning": "completely, altogether, bodily",
    "level": "1"
  },
  {
    "word": "矢",
    "reading": "や",
    "meaning": "arrow",
    "level": "1"
  },
  {
    "word": "野外",
    "reading": "やがい",
    "meaning": "fields, outskirts, open air, suburbs",
    "level": "1"
  },
  {
    "word": "～薬",
    "reading": "～やく",
    "meaning": "medicine",
    "level": "1"
  },
  {
    "word": "夜具",
    "reading": "やぐ",
    "meaning": "bedding",
    "level": "1"
  },
  {
    "word": "役職",
    "reading": "やくしょく",
    "meaning": "post, managerial position, official position",
    "level": "1"
  },
  {
    "word": "役場",
    "reading": "やくば",
    "meaning": "town hall",
    "level": "1"
  },
  {
    "word": "やけに",
    "reading": "やけに",
    "meaning": "sure, very",
    "level": "1"
  },
  {
    "word": "屋敷",
    "reading": "やしき",
    "meaning": "mansion",
    "level": "1"
  },
  {
    "word": "養う",
    "reading": "やしなう",
    "meaning": "to rear, to maintain, to cultivate",
    "level": "1"
  },
  {
    "word": "野心",
    "reading": "やしん",
    "meaning": "ambition, aspiration",
    "level": "1"
  },
  {
    "word": "安っぽい",
    "reading": "やすっぽい",
    "meaning": "cheap-looking, tawdry",
    "level": "1"
  },
  {
    "word": "休める",
    "reading": "やすめる",
    "meaning": "to rest, to suspend, to give relief",
    "level": "1"
  },
  {
    "word": "野生",
    "reading": "やせい",
    "meaning": "wild",
    "level": "1"
  },
  {
    "word": "奴",
    "reading": "やつ",
    "meaning": "(vulg.) fellow, guy, chap",
    "level": "1"
  },
  {
    "word": "闇",
    "reading": "やみ",
    "meaning": "darkness, shady, illegal",
    "level": "1"
  },
  {
    "word": "病む",
    "reading": "やむ",
    "meaning": "to fall ill, to be ill",
    "level": "1"
  },
  {
    "word": "ややこしい",
    "reading": "ややこしい",
    "meaning": "puzzling, tangled, complicated, complex",
    "level": "1"
  },
  {
    "word": "やりとおす",
    "reading": "やりとおす",
    "meaning": "to carry through, to achieve, to complete",
    "level": "1"
  },
  {
    "word": "やりとげる",
    "reading": "やりとげる",
    "meaning": "to accomplish",
    "level": "1"
  },
  {
    "word": "和らげる",
    "reading": "やわらげる",
    "meaning": "to soften, to moderate, to relieve",
    "level": "1"
  },
  {
    "word": "ヤング",
    "reading": "ヤング",
    "meaning": "young",
    "level": "1"
  },
  {
    "word": "～油",
    "reading": "～ゆ",
    "meaning": "~ oil",
    "level": "1"
  },
  {
    "word": "優位",
    "reading": "ゆうい",
    "meaning": "predominance, ascendancy, superiority",
    "level": "1"
  },
  {
    "word": "憂鬱",
    "reading": "ゆううつ",
    "meaning": "depression, melancholy",
    "level": "1"
  },
  {
    "word": "有益",
    "reading": "ゆうえき",
    "meaning": "beneficial, profitable",
    "level": "1"
  },
  {
    "word": "優越",
    "reading": "ゆうえつ",
    "meaning": "supremacy, predominance, being superior to",
    "level": "1"
  },
  {
    "word": "勇敢",
    "reading": "ゆうかん",
    "meaning": "bravery, heroism, gallantry",
    "level": "1"
  },
  {
    "word": "夕暮れ",
    "reading": "ゆうぐれ",
    "meaning": "evening, (evening) twilight",
    "level": "1"
  },
  {
    "word": "融資",
    "reading": "ゆうし",
    "meaning": "financing, loan",
    "level": "1"
  },
  {
    "word": "有する",
    "reading": "ゆうする",
    "meaning": "to own, to be endowed with",
    "level": "1"
  },
  {
    "word": "優勢",
    "reading": "ゆうせい",
    "meaning": "superiority, superior power, predominance",
    "level": "1"
  },
  {
    "word": "優先",
    "reading": "ゆうせん",
    "meaning": "preference, priority",
    "level": "1"
  },
  {
    "word": "誘導",
    "reading": "ゆうどう",
    "meaning": "guidance, leading, inducement",
    "level": "1"
  },
  {
    "word": "融通",
    "reading": "ゆうずう",
    "meaning": "adaptability, versatility, finance",
    "level": "1"
  },
  {
    "word": "優美",
    "reading": "ゆうび",
    "meaning": "grace, refinement, elegance",
    "level": "1"
  },
  {
    "word": "有望",
    "reading": "ゆうぼう",
    "meaning": "good prospects, full of hope, promising",
    "level": "1"
  },
  {
    "word": "遊牧",
    "reading": "ゆうぼく",
    "meaning": "nomadism",
    "level": "1"
  },
  {
    "word": "夕焼け",
    "reading": "ゆうやけ",
    "meaning": "sunset",
    "level": "1"
  },
  {
    "word": "有力",
    "reading": "ゆうりょく",
    "meaning": "influence, prominence; potent",
    "level": "1"
  },
  {
    "word": "幽霊",
    "reading": "ゆうれい",
    "meaning": "ghost, specter, phantom",
    "level": "1"
  },
  {
    "word": "誘惑",
    "reading": "ゆうわく",
    "meaning": "temptation, allurement, lure",
    "level": "1"
  },
  {
    "word": "故",
    "reading": "ゆえ",
    "meaning": "reason, cause, circumstances",
    "level": "1"
  },
  {
    "word": "歪む",
    "reading": "ゆがむ",
    "meaning": "to warp, to be crooked, to be distorted",
    "level": "1"
  },
  {
    "word": "揺さぶる",
    "reading": "ゆさぶる",
    "meaning": "to shake, to jolt, to rock, to swing",
    "level": "1"
  },
  {
    "word": "濯ぐ",
    "reading": "ゆすぐ",
    "meaning": "to rinse, to wash out",
    "level": "1"
  },
  {
    "word": "ゆとり",
    "reading": "ゆとり",
    "meaning": "reserve, affluence, time (to spare)",
    "level": "1"
  },
  {
    "word": "ユニーク",
    "reading": "ユニーク",
    "meaning": "unique",
    "level": "1"
  },
  {
    "word": "ユニフォーム",
    "reading": "ユニフォーム",
    "meaning": "uniform",
    "level": "1"
  },
  {
    "word": "指差す",
    "reading": "ゆびさす",
    "meaning": "to point at",
    "level": "1"
  },
  {
    "word": "弓",
    "reading": "ゆみ",
    "meaning": "bow",
    "level": "1"
  },
  {
    "word": "揺らぐ",
    "reading": "ゆらぐ",
    "meaning": "to swing, to sway, to shake",
    "level": "1"
  },
  {
    "word": "緩む",
    "reading": "ゆるむ",
    "meaning": "to become loose, to slacken",
    "level": "1"
  },
  {
    "word": "緩める",
    "reading": "ゆるめる",
    "meaning": "to loosen, to slow down",
    "level": "1"
  },
  {
    "word": "緩やか",
    "reading": "ゆるやか",
    "meaning": "lenient",
    "level": "1"
  },
  {
    "word": "要因",
    "reading": "よういん",
    "meaning": "primary factor, main cause",
    "level": "1"
  },
  {
    "word": "溶液",
    "reading": "ようえき",
    "meaning": "solution",
    "level": "1"
  },
  {
    "word": "用件",
    "reading": "ようけん",
    "meaning": "business",
    "level": "1"
  },
  {
    "word": "養護",
    "reading": "ようご",
    "meaning": "protection, nursing, protective care",
    "level": "1"
  },
  {
    "word": "用紙",
    "reading": "ようし",
    "meaning": "a form",
    "level": "1"
  },
  {
    "word": "様式",
    "reading": "ようしき",
    "meaning": "style, form, pattern",
    "level": "1"
  },
  {
    "word": "要する",
    "reading": "ようする",
    "meaning": "to demand, to require, to take",
    "level": "1"
  },
  {
    "word": "要請",
    "reading": "ようせい",
    "meaning": "claim, demand, request, application",
    "level": "1"
  },
  {
    "word": "様相",
    "reading": "ようそう",
    "meaning": "aspect",
    "level": "1"
  },
  {
    "word": "用品",
    "reading": "ようひん",
    "meaning": "articles, supplies, parts",
    "level": "1"
  },
  {
    "word": "洋風",
    "reading": "ようふう",
    "meaning": "western style",
    "level": "1"
  },
  {
    "word": "用法",
    "reading": "ようほう",
    "meaning": "directions, rules of use",
    "level": "1"
  },
  {
    "word": "要望",
    "reading": "ようぼう",
    "meaning": "demand for, request",
    "level": "1"
  },
  {
    "word": "余暇",
    "reading": "よか",
    "meaning": "leisure, leisure time, spare time",
    "level": "1"
  },
  {
    "word": "予感",
    "reading": "よかん",
    "meaning": "presentiment, premonition",
    "level": "1"
  },
  {
    "word": "余興",
    "reading": "よきょう",
    "meaning": "side show, entertainment",
    "level": "1"
  },
  {
    "word": "預金",
    "reading": "よきん",
    "meaning": "deposit, bank account",
    "level": "1"
  },
  {
    "word": "欲",
    "reading": "よく",
    "meaning": "greed, wants",
    "level": "1"
  },
  {
    "word": "抑圧",
    "reading": "よくあつ",
    "meaning": "restraint, oppression, suppression",
    "level": "1"
  },
  {
    "word": "浴室",
    "reading": "よくしつ",
    "meaning": "bathroom, bath",
    "level": "1"
  },
  {
    "word": "抑制",
    "reading": "よくせい",
    "meaning": "control, restraint, suppression",
    "level": "1"
  },
  {
    "word": "欲深い",
    "reading": "よくふかい",
    "meaning": "greedy",
    "level": "1"
  },
  {
    "word": "欲望",
    "reading": "よくぼう",
    "meaning": "desire, appetite",
    "level": "1"
  },
  {
    "word": "避ける",
    "reading": "よける",
    "meaning": "to avoid (physical contact with; to ward off, to avert",
    "level": "1"
  },
  {
    "word": "予言",
    "reading": "よげん",
    "meaning": "prediction, promise, prognostication",
    "level": "1"
  },
  {
    "word": "横綱",
    "reading": "よこづな",
    "meaning": "sumo grand champion",
    "level": "1"
  },
  {
    "word": "汚れ",
    "reading": "よごれ",
    "meaning": "dirt, filth",
    "level": "1"
  },
  {
    "word": "よし (かん)",
    "reading": "よし (かん)",
    "meaning": "all right!",
    "level": "1"
  },
  {
    "word": "良し",
    "reading": "よし",
    "meaning": "all right!",
    "level": "1"
  },
  {
    "word": "善し悪し",
    "reading": "よしあし",
    "meaning": "good or bad, merits or demerits, quality",
    "level": "1"
  },
  {
    "word": "余所見",
    "reading": "よそみ",
    "meaning": "looking away, looking aside",
    "level": "1"
  },
  {
    "word": "余地",
    "reading": "よち",
    "meaning": "place, room, margin",
    "level": "1"
  },
  {
    "word": "よって (よりどころ)",
    "reading": "よって (よりどころ)",
    "meaning": "therefore, consequently",
    "level": "1"
  },
  {
    "word": "与党",
    "reading": "よとう",
    "meaning": "government party, (ruling) party in power, government",
    "level": "1"
  },
  {
    "word": "呼び止める",
    "reading": "よびとめる",
    "meaning": "to flag down",
    "level": "1"
  },
  {
    "word": "夜更し",
    "reading": "よふかし",
    "meaning": "staying up late, keeping late hours",
    "level": "1"
  },
  {
    "word": "夜更け",
    "reading": "よふけ",
    "meaning": "late at night",
    "level": "1"
  },
  {
    "word": "余程",
    "reading": "よほど",
    "meaning": "very, much, to a large extent, quite",
    "level": "1"
  },
  {
    "word": "読み上げる",
    "reading": "よみあげる",
    "meaning": "to read out loud (and clearly), to call a roll",
    "level": "1"
  },
  {
    "word": "～寄り",
    "reading": "～より",
    "meaning": "near to ~ (e.g., North by East)",
    "level": "1"
  },
  {
    "word": "寄り掛かる",
    "reading": "よりかかる",
    "meaning": "to lean against, to recline on, to lean on, to rely on",
    "level": "1"
  },
  {
    "word": "世論",
    "reading": "よろん",
    "meaning": "public opinion",
    "level": "1"
  },
  {
    "word": "弱る",
    "reading": "よわる",
    "meaning": "to weaken, to be troubled, to be emaciated",
    "level": "1"
  },
  {
    "word": "来場",
    "reading": "らいじょう",
    "meaning": "attendance",
    "level": "1"
  },
  {
    "word": "ライス",
    "reading": "ライス",
    "meaning": "rice",
    "level": "1"
  },
  {
    "word": "酪農",
    "reading": "らくのう",
    "meaning": "dairy farming",
    "level": "1"
  },
  {
    "word": "落下",
    "reading": "らっか",
    "meaning": "fall, drop, come down",
    "level": "1"
  },
  {
    "word": "楽観",
    "reading": "らっかん",
    "meaning": "optimism",
    "level": "1"
  },
  {
    "word": "ランプ",
    "reading": "ランプ",
    "meaning": "lamp; ramp",
    "level": "1"
  },
  {
    "word": "濫用",
    "reading": "らんよう",
    "meaning": "abuse, misuse, using to excess",
    "level": "1"
  },
  {
    "word": "リード",
    "reading": "リード",
    "meaning": "lead; reed",
    "level": "1"
  },
  {
    "word": "理屈",
    "reading": "りくつ",
    "meaning": "theory, reason",
    "level": "1"
  },
  {
    "word": "利子",
    "reading": "りし",
    "meaning": "interest (bank)",
    "level": "1"
  },
  {
    "word": "利潤",
    "reading": "りじゅん",
    "meaning": "profit, returns",
    "level": "1"
  },
  {
    "word": "理性",
    "reading": "りせい",
    "meaning": "reason, sense",
    "level": "1"
  },
  {
    "word": "利息",
    "reading": "りそく",
    "meaning": "interest (bank)",
    "level": "1"
  },
  {
    "word": "立体",
    "reading": "りったい",
    "meaning": "solid body",
    "level": "1"
  },
  {
    "word": "立方",
    "reading": "りっぽう",
    "meaning": "cube",
    "level": "1"
  },
  {
    "word": "立法",
    "reading": "りっぽう",
    "meaning": "legislation, lawmaking",
    "level": "1"
  },
  {
    "word": "利点",
    "reading": "りてん",
    "meaning": "advantage, point in favor",
    "level": "1"
  },
  {
    "word": "略奪",
    "reading": "りゃくだつ",
    "meaning": "pillage, looting, robbery",
    "level": "1"
  },
  {
    "word": "略語",
    "reading": "りゃくご",
    "meaning": "abbreviation, acronym",
    "level": "1"
  },
  {
    "word": "流通",
    "reading": "りゅうつう",
    "meaning": "circulation of money or goods, distribution",
    "level": "1"
  },
  {
    "word": "領域",
    "reading": "りょういき",
    "meaning": "area, territory, region",
    "level": "1"
  },
  {
    "word": "了解",
    "reading": "りょうかい",
    "meaning": "comprehension, consent, understanding",
    "level": "1"
  },
  {
    "word": "領海",
    "reading": "りょうかい",
    "meaning": "territorial waters",
    "level": "1"
  },
  {
    "word": "両極",
    "reading": "りょうきょく",
    "meaning": "both extremities, north and south poles",
    "level": "1"
  },
  {
    "word": "良好",
    "reading": "りょうこう",
    "meaning": "favorable, satisfactory",
    "level": "1"
  },
  {
    "word": "良識",
    "reading": "りょうしき",
    "meaning": "good sense",
    "level": "1"
  },
  {
    "word": "良質",
    "reading": "りょうしつ",
    "meaning": "good quality, superior quality",
    "level": "1"
  },
  {
    "word": "了承",
    "reading": "りょうしょう",
    "meaning": "acknowledgment, understanding",
    "level": "1"
  },
  {
    "word": "良心",
    "reading": "りょうしん",
    "meaning": "conscience",
    "level": "1"
  },
  {
    "word": "領地",
    "reading": "りょうち",
    "meaning": "territory",
    "level": "1"
  },
  {
    "word": "領土",
    "reading": "りょうど",
    "meaning": "territory, possession",
    "level": "1"
  },
  {
    "word": "両立",
    "reading": "りょうりつ",
    "meaning": "compatibility, coexistence, standing together",
    "level": "1"
  },
  {
    "word": "旅客",
    "reading": "りょかく",
    "meaning": "passenger",
    "level": "1"
  },
  {
    "word": "旅券",
    "reading": "りょけん",
    "meaning": "passport",
    "level": "1"
  },
  {
    "word": "履歴",
    "reading": "りれき",
    "meaning": "personal history, background, log",
    "level": "1"
  },
  {
    "word": "理論",
    "reading": "りろん",
    "meaning": "theory",
    "level": "1"
  },
  {
    "word": "林業",
    "reading": "りんぎょう",
    "meaning": "forestry",
    "level": "1"
  },
  {
    "word": "類",
    "reading": "るい",
    "meaning": "kind, class, family",
    "level": "1"
  },
  {
    "word": "類推",
    "reading": "るいすい",
    "meaning": "analogy",
    "level": "1"
  },
  {
    "word": "類似",
    "reading": "るいじ",
    "meaning": "analogous",
    "level": "1"
  },
  {
    "word": "ルーズ",
    "reading": "ルーズ",
    "meaning": "loose",
    "level": "1"
  },
  {
    "word": "冷酷",
    "reading": "れいこく",
    "meaning": "cruelty, coldheartedness, ruthless",
    "level": "1"
  },
  {
    "word": "冷蔵",
    "reading": "れいぞう",
    "meaning": "refrigeration",
    "level": "1"
  },
  {
    "word": "冷淡",
    "reading": "れいたん",
    "meaning": "coolness, indifference",
    "level": "1"
  },
  {
    "word": "レース",
    "reading": "レース",
    "meaning": "race; lace",
    "level": "1"
  },
  {
    "word": "レギュラー",
    "reading": "レギュラー",
    "meaning": "regular",
    "level": "1"
  },
  {
    "word": "レッスン",
    "reading": "レッスン",
    "meaning": "lesson",
    "level": "1"
  },
  {
    "word": "レディー",
    "reading": "レディー",
    "meaning": "lady",
    "level": "1"
  },
  {
    "word": "レバー",
    "reading": "レバー",
    "meaning": "lever; liver",
    "level": "1"
  },
  {
    "word": "恋愛",
    "reading": "れんあい",
    "meaning": "love, romance",
    "level": "1"
  },
  {
    "word": "バッテリー",
    "reading": "バッテリー",
    "meaning": "battery",
    "level": "1"
  },
  {
    "word": "バット",
    "reading": "バット",
    "meaning": "bat, vat",
    "level": "1"
  },
  {
    "word": "発病",
    "reading": "はつびょう",
    "meaning": "attack, to become sick",
    "level": "1"
  },
  {
    "word": "初耳",
    "reading": "はつみみ",
    "meaning": "something heard for the first time",
    "level": "1"
  },
  {
    "word": "果て",
    "reading": "はて",
    "meaning": "the end, the extremity, the limit(s)",
    "level": "1"
  },
  {
    "word": "果てる",
    "reading": "はてる",
    "meaning": "to end, to be finished, to be exhausted",
    "level": "1"
  },
  {
    "word": "ばてる",
    "reading": "ばてる",
    "meaning": "to be exhausted, to be worn out",
    "level": "1"
  },
  {
    "word": "パトカー",
    "reading": "パトカー",
    "meaning": "patrol car",
    "level": "1"
  },
  {
    "word": "甚だ",
    "reading": "はなはだ",
    "meaning": "very, greatly, exceedingly",
    "level": "1"
  },
  {
    "word": "華々しい",
    "reading": "はなばなしい",
    "meaning": "brilliant, magnificent, spectacular",
    "level": "1"
  },
  {
    "word": "花びら",
    "reading": "はなびら",
    "meaning": "(flower) petal",
    "level": "1"
  },
  {
    "word": "華やか",
    "reading": "はなやか",
    "meaning": "brilliant, gorgeous, florid",
    "level": "1"
  },
  {
    "word": "阻む",
    "reading": "はばむ",
    "meaning": "to keep someone from doing, to stop, to oppose",
    "level": "1"
  },
  {
    "word": "浜",
    "reading": "はま",
    "meaning": "beach, seashore",
    "level": "1"
  },
  {
    "word": "浜辺",
    "reading": "はまべ",
    "meaning": "beach, foreshore",
    "level": "1"
  },
  {
    "word": "はまる",
    "reading": "はまる",
    "meaning": "to get into, to go into, to fit, to be fit for, to suit",
    "level": "1"
  },
  {
    "word": "早める",
    "reading": "はやめる",
    "meaning": "to hasten, to quicken, to accelerate",
    "level": "1"
  },
  {
    "word": "腹立ち",
    "reading": "はらだち",
    "meaning": "anger",
    "level": "1"
  },
  {
    "word": "原っぱ",
    "reading": "はらっぱ",
    "meaning": "open field, empty lot, plain",
    "level": "1"
  },
  {
    "word": "はらはら",
    "reading": "はらはら",
    "meaning": "feel nervous",
    "level": "1"
  },
  {
    "word": "ばらまく",
    "reading": "ばらまく",
    "meaning": "to disseminate, to scatter",
    "level": "1"
  },
  {
    "word": "張り紙",
    "reading": "はりがみ",
    "meaning": "notice, poster",
    "level": "1"
  },
  {
    "word": "遥か",
    "reading": "はるか",
    "meaning": "far, far-away, distant",
    "level": "1"
  },
  {
    "word": "破裂",
    "reading": "はれつ",
    "meaning": "explosion, rupture, break off",
    "level": "1"
  },
  {
    "word": "腫れる",
    "reading": "はれる",
    "meaning": "to swell (from inflammation, to become swollen)",
    "level": "1"
  },
  {
    "word": "繁栄",
    "reading": "はんえい",
    "meaning": "prospering, prosperity, flourishing",
    "level": "1"
  },
  {
    "word": "版画",
    "reading": "はんが",
    "meaning": "art print",
    "level": "1"
  },
  {
    "word": "ハンガー",
    "reading": "ハンガー",
    "meaning": "(coat) hanger",
    "level": "1"
  },
  {
    "word": "反感",
    "reading": "はんかん",
    "meaning": "antipathy, revolt, animosity",
    "level": "1"
  },
  {
    "word": "反響",
    "reading": "はんきょう",
    "meaning": "echo, reverberation, repercussion",
    "level": "1"
  },
  {
    "word": "パンク",
    "reading": "パンク",
    "meaning": "puncture, bursting; punk",
    "level": "1"
  },
  {
    "word": "反撃",
    "reading": "はんげき",
    "meaning": "counterattack, counteroffensive, counterblow",
    "level": "1"
  },
  {
    "word": "判決",
    "reading": "はんけつ",
    "meaning": "judicial decision, judgment, sentence, decree",
    "level": "1"
  },
  {
    "word": "反射",
    "reading": "はんしゃ",
    "meaning": "reflection, reverberation",
    "level": "1"
  },
  {
    "word": "繁盛",
    "reading": "はんじょう",
    "meaning": "prosperity, flourishing, thriving",
    "level": "1"
  },
  {
    "word": "繁殖",
    "reading": "はんしょく",
    "meaning": "breed, multiply, propagation",
    "level": "1"
  },
  {
    "word": "反する",
    "reading": "はんする",
    "meaning": "to be inconsistent with, to oppose, to contradict",
    "level": "1"
  },
  {
    "word": "判定",
    "reading": "はんてい",
    "meaning": "judgment, decision, award, verdict",
    "level": "1"
  },
  {
    "word": "万人",
    "reading": "ばんにん",
    "meaning": "all people, everybody, 10000 people",
    "level": "1"
  },
  {
    "word": "晩年",
    "reading": "ばんねん",
    "meaning": "(one's) last years",
    "level": "1"
  },
  {
    "word": "反応",
    "reading": "はんのう",
    "meaning": "reaction, response",
    "level": "1"
  },
  {
    "word": "万能",
    "reading": "ばんのう",
    "meaning": "all-purpose, almighty, omnipotent",
    "level": "1"
  },
  {
    "word": "半端",
    "reading": "はんぱ",
    "meaning": "fragment, fraction, incompleteness",
    "level": "1"
  },
  {
    "word": "反発",
    "reading": "はんぱつ",
    "meaning": "repelling, rebound, oppose",
    "level": "1"
  },
  {
    "word": "反乱",
    "reading": "はんらん",
    "meaning": "rebellion, revolt, uprising",
    "level": "1"
  },
  {
    "word": "氾濫",
    "reading": "はんらん",
    "meaning": "overflowing, flood",
    "level": "1"
  },
  {
    "word": "美",
    "reading": "び",
    "meaning": "beauty",
    "level": "1"
  },
  {
    "word": "ひいては",
    "reading": "ひいては",
    "meaning": "not only…but also, in addition to, consequently",
    "level": "1"
  },
  {
    "word": "ビールス",
    "reading": "ビールス",
    "meaning": "virus",
    "level": "1"
  },
  {
    "word": "控室",
    "reading": "ひかえしつ",
    "meaning": "waiting room",
    "level": "1"
  },
  {
    "word": "控える",
    "reading": "ひかえる",
    "meaning": "to hold back; to make notes",
    "level": "1"
  },
  {
    "word": "悲観",
    "reading": "ひかん",
    "meaning": "pessimism, disappointment",
    "level": "1"
  },
  {
    "word": "引き上げる",
    "reading": "ひきあげる",
    "meaning": "to withdraw, to leave, to pull out",
    "level": "1"
  },
  {
    "word": "率いる",
    "reading": "ひきいる",
    "meaning": "to lead, to spearhead (a group), to command (troops)",
    "level": "1"
  },
  {
    "word": "引き起こす",
    "reading": "ひきおこす",
    "meaning": "to cause",
    "level": "1"
  },
  {
    "word": "引下げる",
    "reading": "ひきさげる",
    "meaning": "to pull down, to lower, to reduce, to withdraw",
    "level": "1"
  },
  {
    "word": "引きずる",
    "reading": "ひきずる",
    "meaning": "to drag along, to pull, to prolong",
    "level": "1"
  },
  {
    "word": "引取る",
    "reading": "ひきとる",
    "meaning": "to take back; to adopt; to leave",
    "level": "1"
  },
  {
    "word": "否決",
    "reading": "ひけつ",
    "meaning": "rejection, negation, voting down",
    "level": "1"
  },
  {
    "word": "日頃",
    "reading": "ひごろ",
    "meaning": "normally, habitually",
    "level": "1"
  },
  {
    "word": "久しい",
    "reading": "ひさしい",
    "meaning": "long, long-continued, old (story)",
    "level": "1"
  },
  {
    "word": "悲惨",
    "reading": "ひさん",
    "meaning": "tragedy, disaster; misery, wretched, pitiful",
    "level": "1"
  },
  {
    "word": "ビジネス",
    "reading": "ビジネス",
    "meaning": "business",
    "level": "1"
  },
  {
    "word": "比重",
    "reading": "ひじゅう",
    "meaning": "specific gravity",
    "level": "1"
  },
  {
    "word": "美術",
    "reading": "びじゅつ",
    "meaning": "art, fine arts",
    "level": "1"
  },
  {
    "word": "秘書",
    "reading": "ひしょ",
    "meaning": "(private) secretary",
    "level": "1"
  },
  {
    "word": "微笑",
    "reading": "びしょう",
    "meaning": "smile",
    "level": "1"
  },
  {
    "word": "歪む",
    "reading": "ひずむ",
    "meaning": "to warp, to be distorted",
    "level": "1"
  },
  {
    "word": "密か",
    "reading": "ひそか",
    "meaning": "secret, private, surreptitious",
    "level": "1"
  },
  {
    "word": "浸す",
    "reading": "ひたす",
    "meaning": "to soak, to dip, to drench",
    "level": "1"
  },
  {
    "word": "ひたすら",
    "reading": "ひたすら",
    "meaning": "nothing but, earnestly, intently",
    "level": "1"
  },
  {
    "word": "左利き",
    "reading": "ひだりきき",
    "meaning": "left-handedness, sake drinker, left-hander",
    "level": "1"
  },
  {
    "word": "引っ掻く",
    "reading": "ひっかく",
    "meaning": "to scratch",
    "level": "1"
  },
  {
    "word": "必修",
    "reading": "ひっしゅう",
    "meaning": "required (subject)",
    "level": "1"
  },
  {
    "word": "びっしょり",
    "reading": "びっしょり",
    "meaning": "wet through, drenched",
    "level": "1"
  },
  {
    "word": "必然",
    "reading": "ひつぜん",
    "meaning": "inevitable, necessary",
    "level": "1"
  },
  {
    "word": "匹敵",
    "reading": "ひってき",
    "meaning": "comparing with, rival, equal",
    "level": "1"
  },
  {
    "word": "一息",
    "reading": "ひといき",
    "meaning": "a breath, a pause, an effort",
    "level": "1"
  },
  {
    "word": "人影",
    "reading": "ひとかげ",
    "meaning": "man's shadow, soul",
    "level": "1"
  },
  {
    "word": "人柄",
    "reading": "ひとがら",
    "meaning": "personality, character",
    "level": "1"
  },
  {
    "word": "人気",
    "reading": "ひとけ",
    "meaning": "sign of life",
    "level": "1"
  },
  {
    "word": "一頃",
    "reading": "ひところ",
    "meaning": "once, some time ago",
    "level": "1"
  },
  {
    "word": "人質",
    "reading": "ひとじち",
    "meaning": "hostage",
    "level": "1"
  },
  {
    "word": "一筋",
    "reading": "ひとすじ",
    "meaning": "a line, earnestly, blindly, straightforwardly",
    "level": "1"
  },
  {
    "word": "人目",
    "reading": "ひとめ",
    "meaning": "glimpse, public gaze",
    "level": "1"
  },
  {
    "word": "日取り",
    "reading": "ひどり",
    "meaning": "fixed date, appointed day",
    "level": "1"
  },
  {
    "word": "雛",
    "reading": "ひな",
    "meaning": "young bird, chick, doll",
    "level": "1"
  },
  {
    "word": "雛祭",
    "reading": "ひなまつり",
    "meaning": "Girls' (dolls') Festival",
    "level": "1"
  },
  {
    "word": "日向",
    "reading": "ひなた",
    "meaning": "sunny place, in the sun",
    "level": "1"
  },
  {
    "word": "非難",
    "reading": "ひなん",
    "meaning": "blame, attack, criticism",
    "level": "1"
  },
  {
    "word": "避難",
    "reading": "ひなん",
    "meaning": "taking refuge, finding shelter",
    "level": "1"
  },
  {
    "word": "日の丸",
    "reading": "ひのまる",
    "meaning": "the Japanese flag",
    "level": "1"
  },
  {
    "word": "火花",
    "reading": "ひばな",
    "meaning": "spark",
    "level": "1"
  },
  {
    "word": "ひび (かべの～)",
    "reading": "ひび (かべの～)",
    "meaning": "crack, fissure, flaw",
    "level": "1"
  },
  {
    "word": "悲鳴",
    "reading": "ひめい",
    "meaning": "shriek, scream",
    "level": "1"
  },
  {
    "word": "冷やかす",
    "reading": "ひやかす",
    "meaning": "to banter, to make fun of, to jeer at, to cool, to refrigerate",
    "level": "1"
  },
  {
    "word": "日焼け",
    "reading": "ひやけ",
    "meaning": "sunburn",
    "level": "1"
  },
  {
    "word": "標語",
    "reading": "ひょうご",
    "meaning": "motto, slogan, catchword",
    "level": "1"
  },
  {
    "word": "描写",
    "reading": "びょうしゃ",
    "meaning": "depiction, description, portrayal",
    "level": "1"
  },
  {
    "word": "ひょっと",
    "reading": "ひょっと",
    "meaning": "possibly, accidentally",
    "level": "1"
  },
  {
    "word": "びら",
    "reading": "びら",
    "meaning": "handout, leaflet",
    "level": "1"
  },
  {
    "word": "平たい",
    "reading": "ひらたい",
    "meaning": "flat, even, level",
    "level": "1"
  },
  {
    "word": "びり",
    "reading": "びり",
    "meaning": "last on the list, at the bottom",
    "level": "1"
  },
  {
    "word": "比率",
    "reading": "ひりつ",
    "meaning": "ratio, proportion, percentage",
    "level": "1"
  },
  {
    "word": "〜 (まる) ごと",
    "reading": "〜 (まる) ごと",
    "meaning": "whole ~, all of ~",
    "level": "2"
  },
  {
    "word": "(かさを～) さす",
    "reading": "(かさを～) さす",
    "meaning": "to open; hold (an umbrella)",
    "level": "2"
  },
  {
    "word": "〜(日本) 式",
    "reading": "～(にほん) しき",
    "meaning": "custom,",
    "level": "2"
  },
  {
    "word": "～位",
    "reading": "～い",
    "meaning": "~th place",
    "level": "2"
  },
  {
    "word": "～いち (にほんいち)",
    "reading": "～いち (にほんいち)",
    "meaning": "No. 1 ~ (in)",
    "level": "2"
  },
  {
    "word": "～園",
    "reading": "～えん",
    "meaning": "~ garden (especially man made)",
    "level": "2"
  },
  {
    "word": "～おしまい (おわり)",
    "reading": "～おしまい (おわり)",
    "meaning": "end up ~",
    "level": "2"
  },
  {
    "word": "～日",
    "reading": "～か",
    "meaning": "counter for days",
    "level": "2"
  },
  {
    "word": "～下",
    "reading": "～か",
    "meaning": "under ~",
    "level": "2"
  },
  {
    "word": "～化",
    "reading": "～か",
    "meaning": "action of making something",
    "level": "2"
  },
  {
    "word": "～科",
    "reading": "～か",
    "meaning": "family, group, course",
    "level": "2"
  },
  {
    "word": "～歌",
    "reading": "～か",
    "meaning": "song of ~",
    "level": "2"
  },
  {
    "word": "～画",
    "reading": "～が",
    "meaning": "picture, painting",
    "level": "2"
  },
  {
    "word": "～外",
    "reading": "～がい",
    "meaning": "out of ~",
    "level": "2"
  },
  {
    "word": "～難い",
    "reading": "～がたい",
    "meaning": "hard (difficult) to do ~",
    "level": "2"
  },
  {
    "word": "～がち",
    "reading": "～がち",
    "meaning": "tend to do ~",
    "level": "2"
  },
  {
    "word": "～刊",
    "reading": "～かん",
    "meaning": "~ issued (magazine, newspaper)",
    "level": "2"
  },
  {
    "word": "～間",
    "reading": "～かん",
    "meaning": "between, during",
    "level": "2"
  },
  {
    "word": "～巻",
    "reading": "～かん",
    "meaning": "volume",
    "level": "2"
  },
  {
    "word": "～館",
    "reading": "～かん",
    "meaning": "~ hall, ~ building",
    "level": "2"
  },
  {
    "word": "～感",
    "reading": "～かん",
    "meaning": "feeling, sense, impression",
    "level": "2"
  },
  {
    "word": "～期",
    "reading": "～き",
    "meaning": "~age, ~period",
    "level": "2"
  },
  {
    "word": "～器",
    "reading": "～き",
    "meaning": "device, equipment",
    "level": "2"
  },
  {
    "word": "～機",
    "reading": "～き",
    "meaning": "machine",
    "level": "2"
  },
  {
    "word": "～気味",
    "reading": "～ぎみ",
    "meaning": "slightly ~",
    "level": "2"
  },
  {
    "word": "～教",
    "reading": "～きょう",
    "meaning": "religion",
    "level": "2"
  },
  {
    "word": "～行",
    "reading": "～ぎょう",
    "meaning": "line, row",
    "level": "2"
  },
  {
    "word": "～業",
    "reading": "～ぎょう",
    "meaning": "type of business",
    "level": "2"
  },
  {
    "word": "～きる",
    "reading": "～きる",
    "meaning": "nevertheless, to carry through",
    "level": "2"
  },
  {
    "word": "～切れ",
    "reading": "～きれ",
    "meaning": "out of ~",
    "level": "2"
  },
  {
    "word": "～口",
    "reading": "～くち",
    "meaning": "~ opening; ~ entrance, ~ exit",
    "level": "2"
  },
  {
    "word": "～家",
    "reading": "～け",
    "meaning": "~'s family, the house of ~",
    "level": "2"
  },
  {
    "word": "～形",
    "reading": "～けい",
    "meaning": "shape of ~",
    "level": "2"
  },
  {
    "word": "～系",
    "reading": "～けい",
    "meaning": "~ system, ~ lineage, ~ group",
    "level": "2"
  },
  {
    "word": "～圏",
    "reading": "～けん",
    "meaning": "bloc, sphere, area",
    "level": "2"
  },
  {
    "word": "～校",
    "reading": "～こう",
    "meaning": "counter for school",
    "level": "2"
  },
  {
    "word": "～港",
    "reading": "～こう",
    "meaning": "~ port",
    "level": "2"
  },
  {
    "word": "～号",
    "reading": "～ごう",
    "meaning": "counter for magazine; the name of ship",
    "level": "2"
  },
  {
    "word": "～国",
    "reading": "～こく",
    "meaning": "nation of ~",
    "level": "2"
  },
  {
    "word": "～毎",
    "reading": "～ごと",
    "meaning": "every ~, each ~",
    "level": "2"
  },
  {
    "word": "～山",
    "reading": "～さん",
    "meaning": "the name of mountain",
    "level": "2"
  },
  {
    "word": "～産",
    "reading": "～さん",
    "meaning": "made in ~",
    "level": "2"
  },
  {
    "word": "～史",
    "reading": "～し",
    "meaning": "history of ~",
    "level": "2"
  },
  {
    "word": "～紙",
    "reading": "～し",
    "meaning": "newspaper, type of paper",
    "level": "2"
  },
  {
    "word": "～寺",
    "reading": "～じ",
    "meaning": "the name of temple",
    "level": "2"
  },
  {
    "word": "～時間目",
    "reading": "～じかんめ",
    "meaning": "~th hour, ~th period",
    "level": "2"
  },
  {
    "word": "～室",
    "reading": "～しつ",
    "meaning": "counter for room",
    "level": "2"
  },
  {
    "word": "～日",
    "reading": "～じつ",
    "meaning": "day",
    "level": "2"
  },
  {
    "word": "～車",
    "reading": "～しゃ",
    "meaning": "~ car",
    "level": "2"
  },
  {
    "word": "～者",
    "reading": "～しゃ",
    "meaning": "person",
    "level": "2"
  },
  {
    "word": "～社",
    "reading": "～しゃ",
    "meaning": "counter for company",
    "level": "2"
  },
  {
    "word": "～手",
    "reading": "～しゅ",
    "meaning": "~ player, person who does ~",
    "level": "2"
  },
  {
    "word": "～酒",
    "reading": "～しゅ",
    "meaning": "kind of alcohol",
    "level": "2"
  },
  {
    "word": "～集",
    "reading": "～しゅう",
    "meaning": "collection of ~",
    "level": "2"
  },
  {
    "word": "～所",
    "reading": "～しょ",
    "meaning": "place",
    "level": "2"
  },
  {
    "word": "～所",
    "reading": "～じょ",
    "meaning": "place",
    "level": "2"
  },
  {
    "word": "～女",
    "reading": "～じょ",
    "meaning": "count for sisters",
    "level": "2"
  },
  {
    "word": "～省",
    "reading": "～しょう",
    "meaning": "kind of ministry",
    "level": "2"
  },
  {
    "word": "～商",
    "reading": "～しょう",
    "meaning": "merchant, business",
    "level": "2"
  },
  {
    "word": "～勝",
    "reading": "～しょう",
    "meaning": "count for victory",
    "level": "2"
  },
  {
    "word": "～条",
    "reading": "～じょう",
    "meaning": "counter for article",
    "level": "2"
  },
  {
    "word": "～場",
    "reading": "～じょう",
    "meaning": "kind of field, ground",
    "level": "2"
  },
  {
    "word": "～畳",
    "reading": "～じょう",
    "meaning": "count for tatami, mat",
    "level": "2"
  },
  {
    "word": "～色",
    "reading": "～しょく",
    "meaning": "kind of color",
    "level": "2"
  },
  {
    "word": "～過ぎる",
    "reading": "～すぎる",
    "meaning": "too much ~",
    "level": "2"
  },
  {
    "word": "～済",
    "reading": "～ずみ",
    "meaning": "finished",
    "level": "2"
  },
  {
    "word": "～席",
    "reading": "～せき",
    "meaning": "counter for seats",
    "level": "2"
  },
  {
    "word": "～船",
    "reading": "～せん",
    "meaning": "counter for ships",
    "level": "2"
  },
  {
    "word": "～戦",
    "reading": "～せん",
    "meaning": "counter for games, matches",
    "level": "2"
  },
  {
    "word": "～前",
    "reading": "～ぜん",
    "meaning": "before ~",
    "level": "2"
  },
  {
    "word": "～沿い",
    "reading": "～そい",
    "meaning": "along",
    "level": "2"
  },
  {
    "word": "～艘",
    "reading": "～そう",
    "meaning": "counter for ships",
    "level": "2"
  },
  {
    "word": "～足",
    "reading": "～そく",
    "meaning": "counter for shoes",
    "level": "2"
  },
  {
    "word": "～だらけ",
    "reading": "～だらけ",
    "meaning": "be full of ~, be filled with ~",
    "level": "2"
  },
  {
    "word": "～団",
    "reading": "～だん",
    "meaning": "group, corps, party",
    "level": "2"
  },
  {
    "word": "～着",
    "reading": "～ちゃく",
    "meaning": "counter for clothes; finishing place",
    "level": "2"
  },
  {
    "word": "～庁",
    "reading": "～ちょう",
    "meaning": "office, agency",
    "level": "2"
  },
  {
    "word": "～兆",
    "reading": "～ちょう",
    "meaning": "trillion",
    "level": "2"
  },
  {
    "word": "～長",
    "reading": "～ちょう",
    "meaning": "leader, head",
    "level": "2"
  },
  {
    "word": "～帳",
    "reading": "～ちょう",
    "meaning": "~ book, notebook",
    "level": "2"
  },
  {
    "word": "～丁目",
    "reading": "～ちょうめ",
    "meaning": "~ district (of a town; city, block)",
    "level": "2"
  },
  {
    "word": "～通",
    "reading": "～つう",
    "meaning": "counter for letters",
    "level": "2"
  },
  {
    "word": "～遣い",
    "reading": "～づかい",
    "meaning": "use of ~",
    "level": "2"
  },
  {
    "word": "～付",
    "reading": "～つき",
    "meaning": "with ~",
    "level": "2"
  },
  {
    "word": "～続く",
    "reading": "～つづく",
    "meaning": "follow, continue, go on",
    "level": "2"
  },
  {
    "word": "～辛い",
    "reading": "～づらい",
    "meaning": "hard to do ~",
    "level": "2"
  },
  {
    "word": "～滴",
    "reading": "～てき",
    "meaning": "drop",
    "level": "2"
  },
  {
    "word": "～点",
    "reading": "～てん",
    "meaning": "counter for scores",
    "level": "2"
  },
  {
    "word": "～頭",
    "reading": "～とう",
    "meaning": "counter for animals",
    "level": "2"
  },
  {
    "word": "～等",
    "reading": "～とう",
    "meaning": "level, place",
    "level": "2"
  },
  {
    "word": "～島",
    "reading": "～とう",
    "meaning": "kind of islands",
    "level": "2"
  },
  {
    "word": "～道",
    "reading": "～どう",
    "meaning": "kind of path, road",
    "level": "2"
  },
  {
    "word": "～通り",
    "reading": "～とおり",
    "meaning": "in accordance with ~; following ~; ~ street, ~ avenue",
    "level": "2"
  },
  {
    "word": "～ところ",
    "reading": "～ところ",
    "meaning": "about to do ~",
    "level": "2"
  },
  {
    "word": "～内",
    "reading": "～ない",
    "meaning": "inside ~",
    "level": "2"
  },
  {
    "word": "～年生",
    "reading": "～ねんせい",
    "meaning": "counter for school year",
    "level": "2"
  },
  {
    "word": "～泊",
    "reading": "～はく",
    "meaning": "counter for staying (e.g., 2 nights)",
    "level": "2"
  },
  {
    "word": "～発",
    "reading": "～はつ",
    "meaning": "counter for bullets",
    "level": "2"
  },
  {
    "word": "～番目",
    "reading": "～ばんめ",
    "meaning": "~th",
    "level": "2"
  },
  {
    "word": "～費",
    "reading": "～ひ",
    "meaning": "cost of ~",
    "level": "2"
  },
  {
    "word": "～病",
    "reading": "～びょう",
    "meaning": "kind of disease",
    "level": "2"
  },
  {
    "word": "～部",
    "reading": "～ぶ",
    "meaning": "~ part",
    "level": "2"
  },
  {
    "word": "～風",
    "reading": "～ふう",
    "meaning": "~ style",
    "level": "2"
  },
  {
    "word": "～振り",
    "reading": "～ぶり",
    "meaning": "after an interval of ~",
    "level": "2"
  },
  {
    "word": "～遍",
    "reading": "～へん",
    "meaning": "time",
    "level": "2"
  },
  {
    "word": "～弁",
    "reading": "～べん",
    "meaning": "speech, dialect",
    "level": "2"
  },
  {
    "word": "～歩",
    "reading": "～ほ",
    "meaning": "step, pace",
    "level": "2"
  },
  {
    "word": "～ぽい",
    "reading": "～ぽい",
    "meaning": "~ish",
    "level": "2"
  },
  {
    "word": "～ほう (ひかく)",
    "reading": "～ほう (ひかく)",
    "meaning": "(in comparison)",
    "level": "2"
  },
  {
    "word": "～みたい",
    "reading": "～みたい",
    "meaning": "looks like ~",
    "level": "2"
  },
  {
    "word": "～向け",
    "reading": "～むけ",
    "meaning": "for ~",
    "level": "2"
  },
  {
    "word": "～名",
    "reading": "～めい",
    "meaning": "counter for people",
    "level": "2"
  },
  {
    "word": "～もち",
    "reading": "～もち",
    "meaning": "person who has ~",
    "level": "2"
  },
  {
    "word": "～問",
    "reading": "～もん",
    "meaning": "counter for questions",
    "level": "2"
  },
  {
    "word": "～夜",
    "reading": "～や",
    "meaning": "counter for nights",
    "level": "2"
  },
  {
    "word": "～等",
    "reading": "～ら",
    "meaning": "plural persons",
    "level": "2"
  },
  {
    "word": "～流",
    "reading": "～りゅう",
    "meaning": "fashion, manner, way",
    "level": "2"
  },
  {
    "word": "～料",
    "reading": "～りょう",
    "meaning": "fare, charge",
    "level": "2"
  },
  {
    "word": "～領",
    "reading": "～りょう",
    "meaning": "territory",
    "level": "2"
  },
  {
    "word": "～力",
    "reading": "～りょく",
    "meaning": "power of ~",
    "level": "2"
  },
  {
    "word": "～論",
    "reading": "～ろん",
    "meaning": "theory",
    "level": "2"
  },
  {
    "word": "～羽",
    "reading": "～わ",
    "meaning": "counter for rabbits; birds",
    "level": "2"
  },
  {
    "word": "相変わらず",
    "reading": "あいかわらず",
    "meaning": "as usual, as always, as before, as ever, still",
    "level": "2"
  },
  {
    "word": "アイデア; アイディア",
    "reading": "アイデア; アイディア",
    "meaning": "idea",
    "level": "2"
  },
  {
    "word": "あいまい",
    "reading": "あいまい",
    "meaning": "vague, ambiguous",
    "level": "2"
  },
  {
    "word": "扇ぐ",
    "reading": "あおぐ",
    "meaning": "to fan, to flap",
    "level": "2"
  },
  {
    "word": "青白い",
    "reading": "あおじろい",
    "meaning": "pale",
    "level": "2"
  },
  {
    "word": "呆れる",
    "reading": "あきれる",
    "meaning": "to be shocked, to be appalled",
    "level": "2"
  },
  {
    "word": "アクセント",
    "reading": "アクセント",
    "meaning": "accent",
    "level": "2"
  },
  {
    "word": "あくび",
    "reading": "あくび",
    "meaning": "yawn",
    "level": "2"
  },
  {
    "word": "飽くまで",
    "reading": "あくまで",
    "meaning": "to the end, to the last, stubbornly",
    "level": "2"
  },
  {
    "word": "明くる～",
    "reading": "あくる～",
    "meaning": "next, following",
    "level": "2"
  },
  {
    "word": "明け方",
    "reading": "あけがた",
    "meaning": "dawn",
    "level": "2"
  },
  {
    "word": "憧れる",
    "reading": "あこがれる",
    "meaning": "to long for, to yearn after",
    "level": "2"
  },
  {
    "word": "朝寝坊",
    "reading": "あさねぼう",
    "meaning": "oversleeping, late riser",
    "level": "2"
  },
  {
    "word": "足跡",
    "reading": "あしあと",
    "meaning": "footprint",
    "level": "2"
  },
  {
    "word": "足元",
    "reading": "あしもと",
    "meaning": "at one's feet",
    "level": "2"
  },
  {
    "word": "味わう",
    "reading": "あじわう",
    "meaning": "to taste, to savor",
    "level": "2"
  },
  {
    "word": "預かる",
    "reading": "あずかる",
    "meaning": "to keep in custody, to receive on deposit, to take charge of",
    "level": "2"
  },
  {
    "word": "温まる",
    "reading": "あたたまる",
    "meaning": "to warm oneself",
    "level": "2"
  },
  {
    "word": "当たり前",
    "reading": "あたりまえ",
    "meaning": "natural, reasonable, obvious, usual, common, ordinary, commonplace, the norm",
    "level": "2"
  },
  {
    "word": "あちらこちら",
    "reading": "あちらこちら",
    "meaning": "here and there",
    "level": "2"
  },
  {
    "word": "厚かましい",
    "reading": "あつかましい",
    "meaning": "impudent, shameless,",
    "level": "2"
  },
  {
    "word": "圧縮",
    "reading": "あっしゅく",
    "meaning": "compression, condensation, pressure",
    "level": "2"
  },
  {
    "word": "宛名",
    "reading": "あてな",
    "meaning": "address, direction",
    "level": "2"
  },
  {
    "word": "当てはまる",
    "reading": "あてはまる",
    "meaning": "to be applicable, to come under (a category)",
    "level": "2"
  },
  {
    "word": "当てはめる",
    "reading": "あてはめる",
    "meaning": "to apply, to adapt",
    "level": "2"
  },
  {
    "word": "暴れる",
    "reading": "あばれる",
    "meaning": "to act violently, to rage",
    "level": "2"
  },
  {
    "word": "脂",
    "reading": "あぶら",
    "meaning": "fat, tallow, lard",
    "level": "2"
  },
  {
    "word": "あぶる",
    "reading": "あぶる",
    "meaning": "to scorch, to roast",
    "level": "2"
  },
  {
    "word": "あふれる",
    "reading": "あふれる",
    "meaning": "to flood, to overflow",
    "level": "2"
  },
  {
    "word": "雨戸",
    "reading": "あまど",
    "meaning": "sliding storm door",
    "level": "2"
  },
  {
    "word": "甘やかす",
    "reading": "あまやかす",
    "meaning": "to pamper, to spoil",
    "level": "2"
  },
  {
    "word": "余る",
    "reading": "あまる",
    "meaning": "to be left over, to be in excess",
    "level": "2"
  },
  {
    "word": "編み物",
    "reading": "あみもの",
    "meaning": "knitting",
    "level": "2"
  },
  {
    "word": "あみもの",
    "reading": "あみもの",
    "meaning": "knitting, web",
    "level": "2"
  },
  {
    "word": "編む",
    "reading": "あむ",
    "meaning": "to knit",
    "level": "2"
  },
  {
    "word": "危うい",
    "reading": "あやうい",
    "meaning": "dangerous, critical",
    "level": "2"
  },
  {
    "word": "怪しい",
    "reading": "あやしい",
    "meaning": "suspicious, dubious, doubtful",
    "level": "2"
  },
  {
    "word": "荒い",
    "reading": "あらい",
    "meaning": "rough, rude, wild",
    "level": "2"
  },
  {
    "word": "粗い",
    "reading": "あらい",
    "meaning": "coarse, rough",
    "level": "2"
  },
  {
    "word": "粗筋",
    "reading": "あらすじ",
    "meaning": "outline, synopsis",
    "level": "2"
  },
  {
    "word": "争う",
    "reading": "あらそう",
    "meaning": "to compete, to contest, to contend to quarrel, to argue, to dispute, to be at variance, to oppose",
    "level": "2"
  },
  {
    "word": "改めて",
    "reading": "あらためて",
    "meaning": "another time, again",
    "level": "2"
  },
  {
    "word": "改める",
    "reading": "あらためる",
    "meaning": "to change, to reform, to revise",
    "level": "2"
  },
  {
    "word": "あらわす",
    "reading": "あらわす",
    "meaning": "to write, to publish",
    "level": "2"
  },
  {
    "word": "有難い",
    "reading": "ありがたい",
    "meaning": "grateful, thankful, appreciated",
    "level": "2"
  },
  {
    "word": "あれこれ",
    "reading": "あれこれ",
    "meaning": "one thing or another, this and that",
    "level": "2"
  },
  {
    "word": "荒れる",
    "reading": "あれる",
    "meaning": "to be stormy, to be rough, to be ruined",
    "level": "2"
  },
  {
    "word": "慌ただしい",
    "reading": "あわただしい",
    "meaning": "busy, hurried",
    "level": "2"
  },
  {
    "word": "慌てる",
    "reading": "あわてる",
    "meaning": "to become confused (disconcerted, disorganized), to be flustered, to panic, to hurry, to rush, to hasten",
    "level": "2"
  },
  {
    "word": "安易",
    "reading": "あんい",
    "meaning": "easy-going",
    "level": "2"
  },
  {
    "word": "案外",
    "reading": "あんがい",
    "meaning": "unexpectedly, surprisingly",
    "level": "2"
  },
  {
    "word": "アンテナ",
    "reading": "アンテナ",
    "meaning": "antenna",
    "level": "2"
  },
  {
    "word": "言い出す",
    "reading": "いいだす",
    "meaning": "to start talking, to suggest",
    "level": "2"
  },
  {
    "word": "言い付ける",
    "reading": "いいつける",
    "meaning": "to tell, to order",
    "level": "2"
  },
  {
    "word": "意義",
    "reading": "いぎ",
    "meaning": "meaning, significance",
    "level": "2"
  },
  {
    "word": "生き生き",
    "reading": "いきいき",
    "meaning": "vividly, lively",
    "level": "2"
  },
  {
    "word": "いきなり",
    "reading": "いきなり",
    "meaning": "all of a sudden",
    "level": "2"
  },
  {
    "word": "幾～",
    "reading": "いく～",
    "meaning": "several ~",
    "level": "2"
  },
  {
    "word": "育児",
    "reading": "いくじ",
    "meaning": "childcare, nursing",
    "level": "2"
  },
  {
    "word": "幾分",
    "reading": "いくぶん",
    "meaning": "somewhat",
    "level": "2"
  },
  {
    "word": "生け花",
    "reading": "いけばな",
    "meaning": "flower arrangement",
    "level": "2"
  },
  {
    "word": "以後",
    "reading": "いご",
    "meaning": "after this; from now on; hereafter",
    "level": "2"
  },
  {
    "word": "イコール",
    "reading": "イコール",
    "meaning": "equal",
    "level": "2"
  },
  {
    "word": "以降",
    "reading": "いこう",
    "meaning": "on and after, hereafter",
    "level": "2"
  },
  {
    "word": "勇ましい",
    "reading": "いさましい",
    "meaning": "brave, valiant",
    "level": "2"
  },
  {
    "word": "衣食住",
    "reading": "いしょくじゅう",
    "meaning": "food, clothing and shelter",
    "level": "2"
  },
  {
    "word": "いちいち",
    "reading": "いちいち",
    "meaning": "one by one, separately",
    "level": "2"
  },
  {
    "word": "一応",
    "reading": "いちおう",
    "meaning": "tentatively, for the time being",
    "level": "2"
  },
  {
    "word": "一段と",
    "reading": "いちだんと",
    "meaning": "by far, greater",
    "level": "2"
  },
  {
    "word": "一流",
    "reading": "いちりゅう",
    "meaning": "first class, leading",
    "level": "2"
  },
  {
    "word": "一昨日",
    "reading": "いっさくじつ",
    "meaning": "day before yesterday",
    "level": "2"
  },
  {
    "word": "一昨年",
    "reading": "いっさくねん",
    "meaning": "year before last",
    "level": "2"
  },
  {
    "word": "一斉",
    "reading": "いっせい",
    "meaning": "simultaneous, all at once",
    "level": "2"
  },
  {
    "word": "一旦",
    "reading": "いったん",
    "meaning": "once, for a moment",
    "level": "2"
  },
  {
    "word": "一定",
    "reading": "いってい",
    "meaning": "fixed, settled, regular",
    "level": "2"
  },
  {
    "word": "行っていらっしゃい",
    "reading": "いっていらっしゃい",
    "meaning": "have a nice day, see you",
    "level": "2"
  },
  {
    "word": "いってきます",
    "reading": "いってきます",
    "meaning": "(Lit.) I'll go and come back, 'I'm going, see you later'",
    "level": "2"
  },
  {
    "word": "いってまいります",
    "reading": "いってまいります",
    "meaning": "(Lit.) I'll go and come back, 'I'm going, see you later'",
    "level": "2"
  },
  {
    "word": "行ってらっしゃい",
    "reading": "いってらっしゃい",
    "meaning": "have a nice day, see you",
    "level": "2"
  },
  {
    "word": "移転",
    "reading": "いてん",
    "meaning": "moving, transfer",
    "level": "2"
  },
  {
    "word": "井戸",
    "reading": "いど",
    "meaning": "water well",
    "level": "2"
  },
  {
    "word": "緯度",
    "reading": "いど",
    "meaning": "latitude (navigation)",
    "level": "2"
  },
  {
    "word": "威張る",
    "reading": "いばる",
    "meaning": "to be proud, to swagger",
    "level": "2"
  },
  {
    "word": "嫌がる",
    "reading": "いやがる",
    "meaning": "reluctant, to dislike",
    "level": "2"
  },
  {
    "word": "いよいよ",
    "reading": "いよいよ",
    "meaning": "more and more, increasingly, at last",
    "level": "2"
  },
  {
    "word": "煎る",
    "reading": "いる",
    "meaning": "to roast",
    "level": "2"
  },
  {
    "word": "炒る",
    "reading": "いる",
    "meaning": "to parch, to roast",
    "level": "2"
  },
  {
    "word": "入れ物",
    "reading": "いれもの",
    "meaning": "container, case",
    "level": "2"
  },
  {
    "word": "インキ",
    "reading": "インキ",
    "meaning": "ink",
    "level": "2"
  },
  {
    "word": "引力",
    "reading": "いんりょく",
    "meaning": "gravity",
    "level": "2"
  },
  {
    "word": "ウーマン",
    "reading": "ウーマン",
    "meaning": "woman",
    "level": "2"
  },
  {
    "word": "ウール",
    "reading": "ウール",
    "meaning": "wool",
    "level": "2"
  },
  {
    "word": "ウエートレス",
    "reading": "ウエートレス",
    "meaning": "waitress",
    "level": "2"
  },
  {
    "word": "植木",
    "reading": "うえき",
    "meaning": "garden shrubs, trees, potted plant",
    "level": "2"
  },
  {
    "word": "飢える",
    "reading": "うえる",
    "meaning": "to starve",
    "level": "2"
  },
  {
    "word": "浮ぶ",
    "reading": "うかぶ",
    "meaning": "to float, to rise to surface, to come to mind",
    "level": "2"
  },
  {
    "word": "浮かべる",
    "reading": "うかべる",
    "meaning": "to float; to express",
    "level": "2"
  },
  {
    "word": "浮く",
    "reading": "うく",
    "meaning": "to float",
    "level": "2"
  },
  {
    "word": "承る",
    "reading": "うけたまわる",
    "meaning": "(humble) to hear, to be told, to know",
    "level": "2"
  },
  {
    "word": "受取",
    "reading": "うけとり",
    "meaning": "receipt",
    "level": "2"
  },
  {
    "word": "受け持つ",
    "reading": "うけもつ",
    "meaning": "to take (be in) charge of",
    "level": "2"
  },
  {
    "word": "薄暗い",
    "reading": "うすぐらい",
    "meaning": "dim, gloomy",
    "level": "2"
  },
  {
    "word": "薄める",
    "reading": "うすめる",
    "meaning": "to dilute, to water down",
    "level": "2"
  },
  {
    "word": "打合せ",
    "reading": "うちあわせ",
    "meaning": "business meeting, previous arrangement",
    "level": "2"
  },
  {
    "word": "打ち消す",
    "reading": "うちけす",
    "meaning": "to deny, to negate",
    "level": "2"
  },
  {
    "word": "写る",
    "reading": "うつる",
    "meaning": "to be photographed, to be projected",
    "level": "2"
  },
  {
    "word": "うどん",
    "reading": "うどん",
    "meaning": "udon noodles (Japanese traditional noodles)",
    "level": "2"
  },
  {
    "word": "うなずく",
    "reading": "うなずく",
    "meaning": "to nod",
    "level": "2"
  },
  {
    "word": "有無",
    "reading": "うむ",
    "meaning": "existence or nonexistence, presence of absence consent or refusal, yes or no",
    "level": "2"
  },
  {
    "word": "埋める",
    "reading": "うめる",
    "meaning": "to bury, to fill up, to fill (a seat, a vacant position)",
    "level": "2"
  },
  {
    "word": "敬う",
    "reading": "うやまう",
    "meaning": "to show respect, to honor",
    "level": "2"
  },
  {
    "word": "裏返す",
    "reading": "うらがえす",
    "meaning": "to turn inside out, to turn (something) over",
    "level": "2"
  },
  {
    "word": "裏口",
    "reading": "うらぐち",
    "meaning": "backdoor, rear entrance",
    "level": "2"
  },
  {
    "word": "占う",
    "reading": "うらなう",
    "meaning": "to predict, to divine",
    "level": "2"
  },
  {
    "word": "恨み",
    "reading": "うらみ",
    "meaning": "resentment",
    "level": "2"
  },
  {
    "word": "恨む",
    "reading": "うらむ",
    "meaning": "to curse, to feel bitter",
    "level": "2"
  },
  {
    "word": "羨む",
    "reading": "うらやむ",
    "meaning": "to envy",
    "level": "2"
  },
  {
    "word": "売上",
    "reading": "うりあげ",
    "meaning": "amount sold, proceeds",
    "level": "2"
  },
  {
    "word": "売り上げ",
    "reading": "うりあげ",
    "meaning": "amount sold, sales, proceeds, takings, turnover",
    "level": "2"
  },
  {
    "word": "売り切れ",
    "reading": "うりきれ",
    "meaning": "sold-out",
    "level": "2"
  },
  {
    "word": "売り切れる",
    "reading": "うりきれる",
    "meaning": "to be sold out",
    "level": "2"
  },
  {
    "word": "売行き",
    "reading": "うれゆき",
    "meaning": "sales",
    "level": "2"
  },
  {
    "word": "売れ行き",
    "reading": "うれゆき",
    "meaning": "sales, demand",
    "level": "2"
  },
  {
    "word": "うろうろ",
    "reading": "うろうろ",
    "meaning": "loitering, aimless wandering",
    "level": "2"
  },
  {
    "word": "上～",
    "reading": "うわ～",
    "meaning": "upper ~",
    "level": "2"
  },
  {
    "word": "運河",
    "reading": "うんが",
    "meaning": "canal, waterway",
    "level": "2"
  },
  {
    "word": "うんと",
    "reading": "うんと",
    "meaning": "a great deal, very much",
    "level": "2"
  },
  {
    "word": "英文",
    "reading": "えいぶん",
    "meaning": "sentence in English",
    "level": "2"
  },
  {
    "word": "英和",
    "reading": "えいわ",
    "meaning": "English-Japanese (e.g., dictionary)",
    "level": "2"
  },
  {
    "word": "ええと",
    "reading": "ええと",
    "meaning": "let me see, well, er...",
    "level": "2"
  },
  {
    "word": "液体",
    "reading": "えきたい",
    "meaning": "liquid, fluid",
    "level": "2"
  },
  {
    "word": "エチケット",
    "reading": "エチケット",
    "meaning": "etiquette",
    "level": "2"
  },
  {
    "word": "絵の具",
    "reading": "えのぐ",
    "meaning": "colors, paints",
    "level": "2"
  },
  {
    "word": "エプロン",
    "reading": "エプロン",
    "meaning": "apron",
    "level": "2"
  },
  {
    "word": "偉い",
    "reading": "えらい",
    "meaning": "great, celebrated, remarkable,",
    "level": "2"
  },
  {
    "word": "宴会",
    "reading": "えんかい",
    "meaning": "party, banquet",
    "level": "2"
  },
  {
    "word": "園芸",
    "reading": "えんげい",
    "meaning": "horticulture, gardening",
    "level": "2"
  },
  {
    "word": "演劇",
    "reading": "えんげき",
    "meaning": "play (theatrical)",
    "level": "2"
  },
  {
    "word": "円周",
    "reading": "えんしゅう",
    "meaning": "circumference",
    "level": "2"
  },
  {
    "word": "遠足",
    "reading": "えんそく",
    "meaning": "trip, hike, picnic",
    "level": "2"
  },
  {
    "word": "延長",
    "reading": "えんちょう",
    "meaning": "extension, prolongation",
    "level": "2"
  },
  {
    "word": "煙突",
    "reading": "えんとつ",
    "meaning": "chimney",
    "level": "2"
  },
  {
    "word": "オーケストラ",
    "reading": "オーケストラ",
    "meaning": "orchestra",
    "level": "2"
  },
  {
    "word": "オートメーション",
    "reading": "オートメーション",
    "meaning": "automation",
    "level": "2"
  },
  {
    "word": "追いかける",
    "reading": "おいかける",
    "meaning": "to chase or run after someone",
    "level": "2"
  },
  {
    "word": "追い越す",
    "reading": "おいこす",
    "meaning": "to pass (e.g., car), to outdistance, to outstrip",
    "level": "2"
  },
  {
    "word": "オイル",
    "reading": "オイル",
    "meaning": "oil",
    "level": "2"
  },
  {
    "word": "応援",
    "reading": "おうえん",
    "meaning": "aid, assistance, help, support, reinforcement cheering, rooting (for), support",
    "level": "2"
  },
  {
    "word": "王女",
    "reading": "おうじょ",
    "meaning": "princess",
    "level": "2"
  },
  {
    "word": "応ずる",
    "reading": "おうずる",
    "meaning": "to respond, to comply with",
    "level": "2"
  },
  {
    "word": "応接",
    "reading": "おうせつ",
    "meaning": "reception",
    "level": "2"
  },
  {
    "word": "応対",
    "reading": "おうたい",
    "meaning": "receiving, dealing with",
    "level": "2"
  },
  {
    "word": "往復",
    "reading": "おうふく",
    "meaning": "(col) round trip, coming and going, return ticket",
    "level": "2"
  },
  {
    "word": "欧米",
    "reading": "おうべい",
    "meaning": "Europe and America, the West",
    "level": "2"
  },
  {
    "word": "応用",
    "reading": "おうよう",
    "meaning": "application, put to practical use",
    "level": "2"
  },
  {
    "word": "おおざっぱ",
    "reading": "おおざっぱ",
    "meaning": "rough (not precise), broad, sketchy",
    "level": "2"
  },
  {
    "word": "大通り",
    "reading": "おおどおり",
    "meaning": "main street",
    "level": "2"
  },
  {
    "word": "大凡",
    "reading": "おおよそ",
    "meaning": "about, approximately",
    "level": "2"
  },
  {
    "word": "お帰り",
    "reading": "おかえり",
    "meaning": "return, welcome",
    "level": "2"
  },
  {
    "word": "おかけください",
    "reading": "おかけください",
    "meaning": "please sit down",
    "level": "2"
  },
  {
    "word": "おかげさまで",
    "reading": "おかげさまで",
    "meaning": "Thanks to god, thanks to you",
    "level": "2"
  },
  {
    "word": "おかず",
    "reading": "おかず",
    "meaning": "side dish, accompaniment for rice dishes",
    "level": "2"
  },
  {
    "word": "おかまいなく",
    "reading": "おかまいなく",
    "meaning": "please don't fuss over me",
    "level": "2"
  },
  {
    "word": "拝む",
    "reading": "おがむ",
    "meaning": "to worship, to pray",
    "level": "2"
  },
  {
    "word": "お代わり",
    "reading": "おかわり",
    "meaning": "second helping, another cup",
    "level": "2"
  },
  {
    "word": "補う",
    "reading": "おぎなう",
    "meaning": "to compensate for",
    "level": "2"
  },
  {
    "word": "お気の毒に",
    "reading": "おきのどくに",
    "meaning": "I'm sorry to hear that…",
    "level": "2"
  },
  {
    "word": "屋外",
    "reading": "おくがい",
    "meaning": "outdoors",
    "level": "2"
  },
  {
    "word": "送り仮名",
    "reading": "おくりがな",
    "meaning": "part of word written in kana",
    "level": "2"
  },
  {
    "word": "お元気で",
    "reading": "おげんきで",
    "meaning": "Take care'",
    "level": "2"
  },
  {
    "word": "怠る",
    "reading": "おこたる",
    "meaning": "to neglect, to fail",
    "level": "2"
  },
  {
    "word": "押さえる",
    "reading": "おさえる",
    "meaning": "to pin down, to hold down, to press down, to hold in place, to hold steady to cover (esp. a part of one's body with one's hand), to clutch (a body part in pain), to press (a body part) to get a hold of, to obtain, to seize, to catch, to arrest",
    "level": "2"
  },
  {
    "word": "お先に",
    "reading": "おさきに",
    "meaning": "before, after you",
    "level": "2"
  },
  {
    "word": "伯父",
    "reading": "おじ",
    "meaning": "(humble) uncle (older than one's parent)",
    "level": "2"
  },
  {
    "word": "叔父",
    "reading": "おじ",
    "meaning": "uncle (younger than one's parent)",
    "level": "2"
  },
  {
    "word": "惜しい",
    "reading": "おしい",
    "meaning": "regrettable, disappointing",
    "level": "2"
  },
  {
    "word": "伯父さん",
    "reading": "おじさん",
    "meaning": "(hon.) middle-aged gentleman, uncle",
    "level": "2"
  },
  {
    "word": "小父さん",
    "reading": "おじさん",
    "meaning": "(hon.) middle-aged gentleman, uncle",
    "level": "2"
  },
  {
    "word": "叔父さん",
    "reading": "おじさん",
    "meaning": "(hon.) middle-aged gentleman, uncle",
    "level": "2"
  },
  {
    "word": "お邪魔します",
    "reading": "おじゃまします",
    "meaning": "Excuse me for disturbing you",
    "level": "2"
  },
  {
    "word": "お世話になりました",
    "reading": "おせわになりました",
    "meaning": "I've been in your care",
    "level": "2"
  },
  {
    "word": "お大事に",
    "reading": "おだいじに",
    "meaning": "Take care of yourself, Take care!, Get well soon",
    "level": "2"
  },
  {
    "word": "落着く",
    "reading": "おちつく",
    "meaning": "to calm down, to settle down",
    "level": "2"
  },
  {
    "word": "お出掛け",
    "reading": "おでかけ",
    "meaning": "outing",
    "level": "2"
  },
  {
    "word": "お手伝いさん",
    "reading": "おてつだいさん",
    "meaning": "maid",
    "level": "2"
  },
  {
    "word": "脅かす",
    "reading": "おどかす",
    "meaning": "to threaten, to coerce",
    "level": "2"
  },
  {
    "word": "落し物",
    "reading": "おとしもの",
    "meaning": "lost property",
    "level": "2"
  },
  {
    "word": "驚かす",
    "reading": "おどろかす",
    "meaning": "to surprise, to frighten",
    "level": "2"
  },
  {
    "word": "お願いします",
    "reading": "おねがいします",
    "meaning": "Please (lit., I request)",
    "level": "2"
  },
  {
    "word": "各々",
    "reading": "おのおの",
    "meaning": "each, every, either",
    "level": "2"
  },
  {
    "word": "伯母",
    "reading": "おば",
    "meaning": "(humble) aunt (older than one's parent)",
    "level": "2"
  },
  {
    "word": "叔母",
    "reading": "おば",
    "meaning": "aunt (younger than one's parent)",
    "level": "2"
  },
  {
    "word": "小母さん",
    "reading": "おばさん",
    "meaning": "lady, woman, ma'am",
    "level": "2"
  },
  {
    "word": "おはよう",
    "reading": "おはよう",
    "meaning": "(abbr.) Good morning",
    "level": "2"
  },
  {
    "word": "お参り",
    "reading": "おまいり",
    "meaning": "worship, shrine visit",
    "level": "2"
  },
  {
    "word": "お待たせしました",
    "reading": "おまたせしました",
    "meaning": "Sorry to have kept you waiting",
    "level": "2"
  },
  {
    "word": "お待ちください",
    "reading": "おまちください",
    "meaning": "Please wait a moment",
    "level": "2"
  },
  {
    "word": "おまちどおさま",
    "reading": "おまちどおさま",
    "meaning": "Sorry to have kept you waiting",
    "level": "2"
  },
  {
    "word": "おめでたい",
    "reading": "おめでたい",
    "meaning": "happy event, matter for congratulation",
    "level": "2"
  },
  {
    "word": "思い掛けない",
    "reading": "おもいがけない",
    "meaning": "unexpected, casual",
    "level": "2"
  },
  {
    "word": "思い切り",
    "reading": "おもいきり",
    "meaning": "with all one's strength (heart), resignation, resolution",
    "level": "2"
  },
  {
    "word": "思い込む",
    "reading": "おもいこむ",
    "meaning": "to be under impression that, to be convinced that",
    "level": "2"
  },
  {
    "word": "思いっ切り",
    "reading": "おもいっきり",
    "meaning": "very, much, fully",
    "level": "2"
  },
  {
    "word": "思いっきり",
    "reading": "おもいっきり",
    "meaning": "to the best of one's ability",
    "level": "2"
  },
  {
    "word": "重たい",
    "reading": "おもたい",
    "meaning": "heavy, massive, serious",
    "level": "2"
  },
  {
    "word": "お休み",
    "reading": "おやすみ",
    "meaning": "holiday, absence; (exp.) Good night",
    "level": "2"
  },
  {
    "word": "おやつ",
    "reading": "おやつ",
    "meaning": "between meal snack, afternoon refreshment",
    "level": "2"
  },
  {
    "word": "親指",
    "reading": "おやゆび",
    "meaning": "thumb",
    "level": "2"
  },
  {
    "word": "オルガン",
    "reading": "オルガン",
    "meaning": "organ",
    "level": "2"
  },
  {
    "word": "御～",
    "reading": "おん～",
    "meaning": "honorific ~",
    "level": "2"
  },
  {
    "word": "恩恵",
    "reading": "おんけい",
    "meaning": "blessing, benefit",
    "level": "2"
  },
  {
    "word": "温室",
    "reading": "おんしつ",
    "meaning": "greenhouse",
    "level": "2"
  },
  {
    "word": "温泉",
    "reading": "おんせん",
    "meaning": "spa, hot spring",
    "level": "2"
  },
  {
    "word": "温帯",
    "reading": "おんたい",
    "meaning": "temperate zone",
    "level": "2"
  },
  {
    "word": "御中",
    "reading": "おんちゅう",
    "meaning": "Messrs.",
    "level": "2"
  },
  {
    "word": "女の人",
    "reading": "おんなのひと",
    "meaning": "woman",
    "level": "2"
  },
  {
    "word": "蚊",
    "reading": "か",
    "meaning": "mosquito",
    "level": "2"
  },
  {
    "word": "カーブ",
    "reading": "カーブ",
    "meaning": "curve; curve ball (baseball)",
    "level": "2"
  },
  {
    "word": "貝",
    "reading": "かい",
    "meaning": "shell, shellfish",
    "level": "2"
  },
  {
    "word": "外～",
    "reading": "がい～",
    "meaning": "foreign ~, outside ~",
    "level": "2"
  },
  {
    "word": "開会",
    "reading": "かいかい",
    "meaning": "opening of a meeting",
    "level": "2"
  },
  {
    "word": "会館",
    "reading": "かいかん",
    "meaning": "meeting hall, assembly hall",
    "level": "2"
  },
  {
    "word": "改札",
    "reading": "かいさつ",
    "meaning": "examination of tickets",
    "level": "2"
  },
  {
    "word": "解散",
    "reading": "かいさん",
    "meaning": "breakup, dissolution",
    "level": "2"
  },
  {
    "word": "海水浴",
    "reading": "かいすいよく",
    "meaning": "sea bathing, seawater bath",
    "level": "2"
  },
  {
    "word": "回数",
    "reading": "かいすう",
    "meaning": "number of times, frequency",
    "level": "2"
  },
  {
    "word": "回数券",
    "reading": "かいすうけん",
    "meaning": "book of tickets",
    "level": "2"
  },
  {
    "word": "改正",
    "reading": "かいせい",
    "meaning": "revision, amendment, alteration",
    "level": "2"
  },
  {
    "word": "快晴",
    "reading": "かいせい",
    "meaning": "good weather",
    "level": "2"
  },
  {
    "word": "解説",
    "reading": "かいせつ",
    "meaning": "explanation, commentary",
    "level": "2"
  },
  {
    "word": "改造",
    "reading": "かいぞう",
    "meaning": "remodeling",
    "level": "2"
  },
  {
    "word": "開通",
    "reading": "かいつう",
    "meaning": "opening, open",
    "level": "2"
  },
  {
    "word": "回転",
    "reading": "かいてん",
    "meaning": "rotation, turning",
    "level": "2"
  },
  {
    "word": "解答",
    "reading": "かいとう",
    "meaning": "answer, solution",
    "level": "2"
  },
  {
    "word": "回答",
    "reading": "かいとう",
    "meaning": "reply, answer",
    "level": "2"
  },
  {
    "word": "外部",
    "reading": "がいぶ",
    "meaning": "the outside, external",
    "level": "2"
  },
  {
    "word": "解放",
    "reading": "かいほう",
    "meaning": "release, liberation, emancipation",
    "level": "2"
  },
  {
    "word": "開放",
    "reading": "かいほう",
    "meaning": "open, throw open, liberalization",
    "level": "2"
  },
  {
    "word": "海洋",
    "reading": "かいよう",
    "meaning": "ocean",
    "level": "2"
  },
  {
    "word": "概論",
    "reading": "がいろん",
    "meaning": "introduction, general remark",
    "level": "2"
  },
  {
    "word": "却って",
    "reading": "かえって",
    "meaning": "on the contrary, rather",
    "level": "2"
  },
  {
    "word": "家屋",
    "reading": "かおく",
    "meaning": "house, building",
    "level": "2"
  },
  {
    "word": "係わる",
    "reading": "かかわる",
    "meaning": "to concern oneself in, to be involved in",
    "level": "2"
  },
  {
    "word": "書留",
    "reading": "かきとめ",
    "meaning": "registered mail",
    "level": "2"
  },
  {
    "word": "書取",
    "reading": "かきとり",
    "meaning": "dictation",
    "level": "2"
  },
  {
    "word": "垣根",
    "reading": "かきね",
    "meaning": "hedge",
    "level": "2"
  },
  {
    "word": "限り",
    "reading": "かぎり",
    "meaning": "limit(s), as far as possible",
    "level": "2"
  },
  {
    "word": "各～",
    "reading": "かく～",
    "meaning": "every ~, each ~",
    "level": "2"
  },
  {
    "word": "架空",
    "reading": "かくう",
    "meaning": "imaginary, fiction, fanciful",
    "level": "2"
  },
  {
    "word": "各自",
    "reading": "かくじ",
    "meaning": "individual, each",
    "level": "2"
  },
  {
    "word": "拡充",
    "reading": "かくじゅう",
    "meaning": "expansion",
    "level": "2"
  },
  {
    "word": "学術",
    "reading": "がくじゅつ",
    "meaning": "science, learning, scholarship",
    "level": "2"
  },
  {
    "word": "各地",
    "reading": "かくち",
    "meaning": "various parts of the country",
    "level": "2"
  },
  {
    "word": "拡張",
    "reading": "かくちょう",
    "meaning": "expansion, extension",
    "level": "2"
  },
  {
    "word": "角度",
    "reading": "かくど",
    "meaning": "angle",
    "level": "2"
  },
  {
    "word": "学年",
    "reading": "がくねん",
    "meaning": "year in school, grade in school",
    "level": "2"
  },
  {
    "word": "学部",
    "reading": "がくぶ",
    "meaning": "department of a university undergraduate (course, program, etc.)",
    "level": "2"
  },
  {
    "word": "格別",
    "reading": "かくべつ",
    "meaning": "exceptional",
    "level": "2"
  },
  {
    "word": "確率",
    "reading": "かくりつ",
    "meaning": "probability",
    "level": "2"
  },
  {
    "word": "学力",
    "reading": "がくりょく",
    "meaning": "scholarship, knowledge",
    "level": "2"
  },
  {
    "word": "掛け算",
    "reading": "かけざん",
    "meaning": "multiplication",
    "level": "2"
  },
  {
    "word": "かけざん",
    "reading": "かけざん",
    "meaning": "multiplication",
    "level": "2"
  },
  {
    "word": "可決",
    "reading": "かけつ",
    "meaning": "approval, adoption (e.g., motion, bill), passage",
    "level": "2"
  },
  {
    "word": "火口",
    "reading": "かこう",
    "meaning": "crater (of a volcano)",
    "level": "2"
  },
  {
    "word": "下降",
    "reading": "かこう",
    "meaning": "decline, descent, fall",
    "level": "2"
  },
  {
    "word": "重ねる",
    "reading": "かさねる",
    "meaning": "to pile up, to heap up, to stack up, to put on top of another to repeat many times over, to go through repeatedly, to accumulate",
    "level": "2"
  },
  {
    "word": "飾り",
    "reading": "かざり",
    "meaning": "decoration, ornament, trimmings",
    "level": "2"
  },
  {
    "word": "火山",
    "reading": "かざん",
    "meaning": "volcano",
    "level": "2"
  },
  {
    "word": "かしこまりました",
    "reading": "かしこまりました",
    "meaning": "Certainly",
    "level": "2"
  },
  {
    "word": "貸し出し",
    "reading": "かしだし",
    "meaning": "lending, loaning",
    "level": "2"
  },
  {
    "word": "過失",
    "reading": "かしつ",
    "meaning": "error, mistake, negligence",
    "level": "2"
  },
  {
    "word": "果実",
    "reading": "かじつ",
    "meaning": "fruit",
    "level": "2"
  },
  {
    "word": "貸間",
    "reading": "かしま",
    "meaning": "room to let",
    "level": "2"
  },
  {
    "word": "貸家",
    "reading": "かしや",
    "meaning": "house for rent",
    "level": "2"
  },
  {
    "word": "箇所",
    "reading": "かしょ",
    "meaning": "place, point, part",
    "level": "2"
  },
  {
    "word": "かしょ",
    "reading": "かしょ",
    "meaning": "passage, place",
    "level": "2"
  },
  {
    "word": "過剰",
    "reading": "かじょう",
    "meaning": "excess, over-",
    "level": "2"
  },
  {
    "word": "かじる",
    "reading": "かじる",
    "meaning": "to chew, to bite (at)",
    "level": "2"
  },
  {
    "word": "課税",
    "reading": "かぜい",
    "meaning": "taxation",
    "level": "2"
  },
  {
    "word": "カセット",
    "reading": "カセット",
    "meaning": "cassette (tape)",
    "level": "2"
  },
  {
    "word": "下線",
    "reading": "かせん",
    "meaning": "underline, underscore",
    "level": "2"
  },
  {
    "word": "加速",
    "reading": "かそく",
    "meaning": "acceleration",
    "level": "2"
  },
  {
    "word": "加速度",
    "reading": "かそくど",
    "meaning": "acceleration",
    "level": "2"
  },
  {
    "word": "かたかな",
    "reading": "かたかな",
    "meaning": "katakana",
    "level": "2"
  },
  {
    "word": "かたづく",
    "reading": "かたづく",
    "meaning": "to put in order, to dispose of, to solve",
    "level": "2"
  },
  {
    "word": "塊",
    "reading": "かたまり",
    "meaning": "lump, mass, cluster",
    "level": "2"
  },
  {
    "word": "固まる",
    "reading": "かたまる",
    "meaning": "to harden, to solidify, to become firm",
    "level": "2"
  },
  {
    "word": "片道",
    "reading": "かたみち",
    "meaning": "one-way (trip)",
    "level": "2"
  },
  {
    "word": "傾く",
    "reading": "かたむく",
    "meaning": "to incline toward, to slant, to lurch",
    "level": "2"
  },
  {
    "word": "片寄る",
    "reading": "かたよる",
    "meaning": "to be one-sided, to incline, to be partial",
    "level": "2"
  },
  {
    "word": "学科",
    "reading": "がっか",
    "meaning": "study subject, course of study",
    "level": "2"
  },
  {
    "word": "学会",
    "reading": "がっかい",
    "meaning": "academic conference",
    "level": "2"
  },
  {
    "word": "楽器",
    "reading": "がっき",
    "meaning": "musical instrument",
    "level": "2"
  },
  {
    "word": "学級",
    "reading": "がっきゅう",
    "meaning": "class",
    "level": "2"
  },
  {
    "word": "担ぐ",
    "reading": "かつぐ",
    "meaning": "to shoulder, to carry on shoulder",
    "level": "2"
  },
  {
    "word": "括弧",
    "reading": "かっこ",
    "meaning": "parenthesis, brackets",
    "level": "2"
  },
  {
    "word": "活字",
    "reading": "かつじ",
    "meaning": "printing type",
    "level": "2"
  },
  {
    "word": "勝手に",
    "reading": "かってに",
    "meaning": "arbitrarily,",
    "level": "2"
  },
  {
    "word": "活躍",
    "reading": "かつやく",
    "meaning": "activity (esp. energetic or successful), great efforts, active participation",
    "level": "2"
  },
  {
    "word": "活力",
    "reading": "かつりょく",
    "meaning": "vitality, energy",
    "level": "2"
  },
  {
    "word": "課程",
    "reading": "かてい",
    "meaning": "course, curriculum",
    "level": "2"
  },
  {
    "word": "仮名",
    "reading": "かな",
    "meaning": "kana",
    "level": "2"
  },
  {
    "word": "仮名遣い",
    "reading": "かなづかい",
    "meaning": "kana orthography, syllabary spelling",
    "level": "2"
  },
  {
    "word": "鐘",
    "reading": "かね",
    "meaning": "bell (often a large hanging bell), chime",
    "level": "2"
  },
  {
    "word": "加熱",
    "reading": "かねつ",
    "meaning": "heating",
    "level": "2"
  },
  {
    "word": "兼ねる",
    "reading": "かねる",
    "meaning": "to simultaneously serve two or more functions",
    "level": "2"
  },
  {
    "word": "カバー",
    "reading": "カバー",
    "meaning": "cover (e.g., book)",
    "level": "2"
  },
  {
    "word": "過半数",
    "reading": "かはんすう",
    "meaning": "majority",
    "level": "2"
  },
  {
    "word": "かび (～がはえる)",
    "reading": "かび (～がはえる)",
    "meaning": "mold, mildew",
    "level": "2"
  },
  {
    "word": "被せる",
    "reading": "かぶせる",
    "meaning": "to cover (with something)",
    "level": "2"
  },
  {
    "word": "釜",
    "reading": "かま",
    "meaning": "iron pot, kettle",
    "level": "2"
  },
  {
    "word": "構いません",
    "reading": "かまいません",
    "meaning": "it's all right; one doesn’t mind",
    "level": "2"
  },
  {
    "word": "紙屑",
    "reading": "かみくず",
    "meaning": "wastepaper",
    "level": "2"
  },
  {
    "word": "神様",
    "reading": "かみさま",
    "meaning": "god",
    "level": "2"
  },
  {
    "word": "剃刀",
    "reading": "かみそり",
    "meaning": "razor",
    "level": "2"
  },
  {
    "word": "ガム",
    "reading": "ガム",
    "meaning": "chewing gum",
    "level": "2"
  },
  {
    "word": "貨物",
    "reading": "かもつ",
    "meaning": "cargo, freight",
    "level": "2"
  },
  {
    "word": "歌謡",
    "reading": "かよう",
    "meaning": "song, ballad",
    "level": "2"
  },
  {
    "word": "殻",
    "reading": "から",
    "meaning": "shell, husk, hull, pod, chaff",
    "level": "2"
  },
  {
    "word": "カラー",
    "reading": "カラー",
    "meaning": "collar, color",
    "level": "2"
  },
  {
    "word": "からかう",
    "reading": "からかう",
    "meaning": "to ridicule, to make fun of",
    "level": "2"
  },
  {
    "word": "空っぽ",
    "reading": "からっぽ",
    "meaning": "empty, vacant, hollow",
    "level": "2"
  },
  {
    "word": "かるた",
    "reading": "かるた",
    "meaning": "playing cards (POR: carta)",
    "level": "2"
  },
  {
    "word": "枯れる",
    "reading": "かれる",
    "meaning": "to wither, to die (plant), to be blasted (plant)",
    "level": "2"
  },
  {
    "word": "カロリー",
    "reading": "カロリー",
    "meaning": "calorie",
    "level": "2"
  },
  {
    "word": "可愛がる",
    "reading": "かわいがる",
    "meaning": "to love, to be affectionate",
    "level": "2"
  },
  {
    "word": "乾かす",
    "reading": "かわかす",
    "meaning": "to dry (clothes, etc.), to desiccate",
    "level": "2"
  },
  {
    "word": "為替",
    "reading": "かわせ",
    "meaning": "money order, exchange",
    "level": "2"
  },
  {
    "word": "瓦",
    "reading": "かわら",
    "meaning": "roof tile",
    "level": "2"
  },
  {
    "word": "間隔",
    "reading": "かんかく",
    "meaning": "space, interval space character, whitespace",
    "level": "2"
  },
  {
    "word": "換気",
    "reading": "かんき",
    "meaning": "ventilation",
    "level": "2"
  },
  {
    "word": "感激",
    "reading": "かんげき",
    "meaning": "deep emotion, impression, inspiration",
    "level": "2"
  },
  {
    "word": "関西",
    "reading": "かんさい",
    "meaning": "south-western half of Japan, including Osaka",
    "level": "2"
  },
  {
    "word": "元日",
    "reading": "がんじつ",
    "meaning": "New Year's Day",
    "level": "2"
  },
  {
    "word": "鑑賞",
    "reading": "かんしょう",
    "meaning": "appreciation",
    "level": "2"
  },
  {
    "word": "感ずる",
    "reading": "かんずる",
    "meaning": "to feel, to sense",
    "level": "2"
  },
  {
    "word": "間接",
    "reading": "かんせつ",
    "meaning": "indirect, indirectness",
    "level": "2"
  },
  {
    "word": "乾燥",
    "reading": "かんそう",
    "meaning": "dry, arid, insipid, dehydrated",
    "level": "2"
  },
  {
    "word": "感想",
    "reading": "かんそう",
    "meaning": "impressions, thoughts, feelings, reactions",
    "level": "2"
  },
  {
    "word": "観測",
    "reading": "かんそく",
    "meaning": "observation",
    "level": "2"
  },
  {
    "word": "寒帯",
    "reading": "かんたい",
    "meaning": "frigid zone",
    "level": "2"
  },
  {
    "word": "勘違い",
    "reading": "かんちがい",
    "meaning": "misunderstanding, wrong guess",
    "level": "2"
  },
  {
    "word": "官庁",
    "reading": "かんちょう",
    "meaning": "government office, authorities",
    "level": "2"
  },
  {
    "word": "缶詰",
    "reading": "かんづめ",
    "meaning": "canning, canned goods,",
    "level": "2"
  },
  {
    "word": "乾電池",
    "reading": "かんでんち",
    "meaning": "dry cell, battery",
    "level": "2"
  },
  {
    "word": "関東",
    "reading": "かんとう",
    "meaning": "eastern half of Japan, including Tokyo",
    "level": "2"
  },
  {
    "word": "観念",
    "reading": "かんねん",
    "meaning": "idea, notion; sense",
    "level": "2"
  },
  {
    "word": "乾杯",
    "reading": "かんぱい",
    "meaning": "Cheers! (a toast)",
    "level": "2"
  },
  {
    "word": "看板",
    "reading": "かんばん",
    "meaning": "sign, signboard",
    "level": "2"
  },
  {
    "word": "看病",
    "reading": "かんびょう",
    "meaning": "nursing (a patient)",
    "level": "2"
  },
  {
    "word": "冠",
    "reading": "かんむり",
    "meaning": "crown, wreath",
    "level": "2"
  },
  {
    "word": "漢和",
    "reading": "かんわ",
    "meaning": "Chinese Character-Japanese (e.g., dictionary)",
    "level": "2"
  },
  {
    "word": "気圧",
    "reading": "きあつ",
    "meaning": "atmospheric pressure",
    "level": "2"
  },
  {
    "word": "着替え",
    "reading": "きがえ",
    "meaning": "changing clothes, change of clothes",
    "level": "2"
  },
  {
    "word": "着替える",
    "reading": "きがえる",
    "meaning": "to change (one's) clothes",
    "level": "2"
  },
  {
    "word": "機関車",
    "reading": "きかんしゃ",
    "meaning": "locomotive, engine",
    "level": "2"
  },
  {
    "word": "飢饉",
    "reading": "ききん",
    "meaning": "famine",
    "level": "2"
  },
  {
    "word": "器具",
    "reading": "きぐ",
    "meaning": "instrument",
    "level": "2"
  },
  {
    "word": "期限",
    "reading": "きげん",
    "meaning": "term, period, time frame time limit, deadline, cutoff (date)",
    "level": "2"
  },
  {
    "word": "記号",
    "reading": "きごう",
    "meaning": "symbol, code",
    "level": "2"
  },
  {
    "word": "刻む",
    "reading": "きざむ",
    "meaning": "to mince, to carve, to engrave",
    "level": "2"
  },
  {
    "word": "儀式",
    "reading": "ぎしき",
    "meaning": "ceremony, rite, ritual",
    "level": "2"
  },
  {
    "word": "基準",
    "reading": "きじゅん",
    "meaning": "standard, basis, criteria",
    "level": "2"
  },
  {
    "word": "規準",
    "reading": "きじゅん",
    "meaning": "standard, basis, criteria",
    "level": "2"
  },
  {
    "word": "起床",
    "reading": "きしょう",
    "meaning": "rising, getting out of bed",
    "level": "2"
  },
  {
    "word": "着せる",
    "reading": "きせる",
    "meaning": "to put on clothes",
    "level": "2"
  },
  {
    "word": "基礎",
    "reading": "きそ",
    "meaning": "foundation, basis",
    "level": "2"
  },
  {
    "word": "基地",
    "reading": "きち",
    "meaning": "base",
    "level": "2"
  },
  {
    "word": "きっかけ",
    "reading": "きっかけ",
    "meaning": "prompt, trigger, cue",
    "level": "2"
  },
  {
    "word": "切っ掛け",
    "reading": "きっかけ",
    "meaning": "chance, start, cue, excuse, motive, impetus, occassion",
    "level": "2"
  },
  {
    "word": "ぎっしり",
    "reading": "ぎっしり",
    "meaning": "tightly, fully",
    "level": "2"
  },
  {
    "word": "基盤",
    "reading": "きばん",
    "meaning": "foundation, basis",
    "level": "2"
  },
  {
    "word": "客席",
    "reading": "きゃくせき",
    "meaning": "guest seating",
    "level": "2"
  },
  {
    "word": "客間",
    "reading": "きゃくま",
    "meaning": "parlor, guest room",
    "level": "2"
  },
  {
    "word": "ギャング",
    "reading": "ギャング",
    "meaning": "gang",
    "level": "2"
  },
  {
    "word": "キャンパス",
    "reading": "キャンパス",
    "meaning": "campus",
    "level": "2"
  },
  {
    "word": "休業",
    "reading": "きゅうぎょう",
    "meaning": "closure, shutdown, holiday",
    "level": "2"
  },
  {
    "word": "休講",
    "reading": "きゅうこう",
    "meaning": "lecture canceled",
    "level": "2"
  },
  {
    "word": "休息",
    "reading": "きゅうそく",
    "meaning": "rest, relief, relaxation",
    "level": "2"
  },
  {
    "word": "給与",
    "reading": "きゅうよ",
    "meaning": "salary",
    "level": "2"
  },
  {
    "word": "休養",
    "reading": "きゅうよう",
    "meaning": "rest, break, recreation",
    "level": "2"
  },
  {
    "word": "清い",
    "reading": "きよい",
    "meaning": "clear, pure, noble",
    "level": "2"
  },
  {
    "word": "強化",
    "reading": "きょうか",
    "meaning": "strengthen, intensify, reinforce",
    "level": "2"
  },
  {
    "word": "境界",
    "reading": "きょうかい",
    "meaning": "boundary",
    "level": "2"
  },
  {
    "word": "共産～",
    "reading": "きょうさん～",
    "meaning": "communist ~",
    "level": "2"
  },
  {
    "word": "行事",
    "reading": "ぎょうじ",
    "meaning": "event, function",
    "level": "2"
  },
  {
    "word": "恐縮",
    "reading": "きょうしゅく",
    "meaning": "sorry to trouble",
    "level": "2"
  },
  {
    "word": "教養",
    "reading": "きょうよう",
    "meaning": "culture, education, sophistication",
    "level": "2"
  },
  {
    "word": "行列",
    "reading": "ぎょうれつ",
    "meaning": "line, procession; matrix (math)",
    "level": "2"
  },
  {
    "word": "漁業",
    "reading": "ぎょぎょう",
    "meaning": "fishing (industry)",
    "level": "2"
  },
  {
    "word": "曲線",
    "reading": "きょくせん",
    "meaning": "curve",
    "level": "2"
  },
  {
    "word": "規律",
    "reading": "きりつ",
    "meaning": "order, rules, law",
    "level": "2"
  },
  {
    "word": "斬る",
    "reading": "きる",
    "meaning": "to behead, to murder",
    "level": "2"
  },
  {
    "word": "気を付ける",
    "reading": "きをつける",
    "meaning": "to be careful, to pay attention, to take care",
    "level": "2"
  },
  {
    "word": "琴",
    "reading": "きん",
    "meaning": "13-string Japanese zither",
    "level": "2"
  },
  {
    "word": "金魚",
    "reading": "きんぎょ",
    "meaning": "goldfish",
    "level": "2"
  },
  {
    "word": "クーラー",
    "reading": "クーラー",
    "meaning": "air conditioner",
    "level": "2"
  },
  {
    "word": "区域",
    "reading": "くいき",
    "meaning": "zone, district, area",
    "level": "2"
  },
  {
    "word": "空～",
    "reading": "くう～",
    "meaning": "empty ~",
    "level": "2"
  },
  {
    "word": "偶数",
    "reading": "ぐうすう",
    "meaning": "even number",
    "level": "2"
  },
  {
    "word": "空想",
    "reading": "くうそう",
    "meaning": "daydream, fantasy",
    "level": "2"
  },
  {
    "word": "空中",
    "reading": "くうちゅう",
    "meaning": "sky, air",
    "level": "2"
  },
  {
    "word": "釘",
    "reading": "くぎ",
    "meaning": "nail",
    "level": "2"
  },
  {
    "word": "区切る",
    "reading": "くぎる",
    "meaning": "to punctuate, to cut off, to mark off",
    "level": "2"
  },
  {
    "word": "櫛",
    "reading": "くし",
    "meaning": "comb",
    "level": "2"
  },
  {
    "word": "くしゃみ",
    "reading": "くしゃみ",
    "meaning": "sneeze",
    "level": "2"
  },
  {
    "word": "苦情",
    "reading": "くじょう",
    "meaning": "complaint, grievance, grumble",
    "level": "2"
  },
  {
    "word": "苦心",
    "reading": "くしん",
    "meaning": "pain, trouble",
    "level": "2"
  },
  {
    "word": "屑",
    "reading": "くず",
    "meaning": "waste, scrap",
    "level": "2"
  },
  {
    "word": "崩す",
    "reading": "くずす",
    "meaning": "to destroy, to make change (money)",
    "level": "2"
  },
  {
    "word": "薬指",
    "reading": "くすりゆび",
    "meaning": "ring finger",
    "level": "2"
  },
  {
    "word": "崩れる",
    "reading": "くずれる",
    "meaning": "to collapse, to crumble",
    "level": "2"
  },
  {
    "word": "砕く",
    "reading": "くだく",
    "meaning": "to break, to smash",
    "level": "2"
  },
  {
    "word": "砕ける",
    "reading": "くだける",
    "meaning": "to break, to be broken",
    "level": "2"
  },
  {
    "word": "くたびれる",
    "reading": "くたびれる",
    "meaning": "to get tired, to wear out",
    "level": "2"
  },
  {
    "word": "くだらない",
    "reading": "くだらない",
    "meaning": "good-for-nothing, stupid, worthless",
    "level": "2"
  },
  {
    "word": "下る",
    "reading": "くだる",
    "meaning": "to descend, to go down, to come down",
    "level": "2"
  },
  {
    "word": "唇",
    "reading": "くちびる",
    "meaning": "lip",
    "level": "2"
  },
  {
    "word": "口紅",
    "reading": "くちべに",
    "meaning": "lipstick",
    "level": "2"
  },
  {
    "word": "くっつく",
    "reading": "くっつく",
    "meaning": "to adhere to, to keep close to",
    "level": "2"
  },
  {
    "word": "くっつける",
    "reading": "くっつける",
    "meaning": "to attach",
    "level": "2"
  },
  {
    "word": "くどい",
    "reading": "くどい",
    "meaning": "verbose, importunate, heavy (taste)",
    "level": "2"
  },
  {
    "word": "句読点",
    "reading": "くとうてん",
    "meaning": "punctuation marks",
    "level": "2"
  },
  {
    "word": "配る",
    "reading": "くばる",
    "meaning": "to distribute, to deliver",
    "level": "2"
  },
  {
    "word": "工夫",
    "reading": "くふう",
    "meaning": "device, artifice, ingenuity",
    "level": "2"
  },
  {
    "word": "区分",
    "reading": "くぶん",
    "meaning": "division, section, classification",
    "level": "2"
  },
  {
    "word": "組合せ",
    "reading": "くみあわせ",
    "meaning": "combination",
    "level": "2"
  },
  {
    "word": "組み立てる",
    "reading": "くみたてる",
    "meaning": "to assemble, to set up, to construct",
    "level": "2"
  },
  {
    "word": "悔やむ",
    "reading": "くやむ",
    "meaning": "to regret, to mourn",
    "level": "2"
  },
  {
    "word": "クリーニング",
    "reading": "クリーニング",
    "meaning": "cleaning, dry cleaning, laundry service",
    "level": "2"
  },
  {
    "word": "くるむ",
    "reading": "くるむ",
    "meaning": "to be enveloped by, to wrap up",
    "level": "2"
  },
  {
    "word": "くれぐれも",
    "reading": "くれぐれも",
    "meaning": "repeatedly, sincerely, earnestly",
    "level": "2"
  },
  {
    "word": "郡",
    "reading": "ぐん",
    "meaning": "district, county",
    "level": "2"
  },
  {
    "word": "稽古",
    "reading": "けいこ",
    "meaning": "practice, training, study",
    "level": "2"
  },
  {
    "word": "敬語",
    "reading": "けいご",
    "meaning": "honorific language (lit., respect language)",
    "level": "2"
  },
  {
    "word": "蛍光灯",
    "reading": "けいこうとう",
    "meaning": "fluorescent lamp",
    "level": "2"
  },
  {
    "word": "形式",
    "reading": "けいしき",
    "meaning": "form, formality, format",
    "level": "2"
  },
  {
    "word": "継続",
    "reading": "けいぞく",
    "meaning": "continuation",
    "level": "2"
  },
  {
    "word": "毛糸",
    "reading": "けいと",
    "meaning": "knitting wool",
    "level": "2"
  },
  {
    "word": "経度",
    "reading": "けいど",
    "meaning": "longitude",
    "level": "2"
  },
  {
    "word": "系統",
    "reading": "けいとう",
    "meaning": "system, genealogy",
    "level": "2"
  },
  {
    "word": "芸能",
    "reading": "げいのう",
    "meaning": "public entertainment, performing arts",
    "level": "2"
  },
  {
    "word": "競馬",
    "reading": "けいば",
    "meaning": "horse racing",
    "level": "2"
  },
  {
    "word": "警備",
    "reading": "けいび",
    "meaning": "defense, guard, policing, security",
    "level": "2"
  },
  {
    "word": "形容詞",
    "reading": "けいようし",
    "meaning": "adjective",
    "level": "2"
  },
  {
    "word": "形容動詞",
    "reading": "けいようどうし",
    "meaning": "adjectival noun, quasi-adjective",
    "level": "2"
  },
  {
    "word": "外科",
    "reading": "げか",
    "meaning": "surgical department",
    "level": "2"
  },
  {
    "word": "毛皮",
    "reading": "けがわ",
    "meaning": "fur, skin, pelt",
    "level": "2"
  },
  {
    "word": "激増",
    "reading": "げきぞう",
    "meaning": "sudden increase",
    "level": "2"
  },
  {
    "word": "下車",
    "reading": "げしゃ",
    "meaning": "alighting, getting off",
    "level": "2"
  },
  {
    "word": "下旬",
    "reading": "げじゅん",
    "meaning": "month (last third of)",
    "level": "2"
  },
  {
    "word": "下水",
    "reading": "げすい",
    "meaning": "drainage, sewage, ditch, gutter, sewerage",
    "level": "2"
  },
  {
    "word": "削る",
    "reading": "けずる",
    "meaning": "to cut down little by little, to take a percentage",
    "level": "2"
  },
  {
    "word": "桁",
    "reading": "けた",
    "meaning": "column, beam, digit",
    "level": "2"
  },
  {
    "word": "下駄",
    "reading": "げた",
    "meaning": "(Japanese footwear), wooden clogs",
    "level": "2"
  },
  {
    "word": "血圧",
    "reading": "けつあつ",
    "meaning": "blood pressure",
    "level": "2"
  },
  {
    "word": "月給",
    "reading": "げっきゅう",
    "meaning": "monthly salary",
    "level": "2"
  },
  {
    "word": "傑作",
    "reading": "けっさく",
    "meaning": "masterpiece, best work",
    "level": "2"
  },
  {
    "word": "月末",
    "reading": "げつまつ",
    "meaning": "end of the month",
    "level": "2"
  },
  {
    "word": "気配",
    "reading": "けはい",
    "meaning": "indication, sign, hint",
    "level": "2"
  },
  {
    "word": "下品",
    "reading": "げひん",
    "meaning": "vulgar, indecent, coarse",
    "level": "2"
  },
  {
    "word": "下品(な)",
    "reading": "げひん(な)",
    "meaning": "vulgar",
    "level": "2"
  },
  {
    "word": "煙い",
    "reading": "けむい",
    "meaning": "smoky",
    "level": "2"
  },
  {
    "word": "険しい",
    "reading": "けわしい",
    "meaning": "steep, rugged; severe",
    "level": "2"
  },
  {
    "word": "現～",
    "reading": "げん～",
    "meaning": "present, incumbent",
    "level": "2"
  },
  {
    "word": "見学",
    "reading": "けんがく",
    "meaning": "tour, study by observation",
    "level": "2"
  },
  {
    "word": "謙虚",
    "reading": "けんきょ",
    "meaning": "modesty, humble",
    "level": "2"
  },
  {
    "word": "原稿",
    "reading": "げんこう",
    "meaning": "manuscript, copy",
    "level": "2"
  },
  {
    "word": "原産",
    "reading": "げんさん",
    "meaning": "place of origin",
    "level": "2"
  },
  {
    "word": "原始",
    "reading": "げんし",
    "meaning": "origin, primeval",
    "level": "2"
  },
  {
    "word": "研修",
    "reading": "けんしゅう",
    "meaning": "training",
    "level": "2"
  },
  {
    "word": "厳重",
    "reading": "げんじゅう",
    "meaning": "strict, severe, firm",
    "level": "2"
  },
  {
    "word": "謙遜",
    "reading": "けんそん",
    "meaning": "humble, humility, modesty",
    "level": "2"
  },
  {
    "word": "県庁",
    "reading": "けんちょう",
    "meaning": "prefectural office",
    "level": "2"
  },
  {
    "word": "限度",
    "reading": "げんど",
    "meaning": "limit, bounds",
    "level": "2"
  },
  {
    "word": "現に",
    "reading": "げんに",
    "meaning": "actually, really",
    "level": "2"
  },
  {
    "word": "顕微鏡",
    "reading": "けんびきょう",
    "meaning": "microscope",
    "level": "2"
  },
  {
    "word": "懸命",
    "reading": "けんめい",
    "meaning": "eagerness, strenuous",
    "level": "2"
  },
  {
    "word": "原理",
    "reading": "げんり",
    "meaning": "principle, theory, fundamental truth",
    "level": "2"
  },
  {
    "word": "原料",
    "reading": "げんりょう",
    "meaning": "raw materials",
    "level": "2"
  },
  {
    "word": "碁",
    "reading": "ご",
    "meaning": "go (board game)",
    "level": "2"
  },
  {
    "word": "小～",
    "reading": "こ～",
    "meaning": "small ~",
    "level": "2"
  },
  {
    "word": "コース",
    "reading": "コース",
    "meaning": "course",
    "level": "2"
  },
  {
    "word": "コーラス",
    "reading": "コーラス",
    "meaning": "chorus",
    "level": "2"
  },
  {
    "word": "恋しい",
    "reading": "こいしい",
    "meaning": "dear, beloved; to miss",
    "level": "2"
  },
  {
    "word": "高～",
    "reading": "こう～",
    "meaning": "high (level) ~",
    "level": "2"
  },
  {
    "word": "工員",
    "reading": "こういん",
    "meaning": "factory worker",
    "level": "2"
  },
  {
    "word": "強引",
    "reading": "ごういん",
    "meaning": "forcible, assertive, pushy",
    "level": "2"
  },
  {
    "word": "公害",
    "reading": "こうがい",
    "meaning": "public nuisance, pollution",
    "level": "2"
  },
  {
    "word": "高級",
    "reading": "こうきゅう",
    "meaning": "high class; first-rate",
    "level": "2"
  },
  {
    "word": "公共",
    "reading": "こうきょう",
    "meaning": "public, community, communal",
    "level": "2"
  },
  {
    "word": "工芸",
    "reading": "こうげい",
    "meaning": "industrial arts",
    "level": "2"
  },
  {
    "word": "孝行",
    "reading": "こうこう",
    "meaning": "filial piety",
    "level": "2"
  },
  {
    "word": "交差",
    "reading": "こうさ",
    "meaning": "cross",
    "level": "2"
  },
  {
    "word": "講師",
    "reading": "こうし",
    "meaning": "lecturer",
    "level": "2"
  },
  {
    "word": "工事",
    "reading": "こうじ",
    "meaning": "construction work",
    "level": "2"
  },
  {
    "word": "公式",
    "reading": "こうしき",
    "meaning": "formula, formality, official",
    "level": "2"
  },
  {
    "word": "口実",
    "reading": "こうじつ",
    "meaning": "excuse",
    "level": "2"
  },
  {
    "word": "こうして",
    "reading": "こうして",
    "meaning": "like this, with this",
    "level": "2"
  },
  {
    "word": "校舎",
    "reading": "こうしゃ",
    "meaning": "school building, schoolhouse",
    "level": "2"
  },
  {
    "word": "公衆",
    "reading": "こうしゅう",
    "meaning": "the public",
    "level": "2"
  },
  {
    "word": "香水",
    "reading": "こうすい",
    "meaning": "perfume",
    "level": "2"
  },
  {
    "word": "公正",
    "reading": "こうせい",
    "meaning": "justice, fairness, impartiality",
    "level": "2"
  },
  {
    "word": "功績",
    "reading": "こうせき",
    "meaning": "achievements, merit",
    "level": "2"
  },
  {
    "word": "光線",
    "reading": "こうせん",
    "meaning": "beam, light ray",
    "level": "2"
  },
  {
    "word": "高層",
    "reading": "こうそう",
    "meaning": "tall, high rise",
    "level": "2"
  },
  {
    "word": "構造",
    "reading": "こうぞう",
    "meaning": "structure, construction",
    "level": "2"
  },
  {
    "word": "交替",
    "reading": "こうたい",
    "meaning": "change, relief, alteration",
    "level": "2"
  },
  {
    "word": "交代",
    "reading": "こうたい",
    "meaning": "alternation, change, relief, relay, shift, substitution (sports, etc.), taking turns",
    "level": "2"
  },
  {
    "word": "耕地",
    "reading": "こうち",
    "meaning": "arable land",
    "level": "2"
  },
  {
    "word": "交通機関",
    "reading": "こうつうきかん",
    "meaning": "transportation facilities",
    "level": "2"
  },
  {
    "word": "校庭",
    "reading": "こうてい",
    "meaning": "school yard",
    "level": "2"
  },
  {
    "word": "肯定",
    "reading": "こうてい",
    "meaning": "positive, affirmation",
    "level": "2"
  },
  {
    "word": "高度",
    "reading": "こうど",
    "meaning": "altitude, height; advanced",
    "level": "2"
  },
  {
    "word": "高等",
    "reading": "こうとう",
    "meaning": "high class, high grade",
    "level": "2"
  },
  {
    "word": "合同",
    "reading": "ごうどう",
    "meaning": "combination, incorporation",
    "level": "2"
  },
  {
    "word": "高等学校",
    "reading": "こうとうがっこう",
    "meaning": "senior high school",
    "level": "2"
  },
  {
    "word": "公表",
    "reading": "こうひょう",
    "meaning": "official announcement, proclamation",
    "level": "2"
  },
  {
    "word": "鉱物",
    "reading": "こうぶつ",
    "meaning": "mineral",
    "level": "2"
  },
  {
    "word": "公務",
    "reading": "こうむ",
    "meaning": "official business, public business",
    "level": "2"
  },
  {
    "word": "項目",
    "reading": "こうもく",
    "meaning": "item",
    "level": "2"
  },
  {
    "word": "紅葉",
    "reading": "こうよう",
    "meaning": "fall colors (of leaves)",
    "level": "2"
  },
  {
    "word": "こうよう もみじ",
    "reading": "こうよう もみじ",
    "meaning": "(Japanese) maple",
    "level": "2"
  },
  {
    "word": "合理",
    "reading": "ごうり",
    "meaning": "rational",
    "level": "2"
  },
  {
    "word": "交流",
    "reading": "こうりゅう",
    "meaning": "exchange; alternating current",
    "level": "2"
  },
  {
    "word": "合流",
    "reading": "ごうりゅう",
    "meaning": "confluence, merge, join",
    "level": "2"
  },
  {
    "word": "効力",
    "reading": "こうりょく",
    "meaning": "effect, efficacy",
    "level": "2"
  },
  {
    "word": "焦がす",
    "reading": "こがす",
    "meaning": "to burn, to scorch",
    "level": "2"
  },
  {
    "word": "国王",
    "reading": "こくおう",
    "meaning": "king",
    "level": "2"
  },
  {
    "word": "こくせき",
    "reading": "こくせき",
    "meaning": "nationality",
    "level": "2"
  },
  {
    "word": "国立",
    "reading": "こくりつ",
    "meaning": "national",
    "level": "2"
  },
  {
    "word": "ご苦労様",
    "reading": "ごくろうさま",
    "meaning": "Thank you for your hard work",
    "level": "2"
  },
  {
    "word": "焦げる",
    "reading": "こげる",
    "meaning": "to burn, to be burned",
    "level": "2"
  },
  {
    "word": "凍える",
    "reading": "こごえる",
    "meaning": "to freeze, to be chilled, to be frozen",
    "level": "2"
  },
  {
    "word": "心当たり",
    "reading": "こころあたり",
    "meaning": "having some knowledge of, happening to know",
    "level": "2"
  },
  {
    "word": "心得る",
    "reading": "こころえる",
    "meaning": "to understand, to have thorough knowledge",
    "level": "2"
  },
  {
    "word": "腰掛け",
    "reading": "こしかけ",
    "meaning": "seat, bench",
    "level": "2"
  },
  {
    "word": "腰掛",
    "reading": "こしかけ",
    "meaning": "seat, bench",
    "level": "2"
  },
  {
    "word": "腰掛ける",
    "reading": "こしかける",
    "meaning": "to sit (down)",
    "level": "2"
  },
  {
    "word": "五十音",
    "reading": "ごじゅうおん",
    "meaning": "the Japanese syllabary",
    "level": "2"
  },
  {
    "word": "こしらえる",
    "reading": "こしらえる",
    "meaning": "to make, to manufacture",
    "level": "2"
  },
  {
    "word": "擦る",
    "reading": "こする",
    "meaning": "to rub, to chafe, to file, to frost (glass), to strike (match)",
    "level": "2"
  },
  {
    "word": "個体",
    "reading": "こたい",
    "meaning": "an individual",
    "level": "2"
  },
  {
    "word": "ごちそうさま",
    "reading": "ごちそうさま",
    "meaning": "Thank you for the meal",
    "level": "2"
  },
  {
    "word": "こちらこそ",
    "reading": "こちらこそ",
    "meaning": "it is I who should say so",
    "level": "2"
  },
  {
    "word": "小遣い",
    "reading": "こづかい",
    "meaning": "pocket money, allowance",
    "level": "2"
  },
  {
    "word": "コック",
    "reading": "コック",
    "meaning": "cook; tap, cock",
    "level": "2"
  },
  {
    "word": "こっそり",
    "reading": "こっそり",
    "meaning": "stealthily, secretly",
    "level": "2"
  },
  {
    "word": "古典",
    "reading": "こてん",
    "meaning": "classics, classic",
    "level": "2"
  },
  {
    "word": "言付ける",
    "reading": "ことづける",
    "meaning": "to leave a message",
    "level": "2"
  },
  {
    "word": "言葉遣い",
    "reading": "ことばづかい",
    "meaning": "speech, expression, wording",
    "level": "2"
  },
  {
    "word": "こないだ",
    "reading": "こないだ",
    "meaning": "the other day, lately, recently",
    "level": "2"
  },
  {
    "word": "御無沙汰",
    "reading": "ごぶさた",
    "meaning": "not writing or contacting for a while",
    "level": "2"
  },
  {
    "word": "ゴム",
    "reading": "ゴム",
    "meaning": "gum, rubber",
    "level": "2"
  },
  {
    "word": "御免",
    "reading": "ごめん",
    "meaning": "declining (something); pardon, sorry",
    "level": "2"
  },
  {
    "word": "ごめんください",
    "reading": "ごめんください",
    "meaning": "May I come in, Is anyone here",
    "level": "2"
  },
  {
    "word": "小指",
    "reading": "こゆび",
    "meaning": "little finger",
    "level": "2"
  },
  {
    "word": "堪える",
    "reading": "こらえる",
    "meaning": "to bear, to endure, to put up with",
    "level": "2"
  },
  {
    "word": "娯楽",
    "reading": "ごらく",
    "meaning": "pleasure, amusement, recreation",
    "level": "2"
  },
  {
    "word": "御覧",
    "reading": "ごらん",
    "meaning": "(hon.) look, inspection, try",
    "level": "2"
  },
  {
    "word": "コレクション",
    "reading": "コレクション",
    "meaning": "collection; correction",
    "level": "2"
  },
  {
    "word": "転がす",
    "reading": "ころがす",
    "meaning": "to roll",
    "level": "2"
  },
  {
    "word": "転がる",
    "reading": "ころがる",
    "meaning": "to roll, to tumble",
    "level": "2"
  },
  {
    "word": "紺",
    "reading": "こん",
    "meaning": "navy blue, deep blue",
    "level": "2"
  },
  {
    "word": "今～",
    "reading": "こん～",
    "meaning": "this, current",
    "level": "2"
  },
  {
    "word": "コンクール",
    "reading": "コンクール",
    "meaning": "contest (FRE: concours)",
    "level": "2"
  },
  {
    "word": "コンクリート",
    "reading": "コンクリート",
    "meaning": "concrete",
    "level": "2"
  },
  {
    "word": "混合",
    "reading": "こんごう",
    "meaning": "mixing, mixture",
    "level": "2"
  },
  {
    "word": "コンセント",
    "reading": "コンセント",
    "meaning": "consent; power outlet",
    "level": "2"
  },
  {
    "word": "献立",
    "reading": "こんだて",
    "meaning": "menu",
    "level": "2"
  },
  {
    "word": "こんばんは",
    "reading": "こんばんは",
    "meaning": "good evening",
    "level": "2"
  },
  {
    "word": "サークル",
    "reading": "サークル",
    "meaning": "circle, sports club (e.g., at a company)",
    "level": "2"
  },
  {
    "word": "再～",
    "reading": "さい～",
    "meaning": "re ~",
    "level": "2"
  },
  {
    "word": "最～",
    "reading": "さい～",
    "meaning": "the most ~",
    "level": "2"
  },
  {
    "word": "在学",
    "reading": "ざいがく",
    "meaning": "(enrolled) in school",
    "level": "2"
  },
  {
    "word": "再三",
    "reading": "さいさん",
    "meaning": "again and again, repeatedly",
    "level": "2"
  },
  {
    "word": "祭日",
    "reading": "さいじつ",
    "meaning": "national holiday, festival day",
    "level": "2"
  },
  {
    "word": "催促",
    "reading": "さいそく",
    "meaning": "demand, urge (action), press for",
    "level": "2"
  },
  {
    "word": "採点",
    "reading": "さいてん",
    "meaning": "marking, grading",
    "level": "2"
  },
  {
    "word": "災難",
    "reading": "さいなん",
    "meaning": "calamity, misfortune",
    "level": "2"
  },
  {
    "word": "裁縫",
    "reading": "さいほう",
    "meaning": "sewing",
    "level": "2"
  },
  {
    "word": "材木",
    "reading": "ざいもく",
    "meaning": "lumber, timber",
    "level": "2"
  },
  {
    "word": "サイレン",
    "reading": "サイレン",
    "meaning": "siren",
    "level": "2"
  },
  {
    "word": "逆さ",
    "reading": "さかさ",
    "meaning": "reverse, upside down",
    "level": "2"
  },
  {
    "word": "逆様",
    "reading": "さかさま",
    "meaning": "reverse, upside down",
    "level": "2"
  },
  {
    "word": "捜す",
    "reading": "さがす",
    "meaning": "to search, to seek, to look for",
    "level": "2"
  },
  {
    "word": "遡る",
    "reading": "さかのぼる",
    "meaning": "to go back, to date back; ascend",
    "level": "2"
  },
  {
    "word": "酒場",
    "reading": "さかば",
    "meaning": "bar, bar-room",
    "level": "2"
  },
  {
    "word": "一昨昨日",
    "reading": "さきおととい",
    "meaning": "two days before yesterday, three days ago",
    "level": "2"
  },
  {
    "word": "先程",
    "reading": "さきほど",
    "meaning": "a little while ago",
    "level": "2"
  },
  {
    "word": "索引",
    "reading": "さくいん",
    "meaning": "index, indices",
    "level": "2"
  },
  {
    "word": "作者",
    "reading": "さくしゃ",
    "meaning": "author, artist",
    "level": "2"
  },
  {
    "word": "削除",
    "reading": "さくじょ",
    "meaning": "elimination, deletion",
    "level": "2"
  },
  {
    "word": "作成",
    "reading": "さくせい",
    "meaning": "creation, preparation, to make",
    "level": "2"
  },
  {
    "word": "作製",
    "reading": "さくせい",
    "meaning": "manufacture, production",
    "level": "2"
  },
  {
    "word": "探る",
    "reading": "さぐる",
    "meaning": "to search, to look for, investigate",
    "level": "2"
  },
  {
    "word": "囁く",
    "reading": "ささやく",
    "meaning": "to whisper, to murmur",
    "level": "2"
  },
  {
    "word": "刺さる",
    "reading": "ささる",
    "meaning": "to stick, to be stuck",
    "level": "2"
  },
  {
    "word": "匙",
    "reading": "さじ",
    "meaning": "spoon",
    "level": "2"
  },
  {
    "word": "座敷",
    "reading": "ざしき",
    "meaning": "tatami room",
    "level": "2"
  },
  {
    "word": "差し支え",
    "reading": "さしつかえ",
    "meaning": "hindrance, impediment",
    "level": "2"
  },
  {
    "word": "差し引き",
    "reading": "さしひき",
    "meaning": "deduction, balance",
    "level": "2"
  },
  {
    "word": "刺身",
    "reading": "さしみ",
    "meaning": "sliced raw fish",
    "level": "2"
  },
  {
    "word": "刺す",
    "reading": "さす",
    "meaning": "to pierce, to stab, to prick, to thrust",
    "level": "2"
  },
  {
    "word": "流石",
    "reading": "さすが",
    "meaning": "indeed, truly, as one would expect",
    "level": "2"
  },
  {
    "word": "撮影",
    "reading": "さつえい",
    "meaning": "photographing",
    "level": "2"
  },
  {
    "word": "雑音",
    "reading": "ざつおん",
    "meaning": "noise (jarring, grating)",
    "level": "2"
  },
  {
    "word": "さっさと",
    "reading": "さっさと",
    "meaning": "quickly",
    "level": "2"
  },
  {
    "word": "早速",
    "reading": "さっそく",
    "meaning": "at once, immediately, promptly",
    "level": "2"
  },
  {
    "word": "錆",
    "reading": "さび",
    "meaning": "rust (color)",
    "level": "2"
  },
  {
    "word": "錆びる",
    "reading": "さびる",
    "meaning": "to rust, to become rusty",
    "level": "2"
  },
  {
    "word": "座布団",
    "reading": "ざぶとん",
    "meaning": "cushion (Japanese)",
    "level": "2"
  },
  {
    "word": "妨げる",
    "reading": "さまたげる",
    "meaning": "to disturb, to prevent",
    "level": "2"
  },
  {
    "word": "さようなら",
    "reading": "さようなら",
    "meaning": "good-bye",
    "level": "2"
  },
  {
    "word": "サラリーマン",
    "reading": "サラリーマン",
    "meaning": "salaryman; company employee",
    "level": "2"
  },
  {
    "word": "騒がしい",
    "reading": "さわがしい",
    "meaning": "noisy",
    "level": "2"
  },
  {
    "word": "さわやか",
    "reading": "さわやか",
    "meaning": "fresh, refreshing",
    "level": "2"
  },
  {
    "word": "三角",
    "reading": "さんかく",
    "meaning": "triangle, triangular",
    "level": "2"
  },
  {
    "word": "算数",
    "reading": "さんすう",
    "meaning": "arithmetic",
    "level": "2"
  },
  {
    "word": "酸性",
    "reading": "さんせい",
    "meaning": "acidity acidic",
    "level": "2"
  },
  {
    "word": "産地",
    "reading": "さんち",
    "meaning": "producing area",
    "level": "2"
  },
  {
    "word": "サンプル",
    "reading": "サンプル",
    "meaning": "sample",
    "level": "2"
  },
  {
    "word": "山林",
    "reading": "さんりん",
    "meaning": "mountain forest",
    "level": "2"
  },
  {
    "word": "シーズン",
    "reading": "シーズン",
    "meaning": "season (sporting)",
    "level": "2"
  },
  {
    "word": "シーツ",
    "reading": "シーツ",
    "meaning": "sheet",
    "level": "2"
  },
  {
    "word": "仕上がる",
    "reading": "しあがる",
    "meaning": "to be finished",
    "level": "2"
  },
  {
    "word": "明明後日",
    "reading": "しあさって",
    "meaning": "two days after tomorrow",
    "level": "2"
  },
  {
    "word": "寺院",
    "reading": "じいん",
    "meaning": "temple",
    "level": "2"
  },
  {
    "word": "しいんと (する)",
    "reading": "しいんと (する)",
    "meaning": "silent (as the grave), (deathly) quiet",
    "level": "2"
  },
  {
    "word": "自衛",
    "reading": "じえい",
    "meaning": "self-defense",
    "level": "2"
  },
  {
    "word": "塩辛",
    "reading": "しおから",
    "meaning": "salty (taste)",
    "level": "2"
  },
  {
    "word": "塩辛い",
    "reading": "しおからい",
    "meaning": "salty (taste)",
    "level": "2"
  },
  {
    "word": "司会",
    "reading": "しかい",
    "meaning": "host, chairperson",
    "level": "2"
  },
  {
    "word": "しかく しかくい",
    "reading": "しかく しかくい",
    "meaning": "square",
    "level": "2"
  },
  {
    "word": "四角い",
    "reading": "しかくい",
    "meaning": "square",
    "level": "2"
  },
  {
    "word": "仕方がない",
    "reading": "しかたがない",
    "meaning": "it can't be helped, it's inevitable",
    "level": "2"
  },
  {
    "word": "時間割",
    "reading": "じかんわり",
    "meaning": "timetable, schedule",
    "level": "2"
  },
  {
    "word": "四季",
    "reading": "しき",
    "meaning": "four seasons",
    "level": "2"
  },
  {
    "word": "敷地",
    "reading": "しきち",
    "meaning": "site",
    "level": "2"
  },
  {
    "word": "敷く",
    "reading": "しく",
    "meaning": "to spread out, to lay out",
    "level": "2"
  },
  {
    "word": "茂る",
    "reading": "しげる",
    "meaning": "to grow thick",
    "level": "2"
  },
  {
    "word": "持参",
    "reading": "じさん",
    "meaning": "bringing, taking, carrying",
    "level": "2"
  },
  {
    "word": "磁石",
    "reading": "じしゃく",
    "meaning": "magnet",
    "level": "2"
  },
  {
    "word": "四捨五入",
    "reading": "ししゃごにゅう",
    "meaning": "rounding up (fractions)",
    "level": "2"
  },
  {
    "word": "始終",
    "reading": "しじゅう",
    "meaning": "continuously, always, constantly",
    "level": "2"
  },
  {
    "word": "自習",
    "reading": "じしゅう",
    "meaning": "self-study",
    "level": "2"
  },
  {
    "word": "静まる",
    "reading": "しずまる",
    "meaning": "to quieten down, to calm down",
    "level": "2"
  },
  {
    "word": "姿勢",
    "reading": "しせい",
    "meaning": "attitude; posture",
    "level": "2"
  },
  {
    "word": "自然科学",
    "reading": "しぜんかがく",
    "meaning": "natural science",
    "level": "2"
  },
  {
    "word": "時速",
    "reading": "じそく",
    "meaning": "speed (per hour)",
    "level": "2"
  },
  {
    "word": "子孫",
    "reading": "しそん",
    "meaning": "descendant, offspring",
    "level": "2"
  },
  {
    "word": "死体",
    "reading": "したい",
    "meaning": "corpse",
    "level": "2"
  },
  {
    "word": "下書き",
    "reading": "したがき",
    "meaning": "rough copy, draft",
    "level": "2"
  },
  {
    "word": "自宅",
    "reading": "じたく",
    "meaning": "one's own home (same as 自分の家 (じぶんのいえ))",
    "level": "2"
  },
  {
    "word": "下町",
    "reading": "したまち",
    "meaning": "old parts of town",
    "level": "2"
  },
  {
    "word": "自治",
    "reading": "じち",
    "meaning": "self-government, autonomy",
    "level": "2"
  },
  {
    "word": "室～",
    "reading": "しつ～",
    "meaning": "room",
    "level": "2"
  },
  {
    "word": "実感",
    "reading": "じっかん",
    "meaning": "feelings, realization",
    "level": "2"
  },
  {
    "word": "湿気",
    "reading": "しっき",
    "meaning": "moisture, humidity, dampness",
    "level": "2"
  },
  {
    "word": "しつこい",
    "reading": "しつこい",
    "meaning": "insistent, obstinate",
    "level": "2"
  },
  {
    "word": "実習",
    "reading": "じっしゅう",
    "meaning": "practice, training",
    "level": "2"
  },
  {
    "word": "実績",
    "reading": "じっせき",
    "meaning": "achievements, actual results",
    "level": "2"
  },
  {
    "word": "湿度",
    "reading": "しつど",
    "meaning": "level of humidity",
    "level": "2"
  },
  {
    "word": "執筆",
    "reading": "しっぴつ",
    "meaning": "writing",
    "level": "2"
  },
  {
    "word": "実物",
    "reading": "じつぶつ",
    "meaning": "an actual thing",
    "level": "2"
  },
  {
    "word": "しっぽ",
    "reading": "しっぽ",
    "meaning": "tail (animal)",
    "level": "2"
  },
  {
    "word": "実用",
    "reading": "じつよう",
    "meaning": "practical use, utility",
    "level": "2"
  },
  {
    "word": "実力",
    "reading": "じつりょく",
    "meaning": "(real) ability, true strength, merit, efficiency, competency",
    "level": "2"
  },
  {
    "word": "実例",
    "reading": "じつれい",
    "meaning": "example, instance",
    "level": "2"
  },
  {
    "word": "しつれいしました (かん)",
    "reading": "しつれいしました (かん)",
    "meaning": "Excuse me., I'm sorry.",
    "level": "2"
  },
  {
    "word": "失恋",
    "reading": "しつれん",
    "meaning": "broken heart, unrequited love",
    "level": "2"
  },
  {
    "word": "指定",
    "reading": "してい",
    "meaning": "designation, specification, assignment",
    "level": "2"
  },
  {
    "word": "私鉄",
    "reading": "してつ",
    "meaning": "private railway",
    "level": "2"
  },
  {
    "word": "児童",
    "reading": "じどう",
    "meaning": "children, juvenile",
    "level": "2"
  },
  {
    "word": "縛る",
    "reading": "しばる",
    "meaning": "to tie, to bind",
    "level": "2"
  },
  {
    "word": "地盤",
    "reading": "じばん",
    "meaning": "(the) ground",
    "level": "2"
  },
  {
    "word": "しびれる",
    "reading": "しびれる",
    "meaning": "to become numb",
    "level": "2"
  },
  {
    "word": "紙幣",
    "reading": "しへい",
    "meaning": "paper money, notes, bills",
    "level": "2"
  },
  {
    "word": "しぼむ",
    "reading": "しぼむ",
    "meaning": "to wither, to shrivel",
    "level": "2"
  },
  {
    "word": "萎む",
    "reading": "しぼむ",
    "meaning": "to wither (of flowers, dreams, etc.), to wilt",
    "level": "2"
  },
  {
    "word": "絞る",
    "reading": "しぼる",
    "meaning": "to press, to wring, to squeeze",
    "level": "2"
  },
  {
    "word": "縞",
    "reading": "しま",
    "meaning": "stripe",
    "level": "2"
  },
  {
    "word": "地味",
    "reading": "じみ",
    "meaning": "plain, simple, subdued, sober",
    "level": "2"
  },
  {
    "word": "しみじみ",
    "reading": "しみじみ",
    "meaning": "keenly, deeply, heartily",
    "level": "2"
  },
  {
    "word": "氏名",
    "reading": "しめい",
    "meaning": "full name",
    "level": "2"
  },
  {
    "word": "締切",
    "reading": "しめきり",
    "meaning": "deadline",
    "level": "2"
  },
  {
    "word": "締め切り",
    "reading": "しめきり",
    "meaning": "deadline, closing, cut-off, end",
    "level": "2"
  },
  {
    "word": "締め切る",
    "reading": "しめきる",
    "meaning": "to close, cancel",
    "level": "2"
  },
  {
    "word": "しめた (かん)",
    "reading": "しめた (かん)",
    "meaning": "I've got it, all right, fine",
    "level": "2"
  },
  {
    "word": "しめる",
    "reading": "しめる",
    "meaning": "to be wet, to become wet, to be damp",
    "level": "2"
  },
  {
    "word": "地面",
    "reading": "じめん",
    "meaning": "ground, earth's surface",
    "level": "2"
  },
  {
    "word": "ジャーナリスト",
    "reading": "ジャーナリスト",
    "meaning": "journalist",
    "level": "2"
  },
  {
    "word": "社会科学",
    "reading": "しゃかいかがく",
    "meaning": "social science",
    "level": "2"
  },
  {
    "word": "しゃがむ",
    "reading": "しゃがむ",
    "meaning": "to squat",
    "level": "2"
  },
  {
    "word": "蛇口",
    "reading": "じゃぐち",
    "meaning": "faucet, tap",
    "level": "2"
  },
  {
    "word": "弱点",
    "reading": "じゃくてん",
    "meaning": "weak point, weakness",
    "level": "2"
  },
  {
    "word": "車庫",
    "reading": "しゃこ",
    "meaning": "garage, car shed",
    "level": "2"
  },
  {
    "word": "車掌",
    "reading": "しゃしょう",
    "meaning": "(train) conductor",
    "level": "2"
  },
  {
    "word": "写生",
    "reading": "しゃせい",
    "meaning": "sketching, drawing from nature",
    "level": "2"
  },
  {
    "word": "社説",
    "reading": "しゃせつ",
    "meaning": "editorial",
    "level": "2"
  },
  {
    "word": "しゃっくり",
    "reading": "しゃっくり",
    "meaning": "hiccough, hiccup",
    "level": "2"
  },
  {
    "word": "シャッター",
    "reading": "シャッター",
    "meaning": "shutter",
    "level": "2"
  },
  {
    "word": "しゃぶる",
    "reading": "しゃぶる",
    "meaning": "to suck, to chew",
    "level": "2"
  },
  {
    "word": "車輪",
    "reading": "しゃりん",
    "meaning": "(car) wheel",
    "level": "2"
  },
  {
    "word": "洒落",
    "reading": "しゃれ",
    "meaning": "joke, pun, witticism",
    "level": "2"
  },
  {
    "word": "じゃんけん",
    "reading": "じゃんけん",
    "meaning": "rock-scissors-paper game",
    "level": "2"
  },
  {
    "word": "重～",
    "reading": "じゅう～",
    "meaning": "heavy ~",
    "level": "2"
  },
  {
    "word": "集会",
    "reading": "しゅうかい",
    "meaning": "meeting, assembly",
    "level": "2"
  },
  {
    "word": "住居",
    "reading": "じゅうきょ",
    "meaning": "dwelling, house, residence, address",
    "level": "2"
  },
  {
    "word": "集金",
    "reading": "しゅうきん",
    "meaning": "money collection",
    "level": "2"
  },
  {
    "word": "集合",
    "reading": "しゅうごう",
    "meaning": "gathering, assembly",
    "level": "2"
  },
  {
    "word": "習字",
    "reading": "しゅうじ",
    "meaning": "penmanship",
    "level": "2"
  },
  {
    "word": "修繕",
    "reading": "しゅうぜん",
    "meaning": "repair, mending",
    "level": "2"
  },
  {
    "word": "重体",
    "reading": "じゅうたい",
    "meaning": "serious condition, critical condition",
    "level": "2"
  },
  {
    "word": "じゅうたん (カーペット)",
    "reading": "じゅうたん (カーペット)",
    "meaning": "carpet",
    "level": "2"
  },
  {
    "word": "終点",
    "reading": "しゅうてん",
    "meaning": "terminus, last stop (e.g train)",
    "level": "2"
  },
  {
    "word": "重点",
    "reading": "じゅうてん",
    "meaning": "important point, lay stress on, emphasis",
    "level": "2"
  },
  {
    "word": "就任",
    "reading": "しゅうにん",
    "meaning": "inauguration, assumption of office",
    "level": "2"
  },
  {
    "word": "周辺",
    "reading": "しゅうへん",
    "meaning": "circumference, peripheral",
    "level": "2"
  },
  {
    "word": "重役",
    "reading": "じゅうやく",
    "meaning": "director, high executive",
    "level": "2"
  },
  {
    "word": "終了",
    "reading": "しゅうりょう",
    "meaning": "end, close, termination",
    "level": "2"
  },
  {
    "word": "重量",
    "reading": "じゅうりょう",
    "meaning": "heavyweight",
    "level": "2"
  },
  {
    "word": "重力",
    "reading": "じゅうりょく",
    "meaning": "gravity",
    "level": "2"
  },
  {
    "word": "熟語",
    "reading": "じゅくご",
    "meaning": "idiom, kanji compound",
    "level": "2"
  },
  {
    "word": "祝日",
    "reading": "しゅくじつ",
    "meaning": "national holiday",
    "level": "2"
  },
  {
    "word": "縮小",
    "reading": "しゅくしょう",
    "meaning": "reduction, curtailment",
    "level": "2"
  },
  {
    "word": "受験",
    "reading": "じゅけん",
    "meaning": "taking an examination",
    "level": "2"
  },
  {
    "word": "主語",
    "reading": "しゅご",
    "meaning": "(gram) subject",
    "level": "2"
  },
  {
    "word": "主人",
    "reading": "しゅじん",
    "meaning": "(one's own) husband",
    "level": "2"
  },
  {
    "word": "出勤",
    "reading": "しゅっきん",
    "meaning": "going to work, at work",
    "level": "2"
  },
  {
    "word": "述語",
    "reading": "じゅつご",
    "meaning": "predicate",
    "level": "2"
  },
  {
    "word": "出張",
    "reading": "しゅっちょう",
    "meaning": "official tour, business trip",
    "level": "2"
  },
  {
    "word": "寿命",
    "reading": "じゅみょう",
    "meaning": "life span",
    "level": "2"
  },
  {
    "word": "主役",
    "reading": "しゅやく",
    "meaning": "leading part",
    "level": "2"
  },
  {
    "word": "受話器",
    "reading": "じゅわき",
    "meaning": "(telephone) receiver",
    "level": "2"
  },
  {
    "word": "循環",
    "reading": "じゅんかん",
    "meaning": "circulation, rotation, cycle",
    "level": "2"
  },
  {
    "word": "巡査",
    "reading": "じゅんさ",
    "meaning": "policeman",
    "level": "2"
  },
  {
    "word": "順々",
    "reading": "じゅんじゅん",
    "meaning": "in order, in turn",
    "level": "2"
  },
  {
    "word": "順序",
    "reading": "じゅんじょ",
    "meaning": "order, sequence, procedure",
    "level": "2"
  },
  {
    "word": "純情",
    "reading": "じゅんじょう",
    "meaning": "pure heart",
    "level": "2"
  },
  {
    "word": "純粋",
    "reading": "じゅんすい",
    "meaning": "pure, genuine, unmixed",
    "level": "2"
  },
  {
    "word": "初～",
    "reading": "しょ～",
    "meaning": "first ~",
    "level": "2"
  },
  {
    "word": "諸～",
    "reading": "しょ～",
    "meaning": "various ~",
    "level": "2"
  },
  {
    "word": "女～",
    "reading": "じょ～",
    "meaning": "things done by women",
    "level": "2"
  },
  {
    "word": "省～",
    "reading": "しょう～",
    "meaning": "economizing ~",
    "level": "2"
  },
  {
    "word": "消化",
    "reading": "しょうか",
    "meaning": "digestion",
    "level": "2"
  },
  {
    "word": "小学生",
    "reading": "しょうがくせい",
    "meaning": "elementary school pupil",
    "level": "2"
  },
  {
    "word": "しょうがない",
    "reading": "しょうがない",
    "meaning": "It is not worth ~",
    "level": "2"
  },
  {
    "word": "将棋",
    "reading": "しょうぎ",
    "meaning": "Japanese chess",
    "level": "2"
  },
  {
    "word": "蒸気",
    "reading": "じょうき",
    "meaning": "steam, vapor",
    "level": "2"
  },
  {
    "word": "定規",
    "reading": "じょうぎ",
    "meaning": "(measuring) ruler",
    "level": "2"
  },
  {
    "word": "上級",
    "reading": "じょうきゅう",
    "meaning": "advanced level, high grade, senior",
    "level": "2"
  },
  {
    "word": "商業",
    "reading": "しょうぎょう",
    "meaning": "commerce, trade, business",
    "level": "2"
  },
  {
    "word": "消極的",
    "reading": "しょうきょくてき",
    "meaning": "passive",
    "level": "2"
  },
  {
    "word": "賞金",
    "reading": "しょうきん",
    "meaning": "prize, monetary award",
    "level": "2"
  },
  {
    "word": "上下",
    "reading": "じょうげ",
    "meaning": "high and low, up and down",
    "level": "2"
  },
  {
    "word": "障子",
    "reading": "しょうじ",
    "meaning": "paper sliding door",
    "level": "2"
  },
  {
    "word": "商社",
    "reading": "しょうしゃ",
    "meaning": "trading company",
    "level": "2"
  },
  {
    "word": "乗車",
    "reading": "じょうしゃ",
    "meaning": "taking a train, entraining",
    "level": "2"
  },
  {
    "word": "上旬",
    "reading": "じょうじゅん",
    "meaning": "first 10 days of month",
    "level": "2"
  },
  {
    "word": "小数",
    "reading": "しょうすう",
    "meaning": "fraction (part of), decimal",
    "level": "2"
  },
  {
    "word": "生ずる",
    "reading": "しょうずる",
    "meaning": "to cause, to arise, to be generated",
    "level": "2"
  },
  {
    "word": "商店",
    "reading": "しょうてん",
    "meaning": "shop, business firm",
    "level": "2"
  },
  {
    "word": "焦点",
    "reading": "しょうてん",
    "meaning": "focus, point",
    "level": "2"
  },
  {
    "word": "消毒",
    "reading": "しょうどく",
    "meaning": "disinfection",
    "level": "2"
  },
  {
    "word": "勝敗",
    "reading": "しょうはい",
    "meaning": "victory or defeat, issue (of battle)",
    "level": "2"
  },
  {
    "word": "蒸発",
    "reading": "じょうはつ",
    "meaning": "evaporation; unexplained disappearance",
    "level": "2"
  },
  {
    "word": "賞品",
    "reading": "しょうひん",
    "meaning": "prize, trophy",
    "level": "2"
  },
  {
    "word": "上品",
    "reading": "じょうひん",
    "meaning": "refined, elegant, well-mannered",
    "level": "2"
  },
  {
    "word": "勝負",
    "reading": "しょうぶ",
    "meaning": "victory or defeat, game",
    "level": "2"
  },
  {
    "word": "小便",
    "reading": "しょうべん",
    "meaning": "(col) urine, piss",
    "level": "2"
  },
  {
    "word": "消防署",
    "reading": "しょうぼうしょ",
    "meaning": "fire station",
    "level": "2"
  },
  {
    "word": "正味",
    "reading": "しょうみ",
    "meaning": "net (weight)",
    "level": "2"
  },
  {
    "word": "正面",
    "reading": "しょうめん",
    "meaning": "front",
    "level": "2"
  },
  {
    "word": "消耗",
    "reading": "しょうもう",
    "meaning": "exhaustion, consumption",
    "level": "2"
  },
  {
    "word": "省略",
    "reading": "しょうりゃく",
    "meaning": "omission, abbreviation, abridgment",
    "level": "2"
  },
  {
    "word": "初級",
    "reading": "しょきゅう",
    "meaning": "elementary level",
    "level": "2"
  },
  {
    "word": "助教授",
    "reading": "じょきょうじゅ",
    "meaning": "assistant professor",
    "level": "2"
  },
  {
    "word": "食塩",
    "reading": "しょくえん",
    "meaning": "table salt",
    "level": "2"
  },
  {
    "word": "職人",
    "reading": "しょくにん",
    "meaning": "artisan, craftsman",
    "level": "2"
  },
  {
    "word": "職場",
    "reading": "しょくば",
    "meaning": "workplace",
    "level": "2"
  },
  {
    "word": "初旬",
    "reading": "しょじゅん",
    "meaning": "first 10 days of the month",
    "level": "2"
  },
  {
    "word": "書籍",
    "reading": "しょせき",
    "meaning": "book, publication",
    "level": "2"
  },
  {
    "word": "食器",
    "reading": "しょっき",
    "meaning": "tableware",
    "level": "2"
  },
  {
    "word": "ショップ",
    "reading": "ショップ",
    "meaning": "a shop",
    "level": "2"
  },
  {
    "word": "書店",
    "reading": "しょてん",
    "meaning": "bookshop",
    "level": "2"
  },
  {
    "word": "書道",
    "reading": "しょどう",
    "meaning": "calligraphy",
    "level": "2"
  },
  {
    "word": "初歩",
    "reading": "しょほ",
    "meaning": "elements, rudiments",
    "level": "2"
  },
  {
    "word": "白髪",
    "reading": "しらが",
    "meaning": "white or grey hair, trendy hair bleaching",
    "level": "2"
  },
  {
    "word": "シリーズ",
    "reading": "シリーズ",
    "meaning": "series",
    "level": "2"
  },
  {
    "word": "知り合い",
    "reading": "しりあい",
    "meaning": "acquaintance",
    "level": "2"
  },
  {
    "word": "私立",
    "reading": "しりつ",
    "meaning": "private (establishment)",
    "level": "2"
  },
  {
    "word": "資料",
    "reading": "しりょう",
    "meaning": "materials, data",
    "level": "2"
  },
  {
    "word": "汁",
    "reading": "しる",
    "meaning": "juice, soup",
    "level": "2"
  },
  {
    "word": "素人",
    "reading": "しろうと",
    "meaning": "layman, amateur, novice",
    "level": "2"
  },
  {
    "word": "しわ (かおの～)",
    "reading": "しわ (かおの～)",
    "meaning": "wrinkles, creases",
    "level": "2"
  },
  {
    "word": "芯",
    "reading": "しん",
    "meaning": "core, heart, wick",
    "level": "2"
  },
  {
    "word": "新幹線",
    "reading": "しんかんせん",
    "meaning": "Shinkansen, \"Bullet Train\"",
    "level": "2"
  },
  {
    "word": "真空",
    "reading": "しんくう",
    "meaning": "vacuum",
    "level": "2"
  },
  {
    "word": "人事",
    "reading": "じんじ",
    "meaning": "human resources, personnel management",
    "level": "2"
  },
  {
    "word": "心身",
    "reading": "しんしん",
    "meaning": "mind and body",
    "level": "2"
  },
  {
    "word": "信ずる",
    "reading": "しんずる",
    "meaning": "to believe",
    "level": "2"
  },
  {
    "word": "申請",
    "reading": "しんせい",
    "meaning": "application, request, petition",
    "level": "2"
  },
  {
    "word": "人造",
    "reading": "じんぞう",
    "meaning": "man-made, synthetic, artificial",
    "level": "2"
  },
  {
    "word": "寝台",
    "reading": "しんだい",
    "meaning": "bed",
    "level": "2"
  },
  {
    "word": "診断",
    "reading": "しんだん",
    "meaning": "diagnosis",
    "level": "2"
  },
  {
    "word": "侵入",
    "reading": "しんにゅう",
    "meaning": "invasion, raid, trespass",
    "level": "2"
  },
  {
    "word": "人文科学",
    "reading": "じんぶんかがく",
    "meaning": "social sciences, humanities",
    "level": "2"
  },
  {
    "word": "人命",
    "reading": "じんめい",
    "meaning": "(human) life",
    "level": "2"
  },
  {
    "word": "深夜",
    "reading": "しんや",
    "meaning": "late at night",
    "level": "2"
  },
  {
    "word": "森林",
    "reading": "しんりん",
    "meaning": "forest, woods",
    "level": "2"
  },
  {
    "word": "親類",
    "reading": "しんるい",
    "meaning": "relative(s) (same as 親戚 (しんせき))",
    "level": "2"
  },
  {
    "word": "針路",
    "reading": "しんろ",
    "meaning": "course, direction",
    "level": "2"
  },
  {
    "word": "神話",
    "reading": "しんわ",
    "meaning": "myth, legend",
    "level": "2"
  },
  {
    "word": "酢",
    "reading": "す",
    "meaning": "vinegar",
    "level": "2"
  },
  {
    "word": "水産",
    "reading": "すいさん",
    "meaning": "marine products, fisheries",
    "level": "2"
  },
  {
    "word": "炊事",
    "reading": "すいじ",
    "meaning": "cooking",
    "level": "2"
  },
  {
    "word": "水蒸気",
    "reading": "すいじょうき",
    "meaning": "water vapor, steam",
    "level": "2"
  },
  {
    "word": "水素",
    "reading": "すいそ",
    "meaning": "hydrogen",
    "level": "2"
  },
  {
    "word": "垂直",
    "reading": "すいちょく",
    "meaning": "vertical, perpendicular",
    "level": "2"
  },
  {
    "word": "推定",
    "reading": "すいてい",
    "meaning": "presumption, assumption, estimation",
    "level": "2"
  },
  {
    "word": "水滴",
    "reading": "すいてき",
    "meaning": "drop of water",
    "level": "2"
  },
  {
    "word": "水筒",
    "reading": "すいとう",
    "meaning": "canteen, flask, water bottle",
    "level": "2"
  },
  {
    "word": "随筆",
    "reading": "ずいひつ",
    "meaning": "essays, miscellaneous writings",
    "level": "2"
  },
  {
    "word": "水分",
    "reading": "すいぶん",
    "meaning": "moisture",
    "level": "2"
  },
  {
    "word": "水平",
    "reading": "すいへい",
    "meaning": "level, horizontal",
    "level": "2"
  },
  {
    "word": "水平線",
    "reading": "すいへいせん",
    "meaning": "horizon",
    "level": "2"
  },
  {
    "word": "水面",
    "reading": "すいめん",
    "meaning": "water's surface",
    "level": "2"
  },
  {
    "word": "水曜",
    "reading": "すいよう",
    "meaning": "Wednesday",
    "level": "2"
  },
  {
    "word": "図々しい",
    "reading": "ずうずうしい",
    "meaning": "impudent, shameless",
    "level": "2"
  },
  {
    "word": "ずうっと",
    "reading": "ずうっと",
    "meaning": "all the time, all the way",
    "level": "2"
  },
  {
    "word": "末っ子",
    "reading": "すえっこ",
    "meaning": "youngest child",
    "level": "2"
  },
  {
    "word": "スカーフ",
    "reading": "スカーフ",
    "meaning": "scarf",
    "level": "2"
  },
  {
    "word": "図鑑",
    "reading": "ずかん",
    "meaning": "picture book",
    "level": "2"
  },
  {
    "word": "隙",
    "reading": "すき",
    "meaning": "unguarded moment, chance",
    "level": "2"
  },
  {
    "word": "杉",
    "reading": "すぎ",
    "meaning": "Japanese cedar",
    "level": "2"
  },
  {
    "word": "好き嫌い",
    "reading": "すききらい",
    "meaning": "likes and dislikes, taste",
    "level": "2"
  },
  {
    "word": "好き好き",
    "reading": "すきずき",
    "meaning": "matter of taste",
    "level": "2"
  },
  {
    "word": "透き通る",
    "reading": "すきとおる",
    "meaning": "to be(come) transparent",
    "level": "2"
  },
  {
    "word": "隙間",
    "reading": "すきま",
    "meaning": "crack, gap, opening",
    "level": "2"
  },
  {
    "word": "スクール",
    "reading": "スクール",
    "meaning": "school",
    "level": "2"
  },
  {
    "word": "少なくとも",
    "reading": "すくなくとも",
    "meaning": "at least",
    "level": "2"
  },
  {
    "word": "図形",
    "reading": "ずけい",
    "meaning": "figure",
    "level": "2"
  },
  {
    "word": "鈴",
    "reading": "すず",
    "meaning": "bell",
    "level": "2"
  },
  {
    "word": "涼む",
    "reading": "すずむ",
    "meaning": "to cool oneself, to cool off",
    "level": "2"
  },
  {
    "word": "スタート",
    "reading": "スタート",
    "meaning": "start",
    "level": "2"
  },
  {
    "word": "スチュワーデス",
    "reading": "スチュワーデス",
    "meaning": "stewardess",
    "level": "2"
  },
  {
    "word": "すっきり",
    "reading": "すっきり",
    "meaning": "shapely, clear, neat",
    "level": "2"
  },
  {
    "word": "ステージ",
    "reading": "ステージ",
    "meaning": "stage; performance",
    "level": "2"
  },
  {
    "word": "ストッキング",
    "reading": "ストッキング",
    "meaning": "stockings",
    "level": "2"
  },
  {
    "word": "ストップ",
    "reading": "ストップ",
    "meaning": "stop",
    "level": "2"
  },
  {
    "word": "素直",
    "reading": "すなお",
    "meaning": "obedient, meek, docile",
    "level": "2"
  },
  {
    "word": "頭脳",
    "reading": "ずのう",
    "meaning": "head, brains, intellect",
    "level": "2"
  },
  {
    "word": "スピーカー",
    "reading": "スピーカー",
    "meaning": "speaker",
    "level": "2"
  },
  {
    "word": "図表",
    "reading": "ずひょう",
    "meaning": "chart, diagram, graph",
    "level": "2"
  },
  {
    "word": "スマート",
    "reading": "スマート",
    "meaning": "smart, stylish, slim",
    "level": "2"
  },
  {
    "word": "住まい",
    "reading": "すまい",
    "meaning": "dwelling, house",
    "level": "2"
  },
  {
    "word": "すまない",
    "reading": "すまない",
    "meaning": "sorry (phrase)",
    "level": "2"
  },
  {
    "word": "相撲",
    "reading": "すもう",
    "meaning": "sumo wrestling",
    "level": "2"
  },
  {
    "word": "スライド",
    "reading": "スライド",
    "meaning": "slide",
    "level": "2"
  },
  {
    "word": "ずらす",
    "reading": "ずらす",
    "meaning": "to put off, to delay",
    "level": "2"
  },
  {
    "word": "ずらり",
    "reading": "ずらり",
    "meaning": "in a line, in a row",
    "level": "2"
  },
  {
    "word": "スリッパ",
    "reading": "スリッパ",
    "meaning": "slippers",
    "level": "2"
  },
  {
    "word": "する",
    "reading": "する",
    "meaning": "to print",
    "level": "2"
  },
  {
    "word": "狡い",
    "reading": "ずるい",
    "meaning": "sly, cunning",
    "level": "2"
  },
  {
    "word": "寸法",
    "reading": "すんぽう",
    "meaning": "measurement, size, dimension",
    "level": "2"
  },
  {
    "word": "姓",
    "reading": "せい",
    "meaning": "surname, family name",
    "level": "2"
  },
  {
    "word": "税関",
    "reading": "ぜいかん",
    "meaning": "customs",
    "level": "2"
  },
  {
    "word": "製作",
    "reading": "せいさく",
    "meaning": "manufacture, production",
    "level": "2"
  },
  {
    "word": "制作",
    "reading": "せいさく",
    "meaning": "work (e.g., film, book)",
    "level": "2"
  },
  {
    "word": "性質",
    "reading": "せいしつ",
    "meaning": "nature, property, disposition",
    "level": "2"
  },
  {
    "word": "清書",
    "reading": "せいしょ",
    "meaning": "clean copy",
    "level": "2"
  },
  {
    "word": "青少年",
    "reading": "せいしょうねん",
    "meaning": "youth, young person",
    "level": "2"
  },
  {
    "word": "整数",
    "reading": "せいすう",
    "meaning": "integer",
    "level": "2"
  },
  {
    "word": "清掃",
    "reading": "せいそう",
    "meaning": "cleaning",
    "level": "2"
  },
  {
    "word": "生存",
    "reading": "せいぞん",
    "meaning": "existence, being, survival",
    "level": "2"
  },
  {
    "word": "生長",
    "reading": "せいちょう",
    "meaning": "growth (of a plant)",
    "level": "2"
  },
  {
    "word": "政党",
    "reading": "せいとう",
    "meaning": "(member of) political party",
    "level": "2"
  },
  {
    "word": "生年月日",
    "reading": "せいねんがっぴ",
    "meaning": "date of birth",
    "level": "2"
  },
  {
    "word": "性能",
    "reading": "せいのう",
    "meaning": "ability, capability",
    "level": "2"
  },
  {
    "word": "整備",
    "reading": "せいび",
    "meaning": "maintenance, overhaul",
    "level": "2"
  },
  {
    "word": "成分",
    "reading": "せいぶん",
    "meaning": "ingredient, component, composition",
    "level": "2"
  },
  {
    "word": "性別",
    "reading": "せいべつ",
    "meaning": "sex, gender",
    "level": "2"
  },
  {
    "word": "正方形",
    "reading": "せいほうけい",
    "meaning": "square",
    "level": "2"
  },
  {
    "word": "正門",
    "reading": "せいもん",
    "meaning": "main gate, main entrance",
    "level": "2"
  },
  {
    "word": "成立",
    "reading": "せいりつ",
    "meaning": "formation, establishment, completion",
    "level": "2"
  },
  {
    "word": "西暦",
    "reading": "せいれき",
    "meaning": "Christian Era, after (Christ’s) death (A.D.)",
    "level": "2"
  },
  {
    "word": "背負う",
    "reading": "せおう",
    "meaning": "to be burdened with; to carry on (one's) back or shoulder(s)",
    "level": "2"
  },
  {
    "word": "赤道",
    "reading": "せきどう",
    "meaning": "equator",
    "level": "2"
  },
  {
    "word": "折角",
    "reading": "せっかく",
    "meaning": "with trouble, at great pains, long-awaited",
    "level": "2"
  },
  {
    "word": "接近",
    "reading": "せっきん",
    "meaning": "getting closer, drawing nearer, approaching",
    "level": "2"
  },
  {
    "word": "接する",
    "reading": "せっする",
    "meaning": "to attend to (someone); to associate with",
    "level": "2"
  },
  {
    "word": "せっせと",
    "reading": "せっせと",
    "meaning": "busily, away",
    "level": "2"
  },
  {
    "word": "接続",
    "reading": "せつぞく",
    "meaning": "connection, union, join, link; changing trains",
    "level": "2"
  },
  {
    "word": "瀬戸物",
    "reading": "せともの",
    "meaning": "earthenware, crockery, china",
    "level": "2"
  },
  {
    "word": "ぜひとも",
    "reading": "ぜひとも",
    "meaning": "by all means (with sense of not taking 'no' for an answer)",
    "level": "2"
  },
  {
    "word": "迫る",
    "reading": "せまる",
    "meaning": "to draw near, to press",
    "level": "2"
  },
  {
    "word": "ゼミ",
    "reading": "ゼミ",
    "meaning": "seminar",
    "level": "2"
  },
  {
    "word": "せめて",
    "reading": "せめて",
    "meaning": "at least",
    "level": "2"
  },
  {
    "word": "攻める",
    "reading": "せめる",
    "meaning": "to attack, to assault, to assail",
    "level": "2"
  },
  {
    "word": "セメント",
    "reading": "セメント",
    "meaning": "cement",
    "level": "2"
  },
  {
    "word": "台詞",
    "reading": "せりふ",
    "meaning": "speech, words, one's lines, remarks",
    "level": "2"
  },
  {
    "word": "栓",
    "reading": "せん",
    "meaning": "stopper, cork, stopcock",
    "level": "2"
  },
  {
    "word": "前～",
    "reading": "ぜん～",
    "meaning": "former, late ~, past ~",
    "level": "2"
  },
  {
    "word": "前後",
    "reading": "ぜんご",
    "meaning": "front and back, before and after",
    "level": "2"
  },
  {
    "word": "洗剤",
    "reading": "せんざい",
    "meaning": "detergent, cleanser, cleaning agent, washing material",
    "level": "2"
  },
  {
    "word": "全集",
    "reading": "ぜんしゅう",
    "meaning": "complete works",
    "level": "2"
  },
  {
    "word": "全身",
    "reading": "ぜんしん",
    "meaning": "whole (body), full-length (e.g., portrait) systemic",
    "level": "2"
  },
  {
    "word": "扇子",
    "reading": "せんす",
    "meaning": "folding fan",
    "level": "2"
  },
  {
    "word": "専制",
    "reading": "せんせい",
    "meaning": "despotism, autocracy",
    "level": "2"
  },
  {
    "word": "先々月",
    "reading": "せんせんげつ",
    "meaning": "month before last",
    "level": "2"
  },
  {
    "word": "先々週",
    "reading": "せんせんしゅう",
    "meaning": "2 weeks before",
    "level": "2"
  },
  {
    "word": "先祖",
    "reading": "せんぞ",
    "meaning": "ancestor",
    "level": "2"
  },
  {
    "word": "先端",
    "reading": "せんたん",
    "meaning": "pointed end, tip",
    "level": "2"
  },
  {
    "word": "センチ",
    "reading": "センチ",
    "meaning": "centimeter",
    "level": "2"
  },
  {
    "word": "宣伝",
    "reading": "せんでん",
    "meaning": "publicity, advertisement, advertising, propaganda",
    "level": "2"
  },
  {
    "word": "先頭",
    "reading": "せんとう",
    "meaning": "head, lead, vanguard",
    "level": "2"
  },
  {
    "word": "全般",
    "reading": "ぜんぱん",
    "meaning": "(the) whole, general",
    "level": "2"
  },
  {
    "word": "扇風機",
    "reading": "せんぷうき",
    "meaning": "electric fan",
    "level": "2"
  },
  {
    "word": "洗面",
    "reading": "せんめん",
    "meaning": "wash up (one's face), have a wash",
    "level": "2"
  },
  {
    "word": "全力",
    "reading": "ぜんりょく",
    "meaning": "all one's power, whole energy",
    "level": "2"
  },
  {
    "word": "線路",
    "reading": "せんろ",
    "meaning": "line, track, roadbed",
    "level": "2"
  },
  {
    "word": "総～",
    "reading": "そう～",
    "meaning": "gross, general, entire",
    "level": "2"
  },
  {
    "word": "相違",
    "reading": "そうい",
    "meaning": "difference, discrepancy, variation",
    "level": "2"
  },
  {
    "word": "そういえば",
    "reading": "そういえば",
    "meaning": "which reminds me ..",
    "level": "2"
  },
  {
    "word": "雑巾",
    "reading": "ぞうきん",
    "meaning": "house-cloth, dust cloth",
    "level": "2"
  },
  {
    "word": "増減",
    "reading": "ぞうげん",
    "meaning": "increase and decrease, fluctuation",
    "level": "2"
  },
  {
    "word": "倉庫",
    "reading": "そうこ",
    "meaning": "storehouse, warehouse",
    "level": "2"
  },
  {
    "word": "相互",
    "reading": "そうご",
    "meaning": "mutual, reciprocal",
    "level": "2"
  },
  {
    "word": "創作",
    "reading": "そうさく",
    "meaning": "production, creation, work",
    "level": "2"
  },
  {
    "word": "葬式",
    "reading": "そうしき",
    "meaning": "funeral",
    "level": "2"
  },
  {
    "word": "造船",
    "reading": "ぞうせん",
    "meaning": "shipbuilding",
    "level": "2"
  },
  {
    "word": "騒々しい",
    "reading": "そうぞうしい",
    "meaning": "noisy, boisterous",
    "level": "2"
  },
  {
    "word": "増大",
    "reading": "ぞうだい",
    "meaning": "increase, growth",
    "level": "2"
  },
  {
    "word": "そうっと",
    "reading": "そうっと",
    "meaning": "softly, cautiously, gently",
    "level": "2"
  },
  {
    "word": "送別",
    "reading": "そうべつ",
    "meaning": "farewell, send-off",
    "level": "2"
  },
  {
    "word": "草履",
    "reading": "ぞうり",
    "meaning": "Japanese sandals (footwear)",
    "level": "2"
  },
  {
    "word": "総理大臣",
    "reading": "そうりだいじん",
    "meaning": "Prime Minister",
    "level": "2"
  },
  {
    "word": "送料",
    "reading": "そうりょう",
    "meaning": "postage, carriage",
    "level": "2"
  },
  {
    "word": "属する",
    "reading": "ぞくする",
    "meaning": "to belong to, to come under",
    "level": "2"
  },
  {
    "word": "続々",
    "reading": "ぞくぞく",
    "meaning": "successively, one after another",
    "level": "2"
  },
  {
    "word": "速達",
    "reading": "そくたつ",
    "meaning": "express, special delivery",
    "level": "2"
  },
  {
    "word": "測定",
    "reading": "そくてい",
    "meaning": "measurement",
    "level": "2"
  },
  {
    "word": "測量",
    "reading": "そくりょう",
    "meaning": "measurement, surveying",
    "level": "2"
  },
  {
    "word": "速力",
    "reading": "そくりょく",
    "meaning": "speed",
    "level": "2"
  },
  {
    "word": "素質",
    "reading": "そしつ",
    "meaning": "talent, capability",
    "level": "2"
  },
  {
    "word": "祖先",
    "reading": "そせん",
    "meaning": "ancestor(s)",
    "level": "2"
  },
  {
    "word": "そそっかしい",
    "reading": "そそっかしい",
    "meaning": "careless, thoughtless",
    "level": "2"
  },
  {
    "word": "卒直",
    "reading": "そっちょく",
    "meaning": "frank, candid, honest",
    "level": "2"
  },
  {
    "word": "率直",
    "reading": "そっちょく",
    "meaning": "frank, candid, straightforward, openhearted, direct, outspoken",
    "level": "2"
  },
  {
    "word": "そのころ",
    "reading": "そのころ",
    "meaning": "in those days, at that time, then",
    "level": "2"
  },
  {
    "word": "そのため",
    "reading": "そのため",
    "meaning": "hence, for that reason",
    "level": "2"
  },
  {
    "word": "その他",
    "reading": "そのほか",
    "meaning": "besides",
    "level": "2"
  },
  {
    "word": "そば",
    "reading": "そば",
    "meaning": "soba (buckwheat noodles)",
    "level": "2"
  },
  {
    "word": "剃る",
    "reading": "そる",
    "meaning": "to shave",
    "level": "2"
  },
  {
    "word": "それなのに",
    "reading": "それなのに",
    "meaning": "though, although",
    "level": "2"
  },
  {
    "word": "それなら",
    "reading": "それなら",
    "meaning": "If that's the case..., If so..., That being the case...",
    "level": "2"
  },
  {
    "word": "それはいけませんね (かん)",
    "reading": "それはいけませんね (かん)",
    "meaning": "that's not good",
    "level": "2"
  },
  {
    "word": "逸れる",
    "reading": "それる",
    "meaning": "to stray (turn) from subject, to go astray",
    "level": "2"
  },
  {
    "word": "揃える",
    "reading": "そろえる",
    "meaning": "to collect, to gather, to get together, to complete (a collection) to arrange, to put in order, to prepare, to get ready to make uniform, to make even, to match",
    "level": "2"
  },
  {
    "word": "算盤",
    "reading": "そろばん",
    "meaning": "abacus",
    "level": "2"
  },
  {
    "word": "存じる",
    "reading": "ぞんじる",
    "meaning": "(humble) to know",
    "level": "2"
  },
  {
    "word": "存ずる",
    "reading": "ぞんずる",
    "meaning": "(humble) to know",
    "level": "2"
  },
  {
    "word": "損得",
    "reading": "そんとく",
    "meaning": "loss and gain, advantage and disadvantage",
    "level": "2"
  },
  {
    "word": "第～",
    "reading": "だい～",
    "meaning": "~th",
    "level": "2"
  },
  {
    "word": "タイア",
    "reading": "タイア",
    "meaning": "tire, tyre",
    "level": "2"
  },
  {
    "word": "だいいち (とりわけ)",
    "reading": "だいいち (とりわけ)",
    "meaning": "first, foremost,&nbsp;&nbsp;#1",
    "level": "2"
  },
  {
    "word": "大学院",
    "reading": "だいがくいん",
    "meaning": "graduate school",
    "level": "2"
  },
  {
    "word": "大工",
    "reading": "だいく",
    "meaning": "carpenter",
    "level": "2"
  },
  {
    "word": "体系",
    "reading": "たいけい",
    "meaning": "system, organization",
    "level": "2"
  },
  {
    "word": "太鼓",
    "reading": "たいこ",
    "meaning": "drum, tambourine",
    "level": "2"
  },
  {
    "word": "対策",
    "reading": "たいさく",
    "meaning": "counter-plan, counter-measure",
    "level": "2"
  },
  {
    "word": "大して",
    "reading": "たいして",
    "meaning": "(not so) much, (not) very",
    "level": "2"
  },
  {
    "word": "対照",
    "reading": "たいしょう",
    "meaning": "contrast, antithesis, comparison",
    "level": "2"
  },
  {
    "word": "大小",
    "reading": "だいしょう",
    "meaning": "size",
    "level": "2"
  },
  {
    "word": "体制",
    "reading": "たいせい",
    "meaning": "order, system, structure",
    "level": "2"
  },
  {
    "word": "体積",
    "reading": "たいせき",
    "meaning": "capacity, volume",
    "level": "2"
  },
  {
    "word": "大層",
    "reading": "たいそう",
    "meaning": "very much, greatly",
    "level": "2"
  },
  {
    "word": "体操",
    "reading": "たいそう",
    "meaning": "gymnastics, physical exercises, calisthenics",
    "level": "2"
  },
  {
    "word": "大分",
    "reading": "だいぶん",
    "meaning": "considerably, greatly, a lot",
    "level": "2"
  },
  {
    "word": "大木",
    "reading": "たいぼく",
    "meaning": "large tree",
    "level": "2"
  },
  {
    "word": "題名",
    "reading": "だいめい",
    "meaning": "title, caption, heading",
    "level": "2"
  },
  {
    "word": "代名詞",
    "reading": "だいめいし",
    "meaning": "pronoun",
    "level": "2"
  },
  {
    "word": "ダイヤグラム",
    "reading": "ダイヤグラム",
    "meaning": "diagram",
    "level": "2"
  },
  {
    "word": "ダイヤモンド",
    "reading": "ダイヤモンド",
    "meaning": "diamond",
    "level": "2"
  },
  {
    "word": "ダイヤル",
    "reading": "ダイヤル",
    "meaning": "dial",
    "level": "2"
  },
  {
    "word": "対立",
    "reading": "たいりつ",
    "meaning": "confrontation, opposition, antagonism",
    "level": "2"
  },
  {
    "word": "田植え",
    "reading": "たうえ",
    "meaning": "rice planting",
    "level": "2"
  },
  {
    "word": "絶えず",
    "reading": "たえず",
    "meaning": "constantly",
    "level": "2"
  },
  {
    "word": "楕円",
    "reading": "だえん",
    "meaning": "ellipse",
    "level": "2"
  },
  {
    "word": "高める",
    "reading": "たかめる",
    "meaning": "to raise, to lift, to boost, to enhance",
    "level": "2"
  },
  {
    "word": "耕す",
    "reading": "たがやす",
    "meaning": "to till, to plow, to cultivate",
    "level": "2"
  },
  {
    "word": "滝",
    "reading": "たき",
    "meaning": "waterfall",
    "level": "2"
  },
  {
    "word": "蓄える",
    "reading": "たくわえる",
    "meaning": "to save, to store, to lay in stock",
    "level": "2"
  },
  {
    "word": "竹",
    "reading": "たけ",
    "meaning": "bamboo",
    "level": "2"
  },
  {
    "word": "ただいま",
    "reading": "ただいま",
    "meaning": "Here I am, I'm home!",
    "level": "2"
  },
  {
    "word": "但し",
    "reading": "ただし",
    "meaning": "but, however, provided that",
    "level": "2"
  },
  {
    "word": "畳む",
    "reading": "たたむ",
    "meaning": "to fold (e.g., clothes, umbrella)",
    "level": "2"
  },
  {
    "word": "立ち止まる",
    "reading": "たちどまる",
    "meaning": "to stop, to halt, to stand still",
    "level": "2"
  },
  {
    "word": "たちまち",
    "reading": "たちまち",
    "meaning": "instantly, suddenly, all at once",
    "level": "2"
  },
  {
    "word": "建つ",
    "reading": "たつ",
    "meaning": "to be erected, to be built",
    "level": "2"
  },
  {
    "word": "脱線",
    "reading": "だっせん",
    "meaning": "derailment, digression",
    "level": "2"
  },
  {
    "word": "妥当",
    "reading": "だとう",
    "meaning": "proper, appropriate",
    "level": "2"
  },
  {
    "word": "例える",
    "reading": "たとえる",
    "meaning": "to compare, to liken",
    "level": "2"
  },
  {
    "word": "頼もしい",
    "reading": "たのもしい",
    "meaning": "reliable, promising",
    "level": "2"
  },
  {
    "word": "足袋",
    "reading": "たび",
    "meaning": "tabi, Japanese socks (with split toe)",
    "level": "2"
  },
  {
    "word": "ダブル",
    "reading": "ダブル",
    "meaning": "double",
    "level": "2"
  },
  {
    "word": "ダム",
    "reading": "ダム",
    "meaning": "dam",
    "level": "2"
  },
  {
    "word": "溜息",
    "reading": "ためいき",
    "meaning": "a sigh",
    "level": "2"
  },
  {
    "word": "ためらう",
    "reading": "ためらう",
    "meaning": "to be hesitant",
    "level": "2"
  },
  {
    "word": "だらしない",
    "reading": "だらしない",
    "meaning": "slovenly, loose, a slut",
    "level": "2"
  },
  {
    "word": "足る",
    "reading": "たる",
    "meaning": "to be sufficient, to be enough",
    "level": "2"
  },
  {
    "word": "短～",
    "reading": "たん～",
    "meaning": "short ~",
    "level": "2"
  },
  {
    "word": "段階",
    "reading": "だんかい",
    "meaning": "gradation, grade, stage",
    "level": "2"
  },
  {
    "word": "短期",
    "reading": "たんき",
    "meaning": "short term",
    "level": "2"
  },
  {
    "word": "炭鉱",
    "reading": "たんこう",
    "meaning": "coal mine, coal pit",
    "level": "2"
  },
  {
    "word": "短所",
    "reading": "たんしょ",
    "meaning": "defect, weak point; disadvantage",
    "level": "2"
  },
  {
    "word": "たんす",
    "reading": "たんす",
    "meaning": "chest of drawers",
    "level": "2"
  },
  {
    "word": "淡水",
    "reading": "たんすい",
    "meaning": "fresh water",
    "level": "2"
  },
  {
    "word": "断水",
    "reading": "だんすい",
    "meaning": "water outage",
    "level": "2"
  },
  {
    "word": "単数",
    "reading": "たんすう",
    "meaning": "singular (number)",
    "level": "2"
  },
  {
    "word": "団地",
    "reading": "だんち",
    "meaning": "housing complex",
    "level": "2"
  },
  {
    "word": "断定",
    "reading": "だんてい",
    "meaning": "conclusion, decision",
    "level": "2"
  },
  {
    "word": "短編",
    "reading": "たんぺん",
    "meaning": "short (e.g., story, film)",
    "level": "2"
  },
  {
    "word": "田ぼ",
    "reading": "たんぼ",
    "meaning": "paddy field, farm",
    "level": "2"
  },
  {
    "word": "誓う",
    "reading": "ちかう",
    "meaning": "to swear, to vow",
    "level": "2"
  },
  {
    "word": "地下水",
    "reading": "ちかすい",
    "meaning": "underground water",
    "level": "2"
  },
  {
    "word": "近々",
    "reading": "ちかぢか",
    "meaning": "soon, before long",
    "level": "2"
  },
  {
    "word": "近付ける",
    "reading": "ちかづける",
    "meaning": "to bring near, to put close, to let come near",
    "level": "2"
  },
  {
    "word": "近寄る",
    "reading": "ちかよる",
    "meaning": "to approach, to draw near",
    "level": "2"
  },
  {
    "word": "力強い",
    "reading": "ちからづよい",
    "meaning": "powerful, strong, vigorous",
    "level": "2"
  },
  {
    "word": "ちぎる",
    "reading": "ちぎる",
    "meaning": "to cut up fine, to pick (fruit)",
    "level": "2"
  },
  {
    "word": "地質",
    "reading": "ちしつ",
    "meaning": "geological features",
    "level": "2"
  },
  {
    "word": "知人",
    "reading": "ちじん",
    "meaning": "friend, acquaintance",
    "level": "2"
  },
  {
    "word": "地帯",
    "reading": "ちたい",
    "meaning": "area, zone",
    "level": "2"
  },
  {
    "word": "縮む",
    "reading": "ちぢむ",
    "meaning": "to shrink, to be contracted",
    "level": "2"
  },
  {
    "word": "縮める",
    "reading": "ちぢめる",
    "meaning": "to shorten, to reduce, to shrink",
    "level": "2"
  },
  {
    "word": "縮れる",
    "reading": "ちぢれる",
    "meaning": "to be wavy, to be curled",
    "level": "2"
  },
  {
    "word": "チップ",
    "reading": "チップ",
    "meaning": "gratuity, tip; chip",
    "level": "2"
  },
  {
    "word": "地点",
    "reading": "ちてん",
    "meaning": "site, point on a map",
    "level": "2"
  },
  {
    "word": "地名",
    "reading": "ちめい",
    "meaning": "place name",
    "level": "2"
  },
  {
    "word": "茶色い",
    "reading": "ちゃいろい",
    "meaning": "brown",
    "level": "2"
  },
  {
    "word": "着々",
    "reading": "ちゃくちゃく",
    "meaning": "steadily",
    "level": "2"
  },
  {
    "word": "中間",
    "reading": "ちゅうかん",
    "meaning": "middle, midway, interim",
    "level": "2"
  },
  {
    "word": "中旬",
    "reading": "ちゅうじゅん",
    "meaning": "second third of a month",
    "level": "2"
  },
  {
    "word": "抽象",
    "reading": "ちゅうしょう",
    "meaning": "abstract",
    "level": "2"
  },
  {
    "word": "中世",
    "reading": "ちゅうせい",
    "meaning": "Middle Ages, medieval times",
    "level": "2"
  },
  {
    "word": "中性",
    "reading": "ちゅうせい",
    "meaning": "neuter gender, neutral",
    "level": "2"
  },
  {
    "word": "中途",
    "reading": "ちゅうと",
    "meaning": "in the middle, half-way",
    "level": "2"
  },
  {
    "word": "中年",
    "reading": "ちゅうねん",
    "meaning": "middle-aged",
    "level": "2"
  },
  {
    "word": "チョーク",
    "reading": "チョーク",
    "meaning": "chalk",
    "level": "2"
  },
  {
    "word": "長～",
    "reading": "ちょう～",
    "meaning": "long ~",
    "level": "2"
  },
  {
    "word": "超過",
    "reading": "ちょうか",
    "meaning": "excess, being more than",
    "level": "2"
  },
  {
    "word": "彫刻",
    "reading": "ちょうこく",
    "meaning": "carving, engraving, sculpture",
    "level": "2"
  },
  {
    "word": "長所",
    "reading": "ちょうしょ",
    "meaning": "strong point, merit; advantage",
    "level": "2"
  },
  {
    "word": "長女",
    "reading": "ちょうじょ",
    "meaning": "eldest daughter",
    "level": "2"
  },
  {
    "word": "調整",
    "reading": "ちょうせい",
    "meaning": "regulation, adjustment, tuning",
    "level": "2"
  },
  {
    "word": "調節",
    "reading": "ちょうせつ",
    "meaning": "regulation, adjustment, control",
    "level": "2"
  },
  {
    "word": "長短",
    "reading": "ちょうたん",
    "meaning": "length, long and short, +-",
    "level": "2"
  },
  {
    "word": "頂点",
    "reading": "ちょうてん",
    "meaning": "top, summit",
    "level": "2"
  },
  {
    "word": "長男",
    "reading": "ちょうなん",
    "meaning": "eldest son",
    "level": "2"
  },
  {
    "word": "長方形",
    "reading": "ちょうほうけい",
    "meaning": "rectangle, oblong",
    "level": "2"
  },
  {
    "word": "調味料",
    "reading": "ちょうみりょう",
    "meaning": "condiment, seasoning",
    "level": "2"
  },
  {
    "word": "直後",
    "reading": "ちょくご",
    "meaning": "immediately following",
    "level": "2"
  },
  {
    "word": "直線",
    "reading": "ちょくせん",
    "meaning": "straight line",
    "level": "2"
  },
  {
    "word": "直前",
    "reading": "ちょくぜん",
    "meaning": "just before",
    "level": "2"
  },
  {
    "word": "直通",
    "reading": "ちょくつう",
    "meaning": "direct connection",
    "level": "2"
  },
  {
    "word": "直流",
    "reading": "ちょくりゅう",
    "meaning": "direct current",
    "level": "2"
  },
  {
    "word": "貯蔵",
    "reading": "ちょぞう",
    "meaning": "storage, preservation",
    "level": "2"
  },
  {
    "word": "直角",
    "reading": "ちょっかく",
    "meaning": "right angle",
    "level": "2"
  },
  {
    "word": "直径",
    "reading": "ちょっけい",
    "meaning": "diameter",
    "level": "2"
  },
  {
    "word": "散らかす",
    "reading": "ちらかす",
    "meaning": "to scatter around, to leave untidy",
    "level": "2"
  },
  {
    "word": "散らかる",
    "reading": "ちらかる",
    "meaning": "to be in disorder",
    "level": "2"
  },
  {
    "word": "塵紙",
    "reading": "ちりがみ",
    "meaning": "tissue paper, toilet paper",
    "level": "2"
  },
  {
    "word": "追加",
    "reading": "ついか",
    "meaning": "addition, supplement, appendix",
    "level": "2"
  },
  {
    "word": "ついで",
    "reading": "ついで",
    "meaning": "opportunity, occasion",
    "level": "2"
  },
  {
    "word": "つうか",
    "reading": "つうか",
    "meaning": "currency",
    "level": "2"
  },
  {
    "word": "通勤",
    "reading": "つうきん",
    "meaning": "commuting to work",
    "level": "2"
  },
  {
    "word": "通ずる",
    "reading": "つうずる",
    "meaning": "to lead, to run, to open",
    "level": "2"
  },
  {
    "word": "通知",
    "reading": "つうち",
    "meaning": "notice, notification",
    "level": "2"
  },
  {
    "word": "通帳",
    "reading": "つうちょう",
    "meaning": "bankbook",
    "level": "2"
  },
  {
    "word": "通訳",
    "reading": "つうやく",
    "meaning": "interpretation (i.e., oral translation) interpreter",
    "level": "2"
  },
  {
    "word": "通用",
    "reading": "つうよう",
    "meaning": "popular use, circulation",
    "level": "2"
  },
  {
    "word": "通路",
    "reading": "つうろ",
    "meaning": "passage, pathway",
    "level": "2"
  },
  {
    "word": "突き当たり",
    "reading": "つきあたり",
    "meaning": "end (e.g., of street)",
    "level": "2"
  },
  {
    "word": "突き当たる",
    "reading": "つきあたる",
    "meaning": "to run into, to collide with",
    "level": "2"
  },
  {
    "word": "月日",
    "reading": "つきひ",
    "meaning": "time, years, days",
    "level": "2"
  },
  {
    "word": "次ぐ",
    "reading": "つぐ",
    "meaning": "to follow, to come after, to come next (to)",
    "level": "2"
  },
  {
    "word": "伝わる",
    "reading": "つたわる",
    "meaning": "to spread (of a rumor, news, etc.), to travel, to circulate, to go around, to be passed around, to become known",
    "level": "2"
  },
  {
    "word": "突っ込む",
    "reading": "つっこむ",
    "meaning": "to plunge into, to stick into",
    "level": "2"
  },
  {
    "word": "務める",
    "reading": "つとめる",
    "meaning": "to serve, to act",
    "level": "2"
  },
  {
    "word": "努める",
    "reading": "つとめる",
    "meaning": "to try, to aim",
    "level": "2"
  },
  {
    "word": "綱",
    "reading": "つな",
    "meaning": "rope",
    "level": "2"
  },
  {
    "word": "繋がり",
    "reading": "つながり",
    "meaning": "connection, link, relationship",
    "level": "2"
  },
  {
    "word": "繋がる",
    "reading": "つながる",
    "meaning": "to be tied together, to be connected to, to be linked to",
    "level": "2"
  },
  {
    "word": "粒",
    "reading": "つぶ",
    "meaning": "grain",
    "level": "2"
  },
  {
    "word": "潰す",
    "reading": "つぶす",
    "meaning": "to smash, to waste",
    "level": "2"
  },
  {
    "word": "潰れる",
    "reading": "つぶれる",
    "meaning": "to be smashed, to go bankrupt",
    "level": "2"
  },
  {
    "word": "つまずく",
    "reading": "つまずく",
    "meaning": "to stumble, to trip",
    "level": "2"
  },
  {
    "word": "躓く",
    "reading": "つまずく",
    "meaning": "to trip (over), to stumble",
    "level": "2"
  },
  {
    "word": "詰まる",
    "reading": "つまる",
    "meaning": "to be blocked, to be packed",
    "level": "2"
  },
  {
    "word": "積む",
    "reading": "つむ",
    "meaning": "to pile up, to stack",
    "level": "2"
  },
  {
    "word": "爪",
    "reading": "つめ",
    "meaning": "fingernail or toenail",
    "level": "2"
  },
  {
    "word": "艶",
    "reading": "つや",
    "meaning": "gloss, glaze",
    "level": "2"
  },
  {
    "word": "強気",
    "reading": "つよき",
    "meaning": "firm, strong",
    "level": "2"
  },
  {
    "word": "釣り合う",
    "reading": "つりあう",
    "meaning": "to balance, to be in harmony, to suit",
    "level": "2"
  },
  {
    "word": "吊る",
    "reading": "つる",
    "meaning": "to hang",
    "level": "2"
  },
  {
    "word": "吊す",
    "reading": "つるす",
    "meaning": "to hang",
    "level": "2"
  },
  {
    "word": "テーマ",
    "reading": "テーマ",
    "meaning": "theme, project, topic (GER: Thema)",
    "level": "2"
  },
  {
    "word": "手洗い",
    "reading": "てあらい",
    "meaning": "restroom, lavatory",
    "level": "2"
  },
  {
    "word": "低～",
    "reading": "てい～",
    "meaning": "low ~",
    "level": "2"
  },
  {
    "word": "定員",
    "reading": "ていいん",
    "meaning": "fixed number of regular personnel, capacity (e.g., of boat)",
    "level": "2"
  },
  {
    "word": "定価",
    "reading": "ていか",
    "meaning": "established price",
    "level": "2"
  },
  {
    "word": "低下",
    "reading": "ていか",
    "meaning": "fall, decline",
    "level": "2"
  },
  {
    "word": "定期券",
    "reading": "ていきけん",
    "meaning": "commuter pass, season ticket",
    "level": "2"
  },
  {
    "word": "定休日",
    "reading": "ていきゅうび",
    "meaning": "regular holiday",
    "level": "2"
  },
  {
    "word": "停止",
    "reading": "ていし",
    "meaning": "suspension, interruption, stoppage",
    "level": "2"
  },
  {
    "word": "停車",
    "reading": "ていしゃ",
    "meaning": "stopping (e.g., train)",
    "level": "2"
  },
  {
    "word": "停電",
    "reading": "ていでん",
    "meaning": "power outage, electricity outage, blackout",
    "level": "2"
  },
  {
    "word": "出入り",
    "reading": "でいり",
    "meaning": "in and out, coming and going",
    "level": "2"
  },
  {
    "word": "出入口",
    "reading": "でいりぐち",
    "meaning": "exit and entrance",
    "level": "2"
  },
  {
    "word": "出入り口",
    "reading": "でいりぐち",
    "meaning": "exit and entrance",
    "level": "2"
  },
  {
    "word": "手入れ",
    "reading": "ていれ",
    "meaning": "repairs, maintenance",
    "level": "2"
  },
  {
    "word": "出来上がり",
    "reading": "できあがり",
    "meaning": "be finished, ready",
    "level": "2"
  },
  {
    "word": "出来上がる",
    "reading": "できあがる",
    "meaning": "to be finished, to be ready",
    "level": "2"
  },
  {
    "word": "的確",
    "reading": "てきかく",
    "meaning": "precise, accurate",
    "level": "2"
  },
  {
    "word": "適確",
    "reading": "てきかく",
    "meaning": "precise, accurate",
    "level": "2"
  },
  {
    "word": "手首",
    "reading": "てくび",
    "meaning": "wrist",
    "level": "2"
  },
  {
    "word": "凸凹",
    "reading": "でこぼこ",
    "meaning": "unevenness, roughness, ruggedness",
    "level": "2"
  },
  {
    "word": "手頃",
    "reading": "てごろ",
    "meaning": "moderate, handy",
    "level": "2"
  },
  {
    "word": "手ごろ",
    "reading": "てごろ",
    "meaning": "handy, convenient suitable, reasoanble, moderate",
    "level": "2"
  },
  {
    "word": "弟子",
    "reading": "でし",
    "meaning": "pupil, disciple, apprentice",
    "level": "2"
  },
  {
    "word": "でたらめ",
    "reading": "でたらめ",
    "meaning": "irresponsible utterance, nonsense; random",
    "level": "2"
  },
  {
    "word": "手帳",
    "reading": "てちょう",
    "meaning": "notebook",
    "level": "2"
  },
  {
    "word": "鉄橋",
    "reading": "てっきょう",
    "meaning": "iron bridge",
    "level": "2"
  },
  {
    "word": "手続き",
    "reading": "てつづき",
    "meaning": "procedure, (legal) process, formalities",
    "level": "2"
  },
  {
    "word": "鉄砲",
    "reading": "てっぽう",
    "meaning": "gun",
    "level": "2"
  },
  {
    "word": "テニスコート",
    "reading": "テニスコート",
    "meaning": "tennis court",
    "level": "2"
  },
  {
    "word": "手拭い",
    "reading": "てぬぐい",
    "meaning": "(hand) towel",
    "level": "2"
  },
  {
    "word": "手前",
    "reading": "てまえ",
    "meaning": "before, this side",
    "level": "2"
  },
  {
    "word": "出迎え",
    "reading": "でむかえ",
    "meaning": "meeting, reception",
    "level": "2"
  },
  {
    "word": "出迎える",
    "reading": "でむかえる",
    "meaning": "to meet, to greet",
    "level": "2"
  },
  {
    "word": "照らす",
    "reading": "てらす",
    "meaning": "to shine on, to illuminate",
    "level": "2"
  },
  {
    "word": "照る",
    "reading": "てる",
    "meaning": "to shine",
    "level": "2"
  },
  {
    "word": "展開",
    "reading": "てんかい",
    "meaning": "develop, expansion (opposite of compression)",
    "level": "2"
  },
  {
    "word": "伝記",
    "reading": "でんき",
    "meaning": "biography, life story",
    "level": "2"
  },
  {
    "word": "電球",
    "reading": "でんきゅう",
    "meaning": "light bulb",
    "level": "2"
  },
  {
    "word": "点数",
    "reading": "てんすう",
    "meaning": "marks, points, score",
    "level": "2"
  },
  {
    "word": "伝染",
    "reading": "でんせん",
    "meaning": "contagion",
    "level": "2"
  },
  {
    "word": "電池",
    "reading": "でんち",
    "meaning": "battery",
    "level": "2"
  },
  {
    "word": "電柱",
    "reading": "でんちゅう",
    "meaning": "telephone pole, telegraph pole, light pole",
    "level": "2"
  },
  {
    "word": "点々",
    "reading": "てんてん",
    "meaning": "here and there, little by little",
    "level": "2"
  },
  {
    "word": "転々",
    "reading": "てんてん",
    "meaning": "from one to another",
    "level": "2"
  },
  {
    "word": "天皇",
    "reading": "てんのう",
    "meaning": "Emperor of Japan",
    "level": "2"
  },
  {
    "word": "電波",
    "reading": "でんぱ",
    "meaning": "electro-magnetic wave",
    "level": "2"
  },
  {
    "word": "テンポ",
    "reading": "テンポ",
    "meaning": "tempo",
    "level": "2"
  },
  {
    "word": "電流",
    "reading": "でんりゅう",
    "meaning": "electric current",
    "level": "2"
  },
  {
    "word": "電力",
    "reading": "でんりょく",
    "meaning": "electric power",
    "level": "2"
  },
  {
    "word": "問い合わせ",
    "reading": "といあわせ",
    "meaning": "inquiry",
    "level": "2"
  },
  {
    "word": "銅",
    "reading": "どう",
    "meaning": "copper",
    "level": "2"
  },
  {
    "word": "同～",
    "reading": "どう～",
    "meaning": "same ~",
    "level": "2"
  },
  {
    "word": "どういたしまして (かん)",
    "reading": "どういたしまして (かん)",
    "meaning": "you are welcome, don't mention it",
    "level": "2"
  },
  {
    "word": "統一",
    "reading": "とういつ",
    "meaning": "unity, consolidation, uniformity",
    "level": "2"
  },
  {
    "word": "同格",
    "reading": "どうかく",
    "meaning": "the same rank, equality, apposition",
    "level": "2"
  },
  {
    "word": "峠",
    "reading": "とうげ",
    "meaning": "ridge, (mountain) pass, difficult part",
    "level": "2"
  },
  {
    "word": "統計",
    "reading": "とうけい",
    "meaning": "scattering, a scatter, dispersion",
    "level": "2"
  },
  {
    "word": "動作",
    "reading": "どうさ",
    "meaning": "action, movements, motions",
    "level": "2"
  },
  {
    "word": "東西",
    "reading": "とうざい",
    "meaning": "East and West, whole country",
    "level": "2"
  },
  {
    "word": "当日",
    "reading": "とうじつ",
    "meaning": "appointed day, very day",
    "level": "2"
  },
  {
    "word": "投書",
    "reading": "とうしょ",
    "meaning": "letter to the editor, letter from a reader, contribution",
    "level": "2"
  },
  {
    "word": "登場",
    "reading": "とうじょう",
    "meaning": "entry (on stage)",
    "level": "2"
  },
  {
    "word": "どうせ",
    "reading": "どうせ",
    "meaning": "anyhow, in any case, at any rate",
    "level": "2"
  },
  {
    "word": "灯台",
    "reading": "とうだい",
    "meaning": "lighthouse",
    "level": "2"
  },
  {
    "word": "盗難",
    "reading": "とうなん",
    "meaning": "theft, robbery",
    "level": "2"
  },
  {
    "word": "当番",
    "reading": "とうばん",
    "meaning": "being on duty",
    "level": "2"
  },
  {
    "word": "等分",
    "reading": "とうぶん",
    "meaning": "division into equal parts",
    "level": "2"
  },
  {
    "word": "透明",
    "reading": "とうめい",
    "meaning": "transparency, cleanness",
    "level": "2"
  },
  {
    "word": "灯油",
    "reading": "とうゆ",
    "meaning": "lamp oil, kerosene",
    "level": "2"
  },
  {
    "word": "東洋",
    "reading": "とうよう",
    "meaning": "the East, the Orient",
    "level": "2"
  },
  {
    "word": "童話",
    "reading": "どうわ",
    "meaning": "fairy tale",
    "level": "2"
  },
  {
    "word": "通り掛かる",
    "reading": "とおりかかる",
    "meaning": "to happen to pass by",
    "level": "2"
  },
  {
    "word": "溶かす",
    "reading": "とかす",
    "meaning": "to melt, to dissolve",
    "level": "2"
  },
  {
    "word": "尖る",
    "reading": "とがる",
    "meaning": "to taper to a point, to become sharp",
    "level": "2"
  },
  {
    "word": "どきどき",
    "reading": "どきどき",
    "meaning": "throb, beat (fast)",
    "level": "2"
  },
  {
    "word": "特殊",
    "reading": "とくしゅ",
    "meaning": "special, unique",
    "level": "2"
  },
  {
    "word": "特色",
    "reading": "とくしょく",
    "meaning": "characteristic, feature",
    "level": "2"
  },
  {
    "word": "特定",
    "reading": "とくてい",
    "meaning": "specific, special, particular",
    "level": "2"
  },
  {
    "word": "特売",
    "reading": "とくばい",
    "meaning": "special sale",
    "level": "2"
  },
  {
    "word": "溶け込む",
    "reading": "とけこむ",
    "meaning": "to melt into; to become a part of",
    "level": "2"
  },
  {
    "word": "溶ける",
    "reading": "とける",
    "meaning": "(intransitive) to melt, to thaw, to fuse, to dissolve",
    "level": "2"
  },
  {
    "word": "退ける",
    "reading": "どける",
    "meaning": "to dislodge, to put something out of the way",
    "level": "2"
  },
  {
    "word": "床の間",
    "reading": "とこのま",
    "meaning": "alcove",
    "level": "2"
  },
  {
    "word": "所々",
    "reading": "ところどころ",
    "meaning": "here and there, some parts (of something)",
    "level": "2"
  },
  {
    "word": "都心",
    "reading": "としん",
    "meaning": "heart (of city)",
    "level": "2"
  },
  {
    "word": "戸棚",
    "reading": "とだな",
    "meaning": "cupboard, cabinet",
    "level": "2"
  },
  {
    "word": "とっくに",
    "reading": "とっくに",
    "meaning": "long ago, already, a long time ago",
    "level": "2"
  },
  {
    "word": "どっと",
    "reading": "どっと",
    "meaning": "suddenly",
    "level": "2"
  },
  {
    "word": "整う",
    "reading": "ととのう",
    "meaning": "to be prepared, to be in order, to be arranged",
    "level": "2"
  },
  {
    "word": "留まる",
    "reading": "とどまる",
    "meaning": "to be fixed; to abide, to stay (in the one place)",
    "level": "2"
  },
  {
    "word": "怒鳴る",
    "reading": "どなる",
    "meaning": "to shout, to yell",
    "level": "2"
  },
  {
    "word": "殿",
    "reading": "どの",
    "meaning": "Mister (mostly in addressing someone on an envelope)",
    "level": "2"
  },
  {
    "word": "飛び込む",
    "reading": "とびこむ",
    "meaning": "to jump in, to leap in, to plunge into",
    "level": "2"
  },
  {
    "word": "留まる",
    "reading": "とまる",
    "meaning": "to be fixed; to abide, to stay (in the one place)",
    "level": "2"
  },
  {
    "word": "泊める",
    "reading": "とめる",
    "meaning": "to give shelter to, to lodge",
    "level": "2"
  },
  {
    "word": "ともかく",
    "reading": "ともかく",
    "meaning": "anyhow, at any rate, anyway",
    "level": "2"
  },
  {
    "word": "捕える",
    "reading": "とらえる",
    "meaning": "to seize, to capture, to arrest",
    "level": "2"
  },
  {
    "word": "取り入れる",
    "reading": "とりいれる",
    "meaning": "to harvest, to take in, to adopt",
    "level": "2"
  },
  {
    "word": "取り消す",
    "reading": "とりけす",
    "meaning": "to cancel",
    "level": "2"
  },
  {
    "word": "取り出す",
    "reading": "とりだす",
    "meaning": "to take out, to pick out",
    "level": "2"
  },
  {
    "word": "採る",
    "reading": "とる",
    "meaning": "to adopt (measure, proposal); to pick (fruit)",
    "level": "2"
  },
  {
    "word": "捕る",
    "reading": "とる",
    "meaning": "to take, to catch (fish)",
    "level": "2"
  },
  {
    "word": "丼",
    "reading": "どんぶり",
    "meaning": "porcelain bowl, bowl of rice with food on top",
    "level": "2"
  },
  {
    "word": "内科",
    "reading": "ないか",
    "meaning": "internist clinic, internal medicine",
    "level": "2"
  },
  {
    "word": "内線",
    "reading": "ないせん",
    "meaning": "phone extension",
    "level": "2"
  },
  {
    "word": "ナイロン",
    "reading": "ナイロン",
    "meaning": "nylon",
    "level": "2"
  },
  {
    "word": "長～",
    "reading": "なが～",
    "meaning": "long ~",
    "level": "2"
  },
  {
    "word": "仲直り",
    "reading": "なかなおり",
    "meaning": "reconciliation, make peace with",
    "level": "2"
  },
  {
    "word": "長引く",
    "reading": "ながびく",
    "meaning": "to be prolonged, to drag on",
    "level": "2"
  },
  {
    "word": "中身",
    "reading": "なかみ",
    "meaning": "contents, interior, filling substance, content",
    "level": "2"
  },
  {
    "word": "中指",
    "reading": "なかゆび",
    "meaning": "middle finger",
    "level": "2"
  },
  {
    "word": "仲良し",
    "reading": "なかよし",
    "meaning": "intimate friend, bosom buddy",
    "level": "2"
  },
  {
    "word": "慰める",
    "reading": "なぐさめる",
    "meaning": "to comfort, to console",
    "level": "2"
  },
  {
    "word": "殴る",
    "reading": "なぐる",
    "meaning": "to strike, to hit, to beat, to punch",
    "level": "2"
  },
  {
    "word": "為す",
    "reading": "なす",
    "meaning": "to accomplish, to do",
    "level": "2"
  },
  {
    "word": "謎謎",
    "reading": "なぞなぞ",
    "meaning": "riddle",
    "level": "2"
  },
  {
    "word": "傾らか",
    "reading": "なだらか",
    "meaning": "gradual, gentle",
    "level": "2"
  },
  {
    "word": "懐かしい",
    "reading": "なつかしい",
    "meaning": "dear, desired, missed",
    "level": "2"
  },
  {
    "word": "撫でる",
    "reading": "なでる",
    "meaning": "to brush gently, to stroke",
    "level": "2"
  },
  {
    "word": "斜め",
    "reading": "ななめ",
    "meaning": "diagonal, oblique",
    "level": "2"
  },
  {
    "word": "なにしろ",
    "reading": "なにしろ",
    "meaning": "at any rate, in any case",
    "level": "2"
  },
  {
    "word": "何しろ",
    "reading": "なにしろ",
    "meaning": "in any case, at any rate, anyhow, anyway, as you know, for you see, particularly",
    "level": "2"
  },
  {
    "word": "何々",
    "reading": "なになに",
    "meaning": "such and such, What?",
    "level": "2"
  },
  {
    "word": "何分",
    "reading": "なにぶん",
    "meaning": "by all means, please",
    "level": "2"
  },
  {
    "word": "生意気",
    "reading": "なまいき",
    "meaning": "impertinent, impudent",
    "level": "2"
  },
  {
    "word": "生意気な",
    "reading": "なまいきな",
    "meaning": "impertinent, saucy, cheeky, impudent, audacious, cocky, pert, brash",
    "level": "2"
  },
  {
    "word": "並木",
    "reading": "なみき",
    "meaning": "roadside tree, row of trees",
    "level": "2"
  },
  {
    "word": "倣う",
    "reading": "ならう",
    "meaning": "to imitate, to follow, to emulate",
    "level": "2"
  },
  {
    "word": "生る",
    "reading": "なる",
    "meaning": "to bear fruit",
    "level": "2"
  },
  {
    "word": "南極",
    "reading": "なんきょく",
    "meaning": "south pole, Antarctic",
    "level": "2"
  },
  {
    "word": "なんとなく",
    "reading": "なんとなく",
    "meaning": "somehow or other, for some reason or another",
    "level": "2"
  },
  {
    "word": "なんとも",
    "reading": "なんとも",
    "meaning": "nothing (with neg. verb), quite, not a bit",
    "level": "2"
  },
  {
    "word": "何とも",
    "reading": "なんとも",
    "meaning": "really, very, extremely, terribly, awfully (not) anything, (not) at all, (not) a bit",
    "level": "2"
  },
  {
    "word": "ナンバー",
    "reading": "ナンバー",
    "meaning": "number",
    "level": "2"
  },
  {
    "word": "南米",
    "reading": "なんべい",
    "meaning": "South America",
    "level": "2"
  },
  {
    "word": "南北",
    "reading": "なんぼく",
    "meaning": "south and north",
    "level": "2"
  },
  {
    "word": "匂う",
    "reading": "におう",
    "meaning": "to be fragrant, to smell",
    "level": "2"
  },
  {
    "word": "逃がす",
    "reading": "にがす",
    "meaning": "to let loose, to set free, to let escape",
    "level": "2"
  },
  {
    "word": "憎い",
    "reading": "にくい",
    "meaning": "hateful, abominable, detestable",
    "level": "2"
  },
  {
    "word": "憎む",
    "reading": "にくむ",
    "meaning": "to hate, to detest",
    "level": "2"
  },
  {
    "word": "憎らしい",
    "reading": "にくらしい",
    "meaning": "odious, hateful",
    "level": "2"
  },
  {
    "word": "にこにこ",
    "reading": "にこにこ",
    "meaning": "smile sweetly, smiley",
    "level": "2"
  },
  {
    "word": "濁る",
    "reading": "にごる",
    "meaning": "to become muddy, to get cloudy",
    "level": "2"
  },
  {
    "word": "虹",
    "reading": "にじ",
    "meaning": "rainbow",
    "level": "2"
  },
  {
    "word": "日時",
    "reading": "にちじ",
    "meaning": "date and time",
    "level": "2"
  },
  {
    "word": "日用品",
    "reading": "にちようひん",
    "meaning": "daily necessities",
    "level": "2"
  },
  {
    "word": "日課",
    "reading": "にっか",
    "meaning": "daily work, daily routine",
    "level": "2"
  },
  {
    "word": "日程",
    "reading": "にってい",
    "meaning": "schedule",
    "level": "2"
  },
  {
    "word": "鈍い",
    "reading": "にぶい",
    "meaning": "dull (e.g., a knife), thickheaded, slow (opposite of fast), stupid",
    "level": "2"
  },
  {
    "word": "入社",
    "reading": "にゅうしゃ",
    "meaning": "entry to a company",
    "level": "2"
  },
  {
    "word": "女房",
    "reading": "にょうぼう",
    "meaning": "wife",
    "level": "2"
  },
  {
    "word": "睨む",
    "reading": "にらむ",
    "meaning": "to glare at, to stare; to keep an eye on",
    "level": "2"
  },
  {
    "word": "煮る",
    "reading": "にる",
    "meaning": "to boil, to simmer, to stew, seethe",
    "level": "2"
  },
  {
    "word": "俄",
    "reading": "にわか",
    "meaning": "sudden, abrupt, unexpected",
    "level": "2"
  },
  {
    "word": "縫う",
    "reading": "ぬう",
    "meaning": "to sew",
    "level": "2"
  },
  {
    "word": "ねじ",
    "reading": "ねじ",
    "meaning": "(a) screw",
    "level": "2"
  },
  {
    "word": "捩る",
    "reading": "ねじる",
    "meaning": "to twist",
    "level": "2"
  },
  {
    "word": "ネックレス",
    "reading": "ネックレス",
    "meaning": "necklace",
    "level": "2"
  },
  {
    "word": "熱する",
    "reading": "ねっする",
    "meaning": "to heat",
    "level": "2"
  },
  {
    "word": "寝間着",
    "reading": "ねまき",
    "meaning": "sleep-wear, pajamas",
    "level": "2"
  },
  {
    "word": "寝巻",
    "reading": "ねまき",
    "meaning": "sleep-wear, pajamas",
    "level": "2"
  },
  {
    "word": "狙い",
    "reading": "ねらい",
    "meaning": "aim",
    "level": "2"
  },
  {
    "word": "狙う",
    "reading": "ねらう",
    "meaning": "to aim at",
    "level": "2"
  },
  {
    "word": "年度",
    "reading": "ねんど",
    "meaning": "year, fiscal year",
    "level": "2"
  },
  {
    "word": "農産物",
    "reading": "のうさんぶつ",
    "meaning": "agricultural produce",
    "level": "2"
  },
  {
    "word": "農村",
    "reading": "のうそん",
    "meaning": "agricultural community",
    "level": "2"
  },
  {
    "word": "濃度",
    "reading": "のうど",
    "meaning": "concentration, density",
    "level": "2"
  },
  {
    "word": "農薬",
    "reading": "のうやく",
    "meaning": "agricultural chemicals",
    "level": "2"
  },
  {
    "word": "能率",
    "reading": "のうりつ",
    "meaning": "efficiency",
    "level": "2"
  },
  {
    "word": "のこぎり",
    "reading": "のこぎり",
    "meaning": "saw",
    "level": "2"
  },
  {
    "word": "残らず",
    "reading": "のこらず",
    "meaning": "completely, without exception",
    "level": "2"
  },
  {
    "word": "上り",
    "reading": "のぼり",
    "meaning": "up-train (going to Tokyo), ascent",
    "level": "2"
  },
  {
    "word": "糊",
    "reading": "のり",
    "meaning": "glue, paste, starch",
    "level": "2"
  },
  {
    "word": "乗換",
    "reading": "のりかえ",
    "meaning": "a transfer (e.g., trains, buses)",
    "level": "2"
  },
  {
    "word": "乗り換え",
    "reading": "のりかえ",
    "meaning": "(n) transfer (trains, buses, etc.)",
    "level": "2"
  },
  {
    "word": "乗り越し",
    "reading": "のりこし",
    "meaning": "riding past (one's station)",
    "level": "2"
  },
  {
    "word": "鈍い",
    "reading": "のろい",
    "meaning": "dull (e.g., a knife), slow (opposite of fast), stupid",
    "level": "2"
  },
  {
    "word": "のろのろ",
    "reading": "のろのろ",
    "meaning": "slowly, sluggishly",
    "level": "2"
  },
  {
    "word": "呑気",
    "reading": "のんき",
    "meaning": "carefree, optimistic, careless",
    "level": "2"
  },
  {
    "word": "はい (かん)",
    "reading": "はい (かん)",
    "meaning": "yes",
    "level": "2"
  },
  {
    "word": "灰色",
    "reading": "はいいろ",
    "meaning": "grey, ashen",
    "level": "2"
  },
  {
    "word": "俳句",
    "reading": "はいく",
    "meaning": "haiku poetry",
    "level": "2"
  },
  {
    "word": "売店",
    "reading": "ばいてん",
    "meaning": "shop, stand",
    "level": "2"
  },
  {
    "word": "バイバイ",
    "reading": "バイバイ",
    "meaning": "bye bye",
    "level": "2"
  },
  {
    "word": "売買",
    "reading": "ばいばい",
    "meaning": "trade, buying and selling",
    "level": "2"
  },
  {
    "word": "這う",
    "reading": "はう",
    "meaning": "to creep, to crawl",
    "level": "2"
  },
  {
    "word": "剥す",
    "reading": "はがす",
    "meaning": "to tear off, to peel off, to rip off",
    "level": "2"
  },
  {
    "word": "剥がす",
    "reading": "はがす",
    "meaning": "to tear off, to peel off, to rip off, to strip off, to skin, to flay, to disrobe, to deprive of, to detach, to disconnect",
    "level": "2"
  },
  {
    "word": "ばからしい",
    "reading": "ばからしい",
    "meaning": "absurd",
    "level": "2"
  },
  {
    "word": "秤",
    "reading": "はかり",
    "meaning": "scales, weighing machine",
    "level": "2"
  },
  {
    "word": "吐き気",
    "reading": "はきけ",
    "meaning": "nausea, sickness in the stomach",
    "level": "2"
  },
  {
    "word": "はきはき",
    "reading": "はきはき",
    "meaning": "clearly",
    "level": "2"
  },
  {
    "word": "掃く",
    "reading": "はく",
    "meaning": "to sweep, to brush, to gather up",
    "level": "2"
  },
  {
    "word": "歯車",
    "reading": "はぐるま",
    "meaning": "gear, cog-wheel",
    "level": "2"
  },
  {
    "word": "バケツ",
    "reading": "バケツ",
    "meaning": "bucket, pail",
    "level": "2"
  },
  {
    "word": "挟まる",
    "reading": "はさまる",
    "meaning": "to get between, to be caught in",
    "level": "2"
  },
  {
    "word": "挟む",
    "reading": "はさむ",
    "meaning": "to pinch; to hold between; to insert",
    "level": "2"
  },
  {
    "word": "梯子",
    "reading": "はしご",
    "meaning": "ladder, stairs",
    "level": "2"
  },
  {
    "word": "始めに",
    "reading": "はじめに",
    "meaning": "to begin with, first of all",
    "level": "2"
  },
  {
    "word": "初めに",
    "reading": "はじめに",
    "meaning": "to begin with, first of all",
    "level": "2"
  },
  {
    "word": "はじめまして",
    "reading": "はじめまして",
    "meaning": "How do you do, I am glad to meet you",
    "level": "2"
  },
  {
    "word": "斜",
    "reading": "はす",
    "meaning": "diagonal",
    "level": "2"
  },
  {
    "word": "外れる",
    "reading": "はずれる",
    "meaning": "to be disconnected, to get out of place, to be off, to be out (e.g., of gear)",
    "level": "2"
  },
  {
    "word": "パターン",
    "reading": "パターン",
    "meaning": "pattern",
    "level": "2"
  },
  {
    "word": "肌着",
    "reading": "はだぎ",
    "meaning": "underwear",
    "level": "2"
  },
  {
    "word": "果して",
    "reading": "はたして",
    "meaning": "as was expected, really",
    "level": "2"
  },
  {
    "word": "果たして",
    "reading": "はたして",
    "meaning": "as was expected, just as one thought, sure enough",
    "level": "2"
  },
  {
    "word": "鉢",
    "reading": "はち",
    "meaning": "a bowl, a pot",
    "level": "2"
  },
  {
    "word": "発",
    "reading": "はつ",
    "meaning": "to depart (e.g., on a plane, train)",
    "level": "2"
  },
  {
    "word": "×",
    "reading": "ばつ",
    "meaning": "cross",
    "level": "2"
  },
  {
    "word": "発揮",
    "reading": "はっき",
    "meaning": "exhibition, demonstration, display",
    "level": "2"
  },
  {
    "word": "バック",
    "reading": "バック",
    "meaning": "back",
    "level": "2"
  },
  {
    "word": "発想",
    "reading": "はっそう",
    "meaning": "idea; way of thinking (same as 考え方 (かんがえかた))",
    "level": "2"
  },
  {
    "word": "発電",
    "reading": "はつでん",
    "meaning": "generation (e.g., power)",
    "level": "2"
  },
  {
    "word": "発売",
    "reading": "はつばい",
    "meaning": "sale",
    "level": "2"
  },
  {
    "word": "派手",
    "reading": "はで",
    "meaning": "showy, loud, flashy, gaudy",
    "level": "2"
  },
  {
    "word": "話合い",
    "reading": "はなしあい",
    "meaning": "discussion, talk",
    "level": "2"
  },
  {
    "word": "話し合い",
    "reading": "はなしあい",
    "meaning": "discussion, talk, conference",
    "level": "2"
  },
  {
    "word": "話し掛ける",
    "reading": "はなしかける",
    "meaning": "to accost a person, to talk (to someone)",
    "level": "2"
  },
  {
    "word": "話中",
    "reading": "はなしちゅう",
    "meaning": "while talking, the line is busy",
    "level": "2"
  },
  {
    "word": "甚だしい",
    "reading": "はなはだしい",
    "meaning": "extreme, excessive, terrible",
    "level": "2"
  },
  {
    "word": "花火",
    "reading": "はなび",
    "meaning": "fireworks",
    "level": "2"
  },
  {
    "word": "花嫁",
    "reading": "はなよめ",
    "meaning": "bride",
    "level": "2"
  },
  {
    "word": "ばね",
    "reading": "ばね",
    "meaning": "spring (e.g., coil, leaf)",
    "level": "2"
  },
  {
    "word": "跳ねる",
    "reading": "はねる",
    "meaning": "to jump, to leap",
    "level": "2"
  },
  {
    "word": "破片",
    "reading": "はへん",
    "meaning": "fragment, broken piece",
    "level": "2"
  },
  {
    "word": "歯磨き",
    "reading": "はみがき",
    "meaning": "toothbrushing, toothpaste",
    "level": "2"
  },
  {
    "word": "はめる",
    "reading": "はめる",
    "meaning": "(col) to get in, to insert, to put on",
    "level": "2"
  },
  {
    "word": "早口",
    "reading": "はやくち",
    "meaning": "fast-talking",
    "level": "2"
  },
  {
    "word": "払い込む",
    "reading": "はらいこむ",
    "meaning": "to deposit, to pay in",
    "level": "2"
  },
  {
    "word": "払い戻す",
    "reading": "はらいもどす",
    "meaning": "to repay, to pay back",
    "level": "2"
  },
  {
    "word": "針金",
    "reading": "はりがね",
    "meaning": "wire",
    "level": "2"
  },
  {
    "word": "張り切る",
    "reading": "はりきる",
    "meaning": "to be in high spirits, to be full of vigor",
    "level": "2"
  },
  {
    "word": "反～",
    "reading": "はん～",
    "meaning": "anti ~, counter ~",
    "level": "2"
  },
  {
    "word": "反映",
    "reading": "はんえい",
    "meaning": "reflection, influence",
    "level": "2"
  },
  {
    "word": "半径",
    "reading": "はんけい",
    "meaning": "radius",
    "level": "2"
  },
  {
    "word": "判子",
    "reading": "はんこ",
    "meaning": "seal (used for signature)",
    "level": "2"
  },
  {
    "word": "万歳",
    "reading": "ばんざい",
    "meaning": "banzai, Long live ~!",
    "level": "2"
  },
  {
    "word": "判事",
    "reading": "はんじ",
    "meaning": "judge, justice",
    "level": "2"
  },
  {
    "word": "反省",
    "reading": "はんせい",
    "meaning": "reflection, reconsideration",
    "level": "2"
  },
  {
    "word": "番地",
    "reading": "ばんち",
    "meaning": "house number, address",
    "level": "2"
  },
  {
    "word": "パンツ",
    "reading": "パンツ",
    "meaning": "underpants",
    "level": "2"
  },
  {
    "word": "バンド",
    "reading": "バンド",
    "meaning": "band",
    "level": "2"
  },
  {
    "word": "半島",
    "reading": "はんとう",
    "meaning": "peninsula",
    "level": "2"
  },
  {
    "word": "ハンドル",
    "reading": "ハンドル",
    "meaning": "handle, steering wheel",
    "level": "2"
  },
  {
    "word": "非～",
    "reading": "ひ～",
    "meaning": "anti~, counter~, an~, non~",
    "level": "2"
  },
  {
    "word": "日当たり",
    "reading": "ひあたり",
    "meaning": "exposure to the sun, sunny place",
    "level": "2"
  },
  {
    "word": "日帰り",
    "reading": "ひがえり",
    "meaning": "day trip",
    "level": "2"
  },
  {
    "word": "比較的",
    "reading": "ひかくてき",
    "meaning": "comparatively; relatively",
    "level": "2"
  },
  {
    "word": "日陰",
    "reading": "ひかげ",
    "meaning": "shadow",
    "level": "2"
  },
  {
    "word": "ぴかぴか",
    "reading": "ぴかぴか",
    "meaning": "glitter, sparkle",
    "level": "2"
  },
  {
    "word": "引受る",
    "reading": "ひきうける",
    "meaning": "to undertake, to take up, to take over",
    "level": "2"
  },
  {
    "word": "引き返す",
    "reading": "ひきかえす",
    "meaning": "to turn back, to go back, reverse",
    "level": "2"
  },
  {
    "word": "引算",
    "reading": "ひきざん",
    "meaning": "subtraction",
    "level": "2"
  },
  {
    "word": "引き出す",
    "reading": "ひきだす",
    "meaning": "to pull out, to take out, to withdraw",
    "level": "2"
  },
  {
    "word": "引き止める",
    "reading": "ひきとめる",
    "meaning": "to keep back, to prevent, to hold back",
    "level": "2"
  },
  {
    "word": "卑怯",
    "reading": "ひきょう",
    "meaning": "cowardice, meanness, unfairness",
    "level": "2"
  },
  {
    "word": "引分け",
    "reading": "ひきわけ",
    "meaning": "a draw (in competition), tie game",
    "level": "2"
  },
  {
    "word": "引き分け",
    "reading": "ひきわけ",
    "meaning": "draw (in competition), tie game",
    "level": "2"
  },
  {
    "word": "陽射",
    "reading": "ひざし",
    "meaning": "sunlight, rays of the sun",
    "level": "2"
  },
  {
    "word": "日差し",
    "reading": "ひざし",
    "meaning": "sunlight",
    "level": "2"
  },
  {
    "word": "肘",
    "reading": "ひじ",
    "meaning": "elbow",
    "level": "2"
  },
  {
    "word": "ピストル",
    "reading": "ピストル",
    "meaning": "pistol",
    "level": "2"
  },
  {
    "word": "ビタミン",
    "reading": "ビタミン",
    "meaning": "vitamin",
    "level": "2"
  },
  {
    "word": "ぴたり",
    "reading": "ぴたり",
    "meaning": "exactly; close-fitting",
    "level": "2"
  },
  {
    "word": "引っ掛かる",
    "reading": "ひっかかる",
    "meaning": "to be caught in, to be stuck in",
    "level": "2"
  },
  {
    "word": "筆記",
    "reading": "ひっき",
    "meaning": "note taking, writing",
    "level": "2"
  },
  {
    "word": "引っ繰り返す",
    "reading": "ひっくりかえす",
    "meaning": "to turn over, to overturn, to knock over",
    "level": "2"
  },
  {
    "word": "引っ繰り返る",
    "reading": "ひっくりかえる",
    "meaning": "to be overturned, to be upset, to topple over, to be reversed",
    "level": "2"
  },
  {
    "word": "引っ越し",
    "reading": "ひっこし",
    "meaning": "moving (dwelling, office, etc.), changing residence",
    "level": "2"
  },
  {
    "word": "引っ込む",
    "reading": "ひっこむ",
    "meaning": "to draw back, to sink, to cave in",
    "level": "2"
  },
  {
    "word": "筆者",
    "reading": "ひっしゃ",
    "meaning": "writer, author",
    "level": "2"
  },
  {
    "word": "必需品",
    "reading": "ひつじゅひん",
    "meaning": "necessities, essential",
    "level": "2"
  },
  {
    "word": "一～",
    "reading": "ひと～",
    "meaning": "one ~",
    "level": "2"
  },
  {
    "word": "人差指",
    "reading": "ひとさしゆび",
    "meaning": "index finger",
    "level": "2"
  },
  {
    "word": "一通り",
    "reading": "ひととおり",
    "meaning": "general, briefly",
    "level": "2"
  },
  {
    "word": "人通り",
    "reading": "ひとどおり",
    "meaning": "pedestrian traffic",
    "level": "2"
  },
  {
    "word": "ひとまず",
    "reading": "ひとまず",
    "meaning": "for the present, once, for the time being",
    "level": "2"
  },
  {
    "word": "瞳",
    "reading": "ひとみ",
    "meaning": "pupil (of eye)",
    "level": "2"
  },
  {
    "word": "一休み",
    "reading": "ひとやすみ",
    "meaning": "a rest",
    "level": "2"
  },
  {
    "word": "独り言",
    "reading": "ひとりごと",
    "meaning": "a soliloquy, a monologue, speaking to oneself",
    "level": "2"
  },
  {
    "word": "ひとりでに",
    "reading": "ひとりでに",
    "meaning": "by itself, automatically, naturally",
    "level": "2"
  },
  {
    "word": "ビニール",
    "reading": "ビニール",
    "meaning": "vinyl",
    "level": "2"
  },
  {
    "word": "皮肉",
    "reading": "ひにく",
    "meaning": "cynicism, sarcasm",
    "level": "2"
  },
  {
    "word": "日日",
    "reading": "ひにち",
    "meaning": "date",
    "level": "2"
  },
  {
    "word": "日にち",
    "reading": "ひにち",
    "meaning": "date (of a planned event, act, etc.), day",
    "level": "2"
  },
  {
    "word": "捻る",
    "reading": "ひねる",
    "meaning": "to twist, to turn",
    "level": "2"
  },
  {
    "word": "日の入り",
    "reading": "ひのいり",
    "meaning": "sunset",
    "level": "2"
  },
  {
    "word": "日の出",
    "reading": "ひので",
    "meaning": "sunrise",
    "level": "2"
  },
  {
    "word": "響き",
    "reading": "ひびき",
    "meaning": "echo, sound",
    "level": "2"
  },
  {
    "word": "響く",
    "reading": "ひびく",
    "meaning": "to resound; to affect",
    "level": "2"
  },
  {
    "word": "皮膚",
    "reading": "ひふ",
    "meaning": "skin",
    "level": "2"
  },
  {
    "word": "冷やす",
    "reading": "ひやす",
    "meaning": "to cool (from room temperature), to chill, to refrigerate",
    "level": "2"
  },
  {
    "word": "ひゃっかじてん",
    "reading": "ひゃっかじてん",
    "meaning": "encyclopedia",
    "level": "2"
  },
  {
    "word": "百科事典",
    "reading": "ひゃっかじてん",
    "meaning": "encyclopedia",
    "level": "2"
  },
  {
    "word": "美容",
    "reading": "びよう",
    "meaning": "beauty of figure or form",
    "level": "2"
  },
  {
    "word": "表紙",
    "reading": "ひょうし",
    "meaning": "front cover, binding",
    "level": "2"
  },
  {
    "word": "標識",
    "reading": "ひょうしき",
    "meaning": "sign, mark",
    "level": "2"
  },
  {
    "word": "標準",
    "reading": "ひょうじゅん",
    "meaning": "standard, level",
    "level": "2"
  },
  {
    "word": "標本",
    "reading": "ひょうほん",
    "meaning": "example, specimen",
    "level": "2"
  },
  {
    "word": "評論",
    "reading": "ひょうろん",
    "meaning": "criticism, critique",
    "level": "2"
  },
  {
    "word": "ビルディング",
    "reading": "ビルディング",
    "meaning": "building",
    "level": "2"
  },
  {
    "word": "昼寝",
    "reading": "ひるね",
    "meaning": "nap (at home), siesta",
    "level": "2"
  },
  {
    "word": "広げる",
    "reading": "ひろげる",
    "meaning": "to spread, to extend, to expand, to enlarge, to widen, to broaden",
    "level": "2"
  },
  {
    "word": "広さ",
    "reading": "ひろさ",
    "meaning": "extent",
    "level": "2"
  },
  {
    "word": "広場",
    "reading": "ひろば",
    "meaning": "plaza",
    "level": "2"
  },
  {
    "word": "広々",
    "reading": "ひろびろ",
    "meaning": "extensive, spacious",
    "level": "2"
  },
  {
    "word": "ピンク",
    "reading": "ピンク",
    "meaning": "pink",
    "level": "2"
  },
  {
    "word": "便箋",
    "reading": "びんせん",
    "meaning": "writing paper, stationery",
    "level": "2"
  },
  {
    "word": "瓶詰",
    "reading": "びんづめ",
    "meaning": "bottling, bottled",
    "level": "2"
  },
  {
    "word": "ファスナー",
    "reading": "ファスナー",
    "meaning": "fastener, zipper",
    "level": "2"
  },
  {
    "word": "風船",
    "reading": "ふうせん",
    "meaning": "balloon",
    "level": "2"
  },
  {
    "word": "不運",
    "reading": "ふうん",
    "meaning": "unlucky, misfortune, bad luck",
    "level": "2"
  },
  {
    "word": "深まる",
    "reading": "ふかまる",
    "meaning": "to deepen, to heighten, to intensify",
    "level": "2"
  },
  {
    "word": "不規則",
    "reading": "ふきそく",
    "meaning": "irregularity, unsteadiness",
    "level": "2"
  },
  {
    "word": "普及",
    "reading": "ふきゅう",
    "meaning": "diffusion, spread",
    "level": "2"
  },
  {
    "word": "付近",
    "reading": "ふきん",
    "meaning": "neighborhood, vicinity",
    "level": "2"
  },
  {
    "word": "副～",
    "reading": "ふく～",
    "meaning": "vice ~",
    "level": "2"
  },
  {
    "word": "副詞",
    "reading": "ふくし",
    "meaning": "adverb",
    "level": "2"
  },
  {
    "word": "複写",
    "reading": "ふくしゃ",
    "meaning": "copy, duplicate",
    "level": "2"
  },
  {
    "word": "複数",
    "reading": "ふくすう",
    "meaning": "plural, multiple",
    "level": "2"
  },
  {
    "word": "ふくめる",
    "reading": "ふくめる",
    "meaning": "to include, to instruct, to make one understand",
    "level": "2"
  },
  {
    "word": "膨らます",
    "reading": "ふくらます",
    "meaning": "to swell, to expand, to inflate",
    "level": "2"
  },
  {
    "word": "膨らむ",
    "reading": "ふくらむ",
    "meaning": "to expand, to swell (out), to become inflated",
    "level": "2"
  },
  {
    "word": "不潔",
    "reading": "ふけつ",
    "meaning": "unclean, dirty",
    "level": "2"
  },
  {
    "word": "更ける",
    "reading": "ふける",
    "meaning": "to get late, to wear on",
    "level": "2"
  },
  {
    "word": "符号",
    "reading": "ふごう",
    "meaning": "sign, mark, symbol",
    "level": "2"
  },
  {
    "word": "夫妻",
    "reading": "ふさい",
    "meaning": "man and wife, married couple",
    "level": "2"
  },
  {
    "word": "塞がる",
    "reading": "ふさがる",
    "meaning": "to be plugged up, to be shut up",
    "level": "2"
  },
  {
    "word": "塞ぐ",
    "reading": "ふさぐ",
    "meaning": "to stuff, to close up, to block (up)",
    "level": "2"
  },
  {
    "word": "ふざける",
    "reading": "ふざける",
    "meaning": "to romp, to gambol, to frolic",
    "level": "2"
  },
  {
    "word": "無沙汰",
    "reading": "ぶさた",
    "meaning": "neglecting to stay in contact",
    "level": "2"
  },
  {
    "word": "武士",
    "reading": "ぶし",
    "meaning": "warrior, samurai",
    "level": "2"
  },
  {
    "word": "部首",
    "reading": "ぶしゅ",
    "meaning": "radical (of a kanji character)",
    "level": "2"
  },
  {
    "word": "蒸す",
    "reading": "ふす",
    "meaning": "to steam (food, towel, etc.) to be hot and humid, to be sultry",
    "level": "2"
  },
  {
    "word": "襖",
    "reading": "ふすま",
    "meaning": "sliding screen",
    "level": "2"
  },
  {
    "word": "附属",
    "reading": "ふぞく",
    "meaning": "attached, belonging, affiliated",
    "level": "2"
  },
  {
    "word": "付属",
    "reading": "ふぞく",
    "meaning": "being attached (to), being affiliated (to), belonging (to), going with",
    "level": "2"
  },
  {
    "word": "蓋",
    "reading": "ふた",
    "meaning": "cover, lid, cap",
    "level": "2"
  },
  {
    "word": "不通",
    "reading": "ふつう",
    "meaning": "suspension, interruption, stoppage, tie-up, cessation",
    "level": "2"
  },
  {
    "word": "物騒",
    "reading": "ぶっそう",
    "meaning": "dangerous, disturbed, insecure",
    "level": "2"
  },
  {
    "word": "ぶつぶつ",
    "reading": "ぶつぶつ",
    "meaning": "grumbling, complaining in a small voice",
    "level": "2"
  },
  {
    "word": "船便",
    "reading": "ふなびん",
    "meaning": "surface mail (ship)",
    "level": "2"
  },
  {
    "word": "部品",
    "reading": "ぶひん",
    "meaning": "parts, accessories",
    "level": "2"
  },
  {
    "word": "吹雪",
    "reading": "ふぶき",
    "meaning": "snow storm",
    "level": "2"
  },
  {
    "word": "父母",
    "reading": "ふぼ",
    "meaning": "father and mother, parents",
    "level": "2"
  },
  {
    "word": "踏切",
    "reading": "ふみきり",
    "meaning": "railway crossing, level crossing, starting line, scratch, crossover",
    "level": "2"
  },
  {
    "word": "麓",
    "reading": "ふもと",
    "meaning": "the foot, the bottom, the base (of a mountain)",
    "level": "2"
  },
  {
    "word": "フライパン",
    "reading": "フライパン",
    "meaning": "fry pan, frying pan",
    "level": "2"
  },
  {
    "word": "ブラウス",
    "reading": "ブラウス",
    "meaning": "blouse",
    "level": "2"
  },
  {
    "word": "ぶらさげる",
    "reading": "ぶらさげる",
    "meaning": "to hang, to suspend, to swing",
    "level": "2"
  },
  {
    "word": "ブラシ",
    "reading": "ブラシ",
    "meaning": "brush",
    "level": "2"
  },
  {
    "word": "プラットホーム",
    "reading": "プラットホーム",
    "meaning": "platform",
    "level": "2"
  },
  {
    "word": "フリー",
    "reading": "フリー",
    "meaning": "free",
    "level": "2"
  },
  {
    "word": "振り仮名",
    "reading": "ふりがな",
    "meaning": "pronunciation key",
    "level": "2"
  },
  {
    "word": "振り向く",
    "reading": "ふりむく",
    "meaning": "to turn one's face, to turn around",
    "level": "2"
  },
  {
    "word": "プリント",
    "reading": "プリント",
    "meaning": "print, handout",
    "level": "2"
  },
  {
    "word": "古～",
    "reading": "ふる～",
    "meaning": "old ~",
    "level": "2"
  },
  {
    "word": "故郷",
    "reading": "ふるさと",
    "meaning": "home town, birthplace",
    "level": "2"
  },
  {
    "word": "古里",
    "reading": "ふるさと",
    "meaning": "home town, birthplace",
    "level": "2"
  },
  {
    "word": "振舞う",
    "reading": "ふるまう",
    "meaning": "to behave, to conduct",
    "level": "2"
  },
  {
    "word": "ブローチ",
    "reading": "ブローチ",
    "meaning": "brooch",
    "level": "2"
  },
  {
    "word": "プログラム",
    "reading": "プログラム",
    "meaning": "program",
    "level": "2"
  },
  {
    "word": "風呂敷",
    "reading": "ふろしき",
    "meaning": "wrapping cloth, cloth wrapper",
    "level": "2"
  },
  {
    "word": "ふわふわ",
    "reading": "ふわふわ",
    "meaning": "light, soft",
    "level": "2"
  },
  {
    "word": "噴火",
    "reading": "ふんか",
    "meaning": "eruption",
    "level": "2"
  },
  {
    "word": "分解",
    "reading": "ぶんかい",
    "meaning": "analysis, disassembly",
    "level": "2"
  },
  {
    "word": "文芸",
    "reading": "ぶんげい",
    "meaning": "literature, art and literature",
    "level": "2"
  },
  {
    "word": "文献",
    "reading": "ぶんけん",
    "meaning": "literature, books (reference)",
    "level": "2"
  },
  {
    "word": "噴水",
    "reading": "ふんすい",
    "meaning": "water fountain",
    "level": "2"
  },
  {
    "word": "分数",
    "reading": "ぶんすう",
    "meaning": "fraction (in math)",
    "level": "2"
  },
  {
    "word": "文体",
    "reading": "ぶんたい",
    "meaning": "literary style",
    "level": "2"
  },
  {
    "word": "分布",
    "reading": "ぶんぷ",
    "meaning": "distribution",
    "level": "2"
  },
  {
    "word": "文房具",
    "reading": "ぶんぼうぐ",
    "meaning": "stationery",
    "level": "2"
  },
  {
    "word": "文脈",
    "reading": "ぶんみゃく",
    "meaning": "context",
    "level": "2"
  },
  {
    "word": "分量",
    "reading": "ぶんりょう",
    "meaning": "amount, quantity",
    "level": "2"
  },
  {
    "word": "分類",
    "reading": "ぶんるい",
    "meaning": "classification",
    "level": "2"
  },
  {
    "word": "閉会",
    "reading": "へいかい",
    "meaning": "closure",
    "level": "2"
  },
  {
    "word": "平気",
    "reading": "へいき",
    "meaning": "coolness, calmness, unconcern",
    "level": "2"
  },
  {
    "word": "並行",
    "reading": "へいこう",
    "meaning": "(going) side by side, concurrent, at the same time",
    "level": "2"
  },
  {
    "word": "平日",
    "reading": "へいじつ",
    "meaning": "weekday",
    "level": "2"
  },
  {
    "word": "兵隊",
    "reading": "へいたい",
    "meaning": "soldier",
    "level": "2"
  },
  {
    "word": "平凡",
    "reading": "へいぼん",
    "meaning": "common, ordinary",
    "level": "2"
  },
  {
    "word": "平野",
    "reading": "へいや",
    "meaning": "plain, open field",
    "level": "2"
  },
  {
    "word": "凹む",
    "reading": "へこむ",
    "meaning": "to be dented, to be indented",
    "level": "2"
  },
  {
    "word": "へそ",
    "reading": "へそ",
    "meaning": "navel, belly-button",
    "level": "2"
  },
  {
    "word": "隔てる",
    "reading": "へだてる",
    "meaning": "to be shut out",
    "level": "2"
  },
  {
    "word": "別荘",
    "reading": "べっそう",
    "meaning": "villa; vacation home; summer cottage",
    "level": "2"
  },
  {
    "word": "別々",
    "reading": "べつべつ",
    "meaning": "separately, individually",
    "level": "2"
  },
  {
    "word": "ベテラン",
    "reading": "ベテラン",
    "meaning": "veteran",
    "level": "2"
  },
  {
    "word": "ヘリコプター",
    "reading": "ヘリコプター",
    "meaning": "helicopter",
    "level": "2"
  },
  {
    "word": "編集",
    "reading": "へんしゅう",
    "meaning": "editing, compilation, editorial (e.g., committee)",
    "level": "2"
  },
  {
    "word": "便所",
    "reading": "べんじょ",
    "meaning": "toilet, lavatory",
    "level": "2"
  },
  {
    "word": "ペンチ",
    "reading": "ペンチ",
    "meaning": "pliers (lit: pinchers)",
    "level": "2"
  },
  {
    "word": "ボーナス",
    "reading": "ボーナス",
    "meaning": "bonus",
    "level": "2"
  },
  {
    "word": "防～",
    "reading": "ぼう～",
    "meaning": "~ prevention",
    "level": "2"
  },
  {
    "word": "望遠鏡",
    "reading": "ぼうえんきょう",
    "meaning": "telescope",
    "level": "2"
  },
  {
    "word": "方角",
    "reading": "ほうがく",
    "meaning": "direction, way",
    "level": "2"
  },
  {
    "word": "箒",
    "reading": "ほうき",
    "meaning": "broom",
    "level": "2"
  },
  {
    "word": "方言",
    "reading": "ほうげん",
    "meaning": "dialect",
    "level": "2"
  },
  {
    "word": "坊さん",
    "reading": "ぼうさん",
    "meaning": "Buddhist priest, monk",
    "level": "2"
  },
  {
    "word": "防止",
    "reading": "ぼうし",
    "meaning": "prevention, check",
    "level": "2"
  },
  {
    "word": "方針",
    "reading": "ほうしん",
    "meaning": "objective, plan, policy",
    "level": "2"
  },
  {
    "word": "包装",
    "reading": "ほうそう",
    "meaning": "packing, wrapping",
    "level": "2"
  },
  {
    "word": "法則",
    "reading": "ほうそく",
    "meaning": "law, rule",
    "level": "2"
  },
  {
    "word": "包帯",
    "reading": "ほうたい",
    "meaning": "bandage",
    "level": "2"
  },
  {
    "word": "膨大",
    "reading": "ぼうだい",
    "meaning": "enormous, extensive",
    "level": "2"
  },
  {
    "word": "包丁",
    "reading": "ほうちょう",
    "meaning": "kitchen knife, carving knife",
    "level": "2"
  },
  {
    "word": "方程式",
    "reading": "ほうていしき",
    "meaning": "equation",
    "level": "2"
  },
  {
    "word": "防犯",
    "reading": "ぼうはん",
    "meaning": "prevention of crime",
    "level": "2"
  },
  {
    "word": "方面",
    "reading": "ほうめん",
    "meaning": "direction; area",
    "level": "2"
  },
  {
    "word": "坊や",
    "reading": "ぼうや",
    "meaning": "boy",
    "level": "2"
  },
  {
    "word": "放る",
    "reading": "ほうる",
    "meaning": "to let go",
    "level": "2"
  },
  {
    "word": "朗らか",
    "reading": "ほがらか",
    "meaning": "bright, cheerful, melodious",
    "level": "2"
  },
  {
    "word": "朗らか(な)",
    "reading": "ほがらか(な)",
    "meaning": "cheerful, merry bright (sky, day, etc.), fine, clear",
    "level": "2"
  },
  {
    "word": "牧場",
    "reading": "ぼくじょう",
    "meaning": "farm (livestock); pasture land",
    "level": "2"
  },
  {
    "word": "牧畜",
    "reading": "ぼくちく",
    "meaning": "stock-farming",
    "level": "2"
  },
  {
    "word": "保健",
    "reading": "ほけん",
    "meaning": "health preservation, hygiene, sanitation",
    "level": "2"
  },
  {
    "word": "募集",
    "reading": "ぼしゅう",
    "meaning": "recruitment",
    "level": "2"
  },
  {
    "word": "干す",
    "reading": "ほす",
    "meaning": "to air, to dry, to drink up",
    "level": "2"
  },
  {
    "word": "ポスター",
    "reading": "ポスター",
    "meaning": "poster",
    "level": "2"
  },
  {
    "word": "北極",
    "reading": "ほっきょく",
    "meaning": "North Pole",
    "level": "2"
  },
  {
    "word": "坊っちゃん",
    "reading": "ぼっちゃん",
    "meaning": "son (of others)",
    "level": "2"
  },
  {
    "word": "解く",
    "reading": "ほどく",
    "meaning": "to unfasten",
    "level": "2"
  },
  {
    "word": "掘る",
    "reading": "ほる",
    "meaning": "to dig, to excavate",
    "level": "2"
  },
  {
    "word": "彫る",
    "reading": "ほる",
    "meaning": "to carve, to chisel",
    "level": "2"
  },
  {
    "word": "ぼろ",
    "reading": "ぼろ",
    "meaning": "rag, tattered clothes",
    "level": "2"
  },
  {
    "word": "盆",
    "reading": "ぼん",
    "meaning": "Festival of the Dead; tray",
    "level": "2"
  },
  {
    "word": "盆地",
    "reading": "ぼんち",
    "meaning": "basin (e.g., between mountains)",
    "level": "2"
  },
  {
    "word": "ほんの～",
    "reading": "ほんの～",
    "meaning": "mere, just",
    "level": "2"
  },
  {
    "word": "本部",
    "reading": "ほんぶ",
    "meaning": "headquarters",
    "level": "2"
  },
  {
    "word": "本来",
    "reading": "ほんらい",
    "meaning": "essentially, naturally, by nature",
    "level": "2"
  },
  {
    "word": "まあまあ",
    "reading": "まあまあ",
    "meaning": "okay; so-so; decent",
    "level": "2"
  },
  {
    "word": "毎～",
    "reading": "まい～",
    "meaning": "every ~",
    "level": "2"
  },
  {
    "word": "枚数",
    "reading": "まいすう",
    "meaning": "the number of flat things",
    "level": "2"
  },
  {
    "word": "毎度",
    "reading": "まいど",
    "meaning": "each time, common service-sector greeting",
    "level": "2"
  },
  {
    "word": "まく",
    "reading": "まく",
    "meaning": "to wind, to coil, to roll",
    "level": "2"
  },
  {
    "word": "枕",
    "reading": "まくら",
    "meaning": "pillow",
    "level": "2"
  },
  {
    "word": "曲げる",
    "reading": "まげる",
    "meaning": "to bend, to crook, to lean",
    "level": "2"
  },
  {
    "word": "まごまご",
    "reading": "まごまご",
    "meaning": "confused, be at a loss",
    "level": "2"
  },
  {
    "word": "摩擦",
    "reading": "まさつ",
    "meaning": "friction; rubbing; chafe",
    "level": "2"
  },
  {
    "word": "まざる",
    "reading": "まざる",
    "meaning": "to be mixed, to be blended with, to associate with",
    "level": "2"
  },
  {
    "word": "まじる",
    "reading": "まじる",
    "meaning": "to be mixed, to be blended with, to associate with",
    "level": "2"
  },
  {
    "word": "マスク",
    "reading": "マスク",
    "meaning": "mask",
    "level": "2"
  },
  {
    "word": "まぜる",
    "reading": "まぜる",
    "meaning": "to mix, to stir",
    "level": "2"
  },
  {
    "word": "またぐ",
    "reading": "またぐ",
    "meaning": "to straddle",
    "level": "2"
  },
  {
    "word": "跨ぐ",
    "reading": "またぐ",
    "meaning": "to step over/across, to stride over/across, to cross to stretch over, to span, to bridge, to saddle, to straddle",
    "level": "2"
  },
  {
    "word": "待合室",
    "reading": "まちあいしつ",
    "meaning": "waiting room",
    "level": "2"
  },
  {
    "word": "待ち合わせる",
    "reading": "まちあわせる",
    "meaning": "to rendezvous, to meet at a prearranged place and time",
    "level": "2"
  },
  {
    "word": "街角",
    "reading": "まちかど",
    "meaning": "street corner",
    "level": "2"
  },
  {
    "word": "真っ暗",
    "reading": "まっくら",
    "meaning": "total darkness",
    "level": "2"
  },
  {
    "word": "真っ黒",
    "reading": "まっくろ",
    "meaning": "pitch black",
    "level": "2"
  },
  {
    "word": "真っ青",
    "reading": "まっさお",
    "meaning": "deep blue, ghastly pale",
    "level": "2"
  },
  {
    "word": "真っ先",
    "reading": "まっさき",
    "meaning": "foremost, beginning",
    "level": "2"
  },
  {
    "word": "真っ白",
    "reading": "まっしろ",
    "meaning": "pure white",
    "level": "2"
  },
  {
    "word": "祭る",
    "reading": "まつる",
    "meaning": "to deify, to enshrine",
    "level": "2"
  },
  {
    "word": "窓口",
    "reading": "まどぐち",
    "meaning": "(ticket) window",
    "level": "2"
  },
  {
    "word": "真似る",
    "reading": "まねる",
    "meaning": "to mimic, to imitate",
    "level": "2"
  },
  {
    "word": "まぶた",
    "reading": "まぶた",
    "meaning": "eyelids",
    "level": "2"
  },
  {
    "word": "マフラー",
    "reading": "マフラー",
    "meaning": "a winter scarf",
    "level": "2"
  },
  {
    "word": "間も無く",
    "reading": "まもなく",
    "meaning": "soon, in a short time",
    "level": "2"
  },
  {
    "word": "間もなく",
    "reading": "まもなく",
    "meaning": "soon, shortly, before long, in a short time, in a little while",
    "level": "2"
  },
  {
    "word": "マラソン",
    "reading": "マラソン",
    "meaning": "marathon",
    "level": "2"
  },
  {
    "word": "稀",
    "reading": "まれ",
    "meaning": "rare, seldom",
    "level": "2"
  },
  {
    "word": "回り道",
    "reading": "まわりみち",
    "meaning": "detour",
    "level": "2"
  },
  {
    "word": "満員",
    "reading": "まんいん",
    "meaning": "full house, no vacancy, sold out",
    "level": "2"
  },
  {
    "word": "マンション",
    "reading": "マンション",
    "meaning": "multistory apartment house, condominium",
    "level": "2"
  },
  {
    "word": "満点",
    "reading": "まんてん",
    "meaning": "perfect score",
    "level": "2"
  },
  {
    "word": "未～",
    "reading": "み～",
    "meaning": "not yet ~",
    "level": "2"
  },
  {
    "word": "見上げる",
    "reading": "みあげる",
    "meaning": "to look up at, to admire",
    "level": "2"
  },
  {
    "word": "見送る",
    "reading": "みおくる",
    "meaning": "to see off; to escort; to let pass",
    "level": "2"
  },
  {
    "word": "見下ろす",
    "reading": "みおろす",
    "meaning": "to overlook, to look down on something",
    "level": "2"
  },
  {
    "word": "見掛け",
    "reading": "みかけ",
    "meaning": "outward appearance",
    "level": "2"
  },
  {
    "word": "三日月",
    "reading": "みかづき",
    "meaning": "crescent moon",
    "level": "2"
  },
  {
    "word": "岬",
    "reading": "みさき",
    "meaning": "cape (on coast)",
    "level": "2"
  },
  {
    "word": "みじめ",
    "reading": "みじめ",
    "meaning": "sad, pitiful, wretched",
    "level": "2"
  },
  {
    "word": "惨めな",
    "reading": "みじめな",
    "meaning": "miserable, wretched, unhappy, sad, pitiable",
    "level": "2"
  },
  {
    "word": "ミシン",
    "reading": "ミシン",
    "meaning": "sewing machine",
    "level": "2"
  },
  {
    "word": "自ら",
    "reading": "みずから",
    "meaning": "for one's self, personally",
    "level": "2"
  },
  {
    "word": "水着",
    "reading": "みずぎ",
    "meaning": "bathing suit (woman's)",
    "level": "2"
  },
  {
    "word": "店屋",
    "reading": "みせや",
    "meaning": "store, shop",
    "level": "2"
  },
  {
    "word": "見出し",
    "reading": "みだし",
    "meaning": "heading, index",
    "level": "2"
  },
  {
    "word": "道順",
    "reading": "みちじゅん",
    "meaning": "itinerary, route",
    "level": "2"
  },
  {
    "word": "みっともない",
    "reading": "みっともない",
    "meaning": "shameful, indecent",
    "level": "2"
  },
  {
    "word": "見詰める",
    "reading": "みつめる",
    "meaning": "to stare at, to gaze at",
    "level": "2"
  },
  {
    "word": "見直す",
    "reading": "みなおす",
    "meaning": "to look over again, to review",
    "level": "2"
  },
  {
    "word": "見慣れる",
    "reading": "みなれる",
    "meaning": "to become used to seeing, to be familiar with",
    "level": "2"
  },
  {
    "word": "醜い",
    "reading": "みにくい",
    "meaning": "ugly",
    "level": "2"
  },
  {
    "word": "実る",
    "reading": "みのる",
    "meaning": "to bear fruit, to ripen",
    "level": "2"
  },
  {
    "word": "身分",
    "reading": "みぶん",
    "meaning": "position, status",
    "level": "2"
  },
  {
    "word": "見本",
    "reading": "みほん",
    "meaning": "sample",
    "level": "2"
  },
  {
    "word": "見舞う",
    "reading": "みまう",
    "meaning": "to ask after (health), to visit",
    "level": "2"
  },
  {
    "word": "未満",
    "reading": "みまん",
    "meaning": "less than, insufficient",
    "level": "2"
  },
  {
    "word": "名字",
    "reading": "みょうじ",
    "meaning": "surname, family name",
    "level": "2"
  },
  {
    "word": "ミリ (メートル)",
    "reading": "ミリ (メートル)",
    "meaning": "milli-",
    "level": "2"
  },
  {
    "word": "診る",
    "reading": "みる",
    "meaning": "to examine (medically)",
    "level": "2"
  },
  {
    "word": "民間",
    "reading": "みんかん",
    "meaning": "private, civilian",
    "level": "2"
  },
  {
    "word": "民主～",
    "reading": "みんしゅ～",
    "meaning": "democratic",
    "level": "2"
  },
  {
    "word": "民謡",
    "reading": "みんよう",
    "meaning": "folk song, popular song",
    "level": "2"
  },
  {
    "word": "無限",
    "reading": "むげん",
    "meaning": "infinite",
    "level": "2"
  },
  {
    "word": "無地",
    "reading": "むじ",
    "meaning": "plain",
    "level": "2"
  },
  {
    "word": "蒸し暑い",
    "reading": "むしあつい",
    "meaning": "humid, sultry",
    "level": "2"
  },
  {
    "word": "矛盾",
    "reading": "むじゅん",
    "meaning": "contradiction, inconsistency",
    "level": "2"
  },
  {
    "word": "無数",
    "reading": "むすう",
    "meaning": "countless number, infinite number",
    "level": "2"
  },
  {
    "word": "紫",
    "reading": "むらさき",
    "meaning": "purple color, violet",
    "level": "2"
  },
  {
    "word": "群れ",
    "reading": "むれ",
    "meaning": "crowd, flock, herd",
    "level": "2"
  },
  {
    "word": "姪",
    "reading": "めい",
    "meaning": "niece",
    "level": "2"
  },
  {
    "word": "名～",
    "reading": "めい～",
    "meaning": "famous ~",
    "level": "2"
  },
  {
    "word": "名作",
    "reading": "めいさく",
    "meaning": "masterpiece",
    "level": "2"
  },
  {
    "word": "名詞",
    "reading": "めいし",
    "meaning": "noun",
    "level": "2"
  },
  {
    "word": "名刺",
    "reading": "めいし",
    "meaning": "business card",
    "level": "2"
  },
  {
    "word": "名所",
    "reading": "めいしょ",
    "meaning": "famous place",
    "level": "2"
  },
  {
    "word": "迷信",
    "reading": "めいしん",
    "meaning": "superstition",
    "level": "2"
  },
  {
    "word": "命ずる",
    "reading": "めいずる",
    "meaning": "to command, to appoint",
    "level": "2"
  },
  {
    "word": "名物",
    "reading": "めいぶつ",
    "meaning": "famous product, special product, speciality",
    "level": "2"
  },
  {
    "word": "銘々",
    "reading": "めいめい",
    "meaning": "each, individual",
    "level": "2"
  },
  {
    "word": "恵まれる",
    "reading": "めぐまれる",
    "meaning": "to be blessed with, to be rich in",
    "level": "2"
  },
  {
    "word": "巡る",
    "reading": "めぐる",
    "meaning": "to go around",
    "level": "2"
  },
  {
    "word": "目指す",
    "reading": "めざす",
    "meaning": "to aim at, to have an eye on",
    "level": "2"
  },
  {
    "word": "目覚し",
    "reading": "めざまし",
    "meaning": "alarm-clock",
    "level": "2"
  },
  {
    "word": "目下",
    "reading": "めした",
    "meaning": "at present, now",
    "level": "2"
  },
  {
    "word": "目印",
    "reading": "めじるし",
    "meaning": "mark, sign, landmark",
    "level": "2"
  },
  {
    "word": "目立つ",
    "reading": "めだつ",
    "meaning": "to be conspicuous, to stand out",
    "level": "2"
  },
  {
    "word": "めちゃくちゃ",
    "reading": "めちゃくちゃ",
    "meaning": "absurd, messed up, wrecked",
    "level": "2"
  },
  {
    "word": "めっきり",
    "reading": "めっきり",
    "meaning": "remarkably",
    "level": "2"
  },
  {
    "word": "めでたい",
    "reading": "めでたい",
    "meaning": "happy, propitious, joyous",
    "level": "2"
  },
  {
    "word": "メニュー",
    "reading": "メニュー",
    "meaning": "menu",
    "level": "2"
  },
  {
    "word": "めまい",
    "reading": "めまい",
    "meaning": "dizziness, giddiness",
    "level": "2"
  },
  {
    "word": "目安",
    "reading": "めやす",
    "meaning": "criterion, aim",
    "level": "2"
  },
  {
    "word": "免税",
    "reading": "めんぜい",
    "meaning": "tax exemption",
    "level": "2"
  },
  {
    "word": "面積",
    "reading": "めんせき",
    "meaning": "area",
    "level": "2"
  },
  {
    "word": "面接",
    "reading": "めんせつ",
    "meaning": "interview",
    "level": "2"
  },
  {
    "word": "面倒臭い",
    "reading": "めんどうくさい",
    "meaning": "bother to do, tiresome",
    "level": "2"
  },
  {
    "word": "モーター",
    "reading": "モーター",
    "meaning": "motor",
    "level": "2"
  },
  {
    "word": "儲かる",
    "reading": "もうかる",
    "meaning": "to be profitable, to yield a profit",
    "level": "2"
  },
  {
    "word": "儲ける",
    "reading": "もうける",
    "meaning": "to earn, to have (bear, beget) a child",
    "level": "2"
  },
  {
    "word": "申し訳ない",
    "reading": "もうしわけない",
    "meaning": "inexcusable, I am sorry",
    "level": "2"
  },
  {
    "word": "木材",
    "reading": "もくざい",
    "meaning": "lumber, timber, wood",
    "level": "2"
  },
  {
    "word": "目次",
    "reading": "もくじ",
    "meaning": "table of contents",
    "level": "2"
  },
  {
    "word": "潜る",
    "reading": "もぐる",
    "meaning": "to dive, to pass through; to evade, to hide",
    "level": "2"
  },
  {
    "word": "もしかしたら",
    "reading": "もしかしたら",
    "meaning": "perhaps, maybe, by some chance",
    "level": "2"
  },
  {
    "word": "もたれる",
    "reading": "もたれる",
    "meaning": "to lean against, to lean on",
    "level": "2"
  },
  {
    "word": "凭れる",
    "reading": "もたれる",
    "meaning": "to lean against, to lean on, to recline on",
    "level": "2"
  },
  {
    "word": "モダン",
    "reading": "モダン",
    "meaning": "modern",
    "level": "2"
  },
  {
    "word": "餅",
    "reading": "もち",
    "meaning": "sticky rice cake",
    "level": "2"
  },
  {
    "word": "モデル",
    "reading": "モデル",
    "meaning": "a fashion model",
    "level": "2"
  },
  {
    "word": "元々",
    "reading": "もともと",
    "meaning": "originally, by nature, from the start",
    "level": "2"
  },
  {
    "word": "物置",
    "reading": "ものおき",
    "meaning": "storage room",
    "level": "2"
  },
  {
    "word": "物語る",
    "reading": "ものがたる",
    "meaning": "to tell, to indicate",
    "level": "2"
  },
  {
    "word": "物差し",
    "reading": "ものさし",
    "meaning": "ruler, measure",
    "level": "2"
  },
  {
    "word": "物凄い",
    "reading": "ものすごい",
    "meaning": "earth-shattering, staggering, to a very great extent",
    "level": "2"
  },
  {
    "word": "モノレール",
    "reading": "モノレール",
    "meaning": "monorail",
    "level": "2"
  },
  {
    "word": "紅葉",
    "reading": "もみじ",
    "meaning": "(Japanese) maple",
    "level": "2"
  },
  {
    "word": "揉む",
    "reading": "もむ",
    "meaning": "to rub, to crumple (up), to wrinkle",
    "level": "2"
  },
  {
    "word": "もやす",
    "reading": "もやす",
    "meaning": "to burn",
    "level": "2"
  },
  {
    "word": "催し",
    "reading": "もよおし",
    "meaning": "event, festivities, function",
    "level": "2"
  },
  {
    "word": "盛る",
    "reading": "もる",
    "meaning": "to serve (food); to fill up; to prescribe",
    "level": "2"
  },
  {
    "word": "問答",
    "reading": "もんどう",
    "meaning": "questions and answers, dialogue",
    "level": "2"
  },
  {
    "word": "やかましい",
    "reading": "やかましい",
    "meaning": "to be fussy, to be overly critical",
    "level": "2"
  },
  {
    "word": "喧しい",
    "reading": "やかましい",
    "meaning": "noisy, loud, clamorous, boisterous",
    "level": "2"
  },
  {
    "word": "夜間",
    "reading": "やかん",
    "meaning": "at night, nighttime",
    "level": "2"
  },
  {
    "word": "やかん",
    "reading": "やかん",
    "meaning": "kettle",
    "level": "2"
  },
  {
    "word": "やかん",
    "reading": "やかん",
    "meaning": "kettle",
    "level": "2"
  },
  {
    "word": "役者",
    "reading": "やくしゃ",
    "meaning": "actor",
    "level": "2"
  },
  {
    "word": "役所",
    "reading": "やくしょ",
    "meaning": "government office, public office",
    "level": "2"
  },
  {
    "word": "役人",
    "reading": "やくにん",
    "meaning": "government official",
    "level": "2"
  },
  {
    "word": "薬品",
    "reading": "やくひん",
    "meaning": "medicine(s), chemical(s)",
    "level": "2"
  },
  {
    "word": "役目",
    "reading": "やくめ",
    "meaning": "duty, business",
    "level": "2"
  },
  {
    "word": "火傷",
    "reading": "やけど",
    "meaning": "burn, scald",
    "level": "2"
  },
  {
    "word": "夜行",
    "reading": "やこう",
    "meaning": "night train, night travel",
    "level": "2"
  },
  {
    "word": "矢印",
    "reading": "やじるし",
    "meaning": "directing arrow",
    "level": "2"
  },
  {
    "word": "やたらに",
    "reading": "やたらに",
    "meaning": "randomly, recklessly, blindly",
    "level": "2"
  },
  {
    "word": "薬局",
    "reading": "やっきょく",
    "meaning": "pharmacy, drugstore",
    "level": "2"
  },
  {
    "word": "やっつける",
    "reading": "やっつける",
    "meaning": "to attack (an enemy), to beat, to finish off",
    "level": "2"
  },
  {
    "word": "やっぱり",
    "reading": "やっぱり",
    "meaning": "after all, anyway",
    "level": "2"
  },
  {
    "word": "家主",
    "reading": "やぬし",
    "meaning": "landlord",
    "level": "2"
  },
  {
    "word": "破く",
    "reading": "やぶく",
    "meaning": "to tear",
    "level": "2"
  },
  {
    "word": "やむをえない",
    "reading": "やむをえない",
    "meaning": "cannot be helped, unavoidable",
    "level": "2"
  },
  {
    "word": "軟らかい",
    "reading": "やわらかい",
    "meaning": "soft, tender, limp",
    "level": "2"
  },
  {
    "word": "遊園地",
    "reading": "ゆうえんち",
    "meaning": "amusement park",
    "level": "2"
  },
  {
    "word": "夕刊",
    "reading": "ゆうかん",
    "meaning": "evening paper",
    "level": "2"
  },
  {
    "word": "友好",
    "reading": "ゆうこう",
    "meaning": "friendship",
    "level": "2"
  },
  {
    "word": "郵送",
    "reading": "ゆうそう",
    "meaning": "mailing",
    "level": "2"
  },
  {
    "word": "夕立",
    "reading": "ゆうだち",
    "meaning": "(sudden) evening shower (rain)",
    "level": "2"
  },
  {
    "word": "夕日",
    "reading": "ゆうひ",
    "meaning": "(in) the evening sun, setting sun",
    "level": "2"
  },
  {
    "word": "悠々",
    "reading": "ゆうゆう",
    "meaning": "quiet, calm, leisurely",
    "level": "2"
  },
  {
    "word": "有料",
    "reading": "ゆうりょう",
    "meaning": "admission-paid, toll",
    "level": "2"
  },
  {
    "word": "浴衣",
    "reading": "ゆかた",
    "meaning": "bathrobe, informal summer kimono",
    "level": "2"
  },
  {
    "word": "行方",
    "reading": "ゆくえ",
    "meaning": "one's whereabouts",
    "level": "2"
  },
  {
    "word": "湯気",
    "reading": "ゆげ",
    "meaning": "steam",
    "level": "2"
  },
  {
    "word": "輸血",
    "reading": "ゆけつ",
    "meaning": "blood transfusion",
    "level": "2"
  },
  {
    "word": "輸送",
    "reading": "ゆそう",
    "meaning": "transport, transportation",
    "level": "2"
  },
  {
    "word": "油断",
    "reading": "ゆだん",
    "meaning": "negligence, unpreparedness",
    "level": "2"
  },
  {
    "word": "湯飲み",
    "reading": "ゆのみ",
    "meaning": "teacup",
    "level": "2"
  },
  {
    "word": "湯飲",
    "reading": "ゆのみ",
    "meaning": "teacup",
    "level": "2"
  },
  {
    "word": "緩い",
    "reading": "ゆるい",
    "meaning": "loose, lenient, slow",
    "level": "2"
  },
  {
    "word": "溶岩",
    "reading": "ようがん",
    "meaning": "lava",
    "level": "2"
  },
  {
    "word": "容器",
    "reading": "ようき",
    "meaning": "container, receptacle, vessel, packaging",
    "level": "2"
  },
  {
    "word": "用語",
    "reading": "ようご",
    "meaning": "term, terminology",
    "level": "2"
  },
  {
    "word": "要旨",
    "reading": "ようし",
    "meaning": "gist, essentials, summary",
    "level": "2"
  },
  {
    "word": "幼児",
    "reading": "ようじ",
    "meaning": "infant, baby, child",
    "level": "2"
  },
  {
    "word": "容積",
    "reading": "ようせき",
    "meaning": "capacity, volume",
    "level": "2"
  },
  {
    "word": "幼稚",
    "reading": "ようち",
    "meaning": "infancy, childish, infantile",
    "level": "2"
  },
  {
    "word": "幼稚園",
    "reading": "ようちえん",
    "meaning": "kindergarten",
    "level": "2"
  },
  {
    "word": "用途",
    "reading": "ようと",
    "meaning": "use, usefulness",
    "level": "2"
  },
  {
    "word": "洋品店",
    "reading": "ようひんてん",
    "meaning": "clothes store",
    "level": "2"
  },
  {
    "word": "養分",
    "reading": "ようぶん",
    "meaning": "nourishment, nutrient",
    "level": "2"
  },
  {
    "word": "羊毛",
    "reading": "ようもう",
    "meaning": "wool",
    "level": "2"
  },
  {
    "word": "漸く",
    "reading": "ようやく",
    "meaning": "at last, finally, hardly",
    "level": "2"
  },
  {
    "word": "要領",
    "reading": "ようりょう",
    "meaning": "gist, essentials, outline",
    "level": "2"
  },
  {
    "word": "翌～",
    "reading": "よく～",
    "meaning": "next ~",
    "level": "2"
  },
  {
    "word": "欲張り",
    "reading": "よくばり",
    "meaning": "greedy",
    "level": "2"
  },
  {
    "word": "余計",
    "reading": "よけい",
    "meaning": "too much, unnecessary, abundance, surplus, excess, superfluity",
    "level": "2"
  },
  {
    "word": "よこす",
    "reading": "よこす",
    "meaning": "to send, to forward; to hand over (e.g., money)",
    "level": "2"
  },
  {
    "word": "よごす",
    "reading": "よごす",
    "meaning": "(1) to disgrace, to dishonour, (2) to pollute, to contaminate, to soil, to make dirty, to stain",
    "level": "2"
  },
  {
    "word": "寄せる",
    "reading": "よせる",
    "meaning": "to come near, to let someone approach to bring near, to bring together, to collect, to gather to deliver (opinion, news, etc.), to send (e.g. a letter), to contribute, to donate to let someone drop by",
    "level": "2"
  },
  {
    "word": "余所",
    "reading": "よそ",
    "meaning": "another place, somewhere else, strange parts",
    "level": "2"
  },
  {
    "word": "四つ角",
    "reading": "よつかど",
    "meaning": "four corners, crossroads",
    "level": "2"
  },
  {
    "word": "酔っ払い",
    "reading": "よっぱらい",
    "meaning": "drunkard",
    "level": "2"
  },
  {
    "word": "予備",
    "reading": "よび",
    "meaning": "preparation, spare",
    "level": "2"
  },
  {
    "word": "呼び掛ける",
    "reading": "よびかける",
    "meaning": "to call out to, to accost, to address (crowd), to appeal",
    "level": "2"
  },
  {
    "word": "呼び出す",
    "reading": "よびだす",
    "meaning": "to summon, to call (e.g., phone)",
    "level": "2"
  },
  {
    "word": "蘇る",
    "reading": "よみがえる",
    "meaning": "to be resurrected, to be revived",
    "level": "2"
  },
  {
    "word": "慶ぶ",
    "reading": "よろこぶ",
    "meaning": "to be delighted, to be glad",
    "level": "2"
  },
  {
    "word": "来日",
    "reading": "らいにち",
    "meaning": "coming to Japan, visit to Japan",
    "level": "2"
  },
  {
    "word": "落第",
    "reading": "らくだい",
    "meaning": "failure, dropping out of a class",
    "level": "2"
  },
  {
    "word": "ラッシュアワー",
    "reading": "ラッシュアワー",
    "meaning": "rush hour",
    "level": "2"
  },
  {
    "word": "欄",
    "reading": "らん",
    "meaning": "column of text (e.g., as in a newspaper)",
    "level": "2"
  },
  {
    "word": "ランチ",
    "reading": "ランチ",
    "meaning": "lunch",
    "level": "2"
  },
  {
    "word": "ランニング",
    "reading": "ランニング",
    "meaning": "running; tank top",
    "level": "2"
  },
  {
    "word": "乱暴",
    "reading": "らんぼう",
    "meaning": "rude, violent, rough",
    "level": "2"
  },
  {
    "word": "理科",
    "reading": "りか",
    "meaning": "science",
    "level": "2"
  },
  {
    "word": "利害",
    "reading": "りがい",
    "meaning": "advantages and disadvantages, interest",
    "level": "2"
  },
  {
    "word": "リズム",
    "reading": "リズム",
    "meaning": "rhythm",
    "level": "2"
  },
  {
    "word": "リットル",
    "reading": "リットル",
    "meaning": "liter",
    "level": "2"
  },
  {
    "word": "リポート",
    "reading": "リポート",
    "meaning": "report, paper",
    "level": "2"
  },
  {
    "word": "リボン",
    "reading": "リボン",
    "meaning": "ribbon",
    "level": "2"
  },
  {
    "word": "略す",
    "reading": "りゃくす",
    "meaning": "to abbreviate",
    "level": "2"
  },
  {
    "word": "流域",
    "reading": "りゅういき",
    "meaning": "(river) basin",
    "level": "2"
  },
  {
    "word": "寮",
    "reading": "りょう",
    "meaning": "hostel, dormitory",
    "level": "2"
  },
  {
    "word": "両～",
    "reading": "りょう～",
    "meaning": "both ~",
    "level": "2"
  },
  {
    "word": "両側",
    "reading": "りょうがわ",
    "meaning": "both sides",
    "level": "2"
  },
  {
    "word": "漁師",
    "reading": "りょうし",
    "meaning": "fisherman",
    "level": "2"
  },
  {
    "word": "領事",
    "reading": "りょうじ",
    "meaning": "consul",
    "level": "2"
  },
  {
    "word": "領収",
    "reading": "りょうしゅう",
    "meaning": "receipt, voucher",
    "level": "2"
  },
  {
    "word": "臨時",
    "reading": "りんじ",
    "meaning": "temporary, special, extraordinary",
    "level": "2"
  },
  {
    "word": "留守番",
    "reading": "るすばん",
    "meaning": "care-taking, caretaker, house-watching",
    "level": "2"
  },
  {
    "word": "例外",
    "reading": "れいがい",
    "meaning": "exception",
    "level": "2"
  },
  {
    "word": "零点",
    "reading": "れいてん",
    "meaning": "zero, no marks",
    "level": "2"
  },
  {
    "word": "冷凍",
    "reading": "れいとう",
    "meaning": "freezing, cold storage, refrigeration",
    "level": "2"
  },
  {
    "word": "レインコート",
    "reading": "レインコート",
    "meaning": "raincoat",
    "level": "2"
  },
  {
    "word": "レクリェーション",
    "reading": "レクリェーション",
    "meaning": "recreation",
    "level": "2"
  },
  {
    "word": "レジャー",
    "reading": "レジャー",
    "meaning": "leisure",
    "level": "2"
  },
  {
    "word": "列島",
    "reading": "れっとう",
    "meaning": "chain of islands",
    "level": "2"
  },
  {
    "word": "煉瓦",
    "reading": "れんが",
    "meaning": "brick",
    "level": "2"
  },
  {
    "word": "連合",
    "reading": "れんごう",
    "meaning": "union, alliance",
    "level": "2"
  },
  {
    "word": "レンズ",
    "reading": "レンズ",
    "meaning": "lens",
    "level": "2"
  },
  {
    "word": "ローマ字",
    "reading": "ローマじ",
    "meaning": "romanization, Roman letters (alphabet)",
    "level": "2"
  },
  {
    "word": "ろうそく",
    "reading": "ろうそく",
    "meaning": "candle",
    "level": "2"
  },
  {
    "word": "録音",
    "reading": "ろくおん",
    "meaning": "(audio) recording",
    "level": "2"
  },
  {
    "word": "ロッカー",
    "reading": "ロッカー",
    "meaning": "locker",
    "level": "2"
  },
  {
    "word": "ロビー",
    "reading": "ロビー",
    "meaning": "lobby",
    "level": "2"
  },
  {
    "word": "論ずる",
    "reading": "ろんずる",
    "meaning": "to argue, to discuss",
    "level": "2"
  },
  {
    "word": "和～",
    "reading": "わ～",
    "meaning": "Japanese style",
    "level": "2"
  },
  {
    "word": "和英",
    "reading": "わえい",
    "meaning": "Japanese-English",
    "level": "2"
  },
  {
    "word": "我～",
    "reading": "わが～",
    "meaning": "our ~",
    "level": "2"
  },
  {
    "word": "分かれる",
    "reading": "わかれる",
    "meaning": "to branch, to fork, to diverge to separate, to split, to divide to disperse, to scatter",
    "level": "2"
  },
  {
    "word": "若々しい",
    "reading": "わかわかしい",
    "meaning": "youthful, young",
    "level": "2"
  },
  {
    "word": "詫びる",
    "reading": "わびる",
    "meaning": "to apologize",
    "level": "2"
  },
  {
    "word": "和服",
    "reading": "わふく",
    "meaning": "Japanese clothes",
    "level": "2"
  },
  {
    "word": "割合に",
    "reading": "わりあいに",
    "meaning": "relatively, comparatively",
    "level": "2"
  },
  {
    "word": "割算",
    "reading": "わりざん",
    "meaning": "division (math)",
    "level": "2"
  },
  {
    "word": "割と",
    "reading": "わりと",
    "meaning": "relatively, comparatively",
    "level": "2"
  },
  {
    "word": "割引",
    "reading": "わりびき",
    "meaning": "discount",
    "level": "2"
  },
  {
    "word": "ワンピース",
    "reading": "ワンピース",
    "meaning": "one-piece dress",
    "level": "2"
  },
  {
    "word": "作法",
    "reading": "さほう",
    "meaning": "manners, etiquette, propriety",
    "level": "3"
  },
  {
    "word": "様々",
    "reading": "さまざま",
    "meaning": "varied, various",
    "level": "3"
  },
  {
    "word": "冷ます",
    "reading": "さます",
    "meaning": "to cool, to let cool",
    "level": "3"
  },
  {
    "word": "覚ます",
    "reading": "さます",
    "meaning": "to awaken",
    "level": "3"
  },
  {
    "word": "冷める",
    "reading": "さめる",
    "meaning": "to become cool, to wear off",
    "level": "3"
  },
  {
    "word": "覚める",
    "reading": "さめる",
    "meaning": "to wake, to wake up",
    "level": "3"
  },
  {
    "word": "左右",
    "reading": "さゆう",
    "meaning": "left and right; influence",
    "level": "3"
  },
  {
    "word": "皿",
    "reading": "さら",
    "meaning": "plate, dish",
    "level": "3"
  },
  {
    "word": "更に",
    "reading": "さらに",
    "meaning": "furthermore, moreover",
    "level": "3"
  },
  {
    "word": "去る",
    "reading": "さる",
    "meaning": "to leave, to go away",
    "level": "3"
  },
  {
    "word": "猿",
    "reading": "さる",
    "meaning": "monkey",
    "level": "3"
  },
  {
    "word": "騒ぎ",
    "reading": "さわぎ",
    "meaning": "uproar, disturbance",
    "level": "3"
  },
  {
    "word": "参加",
    "reading": "さんか",
    "meaning": "participation",
    "level": "3"
  },
  {
    "word": "参考",
    "reading": "さんこう",
    "meaning": "reference, consultation",
    "level": "3"
  },
  {
    "word": "賛成",
    "reading": "さんせい",
    "meaning": "approval, agreement",
    "level": "3"
  },
  {
    "word": "酸性",
    "reading": "さんせい",
    "meaning": "acidity",
    "level": "3"
  },
  {
    "word": "酸素",
    "reading": "さんそ",
    "meaning": "oxygen",
    "level": "3"
  },
  {
    "word": "氏",
    "reading": "し",
    "meaning": "family name, lineage",
    "level": "3"
  },
  {
    "word": "詩",
    "reading": "し",
    "meaning": "poem; poetry",
    "level": "3"
  },
  {
    "word": "幸せ",
    "reading": "しあわせ",
    "meaning": "happiness, blessing",
    "level": "3"
  },
  {
    "word": "ジーンズ",
    "reading": "ジーンズ",
    "meaning": "jeans",
    "level": "3"
  },
  {
    "word": "ジェット機",
    "reading": "ジェットき",
    "meaning": "jet plane",
    "level": "3"
  },
  {
    "word": "四角",
    "reading": "しかく",
    "meaning": "square",
    "level": "3"
  },
  {
    "word": "直に",
    "reading": "じかに",
    "meaning": "immediately, readily, directly",
    "level": "3"
  },
  {
    "word": "しかも",
    "reading": "しかも",
    "meaning": "moreover, furthermore, besides, plus",
    "level": "3"
  },
  {
    "word": "四季",
    "reading": "しき",
    "meaning": "four seasons",
    "level": "3"
  },
  {
    "word": "直",
    "reading": "じき",
    "meaning": "immediately, soon, shortly",
    "level": "3"
  },
  {
    "word": "時期",
    "reading": "じき",
    "meaning": "time, season, period",
    "level": "3"
  },
  {
    "word": "支給",
    "reading": "しきゅう",
    "meaning": "payment, allowance",
    "level": "3"
  },
  {
    "word": "至急",
    "reading": "しきゅう",
    "meaning": "urgent, pressing",
    "level": "3"
  },
  {
    "word": "しきりに",
    "reading": "しきりに",
    "meaning": "frequently, repeatedly, eagerly",
    "level": "3"
  },
  {
    "word": "刺激",
    "reading": "しげき",
    "meaning": "stimulus, impetus, incentive",
    "level": "3"
  },
  {
    "word": "資源",
    "reading": "しげん",
    "meaning": "resources",
    "level": "3"
  },
  {
    "word": "事件",
    "reading": "じけん",
    "meaning": "event, affair, incident",
    "level": "3"
  },
  {
    "word": "時刻",
    "reading": "じこく",
    "meaning": "time, hour",
    "level": "3"
  },
  {
    "word": "自殺",
    "reading": "じさつ",
    "meaning": "suicide",
    "level": "3"
  },
  {
    "word": "事実",
    "reading": "じじつ",
    "meaning": "fact, truth, reality",
    "level": "3"
  },
  {
    "word": "支出",
    "reading": "ししゅつ",
    "meaning": "expenditure, expenses",
    "level": "3"
  },
  {
    "word": "事情",
    "reading": "じじょう",
    "meaning": "circumstances, situation, reasons",
    "level": "3"
  },
  {
    "word": "詩人",
    "reading": "しじん",
    "meaning": "poet",
    "level": "3"
  },
  {
    "word": "自身",
    "reading": "じしん",
    "meaning": "oneself",
    "level": "3"
  },
  {
    "word": "沈む",
    "reading": "しずむ",
    "meaning": "to sink; to feel depressed",
    "level": "3"
  },
  {
    "word": "自然",
    "reading": "しぜん",
    "meaning": "nature, spontaneous",
    "level": "3"
  },
  {
    "word": "思想",
    "reading": "しそう",
    "meaning": "thought, idea",
    "level": "3"
  },
  {
    "word": "舌",
    "reading": "した",
    "meaning": "tongue",
    "level": "3"
  },
  {
    "word": "次第",
    "reading": "しだい",
    "meaning": "order; circumstances; immediate(ly)",
    "level": "3"
  },
  {
    "word": "従う",
    "reading": "したがう",
    "meaning": "to abide (by the rules), to obey",
    "level": "3"
  },
  {
    "word": "したがって",
    "reading": "したがって",
    "meaning": "therefore, consequently",
    "level": "3"
  },
  {
    "word": "親しい",
    "reading": "したしい",
    "meaning": "intimate, close (e.g., friend)",
    "level": "3"
  },
  {
    "word": "質",
    "reading": "しつ",
    "meaning": "quality, nature (of person)",
    "level": "3"
  },
  {
    "word": "失業",
    "reading": "しつぎょう",
    "meaning": "unemployment",
    "level": "3"
  },
  {
    "word": "湿気",
    "reading": "しっけ",
    "meaning": "moisture, humidity, dampness",
    "level": "3"
  },
  {
    "word": "実験",
    "reading": "じっけん",
    "meaning": "lab work; experiment",
    "level": "3"
  },
  {
    "word": "実現",
    "reading": "じつげん",
    "meaning": "implementation, materialization, realization",
    "level": "3"
  },
  {
    "word": "実行",
    "reading": "じっこう",
    "meaning": "practice, execution (e.g., program), realization",
    "level": "3"
  },
  {
    "word": "実際",
    "reading": "じっさい",
    "meaning": "in fact; in actuality",
    "level": "3"
  },
  {
    "word": "実施",
    "reading": "じっし",
    "meaning": "enforcement, carry out, operation",
    "level": "3"
  },
  {
    "word": "湿度",
    "reading": "しつど",
    "meaning": "humidity",
    "level": "3"
  },
  {
    "word": "じっと",
    "reading": "じっと",
    "meaning": "patiently, quietly",
    "level": "3"
  },
  {
    "word": "実に",
    "reading": "じつに",
    "meaning": "indeed, truly, surely",
    "level": "3"
  },
  {
    "word": "実は",
    "reading": "じつは",
    "meaning": "actually; in fact",
    "level": "3"
  },
  {
    "word": "失望",
    "reading": "しつぼう",
    "meaning": "disappointment, despair",
    "level": "3"
  },
  {
    "word": "実力",
    "reading": "じつりょく",
    "meaning": "ability; force",
    "level": "3"
  },
  {
    "word": "支店",
    "reading": "してん",
    "meaning": "branch store (office)",
    "level": "3"
  },
  {
    "word": "指導",
    "reading": "しどう",
    "meaning": "leadership, guidance, coaching",
    "level": "3"
  },
  {
    "word": "自動",
    "reading": "じどう",
    "meaning": "automatic, self-motion",
    "level": "3"
  },
  {
    "word": "児童",
    "reading": "じどう",
    "meaning": "children, juvenile",
    "level": "3"
  },
  {
    "word": "品",
    "reading": "しな",
    "meaning": "thing, article, goods",
    "level": "3"
  },
  {
    "word": "支配",
    "reading": "しはい",
    "meaning": "rule, control, direction",
    "level": "3"
  },
  {
    "word": "芝居",
    "reading": "しばい",
    "meaning": "play, drama",
    "level": "3"
  },
  {
    "word": "しばしば",
    "reading": "しばしば",
    "meaning": "often, again and again, frequently",
    "level": "3"
  },
  {
    "word": "芝生",
    "reading": "しばふ",
    "meaning": "lawn",
    "level": "3"
  },
  {
    "word": "支払",
    "reading": "しはらい",
    "meaning": "payment",
    "level": "3"
  },
  {
    "word": "支払う",
    "reading": "しはらう",
    "meaning": "to pay",
    "level": "3"
  },
  {
    "word": "死亡",
    "reading": "しぼう",
    "meaning": "death",
    "level": "3"
  },
  {
    "word": "資本",
    "reading": "しほん",
    "meaning": "funds, capital",
    "level": "3"
  },
  {
    "word": "姉妹",
    "reading": "しまい",
    "meaning": "sisters",
    "level": "3"
  },
  {
    "word": "しまった (かん)",
    "reading": "しまった (かん)",
    "meaning": "Damn it!",
    "level": "3"
  },
  {
    "word": "自慢",
    "reading": "じまん",
    "meaning": "pride, boast",
    "level": "3"
  },
  {
    "word": "地味",
    "reading": "じみ",
    "meaning": "quiet, plain, conservative",
    "level": "3"
  },
  {
    "word": "示す",
    "reading": "しめす",
    "meaning": "to show, to indicate",
    "level": "3"
  },
  {
    "word": "占める",
    "reading": "しめる",
    "meaning": "to take up; to account for",
    "level": "3"
  },
  {
    "word": "湿る",
    "reading": "しめる",
    "meaning": "to be wet, to be damp",
    "level": "3"
  },
  {
    "word": "下",
    "reading": "しも",
    "meaning": "under, below, beneath",
    "level": "3"
  },
  {
    "word": "霜",
    "reading": "しも",
    "meaning": "frost",
    "level": "3"
  },
  {
    "word": "借金",
    "reading": "しゃっきん",
    "meaning": "debt, loan, liabilities",
    "level": "3"
  },
  {
    "word": "しゃべる",
    "reading": "しゃべる",
    "meaning": "to talk, to chat, to chatter (same as 話す (はなす))",
    "level": "3"
  },
  {
    "word": "週",
    "reading": "しゅう",
    "meaning": "week",
    "level": "3"
  },
  {
    "word": "州",
    "reading": "しゅう",
    "meaning": "state, province",
    "level": "3"
  },
  {
    "word": "銃",
    "reading": "じゅう",
    "meaning": "gun",
    "level": "3"
  },
  {
    "word": "周囲",
    "reading": "しゅうい",
    "meaning": "surroundings, circumference, environs",
    "level": "3"
  },
  {
    "word": "収穫",
    "reading": "しゅうかく",
    "meaning": "harvest, crop, ingathering",
    "level": "3"
  },
  {
    "word": "宗教",
    "reading": "しゅうきょう",
    "meaning": "religion",
    "level": "3"
  },
  {
    "word": "重視",
    "reading": "じゅうし",
    "meaning": "importance, stress",
    "level": "3"
  },
  {
    "word": "就職",
    "reading": "しゅうしょく",
    "meaning": "finding employment",
    "level": "3"
  },
  {
    "word": "ジュース",
    "reading": "ジュース",
    "meaning": "juice, soft drink; deuce",
    "level": "3"
  },
  {
    "word": "修正",
    "reading": "しゅうせい",
    "meaning": "amendment, correction",
    "level": "3"
  },
  {
    "word": "重体",
    "reading": "じゅうたい",
    "meaning": "seriously ill, critical state",
    "level": "3"
  },
  {
    "word": "渋滞",
    "reading": "じゅうたい",
    "meaning": "congestion (e.g., traffic), delay",
    "level": "3"
  },
  {
    "word": "重大",
    "reading": "じゅうだい",
    "meaning": "serious, important",
    "level": "3"
  },
  {
    "word": "住宅",
    "reading": "じゅうたく",
    "meaning": "resident, housing",
    "level": "3"
  },
  {
    "word": "集団",
    "reading": "しゅうだん",
    "meaning": "group, mass",
    "level": "3"
  },
  {
    "word": "集中",
    "reading": "しゅうちゅう",
    "meaning": "concentration, focusing the mind",
    "level": "3"
  },
  {
    "word": "収入",
    "reading": "しゅうにゅう",
    "meaning": "income, revenue",
    "level": "3"
  },
  {
    "word": "住民",
    "reading": "じゅうみん",
    "meaning": "inhabitants, residents",
    "level": "3"
  },
  {
    "word": "重要",
    "reading": "じゅうよう",
    "meaning": "important, essential",
    "level": "3"
  },
  {
    "word": "修理",
    "reading": "しゅうり",
    "meaning": "repairing, mending",
    "level": "3"
  },
  {
    "word": "主義",
    "reading": "しゅぎ",
    "meaning": "doctrine, cause, principle",
    "level": "3"
  },
  {
    "word": "宿泊",
    "reading": "しゅくはく",
    "meaning": "lodging",
    "level": "3"
  },
  {
    "word": "手術",
    "reading": "しゅじゅつ",
    "meaning": "surgical operation",
    "level": "3"
  },
  {
    "word": "首相",
    "reading": "しゅしょう",
    "meaning": "Prime Minister",
    "level": "3"
  },
  {
    "word": "手段",
    "reading": "しゅだん",
    "meaning": "means, way, measure",
    "level": "3"
  },
  {
    "word": "主張",
    "reading": "しゅちょう",
    "meaning": "claim, insistence, assertion",
    "level": "3"
  },
  {
    "word": "出場",
    "reading": "しゅつじょう",
    "meaning": "participation",
    "level": "3"
  },
  {
    "word": "出身",
    "reading": "しゅっしん",
    "meaning": "come from",
    "level": "3"
  },
  {
    "word": "出版",
    "reading": "しゅっぱん",
    "meaning": "publication",
    "level": "3"
  },
  {
    "word": "首都",
    "reading": "しゅと",
    "meaning": "capital city",
    "level": "3"
  },
  {
    "word": "主婦",
    "reading": "しゅふ",
    "meaning": "housewife",
    "level": "3"
  },
  {
    "word": "主要",
    "reading": "しゅよう",
    "meaning": "chief, main",
    "level": "3"
  },
  {
    "word": "需要",
    "reading": "じゅよう",
    "meaning": "demand",
    "level": "3"
  },
  {
    "word": "種類",
    "reading": "しゅるい",
    "meaning": "variety, kind",
    "level": "3"
  },
  {
    "word": "順",
    "reading": "じゅん",
    "meaning": "order, turn",
    "level": "3"
  },
  {
    "word": "瞬間",
    "reading": "しゅんかん",
    "meaning": "moment, second",
    "level": "3"
  },
  {
    "word": "順調",
    "reading": "じゅんちょう",
    "meaning": "doing well",
    "level": "3"
  },
  {
    "word": "順番",
    "reading": "じゅんばん",
    "meaning": "turn (in line), order of things",
    "level": "3"
  },
  {
    "word": "使用",
    "reading": "しよう",
    "meaning": "use (same as 使うこと (つかうこと)), application, employment, utilization",
    "level": "3"
  },
  {
    "word": "小",
    "reading": "しょう",
    "meaning": "small",
    "level": "3"
  },
  {
    "word": "章",
    "reading": "しょう",
    "meaning": "chapter, section; medal",
    "level": "3"
  },
  {
    "word": "賞",
    "reading": "しょう",
    "meaning": "prize, award",
    "level": "3"
  },
  {
    "word": "上",
    "reading": "じょう",
    "meaning": "first volume; superior quality; governmental",
    "level": "3"
  },
  {
    "word": "障害",
    "reading": "しょうがい",
    "meaning": "obstacle, impediment",
    "level": "3"
  },
  {
    "word": "奨学金",
    "reading": "しょうがくきん",
    "meaning": "scholarship",
    "level": "3"
  },
  {
    "word": "乗客",
    "reading": "じょうきゃく",
    "meaning": "passenger",
    "level": "3"
  },
  {
    "word": "上京",
    "reading": "じょうきょう",
    "meaning": "proceeding to the capital (Tokyo)",
    "level": "3"
  },
  {
    "word": "状況",
    "reading": "じょうきょう",
    "meaning": "state of affairs, situation",
    "level": "3"
  },
  {
    "word": "条件",
    "reading": "じょうけん",
    "meaning": "conditions, terms",
    "level": "3"
  },
  {
    "word": "正午",
    "reading": "しょうご",
    "meaning": "noon, mid-day",
    "level": "3"
  },
  {
    "word": "正直",
    "reading": "しょうじき",
    "meaning": "honesty, integrity, frankness",
    "level": "3"
  },
  {
    "word": "常識",
    "reading": "じょうしき",
    "meaning": "common sense",
    "level": "3"
  },
  {
    "word": "少女",
    "reading": "しょうじょ",
    "meaning": "young girl",
    "level": "3"
  },
  {
    "word": "少々",
    "reading": "しょうしょう",
    "meaning": "a little; short (time) (formal for 少し (すこし))",
    "level": "3"
  },
  {
    "word": "症状",
    "reading": "しょうじょう",
    "meaning": "symptoms, condition",
    "level": "3"
  },
  {
    "word": "生じる",
    "reading": "しょうじる",
    "meaning": "to occur, to arise, to be generated",
    "level": "3"
  },
  {
    "word": "状態",
    "reading": "じょうたい",
    "meaning": "condition, situation",
    "level": "3"
  },
  {
    "word": "上達",
    "reading": "じょうたつ",
    "meaning": "improvement, advance",
    "level": "3"
  },
  {
    "word": "冗談",
    "reading": "じょうだん",
    "meaning": "a joke",
    "level": "3"
  },
  {
    "word": "上等",
    "reading": "じょうとう",
    "meaning": "first class, very good",
    "level": "3"
  },
  {
    "word": "衝突",
    "reading": "しょうとつ",
    "meaning": "collision, conflict",
    "level": "3"
  },
  {
    "word": "商人",
    "reading": "しょうにん",
    "meaning": "trader, shopkeeper, merchant",
    "level": "3"
  },
  {
    "word": "承認",
    "reading": "しょうにん",
    "meaning": "recognition, approval",
    "level": "3"
  },
  {
    "word": "少年",
    "reading": "しょうねん",
    "meaning": "boys, juveniles",
    "level": "3"
  },
  {
    "word": "商売",
    "reading": "しょうばい",
    "meaning": "trade, business, commerce",
    "level": "3"
  },
  {
    "word": "消費",
    "reading": "しょうひ",
    "meaning": "consumption, expenditure",
    "level": "3"
  },
  {
    "word": "商品",
    "reading": "しょうひん",
    "meaning": "commodity, merchandise",
    "level": "3"
  },
  {
    "word": "賞品",
    "reading": "しょうひん",
    "meaning": "prize, trophy",
    "level": "3"
  },
  {
    "word": "消防",
    "reading": "しょうぼう",
    "meaning": "fire fighting, fire department",
    "level": "3"
  },
  {
    "word": "情報",
    "reading": "じょうほう",
    "meaning": "information, (military) intelligence",
    "level": "3"
  },
  {
    "word": "証明",
    "reading": "しょうめい",
    "meaning": "proof, verification",
    "level": "3"
  },
  {
    "word": "省略",
    "reading": "しょうりゃく",
    "meaning": "omission, abbreviation, abridgment",
    "level": "3"
  },
  {
    "word": "女王",
    "reading": "じょおう",
    "meaning": "queen",
    "level": "3"
  },
  {
    "word": "職",
    "reading": "しょく",
    "meaning": "employment",
    "level": "3"
  },
  {
    "word": "職業",
    "reading": "しょくぎょう",
    "meaning": "occupation, business",
    "level": "3"
  },
  {
    "word": "食卓",
    "reading": "しょくたく",
    "meaning": "dining table",
    "level": "3"
  },
  {
    "word": "食品",
    "reading": "しょくひん",
    "meaning": "foodstuff",
    "level": "3"
  },
  {
    "word": "植物",
    "reading": "しょくぶつ",
    "meaning": "plant, vegetation",
    "level": "3"
  },
  {
    "word": "食物",
    "reading": "しょくもつ",
    "meaning": "food, foodstuff",
    "level": "3"
  },
  {
    "word": "食欲",
    "reading": "しょくよく",
    "meaning": "appetite (for food)",
    "level": "3"
  },
  {
    "word": "食料",
    "reading": "しょくりょう",
    "meaning": "food",
    "level": "3"
  },
  {
    "word": "食糧",
    "reading": "しょくりょう",
    "meaning": "provisions, rations",
    "level": "3"
  },
  {
    "word": "書斎",
    "reading": "しょさい",
    "meaning": "study, den",
    "level": "3"
  },
  {
    "word": "女子",
    "reading": "じょし",
    "meaning": "woman, girl",
    "level": "3"
  },
  {
    "word": "助手",
    "reading": "じょしゅ",
    "meaning": "helper, assistant",
    "level": "3"
  },
  {
    "word": "徐々に",
    "reading": "じょじょに",
    "meaning": "slowly, little by little",
    "level": "3"
  },
  {
    "word": "署名",
    "reading": "しょめい",
    "meaning": "signature",
    "level": "3"
  },
  {
    "word": "書物",
    "reading": "しょもつ",
    "meaning": "books",
    "level": "3"
  },
  {
    "word": "女優",
    "reading": "じょゆう",
    "meaning": "actress",
    "level": "3"
  },
  {
    "word": "処理",
    "reading": "しょり",
    "meaning": "processing, treatment, disposition",
    "level": "3"
  },
  {
    "word": "書類",
    "reading": "しょるい",
    "meaning": "documents, official papers",
    "level": "3"
  },
  {
    "word": "知らせ",
    "reading": "しらせ",
    "meaning": "notice",
    "level": "3"
  },
  {
    "word": "尻",
    "reading": "しり",
    "meaning": "buttocks, bottom",
    "level": "3"
  },
  {
    "word": "知合い",
    "reading": "しりあい",
    "meaning": "acquaintance",
    "level": "3"
  },
  {
    "word": "印",
    "reading": "しるし",
    "meaning": "mark; symbol; evidence",
    "level": "3"
  },
  {
    "word": "城",
    "reading": "しろ",
    "meaning": "castle",
    "level": "3"
  },
  {
    "word": "進学",
    "reading": "しんがく",
    "meaning": "going on to university",
    "level": "3"
  },
  {
    "word": "神経",
    "reading": "しんけい",
    "meaning": "nerve, sensitivity",
    "level": "3"
  },
  {
    "word": "真剣",
    "reading": "しんけん",
    "meaning": "seriousness, earnestness",
    "level": "3"
  },
  {
    "word": "信仰",
    "reading": "しんこう",
    "meaning": "(religious) faith, belief",
    "level": "3"
  },
  {
    "word": "信号",
    "reading": "しんごう",
    "meaning": "traffic lights, signal, semaphore",
    "level": "3"
  },
  {
    "word": "人工",
    "reading": "じんこう",
    "meaning": "artificial, man made, human work,",
    "level": "3"
  },
  {
    "word": "深刻",
    "reading": "しんこく",
    "meaning": "serious",
    "level": "3"
  },
  {
    "word": "診察",
    "reading": "しんさつ",
    "meaning": "medical examination (of a patient)",
    "level": "3"
  },
  {
    "word": "人種",
    "reading": "じんしゅ",
    "meaning": "race (of people)",
    "level": "3"
  },
  {
    "word": "信じる",
    "reading": "しんじる",
    "meaning": "to believe",
    "level": "3"
  },
  {
    "word": "人生",
    "reading": "じんせい",
    "meaning": "(human) life (e.g., conception to death)",
    "level": "3"
  },
  {
    "word": "親戚",
    "reading": "しんせき",
    "meaning": "relative(s)",
    "level": "3"
  },
  {
    "word": "新鮮",
    "reading": "しんせん",
    "meaning": "fresh",
    "level": "3"
  },
  {
    "word": "心臓",
    "reading": "しんぞう",
    "meaning": "heart",
    "level": "3"
  },
  {
    "word": "身体",
    "reading": "しんたい",
    "meaning": "the body",
    "level": "3"
  },
  {
    "word": "身長",
    "reading": "しんちょう",
    "meaning": "height (of body), stature",
    "level": "3"
  },
  {
    "word": "慎重",
    "reading": "しんちょう",
    "meaning": "careful, prudent, cautious",
    "level": "3"
  },
  {
    "word": "審判",
    "reading": "しんぱん",
    "meaning": "umpire, referee, judgment",
    "level": "3"
  },
  {
    "word": "人物",
    "reading": "じんぶつ",
    "meaning": "character, personality, talented man",
    "level": "3"
  },
  {
    "word": "進歩",
    "reading": "しんぽ",
    "meaning": "improvement, progress, development",
    "level": "3"
  },
  {
    "word": "親友",
    "reading": "しんゆう",
    "meaning": "close friend, buddy",
    "level": "3"
  },
  {
    "word": "信用",
    "reading": "しんよう",
    "meaning": "confidence, dependence",
    "level": "3"
  },
  {
    "word": "信頼",
    "reading": "しんらい",
    "meaning": "reliance, trust, confidence",
    "level": "3"
  },
  {
    "word": "心理",
    "reading": "しんり",
    "meaning": "mentality",
    "level": "3"
  },
  {
    "word": "人類",
    "reading": "じんるい",
    "meaning": "mankind, humanity",
    "level": "3"
  },
  {
    "word": "巣",
    "reading": "す",
    "meaning": "nest, breeding place",
    "level": "3"
  },
  {
    "word": "酢",
    "reading": "す",
    "meaning": "vinegar",
    "level": "3"
  },
  {
    "word": "図",
    "reading": "ず",
    "meaning": "figure, drawing, illustration",
    "level": "3"
  },
  {
    "word": "水準",
    "reading": "すいじゅん",
    "meaning": "level, standard",
    "level": "3"
  },
  {
    "word": "推薦",
    "reading": "すいせん",
    "meaning": "recommendation",
    "level": "3"
  },
  {
    "word": "スイッチ",
    "reading": "スイッチ",
    "meaning": "switch",
    "level": "3"
  },
  {
    "word": "睡眠",
    "reading": "すいみん",
    "meaning": "sleep",
    "level": "3"
  },
  {
    "word": "数",
    "reading": "すう",
    "meaning": "number, figure",
    "level": "3"
  },
  {
    "word": "数字",
    "reading": "すうじ",
    "meaning": "numeral, figure",
    "level": "3"
  },
  {
    "word": "スープ",
    "reading": "スープ",
    "meaning": "(Western) soup",
    "level": "3"
  },
  {
    "word": "末",
    "reading": "すえ",
    "meaning": "the end of, powder",
    "level": "3"
  },
  {
    "word": "姿",
    "reading": "すがた",
    "meaning": "figure, shape, appearance",
    "level": "3"
  },
  {
    "word": "スキー",
    "reading": "スキー",
    "meaning": "ski",
    "level": "3"
  },
  {
    "word": "救う",
    "reading": "すくう",
    "meaning": "to rescue from, to help out of",
    "level": "3"
  },
  {
    "word": "すくなくとも",
    "reading": "すくなくとも",
    "meaning": "at least",
    "level": "3"
  },
  {
    "word": "優れる",
    "reading": "すぐれる",
    "meaning": "to surpass, to outstrip, to excel",
    "level": "3"
  },
  {
    "word": "スケート",
    "reading": "スケート",
    "meaning": "skate(s), skating",
    "level": "3"
  },
  {
    "word": "スケジュール",
    "reading": "スケジュール",
    "meaning": "schedule",
    "level": "3"
  },
  {
    "word": "少しも",
    "reading": "すこしも",
    "meaning": "anything of, not one bit",
    "level": "3"
  },
  {
    "word": "過ごす",
    "reading": "すごす",
    "meaning": "to pass, to spend (time)",
    "level": "3"
  },
  {
    "word": "筋",
    "reading": "すじ",
    "meaning": "muscle, string, line",
    "level": "3"
  },
  {
    "word": "進める",
    "reading": "すすめる",
    "meaning": "to advance, to promote, to hasten",
    "level": "3"
  },
  {
    "word": "勧める",
    "reading": "すすめる",
    "meaning": "to urge (someone) to do (something), to recommend",
    "level": "3"
  },
  {
    "word": "スター",
    "reading": "スター",
    "meaning": "star",
    "level": "3"
  },
  {
    "word": "スタイル",
    "reading": "スタイル",
    "meaning": "style",
    "level": "3"
  },
  {
    "word": "スタンド",
    "reading": "スタンド",
    "meaning": "stand",
    "level": "3"
  },
  {
    "word": "頭痛",
    "reading": "ずつう",
    "meaning": "headache",
    "level": "3"
  },
  {
    "word": "ずっと",
    "reading": "ずっと",
    "meaning": "for a long time; all the time; consecutively",
    "level": "3"
  },
  {
    "word": "すっぱい",
    "reading": "すっぱい",
    "meaning": "sour, acid",
    "level": "3"
  },
  {
    "word": "すてき",
    "reading": "すてき",
    "meaning": "lovely, great",
    "level": "3"
  },
  {
    "word": "既に",
    "reading": "すでに",
    "meaning": "already (same as もう)",
    "level": "3"
  },
  {
    "word": "すなわち",
    "reading": "すなわち",
    "meaning": "that is, namely, e.g.",
    "level": "3"
  },
  {
    "word": "スピーチ",
    "reading": "スピーチ",
    "meaning": "speech",
    "level": "3"
  },
  {
    "word": "全て",
    "reading": "すべて",
    "meaning": "all, the whole, entirely",
    "level": "3"
  },
  {
    "word": "済ませる",
    "reading": "すませる",
    "meaning": "to be finished",
    "level": "3"
  },
  {
    "word": "角",
    "reading": "すみ",
    "meaning": "corner",
    "level": "3"
  },
  {
    "word": "墨",
    "reading": "すみ",
    "meaning": "ink",
    "level": "3"
  },
  {
    "word": "すみません (かん)",
    "reading": "すみません (かん)",
    "meaning": "sorry, excuse me",
    "level": "3"
  },
  {
    "word": "澄む",
    "reading": "すむ",
    "meaning": "to clear (e.g., weather), to become transparent",
    "level": "3"
  },
  {
    "word": "清む",
    "reading": "すむ",
    "meaning": "to clear (e.g., weather), to become transparent",
    "level": "3"
  },
  {
    "word": "刷る",
    "reading": "する",
    "meaning": "to print",
    "level": "3"
  },
  {
    "word": "為る",
    "reading": "する",
    "meaning": "to do, to attempt",
    "level": "3"
  },
  {
    "word": "鋭い",
    "reading": "するどい",
    "meaning": "pointed, sharp",
    "level": "3"
  },
  {
    "word": "すれ違う",
    "reading": "すれちがう",
    "meaning": "to pass by one another",
    "level": "3"
  },
  {
    "word": "ずれる",
    "reading": "ずれる",
    "meaning": "move, off the point",
    "level": "3"
  },
  {
    "word": "正",
    "reading": "せい",
    "meaning": "(logical) true, regular",
    "level": "3"
  },
  {
    "word": "生",
    "reading": "せい",
    "meaning": "birth",
    "level": "3"
  },
  {
    "word": "性",
    "reading": "せい",
    "meaning": "sex, gender",
    "level": "3"
  },
  {
    "word": "姓",
    "reading": "せい",
    "meaning": "surname, family name",
    "level": "3"
  },
  {
    "word": "所為",
    "reading": "せい",
    "meaning": "cause, reason, fault",
    "level": "3"
  },
  {
    "word": "税",
    "reading": "ぜい",
    "meaning": "tax",
    "level": "3"
  },
  {
    "word": "性格",
    "reading": "せいかく",
    "meaning": "character, personality",
    "level": "3"
  },
  {
    "word": "正確",
    "reading": "せいかく",
    "meaning": "accurate, punctuality, exact",
    "level": "3"
  },
  {
    "word": "世紀",
    "reading": "せいき",
    "meaning": "century",
    "level": "3"
  },
  {
    "word": "請求",
    "reading": "せいきゅう",
    "meaning": "claim, demand, request",
    "level": "3"
  },
  {
    "word": "税金",
    "reading": "ぜいきん",
    "meaning": "tax, duty",
    "level": "3"
  },
  {
    "word": "清潔",
    "reading": "せいけつ",
    "meaning": "clean",
    "level": "3"
  },
  {
    "word": "制限",
    "reading": "せいげん",
    "meaning": "restriction, restraint, limitation",
    "level": "3"
  },
  {
    "word": "成功",
    "reading": "せいこう",
    "meaning": "success, hit",
    "level": "3"
  },
  {
    "word": "正式",
    "reading": "せいしき",
    "meaning": "official, formal",
    "level": "3"
  },
  {
    "word": "性質",
    "reading": "せいしつ",
    "meaning": "nature, property, disposition",
    "level": "3"
  },
  {
    "word": "精神",
    "reading": "せいしん",
    "meaning": "mind, soul, spirit",
    "level": "3"
  },
  {
    "word": "成人",
    "reading": "せいじん",
    "meaning": "adult",
    "level": "3"
  },
  {
    "word": "精々",
    "reading": "せいぜい",
    "meaning": "at the most, at best",
    "level": "3"
  },
  {
    "word": "成績",
    "reading": "せいせき",
    "meaning": "grade (i.e., on a test), academic record",
    "level": "3"
  },
  {
    "word": "製造",
    "reading": "せいぞう",
    "meaning": "manufacture, production",
    "level": "3"
  },
  {
    "word": "贅沢",
    "reading": "ぜいたく",
    "meaning": "luxury, extravagance",
    "level": "3"
  },
  {
    "word": "成長",
    "reading": "せいちょう",
    "meaning": "growth",
    "level": "3"
  },
  {
    "word": "生長",
    "reading": "せいちょう",
    "meaning": "growth",
    "level": "3"
  },
  {
    "word": "制度",
    "reading": "せいど",
    "meaning": "system, institution",
    "level": "3"
  },
  {
    "word": "青年",
    "reading": "せいねん",
    "meaning": "youth, young man",
    "level": "3"
  },
  {
    "word": "生年月日",
    "reading": "せいねんがっぴ",
    "meaning": "birth date",
    "level": "3"
  },
  {
    "word": "製品",
    "reading": "せいひん",
    "meaning": "manufactured goods, finished goods",
    "level": "3"
  },
  {
    "word": "政府",
    "reading": "せいふ",
    "meaning": "government, administration",
    "level": "3"
  },
  {
    "word": "生物",
    "reading": "せいぶつ",
    "meaning": "living thing, organism",
    "level": "3"
  },
  {
    "word": "生命",
    "reading": "せいめい",
    "meaning": "life",
    "level": "3"
  },
  {
    "word": "整理",
    "reading": "せいり",
    "meaning": "sorting, arrangement",
    "level": "3"
  },
  {
    "word": "咳",
    "reading": "せき",
    "meaning": "cough",
    "level": "3"
  },
  {
    "word": "石炭",
    "reading": "せきたん",
    "meaning": "coal",
    "level": "3"
  },
  {
    "word": "責任",
    "reading": "せきにん",
    "meaning": "duty, responsibility",
    "level": "3"
  },
  {
    "word": "石油",
    "reading": "せきゆ",
    "meaning": "oil, petroleum, kerosene",
    "level": "3"
  },
  {
    "word": "世間",
    "reading": "せけん",
    "meaning": "world, society",
    "level": "3"
  },
  {
    "word": "説",
    "reading": "せつ",
    "meaning": "theory",
    "level": "3"
  },
  {
    "word": "積極的",
    "reading": "せっきょくてき",
    "meaning": "positive, active, proactive",
    "level": "3"
  },
  {
    "word": "設計",
    "reading": "せっけい",
    "meaning": "plan, design",
    "level": "3"
  },
  {
    "word": "絶対",
    "reading": "ぜったい",
    "meaning": "definitely, without fail, absoluteness",
    "level": "3"
  },
  {
    "word": "セット",
    "reading": "セット",
    "meaning": "set",
    "level": "3"
  },
  {
    "word": "愛",
    "reading": "あい",
    "meaning": "love",
    "level": "3"
  },
  {
    "word": "相変わらず",
    "reading": "あいかわらず",
    "meaning": "as ever, as usual",
    "level": "3"
  },
  {
    "word": "愛情",
    "reading": "あいじょう",
    "meaning": "love, affection",
    "level": "3"
  },
  {
    "word": "合図",
    "reading": "あいず",
    "meaning": "sign, signal",
    "level": "3"
  },
  {
    "word": "アイスクリーム",
    "reading": "アイスクリーム",
    "meaning": "ice cream",
    "level": "3"
  },
  {
    "word": "愛する",
    "reading": "あいする",
    "meaning": "to love",
    "level": "3"
  },
  {
    "word": "相手",
    "reading": "あいて",
    "meaning": "partner; addressee; the person you are talking to",
    "level": "3"
  },
  {
    "word": "あいにく",
    "reading": "あいにく",
    "meaning": "unfortunately",
    "level": "3"
  },
  {
    "word": "遭う",
    "reading": "あう",
    "meaning": "to meet, to encounter (undesirable nuance)",
    "level": "3"
  },
  {
    "word": "アウト",
    "reading": "アウト",
    "meaning": "out",
    "level": "3"
  },
  {
    "word": "明かり",
    "reading": "あかり",
    "meaning": "lamplight, light (in general)",
    "level": "3"
  },
  {
    "word": "空き",
    "reading": "あき",
    "meaning": "vacancy, opening, space",
    "level": "3"
  },
  {
    "word": "明らか",
    "reading": "あきらか",
    "meaning": "obvious, clear",
    "level": "3"
  },
  {
    "word": "諦める",
    "reading": "あきらめる",
    "meaning": "to give up, to abandon",
    "level": "3"
  },
  {
    "word": "飽きる",
    "reading": "あきる",
    "meaning": "to get tired of, to lose interest in",
    "level": "3"
  },
  {
    "word": "握手",
    "reading": "あくしゅ",
    "meaning": "handshake",
    "level": "3"
  },
  {
    "word": "悪魔",
    "reading": "あくま",
    "meaning": "devil, demon, evil spirit",
    "level": "3"
  },
  {
    "word": "明ける",
    "reading": "あける",
    "meaning": "to dawn, to become daylight",
    "level": "3"
  },
  {
    "word": "揚げる",
    "reading": "あげる",
    "meaning": "to lift, to fry",
    "level": "3"
  },
  {
    "word": "挙げる",
    "reading": "あげる",
    "meaning": "to raise; to list, to cite",
    "level": "3"
  },
  {
    "word": "預かる",
    "reading": "あずかる",
    "meaning": "to keep (something) for (someone)",
    "level": "3"
  },
  {
    "word": "預ける",
    "reading": "あずける",
    "meaning": "to give into custody, to deposit",
    "level": "3"
  },
  {
    "word": "汗",
    "reading": "あせ",
    "meaning": "sweat, perspiration",
    "level": "3"
  },
  {
    "word": "与える",
    "reading": "あたえる",
    "meaning": "to give",
    "level": "3"
  },
  {
    "word": "温かい",
    "reading": "あたたかい",
    "meaning": "warm",
    "level": "3"
  },
  {
    "word": "暖まる",
    "reading": "あたたまる",
    "meaning": "to warm up",
    "level": "3"
  },
  {
    "word": "温まる",
    "reading": "あたたまる",
    "meaning": "to warm oneself, to get warm",
    "level": "3"
  },
  {
    "word": "暖める",
    "reading": "あたためる",
    "meaning": "to warm (up to someone/something), to heat (up to someone/something)",
    "level": "3"
  },
  {
    "word": "温める",
    "reading": "あたためる",
    "meaning": "to warm, to heat",
    "level": "3"
  },
  {
    "word": "辺り",
    "reading": "あたり",
    "meaning": "vicinity, nearby",
    "level": "3"
  },
  {
    "word": "当たり前",
    "reading": "あたりまえ",
    "meaning": "usual, common, obvious",
    "level": "3"
  },
  {
    "word": "当たる",
    "reading": "あたる",
    "meaning": "to be hit, to be successful",
    "level": "3"
  },
  {
    "word": "あちこち",
    "reading": "あちこち",
    "meaning": "here and there",
    "level": "3"
  },
  {
    "word": "扱う",
    "reading": "あつかう",
    "meaning": "to treat, to handle, to deal with",
    "level": "3"
  },
  {
    "word": "集まり",
    "reading": "あつまり",
    "meaning": "gathering, meeting, collection",
    "level": "3"
  },
  {
    "word": "当てる",
    "reading": "あてる",
    "meaning": "to hit; to apply to",
    "level": "3"
  },
  {
    "word": "跡",
    "reading": "あと",
    "meaning": "trace; remains; scar",
    "level": "3"
  },
  {
    "word": "穴",
    "reading": "あな",
    "meaning": "hole",
    "level": "3"
  },
  {
    "word": "油",
    "reading": "あぶら",
    "meaning": "oil",
    "level": "3"
  },
  {
    "word": "脂",
    "reading": "あぶら",
    "meaning": "fat",
    "level": "3"
  },
  {
    "word": "誤り",
    "reading": "あやまり",
    "meaning": "error",
    "level": "3"
  },
  {
    "word": "粗",
    "reading": "あら",
    "meaning": "defect, flaw, fault",
    "level": "3"
  },
  {
    "word": "嵐",
    "reading": "あらし",
    "meaning": "storm",
    "level": "3"
  },
  {
    "word": "争う",
    "reading": "あらそう",
    "meaning": "to dispute, to argue, to fight",
    "level": "3"
  },
  {
    "word": "新た",
    "reading": "あらた",
    "meaning": "new, fresh",
    "level": "3"
  },
  {
    "word": "あらゆる",
    "reading": "あらゆる",
    "meaning": "all, every",
    "level": "3"
  },
  {
    "word": "表す",
    "reading": "あらわす",
    "meaning": "to express, to show",
    "level": "3"
  },
  {
    "word": "現す",
    "reading": "あらわす",
    "meaning": "to show, to appear, to reveal",
    "level": "3"
  },
  {
    "word": "著す",
    "reading": "あらわす",
    "meaning": "to write, to publish",
    "level": "3"
  },
  {
    "word": "現れ",
    "reading": "あらわれ",
    "meaning": "expression, indication, sign",
    "level": "3"
  },
  {
    "word": "現れる",
    "reading": "あらわれる",
    "meaning": "to appear (v.i.), to become visible; to express",
    "level": "3"
  },
  {
    "word": "ありがとう",
    "reading": "ありがとう",
    "meaning": "Thank you",
    "level": "3"
  },
  {
    "word": "在る; 有る",
    "reading": "ある",
    "meaning": "to live, to be, to exist",
    "level": "3"
  },
  {
    "word": "或",
    "reading": "ある",
    "meaning": "a certain..., some...",
    "level": "3"
  },
  {
    "word": "あるいは",
    "reading": "あるいは",
    "meaning": "or, perhaps",
    "level": "3"
  },
  {
    "word": "アルバム",
    "reading": "アルバム",
    "meaning": "album",
    "level": "3"
  },
  {
    "word": "泡",
    "reading": "あわ",
    "meaning": "bubble, foam",
    "level": "3"
  },
  {
    "word": "合わせる",
    "reading": "あわせる",
    "meaning": "to combine",
    "level": "3"
  },
  {
    "word": "慌てる",
    "reading": "あわてる",
    "meaning": "to become confused、to panic",
    "level": "3"
  },
  {
    "word": "哀れ",
    "reading": "あわれ",
    "meaning": "helpless, pity, pathetic",
    "level": "3"
  },
  {
    "word": "案",
    "reading": "あん",
    "meaning": "plan, scheme, proposal",
    "level": "3"
  },
  {
    "word": "案外",
    "reading": "あんがい",
    "meaning": "unexpectedly",
    "level": "3"
  },
  {
    "word": "暗記",
    "reading": "あんき",
    "meaning": "memorization, learning by heart",
    "level": "3"
  },
  {
    "word": "安定",
    "reading": "あんてい",
    "meaning": "stability, equilibrium",
    "level": "3"
  },
  {
    "word": "あんなに",
    "reading": "あんなに",
    "meaning": "to that extent, to that degree",
    "level": "3"
  },
  {
    "word": "あんまり",
    "reading": "あんまり",
    "meaning": "not very, not much",
    "level": "3"
  },
  {
    "word": "胃",
    "reading": "い",
    "meaning": "stomach",
    "level": "3"
  },
  {
    "word": "委員",
    "reading": "いいん",
    "meaning": "committee member",
    "level": "3"
  },
  {
    "word": "意外",
    "reading": "いがい",
    "meaning": "unexpected, surprising",
    "level": "3"
  },
  {
    "word": "行き",
    "reading": "いき",
    "meaning": "going",
    "level": "3"
  },
  {
    "word": "行き",
    "reading": "ゆき",
    "meaning": "going",
    "level": "3"
  },
  {
    "word": "息",
    "reading": "いき",
    "meaning": "breath",
    "level": "3"
  },
  {
    "word": "勢い",
    "reading": "いきおい",
    "meaning": "force, vigor, momentum",
    "level": "3"
  },
  {
    "word": "生き物",
    "reading": "いきもの",
    "meaning": "living thing, creature",
    "level": "3"
  },
  {
    "word": "いけない",
    "reading": "いけない",
    "meaning": "must not do, bad, wrong",
    "level": "3"
  },
  {
    "word": "医師",
    "reading": "いし",
    "meaning": "doctor, physician",
    "level": "3"
  },
  {
    "word": "意思",
    "reading": "いし",
    "meaning": "intention, purpose",
    "level": "3"
  },
  {
    "word": "意志",
    "reading": "いし",
    "meaning": "will, volition",
    "level": "3"
  },
  {
    "word": "維持",
    "reading": "いじ",
    "meaning": "maintenance, preservation",
    "level": "3"
  },
  {
    "word": "意識",
    "reading": "いしき",
    "meaning": "consciousness, senses",
    "level": "3"
  },
  {
    "word": "異常",
    "reading": "いじょう",
    "meaning": "strangeness, abnormality, disorder",
    "level": "3"
  },
  {
    "word": "意地悪",
    "reading": "いじわる",
    "meaning": "malicious, mean, unkind",
    "level": "3"
  },
  {
    "word": "泉",
    "reading": "いずみ",
    "meaning": "spring, fountain",
    "level": "3"
  },
  {
    "word": "いずれ",
    "reading": "いずれ",
    "meaning": "where, which, who",
    "level": "3"
  },
  {
    "word": "以前",
    "reading": "いぜん",
    "meaning": "in the past; before",
    "level": "3"
  },
  {
    "word": "板",
    "reading": "いた",
    "meaning": "board, plank",
    "level": "3"
  },
  {
    "word": "偉大",
    "reading": "いだい",
    "meaning": "greatness",
    "level": "3"
  },
  {
    "word": "抱く",
    "reading": "いだく",
    "meaning": "to hold (v.t.) (written expression), to embrace, to harbor",
    "level": "3"
  },
  {
    "word": "いたずら",
    "reading": "いたずら",
    "meaning": "trick, practical joke",
    "level": "3"
  },
  {
    "word": "いただきます",
    "reading": "いただきます",
    "meaning": "expression of gratitude before meals",
    "level": "3"
  },
  {
    "word": "痛み",
    "reading": "いたみ",
    "meaning": "pain, ache, sore",
    "level": "3"
  },
  {
    "word": "至る",
    "reading": "いたる",
    "meaning": "to come, to arrive",
    "level": "3"
  },
  {
    "word": "市",
    "reading": "いち",
    "meaning": "market, fair",
    "level": "3"
  },
  {
    "word": "位置",
    "reading": "いち",
    "meaning": "place, position",
    "level": "3"
  },
  {
    "word": "一時",
    "reading": "いちじ",
    "meaning": "for a time, temporarily",
    "level": "3"
  },
  {
    "word": "一度に",
    "reading": "いちどに",
    "meaning": "all at once",
    "level": "3"
  },
  {
    "word": "市場",
    "reading": "いちば",
    "meaning": "market, bazaar",
    "level": "3"
  },
  {
    "word": "いつか",
    "reading": "いつか",
    "meaning": "sometime, one day",
    "level": "3"
  },
  {
    "word": "一家",
    "reading": "いっか",
    "meaning": "family, clan",
    "level": "3"
  },
  {
    "word": "一種",
    "reading": "いっしゅ",
    "meaning": "a species, a kind, a variety",
    "level": "3"
  },
  {
    "word": "一瞬",
    "reading": "いっしゅん",
    "meaning": "a moment, an instant",
    "level": "3"
  },
  {
    "word": "一生",
    "reading": "いっしょう",
    "meaning": "throughout (one's) life",
    "level": "3"
  },
  {
    "word": "一層",
    "reading": "いっそう",
    "meaning": "much more, still more",
    "level": "3"
  },
  {
    "word": "一体",
    "reading": "いったい",
    "meaning": "one object; body; what on earth?; generally",
    "level": "3"
  },
  {
    "word": "一致",
    "reading": "いっち",
    "meaning": "agreement; conformity",
    "level": "3"
  },
  {
    "word": "いつでも",
    "reading": "いつでも",
    "meaning": "(at) any time, always",
    "level": "3"
  },
  {
    "word": "いつのまにか",
    "reading": "いつのまにか",
    "meaning": "before one knows",
    "level": "3"
  },
  {
    "word": "一般",
    "reading": "いっぱん",
    "meaning": "general, average",
    "level": "3"
  },
  {
    "word": "一方",
    "reading": "いっぽう",
    "meaning": "on the other hand; meanwhile",
    "level": "3"
  },
  {
    "word": "いつまでも",
    "reading": "いつまでも",
    "meaning": "forever, for good, eternally",
    "level": "3"
  },
  {
    "word": "移動",
    "reading": "いどう",
    "meaning": "migration, movement",
    "level": "3"
  },
  {
    "word": "従兄弟",
    "reading": "いとこ",
    "meaning": "cousin (male)",
    "level": "3"
  },
  {
    "word": "従姉妹",
    "reading": "いとこ",
    "meaning": "cousin (female)",
    "level": "3"
  },
  {
    "word": "稲",
    "reading": "いね",
    "meaning": "rice-plant",
    "level": "3"
  },
  {
    "word": "居眠り",
    "reading": "いねむり",
    "meaning": "dozing, nodding off",
    "level": "3"
  },
  {
    "word": "命",
    "reading": "いのち",
    "meaning": "life",
    "level": "3"
  },
  {
    "word": "違反",
    "reading": "いはん",
    "meaning": "violation (of law), infringement",
    "level": "3"
  },
  {
    "word": "衣服",
    "reading": "いふく",
    "meaning": "clothes",
    "level": "3"
  },
  {
    "word": "居間",
    "reading": "いま",
    "meaning": "living room",
    "level": "3"
  },
  {
    "word": "今に",
    "reading": "いまに",
    "meaning": "before long, soon",
    "level": "3"
  },
  {
    "word": "今にも",
    "reading": "いまにも",
    "meaning": "at any time, soon",
    "level": "3"
  },
  {
    "word": "イメージ",
    "reading": "イメージ",
    "meaning": "one's image",
    "level": "3"
  },
  {
    "word": "否",
    "reading": "いや",
    "meaning": "no, the noes",
    "level": "3"
  },
  {
    "word": "以来",
    "reading": "いらい",
    "meaning": "since, henceforth",
    "level": "3"
  },
  {
    "word": "依頼",
    "reading": "いらい",
    "meaning": "request; dependence",
    "level": "3"
  },
  {
    "word": "いらいら",
    "reading": "いらいら",
    "meaning": "getting nervous, irritation",
    "level": "3"
  },
  {
    "word": "いらっしゃい",
    "reading": "いらっしゃい",
    "meaning": "welcome",
    "level": "3"
  },
  {
    "word": "医療",
    "reading": "いりょう",
    "meaning": "medical care, medical treatment",
    "level": "3"
  },
  {
    "word": "岩",
    "reading": "いわ",
    "meaning": "rock",
    "level": "3"
  },
  {
    "word": "祝い",
    "reading": "いわい",
    "meaning": "celebration, festival",
    "level": "3"
  },
  {
    "word": "祝う",
    "reading": "いわう",
    "meaning": "to congratulate, to celebrate",
    "level": "3"
  },
  {
    "word": "言わば",
    "reading": "いわば",
    "meaning": "so to speak",
    "level": "3"
  },
  {
    "word": "いわゆる",
    "reading": "いわゆる",
    "meaning": "the so-called, so-to-speak",
    "level": "3"
  },
  {
    "word": "インク",
    "reading": "インク",
    "meaning": "ink",
    "level": "3"
  },
  {
    "word": "印刷",
    "reading": "いんさつ",
    "meaning": "printing",
    "level": "3"
  },
  {
    "word": "印象",
    "reading": "いんしょう",
    "meaning": "impression",
    "level": "3"
  },
  {
    "word": "引退",
    "reading": "いんたい",
    "meaning": "retirement",
    "level": "3"
  },
  {
    "word": "インタビュー",
    "reading": "インタビュー",
    "meaning": "interview",
    "level": "3"
  },
  {
    "word": "引用",
    "reading": "いんよう",
    "meaning": "quotation, citation",
    "level": "3"
  },
  {
    "word": "ウイスキー",
    "reading": "ウイスキー",
    "meaning": "whiskey",
    "level": "3"
  },
  {
    "word": "上",
    "reading": "うわ",
    "meaning": "upper, outer, surface",
    "level": "3"
  },
  {
    "word": "魚",
    "reading": "うお",
    "meaning": "fish",
    "level": "3"
  },
  {
    "word": "うがい",
    "reading": "うがい",
    "meaning": "gargling",
    "level": "3"
  },
  {
    "word": "受け取る",
    "reading": "うけとる",
    "meaning": "to receive, to get, to accept",
    "level": "3"
  },
  {
    "word": "動かす",
    "reading": "うごかす",
    "meaning": "to move, to shift",
    "level": "3"
  },
  {
    "word": "兎",
    "reading": "うさぎ",
    "meaning": "rabbit, hare",
    "level": "3"
  },
  {
    "word": "牛",
    "reading": "うし",
    "meaning": "cattle, cow",
    "level": "3"
  },
  {
    "word": "失う",
    "reading": "うしなう",
    "meaning": "to lose, to part with",
    "level": "3"
  },
  {
    "word": "疑う",
    "reading": "うたがう",
    "meaning": "to doubt, to distrust",
    "level": "3"
  },
  {
    "word": "宇宙",
    "reading": "うちゅう",
    "meaning": "universe, cosmos, space",
    "level": "3"
  },
  {
    "word": "討つ",
    "reading": "うつ",
    "meaning": "to attack, to avenge",
    "level": "3"
  },
  {
    "word": "撃つ",
    "reading": "うつ",
    "meaning": "to attack, to shoot",
    "level": "3"
  },
  {
    "word": "うっかり",
    "reading": "うっかり",
    "meaning": "carelessly; inadvertently",
    "level": "3"
  },
  {
    "word": "映す",
    "reading": "うつす",
    "meaning": "to project, to reflect, to cast (shadow)",
    "level": "3"
  },
  {
    "word": "訴える",
    "reading": "うったえる",
    "meaning": "to complain, to appeal, to sue (a person)",
    "level": "3"
  },
  {
    "word": "写る",
    "reading": "うつる",
    "meaning": "to be photographed, to be projected",
    "level": "3"
  },
  {
    "word": "映る",
    "reading": "うつる",
    "meaning": "to be reflected, to come out (photo)",
    "level": "3"
  },
  {
    "word": "うなる",
    "reading": "うなる",
    "meaning": "to groan, to moan",
    "level": "3"
  },
  {
    "word": "奪う",
    "reading": "うばう",
    "meaning": "to rob, to deprive",
    "level": "3"
  },
  {
    "word": "馬",
    "reading": "うま",
    "meaning": "horse; promoted bishop (in Japanese chess known as shogi)",
    "level": "3"
  },
  {
    "word": "生まれ",
    "reading": "うまれ",
    "meaning": "birth, birth-place",
    "level": "3"
  },
  {
    "word": "有無",
    "reading": "うむ",
    "meaning": "yes or no, presence or absence",
    "level": "3"
  },
  {
    "word": "梅",
    "reading": "うめ",
    "meaning": "plum, lowest (of a three-tier ranking system)",
    "level": "3"
  },
  {
    "word": "埋める",
    "reading": "うめる",
    "meaning": "to bury, to fill up, to fill (a seat, a vacant position)",
    "level": "3"
  },
  {
    "word": "裏切る",
    "reading": "うらぎる",
    "meaning": "to betray, to turn traitor",
    "level": "3"
  },
  {
    "word": "羨ましい",
    "reading": "うらやましい",
    "meaning": "envious, enviable",
    "level": "3"
  },
  {
    "word": "売れる",
    "reading": "うれる",
    "meaning": "to be sold",
    "level": "3"
  },
  {
    "word": "噂",
    "reading": "うわさ",
    "meaning": "rumor, gossip",
    "level": "3"
  },
  {
    "word": "運",
    "reading": "うん",
    "meaning": "fortune, luck",
    "level": "3"
  },
  {
    "word": "運転",
    "reading": "うんてん",
    "meaning": "operation, driving",
    "level": "3"
  },
  {
    "word": "柄",
    "reading": "え",
    "meaning": "handle (of a sword, dagger, etc.), grip",
    "level": "3"
  },
  {
    "word": "永遠",
    "reading": "えいえん",
    "meaning": "eternity, perpetuity, immortality",
    "level": "3"
  },
  {
    "word": "永久",
    "reading": "えいきゅう",
    "meaning": "eternity, perpetuity, immortality",
    "level": "3"
  },
  {
    "word": "影響",
    "reading": "えいきょう",
    "meaning": "influence, effect",
    "level": "3"
  },
  {
    "word": "営業",
    "reading": "えいぎょう",
    "meaning": "business, trade, management",
    "level": "3"
  },
  {
    "word": "衛星",
    "reading": "えいせい",
    "meaning": "satellite",
    "level": "3"
  },
  {
    "word": "栄養",
    "reading": "えいよう",
    "meaning": "nutrition, nourishment",
    "level": "3"
  },
  {
    "word": "笑顔",
    "reading": "えがお",
    "meaning": "smile (on one's face)",
    "level": "3"
  },
  {
    "word": "描く",
    "reading": "えがく",
    "meaning": "to draw, to depict, to describe",
    "level": "3"
  },
  {
    "word": "餌",
    "reading": "えさ",
    "meaning": "feed, bait",
    "level": "3"
  },
  {
    "word": "エネルギー",
    "reading": "エネルギー",
    "meaning": "energy (GER: energie)",
    "level": "3"
  },
  {
    "word": "得る",
    "reading": "える",
    "meaning": "to get, to gain, to win, to learn",
    "level": "3"
  },
  {
    "word": "得る",
    "reading": "うる",
    "meaning": "to get, to gain, to win",
    "level": "3"
  },
  {
    "word": "円",
    "reading": "えん",
    "meaning": "circle, yen",
    "level": "3"
  },
  {
    "word": "延期",
    "reading": "えんき",
    "meaning": "postponement, adjournment",
    "level": "3"
  },
  {
    "word": "演技",
    "reading": "えんぎ",
    "meaning": "acting, performance",
    "level": "3"
  },
  {
    "word": "援助",
    "reading": "えんじょ",
    "meaning": "assistance, aid, support",
    "level": "3"
  },
  {
    "word": "エンジン",
    "reading": "エンジン",
    "meaning": "engine",
    "level": "3"
  },
  {
    "word": "演説",
    "reading": "えんぜつ",
    "meaning": "speech, address",
    "level": "3"
  },
  {
    "word": "演奏",
    "reading": "えんそう",
    "meaning": "musical performance",
    "level": "3"
  },
  {
    "word": "老い",
    "reading": "おい",
    "meaning": "old age, the aged",
    "level": "3"
  },
  {
    "word": "追い付く",
    "reading": "おいつく",
    "meaning": "to overtake, to catch up (with)",
    "level": "3"
  },
  {
    "word": "王",
    "reading": "おう",
    "meaning": "king",
    "level": "3"
  },
  {
    "word": "追う",
    "reading": "おう",
    "meaning": "to chase, to run after",
    "level": "3"
  },
  {
    "word": "応援",
    "reading": "おうえん",
    "meaning": "aid, assistance, help",
    "level": "3"
  },
  {
    "word": "王様",
    "reading": "おうさま",
    "meaning": "king",
    "level": "3"
  },
  {
    "word": "王子",
    "reading": "おうじ",
    "meaning": "prince",
    "level": "3"
  },
  {
    "word": "応じる",
    "reading": "おうじる",
    "meaning": "to adapt, to respond, to comply with",
    "level": "3"
  },
  {
    "word": "横断",
    "reading": "おうだん",
    "meaning": "crossing",
    "level": "3"
  },
  {
    "word": "終える",
    "reading": "おえる",
    "meaning": "to finish",
    "level": "3"
  },
  {
    "word": "大いに",
    "reading": "おおいに",
    "meaning": "much, considerably (same as 大変 (たいへん)), greatly",
    "level": "3"
  },
  {
    "word": "覆う",
    "reading": "おおう",
    "meaning": "to cover, to hide, to conceal",
    "level": "3"
  },
  {
    "word": "大家",
    "reading": "おおや",
    "meaning": "landlord",
    "level": "3"
  },
  {
    "word": "丘",
    "reading": "おか",
    "meaning": "hill, height",
    "level": "3"
  },
  {
    "word": "沖",
    "reading": "おき",
    "meaning": "open sea",
    "level": "3"
  },
  {
    "word": "奥",
    "reading": "おく",
    "meaning": "interior, inner part",
    "level": "3"
  },
  {
    "word": "贈る",
    "reading": "おくる",
    "meaning": "to present, to give to, to award to",
    "level": "3"
  },
  {
    "word": "起こる",
    "reading": "おこる",
    "meaning": "to occur, to happen",
    "level": "3"
  },
  {
    "word": "押える",
    "reading": "おさえる",
    "meaning": "to stop, to restrain, to press down",
    "level": "3"
  },
  {
    "word": "幼い",
    "reading": "おさない",
    "meaning": "very young, childish",
    "level": "3"
  },
  {
    "word": "収める",
    "reading": "おさめる",
    "meaning": "to store to pay, to supply",
    "level": "3"
  },
  {
    "word": "納める",
    "reading": "おさめる",
    "meaning": "to store to pay, to supply",
    "level": "3"
  },
  {
    "word": "治める",
    "reading": "おさめる",
    "meaning": "to govern, to manage; to subdue",
    "level": "3"
  },
  {
    "word": "お辞儀",
    "reading": "おじぎ",
    "meaning": "bow",
    "level": "3"
  },
  {
    "word": "お洒落",
    "reading": "おしゃれ",
    "meaning": "smartly dressed, fashion-conscious",
    "level": "3"
  },
  {
    "word": "お喋り",
    "reading": "おしゃべり",
    "meaning": "chattering, talk",
    "level": "3"
  },
  {
    "word": "汚染",
    "reading": "おせん",
    "meaning": "pollution, contamination",
    "level": "3"
  },
  {
    "word": "恐らく",
    "reading": "おそらく",
    "meaning": "perhaps",
    "level": "3"
  },
  {
    "word": "恐れる",
    "reading": "おそれる",
    "meaning": "to fear, to be afraid of",
    "level": "3"
  },
  {
    "word": "恐ろしい",
    "reading": "おそろしい",
    "meaning": "terrible, dreadful",
    "level": "3"
  },
  {
    "word": "教わる",
    "reading": "おそわる",
    "meaning": "to be taught",
    "level": "3"
  },
  {
    "word": "お互い",
    "reading": "おたがい",
    "meaning": "mutual, reciprocal, each other",
    "level": "3"
  },
  {
    "word": "穏やか",
    "reading": "おだやか",
    "meaning": "calm, gentle, quiet",
    "level": "3"
  },
  {
    "word": "男の人",
    "reading": "おとこのひと",
    "meaning": "man",
    "level": "3"
  },
  {
    "word": "大人しい",
    "reading": "おとなしい",
    "meaning": "obedient, docile, quiet",
    "level": "3"
  },
  {
    "word": "劣る",
    "reading": "おとる",
    "meaning": "to fall behind, to be inferior to",
    "level": "3"
  },
  {
    "word": "鬼",
    "reading": "おに",
    "meaning": "ogre, demon, 'it' (e.g.,in a game of tag)",
    "level": "3"
  },
  {
    "word": "帯",
    "reading": "おび",
    "meaning": "band, sash",
    "level": "3"
  },
  {
    "word": "お昼",
    "reading": "おひる",
    "meaning": "lunch, noon",
    "level": "3"
  },
  {
    "word": "オフィス",
    "reading": "オフィス",
    "meaning": "office",
    "level": "3"
  },
  {
    "word": "溺れる",
    "reading": "おぼれる",
    "meaning": "to be drowned, to indulge in",
    "level": "3"
  },
  {
    "word": "お前",
    "reading": "おまえ",
    "meaning": "you (sing), presence (of a high personage)",
    "level": "3"
  },
  {
    "word": "おめでとう",
    "reading": "おめでとう",
    "meaning": "Congratulations!, an auspicious occasion!",
    "level": "3"
  },
  {
    "word": "お目に掛かる",
    "reading": "おめにかかる",
    "meaning": "meet ~, see ~",
    "level": "3"
  },
  {
    "word": "思い付く",
    "reading": "おもいつく",
    "meaning": "to think of, to hit upon",
    "level": "3"
  },
  {
    "word": "思い出",
    "reading": "おもいで",
    "meaning": "memories, recollections, reminiscence",
    "level": "3"
  },
  {
    "word": "主に",
    "reading": "おもに",
    "meaning": "mainly, primarily",
    "level": "3"
  },
  {
    "word": "思わず",
    "reading": "おもわず",
    "meaning": "unintentional, spontaneous",
    "level": "3"
  },
  {
    "word": "泳ぎ",
    "reading": "およぎ",
    "meaning": "swimming",
    "level": "3"
  },
  {
    "word": "およそ",
    "reading": "およそ",
    "meaning": "about, roughly, approximately",
    "level": "3"
  },
  {
    "word": "及ぼす",
    "reading": "およぼす",
    "meaning": "to exert, to cause, to exercise",
    "level": "3"
  },
  {
    "word": "下す",
    "reading": "おろす",
    "meaning": "to lower, to let go down",
    "level": "3"
  },
  {
    "word": "降ろす",
    "reading": "おろす",
    "meaning": "to take down, to launch, to drop",
    "level": "3"
  },
  {
    "word": "卸す",
    "reading": "おろす",
    "meaning": "to sell wholesale, grated (vegetables)",
    "level": "3"
  },
  {
    "word": "音",
    "reading": "おん",
    "meaning": "sound, note",
    "level": "3"
  },
  {
    "word": "恩",
    "reading": "おん",
    "meaning": "favor, obligation, debt of gratitude",
    "level": "3"
  },
  {
    "word": "温暖",
    "reading": "おんだん",
    "meaning": "warmth",
    "level": "3"
  },
  {
    "word": "温度",
    "reading": "おんど",
    "meaning": "temperature",
    "level": "3"
  },
  {
    "word": "可",
    "reading": "か",
    "meaning": "passable",
    "level": "3"
  },
  {
    "word": "蚊",
    "reading": "か",
    "meaning": "mosquito",
    "level": "3"
  },
  {
    "word": "課",
    "reading": "か",
    "meaning": "department, division",
    "level": "3"
  },
  {
    "word": "カー",
    "reading": "カー",
    "meaning": "car",
    "level": "3"
  },
  {
    "word": "カード",
    "reading": "カード",
    "meaning": "card, curd",
    "level": "3"
  },
  {
    "word": "貝",
    "reading": "かい",
    "meaning": "shell, shellfish",
    "level": "3"
  },
  {
    "word": "害",
    "reading": "がい",
    "meaning": "harm, damage",
    "level": "3"
  },
  {
    "word": "会員",
    "reading": "かいいん",
    "meaning": "member, the membership",
    "level": "3"
  },
  {
    "word": "絵画",
    "reading": "かいが",
    "meaning": "picture, painting",
    "level": "3"
  },
  {
    "word": "海外",
    "reading": "かいがい",
    "meaning": "foreign, abroad, overseas",
    "level": "3"
  },
  {
    "word": "会計",
    "reading": "かいけい",
    "meaning": "account, finance",
    "level": "3"
  },
  {
    "word": "解決",
    "reading": "かいけつ",
    "meaning": "settlement, solution, resolution",
    "level": "3"
  },
  {
    "word": "会合",
    "reading": "かいごう",
    "meaning": "meeting, assembly",
    "level": "3"
  },
  {
    "word": "外交",
    "reading": "がいこう",
    "meaning": "diplomacy",
    "level": "3"
  },
  {
    "word": "開始",
    "reading": "かいし",
    "meaning": "start, commencement, beginning",
    "level": "3"
  },
  {
    "word": "解釈",
    "reading": "かいしゃく",
    "meaning": "explanation, interpretation",
    "level": "3"
  },
  {
    "word": "外出",
    "reading": "がいしゅつ",
    "meaning": "outing, going out",
    "level": "3"
  },
  {
    "word": "改善",
    "reading": "かいぜん",
    "meaning": "betterment, improvement",
    "level": "3"
  },
  {
    "word": "快適",
    "reading": "かいてき",
    "meaning": "pleasant, agreeable",
    "level": "3"
  },
  {
    "word": "回復",
    "reading": "かいふく",
    "meaning": "recovery (from illness), rehabilitation, restoration",
    "level": "3"
  },
  {
    "word": "飼う",
    "reading": "かう",
    "meaning": "to keep; to own (a pet); to raise; to feed",
    "level": "3"
  },
  {
    "word": "帰す",
    "reading": "かえす",
    "meaning": "to send back",
    "level": "3"
  },
  {
    "word": "代える",
    "reading": "かえる",
    "meaning": "to exchange, to interchange, to substitute",
    "level": "3"
  },
  {
    "word": "替える",
    "reading": "かえる",
    "meaning": "to exchange, to interchange, to substitute",
    "level": "3"
  },
  {
    "word": "換える",
    "reading": "かえる",
    "meaning": "to exchange, to interchange, to substitute",
    "level": "3"
  },
  {
    "word": "反る",
    "reading": "かえる",
    "meaning": "to warp, to be warped, to curve",
    "level": "3"
  },
  {
    "word": "香り",
    "reading": "かおり",
    "meaning": "aroma, fragrance",
    "level": "3"
  },
  {
    "word": "画家",
    "reading": "がか",
    "meaning": "painter",
    "level": "3"
  },
  {
    "word": "抱える",
    "reading": "かかえる",
    "meaning": "to hold or carry under or in the arms",
    "level": "3"
  },
  {
    "word": "価格",
    "reading": "かかく",
    "meaning": "price, value",
    "level": "3"
  },
  {
    "word": "化学",
    "reading": "かがく",
    "meaning": "chemistry",
    "level": "3"
  },
  {
    "word": "輝く",
    "reading": "かがやく",
    "meaning": "to shine, to glitter, to sparkle",
    "level": "3"
  },
  {
    "word": "係",
    "reading": "かかり",
    "meaning": "person in charge",
    "level": "3"
  },
  {
    "word": "罹る",
    "reading": "かかる",
    "meaning": "to suffer from",
    "level": "3"
  },
  {
    "word": "限る",
    "reading": "かぎる",
    "meaning": "to restrict, to limit, to confine",
    "level": "3"
  },
  {
    "word": "掻く",
    "reading": "かく",
    "meaning": "to scratch",
    "level": "3"
  },
  {
    "word": "描く",
    "reading": "かく",
    "meaning": "to draw, to depict, to describe",
    "level": "3"
  },
  {
    "word": "嗅ぐ",
    "reading": "かぐ",
    "meaning": "to sniff, to smell",
    "level": "3"
  },
  {
    "word": "家具",
    "reading": "かぐ",
    "meaning": "furniture",
    "level": "3"
  },
  {
    "word": "学",
    "reading": "がく",
    "meaning": "learning, knowledge",
    "level": "3"
  },
  {
    "word": "額",
    "reading": "がく",
    "meaning": "amount; frame",
    "level": "3"
  },
  {
    "word": "覚悟",
    "reading": "かくご",
    "meaning": "resolution, resignation, readiness",
    "level": "3"
  },
  {
    "word": "確実",
    "reading": "かくじつ",
    "meaning": "certainty, reliability, soundness",
    "level": "3"
  },
  {
    "word": "学者",
    "reading": "がくしゃ",
    "meaning": "scholar",
    "level": "3"
  },
  {
    "word": "学習",
    "reading": "がくしゅう",
    "meaning": "study, learning",
    "level": "3"
  },
  {
    "word": "隠す",
    "reading": "かくす",
    "meaning": "to hide, to conceal",
    "level": "3"
  },
  {
    "word": "拡大",
    "reading": "かくだい",
    "meaning": "magnification, enlargement",
    "level": "3"
  },
  {
    "word": "確認",
    "reading": "かくにん",
    "meaning": "affirmation, confirmation",
    "level": "3"
  },
  {
    "word": "学問",
    "reading": "がくもん",
    "meaning": "scholarship, study, learning",
    "level": "3"
  },
  {
    "word": "隠れる",
    "reading": "かくれる",
    "meaning": "to hide, to be hidden",
    "level": "3"
  },
  {
    "word": "影",
    "reading": "かげ",
    "meaning": "shade, shadow, other side",
    "level": "3"
  },
  {
    "word": "陰",
    "reading": "かげ",
    "meaning": "shade, shadow, other side",
    "level": "3"
  },
  {
    "word": "欠ける",
    "reading": "かける",
    "meaning": "to be lacking",
    "level": "3"
  },
  {
    "word": "加減",
    "reading": "かげん",
    "meaning": "adjustment; addition and subtraction",
    "level": "3"
  },
  {
    "word": "過去",
    "reading": "かこ",
    "meaning": "past",
    "level": "3"
  },
  {
    "word": "籠",
    "reading": "かご",
    "meaning": "basket, cage",
    "level": "3"
  },
  {
    "word": "囲む",
    "reading": "かこむ",
    "meaning": "to surround, to encircle",
    "level": "3"
  },
  {
    "word": "火災",
    "reading": "かさい",
    "meaning": "conflagration, fire",
    "level": "3"
  },
  {
    "word": "重なる",
    "reading": "かさなる",
    "meaning": "to be piled up, lie on top of one another",
    "level": "3"
  },
  {
    "word": "重ねる",
    "reading": "かさねる",
    "meaning": "to pile up, to put something on another, to heap up",
    "level": "3"
  },
  {
    "word": "飾り",
    "reading": "かざり",
    "meaning": "decoration",
    "level": "3"
  },
  {
    "word": "貸し",
    "reading": "かし",
    "meaning": "loan, lending",
    "level": "3"
  },
  {
    "word": "菓子",
    "reading": "かし",
    "meaning": "confectionery, sweet",
    "level": "3"
  },
  {
    "word": "家事",
    "reading": "かじ",
    "meaning": "household matters; housework (same as 家の仕事 (いえのしごと))",
    "level": "3"
  },
  {
    "word": "賢い",
    "reading": "かしこい",
    "meaning": "wise, clever, smart",
    "level": "3"
  },
  {
    "word": "歌手",
    "reading": "かしゅ",
    "meaning": "singer",
    "level": "3"
  },
  {
    "word": "数",
    "reading": "かず",
    "meaning": "number, figure, amount",
    "level": "3"
  },
  {
    "word": "稼ぐ",
    "reading": "かせぐ",
    "meaning": "to earn income, to labor",
    "level": "3"
  },
  {
    "word": "数える",
    "reading": "かぞえる",
    "meaning": "to count",
    "level": "3"
  },
  {
    "word": "型",
    "reading": "かた",
    "meaning": "mold, model, style",
    "level": "3"
  },
  {
    "word": "肩",
    "reading": "かた",
    "meaning": "shoulder",
    "level": "3"
  },
  {
    "word": "堅い",
    "reading": "かたい",
    "meaning": "hard, firm, solid",
    "level": "3"
  },
  {
    "word": "硬い",
    "reading": "かたい",
    "meaning": "hard, firm, solid",
    "level": "3"
  },
  {
    "word": "方々",
    "reading": "かたがた",
    "meaning": "persons",
    "level": "3"
  },
  {
    "word": "片付く",
    "reading": "かたづく",
    "meaning": "to put in order, to solve",
    "level": "3"
  },
  {
    "word": "刀",
    "reading": "かたな",
    "meaning": "sword, saber",
    "level": "3"
  },
  {
    "word": "語る",
    "reading": "かたる",
    "meaning": "to talk, to tell, to recite",
    "level": "3"
  },
  {
    "word": "勝ち",
    "reading": "かち",
    "meaning": "win, victory",
    "level": "3"
  },
  {
    "word": "価値",
    "reading": "かち",
    "meaning": "value, worth, merit",
    "level": "3"
  },
  {
    "word": "がっかり",
    "reading": "がっかり",
    "meaning": "feel disappointed, be dejected, lose heart",
    "level": "3"
  },
  {
    "word": "活気",
    "reading": "かっき",
    "meaning": "vigor; liveliness; vitality; energy",
    "level": "3"
  },
  {
    "word": "楽器",
    "reading": "がっき",
    "meaning": "musical instrument",
    "level": "3"
  },
  {
    "word": "学期",
    "reading": "がっき",
    "meaning": "term (school)",
    "level": "3"
  },
  {
    "word": "活動",
    "reading": "かつどう",
    "meaning": "action, activity",
    "level": "3"
  },
  {
    "word": "活躍",
    "reading": "かつやく",
    "meaning": "activity",
    "level": "3"
  },
  {
    "word": "活用",
    "reading": "かつよう",
    "meaning": "conjugation; practical use",
    "level": "3"
  },
  {
    "word": "仮定",
    "reading": "かてい",
    "meaning": "assumption, supposition, hypothesis",
    "level": "3"
  },
  {
    "word": "過程",
    "reading": "かてい",
    "meaning": "process",
    "level": "3"
  },
  {
    "word": "課程",
    "reading": "かてい",
    "meaning": "course, curriculum",
    "level": "3"
  },
  {
    "word": "悲しむ",
    "reading": "かなしむ",
    "meaning": "to be sad, to mourn for, to regret",
    "level": "3"
  },
  {
    "word": "必ずしも",
    "reading": "かならずしも",
    "meaning": "(not) always, (not) necessarily",
    "level": "3"
  },
  {
    "word": "かなり",
    "reading": "かなり",
    "meaning": "considerably, fairly, quite",
    "level": "3"
  },
  {
    "word": "金",
    "reading": "かね",
    "meaning": "gold, metal; money",
    "level": "3"
  },
  {
    "word": "鐘",
    "reading": "かね",
    "meaning": "bell, chime",
    "level": "3"
  },
  {
    "word": "可能",
    "reading": "かのう",
    "meaning": "possible, practicable, feasible",
    "level": "3"
  },
  {
    "word": "株",
    "reading": "かぶ",
    "meaning": "stock; stump (of tree)",
    "level": "3"
  },
  {
    "word": "被る",
    "reading": "かぶる",
    "meaning": "to wear; to be covered with",
    "level": "3"
  },
  {
    "word": "我慢",
    "reading": "がまん",
    "meaning": "patience, endurance, perseverance",
    "level": "3"
  },
  {
    "word": "上",
    "reading": "かみ",
    "meaning": "first volume; superior quality; governmental",
    "level": "3"
  },
  {
    "word": "神",
    "reading": "かみ",
    "meaning": "god",
    "level": "3"
  },
  {
    "word": "雷",
    "reading": "かみなり",
    "meaning": "thunder",
    "level": "3"
  },
  {
    "word": "髪の毛",
    "reading": "かみのけ",
    "meaning": "hair (head)",
    "level": "3"
  },
  {
    "word": "科目",
    "reading": "かもく",
    "meaning": "(school) subject, curriculum, course",
    "level": "3"
  },
  {
    "word": "かもしれない",
    "reading": "かもしれない",
    "meaning": "maybe, perhaps",
    "level": "3"
  },
  {
    "word": "かゆい",
    "reading": "かゆい",
    "meaning": "itchy, itching",
    "level": "3"
  },
  {
    "word": "歌謡",
    "reading": "かよう",
    "meaning": "song, ballad",
    "level": "3"
  },
  {
    "word": "空",
    "reading": "から",
    "meaning": "empty",
    "level": "3"
  },
  {
    "word": "殻",
    "reading": "から",
    "meaning": "shell, husk, hull",
    "level": "3"
  },
  {
    "word": "柄",
    "reading": "がら",
    "meaning": "pattern; build; character",
    "level": "3"
  },
  {
    "word": "刈る",
    "reading": "かる",
    "meaning": "to cut (hair), to mow (grass), to harvest",
    "level": "3"
  },
  {
    "word": "河",
    "reading": "かわ",
    "meaning": "river, stream",
    "level": "3"
  },
  {
    "word": "皮",
    "reading": "かわ",
    "meaning": "skin, hide, leather",
    "level": "3"
  },
  {
    "word": "革",
    "reading": "かわ",
    "meaning": "leather",
    "level": "3"
  },
  {
    "word": "可愛そう",
    "reading": "かわいそう",
    "meaning": "poor, pitiable, pathetic",
    "level": "3"
  },
  {
    "word": "可愛らしい",
    "reading": "かわいらしい",
    "meaning": "lovely, sweet",
    "level": "3"
  },
  {
    "word": "乾かす",
    "reading": "かわかす",
    "meaning": "to dry",
    "level": "3"
  },
  {
    "word": "渇く",
    "reading": "かわく",
    "meaning": "to be thirsty",
    "level": "3"
  },
  {
    "word": "代る",
    "reading": "かわる",
    "meaning": "to take the place of, to relieve, to be substituted for",
    "level": "3"
  },
  {
    "word": "缶",
    "reading": "かん",
    "meaning": "can, tin",
    "level": "3"
  },
  {
    "word": "勘",
    "reading": "かん",
    "meaning": "perception, intuition, the sixth sense",
    "level": "3"
  },
  {
    "word": "考え",
    "reading": "かんがえ",
    "meaning": "thinking, thought, ideas",
    "level": "3"
  },
  {
    "word": "感覚",
    "reading": "かんかく",
    "meaning": "sense, sensation",
    "level": "3"
  },
  {
    "word": "間隔",
    "reading": "かんかく",
    "meaning": "space, interval, SPC",
    "level": "3"
  },
  {
    "word": "観客",
    "reading": "かんきゃく",
    "meaning": "audience, spectator(s)",
    "level": "3"
  },
  {
    "word": "環境",
    "reading": "かんきょう",
    "meaning": "environment, circumstance",
    "level": "3"
  },
  {
    "word": "歓迎",
    "reading": "かんげい",
    "meaning": "welcome, reception",
    "level": "3"
  },
  {
    "word": "観光",
    "reading": "かんこう",
    "meaning": "sightseeing",
    "level": "3"
  },
  {
    "word": "観察",
    "reading": "かんさつ",
    "meaning": "observation, survey",
    "level": "3"
  },
  {
    "word": "感じ",
    "reading": "かんじ",
    "meaning": "feeling, sense, impression",
    "level": "3"
  },
  {
    "word": "感謝",
    "reading": "かんしゃ",
    "meaning": "thanks, gratitude",
    "level": "3"
  },
  {
    "word": "患者",
    "reading": "かんじゃ",
    "meaning": "patient",
    "level": "3"
  },
  {
    "word": "勘定",
    "reading": "かんじょう",
    "meaning": "calculation, counting, consideration",
    "level": "3"
  },
  {
    "word": "感情",
    "reading": "かんじょう",
    "meaning": "emotion(s), feeling(s), sentiment",
    "level": "3"
  },
  {
    "word": "感じる",
    "reading": "かんじる",
    "meaning": "to feel, to sense",
    "level": "3"
  },
  {
    "word": "感心",
    "reading": "かんしん",
    "meaning": "admiration",
    "level": "3"
  },
  {
    "word": "関心",
    "reading": "かんしん",
    "meaning": "concern, interest",
    "level": "3"
  },
  {
    "word": "関する",
    "reading": "かんする",
    "meaning": "to concern, to be related",
    "level": "3"
  },
  {
    "word": "完成",
    "reading": "かんせい",
    "meaning": "complete, completion; perfection",
    "level": "3"
  },
  {
    "word": "完全",
    "reading": "かんぜん",
    "meaning": "perfection, completeness",
    "level": "3"
  },
  {
    "word": "乾燥",
    "reading": "かんそう",
    "meaning": "dry, arid, dehydrated",
    "level": "3"
  },
  {
    "word": "感想",
    "reading": "かんそう",
    "meaning": "(one's) impressions, (one's) thoughts",
    "level": "3"
  },
  {
    "word": "感動",
    "reading": "かんどう",
    "meaning": "being deeply moved, excitement",
    "level": "3"
  },
  {
    "word": "監督",
    "reading": "かんとく",
    "meaning": "supervision, control, (movie) director",
    "level": "3"
  },
  {
    "word": "管理",
    "reading": "かんり",
    "meaning": "control, management (e.g., of a business)",
    "level": "3"
  },
  {
    "word": "完了",
    "reading": "かんりょう",
    "meaning": "completion, conclusion",
    "level": "3"
  },
  {
    "word": "関連",
    "reading": "かんれん",
    "meaning": "relation, connection, relevance",
    "level": "3"
  },
  {
    "word": "議員",
    "reading": "ぎいん",
    "meaning": "member of the Diet, congress, or parliament",
    "level": "3"
  },
  {
    "word": "記憶",
    "reading": "きおく",
    "meaning": "memory, recollection, remembrance",
    "level": "3"
  },
  {
    "word": "気温",
    "reading": "きおん",
    "meaning": "temperature (weather - not used for things)",
    "level": "3"
  },
  {
    "word": "機械",
    "reading": "きかい",
    "meaning": "machine, machinery",
    "level": "3"
  },
  {
    "word": "器械",
    "reading": "きかい",
    "meaning": "instrument",
    "level": "3"
  },
  {
    "word": "議会",
    "reading": "ぎかい",
    "meaning": "Diet, congress, parliament",
    "level": "3"
  },
  {
    "word": "期間",
    "reading": "きかん",
    "meaning": "period, term",
    "level": "3"
  },
  {
    "word": "機関",
    "reading": "きかん",
    "meaning": "engine; institution, organization",
    "level": "3"
  },
  {
    "word": "企業",
    "reading": "きぎょう",
    "meaning": "industry, business, undertaking",
    "level": "3"
  },
  {
    "word": "効く",
    "reading": "きく",
    "meaning": "to be effective",
    "level": "3"
  },
  {
    "word": "期限",
    "reading": "きげん",
    "meaning": "deadline, term",
    "level": "3"
  },
  {
    "word": "機嫌",
    "reading": "きげん",
    "meaning": "humor, temper, mood",
    "level": "3"
  },
  {
    "word": "気候",
    "reading": "きこう",
    "meaning": "climate",
    "level": "3"
  },
  {
    "word": "岸",
    "reading": "きし",
    "meaning": "bank, coast, shore",
    "level": "3"
  },
  {
    "word": "生地",
    "reading": "きじ",
    "meaning": "fabric; dough",
    "level": "3"
  },
  {
    "word": "記事",
    "reading": "きじ",
    "meaning": "article, news story",
    "level": "3"
  },
  {
    "word": "技師",
    "reading": "ぎし",
    "meaning": "engineer, technician",
    "level": "3"
  },
  {
    "word": "記者",
    "reading": "きしゃ",
    "meaning": "reporter",
    "level": "3"
  },
  {
    "word": "傷",
    "reading": "きず",
    "meaning": "wound, injury, hurt",
    "level": "3"
  },
  {
    "word": "期待",
    "reading": "きたい",
    "meaning": "expectation, anticipation, hope",
    "level": "3"
  },
  {
    "word": "気体",
    "reading": "きたい",
    "meaning": "vapor, gas",
    "level": "3"
  },
  {
    "word": "帰宅",
    "reading": "きたく",
    "meaning": "returning home",
    "level": "3"
  },
  {
    "word": "貴重",
    "reading": "きちょう",
    "meaning": "precious, valuable",
    "level": "3"
  },
  {
    "word": "議長",
    "reading": "ぎちょう",
    "meaning": "chairman",
    "level": "3"
  },
  {
    "word": "きちんと",
    "reading": "きちんと",
    "meaning": "precisely, accurately",
    "level": "3"
  },
  {
    "word": "きつい",
    "reading": "きつい",
    "meaning": "tight, close, intense",
    "level": "3"
  },
  {
    "word": "気付く",
    "reading": "きづく",
    "meaning": "to notice, to recognize, to become aware of",
    "level": "3"
  },
  {
    "word": "気に入る",
    "reading": "きにいる",
    "meaning": "to like, to be please",
    "level": "3"
  },
  {
    "word": "記入",
    "reading": "きにゅう",
    "meaning": "entry, filling in of forms",
    "level": "3"
  },
  {
    "word": "記念",
    "reading": "きねん",
    "meaning": "commemoration, memory",
    "level": "3"
  },
  {
    "word": "機能",
    "reading": "きのう",
    "meaning": "function, faculty",
    "level": "3"
  },
  {
    "word": "気の毒",
    "reading": "きのどく",
    "meaning": "pitiful, a pity",
    "level": "3"
  },
  {
    "word": "寄付",
    "reading": "きふ",
    "meaning": "contribution, donation",
    "level": "3"
  },
  {
    "word": "希望",
    "reading": "きぼう",
    "meaning": "hope, wish, aspiration",
    "level": "3"
  },
  {
    "word": "基本",
    "reading": "きほん",
    "meaning": "basic, basis",
    "level": "3"
  },
  {
    "word": "決まり",
    "reading": "きまり",
    "meaning": "settlement, conclusion, rule",
    "level": "3"
  },
  {
    "word": "気味",
    "reading": "きみ",
    "meaning": "-like, -looking, -looked",
    "level": "3"
  },
  {
    "word": "奇妙",
    "reading": "きみょう",
    "meaning": "strange, queer, curious",
    "level": "3"
  },
  {
    "word": "義務",
    "reading": "ぎむ",
    "meaning": "duty, obligation, responsibility",
    "level": "3"
  },
  {
    "word": "疑問",
    "reading": "ぎもん",
    "meaning": "question, problem, doubt",
    "level": "3"
  },
  {
    "word": "逆",
    "reading": "ぎゃく",
    "meaning": "reverse, opposite",
    "level": "3"
  },
  {
    "word": "キャプテン",
    "reading": "キャプテン",
    "meaning": "captain",
    "level": "3"
  },
  {
    "word": "キャンプ",
    "reading": "キャンプ",
    "meaning": "camp",
    "level": "3"
  },
  {
    "word": "旧",
    "reading": "きゅう",
    "meaning": "ex-",
    "level": "3"
  },
  {
    "word": "級",
    "reading": "きゅう",
    "meaning": "class, grade, rank",
    "level": "3"
  },
  {
    "word": "球",
    "reading": "きゅう",
    "meaning": "globe, sphere, ball",
    "level": "3"
  },
  {
    "word": "休暇",
    "reading": "きゅうか",
    "meaning": "vacation, holiday, day off",
    "level": "3"
  },
  {
    "word": "休憩",
    "reading": "きゅうけい",
    "meaning": "rest, break, intermission",
    "level": "3"
  },
  {
    "word": "急激",
    "reading": "きゅうげき",
    "meaning": "sudden, precipitous, radical",
    "level": "3"
  },
  {
    "word": "吸収",
    "reading": "きゅうしゅう",
    "meaning": "absorption, suction",
    "level": "3"
  },
  {
    "word": "救助",
    "reading": "きゅうじょ",
    "meaning": "relief, aid, rescue",
    "level": "3"
  },
  {
    "word": "急速",
    "reading": "きゅうそく",
    "meaning": "rapid (e.g., progress)",
    "level": "3"
  },
  {
    "word": "休息",
    "reading": "きゅうそく",
    "meaning": "rest, relief, relaxation",
    "level": "3"
  },
  {
    "word": "急に",
    "reading": "きゅうに",
    "meaning": "suddenly",
    "level": "3"
  },
  {
    "word": "給料",
    "reading": "きゅうりょう",
    "meaning": "salary, wages",
    "level": "3"
  },
  {
    "word": "器用",
    "reading": "きよう",
    "meaning": "skillful, handy",
    "level": "3"
  },
  {
    "word": "教科書",
    "reading": "きょうかしょ",
    "meaning": "textbook",
    "level": "3"
  },
  {
    "word": "競技",
    "reading": "きょうぎ",
    "meaning": "game, match, contest",
    "level": "3"
  },
  {
    "word": "行儀",
    "reading": "ぎょうぎ",
    "meaning": "manners",
    "level": "3"
  },
  {
    "word": "供給",
    "reading": "きょうきゅう",
    "meaning": "supply, provision",
    "level": "3"
  },
  {
    "word": "教授",
    "reading": "きょうじゅ",
    "meaning": "teaching, instruction; professor",
    "level": "3"
  },
  {
    "word": "強調",
    "reading": "きょうちょう",
    "meaning": "emphasis, stress, stressed point",
    "level": "3"
  },
  {
    "word": "共通",
    "reading": "きょうつう",
    "meaning": "commonness, mutual",
    "level": "3"
  },
  {
    "word": "共同",
    "reading": "きょうどう",
    "meaning": "cooperation, association, collaboration",
    "level": "3"
  },
  {
    "word": "恐怖",
    "reading": "きょうふ",
    "meaning": "fear, terror",
    "level": "3"
  },
  {
    "word": "協力",
    "reading": "きょうりょく",
    "meaning": "cooperation, collaboration",
    "level": "3"
  },
  {
    "word": "強力",
    "reading": "きょうりょく",
    "meaning": "powerful, strong",
    "level": "3"
  },
  {
    "word": "許可",
    "reading": "きょか",
    "meaning": "permission, approval",
    "level": "3"
  },
  {
    "word": "局",
    "reading": "きょく",
    "meaning": "office, bureau, station(TV, radio)",
    "level": "3"
  },
  {
    "word": "巨大",
    "reading": "きょだい",
    "meaning": "huge, gigantic, enormous",
    "level": "3"
  },
  {
    "word": "嫌う",
    "reading": "きらう",
    "meaning": "to hate, to dislike, to loathe",
    "level": "3"
  },
  {
    "word": "霧",
    "reading": "きり",
    "meaning": "fog, mist",
    "level": "3"
  },
  {
    "word": "切れ",
    "reading": "きれ",
    "meaning": "cloth, piece, cut",
    "level": "3"
  },
  {
    "word": "切れる",
    "reading": "きれる",
    "meaning": "to cut well, to be sharp; to break (off)",
    "level": "3"
  },
  {
    "word": "記録",
    "reading": "きろく",
    "meaning": "record, minutes, document",
    "level": "3"
  },
  {
    "word": "議論",
    "reading": "ぎろん",
    "meaning": "argument, discussion, dispute",
    "level": "3"
  },
  {
    "word": "金",
    "reading": "きん",
    "meaning": "gold, metal; money",
    "level": "3"
  },
  {
    "word": "銀",
    "reading": "ぎん",
    "meaning": "silver",
    "level": "3"
  },
  {
    "word": "禁煙",
    "reading": "きんえん",
    "meaning": "No Smoking",
    "level": "3"
  },
  {
    "word": "金額",
    "reading": "きんがく",
    "meaning": "amount of money",
    "level": "3"
  },
  {
    "word": "金庫",
    "reading": "きんこ",
    "meaning": "safe, vault",
    "level": "3"
  },
  {
    "word": "禁止",
    "reading": "きんし",
    "meaning": "prohibition, ban",
    "level": "3"
  },
  {
    "word": "金銭",
    "reading": "きんせん",
    "meaning": "money, cash",
    "level": "3"
  },
  {
    "word": "金属",
    "reading": "きんぞく",
    "meaning": "metal",
    "level": "3"
  },
  {
    "word": "近代",
    "reading": "きんだい",
    "meaning": "modern times",
    "level": "3"
  },
  {
    "word": "緊張",
    "reading": "きんちょう",
    "meaning": "tension, mental strain, nervousness",
    "level": "3"
  },
  {
    "word": "筋肉",
    "reading": "きんにく",
    "meaning": "muscle, sinews",
    "level": "3"
  },
  {
    "word": "金融",
    "reading": "きんゆう",
    "meaning": "finance, money and banking",
    "level": "3"
  },
  {
    "word": "句",
    "reading": "く",
    "meaning": "phrase",
    "level": "3"
  },
  {
    "word": "食う",
    "reading": "くう",
    "meaning": "(male) (vulg.) to eat",
    "level": "3"
  },
  {
    "word": "偶然",
    "reading": "ぐうぜん",
    "meaning": "(by) chance, unexpectedly",
    "level": "3"
  },
  {
    "word": "臭い",
    "reading": "くさい",
    "meaning": "stinky, smelly, bad-smelling",
    "level": "3"
  },
  {
    "word": "鎖",
    "reading": "くさり",
    "meaning": "chain",
    "level": "3"
  },
  {
    "word": "腐る",
    "reading": "くさる",
    "meaning": "to rot, to go bad",
    "level": "3"
  },
  {
    "word": "癖",
    "reading": "くせ",
    "meaning": "a habit (often a bad habit), peculiarity",
    "level": "3"
  },
  {
    "word": "管",
    "reading": "くだ",
    "meaning": "pipe, tube",
    "level": "3"
  },
  {
    "word": "具体",
    "reading": "ぐたい",
    "meaning": "concrete, tangible, material",
    "level": "3"
  },
  {
    "word": "下り",
    "reading": "くだり",
    "meaning": "down-train (going away from Tokyo)",
    "level": "3"
  },
  {
    "word": "下る",
    "reading": "くだる",
    "meaning": "to get down, to descend",
    "level": "3"
  },
  {
    "word": "苦痛",
    "reading": "くつう",
    "meaning": "pain, agony",
    "level": "3"
  },
  {
    "word": "ぐっすり",
    "reading": "ぐっすり",
    "meaning": "sound asleep, fast asleep",
    "level": "3"
  },
  {
    "word": "区別",
    "reading": "くべつ",
    "meaning": "distinction, differentiation, classification",
    "level": "3"
  },
  {
    "word": "組",
    "reading": "くみ",
    "meaning": "class, team, set",
    "level": "3"
  },
  {
    "word": "組合",
    "reading": "くみあい",
    "meaning": "association, union",
    "level": "3"
  },
  {
    "word": "組む",
    "reading": "くむ",
    "meaning": "to put together",
    "level": "3"
  },
  {
    "word": "汲む",
    "reading": "くむ",
    "meaning": "to draw, to scoop, to pump",
    "level": "3"
  },
  {
    "word": "酌む",
    "reading": "くむ",
    "meaning": "to serve sake",
    "level": "3"
  },
  {
    "word": "悔しい",
    "reading": "くやしい",
    "meaning": "regrettable, mortifying, vexing",
    "level": "3"
  },
  {
    "word": "位",
    "reading": "くらい",
    "meaning": "grade, rank, about",
    "level": "3"
  },
  {
    "word": "暮らし",
    "reading": "くらし",
    "meaning": "living; life style",
    "level": "3"
  },
  {
    "word": "クラシック",
    "reading": "クラシック",
    "meaning": "classic(s)",
    "level": "3"
  },
  {
    "word": "暮らす",
    "reading": "くらす",
    "meaning": "to live, to get along",
    "level": "3"
  },
  {
    "word": "グラス",
    "reading": "グラス",
    "meaning": "glass; grass",
    "level": "3"
  },
  {
    "word": "グランド",
    "reading": "グランド",
    "meaning": "gland, grand, (electrical) ground",
    "level": "3"
  },
  {
    "word": "クリーム",
    "reading": "クリーム",
    "meaning": "cream",
    "level": "3"
  },
  {
    "word": "繰り返す",
    "reading": "くりかえす",
    "meaning": "to repeat, to do something over again",
    "level": "3"
  },
  {
    "word": "クリスマス",
    "reading": "クリスマス",
    "meaning": "Christmas",
    "level": "3"
  },
  {
    "word": "狂う",
    "reading": "くるう",
    "meaning": "to go mad, to get out of order",
    "level": "3"
  },
  {
    "word": "グループ",
    "reading": "グループ",
    "meaning": "group",
    "level": "3"
  },
  {
    "word": "苦しい",
    "reading": "くるしい",
    "meaning": "tough; physically strenuous",
    "level": "3"
  },
  {
    "word": "苦しむ",
    "reading": "くるしむ",
    "meaning": "to suffer, to groan, to be worried",
    "level": "3"
  },
  {
    "word": "暮れ",
    "reading": "くれ",
    "meaning": "year end,",
    "level": "3"
  },
  {
    "word": "苦労",
    "reading": "くろう",
    "meaning": "hardship; suffering",
    "level": "3"
  },
  {
    "word": "加える",
    "reading": "くわえる",
    "meaning": "to append, to sum up, to add (up)",
    "level": "3"
  },
  {
    "word": "咥える",
    "reading": "くわえる",
    "meaning": "to hold something in the mouth",
    "level": "3"
  },
  {
    "word": "詳しい",
    "reading": "くわしい",
    "meaning": "detailed; full; accurate",
    "level": "3"
  },
  {
    "word": "加わる",
    "reading": "くわわる",
    "meaning": "to join in, to accede to",
    "level": "3"
  },
  {
    "word": "訓",
    "reading": "くん",
    "meaning": "native Japanese reading of a Chinese character",
    "level": "3"
  },
  {
    "word": "軍",
    "reading": "ぐん",
    "meaning": "army, force, troops",
    "level": "3"
  },
  {
    "word": "郡",
    "reading": "ぐん",
    "meaning": "country, district",
    "level": "3"
  },
  {
    "word": "軍隊",
    "reading": "ぐんたい",
    "meaning": "army, troops",
    "level": "3"
  },
  {
    "word": "訓練",
    "reading": "くんれん",
    "meaning": "practice, training",
    "level": "3"
  },
  {
    "word": "下",
    "reading": "げ",
    "meaning": "under, below, beneath",
    "level": "3"
  },
  {
    "word": "計",
    "reading": "けい",
    "meaning": "plan; sum, total",
    "level": "3"
  },
  {
    "word": "敬意",
    "reading": "けいい",
    "meaning": "respect, honor",
    "level": "3"
  },
  {
    "word": "経営",
    "reading": "けいえい",
    "meaning": "management, administration",
    "level": "3"
  },
  {
    "word": "景気",
    "reading": "けいき",
    "meaning": "condition, state, business (condition)",
    "level": "3"
  },
  {
    "word": "傾向",
    "reading": "けいこう",
    "meaning": "tendency, trend, inclination",
    "level": "3"
  },
  {
    "word": "警告",
    "reading": "けいこく",
    "meaning": "warning",
    "level": "3"
  },
  {
    "word": "計算",
    "reading": "けいさん",
    "meaning": "calculation, reckoning",
    "level": "3"
  },
  {
    "word": "掲示",
    "reading": "けいじ",
    "meaning": "notice, bulletin",
    "level": "3"
  },
  {
    "word": "刑事",
    "reading": "けいじ",
    "meaning": "criminal case, (police) detective",
    "level": "3"
  },
  {
    "word": "芸術",
    "reading": "げいじゅつ",
    "meaning": "(fine) art, the arts",
    "level": "3"
  },
  {
    "word": "契約",
    "reading": "けいやく",
    "meaning": "contract, compact, agreement",
    "level": "3"
  },
  {
    "word": "経由",
    "reading": "けいゆ",
    "meaning": "go by the way, via",
    "level": "3"
  },
  {
    "word": "ケース",
    "reading": "ケース",
    "meaning": "case",
    "level": "3"
  },
  {
    "word": "ゲーム",
    "reading": "ゲーム",
    "meaning": "game",
    "level": "3"
  },
  {
    "word": "劇",
    "reading": "げき",
    "meaning": "drama, play",
    "level": "3"
  },
  {
    "word": "劇場",
    "reading": "げきじょう",
    "meaning": "theater, playhouse",
    "level": "3"
  },
  {
    "word": "化粧",
    "reading": "けしょう",
    "meaning": "make-up (cosmetic)",
    "level": "3"
  },
  {
    "word": "けち",
    "reading": "けち",
    "meaning": "stinginess, miser",
    "level": "3"
  },
  {
    "word": "血液",
    "reading": "けつえき",
    "meaning": "blood",
    "level": "3"
  },
  {
    "word": "結果",
    "reading": "けっか",
    "meaning": "result, consequence",
    "level": "3"
  },
  {
    "word": "欠陥",
    "reading": "けっかん",
    "meaning": "defect, fault, deficiency",
    "level": "3"
  },
  {
    "word": "結局",
    "reading": "けっきょく",
    "meaning": "after all, eventually",
    "level": "3"
  },
  {
    "word": "決心",
    "reading": "けっしん",
    "meaning": "determination, resolution",
    "level": "3"
  },
  {
    "word": "欠席",
    "reading": "けっせき",
    "meaning": "absence, non-attendance",
    "level": "3"
  },
  {
    "word": "決定",
    "reading": "けってい",
    "meaning": "decision, determination",
    "level": "3"
  },
  {
    "word": "欠点",
    "reading": "けってん",
    "meaning": "faults, defect, weakness",
    "level": "3"
  },
  {
    "word": "結論",
    "reading": "けつろん",
    "meaning": "conclusion",
    "level": "3"
  },
  {
    "word": "煙",
    "reading": "けむり",
    "meaning": "smoke, fumes",
    "level": "3"
  },
  {
    "word": "蹴る",
    "reading": "ける",
    "meaning": "to kick",
    "level": "3"
  },
  {
    "word": "券",
    "reading": "けん",
    "meaning": "ticket, certificate",
    "level": "3"
  },
  {
    "word": "県",
    "reading": "けん",
    "meaning": "prefecture",
    "level": "3"
  },
  {
    "word": "見解",
    "reading": "けんかい",
    "meaning": "opinion, point of view",
    "level": "3"
  },
  {
    "word": "限界",
    "reading": "げんかい",
    "meaning": "limit, bound",
    "level": "3"
  },
  {
    "word": "現金",
    "reading": "げんきん",
    "meaning": "cash",
    "level": "3"
  },
  {
    "word": "言語",
    "reading": "げんご",
    "meaning": "language",
    "level": "3"
  },
  {
    "word": "健康",
    "reading": "けんこう",
    "meaning": "health(y)",
    "level": "3"
  },
  {
    "word": "検査",
    "reading": "けんさ",
    "meaning": "inspection, examination",
    "level": "3"
  },
  {
    "word": "現在",
    "reading": "げんざい",
    "meaning": "now (same as 今 (いま)), present, current",
    "level": "3"
  },
  {
    "word": "現実",
    "reading": "げんじつ",
    "meaning": "reality",
    "level": "3"
  },
  {
    "word": "現象",
    "reading": "げんしょう",
    "meaning": "phenomenon",
    "level": "3"
  },
  {
    "word": "現状",
    "reading": "げんじょう",
    "meaning": "present condition, status quo",
    "level": "3"
  },
  {
    "word": "建設",
    "reading": "けんせつ",
    "meaning": "construction, foundation",
    "level": "3"
  },
  {
    "word": "現代",
    "reading": "げんだい",
    "meaning": "today, present-day",
    "level": "3"
  },
  {
    "word": "建築",
    "reading": "けんちく",
    "meaning": "construction, architecture",
    "level": "3"
  },
  {
    "word": "見当",
    "reading": "けんとう",
    "meaning": "estimate, guess",
    "level": "3"
  },
  {
    "word": "検討",
    "reading": "けんとう",
    "meaning": "consideration, examination, investigation",
    "level": "3"
  },
  {
    "word": "現場",
    "reading": "げんば",
    "meaning": "actual spot, scene, field",
    "level": "3"
  },
  {
    "word": "憲法",
    "reading": "けんぽう",
    "meaning": "constitution",
    "level": "3"
  },
  {
    "word": "権利",
    "reading": "けんり",
    "meaning": "right, privilege",
    "level": "3"
  },
  {
    "word": "後",
    "reading": "ご",
    "meaning": "afterwards, since then",
    "level": "3"
  },
  {
    "word": "碁",
    "reading": "ご",
    "meaning": "Go (board game of capturing territory)",
    "level": "3"
  },
  {
    "word": "恋",
    "reading": "こい",
    "meaning": "love, tender passion",
    "level": "3"
  },
  {
    "word": "濃い",
    "reading": "こい",
    "meaning": "thick (as of color, liquid), dense, strong",
    "level": "3"
  },
  {
    "word": "恋人",
    "reading": "こいびと",
    "meaning": "lover; sweetheart; girlfriend",
    "level": "3"
  },
  {
    "word": "幸運",
    "reading": "こううん",
    "meaning": "good luck, fortune",
    "level": "3"
  },
  {
    "word": "講演",
    "reading": "こうえん",
    "meaning": "lecture, talk",
    "level": "3"
  },
  {
    "word": "効果",
    "reading": "こうか",
    "meaning": "effect, result",
    "level": "3"
  },
  {
    "word": "硬貨",
    "reading": "こうか",
    "meaning": "coin",
    "level": "3"
  },
  {
    "word": "高価",
    "reading": "こうか",
    "meaning": "high price",
    "level": "3"
  },
  {
    "word": "豪華",
    "reading": "ごうか",
    "meaning": "luxurious, gorgeous, extravagance",
    "level": "3"
  },
  {
    "word": "合格",
    "reading": "ごうかく",
    "meaning": "success, passing (e.g., exam)",
    "level": "3"
  },
  {
    "word": "交換",
    "reading": "こうかん",
    "meaning": "exchange, swap",
    "level": "3"
  },
  {
    "word": "航空",
    "reading": "こうくう",
    "meaning": "aviation, flying",
    "level": "3"
  },
  {
    "word": "光景",
    "reading": "こうけい",
    "meaning": "scene, spectacle",
    "level": "3"
  },
  {
    "word": "合計",
    "reading": "ごうけい",
    "meaning": "sum total, total amount",
    "level": "3"
  },
  {
    "word": "攻撃",
    "reading": "こうげき",
    "meaning": "attack, strike, offensive",
    "level": "3"
  },
  {
    "word": "貢献",
    "reading": "こうけん",
    "meaning": "contribution, services",
    "level": "3"
  },
  {
    "word": "広告",
    "reading": "こうこく",
    "meaning": "advertisement",
    "level": "3"
  },
  {
    "word": "交際",
    "reading": "こうさい",
    "meaning": "friendship, association, acquaintance",
    "level": "3"
  },
  {
    "word": "校舎",
    "reading": "こうしゃ",
    "meaning": "school building",
    "level": "3"
  },
  {
    "word": "後者",
    "reading": "こうしゃ",
    "meaning": "the latter",
    "level": "3"
  },
  {
    "word": "工場",
    "reading": "こうば",
    "meaning": "factory, plant",
    "level": "3"
  },
  {
    "word": "公正",
    "reading": "こうせい",
    "meaning": "justice, fairness, impartiality",
    "level": "3"
  },
  {
    "word": "構成",
    "reading": "こうせい",
    "meaning": "organization, composition",
    "level": "3"
  },
  {
    "word": "高速",
    "reading": "こうそく",
    "meaning": "high speed, high gear",
    "level": "3"
  },
  {
    "word": "行動",
    "reading": "こうどう",
    "meaning": "action, conduct, behavior",
    "level": "3"
  },
  {
    "word": "強盗",
    "reading": "ごうとう",
    "meaning": "robbery, burglary",
    "level": "3"
  },
  {
    "word": "後輩",
    "reading": "こうはい",
    "meaning": "junior members of a group",
    "level": "3"
  },
  {
    "word": "幸福",
    "reading": "こうふく",
    "meaning": "happiness, blessedness",
    "level": "3"
  },
  {
    "word": "公平",
    "reading": "こうへい",
    "meaning": "fairness, impartial, justice",
    "level": "3"
  },
  {
    "word": "候補",
    "reading": "こうほ",
    "meaning": "candidacy",
    "level": "3"
  },
  {
    "word": "考慮",
    "reading": "こうりょ",
    "meaning": "consideration, taking into account",
    "level": "3"
  },
  {
    "word": "越える",
    "reading": "こえる",
    "meaning": "to exceed, to cross over, to cross",
    "level": "3"
  },
  {
    "word": "超える",
    "reading": "こえる",
    "meaning": "to exceed, to cross over, to cross",
    "level": "3"
  },
  {
    "word": "コーチ",
    "reading": "コーチ",
    "meaning": "coach",
    "level": "3"
  },
  {
    "word": "コード",
    "reading": "コード",
    "meaning": "code; cord; chord",
    "level": "3"
  },
  {
    "word": "氷",
    "reading": "こおり",
    "meaning": "ice, hail",
    "level": "3"
  },
  {
    "word": "凍る",
    "reading": "こおる",
    "meaning": "to freeze, to be frozen over, to congeal",
    "level": "3"
  },
  {
    "word": "ゴール",
    "reading": "ゴール",
    "meaning": "goal",
    "level": "3"
  },
  {
    "word": "誤解",
    "reading": "ごかい",
    "meaning": "misunderstanding",
    "level": "3"
  },
  {
    "word": "語学",
    "reading": "ごがく",
    "meaning": "language study",
    "level": "3"
  },
  {
    "word": "呼吸",
    "reading": "こきゅう",
    "meaning": "breath, respiration",
    "level": "3"
  },
  {
    "word": "故郷",
    "reading": "こきょう",
    "meaning": "hometown",
    "level": "3"
  },
  {
    "word": "極",
    "reading": "ごく",
    "meaning": "quite, very",
    "level": "3"
  },
  {
    "word": "国語",
    "reading": "こくご",
    "meaning": "national language",
    "level": "3"
  },
  {
    "word": "国籍",
    "reading": "こくせき",
    "meaning": "nationality",
    "level": "3"
  },
  {
    "word": "黒板",
    "reading": "こくばん",
    "meaning": "blackboard",
    "level": "3"
  },
  {
    "word": "克服",
    "reading": "こくふく",
    "meaning": "conquest, overcome",
    "level": "3"
  },
  {
    "word": "国民",
    "reading": "こくみん",
    "meaning": "national, people, citizen",
    "level": "3"
  },
  {
    "word": "穀物",
    "reading": "こくもつ",
    "meaning": "grain, cereal, corn",
    "level": "3"
  },
  {
    "word": "腰",
    "reading": "こし",
    "meaning": "hip, waist",
    "level": "3"
  },
  {
    "word": "胡椒",
    "reading": "こしょう",
    "meaning": "pepper",
    "level": "3"
  },
  {
    "word": "個人",
    "reading": "こじん",
    "meaning": "individual, private person",
    "level": "3"
  },
  {
    "word": "越す",
    "reading": "こす",
    "meaning": "to go over (e.g., with audience)",
    "level": "3"
  },
  {
    "word": "超す",
    "reading": "こす",
    "meaning": "to cross, to pass, to tide over",
    "level": "3"
  },
  {
    "word": "国家",
    "reading": "こっか",
    "meaning": "state, country, nation",
    "level": "3"
  },
  {
    "word": "国会",
    "reading": "こっかい",
    "meaning": "National Diet, parliament, congress",
    "level": "3"
  },
  {
    "word": "国境",
    "reading": "こっきょう",
    "meaning": "national or state border",
    "level": "3"
  },
  {
    "word": "骨折",
    "reading": "こっせつ",
    "meaning": "bone fracture",
    "level": "3"
  },
  {
    "word": "小包",
    "reading": "こづつみ",
    "meaning": "parcel, package",
    "level": "3"
  },
  {
    "word": "琴",
    "reading": "こと",
    "meaning": "Japanese harp",
    "level": "3"
  },
  {
    "word": "異なる",
    "reading": "ことなる",
    "meaning": "to differ, to vary",
    "level": "3"
  },
  {
    "word": "諺",
    "reading": "ことわざ",
    "meaning": "proverb, saying",
    "level": "3"
  },
  {
    "word": "断る",
    "reading": "ことわる",
    "meaning": "to refuse, to decline, to dismiss",
    "level": "3"
  },
  {
    "word": "粉",
    "reading": "こな",
    "meaning": "flour, powder",
    "level": "3"
  },
  {
    "word": "好み",
    "reading": "このみ",
    "meaning": "liking, taste, choice",
    "level": "3"
  },
  {
    "word": "好む",
    "reading": "このむ",
    "meaning": "to like, to prefer",
    "level": "3"
  },
  {
    "word": "こぼす",
    "reading": "こぼす",
    "meaning": "to spill",
    "level": "3"
  },
  {
    "word": "こぼれる",
    "reading": "こぼれる",
    "meaning": "to overflow, to spill",
    "level": "3"
  },
  {
    "word": "塵",
    "reading": "ごみ",
    "meaning": "garbage, litter",
    "level": "3"
  },
  {
    "word": "小麦",
    "reading": "こむぎ",
    "meaning": "wheat",
    "level": "3"
  },
  {
    "word": "ごめんなさい",
    "reading": "ごめんなさい",
    "meaning": "I beg your pardon, excuse me, I'm sorry",
    "level": "3"
  },
  {
    "word": "小屋",
    "reading": "こや",
    "meaning": "hut, cabin, shed",
    "level": "3"
  },
  {
    "word": "これら",
    "reading": "これら",
    "meaning": "these",
    "level": "3"
  },
  {
    "word": "殺す",
    "reading": "ころす",
    "meaning": "to kill",
    "level": "3"
  },
  {
    "word": "転ぶ",
    "reading": "ころぶ",
    "meaning": "to fall down, to fall over",
    "level": "3"
  },
  {
    "word": "今回",
    "reading": "こんかい",
    "meaning": "now, this time, lately",
    "level": "3"
  },
  {
    "word": "今後",
    "reading": "こんご",
    "meaning": "from now on, hereafter",
    "level": "3"
  },
  {
    "word": "混雑",
    "reading": "こんざつ",
    "meaning": "confusion, congestion",
    "level": "3"
  },
  {
    "word": "こんなに",
    "reading": "こんなに",
    "meaning": "so, like this, in this way",
    "level": "3"
  },
  {
    "word": "困難",
    "reading": "こんなん",
    "meaning": "difficulty, distress",
    "level": "3"
  },
  {
    "word": "今日",
    "reading": "こんにち",
    "meaning": "today, this day",
    "level": "3"
  },
  {
    "word": "こんにちは",
    "reading": "こんにちは",
    "meaning": "hello, good day (daytime greeting)",
    "level": "3"
  },
  {
    "word": "婚約",
    "reading": "こんやく",
    "meaning": "engagement, betrothal",
    "level": "3"
  },
  {
    "word": "混乱",
    "reading": "こんらん",
    "meaning": "chaos, confusion, mayhem",
    "level": "3"
  },
  {
    "word": "差",
    "reading": "さ",
    "meaning": "difference, variation",
    "level": "3"
  },
  {
    "word": "サービス",
    "reading": "サービス",
    "meaning": "service, support system; goods or services without charge",
    "level": "3"
  },
  {
    "word": "際",
    "reading": "さい",
    "meaning": "on the occasion of, circumstances",
    "level": "3"
  },
  {
    "word": "最高",
    "reading": "さいこう",
    "meaning": "highest, supreme, the most",
    "level": "3"
  },
  {
    "word": "財産",
    "reading": "ざいさん",
    "meaning": "property, fortune, assets",
    "level": "3"
  },
  {
    "word": "最終",
    "reading": "さいしゅう",
    "meaning": "last, closing",
    "level": "3"
  },
  {
    "word": "最中",
    "reading": "さいちゅう",
    "meaning": "in the middle of",
    "level": "3"
  },
  {
    "word": "最低",
    "reading": "さいてい",
    "meaning": "least, lowest, worst",
    "level": "3"
  },
  {
    "word": "才能",
    "reading": "さいのう",
    "meaning": "talent, ability",
    "level": "3"
  },
  {
    "word": "裁判",
    "reading": "さいばん",
    "meaning": "trial, judgment",
    "level": "3"
  },
  {
    "word": "材料",
    "reading": "ざいりょう",
    "meaning": "ingredients, material",
    "level": "3"
  },
  {
    "word": "幸い",
    "reading": "さいわい",
    "meaning": "fortunately; luckily",
    "level": "3"
  },
  {
    "word": "サイン",
    "reading": "サイン",
    "meaning": "autograph; sign; sine",
    "level": "3"
  },
  {
    "word": "境",
    "reading": "さかい",
    "meaning": "border, boundary, mental state",
    "level": "3"
  },
  {
    "word": "逆らう",
    "reading": "さからう",
    "meaning": "to go against, to oppose, to disobey",
    "level": "3"
  },
  {
    "word": "盛り",
    "reading": "さかり",
    "meaning": "helping, serving",
    "level": "3"
  },
  {
    "word": "作業",
    "reading": "さぎょう",
    "meaning": "work, operation, manufacturing",
    "level": "3"
  },
  {
    "word": "裂く",
    "reading": "さく",
    "meaning": "to tear, to split",
    "level": "3"
  },
  {
    "word": "昨",
    "reading": "さく",
    "meaning": "last (year), yesterday",
    "level": "3"
  },
  {
    "word": "作品",
    "reading": "さくひん",
    "meaning": "work, opus, production",
    "level": "3"
  },
  {
    "word": "作物",
    "reading": "さくもつ",
    "meaning": "produce (e.g., agricultural), crops",
    "level": "3"
  },
  {
    "word": "桜",
    "reading": "さくら",
    "meaning": "cherry blossom, cherry tree",
    "level": "3"
  },
  {
    "word": "酒",
    "reading": "さけ",
    "meaning": "alcohol, sake",
    "level": "3"
  },
  {
    "word": "叫ぶ",
    "reading": "さけぶ",
    "meaning": "to shout, to cry",
    "level": "3"
  },
  {
    "word": "避ける",
    "reading": "さける",
    "meaning": "to avoid (physical contact); to ward off, to avert",
    "level": "3"
  },
  {
    "word": "支える",
    "reading": "ささえる",
    "meaning": "support, hold, sustain",
    "level": "3"
  },
  {
    "word": "刺さる",
    "reading": "ささる",
    "meaning": "to stick, to be stuck",
    "level": "3"
  },
  {
    "word": "刺す",
    "reading": "さす",
    "meaning": "to sting, to bite (e.g., bug), to prick, to stab",
    "level": "3"
  },
  {
    "word": "指す",
    "reading": "さす",
    "meaning": "to point,",
    "level": "3"
  },
  {
    "word": "挿す",
    "reading": "さす",
    "meaning": "to insert, to put in, to graft",
    "level": "3"
  },
  {
    "word": "注す",
    "reading": "さす",
    "meaning": "to pour (drink), to serve (drinks)",
    "level": "3"
  },
  {
    "word": "射す",
    "reading": "さす",
    "meaning": "to shine, to strike",
    "level": "3"
  },
  {
    "word": "座席",
    "reading": "ざせき",
    "meaning": "seat",
    "level": "3"
  },
  {
    "word": "誘う",
    "reading": "さそう",
    "meaning": "to invite (someone to do something with you); to tempt, to lure",
    "level": "3"
  },
  {
    "word": "札",
    "reading": "さつ",
    "meaning": "bill, note",
    "level": "3"
  },
  {
    "word": "作家",
    "reading": "さっか",
    "meaning": "author, writer, novelist",
    "level": "3"
  },
  {
    "word": "作曲",
    "reading": "さっきょく",
    "meaning": "composition (of music)",
    "level": "3"
  },
  {
    "word": "ざっと",
    "reading": "ざっと",
    "meaning": "roughly, in round numbers",
    "level": "3"
  },
  {
    "word": "さっぱり",
    "reading": "さっぱり",
    "meaning": "feeling refreshed, neat",
    "level": "3"
  },
  {
    "word": "さて",
    "reading": "さて",
    "meaning": "well; now (typically used when switching to a new, usually more important topic)",
    "level": "3"
  },
  {
    "word": "砂漠",
    "reading": "さばく",
    "meaning": "desert",
    "level": "3"
  },
  {
    "word": "差別",
    "reading": "さべつ",
    "meaning": "discrimination, differentiation",
    "level": "3"
  },
  {
    "word": "ママ",
    "reading": "ママ",
    "meaning": "Mama",
    "level": "3"
  },
  {
    "word": "豆",
    "reading": "まめ",
    "meaning": "beans, peas",
    "level": "3"
  },
  {
    "word": "守る",
    "reading": "まもる",
    "meaning": "to protect; to abide (by the rules)",
    "level": "3"
  },
  {
    "word": "迷う",
    "reading": "まよう",
    "meaning": "to be puzzled, to be perplexed, to lose one's way",
    "level": "3"
  },
  {
    "word": "丸",
    "reading": "まる",
    "meaning": "circle, full (month)",
    "level": "3"
  },
  {
    "word": "円",
    "reading": "まる",
    "meaning": "circle",
    "level": "3"
  },
  {
    "word": "まるで",
    "reading": "まるで",
    "meaning": "just like",
    "level": "3"
  },
  {
    "word": "万一",
    "reading": "まんいち",
    "meaning": "by some chance, if by any chance",
    "level": "3"
  },
  {
    "word": "満足",
    "reading": "まんぞく",
    "meaning": "satisfaction",
    "level": "3"
  },
  {
    "word": "身",
    "reading": "み",
    "meaning": "body, main part",
    "level": "3"
  },
  {
    "word": "実",
    "reading": "み",
    "meaning": "fruit, seed, good result",
    "level": "3"
  },
  {
    "word": "見送り",
    "reading": "みおくり",
    "meaning": "seeing one off",
    "level": "3"
  },
  {
    "word": "味方",
    "reading": "みかた",
    "meaning": "ally, supporter",
    "level": "3"
  },
  {
    "word": "見事",
    "reading": "みごと",
    "meaning": "splendid, magnificent",
    "level": "3"
  },
  {
    "word": "ミス",
    "reading": "ミス",
    "meaning": "miss (mistake, error, failure), Miss",
    "level": "3"
  },
  {
    "word": "満ちる",
    "reading": "みちる",
    "meaning": "to be full, to mature",
    "level": "3"
  },
  {
    "word": "密",
    "reading": "みつ",
    "meaning": "thick, close",
    "level": "3"
  },
  {
    "word": "認める",
    "reading": "みとめる",
    "meaning": "to recognize, to notice; to approve",
    "level": "3"
  },
  {
    "word": "見舞い",
    "reading": "みまい",
    "meaning": "expression of sympathy, expression of concern",
    "level": "3"
  },
  {
    "word": "土産",
    "reading": "みやげ",
    "meaning": "souvenir",
    "level": "3"
  },
  {
    "word": "都",
    "reading": "みやこ",
    "meaning": "city; capital",
    "level": "3"
  },
  {
    "word": "妙",
    "reading": "みょう",
    "meaning": "strange, unusual",
    "level": "3"
  },
  {
    "word": "明後日",
    "reading": "みょうごにち",
    "meaning": "day after tomorrow",
    "level": "3"
  },
  {
    "word": "未来",
    "reading": "みらい",
    "meaning": "future (life tense)",
    "level": "3"
  },
  {
    "word": "魅力",
    "reading": "みりょく",
    "meaning": "charm, fascination, appeal",
    "level": "3"
  },
  {
    "word": "診る",
    "reading": "みる",
    "meaning": "to examine (a patient)",
    "level": "3"
  },
  {
    "word": "ミルク",
    "reading": "ミルク",
    "meaning": "milk",
    "level": "3"
  },
  {
    "word": "無",
    "reading": "む",
    "meaning": "nothing, naught, zero",
    "level": "3"
  },
  {
    "word": "向かい",
    "reading": "むかい",
    "meaning": "facing, opposite, across",
    "level": "3"
  },
  {
    "word": "迎え",
    "reading": "むかえ",
    "meaning": "meeting, person sent to pick up an arrival",
    "level": "3"
  },
  {
    "word": "向く",
    "reading": "むく",
    "meaning": "to face",
    "level": "3"
  },
  {
    "word": "剥く",
    "reading": "むく",
    "meaning": "to peel, to skin",
    "level": "3"
  },
  {
    "word": "向ける",
    "reading": "むける",
    "meaning": "to turn towards, to point",
    "level": "3"
  },
  {
    "word": "無視",
    "reading": "むし",
    "meaning": "disregard, ignore",
    "level": "3"
  },
  {
    "word": "蒸し暑い",
    "reading": "むしあつい",
    "meaning": "humid, sultry",
    "level": "3"
  },
  {
    "word": "虫歯",
    "reading": "むしば",
    "meaning": "cavity, tooth decay",
    "level": "3"
  },
  {
    "word": "寧ろ",
    "reading": "むしろ",
    "meaning": "rather, better, instead",
    "level": "3"
  },
  {
    "word": "蒸す",
    "reading": "むす",
    "meaning": "to steam, to poultice, to be sultry",
    "level": "3"
  },
  {
    "word": "結ぶ",
    "reading": "むすぶ",
    "meaning": "to tie, to bind, to link",
    "level": "3"
  },
  {
    "word": "無駄",
    "reading": "むだ",
    "meaning": "futility, uselessness",
    "level": "3"
  },
  {
    "word": "夢中",
    "reading": "むちゅう",
    "meaning": "crush, crazy, be hooked on",
    "level": "3"
  },
  {
    "word": "胸",
    "reading": "むね",
    "meaning": "breast, chest",
    "level": "3"
  },
  {
    "word": "無料",
    "reading": "むりょう",
    "meaning": "free, no charge",
    "level": "3"
  },
  {
    "word": "芽",
    "reading": "め",
    "meaning": "sprout",
    "level": "3"
  },
  {
    "word": "明確",
    "reading": "めいかく",
    "meaning": "clear, definite",
    "level": "3"
  },
  {
    "word": "名刺",
    "reading": "めいし",
    "meaning": "(name) card; business card",
    "level": "3"
  },
  {
    "word": "名詞",
    "reading": "めいし",
    "meaning": "noun",
    "level": "3"
  },
  {
    "word": "命じる",
    "reading": "めいじる",
    "meaning": "to order, to command, to appoint",
    "level": "3"
  },
  {
    "word": "名人",
    "reading": "めいじん",
    "meaning": "master, expert",
    "level": "3"
  },
  {
    "word": "命令",
    "reading": "めいれい",
    "meaning": "order, command, decree",
    "level": "3"
  },
  {
    "word": "迷惑",
    "reading": "めいわく",
    "meaning": "trouble, bother, annoyance",
    "level": "3"
  },
  {
    "word": "目上",
    "reading": "めうえ",
    "meaning": "person of higher status; one's senior",
    "level": "3"
  },
  {
    "word": "飯",
    "reading": "めし",
    "meaning": "meals, food",
    "level": "3"
  },
  {
    "word": "滅多に",
    "reading": "めったに",
    "meaning": "rarely (with neg. verb), seldom",
    "level": "3"
  },
  {
    "word": "メモ",
    "reading": "メモ",
    "meaning": "memorandum, note",
    "level": "3"
  },
  {
    "word": "面",
    "reading": "めん",
    "meaning": "face, mug, surface, side or facet, corner, page",
    "level": "3"
  },
  {
    "word": "綿",
    "reading": "めん",
    "meaning": "cotton",
    "level": "3"
  },
  {
    "word": "免許",
    "reading": "めんきょ",
    "meaning": "license, permit, certificate",
    "level": "3"
  },
  {
    "word": "面接",
    "reading": "めんせつ",
    "meaning": "interview",
    "level": "3"
  },
  {
    "word": "面倒",
    "reading": "めんどう",
    "meaning": "trouble, attention",
    "level": "3"
  },
  {
    "word": "メンバー",
    "reading": "メンバー",
    "meaning": "member",
    "level": "3"
  },
  {
    "word": "申し込む",
    "reading": "もうしこむ",
    "meaning": "to apply for, to make an application",
    "level": "3"
  },
  {
    "word": "申し訳",
    "reading": "もうしわけ",
    "meaning": "apology, excuse",
    "level": "3"
  },
  {
    "word": "毛布",
    "reading": "もうふ",
    "meaning": "blanket",
    "level": "3"
  },
  {
    "word": "燃える",
    "reading": "もえる",
    "meaning": "to burn",
    "level": "3"
  },
  {
    "word": "目的",
    "reading": "もくてき",
    "meaning": "purpose, goal, aim",
    "level": "3"
  },
  {
    "word": "目標",
    "reading": "もくひょう",
    "meaning": "mark, objective, target",
    "level": "3"
  },
  {
    "word": "文字",
    "reading": "もじ",
    "meaning": "letter (of alphabet), character",
    "level": "3"
  },
  {
    "word": "文字",
    "reading": "もんじ",
    "meaning": "letter (of alphabet), character",
    "level": "3"
  },
  {
    "word": "もしかすると",
    "reading": "もしかすると",
    "meaning": "perhaps, maybe, by some chance",
    "level": "3"
  },
  {
    "word": "もしも",
    "reading": "もしも",
    "meaning": "if",
    "level": "3"
  },
  {
    "word": "持ち上げる",
    "reading": "もちあげる",
    "meaning": "to raise, to lift up, to flatter",
    "level": "3"
  },
  {
    "word": "用いる",
    "reading": "もちいる",
    "meaning": "to use, to make use of",
    "level": "3"
  },
  {
    "word": "もったいない",
    "reading": "もったいない",
    "meaning": "wasteful; more than one deserves, unworthy of",
    "level": "3"
  },
  {
    "word": "尤も",
    "reading": "もっとも",
    "meaning": "quite right, plausible, natural",
    "level": "3"
  },
  {
    "word": "元",
    "reading": "もと",
    "meaning": "origin, original; former",
    "level": "3"
  },
  {
    "word": "基",
    "reading": "もと",
    "meaning": "basis",
    "level": "3"
  },
  {
    "word": "素",
    "reading": "もと",
    "meaning": "prime",
    "level": "3"
  },
  {
    "word": "戻す",
    "reading": "もどす",
    "meaning": "to restore, to put back, to return",
    "level": "3"
  },
  {
    "word": "基づく",
    "reading": "もとづく",
    "meaning": "to be grounded on, to be based on",
    "level": "3"
  },
  {
    "word": "求める",
    "reading": "もとめる",
    "meaning": "to request, to ask for; to seek, to search for",
    "level": "3"
  },
  {
    "word": "者",
    "reading": "もの",
    "meaning": "person (same as 人 (ひと))",
    "level": "3"
  },
  {
    "word": "物音",
    "reading": "ものおと",
    "meaning": "sounds",
    "level": "3"
  },
  {
    "word": "物語",
    "reading": "ものがたり",
    "meaning": "tale, story, legend",
    "level": "3"
  },
  {
    "word": "物事",
    "reading": "ものごと",
    "meaning": "things, everything",
    "level": "3"
  },
  {
    "word": "燃やす",
    "reading": "もやす",
    "meaning": "to burn",
    "level": "3"
  },
  {
    "word": "模様",
    "reading": "もよう",
    "meaning": "pattern, figure, design",
    "level": "3"
  },
  {
    "word": "文句",
    "reading": "もんく",
    "meaning": "a complaint",
    "level": "3"
  },
  {
    "word": "やがて",
    "reading": "やがて",
    "meaning": "before long, soon, at length",
    "level": "3"
  },
  {
    "word": "役",
    "reading": "やく",
    "meaning": "role, position",
    "level": "3"
  },
  {
    "word": "約",
    "reading": "やく",
    "meaning": "approximately, about, some",
    "level": "3"
  },
  {
    "word": "訳",
    "reading": "やく",
    "meaning": "translation",
    "level": "3"
  },
  {
    "word": "訳す",
    "reading": "やくす",
    "meaning": "to translate",
    "level": "3"
  },
  {
    "word": "役割",
    "reading": "やくわり",
    "meaning": "assigning (allotment of) parts, role, duties",
    "level": "3"
  },
  {
    "word": "家賃",
    "reading": "やちん",
    "meaning": "rent",
    "level": "3"
  },
  {
    "word": "厄介",
    "reading": "やっかい",
    "meaning": "trouble, burden, care",
    "level": "3"
  },
  {
    "word": "宿",
    "reading": "やど",
    "meaning": "inn, lodging",
    "level": "3"
  },
  {
    "word": "雇う",
    "reading": "やとう",
    "meaning": "to employ, to hire",
    "level": "3"
  },
  {
    "word": "屋根",
    "reading": "やね",
    "meaning": "roof",
    "level": "3"
  },
  {
    "word": "破る",
    "reading": "やぶる",
    "meaning": "to tear; to violate; to defeat",
    "level": "3"
  },
  {
    "word": "破れる",
    "reading": "やぶれる",
    "meaning": "to get torn, to wear out",
    "level": "3"
  },
  {
    "word": "辞める",
    "reading": "やめる",
    "meaning": "to retire",
    "level": "3"
  },
  {
    "word": "やや",
    "reading": "やや",
    "meaning": "a little, partially, somewhat",
    "level": "3"
  },
  {
    "word": "唯一",
    "reading": "ゆいいつ",
    "meaning": "only, sole, unique",
    "level": "3"
  },
  {
    "word": "勇気",
    "reading": "ゆうき",
    "meaning": "courage, bravery, boldness",
    "level": "3"
  },
  {
    "word": "友好",
    "reading": "ゆうこう",
    "meaning": "friendship",
    "level": "3"
  },
  {
    "word": "有効",
    "reading": "ゆうこう",
    "meaning": "valid, effectual",
    "level": "3"
  },
  {
    "word": "優秀",
    "reading": "ゆうしゅう",
    "meaning": "superiority, excellence",
    "level": "3"
  },
  {
    "word": "優勝",
    "reading": "ゆうしょう",
    "meaning": "overall victory, championship",
    "level": "3"
  },
  {
    "word": "友情",
    "reading": "ゆうじょう",
    "meaning": "friendship, fellowship",
    "level": "3"
  },
  {
    "word": "友人",
    "reading": "ゆうじん",
    "meaning": "friend (formal)",
    "level": "3"
  },
  {
    "word": "有能",
    "reading": "ゆうのう",
    "meaning": "able, capable, efficient",
    "level": "3"
  },
  {
    "word": "郵便",
    "reading": "ゆうびん",
    "meaning": "mail, postal service",
    "level": "3"
  },
  {
    "word": "ユーモア",
    "reading": "ユーモア",
    "meaning": "humor",
    "level": "3"
  },
  {
    "word": "有利",
    "reading": "ゆうり",
    "meaning": "advantageous, better",
    "level": "3"
  },
  {
    "word": "床",
    "reading": "ゆか",
    "meaning": "floor",
    "level": "3"
  },
  {
    "word": "愉快",
    "reading": "ゆかい",
    "meaning": "pleasant, happy",
    "level": "3"
  },
  {
    "word": "譲る",
    "reading": "ゆずる",
    "meaning": "to turn over, to assign, to hand over",
    "level": "3"
  },
  {
    "word": "豊か",
    "reading": "ゆたか",
    "meaning": "abundant, wealthy, plentiful, rich",
    "level": "3"
  },
  {
    "word": "茹でる",
    "reading": "ゆでる",
    "meaning": "to boil",
    "level": "3"
  },
  {
    "word": "許す",
    "reading": "ゆるす",
    "meaning": "to permit, to allow, to approve",
    "level": "3"
  },
  {
    "word": "夜",
    "reading": "よ",
    "meaning": "evening, night",
    "level": "3"
  },
  {
    "word": "夜明け",
    "reading": "よあけ",
    "meaning": "dawn, daybreak",
    "level": "3"
  },
  {
    "word": "酔う",
    "reading": "よう",
    "meaning": "to get drunk",
    "level": "3"
  },
  {
    "word": "容易",
    "reading": "ようい",
    "meaning": "easy, simple, plain",
    "level": "3"
  },
  {
    "word": "容器",
    "reading": "ようき",
    "meaning": "container, vessel",
    "level": "3"
  },
  {
    "word": "陽気",
    "reading": "ようき",
    "meaning": "season, weather, cheerfulness",
    "level": "3"
  },
  {
    "word": "要求",
    "reading": "ようきゅう",
    "meaning": "request, demand",
    "level": "3"
  },
  {
    "word": "用心",
    "reading": "ようじん",
    "meaning": "care, precaution, caution",
    "level": "3"
  },
  {
    "word": "様子",
    "reading": "ようす",
    "meaning": "aspect, state, appearance",
    "level": "3"
  },
  {
    "word": "要するに",
    "reading": "ようするに",
    "meaning": "in a word, after all, in short …",
    "level": "3"
  },
  {
    "word": "要素",
    "reading": "ようそ",
    "meaning": "element",
    "level": "3"
  },
  {
    "word": "要点",
    "reading": "ようてん",
    "meaning": "gist, main point",
    "level": "3"
  },
  {
    "word": "曜日",
    "reading": "ようび",
    "meaning": "day of the week",
    "level": "3"
  },
  {
    "word": "ヨーロッパ",
    "reading": "ヨーロッパ",
    "meaning": "Europe",
    "level": "3"
  },
  {
    "word": "予期",
    "reading": "よき",
    "meaning": "expectation, forecast",
    "level": "3"
  },
  {
    "word": "横切る",
    "reading": "よこぎる",
    "meaning": "to cross (e.g., arms), to traverse",
    "level": "3"
  },
  {
    "word": "汚す",
    "reading": "よごす",
    "meaning": "to pollute, to make dirty",
    "level": "3"
  },
  {
    "word": "予算",
    "reading": "よさん",
    "meaning": "estimate, budget",
    "level": "3"
  },
  {
    "word": "止す",
    "reading": "よす",
    "meaning": "to cease, to give up",
    "level": "3"
  },
  {
    "word": "寄せる",
    "reading": "よせる",
    "meaning": "to collect, to gather, to put aside",
    "level": "3"
  },
  {
    "word": "予測",
    "reading": "よそく",
    "meaning": "prediction, estimation",
    "level": "3"
  },
  {
    "word": "ヨット",
    "reading": "ヨット",
    "meaning": "yacht",
    "level": "3"
  },
  {
    "word": "夜中",
    "reading": "よなか",
    "meaning": "midnight, dead of night",
    "level": "3"
  },
  {
    "word": "世の中",
    "reading": "よのなか",
    "meaning": "society, the world",
    "level": "3"
  },
  {
    "word": "余分",
    "reading": "よぶん",
    "meaning": "extra, excess, surplus",
    "level": "3"
  },
  {
    "word": "予報",
    "reading": "よほう",
    "meaning": "forecast, prediction",
    "level": "3"
  },
  {
    "word": "予防",
    "reading": "よぼう",
    "meaning": "prevention, protection against",
    "level": "3"
  },
  {
    "word": "読み",
    "reading": "よみ",
    "meaning": "reading",
    "level": "3"
  },
  {
    "word": "嫁",
    "reading": "よめ",
    "meaning": "bride, daughter-in-law",
    "level": "3"
  },
  {
    "word": "余裕",
    "reading": "よゆう",
    "meaning": "excess; surplus",
    "level": "3"
  },
  {
    "word": "より",
    "reading": "より",
    "meaning": "twist, ply",
    "level": "3"
  },
  {
    "word": "因る",
    "reading": "よる",
    "meaning": "to come from",
    "level": "3"
  },
  {
    "word": "喜び",
    "reading": "よろこび",
    "meaning": "joy, pleasure, rejoicing",
    "level": "3"
  },
  {
    "word": "よろしく (かん)",
    "reading": "よろしく (かん)",
    "meaning": "best regards, please remember me",
    "level": "3"
  },
  {
    "word": "四",
    "reading": "よん",
    "meaning": "four",
    "level": "3"
  },
  {
    "word": "来",
    "reading": "らい～",
    "meaning": "next ~",
    "level": "3"
  },
  {
    "word": "ライター",
    "reading": "ライター",
    "meaning": "lighter; writer",
    "level": "3"
  },
  {
    "word": "楽",
    "reading": "らく",
    "meaning": "comfort, ease",
    "level": "3"
  },
  {
    "word": "ラケット",
    "reading": "ラケット",
    "meaning": "racket",
    "level": "3"
  },
  {
    "word": "利益",
    "reading": "りえき",
    "meaning": "profits, gains",
    "level": "3"
  },
  {
    "word": "理解",
    "reading": "りかい",
    "meaning": "understanding, comprehension",
    "level": "3"
  },
  {
    "word": "陸",
    "reading": "りく",
    "meaning": "land, shore",
    "level": "3"
  },
  {
    "word": "利口",
    "reading": "りこう",
    "meaning": "clever, shrewd, bright",
    "level": "3"
  },
  {
    "word": "離婚",
    "reading": "りこん",
    "meaning": "divorce",
    "level": "3"
  },
  {
    "word": "理想",
    "reading": "りそう",
    "meaning": "ideal",
    "level": "3"
  },
  {
    "word": "率",
    "reading": "りつ",
    "meaning": "rate, ratio, percentage",
    "level": "3"
  },
  {
    "word": "留学",
    "reading": "りゅうがく",
    "meaning": "studying abroad",
    "level": "3"
  },
  {
    "word": "流行",
    "reading": "りゅうこう",
    "meaning": "fashionable, fad, prevailing",
    "level": "3"
  },
  {
    "word": "量",
    "reading": "りょう",
    "meaning": "quantity, amount",
    "level": "3"
  },
  {
    "word": "寮",
    "reading": "りょう",
    "meaning": "hostel, dormitory",
    "level": "3"
  },
  {
    "word": "両替",
    "reading": "りょうがえ",
    "meaning": "change, money exchange",
    "level": "3"
  },
  {
    "word": "料金",
    "reading": "りょうきん",
    "meaning": "fee, charge, fare",
    "level": "3"
  },
  {
    "word": "例",
    "reading": "れい",
    "meaning": "instance, example, case",
    "level": "3"
  },
  {
    "word": "礼",
    "reading": "れい",
    "meaning": "expression of gratitude; bow",
    "level": "3"
  },
  {
    "word": "例外",
    "reading": "れいがい",
    "meaning": "exception",
    "level": "3"
  },
  {
    "word": "礼儀",
    "reading": "れいぎ",
    "meaning": "manners, courtesy, etiquette",
    "level": "3"
  },
  {
    "word": "冷静",
    "reading": "れいせい",
    "meaning": "calm, coolness",
    "level": "3"
  },
  {
    "word": "列",
    "reading": "れつ",
    "meaning": "queue, line, row",
    "level": "3"
  },
  {
    "word": "列車",
    "reading": "れっしゃ",
    "meaning": "train (ordinary)",
    "level": "3"
  },
  {
    "word": "レベル",
    "reading": "レベル",
    "meaning": "level",
    "level": "3"
  },
  {
    "word": "連想",
    "reading": "れんそう",
    "meaning": "association (of ideas), suggestion",
    "level": "3"
  },
  {
    "word": "連続",
    "reading": "れんぞく",
    "meaning": "consecutive, continuity, continuing",
    "level": "3"
  },
  {
    "word": "老人",
    "reading": "ろうじん",
    "meaning": "the aged, old person",
    "level": "3"
  },
  {
    "word": "労働",
    "reading": "ろうどう",
    "meaning": "labor, work",
    "level": "3"
  },
  {
    "word": "ロケット",
    "reading": "ロケット",
    "meaning": "locket, rocket",
    "level": "3"
  },
  {
    "word": "論じる",
    "reading": "ろんじる",
    "meaning": "to argue, to discuss",
    "level": "3"
  },
  {
    "word": "論争",
    "reading": "ろんそう",
    "meaning": "controversy, dispute",
    "level": "3"
  },
  {
    "word": "論文",
    "reading": "ろんぶん",
    "meaning": "thesis, paper",
    "level": "3"
  },
  {
    "word": "輪",
    "reading": "わ",
    "meaning": "ring, hoop, circle",
    "level": "3"
  },
  {
    "word": "ワイン",
    "reading": "ワイン",
    "meaning": "wine",
    "level": "3"
  },
  {
    "word": "わがまま",
    "reading": "わがまま",
    "meaning": "selfishness, egoism, willfulness",
    "level": "3"
  },
  {
    "word": "別れ",
    "reading": "わかれ",
    "meaning": "parting, separation, farewell",
    "level": "3"
  },
  {
    "word": "分かれる",
    "reading": "わかれる",
    "meaning": "to branch off, to diverge from",
    "level": "3"
  },
  {
    "word": "脇",
    "reading": "わき",
    "meaning": "side",
    "level": "3"
  },
  {
    "word": "湧く",
    "reading": "わく",
    "meaning": "to boil, to grow hot",
    "level": "3"
  },
  {
    "word": "分ける",
    "reading": "わける",
    "meaning": "to divide, to separate",
    "level": "3"
  },
  {
    "word": "わざと",
    "reading": "わざと",
    "meaning": "on purpose",
    "level": "3"
  },
  {
    "word": "僅か",
    "reading": "わずか",
    "meaning": "only, merely, a little",
    "level": "3"
  },
  {
    "word": "綿",
    "reading": "わた",
    "meaning": "cotton",
    "level": "3"
  },
  {
    "word": "話題",
    "reading": "わだい",
    "meaning": "topic, subject",
    "level": "3"
  },
  {
    "word": "笑い",
    "reading": "わらい",
    "meaning": "laugh, laughter, smile",
    "level": "3"
  },
  {
    "word": "割る",
    "reading": "わる",
    "meaning": "to divide, to break",
    "level": "3"
  },
  {
    "word": "悪口",
    "reading": "わるくち",
    "meaning": "abuse, insult",
    "level": "3"
  },
  {
    "word": "我々",
    "reading": "われわれ",
    "meaning": "we",
    "level": "3"
  },
  {
    "word": "湾",
    "reading": "わん",
    "meaning": "bay, gulf, inlet",
    "level": "3"
  },
  {
    "word": "椀",
    "reading": "わん",
    "meaning": "bowl",
    "level": "3"
  },
  {
    "word": "碗",
    "reading": "わん",
    "meaning": "bowl",
    "level": "3"
  },
  {
    "word": "悪",
    "reading": "あく",
    "meaning": "evil, vice",
    "level": "3"
  },
  {
    "word": "当り",
    "reading": "あたり",
    "meaning": "hit, success, reaching the mark",
    "level": "3"
  },
  {
    "word": "アップ",
    "reading": "アップ",
    "meaning": "up",
    "level": "3"
  },
  {
    "word": "宛てる",
    "reading": "あてる",
    "meaning": "to address, to put",
    "level": "3"
  },
  {
    "word": "アンケート",
    "reading": "アンケート",
    "meaning": "questionnaire (FRE: enquete), survey",
    "level": "3"
  },
  {
    "word": "異",
    "reading": "い",
    "meaning": "difference (of opinion)",
    "level": "3"
  },
  {
    "word": "意",
    "reading": "い",
    "meaning": "will",
    "level": "3"
  },
  {
    "word": "医院",
    "reading": "いいん",
    "meaning": "doctor's office (surgery), clinic",
    "level": "3"
  },
  {
    "word": "怒り",
    "reading": "いかり",
    "meaning": "anger",
    "level": "3"
  },
  {
    "word": "粋",
    "reading": "いき",
    "meaning": "chic, style, purity",
    "level": "3"
  },
  {
    "word": "意地",
    "reading": "いじ",
    "meaning": "disposition, spirit, obstinacy, appetite",
    "level": "3"
  },
  {
    "word": "依然",
    "reading": "いぜん",
    "meaning": "still, as yet",
    "level": "3"
  },
  {
    "word": "傷める",
    "reading": "いためる",
    "meaning": "to damage, to impair, to spoil",
    "level": "3"
  },
  {
    "word": "炒める",
    "reading": "いためる",
    "meaning": "to stir-fry",
    "level": "3"
  },
  {
    "word": "一帯",
    "reading": "いったい",
    "meaning": "a region, the whole place",
    "level": "3"
  },
  {
    "word": "異動",
    "reading": "いどう",
    "meaning": "a change, transfer",
    "level": "3"
  },
  {
    "word": "衣料",
    "reading": "いりょう",
    "meaning": "clothing",
    "level": "3"
  },
  {
    "word": "渦",
    "reading": "うず",
    "meaning": "swirl",
    "level": "3"
  },
  {
    "word": "埋まる",
    "reading": "うまる",
    "meaning": "to be buried, to be filled",
    "level": "3"
  },
  {
    "word": "産む",
    "reading": "うむ",
    "meaning": "to give birth (v.t.), to deliver, to produce",
    "level": "3"
  },
  {
    "word": "縁",
    "reading": "えん",
    "meaning": "chance, tie, relationship",
    "level": "3"
  },
  {
    "word": "尾",
    "reading": "お",
    "meaning": "tail, ridge",
    "level": "3"
  },
  {
    "word": "負う",
    "reading": "おう",
    "meaning": "to bear, to owe",
    "level": "3"
  },
  {
    "word": "遅れ",
    "reading": "おくれ",
    "meaning": "delay, lag",
    "level": "3"
  },
  {
    "word": "教え",
    "reading": "おしえ",
    "meaning": "teachings, doctrine",
    "level": "3"
  },
  {
    "word": "驚き",
    "reading": "おどろき",
    "meaning": "surprise, astonishment, wonder",
    "level": "3"
  },
  {
    "word": "織る",
    "reading": "おる",
    "meaning": "to weave",
    "level": "3"
  },
  {
    "word": "欠く",
    "reading": "かく",
    "meaning": "to lack, to crack",
    "level": "3"
  },
  {
    "word": "角",
    "reading": "かく",
    "meaning": "angle",
    "level": "3"
  },
  {
    "word": "核",
    "reading": "かく",
    "meaning": "nucleus, kernel",
    "level": "3"
  },
  {
    "word": "格",
    "reading": "かく",
    "meaning": "status, character, case",
    "level": "3"
  },
  {
    "word": "学歴",
    "reading": "がくれき",
    "meaning": "academic background",
    "level": "3"
  },
  {
    "word": "駆ける",
    "reading": "かける",
    "meaning": "to run",
    "level": "3"
  },
  {
    "word": "賭ける",
    "reading": "かける",
    "meaning": "to bet, to risk, to gamble",
    "level": "3"
  },
  {
    "word": "課題",
    "reading": "かだい",
    "meaning": "subject, theme, task",
    "level": "3"
  },
  {
    "word": "片付け",
    "reading": "かたづけ",
    "meaning": "tidying up, finishing",
    "level": "3"
  },
  {
    "word": "加味",
    "reading": "かみ",
    "meaning": "seasoning, flavoring",
    "level": "3"
  },
  {
    "word": "借り",
    "reading": "かり",
    "meaning": "borrowing, debt, loan",
    "level": "3"
  },
  {
    "word": "狩り",
    "reading": "かり",
    "meaning": "hunting",
    "level": "3"
  },
  {
    "word": "管",
    "reading": "かん",
    "meaning": "pipe, tube",
    "level": "3"
  },
  {
    "word": "～観",
    "reading": "かん",
    "meaning": "feeling, view",
    "level": "3"
  },
  {
    "word": "癌",
    "reading": "がん",
    "meaning": "cancer",
    "level": "3"
  },
  {
    "word": "刊行",
    "reading": "かんこう",
    "meaning": "publication, issue",
    "level": "3"
  },
  {
    "word": "慣行",
    "reading": "かんこう",
    "meaning": "customary practice, habit, traditional event",
    "level": "3"
  },
  {
    "word": "歓声",
    "reading": "かんせい",
    "meaning": "cheer, shout of joy",
    "level": "3"
  },
  {
    "word": "官僚",
    "reading": "かんりょう",
    "meaning": "bureaucrat, bureaucracy",
    "level": "3"
  },
  {
    "word": "器官",
    "reading": "きかん",
    "meaning": "organ (of body, instrument)",
    "level": "3"
  },
  {
    "word": "季刊",
    "reading": "きかん",
    "meaning": "quarterly (e.g., magazine)",
    "level": "3"
  },
  {
    "word": "起源",
    "reading": "きげん",
    "meaning": "origin, beginning, rise",
    "level": "3"
  },
  {
    "word": "機構",
    "reading": "きこう",
    "meaning": "mechanism, organization",
    "level": "3"
  },
  {
    "word": "築く",
    "reading": "きずく",
    "meaning": "to build, to establish",
    "level": "3"
  },
  {
    "word": "規制",
    "reading": "きせい",
    "meaning": "regulation",
    "level": "3"
  },
  {
    "word": "丘陵",
    "reading": "きゅうりょう",
    "meaning": "hill",
    "level": "3"
  },
  {
    "word": "協議",
    "reading": "きょうぎ",
    "meaning": "conference, discussion, negotiation",
    "level": "3"
  },
  {
    "word": "享受",
    "reading": "きょうじゅ",
    "meaning": "enjoyment, being given",
    "level": "3"
  },
  {
    "word": "協調",
    "reading": "きょうちょう",
    "meaning": "co-operation, conciliation, harmony",
    "level": "3"
  },
  {
    "word": "切り",
    "reading": "きり",
    "meaning": "limits, place to leave off",
    "level": "3"
  },
  {
    "word": "菌",
    "reading": "きん",
    "meaning": "germ, bacterium",
    "level": "3"
  },
  {
    "word": "近視",
    "reading": "きんし",
    "meaning": "nearsightedness",
    "level": "3"
  },
  {
    "word": "苦",
    "reading": "く",
    "meaning": "trouble, worry, difficulty",
    "level": "3"
  },
  {
    "word": "群",
    "reading": "ぐん",
    "meaning": "group",
    "level": "3"
  },
  {
    "word": "刑",
    "reading": "けい",
    "meaning": "penalty, sentence, punishment",
    "level": "3"
  },
  {
    "word": "経緯",
    "reading": "けいい",
    "meaning": "sequence of events, course",
    "level": "3"
  },
  {
    "word": "計器",
    "reading": "けいき",
    "meaning": "meter, gauge",
    "level": "3"
  },
  {
    "word": "契機",
    "reading": "けいき",
    "meaning": "opportunity, chance",
    "level": "3"
  },
  {
    "word": "携帯",
    "reading": "けいたい",
    "meaning": "carrying something; mobile telephone",
    "level": "3"
  },
  {
    "word": "形態",
    "reading": "けいたい",
    "meaning": "form, shape, figure",
    "level": "3"
  },
  {
    "word": "血管",
    "reading": "けっかん",
    "meaning": "blood vessel",
    "level": "3"
  },
  {
    "word": "決行",
    "reading": "けっこう",
    "meaning": "doing (with resolve), carrying out (e.g., a plan)",
    "level": "3"
  },
  {
    "word": "件",
    "reading": "けん",
    "meaning": "matter, case, item",
    "level": "3"
  },
  {
    "word": "減少",
    "reading": "げんしょう",
    "meaning": "decrease, reduction, decline",
    "level": "3"
  },
  {
    "word": "公演",
    "reading": "こうえん",
    "meaning": "public performance",
    "level": "3"
  },
  {
    "word": "後悔",
    "reading": "こうかい",
    "meaning": "regret, repentance",
    "level": "3"
  },
  {
    "word": "航海",
    "reading": "こうかい",
    "meaning": "sail, voyage",
    "level": "3"
  },
  {
    "word": "拘束",
    "reading": "こうそく",
    "meaning": "restriction, restraint",
    "level": "3"
  },
  {
    "word": "荒廃",
    "reading": "こうはい",
    "meaning": "ruin",
    "level": "3"
  },
  {
    "word": "降伏",
    "reading": "こうふく",
    "meaning": "capitulation, surrender, submission",
    "level": "3"
  },
  {
    "word": "興奮",
    "reading": "こうふん",
    "meaning": "excitement, stimulation",
    "level": "3"
  },
  {
    "word": "語句",
    "reading": "ごく",
    "meaning": "words, phrases",
    "level": "3"
  },
  {
    "word": "個々",
    "reading": "ここ",
    "meaning": "individual, one by one",
    "level": "3"
  },
  {
    "word": "故人",
    "reading": "こじん",
    "meaning": "the deceased",
    "level": "3"
  },
  {
    "word": "小銭",
    "reading": "こぜに",
    "meaning": "coins, small change",
    "level": "3"
  },
  {
    "word": "ことによると",
    "reading": "ことによると",
    "meaning": "(depending on the circumstances)",
    "level": "3"
  },
  {
    "word": "コンテスト",
    "reading": "コンテスト",
    "meaning": "contest",
    "level": "3"
  },
  {
    "word": "採集",
    "reading": "さいしゅう",
    "meaning": "collecting, gathering",
    "level": "3"
  },
  {
    "word": "作",
    "reading": "さく",
    "meaning": "a work, a harvest",
    "level": "3"
  },
  {
    "word": "策",
    "reading": "さく",
    "meaning": "plan, policy",
    "level": "3"
  },
  {
    "word": "設備",
    "reading": "せつび",
    "meaning": "equipment, device, facilities",
    "level": "3"
  },
  {
    "word": "絶滅",
    "reading": "ぜつめつ",
    "meaning": "destruction, extinction",
    "level": "3"
  },
  {
    "word": "節約",
    "reading": "せつやく",
    "meaning": "economizing, saving",
    "level": "3"
  },
  {
    "word": "攻める",
    "reading": "せめる",
    "meaning": "to attack, to assault",
    "level": "3"
  },
  {
    "word": "責める",
    "reading": "せめる",
    "meaning": "to condemn, to blame, to criticize",
    "level": "3"
  },
  {
    "word": "善",
    "reading": "ぜん",
    "meaning": "good, virtue",
    "level": "3"
  },
  {
    "word": "全",
    "reading": "ぜん",
    "meaning": "all, whole, entire",
    "level": "3"
  },
  {
    "word": "全員",
    "reading": "ぜんいん",
    "meaning": "all members",
    "level": "3"
  },
  {
    "word": "専攻",
    "reading": "せんこう",
    "meaning": "major subject, special study",
    "level": "3"
  },
  {
    "word": "全国",
    "reading": "ぜんこく",
    "meaning": "the entire nation, country-wide, nation-wide",
    "level": "3"
  },
  {
    "word": "洗剤",
    "reading": "せんざい",
    "meaning": "detergent",
    "level": "3"
  },
  {
    "word": "先日",
    "reading": "せんじつ",
    "meaning": "the other day, a few days ago",
    "level": "3"
  },
  {
    "word": "前者",
    "reading": "ぜんしゃ",
    "meaning": "the former",
    "level": "3"
  },
  {
    "word": "選手",
    "reading": "せんしゅ",
    "meaning": "player selected for a team (usually athletic)",
    "level": "3"
  },
  {
    "word": "全身",
    "reading": "ぜんしん",
    "meaning": "the whole body, full-length (portrait)",
    "level": "3"
  },
  {
    "word": "前進",
    "reading": "ぜんしん",
    "meaning": "advance, drive, progress",
    "level": "3"
  },
  {
    "word": "センター",
    "reading": "センター",
    "meaning": "center",
    "level": "3"
  },
  {
    "word": "全体",
    "reading": "ぜんたい",
    "meaning": "whole, entirety, whatever (is the matter)",
    "level": "3"
  },
  {
    "word": "選択",
    "reading": "せんたく",
    "meaning": "selection, choice",
    "level": "3"
  },
  {
    "word": "宣伝",
    "reading": "せんでん",
    "meaning": "advertisement, publicity",
    "level": "3"
  },
  {
    "word": "象",
    "reading": "ぞう",
    "meaning": "elephant",
    "level": "3"
  },
  {
    "word": "騒音",
    "reading": "そうおん",
    "meaning": "noise",
    "level": "3"
  },
  {
    "word": "増加",
    "reading": "ぞうか",
    "meaning": "increase, addition",
    "level": "3"
  },
  {
    "word": "操作",
    "reading": "そうさ",
    "meaning": "operation, management, processing",
    "level": "3"
  },
  {
    "word": "想像",
    "reading": "そうぞう",
    "meaning": "imagination, guess",
    "level": "3"
  },
  {
    "word": "相続",
    "reading": "そうぞく",
    "meaning": "succession, inheritance",
    "level": "3"
  },
  {
    "word": "装置",
    "reading": "そうち",
    "meaning": "equipment, installation, apparatus",
    "level": "3"
  },
  {
    "word": "相当",
    "reading": "そうとう",
    "meaning": "considerably, fairly; worth ~",
    "level": "3"
  },
  {
    "word": "速度",
    "reading": "そくど",
    "meaning": "speed, velocity, rate",
    "level": "3"
  },
  {
    "word": "底",
    "reading": "そこ",
    "meaning": "bottom, sole",
    "level": "3"
  },
  {
    "word": "そこで",
    "reading": "そこで",
    "meaning": "so (conj.), accordingly",
    "level": "3"
  },
  {
    "word": "組織",
    "reading": "そしき",
    "meaning": "organization; structure; tissue",
    "level": "3"
  },
  {
    "word": "そして",
    "reading": "そして",
    "meaning": "and then",
    "level": "3"
  },
  {
    "word": "注ぐ",
    "reading": "そそぐ",
    "meaning": "to pour (into)",
    "level": "3"
  },
  {
    "word": "育つ",
    "reading": "そだつ",
    "meaning": "to be brought up, to grow (up)",
    "level": "3"
  },
  {
    "word": "そっくり",
    "reading": "そっくり",
    "meaning": "the splitting image of; entirely",
    "level": "3"
  },
  {
    "word": "そっと",
    "reading": "そっと",
    "meaning": "softly, gently",
    "level": "3"
  },
  {
    "word": "袖",
    "reading": "そで",
    "meaning": "sleeve",
    "level": "3"
  },
  {
    "word": "備える",
    "reading": "そなえる",
    "meaning": "to prepare, to furnish, to store",
    "level": "3"
  },
  {
    "word": "具える",
    "reading": "そなえる",
    "meaning": "to be furnished with",
    "level": "3"
  },
  {
    "word": "そのうえ",
    "reading": "そのうえ",
    "meaning": "in addition, furthermore",
    "level": "3"
  },
  {
    "word": "そのうち",
    "reading": "そのうち",
    "meaning": "before long, eventually, sooner or later",
    "level": "3"
  },
  {
    "word": "そのまま",
    "reading": "そのまま",
    "meaning": "without change, as it is (e.g., now)",
    "level": "3"
  },
  {
    "word": "蕎麦",
    "reading": "そば",
    "meaning": "soba (buckwheat noodles)",
    "level": "3"
  },
  {
    "word": "ソファー",
    "reading": "ソファー",
    "meaning": "sofa, couch",
    "level": "3"
  },
  {
    "word": "粗末",
    "reading": "そまつ",
    "meaning": "humble, miserable, crude",
    "level": "3"
  },
  {
    "word": "それぞれ",
    "reading": "それぞれ",
    "meaning": "each, every, respectively",
    "level": "3"
  },
  {
    "word": "それでも",
    "reading": "それでも",
    "meaning": "but (still), and yet, nevertheless",
    "level": "3"
  },
  {
    "word": "それと",
    "reading": "それと",
    "meaning": "and",
    "level": "3"
  },
  {
    "word": "それとも",
    "reading": "それとも",
    "meaning": "or, or else",
    "level": "3"
  },
  {
    "word": "揃う",
    "reading": "そろう",
    "meaning": "to become complete, to be equal",
    "level": "3"
  },
  {
    "word": "揃える",
    "reading": "そろえる",
    "meaning": "to put things in order, to arrange",
    "level": "3"
  },
  {
    "word": "損",
    "reading": "そん",
    "meaning": "loss, disadvantage",
    "level": "3"
  },
  {
    "word": "損害",
    "reading": "そんがい",
    "meaning": "damage, loss",
    "level": "3"
  },
  {
    "word": "尊敬",
    "reading": "そんけい",
    "meaning": "respect, reverence, honor",
    "level": "3"
  },
  {
    "word": "存在",
    "reading": "そんざい",
    "meaning": "existence, being",
    "level": "3"
  },
  {
    "word": "尊重",
    "reading": "そんちょう",
    "meaning": "respect, esteem, regard",
    "level": "3"
  },
  {
    "word": "田",
    "reading": "た",
    "meaning": "rice field",
    "level": "3"
  },
  {
    "word": "他",
    "reading": "た",
    "meaning": "other (esp. places and things)",
    "level": "3"
  },
  {
    "word": "対",
    "reading": "たい",
    "meaning": "pair, couple, set",
    "level": "3"
  },
  {
    "word": "大",
    "reading": "だい",
    "meaning": "big, great",
    "level": "3"
  },
  {
    "word": "題",
    "reading": "だい",
    "meaning": "title, subject, theme",
    "level": "3"
  },
  {
    "word": "体育",
    "reading": "たいいく",
    "meaning": "physical education, gymnastics, athletics",
    "level": "3"
  },
  {
    "word": "体温",
    "reading": "たいおん",
    "meaning": "temperature (body)",
    "level": "3"
  },
  {
    "word": "大会",
    "reading": "たいかい",
    "meaning": "convention, (big) tournament, mass meeting",
    "level": "3"
  },
  {
    "word": "大気",
    "reading": "たいき",
    "meaning": "atmosphere",
    "level": "3"
  },
  {
    "word": "代金",
    "reading": "だいきん",
    "meaning": "price, cost",
    "level": "3"
  },
  {
    "word": "退屈",
    "reading": "たいくつ",
    "meaning": "tedium, boring",
    "level": "3"
  },
  {
    "word": "滞在",
    "reading": "たいざい",
    "meaning": "stay, sojourn",
    "level": "3"
  },
  {
    "word": "大使",
    "reading": "たいし",
    "meaning": "ambassador",
    "level": "3"
  },
  {
    "word": "大した",
    "reading": "たいした",
    "meaning": "significant, great, considerable",
    "level": "3"
  },
  {
    "word": "体重",
    "reading": "たいじゅう",
    "meaning": "(body) weight",
    "level": "3"
  },
  {
    "word": "対象",
    "reading": "たいしょう",
    "meaning": "target; object (of worship, study, etc.); subject (i.e., of taxation)",
    "level": "3"
  },
  {
    "word": "対照",
    "reading": "たいしょう",
    "meaning": "contrast, antithesis, comparison",
    "level": "3"
  },
  {
    "word": "大臣",
    "reading": "だいじん",
    "meaning": "cabinet minister",
    "level": "3"
  },
  {
    "word": "対する",
    "reading": "たいする",
    "meaning": "to face, to confront, to oppose",
    "level": "3"
  },
  {
    "word": "大戦",
    "reading": "たいせん",
    "meaning": "great war, great battle",
    "level": "3"
  },
  {
    "word": "態度",
    "reading": "たいど",
    "meaning": "attitude, manner",
    "level": "3"
  },
  {
    "word": "大統領",
    "reading": "だいとうりょう",
    "meaning": "president",
    "level": "3"
  },
  {
    "word": "大半",
    "reading": "たいはん",
    "meaning": "most of, majority, mostly",
    "level": "3"
  },
  {
    "word": "代表",
    "reading": "だいひょう",
    "meaning": "representative, delegation",
    "level": "3"
  },
  {
    "word": "大部分",
    "reading": "だいぶぶん",
    "meaning": "most part, majority",
    "level": "3"
  },
  {
    "word": "タイプライター",
    "reading": "タイプライター",
    "meaning": "typewriter",
    "level": "3"
  },
  {
    "word": "逮捕",
    "reading": "たいほ",
    "meaning": "arrest, apprehension, capture",
    "level": "3"
  },
  {
    "word": "題名",
    "reading": "だいめい",
    "meaning": "title",
    "level": "3"
  },
  {
    "word": "ダイヤ",
    "reading": "ダイヤ",
    "meaning": "(railway) schedule; diamond",
    "level": "3"
  },
  {
    "word": "太陽",
    "reading": "たいよう",
    "meaning": "sun",
    "level": "3"
  },
  {
    "word": "平ら",
    "reading": "たいら",
    "meaning": "flatness, level, smooth",
    "level": "3"
  },
  {
    "word": "代理",
    "reading": "だいり",
    "meaning": "representation, proxy, deputy",
    "level": "3"
  },
  {
    "word": "大陸",
    "reading": "たいりく",
    "meaning": "continent",
    "level": "3"
  },
  {
    "word": "倒す",
    "reading": "たおす",
    "meaning": "to throw down, to beat",
    "level": "3"
  },
  {
    "word": "タオル",
    "reading": "タオル",
    "meaning": "(hand) towel",
    "level": "3"
  },
  {
    "word": "だが",
    "reading": "だが",
    "meaning": "but, however",
    "level": "3"
  },
  {
    "word": "互い",
    "reading": "たがい",
    "meaning": "mutual, each other",
    "level": "3"
  },
  {
    "word": "高める",
    "reading": "たかめる",
    "meaning": "to raise, to lift, to boost",
    "level": "3"
  },
  {
    "word": "宝",
    "reading": "たから",
    "meaning": "treasure",
    "level": "3"
  },
  {
    "word": "宅",
    "reading": "たく",
    "meaning": "house, home",
    "level": "3"
  },
  {
    "word": "炊く",
    "reading": "たく",
    "meaning": "to boil, to cook",
    "level": "3"
  },
  {
    "word": "焚く",
    "reading": "たく",
    "meaning": "to burn, to kindle, to build a fire",
    "level": "3"
  },
  {
    "word": "抱く",
    "reading": "だく",
    "meaning": "to embrace, to hug",
    "level": "3"
  },
  {
    "word": "だけど",
    "reading": "だけど",
    "meaning": "however",
    "level": "3"
  },
  {
    "word": "たしか",
    "reading": "たしか",
    "meaning": "certain, sure, if I remember correctly",
    "level": "3"
  },
  {
    "word": "確かめる",
    "reading": "たしかめる",
    "meaning": "to ascertain, to make sure",
    "level": "3"
  },
  {
    "word": "多少",
    "reading": "たしょう",
    "meaning": "a little (same as 少し (すこし))",
    "level": "3"
  },
  {
    "word": "助かる",
    "reading": "たすかる",
    "meaning": "to be saved; (something) helps (v.i.)",
    "level": "3"
  },
  {
    "word": "助ける",
    "reading": "たすける",
    "meaning": "to help (v.t.), to save, to rescue",
    "level": "3"
  },
  {
    "word": "ただ",
    "reading": "ただ",
    "meaning": "free of charge; just (~); only (~)",
    "level": "3"
  },
  {
    "word": "只",
    "reading": "ただ",
    "meaning": "free of charge, mere, only",
    "level": "3"
  },
  {
    "word": "唯",
    "reading": "ただ",
    "meaning": "mere, sole, plain",
    "level": "3"
  },
  {
    "word": "戦い",
    "reading": "たたかい",
    "meaning": "battle, fight",
    "level": "3"
  },
  {
    "word": "戦う",
    "reading": "たたかう",
    "meaning": "to fight, to compete, to battle",
    "level": "3"
  },
  {
    "word": "叩く",
    "reading": "たたく",
    "meaning": "to strike, to beat",
    "level": "3"
  },
  {
    "word": "直ちに",
    "reading": "ただちに",
    "meaning": "at once, immediately",
    "level": "3"
  },
  {
    "word": "畳む",
    "reading": "たたむ",
    "meaning": "to fold (clothes)",
    "level": "3"
  },
  {
    "word": "立ち上がる",
    "reading": "たちあがる",
    "meaning": "to stand up",
    "level": "3"
  },
  {
    "word": "立場",
    "reading": "たちば",
    "meaning": "standpoint, position, situation",
    "level": "3"
  },
  {
    "word": "建つ",
    "reading": "たつ",
    "meaning": "to stand; to be built (v.i.), to erect, to be erected",
    "level": "3"
  },
  {
    "word": "経つ",
    "reading": "たつ",
    "meaning": "(time) passes",
    "level": "3"
  },
  {
    "word": "達する",
    "reading": "たっする",
    "meaning": "to reach, to get to",
    "level": "3"
  },
  {
    "word": "唯",
    "reading": "たった",
    "meaning": "only, just",
    "level": "3"
  },
  {
    "word": "だって",
    "reading": "だって",
    "meaning": "but, because, even",
    "level": "3"
  },
  {
    "word": "たっぷり",
    "reading": "たっぷり",
    "meaning": "full, in plenty, ample",
    "level": "3"
  },
  {
    "word": "たとえ",
    "reading": "たとえ",
    "meaning": "even if, no matter, though",
    "level": "3"
  },
  {
    "word": "谷",
    "reading": "たに",
    "meaning": "valley",
    "level": "3"
  },
  {
    "word": "他人",
    "reading": "たにん",
    "meaning": "unrelated person, stranger",
    "level": "3"
  },
  {
    "word": "種",
    "reading": "たね",
    "meaning": "seed; material; cause",
    "level": "3"
  },
  {
    "word": "束",
    "reading": "たば",
    "meaning": "bunch, bundle",
    "level": "3"
  },
  {
    "word": "足袋",
    "reading": "たび",
    "meaning": "Japanese socks (with split toe)",
    "level": "3"
  },
  {
    "word": "度",
    "reading": "たび",
    "meaning": "counter for occurrences",
    "level": "3"
  },
  {
    "word": "旅",
    "reading": "たび",
    "meaning": "travel, trip, journey",
    "level": "3"
  },
  {
    "word": "たびたび",
    "reading": "たびたび",
    "meaning": "often, repeatedly, frequently",
    "level": "3"
  },
  {
    "word": "玉",
    "reading": "たま",
    "meaning": "ball, sphere, coin",
    "level": "3"
  },
  {
    "word": "球",
    "reading": "たま",
    "meaning": "globe, sphere, ball",
    "level": "3"
  },
  {
    "word": "弾",
    "reading": "たま",
    "meaning": "bullet, shot",
    "level": "3"
  },
  {
    "word": "偶",
    "reading": "たま",
    "meaning": "even number, couple, friend",
    "level": "3"
  },
  {
    "word": "騙す",
    "reading": "だます",
    "meaning": "to trick, to cheat, to deceive",
    "level": "3"
  },
  {
    "word": "偶々",
    "reading": "たまたま",
    "meaning": "unexpectedly, accidentally, by chance",
    "level": "3"
  },
  {
    "word": "たまらない",
    "reading": "たまらない",
    "meaning": "intolerable, unbearable, unendurable",
    "level": "3"
  },
  {
    "word": "溜まる",
    "reading": "たまる",
    "meaning": "to collect, to gather, to accumulate",
    "level": "3"
  },
  {
    "word": "黙る",
    "reading": "だまる",
    "meaning": "to be silent",
    "level": "3"
  },
  {
    "word": "試し",
    "reading": "ためし",
    "meaning": "trial, test",
    "level": "3"
  },
  {
    "word": "試す",
    "reading": "ためす",
    "meaning": "to attempt, to test",
    "level": "3"
  },
  {
    "word": "溜める",
    "reading": "ためる",
    "meaning": "to accumulate, to collect",
    "level": "3"
  },
  {
    "word": "便り",
    "reading": "たより",
    "meaning": "news, correspondence, letter",
    "level": "3"
  },
  {
    "word": "頼る",
    "reading": "たよる",
    "meaning": "to rely on, to have recourse to, to depend on",
    "level": "3"
  },
  {
    "word": "段",
    "reading": "だん",
    "meaning": "step, stair, grade",
    "level": "3"
  },
  {
    "word": "単位",
    "reading": "たんい",
    "meaning": "credit (for a course in school); unit, denomination",
    "level": "3"
  },
  {
    "word": "単語",
    "reading": "たんご",
    "meaning": "word; vocabulary",
    "level": "3"
  },
  {
    "word": "男子",
    "reading": "だんし",
    "meaning": "young man",
    "level": "3"
  },
  {
    "word": "単純",
    "reading": "たんじゅん",
    "meaning": "simplicity",
    "level": "3"
  },
  {
    "word": "誕生",
    "reading": "たんじょう",
    "meaning": "birth",
    "level": "3"
  },
  {
    "word": "ダンス",
    "reading": "ダンス",
    "meaning": "dance",
    "level": "3"
  },
  {
    "word": "団体",
    "reading": "だんたい",
    "meaning": "organization, association",
    "level": "3"
  },
  {
    "word": "担当",
    "reading": "たんとう",
    "meaning": "(in) charge",
    "level": "3"
  },
  {
    "word": "単なる",
    "reading": "たんなる",
    "meaning": "mere, simple, sheer",
    "level": "3"
  },
  {
    "word": "単に",
    "reading": "たんに",
    "meaning": "simply, merely",
    "level": "3"
  },
  {
    "word": "地",
    "reading": "ち",
    "meaning": "earth",
    "level": "3"
  },
  {
    "word": "地位",
    "reading": "ちい",
    "meaning": "(social) position, status",
    "level": "3"
  },
  {
    "word": "地域",
    "reading": "ちいき",
    "meaning": "area, region",
    "level": "3"
  },
  {
    "word": "チーズ",
    "reading": "チーズ",
    "meaning": "cheese",
    "level": "3"
  },
  {
    "word": "チーム",
    "reading": "チーム",
    "meaning": "team",
    "level": "3"
  },
  {
    "word": "知恵",
    "reading": "ちえ",
    "meaning": "wisdom, wit, intelligence",
    "level": "3"
  },
  {
    "word": "地下",
    "reading": "ちか",
    "meaning": "basement, underground",
    "level": "3"
  },
  {
    "word": "違い",
    "reading": "ちがい",
    "meaning": "difference, discrepancy",
    "level": "3"
  },
  {
    "word": "違いない",
    "reading": "ちがいない",
    "meaning": "(phrase) sure, no mistaking it, for certain",
    "level": "3"
  },
  {
    "word": "近頃",
    "reading": "ちかごろ",
    "meaning": "lately, recently, nowadays",
    "level": "3"
  },
  {
    "word": "地球",
    "reading": "ちきゅう",
    "meaning": "the earth",
    "level": "3"
  },
  {
    "word": "地区",
    "reading": "ちく",
    "meaning": "district, section",
    "level": "3"
  },
  {
    "word": "遅刻",
    "reading": "ちこく",
    "meaning": "lateness, late coming",
    "level": "3"
  },
  {
    "word": "知事",
    "reading": "ちじ",
    "meaning": "prefectural governor",
    "level": "3"
  },
  {
    "word": "知識",
    "reading": "ちしき",
    "meaning": "knowledge, information",
    "level": "3"
  },
  {
    "word": "父親",
    "reading": "ちちおや",
    "meaning": "father",
    "level": "3"
  },
  {
    "word": "知能",
    "reading": "ちのう",
    "meaning": "intelligence, brains",
    "level": "3"
  },
  {
    "word": "地平線",
    "reading": "ちへいせん",
    "meaning": "horizon",
    "level": "3"
  },
  {
    "word": "地方",
    "reading": "ちほう",
    "meaning": "area, locality, region",
    "level": "3"
  },
  {
    "word": "茶",
    "reading": "ちゃ",
    "meaning": "tea",
    "level": "3"
  },
  {
    "word": "チャンス",
    "reading": "チャンス",
    "meaning": "chance, opportunity",
    "level": "3"
  },
  {
    "word": "ちゃんと",
    "reading": "ちゃんと",
    "meaning": "perfectly, properly, exactly",
    "level": "3"
  },
  {
    "word": "中",
    "reading": "ちゅう",
    "meaning": "inside, middle, among",
    "level": "3"
  },
  {
    "word": "注",
    "reading": "ちゅう",
    "meaning": "annotation, explanatory note",
    "level": "3"
  },
  {
    "word": "中央",
    "reading": "ちゅうおう",
    "meaning": "central, center, middle",
    "level": "3"
  },
  {
    "word": "中学",
    "reading": "ちゅうがく",
    "meaning": "middle school, junior high school",
    "level": "3"
  },
  {
    "word": "中古",
    "reading": "ちゅうこ",
    "meaning": "used, second-hand",
    "level": "3"
  },
  {
    "word": "中止",
    "reading": "ちゅうし",
    "meaning": "suspension, stoppage, discontinuance",
    "level": "3"
  },
  {
    "word": "駐車",
    "reading": "ちゅうしゃ",
    "meaning": "parking (e.g., car)",
    "level": "3"
  },
  {
    "word": "昼食",
    "reading": "ちゅうしょく",
    "meaning": "lunch (same as 昼ご飯 (ひるごはん))",
    "level": "3"
  },
  {
    "word": "中心",
    "reading": "ちゅうしん",
    "meaning": "center, core",
    "level": "3"
  },
  {
    "word": "注目",
    "reading": "ちゅうもく",
    "meaning": "notice, attention, observation",
    "level": "3"
  },
  {
    "word": "注文",
    "reading": "ちゅうもん",
    "meaning": "order, request",
    "level": "3"
  },
  {
    "word": "長期",
    "reading": "ちょうき",
    "meaning": "long time period",
    "level": "3"
  },
  {
    "word": "調査",
    "reading": "ちょうさ",
    "meaning": "survey; investigation",
    "level": "3"
  },
  {
    "word": "調子",
    "reading": "ちょうし",
    "meaning": "condition, state, tune, tone",
    "level": "3"
  },
  {
    "word": "頂上",
    "reading": "ちょうじょう",
    "meaning": "top, summit, peak",
    "level": "3"
  },
  {
    "word": "ちょうだい",
    "reading": "ちょうだい",
    "meaning": "-- colloquial form of ください; typically used by children or women --",
    "level": "3"
  },
  {
    "word": "貯金",
    "reading": "ちょきん",
    "meaning": "(bank) savings",
    "level": "3"
  },
  {
    "word": "直接",
    "reading": "ちょくせつ",
    "meaning": "direct, immediate, firsthand",
    "level": "3"
  },
  {
    "word": "著者",
    "reading": "ちょしゃ",
    "meaning": "author, writer",
    "level": "3"
  },
  {
    "word": "散らす",
    "reading": "ちらす",
    "meaning": "to scatter, to disperse, to distribute",
    "level": "3"
  },
  {
    "word": "散る",
    "reading": "ちる",
    "meaning": "to fall, to scatter (e.g., blossoms)",
    "level": "3"
  },
  {
    "word": "遂に",
    "reading": "ついに",
    "meaning": "finally, at last",
    "level": "3"
  },
  {
    "word": "通過",
    "reading": "つうか",
    "meaning": "passage through, passing",
    "level": "3"
  },
  {
    "word": "通貨",
    "reading": "つうか",
    "meaning": "currency",
    "level": "3"
  },
  {
    "word": "通学",
    "reading": "つうがく",
    "meaning": "commuting to school",
    "level": "3"
  },
  {
    "word": "通勤",
    "reading": "つうきん",
    "meaning": "commuting to work",
    "level": "3"
  },
  {
    "word": "通行",
    "reading": "つうこう",
    "meaning": "passage, passing",
    "level": "3"
  },
  {
    "word": "通じる",
    "reading": "つうじる",
    "meaning": "to run to, to lead to, to communicate",
    "level": "3"
  },
  {
    "word": "通信",
    "reading": "つうしん",
    "meaning": "correspondence, communications",
    "level": "3"
  },
  {
    "word": "通訳",
    "reading": "つうやく",
    "meaning": "interpretation; interpreter",
    "level": "3"
  },
  {
    "word": "捕まる",
    "reading": "つかまる",
    "meaning": "to be arrested; to be caught",
    "level": "3"
  },
  {
    "word": "掴む",
    "reading": "つかむ",
    "meaning": "to seize, to catch, to grasp",
    "level": "3"
  },
  {
    "word": "疲れ",
    "reading": "つかれ",
    "meaning": "tiredness, fatigue",
    "level": "3"
  },
  {
    "word": "付き合い",
    "reading": "つきあい",
    "meaning": "socialization; friendship; association",
    "level": "3"
  },
  {
    "word": "付合う",
    "reading": "つきあう",
    "meaning": "to associate with, to keep company with, to get on with",
    "level": "3"
  },
  {
    "word": "次々",
    "reading": "つぎつぎ",
    "meaning": "in succession, one by one",
    "level": "3"
  },
  {
    "word": "付く",
    "reading": "つく",
    "meaning": "to adjoin, to be attached, to adhere",
    "level": "3"
  },
  {
    "word": "就く",
    "reading": "つく",
    "meaning": "to settle in (place), to take (seat position), to study (under teacher)",
    "level": "3"
  },
  {
    "word": "突く",
    "reading": "つく",
    "meaning": "to thrust, to strike; to poke",
    "level": "3"
  },
  {
    "word": "次ぐ",
    "reading": "つぐ",
    "meaning": "to rank next to, to come after",
    "level": "3"
  },
  {
    "word": "注ぐ",
    "reading": "つぐ",
    "meaning": "to pour (into)",
    "level": "3"
  },
  {
    "word": "付ける",
    "reading": "つける",
    "meaning": "to attach, to join, to add",
    "level": "3"
  },
  {
    "word": "着ける",
    "reading": "つける",
    "meaning": "to put on, to wear; to draw up",
    "level": "3"
  },
  {
    "word": "伝わる",
    "reading": "つたわる",
    "meaning": "to be handed down, to be transmitted",
    "level": "3"
  },
  {
    "word": "土",
    "reading": "つち",
    "meaning": "earth, soil",
    "level": "3"
  },
  {
    "word": "続き",
    "reading": "つづき",
    "meaning": "sequel, continuation",
    "level": "3"
  },
  {
    "word": "包み",
    "reading": "つつみ",
    "meaning": "bundle, package",
    "level": "3"
  },
  {
    "word": "勤め",
    "reading": "つとめ",
    "meaning": "work, employment",
    "level": "3"
  },
  {
    "word": "務め",
    "reading": "つとめ",
    "meaning": "duty",
    "level": "3"
  },
  {
    "word": "繋がる",
    "reading": "つながる",
    "meaning": "to be connected to, to be related to",
    "level": "3"
  },
  {
    "word": "繋ぐ",
    "reading": "つなぐ",
    "meaning": "to tie, to fasten, to connect",
    "level": "3"
  },
  {
    "word": "繋げる",
    "reading": "つなげる",
    "meaning": "to connect",
    "level": "3"
  },
  {
    "word": "常に",
    "reading": "つねに",
    "meaning": "always (same as いつも) (written expression)",
    "level": "3"
  },
  {
    "word": "翼",
    "reading": "つばさ",
    "meaning": "wings",
    "level": "3"
  },
  {
    "word": "つまり",
    "reading": "つまり",
    "meaning": "namely; in other words; in short",
    "level": "3"
  },
  {
    "word": "罪",
    "reading": "つみ",
    "meaning": "crime, fault, indiscretion",
    "level": "3"
  },
  {
    "word": "積む",
    "reading": "つむ",
    "meaning": "to pile up, to stack",
    "level": "3"
  },
  {
    "word": "詰める",
    "reading": "つめる",
    "meaning": "to pack, to shorten, to work out (details)",
    "level": "3"
  },
  {
    "word": "積もる",
    "reading": "つもる",
    "meaning": "to pile up",
    "level": "3"
  },
  {
    "word": "梅雨",
    "reading": "つゆ",
    "meaning": "rainy season",
    "level": "3"
  },
  {
    "word": "辛い",
    "reading": "つらい",
    "meaning": "painful, heart-breaking",
    "level": "3"
  },
  {
    "word": "釣",
    "reading": "つり",
    "meaning": "fishing",
    "level": "3"
  },
  {
    "word": "連れ",
    "reading": "つれ",
    "meaning": "companion, company",
    "level": "3"
  },
  {
    "word": "出",
    "reading": "で",
    "meaning": "outflow, coming (going) out, graduate (of)",
    "level": "3"
  },
  {
    "word": "出会い",
    "reading": "であい",
    "meaning": "meeting, rendezvous, encounter",
    "level": "3"
  },
  {
    "word": "出合い",
    "reading": "であい",
    "meaning": "an encounter",
    "level": "3"
  },
  {
    "word": "出会う",
    "reading": "であう",
    "meaning": "to meet by chance, to come across, to happen to encounter",
    "level": "3"
  },
  {
    "word": "提案",
    "reading": "ていあん",
    "meaning": "proposal, proposition, suggestion",
    "level": "3"
  },
  {
    "word": "定期",
    "reading": "ていき",
    "meaning": "fixed term",
    "level": "3"
  },
  {
    "word": "抵抗",
    "reading": "ていこう",
    "meaning": "resistance, opposition",
    "level": "3"
  },
  {
    "word": "提出",
    "reading": "ていしゅつ",
    "meaning": "presentation, submission, filing",
    "level": "3"
  },
  {
    "word": "停電",
    "reading": "ていでん",
    "meaning": "failure of electricity",
    "level": "3"
  },
  {
    "word": "程度",
    "reading": "ていど",
    "meaning": "degree, amount, level",
    "level": "3"
  },
  {
    "word": "停留所",
    "reading": "ていりゅうじょ",
    "meaning": "bus or tram stop",
    "level": "3"
  },
  {
    "word": "デート",
    "reading": "デート",
    "meaning": "date (in the sense of 'social engagement' only)",
    "level": "3"
  },
  {
    "word": "敵",
    "reading": "てき",
    "meaning": "enemy, rival",
    "level": "3"
  },
  {
    "word": "出来事",
    "reading": "できごと",
    "meaning": "incident happening, event",
    "level": "3"
  },
  {
    "word": "適する",
    "reading": "てきする",
    "meaning": "to fit, to suit",
    "level": "3"
  },
  {
    "word": "適切",
    "reading": "てきせつ",
    "meaning": "appropriate, adequate, relevance",
    "level": "3"
  },
  {
    "word": "適度",
    "reading": "てきど",
    "meaning": "moderate",
    "level": "3"
  },
  {
    "word": "適用",
    "reading": "てきよう",
    "meaning": "applying",
    "level": "3"
  },
  {
    "word": "できれば",
    "reading": "できれば",
    "meaning": "if possible…",
    "level": "3"
  },
  {
    "word": "手品",
    "reading": "てじな",
    "meaning": "conjuring trick, magic",
    "level": "3"
  },
  {
    "word": "ですから",
    "reading": "ですから",
    "meaning": "therefore",
    "level": "3"
  },
  {
    "word": "鉄",
    "reading": "てつ",
    "meaning": "iron",
    "level": "3"
  },
  {
    "word": "哲学",
    "reading": "てつがく",
    "meaning": "philosophy",
    "level": "3"
  },
  {
    "word": "手伝い",
    "reading": "てつだい",
    "meaning": "help, helper, assistant",
    "level": "3"
  },
  {
    "word": "徹底",
    "reading": "てってい",
    "meaning": "thoroughness, completeness",
    "level": "3"
  },
  {
    "word": "鉄道",
    "reading": "てつどう",
    "meaning": "railway; railroad",
    "level": "3"
  },
  {
    "word": "徹夜",
    "reading": "てつや",
    "meaning": "staying up all night, sleepless night",
    "level": "3"
  },
  {
    "word": "手間",
    "reading": "てま",
    "meaning": "time, labor",
    "level": "3"
  },
  {
    "word": "デモ",
    "reading": "デモ",
    "meaning": "demo, demonstration",
    "level": "3"
  },
  {
    "word": "典型",
    "reading": "てんけい",
    "meaning": "type, pattern, archetypal",
    "level": "3"
  },
  {
    "word": "天候",
    "reading": "てんこう",
    "meaning": "weather",
    "level": "3"
  },
  {
    "word": "電子",
    "reading": "でんし",
    "meaning": "electron; electronic",
    "level": "3"
  },
  {
    "word": "テント",
    "reading": "テント",
    "meaning": "tent",
    "level": "3"
  },
  {
    "word": "伝統",
    "reading": "でんとう",
    "meaning": "tradition, convention",
    "level": "3"
  },
  {
    "word": "天然",
    "reading": "てんねん",
    "meaning": "nature, spontaneity",
    "level": "3"
  },
  {
    "word": "問い",
    "reading": "とい",
    "meaning": "question, query",
    "level": "3"
  },
  {
    "word": "党",
    "reading": "とう",
    "meaning": "party (political)",
    "level": "3"
  },
  {
    "word": "塔",
    "reading": "とう",
    "meaning": "tower, pagoda",
    "level": "3"
  },
  {
    "word": "答案",
    "reading": "とうあん",
    "meaning": "examination paper, examination script",
    "level": "3"
  },
  {
    "word": "同一",
    "reading": "どういつ",
    "meaning": "identity, sameness, similarity",
    "level": "3"
  },
  {
    "word": "銅貨",
    "reading": "どうか",
    "meaning": "copper coin",
    "level": "3"
  },
  {
    "word": "当時",
    "reading": "とうじ",
    "meaning": "at that time, in those days (same as そのころ)",
    "level": "3"
  },
  {
    "word": "動詞",
    "reading": "どうし",
    "meaning": "verb",
    "level": "3"
  },
  {
    "word": "同時",
    "reading": "どうじ",
    "meaning": "simultaneous(ly), same time",
    "level": "3"
  },
  {
    "word": "どうしても",
    "reading": "どうしても",
    "meaning": "at any cost, no matter what, no matter how hard one tries",
    "level": "3"
  },
  {
    "word": "どうぞよろしく",
    "reading": "どうぞよろしく",
    "meaning": "pleased to meet you",
    "level": "3"
  },
  {
    "word": "到着",
    "reading": "とうちゃく",
    "meaning": "arrival",
    "level": "3"
  },
  {
    "word": "道徳",
    "reading": "どうとく",
    "meaning": "morals",
    "level": "3"
  },
  {
    "word": "投票",
    "reading": "とうひょう",
    "meaning": "voting, poll",
    "level": "3"
  },
  {
    "word": "東洋",
    "reading": "とうよう",
    "meaning": "Orient",
    "level": "3"
  },
  {
    "word": "同様",
    "reading": "どうよう",
    "meaning": "identical, same (kind), like",
    "level": "3"
  },
  {
    "word": "童謡",
    "reading": "どうよう",
    "meaning": "children's song, nursery rhyme",
    "level": "3"
  },
  {
    "word": "同僚",
    "reading": "どうりょう",
    "meaning": "colleague; co-worker",
    "level": "3"
  },
  {
    "word": "道路",
    "reading": "どうろ",
    "meaning": "road",
    "level": "3"
  },
  {
    "word": "通す",
    "reading": "とおす",
    "meaning": "to let pass, to overlook, to continue",
    "level": "3"
  },
  {
    "word": "通り過ぎる",
    "reading": "とおりすぎる",
    "meaning": "to pass, to pass through",
    "level": "3"
  },
  {
    "word": "都会",
    "reading": "とかい",
    "meaning": "city",
    "level": "3"
  },
  {
    "word": "溶く",
    "reading": "とく",
    "meaning": "to dissolve (paint)",
    "level": "3"
  },
  {
    "word": "解く",
    "reading": "とく",
    "meaning": "to unfasten; answer, solve",
    "level": "3"
  },
  {
    "word": "退く",
    "reading": "どく",
    "meaning": "to retreat, to recede, to withdraw",
    "level": "3"
  },
  {
    "word": "毒",
    "reading": "どく",
    "meaning": "poison, toxicant",
    "level": "3"
  },
  {
    "word": "得意",
    "reading": "とくい",
    "meaning": "pride, triumph, prosperity",
    "level": "3"
  },
  {
    "word": "読書",
    "reading": "どくしょ",
    "meaning": "reading",
    "level": "3"
  },
  {
    "word": "独身",
    "reading": "どくしん",
    "meaning": "single, unmarried",
    "level": "3"
  },
  {
    "word": "特徴",
    "reading": "とくちょう",
    "meaning": "characteristic(s); feature(s); trait(s)",
    "level": "3"
  },
  {
    "word": "特長",
    "reading": "とくちょう",
    "meaning": "forte, merit",
    "level": "3"
  },
  {
    "word": "独特",
    "reading": "どくとく",
    "meaning": "peculiarity, uniqueness, characteristic",
    "level": "3"
  },
  {
    "word": "独立",
    "reading": "どくりつ",
    "meaning": "independence (e.g., Ind. Day), self-support",
    "level": "3"
  },
  {
    "word": "溶ける",
    "reading": "とける",
    "meaning": "to melt, to thaw, to dissolve",
    "level": "3"
  },
  {
    "word": "解ける",
    "reading": "とける",
    "meaning": "to come untied, to come apart",
    "level": "3"
  },
  {
    "word": "どこか",
    "reading": "どこか",
    "meaning": "somewhere, anywhere",
    "level": "3"
  },
  {
    "word": "ところが",
    "reading": "ところが",
    "meaning": "however, while, even if",
    "level": "3"
  },
  {
    "word": "ところで",
    "reading": "ところで",
    "meaning": "by the way; even if",
    "level": "3"
  },
  {
    "word": "登山",
    "reading": "とざん",
    "meaning": "mountain-climbing",
    "level": "3"
  },
  {
    "word": "都市",
    "reading": "とし",
    "meaning": "town, city, urban",
    "level": "3"
  },
  {
    "word": "年月",
    "reading": "としつき",
    "meaning": "months and years",
    "level": "3"
  },
  {
    "word": "図書",
    "reading": "としょ",
    "meaning": "books",
    "level": "3"
  },
  {
    "word": "年寄",
    "reading": "としより",
    "meaning": "old people, the aged",
    "level": "3"
  },
  {
    "word": "閉じる",
    "reading": "とじる",
    "meaning": "to close (e.g., book, eyes), to shut",
    "level": "3"
  },
  {
    "word": "途端",
    "reading": "とたん",
    "meaning": "just (now, at the moment, etc.)",
    "level": "3"
  },
  {
    "word": "土地",
    "reading": "とち",
    "meaning": "plot of land, lot, soil",
    "level": "3"
  },
  {
    "word": "突然",
    "reading": "とつぜん",
    "meaning": "abruptly, suddenly, unexpectedly",
    "level": "3"
  },
  {
    "word": "トップ",
    "reading": "トップ",
    "meaning": "top",
    "level": "3"
  },
  {
    "word": "届く",
    "reading": "とどく",
    "meaning": "to reach",
    "level": "3"
  },
  {
    "word": "とにかく",
    "reading": "とにかく",
    "meaning": "anyhow, at any rate, anyway",
    "level": "3"
  },
  {
    "word": "飛ばす",
    "reading": "とばす",
    "meaning": "to skip over, to omit",
    "level": "3"
  },
  {
    "word": "飛び出す",
    "reading": "とびだす",
    "meaning": "to jump out, to rush out, to fly out",
    "level": "3"
  },
  {
    "word": "留める",
    "reading": "とめる",
    "meaning": "to fasten, to turn off, to detain",
    "level": "3"
  },
  {
    "word": "泊める",
    "reading": "とめる",
    "meaning": "to have someone stay (over night) (v.t.)",
    "level": "3"
  },
  {
    "word": "友",
    "reading": "とも",
    "meaning": "friend, companion, pal",
    "level": "3"
  },
  {
    "word": "共に",
    "reading": "ともに",
    "meaning": "sharing with, participate in",
    "level": "3"
  },
  {
    "word": "虎",
    "reading": "とら",
    "meaning": "tiger",
    "level": "3"
  },
  {
    "word": "ドライブ",
    "reading": "ドライブ",
    "meaning": "drive, driving",
    "level": "3"
  },
  {
    "word": "トラック",
    "reading": "トラック",
    "meaning": "truck; (running) track",
    "level": "3"
  },
  {
    "word": "ドラマ",
    "reading": "ドラマ",
    "meaning": "drama",
    "level": "3"
  },
  {
    "word": "トランプ",
    "reading": "トランプ",
    "meaning": "playing cards (lit: trump)",
    "level": "3"
  },
  {
    "word": "取り上げる",
    "reading": "とりあげる",
    "meaning": "to take up, to pick up; to confiscate",
    "level": "3"
  },
  {
    "word": "努力",
    "reading": "どりょく",
    "meaning": "great effort, exertion, endeavor",
    "level": "3"
  },
  {
    "word": "トレーニング",
    "reading": "トレーニング",
    "meaning": "training",
    "level": "3"
  },
  {
    "word": "ドレス",
    "reading": "ドレス",
    "meaning": "dress",
    "level": "3"
  },
  {
    "word": "取れる",
    "reading": "とれる",
    "meaning": "to come off, to be taken off",
    "level": "3"
  },
  {
    "word": "泥",
    "reading": "どろ",
    "meaning": "mud",
    "level": "3"
  },
  {
    "word": "トン",
    "reading": "トン",
    "meaning": "ton (1000 lbs.)",
    "level": "3"
  },
  {
    "word": "とんでもない",
    "reading": "とんでもない",
    "meaning": "outrageous, No way!",
    "level": "3"
  },
  {
    "word": "どんなに",
    "reading": "どんなに",
    "meaning": "how, how much",
    "level": "3"
  },
  {
    "word": "トンネル",
    "reading": "トンネル",
    "meaning": "tunnel",
    "level": "3"
  },
  {
    "word": "名",
    "reading": "な",
    "meaning": "name, reputation",
    "level": "3"
  },
  {
    "word": "内容",
    "reading": "ないよう",
    "meaning": "subject, contents, detail",
    "level": "3"
  },
  {
    "word": "なお",
    "reading": "なお",
    "meaning": "still, yet",
    "level": "3"
  },
  {
    "word": "仲",
    "reading": "なか",
    "meaning": "relation, relationship",
    "level": "3"
  },
  {
    "word": "流す",
    "reading": "ながす",
    "meaning": "to drain, to float, to shed (e.g., blood, tears)",
    "level": "3"
  },
  {
    "word": "半ば",
    "reading": "なかば",
    "meaning": "middle, halfway",
    "level": "3"
  },
  {
    "word": "仲間",
    "reading": "なかま",
    "meaning": "company, fellow, colleague, associate",
    "level": "3"
  },
  {
    "word": "中身",
    "reading": "なかみ",
    "meaning": "content(s); substance",
    "level": "3"
  },
  {
    "word": "中味",
    "reading": "なかみ",
    "meaning": "contents, interior, filling",
    "level": "3"
  },
  {
    "word": "眺め",
    "reading": "ながめ",
    "meaning": "scene; view; prospect; outlook",
    "level": "3"
  },
  {
    "word": "眺める",
    "reading": "ながめる",
    "meaning": "to view, to gaze at",
    "level": "3"
  },
  {
    "word": "流れ",
    "reading": "ながれ",
    "meaning": "stream, current",
    "level": "3"
  },
  {
    "word": "流れる",
    "reading": "ながれる",
    "meaning": "to flow, to be washed away",
    "level": "3"
  },
  {
    "word": "亡くす",
    "reading": "なくす",
    "meaning": "to lose someone",
    "level": "3"
  },
  {
    "word": "殴る",
    "reading": "なぐる",
    "meaning": "to strike; to hit; to punch",
    "level": "3"
  },
  {
    "word": "無し",
    "reading": "なし",
    "meaning": "without",
    "level": "3"
  },
  {
    "word": "なぜなら",
    "reading": "なぜなら",
    "meaning": "because",
    "level": "3"
  },
  {
    "word": "謎",
    "reading": "なぞ",
    "meaning": "riddle, puzzle, enigma",
    "level": "3"
  },
  {
    "word": "納得",
    "reading": "なっとく",
    "meaning": "consent, assent, understanding",
    "level": "3"
  },
  {
    "word": "何か",
    "reading": "なにか",
    "meaning": "something",
    "level": "3"
  },
  {
    "word": "なにも",
    "reading": "なにも",
    "meaning": "nothing",
    "level": "3"
  },
  {
    "word": "鍋",
    "reading": "なべ",
    "meaning": "saucepan, pot",
    "level": "3"
  },
  {
    "word": "生",
    "reading": "なま",
    "meaning": "raw, unprocessed",
    "level": "3"
  },
  {
    "word": "怠ける",
    "reading": "なまける",
    "meaning": "to be idle, to neglect",
    "level": "3"
  },
  {
    "word": "波",
    "reading": "なみ",
    "meaning": "wave",
    "level": "3"
  },
  {
    "word": "涙",
    "reading": "なみだ",
    "meaning": "tear",
    "level": "3"
  },
  {
    "word": "悩む",
    "reading": "なやむ",
    "meaning": "to agonize, to be troubled",
    "level": "3"
  },
  {
    "word": "鳴らす",
    "reading": "ならす",
    "meaning": "to ring, to sound",
    "level": "3"
  },
  {
    "word": "為る",
    "reading": "なる",
    "meaning": "to change, to be of use, to reach to",
    "level": "3"
  },
  {
    "word": "生る",
    "reading": "なる",
    "meaning": "to bear fruit",
    "level": "3"
  },
  {
    "word": "馴れる",
    "reading": "なれる",
    "meaning": "to become domesticated, to become tame",
    "level": "3"
  },
  {
    "word": "縄",
    "reading": "なわ",
    "meaning": "rope",
    "level": "3"
  },
  {
    "word": "何で",
    "reading": "なんで",
    "meaning": "Why, What for",
    "level": "3"
  },
  {
    "word": "何でも",
    "reading": "なんでも",
    "meaning": "by all means, everything",
    "level": "3"
  },
  {
    "word": "何とか",
    "reading": "なんとか",
    "meaning": "somehow, anyhow, one way or another",
    "level": "3"
  },
  {
    "word": "似合う",
    "reading": "にあう",
    "meaning": "to suit (a person), to match (clothing), (something) becomes (someone)",
    "level": "3"
  },
  {
    "word": "煮える",
    "reading": "にえる",
    "meaning": "to boil, to cook, to be cooked",
    "level": "3"
  },
  {
    "word": "苦手",
    "reading": "にがて",
    "meaning": "poor (at), weak (in), dislike (of)",
    "level": "3"
  },
  {
    "word": "握る",
    "reading": "にぎる",
    "meaning": "to grasp, to seize, to mold sushi",
    "level": "3"
  },
  {
    "word": "日",
    "reading": "にち",
    "meaning": "day",
    "level": "3"
  },
  {
    "word": "日常",
    "reading": "にちじょう",
    "meaning": "ordinary, regular, everyday",
    "level": "3"
  },
  {
    "word": "日光",
    "reading": "にっこう",
    "meaning": "sunlight",
    "level": "3"
  },
  {
    "word": "日中",
    "reading": "にっちゅう",
    "meaning": "daytime, broad daylight",
    "level": "3"
  },
  {
    "word": "にっこり",
    "reading": "にっこり",
    "meaning": "smile sweetly, smile, grin",
    "level": "3"
  },
  {
    "word": "日本",
    "reading": "にっぽん",
    "meaning": "Japan",
    "level": "3"
  },
  {
    "word": "日本",
    "reading": "にほん",
    "meaning": "Japan",
    "level": "3"
  },
  {
    "word": "入場",
    "reading": "にゅうじょう",
    "meaning": "entrance, admission, entering",
    "level": "3"
  },
  {
    "word": "煮る",
    "reading": "にる",
    "meaning": "to boil, to cook",
    "level": "3"
  },
  {
    "word": "人気",
    "reading": "にんき",
    "meaning": "popularity",
    "level": "3"
  },
  {
    "word": "人間",
    "reading": "にんげん",
    "meaning": "human being, person",
    "level": "3"
  },
  {
    "word": "抜く",
    "reading": "ぬく",
    "meaning": "to extract, to omit, to unplug",
    "level": "3"
  },
  {
    "word": "抜ける",
    "reading": "ぬける",
    "meaning": "to come out, to fall out, to be omitted",
    "level": "3"
  },
  {
    "word": "布",
    "reading": "ぬの",
    "meaning": "cloth",
    "level": "3"
  },
  {
    "word": "濡らす",
    "reading": "ぬらす",
    "meaning": "to wet, to soak",
    "level": "3"
  },
  {
    "word": "根",
    "reading": "ね",
    "meaning": "root",
    "level": "3"
  },
  {
    "word": "値",
    "reading": "ね",
    "meaning": "value, price, cost",
    "level": "3"
  },
  {
    "word": "願い",
    "reading": "ねがい",
    "meaning": "desire, wish, request",
    "level": "3"
  },
  {
    "word": "願う",
    "reading": "ねがう",
    "meaning": "to desire, to wish, to request",
    "level": "3"
  },
  {
    "word": "鼠",
    "reading": "ねずみ",
    "meaning": "mouse, rat",
    "level": "3"
  },
  {
    "word": "熱帯",
    "reading": "ねったい",
    "meaning": "tropics",
    "level": "3"
  },
  {
    "word": "熱中",
    "reading": "ねっちゅう",
    "meaning": "enthusiasm, zeal, mania",
    "level": "3"
  },
  {
    "word": "年間",
    "reading": "ねんかん",
    "meaning": "year",
    "level": "3"
  },
  {
    "word": "年月",
    "reading": "ねんげつ",
    "meaning": "months and years",
    "level": "3"
  },
  {
    "word": "年中",
    "reading": "ねんじゅう",
    "meaning": "whole year, always, everyday",
    "level": "3"
  },
  {
    "word": "年代",
    "reading": "ねんだい",
    "meaning": "age, era, period",
    "level": "3"
  },
  {
    "word": "年齢",
    "reading": "ねんれい",
    "meaning": "age, years",
    "level": "3"
  },
  {
    "word": "野",
    "reading": "の",
    "meaning": "field",
    "level": "3"
  },
  {
    "word": "能",
    "reading": "のう",
    "meaning": "being skilled in, nicely, properly",
    "level": "3"
  },
  {
    "word": "農家",
    "reading": "のうか",
    "meaning": "farmer, farm family",
    "level": "3"
  },
  {
    "word": "農業",
    "reading": "のうぎょう",
    "meaning": "agriculture",
    "level": "3"
  },
  {
    "word": "農民",
    "reading": "のうみん",
    "meaning": "farmers, peasants",
    "level": "3"
  },
  {
    "word": "能力",
    "reading": "のうりょく",
    "meaning": "ability, faculty",
    "level": "3"
  },
  {
    "word": "ノー",
    "reading": "ノー",
    "meaning": "no",
    "level": "3"
  },
  {
    "word": "軒",
    "reading": "のき",
    "meaning": "eaves",
    "level": "3"
  },
  {
    "word": "残す",
    "reading": "のこす",
    "meaning": "to leave (behind, over), to save, to reserve",
    "level": "3"
  },
  {
    "word": "残り",
    "reading": "のこり",
    "meaning": "remaining, left-over",
    "level": "3"
  },
  {
    "word": "乗せる",
    "reading": "のせる",
    "meaning": "to place on (something), to take on board",
    "level": "3"
  },
  {
    "word": "載せる",
    "reading": "のせる",
    "meaning": "to place on (something); to publish",
    "level": "3"
  },
  {
    "word": "覗く",
    "reading": "のぞく",
    "meaning": "to peek in, to look in",
    "level": "3"
  },
  {
    "word": "除く",
    "reading": "のぞく",
    "meaning": "to remove, to exclude, to except",
    "level": "3"
  },
  {
    "word": "望み",
    "reading": "のぞみ",
    "meaning": "wish, desire, (a) hope",
    "level": "3"
  },
  {
    "word": "望む",
    "reading": "のぞむ",
    "meaning": "to desire, to wish for; to view",
    "level": "3"
  },
  {
    "word": "後",
    "reading": "のち",
    "meaning": "afterwards, since then",
    "level": "3"
  },
  {
    "word": "ノック",
    "reading": "ノック",
    "meaning": "knock; fungo (baseball)",
    "level": "3"
  },
  {
    "word": "伸ばす",
    "reading": "のばす",
    "meaning": "to extend, to stretch, to reach out",
    "level": "3"
  },
  {
    "word": "延ばす",
    "reading": "のばす",
    "meaning": "to extend, to stretch, to reach out",
    "level": "3"
  },
  {
    "word": "伸びる",
    "reading": "のびる",
    "meaning": "to extend, to make progress, to grow",
    "level": "3"
  },
  {
    "word": "延びる",
    "reading": "のびる",
    "meaning": "to be prolonged",
    "level": "3"
  },
  {
    "word": "述べる",
    "reading": "のべる",
    "meaning": "to state, to express, to mention",
    "level": "3"
  },
  {
    "word": "上る",
    "reading": "のぼる",
    "meaning": "to ascend, to go up, to climb",
    "level": "3"
  },
  {
    "word": "昇る",
    "reading": "のぼる",
    "meaning": "to arise, to ascend, to go up",
    "level": "3"
  },
  {
    "word": "載る",
    "reading": "のる",
    "meaning": "to appear (in print), to be recorded",
    "level": "3"
  },
  {
    "word": "のんびり",
    "reading": "のんびり",
    "meaning": "carefree, at leisure",
    "level": "3"
  },
  {
    "word": "場",
    "reading": "ば",
    "meaning": "place, field (physics)",
    "level": "3"
  },
  {
    "word": "はあ (かん)",
    "reading": "はあ (かん)",
    "meaning": "(sigh)",
    "level": "3"
  },
  {
    "word": "パーセント",
    "reading": "パーセント",
    "meaning": "percent",
    "level": "3"
  },
  {
    "word": "灰",
    "reading": "はい",
    "meaning": "ash",
    "level": "3"
  },
  {
    "word": "梅雨",
    "reading": "ばいう",
    "meaning": "rainy season",
    "level": "3"
  },
  {
    "word": "バイオリン",
    "reading": "バイオリン",
    "meaning": "violin",
    "level": "3"
  },
  {
    "word": "ハイキング",
    "reading": "ハイキング",
    "meaning": "hiking",
    "level": "3"
  },
  {
    "word": "配達",
    "reading": "はいたつ",
    "meaning": "delivery, distribution",
    "level": "3"
  },
  {
    "word": "パイプ",
    "reading": "パイプ",
    "meaning": "pipe; channels official or otherwise",
    "level": "3"
  },
  {
    "word": "俳優",
    "reading": "はいゆう",
    "meaning": "actor, actress, performer",
    "level": "3"
  },
  {
    "word": "パイロット",
    "reading": "パイロット",
    "meaning": "pilot",
    "level": "3"
  },
  {
    "word": "生える",
    "reading": "はえる",
    "meaning": "to grow, to spring up; to cut (teeth)",
    "level": "3"
  },
  {
    "word": "墓",
    "reading": "はか",
    "meaning": "grave, tomb",
    "level": "3"
  },
  {
    "word": "馬鹿",
    "reading": "ばか",
    "meaning": "fool, idiot",
    "level": "3"
  },
  {
    "word": "博士",
    "reading": "はかせ",
    "meaning": "doctorate, PhD., doctor",
    "level": "3"
  },
  {
    "word": "計る",
    "reading": "はかる",
    "meaning": "to measure, to weigh, to survey",
    "level": "3"
  },
  {
    "word": "量る",
    "reading": "はかる",
    "meaning": "to measure, to weigh, to survey",
    "level": "3"
  },
  {
    "word": "測る",
    "reading": "はかる",
    "meaning": "to measure, to weigh, to survey",
    "level": "3"
  },
  {
    "word": "掃く",
    "reading": "はく",
    "meaning": "to sweep, to brush, to gather up",
    "level": "3"
  },
  {
    "word": "吐く",
    "reading": "はく",
    "meaning": "to throw up, to vomit",
    "level": "3"
  },
  {
    "word": "拍手",
    "reading": "はくしゅ",
    "meaning": "clapping hands, applause",
    "level": "3"
  },
  {
    "word": "莫大",
    "reading": "ばくだい",
    "meaning": "enormous, vast",
    "level": "3"
  },
  {
    "word": "爆発",
    "reading": "ばくはつ",
    "meaning": "explosion, detonation, eruption",
    "level": "3"
  },
  {
    "word": "博物館",
    "reading": "はくぶつかん",
    "meaning": "museum",
    "level": "3"
  },
  {
    "word": "激しい",
    "reading": "はげしい",
    "meaning": "violent, vehement, intense",
    "level": "3"
  },
  {
    "word": "はさみ",
    "reading": "はさみ",
    "meaning": "scissors",
    "level": "3"
  },
  {
    "word": "破産",
    "reading": "はさん",
    "meaning": "(personal) bankruptcy",
    "level": "3"
  },
  {
    "word": "端",
    "reading": "はし",
    "meaning": "end (e.g., of street), edge, margin",
    "level": "3"
  },
  {
    "word": "始まり",
    "reading": "はじまり",
    "meaning": "origin, beginning",
    "level": "3"
  },
  {
    "word": "パス",
    "reading": "パス",
    "meaning": "path, pass (in games)",
    "level": "3"
  },
  {
    "word": "外す",
    "reading": "はずす",
    "meaning": "to unfasten, to remove",
    "level": "3"
  },
  {
    "word": "パスポート",
    "reading": "パスポート",
    "meaning": "passport",
    "level": "3"
  },
  {
    "word": "外れる",
    "reading": "はずれる",
    "meaning": "to be disconnected, to be out (e.g., of gear)",
    "level": "3"
  },
  {
    "word": "旗",
    "reading": "はた",
    "meaning": "flag",
    "level": "3"
  },
  {
    "word": "肌",
    "reading": "はだ",
    "meaning": "skin",
    "level": "3"
  },
  {
    "word": "裸",
    "reading": "はだか",
    "meaning": "naked, nude",
    "level": "3"
  },
  {
    "word": "畑",
    "reading": "はたけ",
    "meaning": "field, patch",
    "level": "3"
  },
  {
    "word": "働き",
    "reading": "はたらき",
    "meaning": "work, labor",
    "level": "3"
  },
  {
    "word": "バッグ",
    "reading": "バッグ",
    "meaning": "bag",
    "level": "3"
  },
  {
    "word": "発見",
    "reading": "はっけん",
    "meaning": "discovery, detection, finding",
    "level": "3"
  },
  {
    "word": "発行",
    "reading": "はっこう",
    "meaning": "issue (publications)",
    "level": "3"
  },
  {
    "word": "発車",
    "reading": "はっしゃ",
    "meaning": "departure of a vehicle",
    "level": "3"
  },
  {
    "word": "発射",
    "reading": "はっしゃ",
    "meaning": "firing, shooting, discharge",
    "level": "3"
  },
  {
    "word": "罰する",
    "reading": "ばっする",
    "meaning": "to punish, to penalize",
    "level": "3"
  },
  {
    "word": "発達",
    "reading": "はったつ",
    "meaning": "development, growth",
    "level": "3"
  },
  {
    "word": "ばったり",
    "reading": "ばったり",
    "meaning": "(to meet) by chance",
    "level": "3"
  },
  {
    "word": "発展",
    "reading": "はってん",
    "meaning": "development, growth, progress",
    "level": "3"
  },
  {
    "word": "発表",
    "reading": "はっぴょう",
    "meaning": "announcement; publication; presentation",
    "level": "3"
  },
  {
    "word": "発明",
    "reading": "はつめい",
    "meaning": "invention",
    "level": "3"
  },
  {
    "word": "派手",
    "reading": "はで",
    "meaning": "showy, flashy, gaudy",
    "level": "3"
  },
  {
    "word": "話し合う",
    "reading": "はなしあう",
    "meaning": "to discuss, to talk together",
    "level": "3"
  },
  {
    "word": "離す",
    "reading": "はなす",
    "meaning": "to part, to separate",
    "level": "3"
  },
  {
    "word": "放す",
    "reading": "はなす",
    "meaning": "to separate, to set free",
    "level": "3"
  },
  {
    "word": "離れる",
    "reading": "はなれる",
    "meaning": "(something, someone) separates; parts from; to be apart",
    "level": "3"
  },
  {
    "word": "放れる",
    "reading": "はなれる",
    "meaning": "to leave, to get free, to cut oneself off",
    "level": "3"
  },
  {
    "word": "羽",
    "reading": "はね",
    "meaning": "wing",
    "level": "3"
  },
  {
    "word": "羽根",
    "reading": "はね",
    "meaning": "feather",
    "level": "3"
  },
  {
    "word": "幅",
    "reading": "はば",
    "meaning": "width, breadth",
    "level": "3"
  },
  {
    "word": "母親",
    "reading": "ははおや",
    "meaning": "mother",
    "level": "3"
  },
  {
    "word": "省く",
    "reading": "はぶく",
    "meaning": "to omit, to eliminate",
    "level": "3"
  },
  {
    "word": "場面",
    "reading": "ばめん",
    "meaning": "scene, setting (e.g., of novel)",
    "level": "3"
  },
  {
    "word": "流行る",
    "reading": "はやる",
    "meaning": "to be popular, to come into fashion",
    "level": "3"
  },
  {
    "word": "腹",
    "reading": "はら",
    "meaning": "abdomen, belly, stomach",
    "level": "3"
  },
  {
    "word": "原",
    "reading": "はら",
    "meaning": "field, plain",
    "level": "3"
  },
  {
    "word": "バランス",
    "reading": "バランス",
    "meaning": "balance",
    "level": "3"
  },
  {
    "word": "針",
    "reading": "はり",
    "meaning": "needle, hand (e.g., clock)",
    "level": "3"
  },
  {
    "word": "範囲",
    "reading": "はんい",
    "meaning": "extent, scope, range",
    "level": "3"
  },
  {
    "word": "反抗",
    "reading": "はんこう",
    "meaning": "opposition, resistance",
    "level": "3"
  },
  {
    "word": "犯罪",
    "reading": "はんざい",
    "meaning": "crime",
    "level": "3"
  },
  {
    "word": "ハンサム",
    "reading": "ハンサム",
    "meaning": "handsome",
    "level": "3"
  },
  {
    "word": "反省",
    "reading": "はんせい",
    "meaning": "reflection, reconsideration, regret",
    "level": "3"
  },
  {
    "word": "判断",
    "reading": "はんだん",
    "meaning": "judgment, decision",
    "level": "3"
  },
  {
    "word": "犯人",
    "reading": "はんにん",
    "meaning": "offender, criminal",
    "level": "3"
  },
  {
    "word": "販売",
    "reading": "はんばい",
    "meaning": "sale, selling, marketing",
    "level": "3"
  },
  {
    "word": "灯",
    "reading": "ひ",
    "meaning": "light",
    "level": "3"
  },
  {
    "word": "ビール",
    "reading": "ビール",
    "meaning": "beer",
    "level": "3"
  },
  {
    "word": "被害",
    "reading": "ひがい",
    "meaning": "damage",
    "level": "3"
  },
  {
    "word": "比較",
    "reading": "ひかく",
    "meaning": "comparison",
    "level": "3"
  },
  {
    "word": "ピクニック",
    "reading": "ピクニック",
    "meaning": "picnic",
    "level": "3"
  },
  {
    "word": "悲劇",
    "reading": "ひげき",
    "meaning": "tragedy",
    "level": "3"
  },
  {
    "word": "飛行",
    "reading": "ひこう",
    "meaning": "aviation, flight",
    "level": "3"
  },
  {
    "word": "膝",
    "reading": "ひざ",
    "meaning": "knee, lap",
    "level": "3"
  },
  {
    "word": "非常",
    "reading": "ひじょう",
    "meaning": "emergency, extraordinary, unusual",
    "level": "3"
  },
  {
    "word": "美人",
    "reading": "びじん",
    "meaning": "beautiful person (woman)",
    "level": "3"
  },
  {
    "word": "額",
    "reading": "ひたい",
    "meaning": "forehead, brow",
    "level": "3"
  },
  {
    "word": "日付",
    "reading": "ひづけ",
    "meaning": "date, dating",
    "level": "3"
  },
  {
    "word": "引越し",
    "reading": "ひっこし",
    "meaning": "moving, changing residence",
    "level": "3"
  },
  {
    "word": "必死",
    "reading": "ひっし",
    "meaning": "desperation, frantic, inevitable result",
    "level": "3"
  },
  {
    "word": "ぴったり",
    "reading": "ぴったり",
    "meaning": "exactly, neatly, sharp",
    "level": "3"
  },
  {
    "word": "引っ張る",
    "reading": "ひっぱる",
    "meaning": "to pull, to stretch, to drag",
    "level": "3"
  },
  {
    "word": "否定",
    "reading": "ひてい",
    "meaning": "negation, denial",
    "level": "3"
  },
  {
    "word": "ビデオ",
    "reading": "ビデオ",
    "meaning": "video tape; VCR",
    "level": "3"
  },
  {
    "word": "一言",
    "reading": "ひとこと",
    "meaning": "one word",
    "level": "3"
  },
  {
    "word": "人込み",
    "reading": "ひとごみ",
    "meaning": "crowd of people",
    "level": "3"
  },
  {
    "word": "等しい",
    "reading": "ひとしい",
    "meaning": "equal",
    "level": "3"
  },
  {
    "word": "独り",
    "reading": "ひとり",
    "meaning": "alone, unmarried",
    "level": "3"
  },
  {
    "word": "一人一人",
    "reading": "ひとりひとり",
    "meaning": "one by one, each",
    "level": "3"
  },
  {
    "word": "批判",
    "reading": "ひはん",
    "meaning": "criticism",
    "level": "3"
  },
  {
    "word": "批評",
    "reading": "ひひょう",
    "meaning": "criticism, review, commentary",
    "level": "3"
  },
  {
    "word": "秘密",
    "reading": "ひみつ",
    "meaning": "secret, secrecy",
    "level": "3"
  },
  {
    "word": "微妙",
    "reading": "びみょう",
    "meaning": "delicate, subtle",
    "level": "3"
  },
  {
    "word": "紐",
    "reading": "ひも",
    "meaning": "string, cord",
    "level": "3"
  },
  {
    "word": "冷やす",
    "reading": "ひやす",
    "meaning": "to cool, to refrigerate",
    "level": "3"
  },
  {
    "word": "費用",
    "reading": "ひよう",
    "meaning": "cost, expense",
    "level": "3"
  },
  {
    "word": "表",
    "reading": "ひょう",
    "meaning": "table (e.g., Tab 1), chart, list",
    "level": "3"
  },
  {
    "word": "秒",
    "reading": "びょう",
    "meaning": "second (60th min)",
    "level": "3"
  },
  {
    "word": "評価",
    "reading": "ひょうか",
    "meaning": "assessment, evaluation",
    "level": "3"
  },
  {
    "word": "表現",
    "reading": "ひょうげん",
    "meaning": "expression, presentation",
    "level": "3"
  },
  {
    "word": "表情",
    "reading": "ひょうじょう",
    "meaning": "facial expression",
    "level": "3"
  },
  {
    "word": "平等",
    "reading": "びょうどう",
    "meaning": "equality, impartiality, evenness",
    "level": "3"
  },
  {
    "word": "評判",
    "reading": "ひょうばん",
    "meaning": "fame, reputation",
    "level": "3"
  },
  {
    "word": "表面",
    "reading": "ひょうめん",
    "meaning": "surface, outside, face",
    "level": "3"
  },
  {
    "word": "広がる",
    "reading": "ひろがる",
    "meaning": "to spread (out), to extend, to stretch, to reach to, to get around",
    "level": "3"
  },
  {
    "word": "広げる",
    "reading": "ひろげる",
    "meaning": "to spread, to extend, to expand, to enlarge",
    "level": "3"
  },
  {
    "word": "広める",
    "reading": "ひろめる",
    "meaning": "to broaden, to propagate",
    "level": "3"
  },
  {
    "word": "品",
    "reading": "ひん",
    "meaning": "goods; taste, elegance",
    "level": "3"
  },
  {
    "word": "瓶",
    "reading": "びん",
    "meaning": "bottle",
    "level": "3"
  },
  {
    "word": "便",
    "reading": "びん",
    "meaning": "way, means; flight",
    "level": "3"
  },
  {
    "word": "ピン",
    "reading": "ピン",
    "meaning": "pin",
    "level": "3"
  },
  {
    "word": "不",
    "reading": "ふ",
    "meaning": "un(~), non(~), negative prefix",
    "level": "3"
  },
  {
    "word": "不",
    "reading": "ぶ",
    "meaning": "un(~), non(~), negative prefix",
    "level": "3"
  },
  {
    "word": "無",
    "reading": "ぶ",
    "meaning": "nothing, naught, nil, zero",
    "level": "3"
  },
  {
    "word": "分",
    "reading": "ぶ",
    "meaning": "dividing, part",
    "level": "3"
  },
  {
    "word": "不安",
    "reading": "ふあん",
    "meaning": "anxiety, uneasiness",
    "level": "3"
  },
  {
    "word": "風景",
    "reading": "ふうけい",
    "meaning": "scenery",
    "level": "3"
  },
  {
    "word": "夫婦",
    "reading": "ふうふ",
    "meaning": "married couple, husband and wife",
    "level": "3"
  },
  {
    "word": "笛",
    "reading": "ふえ",
    "meaning": "flute, whistle",
    "level": "3"
  },
  {
    "word": "不可",
    "reading": "ふか",
    "meaning": "wrong, bad, impossible",
    "level": "3"
  },
  {
    "word": "深まる",
    "reading": "ふかまる",
    "meaning": "to deepen",
    "level": "3"
  },
  {
    "word": "武器",
    "reading": "ぶき",
    "meaning": "weapon, arms",
    "level": "3"
  },
  {
    "word": "拭く",
    "reading": "ふく",
    "meaning": "to wipe, to dry",
    "level": "3"
  },
  {
    "word": "服装",
    "reading": "ふくそう",
    "meaning": "clothes, attire",
    "level": "3"
  },
  {
    "word": "含む",
    "reading": "ふくむ",
    "meaning": "to contain, to include",
    "level": "3"
  },
  {
    "word": "含める",
    "reading": "ふくめる",
    "meaning": "to include",
    "level": "3"
  },
  {
    "word": "袋",
    "reading": "ふくろ",
    "meaning": "bag, sack",
    "level": "3"
  },
  {
    "word": "不幸",
    "reading": "ふこう",
    "meaning": "unhappiness, sorrow, misfortune",
    "level": "3"
  },
  {
    "word": "節",
    "reading": "ふし",
    "meaning": "tune, tone, knob",
    "level": "3"
  },
  {
    "word": "無事",
    "reading": "ぶじ",
    "meaning": "safety, peace",
    "level": "3"
  },
  {
    "word": "不思議",
    "reading": "ふしぎ",
    "meaning": "mystery, curiosity",
    "level": "3"
  },
  {
    "word": "不自由",
    "reading": "ふじゆう",
    "meaning": "discomfort, disability, inconvenience",
    "level": "3"
  },
  {
    "word": "夫人",
    "reading": "ふじん",
    "meaning": "wife, Mrs, madam",
    "level": "3"
  },
  {
    "word": "婦人",
    "reading": "ふじん",
    "meaning": "woman (same as 女性 (じょせい)、女の人 (おんなのひと))",
    "level": "3"
  },
  {
    "word": "不正",
    "reading": "ふせい",
    "meaning": "injustice, unfairness",
    "level": "3"
  },
  {
    "word": "防ぐ",
    "reading": "ふせぐ",
    "meaning": "to defend (against), to protect, to prevent",
    "level": "3"
  },
  {
    "word": "不足",
    "reading": "ふそく",
    "meaning": "insufficiency, shortage",
    "level": "3"
  },
  {
    "word": "舞台",
    "reading": "ぶたい",
    "meaning": "stage (theater)",
    "level": "3"
  },
  {
    "word": "双子",
    "reading": "ふたご",
    "meaning": "twins, a twin",
    "level": "3"
  },
  {
    "word": "再び",
    "reading": "ふたたび",
    "meaning": "again, once more, a second time",
    "level": "3"
  },
  {
    "word": "普段",
    "reading": "ふだん",
    "meaning": "in everyday situations, usually, ordinarily",
    "level": "3"
  },
  {
    "word": "縁",
    "reading": "ふち",
    "meaning": "edge, rim",
    "level": "3"
  },
  {
    "word": "打つ",
    "reading": "ぶつ",
    "meaning": "to hit, to strike",
    "level": "3"
  },
  {
    "word": "不通",
    "reading": "ふつう",
    "meaning": "blockade, interruption, stoppage",
    "level": "3"
  },
  {
    "word": "物価",
    "reading": "ぶっか",
    "meaning": "(commodity/consumer) prices",
    "level": "3"
  },
  {
    "word": "ぶつかる",
    "reading": "ぶつかる",
    "meaning": "to strike, to collide with",
    "level": "3"
  },
  {
    "word": "ぶつける",
    "reading": "ぶつける",
    "meaning": "to knock, to strike hard, to hit and attack",
    "level": "3"
  },
  {
    "word": "物質",
    "reading": "ぶっしつ",
    "meaning": "material, substance",
    "level": "3"
  },
  {
    "word": "物理",
    "reading": "ぶつり",
    "meaning": "physics",
    "level": "3"
  },
  {
    "word": "筆",
    "reading": "ふで",
    "meaning": "writing brush",
    "level": "3"
  },
  {
    "word": "ふと",
    "reading": "ふと",
    "meaning": "suddenly, accidentally, incidentally",
    "level": "3"
  },
  {
    "word": "部分",
    "reading": "ぶぶん",
    "meaning": "portion, section, part",
    "level": "3"
  },
  {
    "word": "不平",
    "reading": "ふへい",
    "meaning": "complaint, discontent, dissatisfaction",
    "level": "3"
  },
  {
    "word": "不満",
    "reading": "ふまん",
    "meaning": "dissatisfaction, discontent, complaints",
    "level": "3"
  },
  {
    "word": "増やす",
    "reading": "ふやす",
    "meaning": "to increase (v.t.), to add to",
    "level": "3"
  },
  {
    "word": "殖やす",
    "reading": "ふやす",
    "meaning": "to increase, to add to",
    "level": "3"
  },
  {
    "word": "プラス",
    "reading": "プラス",
    "meaning": "plus",
    "level": "3"
  },
  {
    "word": "プラスチック",
    "reading": "プラスチック",
    "meaning": "plastic",
    "level": "3"
  },
  {
    "word": "プラン",
    "reading": "プラン",
    "meaning": "plan",
    "level": "3"
  },
  {
    "word": "不利",
    "reading": "ふり",
    "meaning": "disadvantage, drawback",
    "level": "3"
  },
  {
    "word": "振る",
    "reading": "ふる",
    "meaning": "to wave, to shake; to sprinkle; to cast (actor)",
    "level": "3"
  },
  {
    "word": "震える",
    "reading": "ふるえる",
    "meaning": "to shiver, to shake, to quake",
    "level": "3"
  },
  {
    "word": "ブレーキ",
    "reading": "ブレーキ",
    "meaning": "a brake",
    "level": "3"
  },
  {
    "word": "触れる",
    "reading": "ふれる",
    "meaning": "to touch, to feel, to violate",
    "level": "3"
  },
  {
    "word": "プロ",
    "reading": "プロ",
    "meaning": "professional",
    "level": "3"
  },
  {
    "word": "分",
    "reading": "ぶん",
    "meaning": "dividing, part, segment",
    "level": "3"
  },
  {
    "word": "文",
    "reading": "ぶん",
    "meaning": "sentence",
    "level": "3"
  },
  {
    "word": "雰囲気",
    "reading": "ふんいき",
    "meaning": "atmosphere (e.g., musical), mood, ambiance",
    "level": "3"
  },
  {
    "word": "分析",
    "reading": "ぶんせき",
    "meaning": "analysis",
    "level": "3"
  },
  {
    "word": "文明",
    "reading": "ぶんめい",
    "meaning": "civilization",
    "level": "3"
  },
  {
    "word": "分野",
    "reading": "ぶんや",
    "meaning": "field, sphere",
    "level": "3"
  },
  {
    "word": "塀",
    "reading": "へい",
    "meaning": "wall, fence",
    "level": "3"
  },
  {
    "word": "平均",
    "reading": "へいきん",
    "meaning": "equilibrium, balance, average",
    "level": "3"
  },
  {
    "word": "平和",
    "reading": "へいわ",
    "meaning": "peace",
    "level": "3"
  },
  {
    "word": "別に",
    "reading": "べつに",
    "meaning": "(not) particularly, nothing",
    "level": "3"
  },
  {
    "word": "減らす",
    "reading": "へらす",
    "meaning": "to decrease, to diminish",
    "level": "3"
  },
  {
    "word": "減る",
    "reading": "へる",
    "meaning": "to decrease (in size or number), to diminish",
    "level": "3"
  },
  {
    "word": "ベルト",
    "reading": "ベルト",
    "meaning": "Belt for western clothes",
    "level": "3"
  },
  {
    "word": "変化",
    "reading": "へんか",
    "meaning": "change, variation, shift",
    "level": "3"
  },
  {
    "word": "ペンキ",
    "reading": "ペンキ",
    "meaning": "paint",
    "level": "3"
  },
  {
    "word": "変更",
    "reading": "へんこう",
    "meaning": "change, modification, alteration",
    "level": "3"
  },
  {
    "word": "ベンチ",
    "reading": "ベンチ",
    "meaning": "bench",
    "level": "3"
  },
  {
    "word": "弁当",
    "reading": "べんとう",
    "meaning": "box lunch",
    "level": "3"
  },
  {
    "word": "方",
    "reading": "ほう",
    "meaning": "side",
    "level": "3"
  },
  {
    "word": "法",
    "reading": "ほう",
    "meaning": "Act (law: the X Act)",
    "level": "3"
  },
  {
    "word": "棒",
    "reading": "ぼう",
    "meaning": "pole, rod, stick",
    "level": "3"
  },
  {
    "word": "冒険",
    "reading": "ぼうけん",
    "meaning": "risk, venture, adventure",
    "level": "3"
  },
  {
    "word": "方向",
    "reading": "ほうこう",
    "meaning": "direction, course, way",
    "level": "3"
  },
  {
    "word": "報告",
    "reading": "ほうこく",
    "meaning": "report, information",
    "level": "3"
  },
  {
    "word": "宝石",
    "reading": "ほうせき",
    "meaning": "gem, jewel",
    "level": "3"
  },
  {
    "word": "包装",
    "reading": "ほうそう",
    "meaning": "packing, wrapping",
    "level": "3"
  },
  {
    "word": "豊富",
    "reading": "ほうふ",
    "meaning": "abundance, plenty",
    "level": "3"
  },
  {
    "word": "方法",
    "reading": "ほうほう",
    "meaning": "method, means, technique",
    "level": "3"
  },
  {
    "word": "方々",
    "reading": "ほうぼう",
    "meaning": "here and there, everywhere",
    "level": "3"
  },
  {
    "word": "訪問",
    "reading": "ほうもん",
    "meaning": "call, visit",
    "level": "3"
  },
  {
    "word": "吠える",
    "reading": "ほえる",
    "meaning": "to bark, to howl",
    "level": "3"
  },
  {
    "word": "ボーイ",
    "reading": "ボーイ",
    "meaning": "porter; boy",
    "level": "3"
  },
  {
    "word": "ボート",
    "reading": "ボート",
    "meaning": "rowing boat",
    "level": "3"
  },
  {
    "word": "ホーム",
    "reading": "ホーム",
    "meaning": "platform; home",
    "level": "3"
  },
  {
    "word": "ボール",
    "reading": "ボール",
    "meaning": "ball; bowl",
    "level": "3"
  },
  {
    "word": "他",
    "reading": "ほか",
    "meaning": "other (esp. places and things)",
    "level": "3"
  },
  {
    "word": "誇り",
    "reading": "ほこり",
    "meaning": "pride",
    "level": "3"
  },
  {
    "word": "埃",
    "reading": "ほこり",
    "meaning": "dust",
    "level": "3"
  },
  {
    "word": "保証",
    "reading": "ほしょう",
    "meaning": "guarantee, assurance, warranty",
    "level": "3"
  },
  {
    "word": "保存",
    "reading": "ほぞん",
    "meaning": "preservation, conservation",
    "level": "3"
  },
  {
    "word": "歩道",
    "reading": "ほどう",
    "meaning": "walkway",
    "level": "3"
  },
  {
    "word": "仏",
    "reading": "ほとけ",
    "meaning": "Buddha",
    "level": "3"
  },
  {
    "word": "骨",
    "reading": "ほね",
    "meaning": "bone",
    "level": "3"
  },
  {
    "word": "炎",
    "reading": "ほのお",
    "meaning": "flame",
    "level": "3"
  },
  {
    "word": "頬",
    "reading": "ほほ",
    "meaning": "cheek (of face)",
    "level": "3"
  },
  {
    "word": "頬",
    "reading": "ほお",
    "meaning": "cheek (of face)",
    "level": "3"
  },
  {
    "word": "ほぼ",
    "reading": "ほぼ",
    "meaning": "almost, roughly",
    "level": "3"
  },
  {
    "word": "微笑む",
    "reading": "ほほえむ",
    "meaning": "to smile",
    "level": "3"
  },
  {
    "word": "堀",
    "reading": "ほり",
    "meaning": "moat, canal",
    "level": "3"
  },
  {
    "word": "濠",
    "reading": "ほり",
    "meaning": "moat",
    "level": "3"
  },
  {
    "word": "本当",
    "reading": "ほんと",
    "meaning": "truth, reality",
    "level": "3"
  },
  {
    "word": "本人",
    "reading": "ほんにん",
    "meaning": "the person himself",
    "level": "3"
  },
  {
    "word": "本物",
    "reading": "ほんもの",
    "meaning": "genuine article",
    "level": "3"
  },
  {
    "word": "ぼんやり",
    "reading": "ぼんやり",
    "meaning": "dim, faint, vague",
    "level": "3"
  },
  {
    "word": "間",
    "reading": "ま",
    "meaning": "space, room, pause",
    "level": "3"
  },
  {
    "word": "まあ",
    "reading": "まあ",
    "meaning": "well (used when making a modest or hesitant statement)",
    "level": "3"
  },
  {
    "word": "マーケット",
    "reading": "マーケット",
    "meaning": "market",
    "level": "3"
  },
  {
    "word": "マイク",
    "reading": "マイク",
    "meaning": "mic",
    "level": "3"
  },
  {
    "word": "迷子",
    "reading": "まいご",
    "meaning": "lost (stray) child",
    "level": "3"
  },
  {
    "word": "マイナス",
    "reading": "マイナス",
    "meaning": "minus",
    "level": "3"
  },
  {
    "word": "任せる",
    "reading": "まかせる",
    "meaning": "to entrust to another, to leave to",
    "level": "3"
  },
  {
    "word": "巻く",
    "reading": "まく",
    "meaning": "to wind, to coil, to roll",
    "level": "3"
  },
  {
    "word": "蒔く",
    "reading": "まく",
    "meaning": "to sow (seeds)",
    "level": "3"
  },
  {
    "word": "撒く",
    "reading": "まく",
    "meaning": "to scatter, to sprinkle, to sow",
    "level": "3"
  },
  {
    "word": "幕",
    "reading": "まく",
    "meaning": "curtain, act (in play)",
    "level": "3"
  },
  {
    "word": "負け",
    "reading": "まけ",
    "meaning": "defeat, loss",
    "level": "3"
  },
  {
    "word": "孫",
    "reading": "まご",
    "meaning": "grandchild",
    "level": "3"
  },
  {
    "word": "まさか",
    "reading": "まさか",
    "meaning": "by no means",
    "level": "3"
  },
  {
    "word": "まさに",
    "reading": "まさに",
    "meaning": "correctly, surely",
    "level": "3"
  },
  {
    "word": "混ざる",
    "reading": "まざる",
    "meaning": "to be mixed, to mingle with",
    "level": "3"
  },
  {
    "word": "交ざる",
    "reading": "まざる",
    "meaning": "to be mixed, to mingle with",
    "level": "3"
  },
  {
    "word": "混じる",
    "reading": "まじる",
    "meaning": "to be mixed, to mingle with",
    "level": "3"
  },
  {
    "word": "交じる",
    "reading": "まじる",
    "meaning": "to be mixed, to mingle with",
    "level": "3"
  },
  {
    "word": "増す",
    "reading": "ます",
    "meaning": "to increase, to gain",
    "level": "3"
  },
  {
    "word": "貧しい",
    "reading": "まずしい",
    "meaning": "poor, needy",
    "level": "3"
  },
  {
    "word": "マスター",
    "reading": "マスター",
    "meaning": "bar owner, master (e.g., arts, science)",
    "level": "3"
  },
  {
    "word": "ますます",
    "reading": "ますます",
    "meaning": "increasingly (same as もっと), more and more",
    "level": "3"
  },
  {
    "word": "混ぜる",
    "reading": "まぜる",
    "meaning": "to mix, to stir",
    "level": "3"
  },
  {
    "word": "交ぜる",
    "reading": "まぜる",
    "meaning": "to be mixed, to be blended with",
    "level": "3"
  },
  {
    "word": "街",
    "reading": "まち",
    "meaning": "town; street, road",
    "level": "3"
  },
  {
    "word": "間違い",
    "reading": "まちがい",
    "meaning": "mistake",
    "level": "3"
  },
  {
    "word": "松",
    "reading": "まつ",
    "meaning": "pine tree",
    "level": "3"
  },
  {
    "word": "真っ赤",
    "reading": "まっか",
    "meaning": "deep red, flushed (of face)",
    "level": "3"
  },
  {
    "word": "全く",
    "reading": "まったく",
    "meaning": "really, completely",
    "level": "3"
  },
  {
    "word": "祭",
    "reading": "まつり",
    "meaning": "festival, feast",
    "level": "3"
  },
  {
    "word": "まとまる",
    "reading": "まとまる",
    "meaning": "to be collected, to be settled, to be in order",
    "level": "3"
  },
  {
    "word": "まとめる",
    "reading": "まとめる",
    "meaning": "to put in order, to collect, to bring to a conclusion",
    "level": "3"
  },
  {
    "word": "学ぶ",
    "reading": "まなぶ",
    "meaning": "to learn; to study",
    "level": "3"
  },
  {
    "word": "真似",
    "reading": "まね",
    "meaning": "mimicry, imitation, behavior",
    "level": "3"
  },
  {
    "word": "招く",
    "reading": "まねく",
    "meaning": "to invite",
    "level": "3"
  },
  {
    "word": "まぶしい",
    "reading": "まぶしい",
    "meaning": "dazzling, radiant",
    "level": "3"
  },
  {
    "word": "柵",
    "reading": "さく",
    "meaning": "fence, paling",
    "level": "3"
  },
  {
    "word": "裂ける",
    "reading": "さける",
    "meaning": "to split, to tear, to burst",
    "level": "3"
  },
  {
    "word": "裁く",
    "reading": "さばく",
    "meaning": "to judge",
    "level": "3"
  },
  {
    "word": "酸化",
    "reading": "さんか",
    "meaning": "oxidation",
    "level": "3"
  },
  {
    "word": "死",
    "reading": "し",
    "meaning": "death, decease",
    "level": "3"
  },
  {
    "word": "資格",
    "reading": "しかく",
    "meaning": "qualifications, requirements, capabilities",
    "level": "3"
  },
  {
    "word": "視覚",
    "reading": "しかく",
    "meaning": "sense of sight, vision",
    "level": "3"
  },
  {
    "word": "指揮",
    "reading": "しき",
    "meaning": "command, direction",
    "level": "3"
  },
  {
    "word": "磁気",
    "reading": "じき",
    "meaning": "magnetism",
    "level": "3"
  },
  {
    "word": "磁器",
    "reading": "じき",
    "meaning": "porcelain, china",
    "level": "3"
  },
  {
    "word": "自己",
    "reading": "じこ",
    "meaning": "self, oneself",
    "level": "3"
  },
  {
    "word": "字体",
    "reading": "じたい",
    "meaning": "font, lettering",
    "level": "3"
  },
  {
    "word": "辞退",
    "reading": "じたい",
    "meaning": "refusal",
    "level": "3"
  },
  {
    "word": "視点",
    "reading": "してん",
    "meaning": "opinion, point of view, visual point",
    "level": "3"
  },
  {
    "word": "脂肪",
    "reading": "しぼう",
    "meaning": "fat, grease",
    "level": "3"
  },
  {
    "word": "志望",
    "reading": "しぼう",
    "meaning": "wish, desire, ambition",
    "level": "3"
  },
  {
    "word": "衆",
    "reading": "しゅう",
    "meaning": "masses, people",
    "level": "3"
  },
  {
    "word": "住",
    "reading": "じゅう",
    "meaning": "dwelling, living",
    "level": "3"
  },
  {
    "word": "修飾",
    "reading": "しゅうしょく",
    "meaning": "ornamentation; modification (gram)",
    "level": "3"
  },
  {
    "word": "私用",
    "reading": "しよう",
    "meaning": "personal use, private business",
    "level": "3"
  },
  {
    "word": "仕様",
    "reading": "しよう",
    "meaning": "way, method, specification",
    "level": "3"
  },
  {
    "word": "情",
    "reading": "じょう",
    "meaning": "feelings, emotion, passion",
    "level": "3"
  },
  {
    "word": "生涯",
    "reading": "しょうがい",
    "meaning": "one's lifetime",
    "level": "3"
  },
  {
    "word": "上司",
    "reading": "じょうし",
    "meaning": "one's superior",
    "level": "3"
  },
  {
    "word": "正体",
    "reading": "しょうたい",
    "meaning": "natural shape, one's true colors, true character",
    "level": "3"
  },
  {
    "word": "照明",
    "reading": "しょうめい",
    "meaning": "illumination",
    "level": "3"
  },
  {
    "word": "女史",
    "reading": "じょし",
    "meaning": "Ms.",
    "level": "3"
  },
  {
    "word": "助詞",
    "reading": "じょし",
    "meaning": "(gram) particle(s), postposition",
    "level": "3"
  },
  {
    "word": "ショック",
    "reading": "ショック",
    "meaning": "shock",
    "level": "3"
  },
  {
    "word": "進行",
    "reading": "しんこう",
    "meaning": "advance",
    "level": "3"
  },
  {
    "word": "新興",
    "reading": "しんこう",
    "meaning": "rising, developing, emergent",
    "level": "3"
  },
  {
    "word": "振興",
    "reading": "しんこう",
    "meaning": "promotion, encouragement",
    "level": "3"
  },
  {
    "word": "申告",
    "reading": "しんこく",
    "meaning": "report, statement",
    "level": "3"
  },
  {
    "word": "真理",
    "reading": "しんり",
    "meaning": "truth",
    "level": "3"
  },
  {
    "word": "水洗",
    "reading": "すいせん",
    "meaning": "flushing",
    "level": "3"
  },
  {
    "word": "ストレス",
    "reading": "ストレス",
    "meaning": "stress",
    "level": "3"
  },
  {
    "word": "擦る",
    "reading": "する",
    "meaning": "to rub, to chafe",
    "level": "3"
  },
  {
    "word": "正規",
    "reading": "せいき",
    "meaning": "regular, legitimate",
    "level": "3"
  },
  {
    "word": "精巧",
    "reading": "せいこう",
    "meaning": "elaborate, delicate, exquisite",
    "level": "3"
  },
  {
    "word": "精算",
    "reading": "せいさん",
    "meaning": "exact calculation, adjustment",
    "level": "3"
  },
  {
    "word": "成年",
    "reading": "せいねん",
    "meaning": "majority, adult age",
    "level": "3"
  },
  {
    "word": "声明",
    "reading": "せいめい",
    "meaning": "declaration, statement, proclamation",
    "level": "3"
  },
  {
    "word": "姓名",
    "reading": "せいめい",
    "meaning": "full name",
    "level": "3"
  },
  {
    "word": "生理",
    "reading": "せいり",
    "meaning": "physiology, menses",
    "level": "3"
  },
  {
    "word": "節",
    "reading": "せつ",
    "meaning": "when, if; section; clause",
    "level": "3"
  },
  {
    "word": "膳",
    "reading": "ぜん",
    "meaning": "(small) table, tray, meal",
    "level": "3"
  },
  {
    "word": "禅",
    "reading": "ぜん",
    "meaning": "Zen (Buddhism)",
    "level": "3"
  },
  {
    "word": "選挙",
    "reading": "せんきょ",
    "meaning": "election",
    "level": "3"
  },
  {
    "word": "先行",
    "reading": "せんこう",
    "meaning": "preceding, going first",
    "level": "3"
  },
  {
    "word": "選考",
    "reading": "せんこう",
    "meaning": "selection, screening",
    "level": "3"
  },
  {
    "word": "相",
    "reading": "そう",
    "meaning": "aspect, phase, countenance",
    "level": "3"
  },
  {
    "word": "沿う",
    "reading": "そう",
    "meaning": "to run along, to follow",
    "level": "3"
  },
  {
    "word": "添う",
    "reading": "そう",
    "meaning": "to accompany, to comply with",
    "level": "3"
  },
  {
    "word": "僧",
    "reading": "そう",
    "meaning": "monk, priest",
    "level": "3"
  },
  {
    "word": "像",
    "reading": "ぞう",
    "meaning": "statue, image",
    "level": "3"
  },
  {
    "word": "捜査",
    "reading": "そうさ",
    "meaning": "search (esp. in criminal investigations, investigation)",
    "level": "3"
  },
  {
    "word": "操縦",
    "reading": "そうじゅう",
    "meaning": "management, control, manipulation",
    "level": "3"
  },
  {
    "word": "創造",
    "reading": "そうぞう",
    "meaning": "creation",
    "level": "3"
  },
  {
    "word": "隊",
    "reading": "たい",
    "meaning": "party, troops",
    "level": "3"
  },
  {
    "word": "退学",
    "reading": "たいがく",
    "meaning": "dropping out of school",
    "level": "3"
  },
  {
    "word": "タイトル",
    "reading": "タイトル",
    "meaning": "title",
    "level": "3"
  },
  {
    "word": "ダウン",
    "reading": "ダウン",
    "meaning": "down",
    "level": "3"
  },
  {
    "word": "高まる",
    "reading": "たかまる",
    "meaning": "to rise; to grow; to mount (v.i.)",
    "level": "3"
  },
  {
    "word": "断つ",
    "reading": "たつ",
    "meaning": "to sever, to cut off",
    "level": "3"
  },
  {
    "word": "盾",
    "reading": "たて",
    "meaning": "shield",
    "level": "3"
  },
  {
    "word": "例え",
    "reading": "たとえ",
    "meaning": "example; even though",
    "level": "3"
  },
  {
    "word": "チャイム",
    "reading": "チャイム",
    "meaning": "chime",
    "level": "3"
  },
  {
    "word": "挑戦",
    "reading": "ちょうせん",
    "meaning": "challenge, defiance",
    "level": "3"
  },
  {
    "word": "治療",
    "reading": "ちりょう",
    "meaning": "medical treatment",
    "level": "3"
  },
  {
    "word": "対",
    "reading": "つい",
    "meaning": "pair, couple, set",
    "level": "3"
  },
  {
    "word": "接ぐ",
    "reading": "つぐ",
    "meaning": "to join; to piece together; to set (bones); to graft (trees)",
    "level": "3"
  },
  {
    "word": "継ぐ",
    "reading": "つぐ",
    "meaning": "to succeed (someone in a business or inheritance",
    "level": "3"
  },
  {
    "word": "摘む",
    "reading": "つむ",
    "meaning": "to pluck, to pick, to trim",
    "level": "3"
  },
  {
    "word": "露",
    "reading": "つゆ",
    "meaning": "dew",
    "level": "3"
  },
  {
    "word": "強まる",
    "reading": "つよまる",
    "meaning": "to get strong, to gain strength",
    "level": "3"
  },
  {
    "word": "強める",
    "reading": "つよめる",
    "meaning": "to strengthen, to emphasize",
    "level": "3"
  },
  {
    "word": "データ",
    "reading": "データ",
    "meaning": "data",
    "level": "3"
  },
  {
    "word": "デザイン",
    "reading": "デザイン",
    "meaning": "design",
    "level": "3"
  },
  {
    "word": "デザート",
    "reading": "デザート",
    "meaning": "dessert",
    "level": "3"
  },
  {
    "word": "転校",
    "reading": "てんこう",
    "meaning": "change schools",
    "level": "3"
  },
  {
    "word": "伝言",
    "reading": "でんごん",
    "meaning": "verbal message",
    "level": "3"
  },
  {
    "word": "と",
    "reading": "と",
    "meaning": "and",
    "level": "3"
  },
  {
    "word": "問う",
    "reading": "とう",
    "meaning": "to ask, to question",
    "level": "3"
  },
  {
    "word": "棟",
    "reading": "とう",
    "meaning": "ridge (of roof",
    "level": "3"
  },
  {
    "word": "倒産",
    "reading": "とうさん",
    "meaning": "(corporate) bankruptcy, insolvency",
    "level": "3"
  },
  {
    "word": "同士",
    "reading": "どうし",
    "meaning": "one another, companion, comrade",
    "level": "3"
  },
  {
    "word": "同志",
    "reading": "どうし",
    "meaning": "same mind, comrade, kindred soul",
    "level": "3"
  },
  {
    "word": "当然",
    "reading": "とうぜん",
    "meaning": "obvious; natural",
    "level": "3"
  },
  {
    "word": "動揺",
    "reading": "どうよう",
    "meaning": "disturbance, flutter shock",
    "level": "3"
  },
  {
    "word": "説く",
    "reading": "とく",
    "meaning": "to explain, to advocate",
    "level": "3"
  },
  {
    "word": "綴じる",
    "reading": "とじる",
    "meaning": "to bind, to file",
    "level": "3"
  },
  {
    "word": "供",
    "reading": "とも",
    "meaning": "accompanying, attendant, companion, retinue",
    "level": "3"
  },
  {
    "word": "並",
    "reading": "なみ",
    "meaning": "medium (e.g., food serving size, quality, price, etc.), ordinary",
    "level": "3"
  },
  {
    "word": "慣らす",
    "reading": "ならす",
    "meaning": "to accustom",
    "level": "3"
  },
  {
    "word": "馴らす",
    "reading": "ならす",
    "meaning": "to domesticate, to tame",
    "level": "3"
  },
  {
    "word": "難",
    "reading": "なん",
    "meaning": "difficulty, hardships, defect",
    "level": "3"
  },
  {
    "word": "音",
    "reading": "ね",
    "meaning": "sound, note",
    "level": "3"
  },
  {
    "word": "年鑑",
    "reading": "ねんかん",
    "meaning": "yearbook",
    "level": "3"
  },
  {
    "word": "脳",
    "reading": "のう",
    "meaning": "brain, memory",
    "level": "3"
  },
  {
    "word": "臨む",
    "reading": "のぞむ",
    "meaning": "to look out on, to face, to attend (function)",
    "level": "3"
  },
  {
    "word": "肺",
    "reading": "はい",
    "meaning": "lung",
    "level": "3"
  },
  {
    "word": "～敗",
    "reading": "はい",
    "meaning": "counter for loss, defeat",
    "level": "3"
  },
  {
    "word": "映える",
    "reading": "はえる",
    "meaning": "to shine, to look attractive, to look pretty",
    "level": "3"
  },
  {
    "word": "諮る",
    "reading": "はかる",
    "meaning": "to consult with, to confer",
    "level": "3"
  },
  {
    "word": "図る",
    "reading": "はかる",
    "meaning": "to plot, to attempt, to devise, to design, to refer A to B",
    "level": "3"
  },
  {
    "word": "生やす",
    "reading": "はやす",
    "meaning": "to grow, to cultivate, to wear beard",
    "level": "3"
  },
  {
    "word": "班",
    "reading": "はん",
    "meaning": "group, party, section (mil)",
    "level": "3"
  },
  {
    "word": "判",
    "reading": "はん",
    "meaning": "size (of paper or books)",
    "level": "3"
  },
  {
    "word": "版",
    "reading": "はん",
    "meaning": "edition",
    "level": "3"
  },
  {
    "word": "碑",
    "reading": "ひ",
    "meaning": "stone monument bearing an inscription",
    "level": "3"
  },
  {
    "word": "非行",
    "reading": "ひこう",
    "meaning": "delinquency, misconduct",
    "level": "3"
  },
  {
    "word": "票",
    "reading": "ひょう",
    "meaning": "label, ballot, sign",
    "level": "3"
  },
  {
    "word": "広まる",
    "reading": "ひろまる",
    "meaning": "to spread, to be propagated",
    "level": "3"
  },
  {
    "word": "深める",
    "reading": "ふかめる",
    "meaning": "to deepen, to heighten, to intensify",
    "level": "3"
  },
  {
    "word": "福",
    "reading": "ふく",
    "meaning": "good fortune",
    "level": "3"
  },
  {
    "word": "振り",
    "reading": "ふり",
    "meaning": "style, manner",
    "level": "3"
  },
  {
    "word": "経る",
    "reading": "へる",
    "meaning": "to pass, to elapse, to experience",
    "level": "3"
  },
  {
    "word": "保護",
    "reading": "ほご",
    "meaning": "care, protection, shelter",
    "level": "3"
  },
  {
    "word": "保障",
    "reading": "ほしょう",
    "meaning": "guarantee, security, warranty",
    "level": "3"
  },
  {
    "word": "補償",
    "reading": "ほしょう",
    "meaning": "compensation, reparation",
    "level": "3"
  },
  {
    "word": "ほっと",
    "reading": "ほっと",
    "meaning": "feel relieved",
    "level": "3"
  },
  {
    "word": "前もって",
    "reading": "まえもって",
    "meaning": "in advance, beforehand, previously",
    "level": "3"
  },
  {
    "word": "膜",
    "reading": "まく",
    "meaning": "membrane, film",
    "level": "3"
  },
  {
    "word": "マスコミ",
    "reading": "マスコミ",
    "meaning": "mass communication",
    "level": "3"
  },
  {
    "word": "股",
    "reading": "また",
    "meaning": "thigh, crotch",
    "level": "3"
  },
  {
    "word": "末",
    "reading": "まつ",
    "meaning": "the end of",
    "level": "3"
  },
  {
    "word": "マッサージ",
    "reading": "マッサージ",
    "meaning": "massage",
    "level": "3"
  },
  {
    "word": "見掛ける",
    "reading": "みかける",
    "meaning": "to (happen to see), to notice, to catch sight of",
    "level": "3"
  },
  {
    "word": "捲る",
    "reading": "めくる",
    "meaning": "to turn over, to turn pages of a book",
    "level": "3"
  },
  {
    "word": "メッセージ",
    "reading": "メッセージ",
    "meaning": "message",
    "level": "3"
  },
  {
    "word": "野党",
    "reading": "やとう",
    "meaning": "opposition party",
    "level": "3"
  },
  {
    "word": "優",
    "reading": "ゆう",
    "meaning": "superiority, high grade",
    "level": "3"
  },
  {
    "word": "有機",
    "reading": "ゆうき",
    "meaning": "organic",
    "level": "3"
  },
  {
    "word": "世",
    "reading": "よ",
    "meaning": "world, society, generation",
    "level": "3"
  },
  {
    "word": "良い",
    "reading": "よい",
    "meaning": "good, nice",
    "level": "3"
  },
  {
    "word": "予想",
    "reading": "よそう",
    "meaning": "expectation, anticipation, prediction",
    "level": "3"
  },
  {
    "word": "弱まる",
    "reading": "よわまる",
    "meaning": "to weaken, to be emaciated, to be dejected",
    "level": "3"
  },
  {
    "word": "弱める",
    "reading": "よわめる",
    "meaning": "to weaken",
    "level": "3"
  },
  {
    "word": "ラベル",
    "reading": "ラベル",
    "meaning": "label",
    "level": "3"
  },
  {
    "word": "ルール",
    "reading": "ルール",
    "meaning": "rule",
    "level": "3"
  },
  {
    "word": "枠",
    "reading": "わく",
    "meaning": "frame, slide",
    "level": "3"
  },
  {
    "word": "踏む",
    "reading": "ふむ",
    "meaning": "to step on, to tread on",
    "level": "4"
  },
  {
    "word": "～区",
    "reading": "～く",
    "meaning": "~ district, ~ ward, ~ borough",
    "level": "4"
  },
  {
    "word": "すっと",
    "reading": "すっと",
    "meaning": "straight, quickly",
    "level": "4"
  },
  {
    "word": "盗む",
    "reading": "ぬすむ",
    "meaning": "to steal; to rob",
    "level": "4"
  },
  {
    "word": "大抵",
    "reading": "たいてい",
    "meaning": "generally, usually",
    "level": "4"
  },
  {
    "word": "とうとう",
    "reading": "とうとう",
    "meaning": "finally, at last",
    "level": "4"
  },
  {
    "word": "ガソリン",
    "reading": "ガソリン",
    "meaning": "gasoline, petrol",
    "level": "4"
  },
  {
    "word": "鳴る",
    "reading": "なる",
    "meaning": "to sound, to ring (v.i.)",
    "level": "4"
  },
  {
    "word": "しっかり",
    "reading": "しっかり",
    "meaning": "firmly, steady",
    "level": "4"
  },
  {
    "word": "生きる",
    "reading": "いきる",
    "meaning": "to live",
    "level": "4"
  },
  {
    "word": "苦い",
    "reading": "にがい",
    "meaning": "bitter",
    "level": "4"
  },
  {
    "word": "沸く",
    "reading": "わく",
    "meaning": "to boil, to grow hot",
    "level": "4"
  },
  {
    "word": "意見",
    "reading": "いけん",
    "meaning": "opinion, view, idea",
    "level": "4"
  },
  {
    "word": "やはり; やっぱり",
    "reading": "やはり; やっぱり",
    "meaning": "as I thought, absolutely",
    "level": "4"
  },
  {
    "word": "漫画",
    "reading": "まんが",
    "meaning": "comic (book), cartoon",
    "level": "4"
  },
  {
    "word": "ステレオ",
    "reading": "ステレオ",
    "meaning": "stereo",
    "level": "4"
  },
  {
    "word": "医学",
    "reading": "いがく",
    "meaning": "medical science",
    "level": "4"
  },
  {
    "word": "テキスト",
    "reading": "テキスト",
    "meaning": "text; text book",
    "level": "4"
  },
  {
    "word": "～月",
    "reading": "～つき",
    "meaning": "month",
    "level": "4"
  },
  {
    "word": "折る",
    "reading": "おる",
    "meaning": "to snap, to break; to bend",
    "level": "4"
  },
  {
    "word": "～会",
    "reading": "～かい",
    "meaning": "~ meeting",
    "level": "4"
  },
  {
    "word": "うかがう",
    "reading": "うかがう",
    "meaning": "to ask",
    "level": "4"
  },
  {
    "word": "聞こえる",
    "reading": "きこえる",
    "meaning": "to be heard, to be audible",
    "level": "4"
  },
  {
    "word": "僕",
    "reading": "ぼく",
    "meaning": "I (used by men towards those of equal or lower status)",
    "level": "4"
  },
  {
    "word": "必ず",
    "reading": "かならず",
    "meaning": "surely, certainly",
    "level": "4"
  },
  {
    "word": "壊す",
    "reading": "こわす",
    "meaning": "to break, to break down",
    "level": "4"
  },
  {
    "word": "怒る",
    "reading": "おこる",
    "meaning": "to get angry; to scold angrily",
    "level": "4"
  },
  {
    "word": "床屋",
    "reading": "とこや",
    "meaning": "barber's (shop)",
    "level": "4"
  },
  {
    "word": "オートバイ",
    "reading": "オートバイ",
    "meaning": "motorcycle (lit: auto-bi(ke))",
    "level": "4"
  },
  {
    "word": "運動",
    "reading": "うんどうする",
    "meaning": "exercise",
    "level": "4"
  },
  {
    "word": "止む",
    "reading": "やむ",
    "meaning": "to cease, to stop",
    "level": "4"
  },
  {
    "word": "もし",
    "reading": "もし",
    "meaning": "if",
    "level": "4"
  },
  {
    "word": "表",
    "reading": "おもて",
    "meaning": "surface; front; outside",
    "level": "4"
  },
  {
    "word": "大学生",
    "reading": "だいがくせい",
    "meaning": "college student, university student",
    "level": "4"
  },
  {
    "word": "運転手",
    "reading": "うんてんしゅ",
    "meaning": "driver (by occupation)",
    "level": "4"
  },
  {
    "word": "予習",
    "reading": "よしゅう",
    "meaning": "preparation of lessons (for class)",
    "level": "4"
  },
  {
    "word": "心配",
    "reading": "しんぱいする",
    "meaning": "worry, concern",
    "level": "4"
  },
  {
    "word": "別",
    "reading": "べつ",
    "meaning": "distinction, different",
    "level": "4"
  },
  {
    "word": "非常に",
    "reading": "ひじょうに",
    "meaning": "extremely; very",
    "level": "4"
  },
  {
    "word": "お宅",
    "reading": "おたく",
    "meaning": "(someone else's) house; home -- polite word for 家 (いえ) --",
    "level": "4"
  },
  {
    "word": "柔らかい",
    "reading": "やわらかい",
    "meaning": "soft (in reference to texture), tender",
    "level": "4"
  },
  {
    "word": "拾う",
    "reading": "ひろう",
    "meaning": "to pick up (something), to find",
    "level": "4"
  },
  {
    "word": "～ございます",
    "reading": "～ございます",
    "meaning": "to be (polite), to exist",
    "level": "4"
  },
  {
    "word": "気",
    "reading": "き",
    "meaning": "spirit, mood",
    "level": "4"
  },
  {
    "word": "比べる",
    "reading": "くらべる",
    "meaning": "to compare",
    "level": "4"
  },
  {
    "word": "ほとんど",
    "reading": "ほとんど",
    "meaning": "mostly, almost",
    "level": "4"
  },
  {
    "word": "つもり",
    "reading": "つもり",
    "meaning": "intention, plan",
    "level": "4"
  },
  {
    "word": "郊外",
    "reading": "こうがい",
    "meaning": "suburb, outskirts",
    "level": "4"
  },
  {
    "word": "だめ",
    "reading": "だめ",
    "meaning": "useless, no good, hopeless",
    "level": "4"
  },
  {
    "word": "売り場",
    "reading": "うりば",
    "meaning": "place where things are sold",
    "level": "4"
  },
  {
    "word": "正月",
    "reading": "しょうがつ",
    "meaning": "New Year, New Year's Day",
    "level": "4"
  },
  {
    "word": "規則",
    "reading": "きそく",
    "meaning": "rule, regulation",
    "level": "4"
  },
  {
    "word": "うん",
    "reading": "うん",
    "meaning": "yes (informal), all right (ok)",
    "level": "4"
  },
  {
    "word": "発音",
    "reading": "はつおん",
    "meaning": "pronunciation",
    "level": "4"
  },
  {
    "word": "焼く",
    "reading": "やく",
    "meaning": "to bake, to grill",
    "level": "4"
  },
  {
    "word": "屋上",
    "reading": "おくじょう",
    "meaning": "rooftop",
    "level": "4"
  },
  {
    "word": "失礼",
    "reading": "しつれい",
    "meaning": "discourtesy, impoliteness; Excuse me",
    "level": "4"
  },
  {
    "word": "ごみ",
    "reading": "ごみ",
    "meaning": "trash, garbage",
    "level": "4"
  },
  {
    "word": "アフリカ",
    "reading": "アフリカ",
    "meaning": "Africa",
    "level": "4"
  },
  {
    "word": "点",
    "reading": "てん",
    "meaning": "mark, score, grade; point, dot",
    "level": "4"
  },
  {
    "word": "一生懸命",
    "reading": "いっしょうけんめい",
    "meaning": "very hard (as in \"to work hard\"), with utmost effort",
    "level": "4"
  },
  {
    "word": "今度",
    "reading": "こんど",
    "meaning": "now, this time, near future, one of these days, next time",
    "level": "4"
  },
  {
    "word": "機会",
    "reading": "きかい",
    "meaning": "chance, opportunity",
    "level": "4"
  },
  {
    "word": "建てる",
    "reading": "たてる",
    "meaning": "to build",
    "level": "4"
  },
  {
    "word": "複雑",
    "reading": "ふくざつ",
    "meaning": "complexity, complication",
    "level": "4"
  },
  {
    "word": "彼",
    "reading": "かれ",
    "meaning": "he, boyfriend",
    "level": "4"
  },
  {
    "word": "いらっしゃる",
    "reading": "いらっしゃる",
    "meaning": "-- honorific expression for いく, くる, and いる --",
    "level": "4"
  },
  {
    "word": "布団",
    "reading": "ふとん",
    "meaning": "futon",
    "level": "4"
  },
  {
    "word": "大事",
    "reading": "だいじ",
    "meaning": "important, valuable, serious matter",
    "level": "4"
  },
  {
    "word": "贈り物",
    "reading": "おくりもの",
    "meaning": "a gift; a present",
    "level": "4"
  },
  {
    "word": "泥棒",
    "reading": "どろぼう",
    "meaning": "thief; burglar",
    "level": "4"
  },
  {
    "word": "～製",
    "reading": "～せい",
    "meaning": "made in ~",
    "level": "4"
  },
  {
    "word": "注意",
    "reading": "ちゅうい",
    "meaning": "caution, attention",
    "level": "4"
  },
  {
    "word": "台風",
    "reading": "たいふう",
    "meaning": "typhoon",
    "level": "4"
  },
  {
    "word": "日",
    "reading": "ひ",
    "meaning": "sun, sunshine, day",
    "level": "4"
  },
  {
    "word": "～軒",
    "reading": "～けん",
    "meaning": "counter for houses",
    "level": "4"
  },
  {
    "word": "そう",
    "reading": "そう",
    "meaning": "really, (is that) so; yes, right",
    "level": "4"
  },
  {
    "word": "通る",
    "reading": "とおる",
    "meaning": "to pass (by), to go through",
    "level": "4"
  },
  {
    "word": "過ぎる",
    "reading": "すぎる",
    "meaning": "to exceed, to go beyond",
    "level": "4"
  },
  {
    "word": "レポート; リポート",
    "reading": "レポート; リポート",
    "meaning": "report",
    "level": "4"
  },
  {
    "word": "葉",
    "reading": "は",
    "meaning": "leaf",
    "level": "4"
  },
  {
    "word": "必要",
    "reading": "ひつよう",
    "meaning": "necessary",
    "level": "4"
  },
  {
    "word": "課長",
    "reading": "かちょう",
    "meaning": "section manager",
    "level": "4"
  },
  {
    "word": "地震",
    "reading": "じしん",
    "meaning": "earthquake",
    "level": "4"
  },
  {
    "word": "すると",
    "reading": "すると",
    "meaning": "and, then",
    "level": "4"
  },
  {
    "word": "止める",
    "reading": "やめる",
    "meaning": "to end, to stop",
    "level": "4"
  },
  {
    "word": "ガラス",
    "reading": "ガラス",
    "meaning": "glass, pane",
    "level": "4"
  },
  {
    "word": "～学部",
    "reading": "～がくぶ",
    "meaning": "department of a university",
    "level": "4"
  },
  {
    "word": "厳しい",
    "reading": "きびしい",
    "meaning": "hard; rigorous; strict",
    "level": "4"
  },
  {
    "word": "エスカレーター",
    "reading": "エスカレーター",
    "meaning": "escalator",
    "level": "4"
  },
  {
    "word": "人口",
    "reading": "じんこう",
    "meaning": "population",
    "level": "4"
  },
  {
    "word": "月",
    "reading": "つき",
    "meaning": "moon",
    "level": "4"
  },
  {
    "word": "絹",
    "reading": "きぬ",
    "meaning": "silk",
    "level": "4"
  },
  {
    "word": "ちっとも",
    "reading": "ちっとも",
    "meaning": "not at all (neg. verb)",
    "level": "4"
  },
  {
    "word": "深い",
    "reading": "ふかい",
    "meaning": "deep, profound",
    "level": "4"
  },
  {
    "word": "壊れる",
    "reading": "こわれる",
    "meaning": "to be broken, to break",
    "level": "4"
  },
  {
    "word": "揺れる",
    "reading": "ゆれる",
    "meaning": "to shake, to sway",
    "level": "4"
  },
  {
    "word": "落る",
    "reading": "おちる",
    "meaning": "to fall, to drop",
    "level": "4"
  },
  {
    "word": "できるだけ",
    "reading": "できるだけ",
    "meaning": "if at all possible, as much as possible",
    "level": "4"
  },
  {
    "word": "悲しい",
    "reading": "かなしい",
    "meaning": "sad, sorrowful",
    "level": "4"
  },
  {
    "word": "中学校",
    "reading": "ちゅうがっこう",
    "meaning": "junior high school pupil",
    "level": "4"
  },
  {
    "word": "ガス",
    "reading": "ガス",
    "meaning": "gas",
    "level": "4"
  },
  {
    "word": "祈る",
    "reading": "いのる",
    "meaning": "to pray; to wish",
    "level": "4"
  },
  {
    "word": "盛ん",
    "reading": "さかん",
    "meaning": "prosperous, active, thriving",
    "level": "4"
  },
  {
    "word": "アルバイト",
    "reading": "アルバイト",
    "meaning": "part-time job",
    "level": "4"
  },
  {
    "word": "起こす",
    "reading": "おこす",
    "meaning": "to wake (someone) up",
    "level": "4"
  },
  {
    "word": "致す",
    "reading": "いたす",
    "meaning": "-- extra-modest expression for する --",
    "level": "4"
  },
  {
    "word": "噛む",
    "reading": "かむ",
    "meaning": "to bite, to chew",
    "level": "4"
  },
  {
    "word": "赤ちゃん",
    "reading": "あかちゃん",
    "meaning": "baby, infant",
    "level": "4"
  },
  {
    "word": "浅い",
    "reading": "あさい",
    "meaning": "shallow, superficial",
    "level": "4"
  },
  {
    "word": "嘘",
    "reading": "うそ",
    "meaning": "lie",
    "level": "4"
  },
  {
    "word": "小説",
    "reading": "しょうせつ",
    "meaning": "novel",
    "level": "4"
  },
  {
    "word": "親",
    "reading": "おや",
    "meaning": "a parent",
    "level": "4"
  },
  {
    "word": "それに",
    "reading": "それに",
    "meaning": "moreover; besides",
    "level": "4"
  },
  {
    "word": "西洋",
    "reading": "せいよう",
    "meaning": "the West, Western countries",
    "level": "4"
  },
  {
    "word": "思う",
    "reading": "おもう",
    "meaning": "to think, to feel",
    "level": "4"
  },
  {
    "word": "パート (タイム)",
    "reading": "パート (タイム)",
    "meaning": "part time (esp. female part time employees)",
    "level": "4"
  },
  {
    "word": "時代",
    "reading": "じだい",
    "meaning": "age, period, epoch, era",
    "level": "4"
  },
  {
    "word": "申し上げる",
    "reading": "もうしあげる",
    "meaning": "(humble)to say, to tell",
    "level": "4"
  },
  {
    "word": "～式",
    "reading": "～しき",
    "meaning": "~ ceremony; ~ style",
    "level": "4"
  },
  {
    "word": "出席",
    "reading": "しゅっせきする",
    "meaning": "attendance",
    "level": "4"
  },
  {
    "word": "～家",
    "reading": "～か",
    "meaning": "person who is specialized in ~",
    "level": "4"
  },
  {
    "word": "迎える",
    "reading": "むかえる",
    "meaning": "to welcome; to meet; to greet",
    "level": "4"
  },
  {
    "word": "触る",
    "reading": "さわる",
    "meaning": "to touch, to feel",
    "level": "4"
  },
  {
    "word": "建て",
    "reading": "～だて",
    "meaning": "~ storied, separate housing",
    "level": "4"
  },
  {
    "word": "社長",
    "reading": "しゃちょう",
    "meaning": "president of a company",
    "level": "4"
  },
  {
    "word": "動物園",
    "reading": "どうぶつえん",
    "meaning": "zoo",
    "level": "4"
  },
  {
    "word": "捕まえる",
    "reading": "つかまえる",
    "meaning": "to catch, to arrest",
    "level": "4"
  },
  {
    "word": "季節",
    "reading": "きせつ",
    "meaning": "season (in reference to weather)",
    "level": "4"
  },
  {
    "word": "寄る",
    "reading": "よる",
    "meaning": "to stop by",
    "level": "4"
  },
  {
    "word": "決まる",
    "reading": "きまる",
    "meaning": "to be set; fixed (v.i.)",
    "level": "4"
  },
  {
    "word": "開く",
    "reading": "ひらく",
    "meaning": "to open; to hold (an event)",
    "level": "4"
  },
  {
    "word": "逃げる",
    "reading": "にげる",
    "meaning": "to escape, to run away",
    "level": "4"
  },
  {
    "word": "だから",
    "reading": "だから",
    "meaning": "so; therefore",
    "level": "4"
  },
  {
    "word": "残念",
    "reading": "ざんねん",
    "meaning": "regret; regrettable",
    "level": "4"
  },
  {
    "word": "畳",
    "reading": "たたみ",
    "meaning": "tatami mat (Japanese straw mat)",
    "level": "4"
  },
  {
    "word": "丁寧",
    "reading": "ていねい",
    "meaning": "polite, courteous, careful",
    "level": "4"
  },
  {
    "word": "地理",
    "reading": "ちり",
    "meaning": "geography",
    "level": "4"
  },
  {
    "word": "さっき",
    "reading": "さっき",
    "meaning": "a little while ago",
    "level": "4"
  },
  {
    "word": "怖い",
    "reading": "こわい",
    "meaning": "scary, frightening",
    "level": "4"
  },
  {
    "word": "包む",
    "reading": "つつむ",
    "meaning": "to wrap, to cover",
    "level": "4"
  },
  {
    "word": "なるべく",
    "reading": "なるべく",
    "meaning": "if possible, as much as possible",
    "level": "4"
  },
  {
    "word": "無理",
    "reading": "むり",
    "meaning": "unreasonable, impossible",
    "level": "4"
  },
  {
    "word": "サンドイッチ",
    "reading": "サンドイッチ",
    "meaning": "sandwich",
    "level": "4"
  },
  {
    "word": "会議室",
    "reading": "かいぎしつ",
    "meaning": "conference room",
    "level": "4"
  },
  {
    "word": "品物",
    "reading": "しなもの",
    "meaning": "goods",
    "level": "4"
  },
  {
    "word": "人形",
    "reading": "にんぎょう",
    "meaning": "doll, figure",
    "level": "4"
  },
  {
    "word": "利用",
    "reading": "りよう",
    "meaning": "use, utilization",
    "level": "4"
  },
  {
    "word": "飾る",
    "reading": "かざる",
    "meaning": "to decorate, to adorn",
    "level": "4"
  },
  {
    "word": "止める",
    "reading": "とめる",
    "meaning": "to stop (something)",
    "level": "4"
  },
  {
    "word": "恥ずかしい",
    "reading": "はずかしい",
    "meaning": "ashamed, embarrassed",
    "level": "4"
  },
  {
    "word": "いくら～ても",
    "reading": "いくら～ても",
    "meaning": "however much one may ~",
    "level": "4"
  },
  {
    "word": "用事",
    "reading": "ようじ",
    "meaning": "business to take care of; tasks; errands",
    "level": "4"
  },
  {
    "word": "ビル",
    "reading": "ビル",
    "meaning": "(abbr.) building",
    "level": "4"
  },
  {
    "word": "けんかする",
    "reading": "けんかする",
    "meaning": "quarrel",
    "level": "4"
  },
  {
    "word": "頑張る",
    "reading": "がんばる",
    "meaning": "to try one's best, to try hard, to persist",
    "level": "4"
  },
  {
    "word": "投げる",
    "reading": "なげる",
    "meaning": "to pitch, to cast away",
    "level": "4"
  },
  {
    "word": "故障",
    "reading": "こしょうする",
    "meaning": "breakdown",
    "level": "4"
  },
  {
    "word": "力",
    "reading": "ちから",
    "meaning": "strength, power",
    "level": "4"
  },
  {
    "word": "受ける",
    "reading": "うける",
    "meaning": "to take (an examination, interview, etc.); to receive",
    "level": "4"
  },
  {
    "word": "気分",
    "reading": "きぶん",
    "meaning": "feeling, mood",
    "level": "4"
  },
  {
    "word": "間違える",
    "reading": "まちがえる",
    "meaning": "to make a mistake",
    "level": "4"
  },
  {
    "word": "そんな",
    "reading": "そんな",
    "meaning": "such, like that, that sort of",
    "level": "4"
  },
  {
    "word": "星",
    "reading": "ほし",
    "meaning": "star",
    "level": "4"
  },
  {
    "word": "場合",
    "reading": "ばあい",
    "meaning": "case, situation",
    "level": "4"
  },
  {
    "word": "やっと",
    "reading": "やっと",
    "meaning": "at last, finally",
    "level": "4"
  },
  {
    "word": "足りる",
    "reading": "たりる",
    "meaning": "to be sufficient; to be enough",
    "level": "4"
  },
  {
    "word": "行う",
    "reading": "おこなう",
    "meaning": "to carry out; to conduct (typically used in written language)",
    "level": "4"
  },
  {
    "word": "ぶどう",
    "reading": "ぶどう",
    "meaning": "grapes",
    "level": "4"
  },
  {
    "word": "無くなる",
    "reading": "なくなる",
    "meaning": "to disappear, to get lost",
    "level": "4"
  },
  {
    "word": "準備",
    "reading": "じゅんびする",
    "meaning": "prepare",
    "level": "4"
  },
  {
    "word": "世界",
    "reading": "せかい",
    "meaning": "world",
    "level": "4"
  },
  {
    "word": "住所",
    "reading": "じゅうしょ",
    "meaning": "address; place of residence",
    "level": "4"
  },
  {
    "word": "再来月",
    "reading": "さらいげつ",
    "meaning": "the month after next",
    "level": "4"
  },
  {
    "word": "林",
    "reading": "はやし",
    "meaning": "woods, forest",
    "level": "4"
  },
  {
    "word": "倍",
    "reading": "ばい",
    "meaning": "double",
    "level": "4"
  },
  {
    "word": "痩せる",
    "reading": "やせる",
    "meaning": "to lose weight",
    "level": "4"
  },
  {
    "word": "線",
    "reading": "せん",
    "meaning": "line, wire",
    "level": "4"
  },
  {
    "word": "戦争",
    "reading": "せんそう",
    "meaning": "war",
    "level": "4"
  },
  {
    "word": "決める",
    "reading": "きめる",
    "meaning": "to decide (v.t.)",
    "level": "4"
  },
  {
    "word": "調べる",
    "reading": "しらべる",
    "meaning": "to check; to look up; to inquire; to search",
    "level": "4"
  },
  {
    "word": "寝坊",
    "reading": "ねぼう",
    "meaning": "sleeping in late",
    "level": "4"
  },
  {
    "word": "パパ",
    "reading": "パパ",
    "meaning": "papa, daddy",
    "level": "4"
  },
  {
    "word": "光る",
    "reading": "ひかる",
    "meaning": "to shine, to glitter",
    "level": "4"
  },
  {
    "word": "夫",
    "reading": "おっと",
    "meaning": "husband",
    "level": "4"
  },
  {
    "word": "雲",
    "reading": "くも",
    "meaning": "cloud",
    "level": "4"
  },
  {
    "word": "坂",
    "reading": "さか",
    "meaning": "slope, hill",
    "level": "4"
  },
  {
    "word": "～(て) しまう",
    "reading": "～(て) しまう",
    "meaning": "to end up ~",
    "level": "4"
  },
  {
    "word": "飛行場",
    "reading": "ひこうじょう",
    "meaning": "airport",
    "level": "4"
  },
  {
    "word": "柔道",
    "reading": "じゅうどう",
    "meaning": "judo",
    "level": "4"
  },
  {
    "word": "決して",
    "reading": "けっして",
    "meaning": "never",
    "level": "4"
  },
  {
    "word": "事務所",
    "reading": "じむしょ",
    "meaning": "office",
    "level": "4"
  },
  {
    "word": "連絡",
    "reading": "れんらく",
    "meaning": "communication, contact, connection",
    "level": "4"
  },
  {
    "word": "小学校",
    "reading": "しょうがっこう",
    "meaning": "elementary school",
    "level": "4"
  },
  {
    "word": "客",
    "reading": "きゃく",
    "meaning": "guest, customer",
    "level": "4"
  },
  {
    "word": "昔",
    "reading": "むかし",
    "meaning": "old days; past",
    "level": "4"
  },
  {
    "word": "美しい",
    "reading": "うつくしい",
    "meaning": "beautiful, lovely",
    "level": "4"
  },
  {
    "word": "捨てる",
    "reading": "すてる",
    "meaning": "throw away (trash), dump, discard",
    "level": "4"
  },
  {
    "word": "なさる",
    "reading": "なさる",
    "meaning": "-- honorific expression for する --",
    "level": "4"
  },
  {
    "word": "事",
    "reading": "こと",
    "meaning": "thing(s), matter(s), fact",
    "level": "4"
  },
  {
    "word": "どんどん",
    "reading": "どんどん",
    "meaning": "quickly and steadily; at a rapid pace",
    "level": "4"
  },
  {
    "word": "試合",
    "reading": "しあい",
    "meaning": "match, game, competition",
    "level": "4"
  },
  {
    "word": "適当",
    "reading": "てきとう",
    "meaning": "fitness, suitability",
    "level": "4"
  },
  {
    "word": "素晴らしい",
    "reading": "すばらしい",
    "meaning": "wonderful; terrific",
    "level": "4"
  },
  {
    "word": "美術館",
    "reading": "びじゅつかん",
    "meaning": "art gallery, art museum",
    "level": "4"
  },
  {
    "word": "文法",
    "reading": "ぶんぽう",
    "meaning": "grammar",
    "level": "4"
  },
  {
    "word": "終わり",
    "reading": "おわり",
    "meaning": "end",
    "level": "4"
  },
  {
    "word": "壁",
    "reading": "かべ",
    "meaning": "wall",
    "level": "4"
  },
  {
    "word": "一度",
    "reading": "いちど",
    "meaning": "once, one time",
    "level": "4"
  },
  {
    "word": "お礼",
    "reading": "おれい",
    "meaning": "expression of gratitude; thanking; gift of appreciation; bow",
    "level": "4"
  },
  {
    "word": "親切",
    "reading": "しんせつ",
    "meaning": "kindness",
    "level": "4"
  },
  {
    "word": "知らせる",
    "reading": "しらせる",
    "meaning": "to notify",
    "level": "4"
  },
  {
    "word": "歯医者",
    "reading": "はいしゃ",
    "meaning": "dentist",
    "level": "4"
  },
  {
    "word": "熱心",
    "reading": "ねっしん",
    "meaning": "enthusiasm",
    "level": "4"
  },
  {
    "word": "始める",
    "reading": "はじめる",
    "meaning": "to start, to begin",
    "level": "4"
  },
  {
    "word": "もらう",
    "reading": "もらう",
    "meaning": "to receive",
    "level": "4"
  },
  {
    "word": "泣く",
    "reading": "なく",
    "meaning": "to cry",
    "level": "4"
  },
  {
    "word": "治る",
    "reading": "なおる",
    "meaning": "to get better; to recover from illness (v.i.)",
    "level": "4"
  },
  {
    "word": "熱",
    "reading": "ねつ",
    "meaning": "fever, temperature",
    "level": "4"
  },
  {
    "word": "お祭り",
    "reading": "おまつり",
    "meaning": "festival",
    "level": "4"
  },
  {
    "word": "水道",
    "reading": "すいどう",
    "meaning": "water service, water line",
    "level": "4"
  },
  {
    "word": "匂い",
    "reading": "におい",
    "meaning": "odor, smell",
    "level": "4"
  },
  {
    "word": "ベル",
    "reading": "ベル",
    "meaning": "bell",
    "level": "4"
  },
  {
    "word": "赤ん坊",
    "reading": "あかんぼう",
    "meaning": "baby",
    "level": "4"
  },
  {
    "word": "おかしい",
    "reading": "おかしい",
    "meaning": "strange; odd; funny",
    "level": "4"
  },
  {
    "word": "事故",
    "reading": "じこ",
    "meaning": "accident",
    "level": "4"
  },
  {
    "word": "変",
    "reading": "へん",
    "meaning": "strange, odd",
    "level": "4"
  },
  {
    "word": "辞典",
    "reading": "じてん",
    "meaning": "encyclopedia, reference book",
    "level": "4"
  },
  {
    "word": "残る",
    "reading": "のこる",
    "meaning": "to remain (v.i.), to be left",
    "level": "4"
  },
  {
    "word": "立てる",
    "reading": "たてる",
    "meaning": "to stand (something) up, to erect (something)",
    "level": "4"
  },
  {
    "word": "くれる",
    "reading": "くれる",
    "meaning": "to give, to do for",
    "level": "4"
  },
  {
    "word": "～員",
    "reading": "～いん",
    "meaning": "member of ~",
    "level": "4"
  },
  {
    "word": "原因",
    "reading": "げんいん",
    "meaning": "cause, origin, source",
    "level": "4"
  },
  {
    "word": "驚く",
    "reading": "おどろく",
    "meaning": "to be surprised, to be astonished",
    "level": "4"
  },
  {
    "word": "いただく",
    "reading": "頂く",
    "meaning": "-- extra-modest expression for たべる and のむ; humble expression for もらう --",
    "level": "4"
  },
  {
    "word": "祖母",
    "reading": "そぼ",
    "meaning": "grandmother",
    "level": "4"
  },
  {
    "word": "場所",
    "reading": "ばしょ",
    "meaning": "place, location",
    "level": "4"
  },
  {
    "word": "答",
    "reading": "こたえ",
    "meaning": "answer, response",
    "level": "4"
  },
  {
    "word": "もちろん",
    "reading": "もちろん",
    "meaning": "certainly, of course",
    "level": "4"
  },
  {
    "word": "漬ける",
    "reading": "つける",
    "meaning": "to soak, to moisten, to pickle",
    "level": "4"
  },
  {
    "word": "受付",
    "reading": "うけつけ",
    "meaning": "reception(ist) desk",
    "level": "4"
  },
  {
    "word": "内",
    "reading": "うち",
    "meaning": "within, inside",
    "level": "4"
  },
  {
    "word": "スクリーン",
    "reading": "スクリーン",
    "meaning": "screen",
    "level": "4"
  },
  {
    "word": "増える",
    "reading": "ふえる",
    "meaning": "to increase, to multiply",
    "level": "4"
  },
  {
    "word": "または",
    "reading": "または",
    "meaning": "or, otherwise",
    "level": "4"
  },
  {
    "word": "けがする",
    "reading": "けがする",
    "meaning": "injury (to animate object), hurt",
    "level": "4"
  },
  {
    "word": "以下",
    "reading": "いか",
    "meaning": "less than, below",
    "level": "4"
  },
  {
    "word": "選ぶ",
    "reading": "えらぶ",
    "meaning": "to choose; to select",
    "level": "4"
  },
  {
    "word": "～ばかり",
    "reading": "～ばかり",
    "meaning": "just did ~, only",
    "level": "4"
  },
  {
    "word": "心",
    "reading": "こころ",
    "meaning": "heart, mind",
    "level": "4"
  },
  {
    "word": "～だす",
    "reading": "～だす",
    "meaning": "to start doing ~",
    "level": "4"
  },
  {
    "word": "サラダ",
    "reading": "サラダ",
    "meaning": "salad",
    "level": "4"
  },
  {
    "word": "届ける",
    "reading": "とどける",
    "meaning": "to deliver (v.t.)",
    "level": "4"
  },
  {
    "word": "挨拶",
    "reading": "あいさつする",
    "meaning": "greet(ing)",
    "level": "4"
  },
  {
    "word": "景色",
    "reading": "けしき",
    "meaning": "scenery, landscape",
    "level": "4"
  },
  {
    "word": "確か",
    "reading": "たしか",
    "meaning": "if I remember correctly; certain, definite",
    "level": "4"
  },
  {
    "word": "ステーキ",
    "reading": "ステーキ",
    "meaning": "steak",
    "level": "4"
  },
  {
    "word": "食料品",
    "reading": "しょくりょうひん",
    "meaning": "foodstuff, groceries",
    "level": "4"
  },
  {
    "word": "森",
    "reading": "もり",
    "meaning": "forest",
    "level": "4"
  },
  {
    "word": "以内",
    "reading": "いない",
    "meaning": "within, less (no more) than",
    "level": "4"
  },
  {
    "word": "予定",
    "reading": "よてい",
    "meaning": "plans, arrangement, schedule",
    "level": "4"
  },
  {
    "word": "オーバー",
    "reading": "オーバー",
    "meaning": "overcoat; over, exceeding, exaggeration",
    "level": "4"
  },
  {
    "word": "乾く",
    "reading": "かわく",
    "meaning": "to get dry",
    "level": "4"
  },
  {
    "word": "石",
    "reading": "いし",
    "meaning": "stone",
    "level": "4"
  },
  {
    "word": "思い出す",
    "reading": "おもいだす",
    "meaning": "to recall, to remember",
    "level": "4"
  },
  {
    "word": "踊る",
    "reading": "おどる",
    "meaning": "to dance",
    "level": "4"
  },
  {
    "word": "細かい",
    "reading": "こまかい",
    "meaning": "small; fine, minute",
    "level": "4"
  },
  {
    "word": "塗る",
    "reading": "ぬる",
    "meaning": "to paint, to plaster",
    "level": "4"
  },
  {
    "word": "ご主人",
    "reading": "ごしゅじん",
    "meaning": "(your, her) husband",
    "level": "4"
  },
  {
    "word": "珍しい",
    "reading": "めずらしい",
    "meaning": "unusual, rare",
    "level": "4"
  },
  {
    "word": "用",
    "reading": "よう",
    "meaning": "errand, task, business (to take care of)",
    "level": "4"
  },
  {
    "word": "公務員",
    "reading": "こうむいん",
    "meaning": "government worker, public servant",
    "level": "4"
  },
  {
    "word": "お嬢さん",
    "reading": "おじょうさん",
    "meaning": "(someone's) daughter (polite)",
    "level": "4"
  },
  {
    "word": "用意",
    "reading": "ようい",
    "meaning": "preparation",
    "level": "4"
  },
  {
    "word": "探す",
    "reading": "さがす",
    "meaning": "to search, to seek, to look for",
    "level": "4"
  },
  {
    "word": "形",
    "reading": "かたち",
    "meaning": "shape",
    "level": "4"
  },
  {
    "word": "運転",
    "reading": "うんてんする",
    "meaning": "driving",
    "level": "4"
  },
  {
    "word": "すっかり",
    "reading": "すっかり",
    "meaning": "all, completely",
    "level": "4"
  },
  {
    "word": "アナウンサー",
    "reading": "アナウンサー",
    "meaning": "announcer",
    "level": "4"
  },
  {
    "word": "お土産",
    "reading": "おみやげ",
    "meaning": "souvenir",
    "level": "4"
  },
  {
    "word": "消しゴム",
    "reading": "けしゴム",
    "meaning": "eraser",
    "level": "4"
  },
  {
    "word": "旅館",
    "reading": "りょかん",
    "meaning": "a Japanese inn",
    "level": "4"
  },
  {
    "word": "海岸",
    "reading": "かいがん",
    "meaning": "coast, seashore",
    "level": "4"
  },
  {
    "word": "寂しい",
    "reading": "さびしい",
    "meaning": "lonely, lonesome",
    "level": "4"
  },
  {
    "word": "火",
    "reading": "ひ",
    "meaning": "fire",
    "level": "4"
  },
  {
    "word": "育てる",
    "reading": "そだてる",
    "meaning": "to raise (v.t.); to bring up",
    "level": "4"
  },
  {
    "word": "味噌",
    "reading": "みそ",
    "meaning": "miso, bean paste",
    "level": "4"
  },
  {
    "word": "お祝い",
    "reading": "おいわい",
    "meaning": "congratulation, celebration",
    "level": "4"
  },
  {
    "word": "乗り物",
    "reading": "のりもの",
    "meaning": "vehicle",
    "level": "4"
  },
  {
    "word": "案内",
    "reading": "あんないする",
    "meaning": "information, guidance",
    "level": "4"
  },
  {
    "word": "通う",
    "reading": "かよう",
    "meaning": "to go back and forth; to commute",
    "level": "4"
  },
  {
    "word": "連れる",
    "reading": "つれる",
    "meaning": "to lead, to take (a person)",
    "level": "4"
  },
  {
    "word": "技術",
    "reading": "ぎじゅつ",
    "meaning": "technique, technology, skill",
    "level": "4"
  },
  {
    "word": "小鳥",
    "reading": "ことり",
    "meaning": "small bird",
    "level": "4"
  },
  {
    "word": "下宿",
    "reading": "げしゅく",
    "meaning": "lodging, boarding house",
    "level": "4"
  },
  {
    "word": "ジャム",
    "reading": "ジャム",
    "meaning": "jam",
    "level": "4"
  },
  {
    "word": "招待",
    "reading": "しょうたいする",
    "meaning": "invitation",
    "level": "4"
  },
  {
    "word": "鏡",
    "reading": "かがみ",
    "meaning": "mirror",
    "level": "4"
  },
  {
    "word": "はず",
    "reading": "はず",
    "meaning": "it should be so",
    "level": "4"
  },
  {
    "word": "法律",
    "reading": "ほうりつ",
    "meaning": "law",
    "level": "4"
  },
  {
    "word": "進む",
    "reading": "すすむ",
    "meaning": "to advance, to proceed",
    "level": "4"
  },
  {
    "word": "楽む",
    "reading": "たのしむ",
    "meaning": "to enjoy",
    "level": "4"
  },
  {
    "word": "貿易",
    "reading": "ぼうえき",
    "meaning": "trade",
    "level": "4"
  },
  {
    "word": "反対",
    "reading": "はんたい",
    "meaning": "oppose, opposition, resistance",
    "level": "4"
  },
  {
    "word": "おる",
    "reading": "おる",
    "meaning": "-- extra-modest expression for いる --",
    "level": "4"
  },
  {
    "word": "申す",
    "reading": "もうす",
    "meaning": "-- extra-modest (humble) expression for 言う (いう) --",
    "level": "4"
  },
  {
    "word": "試験",
    "reading": "しけん",
    "meaning": "an exam",
    "level": "4"
  },
  {
    "word": "真面目",
    "reading": "まじめ",
    "meaning": "diligent, serious",
    "level": "4"
  },
  {
    "word": "ごらんになる",
    "reading": "",
    "meaning": "-- honorific expression for みる --",
    "level": "4"
  },
  {
    "word": "店員",
    "reading": "てんいん",
    "meaning": "clerk; shop-employee",
    "level": "4"
  },
  {
    "word": "泊まる",
    "reading": "とまる",
    "meaning": "to stay (over night) (v.i.)",
    "level": "4"
  },
  {
    "word": "よろしい",
    "reading": "よろしい",
    "meaning": "(hon.) good, OK, all right",
    "level": "4"
  },
  {
    "word": "今夜",
    "reading": "こんや",
    "meaning": "this evening, tonight",
    "level": "4"
  },
  {
    "word": "おつり",
    "reading": "おつり",
    "meaning": "change; balance of money returned to the purchaser",
    "level": "4"
  },
  {
    "word": "チェックする",
    "reading": "チェックする",
    "meaning": "check",
    "level": "4"
  },
  {
    "word": "会話",
    "reading": "かいわ",
    "meaning": "conversation",
    "level": "4"
  },
  {
    "word": "空気",
    "reading": "くうき",
    "meaning": "air, atmosphere",
    "level": "4"
  },
  {
    "word": "交通",
    "reading": "こうつう",
    "meaning": "traffic, transportation",
    "level": "4"
  },
  {
    "word": "ワープロ",
    "reading": "ワープロ",
    "meaning": "word processor",
    "level": "4"
  },
  {
    "word": "喜ぶ",
    "reading": "よろこぶ",
    "meaning": "to rejoice, to be delighted, to be glad",
    "level": "4"
  },
  {
    "word": "急行",
    "reading": "きゅうこう",
    "meaning": "express train or bus",
    "level": "4"
  },
  {
    "word": "皆",
    "reading": "みな",
    "meaning": "everyone",
    "level": "4"
  },
  {
    "word": "味",
    "reading": "あじ",
    "meaning": "flavor, taste",
    "level": "4"
  },
  {
    "word": "空港",
    "reading": "くうこう",
    "meaning": "airport",
    "level": "4"
  },
  {
    "word": "手袋",
    "reading": "てぶくろ",
    "meaning": "glove(s)",
    "level": "4"
  },
  {
    "word": "校長",
    "reading": "こうちょう",
    "meaning": "principal, headmaster",
    "level": "4"
  },
  {
    "word": "ごちそう",
    "reading": "ごちそう",
    "meaning": "feast, treating (someone)",
    "level": "4"
  },
  {
    "word": "踊り",
    "reading": "おどり",
    "meaning": "dance",
    "level": "4"
  },
  {
    "word": "興味",
    "reading": "きょうみ",
    "meaning": "interest (in something)",
    "level": "4"
  },
  {
    "word": "引っ越す",
    "reading": "ひっこす",
    "meaning": "to move to a new place of residence",
    "level": "4"
  },
  {
    "word": "冷房",
    "reading": "れいぼう",
    "meaning": "cooling, air conditioning",
    "level": "4"
  },
  {
    "word": "都合",
    "reading": "つごう",
    "meaning": "circumstances, convenience",
    "level": "4"
  },
  {
    "word": "遠慮",
    "reading": "えんりょする",
    "meaning": "restraint, reserve, hesitate",
    "level": "4"
  },
  {
    "word": "亡くなる",
    "reading": "なくなる",
    "meaning": "to pass away",
    "level": "4"
  },
  {
    "word": "科学",
    "reading": "かがく",
    "meaning": "science",
    "level": "4"
  },
  {
    "word": "はっきり",
    "reading": "はっきり",
    "meaning": "clearly, distinctly",
    "level": "4"
  },
  {
    "word": "差し上げる",
    "reading": "さしあげる",
    "meaning": "-- humble expression for あげる --",
    "level": "4"
  },
  {
    "word": "気持ち",
    "reading": "きもち",
    "meaning": "feeling, sensation, mood",
    "level": "4"
  },
  {
    "word": "祖父",
    "reading": "そふ",
    "meaning": "grandfather",
    "level": "4"
  },
  {
    "word": "港",
    "reading": "みなと",
    "meaning": "harbor, port",
    "level": "4"
  },
  {
    "word": "予約",
    "reading": "よやく",
    "meaning": "reservation",
    "level": "4"
  },
  {
    "word": "凄い",
    "reading": "すごい",
    "meaning": "terrific, great",
    "level": "4"
  },
  {
    "word": "入学",
    "reading": "にゅうがくする",
    "meaning": "entry to school or university",
    "level": "4"
  },
  {
    "word": "片付ける",
    "reading": "かたづける",
    "meaning": "to (clean) tidy up (v.t.), to put away",
    "level": "4"
  },
  {
    "word": "写す",
    "reading": "うつす",
    "meaning": "to copy (v.t.); to photograph",
    "level": "4"
  },
  {
    "word": "パソコン",
    "reading": "パソコン",
    "meaning": "(personal) computer",
    "level": "4"
  },
  {
    "word": "部長",
    "reading": "ぶちょう",
    "meaning": "department (division) manager",
    "level": "4"
  },
  {
    "word": "火事",
    "reading": "かじ",
    "meaning": "fire",
    "level": "4"
  },
  {
    "word": "足す",
    "reading": "たす",
    "meaning": "to add (numbers)",
    "level": "4"
  },
  {
    "word": "教会",
    "reading": "きょうかい",
    "meaning": "church",
    "level": "4"
  },
  {
    "word": "彼ら",
    "reading": "かれら",
    "meaning": "they (usually male)",
    "level": "4"
  },
  {
    "word": "一杯",
    "reading": "いっぱい",
    "meaning": "full, to the utmost",
    "level": "4"
  },
  {
    "word": "アメリカ",
    "reading": "アメリカ",
    "meaning": "America, U.S.A.",
    "level": "4"
  },
  {
    "word": "男性",
    "reading": "だんせい",
    "meaning": "man; male",
    "level": "4"
  },
  {
    "word": "理由",
    "reading": "りゆう",
    "meaning": "reason",
    "level": "4"
  },
  {
    "word": "生産",
    "reading": "せいさんする",
    "meaning": "production; to produce",
    "level": "4"
  },
  {
    "word": "着物",
    "reading": "きもの",
    "meaning": "kimono; Japanese traditional dress",
    "level": "4"
  },
  {
    "word": "おもちゃ",
    "reading": "おもちゃ",
    "meaning": "a toy",
    "level": "4"
  },
  {
    "word": "暮れる",
    "reading": "くれる",
    "meaning": "to get dark, to come to an end",
    "level": "4"
  },
  {
    "word": "釣る",
    "reading": "つる",
    "meaning": "to fish",
    "level": "4"
  },
  {
    "word": "～ちゃん",
    "reading": "～ちゃん",
    "meaning": "suffix for familiar (female) person",
    "level": "4"
  },
  {
    "word": "打つ",
    "reading": "うつ",
    "meaning": "to hit, to strike",
    "level": "4"
  },
  {
    "word": "あんな",
    "reading": "あんな",
    "meaning": "such, like that",
    "level": "4"
  },
  {
    "word": "謝る",
    "reading": "あやまる",
    "meaning": "to apologize",
    "level": "4"
  },
  {
    "word": "昼間",
    "reading": "ひるま",
    "meaning": "daytime, during the day",
    "level": "4"
  },
  {
    "word": "教育",
    "reading": "きょういく",
    "meaning": "education",
    "level": "4"
  },
  {
    "word": "女性",
    "reading": "じょせい",
    "meaning": "woman",
    "level": "4"
  },
  {
    "word": "米",
    "reading": "こめ",
    "meaning": "uncooked rice",
    "level": "4"
  },
  {
    "word": "邪魔",
    "reading": "じゃま",
    "meaning": "hindrance, intrusion",
    "level": "4"
  },
  {
    "word": "国際",
    "reading": "こくさい",
    "meaning": "international",
    "level": "4"
  },
  {
    "word": "隅",
    "reading": "すみ",
    "meaning": "corner",
    "level": "4"
  },
  {
    "word": "伺う",
    "reading": "うかがう",
    "meaning": "humble form of 行く (いく), 聞く (きく) and 来る (くる)",
    "level": "4"
  },
  {
    "word": "再来週",
    "reading": "さらいしゅう",
    "meaning": "the week after next",
    "level": "4"
  },
  {
    "word": "夢",
    "reading": "ゆめ",
    "meaning": "a dream",
    "level": "4"
  },
  {
    "word": "喉",
    "reading": "のど",
    "meaning": "throat",
    "level": "4"
  },
  {
    "word": "最近",
    "reading": "さいきん",
    "meaning": "recently, nowadays, in recent years, most recent, latest",
    "level": "4"
  },
  {
    "word": "周り",
    "reading": "まわり",
    "meaning": "surroundings",
    "level": "4"
  },
  {
    "word": "歴史",
    "reading": "れきし",
    "meaning": "history",
    "level": "4"
  },
  {
    "word": "不便",
    "reading": "ふべん",
    "meaning": "inconvenience",
    "level": "4"
  },
  {
    "word": "血",
    "reading": "ち",
    "meaning": "blood",
    "level": "4"
  },
  {
    "word": "～続ける",
    "reading": "～つづける",
    "meaning": "to continue doing ~",
    "level": "4"
  },
  {
    "word": "毛",
    "reading": "け",
    "meaning": "hair, fur",
    "level": "4"
  },
  {
    "word": "ひどい",
    "reading": "ひどい",
    "meaning": "terrible, awful, unfair, cruel",
    "level": "4"
  },
  {
    "word": "例えば",
    "reading": "たとえば",
    "meaning": "for example, e.g.",
    "level": "4"
  },
  {
    "word": "中々",
    "reading": "なかなか",
    "meaning": "very, considerably, quite",
    "level": "4"
  },
  {
    "word": "随分",
    "reading": "ずいぶん",
    "meaning": "extremely",
    "level": "4"
  },
  {
    "word": "～やすい",
    "reading": "～やすい",
    "meaning": "easy to do ~",
    "level": "4"
  },
  {
    "word": "押し入れ",
    "reading": "おしいれ",
    "meaning": "closet",
    "level": "4"
  },
  {
    "word": "電灯",
    "reading": "でんとう",
    "meaning": "electric light",
    "level": "4"
  },
  {
    "word": "叱る",
    "reading": "しかる",
    "meaning": "to scold",
    "level": "4"
  },
  {
    "word": "サンダル",
    "reading": "サンダル",
    "meaning": "sandal",
    "level": "4"
  },
  {
    "word": "びっくりする",
    "reading": "びっくりする",
    "meaning": "to be surprised",
    "level": "4"
  },
  {
    "word": "うまい",
    "reading": "うまい",
    "meaning": "delicious; skillful; fortunate",
    "level": "4"
  },
  {
    "word": "変える",
    "reading": "かえる",
    "meaning": "to change, to alter, to vary",
    "level": "4"
  },
  {
    "word": "講堂",
    "reading": "こうどう",
    "meaning": "auditorium",
    "level": "4"
  },
  {
    "word": "子",
    "reading": "こ",
    "meaning": "child",
    "level": "4"
  },
  {
    "word": "沸かす",
    "reading": "わかす",
    "meaning": "to boil",
    "level": "4"
  },
  {
    "word": "レジ",
    "reading": "レジ",
    "meaning": "register",
    "level": "4"
  },
  {
    "word": "しばらく",
    "reading": "しばらく",
    "meaning": "little while",
    "level": "4"
  },
  {
    "word": "特に",
    "reading": "とくに",
    "meaning": "particularly",
    "level": "4"
  },
  {
    "word": "空く",
    "reading": "あく",
    "meaning": "to open, to become empty (vacant)",
    "level": "4"
  },
  {
    "word": "計画",
    "reading": "けいかくする",
    "meaning": "plan, project, schedule",
    "level": "4"
  },
  {
    "word": "通り",
    "reading": "とおり",
    "meaning": "~ Street, ~ Avenue",
    "level": "4"
  },
  {
    "word": "下着",
    "reading": "したぎ",
    "meaning": "underwear",
    "level": "4"
  },
  {
    "word": "経済",
    "reading": "けいざい",
    "meaning": "economics, finance, economy",
    "level": "4"
  },
  {
    "word": "こう",
    "reading": "こう",
    "meaning": "like this, this way",
    "level": "4"
  },
  {
    "word": "是非",
    "reading": "ぜひ",
    "meaning": "certainly, by all means; without fail",
    "level": "4"
  },
  {
    "word": "裏",
    "reading": "うら",
    "meaning": "reverse side, back",
    "level": "4"
  },
  {
    "word": "為",
    "reading": "ため",
    "meaning": "good, advantage, in order to",
    "level": "4"
  },
  {
    "word": "おいでになる",
    "reading": "おいでになる",
    "meaning": "(hon.) to be",
    "level": "4"
  },
  {
    "word": "変わる",
    "reading": "かわる",
    "meaning": "to change (v.i.), to be transformed, to vary",
    "level": "4"
  },
  {
    "word": "以外",
    "reading": "いがい",
    "meaning": "other than, with the exception of, excepting",
    "level": "4"
  },
  {
    "word": "済む",
    "reading": "すむ",
    "meaning": "to finish, to end",
    "level": "4"
  },
  {
    "word": "ハンバーグ",
    "reading": "ハンバーグ",
    "meaning": "hamburger steak",
    "level": "4"
  },
  {
    "word": "市",
    "reading": "し",
    "meaning": "city",
    "level": "4"
  },
  {
    "word": "引き出し",
    "reading": "ひきだし",
    "meaning": "drawer",
    "level": "4"
  },
  {
    "word": "遊び",
    "reading": "あそび",
    "meaning": "play",
    "level": "4"
  },
  {
    "word": "支度",
    "reading": "したくする",
    "meaning": "preparation",
    "level": "4"
  },
  {
    "word": "～始める",
    "reading": "～はじめる",
    "meaning": "to start doing ~",
    "level": "4"
  },
  {
    "word": "見える",
    "reading": "みえる",
    "meaning": "to be visible; -- polite verb meaning 来る (くる) --",
    "level": "4"
  },
  {
    "word": "十分",
    "reading": "じゅうぶん",
    "meaning": "enough",
    "level": "4"
  },
  {
    "word": "音",
    "reading": "おと",
    "meaning": "sound, note",
    "level": "4"
  },
  {
    "word": "きっと",
    "reading": "きっと",
    "meaning": "surely, definitely, undoubtedly, certainly",
    "level": "4"
  },
  {
    "word": "まず",
    "reading": "まず",
    "meaning": "first (of all), to start with",
    "level": "4"
  },
  {
    "word": "遠く",
    "reading": "とおく",
    "meaning": "far away, distant",
    "level": "4"
  },
  {
    "word": "大体",
    "reading": "だいたい",
    "meaning": "approximately; in most cases; in general; to begin with (same as もともと)",
    "level": "4"
  },
  {
    "word": "折れる",
    "reading": "おれる",
    "meaning": "to break, to be folded, to give in; to turn (a corner)",
    "level": "4"
  },
  {
    "word": "正しい",
    "reading": "ただしい",
    "meaning": "correct",
    "level": "4"
  },
  {
    "word": "輸入",
    "reading": "ゆにゅう",
    "meaning": "import",
    "level": "4"
  },
  {
    "word": "返事",
    "reading": "へんじ",
    "meaning": "reply, answer",
    "level": "4"
  },
  {
    "word": "都",
    "reading": "と",
    "meaning": "metropolitan",
    "level": "4"
  },
  {
    "word": "産業",
    "reading": "さんぎょう",
    "meaning": "industry",
    "level": "4"
  },
  {
    "word": "伝える",
    "reading": "つたえる",
    "meaning": "to convey (a message); to tell, to report",
    "level": "4"
  },
  {
    "word": "お金持ち",
    "reading": "かねもち; おかねもち",
    "meaning": "rich person",
    "level": "4"
  },
  {
    "word": "説明",
    "reading": "せつめい",
    "meaning": "explanation",
    "level": "4"
  },
  {
    "word": "島",
    "reading": "しま",
    "meaning": "island",
    "level": "4"
  },
  {
    "word": "道具",
    "reading": "どうぐ",
    "meaning": "tool",
    "level": "4"
  },
  {
    "word": "滑る",
    "reading": "すべる",
    "meaning": "to slide, to slip",
    "level": "4"
  },
  {
    "word": "それほど",
    "reading": "それほど",
    "meaning": "to that degree; extent",
    "level": "4"
  },
  {
    "word": "以上",
    "reading": "いじょう",
    "meaning": "more than; this is all",
    "level": "4"
  },
  {
    "word": "～まま",
    "reading": "～まま",
    "meaning": "as it is",
    "level": "4"
  },
  {
    "word": "特急",
    "reading": "とっきゅう",
    "meaning": "limited express (train faster than an express)",
    "level": "4"
  },
  {
    "word": "プレゼント",
    "reading": "プレゼント",
    "meaning": "present, gift",
    "level": "4"
  },
  {
    "word": "～(に) よると",
    "reading": "～(に) よると",
    "meaning": "according to ~",
    "level": "4"
  },
  {
    "word": "妻",
    "reading": "つま",
    "meaning": "wife (humble)",
    "level": "4"
  },
  {
    "word": "帰り",
    "reading": "かえり",
    "meaning": "return, coming back",
    "level": "4"
  },
  {
    "word": "具合",
    "reading": "ぐあい",
    "meaning": "condition, state, health",
    "level": "4"
  },
  {
    "word": "堅; 硬; 固い",
    "reading": "かたい",
    "meaning": "solid, hard, firm",
    "level": "4"
  },
  {
    "word": "駐車場",
    "reading": "ちゅうしゃじょう",
    "meaning": "parking lot",
    "level": "4"
  },
  {
    "word": "スーツ",
    "reading": "スーツ",
    "meaning": "suit",
    "level": "4"
  },
  {
    "word": "危険",
    "reading": "きけん",
    "meaning": "danger, risk, hazard",
    "level": "4"
  },
  {
    "word": "髪",
    "reading": "かみ",
    "meaning": "hair",
    "level": "4"
  },
  {
    "word": "天気予報",
    "reading": "てんきよほう",
    "meaning": "weather forecast",
    "level": "4"
  },
  {
    "word": "彼女",
    "reading": "かのじょ",
    "meaning": "girlfriend; she",
    "level": "4"
  },
  {
    "word": "間",
    "reading": "あいだ",
    "meaning": "space, interval",
    "level": "4"
  },
  {
    "word": "卒業",
    "reading": "そつぎょう",
    "meaning": "graduation",
    "level": "4"
  },
  {
    "word": "それで",
    "reading": "それで",
    "meaning": "and (conj.), thereupon, because of that",
    "level": "4"
  },
  {
    "word": "枝",
    "reading": "えだ",
    "meaning": "branch, twig",
    "level": "4"
  },
  {
    "word": "専門",
    "reading": "せんもん",
    "meaning": "major; speciality",
    "level": "4"
  },
  {
    "word": "そろそろ",
    "reading": "そろそろ",
    "meaning": "gradually, soon",
    "level": "4"
  },
  {
    "word": "送る",
    "reading": "おくる",
    "meaning": "to send, to dispatch",
    "level": "4"
  },
  {
    "word": "あげる",
    "reading": "あげる",
    "meaning": "to give",
    "level": "4"
  },
  {
    "word": "騒ぐ",
    "reading": "さわぐ",
    "meaning": "to make noise, to clamor",
    "level": "4"
  },
  {
    "word": "尋ねる",
    "reading": "たずねる",
    "meaning": "to inquire (same as 質問する)",
    "level": "4"
  },
  {
    "word": "放送",
    "reading": "ほうそうする",
    "meaning": "broadcasting",
    "level": "4"
  },
  {
    "word": "政治",
    "reading": "せいじ",
    "meaning": "politics",
    "level": "4"
  },
  {
    "word": "市民",
    "reading": "しみん",
    "meaning": "citizen",
    "level": "4"
  },
  {
    "word": "ファックス",
    "reading": "ファックス",
    "meaning": "fax",
    "level": "4"
  },
  {
    "word": "負ける",
    "reading": "まける",
    "meaning": "to lose (a game) (v.i.), to be defeated",
    "level": "4"
  },
  {
    "word": "指輪",
    "reading": "ゆびわ",
    "meaning": "(finger) ring",
    "level": "4"
  },
  {
    "word": "田舎",
    "reading": "いなか",
    "meaning": "rural, countryside",
    "level": "4"
  },
  {
    "word": "見つける",
    "reading": "みつける",
    "meaning": "to discover, to find (v.t.)",
    "level": "4"
  },
  {
    "word": "高校生",
    "reading": "こうこうせい",
    "meaning": "high school student",
    "level": "4"
  },
  {
    "word": "講義",
    "reading": "こうぎ",
    "meaning": "a lecture",
    "level": "4"
  },
  {
    "word": "そんなに",
    "reading": "そんなに",
    "meaning": "so much, like that",
    "level": "4"
  },
  {
    "word": "昼休み",
    "reading": "ひるやすみ",
    "meaning": "lunch break, noon recess",
    "level": "4"
  },
  {
    "word": "忘れ物",
    "reading": "わすれもの",
    "meaning": "lost article, something forgotten",
    "level": "4"
  },
  {
    "word": "下りる",
    "reading": "おりる",
    "meaning": "to get down, to go; come down",
    "level": "4"
  },
  {
    "word": "腕",
    "reading": "うで",
    "meaning": "arm (in reference to body)",
    "level": "4"
  },
  {
    "word": "訳",
    "reading": "わけ",
    "meaning": "reason; explanation",
    "level": "4"
  },
  {
    "word": "承知",
    "reading": "しょうちする",
    "meaning": "consent, acceptance",
    "level": "4"
  },
  {
    "word": "日記",
    "reading": "にっき",
    "meaning": "diary, journal",
    "level": "4"
  },
  {
    "word": "高校; 高等学校",
    "reading": "こうこう; こうとうがっこう",
    "meaning": "high school; senior high school",
    "level": "4"
  },
  {
    "word": "似る",
    "reading": "にる",
    "meaning": "to resemble, to be similar",
    "level": "4"
  },
  {
    "word": "～おわる",
    "reading": "～おわる",
    "meaning": "to finish doing ~",
    "level": "4"
  },
  {
    "word": "暖房",
    "reading": "だんぼう",
    "meaning": "heating",
    "level": "4"
  },
  {
    "word": "留守",
    "reading": "るす",
    "meaning": "absence; not at home",
    "level": "4"
  },
  {
    "word": "割合",
    "reading": "わりあい",
    "meaning": "rate, ratio, percentage",
    "level": "4"
  },
  {
    "word": "寺",
    "reading": "てら",
    "meaning": "Buddhist temple",
    "level": "4"
  },
  {
    "word": "慣れる",
    "reading": "なれる",
    "meaning": "to grow accustomed to",
    "level": "4"
  },
  {
    "word": "普通",
    "reading": "ふつう",
    "meaning": "common; usual",
    "level": "4"
  },
  {
    "word": "手伝う",
    "reading": "てつだう",
    "meaning": "to help",
    "level": "4"
  },
  {
    "word": "なるほど",
    "reading": "なるほど",
    "meaning": "I see; I now understand",
    "level": "4"
  },
  {
    "word": "くださる",
    "reading": "くださる",
    "meaning": "(hon.) to give, to confer",
    "level": "4"
  },
  {
    "word": "息子",
    "reading": "むすこ",
    "meaning": "(humble) son",
    "level": "4"
  },
  {
    "word": "お子さん",
    "reading": "おこさん",
    "meaning": "(someone else's) child (polite)",
    "level": "4"
  },
  {
    "word": "会場",
    "reading": "かいじょう",
    "meaning": "venue, meeting place",
    "level": "4"
  },
  {
    "word": "笑う",
    "reading": "わらう",
    "meaning": "to laugh, to smile",
    "level": "4"
  },
  {
    "word": "運ぶ",
    "reading": "はこぶ",
    "meaning": "to transport, to carry",
    "level": "4"
  },
  {
    "word": "文学",
    "reading": "ぶんがく",
    "meaning": "literature",
    "level": "4"
  },
  {
    "word": "光",
    "reading": "ひかり",
    "meaning": "light",
    "level": "4"
  },
  {
    "word": "お見舞い",
    "reading": "おみまい",
    "meaning": "calling on someone who is ill, visit",
    "level": "4"
  },
  {
    "word": "席",
    "reading": "せき",
    "meaning": "a seat",
    "level": "4"
  },
  {
    "word": "～様",
    "reading": "～さま",
    "meaning": "Mr., Mrs., Ms.",
    "level": "4"
  },
  {
    "word": "ご存じ",
    "reading": "ごぞんじ",
    "meaning": "knowing, acquaintance",
    "level": "4"
  },
  {
    "word": "下る",
    "reading": "さがる",
    "meaning": "to descend, to drop, to fall",
    "level": "4"
  },
  {
    "word": "字",
    "reading": "じ",
    "meaning": "letter; character",
    "level": "4"
  },
  {
    "word": "アジア",
    "reading": "アジア",
    "meaning": "Asia",
    "level": "4"
  },
  {
    "word": "褒める",
    "reading": "ほめる",
    "meaning": "to praise; to say nice things",
    "level": "4"
  },
  {
    "word": "空く",
    "reading": "すく",
    "meaning": "to be empty (in reference to people), to be less crowded",
    "level": "4"
  },
  {
    "word": "あ",
    "reading": "あ",
    "meaning": "Ah",
    "level": "4"
  },
  {
    "word": "最も",
    "reading": "もっとも",
    "meaning": "most",
    "level": "4"
  },
  {
    "word": "合う",
    "reading": "あう",
    "meaning": "to fit, to match",
    "level": "4"
  },
  {
    "word": "～代",
    "reading": "～だい",
    "meaning": "~ age; period",
    "level": "4"
  },
  {
    "word": "最後",
    "reading": "さいご",
    "meaning": "last, end",
    "level": "4"
  },
  {
    "word": "値段",
    "reading": "ねだん",
    "meaning": "price",
    "level": "4"
  },
  {
    "word": "退院",
    "reading": "たいいんする",
    "meaning": "leaving hospital",
    "level": "4"
  },
  {
    "word": "展覧会",
    "reading": "てんらんかい",
    "meaning": "exhibition",
    "level": "4"
  },
  {
    "word": "久しぶり",
    "reading": "ひさしぶり",
    "meaning": "it has been a long time; for the first time in a long time",
    "level": "4"
  },
  {
    "word": "カーテン",
    "reading": "カーテン",
    "meaning": "curtain",
    "level": "4"
  },
  {
    "word": "汽車",
    "reading": "きしゃ",
    "meaning": "train (steam)",
    "level": "4"
  },
  {
    "word": "遅れる",
    "reading": "おくれる",
    "meaning": "to (be) become late",
    "level": "4"
  },
  {
    "word": "見つかる",
    "reading": "みつかる",
    "meaning": "to be found (v.i.), to be discovered",
    "level": "4"
  },
  {
    "word": "召し上がる",
    "reading": "めしあがる",
    "meaning": "-- honorific form of 食べる (たべる) and 飲む (のむ) --",
    "level": "4"
  },
  {
    "word": "太る",
    "reading": "ふとる",
    "meaning": "to gain weight",
    "level": "4"
  },
  {
    "word": "注射",
    "reading": "ちゅうしゃ",
    "meaning": "injection",
    "level": "4"
  },
  {
    "word": "様",
    "reading": "よう",
    "meaning": "way, manner, kind",
    "level": "4"
  },
  {
    "word": "～おき",
    "reading": "～おき",
    "meaning": "after every ~",
    "level": "4"
  },
  {
    "word": "最初",
    "reading": "さいしょ",
    "meaning": "beginning, first",
    "level": "4"
  },
  {
    "word": "御～",
    "reading": "ご～",
    "meaning": "honorable ~",
    "level": "4"
  },
  {
    "word": "安心",
    "reading": "あんしん",
    "meaning": "peace of mind, relief",
    "level": "4"
  },
  {
    "word": "直る",
    "reading": "なおる",
    "meaning": "to be fixed",
    "level": "4"
  },
  {
    "word": "集める",
    "reading": "あつめる",
    "meaning": "to collect, to gather (v.t.), to assemble",
    "level": "4"
  },
  {
    "word": "直す",
    "reading": "なおす",
    "meaning": "to correct (v.t.); to fix",
    "level": "4"
  },
  {
    "word": "続く",
    "reading": "つづく",
    "meaning": "to be continued",
    "level": "4"
  },
  {
    "word": "先輩",
    "reading": "せんぱい",
    "meaning": "senior members of a group",
    "level": "4"
  },
  {
    "word": "約束",
    "reading": "やくそく",
    "meaning": "arrangement, appointment, promise",
    "level": "4"
  },
  {
    "word": "世話",
    "reading": "せわする",
    "meaning": "looking after; to look after",
    "level": "4"
  },
  {
    "word": "近所",
    "reading": "きんじょ",
    "meaning": "neighborhood",
    "level": "4"
  },
  {
    "word": "将来",
    "reading": "しょうらい",
    "meaning": "(in the) future; prospects",
    "level": "4"
  },
  {
    "word": "億",
    "reading": "おく",
    "meaning": "hundred million",
    "level": "4"
  },
  {
    "word": "数学",
    "reading": "すうがく",
    "meaning": "mathematics",
    "level": "4"
  },
  {
    "word": "文化",
    "reading": "ぶんか",
    "meaning": "culture",
    "level": "4"
  },
  {
    "word": "払う",
    "reading": "はらう",
    "meaning": "to pay",
    "level": "4"
  },
  {
    "word": "習慣",
    "reading": "しゅうかん",
    "meaning": "custom (in reference to culture)",
    "level": "4"
  },
  {
    "word": "焼ける",
    "reading": "やける",
    "meaning": "to burn, to be roasted",
    "level": "4"
  },
  {
    "word": "君",
    "reading": "きみ",
    "meaning": "you (informal for men)",
    "level": "4"
  },
  {
    "word": "冷える",
    "reading": "ひえる",
    "meaning": "to grow cold, to cool down",
    "level": "4"
  },
  {
    "word": "点く",
    "reading": "つく",
    "meaning": "to be started, to be switched on",
    "level": "4"
  },
  {
    "word": "この間",
    "reading": "このあいだ",
    "meaning": "the other day, recently",
    "level": "4"
  },
  {
    "word": "格好",
    "reading": "かっこう",
    "meaning": "appearance, manner, shape, form, posture",
    "level": "4"
  },
  {
    "word": "かまう",
    "reading": "",
    "meaning": "to mind, to care about, to be concerned about",
    "level": "4"
  },
  {
    "word": "続ける",
    "reading": "つづける",
    "meaning": "to continue, to keep up",
    "level": "4"
  },
  {
    "word": "落す",
    "reading": "おとす",
    "meaning": "to drop, to lose",
    "level": "4"
  },
  {
    "word": "明日",
    "reading": "あす",
    "meaning": "tomorrow",
    "level": "4"
  },
  {
    "word": "出発",
    "reading": "しゅっぱつする",
    "meaning": "departure",
    "level": "4"
  },
  {
    "word": "拝見",
    "reading": "はいけんする",
    "meaning": "(humble) (polite) seeing, look at",
    "level": "4"
  },
  {
    "word": "割れる",
    "reading": "われる",
    "meaning": "to break",
    "level": "4"
  },
  {
    "word": "背中",
    "reading": "せなか",
    "meaning": "back (of body)",
    "level": "4"
  },
  {
    "word": "新聞社",
    "reading": "しんぶんしゃ",
    "meaning": "newspaper company",
    "level": "4"
  },
  {
    "word": "いじめる",
    "reading": "いじめる",
    "meaning": "to bully, to torment",
    "level": "4"
  },
  {
    "word": "回る、回す",
    "reading": "まわる、まわす",
    "meaning": "to go around, to revolve",
    "level": "4"
  },
  {
    "word": "～君",
    "reading": "～くん",
    "meaning": "Mr. (junior) ~, master ~",
    "level": "4"
  },
  {
    "word": "おっしゃる",
    "reading": "おっしゃる",
    "meaning": "-- honorific expression for いう --",
    "level": "4"
  },
  {
    "word": "眠い",
    "reading": "ねむい",
    "meaning": "sleepy, drowsy",
    "level": "4"
  },
  {
    "word": "濡れる",
    "reading": "ぬれる",
    "meaning": "to get wet",
    "level": "4"
  },
  {
    "word": "倒れる",
    "reading": "たおれる",
    "meaning": "to collapse, to break down",
    "level": "4"
  },
  {
    "word": "スーパー (マーケット)",
    "reading": "スーパー (マーケット)",
    "meaning": "supermarket",
    "level": "4"
  },
  {
    "word": "アクセサリー",
    "reading": "アクセサリー",
    "meaning": "accessory",
    "level": "4"
  },
  {
    "word": "考える",
    "reading": "かんがえる",
    "meaning": "to think (about); to consider",
    "level": "4"
  },
  {
    "word": "向かう",
    "reading": "むかう",
    "meaning": "to face, to go towards",
    "level": "4"
  },
  {
    "word": "自由",
    "reading": "じゆう",
    "meaning": "freedom",
    "level": "4"
  },
  {
    "word": "仕方",
    "reading": "しかた",
    "meaning": "way (of doing something)",
    "level": "4"
  },
  {
    "word": "首",
    "reading": "くび",
    "meaning": "neck",
    "level": "4"
  },
  {
    "word": "程",
    "reading": "ほど",
    "meaning": "degree, extent",
    "level": "4"
  },
  {
    "word": "代わり",
    "reading": "かわり",
    "meaning": "substitute, replacement",
    "level": "4"
  },
  {
    "word": "失敗",
    "reading": "しっぱい",
    "meaning": "failure, mistake",
    "level": "4"
  },
  {
    "word": "工業",
    "reading": "こうぎょう",
    "meaning": "(manufacturing) industry",
    "level": "4"
  },
  {
    "word": "移る",
    "reading": "うつる",
    "meaning": "to move (from a house); to transfer (from a department); to shift",
    "level": "4"
  },
  {
    "word": "スーツケース",
    "reading": "スーツケース",
    "meaning": "suitcase",
    "level": "4"
  },
  {
    "word": "ひげ",
    "reading": "ひげ",
    "meaning": "beard",
    "level": "4"
  },
  {
    "word": "研究室",
    "reading": "けんきゅうしつ",
    "meaning": "the professor's office; laboratory",
    "level": "4"
  },
  {
    "word": "工場",
    "reading": "こうじょう",
    "meaning": "factory",
    "level": "4"
  },
  {
    "word": "紹介",
    "reading": "しょうかい",
    "meaning": "an introduction",
    "level": "4"
  },
  {
    "word": "けれど; けれども",
    "reading": "けれど; けれども",
    "meaning": "but, although",
    "level": "4"
  },
  {
    "word": "舟",
    "reading": "ふね",
    "meaning": "ship, boat",
    "level": "4"
  },
  {
    "word": "動く",
    "reading": "うごく",
    "meaning": "to move",
    "level": "4"
  },
  {
    "word": "～(に) ついて",
    "reading": "～(に) ついて",
    "meaning": "about, concerning",
    "level": "4"
  },
  {
    "word": "コンサート",
    "reading": "コンサート",
    "meaning": "concert",
    "level": "4"
  },
  {
    "word": "虫",
    "reading": "むし",
    "meaning": "insect",
    "level": "4"
  },
  {
    "word": "優しい",
    "reading": "やさしい",
    "meaning": "kind (person), gentle (person), easy (problem)",
    "level": "4"
  },
  {
    "word": "コンピュータ; コンピューター",
    "reading": "コンピュータ; コンピューター",
    "meaning": "computer",
    "level": "4"
  },
  {
    "word": "植える",
    "reading": "うえる",
    "meaning": "to plant",
    "level": "4"
  },
  {
    "word": "両方",
    "reading": "りょうほう",
    "meaning": "both sides, both parties",
    "level": "4"
  },
  {
    "word": "汚れる",
    "reading": "よごれる",
    "meaning": "to become dirty",
    "level": "4"
  },
  {
    "word": "水泳",
    "reading": "すいえい",
    "meaning": "swimming",
    "level": "4"
  },
  {
    "word": "経験",
    "reading": "けいけんする",
    "meaning": "experience",
    "level": "4"
  },
  {
    "word": "勝つ",
    "reading": "かつ",
    "meaning": "to win",
    "level": "4"
  },
  {
    "word": "砂",
    "reading": "すな",
    "meaning": "sand",
    "level": "4"
  },
  {
    "word": "警察",
    "reading": "けいさつ",
    "meaning": "police; police station",
    "level": "4"
  },
  {
    "word": "取り替える",
    "reading": "とりかえる",
    "meaning": "to exchange, to replace",
    "level": "4"
  },
  {
    "word": "急ぐ",
    "reading": "いそぐ",
    "meaning": "to hurry, to be in a hurry, to rush",
    "level": "4"
  },
  {
    "word": "簡単",
    "reading": "かんたん",
    "meaning": "simple",
    "level": "4"
  },
  {
    "word": "参る",
    "reading": "まいる",
    "meaning": "humble expression for 行く and 来る",
    "level": "4"
  },
  {
    "word": "全然",
    "reading": "ぜんぜん",
    "meaning": "not at all; wholly, entirely",
    "level": "4"
  },
  {
    "word": "特別",
    "reading": "とくべつ",
    "meaning": "special",
    "level": "4"
  },
  {
    "word": "復習",
    "reading": "ふくしゅう",
    "meaning": "review (of lessons), revision",
    "level": "4"
  },
  {
    "word": "間に合う",
    "reading": "まにあう",
    "meaning": "to be in time for",
    "level": "4"
  },
  {
    "word": "役に立つ",
    "reading": "やくにたつ",
    "meaning": "to be helpful, to be useful",
    "level": "4"
  },
  {
    "word": "もうすぐ",
    "reading": "もうすぐ",
    "meaning": "very soon; in a few moments; days",
    "level": "4"
  },
  {
    "word": "真中",
    "reading": "まんなか",
    "meaning": "middle, center",
    "level": "4"
  },
  {
    "word": "戻る",
    "reading": "もどる",
    "meaning": "to return (v.i.); to come back",
    "level": "4"
  },
  {
    "word": "研究",
    "reading": "けんきゅう",
    "meaning": "study, research, investigation",
    "level": "4"
  },
  {
    "word": "ケーキ",
    "reading": "ケーキ",
    "meaning": "cake",
    "level": "4"
  },
  {
    "word": "草",
    "reading": "くさ",
    "meaning": "grass",
    "level": "4"
  },
  {
    "word": "込む",
    "reading": "こむ",
    "meaning": "to be crowded",
    "level": "4"
  },
  {
    "word": "この頃",
    "reading": "このごろ",
    "meaning": "these days, nowadays",
    "level": "4"
  },
  {
    "word": "訪ねる",
    "reading": "たずねる",
    "meaning": "to visit",
    "level": "4"
  },
  {
    "word": "下げる",
    "reading": "さげる",
    "meaning": "to lower (v.t.); to hang",
    "level": "4"
  },
  {
    "word": "花見",
    "reading": "はなみ",
    "meaning": "cherry-blossom viewing",
    "level": "4"
  },
  {
    "word": "途中",
    "reading": "とちゅう",
    "meaning": "on the way, midway",
    "level": "4"
  },
  {
    "word": "入院",
    "reading": "にゅういんする",
    "meaning": "hospitalization",
    "level": "4"
  },
  {
    "word": "乗り換える",
    "reading": "のりかえる",
    "meaning": "to transfer (trains), to change (bus, train, etc.)",
    "level": "4"
  },
  {
    "word": "別れる",
    "reading": "わかれる",
    "meaning": "to part from, to separate",
    "level": "4"
  },
  {
    "word": "～町",
    "reading": "～ちょう",
    "meaning": "the town of ~",
    "level": "4"
  },
  {
    "word": "安全",
    "reading": "あんぜん",
    "meaning": "safety, security",
    "level": "4"
  },
  {
    "word": "看護婦",
    "reading": "かんごふ",
    "meaning": "(female) nurse",
    "level": "4"
  },
  {
    "word": "見物",
    "reading": "けんぶつ",
    "meaning": "sightseeing",
    "level": "4"
  },
  {
    "word": "相談",
    "reading": "そうだんする",
    "meaning": "consultation",
    "level": "4"
  },
  {
    "word": "ガソリンスタンド",
    "reading": "ガソリンスタンド",
    "meaning": "gas station, service station",
    "level": "4"
  },
  {
    "word": "テニス",
    "reading": "テニス",
    "meaning": "tennis",
    "level": "4"
  },
  {
    "word": "眠る",
    "reading": "ねむる",
    "meaning": "to sleep",
    "level": "4"
  },
  {
    "word": "上がる",
    "reading": "あがる",
    "meaning": "to rise, to go up",
    "level": "4"
  },
  {
    "word": "翻訳",
    "reading": "ほんやく",
    "meaning": "translation",
    "level": "4"
  },
  {
    "word": "食事",
    "reading": "しょくじする",
    "meaning": "meal",
    "level": "4"
  },
  {
    "word": "お陰",
    "reading": "おかげ",
    "meaning": "thanks or owing to",
    "level": "4"
  },
  {
    "word": "娘",
    "reading": "むすめ",
    "meaning": "daughter (humble)",
    "level": "4"
  },
  {
    "word": "湯",
    "reading": "ゆ",
    "meaning": "hot water",
    "level": "4"
  },
  {
    "word": "競争",
    "reading": "きょうそう",
    "meaning": "competition, contest",
    "level": "4"
  },
  {
    "word": "会議",
    "reading": "かいぎ",
    "meaning": "business meeting; conference",
    "level": "4"
  },
  {
    "word": "湖",
    "reading": "みずうみ",
    "meaning": "lake",
    "level": "4"
  },
  {
    "word": "集まる",
    "reading": "あつまる",
    "meaning": "to gather (v.i.), to collect",
    "level": "4"
  },
  {
    "word": "～にくい",
    "reading": "～にくい",
    "meaning": "difficult to do ~",
    "level": "4"
  },
  {
    "word": "生活",
    "reading": "せいかつする",
    "meaning": "living, life; to live",
    "level": "4"
  },
  {
    "word": "糸",
    "reading": "いと",
    "meaning": "thread",
    "level": "4"
  },
  {
    "word": "関係",
    "reading": "かんけい",
    "meaning": "relation(ship), connection",
    "level": "4"
  },
  {
    "word": "ピアノ",
    "reading": "ピアノ",
    "meaning": "piano",
    "level": "4"
  },
  {
    "word": "～目",
    "reading": "～め",
    "meaning": "number ~ sequence, ~nd; ~th",
    "level": "4"
  },
  {
    "word": "番組",
    "reading": "ばんぐみ",
    "meaning": "broadcast program",
    "level": "4"
  },
  {
    "word": "急",
    "reading": "きゅう",
    "meaning": "urgent, sudden; steep",
    "level": "4"
  },
  {
    "word": "棚",
    "reading": "たな",
    "meaning": "shelves, rack",
    "level": "4"
  },
  {
    "word": "木綿",
    "reading": "もめん",
    "meaning": "cotton",
    "level": "4"
  },
  {
    "word": "輸出",
    "reading": "ゆしゅつする",
    "meaning": "export",
    "level": "4"
  },
  {
    "word": "タイプ",
    "reading": "タイプ",
    "meaning": "type, style",
    "level": "4"
  },
  {
    "word": "すり",
    "reading": "すり",
    "meaning": "pickpocket",
    "level": "4"
  },
  {
    "word": "嬉しい",
    "reading": "うれしい",
    "meaning": "to be happy; to be glad",
    "level": "4"
  },
  {
    "word": "アルコール",
    "reading": "アルコール",
    "meaning": "alcohol",
    "level": "4"
  },
  {
    "word": "ソフト",
    "reading": "ソフト",
    "meaning": "soft; soft hat; software",
    "level": "4"
  },
  {
    "word": "神社",
    "reading": "じんじゃ",
    "meaning": "Shinto shrine",
    "level": "4"
  },
  {
    "word": "大分",
    "reading": "だいぶ",
    "meaning": "fairly well, to a large extent, considerably, pretty much",
    "level": "4"
  },
  {
    "word": "楽しみ",
    "reading": "たのしみ",
    "meaning": "pleasure, joy",
    "level": "4"
  },
  {
    "word": "趣味",
    "reading": "しゅみ",
    "meaning": "hobby; pastime",
    "level": "4"
  },
  {
    "word": "電報",
    "reading": "でんぽう",
    "meaning": "telegram",
    "level": "4"
  },
  {
    "word": "家内",
    "reading": "かない",
    "meaning": "(one's own) wife",
    "level": "4"
  },
  {
    "word": "指",
    "reading": "ゆび",
    "meaning": "finger",
    "level": "4"
  },
  {
    "word": "これから",
    "reading": "これから",
    "meaning": "from now on, after this",
    "level": "4"
  },
  {
    "word": "たまに",
    "reading": "たまに",
    "meaning": "occasionally",
    "level": "4"
  },
  {
    "word": "社会",
    "reading": "しゃかい",
    "meaning": "society",
    "level": "4"
  },
  {
    "word": "ああ",
    "reading": "ああ",
    "meaning": "Ah!, Oh!",
    "level": "5"
  },
  {
    "word": "会う",
    "reading": "あう",
    "meaning": "to meet, to see",
    "level": "5"
  },
  {
    "word": "青",
    "reading": "あお",
    "meaning": "blue",
    "level": "5"
  },
  {
    "word": "青い",
    "reading": "あおい",
    "meaning": "blue",
    "level": "5"
  },
  {
    "word": "赤",
    "reading": "あか",
    "meaning": "red",
    "level": "5"
  },
  {
    "word": "赤い",
    "reading": "あかい",
    "meaning": "red",
    "level": "5"
  },
  {
    "word": "明るい",
    "reading": "あかるい",
    "meaning": "bright (in reference to personality or weather); cheerful",
    "level": "5"
  },
  {
    "word": "秋",
    "reading": "あき",
    "meaning": "fall (season)",
    "level": "5"
  },
  {
    "word": "開く",
    "reading": "あく",
    "meaning": "to open, to become open",
    "level": "5"
  },
  {
    "word": "開ける",
    "reading": "あける",
    "meaning": "to open (v.t.)",
    "level": "5"
  },
  {
    "word": "上げる",
    "reading": "あげる",
    "meaning": "to raise, to lift",
    "level": "5"
  },
  {
    "word": "朝",
    "reading": "あさ",
    "meaning": "morning",
    "level": "5"
  },
  {
    "word": "朝御飯",
    "reading": "あさごはん",
    "meaning": "breakfast",
    "level": "5"
  },
  {
    "word": "明後日",
    "reading": "あさって",
    "meaning": "day after tomorrow",
    "level": "5"
  },
  {
    "word": "足; 脚",
    "reading": "あし",
    "meaning": "foot; leg",
    "level": "5"
  },
  {
    "word": "明日",
    "reading": "あした",
    "meaning": "tomorrow",
    "level": "5"
  },
  {
    "word": "あそこ",
    "reading": "あそこ",
    "meaning": "there, over there, that place",
    "level": "5"
  },
  {
    "word": "遊ぶ",
    "reading": "あそぶ",
    "meaning": "to play; to spend time pleasantly; to hang out",
    "level": "5"
  },
  {
    "word": "暖かい",
    "reading": "あたたかい",
    "meaning": "warm",
    "level": "5"
  },
  {
    "word": "頭",
    "reading": "あたま",
    "meaning": "head",
    "level": "5"
  },
  {
    "word": "新しい",
    "reading": "あたらしい",
    "meaning": "new",
    "level": "5"
  },
  {
    "word": "あちら",
    "reading": "あちら",
    "meaning": "this way (polite)",
    "level": "5"
  },
  {
    "word": "暑い",
    "reading": "あつい",
    "meaning": "hot (in reference to weather), warm",
    "level": "5"
  },
  {
    "word": "熱い",
    "reading": "あつい",
    "meaning": "hot (objects)",
    "level": "5"
  },
  {
    "word": "厚い",
    "reading": "あつい",
    "meaning": "kind, warm(hearted), thick, deep",
    "level": "5"
  },
  {
    "word": "あっち",
    "reading": "あっち",
    "meaning": "over there",
    "level": "5"
  },
  {
    "word": "後",
    "reading": "あと",
    "meaning": "afterwards (later); in the future; the rest; since then",
    "level": "5"
  },
  {
    "word": "あなた",
    "reading": "あなた",
    "meaning": "you",
    "level": "5"
  },
  {
    "word": "兄",
    "reading": "あに",
    "meaning": "(my) older brother (humble)",
    "level": "5"
  },
  {
    "word": "姉",
    "reading": "あね",
    "meaning": "(my) older sister (humble)",
    "level": "5"
  },
  {
    "word": "アパート",
    "reading": "アパート",
    "meaning": "apartment (abbr.)",
    "level": "5"
  },
  {
    "word": "あの",
    "reading": "あの",
    "meaning": "that over there; like that, that way; um...",
    "level": "5"
  },
  {
    "word": "浴びる",
    "reading": "あびる",
    "meaning": "to bathe, to shower",
    "level": "5"
  },
  {
    "word": "危ない",
    "reading": "あぶない",
    "meaning": "dangerous, critical",
    "level": "5"
  },
  {
    "word": "甘い",
    "reading": "あまい",
    "meaning": "generous, sweet",
    "level": "5"
  },
  {
    "word": "余り",
    "reading": "あまり",
    "meaning": "not very; surplus",
    "level": "5"
  },
  {
    "word": "雨",
    "reading": "あめ",
    "meaning": "rain",
    "level": "5"
  },
  {
    "word": "飴",
    "reading": "あめ",
    "meaning": "(hard) candy",
    "level": "5"
  },
  {
    "word": "洗う",
    "reading": "あらう",
    "meaning": "to wash",
    "level": "5"
  },
  {
    "word": "在る",
    "reading": "ある",
    "meaning": "to be, to have",
    "level": "5"
  },
  {
    "word": "有る",
    "reading": "ある",
    "meaning": "to be, to have",
    "level": "5"
  },
  {
    "word": "歩く",
    "reading": "あるく",
    "meaning": "to walk",
    "level": "5"
  },
  {
    "word": "あれ",
    "reading": "あれ",
    "meaning": "that one (over there)",
    "level": "5"
  },
  {
    "word": "いい; よい",
    "reading": "いい; よい",
    "meaning": "good",
    "level": "5"
  },
  {
    "word": "いいえ",
    "reading": "いいえ",
    "meaning": "no, not at all",
    "level": "5"
  },
  {
    "word": "言う",
    "reading": "いう",
    "meaning": "to say",
    "level": "5"
  },
  {
    "word": "家",
    "reading": "いえ",
    "meaning": "house, home",
    "level": "5"
  },
  {
    "word": "いかが",
    "reading": "いかが",
    "meaning": "how, in what way",
    "level": "5"
  },
  {
    "word": "行く",
    "reading": "いく; ゆく",
    "meaning": "to go",
    "level": "5"
  },
  {
    "word": "いくつ",
    "reading": "いくつ",
    "meaning": "how many, how old",
    "level": "5"
  },
  {
    "word": "いくら",
    "reading": "いくら",
    "meaning": "how much, how many",
    "level": "5"
  },
  {
    "word": "池",
    "reading": "いけ",
    "meaning": "pond",
    "level": "5"
  },
  {
    "word": "医者",
    "reading": "いしゃ",
    "meaning": "doctor; physician",
    "level": "5"
  },
  {
    "word": "椅子",
    "reading": "いす",
    "meaning": "chair",
    "level": "5"
  },
  {
    "word": "忙しい",
    "reading": "いそがしい",
    "meaning": "busy (people, days)",
    "level": "5"
  },
  {
    "word": "痛い",
    "reading": "いたい",
    "meaning": "hurt; painful; sore",
    "level": "5"
  },
  {
    "word": "一",
    "reading": "いち",
    "meaning": "one",
    "level": "5"
  },
  {
    "word": "一日",
    "reading": "いちにち",
    "meaning": "one day (duration)",
    "level": "5"
  },
  {
    "word": "一番",
    "reading": "いちばん",
    "meaning": "best (most), first, number one",
    "level": "5"
  },
  {
    "word": "いつ",
    "reading": "いつ",
    "meaning": "when",
    "level": "5"
  },
  {
    "word": "五日",
    "reading": "いつか",
    "meaning": "five days; fifth day of the month",
    "level": "5"
  },
  {
    "word": "一緒",
    "reading": "いっしょ",
    "meaning": "together",
    "level": "5"
  },
  {
    "word": "五つ",
    "reading": "いつつ",
    "meaning": "five things",
    "level": "5"
  },
  {
    "word": "いつも",
    "reading": "いつも",
    "meaning": "always, usually, every time, never (with neg. verb)",
    "level": "5"
  },
  {
    "word": "犬",
    "reading": "いぬ",
    "meaning": "dog",
    "level": "5"
  },
  {
    "word": "今",
    "reading": "いま",
    "meaning": "now",
    "level": "5"
  },
  {
    "word": "意味",
    "reading": "いみ",
    "meaning": "meaning, significance",
    "level": "5"
  },
  {
    "word": "妹",
    "reading": "いもうと",
    "meaning": "younger sister (humble)",
    "level": "5"
  },
  {
    "word": "嫌",
    "reading": "いや",
    "meaning": "disagreeable, detestable, unpleasant",
    "level": "5"
  },
  {
    "word": "入口",
    "reading": "いりぐち",
    "meaning": "entrance",
    "level": "5"
  },
  {
    "word": "居る",
    "reading": "いる",
    "meaning": "(humble) to be (animate), to exist",
    "level": "5"
  },
  {
    "word": "要る",
    "reading": "いる",
    "meaning": "to need",
    "level": "5"
  },
  {
    "word": "入れる",
    "reading": "いれる",
    "meaning": "to put in",
    "level": "5"
  },
  {
    "word": "色",
    "reading": "いろ",
    "meaning": "color",
    "level": "5"
  },
  {
    "word": "色々",
    "reading": "いろいろ",
    "meaning": "various",
    "level": "5"
  },
  {
    "word": "上",
    "reading": "うえ",
    "meaning": "above (up, top, etc.), over, on top of",
    "level": "5"
  },
  {
    "word": "後ろ",
    "reading": "うしろ",
    "meaning": "back, behind, rear",
    "level": "5"
  },
  {
    "word": "薄い",
    "reading": "うすい",
    "meaning": "thin, weak",
    "level": "5"
  },
  {
    "word": "歌",
    "reading": "うた",
    "meaning": "a song",
    "level": "5"
  },
  {
    "word": "歌う",
    "reading": "うたう",
    "meaning": "to sing",
    "level": "5"
  },
  {
    "word": "うち",
    "reading": "うち",
    "meaning": "home; house; my place",
    "level": "5"
  },
  {
    "word": "生まれる",
    "reading": "うまれる",
    "meaning": "to be born",
    "level": "5"
  },
  {
    "word": "海",
    "reading": "うみ",
    "meaning": "sea, beach",
    "level": "5"
  },
  {
    "word": "売る",
    "reading": "うる",
    "meaning": "to sell (v.t.)",
    "level": "5"
  },
  {
    "word": "うるさい",
    "reading": "うるさい",
    "meaning": "noisy; annoying",
    "level": "5"
  },
  {
    "word": "上着",
    "reading": "うわぎ",
    "meaning": "coat, jacket",
    "level": "5"
  },
  {
    "word": "絵",
    "reading": "え",
    "meaning": "a painting; a picture; a drawing",
    "level": "5"
  },
  {
    "word": "映画",
    "reading": "えいが",
    "meaning": "movie, film",
    "level": "5"
  },
  {
    "word": "映画館",
    "reading": "えいがかん",
    "meaning": "movie theater, cinema",
    "level": "5"
  },
  {
    "word": "英語",
    "reading": "えいご",
    "meaning": "English (language)",
    "level": "5"
  },
  {
    "word": "ええ",
    "reading": "ええ",
    "meaning": "yes",
    "level": "5"
  },
  {
    "word": "駅",
    "reading": "えき",
    "meaning": "station",
    "level": "5"
  },
  {
    "word": "エレベーター",
    "reading": "エレベーター",
    "meaning": "elevator",
    "level": "5"
  },
  {
    "word": "～円",
    "reading": "～えん",
    "meaning": "Yen",
    "level": "5"
  },
  {
    "word": "鉛筆",
    "reading": "えんぴつ",
    "meaning": "pencil",
    "level": "5"
  },
  {
    "word": "お～",
    "reading": "お～",
    "meaning": "honorable ~ (honorific)",
    "level": "5"
  },
  {
    "word": "美味しい",
    "reading": "おいしい",
    "meaning": "delicious, tasty",
    "level": "5"
  },
  {
    "word": "多い",
    "reading": "おおい",
    "meaning": "many; there are a lot",
    "level": "5"
  },
  {
    "word": "大きい",
    "reading": "おおきい",
    "meaning": "big, large",
    "level": "5"
  },
  {
    "word": "大きな",
    "reading": "おおきな",
    "meaning": "big",
    "level": "5"
  },
  {
    "word": "大勢",
    "reading": "おおぜい",
    "meaning": "great number of people",
    "level": "5"
  },
  {
    "word": "お母さん",
    "reading": "おかあさん",
    "meaning": "mother (formal)",
    "level": "5"
  },
  {
    "word": "お菓子",
    "reading": "おかし",
    "meaning": "confections, sweets, snack",
    "level": "5"
  },
  {
    "word": "お金",
    "reading": "おかね",
    "meaning": "money",
    "level": "5"
  },
  {
    "word": "起きる",
    "reading": "おきる",
    "meaning": "to get up (e.g., from sleeping); to happen",
    "level": "5"
  },
  {
    "word": "置く",
    "reading": "おく",
    "meaning": "to put; to lay; to place",
    "level": "5"
  },
  {
    "word": "奥さん",
    "reading": "おくさん",
    "meaning": "(someone else's) wife (hon.)",
    "level": "5"
  },
  {
    "word": "お酒",
    "reading": "おさけ",
    "meaning": "sake; alcohol",
    "level": "5"
  },
  {
    "word": "お皿",
    "reading": "おさら",
    "meaning": "plate, dish",
    "level": "5"
  },
  {
    "word": "伯父; 叔父さん",
    "reading": "おじさん",
    "meaning": "uncle, middle-aged man",
    "level": "5"
  },
  {
    "word": "おじいさん",
    "reading": "おじいさん",
    "meaning": "grandfather, male senior citizen",
    "level": "5"
  },
  {
    "word": "教える",
    "reading": "おしえる",
    "meaning": "to teach, to inform, to instruct",
    "level": "5"
  },
  {
    "word": "押す",
    "reading": "おす",
    "meaning": "to push, to press, to stamp (e.g., a passport)",
    "level": "5"
  },
  {
    "word": "遅い",
    "reading": "おそい",
    "meaning": "slow; (to be) late",
    "level": "5"
  },
  {
    "word": "お茶",
    "reading": "おちゃ",
    "meaning": "(green) tea",
    "level": "5"
  },
  {
    "word": "お手洗い",
    "reading": "おてあらい",
    "meaning": "toilet, restroom, bathroom (lit., a place to wash one's hands)",
    "level": "5"
  },
  {
    "word": "お父さん",
    "reading": "おとうさん",
    "meaning": "father (formal)",
    "level": "5"
  },
  {
    "word": "弟",
    "reading": "おとうと",
    "meaning": "younger brother",
    "level": "5"
  },
  {
    "word": "男",
    "reading": "おとこ",
    "meaning": "man, male",
    "level": "5"
  },
  {
    "word": "男の子",
    "reading": "おとこのこ",
    "meaning": "boy",
    "level": "5"
  },
  {
    "word": "一昨日",
    "reading": "おととい",
    "meaning": "the day before yesterday",
    "level": "5"
  },
  {
    "word": "おととし",
    "reading": "おととし",
    "meaning": "year before last",
    "level": "5"
  },
  {
    "word": "大人",
    "reading": "おとな",
    "meaning": "adult",
    "level": "5"
  },
  {
    "word": "お腹",
    "reading": "おなか",
    "meaning": "stomach",
    "level": "5"
  },
  {
    "word": "同じ",
    "reading": "おなじ",
    "meaning": "same, identical",
    "level": "5"
  },
  {
    "word": "お兄さん",
    "reading": "おにいさん",
    "meaning": "(someone else's) older brother (formal)",
    "level": "5"
  },
  {
    "word": "お姉さん",
    "reading": "おねえさん",
    "meaning": "older sister (formal)",
    "level": "5"
  },
  {
    "word": "伯母さん; 叔母さん",
    "reading": "おばさん",
    "meaning": "aunt",
    "level": "5"
  },
  {
    "word": "おばあさん",
    "reading": "おばあさん",
    "meaning": "grandmother, female senior-citizen",
    "level": "5"
  },
  {
    "word": "お風呂",
    "reading": "おふろ",
    "meaning": "a bath",
    "level": "5"
  },
  {
    "word": "お弁当",
    "reading": "おべんとう",
    "meaning": "a boxed lunch",
    "level": "5"
  },
  {
    "word": "覚える",
    "reading": "おぼえる",
    "meaning": "to learn, to commit to memory, to remember, to memorize",
    "level": "5"
  },
  {
    "word": "おまわりさん",
    "reading": "おまわりさん",
    "meaning": "policeman (friendly term)",
    "level": "5"
  },
  {
    "word": "重い",
    "reading": "おもい",
    "meaning": "heavy; serious",
    "level": "5"
  },
  {
    "word": "面白い",
    "reading": "おもしろい",
    "meaning": "interesting, amusing",
    "level": "5"
  },
  {
    "word": "泳ぐ",
    "reading": "およぐ",
    "meaning": "to swim",
    "level": "5"
  },
  {
    "word": "降りる",
    "reading": "おりる",
    "meaning": "to get off",
    "level": "5"
  },
  {
    "word": "終る",
    "reading": "おわる",
    "meaning": "to finish, to close",
    "level": "5"
  },
  {
    "word": "音楽",
    "reading": "おんがく",
    "meaning": "Music",
    "level": "5"
  },
  {
    "word": "女",
    "reading": "おんな",
    "meaning": "woman, female",
    "level": "5"
  },
  {
    "word": "女の子",
    "reading": "おんなのこ",
    "meaning": "girl",
    "level": "5"
  },
  {
    "word": "～回",
    "reading": "～かい",
    "meaning": "counter for occurrences (~ times)",
    "level": "5"
  },
  {
    "word": "～階",
    "reading": "～かい",
    "meaning": "counter for stories (floors) of a building",
    "level": "5"
  },
  {
    "word": "外国",
    "reading": "がいこく",
    "meaning": "foreign country; abroad",
    "level": "5"
  },
  {
    "word": "外国人",
    "reading": "がいこくじん",
    "meaning": "foreigner",
    "level": "5"
  },
  {
    "word": "会社",
    "reading": "かいしゃ",
    "meaning": "company, corporation",
    "level": "5"
  },
  {
    "word": "階段",
    "reading": "かいだん",
    "meaning": "stairs",
    "level": "5"
  },
  {
    "word": "買い物",
    "reading": "かいもの",
    "meaning": "shopping",
    "level": "5"
  },
  {
    "word": "買う",
    "reading": "かう",
    "meaning": "to buy",
    "level": "5"
  },
  {
    "word": "返す",
    "reading": "かえす",
    "meaning": "to return something",
    "level": "5"
  },
  {
    "word": "帰る",
    "reading": "かえる",
    "meaning": "to go back, to go home, to return",
    "level": "5"
  },
  {
    "word": "顔",
    "reading": "かお",
    "meaning": "face (body part)",
    "level": "5"
  },
  {
    "word": "かかる",
    "reading": "かかる",
    "meaning": "it takes (amount of time, money) (v.i.)",
    "level": "5"
  },
  {
    "word": "鍵",
    "reading": "かぎ",
    "meaning": "a lock; a key",
    "level": "5"
  },
  {
    "word": "書く",
    "reading": "かく",
    "meaning": "to write",
    "level": "5"
  },
  {
    "word": "学生",
    "reading": "がくせい",
    "meaning": "student",
    "level": "5"
  },
  {
    "word": "～か月",
    "reading": "～かげつ",
    "meaning": "(number of) months",
    "level": "5"
  },
  {
    "word": "掛ける",
    "reading": "かける",
    "meaning": "to put on (e.g., glasses); to hang (e.g., on a wall)",
    "level": "5"
  },
  {
    "word": "かける",
    "reading": "かける",
    "meaning": "to dial/call (e.g., phone); to sit down",
    "level": "5"
  },
  {
    "word": "傘",
    "reading": "かさ",
    "meaning": "umbrella, parasol",
    "level": "5"
  },
  {
    "word": "貸す",
    "reading": "かす",
    "meaning": "to lend",
    "level": "5"
  },
  {
    "word": "風",
    "reading": "かぜ",
    "meaning": "wind, breeze",
    "level": "5"
  },
  {
    "word": "風邪",
    "reading": "かぜ",
    "meaning": "cold, flu",
    "level": "5"
  },
  {
    "word": "方",
    "reading": "かた",
    "meaning": "-- honorific form for 人 (ひと) --; way of doing",
    "level": "5"
  },
  {
    "word": "家族",
    "reading": "かぞく",
    "meaning": "family, members of a family",
    "level": "5"
  },
  {
    "word": "片仮名",
    "reading": "かたかな",
    "meaning": "katakana",
    "level": "5"
  },
  {
    "word": "～月",
    "reading": "～がつ",
    "meaning": "month of year",
    "level": "5"
  },
  {
    "word": "学校",
    "reading": "がっこう",
    "meaning": "a school",
    "level": "5"
  },
  {
    "word": "カップ",
    "reading": "カップ",
    "meaning": "cup",
    "level": "5"
  },
  {
    "word": "家庭",
    "reading": "かてい",
    "meaning": "home; family",
    "level": "5"
  },
  {
    "word": "角",
    "reading": "かど",
    "meaning": "corner (e.g., desk, pavement)",
    "level": "5"
  },
  {
    "word": "かばん",
    "reading": "かばん",
    "meaning": "bag, basket",
    "level": "5"
  },
  {
    "word": "花瓶",
    "reading": "かびん",
    "meaning": "(flower) vase",
    "level": "5"
  },
  {
    "word": "かぶる",
    "reading": "かぶる",
    "meaning": "to wear, to put on (e.g., a hat on the head)",
    "level": "5"
  },
  {
    "word": "紙",
    "reading": "かみ",
    "meaning": "paper",
    "level": "5"
  },
  {
    "word": "カメラ",
    "reading": "カメラ",
    "meaning": "camera",
    "level": "5"
  },
  {
    "word": "火曜日",
    "reading": "かようび",
    "meaning": "Tuesday",
    "level": "5"
  },
  {
    "word": "辛い",
    "reading": "からい",
    "meaning": "hot and spicy; salty",
    "level": "5"
  },
  {
    "word": "体",
    "reading": "からだ",
    "meaning": "body; health",
    "level": "5"
  },
  {
    "word": "借りる",
    "reading": "かりる",
    "meaning": "to borrow, to owe",
    "level": "5"
  },
  {
    "word": "～がる",
    "reading": "～がる",
    "meaning": "feel",
    "level": "5"
  },
  {
    "word": "軽い",
    "reading": "かるい",
    "meaning": "light, non-serious, minor",
    "level": "5"
  },
  {
    "word": "カレー",
    "reading": "カレー",
    "meaning": "curry (abbr. for curry and rice)",
    "level": "5"
  },
  {
    "word": "カレンダー",
    "reading": "カレンダー",
    "meaning": "calendar",
    "level": "5"
  },
  {
    "word": "川; 河",
    "reading": "かわ",
    "meaning": "river",
    "level": "5"
  },
  {
    "word": "～側",
    "reading": "～がわ",
    "meaning": "~ side",
    "level": "5"
  },
  {
    "word": "可愛い",
    "reading": "かわいい",
    "meaning": "cute, adorable",
    "level": "5"
  },
  {
    "word": "漢字",
    "reading": "かんじ",
    "meaning": "kanji; Chinese character",
    "level": "5"
  },
  {
    "word": "木",
    "reading": "き",
    "meaning": "tree, wood, timber",
    "level": "5"
  },
  {
    "word": "黄色",
    "reading": "きいろ",
    "meaning": "yellow",
    "level": "5"
  },
  {
    "word": "黄色い",
    "reading": "きいろい",
    "meaning": "yellow",
    "level": "5"
  },
  {
    "word": "消える",
    "reading": "きえる",
    "meaning": "to vanish, to disappear",
    "level": "5"
  },
  {
    "word": "聞く",
    "reading": "きく",
    "meaning": "to hear, to listen, to ask",
    "level": "5"
  },
  {
    "word": "北",
    "reading": "きた",
    "meaning": "north",
    "level": "5"
  },
  {
    "word": "ギター",
    "reading": "ギター",
    "meaning": "guitar",
    "level": "5"
  },
  {
    "word": "汚い",
    "reading": "きたない",
    "meaning": "dirty, unclean, filthy",
    "level": "5"
  },
  {
    "word": "喫茶店",
    "reading": "きっさてん",
    "meaning": "café",
    "level": "5"
  },
  {
    "word": "切手",
    "reading": "きって",
    "meaning": "postal (postage) stamps",
    "level": "5"
  },
  {
    "word": "切符",
    "reading": "きっぷ",
    "meaning": "a ticket",
    "level": "5"
  },
  {
    "word": "昨日",
    "reading": "きのう",
    "meaning": "yesterday",
    "level": "5"
  },
  {
    "word": "九",
    "reading": "きゅう",
    "meaning": "nine",
    "level": "5"
  },
  {
    "word": "牛肉",
    "reading": "ぎゅうにく",
    "meaning": "beef",
    "level": "5"
  },
  {
    "word": "牛乳",
    "reading": "ぎゅうにゅう",
    "meaning": "milk",
    "level": "5"
  },
  {
    "word": "今日",
    "reading": "きょう",
    "meaning": "today, this day",
    "level": "5"
  },
  {
    "word": "教室",
    "reading": "きょうしつ",
    "meaning": "classroom",
    "level": "5"
  },
  {
    "word": "兄弟",
    "reading": "きょうだい",
    "meaning": "siblings (humble), brothers and sisters",
    "level": "5"
  },
  {
    "word": "去年",
    "reading": "きょねん",
    "meaning": "last year",
    "level": "5"
  },
  {
    "word": "嫌い",
    "reading": "きらい",
    "meaning": "dislike",
    "level": "5"
  },
  {
    "word": "切る",
    "reading": "きる",
    "meaning": "to cut; to hang up (a phone)",
    "level": "5"
  },
  {
    "word": "着る",
    "reading": "きる",
    "meaning": "to put on (clothes above your waist); to wear",
    "level": "5"
  },
  {
    "word": "綺麗",
    "reading": "きれい",
    "meaning": "pretty, clean, tidy",
    "level": "5"
  },
  {
    "word": "キロ; キログラム",
    "reading": "キロ; キログラム",
    "meaning": "(abbr.) kilo (kilogram)",
    "level": "5"
  },
  {
    "word": "キロ; キロメートル",
    "reading": "キロ; キロメートル",
    "meaning": "(abbr.) kilo (kilometer)",
    "level": "5"
  },
  {
    "word": "銀行",
    "reading": "ぎんこう",
    "meaning": "bank",
    "level": "5"
  },
  {
    "word": "金曜日",
    "reading": "きんようび",
    "meaning": "Friday",
    "level": "5"
  },
  {
    "word": "九",
    "reading": "く",
    "meaning": "nine",
    "level": "5"
  },
  {
    "word": "薬",
    "reading": "くすり",
    "meaning": "medicine",
    "level": "5"
  },
  {
    "word": "下さい",
    "reading": "ください",
    "meaning": "(with te-form verb) please do for me",
    "level": "5"
  },
  {
    "word": "果物",
    "reading": "くだもの",
    "meaning": "fruit",
    "level": "5"
  },
  {
    "word": "口",
    "reading": "くち",
    "meaning": "job opening; mouth",
    "level": "5"
  },
  {
    "word": "靴",
    "reading": "くつ",
    "meaning": "shoes, footwear",
    "level": "5"
  },
  {
    "word": "靴下",
    "reading": "くつした",
    "meaning": "socks",
    "level": "5"
  },
  {
    "word": "国",
    "reading": "くに",
    "meaning": "country; place of origin",
    "level": "5"
  },
  {
    "word": "曇り",
    "reading": "くもり",
    "meaning": "cloudiness, cloudy weather",
    "level": "5"
  },
  {
    "word": "曇る",
    "reading": "くもる",
    "meaning": "to become cloudy, to become dim",
    "level": "5"
  },
  {
    "word": "暗い",
    "reading": "くらい",
    "meaning": "dark, gloomy",
    "level": "5"
  },
  {
    "word": "～くらい; ぐらい",
    "reading": "～くらい; ぐらい",
    "meaning": "approximate (quantity)",
    "level": "5"
  },
  {
    "word": "クラス",
    "reading": "クラス",
    "meaning": "a class",
    "level": "5"
  },
  {
    "word": "グラム",
    "reading": "グラム",
    "meaning": "gram",
    "level": "5"
  },
  {
    "word": "来る",
    "reading": "くる",
    "meaning": "to come",
    "level": "5"
  },
  {
    "word": "車",
    "reading": "くるま",
    "meaning": "car, vehicle",
    "level": "5"
  },
  {
    "word": "黒",
    "reading": "くろ",
    "meaning": "black",
    "level": "5"
  },
  {
    "word": "黒い",
    "reading": "くろい",
    "meaning": "black; dark",
    "level": "5"
  },
  {
    "word": "警官",
    "reading": "けいかん",
    "meaning": "police officer",
    "level": "5"
  },
  {
    "word": "今朝",
    "reading": "けさ",
    "meaning": "this morning",
    "level": "5"
  },
  {
    "word": "消す",
    "reading": "けす",
    "meaning": "to erase, to delete, to turn off power",
    "level": "5"
  },
  {
    "word": "結構",
    "reading": "けっこう",
    "meaning": "splendid; enough, tolerably",
    "level": "5"
  },
  {
    "word": "結婚",
    "reading": "けっこん (する)",
    "meaning": "marriage (get married)",
    "level": "5"
  },
  {
    "word": "月曜日",
    "reading": "げつようび",
    "meaning": "Monday",
    "level": "5"
  },
  {
    "word": "玄関",
    "reading": "げんかん",
    "meaning": "entrance (to a house or a building)",
    "level": "5"
  },
  {
    "word": "元気",
    "reading": "げんき",
    "meaning": "health(y), energetic",
    "level": "5"
  },
  {
    "word": "～個",
    "reading": "～こ",
    "meaning": "counter for small items (e.g., fruits, cups)",
    "level": "5"
  },
  {
    "word": "五",
    "reading": "ご",
    "meaning": "five",
    "level": "5"
  },
  {
    "word": "～語",
    "reading": "～ご",
    "meaning": "word, language",
    "level": "5"
  },
  {
    "word": "公園",
    "reading": "こうえん",
    "meaning": "a park",
    "level": "5"
  },
  {
    "word": "交差点",
    "reading": "こうさてん",
    "meaning": "intersection",
    "level": "5"
  },
  {
    "word": "紅茶",
    "reading": "こうちゃ",
    "meaning": "black tea",
    "level": "5"
  },
  {
    "word": "交番",
    "reading": "こうばん",
    "meaning": "police box",
    "level": "5"
  },
  {
    "word": "声",
    "reading": "こえ",
    "meaning": "voice",
    "level": "5"
  },
  {
    "word": "コート",
    "reading": "コート",
    "meaning": "coat; court (e.g., tennis)",
    "level": "5"
  },
  {
    "word": "コーヒー",
    "reading": "コーヒー",
    "meaning": "coffee",
    "level": "5"
  },
  {
    "word": "ここ",
    "reading": "ここ",
    "meaning": "here, this place",
    "level": "5"
  },
  {
    "word": "午後",
    "reading": "ごご",
    "meaning": "afternoon, P.M.",
    "level": "5"
  },
  {
    "word": "九日",
    "reading": "ここのか",
    "meaning": "nine days; ninth day of the month",
    "level": "5"
  },
  {
    "word": "九つ",
    "reading": "ここのつ",
    "meaning": "nine things",
    "level": "5"
  },
  {
    "word": "午前",
    "reading": "ごぜん",
    "meaning": "morning, A.M.",
    "level": "5"
  },
  {
    "word": "答える",
    "reading": "こたえる",
    "meaning": "to answer, to reply",
    "level": "5"
  },
  {
    "word": "こちら",
    "reading": "こちら",
    "meaning": "this person (polite); this way (polite)",
    "level": "5"
  },
  {
    "word": "こっち",
    "reading": "こっち",
    "meaning": "this person; this direction; this side",
    "level": "5"
  },
  {
    "word": "コップ",
    "reading": "コップ",
    "meaning": "a tumbler; a glass",
    "level": "5"
  },
  {
    "word": "今年",
    "reading": "ことし",
    "meaning": "this year",
    "level": "5"
  },
  {
    "word": "言葉",
    "reading": "ことば",
    "meaning": "language; word(s); expression(s)",
    "level": "5"
  },
  {
    "word": "子供",
    "reading": "こども",
    "meaning": "child(ren)",
    "level": "5"
  },
  {
    "word": "この",
    "reading": "この",
    "meaning": "this",
    "level": "5"
  },
  {
    "word": "御飯",
    "reading": "ごはん",
    "meaning": "rice (cooked); meal",
    "level": "5"
  },
  {
    "word": "コピーする",
    "reading": "コピーする",
    "meaning": "to copy",
    "level": "5"
  },
  {
    "word": "困る",
    "reading": "こまる",
    "meaning": "to be bothered, to have difficulty",
    "level": "5"
  },
  {
    "word": "これ",
    "reading": "これ",
    "meaning": "this one",
    "level": "5"
  },
  {
    "word": "～ころ; ～ごろ",
    "reading": "～ころ; ～ごろ",
    "meaning": "about, toward, approximately (time)",
    "level": "5"
  },
  {
    "word": "今月",
    "reading": "こんげつ",
    "meaning": "this month",
    "level": "5"
  },
  {
    "word": "今週",
    "reading": "こんしゅう",
    "meaning": "this week",
    "level": "5"
  },
  {
    "word": "こんな",
    "reading": "こんな",
    "meaning": "such, like this",
    "level": "5"
  },
  {
    "word": "今晩",
    "reading": "こんばん",
    "meaning": "tonight, this evening",
    "level": "5"
  },
  {
    "word": "さあ",
    "reading": "さあ",
    "meaning": "come now, well",
    "level": "5"
  },
  {
    "word": "～歳",
    "reading": "～さい",
    "meaning": "~ years old",
    "level": "5"
  },
  {
    "word": "財布",
    "reading": "さいふ",
    "meaning": "wallet",
    "level": "5"
  },
  {
    "word": "魚",
    "reading": "さかな",
    "meaning": "fish",
    "level": "5"
  },
  {
    "word": "先",
    "reading": "さき",
    "meaning": "future; recent, previous",
    "level": "5"
  },
  {
    "word": "咲く",
    "reading": "さく",
    "meaning": "to bloom",
    "level": "5"
  },
  {
    "word": "作文",
    "reading": "さくぶん",
    "meaning": "essay; composition",
    "level": "5"
  },
  {
    "word": "差す",
    "reading": "さす",
    "meaning": "to raise (stretch out) hands, to raise (e.g., umbrella)",
    "level": "5"
  },
  {
    "word": "～冊",
    "reading": "～さつ",
    "meaning": "counter for books",
    "level": "5"
  },
  {
    "word": "雑誌",
    "reading": "ざっし",
    "meaning": "magazine, journal",
    "level": "5"
  },
  {
    "word": "砂糖",
    "reading": "さとう",
    "meaning": "sugar",
    "level": "5"
  },
  {
    "word": "寒い",
    "reading": "さむい",
    "meaning": "cold (in reference to weather)",
    "level": "5"
  },
  {
    "word": "さ来年",
    "reading": "さらいねん",
    "meaning": "year after next",
    "level": "5"
  },
  {
    "word": "～さん",
    "reading": "～さん",
    "meaning": "Mr. ~, Ms. ~",
    "level": "5"
  },
  {
    "word": "三",
    "reading": "さん",
    "meaning": "three",
    "level": "5"
  },
  {
    "word": "散歩",
    "reading": "さんぽ (する)",
    "meaning": "walk, stroll",
    "level": "5"
  },
  {
    "word": "四",
    "reading": "し",
    "meaning": "four",
    "level": "5"
  },
  {
    "word": "～時",
    "reading": "～じ",
    "meaning": "~ o'clock (time)",
    "level": "5"
  },
  {
    "word": "塩",
    "reading": "しお",
    "meaning": "salt",
    "level": "5"
  },
  {
    "word": "しかし",
    "reading": "しかし",
    "meaning": "however; but",
    "level": "5"
  },
  {
    "word": "時間",
    "reading": "じかん",
    "meaning": "time",
    "level": "5"
  },
  {
    "word": "～時間",
    "reading": "～じかん",
    "meaning": "~ hours",
    "level": "5"
  },
  {
    "word": "仕事",
    "reading": "しごと",
    "meaning": "work, job, occupation, employment",
    "level": "5"
  },
  {
    "word": "辞書",
    "reading": "じしょ",
    "meaning": "dictionary",
    "level": "5"
  },
  {
    "word": "静か",
    "reading": "しずか",
    "meaning": "quiet, calm",
    "level": "5"
  },
  {
    "word": "下",
    "reading": "した",
    "meaning": "under, below, beneath",
    "level": "5"
  },
  {
    "word": "七",
    "reading": "しち",
    "meaning": "seven",
    "level": "5"
  },
  {
    "word": "質問",
    "reading": "しつもん",
    "meaning": "question, inquiry",
    "level": "5"
  },
  {
    "word": "自転車",
    "reading": "じてんしゃ",
    "meaning": "bicycle",
    "level": "5"
  },
  {
    "word": "自動車",
    "reading": "じどうしゃ",
    "meaning": "automobile",
    "level": "5"
  },
  {
    "word": "死ぬ",
    "reading": "しぬ",
    "meaning": "to die",
    "level": "5"
  },
  {
    "word": "字引",
    "reading": "じびき",
    "meaning": "dictionary",
    "level": "5"
  },
  {
    "word": "自分",
    "reading": "じぶん",
    "meaning": "myself, oneself",
    "level": "5"
  },
  {
    "word": "閉まる",
    "reading": "しまる",
    "meaning": "to close, to be closed",
    "level": "5"
  },
  {
    "word": "閉める",
    "reading": "しめる",
    "meaning": "to close, to shut",
    "level": "5"
  },
  {
    "word": "締める",
    "reading": "しめる",
    "meaning": "to tie, to fasten, to tighten",
    "level": "5"
  },
  {
    "word": "じゃ; じゃあ",
    "reading": "じゃ; じゃあ",
    "meaning": "well, well then",
    "level": "5"
  },
  {
    "word": "写真",
    "reading": "しゃしん",
    "meaning": "a picture; a photograph",
    "level": "5"
  },
  {
    "word": "シャツ",
    "reading": "シャツ",
    "meaning": "shirt",
    "level": "5"
  },
  {
    "word": "シャワー",
    "reading": "シャワー",
    "meaning": "shower",
    "level": "5"
  },
  {
    "word": "十",
    "reading": "じゅう",
    "meaning": "ten",
    "level": "5"
  },
  {
    "word": "～中",
    "reading": "～じゅう",
    "meaning": "during, while",
    "level": "5"
  },
  {
    "word": "～週間",
    "reading": "～しゅうかん",
    "meaning": "~ weeks",
    "level": "5"
  },
  {
    "word": "授業",
    "reading": "じゅぎょう",
    "meaning": "a class (of school)",
    "level": "5"
  },
  {
    "word": "宿題",
    "reading": "しゅくだい",
    "meaning": "homework",
    "level": "5"
  },
  {
    "word": "上手",
    "reading": "じょうず",
    "meaning": "be good at, skillful",
    "level": "5"
  },
  {
    "word": "丈夫",
    "reading": "じょうぶ",
    "meaning": "strong, solid, durable",
    "level": "5"
  },
  {
    "word": "醤油",
    "reading": "しょうゆ",
    "meaning": "soy sauce",
    "level": "5"
  },
  {
    "word": "食堂",
    "reading": "しょくどう",
    "meaning": "cafeteria, dining hall",
    "level": "5"
  },
  {
    "word": "知る",
    "reading": "しる",
    "meaning": "to know, to understand",
    "level": "5"
  },
  {
    "word": "白",
    "reading": "しろ",
    "meaning": "white",
    "level": "5"
  },
  {
    "word": "白い",
    "reading": "しろい",
    "meaning": "white",
    "level": "5"
  },
  {
    "word": "～人",
    "reading": "～じん",
    "meaning": "counter for people",
    "level": "5"
  },
  {
    "word": "新聞",
    "reading": "しんぶん",
    "meaning": "newspaper",
    "level": "5"
  },
  {
    "word": "水曜日",
    "reading": "すいようび",
    "meaning": "Wednesday",
    "level": "5"
  },
  {
    "word": "吸う",
    "reading": "すう",
    "meaning": "to breathe in, to suck",
    "level": "5"
  },
  {
    "word": "スカート",
    "reading": "スカート",
    "meaning": "skirt",
    "level": "5"
  },
  {
    "word": "好き",
    "reading": "すき",
    "meaning": "liking, fondness, love",
    "level": "5"
  },
  {
    "word": "～すぎ",
    "reading": "～すぎ",
    "meaning": "past; to exceed, ~ too much",
    "level": "5"
  },
  {
    "word": "少ない",
    "reading": "すくない",
    "meaning": "a little; a few",
    "level": "5"
  },
  {
    "word": "すぐに",
    "reading": "すぐに",
    "meaning": "immediately, soon",
    "level": "5"
  },
  {
    "word": "少し",
    "reading": "すこし",
    "meaning": "little, few",
    "level": "5"
  },
  {
    "word": "涼しい",
    "reading": "すずしい",
    "meaning": "cool, refreshing (in reference to weather)",
    "level": "5"
  },
  {
    "word": "～ずつ",
    "reading": "～ずつ",
    "meaning": "at a time",
    "level": "5"
  },
  {
    "word": "ストーブ",
    "reading": "ストーブ",
    "meaning": "heater (lit: stove)",
    "level": "5"
  },
  {
    "word": "スプーン",
    "reading": "スプーン",
    "meaning": "spoon",
    "level": "5"
  },
  {
    "word": "スポーツ",
    "reading": "スポーツ",
    "meaning": "sport(s)",
    "level": "5"
  },
  {
    "word": "ズボン",
    "reading": "ズボン",
    "meaning": "trousers",
    "level": "5"
  },
  {
    "word": "住む",
    "reading": "すむ",
    "meaning": "to reside, to live in",
    "level": "5"
  },
  {
    "word": "する",
    "reading": "する",
    "meaning": "to do, to try; to wear small items (e.g., necktie, watch, etc.)",
    "level": "5"
  },
  {
    "word": "座る",
    "reading": "すわる",
    "meaning": "to sit",
    "level": "5"
  },
  {
    "word": "背",
    "reading": "せい",
    "meaning": "(one's) height, stature",
    "level": "5"
  },
  {
    "word": "生徒",
    "reading": "せいと",
    "meaning": "student; pupil",
    "level": "5"
  },
  {
    "word": "セーター",
    "reading": "セーター",
    "meaning": "sweater",
    "level": "5"
  },
  {
    "word": "石鹸",
    "reading": "せっけん",
    "meaning": "soap",
    "level": "5"
  },
  {
    "word": "背広",
    "reading": "せびろ",
    "meaning": "men's suit",
    "level": "5"
  },
  {
    "word": "狭い",
    "reading": "せまい",
    "meaning": "narrow; not spacious",
    "level": "5"
  },
  {
    "word": "ゼロ",
    "reading": "ゼロ",
    "meaning": "zero",
    "level": "5"
  },
  {
    "word": "千",
    "reading": "せん",
    "meaning": "thousand",
    "level": "5"
  },
  {
    "word": "先月",
    "reading": "せんげつ",
    "meaning": "last month",
    "level": "5"
  },
  {
    "word": "先週",
    "reading": "せんしゅう",
    "meaning": "last week",
    "level": "5"
  },
  {
    "word": "先生",
    "reading": "せんせい",
    "meaning": "teacher, professor; master; doctor",
    "level": "5"
  },
  {
    "word": "洗濯",
    "reading": "せんたく",
    "meaning": "washing, laundry",
    "level": "5"
  },
  {
    "word": "全部",
    "reading": "ぜんぶ",
    "meaning": "all, entire, whole",
    "level": "5"
  },
  {
    "word": "そう; そうです",
    "reading": "そう; そうです",
    "meaning": "yes; appears, to be the case",
    "level": "5"
  },
  {
    "word": "掃除",
    "reading": "そうじ (する)",
    "meaning": "cleaning, sweeping",
    "level": "5"
  },
  {
    "word": "そうして; そして",
    "reading": "そうして; そして",
    "meaning": "and, like that",
    "level": "5"
  },
  {
    "word": "そこ",
    "reading": "そこ",
    "meaning": "that place, there; bottom, sole",
    "level": "5"
  },
  {
    "word": "そちら",
    "reading": "そちら",
    "meaning": "over there",
    "level": "5"
  },
  {
    "word": "そっち",
    "reading": "そっち",
    "meaning": "over there",
    "level": "5"
  },
  {
    "word": "外",
    "reading": "そと",
    "meaning": "outside, exterior",
    "level": "5"
  },
  {
    "word": "その",
    "reading": "その",
    "meaning": "that",
    "level": "5"
  },
  {
    "word": "そば",
    "reading": "そば",
    "meaning": "near, close, beside; Japanese traditional buckwheat noodle",
    "level": "5"
  },
  {
    "word": "空",
    "reading": "そら",
    "meaning": "sky",
    "level": "5"
  },
  {
    "word": "それ",
    "reading": "それ",
    "meaning": "that one",
    "level": "5"
  },
  {
    "word": "それから",
    "reading": "それから",
    "meaning": "and then, after that",
    "level": "5"
  },
  {
    "word": "それでは",
    "reading": "それでは",
    "meaning": "in that situation, well then...",
    "level": "5"
  },
  {
    "word": "～台",
    "reading": "～だい",
    "meaning": "counter for vehicles; machines",
    "level": "5"
  },
  {
    "word": "大学",
    "reading": "だいがく",
    "meaning": "college; university",
    "level": "5"
  },
  {
    "word": "大使館",
    "reading": "たいしかん",
    "meaning": "embassy",
    "level": "5"
  },
  {
    "word": "大丈夫",
    "reading": "だいじょうぶ",
    "meaning": "It's ok (all right); No need to worry; Everything is under control",
    "level": "5"
  },
  {
    "word": "大好き",
    "reading": "だいすき",
    "meaning": "very like-able, like very much",
    "level": "5"
  },
  {
    "word": "大切",
    "reading": "たいせつ",
    "meaning": "important",
    "level": "5"
  },
  {
    "word": "台所",
    "reading": "だいどころ",
    "meaning": "kitchen",
    "level": "5"
  },
  {
    "word": "大変",
    "reading": "たいへん",
    "meaning": "very; difficult, hard",
    "level": "5"
  },
  {
    "word": "高い",
    "reading": "たかい",
    "meaning": "tall, high; expensive",
    "level": "5"
  },
  {
    "word": "～だけ",
    "reading": "～だけ",
    "meaning": "only ~, just ~, as ~",
    "level": "5"
  },
  {
    "word": "沢山",
    "reading": "たくさん",
    "meaning": "many, much",
    "level": "5"
  },
  {
    "word": "タクシー",
    "reading": "タクシー",
    "meaning": "taxi",
    "level": "5"
  },
  {
    "word": "出す",
    "reading": "だす",
    "meaning": "to take (something) out; to hand in (something)",
    "level": "5"
  },
  {
    "word": "～たち",
    "reading": "～たち",
    "meaning": "plural suffix",
    "level": "5"
  },
  {
    "word": "立つ",
    "reading": "たつ",
    "meaning": "to stand up",
    "level": "5"
  },
  {
    "word": "たて",
    "reading": "たて",
    "meaning": "length, height",
    "level": "5"
  },
  {
    "word": "建物",
    "reading": "たてもの",
    "meaning": "building",
    "level": "5"
  },
  {
    "word": "楽しい",
    "reading": "たのしい",
    "meaning": "enjoyable, fun",
    "level": "5"
  },
  {
    "word": "頼む",
    "reading": "たのむ",
    "meaning": "to request, to ask (a favor)",
    "level": "5"
  },
  {
    "word": "たばこ",
    "reading": "たばこ",
    "meaning": "tobacco, cigarettes",
    "level": "5"
  },
  {
    "word": "多分",
    "reading": "たぶん",
    "meaning": "perhaps, probably, maybe",
    "level": "5"
  },
  {
    "word": "食べ物",
    "reading": "たべもの",
    "meaning": "food",
    "level": "5"
  },
  {
    "word": "食べる",
    "reading": "たべる",
    "meaning": "to eat",
    "level": "5"
  },
  {
    "word": "卵",
    "reading": "たまご",
    "meaning": "egg",
    "level": "5"
  },
  {
    "word": "誰",
    "reading": "だれ",
    "meaning": "who",
    "level": "5"
  },
  {
    "word": "誰か",
    "reading": "だれか",
    "meaning": "someone",
    "level": "5"
  },
  {
    "word": "誕生日",
    "reading": "たんじょうび",
    "meaning": "birthday",
    "level": "5"
  },
  {
    "word": "段々",
    "reading": "だんだん",
    "meaning": "gradually, by degrees",
    "level": "5"
  },
  {
    "word": "小さい",
    "reading": "ちいさい",
    "meaning": "small, little",
    "level": "5"
  },
  {
    "word": "小さな",
    "reading": "ちいさな",
    "meaning": "small, little",
    "level": "5"
  },
  {
    "word": "近い",
    "reading": "ちかい",
    "meaning": "near, close by, short",
    "level": "5"
  },
  {
    "word": "違う",
    "reading": "ちがう",
    "meaning": "to be different; to differ; wrong",
    "level": "5"
  },
  {
    "word": "近く",
    "reading": "ちかく",
    "meaning": "nearby; in the neighborhood",
    "level": "5"
  },
  {
    "word": "地下鉄",
    "reading": "ちかてつ",
    "meaning": "underground train, subway",
    "level": "5"
  },
  {
    "word": "地図",
    "reading": "ちず",
    "meaning": "a map",
    "level": "5"
  },
  {
    "word": "父",
    "reading": "ちち",
    "meaning": "(my) father",
    "level": "5"
  },
  {
    "word": "茶色",
    "reading": "ちゃいろ",
    "meaning": "brown",
    "level": "5"
  },
  {
    "word": "茶碗",
    "reading": "ちゃわん",
    "meaning": "rice bowl",
    "level": "5"
  },
  {
    "word": "～中",
    "reading": "～ちゅう",
    "meaning": "during, while ~ing",
    "level": "5"
  },
  {
    "word": "丁度",
    "reading": "ちょうど",
    "meaning": "just, right, exactly",
    "level": "5"
  },
  {
    "word": "ちょっと",
    "reading": "ちょっと",
    "meaning": "a little, somewhat; just a little, somewhat",
    "level": "5"
  },
  {
    "word": "一日",
    "reading": "ついたち",
    "meaning": "one day; first day of the month",
    "level": "5"
  },
  {
    "word": "使う",
    "reading": "つかう",
    "meaning": "to use",
    "level": "5"
  },
  {
    "word": "疲れる",
    "reading": "つかれる",
    "meaning": "to get (become) tired; to become fatigued",
    "level": "5"
  },
  {
    "word": "次",
    "reading": "つぎ",
    "meaning": "next",
    "level": "5"
  },
  {
    "word": "着く",
    "reading": "つく",
    "meaning": "to arrive at, to reach",
    "level": "5"
  },
  {
    "word": "机",
    "reading": "つくえ",
    "meaning": "desk",
    "level": "5"
  },
  {
    "word": "作る",
    "reading": "つくる",
    "meaning": "to make, to create",
    "level": "5"
  },
  {
    "word": "つける",
    "reading": "つける",
    "meaning": "to turn on (e.g., a light); to take",
    "level": "5"
  },
  {
    "word": "勤める",
    "reading": "つとめる",
    "meaning": "to work (for)",
    "level": "5"
  },
  {
    "word": "つまらない",
    "reading": "つまらない",
    "meaning": "boring, dull; insignificant",
    "level": "5"
  },
  {
    "word": "冷たい",
    "reading": "つめたい",
    "meaning": "cold (things, people)",
    "level": "5"
  },
  {
    "word": "強い",
    "reading": "つよい",
    "meaning": "strong, powerful",
    "level": "5"
  },
  {
    "word": "手",
    "reading": "て",
    "meaning": "hand",
    "level": "5"
  },
  {
    "word": "テープ",
    "reading": "テープ",
    "meaning": "tape",
    "level": "5"
  },
  {
    "word": "テープレコーダー",
    "reading": "テープレコーダー",
    "meaning": "tape recorder",
    "level": "5"
  },
  {
    "word": "テーブル",
    "reading": "テーブル",
    "meaning": "table",
    "level": "5"
  },
  {
    "word": "出かける",
    "reading": "でかける",
    "meaning": "to go out; to depart",
    "level": "5"
  },
  {
    "word": "手紙",
    "reading": "てがみ",
    "meaning": "letter",
    "level": "5"
  },
  {
    "word": "できる",
    "reading": "できる",
    "meaning": "to be able to (to accomplish)",
    "level": "5"
  },
  {
    "word": "出口",
    "reading": "でぐち",
    "meaning": "an exit",
    "level": "5"
  },
  {
    "word": "テスト",
    "reading": "テスト",
    "meaning": "test",
    "level": "5"
  },
  {
    "word": "では",
    "reading": "では",
    "meaning": "then, well, so",
    "level": "5"
  },
  {
    "word": "デパート",
    "reading": "デパート",
    "meaning": "(abbr.) department store",
    "level": "5"
  },
  {
    "word": "でも",
    "reading": "でも",
    "meaning": "but, however",
    "level": "5"
  },
  {
    "word": "出る",
    "reading": "でる",
    "meaning": "to appear, to leave",
    "level": "5"
  },
  {
    "word": "テレビ",
    "reading": "テレビ",
    "meaning": "television, TV",
    "level": "5"
  },
  {
    "word": "天気",
    "reading": "てんき",
    "meaning": "weather",
    "level": "5"
  },
  {
    "word": "電気",
    "reading": "でんき",
    "meaning": "electricity, (electric) light",
    "level": "5"
  },
  {
    "word": "電車",
    "reading": "でんしゃ",
    "meaning": "electric train",
    "level": "5"
  },
  {
    "word": "電話",
    "reading": "でんわ",
    "meaning": "a telephone",
    "level": "5"
  },
  {
    "word": "戸",
    "reading": "と",
    "meaning": "door (Japanese style)",
    "level": "5"
  },
  {
    "word": "～度",
    "reading": "～ど",
    "meaning": "counter for occurrences; ~ degree; ~ point",
    "level": "5"
  },
  {
    "word": "ドア",
    "reading": "ドア",
    "meaning": "door (Western style)",
    "level": "5"
  },
  {
    "word": "トイレ",
    "reading": "トイレ",
    "meaning": "bathroom; toilet",
    "level": "5"
  },
  {
    "word": "どう",
    "reading": "どう",
    "meaning": "how, in what way",
    "level": "5"
  },
  {
    "word": "どうして",
    "reading": "どうして",
    "meaning": "why, for what reason",
    "level": "5"
  },
  {
    "word": "どうぞ",
    "reading": "どうぞ",
    "meaning": "please, kindly, by all means",
    "level": "5"
  },
  {
    "word": "動物",
    "reading": "どうぶつ",
    "meaning": "animal",
    "level": "5"
  },
  {
    "word": "どうも",
    "reading": "どうも",
    "meaning": "Thank you; somehow; no matter how hard one may try",
    "level": "5"
  },
  {
    "word": "十",
    "reading": "(〜を) とお",
    "meaning": "ten (~)",
    "level": "5"
  },
  {
    "word": "遠い",
    "reading": "とおい",
    "meaning": "far (away), distant",
    "level": "5"
  },
  {
    "word": "十日",
    "reading": "とおか",
    "meaning": "ten days; tenth day of the month",
    "level": "5"
  },
  {
    "word": "～時",
    "reading": "～とき",
    "meaning": "at the time of ~",
    "level": "5"
  },
  {
    "word": "時々",
    "reading": "ときどき",
    "meaning": "sometimes",
    "level": "5"
  },
  {
    "word": "時計",
    "reading": "とけい",
    "meaning": "a watch; a clock",
    "level": "5"
  },
  {
    "word": "どこ",
    "reading": "どこ",
    "meaning": "where, what place",
    "level": "5"
  },
  {
    "word": "所",
    "reading": "ところ",
    "meaning": "place",
    "level": "5"
  },
  {
    "word": "年",
    "reading": "とし",
    "meaning": "year, age",
    "level": "5"
  },
  {
    "word": "図書館",
    "reading": "としょかん",
    "meaning": "library",
    "level": "5"
  },
  {
    "word": "どちら",
    "reading": "どちら",
    "meaning": "which (one) (way); where (polite)",
    "level": "5"
  },
  {
    "word": "どっち",
    "reading": "どっち",
    "meaning": "which one, which way",
    "level": "5"
  },
  {
    "word": "とても",
    "reading": "とても",
    "meaning": "very (much), greatly, exceedingly",
    "level": "5"
  },
  {
    "word": "どなた",
    "reading": "どなた",
    "meaning": "who",
    "level": "5"
  },
  {
    "word": "隣",
    "reading": "となり",
    "meaning": "next to, next door to",
    "level": "5"
  },
  {
    "word": "どの",
    "reading": "どの",
    "meaning": "which",
    "level": "5"
  },
  {
    "word": "飛ぶ",
    "reading": "とぶ",
    "meaning": "to fly, to hop",
    "level": "5"
  },
  {
    "word": "止まる",
    "reading": "とまる",
    "meaning": "to come to a halt",
    "level": "5"
  },
  {
    "word": "友達",
    "reading": "ともだち",
    "meaning": "friend",
    "level": "5"
  },
  {
    "word": "土曜日",
    "reading": "どようび",
    "meaning": "Saturday",
    "level": "5"
  },
  {
    "word": "鳥",
    "reading": "とり",
    "meaning": "chicken (lit., bird)",
    "level": "5"
  },
  {
    "word": "鶏肉",
    "reading": "とりにく",
    "meaning": "chicken meat",
    "level": "5"
  },
  {
    "word": "取る",
    "reading": "とる",
    "meaning": "to take (a class); to get (a grade)",
    "level": "5"
  },
  {
    "word": "撮る",
    "reading": "とる",
    "meaning": "to take (a photo), to make (a film)",
    "level": "5"
  },
  {
    "word": "どれ",
    "reading": "どれ",
    "meaning": "which one",
    "level": "5"
  },
  {
    "word": "どんな",
    "reading": "どんな",
    "meaning": "what, what kind of",
    "level": "5"
  },
  {
    "word": "ない",
    "reading": "ない",
    "meaning": "there isn't, doesn't have",
    "level": "5"
  },
  {
    "word": "ナイフ",
    "reading": "ナイフ",
    "meaning": "knife",
    "level": "5"
  },
  {
    "word": "中",
    "reading": "なか",
    "meaning": "inside, middle, among",
    "level": "5"
  },
  {
    "word": "長い",
    "reading": "ながい",
    "meaning": "long, lengthy",
    "level": "5"
  },
  {
    "word": "鳴く",
    "reading": "なく",
    "meaning": "to make sound (animal)",
    "level": "5"
  },
  {
    "word": "無くす",
    "reading": "なくす",
    "meaning": "to lose something",
    "level": "5"
  },
  {
    "word": "なぜ",
    "reading": "なぜ",
    "meaning": "why (same as どうして)",
    "level": "5"
  },
  {
    "word": "夏",
    "reading": "なつ",
    "meaning": "summer",
    "level": "5"
  },
  {
    "word": "夏休み",
    "reading": "なつやすみ",
    "meaning": "summer vacation",
    "level": "5"
  },
  {
    "word": "～など",
    "reading": "～など",
    "meaning": "et cetera",
    "level": "5"
  },
  {
    "word": "七つ",
    "reading": "ななつ",
    "meaning": "seven things",
    "level": "5"
  },
  {
    "word": "何",
    "reading": "なん; なに",
    "meaning": "what",
    "level": "5"
  },
  {
    "word": "七日",
    "reading": "なのか",
    "meaning": "seven days; seventh day (of the month)",
    "level": "5"
  },
  {
    "word": "名前",
    "reading": "なまえ",
    "meaning": "name",
    "level": "5"
  },
  {
    "word": "習う",
    "reading": "ならう",
    "meaning": "to learn",
    "level": "5"
  },
  {
    "word": "並ぶ",
    "reading": "ならぶ",
    "meaning": "to line up, to stand in a line (v.i.)",
    "level": "5"
  },
  {
    "word": "並べる",
    "reading": "ならべる",
    "meaning": "to put (things) side by side; to line up",
    "level": "5"
  },
  {
    "word": "なる",
    "reading": "なる",
    "meaning": "to become",
    "level": "5"
  },
  {
    "word": "何～",
    "reading": "なん～",
    "meaning": "what sort of ~",
    "level": "5"
  },
  {
    "word": "二",
    "reading": "に",
    "meaning": "two",
    "level": "5"
  },
  {
    "word": "にぎやか",
    "reading": "にぎやか",
    "meaning": "bustling, busy",
    "level": "5"
  },
  {
    "word": "肉",
    "reading": "にく",
    "meaning": "meat",
    "level": "5"
  },
  {
    "word": "西",
    "reading": "にし",
    "meaning": "west",
    "level": "5"
  },
  {
    "word": "～日",
    "reading": "～にち",
    "meaning": "~ day of the month, for ~ days",
    "level": "5"
  },
  {
    "word": "日曜日",
    "reading": "にちようび",
    "meaning": "Sunday",
    "level": "5"
  },
  {
    "word": "荷物",
    "reading": "にもつ",
    "meaning": "luggage; baggage",
    "level": "5"
  },
  {
    "word": "ニュース",
    "reading": "ニュース",
    "meaning": "news",
    "level": "5"
  },
  {
    "word": "庭",
    "reading": "にわ",
    "meaning": "garden",
    "level": "5"
  },
  {
    "word": "～人",
    "reading": "～にん",
    "meaning": "counter for people",
    "level": "5"
  },
  {
    "word": "脱ぐ",
    "reading": "ぬぐ",
    "meaning": "to take off (clothes)",
    "level": "5"
  },
  {
    "word": "温い",
    "reading": "ぬるい",
    "meaning": "lukewarm",
    "level": "5"
  },
  {
    "word": "ネクタイ",
    "reading": "ネクタイ",
    "meaning": "tie, necktie",
    "level": "5"
  },
  {
    "word": "猫",
    "reading": "ねこ",
    "meaning": "cat",
    "level": "5"
  },
  {
    "word": "寝る",
    "reading": "ねる",
    "meaning": "to sleep; to go to sleep; to go to bed",
    "level": "5"
  },
  {
    "word": "～年",
    "reading": "～ねん",
    "meaning": "~ years",
    "level": "5"
  },
  {
    "word": "ノート",
    "reading": "ノート",
    "meaning": "notebook",
    "level": "5"
  },
  {
    "word": "登る",
    "reading": "のぼる",
    "meaning": "to climb",
    "level": "5"
  },
  {
    "word": "飲み物",
    "reading": "のみもの",
    "meaning": "drink, beverage",
    "level": "5"
  },
  {
    "word": "飲む",
    "reading": "のむ",
    "meaning": "to drink",
    "level": "5"
  },
  {
    "word": "乗る",
    "reading": "のる",
    "meaning": "to get on, to ride in, to board",
    "level": "5"
  },
  {
    "word": "歯",
    "reading": "は",
    "meaning": "tooth",
    "level": "5"
  },
  {
    "word": "パーティー",
    "reading": "パーティー",
    "meaning": "a party",
    "level": "5"
  },
  {
    "word": "はい",
    "reading": "はい",
    "meaning": "yes",
    "level": "5"
  },
  {
    "word": "～杯",
    "reading": "～はい",
    "meaning": "counter for cupfuls",
    "level": "5"
  },
  {
    "word": "灰皿",
    "reading": "はいざら",
    "meaning": "ashtray",
    "level": "5"
  },
  {
    "word": "入る",
    "reading": "はいる",
    "meaning": "to enter, to contain, to hold",
    "level": "5"
  },
  {
    "word": "葉書",
    "reading": "はがき",
    "meaning": "postcard",
    "level": "5"
  },
  {
    "word": "はく",
    "reading": "はく",
    "meaning": "to put on (items below your waist)",
    "level": "5"
  },
  {
    "word": "箱",
    "reading": "はこ",
    "meaning": "box",
    "level": "5"
  },
  {
    "word": "橋",
    "reading": "はし",
    "meaning": "bridge",
    "level": "5"
  },
  {
    "word": "箸",
    "reading": "はし",
    "meaning": "chopsticks",
    "level": "5"
  },
  {
    "word": "始まる",
    "reading": "はじまる",
    "meaning": "(something) begins",
    "level": "5"
  },
  {
    "word": "初め; 始め",
    "reading": "はじめ",
    "meaning": "beginning, start",
    "level": "5"
  },
  {
    "word": "初めて",
    "reading": "はじめて",
    "meaning": "for the first time",
    "level": "5"
  },
  {
    "word": "走る",
    "reading": "はしる",
    "meaning": "to run",
    "level": "5"
  },
  {
    "word": "バス",
    "reading": "バス",
    "meaning": "bus; bath; bass",
    "level": "5"
  },
  {
    "word": "バター",
    "reading": "バター",
    "meaning": "butter",
    "level": "5"
  },
  {
    "word": "二十歳",
    "reading": "はたち",
    "meaning": "20 years old",
    "level": "5"
  },
  {
    "word": "働く",
    "reading": "はたらく",
    "meaning": "to work",
    "level": "5"
  },
  {
    "word": "八",
    "reading": "はち",
    "meaning": "eight",
    "level": "5"
  },
  {
    "word": "二十日",
    "reading": "はつか",
    "meaning": "twenty days, twentieth (day of the month)",
    "level": "5"
  },
  {
    "word": "花",
    "reading": "はな",
    "meaning": "flower",
    "level": "5"
  },
  {
    "word": "鼻",
    "reading": "はな",
    "meaning": "nose",
    "level": "5"
  },
  {
    "word": "話",
    "reading": "はなし",
    "meaning": "talk (chat), story",
    "level": "5"
  },
  {
    "word": "話す",
    "reading": "はなす",
    "meaning": "to speak",
    "level": "5"
  },
  {
    "word": "母",
    "reading": "はは",
    "meaning": "(my) mother",
    "level": "5"
  },
  {
    "word": "早い",
    "reading": "はやい",
    "meaning": "early",
    "level": "5"
  },
  {
    "word": "速い",
    "reading": "はやい",
    "meaning": "fast, quick",
    "level": "5"
  },
  {
    "word": "春",
    "reading": "はる",
    "meaning": "spring",
    "level": "5"
  },
  {
    "word": "貼る",
    "reading": "はる",
    "meaning": "to post; to paste; to attach",
    "level": "5"
  },
  {
    "word": "晴れ",
    "reading": "はれ",
    "meaning": "clear (sunny) weather",
    "level": "5"
  },
  {
    "word": "晴れる",
    "reading": "はれる",
    "meaning": "to be sunny",
    "level": "5"
  },
  {
    "word": "半",
    "reading": "はん",
    "meaning": "half (e.g., にじはん | half-past two)",
    "level": "5"
  },
  {
    "word": "晩",
    "reading": "ばん",
    "meaning": "evening",
    "level": "5"
  },
  {
    "word": "～番",
    "reading": "～ばん",
    "meaning": "~st; ~th best",
    "level": "5"
  },
  {
    "word": "パン",
    "reading": "パン",
    "meaning": "bread",
    "level": "5"
  },
  {
    "word": "ハンカチ",
    "reading": "ハンカチ",
    "meaning": "handkerchief",
    "level": "5"
  },
  {
    "word": "番号",
    "reading": "ばんごう",
    "meaning": "number, series of digits",
    "level": "5"
  },
  {
    "word": "晩御飯",
    "reading": "ばんごはん",
    "meaning": "dinner, evening meal",
    "level": "5"
  },
  {
    "word": "半分",
    "reading": "はんぶん",
    "meaning": "half",
    "level": "5"
  },
  {
    "word": "東",
    "reading": "ひがし",
    "meaning": "east",
    "level": "5"
  },
  {
    "word": "～匹",
    "reading": "～ひき",
    "meaning": "counter for small animals",
    "level": "5"
  },
  {
    "word": "引く",
    "reading": "ひく",
    "meaning": "to pull, to draw; subtract",
    "level": "5"
  },
  {
    "word": "弾く",
    "reading": "ひく",
    "meaning": "to play (a string instrument or piano)",
    "level": "5"
  },
  {
    "word": "低い",
    "reading": "ひくい",
    "meaning": "short, low",
    "level": "5"
  },
  {
    "word": "飛行機",
    "reading": "ひこうき",
    "meaning": "airplane",
    "level": "5"
  },
  {
    "word": "左",
    "reading": "ひだり",
    "meaning": "left hand side",
    "level": "5"
  },
  {
    "word": "人",
    "reading": "ひと",
    "meaning": "man, person",
    "level": "5"
  },
  {
    "word": "一つ",
    "reading": "ひとつ",
    "meaning": "one thing",
    "level": "5"
  },
  {
    "word": "一月",
    "reading": "ひとつき",
    "meaning": "one month",
    "level": "5"
  },
  {
    "word": "一人",
    "reading": "ひとり",
    "meaning": "one person",
    "level": "5"
  },
  {
    "word": "暇",
    "reading": "ひま",
    "meaning": "free time, leisure",
    "level": "5"
  },
  {
    "word": "百",
    "reading": "ひゃく",
    "meaning": "hundred",
    "level": "5"
  },
  {
    "word": "病院",
    "reading": "びょういん",
    "meaning": "hospital",
    "level": "5"
  },
  {
    "word": "病気",
    "reading": "びょうき",
    "meaning": "illness; sickness",
    "level": "5"
  },
  {
    "word": "平仮名",
    "reading": "ひらがな",
    "meaning": "hiragana",
    "level": "5"
  },
  {
    "word": "昼",
    "reading": "ひる",
    "meaning": "noon, daytime",
    "level": "5"
  },
  {
    "word": "昼御飯",
    "reading": "ひるごはん",
    "meaning": "lunch, midday meal",
    "level": "5"
  },
  {
    "word": "広い",
    "reading": "ひろい",
    "meaning": "spacious; wide; broad",
    "level": "5"
  },
  {
    "word": "フィルム",
    "reading": "フィルム",
    "meaning": "film (roll of)",
    "level": "5"
  },
  {
    "word": "封筒",
    "reading": "ふうとう",
    "meaning": "envelope",
    "level": "5"
  },
  {
    "word": "プール",
    "reading": "プール",
    "meaning": "swimming pool",
    "level": "5"
  },
  {
    "word": "フォーク",
    "reading": "フォーク",
    "meaning": "fork",
    "level": "5"
  },
  {
    "word": "吹く",
    "reading": "ふく",
    "meaning": "to blow (wind, etc.)",
    "level": "5"
  },
  {
    "word": "服",
    "reading": "ふく",
    "meaning": "clothes",
    "level": "5"
  },
  {
    "word": "二つ",
    "reading": "ふたつ",
    "meaning": "two things",
    "level": "5"
  },
  {
    "word": "豚肉",
    "reading": "ぶたにく",
    "meaning": "pork",
    "level": "5"
  },
  {
    "word": "二人",
    "reading": "ふたり",
    "meaning": "two people",
    "level": "5"
  },
  {
    "word": "二日",
    "reading": "ふつか",
    "meaning": "two days; second day of the month",
    "level": "5"
  },
  {
    "word": "太い",
    "reading": "ふとい",
    "meaning": "fat, thick",
    "level": "5"
  },
  {
    "word": "冬",
    "reading": "ふゆ",
    "meaning": "winter",
    "level": "5"
  },
  {
    "word": "降る",
    "reading": "ふる",
    "meaning": "to precipitate, to fall (e.g., rain, snow, etc.)",
    "level": "5"
  },
  {
    "word": "古い",
    "reading": "ふるい",
    "meaning": "old (in reference to objects, not people), aged, ancient",
    "level": "5"
  },
  {
    "word": "～分",
    "reading": "～ふん",
    "meaning": "~ minutes",
    "level": "5"
  },
  {
    "word": "文章",
    "reading": "ぶんしょう",
    "meaning": "sentence, text",
    "level": "5"
  },
  {
    "word": "ページ",
    "reading": "ページ",
    "meaning": "a page",
    "level": "5"
  },
  {
    "word": "下手",
    "reading": "へた",
    "meaning": "unskillful, poor",
    "level": "5"
  },
  {
    "word": "ベッド",
    "reading": "ベッド",
    "meaning": "bed",
    "level": "5"
  },
  {
    "word": "ペット",
    "reading": "ペット",
    "meaning": "pet",
    "level": "5"
  },
  {
    "word": "部屋",
    "reading": "へや",
    "meaning": "a room",
    "level": "5"
  },
  {
    "word": "辺",
    "reading": "へん",
    "meaning": "area, vicinity",
    "level": "5"
  },
  {
    "word": "ペン",
    "reading": "ペン",
    "meaning": "pen",
    "level": "5"
  },
  {
    "word": "勉強",
    "reading": "べんきょう (する)",
    "meaning": "study",
    "level": "5"
  },
  {
    "word": "便利",
    "reading": "べんり",
    "meaning": "convenient, handy",
    "level": "5"
  },
  {
    "word": "帽子",
    "reading": "ぼうし",
    "meaning": "hat; cap",
    "level": "5"
  },
  {
    "word": "ボールペン",
    "reading": "ボールペン",
    "meaning": "ball-point pen",
    "level": "5"
  },
  {
    "word": "外",
    "reading": "ほか",
    "meaning": "other, the rest",
    "level": "5"
  },
  {
    "word": "ポケット",
    "reading": "ポケット",
    "meaning": "pocket",
    "level": "5"
  },
  {
    "word": "欲しい",
    "reading": "ほしい",
    "meaning": "to want, in need of",
    "level": "5"
  },
  {
    "word": "ポスト",
    "reading": "ポスト",
    "meaning": "mailbox; post, position",
    "level": "5"
  },
  {
    "word": "細い",
    "reading": "ほそい",
    "meaning": "thin, slender, fine",
    "level": "5"
  },
  {
    "word": "ボタン",
    "reading": "ボタン",
    "meaning": "button",
    "level": "5"
  },
  {
    "word": "ホテル",
    "reading": "ホテル",
    "meaning": "hotel",
    "level": "5"
  },
  {
    "word": "本",
    "reading": "ほん",
    "meaning": "book",
    "level": "5"
  },
  {
    "word": "～本",
    "reading": "～ほん",
    "meaning": "counter for long cylindrical things",
    "level": "5"
  },
  {
    "word": "本棚",
    "reading": "ほんだな",
    "meaning": "bookshelf",
    "level": "5"
  },
  {
    "word": "本当",
    "reading": "ほんとう",
    "meaning": "real, true",
    "level": "5"
  },
  {
    "word": "～枚",
    "reading": "～まい",
    "meaning": "counter for flat things",
    "level": "5"
  },
  {
    "word": "毎朝",
    "reading": "まいあさ",
    "meaning": "every morning",
    "level": "5"
  },
  {
    "word": "毎月",
    "reading": "まいげつ; まいつき",
    "meaning": "every month, monthly",
    "level": "5"
  },
  {
    "word": "毎週",
    "reading": "まいしゅう",
    "meaning": "every week",
    "level": "5"
  },
  {
    "word": "毎日",
    "reading": "まいにち",
    "meaning": "every day",
    "level": "5"
  },
  {
    "word": "毎年",
    "reading": "まいねん; まいとし",
    "meaning": "every year, yearly, annually",
    "level": "5"
  },
  {
    "word": "毎晩",
    "reading": "まいばん",
    "meaning": "every night",
    "level": "5"
  },
  {
    "word": "前",
    "reading": "まえ",
    "meaning": "before, in front",
    "level": "5"
  },
  {
    "word": "～前",
    "reading": "～まえ",
    "meaning": "in front of ~",
    "level": "5"
  },
  {
    "word": "曲る",
    "reading": "まがる",
    "meaning": "to turn, to bend",
    "level": "5"
  },
  {
    "word": "まずい",
    "reading": "まずい",
    "meaning": "terrible (in reference to food), unappetizing, unpleasant (taste)",
    "level": "5"
  },
  {
    "word": "また",
    "reading": "また",
    "meaning": "and; furthermore",
    "level": "5"
  },
  {
    "word": "まだ",
    "reading": "まだ",
    "meaning": "yet, still, besides",
    "level": "5"
  },
  {
    "word": "町",
    "reading": "まち",
    "meaning": "town; city",
    "level": "5"
  },
  {
    "word": "待つ",
    "reading": "まつ",
    "meaning": "to wait",
    "level": "5"
  },
  {
    "word": "まっすぐ",
    "reading": "まっすぐ",
    "meaning": "straight (ahead), direct",
    "level": "5"
  },
  {
    "word": "マッチ",
    "reading": "マッチ",
    "meaning": "match",
    "level": "5"
  },
  {
    "word": "窓",
    "reading": "まど",
    "meaning": "window",
    "level": "5"
  },
  {
    "word": "丸い; 円い",
    "reading": "まるい",
    "meaning": "round, circular",
    "level": "5"
  },
  {
    "word": "万",
    "reading": "まん",
    "meaning": "ten thousand",
    "level": "5"
  },
  {
    "word": "万年筆",
    "reading": "まんねんひつ",
    "meaning": "fountain pen",
    "level": "5"
  },
  {
    "word": "磨く",
    "reading": "みがく",
    "meaning": "to brush (teeth); to polish",
    "level": "5"
  },
  {
    "word": "右",
    "reading": "みぎ",
    "meaning": "right hand side",
    "level": "5"
  },
  {
    "word": "短い",
    "reading": "みじかい",
    "meaning": "short (length)",
    "level": "5"
  },
  {
    "word": "水",
    "reading": "みず",
    "meaning": "water",
    "level": "5"
  },
  {
    "word": "店",
    "reading": "みせ",
    "meaning": "store, shop",
    "level": "5"
  },
  {
    "word": "見せる",
    "reading": "みせる",
    "meaning": "to show, to display",
    "level": "5"
  },
  {
    "word": "道",
    "reading": "みち",
    "meaning": "road, street; way, directions",
    "level": "5"
  },
  {
    "word": "三日",
    "reading": "みっか",
    "meaning": "three days, third day of the month",
    "level": "5"
  },
  {
    "word": "三つ",
    "reading": "みっつ",
    "meaning": "three things",
    "level": "5"
  },
  {
    "word": "緑",
    "reading": "みどり",
    "meaning": "green",
    "level": "5"
  },
  {
    "word": "皆さん",
    "reading": "みなさん",
    "meaning": "all of you, everyone",
    "level": "5"
  },
  {
    "word": "南",
    "reading": "みなみ",
    "meaning": "South",
    "level": "5"
  },
  {
    "word": "耳",
    "reading": "みみ",
    "meaning": "ear",
    "level": "5"
  },
  {
    "word": "見る",
    "reading": "みる",
    "meaning": "to see, to look",
    "level": "5"
  },
  {
    "word": "みんな",
    "reading": "みんな",
    "meaning": "all, everyone, everybody",
    "level": "5"
  },
  {
    "word": "六日",
    "reading": "むいか",
    "meaning": "six days; sixth day of month",
    "level": "5"
  },
  {
    "word": "向こう",
    "reading": "むこう",
    "meaning": "beyond, over there",
    "level": "5"
  },
  {
    "word": "難しい",
    "reading": "むずかしい",
    "meaning": "difficult",
    "level": "5"
  },
  {
    "word": "六つ",
    "reading": "むっつ",
    "meaning": "six things",
    "level": "5"
  },
  {
    "word": "村",
    "reading": "むら",
    "meaning": "village",
    "level": "5"
  },
  {
    "word": "目",
    "reading": "め",
    "meaning": "eye(s)",
    "level": "5"
  },
  {
    "word": "メートル",
    "reading": "メートル",
    "meaning": "meter",
    "level": "5"
  },
  {
    "word": "眼鏡",
    "reading": "めがね",
    "meaning": "eye glasses",
    "level": "5"
  },
  {
    "word": "もう",
    "reading": "もう",
    "meaning": "already; again; more",
    "level": "5"
  },
  {
    "word": "木曜日",
    "reading": "もくようび",
    "meaning": "Thursday",
    "level": "5"
  },
  {
    "word": "もしもし",
    "reading": "もしもし",
    "meaning": "Hello? (used on the phone)",
    "level": "5"
  },
  {
    "word": "持つ",
    "reading": "もつ",
    "meaning": "to hold, to carry; to possess",
    "level": "5"
  },
  {
    "word": "もっと",
    "reading": "もっと",
    "meaning": "more",
    "level": "5"
  },
  {
    "word": "物",
    "reading": "もの",
    "meaning": "thing (concrete object)",
    "level": "5"
  },
  {
    "word": "門",
    "reading": "もん",
    "meaning": "gate",
    "level": "5"
  },
  {
    "word": "問題",
    "reading": "もんだい",
    "meaning": "a problem",
    "level": "5"
  },
  {
    "word": "～屋",
    "reading": "～や",
    "meaning": "~ shop",
    "level": "5"
  },
  {
    "word": "八百屋",
    "reading": "やおや",
    "meaning": "greengrocer",
    "level": "5"
  },
  {
    "word": "野菜",
    "reading": "やさい",
    "meaning": "vegetable",
    "level": "5"
  },
  {
    "word": "易しい",
    "reading": "やさしい",
    "meaning": "easy, plain, simple",
    "level": "5"
  },
  {
    "word": "安い",
    "reading": "やすい",
    "meaning": "inexpensive; cheap (things)",
    "level": "5"
  },
  {
    "word": "休み",
    "reading": "やすみ",
    "meaning": "holiday; day off; absence",
    "level": "5"
  },
  {
    "word": "休む",
    "reading": "やすむ",
    "meaning": "to rest, to have a break, to get time off",
    "level": "5"
  },
  {
    "word": "八つ",
    "reading": "やっつ",
    "meaning": "eight things",
    "level": "5"
  },
  {
    "word": "山",
    "reading": "やま",
    "meaning": "mountain",
    "level": "5"
  },
  {
    "word": "やる",
    "reading": "やる",
    "meaning": "to do; to give (to pets, parents, siblings, etc.)",
    "level": "5"
  },
  {
    "word": "夕方",
    "reading": "ゆうがた",
    "meaning": "late afternoon (typically just before dinner time), evening",
    "level": "5"
  },
  {
    "word": "夕飯",
    "reading": "ゆうはん",
    "meaning": "dinner, supper, evening meal",
    "level": "5"
  },
  {
    "word": "郵便局",
    "reading": "ゆうびんきょく",
    "meaning": "post office",
    "level": "5"
  },
  {
    "word": "昨夜",
    "reading": "ゆうべ",
    "meaning": "last night",
    "level": "5"
  },
  {
    "word": "有名",
    "reading": "ゆうめい",
    "meaning": "famous",
    "level": "5"
  },
  {
    "word": "雪",
    "reading": "ゆき",
    "meaning": "snow",
    "level": "5"
  },
  {
    "word": "ゆっくりと",
    "reading": "ゆっくりと",
    "meaning": "slowly, at ease",
    "level": "5"
  },
  {
    "word": "八日",
    "reading": "ようか",
    "meaning": "eight days; eighth day of the month",
    "level": "5"
  },
  {
    "word": "洋服",
    "reading": "ようふく",
    "meaning": "Western-style clothes",
    "level": "5"
  },
  {
    "word": "よく",
    "reading": "よく",
    "meaning": "frequently, often (much); well, skillfully",
    "level": "5"
  },
  {
    "word": "横",
    "reading": "よこ",
    "meaning": "beside; side; width",
    "level": "5"
  },
  {
    "word": "四日",
    "reading": "よっか",
    "meaning": "four days; fourth day of the month",
    "level": "5"
  },
  {
    "word": "四つ",
    "reading": "よっつ",
    "meaning": "four things",
    "level": "5"
  },
  {
    "word": "呼ぶ",
    "reading": "よぶ",
    "meaning": "to call (one's name); to invite",
    "level": "5"
  },
  {
    "word": "読む",
    "reading": "よむ",
    "meaning": "to read",
    "level": "5"
  },
  {
    "word": "夜",
    "reading": "よる",
    "meaning": "evening, night",
    "level": "5"
  },
  {
    "word": "弱い",
    "reading": "よわい",
    "meaning": "weak",
    "level": "5"
  },
  {
    "word": "来月",
    "reading": "らいげつ",
    "meaning": "next month",
    "level": "5"
  },
  {
    "word": "来週",
    "reading": "らいしゅう",
    "meaning": "next week",
    "level": "5"
  },
  {
    "word": "来年",
    "reading": "らいねん",
    "meaning": "next year",
    "level": "5"
  },
  {
    "word": "ラジオ",
    "reading": "ラジオ",
    "meaning": "radio",
    "level": "5"
  },
  {
    "word": "ラジオカセ",
    "reading": "ラジオカセ",
    "meaning": "radio cassette player",
    "level": "5"
  },
  {
    "word": "りっぱ",
    "reading": "りっぱ",
    "meaning": "splendid, fine",
    "level": "5"
  },
  {
    "word": "留学生",
    "reading": "りゅうがくせい",
    "meaning": "international student",
    "level": "5"
  },
  {
    "word": "両親",
    "reading": "りょうしん",
    "meaning": "parents (lit., both parents)",
    "level": "5"
  },
  {
    "word": "料理",
    "reading": "りょうり",
    "meaning": "cooking; cuisine",
    "level": "5"
  },
  {
    "word": "旅行",
    "reading": "りょこう",
    "meaning": "travel, trip",
    "level": "5"
  },
  {
    "word": "零",
    "reading": "れい",
    "meaning": "zero, nought",
    "level": "5"
  },
  {
    "word": "冷蔵庫",
    "reading": "れいぞうこ",
    "meaning": "refrigerator",
    "level": "5"
  },
  {
    "word": "レコード",
    "reading": "レコード",
    "meaning": "record",
    "level": "5"
  },
  {
    "word": "レストラン",
    "reading": "レストラン",
    "meaning": "restaurant",
    "level": "5"
  },
  {
    "word": "練習",
    "reading": "れんしゅう (する)",
    "meaning": "(to) practice",
    "level": "5"
  },
  {
    "word": "廊下",
    "reading": "ろうか",
    "meaning": "corridor",
    "level": "5"
  },
  {
    "word": "六",
    "reading": "ろく",
    "meaning": "six",
    "level": "5"
  },
  {
    "word": "ワイシャツ",
    "reading": "ワイシャツ",
    "meaning": "shirt (lit: white shirt), business shirt",
    "level": "5"
  },
  {
    "word": "若い",
    "reading": "わかい",
    "meaning": "young",
    "level": "5"
  },
  {
    "word": "分かる",
    "reading": "わかる",
    "meaning": "to understand",
    "level": "5"
  },
  {
    "word": "忘れる",
    "reading": "わすれる",
    "meaning": "to forget",
    "level": "5"
  },
  {
    "word": "私",
    "reading": "わたし",
    "meaning": "I, myself",
    "level": "5"
  },
  {
    "word": "私",
    "reading": "わたくし",
    "meaning": "I (formal), myself, private affairs",
    "level": "5"
  },
  {
    "word": "渡す",
    "reading": "わたす",
    "meaning": "to hand (something) over (v.t.); to get across",
    "level": "5"
  },
  {
    "word": "渡る",
    "reading": "わたる",
    "meaning": "to cross over, to go across",
    "level": "5"
  },
  {
    "word": "悪い",
    "reading": "わるい",
    "meaning": "bad, sinful; inferior",
    "level": "5"
  }
];