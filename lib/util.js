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
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7UUFBZ0IsWUFBWSxHQUFaLFlBQVk7QUFBckIsU0FBUyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUN0QyxPQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtBQUNqQixRQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuQyxRQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO0FBQ2xELGtCQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVCO0dBQ0Y7Q0FDRjtBQUNELENBQUMiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkZWVwVHJhdmVyc2Uob2JqLCBmdW5jKSB7XG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgZnVuYy5hcHBseSh0aGlzLCBbaSwgb2JqW2ldLCBvYmpdKTtcbiAgICBpZiAob2JqW2ldICE9PSBudWxsICYmIHR5cGVvZiAob2JqW2ldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgZGVlcFRyYXZlcnNlKG9ialtpXSwgZnVuYyk7XG4gICAgfVxuICB9XG59XG47XG4iXX0=