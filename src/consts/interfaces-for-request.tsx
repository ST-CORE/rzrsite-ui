export interface ICategory {
  id: number;
  name: string;
  weight: number;
  path: string;
}

export interface IExtendedCategory {
  id: number;
  name: string;
  path: string;
  productLines: IProdLine[];
  weight: number;
}

export interface IProdLine {
  categoryId: number;
  description: string;
  id: number;
  name: string;
  path: string;
  weight: number;
}

export interface IProduct {
  id: number;
  name: string;
  title: string;
  price: number;
  inStock: boolean;
  weight: number;
  path: string;
  primaryImage: any;
  images: any;
  features: any;
}

export class ProductLoading implements IProduct {
  id: number;
  
  name: string;
  
  title: string;
  
  price: number;
  
  inStock: boolean;
  
  weight: number;
  
  path: string;
  
  primaryImage: any;
  
  images: any;
  
  features: any;
  
  constructor(linePath: string) {
    this.id = 0;
    this.name = '';
    this.title = '';
    this.price = 0;
    this.inStock = true;
    this.weight = 0;
    this.path = linePath;
  }
}

export const productLoading = new ProductLoading('');
