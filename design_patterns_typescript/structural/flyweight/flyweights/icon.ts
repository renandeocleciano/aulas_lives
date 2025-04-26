export class Icon {
  constructor(private type: string, private iconPath: string) {}

  public draw(x: number, y: number): void {
    console.log(
      `Desenhando '${this.type}' em (${x}, ${y}) usando ícone ${this.iconPath}`
    );
  }
}
