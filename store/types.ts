export interface IInitialState {
  token?: string;
  username: string;
  products: IProducts[];
};

export interface IProducts {
  name: string;
  productId: number;
  prices: IPrices[];
};

export interface ISubscribe {
  id: number;
  code: string;
  status: string;
  origin: string;
};

export interface IPrices {
  id: number;
  isActive: boolean;
  productId: number;
  price: string;
  product?: object;
};

export interface ISetAccessToken {
  token: string;
  username: string;
};

export interface IRemoveProductFromСart {
  index: number;
};

export interface ISetUsername {
  username: string;
};