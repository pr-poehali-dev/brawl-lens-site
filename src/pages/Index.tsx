import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO = 'https://cdn.poehali.dev/projects/0a8a2dde-1c61-44d8-8f0b-872ec8419110/files/99fc794b-5915-4f16-8e97-9c8e454c41d9.jpg';
const CREST = 'https://cdn.poehali.dev/projects/0a8a2dde-1c61-44d8-8f0b-872ec8419110/bucket/6565d3de-aefa-4a34-8543-d9397a97c378.jpg';

// Twitch канал — замени на свой
const TWITCH_CHANNEL = 'nullsbrawl';

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
  { tag: 'ИНТЕРВЬЮ', title: 'Интервью с организаторами', text: 'Разбираем формат турнира и ожидания от первого сезона.', date: '9 июня' },
];

const rules = [
  { icon: 'Swords', title: 'Формат', text: 'Bo3 в групповой стадии, Bo5 в полуфиналах. Гранд-финал — Bo7.' },
  { icon: 'Users', title: 'Составы', text: '3 основных игрока + 1 запасной. Замена допускается между картами.' },
  { icon: 'Ban', title: 'Дисциплина', text: 'Запрещены читы и токсичное поведение. Нарушение — техническое поражение.' },
  { icon: 'Trophy', title: 'Призовой фонд', text: 'Призы распределяются между топ-4 командами турнира.' },
];

// Команды — заполни сам: name, tag, players (3 игрока), color
const teams = [
  { name: '', tag: '', players: ['', '', ''], color: '45 100% 51%' },
  { name: '', tag: '', players: ['', '', ''], color: '280 90% 60%' },
  { name: '', tag: '', players: ['', '', ''], color: '190 95% 50%' },
  { name: '', tag: '', players: ['', '', ''], color: '0 90% 58%' },
  { name: '', tag: '', players: ['', '', ''], color: '120 80% 45%' },
  { name: '', tag: '', players: ['', '', ''], color: '30 100% 55%' },
  { name: '', tag: '', players: ['', '', ''], color: '200 90% 55%' },
  { name: '', tag: '', players: ['', '', ''], color: '330 90% 55%' },
];

// Расписание — заполни сам: day, time, team1, team2, stage, twitchUrl
const schedule = [
  { day: '', date: '', time: '', team1: '', team2: '', stage: 'Группа A', twitchUrl: `https://twitch.tv/${TWITCH_CHANNEL}` },
  { day: '', date: '', time: '', team1: '', team2: '', stage: 'Группа A', twitchUrl: `https://twitch.tv/${TWITCH_CHANNEL}` },
  { day: '', date: '', time: '', team1: '', team2: '', stage: 'Группа B', twitchUrl: `https://twitch.tv/${TWITCH_CHANNEL}` },
  { day: '', date: '', time: '', team1: '', team2: '', stage: 'Полуфинал', twitchUrl: `https://twitch.tv/${TWITCH_CHANNEL}` },
  { day: '', date: '', time: '', team1: '', team2: '', stage: 'Полуфинал', twitchUrl: `https://twitch.tv/${TWITCH_CHANNEL}` },
  { day: '', date: '', time: '', team1: '', team2: '', stage: 'Гранд-финал Bo7', twitchUrl: `https://twitch.tv/${TWITCH_CHANNEL}` },
];

