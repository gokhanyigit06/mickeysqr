// Admin Panel JavaScript
// LocalStorage keys
const STORAGE_KEYS = {
    MENU_DATA: 'mickeys_menu_data',
    ALLERGENS: 'mickeys_allergens',
    BANNERS: 'mickeys_banners',
    CATEGORIES: 'mickeys_categories'
};

// Initialize data from localStorage or use default
let adminMenuData = JSON.parse(localStorage.getItem(STORAGE_KEYS.MENU_DATA)) || menuData;
let adminAllergens = JSON.parse(localStorage.getItem(STORAGE_KEYS.ALLERGENS)) || [
    { id: 1, name: 'Fındık ve Yerfıstığı', icon: '🥜', description: 'Bazı ürünlerimizde fındık, ceviz ve yerfıstığı bulunmaktadır.' },
    { id: 2, name: 'Süt Ürünleri', icon: '🥛', description: 'Peynir, krema ve süt içeren ürünlerimiz mevcuttur.' },
    { id: 3, name: 'Gluten', icon: '🌾', description: 'Ekmek, makarna ve hamur işi ürünlerimizde gluten bulunur.' },
    { id: 4, name: 'Deniz Ürünleri', icon: '🦐', description: 'Balık ve deniz ürünleri içeren yemeklerimiz vardır.' },
    { id: 5, name: 'Yumurta', icon: '🥚', description: 'Bazı ürünlerimizde yumurta kullanılmaktadır.' },
    { id: 6, name: 'Acı Baharatlar', icon: '🌶️', description: 'Acılı ürünlerimiz özel olarak işaretlenmiştir.' }
];
let adminBanners = JSON.parse(localStorage.getItem(STORAGE_KEYS.BANNERS)) || [
    {
        id: 1,
        title: 'Her gün 14:00-19:00 arası tüm kokteyllerde',
        subtitle: '%20 İNDİRİM',
        discount: 20,
        bgColor: '#C84B31',
        active: true
    }
];
let adminCategories = JSON.parse(localStorage.getItem(STORAGE_KEYS.CATEGORIES)) || {
    starters: { name: 'Başlangıçlar', icon: '🍲', bgImage: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80' },
    snacks: { name: 'Atıştırmalıklar', icon: '🍗', bgImage: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80' },
    salads: { name: 'Salatalar', icon: '🥗', bgImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80' },
    asian: { name: 'Asya Mutfağı', icon: '🍜', bgImage: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80' },
    pizza: { name: 'Pizza', icon: '🍕', bgImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80' },
    burgers: { name: 'Burgerler', icon: '🍔', bgImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },
    pasta: { name: 'Makarna', icon: '🍝', bgImage: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80' },
    mexican: { name: 'Meksika Mutfağı', icon: '🌮', bgImage: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80' },
    mains: { name: 'Ana Yemekler', icon: '🍖', bgImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80' },
    desserts: { name: 'Tatlılar', icon: '🍰', bgImage: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80' },
    drinks: { name: 'İçecekler', icon: '🍹', bgImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80' }
};

let currentEditingProduct = null;
let currentEditingAllergen = null;
let currentEditingBanner = null;
let currentEditingCategory = null;

// Save data to localStorage
function saveData() {
    localStorage.setItem(STORAGE_KEYS.MENU_DATA, JSON.stringify(adminMenuData));
    localStorage.setItem(STORAGE_KEYS.ALLERGENS, JSON.stringify(adminAllergens));
    localStorage.setItem(STORAGE_KEYS.BANNERS, JSON.stringify(adminBanners));
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(adminCategories));
}

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');

        // Show corresponding section
        const section = this.dataset.section;
        document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
        document.getElementById(`${section}-section`).classList.add('active');

        // Load section data
        if (section === 'products') renderProductsTable();
        if (section === 'categories') renderCategoriesGrid();
        if (section === 'allergens') renderAllergensList();
        if (section === 'banners') renderBannersGrid();
    });
});

// ==================== Products Management ====================
function renderProductsTable() {
    const tbody = document.getElementById('productsTableBody');
    const searchQuery = document.getElementById('productSearch').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;

    let filteredProducts = adminMenuData;

    if (searchQuery) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchQuery) ||
            p.nameEn.toLowerCase().includes(searchQuery) ||
            p.description.toLowerCase().includes(searchQuery)
        );
    }

    if (categoryFilter) {
        filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
    }

    tbody.innerHTML = filteredProducts.map(product => `
        <tr>
            <td>${product.id}</td>
            <td>
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=80" 
                     alt="${product.name}" 
                     class="product-image">
            </td>
            <td>
                <div class="product-name">${product.name}</div>
                ${product.nameEn ? `<div class="product-name-en">${product.nameEn}</div>` : ''}
            </td>
            <td>${getCategoryName(product.category)}</td>
            <td>${product.price} ₺</td>
            <td>
                ${product.tags.includes('spicy') ? '<span class="tag tag-spicy">🌶️ Acılı</span>' : ''}
                ${product.tags.includes('vegetarian') ? '<span class="tag tag-vegetarian">🌱 Vejetaryen</span>' : ''}
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-secondary btn-sm btn-icon" onclick="editProduct(${product.id})" title="Düzenle">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                    </button>
                    <button class="btn-danger btn-sm btn-icon" onclick="deleteProduct(${product.id})" title="Sil">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function getCategoryName(categoryKey) {
    const names = {
        starters: 'Başlangıçlar',
        snacks: 'Atıştırmalıklar',
        salads: 'Salatalar',
        asian: 'Asya Mutfağı',
        pizza: 'Pizza',
        burgers: 'Burgerler',
        pasta: 'Makarna',
        mexican: 'Meksika Mutfağı',
        mains: 'Ana Yemekler',
        desserts: 'Tatlılar',
        drinks: 'İçecekler'
    };
    return names[categoryKey] || categoryKey;
}

// Search and filter
document.getElementById('productSearch')?.addEventListener('input', renderProductsTable);
document.getElementById('categoryFilter')?.addEventListener('change', renderProductsTable);

// Add Product
document.getElementById('addProductBtn')?.addEventListener('click', () => {
    currentEditingProduct = null;
    document.getElementById('productModalTitle').textContent = 'Yeni Ürün Ekle';
    document.getElementById('productForm').reset();
    document.getElementById('productModal').classList.add('active');
});

// Edit Product
function editProduct(id) {
    currentEditingProduct = adminMenuData.find(p => p.id === id);
    if (!currentEditingProduct) return;

    document.getElementById('productModalTitle').textContent = 'Ürün Düzenle';
    document.getElementById('productName').value = currentEditingProduct.name;
    document.getElementById('productNameEn').value = currentEditingProduct.nameEn || '';
    document.getElementById('productCategory').value = currentEditingProduct.category;
    document.getElementById('productPrice').value = currentEditingProduct.price;
    document.getElementById('productDescription').value = currentEditingProduct.description;
    document.getElementById('productImage').value = '';
    document.getElementById('productImageCode').value = currentEditingProduct.image || '';
    document.getElementById('tagSpicy').checked = currentEditingProduct.tags.includes('spicy');
    document.getElementById('tagVegetarian').checked = currentEditingProduct.tags.includes('vegetarian');

    document.getElementById('productModal').classList.add('active');
}

// Delete Product
function deleteProduct(id) {
    if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
        adminMenuData = adminMenuData.filter(p => p.id !== id);
        saveData();
        renderProductsTable();
        showNotification('Ürün başarıyla silindi', 'success');
    }
}

// Product Form Submit
document.getElementById('productForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const tags = [];
    if (document.getElementById('tagSpicy').checked) tags.push('spicy');
    if (document.getElementById('tagVegetarian').checked) tags.push('vegetarian');

    const productData = {
        name: document.getElementById('productName').value,
        nameEn: document.getElementById('productNameEn').value,
        category: document.getElementById('productCategory').value,
        price: parseFloat(document.getElementById('productPrice').value),
        description: document.getElementById('productDescription').value,
        image: document.getElementById('productImageCode').value,
        tags: tags
    };

    if (currentEditingProduct) {
        // Update existing product
        const index = adminMenuData.findIndex(p => p.id === currentEditingProduct.id);
        adminMenuData[index] = { ...adminMenuData[index], ...productData };
        showNotification('Ürün başarıyla güncellendi', 'success');
    } else {
        // Add new product
        const newId = Math.max(...adminMenuData.map(p => p.id), 0) + 1;
        adminMenuData.push({ id: newId, ...productData });
        showNotification('Ürün başarıyla eklendi', 'success');
    }

    saveData();
    closeProductModal();
    renderProductsTable();
});

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

// ==================== Categories Management ====================
function renderCategoriesGrid() {
    const grid = document.getElementById('categoriesGrid');
    const productCounts = {};

    // Count products per category
    adminMenuData.forEach(item => {
        if (!productCounts[item.category]) {
            productCounts[item.category] = 0;
        }
        productCounts[item.category]++;
    });

    grid.innerHTML = Object.keys(adminCategories).map(catKey => {
        const cat = adminCategories[catKey];
        const count = productCounts[catKey] || 0;

        return `
            <div class="category-card">
                <div class="category-card-header">
                    <div class="category-card-icon">${cat.icon}</div>
                    <div>
                        <div class="category-card-name">${cat.name}</div>
                        <div class="category-card-count">${count} ürün</div>
                    </div>
                </div>
                <div class="action-buttons" style="margin-top: 1rem;">
                    <button class="btn-secondary btn-sm" onclick="editCategory('${catKey}')">Düzenle</button>
                    <button class="btn-danger btn-sm" onclick="deleteCategory('${catKey}')">Sil</button>
                </div>
            </div>
        `;
    }).join('');
}

// Add Category
document.getElementById('addCategoryBtn')?.addEventListener('click', () => {
    currentEditingCategory = null;
    document.getElementById('categoryModalTitle').textContent = 'Yeni Kategori Ekle';
    document.getElementById('categoryForm').reset();
    document.getElementById('categoryKey').readOnly = false;
    document.getElementById('categoryModal').classList.add('active');
});

// Edit Category
function editCategory(key) {
    currentEditingCategory = key;
    const category = adminCategories[key];
    if (!category) return;

    document.getElementById('categoryModalTitle').textContent = 'Kategori Düzenle';
    document.getElementById('categoryKey').value = key;
    document.getElementById('categoryKey').readOnly = true; // Don't allow changing key
    document.getElementById('categoryName').value = category.name;
    document.getElementById('categoryIcon').value = category.icon;
    document.getElementById('categoryBgImage').value = category.bgImage || '';

    document.getElementById('categoryModal').classList.add('active');
}

// Delete Category
function deleteCategory(key) {
    const productCount = adminMenuData.filter(p => p.category === key).length;

    if (productCount > 0) {
        if (!confirm(`Bu kategoride ${productCount} ürün var. Kategoriyi silmek bu ürünleri de silecektir. Devam etmek istiyor musunuz?`)) {
            return;
        }
        // Remove products in this category
        adminMenuData = adminMenuData.filter(p => p.category !== key);
    } else {
        if (!confirm('Bu kategoriyi silmek istediğinizden emin misiniz?')) {
            return;
        }
    }

    delete adminCategories[key];
    saveData();
    renderCategoriesGrid();
    updateCategorySelects();
    showNotification('Kategori başarıyla silindi', 'success');
}

// Category Form Submit
document.getElementById('categoryForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const key = document.getElementById('categoryKey').value.toLowerCase().replace(/\s+/g, '-');
    const categoryData = {
        name: document.getElementById('categoryName').value,
        icon: document.getElementById('categoryIcon').value,
        bgImage: document.getElementById('categoryBgImage').value
    };

    if (currentEditingCategory) {
        // Update existing category
        adminCategories[currentEditingCategory] = categoryData;
        showNotification('Kategori başarıyla güncellendi', 'success');
    } else {
        // Check if key already exists
        if (adminCategories[key]) {
            showNotification('Bu kategori anahtarı zaten kullanılıyor', 'error');
            return;
        }
        // Add new category
        adminCategories[key] = categoryData;
        showNotification('Kategori başarıyla eklendi', 'success');
    }

    saveData();
    closeCategoryModal();
    renderCategoriesGrid();
    updateCategorySelects();
});

function closeCategoryModal() {
    document.getElementById('categoryModal').classList.remove('active');
}

// Update category selects in product form and filter
function updateCategorySelects() {
    const productCategorySelect = document.getElementById('productCategory');
    const categoryFilterSelect = document.getElementById('categoryFilter');

    if (productCategorySelect) {
        const currentValue = productCategorySelect.value;
        productCategorySelect.innerHTML = '<option value="">Kategori Seçin</option>' +
            Object.keys(adminCategories).map(key =>
                `<option value="${key}">${adminCategories[key].name}</option>`
            ).join('');
        productCategorySelect.value = currentValue;
    }

    if (categoryFilterSelect) {
        const currentValue = categoryFilterSelect.value;
        categoryFilterSelect.innerHTML = '<option value="">Tüm Kategoriler</option>' +
            Object.keys(adminCategories).map(key =>
                `<option value="${key}">${adminCategories[key].name}</option>`
            ).join('');
        categoryFilterSelect.value = currentValue;
    }
}

// Update getCategoryName to use adminCategories
function getCategoryName(categoryKey) {
    return adminCategories[categoryKey]?.name || categoryKey;
}
function renderAllergensList() {
    const list = document.getElementById('allergensList');

    list.innerHTML = adminAllergens.map(allergen => `
        <div class="allergen-card">
            <div class="allergen-icon">${allergen.icon}</div>
            <div class="allergen-content">
                <div class="allergen-name">${allergen.name}</div>
                <div class="allergen-description">${allergen.description}</div>
                <div class="allergen-actions">
                    <button class="btn-secondary btn-sm" onclick="editAllergen(${allergen.id})">Düzenle</button>
                    <button class="btn-danger btn-sm" onclick="deleteAllergen(${allergen.id})">Sil</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add Allergen
document.getElementById('addAllergenBtn')?.addEventListener('click', () => {
    currentEditingAllergen = null;
    document.getElementById('allergenModalTitle').textContent = 'Yeni Alerjen Ekle';
    document.getElementById('allergenForm').reset();
    document.getElementById('allergenModal').classList.add('active');
});

// Edit Allergen
function editAllergen(id) {
    currentEditingAllergen = adminAllergens.find(a => a.id === id);
    if (!currentEditingAllergen) return;

    document.getElementById('allergenModalTitle').textContent = 'Alerjen Düzenle';
    document.getElementById('allergenName').value = currentEditingAllergen.name;
    document.getElementById('allergenIcon').value = currentEditingAllergen.icon;
    document.getElementById('allergenDescription').value = currentEditingAllergen.description;

    document.getElementById('allergenModal').classList.add('active');
}

// Delete Allergen
function deleteAllergen(id) {
    if (confirm('Bu alerjeni silmek istediğinizden emin misiniz?')) {
        adminAllergens = adminAllergens.filter(a => a.id !== id);
        saveData();
        renderAllergensList();
        showNotification('Alerjen başarıyla silindi', 'success');
    }
}

// Allergen Form Submit
document.getElementById('allergenForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const allergenData = {
        name: document.getElementById('allergenName').value,
        icon: document.getElementById('allergenIcon').value,
        description: document.getElementById('allergenDescription').value
    };

    if (currentEditingAllergen) {
        const index = adminAllergens.findIndex(a => a.id === currentEditingAllergen.id);
        adminAllergens[index] = { ...adminAllergens[index], ...allergenData };
        showNotification('Alerjen başarıyla güncellendi', 'success');
    } else {
        const newId = Math.max(...adminAllergens.map(a => a.id), 0) + 1;
        adminAllergens.push({ id: newId, ...allergenData });
        showNotification('Alerjen başarıyla eklendi', 'success');
    }

    saveData();
    closeAllergenModal();
    renderAllergensList();
});

function closeAllergenModal() {
    document.getElementById('allergenModal').classList.remove('active');
}

// ==================== Banners Management ====================
function renderBannersGrid() {
    const grid = document.getElementById('bannersGrid');

    grid.innerHTML = adminBanners.map(banner => `
        <div class="banner-card">
            <div class="banner-preview" style="background: ${banner.bgColor}">
                <div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${banner.title}</h3>
                    ${banner.subtitle ? `<p style="font-size: 2rem; font-weight: 700;">${banner.subtitle}</p>` : ''}
                </div>
            </div>
            <div class="banner-card-content">
                <div class="banner-card-title">${banner.title}</div>
                <span class="banner-card-status ${banner.active ? 'active' : 'inactive'}">
                    ${banner.active ? '✓ Aktif' : '✗ Pasif'}
                </span>
                <div class="action-buttons" style="margin-top: 1rem;">
                    <button class="btn-secondary btn-sm" onclick="editBanner(${banner.id})">Düzenle</button>
                    <button class="btn-danger btn-sm" onclick="deleteBanner(${banner.id})">Sil</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add Banner
document.getElementById('addBannerBtn')?.addEventListener('click', () => {
    currentEditingBanner = null;
    document.getElementById('bannerModalTitle').textContent = 'Yeni Banner Ekle';
    document.getElementById('bannerForm').reset();
    document.getElementById('bannerModal').classList.add('active');
});

// Edit Banner
function editBanner(id) {
    currentEditingBanner = adminBanners.find(b => b.id === id);
    if (!currentEditingBanner) return;

    document.getElementById('bannerModalTitle').textContent = 'Banner Düzenle';
    document.getElementById('bannerTitle').value = currentEditingBanner.title;
    document.getElementById('bannerSubtitle').value = currentEditingBanner.subtitle || '';
    document.getElementById('bannerDiscount').value = currentEditingBanner.discount || '';
    document.getElementById('bannerBgColor').value = currentEditingBanner.bgColor;
    document.getElementById('bannerImage').value = currentEditingBanner.image || '';
    document.getElementById('bannerActive').checked = currentEditingBanner.active;

    document.getElementById('bannerModal').classList.add('active');
}

// Delete Banner
function deleteBanner(id) {
    if (confirm('Bu banner\'ı silmek istediğinizden emin misiniz?')) {
        adminBanners = adminBanners.filter(b => b.id !== id);
        saveData();
        renderBannersGrid();
        showNotification('Banner başarıyla silindi', 'success');
    }
}

// Banner Form Submit
document.getElementById('bannerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const bannerData = {
        title: document.getElementById('bannerTitle').value,
        subtitle: document.getElementById('bannerSubtitle').value,
        discount: parseInt(document.getElementById('bannerDiscount').value) || 0,
        bgColor: document.getElementById('bannerBgColor').value,
        image: document.getElementById('bannerImage').value,
        active: document.getElementById('bannerActive').checked
    };

    if (currentEditingBanner) {
        const index = adminBanners.findIndex(b => b.id === currentEditingBanner.id);
        adminBanners[index] = { ...adminBanners[index], ...bannerData };
        showNotification('Banner başarıyla güncellendi', 'success');
    } else {
        const newId = Math.max(...adminBanners.map(b => b.id), 0) + 1;
        adminBanners.push({ id: newId, ...bannerData });
        showNotification('Banner başarıyla eklendi', 'success');
    }

    saveData();
    closeBannerModal();
    renderBannersGrid();
});

function closeBannerModal() {
    document.getElementById('bannerModal').classList.remove('active');
}

// ==================== Excel Operations ====================
// Export to Excel
document.getElementById('exportExcel')?.addEventListener('click', () => {
    try {
        const wb = XLSX.utils.book_new();

        // Group products by category
        const productsByCategory = {};
        adminMenuData.forEach(item => {
            if (!productsByCategory[item.category]) {
                productsByCategory[item.category] = [];
            }
            productsByCategory[item.category].push(item);
        });

        // Create a sheet for each category
        Object.keys(productsByCategory).forEach(categoryKey => {
            const categoryName = getCategoryName(categoryKey);
            const products = productsByCategory[categoryKey];

            const ws_data = [
                ['ID', 'Ürün Adı', 'İngilizce Adı', 'Fiyat (₺)', 'Açıklama', 'Görsel Kodu', 'Acılı', 'Vejetaryen']
            ];

            products.forEach(item => {
                ws_data.push([
                    item.id,
                    item.name,
                    item.nameEn || '',
                    item.price,
                    item.description,
                    item.image || '',
                    item.tags.includes('spicy') ? 'Evet' : 'Hayır',
                    item.tags.includes('vegetarian') ? 'Evet' : 'Hayır'
                ]);
            });

            const ws = XLSX.utils.aoa_to_sheet(ws_data);

            // Set column widths
            ws['!cols'] = [
                { wch: 5 },   // ID
                { wch: 25 },  // Ürün Adı
                { wch: 25 },  // İngilizce Adı
                { wch: 10 },  // Fiyat
                { wch: 50 },  // Açıklama
                { wch: 20 },  // Görsel Kodu
                { wch: 8 },   // Acılı
                { wch: 12 }   // Vejetaryen
            ];

            // Sanitize sheet name (max 31 chars, no special chars)
            let sheetName = categoryName.substring(0, 31).replace(/[:\\\/\?\*\[\]]/g, '');
            XLSX.utils.book_append_sheet(wb, ws, sheetName);
        });

        // Also create a summary sheet with all products
        const allProductsData = [
            ['ID', 'Ürün Adı', 'İngilizce Adı', 'Kategori', 'Fiyat (₺)', 'Açıklama', 'Görsel Kodu', 'Acılı', 'Vejetaryen']
        ];

        adminMenuData.forEach(item => {
            allProductsData.push([
                item.id,
                item.name,
                item.nameEn || '',
                getCategoryName(item.category),
                item.price,
                item.description,
                item.image || '',
                item.tags.includes('spicy') ? 'Evet' : 'Hayır',
                item.tags.includes('vegetarian') ? 'Evet' : 'Hayır'
            ]);
        });

        const allWs = XLSX.utils.aoa_to_sheet(allProductsData);
        allWs['!cols'] = [
            { wch: 5 },   // ID
            { wch: 25 },  // Ürün Adı
            { wch: 25 },  // İngilizce Adı
            { wch: 20 },  // Kategori
            { wch: 10 },  // Fiyat
            { wch: 50 },  // Açıklama
            { wch: 20 },  // Görsel Kodu
            { wch: 8 },   // Acılı
            { wch: 12 }   // Vejetaryen
        ];

        // Add summary sheet as first sheet
        XLSX.utils.book_append_sheet(wb, allWs, 'Tüm Ürünler');

        // Generate filename with date
        const date = new Date();
        const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        const filename = `mickeys-menu-${dateStr}.xlsx`;

        // Write file
        XLSX.writeFile(wb, filename);

        showNotification(`Excel dosyası başarıyla indirildi: ${filename}`, 'success');
    } catch (error) {
        console.error('Excel export error:', error);
        showNotification('Excel dosyası oluşturulurken hata oluştu', 'error');
    }
});

// Download Template
document.getElementById('downloadTemplate')?.addEventListener('click', () => {
    try {
        const wb = XLSX.utils.book_new();

        // Create template with examples for each category
        const ws_data = [
            ['ID', 'Ürün Adı', 'İngilizce Adı', 'Kategori', 'Fiyat (₺)', 'Açıklama', 'Görsel Kodu', 'Acılı', 'Vejetaryen'],
            ['', 'Örnek Çorba', 'Sample Soup', 'starters', '150', 'Günün özel çorbası', 'soup', 'Hayır', 'Hayır'],
            ['', 'Örnek Salata', 'Sample Salad', 'salads', '180', 'Taze mevsim sebzeleri ile', 'salad', 'Hayır', 'Evet'],
            ['', 'Örnek Pizza', 'Sample Pizza', 'pizza', '220', 'İtalyan usulü pizza', 'pizza', 'Hayır', 'Hayır'],
            ['', 'Örnek Burger', 'Sample Burger', 'burgers', '200', 'Özel soslu burger', 'burger', 'Hayır', 'Hayır'],
            ['', 'Örnek Tatlı', 'Sample Dessert', 'desserts', '120', 'Ev yapımı tatlı', 'dessert', 'Hayır', 'Evet']
        ];

        const ws = XLSX.utils.aoa_to_sheet(ws_data);

        // Set column widths
        ws['!cols'] = [
            { wch: 5 },   // ID
            { wch: 25 },  // Ürün Adı
            { wch: 25 },  // İngilizce Adı
            { wch: 20 },  // Kategori
            { wch: 10 },  // Fiyat
            { wch: 50 },  // Açıklama
            { wch: 20 },  // Görsel Kodu
            { wch: 8 },   // Acılı
            { wch: 12 }   // Vejetaryen
        ];

        XLSX.utils.book_append_sheet(wb, ws, 'Şablon');

        // Add a sheet with category list
        const categoryData = [
            ['Kategori Anahtarı', 'Kategori Adı'],
            ...Object.keys(adminCategories).map(key => [key, adminCategories[key].name])
        ];

        const catWs = XLSX.utils.aoa_to_sheet(categoryData);
        catWs['!cols'] = [{ wch: 20 }, { wch: 25 }];
        XLSX.utils.book_append_sheet(wb, catWs, 'Kategoriler');

        XLSX.writeFile(wb, 'mickeys-menu-template.xlsx');

        showNotification('Şablon dosyası başarıyla indirildi', 'success');
    } catch (error) {
        console.error('Template download error:', error);
        showNotification('Şablon dosyası oluşturulurken hata oluştu', 'error');
    }
});

// Import from Excel
document.getElementById('excelImport')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

            // Skip header row
            const rows = jsonData.slice(1);
            let importCount = 0;
            let updateCount = 0;
            let newCount = 0;

            rows.forEach(row => {
                if (!row[1]) return; // Skip empty rows

                const tags = [];
                if (row[7] === 'Evet') tags.push('spicy');
                if (row[8] === 'Evet') tags.push('vegetarian');

                // Handle both old format (with category column) and new format
                const categoryValue = row[3];
                let categoryKey = categoryValue;

                // If category is in Turkish, find the key
                if (categoryValue && !adminCategories[categoryValue]) {
                    const foundKey = Object.keys(adminCategories).find(
                        key => adminCategories[key].name === categoryValue
                    );
                    if (foundKey) {
                        categoryKey = foundKey;
                    }
                }

                const product = {
                    id: row[0] || Math.max(...adminMenuData.map(p => p.id), 0) + 1,
                    name: row[1],
                    nameEn: row[2] || '',
                    category: categoryKey,
                    price: parseFloat(row[4]),
                    description: row[5] || '',
                    image: row[6] || '',
                    tags: tags
                };

                const existingIndex = adminMenuData.findIndex(p => p.id === product.id);
                if (existingIndex >= 0) {
                    adminMenuData[existingIndex] = product;
                    updateCount++;
                } else {
                    adminMenuData.push(product);
                    newCount++;
                }
                importCount++;
            });

            saveData();
            renderProductsTable();

            let message = `${importCount} ürün işlendi: ${newCount} yeni, ${updateCount} güncellendi`;
            showNotification(message, 'success');
        } catch (error) {
            console.error('Excel import error:', error);
            showNotification('Excel dosyası okunurken hata oluştu: ' + error.message, 'error');
        }
    };
    reader.readAsArrayBuffer(file);

    // Reset file input
    e.target.value = '';
});

// ==================== Notifications ====================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function () {
        this.parentElement.classList.remove('active');
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProductsTable();
    updateCategorySelects();
});
