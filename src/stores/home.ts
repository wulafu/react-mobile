import { makeAutoObservable, runInAction } from "mobx";
import type { RootStore } from ".";
import { fetchData } from "@/services/home";

class HomeStore {
  rootStore: RootStore;
  count = 0;
  list: any[] = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  async getData() {
    try {
      const res = await fetchData({});
      if (res) {
        runInAction(() => {
          this.list = res.data || [];
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default HomeStore;
