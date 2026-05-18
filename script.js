// --- İZMİR HARİTA VERİLERİ (İÇERİĞİ BURADAN KOLAYCA DÜZENLEYEBİLİRSİNİZ) ---
const mapData = [
    {
        coords: [38.396351, 27.128092], // Reşat Nuri Güntekin Koordinatları
        popupContent: `
            <div style="font-family: Arial, sans-serif;">
                <h3 style="margin-bottom: 5px; color: #6f804a;">Reşat Nuri Güntekin</h3>
                <p style="margin-top: 0; font-size: 14px; color: #555;">
                    Reşat Nuri Güntekin, "Çalıkuşu" gibi önemli eserlerinden birini burada yaşarken yazmıştır. Bu yapı sonradan restore edilerek çocuk kütüphanesine dönüştürülmüştür.
                </p>
            </div>
        `
    },
    {
        coords: [38.421945, 27.143259], // Halit Ziya Uşaklıgil Koordinatları
        popupContent: `
            <div style="font-family: Arial, sans-serif;">
                <h3 style="margin-bottom: 5px; color: #a40000;">Halit Ziya Uşaklıgil</h3>
                <p style="margin-top: 0; font-size: 14px; color: #555;">
                    Halit Ziya Uşaklıgil'in doğup büyüdüğü tarihi konaktır. Çocukluk ve gençlik yıllarına tanıklık eden bu konakta "Mai ve Siyah" ile "Aşk-ı Memnu" gibi eserlerin düşünsel temelleri atılmıştır. Anı evi olarak düzenlenen yapıda Halit Ziya'nın yaşamı, eserleri ve edebiyat dünyasına katkıları tanıtılır. 
                </p>
            </div>
        `
    },
    {
        coords: [38.507455, 27.221689], // Homeros Koordinatları
        popupContent: `
            <div style="font-family: Arial, sans-serif;">
                <h3 style="margin-bottom: 5px; color: #6495ed;">Homeros</h3>
                <p style="margin-top: 0; font-size: 14px; color: #555;">
                    Rivayete göre Homeros'un burada bir mağarada yaşadığı, "İlyada" ve "Odysseia" destanlarının bazı bölümlerinin bu vadide ortaya çıktığı düşünülmektedir.
                </p>
            </div>
        `
    }
    ,
    {
        coords: [38.401957,27.107022], // Cevat Şakir Kabaağaçlı Koordinatları
        popupContent: `
            <div style="font-family: Arial, sans-serif;">
                <h3 style="margin-bottom: 5px; color: #f08080;">Cevat Şakir Kabaağaçlı</h3>
                <p style="margin-top: 0; font-size: 14px; color: #555;">
                    Halk arasında "Halikarnas Balıkçısı Evi" olarak da bilinen bu yer, yazarın son yıllarını geçirdiği ve edebiyat çalışmalarını sürdürdüğü evdir. Günümüzde ise bir anı evi olarak Cevat Şakir'in kişisel eşya ve fotoğraflarını korur.
                </p>
            </div>
        `
    },
    {
        coords: [38.364400, 26.769648], // Yorgo Seferis Koordinatları
        popupContent: `
            <div style="font-family: Arial, sans-serif;">
                <h3 style="margin-bottom: 5px; color: #8b658b;">Yorgo Seferis</h3>
                <p style="margin-top: 0; font-size: 14px; color: #555;">
                    Nobel Edebiyat Ödüllü şair Yorgo Seferis'in doğduğu evdir. Restore edilerek butik otel ve kültür mekânı olarak hizmet vermeye başlamıştır. 
                </p>
            </div>
        `
    },
    {
        coords: [38.370357, 27.123426], // Neşet Ertaş Koordinatları
        popupContent: `
            <div style="font-family: Arial, sans-serif;">
                <h3 style="margin-bottom: 5px; color: #ffc000;">Neşet Ertaş</h3>
                <p style="margin-top: 0; font-size: 14px; color: #555;">
                    Türk halk müziğinin büyük ustası Neşet Ertaş'ın yaşamının son yıllarını geçirdiği evdir. 
                </p>
            </div>
        `
    },
    {
        coords: [38.453688, 27.112205], // Attila İlhan Koordinatları
        popupContent: `
            <div style="font-family: Arial, sans-serif;">
                <h3 style="margin-bottom: 5px; color: #a0522d;">Attila İlhan</h3>
                <p style="margin-top: 0; font-size: 14px; color: #555;">
                    Attila İlhan'ın çocukluk ve gençlik yıllarının bir bölümünü geçirdiği, Karşıyaka'da yaşadığı dönemden kalma evdir.
                </p>
            </div>
        `
    },
    {
        coords: [38.409267, 27.117579], // Dario Moreno Koordinatları
        popupContent: `
            <div style="font-family: Arial, sans-serif;">
                <h3 style="margin-bottom: 5px; color: #20b2aa;">Dario Moreno</h3>
                <p style="margin-top: 0; font-size: 14px; color: #555;">
                    Dario Moreno, İzmir'de iken üvey babasına ait olan bu evde yaşamıştır. Tarihi Asansör’ün bulunduğu bölgede, bugünkü adıyla Dario Moreno Sokağı üzerinde yer alan yapıdır.
                </p>
            </div>
        `
    },    
    {
        coords: [38.462830, 27.221941], // İzmir Edebiyat Müze Kütüphanesi Koordinatları
        popupContent: `
            <div style="font-family: Arial, sans-serif;">
                <h3 style="margin-bottom: 5px; color: #6b8e23;">İzmir Edebiyat Müze Kütüphanesi</h3>
                <p style="margin-top: 0; font-size: 14px; color: #555;">
                    İzmir Edebiyat Müzesi Kütüphanesi, edebiyat odaklı bir müze-kütüphane yapısıdır. Türk edebiyatına ait yazar ve şairlerin eser, belge ve eşyalarını bir arada toplar. 
                </p>
            </div>
        `
    },
];

