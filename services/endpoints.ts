import axios from "./axios-instance";
import { IBuySubscribe, IChangeSubscribe, ICodeManage, ISignIn, ISignUp, IUpdatePassword, IUpdateUser } from "./types";

const endpoints = {
  signUp: (data: ISignUp) => axios.post<string>("/users/sign-up", data),
  signIn: (data: ISignIn) => axios.post<string>("/users/sign-in", data),
  updatePassword: (data: IUpdatePassword) => axios.patch<string>("/users/update-password", data),
  updateUser: (data: IUpdateUser) => axios.patch<string>("/users", data),
  products: () => axios.get("/products"),
  productself: () => axios.get("/subscribe/self"),
  activateCode: (code: string) => axios.post<string>("/code/activate", { code }),
  buySubscribe: (data: IBuySubscribe) => axios.post<string>("/payments/buy", data),
  changeSubscribe: (data: IChangeSubscribe) => axios.post<string>("/subscribe/change-product", data),
  codeManage: (data: ICodeManage) => axios.put<string>("/code/manage", data),
};

export default endpoints;