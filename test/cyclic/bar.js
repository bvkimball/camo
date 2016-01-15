"use strict";

import { Document } from '../../src/index';
import { Foo } from './foo';
//var Foo = require('./foo');

export class Bar extends Document {
    constructor() {
        super();

        this.foo = Foo;
        this.num = Number;
    }
}
