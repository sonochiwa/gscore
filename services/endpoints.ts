import axios from "./axios-instance";
import { IBuySubscribe, IChangeSubscribe, ICodeManage, ISignIn, ISignUp, IUpdatePassword, IUpdateUser } from "./types";

const endpoints = {
  signUp: (data: ISignUp) => axios.post("/users/sign-up", data),
  signIn: (data: ISignIn) => axios.post("/users/sign-in", data),
  updatePassword: (data: IUpdatePassword) => axios.patch("/users/update-password", data),
  updateUser: (data: IUpdateUser) => axios.patch("/users", data),
  products: () => axios.get("/products"),
  productself: () => axios.get("/subscribe/self"),
  activateCode: (code: string) => axios.post("/code/activate", { code }),
  buySubscribe: (data: IBuySubscribe) => axios.post("/payments/buy", data),
  changeSubscribe: (data: IChangeSubscribe) => axios.post("/subscribe/change-product", data),
  codeManage: (data: ICodeManage) => axios.put("/code/manage", data),
};

export default endpoints;