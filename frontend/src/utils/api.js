import { backendUrl } from "../constants";
import axios from "axios";

export const api = axios.create({
   baseURL: backendUrl
})

export default api