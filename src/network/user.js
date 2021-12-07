import axios from "@/network";

// login
export function userLogin(data) {
  return axios.post('/user/login', data);
}