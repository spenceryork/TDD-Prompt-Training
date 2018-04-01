const { getAll } = require("../models/Class");
const { assert: { equal, isFunction, isObject, isArray } } = require("chai");

describe('getAll', () => {
    it('should be a function', () => {
        isFunction(getAll);
    });
    it('should get an array of classes', () => {
        return getAll()
        .then( (classesReturned) => {
            isArray(classesReturned);
        }); 
    });
});