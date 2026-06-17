import { useState } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { GROUPS, GROUP_COLORS } from '@/lib/constants';

export default function Teams() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const displayed = activeGroup
    ? GROUPS.filter((g) => g.name === activeGroup)
    : GROUPS;

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0">
            <Icon name="Users" size={28} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground text-stroke leading-none">Команды</h1>
            <p className="text-sm text-muted-foreground mt-1">32 команды · 8 групп · Season 1</p>
          </div>
        </div>

        {/* Фильтр групп */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveGroup(null)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              activeGroup === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground/70 hover:text-primary'
            }`}
          >
            Все группы
          </button>
          {GROUPS.map((g) => {
            const color = GROUP_COLORS[g.name];
            const isActive = activeGroup === g.name;
            return (
              <button
                key={g.name}
                onClick={() => setActiveGroup(isActive ? null : g.name)}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all border-2"
                style={{
                  borderColor: isActive ? `hsl(${color})` : 'transparent',
                  background: isActive ? `hsl(${color} / 0.2)` : 'hsl(var(--muted))',
                  color: isActive ? `hsl(${color})` : 'hsl(var(--foreground) / 0.7)',
                }}
              >
                {g.name}
              </button>
            );
          })}
        </div>

        {/* Сетки групп */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {displayed.map((group) => {
            const color = GROUP_COLORS[group.name];
            return (
              <div
                key={group.name}
                className="bg-card rounded-2xl border-2 border-border overflow-hidden"
                style={{ borderColor: activeGroup === group.name ? `hsl(${color} / 0.6)` : undefined }}
              >
                {/* Заголовок группы */}
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{ background: `hsl(${color} / 0.12)` }}
                >
                  <h2
                    className="font-display text-2xl text-stroke"
                    style={{ color: `hsl(${color})` }}
                  >
                    {group.name}
                  </h2>
                  <span className="text-xs font-bold text-muted-foreground">4 команды</span>
                </div>

                {/* Шапка таблицы */}
                <div className="grid grid-cols-[1fr_auto_auto] gap-2 px-4 py-2 border-b border-border text-[11px] font-bold text-muted-foreground uppercase tracking-wide">
                  <span>Команда</span>
                  <span className="text-center w-6">W</span>
                  <span className="text-center w-6">L</span>
                </div>

                {/* Команды */}
                <ul>
                  {group.teams.map((team, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[1fr_auto_auto] gap-2 items-center px-4 py-3 border-b border-border/50 last:border-0 hover:bg-muted/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-extrabold shrink-0"
                          style={{
                            background: `hsl(${color} / 0.2)`,
                            color: `hsl(${color})`,
                          }}
                        >
                          {i + 1}
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-bold truncate">
                            {team.name || <span className="text-muted-foreground">Команда {i + 1}</span>}
                          </p>
                          {team.tag && (
                            <p className="text-[10px] text-muted-foreground">[{team.tag}]</p>
                          )}
                        </div>
                      </div>
                      <span className="text-center w-6 font-extrabold text-sm" style={{ color: 'hsl(120 80% 45%)' }}>
                        {team.wins}
                      </span>
                      <span className="text-center w-6 font-extrabold text-sm text-destructive">
                        {team.losses}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Статус */}
                <div className="px-4 py-2.5" style={{ background: `hsl(${color} / 0.06)` }}>
                  <p className="text-[11px] text-muted-foreground font-semibold flex items-center gap-1">
                    <Icon name="Clock" size={11} />
                    Матчи ещё не начались
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
