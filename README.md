# 🍽️ Mickey's Restaurant - QR Menü Sistemi

Modern, responsive ve kullanıcı dostu bir dijital menü uygulaması. Restoran müşterileri için QR kod ile erişilebilen menü ve yöneticiler için kapsamlı admin paneli içerir.

![Mickey's Restaurant](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Özellikler

### 📱 Müşteri Menüsü
- **Accordion Menü Yapısı**: Kategorilere göre düzenlenmiş, açılır-kapanır menü
- **Gerçek Yemek Görselleri**: Unsplash entegrasyonu ile profesyonel görseller
- **Kategori Bazlı Gezinme**: 11 farklı kategori (Başlangıçlar, Atıştırmalıklar, Salatalar, vb.)
- **Detaylı Ürün Bilgisi**: Her ürün için modal pencerede detaylı açıklama
- **Alerjen Bilgileri**: Özel modal pencerede alerjen listesi
- **Promosyon Banner**: Kampanya duyuruları için dinamik banner alanı
- **Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu
- **Modern UI/UX**: Glassmorphism, smooth animations, gradient renkler

### 🔧 Admin Paneli
- **Ürün Yönetimi**: Ekleme, düzenleme, silme, arama ve filtreleme
- **Kategori Yönetimi**: Kategori bazlı ürün görüntüleme ve istatistikler
- **Alerjen Yönetimi**: Alerjen bilgilerini ekleme ve düzenleme
- **Banner Yönetimi**: Kampanya bannerlarını yönetme
- **Excel İşlemleri**: 
  - Toplu ürün içe aktarma
  - Excel'e dışa aktarma
  - Şablon indirme
- **LocalStorage**: Tarayıcı tabanlı veri saklama
- **Modern Dashboard**: Sidebar navigasyon, responsive tasarım

## 🚀 Kurulum

### Gereksinimler
- Modern bir web tarayıcısı (Chrome, Firefox, Safari, Edge)
- Yerel sunucu (opsiyonel, dosyaları doğrudan açabilirsiniz)

### Adımlar

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/KULLANICI_ADI/qr-menu-app.git
cd qr-menu-app
```

2. **Dosyaları açın:**
   - Müşteri menüsü için: `index.html`
   - Admin paneli için: `admin.html`

3. **Yerel sunucu ile çalıştırma (opsiyonel):**
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

4. **Tarayıcıda açın:**
   - Müşteri menüsü: `http://localhost:8000/index.html`
   - Admin paneli: `http://localhost:8000/admin.html`

## 📂 Proje Yapısı

```
qr-menu-app/
├── index.html              # Ana menü sayfası
├── admin.html              # Admin panel sayfası
├── style.css               # Ana menü stilleri
├── admin-style.css         # Admin panel stilleri
├── script.js               # Ana menü JavaScript
├── admin-script.js         # Admin panel JavaScript
├── menu-data.js            # Menü verileri
├── README.md               # Proje dokümantasyonu
├── LICENSE                 # MIT Lisansı
└── .gitignore             # Git ignore dosyası
```

## 💻 Kullanım

### Müşteri Menüsü

1. QR kod ile veya doğrudan `index.html` dosyasını açarak menüye erişin
2. Kategorilere tıklayarak ürünleri görüntüleyin
3. Ürünlere tıklayarak detaylı bilgi alın
4. "Alerjenler" butonuna tıklayarak alerjen bilgilerini görüntüleyin

### Admin Paneli

1. `admin.html` dosyasını açın
2. Sol menüden istediğiniz bölümü seçin:
   - **Ürün Yönetimi**: Ürün ekle, düzenle, sil
   - **Kategoriler**: Kategori bazlı istatistikler
   - **Alerjenler**: Alerjen bilgilerini yönet
   - **Banner Yönetimi**: Kampanya bannerlarını düzenle
   - **Excel İşlemleri**: Toplu ürün işlemleri

### Excel İle Toplu Ürün Güncelleme

1. Admin panelde "Excel İşlemleri" sekmesine gidin
2. "Şablon İndir" butonuna tıklayarak örnek dosyayı indirin
3. Excel dosyasını düzenleyin
4. "Dosya Seç" ile güncellenmiş dosyayı yükleyin
5. Ürünler otomatik olarak güncellenecektir

## 🎨 Özelleştirme

### Renk Teması Değiştirme

`style.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #D2691E;
    --accent-color: #CD853F;
    /* ... diğer renkler */
}
```

### Kategori Ekleme

`script.js` dosyasındaki `categoryConfig` objesine yeni kategori ekleyin:

```javascript
const categoryConfig = {
    // ... mevcut kategoriler
    newCategory: {
        name: 'Yeni Kategori',
        icon: '🍴',
        bgImage: 'https://...'
    }
};
```

### Ürün Ekleme

Admin panelden veya `menu-data.js` dosyasını düzenleyerek:

```javascript
{
    id: 73,
    name: "Yeni Ürün",
    nameEn: "New Product",
    price: 200,
    description: "Ürün açıklaması",
    category: "starters",
    tags: ["vegetarian"],
    image: "product-image"
}
```

## 🔒 Veri Saklama

Uygulama, tüm verileri tarayıcının **LocalStorage**'ında saklar:
- `mickeys_menu_data`: Menü ürünleri
- `mickeys_allergens`: Alerjen bilgileri
- `mickeys_banners`: Banner kampanyaları

**Not:** LocalStorage temizlendiğinde veriler varsayılan değerlere döner.

## 🌐 Canlıya Alma

### GitHub Pages ile

1. GitHub'da yeni bir repository oluşturun
2. Projeyi push edin
3. Settings > Pages > Source: main branch seçin
4. Siteniz `https://KULLANICI_ADI.github.io/qr-menu-app/` adresinde yayınlanacaktır

### Netlify ile

1. [Netlify](https://netlify.com) hesabı oluşturun
2. "New site from Git" seçeneğini kullanın
3. Repository'nizi bağlayın
4. Deploy edin

### Vercel ile

```bash
npm i -g vercel
vercel
```

## 📱 QR Kod Oluşturma

Menünüz için QR kod oluşturmak için:

1. [QR Code Generator](https://www.qr-code-generator.com/) gibi bir site kullanın
2. Menü URL'nizi girin
3. QR kodu indirin ve restoranda kullanın

## 🛠️ Teknolojiler

- **HTML5**: Semantik yapı
- **CSS3**: Modern styling, animations, flexbox, grid
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **SheetJS (xlsx)**: Excel import/export
- **Unsplash**: Yemek görselleri
- **LocalStorage**: Client-side data persistence

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📧 İletişim

Sorularınız için issue açabilir veya pull request gönderebilirsiniz.

## 🙏 Teşekkürler

- [Unsplash](https://unsplash.com) - Yemek görselleri için
- [SheetJS](https://sheetjs.com) - Excel işlemleri için
- [Google Fonts](https://fonts.google.com) - Outfit ve Playfair Display fontları için

## 📸 Ekran Görüntüleri

### Müşteri Menüsü
![Menu Screenshot](screenshots/menu.png)

### Admin Paneli
![Admin Screenshot](screenshots/admin.png)

---

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!**
