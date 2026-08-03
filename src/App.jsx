import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Calculator,
  CalendarDays,
  Check,
  ClipboardCheck,
  Clock3,
  Factory,
  Hammer,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Recycle,
  ShieldCheck,
  Truck,
  Warehouse,
  X,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";

const businessName = "Florya Palet";
const siteUrl = "https://www.kayserifloryapalet.com.tr";
const defaultPageTitle = "Florya Palet | Kayseri 2. El Palet Alım Satımı";
const defaultMetaDescription =
  "Florya Palet, Kayseri/Merkez ve çevresinde ikinci el palet alımı, satışı, tamiri, seçimi ve toplu tedarik hizmetleri verir.";
const phoneDisplay = "0531 894 79 38";
const whatsappPhone = "905318947938";
const address = "Kayseri / Merkez";
const email = "info@floryapalet.com";
const logoSrc = "/images/florya-palet-logo.png";
const workingHours = "Pazartesi - Pazar 08:00 - 20:00";
const mapsUrl = "https://maps.app.goo.gl/2mahGcGMCYG5zLu56";

const navItems = [
  ["Hakkımızda", "hakkimizda"],
  ["Hizmetler", "hizmetler"],
  ["Ürünlerimiz", "paletler"],
  ["Alım Süreci", "surec"],
  ["Fiyat", "fiyat"],
  ["Bölgeler", "bolgeler"],
  ["Blog", "blog"],
  ["SSS", "sss"],
  ["İletişim", "iletisim"],
];

const stats = [
  ["5000+", "aylık palet kapasitesi"],
  ["24 saat", "içinde teklif dönüşü"],
  ["Kayseri", "merkezli servis ağı"],
  ["Alım + Satış", "tek noktadan çözüm"],
];

const services = [
  {
    icon: Recycle,
    title: "2. el palet alımı",
    text: "Depoda bekleyen, sevkiyat sonrası dönen veya dönemsel fazla kalan paletleri yerinde görüp fiyatlandırıyoruz.",
    bullets: ["Euro palet", "Standart palet", "Kırık ve tamirlik palet"],
  },
  {
    icon: PackageCheck,
    title: "2. el palet satışı",
    text: "Sevkiyat ve depolama ihtiyacına uygun seçilmiş, sağlam ve kullanıma hazır palet tedariği sağlıyoruz.",
    bullets: ["A sınıfı seçme", "B sınıfı ekonomik", "Toplu teslimat"],
  },
  {
    icon: Hammer,
    title: "Palet tamiri ve ayrıştırma",
    text: "Kullanılabilir ürünleri ayırıyor, tamir edilebilir paletleri ekonomiye geri kazandırıyoruz.",
    bullets: ["Kırık tahta değişimi", "Ayak kontrolü", "Kondisyon sınıflama"],
  },
  {
    icon: Truck,
    title: "Nakliye planlama",
    text: "Toplu alım ve satışlarda yükleme saatini, araç yönlendirmesini ve teslim noktasını birlikte planlıyoruz.",
    bullets: ["Yerinden alım", "Düzenli rota", "Hızlı yükleme"],
  },
  {
    icon: Warehouse,
    title: "Düzenli stok anlaşması",
    text: "Haftalık veya aylık palet ihtiyacı olan işletmeler için sürdürülebilir tedarik modeli kuruyoruz.",
    bullets: ["Sabit periyot", "Ölçü bazlı plan", "Stok uyarısı"],
  },
  {
    icon: Calculator,
    title: "Kurumsal teklif",
    text: "Adet, ölçü, kalite, yükleme ve teslim koşullarına göre anlaşılır, hızlı ve net teklif hazırlıyoruz.",
    bullets: ["Fotoğrafla ön fiyat", "Yerinde ekspertiz", "Toplu fiyatlama"],
  },
];

const productCategories = [
  {
    name: "EPAL / Euro Palet",
    size: "80 x 120 cm",
    type: "Ahşap palet",
    lead: "Depo, üretim ve sevkiyat süreçlerinde en çok tercih edilen standart ikinci el palet grubudur.",
    specs: ["A / B sınıfı seçenek", "Dört yönden forklift erişimi", "Toplu alım ve satış"],
    visual: "euro",
  },
  {
    name: "CP / Kimyasal Palet",
    size: "CP1 - CP9",
    type: "Sanayi paleti",
    lead: "Kimya, sanayi ve ağır ürün sevkiyatlarında kullanılan dayanıklı CP palet seçenekleri.",
    specs: ["CP ölçü grupları", "Yüksek taşıma dengesi", "Stok durumuna göre temin"],
    visual: "cp",
  },
  {
    name: "Plastik Palet",
    size: "Çeşitli ölçüler",
    type: "Hijyenik palet",
    lead: "Nem, temizlik ve hijyen beklentisi yüksek alanlarda kullanılan plastik palet alternatifleri.",
    specs: ["Kolay temizlenir", "Uzun kullanım ömrü", "Stok bazlı tedarik"],
    visual: "plastic",
  },
  {
    name: "Ahşap Ambalaj Kasası",
    size: "Özel üretim",
    type: "Ambalaj çözümü",
    lead: "Makine, yedek parça ve hassas ürün taşıma süreçleri için ahşap kasa çözümleri.",
    specs: ["Ölçüye göre plan", "Sağlam gövde", "Sevkiyata uygun yapı"],
    visual: "crate",
  },
  {
    name: "Turpal Ahşap Palet",
    size: "Standart / özel",
    type: "Ahşap palet",
    lead: "Türkiye içi sevkiyatlarda kullanılan ekonomik ve pratik ahşap palet seçenekleri.",
    specs: ["Çam ve kavak seçenekleri", "Ekonomik tedarik", "Toplu satış"],
    visual: "turpal",
  },
  {
    name: "100x120 Ahşap Palet",
    size: "100 x 120 cm",
    type: "Geniş yüzey paleti",
    lead: "Üretim, depo ve iç sevkiyat operasyonlarında geniş yüzey avantajı sağlayan palet tipi.",
    specs: ["Geniş taşıma alanı", "Forklift uyumlu", "Seçme / ekonomik sınıf"],
    visual: "standard",
  },
];

const productDetails = [
  {
    title: "İkinci El 80x120 Ahşap Palet",
    subtitle: "Euro palet ölçüsüne yakın, çok amaçlı ve yaygın kullanılan ahşap palet.",
    specs: [
      ["Ölçü", "80 x 120 cm"],
      ["Kullanım", "Depolama, sevkiyat, üretim hattı"],
      ["Kondisyon", "A sınıfı, B sınıfı, tamirlik"],
      ["Taşıma", "Yüke ve palet durumuna göre değerlendirilir"],
    ],
    benefits: ["Yaygın ölçü olduğu için stok dönüşü hızlıdır.", "Forklift ve transpalet operasyonlarına uygundur.", "İstifleme alanında düzen ve yer tasarrufu sağlar."],
  },
  {
    title: "İkinci El 100x120 Ahşap Palet",
    subtitle: "Daha geniş yüzey isteyen üretim ve sevkiyat operasyonları için ekonomik seçenek.",
    specs: [
      ["Ölçü", "100 x 120 cm"],
      ["Kullanım", "Sanayi, üretim, iç lojistik"],
      ["Malzeme", "Çam, kavak veya karışık ahşap"],
      ["Tedarik", "Toplu adetlerde planlı teslimat"],
    ],
    benefits: ["Geniş ürünlerde daha dengeli taşıma sağlar.", "Toplu operasyonlarda maliyet avantajı sunar.", "Kondisyonuna göre alım ve satış fiyatı hızlı belirlenir."],
  },
];

const process = [
  ["Bilgi ve fotoğraf", "Palet tipi, adet, ölçü, konum ve varsa fotoğraf gönderilir."],
  ["Ön fiyat", "Miktar ve kondisyona göre hızlı ön fiyat paylaşılır."],
  ["Yerinde kontrol", "Toplu işlemlerde paletler sahada kontrol edilir ve fiyat netleşir."],
  ["Yükleme planı", "Araç, yükleme saati, personel ve teslim noktası belirlenir."],
  ["Ödeme ve teslim", "Alımda ödeme, satışta teslimat planı net ve kayıtlı şekilde tamamlanır."],
];

