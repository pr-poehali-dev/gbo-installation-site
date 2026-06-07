import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/4cb370e0-278a-471c-900d-122f5e88d26d/files/309e893e-e67e-4c7b-b5e7-b694f0334e1a.jpg";
const WORK_IMG = "https://cdn.poehali.dev/projects/4cb370e0-278a-471c-900d-122f5e88d26d/files/57da40df-d31e-4ada-a454-5b731b8e010d.jpg";
const EXTERIOR_IMG = "https://cdn.poehali.dev/projects/4cb370e0-278a-471c-900d-122f5e88d26d/files/759039c0-e030-49ba-9d1f-d08c25e8b535.jpg";

const MASTERS = ["Ильнар (мастер-установщик BRC)"];
const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

const SERVICES = [
  { icon: "Flame", title: "Установка ГБО", desc: "Оборудование Италия и Польша. Устанавливаем ГБО на автомобили любых марок и классов.", price: "46 000 ₽" },
  { icon: "Zap", title: "ГБО на прямой и комбинированный впрыск", desc: "Переводим автомобили с прямым и комбинированным впрыском на газ (TSI, TFSI, GDI). Замещение бензин/газ от 25/75 до 5/95.", price: "95 000 ₽" },
  { icon: "FileText", title: "Регистрация ГБО в ГИБДД", desc: "Быстро и без очередей поможем оформить газобаллонное оборудование!", price: "8 000 ₽" },
  { icon: "Wrench", title: "Демонтаж/монтаж для ГИБДД", desc: "Демонтируем видимые части ГБО при постановке автотранспорта на учёт в ГИБДД.", price: "3 500 ₽" },
  { icon: "Shield", title: "Поверка ГБО и баллонов", desc: "Проводим поверку газобаллонного оборудования и баллонов. Предоставляем справки 2Б для прохождения техосмотра.", price: "500 ₽" },
  { icon: "Package", title: "Заказ запчастей для ГБО", desc: "Заказываем и доставляем запчасти и расходники для газобаллонного оборудования.", price: "от 300 ₽" },
];

const PRICES = [
  { name: "Установка ГБО (оборудование Италия/Польша)", price: "46 000 ₽" },
  { name: "ГБО на прямой и комбинированный впрыск (TSI, TFSI, GDI)", price: "95 000 ₽" },
  { name: "Регистрация ГБО в ГИБДД", price: "8 000 ₽" },
  { name: "Демонтаж/монтаж при постановке на учёт", price: "3 500 ₽" },
  { name: "Поверка ГБО и баллонов + справка 2Б для ТО", price: "500 ₽" },
  { name: "Заказ запчастей для ГБО", price: "от 300 ₽" },
];

const REVIEWS = [
  { name: "Динар Абубакиров", rating: 5, text: "Все на высшем уровне", date: "7 апреля" },
  { name: "А.", rating: 5, text: "Быстро, качественно 👍 установили! Отлично всё работает. Советую всем кто хочет установить ГБО", date: "19 декабря" },
  { name: "Марат Юсупов", rating: 5, text: "Вы ещё думаете или сомневаетесь установить ГБО? Вы любите свою машину? Здесь Вам всё расскажут, покажут, объяснят — в лучшем виде, без сомнения. И будет вам счастье!", date: "27 января" },
  { name: "430079 Гарифуллин", rating: 5, text: "Переставил BRC с Kia Optima 2.0л на Camry 55 2.5л. Вчера проехал на газе 540 км. Ильнар — единственный установщик в городе, который много лет проработал у официального дилера BRC и сам обучал установщиков по всей России и СНГ.", date: "3 декабря" },
];

const PORTFOLIO = [
  { car: "Toyota Camry V70", type: "ГБО 4 поколения", img: WORK_IMG },
  { car: "Kia Sorento", type: "ГБО 4 поколения", img: HERO_IMG },
  { car: "Hyundai Tucson", type: "ГБО 5 поколения", img: EXTERIOR_IMG },
  { car: "Skoda Octavia", type: "ГБО 4 поколения", img: WORK_IMG },
  { car: "Renault Logan", type: "ГБО 2 поколения", img: HERO_IMG },
  { car: "Ford Focus", type: "ГБО 4 поколения", img: EXTERIOR_IMG },
];

