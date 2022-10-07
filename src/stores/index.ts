import { createContext, useContext } from "react";
import HomeStore from "./home";

export class RootStore {
  homeStore;
  constructor() {
    this.homeStore = new HomeStore(this);
  }
}

export const StoreContext = createContext<RootStore>(new RootStore());
export const useStore = () => useContext(StoreContext);