const priceFactors = [
  "Paletin ölçüsü ve tipi",
  "A, B veya tamirlik kondisyonu",
  "Adet ve istif düzeni",
  "Kırık tahta ve ayak oranı",
  "Yükleme kolaylığı",
  "Alım veya teslim mesafesi",
  "Dönemsel stok ihtiyacı",
  "Düzenli anlaşma potansiyeli",
];

const regions = [
  "Kayseri Merkez",
  "Melikgazi",
  "Kocasinan",
  "Talas",
  "Hacılar",
  "İncesu",
  "Organize Sanayi",
  "Mimarsinan OSB",
  "Serbest Bölge",
  "Develi",
  "Bünyan",
  "Yahyalı",
];

const serviceAreaRegions = [
  "Kayseri Merkez",
  "Melikgazi",
  "Kocasinan",
  "Talas",
  "Hacılar",
  "İncesu",
  "Develi",
  "Bünyan",
  "Yahyalı",
  "Yeşilhisar",
  "Tomarza",
  "Pınarbaşı",
  "Sarıoğlan",
  "Sarız",
  "Felahiye",
  "Özvatan",
  "Akkışla",
  "Organize Sanayi",
  "Mimarsinan OSB",
  "Serbest Bölge",
];

const servicePages = [
  {
    path: "/ikinci-el-palet-alimi",
    navLabel: "2. El Palet Alımı",
    eyebrow: "Palet Alımı",
    title: "Kayseri İkinci El Palet Alımı",
    seoTitle: "Kayseri İkinci El Palet Alımı | Florya Palet",
    description:
      "Kayseri ve ilçelerinde kullanılmış ahşap palet, Euro palet, standart palet, CP palet ve tamirlik paletler için yerinde değerlendirme ve toplu alım hizmeti.",
    ogDescription:
      "Kayseri ikinci el palet alımı için yerinde kontrol, hızlı fiyatlandırma, yükleme planı ve toplu palet değerlendirme hizmeti.",
    image: "/images/palet-saha.png",
    imageAlt: "Kayseri ikinci el palet alımı için istiflenmiş ahşap palet sahası",
    highlights: [
      ["Yerinde kontrol", "Palet tipi, adet ve kondisyon sahada netleşir."],
      ["Toplu alım", "Depo, fabrika ve sevkiyat dönüşü paletler değerlendirilir."],
      ["Hızlı teklif", "Fotoğraf ve konum bilgisiyle ön fiyat hazırlanır."],
    ],
    introTitle: "Depoda bekleyen paletleri hızlı ve planlı şekilde değerlendiriyoruz.",
    paragraphs: [
      "İkinci el palet alımında en doğru fiyat; paletin ölçüsü, kırık oranı, kullanım durumu, adet ve yükleme kolaylığı birlikte değerlendirilerek çıkar.",
      "Florya Palet, Kayseri merkezli saha planıyla işletmelerin elinde bekleyen kullanılabilir, tamirlik veya geri kazanıma uygun paletleri toplu olarak değerlendirir.",
      "Euro palet, standart ahşap palet, CP palet ve özel ölçü paletlerde fotoğrafla ön değerlendirme yapılabilir; adet yüksek olduğunda yerinde kontrol ve araç planı hazırlanır.",
    ],
    detailTitle: "Hangi paletler alınır?",
    details: [
      ["Euro ve standart palet", "80x120, 100x120 ve yaygın sevkiyat ölçülerindeki ahşap paletler."],
      ["Tamirlik palet", "Kırık tahta veya ayak sorunu olan, tamirle yeniden kullanılabilecek paletler."],
      ["CP ve sanayi paleti", "Sanayi, üretim ve ağır yük sevkiyatında kullanılan dayanıklı palet grupları."],
      ["Toplu depo stoğu", "Sevkiyat sonrası dönen veya depoda yer kaplayan adetli palet stokları."],
    ],
    checklistTitle: "Teklif için gereken bilgiler",
    checklist: ["Palet tipi ve ölçüsü", "Yaklaşık adet", "Paletin kondisyonu", "Konum ve yükleme alanı", "Varsa fotoğraf veya video"],
  },
  {
    path: "/ikinci-el-palet-satisi",
    navLabel: "2. El Palet Satışı",
    eyebrow: "Palet Satışı",
    title: "Kayseri İkinci El Palet Satışı",
    seoTitle: "Kayseri İkinci El Palet Satışı | Florya Palet",
    description:
      "Kayseri'de üretim, depo ve sevkiyat süreçleri için seçilmiş ikinci el Euro palet, standart ahşap palet, CP palet ve ekonomik palet satışı.",
    ogDescription:
      "Kayseri ikinci el palet satışı için seçme stok, ekonomik kalite seçenekleri, toplu teslimat ve düzenli tedarik planı.",
    image: "/images/palet-sevkiyat.png",
    imageAlt: "Kayseri ikinci el palet satışı için yüklemeye hazırlanan paletler",
    highlights: [
      ["Seçme stok", "Kullanıma hazır paletler sınıfına göre ayrılır."],
      ["Ekonomik seçenek", "A ve B sınıfı paletlerle ihtiyaca göre fiyat dengesi kurulur."],
      ["Planlı teslim", "Toplu siparişlerde araç ve teslim saati önceden netleşir."],
    ],
    introTitle: "Sevkiyat ve depolama akışınıza uygun ikinci el palet tedariği sağlıyoruz.",
    paragraphs: [
      "İkinci el palet satışı, doğru sınıflandırma yapıldığında işletmeler için önemli maliyet avantajı sağlar. Kullanım amacına göre seçme veya ekonomik palet tercih edilebilir.",
      "Florya Palet, Kayseri ve çevresindeki üretici, depo, lojistik ve ticari işletmeler için Euro palet, standart ahşap palet ve sanayi paleti tedariği sunar.",
      "Siparişlerde ölçü, kalite beklentisi, adet, teslim noktası ve kullanım alanı birlikte değerlendirilerek en uygun stok önerilir.",
    ],
    detailTitle: "Satışta sunduğumuz seçenekler",
    details: [
      ["A sınıfı seçme palet", "Daha düzgün yüzey ve sağlamlık beklentisi olan sevkiyatlar için."],
      ["B sınıfı ekonomik palet", "İç lojistik, depo ve maliyet odaklı kullanım alanları için."],
      ["Euro ve standart ölçü", "80x120, 100x120 ve stok durumuna göre farklı ölçüler."],
      ["Düzenli tedarik", "Haftalık veya aylık palet ihtiyacı olan işletmelere planlı stok akışı."],
    ],
    checklistTitle: "Sipariş öncesi netleşenler",
    checklist: ["Kullanım amacı", "Palet ölçüsü", "Kalite beklentisi", "Adet ve teslim noktası", "Teslim tarihi"],
  },
  {
    path: "/sifir-palet-satisi",
    navLabel: "Sıfır Palet Satışı",
    eyebrow: "Yeni Palet",
    title: "Kayseri Sıfır Palet Satışı",
    seoTitle: "Kayseri Sıfır Palet Satışı | Florya Palet",
    description:
      "Kayseri'de standart ve özel ölçü sıfır ahşap palet satışı; üretim, ihracat, depolama ve düzenli sevkiyat ihtiyaçlarına uygun palet tedariki.",
    ogDescription:
      "Kayseri sıfır palet satışı için standart ölçü, özel ölçü, toplu üretim ve düzenli palet tedarik çözümleri.",
    image: "/images/palet-tamir.png",
    imageAlt: "Kayseri sıfır ahşap palet satışı için hazırlanan paletler",
    highlights: [
      ["Standart ölçü", "Yaygın depo ve sevkiyat ölçülerinde palet tedariği."],
      ["Özel ölçü", "Ürün ve yük tipine göre ölçü planı yapılabilir."],
      ["Düzenli akış", "Tekrarlı sevkiyat yapan işletmeler için stok planı kurulur."],
    ],
    introTitle: "Sıfır palet ihtiyacını kullanım amacına göre planlıyoruz.",
    paragraphs: [
      "Sıfır palet, ölçü standardı ve dayanım beklentisinin net olduğu üretim, depolama ve sevkiyat süreçlerinde tercih edilir.",
      "Florya Palet, Kayseri'de standart ahşap palet ve ihtiyaç halinde özel ölçü palet taleplerini adet, teslim zamanı ve kullanım koşullarına göre değerlendirir.",
      "Yeni palet tedariğinde hedef; yük tipine uygun ölçüyü, doğru malzeme yapısını ve sürdürülebilir teslim planını birlikte kurmaktır.",
    ],
    detailTitle: "Sıfır palet seçenekleri",
    details: [
      ["Standart ahşap palet", "Depo, üretim ve iç sevkiyat operasyonlarında kullanılan yaygın ölçüler."],
      ["Özel ölçü palet", "Makine, ürün grubu veya sevkiyat ambalajına göre planlanan ölçüler."],
      ["Toplu sipariş", "Düzenli ve adetli ihtiyaçlarda teslim takvimiyle ilerleyen tedarik."],
      ["Kullanım odaklı seçim", "Yük ağırlığı, istif düzeni ve ekipman kullanımına göre öneri."],
    ],
    checklistTitle: "Fiyat için paylaşılacaklar",
    checklist: ["İstenen ölçü", "Adet", "Yük tipi", "Teslim lokasyonu", "Termin beklentisi"],
  },
  {
    path: "/euro-palet",
    navLabel: "Euro Palet",
    eyebrow: "80x120 Palet",
    title: "Kayseri Euro Palet",
    seoTitle: "Kayseri Euro Palet | 80x120 EPAL Palet | Florya Palet",
    description:
      "Kayseri'de 80x120 Euro palet alımı ve satışı; seçme ikinci el Euro palet, ekonomik Euro palet ve toplu tedarik seçenekleri.",
    ogDescription:
      "Kayseri Euro palet ihtiyaçları için 80x120 ölçü, ikinci el Euro palet alım satımı, stok ve toplu teslimat çözümleri.",
    image: "/images/palet-saha.png",
    imageAlt: "Kayseri Euro palet stok alanı",
    highlights: [
      ["80x120 ölçü", "Depo ve sevkiyat süreçlerinde yaygın kullanılan standart."],
      ["Alım + satış", "Euro palet stokları hem alınır hem tedarik edilir."],
      ["Sınıf seçimi", "Seçme, ekonomik ve tamirlik kondisyon ayrımı yapılır."],
    ],
    introTitle: "Euro palet ihtiyacında ölçü, kondisyon ve adet bilgisiyle hızlı ilerliyoruz.",
    paragraphs: [
      "Euro palet, 80x120 cm ölçüsüyle üretim, depolama, lojistik ve sevkiyat operasyonlarında en sık kullanılan palet tiplerinden biridir.",
      "Florya Palet, Kayseri'de ikinci el Euro palet alımı ve satışı yapar; stok durumuna göre seçme veya ekonomik Euro palet seçenekleri sunar.",
      "Alım ve satış işlemlerinde paletin sağlamlığı, ayak durumu, tahta yapısı, kırık oranı ve sevkiyat mesafesi dikkate alınır.",
    ],
    detailTitle: "Euro palet kullanım avantajları",
    details: [
      ["Standart ölçü", "80x120 cm yapısıyla birçok depo ekipmanına ve istif düzenine uygundur."],
      ["Forklift uyumu", "Operasyonlarda forklift ve transpaletle pratik hareket sağlar."],
      ["Hızlı stok dönüşü", "Yaygın kullanıldığı için alım ve satışta hızlı değerlendirilir."],
      ["Kondisyon seçimi", "A sınıfı, B sınıfı veya tamirlik olarak ayrıştırılabilir."],
    ],
    checklistTitle: "Euro palet teklif bilgileri",
    checklist: ["Alım mı satış mı?", "Adet", "Kondisyon", "Konum", "Teslim veya yükleme zamanı"],
  },
  {
    path: "/palet-fiyat-teklifi",
    navLabel: "Palet Fiyat Teklifi",
    eyebrow: "Hızlı Teklif",
    title: "Kayseri Palet Fiyat Teklifi",
    seoTitle: "Kayseri Palet Fiyat Teklifi | Florya Palet",
    description:
      "İkinci el palet alımı, palet satışı, sıfır palet ve Euro palet ihtiyaçları için Kayseri'de hızlı fiyat teklifi alın.",
    ogDescription:
      "Kayseri palet fiyat teklifi için adet, ölçü, kondisyon, lokasyon ve teslim planına göre hızlı WhatsApp dönüşü.",
    image: "/images/palet-sevkiyat.png",
    imageAlt: "Kayseri palet fiyat teklifi için sevkiyat alanında bekleyen paletler",
    highlights: [
      ["Net bilgi", "Ölçü, adet ve kondisyon fiyatın temelini oluşturur."],
      ["WhatsApp dönüşü", "Fotoğrafla ön değerlendirme hızlı yapılır."],
      ["Şeffaf kriter", "Nakliye, yükleme ve stok durumu ayrıca konuşulur."],
    ],
    introTitle: "Palet fiyatı sahadaki gerçek duruma göre netleşir.",
    paragraphs: [
      "Palet fiyat teklifinde tek bir sabit rakam yerine paletin tipi, ölçüsü, kondisyonu, adet bilgisi ve taşıma planı birlikte değerlendirilir.",
      "İkinci el palet alımı, ikinci el palet satışı, sıfır palet veya Euro palet taleplerinde fotoğraf, konum ve adet bilgisi paylaşıldığında hızlı ön fiyat hazırlanabilir.",
      "Toplu işlemlerde yerinde kontrol, yükleme kolaylığı ve mesafe gibi detaylar fiyatı doğrudan etkilediği için teklif net ve anlaşılır şekilde paylaşılır.",
    ],
    detailTitle: "Fiyatı etkileyen başlıca kriterler",
    details: [
      ["Palet tipi", "Euro, standart, CP, plastik veya özel ölçü palet olması."],
      ["Kondisyon", "A sınıfı, B sınıfı, tamirlik veya kırık oranı."],
      ["Adet", "Toplu miktarlarda araç ve operasyon planının değişmesi."],
      ["Konum", "Yükleme yeri, teslim noktası ve mesafenin netleşmesi."],
    ],
    checklistTitle: "Hızlı teklif için gönderin",
    checklist: ["Palet fotoğrafı", "Ölçü veya palet tipi", "Adet", "Kayseri ilçe/konum", "Alım veya satış talebi"],
  },
  {
    path: "/hizmet-bolgeleri",
    navLabel: "Hizmet Bölgeleri",
    eyebrow: "Kayseri ve İlçeleri",
    title: "Kayseri Palet Hizmet Bölgeleri",
    seoTitle: "Kayseri Palet Hizmet Bölgeleri | Florya Palet",
    description:
      "Florya Palet; Kayseri merkez, Melikgazi, Kocasinan, Talas, Hacılar, İncesu ve Kayseri ilçelerinde palet alımı, satışı ve tedarik hizmeti verir.",
    ogDescription:
      "Kayseri ve ilçelerinde ikinci el palet alımı, ikinci el palet satışı, sıfır palet, Euro palet ve toplu palet tedarik hizmet bölgeleri.",
    image: "/images/palet-saha.png",
    imageAlt: "Kayseri palet hizmet bölgeleri için saha ve stok alanı",
    highlights: [
      ["Kayseri merkez", "Melikgazi, Kocasinan, Talas ve Hacılar odağında hızlı dönüş."],
      ["İlçe planı", "Adet ve mesafeye göre Kayseri ilçelerine servis planı."],
      ["Sanayi bölgeleri", "OSB, Mimarsinan OSB ve Serbest Bölge talepleri için toplu akış."],
    ],
    introTitle: "Kayseri merkez ve ilçelerinde palet ihtiyacına göre araç planı oluşturuyoruz.",
    paragraphs: [
      "Hizmet bölgeleri, talebin palet adedi, ürün tipi, yükleme koşulu ve mesafesine göre planlanır. Kayseri merkezde hızlı dönüş, ilçelerde ise toplu talebe göre rota planı yapılır.",
      "Florya Palet; ikinci el palet alımı, ikinci el palet satışı, sıfır palet satışı ve Euro palet tedariği için Kayseri merkez ve ilçelerine hizmet verir.",
      "Organize sanayi bölgeleri, üretim sahaları, depolar ve sevkiyat noktalarında palet alım-satım süreci önceden netleştirilen saat ve lokasyon bilgisiyle ilerler.",
    ],
    detailTitle: "Öne çıkan hizmet noktaları",
    details: [
      ["Merkez ilçeler", "Melikgazi, Kocasinan, Talas ve Hacılar için hızlı değerlendirme."],
      ["Sanayi bölgeleri", "Kayseri OSB, Mimarsinan OSB ve Serbest Bölge için toplu palet planı."],
      ["Çevre ilçeler", "Adetli taleplerde Kayseri ilçelerine alım ve teslimat organizasyonu."],
      ["Düzenli rota", "Haftalık veya aylık palet ihtiyacı olan işletmelere planlı servis."],
    ],
    checklistTitle: "Hizmet verilen bölgeler",
    checklist: serviceAreaRegions.slice(0, 8),
    regions: serviceAreaRegions,
  },
];

