export interface Product {
  name: string;
  quantity: number;
}

export class Order {
  constructor(
    public customer: string,
    public products: Product[],
    public paymentMethod: string,
    public discount: number,
    public shipping: number,
    public notes?: string
  ) {}
}
