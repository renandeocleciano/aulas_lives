export class Contract {
  constructor(
    private client: string,
    private service: string,
    private value: number,
    private status: string = "Ativo",
    private signedAt: Date = new Date()
  ) {}

  public clone(): Contract {
    return new Contract(
      this.client,
      this.service,
      this.value,
      this.status,
      this.signedAt
    );
  }

  public setClient(name: string): void {
    this.client = name;
  }

  public setValue(newValue: number): void {
    this.value = newValue;
  }

  public cancel(): void {
    this.status = "Cancelado";
  }

  public print(): void {
    console.log("Contrato:");
    console.log({
      cliente: this.client,
      serviço: this.service,
      valor: this.value,
      status: this.status,
      dataAssinatura: this.signedAt.toISOString(),
    });
  }
}
