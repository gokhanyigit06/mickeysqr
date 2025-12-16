// Category configuration with icons and background images
const categoryConfig = {
    starters: {
        name: 'Başlangıçlar',
        icon: '🍲',
        bgImage: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80'
    },
    snacks: {
        name: 'Atıştırmalıklar',
        icon: '🍗',
        bgImage: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80'
    },
    salads: {
        name: 'Salatalar',
        icon: '🥗',
        bgImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80'
    },
    asian: {
        name: 'Asya Mutfağı',
        icon: '🍜',
        bgImage: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80'
    },
    pizza: {
        name: 'Pizza',
        icon: '🍕',
        bgImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80'
    },
    burgers: {
        name: 'Burgerler',
        icon: '🍔',
        bgImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80'
    },
    pasta: {
        name: 'Makarna',
        icon: '🍝',
        bgImage: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80'
    },
    mexican: {
        name: 'Meksika Mutfağı',
        icon: '🌮',
        bgImage: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80'
    },
    mains: {
        name: 'Ana Yemekler',
        icon: '🍖',
        bgImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80'
    },
    desserts: {
        name: 'Tatlılar',
        icon: '🍰',
        bgImage: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80'
    },
    drinks: {
        name: 'İçecekler',
        icon: '🍹',
        bgImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80'
    }
};

