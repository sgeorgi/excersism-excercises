type InitialPositions = { white: Square, black: Square }
type Square = [number, number]
type Grid = Square[]

export class QueenAttack {
  private positions: InitialPositions;
  private grid: Grid = [];

  get white() {
    return this.positions.white
  }

  get black() {
    return this.positions.black
  }

  constructor(positions: InitialPositions) {
    this.positions = positions
    if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) throw  'Queens cannot share the same space'

    for (let row = 1; row < 9; row++) {
      for (let col = 1; col < 9; col++) {
        this.grid.push([row, col])
      }
    }
  }

  toString(): string {
    const output = []
    for (let row = 1; row < 9; row++) {
      let displayRow = ''
      for (let col = 1; col < 9; col++) {
        displayRow += '_'
      }
      output[row] = displayRow.trim();
    }
    return output.join('\n')
    // return [
    //   '_ _ _ _ _ _ _ _',
    //   '_ _ _ _ _ _ _ _',
    //   '_ _ _ _ W _ _ _',
    //   '_ _ _ _ _ _ _ _',
    //   '_ _ _ _ _ _ _ _',
    //   '_ _ _ _ _ _ _ _',
    //   '_ _ _ _ _ _ B _',
    //   '_ _ _ _ _ _ _ _\n'
    // ].join('\n')
  }

  canAttack() {
    return false
  }
}
