class Draw {
  private values: Array<string>
  private drawnIndex: number
  private slug: string

  constructor(values: Array<string>, drawnIndex: number) {
    this.setValues(values)
    this.setDrawnIndex(drawnIndex)
  }

  public setValues(values: Array<string>): void {
    this.values = values
  }

  public setDrawnIndex(drawnIndex: number): void {
    this.drawnIndex = drawnIndex
    const str = this.values.join(',') + '=>' + drawnIndex
    this.slug = btoa(str)
  }

  public setSlug(slug: string): void {
    const str = atob(slug)
    const split = str.split('=>')
    this.slug = slug
    this.values = split[0].split(',')
    this.drawnIndex = parseInt(split[1], 10)
  }

  public setRandomValue(): void {
    this.drawnIndex = Math.floor(Math.random() * this.values.length)
  }

  public getDrawnValue(): string {
    return this.values[this.drawnIndex]
  }

  public getSlug(): string {
    return this.slug
  }
}

export default Draw
