import {Entity, model, property} from '@loopback/repository';

@model()
export class Ping extends Entity {
  @property({
    type: 'string',
  })
  id: string;

  @property({
    type: 'string',
  })
  name?: string;


  constructor(data?: Partial<Ping>) {
    super(data);
  }
}

export interface PingRelations {
  // describe navigational properties here
}

export type PingWithRelations = Ping & PingRelations;
