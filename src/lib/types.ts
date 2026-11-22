

export interface Translatable {
  pl: string;
  en: string;
  ti?: string;
}

export interface DownfallConfession {
  tibetan: string;
  translation: Translatable;
  phonetic_pl?: string; 
  phonetic_en?: string; 
}

export interface Downfall {
  id: number;
  tibetan: string;
  translation: Translatable;
  confession: DownfallConfession;
  phonetic_pl?: string; 
  phonetic_en?: string; 
}

export type BodhisattvaTextItemType = 'title' | 'heading' | 'prose-item' | 'footer' | 'image';

export interface BodhisattvaTextItem {
  type: BodhisattvaTextItemType;
  // For text items
  content?: Partial<Translatable>;
  center?: boolean;
  tibetan?: string;
  phonetic_pl?: string; 
  phonetic_en?: string; 
  translation?: Translatable;
  sanskrit?: string;
  isBuddhaName?: boolean;
  // For image items
  imageUrl?: string;
  altText?: Translatable;
  dataAiHint?: string;
}


export interface TextContent {
  title: string;
  imageUrl?: string;
  imageAlt?: string;
  imageDataAiHint?: string;
  paragraphs: string[];
  paragraphs_alt?: string[];
  buddhas?: { [nameInText: string]: string };
  transliteration_pl?: string[];
  transliteration_en?: string[];
}

export type Language = 'pl' | 'en' | 'ti';
export type TextKey = 'vajrayana' | 'bodhisattva' | 'ultimateConfession';
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
export type AutoscrollSpeed = 1 | 2 | 3 | 4 | 5; // 1: very slow, 2: slow, 3: medium, 4: fast, 5: very fast

export interface UltimateConfessionTitleItem {
  type: 'title';
  pl_title: string;
  pl_title_alt?: string;
  en_title: string;
  ti_title: string;
}

export interface UltimateConfessionContentLine {
  type: 'line';
  ti: string;
  pl_phonetic?: string;
  pl_translation?: string;
  pl_translation_alt?: string;
  en_phonetic?: string;
  en_translation?: string;
}

export type UltimateConfessionRawItem = UltimateConfessionTitleItem | UltimateConfessionContentLine;
