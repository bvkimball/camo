'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.deepTraverse = deepTraverse;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deepTraverse(obj, func) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _lodash2.default.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            func.apply(this, [i, obj[i], obj]);
            if (obj[i] !== null && _typeof(obj[i]) == 'object') {
                deepTraverse(obj[i], func);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBRWdCLFksR0FBQSxZOztBQUZoQjs7Ozs7O0FBRU8sU0FBUyxZQUFULENBQXNCLEdBQXRCLEVBQTJCLElBQTNCLEVBQWlDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3BDLDZCQUFjLGlCQUFFLElBQUYsQ0FBTyxHQUFQLENBQWQsOEhBQTJCO0FBQUEsZ0JBQWxCLENBQWtCOztBQUN2QixpQkFBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixDQUFDLENBQUQsRUFBSSxJQUFJLENBQUosQ0FBSixFQUFZLEdBQVosQ0FBakI7QUFDQSxnQkFBSSxJQUFJLENBQUosTUFBVyxJQUFYLElBQW1CLFFBQVEsSUFBSSxDQUFKLENBQVIsS0FBbUIsUUFBMUMsRUFBb0Q7QUFDaEQsNkJBQWEsSUFBSSxDQUFKLENBQWIsRUFBcUIsSUFBckI7QUFDSDtBQUNKO0FBTm1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPdkMiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwVHJhdmVyc2Uob2JqLCBmdW5jKSB7XG4gICAgZm9yIChsZXQgaSBvZiBfLmtleXMob2JqKSkge1xuICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIFtpLCBvYmpbaV0sIG9ial0pO1xuICAgICAgICBpZiAob2JqW2ldICE9PSBudWxsICYmIHR5cGVvZiAob2JqW2ldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZGVlcFRyYXZlcnNlKG9ialtpXSwgZnVuYyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=