export interface IInitialState {
  token: string | undefined;
  username: string;
  email: string;
  cartProducts: any[];
};

export interface ICartProducts {
};

export interface ISetAccessToken {
  token: string;
  username: string;
  email: string;
};

export interface IAddProductToCart {
};

export interface IRemoveProductFromСart {
  index: number;
};

export interface ISetUsername {
  username: string;
};

export interface ISetEmail {
  email: string;
};