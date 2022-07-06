import axios from "./axios-instance";
import { IActivateCode, IBuySubscribe, IChangeSubscribe, ICodeManage, IProducts, IProductSelf, ISignIn, ISignUp, IUpdatePassword, IUpdateUser } from "./types";

const endpoints = {
  signUp: (data: ISignUp) => axios.post<ISignUp>("/users/sign-up", data),
  signIn: (data: ISignIn) => axios.post<ISignIn>("/users/sign-in", data),
  updatePassword: (data: IUpdatePassword) => axios.patch<IUpdatePassword>("/users/update-password", data),
  updateUser: (data: IUpdateUser) => axios.patch<IUpdateUser>("/users", data),
  products: () => axios.get<IProducts[]>("/products"),
  productSelf: () => axios.get<IProductSelf[]>("/subscribe/self"),
  activateCode: (code: IActivateCode) => axios.post<IActivateCode>("/code/activate", code),
  buySubscribe: (data: IBuySubscribe) => axios.post<IBuySubscribe>("/payments/buy", data),
  changeSubscribe: (data: IChangeSubscribe) => axios.post<IChangeSubscribe>("/subscribe/change-product", data),
  codeManage: (data: ICodeManage) => axios.put<ICodeManage>("/code/manage", data)
};

export default endpoints;