const NAV_ITEMS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Цены", href: "#prices" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "О нас", href: "#about" },
  { label: "Гарантии", href: "#guarantees" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", service: "", master: "", date: "", time: "", comment: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[hsl(220,20%,97%)]" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(215,65%,15%)] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <a onClick={() => scrollTo("#home")} className="cursor-pointer flex items-center gap-2">
            <div className="w-8 h-8 bg-[hsl(30,90%,50%)] rounded flex items-center justify-center">
              <Icon name="Flame" size={18} className="text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>
              GAZTIMENSK
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-[hsl(215,20%,75%)] hover:text-[hsl(30,90%,55%)] text-sm transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+79870258898" className="hidden md:flex items-center gap-1 text-white text-sm font-medium">
              <Icon name="Phone" size={14} className="text-[hsl(30,90%,55%)]" />
              +7 (987) 025-88-98
            </a>
            <button
              onClick={() => setBookingOpen(true)}
              className="hidden md:block bg-[hsl(30,90%,50%)] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[hsl(30,90%,42%)] transition-colors"
            >
              Записаться
            </button>
            <button
              className="lg:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-[hsl(215,65%,12%)] border-t border-[hsl(215,40%,25%)]">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left px-6 py-3 text-[hsl(215,20%,80%)] hover:text-[hsl(30,90%,55%)] hover:bg-[hsl(215,50%,18%)] text-sm border-b border-[hsl(215,40%,20%)]"
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 py-4">
              <button
                onClick={() => { setBookingOpen(true); setMenuOpen(false); }}
                className="w-full bg-[hsl(30,90%,50%)] text-white font-semibold py-3 rounded text-sm"
              >
                Записаться онлайн
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,24,54,0.95) 0%, rgba(10,24,54,0.7) 60%, rgba(10,24,54,0.1) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[hsl(30,90%,50%)] text-white text-xs font-bold px-3 py-1.5 rounded mb-6 tracking-wider uppercase">
              <Icon name="MapPin" size={12} />
              Нефтекамск · Рейтинг 5.0 на Яндекс Картах
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-6 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Установка<br />
              <span className="text-[hsl(30,90%,55%)]">ГБО</span><br />
              в Нефтекамске
            </h1>
            <p className="text-[hsl(215,20%,78%)] text-lg mb-4 leading-relaxed">
              Компания «GazTimeNSK» — профессиональный монтаж газобаллонных установок 
              высокого качества на автомобили любых марок и классов. Оборудование Италия и Польша.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-[hsl(215,20%,78%)] text-sm">
                <Icon name="Shield" size={16} className="text-[hsl(30,90%,55%)]" />
                Гарантия 3 года
              </div>
              <div className="flex items-center gap-2 text-[hsl(215,20%,78%)] text-sm">
                <Icon name="Clock" size={16} className="text-[hsl(30,90%,55%)]" />
                Установка за 1 день
              </div>
              <div className="flex items-center gap-2 text-[hsl(215,20%,78%)] text-sm">
                <Icon name="FileCheck" size={16} className="text-[hsl(30,90%,55%)]" />
                Документы для ГИБДД
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="bg-[hsl(30,90%,50%)] text-white font-bold px-8 py-4 rounded text-base hover:bg-[hsl(30,90%,42%)] transition-all duration-200 hover:scale-105 shadow-xl"
              >
                Записаться на установку
              </button>
              <a
                href="tel:+79870258898"
                className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded text-base hover:bg-white hover:text-[hsl(215,65%,15%)] transition-all duration-200"
              >
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ background: "rgba(12,28,60,0.9)" }}>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-[hsl(215,40%,28%)]">
            {[
              { value: "2 500+", label: "Установок" },
              { value: "16 лет", label: "На рынке" },
              { value: "3 года", label: "Гарантия" },
              { value: "1 день", label: "Срок работ" },
            ].map((s) => (
              <div key={s.label} className="py-5 px-6 text-center">
                <div className="text-2xl font-black text-[hsl(30,90%,60%)]" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.value}</div>
                <div className="text-[hsl(215,20%,65%)] text-xs mt-0.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="section-title accent-line">Наши услуги</h2>
            <p className="text-[hsl(215,20%,45%)] mt-4 max-w-xl">Полный спектр работ по установке и обслуживанию газобаллонного оборудования</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="group border border-[hsl(215,20%,88%)] rounded-lg p-6 hover:border-[hsl(30,90%,50%)] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[hsl(215,65%,22%)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[hsl(30,90%,50%)] transition-colors duration-300">
                  <Icon name={s.icon} size={22} className="text-white" fallback="Settings" />
                </div>
                <h3 className="text-lg font-bold text-[hsl(215,65%,18%)] mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.title}</h3>
                <p className="text-[hsl(215,20%,50%)] text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="text-[hsl(30,90%,40%)] font-bold text-base">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-20 bg-[hsl(215,30%,96%)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="section-title accent-line">Цены на установку</h2>
            <p className="text-[hsl(215,20%,45%)] mt-4">Точная стоимость определяется после диагностики автомобиля</p>
          </div>
          <div className="bg-white rounded-xl border border-[hsl(215,20%,88%)] overflow-hidden shadow-sm">
            {PRICES.map((p, i) => (
              <div key={p.name} className={`flex items-center justify-between px-6 py-4 ${i !== PRICES.length - 1 ? "border-b border-[hsl(215,20%,92%)]" : ""} hover:bg-[hsl(215,30%,98%)] transition-colors`}>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[hsl(30,90%,50%)] shrink-0" />
                  <span className="text-[hsl(215,30%,20%)] font-medium">{p.name}</span>
                </div>
                <span className="text-[hsl(215,65%,22%)] font-bold text-base ml-4 shrink-0">{p.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-lg" style={{ background: "rgba(255,140,0,0.08)", border: "1px solid rgba(255,140,0,0.3)" }}>
            <p className="text-[hsl(215,30%,25%)] text-sm">
              <Icon name="Info" size={14} className="inline mr-1 text-[hsl(30,90%,45%)]" />
              В стоимость входит: оборудование, установка, настройка и пуско-наладка. Оформление документов оплачивается отдельно.
            </p>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => setBookingOpen(true)}
              className="bg-[hsl(215,65%,22%)] text-white font-bold px-10 py-4 rounded hover:bg-[hsl(215,65%,18%)] transition-colors duration-200 inline-flex items-center gap-2"
            >
              <Icon name="CalendarCheck" size={18} />
              Записаться на расчёт стоимости
            </button>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="section-title accent-line">Наши работы</h2>
            <p className="text-[hsl(215,20%,45%)] mt-4">Примеры выполненных установок ГБО</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO.map((p, i) => (
              <div key={i} className="group rounded-xl overflow-hidden border border-[hsl(215,20%,88%)] hover:shadow-xl transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.car}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[hsl(30,90%,50%)] text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                    {p.type}
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center gap-2">
                    <Icon name="Car" size={16} className="text-[hsl(215,65%,22%)]" />
                    <span className="font-semibold text-[hsl(215,30%,15%)]">{p.car}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-[hsl(215,65%,15%)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[hsl(30,90%,50%)] text-white text-xs font-bold px-3 py-1 rounded mb-4 tracking-widest uppercase">О компании</div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Надёжная установка<br />ГБО в Нефтекамске
              </h2>
              <p className="text-[hsl(215,20%,72%)] leading-relaxed mb-6">
                Компания «GazTimeNSK» оказывает услуги в области монтажа газобаллонных установок высокого 
                качества на автомобили любых марок и классов. Мы гарантируем, что каждый обратившийся к нам 
                владелец получит надёжную и долговечную газовую установку.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "Award", text: "Официальный дилер BRC — оборудование Италия и Польша" },
                  { icon: "Users", text: "Мастер Ильнар обучал установщиков по всей России и СНГ" },
                  { icon: "CheckCircle", text: "Рейтинг 5.0 — 44 отзыва на Яндекс Картах" },
                  { icon: "Star", text: "Работаем с TSI, TFSI, GDI и любым типом впрыска" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} size={18} className="text-[hsl(30,90%,55%)] mt-0.5 shrink-0" fallback="Check" />
                    <span className="text-[hsl(215,20%,78%)] text-sm leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setBookingOpen(true)}
                className="bg-[hsl(30,90%,50%)] text-white font-bold px-8 py-4 rounded hover:bg-[hsl(30,90%,42%)] transition-colors duration-200"
              >
                Записаться на установку
              </button>
            </div>
            <div className="relative">
              <img src={EXTERIOR_IMG} alt="Наш автотехцентр" className="rounded-xl w-full h-80 lg:h-[450px] object-cover shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl">
                <div className="text-3xl font-black text-[hsl(215,65%,22%)]" style={{ fontFamily: "'Oswald', sans-serif" }}>2 500+</div>
                <div className="text-[hsl(215,20%,45%)] text-sm mt-1">установок выполнено</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section id="guarantees" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="section-title accent-line">Гарантии</h2>
            <p className="text-[hsl(215,20%,45%)] mt-4">Мы несём полную ответственность за качество своей работы</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Shield", title: "3 года гарантии", desc: "На все виды работ по установке ГБО. Гарантийное обслуживание — бесплатно." },
              { icon: "Package", title: "Оригинальное оборудование", desc: "Используем только сертифицированные системы BRC, Lovato, OMVL, Tomasetto." },
              { icon: "FileCheck", title: "Официальные документы", desc: "Полный пакет документов для ГИБДД и страховой компании." },
              { icon: "Headphones", title: "Поддержка 24/7", desc: "Консультации по вопросам эксплуатации ГБО в любое время." },
            ].map((g) => (
              <div key={g.title} className="text-center p-6 border border-[hsl(215,20%,88%)] rounded-xl hover:border-[hsl(30,90%,50%)] hover:shadow-md transition-all duration-200">
                <div className="w-16 h-16 bg-[hsl(215,65%,22%)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={g.icon} size={28} className="text-white" fallback="Shield" />
                </div>
                <h3 className="text-lg font-bold text-[hsl(215,65%,18%)] mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{g.title}</h3>
                <p className="text-[hsl(215,20%,50%)] text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-[hsl(215,30%,96%)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="section-title accent-line">Отзывы клиентов</h2>
            <p className="text-[hsl(215,20%,45%)] mt-4">Нам доверяют тысячи водителей Тимска и области</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white rounded-xl p-6 border border-[hsl(215,20%,88%)] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[hsl(215,65%,22%)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-[hsl(215,30%,15%)]">{r.name}</div>
                      <div className="text-[hsl(215,20%,60%)] text-xs">{r.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(r.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-[hsl(40,95%,52%)]" />
                    ))}
                  </div>
                </div>
                <p className="text-[hsl(215,20%,40%)] text-sm leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="section-title accent-line">Контакты</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: "MapPin", label: "Адрес", value: "Респ. Башкортостан, Нефтекамск, Индустриальная ул., 9Д/1" },
                { icon: "Phone", label: "Телефон", value: "+7 (987) 025-88-98" },
                { icon: "MessageCircle", label: "Мессенджеры", value: "WhatsApp · Telegram" },
                { icon: "Clock", label: "Режим работы", value: "Уточняйте по телефону" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-4 rounded-xl border border-[hsl(215,20%,88%)] hover:border-[hsl(30,90%,50%)] transition-colors">
                  <div className="w-10 h-10 bg-[hsl(215,65%,22%)] rounded-lg flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={18} className="text-white" fallback="Info" />
                  </div>
                  <div>
                    <div className="text-[hsl(215,20%,55%)] text-xs uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="text-[hsl(215,30%,15%)] font-semibold">{c.value}</div>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/79870258898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl hover:bg-[#1ebe5d] transition-colors text-sm"
                >
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/gaztimensk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#229ED9] text-white font-semibold py-3 rounded-xl hover:bg-[#1a8ec5] transition-colors text-sm"
                >
                  <Icon name="Send" size={18} />
                  Telegram
                </a>
              </div>
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full bg-[hsl(30,90%,50%)] text-white font-bold py-4 rounded-xl hover:bg-[hsl(30,90%,42%)] transition-colors text-base flex items-center justify-center gap-2"
              >
                <Icon name="CalendarCheck" size={20} />
                Записаться на установку
              </button>
            </div>
            <div className="rounded-xl overflow-hidden border border-[hsl(215,20%,88%)] h-80 lg:h-auto min-h-64 bg-[hsl(215,20%,92%)] flex items-center justify-center">
              <div className="text-center p-8">
                <Icon name="Map" size={48} className="text-[hsl(215,40%,60%)] mx-auto mb-3" />
                <p className="text-[hsl(215,30%,35%)] font-medium">Нефтекамск, Индустриальная ул., 9Д/1</p>
                <p className="text-[hsl(215,20%,55%)] text-sm mt-1">Карта будет добавлена после настройки</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(215,65%,10%)] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[hsl(30,90%,50%)] rounded flex items-center justify-center">
                <Icon name="Flame" size={18} className="text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>GAZTIMENSK</span>
            </div>
            <p className="text-[hsl(215,20%,50%)] text-sm text-center">© GazTimeNSK. Установка ГБО в Нефтекамске.</p>
            <div className="flex items-center gap-4">
              <a href="tel:+79870258898" className="text-[hsl(215,20%,60%)] hover:text-[hsl(30,90%,55%)] transition-colors text-sm">+7 (987) 025-88-98</a>
              <a href="https://wa.me/79870258898" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Icon name="MessageCircle" size={16} className="text-white" />
              </a>
              <a href="https://t.me/gaztimensk" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#229ED9] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Icon name="Send" size={16} className="text-white" />
              </a>
              <a href="https://www.youtube.com/@ilnarkhaidarov4076" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#FF0000] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Icon name="Youtube" size={16} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setBookingOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[hsl(215,65%,18%)] rounded-t-2xl px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="text-white font-black text-xl uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Онлайн-запись</h2>
                <p className="text-[hsl(215,20%,70%)] text-sm">Заполните форму — мы перезвоним для подтверждения</p>
              </div>
              <button onClick={() => setBookingOpen(false)} className="text-[hsl(215,20%,60%)] hover:text-white transition-colors">
                <Icon name="X" size={22} />
              </button>
            </div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[hsl(215,30%,35%)] uppercase tracking-wider mb-1.5">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-[hsl(215,20%,85%)] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[hsl(215,65%,22%)] focus:ring-1 focus:ring-[hsl(215,65%,22%)]"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[hsl(215,30%,35%)] uppercase tracking-wider mb-1.5">Телефон *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-[hsl(215,20%,85%)] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[hsl(215,65%,22%)] focus:ring-1 focus:ring-[hsl(215,65%,22%)]"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[hsl(215,30%,35%)] uppercase tracking-wider mb-1.5">Услуга *</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-[hsl(215,20%,85%)] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[hsl(215,65%,22%)] focus:ring-1 focus:ring-[hsl(215,65%,22%)] bg-white"
                  >
                    <option value="">Выберите услугу</option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[hsl(215,30%,35%)] uppercase tracking-wider mb-1.5">Мастер</label>
                  <select
                    value={form.master}
                    onChange={(e) => setForm({ ...form, master: e.target.value })}
                    className="w-full border border-[hsl(215,20%,85%)] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[hsl(215,65%,22%)] focus:ring-1 focus:ring-[hsl(215,65%,22%)] bg-white"
                  >
                    <option value="">Любой свободный мастер</option>
                    {MASTERS.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[hsl(215,30%,35%)] uppercase tracking-wider mb-1.5">Дата *</label>
                    <input
                      type="date"
                      required
                      value={form.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full border border-[hsl(215,20%,85%)] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[hsl(215,65%,22%)] focus:ring-1 focus:ring-[hsl(215,65%,22%)]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[hsl(215,30%,35%)] uppercase tracking-wider mb-1.5">Время *</label>
                    <select
                      required
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full border border-[hsl(215,20%,85%)] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[hsl(215,65%,22%)] focus:ring-1 focus:ring-[hsl(215,65%,22%)] bg-white"
                    >
                      <option value="">Выберите время</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[hsl(215,30%,35%)] uppercase tracking-wider mb-1.5">Комментарий</label>
                  <textarea
                    rows={2}
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full border border-[hsl(215,20%,85%)] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[hsl(215,65%,22%)] focus:ring-1 focus:ring-[hsl(215,65%,22%)] resize-none"
                    placeholder="Марка и модель автомобиля, пробег, вопросы..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[hsl(30,90%,50%)] text-white font-bold py-3.5 rounded-xl hover:bg-[hsl(30,90%,42%)] transition-colors text-base flex items-center justify-center gap-2"
                >
                  <Icon name="CalendarCheck" size={18} />
                  Отправить заявку
                </button>
                <p className="text-[hsl(215,20%,55%)] text-xs text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            ) : (
              <div className="p-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-black text-[hsl(215,65%,18%)] mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>Заявка принята!</h3>
                <p className="text-[hsl(215,20%,45%)] text-sm mb-6">Мы перезвоним вам в течение 30 минут для подтверждения записи.</p>
                <button
                  onClick={() => {
                    setBookingOpen(false);
                    setSubmitted(false);
                    setForm({ name: "", phone: "", service: "", master: "", date: "", time: "", comment: "" });
                  }}
                  className="bg-[hsl(215,65%,22%)] text-white font-bold px-8 py-3 rounded-xl hover:bg-[hsl(215,65%,18%)] transition-colors"
                >
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}