const stageColors: Record<string, string> = {
  'Группа A': '190 95% 50%',
  'Группа B': '280 90% 60%',
  'Полуфинал': '45 100% 51%',
  'Гранд-финал Bo7': '0 90% 58%',
};

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
            <img
              src={CREST}
              alt="Lens Cup"
              className="w-12 h-12 object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
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
        <div className="container relative py-20 md:py-32 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-extrabold tracking-widest uppercase mb-6 animate-pulse-glow">
            ● Сезон 1 в эфире
          </span>
          {/* Логотип без фона */}
          <div className="flex justify-center mb-4">
            <img
              src={CREST}
              alt="Lens Cup"
              className="w-40 h-40 md:w-56 md:h-56 object-contain animate-float"
              style={{ mixBlendMode: 'screen' }}
            />
          </div>
          <p className="mt-2 text-lg md:text-2xl font-semibold text-foreground/90 max-w-2xl mx-auto">
            Главный турнир по <span className="text-secondary">Null's Brawl</span>. 32 команды. Один чемпион.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button size="lg" onClick={() => scrollTo('schedule')} className="font-extrabold text-base rounded-2xl h-14 px-8 glow-yellow">
              <Icon name="CalendarDays" size={20} className="mr-2" />
              Расписание
            </Button>
            <Button
              size="lg"
              onClick={() => window.open(`https://twitch.tv/${TWITCH_CHANNEL}`, '_blank')}
              className="font-extrabold text-base rounded-2xl h-14 px-8 border-2 bg-[#9147ff] hover:bg-[#7c3aed] text-white border-transparent"
            >
              <Icon name="Tv" size={20} className="mr-2" />
              Смотреть на Twitch
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
            {[['32', 'команды'], ['Bo7', 'гранд-финал'], ['LIVE', 'на Twitch']].map(([num, label]) => (
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
          {teams.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl border-2 border-border overflow-hidden hover:-translate-y-1 transition-all hover:border-primary">
              <div className="p-5 text-center" style={{ background: `hsl(${t.color} / 0.10)` }}>
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center font-display text-xl text-stroke border-2"
                  style={{
                    background: t.tag ? `hsl(${t.color} / 0.25)` : 'hsl(var(--muted))',
                    borderColor: `hsl(${t.color})`,
                    color: t.tag ? `hsl(${t.color})` : 'hsl(var(--muted-foreground))',
                  }}
                >
                  {t.tag || '??'}
                </div>
                <h3 className="font-extrabold text-base mt-3 min-h-[1.5rem] text-foreground">
                  {t.name || <span className="text-muted-foreground text-sm">Название команды</span>}
                </h3>
              </div>
              <ul className="p-4 space-y-2">
                {t.players.map((p, pi) => (
                  <li key={pi} className="flex items-center gap-2 text-sm font-semibold">
                    <Icon name="User" size={14} className="text-muted-foreground shrink-0" />
                    {p || <span className="text-muted-foreground">Игрок {pi + 1}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground text-center">
          Чтобы заполнить команды — попросите меня изменить данные
        </p>
      </Section>

      {/* Schedule */}
      <Section id="schedule" icon="CalendarDays" title="Расписание">
        <div className="space-y-3">
          {schedule.map((s, i) => {
            const color = stageColors[s.stage] || '45 100% 51%';
            const isGrandFinal = s.stage.includes('финал');
            return (
              <div
                key={i}
                className={`flex flex-col sm:flex-row sm:items-center gap-4 bg-card rounded-2xl border-2 p-5 transition-all ${isGrandFinal ? 'border-primary glow-yellow' : 'border-border hover:border-primary/50'}`}
              >
                {/* Дата/время */}
                <div className="shrink-0 text-center sm:w-20">
                  <p className="font-display text-2xl leading-none" style={{ color: `hsl(${color})` }}>
                    {s.day || '—'}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{s.date || 'дата TBD'}</p>
                  <p className="text-sm font-bold mt-0.5">{s.time || 'TBD'}</p>
                </div>
                <div className="hidden sm:block w-px self-stretch bg-border" />
                {/* Матч */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-extrabold text-base">{s.team1 || 'Команда 1'}</span>
                      <span className="text-muted-foreground text-sm font-bold">vs</span>
                      <span className="font-extrabold text-base">{s.team2 || 'Команда 2'}</span>
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-bold mt-1 inline-block"
                      style={{ background: `hsl(${color} / 0.2)`, color: `hsl(${color})` }}
                    >
                      {s.stage}
                    </span>
                  </div>
                  {/* Кнопка Twitch */}
                  <a
                    href={s.twitchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-sm bg-[#9147ff] hover:bg-[#7c3aed] text-white transition-all"
                  >
                    <Icon name="Tv" size={15} />
                    Twitch
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Stream */}
      <Section id="stream" icon="Tv" title="Трансляции и видео">
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Основной плеер */}
          <div className="lg:col-span-2 bg-card rounded-2xl border-2 border-primary overflow-hidden">
            <div className="aspect-video bg-background/60 flex flex-col items-center justify-center relative group">
              <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
              <div className="relative flex flex-col items-center gap-4">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center glow-yellow group-hover:scale-110 transition-transform cursor-pointer"
                  style={{ background: '#9147ff' }}
                  onClick={() => window.open(`https://twitch.tv/${TWITCH_CHANNEL}`, '_blank')}
                >
                  <Icon name="Tv" size={34} className="text-white" />
                </div>
                <a
                  href={`https://twitch.tv/${TWITCH_CHANNEL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-extrabold text-white transition-all hover:scale-105"
                  style={{ background: '#9147ff' }}
                >
                  <Icon name="ExternalLink" size={16} />
                  Смотреть на Twitch
                </a>
              </div>
              <span className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-extrabold animate-pulse-glow">
                ● LIVE
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-extrabold text-xl">Прямая трансляция Lens Cup</h3>
              <p className="text-sm text-muted-foreground mt-1">Следи за матчами в прямом эфире на нашем Twitch-канале</p>
            </div>
          </div>

          {/* Sidebar с видео */}
          <div className="space-y-3">
            {['Лучшие моменты', 'Разбор матча', 'Превью финала'].map((v) => (
              <a
                key={v}
                href={`https://twitch.tv/${TWITCH_CHANNEL}/videos`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 bg-card rounded-2xl border-2 border-border p-3 hover:border-[#9147ff] transition-all group"
              >
                <div className="shrink-0 w-24 aspect-video rounded-lg bg-background/60 flex items-center justify-center relative overflow-hidden">
                  <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
                  <div className="relative w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#9147ff' }}>
                    <Icon name="Play" size={14} className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-sm leading-tight group-hover:text-[#9147ff] transition-colors">{v}</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Icon name="Tv" size={11} /> Twitch VOD
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t-2 border-primary/30 mt-10">
        <div className="container py-10 text-center">
          <img
            src={CREST}
            alt=""
            className="w-20 h-20 mx-auto object-contain animate-float"
            style={{ mixBlendMode: 'screen' }}
          />
          <p className="font-display text-3xl text-primary text-stroke mt-1">LENS CUP</p>
          <p className="text-sm text-muted-foreground mt-2">Киберспортивный турнир по Null's Brawl · 2026</p>
          <div className="flex justify-center gap-4 mt-5">
            <a
              href={`https://twitch.tv/${TWITCH_CHANNEL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110"
              style={{ background: '#9147ff' }}
            >
              <Icon name="Tv" size={18} />
            </a>
            {['Send', 'Youtube', 'MessageCircle'].map((ic) => (
              <a key={ic} href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all">
                <Icon name={ic} size={18} />
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
