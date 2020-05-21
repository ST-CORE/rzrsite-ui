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
