export class Transcriptor {
  private validInput: string[] = ['C', 'G', 'A', 'T'];

  toRna(bases: string): string {
    this.validate(bases);
    return Transcriptor.translate(bases).join('');
  }

  private static translate(bases: string): string[] {
    const translations = [];
    for (let i = 0; i < bases.length; i++) {
      const char = bases[i];
      if (char === 'C') {
        translations.push('G');
      } else if (char === 'G') {
        translations.push('C');
      } else if (char === 'A') {
        translations.push('U');
      } else if (char === 'T') {
        translations.push('A');
      }
    }
    return translations
  }

  private validate(bases: string): void {
    for (let i = 0; i < bases.length; i++) {
      if (!this.validInput.includes(bases[i])) {
        throw 'Invalid input DNA.';
      }
    }
  }
}

