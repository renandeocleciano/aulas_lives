import { Order, Product } from "./order";

export class OrderBuilder {
  private customer!: string;
  private products: Product[] = [];
  private paymentMethod: string = "Não definido";
  private discount: number = 0;
  private shipping: number = 0;
  private notes?: string;

  public setCustomer(name: string): this {
    this.customer = name;
    return this;
  }

  public addProduct(name: string, quantity: number): this {
    this.products.push({ name, quantity });
    return this;
  }

  public setPayment(method: string): this {
    this.paymentMethod = method;
    return this;
  }

  public applyDiscount(percent: number): this {
    this.discount = percent;
    return this;
  }

  public setShipping(value: number): this {
    this.shipping = value;
    return this;
  }

  public setNotes(notes: string): this {
    this.notes = notes;
    return this;
  }

  public build(): Order {
    return new Order(
      this.customer,
      this.products,
      this.paymentMethod,
      this.discount,
      this.shipping,
      this.notes
    );
  }
}
