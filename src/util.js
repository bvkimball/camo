import _ from 'lodash';

export function deepTraverse(obj, func) {
    for (let i of _.keys(obj)) {
        func.apply(this, [i, obj[i], obj]);
        if (obj[i] !== null && typeof (obj[i]) == 'object') {
            deepTraverse(obj[i], func);
        }
    }
}
