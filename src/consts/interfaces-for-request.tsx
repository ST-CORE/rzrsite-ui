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

export const getOrderData = (telNumber: string, category: string, model: string) => ({
  Template: 'MakeOrder',
  Variables: {
    Phone: telNumber,
    Category: category,
    Model: model,
  },
});

export const getCallMeData = (telNumber: string) => ({
  Template: 'CallMe',
  Variables: {
    Phone: telNumber,
  },
});
