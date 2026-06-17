import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { TWITCH_CHANNEL, HERO } from '@/lib/constants';

const vods = [
  { title: 'Лучшие моменты недели', duration: 'VOD', type: 'clips' },
  { title: 'Разбор матча Полуфинал', duration: 'VOD', type: 'videos' },
  { title: 'Превью Гранд-финала', duration: 'VOD', type: 'videos' },
  { title: 'Highlights группового этапа', duration: 'VOD', type: 'clips' },
];

export default function Stream() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: '#9147ff' }}>
            <Icon name="Tv" size={28} className="text-white" />
          </div>
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground text-stroke leading-none">Трансляции</h1>
            <p className="text-sm text-muted-foreground mt-1">Прямые эфиры и записи матчей на Twitch</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Главный блок */}
          <div className="lg:col-span-2 space-y-4">
            {/* Live карточка */}
            <div className="bg-card rounded-2xl border-2 overflow-hidden" style={{ borderColor: '#9147ff' }}>
              <div className="aspect-video bg-background/60 flex flex-col items-center justify-center relative group cursor-pointer"
                onClick={() => window.open(`https://twitch.tv/${TWITCH_CHANNEL}`, '_blank')}
              >
                <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <div className="relative flex flex-col items-center gap-5">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl"
                    style={{ background: '#9147ff' }}
                  >
                    <Icon name="Tv" size={40} className="text-white" />
                  </div>
                  <a
                    href={`https://twitch.tv/${TWITCH_CHANNEL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-3 rounded-xl font-extrabold text-white text-base transition-all hover:opacity-90"
                    style={{ background: '#9147ff' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon name="ExternalLink" size={18} />
                    Открыть Twitch
                  </a>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-destructive text-destructive-foreground text-xs font-extrabold animate-pulse-glow">
                    ● LIVE
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold text-white" style={{ background: 'rgba(0,0,0,0.6)' }}>
                    twitch.tv/{TWITCH_CHANNEL}
                  </span>
                </div>
              </div>
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-extrabold text-xl">Прямая трансляция Lens Cup</h3>
                  <p className="text-sm text-muted-foreground mt-1">Следи за всеми матчами в прямом эфире на нашем Twitch-канале</p>
                </div>
                <a
                  href={`https://twitch.tv/${TWITCH_CHANNEL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm text-white"
                  style={{ background: '#9147ff' }}
                >
                  <Icon name="Tv" size={15} />
                  Подписаться
                </a>
              </div>
            </div>

            {/* Ссылки */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Все трансляции', path: 'videos', icon: 'Video', desc: 'Полные записи матчей' },
                { label: 'Клипы', path: 'clips', icon: 'Scissors', desc: 'Лучшие моменты' },
              ].map((item) => (
                <a
                  key={item.path}
                  href={`https://twitch.tv/${TWITCH_CHANNEL}/${item.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-card rounded-2xl border-2 border-border p-5 hover:border-primary transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#9147ff33' }}>
                    <Icon name={item.icon} size={22} style={{ color: '#9147ff' }} />
                  </div>
                  <div>
                    <p className="font-extrabold group-hover:text-primary transition-colors">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <Icon name="ArrowRight" size={18} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* VOD список */}
          <div className="space-y-3">
            <h2 className="font-display text-2xl text-stroke text-foreground mb-4">Видеозаписи</h2>
            {vods.map((v) => (
              <a
                key={v.title}
                href={`https://twitch.tv/${TWITCH_CHANNEL}/${v.type}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 bg-card rounded-2xl border-2 border-border p-3 hover:border-primary transition-all group"
              >
                <div className="shrink-0 w-28 aspect-video rounded-xl bg-background/60 flex items-center justify-center relative overflow-hidden">
                  <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                  <div className="relative w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#9147ff' }}>
                    <Icon name="Play" size={16} className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <p className="font-bold text-sm leading-tight group-hover:text-primary transition-colors truncate">{v.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Icon name="Tv" size={11} />
                    Twitch {v.duration}
                  </p>
                </div>
              </a>
            ))}
            <a
              href={`https://twitch.tv/${TWITCH_CHANNEL}/videos`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-border text-sm font-bold text-muted-foreground hover:border-primary hover:text-primary transition-all"
            >
              Все видео <Icon name="ArrowRight" size={15} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
