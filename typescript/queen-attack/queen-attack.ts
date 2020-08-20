type InitialPositions = { white: [number, number], black: [number, number] }
type Square = { row: number, col: number }
type Grid = Square[]
const tuplesEqual = <T, U>(x: [T, U], y: [T, U]) => x.every((xVal, i) => xVal === y[i]);

class Piece {
  private _row: number;
  private _col: number;
  private _name: string

  constructor(row: number, col: number, name: 'W' | 'B') {
    this._row = row;
    this._col = col;
    this._name = name;
  }

  get position(): [number, number] {
    return [this._row, this._col]
  }
 }


export class QueenAttack {
  private _white: Piece;
  private _black: Piece;
  private _grid: Grid = [];



  constructor(positions: InitialPositions) {
    this._white = new Piece(positions.white[0], positions.white[1], 'W');
    this._black = new Piece(positions.black[0], positions.black[1], 'B');
    if (tuplesEqual(this._white.position, this._black.position)) throw  'Queens cannot share the same space'

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        this._grid.push({row: row, col: col})
      }
    }
  }

  get white() {
    return this._white.position
  }

  get black() {
    return this._black.position
  }

  toString(): string {
    const output = []
    for (let row = 0; row < 8; row++) {
      const displayRow = []
      for (let col = 0; col < 8; col++) {
        if (this._white.position[0] === row && this._white.position[1] === col) {
          displayRow.push('W')
        } else if (this._black.position[0] === row && this._black.position[1] === col) {
          displayRow.push('B')
        } else {
          displayRow.push('_')
        }

      }
      output[row] = displayRow.join(' ').trim();
    }
    return output.join('\n') + '\n'
  }

  canAttack() {
    return false
  }
}
