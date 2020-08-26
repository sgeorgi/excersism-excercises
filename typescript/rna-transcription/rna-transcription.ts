export class Transcriptor {
  toRna(bases: string): string {
    const translations = [];
    for (let _i = 0; _i < bases.length; _i++) {
      const char = bases[_i];
      if (char === 'C') {
        translations.push('G');
      } else if (char === 'G') {
        translations.push('C');
      } else if (char === 'A') {
        translations.push('U');
      } else if (char === 'T') {
        translations.push('A');
      } else {
        return '';
      }
    }
    return translations.join('')

  }
}