const gallery = [
  {
    image: "/images/palet-saha.png",
    title: "Saha stoğu",
    text: "Seçme ve ekonomik paletler ayrı istiflenir.",
  },
  {
    image: "/images/palet-tamir.png",
    title: "Kontrol ve tamir",
    text: "Kırık, sağlam ve tamirlik paletler sınıflandırılır.",
  },
  {
    image: "/images/palet-sevkiyat.png",
    title: "Toplu sevkiyat",
    text: "Alım ve teslimat için araç planlaması yapılır.",
  },
];

const trustItems = [
  [ShieldCheck, "Net fiyatlandırma", "Ölçü, adet, kondisyon ve mesafe açıkça konuşulur."],
  [ClipboardCheck, "Fotoğrafla ön değerlendirme", "WhatsApp üzerinden hızlı ön fiyat alınabilir."],
  [Truck, "Planlı yükleme", "Toplu alımlarda araç ve yükleme saati önceden netleşir."],
  [Clock3, "Hızlı dönüş", "Kayseri merkezli taleplerde aynı gün geri dönüş hedeflenir."],
];

const faqs = [
  ["Kırık palet alıyor musunuz?", "Evet. Tamirlik ve geri kazanıma uygun paletler adet, ölçü ve kırık oranına göre değerlendirilir."],
  ["Az adet palet için teklif verilir mi?", "Konuma ve palet tipine göre verilir. En sağlıklı dönüş için adet, fotoğraf ve lokasyon paylaşmanız yeterlidir."],
  ["Paletleri siz mi alıyorsunuz?", "Toplu alımlarda araç planlaması yapılır. Yükleme koşulu ve mesafe fiyata dahil edilerek netleştirilir."],
  ["Düzenli palet tedariği yapıyor musunuz?", "Evet. Haftalık veya aylık ihtiyacı olan işletmeler için ölçü ve adet bazlı düzenli tedarik planı kurulabilir."],
  ["Kayseri dışına hizmet var mı?", "Adet ve sevkiyat planına göre çevre ilçeler ve yakın iller için ayrıca değerlendirme yapılabilir."],
  ["Fiyat neden değişiyor?", "Ölçü, kondisyon, adet, kırık oranı, piyasa talebi, yükleme kolaylığı ve mesafe fiyatı doğrudan etkiler."],
];

