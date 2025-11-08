import { createContext, useContext } from "react";
export const shopContext = createContext();
export const useShopContext = ()=> useContext(shopContext);
