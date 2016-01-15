import { expect } from 'chai';
import { inherits } from 'util';
import { Data } from './data';

export function validateId(obj) {
    expect(obj).to.not.be.null;
    expect(obj).to.be.a('object');
    expect(obj._id.toString()).to.be.a('string');
    expect(obj._id.toString()).to.have.length.of.at.least(1);
}
;

export function getData1() {
    var data = Data.create();
    data.number = 1;
    data.source = 'arstechnica';
    data.item = 99;
    data.values = [33, 101, -1];
    data.date = 1434304033241;
    return data;
}
;

export function validateData1(d) {
    expect(d.number).to.be.equal(1);
    expect(d.source).to.be.equal('arstechnica');
    expect(d.item).to.be.equal(99);
    expect(d).to.have.property('values').with.length(3);
    expect(d.date.valueOf()).to.be.equal(1434304033241);
}
;

export function getData2() {
    var data = Data.create();
    data.number = 2;
    data.source = 'reddit';
    data.item = 26;
    data.values = [1, 2, 3, 4];
    data.date = 1434304039234;
    return data;
}
;

export function validateData2(d) {
    expect(d.number).to.be.equal(2);
    expect(d.source).to.be.equal('reddit');
    expect(d.item).to.be.equal(26);
    expect(d).to.have.property('values').with.length(4);
    expect(d.date.valueOf()).to.be.equal(1434304039234);
}
;

// If we expect an error (and check for it in 'catch'), then
// we end up catching the error thrown when calling expect.fail.
// This means we'll actually catch the wrong error and give
// a false positive.
//
// This is my dumb way of getting around that.
export function FailError(expected, actual, message) {
    Error.call(this);
    Error.captureStackTrace(this, FailError);
    this.name = 'FailError';
    this.expected = expected;
    this.actual = actual;
    this.message = message;
}
;
inherits(FailError, Error);

export function fail(expected, actual, message) {
    throw new FailError(expected, actual, message);
}
;

export function expectError(error) {
    if (error instanceof FailError) {
        expect.fail(error.expected, error.actual, error.message);
        return;
    }
    expect(error instanceof Error).to.be.true;
}
;