const dogtekServicesUrl = "https://www.dogtekdogalgazmuhendislik.com/kayseri-dogalgaz-hizmetleri";

const blogPost = {
  slug: "depo-is-yerlerinde-kis-oncesi-dogalgaz-tesisati-kontrolu",
  path: "/blog/depo-is-yerlerinde-kis-oncesi-dogalgaz-tesisati-kontrolu",
  title: "Depo ve İş Yerlerinde Kış Öncesi Doğalgaz Tesisatı Kontrolü",
  seoTitle: "Depo ve İş Yerlerinde Kış Öncesi Doğalgaz Kontrolü | Florya Palet",
  description:
    "Depo, atölye ve iş yerlerinde kış öncesinde doğalgaz tesisatı, ısıtma sistemi, vanalar ve kullanım alanlarında kontrol edilmesi gereken noktalar.",
  ogDescription:
    "Depo ve iş yerlerinde kış öncesi doğalgaz tesisatı, ısıtma sistemi ve güvenli depolama düzeni için kontrol rehberi.",
  category: "Depo Düzeni",
  dateLabel: "15 Temmuz 2026",
  readTime: "5 dk okuma",
  image: "/images/palet-saha.png",
  imageAlt: "Depoda istiflenmiş paletler ve çalışma alanı",
  checklist: [
    "Doğalgaz sayacı ve vanalar erişilebilir durumda mı?",
    "Tesisatın önünde palet veya ürün bulunuyor mu?",
    "Isıtma sistemi sorunsuz çalışıyor mu?",
    "Cihazda hata kodu veya olağan dışı ses var mı?",
    "İş yerinde sonradan tesisatı etkileyebilecek değişiklik yapıldı mı?",
    "Havalandırma bölümleri açık mı?",
    "Sorumlu çalışanlar acil durumda ne yapılacağını biliyor mu?",
    "Teknik kontrol gerektiren bir durum bulunuyor mu?",
  ],
};

const serviceRoutes = servicePages.map((page) => page.path);
const servicePageMap = new Map(servicePages.map((page) => [page.path, page]));
const blogRoutes = [blogPost.path];
const routesToPrerender = ["/", ...serviceRoutes, ...blogRoutes];

function normalizePathname(pathname) {
  if (!pathname) {
    return "/";
  }

  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return normalizedPath.length > 1 ? normalizedPath.replace(/\/+$/, "") : normalizedPath;
}

function getCanonicalUrl(pathname) {
  const normalizedPath = normalizePathname(pathname);

  return normalizedPath === "/" ? `${siteUrl}/` : `${siteUrl}${normalizedPath}`;
}

function getSeoForPath(pathname) {
  const normalizedPath = normalizePathname(pathname);
  const servicePage = servicePageMap.get(normalizedPath);

  if (servicePage) {
    return {
      title: servicePage.seoTitle,
      description: servicePage.description,
      canonical: getCanonicalUrl(servicePage.path),
      ogTitle: servicePage.title,
      ogDescription: servicePage.ogDescription,
      ogUrl: getCanonicalUrl(servicePage.path),
      ogType: "website",
    };
  }

  if (normalizedPath === blogPost.path) {
    return {
      title: blogPost.seoTitle,
      description: blogPost.description,
      canonical: getCanonicalUrl(blogPost.path),
      ogTitle: blogPost.title,
      ogDescription: blogPost.ogDescription,
      ogUrl: getCanonicalUrl(blogPost.path),
      ogType: "article",
    };
  }

  return {
    title: defaultPageTitle,
    description: defaultMetaDescription,
    canonical: getCanonicalUrl("/"),
    ogTitle: defaultPageTitle,
    ogDescription: "Kayseri/Merkez çıkışlı ikinci el palet alımı, satışı, tamiri ve toplu tedarik hizmetleri.",
    ogUrl: getCanonicalUrl("/"),
    ogType: "website",
  };
}

function goTo(id) {
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
    return;
  }

  window.location.href = `/#${id}`;
}

function getCurrentPath(initialPath) {
  if (initialPath) {
    return normalizePathname(initialPath);
  }

  if (typeof window !== "undefined") {
    return normalizePathname(window.location.pathname);
  }

  return "/";
}

function Seo({ title, description, canonical, ogTitle, ogDescription, ogUrl, ogType }) {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`${siteUrl}/images/florya-palet-og.png`} />
    </Helmet>
  );
}

