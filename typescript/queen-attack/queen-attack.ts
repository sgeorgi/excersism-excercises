type InitialPositions = { white: Square, black: Square }
type Square = [number, number]
type Grid = Square[]

export class QueenAttack {
  private positions: InitialPositions;
  private grid: Grid;

  get white() {
    return this.positions.white
  }

  get black() {
    return this.positions.black
  }

  constructor(positions: InitialPositions) {
    this.positions = positions
    if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) throw  'Queens cannot share the same space'

    // initialize Grid
  }

  toString(): string {
    return [
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ W _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ B _',
      '_ _ _ _ _ _ _ _\n'
    ].join('\n')
  }

  canAttack() {
    return false
  }
}
