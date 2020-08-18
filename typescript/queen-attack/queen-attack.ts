type InitialPositions = { white: [number, number], black: [number, number] }
type Square = { row: number, col: number }
type Piece = { row: number, col: number, name: 'W' | 'B' }
type Grid = Square[]

export class QueenAttack {
  private _white: Piece;
  private _black: Piece;
  private _grid: Grid = [];

  get white() {
    return [this._white.row, this._white.col]
  }

  get black() {
    return [this._black.row, this._black.col]
  }

  constructor(positions: InitialPositions) {
    this._white = { row: positions.white[0], col: positions.white[1], name: 'W'};
    this._black = { row: positions.black[0], col: positions.black[1], name: 'W'};
    if (this._white.row === this._black.row && this._white.col === this._black.col) throw  'Queens cannot share the same space'

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        this._grid.push({row: row, col: col})
      }
    }
  }

  toString(): string {
    const output = []
    for (let row = 0; row < 8; row++) {
      const displayRow = []
      for (let col = 0; col < 8; col++) {
        if (this._white.row == row && this._white.col == col) {
          displayRow.push('W')
        } else if (this._black.row == row && this._black.col == col) {
          displayRow.push('B')
        } else {
          displayRow.push('_')
        }

      }
      output[row] = displayRow.join(' ').trim();
    }
    return output.join('\n') + '\n'
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
