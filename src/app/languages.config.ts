import { Language } from "./types/language";

export const languages: Language[] = [
  {
    name: 'French',
    imageName: 'fr-flag.png',
  },
  {
    name: 'Spanish',
    imageName: 'sp-flag.png',
  },
  {
    name: 'Japanese',
    imageName: 'jpn-flag.png',
  }
] as const;