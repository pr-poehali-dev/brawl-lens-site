import { useState } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { SCHEDULE, STAGE_COLORS, TWITCH_CHANNEL } from '@/lib/constants';

const stages = ['Все', 'Группа A', 'Группа B', 'Группа C', 'Группа D', 'Группа E', 'Группа F', 'Группа G', 'Группа H', 'Полуфинал', 'Гранд-финал Bo7'];

export default function Schedule() {
  const [filter, setFilter] = useState('Все');

  const filtered = filter === 'Все' ? SCHEDULE : SCHEDULE.filter((s) => s.stage === filter);

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0">
            <Icon name="CalendarDays" size={28} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground text-stroke leading-none">Расписание</h1>
            <p className="text-sm text-muted-foreground mt-1">Все матчи Lens Cup Season 1</p>
          </div>
        </div>

        {/* Фильтр по стадии */}
        <div className="flex flex-wrap gap-2 mb-8">
          {stages.map((s) => {
            const color = STAGE_COLORS[s];
            const isActive = filter === s;
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all border-2"
                style={
                  isActive && color
                    ? { borderColor: `hsl(${color})`, background: `hsl(${color} / 0.2)`, color: `hsl(${color})` }
                    : isActive
                    ? { borderColor: 'hsl(var(--primary))', background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }
                    : { borderColor: 'transparent', background: 'hsl(var(--muted))', color: 'hsl(var(--foreground) / 0.7)' }
                }
              >
                {s}
              </button>
            );
          })}
        </div>

        {/* Матчи */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Icon name="CalendarDays" size={48} className="mx-auto mb-4 opacity-30" />
              <p className="font-bold">Матчи не найдены</p>
            </div>
          )}
          {filtered.map((s, i) => {
            const color = STAGE_COLORS[s.stage] || '45 100% 51%';
            const isGrandFinal = s.stage.includes('финал');
            return (
              <div
                key={i}
                className={`flex flex-col sm:flex-row sm:items-center gap-4 bg-card rounded-2xl border-2 p-5 transition-all ${
                  isGrandFinal ? 'border-primary shadow-lg' : 'border-border hover:border-primary/40'
                }`}
              >
                {/* Дата / День */}
                <div className="shrink-0 sm:w-24 flex sm:flex-col sm:text-center items-center gap-3 sm:gap-0">
                  <p className="font-display text-3xl leading-none" style={{ color: `hsl(${color})` }}>
                    {s.day || '—'}
                  </p>
                  <div>
                    <p className="text-xs text-muted-foreground">{s.date || 'Дата TBD'}</p>
                    <p className="text-sm font-extrabold">{s.time || 'TBD'}</p>
                  </div>
                </div>

                <div className="hidden sm:block w-px self-stretch bg-border" />

                {/* Команды */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="font-extrabold text-lg">{s.team1 || 'Команда 1'}</span>
                      <span className="text-muted-foreground font-bold text-sm px-2 py-0.5 bg-muted rounded-lg">VS</span>
                      <span className="font-extrabold text-lg">{s.team2 || 'Команда 2'}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span
                        className="text-xs px-2.5 py-0.5 rounded-full font-bold"
                        style={{ background: `hsl(${color} / 0.2)`, color: `hsl(${color})` }}
                      >
                        {s.stage}
                      </span>
                      {isGrandFinal && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-primary/20 text-primary animate-pulse-glow">
                          ★ Финал
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Кнопка Twitch */}
                  <a
                    href={s.twitchUrl || `https://twitch.tv/${TWITCH_CHANNEL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-105"
                    style={{ background: '#9147ff' }}
                  >
                    <Icon name="Tv" size={15} />
                    Смотреть на Twitch
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
