import axios from "axios";
import { backendUrl } from "../constants";

export const api = axios.create({
   baseURL: backendUrl
})