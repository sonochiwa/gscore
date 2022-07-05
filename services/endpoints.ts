import axios from "./axios-instance";
import { IBuySubscribe, IChangeSubscribe, ICodeManage, ISignIn, ISignUp, IUpdatePassword, IUpdateUser } from "./types";
import { AxiosResponse } from "axios";

const endpoints = {
  signUp: (data: ISignUp) => axios.post<AxiosResponse<ISignUp>>("/users/sign-up", data),
  signIn: (data: ISignIn) => axios.post<AxiosResponse<ISignIn>>("/users/sign-in", data),
  updatePassword: (data: IUpdatePassword) => axios.patch<AxiosResponse<IUpdatePassword>>("/users/update-password", data),
  updateUser: (data: IUpdateUser) => axios.patch<AxiosResponse<IUpdateUser>>("/users", data),
  products: () => axios.get<AxiosResponse>("/products"),
  productself: () => axios.get("/subscribe/self"),
  activateCode: (code: string) => axios.post<AxiosResponse>("/code/activate", { code }),
  buySubscribe: (data: IBuySubscribe) => axios.post<AxiosResponse<IBuySubscribe>>("/payments/buy", data),
  changeSubscribe: (data: IChangeSubscribe) => axios.post<AxiosResponse<IChangeSubscribe>>("/subscribe/change-product", data),
  codeManage: (data: ICodeManage) => axios.put<AxiosResponse<ICodeManage>>("/code/manage", data),
};

export default endpoints;