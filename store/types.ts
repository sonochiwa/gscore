export interface IInitialState {
  token?: string;
  username?: string;
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