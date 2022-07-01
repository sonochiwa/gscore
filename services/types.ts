export interface ISignUp {
  email: string;
  username: string;
  password: string;
};

export interface ISignIn {
  email: string;
  password: string;
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
};

export interface IBuySubscribe {
  priceId: number;
};

export interface IChangeSubscribe {
  productId: number;
  subscribeId: number;
};

export interface ICodeManage {
  codesIds: [];
  subscribeId: number;
};


