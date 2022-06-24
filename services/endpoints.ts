import axios from "./axios-instance";

const endpoints = {
  signUp: (data: object) => axios.post("/users/sign-up", data),
  signIn: (data: object) => axios.post("/users/sign-in", data),
  updatePassword: (data: object) => axios.patch("/users/update-password", data),
  updateUser: (data: object) => axios.patch("/users", data),
  products: () => axios.get("/products"),
  subscribeSelf: () => axios.get("/subscribe/self"),
  activateCode: (code: string) => axios.post("/code/activate", { code }),
  buyProduct: (data: object) => axios.post("/payments/buy", data),
};

export default endpoints;