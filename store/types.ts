export interface IInitialState {
  token?: string;
  username?: string;
  cartProduct: ICartProduct[];
};

export interface ICartProduct {
  name: any;
  prices: any;
  productId: any;
}

export interface ISetAccessToken {
  token: string;
  username: string;
};

export interface IAddProductToCart {
  name: any;
  prices: any;
  productId: any;
};

export interface IRemoveProductFromСart {
  index: number;
};

export interface ISetUsername {
  username: string;
};