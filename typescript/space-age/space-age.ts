class SpaceAge {
  private readonly _seconds: number;

  constructor(seconds: number) {
    this._seconds = seconds;
  }

  get seconds(): number {
    return this._seconds
  }

  onMercury(): number {
    return SpaceAge.round(this._seconds / this.orbitalSeconds('mercury'))
  }

  onVenus(): number {
    return SpaceAge.round(this._seconds / this.orbitalSeconds('venus'))
  }

  onEarth(): number {
    return SpaceAge.round(this._seconds / this.orbitalSeconds('earth'))
  }

  onMars(): number {
    return SpaceAge.round(this._seconds / this.orbitalSeconds('mars'))
  }

  onJupiter(): number {
    return SpaceAge.round(this._seconds / this.orbitalSeconds('jupiter'))
  }

  onSaturn(): number {
    return SpaceAge.round(this._seconds / this.orbitalSeconds('saturn'))
  }

  onUranus(): number {
    return SpaceAge.round(this._seconds / this.orbitalSeconds('uranus'))
  }

  onNeptune(): number {
    return SpaceAge.round(this._seconds / this.orbitalSeconds('neptune'))
  }

  private orbitalSeconds(planet: string): number {
    switch (planet) {
      case 'earth': return 31557600;
      case 'mercury': return 0.2408467 * this.orbitalSeconds('earth');
      case 'venus': return 0.61519726 * this.orbitalSeconds('earth');
      case 'mars': return 1.8808158 * this.orbitalSeconds('earth');
      case 'jupiter': return 11.862615 * this.orbitalSeconds('earth');
      case 'saturn': return 29.447498 * this.orbitalSeconds('earth');
      case 'uranus': return 84.016846 * this.orbitalSeconds('earth');
      case 'neptune': return 164.79132 * this.orbitalSeconds('earth');
      default: return 0
    }
  }

  private static round(number: number): number {
    const multiplier = Math.pow(10, 2);
    return Math.round(number * multiplier) / multiplier
  }

}

export default SpaceAge;
