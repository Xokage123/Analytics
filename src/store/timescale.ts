import { makeAutoObservable } from 'mobx';

class Timescale {
  private _timescale = '';

  constructor() {
    makeAutoObservable(this);
  }

  public set timescale(newValue: string) {
    this._timescale = newValue;
  }

  public get timescale() {
    return this._timescale;
  }
}

export default new Timescale();
