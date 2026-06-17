import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const sections = [
  {
    icon: 'Swords',
    title: 'Формат турнира',
    color: '45 100% 51%',
    items: [
      'Групповая стадия: 8 групп по 4 команды, Bo3',
      'Из каждой группы выходят 2 лучших команды',
      'Плей-офф: сетка с двойным выбыванием',
      'Полуфиналы: Bo5',
      'Гранд-финал: Bo7',
    ],
  },
  {
    icon: 'Users',
    title: 'Требования к составам',
    color: '190 95% 50%',
    items: [
      '3 основных игрока + 1 запасной',
      'Замена запасного допускается между картами',
      'Все игроки должны быть зарегистрированы до старта',
      'Смена состава после старта турнира запрещена',
    ],
  },
  {
    icon: 'Clock',
    title: 'Регламент матчей',
    color: '280 90% 60%',
    items: [
      'Опоздание более 10 минут — техническое поражение',
      'Дисконнект во время игры — переигровка первой минуты',
      'Выбор карт согласно официальному пулу турнира',
      'Запрет: системы ботов, читы, сторонние программы',
    ],
  },
  {
    icon: 'Ban',
    title: 'Дисциплина',
    color: '0 90% 58%',
    items: [
      'Запрещены оскорбления, токсичное поведение',
      'Нарушение = предупреждение, затем техническое поражение',
      'Решение организаторов является окончательным',
      'Апелляция принимается в течение 15 минут после матча',
    ],
  },
  {
    icon: 'Trophy',
    title: 'Призовой фонд',
    color: '120 80% 45%',
    items: [
      '1 место — будет объявлено',
      '2 место — будет объявлено',
      '3–4 место — будет объявлено',
      'Специальные призы за лучшего игрока и MVP',
    ],
  },
  {
    icon: 'Shield',
    title: 'Технические требования',
    color: '30 100% 55%',
    items: [
      'Игроки играют на официальном сервере Null\'s Brawl',
      'Стабильное интернет-соединение обязательно',
      'Скриншоты результатов обязательны для обеих команд',
      'Трансляция организаторов — главный источник правды',
    ],
  },
];

export default function Rules() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0">
            <Icon name="ScrollText" size={28} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground text-stroke leading-none">Правила</h1>
            <p className="text-sm text-muted-foreground mt-1">Официальный регламент Lens Cup Season 1</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {sections.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `hsl(${s.color} / 0.15)` }}
                >
                  <Icon name={s.icon} size={20} style={{ color: `hsl(${s.color})` }} />
                </div>
                <h2 className="font-extrabold text-lg" style={{ color: `hsl(${s.color})` }}>{s.title}</h2>
              </div>
              <ul className="space-y-2">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: `hsl(${s.color})` }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
