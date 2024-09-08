import { makeAutoObservable, runInAction } from "mobx";

import { getEvents } from "@/helpers/http.helpers";

import type { Event } from "./types";

class Store {
  public events: ReadonlyArray<Event> = [];

  public constructor() {
    makeAutoObservable(this);
  }

  public async load(): Promise<void> {
    try {
      const events = await getEvents();
      runInAction(() => {
        this.events = events;
      });
    } catch (error) {
      runInAction(() => {
        // TODO: Handle error using HTTP response code.
      });
    }
  }
}

export default Store;
