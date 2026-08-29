export interface ElementData {
  z: number;
  sym: string;
  name: string;
  mass: number;
  neutrons: number;
  category: string;
  period: number;
  group: number;
  block: 's' | 'p' | 'd' | 'f';
}

export type AtomicModelType = 'planar' | 'spherical' | 'quantum';
export type ThemeType = 'dark' | 'light' | 'deepspace';

export interface StorageSettings {
  defaultElementZ?: number;
  defaultModel?: AtomicModelType;
  defaultTheme?: ThemeType;
  simSpeed?: number;
}