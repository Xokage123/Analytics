import { makeAutoObservable } from 'mobx';

class Pipeline {
  private _pipeline = '';

  constructor() {
    makeAutoObservable(this);
  }

  public set pipeline(newValue: string) {
    this._pipeline = newValue;
  }

  public get pipeline() {
    return this._pipeline;
  }
}

export default new Pipeline();
