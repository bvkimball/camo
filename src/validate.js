import _ from 'lodash';
import {Connection as DB} from './db';

export function isString(s) {
	return _.isString(s);
};

export function isNumber(n) {
    return _.isNumber(n) && _.isFinite(n) && !isString(n);
};

export function isBoolean(b) {
	return _.isBoolean(b);
};

export function isDate(d) {
	return isNumber(d) || _.isDate(d);
};

export function isBuffer(b) {
	return typeof b === 'object' || b instanceof Buffer;
};

export function isObject(o) {
	return _.isObject(o);
};

export function isArray(a) {
	return _.isArray(a);
};

export function isDocument(m) {
    return m && m.documentClass && m.documentClass() === 'document';
};

export function isEmbeddedDocument(e) {
    return e && e.documentClass && e.documentClass() === 'embedded';
};

export function isReferenceable(r) {
    return isDocument(r) || isNativeId(r);
};

export function isNativeId(n) {
    return DB().isNativeId(n);
};

export function isSupportedType(t) {
    return (t === String || t === Number || t === Boolean ||
            t === Buffer || t === Date || t === Array ||
            isArray(t) || t === Object || t instanceof Object ||
            typeof(t.documentClass) === 'function');
};

export function isType(value, type) {
    if (type === String) {
        return isString(value);
    } else if (type === Number) {
        return isNumber(value);
    } else if (type === Boolean) {
        return isBoolean(value);
    } else if (type === Buffer) {
        return isBuffer(value);
    } else if (type === Date) {
        return isDate(value);
    } else if (type === Array || isArray(type)) {
        return isArray(value);
    } else if (type === Object) {
        return isObject(value);
    } else if (type.documentClass && type.documentClass() === 'document') {
        return isDocument(value) || DB().isNativeId(value);
    } else if (type.documentClass && type.documentClass() === 'embedded') {
        return isEmbeddedDocument(value);
    } else if (type === DB().nativeIdType()) {
        return isNativeId(value);
    } else {
        throw new Error('Unsupported type: ' + type.name);
    }
};

export function isValidType(value, type) {
    // NOTE
    // Maybe look at this: 
    // https://github.com/Automattic/mongoose/tree/master/lib/types

    // TODO: For now, null is okay for all types. May
    // want to specify in schema using 'nullable'?
    if (value === null) return true;

    // Arrays take a bit more work
    if (type === Array || isArray(type)) {
        // Validation for types of the form [String], [Number], etc
        if (isArray(type) && type.length > 1) {
        	throw new Error('Unsupported type. Only one type can be specified in arrays, but multiple found:', + type);
        }

        if (isArray(type) && type.length === 1 && isArray(value)) {
        	var arrayType = type[0];
        	for (var i = 0; i < value.length; i++) {
        		var v = value[i];
        		if (!isType(v, arrayType)) {
        			return false;
        		}
        	}
        }

        return true;
    }

    return isType(value, type);
};

export function isInChoices(choices, choice) {
	if (!choices) {
		return true;
	}
	return choices.indexOf(choice) > -1;
};

export default {
    isString,
    isNumber,
    isBoolean,
    isDate,
    isBuffer,
    isObject,
    isArray,
    isDocument,
    isEmbeddedDocument,
    isReferenceable,
    isNativeId,
    isSupportedType,
    isType,
    isValidType,
    isInChoices
};