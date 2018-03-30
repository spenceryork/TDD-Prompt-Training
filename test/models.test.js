const { getAll } = require("../models/Class");
const { assert: { equal, isFunction, isObject, isArray } } = require("chai");

describe('getAll', () => {
    it('should be a function', () => {
        isFunction(getAll);
    });
    it('should equal an object', () => {
        equal(getAll);
    })
});