export const CREST = 'https://cdn.poehali.dev/projects/0a8a2dde-1c61-44d8-8f0b-872ec8419110/bucket/6565d3de-aefa-4a34-8543-d9397a97c378.jpg';
export const HERO = 'https://cdn.poehali.dev/projects/0a8a2dde-1c61-44d8-8f0b-872ec8419110/files/99fc794b-5915-4f16-8e97-9c8e454c41d9.jpg';
export const TWITCH_CHANNEL = 'nullsbrawl';

export const NAV = [
  { path: '/', label: 'Главная', icon: 'Home' },
  { path: '/news', label: 'Новости', icon: 'Newspaper' },
  { path: '/rules', label: 'Правила', icon: 'ScrollText' },
  { path: '/teams', label: 'Команды', icon: 'Users' },
  { path: '/schedule', label: 'Расписание', icon: 'CalendarDays' },
  { path: '/stream', label: 'Трансляции', icon: 'Tv' },
];

// 8 групп по 4 команды — заполни сам
export const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((letter) => ({
  name: `Группа ${letter}`,
  teams: [
    { name: '', tag: '', wins: 0, losses: 0 },
    { name: '', tag: '', wins: 0, losses: 0 },
    { name: '', tag: '', wins: 0, losses: 0 },
    { name: '', tag: '', wins: 0, losses: 0 },
  ],
}));

export const GROUP_COLORS: Record<string, string> = {
  'Группа A': '45 100% 51%',
  'Группа B': '280 90% 60%',
  'Группа C': '190 95% 50%',
  'Группа D': '0 90% 58%',
  'Группа E': '120 80% 45%',
  'Группа F': '30 100% 55%',
  'Группа G': '200 90% 55%',
  'Группа H': '330 90% 55%',
};

// Расписание — заполни сам
export const SCHEDULE = [
  { day: '', date: '', time: '', team1: '', team2: '', stage: 'Группа A', twitchUrl: `https://twitch.tv/${TWITCH_CHANNEL}` },
  { day: '', date: '', time: '', team1: '', team2: '', stage: 'Группа B', twitchUrl: `https://twitch.tv/${TWITCH_CHANNEL}` },
  { day: '', date: '', time: '', team1: '', team2: '', stage: 'Группа C', twitchUrl: `https://twitch.tv/${TWITCH_CHANNEL}` },
  { day: '', date: '', time: '', team1: '', team2: '', stage: 'Полуфинал', twitchUrl: `https://twitch.tv/${TWITCH_CHANNEL}` },
  { day: '', date: '', time: '', team1: '', team2: '', stage: 'Полуфинал', twitchUrl: `https://twitch.tv/${TWITCH_CHANNEL}` },
  { day: '', date: '', time: '', team1: '', team2: '', stage: 'Гранд-финал Bo7', twitchUrl: `https://twitch.tv/${TWITCH_CHANNEL}` },
];

export const STAGE_COLORS: Record<string, string> = {
  'Группа A': '45 100% 51%',
  'Группа B': '280 90% 60%',
  'Группа C': '190 95% 50%',
  'Группа D': '0 90% 58%',
  'Группа E': '120 80% 45%',
  'Группа F': '30 100% 55%',
  'Группа G': '200 90% 55%',
  'Группа H': '330 90% 55%',
  'Полуфинал': '45 100% 51%',
  'Гранд-финал Bo7': '0 90% 58%',
};
