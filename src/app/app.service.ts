import { Injectable } from '@angular/core';

export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {

  public _state: InternalStateType = { };

  // my LabSpace

  private d = new Date();
  private dformat = [this.d.getMonth() + 1,
    this.d.getDate(),
    this.d.getFullYear()
  ].join('/') + ' ' + [this.d.getHours(),
    this.d.getMinutes(),
    this.d.getSeconds()
  ].join(':');

  private experiments = [{
      Index: 0,
      Name: 'Name 1',
      createDate: this.dformat,
      lastUpdate: this.dformat,
      Description: 'Description 1'
    },
    {
      Index: 1,
      Name: 'Name 2',
      createDate: this.dformat,
      lastUpdate: this.dformat,
      Description: 'Description 2'
    },
    {
      Index: 2,
      Name: 'Name 3',
      createDate: this.dformat,
      lastUpdate: this.dformat,
      Description: 'Description 3'
    }
  ];

  public get_experiments() {
    return this.experiments;
  }

  // already return a clone of the current state
  public get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  public set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  public get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  public set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  private _clone(object: InternalStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }
}