// --- HARİTA AYARLARI ---

// İzmir için Sınırlar (Max Bounds)
const ihSınırları = [
    [37.8, 26.2], // Güneybatı
    [39.3, 28.5]  // Kuzeydoğu
];

// Haritanın başlatılması
const map = L.map('map', {
    center: [38.4200, 27.1300],
    zoom: 12,
    minZoom: 10,                 // Kullanıcının aşırı uzaklaşmasını engeller
    maxBounds: ihSınırları,        // İzmir dışına çıkılmasını engeller
    maxBoundsViscosity: 1.0,     // Sınırda sürtünmeyi artırarak dışarı sürüklenmeyi tamamen engeller
    zoomControl: false           // Zoom kontrolünü sağ alta almak için pasif yapıldı
});

// Zoom kontrol aracı eklentisi (Sağ alt)
L.control.zoom({ position: 'bottomright' }).addTo(map);

// Harita Katmanı (CartoDB Voyager - Mahalle ve sokak isimlerini gösteren temiz yol haritası)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// --- İŞARETÇİLER (MARKERS) VE YAN PANEL (SIDE PANEL) ETKİLEŞİMİ ---
mapData.forEach(item => {
    // İşaretçiyi oluştur ve haritaya ekle
    const marker = L.marker(item.coords).addTo(map);
    
    // Popup yerine Tıklama olayını (Click event) bağla
    marker.on('click', () => {
        const sidePanel = document.getElementById('side-panel');
        const infoContent = document.getElementById('info-content');
        
        // Yan panel içeriğini güncelle
        infoContent.innerHTML = item.popupContent;
        
        // Paneli sağdan kaydırarak görünür yap (active class'ı ekle)
        sidePanel.classList.add('active');
        
        // Haritayı estetik bir şekilde tıklanan noktaya doğru merkezle (animasyonlu)
        // Zoom seviyesi 14 ile biraz daha detaya inilir
        map.flyTo(item.coords, 14, { duration: 0.8 });
    });
});

// Dikkat: Kullanıcının yeni nokta eklemesini sağlayan veya onClick event'ine bağlı hiçbir kod blokta mevcut değildir.
