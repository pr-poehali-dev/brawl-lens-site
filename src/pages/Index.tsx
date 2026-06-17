import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO = 'https://cdn.poehali.dev/projects/0a8a2dde-1c61-44d8-8f0b-872ec8419110/files/99fc794b-5915-4f16-8e97-9c8e454c41d9.jpg';
const CREST = 'https://cdn.poehali.dev/projects/0a8a2dde-1c61-44d8-8f0b-872ec8419110/files/d7b05c17-58a2-448b-a97d-982bf5329b82.jpg';

const NAV = [
  { id: 'news', label: 'Новости', icon: 'Newspaper' },
  { id: 'rules', label: 'Правила', icon: 'ScrollText' },
  { id: 'teams', label: 'Команды', icon: 'Users' },
  { id: 'schedule', label: 'Расписание', icon: 'CalendarDays' },
  { id: 'stream', label: 'Трансляции', icon: 'Tv' },
];

const news = [
  { tag: 'АНОНС', title: 'Старт Lens Cup Season 1', text: 'Регистрация открыта! 32 команды сразятся за главный приз сезона.', date: '15 июня' },
  { tag: 'ОБНОВЛЕНИЕ', title: 'Новая карта в пуле', text: 'Добавили «Кактусовую долину» в режим Награда за поимку.', date: '12 июня' },
  { tag: 'ИНТЕРВЬЮ', title: 'Капитан Null Squad о тактике', text: 'Разбираем секреты победителей прошлого мини-турнира.', date: '9 июня' },
];

const rules = [
  { icon: 'Swords', title: 'Формат', text: 'Bo3 в групповой стадии, Bo5 в финале. Двойная сетка на выбывание.' },
  { icon: 'Users', title: 'Составы', text: '3 основных игрока + 1 запасной. Замена допускается между картами.' },
  { icon: 'Ban', title: 'Дисциплина', text: 'Запрещены читы и токсичное поведение. Нарушение — техническое поражение.' },
  { icon: 'Trophy', title: 'Призовой фонд', text: '50 000 ₽ распределяются между топ-4 командами турнира.' },
];

const teams = [
  { name: 'Null Squad', tag: 'NLS', players: ['Vortex', 'Shade', 'Blaze'], wins: 14, color: '45 100% 51%' },
  { name: 'Pixel Hunters', tag: 'PXH', players: ['Neon', 'Frost', 'Quake'], wins: 11, color: '280 90% 60%' },
  { name: 'Brawl Kings', tag: 'BKG', players: ['Titan', 'Ghost', 'Spark'], wins: 9, color: '190 95% 50%' },
  { name: 'Lens Legends', tag: 'LNL', players: ['Crow', 'Bolt', 'Rex'], wins: 8, color: '0 90% 58%' },
];

const schedule = [
  { time: '18:00', teams: 'Null Squad vs Pixel Hunters', stage: 'Полуфинал', day: 'СБ' },
  { time: '19:30', teams: 'Brawl Kings vs Lens Legends', stage: 'Полуфинал', day: 'СБ' },
  { time: '20:00', teams: 'Победители полуфиналов', stage: 'Гранд-финал', day: 'ВС' },
];

