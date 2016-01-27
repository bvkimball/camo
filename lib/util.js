'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deepTraverse = deepTraverse;
function deepTraverse(obj, func) {
    for (var i in obj) {
        func.apply(this, [i, obj[i], obj]);
        if (obj[i] !== null && _typeof(obj[i]) == 'object') {
            deepTraverse(obj[i], func);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7UUFBZ0I7QUFBVCxTQUFTLFlBQVQsQ0FBc0IsR0FBdEIsRUFBMkIsSUFBM0IsRUFBaUM7QUFDcEMsU0FBSyxJQUFJLENBQUosSUFBUyxHQUFkLEVBQW1CO0FBQ2YsYUFBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixDQUFDLENBQUQsRUFBSSxJQUFJLENBQUosQ0FBSixFQUFZLEdBQVosQ0FBakIsRUFEZTtBQUVmLFlBQUksSUFBSSxDQUFKLE1BQVcsSUFBWCxJQUFtQixRQUFRLElBQUksQ0FBSixFQUFSLElBQW1CLFFBQW5CLEVBQTZCO0FBQ2hELHlCQUFhLElBQUksQ0FBSixDQUFiLEVBQXFCLElBQXJCLEVBRGdEO1NBQXBEO0tBRko7Q0FERyIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRlZXBUcmF2ZXJzZShvYmosIGZ1bmMpIHtcbiAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIFtpLCBvYmpbaV0sIG9ial0pO1xuICAgICAgICBpZiAob2JqW2ldICE9PSBudWxsICYmIHR5cGVvZiAob2JqW2ldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZGVlcFRyYXZlcnNlKG9ialtpXSwgZnVuYyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=