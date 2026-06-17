import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const news = [
  { tag: 'АНОНС', title: 'Старт Lens Cup Season 1', text: 'Регистрация открыта! 32 команды сразятся за главный приз сезона. Турнир пройдёт в формате групповой стадии с выбыванием.', date: '15 июня 2026' },
  { tag: 'ОБНОВЛЕНИЕ', title: 'Новая карта в пуле', text: 'Добавили «Кактусовую долину» в режим Награда за поимку. Карта будет доступна начиная с четвертьфинальной стадии.', date: '12 июня 2026' },
  { tag: 'ИНТЕРВЬЮ', title: 'Интервью с организаторами', text: 'Разбираем формат турнира и ожидания от первого сезона Lens Cup.', date: '9 июня 2026' },
];

const tagColors: Record<string, string> = {
  'АНОНС': '45 100% 51%',
  'ОБНОВЛЕНИЕ': '190 95% 50%',
  'ИНТЕРВЬЮ': '280 90% 60%',
};

export default function News() {
  return (
    <Layout>
      <div className="container py-12">
        <PageHeader icon="Newspaper" title="Новости" subtitle="Последние события турнира Lens Cup" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {news.map((n) => {
            const color = tagColors[n.tag] || '45 100% 51%';
            return (
              <article
                key={n.title}
                className="group bg-card rounded-2xl border-2 border-border p-6 hover:border-primary transition-all hover:-translate-y-1 cursor-pointer flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-extrabold tracking-wide"
                    style={{ background: `hsl(${color} / 0.2)`, color: `hsl(${color})` }}
                  >
                    {n.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="font-extrabold text-xl group-hover:text-primary transition-colors">{n.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{n.text}</p>
                <div className="flex items-center gap-1 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Читать далее <Icon name="ArrowRight" size={13} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

function PageHeader({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0">
        <Icon name={icon} size={28} className="text-primary-foreground" />
      </div>
      <div>
        <h1 className="font-display text-4xl md:text-5xl text-foreground text-stroke leading-none">{title}</h1>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </div>
  );
}
