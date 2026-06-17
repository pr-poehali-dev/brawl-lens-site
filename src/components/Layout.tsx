import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { CREST, TWITCH_CHANNEL, NAV } from '@/lib/constants';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen grid-bg flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/85 border-b-2 border-primary/30">
        <div className="container flex items-center justify-between py-3 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={CREST}
              alt="Lens Cup"
              className="w-12 h-12 object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
            <div className="leading-none hidden sm:block">
              <p className="font-display text-2xl text-primary text-stroke tracking-wide">LENS CUP</p>
              <p className="text-[10px] tracking-[0.2em] text-accent uppercase">Null's Brawl Tournament</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {NAV.map((n) => {
              const active = pathname === n.path;
              return (
                <Link
                  key={n.path}
                  to={n.path}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    active
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-foreground/70 hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={n.icon} size={15} />
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://twitch.tv/${TWITCH_CHANNEL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
              style={{ background: '#9147ff' }}
            >
              <Icon name="Tv" size={15} />
              Twitch
            </a>
            {/* Burger */}
            <button
              className="lg:hidden w-10 h-10 rounded-xl bg-muted flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="container py-3 grid grid-cols-2 gap-2">
              {NAV.map((n) => {
                const active = pathname === n.path;
                return (
                  <Link
                    key={n.path}
                    to={n.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      active ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground/80'
                    }`}
                  >
                    <Icon name={n.icon} size={16} />
                    {n.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-1">{children}</main>

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
          <nav className="flex flex-wrap justify-center gap-3 mt-5">
            {NAV.slice(1).map((n) => (
              <Link
                key={n.path}
                to={n.path}
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-semibold"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center gap-3 mt-5">
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
              <a
                key={ic}
                href="#"
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Icon name={ic} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}