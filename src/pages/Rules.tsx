import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const chapters = [
  {
    icon: 'FileText',
    num: 'I',
    title: 'Условия Пользования',
    color: '45 100% 51%',
    items: [
      { id: '1.1', text: 'Несоблюдение правил не освобождает вас от ответственности.' },
      { id: '1.2', text: 'Для комфортного использования нашего турнира требуется соблюдение адекватности.' },
    ],
  },
  {
    icon: 'Ban',
    num: 'II',
    title: 'Система наказаний и варнов',
    color: '0 90% 58%',
    items: [
      { id: '2.1', text: 'Любое неоправданное оскорбление в сторону администрации/игрока ведёт к дисквалификации игрока из турнира.' },
      { id: '2.2', text: 'При специальном додже сета команде выдаётся ТП сета. (Специальный додж засчитывается при трёх доджах подряд)' },
      { id: '2.3', text: 'Смена персонажа при переигровке ведёт к переигровке с изначальными персонажами.' },
      { id: '2.4', text: 'При игре с незарегистрированным игроком команде выдаётся ТП.' },
      { id: '', text: '⚠️ Ко всем вышеперечисленным правилам нужны доказательства!', highlight: true },
      { id: '2.5', text: 'Система варнов (СВ) — счётчик нарушений хоста. При достижении 5/5 хоста отстраняют от игр навсегда.' },
      { id: '2.6', text: 'За несоблюдение обязательств и правил хоста вы получите тех. поражение в матче и варн.' },
      { id: '2.9', text: 'За блокировку бота кэпом вся команда получит тех. поражение.' },
      { id: '2.10', text: 'За любой обман команда получает тех. поражение.' },
    ],
  },
  {
    icon: 'Clock',
    num: 'III',
    title: 'Система Дедлайна и Переносов матчей',
    color: '190 95% 50%',
    items: [
      { id: '3.1', text: 'Дедлайн — крайний срок выполнения задачи. По истечении этого времени элемент можно считать просроченным.' },
      { id: '3.2', text: 'Игрокам выдаётся дедлайн от 10:00 до 22:00 по МСК. В любое из этого времени вы можете отыграть со своим противником.' },
      { id: '3.3', text: 'Переносить матч на текущий день можно на время от начала матча +30 минут и до 22:00. На завтра — в любое время от 10:00 до 22:00.' },
      { id: '3.4', text: 'Переносить матчи за час до начала нельзя. Но можно договориться с кэпом команды сыграть в другое время.' },
      { id: '3.5', text: 'Нельзя переносить матч больше 1 раза на команду.' },
    ],
  },
  {
    icon: 'Swords',
    num: 'IV',
    title: 'Формат матчей',
    color: '280 90% 60%',
    items: [
      { id: '', text: 'Групповой этап и остальные матчи — формат Best of 3.' },
      { id: '', text: 'Полуфиналы — формат Best of 5.' },
      { id: '', text: 'Финал — формат Best of 7.' },
      { id: '5.1', text: 'Капитан обязательно должен находиться в капитанской группе.' },
      { id: '5.3', text: 'После игры команды обязаны отправить скриншоты в группу и указать матч.' },
      { id: '6.2', text: 'Капитан/Менеджер должен предоставить весь ростер полностью — скриншотами профилей игроков.' },
      { id: '6.3', text: 'В команде должно быть минимум 2 игрока + капитан. Максимальное количество не ограничено.' },
    ],
  },
  {
    icon: 'RefreshCw',
    num: 'VII',
    title: 'Система замены игроков и дорегистрации',
    color: '120 80% 45%',
    items: [
      { id: '7.1', text: 'Заменить игрока можно самостоятельно в ЛС у владельца, если турнир ещё не стартовал. После старта — только через разрешение администрации.' },
      { id: '7.2', text: 'Дорегистрировать игрока можно до старта турнира. После старта дорегистрация запрещена (бывают исключения) — можно только заменить игрока.' },
    ],
  },
  {
    icon: 'Shield',
    num: 'VIII',
    title: 'Права и обязанности капитанов',
    color: '30 100% 55%',
    items: [
      { id: '', text: '⚠️ Ко всем правилам нужны доказательства. Обращаться по всем вопросам в ЛС владельца. За нарушение — тех. поражение.', highlight: true },
      { id: '9.4', text: 'Все карты, режимы и последовательность должны быть такими же, какими их выкладывали в канал.' },
    ],
  },
  {
    icon: 'RotateCcw',
    num: 'X',
    title: 'Переигровки',
    color: '200 90% 55%',
    items: [
      { id: '10.1', text: 'Если игрок вылетел из матча в начале раунда и стоит неподвижно 15+ секунд — должна сыграться переигровка раунда.' },
      { id: '10.2', text: 'Переигровка может быть сыграна если у кого-то из игроков лагает интернет.' },
      { id: '', text: '⚠️ На все правила этой главы нужны доказательства!', highlight: true },
      { id: '10.3', text: 'Максимальное количество переигровок на команду в сете: 1.' },
    ],
  },
];

export default function Rules() {
  return (
    <Layout>
      <div className="container py-12">
        {/* Шапка */}
        <div className="flex items-center gap-4 mb-2">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0">
            <Icon name="ScrollText" size={28} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground text-stroke leading-none">Правила</h1>
            <p className="text-sm text-muted-foreground mt-1">Официальный регламент LensCup · 31 мая 2026</p>
          </div>
        </div>

        {/* Предупреждение */}
        <div className="mt-6 mb-8 flex items-start gap-3 bg-destructive/10 border-2 border-destructive/40 rounded-2xl p-4">
          <Icon name="AlertTriangle" size={20} className="text-destructive shrink-0 mt-0.5" />
          <p className="text-sm font-semibold text-foreground/90">
            Несоблюдение правил не освобождает вас от ответственности. Незнание правил — не оправдание.
          </p>
        </div>

        {/* Главы */}
        <div className="space-y-4">
          {chapters.map((ch) => (
            <div key={ch.num} className="bg-card rounded-2xl border-2 border-border overflow-hidden">
              {/* Заголовок главы */}
              <div
                className="flex items-center gap-3 px-6 py-4"
                style={{ background: `hsl(${ch.color} / 0.10)`, borderBottom: `2px solid hsl(${ch.color} / 0.25)` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `hsl(${ch.color} / 0.2)` }}
                >
                  <Icon name={ch.icon} size={18} style={{ color: `hsl(${ch.color})` }} />
                </div>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-display text-xl text-stroke"
                    style={{ color: `hsl(${ch.color})` }}
                  >
                    Глава {ch.num}.
                  </span>
                  <h2 className="font-extrabold text-base text-foreground">{ch.title}</h2>
                </div>
              </div>

              {/* Пункты */}
              <ul className="divide-y divide-border/50">
                {ch.items.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 px-6 py-3.5 ${item.highlight ? 'bg-primary/5' : 'hover:bg-muted/30'} transition-colors`}
                  >
                    {item.id && (
                      <span
                        className="shrink-0 mt-0.5 text-[11px] font-extrabold px-2 py-0.5 rounded-lg"
                        style={{ background: `hsl(${ch.color} / 0.15)`, color: `hsl(${ch.color})` }}
                      >
                        {item.id}
                      </span>
                    )}
                    <p className={`text-sm leading-relaxed ${item.highlight ? 'font-bold text-primary' : 'text-foreground/85'}`}>
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Подпись */}
        <div className="mt-8 text-center">
          <p className="text-sm font-bold text-muted-foreground">© LensCup · 31 мая 2026 от Lens</p>
        </div>
      </div>
    </Layout>
  );
}