// DOM Elements
const menuAccordion = document.getElementById('menuAccordion');
const itemModal = document.getElementById('itemModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.getElementById('modalOverlay');
const allergenBtn = document.getElementById('allergenBtn');
const allergenModal = document.getElementById('allergenModal');
const allergenClose = document.getElementById('allergenClose');
const allergenOverlay = document.getElementById('allergenOverlay');

// Image placeholder generator with better food images
function getPlaceholderImage(category, itemName) {
    const imageMap = {
        'soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80',
        'tortilla-soup': 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=400&q=80',
        'buffalo-wings': 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80',
        'chicken-tenders': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80',
        'cheese-platter': 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&q=80',
        'nachos': 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80',
        'fish-chips': 'https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=400&q=80',
        'mixed-platter': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80',
        'mexican-salad': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
        'parmesan-salad': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
        'buffalo-chicken-salad': 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400&q=80',
        'cheese-salad': 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&q=80',
        'beef-salad': 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80',
        'salmon-salad': 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80',
        'chicken-wok': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80',
        'teriyaki-beef': 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80',
        'sweet-sour-chicken': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80',
        'margherita': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
        'mushroom-pizza': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
        'eggplant-pizza': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80',
        'curry-chicken-pizza': 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&q=80',
        'mexican-pizza': 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80',
        'mixed-pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
        'hawaiian-pizza': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
        'bbq-pizza': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80',
        'classic-burger': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
        'salmon-burger': 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80',
        'tenderloin-burger': 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80',
        'hawaiian-burger': 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80',
        'veggie-burger': 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80',
        'bbq-burger': 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80',
        'mexican-burger': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
        'crispy-chicken-burger': 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80',
        'spicy-chicken-fettuccine': 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80',
        'bolognese': 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=400&q=80',
        'mac-cheese': 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&q=80',
        'mushroom-alfredo': 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&q=80',
        'beef-pasta': 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80',
        'manti': 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&q=80',
        'salmon-fettuccine': 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80',
        'beef-taco': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
        'pulled-beef-taco': 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80',
        'chicken-taco': 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&q=80',
        'fajitas': 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&q=80',
        'quesadilla': 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&q=80',
        'burrito': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80',
        'enchiladas': 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&q=80',
        'crispy-chicken-breast': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80',
        'teriyaki-chicken': 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80',
        'cafe-paris-chicken': 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80',
        'grilled-chicken': 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&q=80',
        'curry-chicken': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80',
        'sesame-salmon': 'https://images.unsplash.com/photo-1580959375944-0b7b1b4c9c0b?w=400&q=80',
        'grilled-salmon': 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80',
        'mushroom-tenderloin': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
        'alfredo-tenderloin': 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80',
        'beef-steak': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80',
        'grilled-meatballs': 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80',
        'eggplant-meatballs': 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80',
        'chocolate-souffle': 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80',
        'brownie': 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&q=80',
        'affogato': 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&q=80',
        'apple-tart': 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&q=80',
        'waffle': 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&q=80',
        'lemonade': 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9d?w=400&q=80',
        'juice': 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80',
        'iced-tea': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
        'mojito': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80',
        'smoothie': 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&q=80',
        'espresso': 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80',
        'cappuccino': 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
        'latte': 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80'
    };

    return imageMap[itemName] || `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80`;
}

// Group menu items by category
function groupByCategory() {
    const grouped = {};

    menuData.forEach(item => {
        if (!grouped[item.category]) {
            grouped[item.category] = [];
        }
        grouped[item.category].push(item);
    });

    return grouped;
}

// Render menu accordion
function renderMenuAccordion() {
    const groupedItems = groupByCategory();

    menuAccordion.innerHTML = Object.keys(categoryConfig).map(categoryKey => {
        const category = categoryConfig[categoryKey];
        const items = groupedItems[categoryKey] || [];

        if (items.length === 0) return '';

        return `
            <div class="category-section" data-category="${categoryKey}">
                <div class="category-header" style="background-image: url('${category.bgImage}');">
                    <div class="category-header-content">
                        <span class="category-icon">${category.icon}</span>
                        <h2 class="category-name">${category.name}</h2>
                    </div>
                    <div class="category-toggle">+</div>
                </div>
                <div class="category-items">
                    ${items.map(item => `
                        <div class="menu-item" onclick="openItemModal(${item.id})">
                            <img src="${getPlaceholderImage(categoryKey, item.image)}" 
                                 alt="${item.name}" 
                                 class="menu-item-image"
                                 loading="lazy">
                            <div class="menu-item-content">
                                <div class="menu-item-header">
                                    <div class="menu-item-info">
                                        <h3 class="menu-item-name">${item.name}</h3>
                                        ${item.nameEn ? `<p class="menu-item-name-en">${item.nameEn}</p>` : ''}
                                    </div>
                                    <span class="menu-item-price">${item.price} ₺</span>
                                </div>
                                <p class="menu-item-description">${item.description}</p>
                                <div class="menu-item-footer">
                                    ${item.tags.includes('spicy') ? '<span class="menu-item-tag spicy">🌶️ Acılı</span>' : ''}
                                    ${item.tags.includes('vegetarian') ? '<span class="menu-item-tag vegetarian">🌱 Vejetaryen</span>' : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');

    // Add click handlers to category headers
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', function () {
            const section = this.parentElement;
            const wasActive = section.classList.contains('active');

            // Close all sections
            document.querySelectorAll('.category-section').forEach(s => {
                s.classList.remove('active');
            });

            // Open clicked section if it wasn't active
            if (!wasActive) {
                section.classList.add('active');

                // Smooth scroll to section
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });
}

// Open item modal
function openItemModal(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    modalBody.innerHTML = `
        <img src="${getPlaceholderImage(item.category, item.image)}" 
             alt="${item.name}" 
             class="modal-item-image">
        <div class="modal-item-header">
            <h2 class="modal-item-name">${item.name}</h2>
            ${item.nameEn ? `<p style="color: var(--text-muted); font-style: italic; margin-bottom: 0.5rem;">${item.nameEn}</p>` : ''}
            <p class="modal-item-price">${item.price} ₺</p>
        </div>
        <p class="modal-item-description">${item.description}</p>
        <div class="modal-item-tags">
            ${item.tags.includes('spicy') ? '<span class="menu-item-tag spicy">🌶️ Acılı</span>' : ''}
            ${item.tags.includes('vegetarian') ? '<span class="menu-item-tag vegetarian">🌱 Vejetaryen</span>' : ''}
        </div>
    `;

    itemModal.classList.add('active');
    document.body.classList.add('no-scroll');
}

// Close item modal
function closeItemModal() {
    itemModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

modalClose.addEventListener('click', closeItemModal);
modalOverlay.addEventListener('click', closeItemModal);

// Allergen modal handlers
allergenBtn.addEventListener('click', () => {
    allergenModal.classList.add('active');
    document.body.classList.add('no-scroll');
});

function closeAllergenModal() {
    allergenModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

allergenClose.addEventListener('click', closeAllergenModal);
allergenOverlay.addEventListener('click', closeAllergenModal);

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeItemModal();
        closeAllergenModal();
    }
});

// Banner slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-advance banner (optional)
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Render menu accordion
    renderMenuAccordion();

    // Open first category by default
    const firstCategory = document.querySelector('.category-section');
    if (firstCategory) {
        firstCategory.classList.add('active');
    }
});

// Smooth scroll behavior for the entire page
document.documentElement.style.scrollBehavior = 'smooth';