function ProductIllustration({ variant }) {
  return (
    <div className={`product-visual product-visual-${variant}`} aria-hidden="true">
      <div className="product-sun" />
      <div className="product-object">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function ServicePagesSection() {
  return (
    <section id="hizmetler" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Hizmet Sayfaları</p>
            <h2 className="section-title">Alım, satış, sıfır palet ve bölge talepleri için ayrı sayfalar.</h2>
          </div>
          <a className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest-700 px-5 font-black text-white" href="/palet-fiyat-teklifi">
            Fiyat Teklifi Sayfası
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {servicePages.map((page) => (
            <a
              key={page.path}
              className="group flex min-h-[260px] flex-col rounded-md border border-forest-900/10 bg-paper p-6 shadow-sm transition hover:-translate-y-1 hover:border-forest-700/35 hover:shadow-soft"
              href={page.path}
            >
              <span className="text-sm font-black uppercase tracking-normal text-clay">{page.eyebrow}</span>
              <h3 className="mt-3 text-2xl font-black leading-tight">{page.navLabel}</h3>
              <p className="mt-4 flex-1 leading-7 text-forest-900/66">{page.ogDescription}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-black text-forest-700">
                Sayfayı İncele
                <ArrowRight className="transition group-hover:translate-x-1" size={17} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePage({ page }) {
  return (
    <article className="bg-paper pt-28">
      <header className="bg-forest-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div className="min-w-0 w-full max-w-[22rem] sm:max-w-none">
            <a className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/8 px-4 py-2 text-sm font-black text-white/82 transition hover:bg-white/12" href="/">
              <ArrowRight className="rotate-180" size={17} />
              Ana Sayfaya Dön
            </a>
            <p className="section-kicker text-timber-300">{page.eyebrow}</p>
            <h1 className="max-w-full break-words text-3xl font-black leading-[1.06] tracking-normal [overflow-wrap:anywhere] sm:text-5xl lg:text-6xl">{page.title}</h1>
            <p className="mt-6 max-w-3xl break-words text-lg leading-8 text-white/76 [overflow-wrap:anywhere]">{page.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {page.highlights.map(([title, text]) => (
                <div key={title} className="min-w-0 rounded-md border border-white/14 bg-white/8 p-4">
                  <strong className="block text-lg text-timber-100">{title}</strong>
                  <span className="mt-2 block text-sm leading-6 text-white/68">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-white/12 bg-white/8 p-2">
            <img className="h-[380px] w-full rounded object-cover" src={page.image} alt={page.imageAlt} />
          </div>
        </div>
      </header>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
          <div className="rounded-md border border-forest-900/10 bg-white p-6 shadow-sm sm:p-10">
            <p className="section-kicker">{page.eyebrow}</p>
            <h2 className="section-title">{page.introTitle}</h2>
            <div className="prose-content mt-7">
              {page.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-md border border-forest-900/10 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <p className="section-kicker">{page.checklistTitle}</p>
            <div className="mt-5 grid gap-3">
              {page.checklist.map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-forest-900/8 pb-3 last:border-b-0 last:pb-0">
                  <ClipboardCheck className="mt-0.5 shrink-0 text-clay" size={18} />
                  <span className="font-bold leading-6 text-forest-900/72">{item}</span>
                </div>
              ))}
            </div>
            <a
              className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-timber-300 px-5 font-black text-forest-900 transition hover:bg-timber-100"
              href="/#teklif"
            >
              Teklif Al
              <ArrowRight size={18} />
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">Detaylar</p>
            <h2 className="section-title">{page.detailTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {page.details.map(([title, text]) => (
              <article key={title} className="rounded-md border border-forest-900/10 bg-paper p-5">
                <BadgeCheck className="mb-6 text-clay" size={26} />
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-3 leading-7 text-forest-900/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {page.regions && (
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <p className="section-kicker">Kayseri ve İlçeleri</p>
              <h2 className="section-title">Hizmet verilen Kayseri bölgeleri.</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {page.regions.map((region) => (
                <div key={region} className="rounded-md border border-forest-900/10 bg-white p-4 font-black shadow-sm">
                  {region}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-forest-900 py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="section-kicker text-timber-300">Florya Palet</p>
            <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-5xl">Palet ihtiyacınızı Kayseri çıkışlı planlayalım.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/70">
              Adet, ölçü, kondisyon ve lokasyon bilgisini paylaşın; alım, satış veya düzenli tedarik için net dönüş yapalım.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-timber-300 px-6 font-black text-forest-900 transition hover:bg-timber-100"
              href="/#teklif"
            >
              Fiyat Teklifi Al
              <ArrowRight size={18} />
            </a>
            <a
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-white/25 bg-white/8 px-6 font-black text-white transition hover:bg-white/12"
              href={`https://wa.me/${whatsappPhone}`}
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}

function BlogPreviewSection() {
  return (
    <section id="blog" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p className="section-kicker">Blog</p>
          <h2 className="section-title">Depo, sevkiyat ve iş yeri düzeni için pratik notlar.</h2>
          <p className="mt-5 leading-8 text-forest-900/65">
            Palet depolama, saha düzeni ve işletme hazırlıklarıyla ilgili uygulanabilir rehberler.
          </p>
        </div>

        <article className="overflow-hidden rounded-md border border-forest-900/10 bg-white shadow-sm">
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            <img className="h-72 w-full object-cover md:h-full" src={blogPost.image} alt={blogPost.imageAlt} />
            <div className="flex flex-col p-6 sm:p-8">
              <div className="mb-5 flex flex-wrap gap-2 text-xs font-black uppercase tracking-normal">
                <span className="rounded-md bg-forest-50 px-3 py-2 text-forest-700">{blogPost.category}</span>
                <span className="rounded-md bg-timber-100 px-3 py-2 text-forest-900">{blogPost.readTime}</span>
              </div>
              <h3 className="text-2xl font-black leading-tight sm:text-3xl">{blogPost.title}</h3>
              <p className="mt-4 leading-8 text-forest-900/66">{blogPost.description}</p>
              <a
                className="mt-8 inline-flex min-h-[48px] w-fit items-center justify-center gap-2 rounded-md bg-forest-700 px-5 font-black text-white transition hover:bg-forest-900"
                href={blogPost.path}
              >
                Yazıyı Oku
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function BlogArticle() {
  return (
    <article className="bg-paper pt-28">
      <header className="bg-forest-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <a className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/8 px-4 py-2 text-sm font-black text-white/82 transition hover:bg-white/12" href="/">
              <ArrowRight className="rotate-180" size={17} />
              Ana Sayfaya Dön
            </a>
            <div className="mb-5 flex flex-wrap gap-2 text-xs font-black uppercase tracking-normal">
              <span className="rounded-md bg-timber-300 px-3 py-2 text-forest-900">{blogPost.category}</span>
              <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-white/80">
                <CalendarDays size={15} />
                {blogPost.dateLabel}
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-white/80">
                <Clock3 size={15} />
                {blogPost.readTime}
              </span>
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-normal sm:text-6xl">{blogPost.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">{blogPost.description}</p>
          </div>
          <div className="overflow-hidden rounded-md border border-white/12 bg-white/8 p-2">
            <img className="h-[360px] w-full rounded object-cover" src={blogPost.image} alt={blogPost.imageAlt} />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8 lg:py-16">
        <div className="rounded-md border border-forest-900/10 bg-white p-6 shadow-sm sm:p-10">
          <div className="prose-content">
            <p>
              Kış aylarına girerken depo, atölye ve iş yerlerinde yalnızca ürün stoklarının ve çalışma alanlarının düzenlenmesi yeterli değildir. Isıtma sistemi, doğalgaz
              tesisatı ve cihazların bulunduğu bölümlerin de kullanıma hazır olup olmadığı kontrol edilmelidir.
            </p>
            <p>
              Özellikle uzun süre kullanılmayan ısıtma sistemleri, erişimi kapanmış vanalar veya çalışma alanında sonradan yapılan değişiklikler kış döneminde çeşitli
              sorunlara neden olabilir. Bu nedenle kontrollerin havalar tamamen soğumadan önce yapılması önemlidir.
            </p>

            <h2>1. Tesisat çevresinin erişilebilir olduğundan emin olun</h2>
            <p>
              Depolarda paletler, paketleme malzemeleri ve ürünler zaman içerisinde doğalgaz tesisatının veya ısıtma cihazlarının bulunduğu alanların önüne
              yerleştirilebilir.
            </p>
            <p>Aşağıdaki bölümlerin erişilebilir durumda kalmasına dikkat edilmelidir:</p>
            <ul>
              <li>Ana doğalgaz vanası</li>
              <li>Sayaç bölümü</li>
              <li>Kombi veya ısıtma cihazı</li>
              <li>Tesisat boruları</li>
              <li>Cihaz bağlantıları</li>
              <li>Havalandırma alanları</li>
            </ul>
            <p>Acil bir kontrol veya teknik müdahale gerektiğinde bu bölümlere kolaylıkla ulaşılabilmesi gerekir.</p>

            <h2>2. Depolama düzenini gözden geçirin</h2>
            <p>
              Paletlerin ve ürünlerin yalnızca boş bulunan alanlara gelişigüzel yerleştirilmesi çalışma düzenini zorlaştırabilir. Özellikle duvar boyunca ilerleyen
              tesisatların, vanaların ve ısıtma sistemlerinin önü açık bırakılmalıdır.
            </p>
            <p>Paletlerin tesisat borularına dayanması veya yükleme sırasında borulara temas edebilecek biçimde yerleştirilmesi önlenmelidir.</p>
            <p>
              Forklift, transpalet ve diğer taşıma ekipmanlarının kullandığı güzergâhlar da tesisatın bulunduğu bölümler dikkate alınarak planlanmalıdır.
            </p>

            <h2>3. Isıtma sistemini kış başlamadan deneyin</h2>
            <p>Isıtma cihazlarının ilk kez çok soğuk bir günde çalıştırılması, mevcut bir problemin geç fark edilmesine neden olabilir.</p>
            <p>Kış başlamadan önce sistem çalıştırılarak aşağıdaki durumlar kontrol edilebilir:</p>
            <ul>
              <li>Cihazın normal biçimde devreye girip girmediği</li>
              <li>Isıtmanın çalışma alanlarına yeterli biçimde ulaşıp ulaşmadığı</li>
              <li>Cihaz ekranında hata kodu bulunup bulunmadığı</li>
              <li>Tesisatta olağan dışı ses olup olmadığı</li>
              <li>Isıtma sisteminde basınç veya dolaşım sorunu yaşanıp yaşanmadığı</li>
            </ul>
            <p>Herhangi bir problem fark edildiğinde cihaza veya tesisata doğrudan müdahale etmek yerine uzman desteği alınmalıdır.</p>

            <h2>4. İş yerinde sonradan yapılan değişiklikleri değerlendirin</h2>
            <p>Depo veya iş yerinde yapılan bazı değişiklikler mevcut doğalgaz ve ısıtma sistemini etkileyebilir.</p>
            <p>Örneğin:</p>
            <ul>
              <li>Bölme duvar eklenmesi</li>
              <li>Isıtma cihazının yerinin değiştirilmesi</li>
              <li>Yeni çalışma alanı oluşturulması</li>
              <li>Havalandırma açıklıklarının kapatılması</li>
              <li>Tesisat yakınına raf veya makine yerleştirilmesi</li>
              <li>Kullanım alanının büyütülmesi</li>
            </ul>
            <p>gibi durumlarda mevcut sistemin yeni yerleşim düzenine uygunluğu değerlendirilmelidir.</p>
            <p>
              Kayseri’de iş yeri doğalgaz tesisatı, proje ve ısıtma sistemi konusunda destek almak için{" "}
              <a href={dogtekServicesUrl} target="_blank" rel="noopener">
                Doğtek Doğalgaz ve Mühendislik’in Kayseri doğalgaz hizmetlerini
              </a>{" "}
              inceleyebilirsiniz.
            </p>

            <h2>5. Çalışanların vana ve sayaç alanlarını bilmesini sağlayın</h2>
            <p>
              İş yerinde yalnızca işletme sahibinin değil, sorumlu çalışanların da doğalgaz sayacı ve ana vananın bulunduğu yeri bilmesi faydalıdır.
            </p>
            <p>
              Ancak çalışanlar tesisatı sökmeye, değiştirmeye veya arızayı kendi imkânlarıyla gidermeye çalışmamalıdır. Tesisat ve cihazlarla ilgili işlemler gerekli
              yetkinliğe sahip kişiler tarafından yapılmalıdır.
            </p>

            <h2>6. Gaz kokusu durumunda müdahale etmeyin</h2>
            <p>
              İş yerinde gaz kokusu fark edilmesi halinde elektrik düğmelerine dokunulmamalı, ateş veya kıvılcım oluşturabilecek cihazlar kullanılmamalı ve güvenli bir
              alandan 187 Doğal Gaz Acil Hattı aranmalıdır. Aksa Doğalgaz’ın acil durum rehberi de gaz kokusu halinde ortamdan çıktıktan sonra 187’nin aranmasını
              belirtmektedir.
            </p>

            <h2>Kış öncesi iş yeri kontrol listesi</h2>
            <p>Kış dönemi başlamadan önce şu maddeler gözden geçirilebilir:</p>
            <ul>
              {blogPost.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Planlı yapılan kontroller, iş yerinin kış dönemine daha düzenli hazırlanmasına yardımcı olur. Depolama alanının doğru planlanması ise hem ürünlerin hem de
              tesisat çevresinin daha kontrollü kullanılmasını sağlar.
            </p>
            <p>Florya Palet olarak işletmelerin palet alımı, satımı, tamiri ve toplu palet ihtiyaçları için Kayseri ve çevresinde hizmet sunuyoruz.</p>
          </div>
        </div>

        <aside className="h-fit rounded-md border border-forest-900/10 bg-white p-6 shadow-sm lg:sticky lg:top-28">
          <p className="section-kicker">Kontrol Listesi</p>
          <h2 className="text-2xl font-black leading-tight">Kış gelmeden önce hızlıca gözden geçirin.</h2>
          <div className="mt-6 grid gap-3">
            {blogPost.checklist.slice(0, 5).map((item) => (
              <div key={item} className="flex gap-3 rounded-md bg-paper p-3 text-sm font-bold leading-6 text-forest-900/72">
                <ClipboardCheck className="mt-0.5 shrink-0 text-clay" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a
            className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-timber-300 px-5 font-black text-forest-900 transition hover:bg-timber-100"
            href={`https://wa.me/${whatsappPhone}`}
            target="_blank"
            rel="noreferrer"
          >
            Palet İçin Teklif Al
            <ArrowRight size={18} />
          </a>
        </aside>
      </div>
    </article>
  );
}

function App({ initialPath, includeSeo = true }) {
  const currentPath = getCurrentPath(initialPath);
  const isBlogPage = currentPath === blogPost.path;
  const servicePage = servicePageMap.get(currentPath);
  const seo = getSeoForPath(currentPath);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    operation: "Palet satmak istiyorum",
    pallet: "",
    amount: "",
    location: "Kayseri / Merkez",
    note: "",
  });

  const whatsappHref = useMemo(() => {
    const message = [
      `Merhaba, ${businessName} için teklif almak istiyorum.`,
      "",
      `Ad Soyad: ${form.name || "-"}`,
      `Firma: ${form.company || "-"}`,
      `İşlem: ${form.operation}`,
      `Palet tipi: ${form.pallet || "-"}`,
      `Adet: ${form.amount || "-"}`,
      `Konum: ${form.location || "-"}`,
      `Not: ${form.note || "-"}`,
    ].join("\n");

    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
  }, [form]);

  const updateForm = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) {
      return;
    }

    const targetId = decodeURIComponent(window.location.hash.slice(1));
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView();
    });
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-paper text-forest-900">
      {includeSeo && <Seo {...seo} />}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-timber-300/20 bg-forest-900 text-white shadow-[0_12px_36px_rgba(16,34,25,0.2)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <a className="flex min-w-0 items-center gap-3 text-left" href="/">
            <span className="grid h-14 w-14 shrink-0 place-items-center overflow-visible rounded-md border border-timber-300/30 bg-[#0b1510] p-1 shadow-sm">
              <img className="h-full w-full object-contain" src={logoSrc} alt={`${businessName} logo`} />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-base font-extrabold">{businessName}</span>
              <span className="block truncate text-xs font-semibold text-white/65">Kayseri 2. el palet alım satımı</span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 text-sm font-extrabold text-white/86 xl:flex">
            {navItems.map(([label, id]) => (
              <button key={id} className="transition hover:text-timber-300" onClick={() => goTo(id)}>
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a className="inline-flex h-11 shrink-0 items-center gap-2 rounded-md border border-white/25 bg-white/6 px-4 text-sm font-extrabold text-white" href={`tel:+${whatsappPhone}`}>
              <Phone size={17} />
              <span className="whitespace-nowrap">{phoneDisplay}</span>
            </a>
            <button className="inline-flex h-11 items-center gap-2 rounded-md bg-timber-300 px-4 text-sm font-extrabold text-forest-900" onClick={() => goTo("teklif")}>
              Teklif Al
              <ArrowRight size={17} />
            </button>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-md border border-white/25 bg-white/6 xl:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Menüyü aç"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-forest-900 px-4 py-3 xl:hidden">
            <div className="grid gap-1">
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  className="rounded-md px-3 py-3 text-left text-sm font-bold text-white/80 hover:bg-white/10"
                  onClick={() => {
                    setMenuOpen(false);
                    goTo(id);
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="mt-3 grid gap-1 border-t border-white/10 pt-3">
              {servicePages.map((page) => (
                <a
                  key={page.path}
                  className="rounded-md px-3 py-3 text-left text-sm font-bold text-white/80 hover:bg-white/10"
                  href={page.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {page.navLabel}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="anasayfa">
        {isBlogPage ? (
          <BlogArticle />
        ) : servicePage ? (
          <ServicePage page={servicePage} />
        ) : (
          <>
        <section className="relative min-h-[92vh] overflow-hidden text-white">
          <img className="absolute inset-0 h-full w-full object-cover" src="/images/palet-saha.png" alt="İstiflenmiş ikinci el palet sahası" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,34,25,.94),rgba(16,34,25,.68),rgba(16,34,25,.18)),linear-gradient(0deg,rgba(16,34,25,.7),rgba(16,34,25,.12)_58%)]" />
          <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-10 pt-32 sm:px-6 lg:px-8">
            <div className="w-full">
              <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-extrabold text-timber-100 backdrop-blur">
                <MapPin size={16} />
                Kayseri/Merkez ve çevresi toplu palet hizmeti
              </div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-normal sm:text-7xl lg:text-8xl">
                2. el palet alım satımında hızlı fiyat, güvenilir stok, planlı sevkiyat.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                Kullanılmış ahşap paletlerinizi Kayseri/Merkez çıkışlı yerinde değerlendiriyor; Euro, standart, CP ve özel ölçü paletleri işletmenizin sevkiyat akışına göre tedarik ediyoruz.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-timber-300 px-6 font-black text-forest-900 transition hover:bg-timber-100" onClick={() => goTo("teklif")}>
                  WhatsApp Teklifi Al
                  <ArrowRight size={18} />
                </button>
                <a className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-white/35 bg-white/10 px-6 font-black backdrop-blur transition hover:bg-white/15" href={`tel:+${whatsappPhone}`}>
                  <Phone size={18} />
                  {phoneDisplay}
                </a>
              </div>

              <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map(([value, label]) => (
                  <div key={label} className="rounded-md border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <div className="text-2xl font-black text-timber-100">{value}</div>
                    <div className="mt-1 text-sm font-semibold text-white/68">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker">Net İş</p>
              <h2 className="section-title">Depoda yer kaplayan paleti nakde, eksik paleti sağlam stoğa çevirir.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [Factory, "Üretici ve depolar", "Sevkiyat sonrası dönen paletleri düzenli toplarız."],
                [Boxes, "Toplu stok", "Adetli alım-satım için ölçü ve kalite bazlı plan çıkarırız."],
                [ShieldCheck, "Kontrollü teslim", "Paletleri sınıflandırıp sahaya uygun şekilde teslim ederiz."],
              ].map(([Icon, title, text]) => (
                <article key={title} className="rounded-md border border-forest-900/10 bg-paper p-5">
                  <Icon className="mb-8 text-clay" size={28} />
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-forest-900/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="hakkimizda" className="py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
            <div>
              <p className="section-kicker">Hakkımızda</p>
              <h2 className="section-title">Kayseri'de ikinci el palet alım satımında güvenilir ve planlı çözüm.</h2>
              <p className="mt-5 leading-8 text-forest-900/68">
                {businessName}, Kayseri/Merkez ve çevresinde ahşap palet, plastik palet ve ahşap ambalaj ürünlerinin alım-satımını yapmak üzere hizmet verir.
              </p>
              <p className="mt-4 leading-8 text-forest-900/68">
                Amacımız, depolama ve sevkiyat süreçlerinde işletmelerin ihtiyacı olan paleti doğru zamanda, doğru kaliteyle ve net fiyatlandırmayla ulaştırmaktır.
              </p>

              <div className="mt-8 max-w-md">
                <div className="rounded-md border border-forest-900/10 bg-white p-5">
                  <p className="text-sm font-black uppercase tracking-normal text-clay">Çalışma Saatleri</p>
                  <p className="mt-2 text-2xl font-black">{workingHours}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="relative min-h-[380px] overflow-hidden rounded-md bg-forest-900">
                <img className="absolute inset-0 h-full w-full object-cover opacity-80" src="/images/palet-tamir.png" alt="Palet kontrol ve tamir alanı" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/35 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-black uppercase tracking-normal text-timber-300">Kalite Politikamız</p>
                  <h3 className="mt-2 text-3xl font-black">Seçme, sınıflama ve doğru tedarik.</h3>
                  <p className="mt-3 max-w-xl leading-7 text-white/72">
                    Paletleri ölçü, kondisyon, kırık oranı ve kullanım amacına göre değerlendirerek hem alımda hem satışta şeffaf ilerleriz.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <article className="rounded-md border border-forest-900/10 bg-white p-6">
                  <h3 className="text-2xl font-black">Misyonumuz</h3>
                  <p className="mt-3 leading-8 text-forest-900/68">
                    Kaynakları verimli kullanarak geri dönüştürülebilir paletleri ekonomiye kazandırmak, işletmelere hızlı ve rekabetçi tedarik sunmak.
                  </p>
                </article>
                <article className="rounded-md border border-forest-900/10 bg-white p-6">
                  <h3 className="text-2xl font-black">Vizyonumuz</h3>
                  <p className="mt-3 leading-8 text-forest-900/68">
                    Kayseri ve çevresinde ikinci el palet alım-satımında güven, hız ve düzenli stok denince akla gelen firmalardan biri olmak.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="hizmet-ozeti" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-kicker">Hizmetler</p>
              <h2 className="section-title">Palet döngüsünün her adımı için ayrı çözüm.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map(({ icon: Icon, title, text, bullets }) => (
                <article key={title} className="rounded-md border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="mb-7 grid h-12 w-12 place-items-center rounded-md bg-forest-50 text-forest-700">
                    <Icon size={25} />
                  </div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 min-h-20 leading-7 text-forest-900/66">{text}</p>
                  <div className="mt-6 grid gap-2">
                    {bullets.map((item) => (
                      <span key={item} className="inline-flex items-center gap-2 text-sm font-bold text-forest-700">
                        <Check size={16} />
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServicePagesSection />

        <section id="paletler" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="section-kicker">Ürünlerimiz</p>
                <h2 className="section-title">İhtiyaca göre seçilmiş palet ve ahşap ambalaj ürünleri.</h2>
                <p className="mt-5 leading-8 text-forest-900/65">
                  Ürün kartları stok ve kondisyon mantığını hızlı anlatır; fiyat ise adet, ölçü, kalite ve sevkiyat planına göre netleşir.
                </p>
              </div>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest-700 px-5 font-black text-white" onClick={() => goTo("teklif")}>
                Ürün İçin Teklif Al
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {productCategories.map((item) => (
                <article key={item.name} className="group overflow-hidden rounded-md border border-forest-900/10 bg-paper shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <ProductIllustration variant={item.visual} />
                  <div className="border-t-4 border-clay bg-forest-900 p-4 text-white">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-normal text-timber-300">{item.type}</p>
                        <h3 className="mt-1 text-2xl font-black">{item.name}</h3>
                      </div>
                      <span className="rounded-md bg-timber-300 px-3 py-1 text-sm font-black text-forest-900">{item.size}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="min-h-20 leading-7 text-forest-900/68">{item.lead}</p>
                    <div className="mt-5 grid gap-2">
                      {item.specs.map((spec) => (
                        <span key={spec} className="inline-flex items-center gap-2 text-sm font-bold text-forest-700">
                          <Check size={16} />
                          {spec}
                        </span>
                      ))}
                    </div>
                    <button className="mt-6 inline-flex w-full min-h-[46px] items-center justify-center gap-2 rounded-md border border-forest-900/15 bg-white px-4 font-black text-forest-900 transition group-hover:border-forest-700" onClick={() => goTo("teklif")}>
                      Stok ve Fiyat Sor
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {productDetails.map((detail) => (
                <article key={detail.title} className="rounded-md border border-forest-900/10 bg-forest-50 p-6 sm:p-8">
                  <h3 className="text-2xl font-black sm:text-3xl">{detail.title}</h3>
                  <p className="mt-3 leading-8 text-forest-900/68">{detail.subtitle}</p>
                  <dl className="mt-7 grid gap-3 sm:grid-cols-2">
                    {detail.specs.map(([label, value]) => (
                      <div key={label} className="rounded-md bg-white p-4">
                        <dt className="text-xs font-black uppercase tracking-normal text-clay">{label}</dt>
                        <dd className="mt-1 font-extrabold">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-7">
                    <h4 className="font-black">Avantajları</h4>
                    <div className="mt-3 grid gap-2">
                      {detail.benefits.map((benefit) => (
                        <span key={benefit} className="inline-flex gap-2 leading-7 text-forest-900/70">
                          <BadgeCheck className="mt-1 shrink-0 text-clay" size={18} />
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="surec" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="section-kicker">Alım Süreci</p>
                <h2 className="section-title">Fotoğrafla başlar, planlı yüklemeyle biter.</h2>
                <div className="mt-8 overflow-hidden rounded-md">
                  <img className="h-[360px] w-full object-cover" src="/images/palet-sevkiyat.png" alt="Palet sevkiyatı için yükleme alanı" />
                </div>
              </div>
              <ol className="grid gap-4">
                {process.map(([title, text], index) => (
                  <li key={title} className="grid grid-cols-[56px_1fr] gap-4 rounded-md border border-forest-900/10 bg-paper p-5">
                    <span className="grid h-12 w-12 place-items-center rounded-md bg-forest-700 font-black text-white">{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      <strong className="block text-lg font-black">{title}</strong>
                      <span className="mt-1 block leading-7 text-forest-900/65">{text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {trustItems.map(([Icon, title, text]) => (
                <article key={title} className="rounded-md border border-forest-900/10 bg-white p-5">
                  <Icon className="mb-6 text-clay" size={28} />
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-forest-900/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fiyat" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="section-kicker">Fiyat Kriterleri</p>
                <h2 className="section-title">Palet fiyatı tek rakamdan değil, sahadaki gerçek durumdan çıkar.</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {priceFactors.map((factor) => (
                  <div key={factor} className="flex items-center gap-3 rounded-md border border-forest-900/10 bg-paper p-4">
                    <BadgeCheck className="shrink-0 text-clay" size={22} />
                    <span className="font-bold">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-3xl">
                <p className="section-kicker">Saha ve Operasyon</p>
                <h2 className="section-title">Stok, tamir ve sevkiyat tek akışta.</h2>
              </div>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest-700 px-5 font-black text-white" onClick={() => goTo("teklif")}>
                Stok Sor
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {gallery.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-md border border-forest-900/10 bg-white">
                  <img className="h-64 w-full object-cover" src={item.image} alt={item.title} />
                  <div className="p-5">
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 leading-7 text-forest-900/65">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="bolgeler" className="bg-white py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <p className="section-kicker">Bölgeler</p>
              <h2 className="section-title">Kayseri/Merkez odaklı hızlı servis.</h2>
              <p className="mt-5 leading-8 text-forest-900/65">
                Toplu alım ve satışlarda araç yönlendirmesi konuma göre planlanır. Kayseri merkez ve yakın sanayi bölgelerinde hızlı dönüş yapılabilir.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {regions.map((region) => (
                <div key={region} className="rounded-md border border-forest-900/10 bg-paper p-4 font-black">
                  {region}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="teklif" className="bg-forest-900 py-16 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="section-kicker text-timber-300">Hızlı Teklif</p>
              <h2 className="section-title text-white">Palet bilgisini yaz, WhatsApp mesajı hazır olsun.</h2>
              <div className="mt-8 grid gap-4">
                {[
                  [Phone, phoneDisplay],
                  [Clock3, workingHours],
                  [Truck, "Toplu işlemde araç planı"],
                ].map(([Icon, text]) => (
                  <div key={text} className="flex items-center gap-3 rounded-md border border-white/12 bg-white/7 p-4">
                    <Icon className="text-timber-300" size={22} />
                    <span className="font-bold text-white/84">{text}</span>
                  </div>
                ))}
                <a
                  className="flex items-center gap-3 rounded-md border border-white/12 bg-white/7 p-4 transition hover:bg-white/12"
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin className="text-timber-300" size={22} />
                  <span className="font-bold text-white/84">{address} - Adrese Ulaşım</span>
                </a>
              </div>
            </div>

            <form
              className="grid gap-4 rounded-md border border-white/12 bg-white p-5 text-forest-900 shadow-soft sm:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                window.open(whatsappHref, "_blank", "noopener,noreferrer");
              }}
            >
              <label className="form-field">
                Ad Soyad
                <input name="name" value={form.name} onChange={updateForm} placeholder="Adınız" required />
              </label>
              <label className="form-field">
                Firma
                <input name="company" value={form.company} onChange={updateForm} placeholder="Firma adı" />
              </label>
              <label className="form-field">
                İşlem
                <select name="operation" value={form.operation} onChange={updateForm}>
                  <option>Palet satmak istiyorum</option>
                  <option>Palet almak istiyorum</option>
                  <option>Düzenli tedarik istiyorum</option>
                  <option>Tamirlik palet değerlendirmek istiyorum</option>
                </select>
              </label>
              <label className="form-field">
                Palet tipi
                <input name="pallet" value={form.pallet} onChange={updateForm} placeholder="Euro, standart, CP..." required />
              </label>
              <label className="form-field">
                Adet
                <input name="amount" value={form.amount} onChange={updateForm} placeholder="Örn. 250 adet" required />
              </label>
              <label className="form-field">
                Konum
                <input name="location" value={form.location} onChange={updateForm} placeholder="Örn. Kayseri / Merkez" required />
              </label>
              <label className="form-field sm:col-span-2">
                Not
                <textarea name="note" value={form.note} onChange={updateForm} rows="4" placeholder="Palet durumu, yükleme zamanı, ölçü veya özel talep" />
              </label>
              <button className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-timber-300 px-6 font-black text-forest-900 transition hover:bg-timber-100 sm:col-span-2" type="submit">
                WhatsApp Mesajı Hazırla
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>

        <BlogPreviewSection />

        <section id="sss" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="section-kicker">SSS</p>
              <h2 className="section-title">Müşterinin aramadan önce merak ettiği şeyler.</h2>
            </div>
            <div className="mt-10 grid gap-4">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group rounded-md border border-forest-900/10 bg-paper p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">
                    {question}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-white text-forest-700 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 leading-7 text-forest-900/65">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
          </>
        )}
      </main>

      <footer id="iletisim" className="bg-[#0b1510] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-4">
              <span className="grid h-24 w-24 shrink-0 place-items-center rounded-md border border-timber-300/20 bg-[#101610] p-2">
                <img className="h-full w-full object-contain" src={logoSrc} alt={`${businessName} logo`} />
              </span>
              <div>
                <strong className="block text-lg">{businessName}</strong>
                <span className="text-sm text-white/55">Kayseri ikinci el palet çözümleri</span>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-white/60">
              Kayseri/Merkez ve çevresinde ikinci el palet alımı, satışı, tamiri ve toplu tedarik planlaması.
            </p>
          </div>
          <div>
            <h3 className="font-black">İletişim</h3>
            <div className="mt-4 grid gap-3 text-white/70">
              <a className="font-bold text-white" href={`tel:+${whatsappPhone}`}>{phoneDisplay}</a>
              <a href={`https://wa.me/${whatsappPhone}`} target="_blank" rel="noreferrer">WhatsApp ile yaz</a>
              <a href={`mailto:${email}`}>{email}</a>
              <a href={mapsUrl} target="_blank" rel="noreferrer">{address} - Adrese Ulaşım</a>
              <span>{workingHours}</span>
            </div>
          </div>
          <div>
            <h3 className="font-black">Hızlı Menü</h3>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm font-bold text-white/68">
              {navItems.map(([label, id]) => (
                <button key={id} className="text-left hover:text-white" onClick={() => goTo(id)}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black">Hizmet Sayfaları</h3>
            <div className="mt-4 grid gap-2 text-sm font-bold text-white/68">
              {servicePages.map((page) => (
                <a key={page.path} className="hover:text-white" href={page.path}>
                  {page.navLabel}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-white/70 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <p>© 2026 {businessName}. Tüm hakları saklıdır.</p>
            <a
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white/8 px-3 py-2 font-semibold text-white/80 transition hover:bg-white/12"
              href="https://barbarossoft.com.tr"
              target="_blank"
              rel="noreferrer"
              aria-label="BarbarosSoft web sitesini aç"
            >
              <span className="font-mono text-xs text-timber-300">&lt;/&gt;</span>
              <span>Software:</span>
              <span className="rounded border border-white/80 bg-[#101f3d] px-1.5 py-0.5 font-black text-[#ff7a22]">
                BarbarosSoft
              </span>
            </a>
          </div>
        </div>
      </footer>

      <a
        className="fixed bottom-4 left-4 right-4 z-40 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-[#1f9d57] px-5 font-black text-white shadow-soft sm:left-auto sm:right-5 sm:w-auto"
        href={`https://wa.me/${whatsappPhone}`}
        target="_blank"
        rel="noreferrer"
      >
        <Phone size={18} />
        WhatsApp
      </a>
    </div>
  );
}

export { blogPost, getSeoForPath, routesToPrerender };
export default App;

