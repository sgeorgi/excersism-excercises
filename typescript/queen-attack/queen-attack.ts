type Positions = { white: [number, number] , black: [number, number]}

export class QueenAttack {
  private positions: Positions

  get white() { return this.positions.white}
  get black() { return this.positions.black}

  constructor(positions: Positions) {
    this.positions = positions
    if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) throw  "Queens cannot share the same space"
  }

  canAttack() { return false }
}
