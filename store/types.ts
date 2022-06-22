export interface IInitialState {
  token: string | undefined;
  username: string;
  email: string;
  cartProducts: ICartProducts[];
};

export interface ICartProducts {
  name: string;
  prices: IPrice[];
}

interface IPrice {
  price: string;
}

export interface ISetAccessToken {
  token: string;
  username: string;
  email: string;
};

export interface IAddProductToCart {
  prices: IPrice[];
  name: string;
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