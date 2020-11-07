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
  isShowOnMain: boolean;
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

export interface IParams {
  category?: string | undefined;
  line?: string | undefined;
  product?: string | undefined;
}

export interface IAdvantage {
  id: number;
  title: string;
  weight: number;
  icon: string;
  image: any;
}

export interface IImage {
  id: number;
  description: string;
  weight: number;
  fullPath: string;
  thumbPath: string;
}

export interface IFeature {
  id: number;
  weight: number;
  value: string;
}

export interface IFeatureTable {
  categoryId: number;
  productLineId: number;
  products: IProduct[];
  featuresByType: IFeatureItem[];
}

export interface IFeatureItem {
  featureTypeId: number;
  featureTypeName: string;
  features: IFeature[];
}

export interface IProductLineDocument{
  id: number;
  description: string;
  weight: number;
  fileId: number;
  filePath: string;
}