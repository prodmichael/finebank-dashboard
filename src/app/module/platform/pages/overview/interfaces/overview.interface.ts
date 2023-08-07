export interface Transaction {
  id?: string;
  image?: string;
  name: string;
  desc: string;
  price: number;
  date: string;
}

export interface Breakdown {
  id?: string;
  image?: string;
  name: string;
  price: number;
  condition: number;
}
