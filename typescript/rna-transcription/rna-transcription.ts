export class Transcriptor {
  toRna(bases: string): string {
   return bases.split('')
      .map(nucleotide => {
        switch (nucleotide) {
          case 'G': return 'C';
          case 'C': return 'G';
          case 'T': return 'A';
          case 'A': return 'U';
          default: throw new Error('Invalid input DNA.');
        }
      })
      .join('');
  }
}