const Index = () => {
  const [active, setActive] = useState('news');

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen grid-bg overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b-2 border-primary/30">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img src={CREST} alt="Lens Cup" className="w-11 h-11 rounded-xl object-cover" />
            <div className="leading-none">
              <p className="font-display text-2xl text-primary text-stroke">LENS CUP</p>
              <p className="text-[10px] tracking-[0.3em] text-accent uppercase">Null's Brawl</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  active === n.id ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={n.icon} size={16} />
                {n.label}
              </button>
            ))}
          </nav>
          <Button className="font-bold rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Icon name="Zap" size={16} className="mr-1" />
            Участвовать
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={HERO} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </div>
        <div className="container relative py-24 md:py-36 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-extrabold tracking-widest uppercase mb-6 animate-pulse-glow">
            ● Сезон 1 в эфире
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary text-stroke leading-[0.9] drop-shadow-2xl">
            LENS CUP
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-semibold text-foreground/90 max-w-2xl mx-auto">
            Главный турнир по <span className="text-secondary">Null's Brawl</span>. 32 команды. Один чемпион.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button size="lg" onClick={() => scrollTo('schedule')} className="font-extrabold text-base rounded-2xl h-14 px-8 glow-yellow">
              <Icon name="CalendarDays" size={20} className="mr-2" />
              Смотреть расписание
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo('stream')} className="font-extrabold text-base rounded-2xl h-14 px-8 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent">
              <Icon name="Tv" size={20} className="mr-2" />
              Трансляции
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
            {[['32', 'команды'], ['50K ₽', 'призовой фонд'], ['Bo5', 'гранд-финал']].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-4xl md:text-5xl text-accent text-stroke">{num}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <Section id="news" icon="Newspaper" title="Новости">
        <div className="grid md:grid-cols-3 gap-5">
          {news.map((n) => (
            <article key={n.title} className="group bg-card rounded-2xl border-2 border-border p-6 hover:border-primary transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-extrabold tracking-wide">{n.tag}</span>
                <span className="text-xs text-muted-foreground">{n.date}</span>
              </div>
              <h3 className="font-extrabold text-xl mb-2 group-hover:text-primary transition-colors">{n.title}</h3>
              <p className="text-sm text-muted-foreground">{n.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Rules */}
      <Section id="rules" icon="ScrollText" title="Правила">
        <div className="grid sm:grid-cols-2 gap-5">
          {rules.map((r) => (
            <div key={r.title} className="flex gap-4 bg-card rounded-2xl border-2 border-border p-6 hover:border-accent transition-all">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                <Icon name={r.icon} size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Teams */}
      <Section id="teams" icon="Users" title="Команды и составы">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teams.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl border-2 border-border overflow-hidden hover:-translate-y-1 transition-all hover:border-primary">
              <div className="p-5 text-center" style={{ background: `hsl(${t.color} / 0.12)` }}>
                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center font-display text-2xl text-stroke" style={{ background: `hsl(${t.color})`, color: 'hsl(258 60% 8%)' }}>
                  {t.tag}
                </div>
                <h3 className="font-extrabold text-lg mt-3">{t.name}</h3>
                <div className="inline-flex items-center gap-1 mt-1 text-xs font-bold text-primary">
                  <Icon name="Trophy" size={13} /> {t.wins} побед
                </div>
              </div>
              <ul className="p-4 space-y-2">
                {t.players.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm font-semibold">
                    <Icon name="User" size={14} className="text-muted-foreground" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Schedule */}
      <Section id="schedule" icon="CalendarDays" title="Расписание">
        <div className="space-y-4">
          {schedule.map((s) => (
            <div key={s.teams} className="flex items-center gap-4 bg-card rounded-2xl border-2 border-border p-5 hover:border-primary transition-all">
              <div className="shrink-0 text-center">
                <p className="font-display text-3xl text-primary text-stroke">{s.day}</p>
                <p className="text-xs text-muted-foreground">{s.time}</p>
              </div>
              <div className="w-px self-stretch bg-border" />
              <div className="flex-1">
                <p className="font-extrabold text-base md:text-lg">{s.teams}</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary font-bold">{s.stage}</span>
              </div>
              <Button variant="outline" size="sm" onClick={() => scrollTo('stream')} className="rounded-xl border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-bold">
                <Icon name="Play" size={14} className="mr-1" /> Смотреть
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Stream */}
      <Section id="stream" icon="Tv" title="Трансляции и видео">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 bg-card rounded-2xl border-2 border-primary overflow-hidden">
            <div className="aspect-video bg-background/60 flex items-center justify-center relative group cursor-pointer">
              <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
              <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center glow-yellow group-hover:scale-110 transition-transform">
                <Icon name="Play" size={34} className="text-primary-foreground ml-1" />
              </div>
              <span className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-extrabold animate-pulse-glow">
                ● LIVE
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-extrabold text-xl">Гранд-финал Lens Cup S1</h3>
              <p className="text-sm text-muted-foreground mt-1">Прямой эфир решающего матча сезона</p>
            </div>
          </div>
          <div className="space-y-4">
            {['Лучшие моменты недели', 'Разбор полуфинала', 'Обзор команд-фаворитов'].map((v) => (
              <div key={v} className="flex gap-3 bg-card rounded-2xl border-2 border-border p-3 hover:border-accent transition-all cursor-pointer group">
                <div className="shrink-0 w-24 aspect-video rounded-lg bg-background/60 flex items-center justify-center relative overflow-hidden">
                  <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                  <Icon name="Play" size={20} className="relative text-accent group-hover:scale-125 transition-transform" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-sm leading-tight">{v}</p>
                  <p className="text-xs text-muted-foreground mt-1">Видео · HD</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t-2 border-primary/30 mt-10">
        <div className="container py-10 text-center">
          <img src={CREST} alt="" className="w-14 h-14 rounded-xl mx-auto object-cover animate-float" />
          <p className="font-display text-3xl text-primary text-stroke mt-3">LENS CUP</p>
          <p className="text-sm text-muted-foreground mt-2">Киберспортивный турнир по Null's Brawl · 2026</p>
          <div className="flex justify-center gap-4 mt-5">
            {['Send', 'Youtube', 'Twitch', 'MessageCircle'].map((i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all">
                <Icon name={i} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

const Section = ({ id, icon, title, children }: { id: string; icon: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="container py-16 scroll-mt-20">
    <div className="flex items-center gap-3 mb-8">
      <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
        <Icon name={icon} size={22} className="text-primary-foreground" />
      </div>
      <h2 className="font-display text-4xl md:text-5xl text-foreground text-stroke">{title}</h2>
    </div>
    {children}
  </section>
);

export default Index;
