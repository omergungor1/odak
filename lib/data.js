import { site } from "./site";

const hours = "08:30 – 18:30";

export const dealers = [
  {
    slug: "bursa-nilufer",
    name: "Nilüfer Oto Ekspertiz",
    district: "Nilüfer",
    city: "Bursa",
    phone: "05399160160",
    rating: 4.9,
    maps: "https://maps.app.goo.gl/pUGrXWyQCCx7GjEv7",
    image: "/bayiler/bursa-nilufer.webp",
    time: hours,
  },
  {
    slug: "bursa-yildirim",
    name: "Yıldırım Oto Ekspertiz",
    district: "Yıldırım",
    city: "Bursa",
    phone: "05399160160",
    rating: 4.9,
    maps: "https://maps.app.goo.gl/rcZ1XEAW6gcvCPJf9",
    image: "/bayiler/bursa-yildirim.webp",
    time: hours,
  },
  {
    slug: "bursa-osmangazi",
    name: "Osmangazi Oto Ekspertiz",
    district: "Osmangazi",
    city: "Bursa",
    phone: "05399160160",
    rating: 4.8,
    maps: "https://maps.app.goo.gl/yUzK2i8fRtUFvgJM9",
    image: "/bayiler/bursa-osmangazi.webp",
    time: hours,
  },
  {
    slug: "bursa-inegol",
    name: "İnegöl Oto Ekspertiz",
    district: "İnegöl",
    city: "Bursa",
    phone: "05407160616",
    rating: 5,
    maps: "https://maps.app.goo.gl/q6c92GZr9dz6EXxD7",
    image: "/bayiler/bursa-inegol.webp",
    time: hours,
  },
  {
    slug: "ankara-kazimkarabekir",
    name: "Kazımkarabekir Oto Ekspertiz",
    district: "Kazımkarabekir",
    city: "Ankara",
    phone: "05471640606",
    rating: 4.6,
    maps: "https://maps.app.goo.gl/iEqRYjqbqqcTapap6",
    image: "/bayiler/ankara-kazimkarabekir.webp",
    time: hours,
  },
  {
    slug: "ankara-sasmaz",
    name: "Şaşmaz Oto Ekspertiz",
    district: "Şaşmaz",
    city: "Ankara",
    phone: "05471640606",
    rating: 5,
    maps: "https://maps.app.goo.gl/67qjYPHZ6P5zqz6fA",
    image: "/bayiler/ankara-sasmaz.webp",
    time: hours,
  },
  {
    slug: "izmir-gaziemir",
    name: "Gaziemir Oto Ekspertiz",
    district: "Gaziemir",
    city: "İzmir",
    phone: "05416401635",
    rating: 4.9,
    maps: "https://maps.app.goo.gl/CFXp5SqbdxpXnreG6",
    image: "/bayiler/izmir-gaziemir.webp",
    time: hours,
  },
];

export const dealerCities = [...new Set(dealers.map((d) => d.city))];

export const features = [
  {
    image: "/features/son-teknoloji.webp",
    title: "Son Teknoloji Cihazlar",
    text: "Yeni nesil test ve ölçüm cihazlarıyla aracınızı detaylı analiz ederiz.",
  },
  {
    image: "/features/ekip.webp",
    title: "Uzman Kadro",
    text: "Alanında deneyimli ve sertifikalı eksper ekibimiz hizmetinizde.",
  },
  {
    image: "/features/rapor.webp",
    title: "Şeffaf Raporlama",
    text: "Tüm bulguları anlaşılır, fotoğraflı ve şeffaf raporlarla sunuyoruz.",
  },
  {
    image: "/features/harita.webp",
    title: "Türkiye Genelinde Güçlü Ağ",
    text: "Türkiye'nin dört bir yanındaki istasyonlarımızla hizmetinizdeyiz.",
  },
];

export const processSteps = [
  {
    badge: "/steps/adim1.webp",
    title: "Randevu Alın",
    text: "WhatsApp veya telefonla hızlıca randevunuzu oluşturun, zamanınızı planlayın.",
    photo: "İstasyon girişi",
    image: "/hero/surec1.webp",
  },
  {
    badge: "/steps/adim2.webp",
    title: "Aracınızı Getirin",
    text: "Randevu saatinde istasyonumuza gelin, aracınızı uzman ekibimiz teslim alsın.",
    photo: "Araç kabul alanı",
    image: "/hero/surec2.webp",
  },
  {
    badge: "/steps/adim3.webp",
    title: "Detaylı İnceleme",
    text: "Motor, mekanik, kaporta, boya ve tüm elektronik sistemler cihazlarla incelenir.",
    photo: "Kontrol alanı",
    image: "/hero/surec3.webp",
  },
  {
    badge: "/steps/adim4.webp",
    title: "Raporunuzu Alın",
    text: "Kontroller tamamlandığında fotoğraflı ve detaylı raporunuz anında teslim edilir.",
    photo: "Rapor teslimi",
    image: "/hero/surec4.webp",
  },
];

