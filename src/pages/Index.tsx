import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { CREST, HERO, TWITCH_CHANNEL } from '@/lib/constants';

const quickLinks = [
  { path: '/news', icon: 'Newspaper', label: 'Новости', desc: 'Анонсы и обновления', color: '45 100% 51%' },
  { path: '/rules', icon: 'ScrollText', label: 'Правила', desc: 'Регламент турнира', color: '190 95% 50%' },
  { path: '/teams', icon: 'Users', label: 'Команды', desc: '32 команды · 8 групп', color: '280 90% 60%' },
  { path: '/schedule', icon: 'CalendarDays', label: 'Расписание', desc: 'Расписание матчей', color: '120 80% 45%' },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, hsl(45 100% 51%) 0%, transparent 70%)' }}
          />
        </div>

        <div className="container relative text-center py-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-extrabold tracking-widest uppercase mb-8 border border-accent/30">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            Season 1 · Null's Brawl Tournament
          </span>

          <div className="flex justify-center mb-6">
            <img
              src={CREST}
              alt="Lens Cup"
              className="w-44 h-44 md:w-64 md:h-64 object-contain animate-float drop-shadow-2xl"
              style={{ mixBlendMode: 'screen' }}
            />
          </div>

          <p className="text-lg md:text-2xl font-semibold text-foreground/85 max-w-xl mx-auto">
            Главный турнир по <span className="text-secondary font-extrabold">Null's Brawl</span>.<br />
            32 команды. 8 групп. Один чемпион.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              to="/schedule"
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-extrabold text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
              style={{ boxShadow: '0 0 30px hsl(45 100% 51% / 0.4)' }}
            >
              <Icon name="CalendarDays" size={20} />
              Расписание матчей
            </Link>
            <a
              href={`https://twitch.tv/${TWITCH_CHANNEL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-extrabold text-base text-white transition-all hover:scale-105"
              style={{ background: '#9147ff', boxShadow: '0 0 25px #9147ff55' }}
            >
              <Icon name="Tv" size={20} />
              Смотреть на Twitch
            </a>
            <Link
              to="/teams"
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-extrabold text-base border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <Icon name="Users" size={20} />
              Команды
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-10">
            {[
              ['32', 'команды', '45 100% 51%'],
              ['8', 'групп', '190 95% 50%'],
              ['Bo7', 'гранд-финал', '280 90% 60%'],
              ['LIVE', 'на Twitch', '0 90% 58%'],
            ].map(([num, label, color]) => (
              <div key={label} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-stroke" style={{ color: `hsl(${color})` }}>
                  {num}
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Разделы */}
      <section className="container pb-16">
        <h2 className="font-display text-3xl md:text-4xl text-stroke text-foreground text-center mb-8">
          Разделы турнира
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group bg-card rounded-2xl border-2 border-border p-6 hover:-translate-y-1 transition-all hover:shadow-xl flex flex-col gap-4"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `hsl(${item.color})`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `hsl(${item.color} / 0.15)` }}
              >
                <Icon name={item.icon} size={24} style={{ color: `hsl(${item.color})` }} />
              </div>
              <div>
                <h3 className="font-extrabold text-lg group-hover:text-primary transition-colors">{item.label}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold mt-auto" style={{ color: `hsl(${item.color})` }}>
                Перейти <Icon name="ArrowRight" size={13} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Twitch баннер */}
      <section className="container pb-16">
        <div
          className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #6441a5 0%, #9147ff 100%)' }}
        >
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, white, transparent)' }} />
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
            <Icon name="Tv" size={32} className="text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-3xl md:text-4xl">Смотри матчи в прямом эфире</h3>
            <p className="text-white/80 mt-1">Все трансляции Lens Cup проходят на нашем Twitch-канале</p>
          </div>
          <a
            href={`https://twitch.tv/${TWITCH_CHANNEL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-8 py-3.5 rounded-2xl font-extrabold text-base bg-white text-[#9147ff] hover:bg-white/90 transition-all hover:scale-105"
          >
            <Icon name="ExternalLink" size={18} />
            Открыть Twitch
          </a>
        </div>
      </section>
    </Layout>
  );
}
