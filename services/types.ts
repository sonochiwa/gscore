export interface ISignUp {
  token: string;
  email: string;
  username: string;
  password: string;
};

export interface ISignIn {
  email: string;
  password: string;
  token: string;
  user: IUser;
};

export interface IUser {
  username: string;
};

export interface IUpdatePassword {
  currentPassword: string;
  newPassword: string;
};

export interface IUpdateUser {
  email: string;
  username: string;
};

export interface IActivateCode {
  code: string;
  id: number;
  status: string;
  origin: string;
};

export interface IBuySubscribe {
  priceId: number;
};

export interface IChangeSubscribe {
  productId: number;
  subscribeId: number;
};

export interface ICodeManage {
  codesIds: number[];
  subscribeId: number;
};

export interface IProductSelf {
  id: number;
  userId: number;
  user: object;
  productId: number;
  product: IProducts;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  status: string;
  codes: IActivateCode[];
};

export interface IProducts {
  name: string;
  productId: number;
  prices: IPrices[];
};

export interface IPrices {
  id: number;
  isActive: boolean;
  productId: number;
  product?: object;
  price: string;
};