export const packageItems = [
  "Kaporta Kontrol",
  "Boya Kontrol",
  "Ultraviyole (Mor) Işık Kontrol",
  "Plastik Parça Kontrolleri",
  "Dış Aksam Kontrol",
  "Fiziki Airbag Kontrolü",
  "Motor Kontrol",
  "Mekanik Kontrol",
  "Motor Conta Kaçak Kontrol",
  "Şanzıman Kontrol (Fiziki)",
  "Lift Araç Kontrol",
  "OBD Elektronik Beyin Kontrol",
  "OBD Elektronik KM Kontrol",
  "Fren Testi",
  "Yol Testi",
  "Süspansiyon Test",
  "Yanal Kayma Test",
  "Tramer Sorgulama",
  "KM Sorgulama",
  "İç Aksam Kontrol",
  "İç Dizayn Kontrolü",
  "Detaylı Özellikler ve Sürüş Destek Kontrolleri",
];

export const homeFaqs = [
  {
    q: "Oto ekspertiz nedir, neden yaptırmalıyım?",
    a: "Oto ekspertiz, ikinci el bir aracın kaporta, boya, motor, mekanik ve elektronik durumunun tarafsız bir uzman tarafından kontrol edilmesidir. Satın alma öncesinde gizli hasarları ve sürpriz masrafları ortaya çıkarır.",
  },
  {
    q: "Ekspertiz fiyatınız ne kadar?",
    a: `Tek paketimiz var: Full Ekspertiz KDV dahil ${site.price} TL. Alt paket veya gizli ücret yoktur, tüm istasyonlarımızda aynı fiyat uygulanır.`,
  },
  {
    q: "Rapor noterde geçerli mi?",
    a: "Evet. Raporlarımız noter satışında ve alım-satım sözleşmelerinde kullanılabilir; banka ve sigorta işlemlerinde de talep edilebilir.",
  },
  {
    q: "Satıcının yaptırdığı ekspertize güvenmeli miyim?",
    a: "En sağlıklı yöntem, aracı kendi seçtiğiniz bağımsız bir ekspertize götürmektir. Böylece raporun tarafsızlığından emin olursunuz.",
  },
  {
    q: "Kilometre oynaması nasıl tespit edilir?",
    a: "OBD üzerinden farklı beyinlerdeki kilometre kayıtları karşılaştırılır, servis ve tramer geçmişiyle birlikte değerlendirilir.",
  },
  {
    q: "Ekspertiz ne kadar sürer?",
    a: "Full ekspertiz ortalama 60-90 dakika sürer. Randevulu gelirseniz bekleme süreniz en aza iner.",
  },
];

export const franchiseFaqs = [
  {
    q: "Oto ekspertiz bayiliği nasıl alınır?",
    a: "Başvuru formunu doldurmanız veya WhatsApp üzerinden bize yazmanız yeterli. Yatırım ekibimiz sizinle iletişime geçerek süreci başlatır.",
  },
  {
    q: "Bayilik şartları nelerdir?",
    a: "Uygun lokasyonda yeterli büyüklükte bir alan, kurulum için yatırım kapasitesi ve marka standartlarına uyum temel şartlarımızdır.",
  },
  {
    q: "Sektör deneyimi gerekir mi?",
    a: "Zorunlu değildir. Teknik eğitim ve operasyon desteği merkezimiz tarafından verilir.",
  },
  {
    q: "Bayilere hangi destekler veriliyor?",
    a: "Fizibilite, yer seçimi, kurulum, personel, eğitim, yönetim yazılımı ve bölgesel reklam desteği sağlanır.",
  },
  {
    q: "Yatırım tutarı ne kadar?",
    a: "Yatırım tutarı bölgeye ve istasyon büyüklüğüne göre değişir. Görüşme sırasında size özel bir fizibilite sunulur.",
  },
  {
    q: "Hangi illere bayilik veriliyor?",
    a: "Türkiye'nin tüm illerinde bölge uygunluğuna göre bayilik verilmektedir.",
  },
];

export const campaigns = [
  {
    slug: "kendi-aracini-getir",
    image: "/hero/kendi-aracini-getir.webp",
    tag: "Araç Sahibi",
    title: "Kendi Aracınızı Getirin",
    text: `Satmadan önce de kontrol ettirin: kendi aracınız için Full Ekspertiz ${site.oldPrice} TL yerine ${site.campaignPrice} TL.`,
    items: [
      `Kendi aracınız için Full Ekspertiz KDV dahil ${site.campaignPrice} TL`,
      "Fiziki airbag kontrolü dahil",
      "Müşterilerimize sürpriz hediye",
      "Noterde geçerli, fotoğraflı rapor",
    ],
  },
  {
    slug: "galerici",
    image: "/hero/galerici-esnaf.webp",
    tag: "Esnaf",
    title: "Galerici Esnafına Özel",
    text: "Galerici esnafımıza özel avantajlı ekspertiz. Kaliteden ödün vermeden kapsamlı ekspertizi avantajlı fiyatla sunuyoruz.",
    items: [
      `Galerici esnafına özel detaylı ekspertiz KDV dahil ${site.campaignPrice} TL`,
      "Fiziki airbag kontrolü dahil",
      "Toplu araç kontrolünde öncelikli randevu",
      "Noterde geçerli, fotoğraflı rapor",
    ],
  },
  {
    slug: "sehit-gazi",
    image: "/hero/sehit-gazi.webp",
    tag: "Minnet",
    title: "Kahramanlarımızın emanetlerine ve gazilerimize",
    text: "Şehitlerimizin 1. derece yakınlarının araç ekspertizini ücretsiz, gazilerimizinkini yüzde 50 indirimli yapıyoruz; tüm istasyonlarımızda, süresiz.",
    items: [
      "1. derece şehit yakınlarımıza Full Ekspertiz ücretsiz",
      "Gazilerimize Full Ekspertiz yüzde 50 indirimli",
      "Şehit yakını veya gazi kimlik kartı yeterli",
    ],
  },
];

