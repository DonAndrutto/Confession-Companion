import { useId, useMemo, useState } from 'react';
import { TEXTS } from './lib/confession-constants';
import type { Language, TextKey } from './lib/types';
import painting from './assets/35-buddhas.jpg';

function BuddhaName({ name, sanskrit }: { name: string; sanskrit: string }) {
  const [visible, setVisible] = useState(false);
  const id = useId();
  return <span className="name-wrap" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
    <button type="button" className="buddha-name" aria-describedby={visible ? id : undefined}
      onFocus={() => setVisible(true)} onBlur={() => setVisible(false)} onClick={() => setVisible(true)}
      onKeyDown={e => { if (e.key === 'Escape') setVisible(false); }}>{name}</button>
    {visible && <span role="tooltip" id={id}>{sanskrit}</span>}
  </span>;
}

export default function Reading({ textKey, language, alternate, size }: {
  textKey: TextKey; language: Language; alternate: boolean; size: number;
}) {
  const content = TEXTS[textKey][language];
  const tibetan = TEXTS[textKey].ti;
  const paragraphs = alternate && content.paragraphs_alt ? content.paragraphs_alt : content.paragraphs;
  const names = useMemo(() => {
    const keys = Object.keys(content.buddhas ?? {}).sort((a,b) => b.length - a.length);
    const escaped = keys.map(key => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    return escaped.length ? new RegExp('(' + escaped.join('|') + ')', 'g') : null;
  }, [content]);
  const tibetanOnly = language === 'ti';
  return <article aria-labelledby="reading-title" style={{ fontSize: size }}>
    <h2 id="reading-title" lang={tibetanOnly ? 'bo' : language}>{content.title}</h2>
    {content.imageUrl && textKey === 'bodhisattva' &&
      <img className="painting" src={painting} alt={content.imageAlt || 'Confession image'} width="1600" height="2280" />}
    {paragraphs.map((paragraph,index) => {
      const phonetic = language === 'en' ? content.transliteration_en?.[index] ?? content.transliteration_pl?.[index] : content.transliteration_pl?.[index];
      return <div className="paragraph-group" key={index}>
        {!tibetanOnly && !alternate && tibetan.paragraphs[index] && <div lang="bo">{tibetan.paragraphs[index]}</div>}
        {!tibetanOnly && !alternate && phonetic?.trim() && <div className="phonetic">{phonetic}</div>}
        {paragraph && <div className={alternate ? 'font-body alternate' : tibetanOnly ? '' : 'font-body'} lang={tibetanOnly ? 'bo' : language}>
          {tibetanOnly || !names ? paragraph : paragraph.split(names).map((part,i) => {
            const sanskrit = content.buddhas?.[part];
            return sanskrit ? <BuddhaName key={i} name={part} sanskrit={sanskrit} /> : part;
          })}
        </div>}
      </div>;
    })}
  </article>;
}
