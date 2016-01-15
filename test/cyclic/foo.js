"use strict";

import { Document } from '../../src/index';
import { Bar } from './bar';

export class Foo extends Document {
  constructor() {
    super();

    this.bar = Bar;
    this.num = Number;
  }
}