export const franchiseSupports = [
  { image: "/bayilik/fizibilite.webp", title: "Fizibilite", text: "Bölgenizin talebi, rekabeti ve ulaşımı verilerle değerlendirilir." },
  { image: "/bayilik/yer-secimi.webp", title: "Yer seçimi", text: "İstasyona uygun lokasyon ve yerleşim birlikte planlanır." },
  { image: "/bayilik/kurulum.webp", title: "Kurulum", text: "Kurumsal kimlik, cihaz ve ekipman tek elden; anahtar teslim kurulum." },
  { image: "/bayilik/personel.webp", title: "Personel", text: "Ekip kurulumunda işe alım desteği; ustalar merkez standardında yetiştirilir." },
  { image: "/bayilik/egitim.webp", title: "Eğitim ve yazılım", text: "Teknik eğitim, raporlama standardı ve randevudan kasaya yönetim yazılımı." },
  { image: "/bayilik/reklam.webp", title: "Reklam", text: "Bayinize özel web sayfası, harita kaydı ve bölgesel reklam desteği." },
];

export const franchiseSteps = [
  { title: "Başvuru ve görüşme", text: "Formu doldurun, WhatsApp'tan yazın ya da arayın. Yatırım ekibimiz iş modelini, bölgenizi ve beklentilerinizi sizinle görüşür." },
  { title: "Bölge ve lokasyon", text: "Bölgenin talebi, rekabeti ve ulaşımı değerlendirilir; bölge uygunluğu ve istasyon yeri netleşir." },
  { title: "Sözleşme ve kurulum", text: "Sözleşmenin ardından istasyon kurumsal kimlikle kurulur, cihaz ve ekipman yerleşir." },
  { title: "Ekip ve eğitim", text: "Ekibiniz kurulur; teknik eğitim, raporlama ve yönetim yazılımı eğitimi verilir, istasyon açılır." },
  { title: "Açılış ve büyüme", text: "Bölgenize özel reklam ve harita kaydıyla müşteri akışı desteklenir; denetim ve operasyon desteği sürer." },
];

export const footerColumns = [
  {
    title: "Kurumsal",
    links: [
      { href: "/kurumsal", label: "Hakkımızda" },
      { href: "/bayilerimiz", label: "Bayilerimiz" },
      { href: "/kampanyalar", label: "Kampanyalar" },
      { href: "/bayilik", label: "Bayilik Başvurusu" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  {
    title: "Hizmetler",
    links: [
      { href: "/paketler", label: "Oto Ekspertiz" },
      { href: "/paketler", label: "Full Ekspertiz Paketi" },
      { href: "/paketler", label: "Fiziki Airbag Kontrolü" },
      { href: "/paketler", label: "Mor Işık Boya Kontrolü" },
      { href: "/paketler", label: "Örnek Ekspertiz Raporu" },
    ],
  },
  {
    title: "Fiyatlar",
    links: [
      { href: "/paketler", label: "Oto Ekspertiz Fiyatları" },
      { href: "/kampanyalar#kendi-aracini-getir", label: "Kendi Aracını Getir" },
      { href: "/kampanyalar#galerici", label: "Galerici Esnafına Özel" },
      { href: "/kampanyalar#sehit-gazi", label: "Şehit ve Gazi Yakınlarına" },
    ],
  },
  {
    title: "Şehirler",
    links: [
      { href: "/bayilerimiz", label: "İstanbul Oto Ekspertiz" },
      { href: "/bayilerimiz", label: "Ankara Oto Ekspertiz" },
      { href: "/bayilerimiz", label: "İzmir Oto Ekspertiz" },
      { href: "/bayilerimiz", label: "Bursa Oto Ekspertiz" },
      { href: "/bayilerimiz", label: "Tüm bayilerimiz →" },
    ],
  },
  {
    title: "Yorumlar",
    links: [
      { href: "/bayilerimiz", label: "İstanbul Ekspertiz Yorumları" },
      { href: "/bayilerimiz", label: "Ankara Ekspertiz Yorumları" },
      { href: "/bayilerimiz", label: "İzmir Ekspertiz Yorumları" },
      { href: "/bayilerimiz", label: "Antalya Ekspertiz Yorumları" },
      { href: "/bayilerimiz", label: "Kocaeli Ekspertiz Yorumları" },
    ],
  },
];
