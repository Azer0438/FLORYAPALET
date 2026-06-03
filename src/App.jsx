import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Calculator,
  Check,
  ClipboardCheck,
  Clock3,
  Factory,
  Forklift,
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
import { useMemo, useState } from "react";

const businessName = "Florya Palet";
const phoneDisplay = "0531 894 79 38";
const whatsappPhone = "905318947938";
const address = "Kayseri / Merkez";
const email = "info@floryapalet.com";
const logoSrc = "/images/florya-palet-logo.png";
const ownerName = "Abdussamed Eyice";
const workingHours = "Pazartesi - Pazar 08:00 - 20:00";
const mapsUrl = "https://maps.app.goo.gl/2mahGcGMCYG5zLu56";

const navItems = [
  ["Hakkımızda", "hakkimizda"],
  ["Hizmetler", "hizmetler"],
  ["Ürünlerimiz", "paletler"],
  ["Alım Süreci", "surec"],
  ["Fiyat", "fiyat"],
  ["Bölgeler", "bolgeler"],
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

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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

function App() {
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

  return (
    <div className="min-h-screen bg-paper text-forest-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-timber-300/20 bg-forest-900 text-white shadow-[0_12px_36px_rgba(16,34,25,0.2)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <button className="flex min-w-0 items-center gap-3 text-left" onClick={() => goTo("anasayfa")}>
            <span className="grid h-14 w-14 shrink-0 place-items-center overflow-visible rounded-md border border-timber-300/30 bg-[#0b1510] p-1 shadow-sm">
              <img className="h-full w-full object-contain" src={logoSrc} alt={`${businessName} logo`} />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-base font-extrabold">{businessName}</span>
              <span className="block truncate text-xs font-semibold text-white/65">Kayseri 2. el palet alım satımı</span>
            </span>
          </button>

          <nav className="hidden items-center gap-5 text-sm font-extrabold text-white/86 xl:flex">
            {navItems.map(([label, id]) => (
              <button key={id} className="transition hover:text-timber-300" onClick={() => goTo(id)}>
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a className="inline-flex h-11 items-center gap-2 rounded-md border border-white/25 bg-white/6 px-4 text-sm font-extrabold text-white" href={`tel:+${whatsappPhone}`}>
              <Phone size={17} />
              {phoneDisplay}
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
          </div>
        )}
      </header>

      <main id="anasayfa">
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
                {businessName}, firma sahibi {ownerName} yönetiminde Kayseri/Merkez ve çevresinde ahşap palet, plastik palet ve ahşap ambalaj ürünlerinin alım-satımını yapmak üzere hizmet verir.
              </p>
              <p className="mt-4 leading-8 text-forest-900/68">
                Amacımız, depolama ve sevkiyat süreçlerinde işletmelerin ihtiyacı olan paleti doğru zamanda, doğru kaliteyle ve net fiyatlandırmayla ulaştırmaktır.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-md border border-forest-900/10 bg-white p-5">
                  <p className="text-sm font-black uppercase tracking-normal text-clay">Firma Sahibi</p>
                  <p className="mt-2 text-2xl font-black">{ownerName}</p>
                </div>
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

        <section id="hizmetler" className="py-16 sm:py-24">
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
      </main>

      <footer id="iletisim" className="bg-[#0b1510] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
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

export default App;
