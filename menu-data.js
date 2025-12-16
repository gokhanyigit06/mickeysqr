// Menu Data - Turkish Restaurant Menu
const menuData = [
    // Başlangıçlar (Starters)
    {
        id: 1,
        name: "Günün Çorbası",
        nameEn: "Soup Of The Day",
        price: 150,
        description: "Günlük taze malzemelerle hazırlanan özel çorbamız",
        category: "starters",
        tags: ["vegetarian"],
        image: "soup"
    },
    {
        id: 2,
        name: "Geleneksel Meksika Çorbası",
        nameEn: "Tortilla Soup",
        price: 195,
        description: "Tortilla cipsi, avokado ve taze sebzelerle hazırlanan geleneksel Meksika çorbası",
        category: "starters",
        tags: ["spicy"],
        image: "tortilla-soup"
    },
    
    // Atıştırmalıklar (Snacks)
    {
        id: 3,
        name: "Buffalo Tavuk Kanatları",
        nameEn: "Buffalo Wings",
        price: 295,
        description: "Acılı buffalo soslu tavuk kanatları, patates kızartması ve rokfor sos",
        category: "snacks",
        tags: ["spicy"],
        image: "buffalo-wings"
    },
    {
        id: 4,
        name: "Çıtır Tavuk Parçaları",
        nameEn: "Crispy Chicken Tenders",
        price: 275,
        description: "Cajun baharatlı çıtır tavuk parçacıkları, patates kızartması ve ballı hardal sos",
        category: "snacks",
        tags: [],
        image: "chicken-tenders"
    },
    {
        id: 5,
        name: "Peynir Tabağı",
        nameEn: "Cheese Platter",
        price: 385,
        description: "Eski kaşar, isli çerkez peyniri, mozzarella çubukları, edam, gauda, kızarmış tortilla, ceviz, üzüm",
        category: "snacks",
        tags: ["vegetarian"],
        image: "cheese-platter"
    },
    {
        id: 6,
        name: "Nachos",
        nameEn: "Nachos",
        price: 245,
        description: "Patates kızartması, mevsim yeşillikleri, salsa ve ekşi krema",
        category: "snacks",
        tags: ["vegetarian"],
        image: "nachos"
    },
    {
        id: 7,
        name: "Fish & Chips",
        nameEn: "Fish & Chips",
        price: 325,
        description: "Çıtır kaplamalı balık parçaları, patates kızartması, tartar sos",
        category: "snacks",
        tags: [],
        image: "fish-chips"
    },
    {
        id: 8,
        name: "Karışık Tabak",
        nameEn: "Mixed Platter",
        price: 425,
        description: "Çıtır tavuk, acılı tavuk, mozzarella çubukları, çin böreği, patates kızartması, soslar",
        category: "snacks",
        tags: ["spicy"],
        image: "mixed-platter"
    },
    
    // Salatalar (Salads)
    {
        id: 9,
        name: "Meksika Salatası",
        nameEn: "Mexican Salad",
        price: 225,
        description: "Mevsim yeşillikleri, kırmızı lahana, domates, tane mısır, Meksika biberi ve fasulyesi",
        category: "salads",
        tags: ["vegetarian"],
        image: "mexican-salad"
    },
    {
        id: 10,
        name: "Parmesan Salatası",
        nameEn: "Parmesan Salad",
        price: 265,
        description: "Parmesan peyniri, mevsim yeşillikleri, mini mozarella, ceviz, kurutulmuş domates, roka, balzamik sos",
        category: "salads",
        tags: ["vegetarian"],
        image: "parmesan-salad"
    },
    {
        id: 11,
        name: "Buffalo Tavuk Salatası",
        nameEn: "Buffalo Chicken Salad",
        price: 285,
        description: "Buffalo sos, acılı tavuk, mevsim yeşillikleri, domates, salatalık, tane mısır, rokfor sos",
        category: "salads",
        tags: ["spicy"],
        image: "buffalo-chicken-salad"
    },
    {
        id: 12,
        name: "Peynir Salatası",
        nameEn: "Cheese Salad",
        price: 275,
        description: "Mevsim yeşillikleri, taze nane, süzme peynir, kadayıflı peynir, Ezine beyaz peyniri, mozarella",
        category: "salads",
        tags: ["vegetarian"],
        image: "cheese-salad"
    },
    {
        id: 13,
        name: "Dana Eti Salatası",
        nameEn: "Beef Salad",
        price: 345,
        description: "Izgara dana eti, mevsim yeşillikleri, tatlı mısır, domates, salatalık, pancar turşusu, ballı hardal sos",
        category: "salads",
        tags: [],
        image: "beef-salad"
    },
    {
        id: 14,
        name: "Izgara Somon Salatası",
        nameEn: "Grilled Salmon Salad",
        price: 385,
        description: "Izgara somon, mevsim yeşillikleri, domates, salatalık, tane mısır ve narenciye sos",
        category: "salads",
        tags: [],
        image: "salmon-salad"
    },
    
    // Asya Mutfağı (Asian Cuisine)
    {
        id: 15,
        name: "Tavuk Wok",
        nameEn: "Chicken Wok",
        price: 295,
        description: "İstiridye soslu tavuk, soğan, yeşil biber, havuç, ananas, bebek mısır. Pirinç pilavı, udon veya egg noodle ile",
        category: "asian",
        tags: [],
        image: "chicken-wok"
    },
    {
        id: 16,
        name: "Teriyaki Bonfile",
        nameEn: "Teriyaki Beef",
        price: 385,
        description: "Teriyaki soslu bonfile, kırmızı biber, yeşil biber, soğan, istiridye mantarı, fıstık. Noodle seçeneği ile",
        category: "asian",
        tags: [],
        image: "teriyaki-beef"
    },
    {
        id: 17,
        name: "Tatlı Acı Tavuk",
        nameEn: "Sweet & Sour Chicken",
        price: 285,
        description: "Tatlı-ekşi tavuk, soğan, yeşil biber, havuç, ananas, bebek mısır. Pirinç pilavı veya noodle ile",
        category: "asian",
        tags: [],
        image: "sweet-sour-chicken"
    },
    
    // Pizza
    {
        id: 18,
        name: "Margherita Pizza",
        nameEn: "Margherita Pizza",
        price: 245,
        description: "Mozzarella peyniri ve domates sos",
        category: "pizza",
        tags: ["vegetarian"],
        image: "margherita"
    },
    {
        id: 19,
        name: "Mantarlı Pizza",
        nameEn: "Mushroom Pizza",
        price: 275,
        description: "Mozzarella, kültür mantarı, istiridye mantarı, köz kırmızı biber, domates sos",
        category: "pizza",
        tags: ["vegetarian"],
        image: "mushroom-pizza"
    },
    {
        id: 20,
        name: "Patlıcanlı Pizza",
        nameEn: "Eggplant Pizza",
        price: 285,
        description: "Patlıcan, mozzarella, kiraz domates, mini mozarella topları",
        category: "pizza",
        tags: ["vegetarian"],
        image: "eggplant-pizza"
    },
    {
        id: 21,
        name: "Köri Tavuklu Pizza",
        nameEn: "Curry Chicken Pizza",
        price: 295,
        description: "Köri baharatlı tavuk dilimleri, mantar, yeşil biber, mozarella",
        category: "pizza",
        tags: [],
        image: "curry-chicken-pizza"
    },
    {
        id: 22,
        name: "Meksika Pizza",
        nameEn: "Mexican Pizza",
        price: 305,
        description: "Mozzarella, dana kıyma, Meksika biberi, Meksika fasulyesi, tane mısır",
        category: "pizza",
        tags: ["spicy"],
        image: "mexican-pizza"
    },
    {
        id: 23,
        name: "Karışık Pizza",
        nameEn: "Mixed Pizza",
        price: 325,
        description: "Mozzarella, sosis, sucuk, salam, dana jambon, tatlı mısır, yeşil zeytin",
        category: "pizza",
        tags: [],
        image: "mixed-pizza"
    },
    {
        id: 24,
        name: "Hawaii Pizza",
        nameEn: "Hawaiian Pizza",
        price: 295,
        description: "Mozzarella peyniri, dana jambon, ananas dilimleri",
        category: "pizza",
        tags: [],
        image: "hawaiian-pizza"
    },
    {
        id: 25,
        name: "BBQ Pizza",
        nameEn: "BBQ Pizza",
        price: 335,
        description: "Mozzarella, tiftik et, kırmızı biber, yeşil biber, karamelize soğan, mısır, BBQ sos",
        category: "pizza",
        tags: [],
        image: "bbq-pizza"
    },
    
    // Burgerler (Burgers)
    {
        id: 26,
        name: "Klasik Burger",
        nameEn: "Classic Burger",
        price: 285,
        description: "Çedar, turşu, domates, karamelize soğan, patates kıtırı",
        category: "burgers",
        tags: [],
        image: "classic-burger"
    },
    {
        id: 27,
        name: "Somon Burger",
        nameEn: "Salmon Burger",
        price: 345,
        description: "Somon köftesi, marul, domates, ızgara soğan, tartar sos, patates kıtırı",
        category: "burgers",
        tags: [],
        image: "salmon-burger"
    },
    {
        id: 28,
        name: "Bonfile Burger",
        nameEn: "Tenderloin Burger",
        price: 395,
        description: "Dana bonfile, trüf hardal sos, istiridye mantarı, çedar sos, karamelize soğan, patates kıtırı",
        category: "burgers",
        tags: [],
        image: "tenderloin-burger"
    },
    {
        id: 29,
        name: "Hawaii Burger",
        nameEn: "Hawaiian Burger",
        price: 315,
        description: "Teriyaki soslu ızgara ananas, dana jambon, çedar peyniri, patates kıtırı",
        category: "burgers",
        tags: [],
        image: "hawaiian-burger"
    },
    {
        id: 30,
        name: "Vegetarian Burger",
        nameEn: "Vegetarian Burger",
        price: 265,
        description: "Domates, karamelize soğan, turşu, patates kıtırı",
        category: "burgers",
        tags: ["vegetarian"],
        image: "veggie-burger"
    },
    {
        id: 31,
        name: "BBQ Burger",
        nameEn: "BBQ Burger",
        price: 325,
        description: "Çedar, bbq sos, domates, turşu, istiridye mantarı, karamelize soğan, patates kıtırı",
        category: "burgers",
        tags: [],
        image: "bbq-burger"
    },
    {
        id: 32,
        name: "Meksika Burger",
        nameEn: "Mexican Burger",
        price: 335,
        description: "Nacho kıtırı, acılı Meksika sos, Meksika fasulyesi, Meksika biberi, avokado sos, patates kıtırı",
        category: "burgers",
        tags: ["spicy"],
        image: "mexican-burger"
    },
    {
        id: 33,
        name: "Çıtır Tavuk Burger",
        nameEn: "Crispy Chicken Burger",
        price: 295,
        description: "Çıtır tavuk eti, ballı hardal sos, domates, turşu, patates kıtırı",
        category: "burgers",
        tags: [],
        image: "crispy-chicken-burger"
    },
    
    // Makarna (Pasta)
    {
        id: 34,
        name: "Acılı Tavuk Fettuccine",
        nameEn: "Spicy Chicken Fettuccine",
        price: 285,
        description: "Krema soslu fettuccine makarna ve acılı tavuk parçacıkları",
        category: "pasta",
        tags: ["spicy"],
        image: "spicy-chicken-fettuccine"
    },
    {
        id: 35,
        name: "Bolonez Makarna",
        nameEn: "Bolognese Pasta",
        price: 265,
        description: "Bolonez sos ve rende mozzarella",
        category: "pasta",
        tags: [],
        image: "bolognese"
    },
    {
        id: 36,
        name: "Mac & Cheese",
        nameEn: "Mac & Cheese",
        price: 245,
        description: "Mickey's'e özel eritilmiş çedar sosu",
        category: "pasta",
        tags: ["vegetarian"],
        image: "mac-cheese"
    },
    {
        id: 37,
        name: "Mantarlı Alfredo",
        nameEn: "Mushroom Alfredo",
        price: 295,
        description: "Mantarlı Alfredo sos ve ızgara tavuk",
        category: "pasta",
        tags: [],
        image: "mushroom-alfredo"
    },
    {
        id: 38,
        name: "Dana Etli Makarna",
        nameEn: "Beef Pasta",
        price: 325,
        description: "Dana eti ve kremalı mantar sos",
        category: "pasta",
        tags: [],
        image: "beef-pasta"
    },
    {
        id: 39,
        name: "Ev Yapımı Mantı",
        nameEn: "Homemade Manti",
        price: 275,
        description: "Ev yapımı mantı, yoğurt ve salça sos",
        category: "pasta",
        tags: [],
        image: "manti"
    },
    {
        id: 40,
        name: "Somon Fettuccine",
        nameEn: "Salmon Fettuccine",
        price: 365,
        description: "Somon ve kremalı mantar soslu fettuccine",
        category: "pasta",
        tags: [],
        image: "salmon-fettuccine"
    },
    
    // Meksika Mutfağı (Mexican Cuisine)
    {
        id: 41,
        name: "Dana Kıymalı Taco",
        nameEn: "Beef Taco",
        price: 295,
        description: "Taco baharatlı dana kıyma, mevsim yeşillikleri, domates salsa, Meksika fasulyesi, çedar, avokado sos",
        category: "mexican",
        tags: ["spicy"],
        image: "beef-taco"
    },
    {
        id: 42,
        name: "Tiftik Dana Taco",
        nameEn: "Pulled Beef Taco",
        price: 315,
        description: "Tiftik dana eti, domates salsa, mevsim yeşillikleri, Meksika fasulyesi, çedar, avokado sos",
        category: "mexican",
        tags: [],
        image: "pulled-beef-taco"
    },
    {
        id: 43,
        name: "Tavuk Taco",
        nameEn: "Chicken Taco",
        price: 285,
        description: "Çıtır tavuk parçaları, çedar sos, domates salsa, mevsim yeşillikleri, Meksika fasulyesi",
        category: "mexican",
        tags: [],
        image: "chicken-taco"
    },
    {
        id: 44,
        name: "Fajitas",
        nameEn: "Fajitas",
        price: 325,
        description: "Sotelenmiş kırmızı biber, yeşil biber, soğan, ekşi krema, salsa sos, mısır keki, tortilla, guacamole",
        category: "mexican",
        tags: ["spicy"],
        image: "fajitas"
    },
    {
        id: 45,
        name: "Quesadilla",
        nameEn: "Quesadilla",
        price: 285,
        description: "Izgara tavuk göğsü, rende mozarella, sote sebzeler, Meksika pilavı ve San Diego sos",
        category: "mexican",
        tags: [],
        image: "quesadilla"
    },
    {
        id: 46,
        name: "Burrito",
        nameEn: "Burrito",
        price: 315,
        description: "Tortilla ekmeğine sarılmış dana eti veya tavuk, sebzeler, Meksika pilavı, ekşi krema, salsa",
        category: "mexican",
        tags: ["spicy"],
        image: "burrito"
    },
    {
        id: 47,
        name: "Enchiladas",
        nameEn: "Enchiladas",
        price: 325,
        description: "Mısır tortillası, sote tavuk veya dana, Meksika fasulyesi, San Diego sos, Meksika pilavı, ekşi krema",
        category: "mexican",
        tags: ["spicy"],
        image: "enchiladas"
    },
    
    // Ana Yemekler (Main Courses)
    {
        id: 48,
        name: "Çıtır Tavuk Göğsü",
        nameEn: "Crispy Chicken Breast",
        price: 295,
        description: "Çıtır kaplamalı tavuk göğsü, mevsim yeşillikleri ve hardallı patates salatası",
        category: "mains",
        tags: [],
        image: "crispy-chicken-breast"
    },
    {
        id: 49,
        name: "Teriyaki Tavuk",
        nameEn: "Teriyaki Chicken",
        price: 315,
        description: "Teriyaki soslu tavuk bonfile, zerdeçallı pirinç pilavı",
        category: "mains",
        tags: [],
        image: "teriyaki-chicken"
    },
    {
        id: 50,
        name: "Cafe De Paris Tavuk",
        nameEn: "Cafe De Paris Chicken",
        price: 325,
        description: "Cafe De Paris soslu tavuk biftek ve patates kızartması",
        category: "mains",
        tags: [],
        image: "cafe-paris-chicken"
    },
    {
        id: 51,
        name: "Tavuk Külbastı",
        nameEn: "Grilled Chicken",
        price: 295,
        description: "Tavuk külbastı, sote sebzeler ve pirinç pilavı",
        category: "mains",
        tags: [],
        image: "grilled-chicken"
    },
    {
        id: 52,
        name: "Köri Tavuk",
        nameEn: "Curry Chicken",
        price: 305,
        description: "Köri soslu tavuk bonfile, pirinç pilavı ve patates kızartması",
        category: "mains",
        tags: [],
        image: "curry-chicken"
    },
    {
        id: 53,
        name: "Susamlı Somon",
        nameEn: "Sesame Salmon",
        price: 395,
        description: "Susamlı somon, hardallı patates salatası, mevsim yeşillikleri",
        category: "mains",
        tags: [],
        image: "sesame-salmon"
    },
    {
        id: 54,
        name: "Izgara Somon",
        nameEn: "Grilled Salmon",
        price: 385,
        description: "Roka salatası ve hardallı patates salatası ile",
        category: "mains",
        tags: [],
        image: "grilled-salmon"
    },
    {
        id: 55,
        name: "Mantarlı Bonfile",
        nameEn: "Mushroom Tenderloin",
        price: 425,
        description: "Mantar soslu ızgara bonfile, çedar peyniri, köri orzo risotto ve sote sebzeler",
        category: "mains",
        tags: [],
        image: "mushroom-tenderloin"
    },
    {
        id: 56,
        name: "Alfredo Bonfile",
        nameEn: "Alfredo Tenderloin",
        price: 435,
        description: "Mantarlı alfredo sos, köri orzo risotto ve sote sebzeler",
        category: "mains",
        tags: [],
        image: "alfredo-tenderloin"
    },
    {
        id: 57,
        name: "Dana Külbastı",
        nameEn: "Beef Steak",
        price: 395,
        description: "Orbit fasulye, köri orzo risotto, dana külbastı",
        category: "mains",
        tags: [],
        image: "beef-steak"
    },
    {
        id: 58,
        name: "Izgara Köfte",
        nameEn: "Grilled Meatballs",
        price: 315,
        description: "Süzme yoğurt yatağında tırnak pide, ızgara kekikli köfte, Meksika pilavı ve mevsim yeşillikleri",
        category: "mains",
        tags: [],
        image: "grilled-meatballs"
    },
    {
        id: 59,
        name: "Patlıcan Beğendili Köfte",
        nameEn: "Meatballs with Eggplant Puree",
        price: 325,
        description: "Patlıcan beğendi, tereyağlı pide, patates kızartması",
        category: "mains",
        tags: [],
        image: "eggplant-meatballs"
    },
    
    // Tatlılar (Desserts)
    {
        id: 60,
        name: "Çikolatalı Sufle",
        nameEn: "Chocolate Souffle",
        price: 185,
        description: "Sıcak çikolatalı sufle, vanilyalı dondurma",
        category: "desserts",
        tags: [],
        image: "chocolate-souffle"
    },
    {
        id: 61,
        name: "Brownie",
        nameEn: "Brownie",
        price: 165,
        description: "Krema, çikolata sos ve dondurma",
        category: "desserts",
        tags: [],
        image: "brownie"
    },
    {
        id: 62,
        name: "Affogato",
        nameEn: "Affogato",
        price: 145,
        description: "Vanilyalı dondurma, espresso shot",
        category: "desserts",
        tags: [],
        image: "affogato"
    },
    {
        id: 63,
        name: "Elmalı Tart",
        nameEn: "Apple Tart",
        price: 175,
        description: "Tarçınlı tortilla cipsi, cevizli elma sos, pastacı kreması",
        category: "desserts",
        tags: [],
        image: "apple-tart"
    },
    {
        id: 64,
        name: "Waffle",
        nameEn: "Waffle",
        price: 195,
        description: "Çikolata sos, dondurma ve mevsim meyveleri",
        category: "desserts",
        tags: [],
        image: "waffle"
    },
    
    // İçecekler (Drinks)
    {
        id: 65,
        name: "Limonata",
        nameEn: "Lemonade",
        price: 85,
        description: "Taze sıkılmış limon, nane, soda",
        category: "drinks",
        tags: [],
        image: "lemonade"
    },
    {
        id: 66,
        name: "Meyve Suyu",
        nameEn: "Fresh Juice",
        price: 95,
        description: "Portakal, ananas, elma veya karışık",
        category: "drinks",
        tags: [],
        image: "juice"
    },
    {
        id: 67,
        name: "Soğuk Çay",
        nameEn: "Iced Tea",
        price: 75,
        description: "Limon, şeftali, karpuz, mango veya ananas aromalı",
        category: "drinks",
        tags: [],
        image: "iced-tea"
    },
    {
        id: 68,
        name: "Mojito",
        nameEn: "Mojito",
        price: 125,
        description: "Taze nane yaprakları, lime, soda ve esmer şeker",
        category: "drinks",
        tags: [],
        image: "mojito"
    },
    {
        id: 69,
        name: "Smoothie",
        nameEn: "Smoothie",
        price: 115,
        description: "Mevsim meyveli smoothie çeşitleri",
        category: "drinks",
        tags: [],
        image: "smoothie"
    },
    {
        id: 70,
        name: "Espresso",
        nameEn: "Espresso",
        price: 55,
        description: "Çift shot espresso",
        category: "drinks",
        tags: [],
        image: "espresso"
    },
    {
        id: 71,
        name: "Cappuccino",
        nameEn: "Cappuccino",
        price: 75,
        description: "Klasik cappuccino",
        category: "drinks",
        tags: [],
        image: "cappuccino"
    },
    {
        id: 72,
        name: "Latte",
        nameEn: "Latte",
        price: 75,
        description: "Kremalı latte",
        category: "drinks",
        tags: [],
        image: "latte"
    }
];
