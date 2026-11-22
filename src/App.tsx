import { useEffect, useState } from 'react';
import { ArrowUp, BookOpenCheck, Heart, Minus, Moon, Pause, Play, Plus, Sun, ZoomIn, ZoomOut } from 'lucide-react';
import { LANGUAGES, TEXT_KEYS, UI_STRINGS, UI_STRINGS_PAGE } from './lib/confession-constants';
import type { Language, TextKey } from './lib/types';
import Reading from './Reading';

const sizes = [14, 16, 18, 21, 24, 28];
const scrollRates = [17, 33, 50, 83, 117];
const donation = 'https://www.paypal.com/donate/?business=JZS5LVZKPPY5J&no_recurring=0&item_name=Help+fund+Dharma+translation+projects.&currency_code=';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [textKey, setTextKey] = useState<TextKey>('bodhisattva');
  const [alternate, setAlternate] = useState(false);
  const [size, setSize] = useState(2);
  const [speed, setSpeed] = useState(2);
  const [playing, setPlaying] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('confession-theme') === 'dark');
  const [showTop, setShowTop] = useState(false);
  const ui = UI_STRINGS_PAGE[language];
  const canAlternate = language === 'pl' && textKey === 'ultimateConfession';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('confession-theme', dark ? 'dark' : 'light');
  }, [dark]);
  useEffect(() => { document.documentElement.lang = language === 'ti' ? 'bo' : language; }, [language]);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    const stop = () => setPlaying(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', stop, { passive: true });
    window.addEventListener('touchmove', stop, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchmove', stop);
    };
  }, []);
  useEffect(() => {
    if (!playing) return;
    let previous = performance.now();
    let remainder = 0;
    let frame: number;
    const move = (now: number) => {
      remainder += Math.min(100, now - previous) * scrollRates[speed] / 1000;
      previous = now;
      const pixels = Math.floor(remainder);
      remainder -= pixels;
      if (pixels) window.scrollBy(0, pixels);
      if (scrollY + innerHeight >= document.documentElement.scrollHeight - 1) setPlaying(false);
      else frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, [playing, speed]);

  function resetReading() {
    setPlaying(false);
    setAlternate(false);
    window.scrollTo(0, 0);
  }
  function changeText(key: TextKey) {
    setTextKey(key);
    resetReading();
  }
  function changeLanguage(value: Language) {
    setLanguage(value);
    resetReading();
  }
  return <>
    <header className="reader-head"><div className="head-inner">
      <h1 className="reader-name">{ui.appName}</h1>
      <a className="donate" href={donation + (language === 'pl' ? 'PLN' : 'USD')} target="_blank" rel="noreferrer"
        aria-label={UI_STRINGS.donateButtonLabel[language]}><Heart size={18}/></a>
      <div className="reader-options">
        <div className="layers" role="tablist" aria-label={ui.selectTextPrompt}>
          {TEXT_KEYS.map((text, i) => <button role="tab" id={'tab-' + text.id} key={text.id}
            aria-controls="current-reading" aria-selected={textKey === text.id} tabIndex={textKey === text.id ? 0 : -1}
            onClick={() => changeText(text.id)}
            onKeyDown={event => {
              const count = TEXT_KEYS.length;
              const next = {ArrowLeft: (i+count-1)%count, ArrowRight: (i+1)%count, Home: 0, End: count-1}[event.key];
              if (next === undefined) return;
              event.preventDefault();
              changeText(TEXT_KEYS[next].id);
              document.getElementById('tab-' + TEXT_KEYS[next].id)?.focus();
            }}>
            <span className="long-label">{text.label(language)}</span><span className="short-label">{text.shortLabel(language)}</span>
          </button>)}
        </div>
        <select aria-label={ui.selectLanguagePrompt} value={language} onChange={e => changeLanguage(e.target.value as Language)}>
          {LANGUAGES.map(lang => <option key={lang.id} value={lang.id}>{lang.label(language)}</option>)}
        </select>
      </div>
    </div></header>
    <main id="current-reading" role="tabpanel" aria-labelledby={'tab-' + textKey}>
      <Reading key={textKey+language} textKey={textKey} language={language} alternate={alternate} size={sizes[size]} />
    </main>
    <footer>© {new Date().getFullYear()} {ui.appName}. {ui.footerText}</footer>
    {showTop && <button className="back-up" aria-label="Scroll to top" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}><ArrowUp size={18}/></button>}
    <div className="bottom-bar"><div className="bar-inner">
      <div className="bar-group">
        <button className="bar-btn" disabled={!speed} aria-label={ui.decreaseAutoscrollSpeedPrompt} onClick={() => setSpeed(speed-1)}><Minus/></button>
        <button className="bar-btn" aria-label={playing ? ui.pauseAutoscrollPrompt : ui.startAutoscrollPrompt} onClick={() => setPlaying(!playing)}>{playing ? <Pause/> : <Play/>}</button>
        <button className="bar-btn" disabled={speed === scrollRates.length-1} aria-label={ui.increaseAutoscrollSpeedPrompt} onClick={() => setSpeed(speed+1)}><Plus/></button>
      </div>
      <div className="bar-center bar-group">
        <button className="bar-btn" aria-label="Toggle theme" aria-pressed={dark} onClick={() => setDark(!dark)}>{dark ? <Sun/> : <Moon/>}</button>
        {canAlternate && <button aria-label={ui.toggleTranslationPrompt} title={ui.toggleTranslationPrompt} aria-pressed={alternate}
          className={'bar-btn' + (alternate ? ' active' : '')} onClick={() => setAlternate(!alternate)}><BookOpenCheck/></button>}
      </div>
      <div className="bar-group">
        <button className="bar-btn" disabled={!size} aria-label={ui.decreaseTextSizePrompt} onClick={() => setSize(size-1)}><ZoomOut/></button>
        <button className="bar-btn" disabled={size === sizes.length-1} aria-label={ui.increaseTextSizePrompt} onClick={() => setSize(size+1)}><ZoomIn/></button>
      </div>
    </div></div>
  </>;
}
