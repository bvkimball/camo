'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Base CrypsisError error.
 *
 * Adapted from es6-error package.
 */

var CrypsisError = exports.CrypsisError = function (_Error) {
    _inherits(CrypsisError, _Error);

    function CrypsisError(message) {
        _classCallCheck(this, CrypsisError);

        // Extending Error is weird and does not propagate `message`

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CrypsisError).call(this, message));

        Object.defineProperty(_this, 'message', {
            enumerable: false,
            value: message
        });

        Object.defineProperty(_this, 'name', {
            enumerable: false,
            value: _this.constructor.name
        });

        if (Error.hasOwnProperty('captureStackTrace')) {
            Error.captureStackTrace(_this, _this.constructor);
            return _possibleConstructorReturn(_this);
        }

        Object.defineProperty(_this, 'stack', {
            enumerable: false,
            value: new Error(message).stack
        });
        return _this;
    }

    return CrypsisError;
}(Error);

/*
 * Error indicating document didn't pass validation.
 */


var ValidationError = exports.ValidationError = function (_CrypsisError) {
    _inherits(ValidationError, _CrypsisError);

    function ValidationError(message) {
        _classCallCheck(this, ValidationError);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ValidationError).call(this, message));
    }

    return ValidationError;
}(CrypsisError);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS2EsWSxXQUFBLFk7OztBQUNULDBCQUFZLE9BQVosRUFBcUI7QUFBQTs7OztBQUFBLG9HQUNYLE9BRFc7O0FBSWpCLGVBQU8sY0FBUCxRQUE0QixTQUE1QixFQUF1QztBQUNuQyx3QkFBWSxLQUR1QjtBQUVuQyxtQkFBTztBQUY0QixTQUF2Qzs7QUFLQSxlQUFPLGNBQVAsUUFBNEIsTUFBNUIsRUFBb0M7QUFDaEMsd0JBQVksS0FEb0I7QUFFaEMsbUJBQU8sTUFBSyxXQUFMLENBQWlCO0FBRlEsU0FBcEM7O0FBS0EsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsbUJBQXJCLENBQUosRUFBK0M7QUFDM0Msa0JBQU0saUJBQU4sUUFBOEIsTUFBSyxXQUFuQztBQUNBO0FBQ0g7O0FBRUQsZUFBTyxjQUFQLFFBQTRCLE9BQTVCLEVBQXFDO0FBQ2pDLHdCQUFZLEtBRHFCO0FBRWpDLG1CQUFRLElBQUksS0FBSixDQUFVLE9BQVYsQ0FBRCxDQUFxQjtBQUZLLFNBQXJDO0FBbkJpQjtBQXVCcEI7OztFQXhCNkIsSzs7Ozs7OztJQThCckIsZSxXQUFBLGU7OztBQUNULDZCQUFZLE9BQVosRUFBcUI7QUFBQTs7QUFBQSxrR0FDWCxPQURXO0FBRXBCOzs7RUFIZ0MsWSIsImZpbGUiOiJlcnJvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQmFzZSBDcnlwc2lzRXJyb3IgZXJyb3IuXG4gKlxuICogQWRhcHRlZCBmcm9tIGVzNi1lcnJvciBwYWNrYWdlLlxuICovXG5leHBvcnQgY2xhc3MgQ3J5cHNpc0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG5cbiAgICAgICAgLy8gRXh0ZW5kaW5nIEVycm9yIGlzIHdlaXJkIGFuZCBkb2VzIG5vdCBwcm9wYWdhdGUgYG1lc3NhZ2VgXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICduYW1lJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoRXJyb3IuaGFzT3duUHJvcGVydHkoJ2NhcHR1cmVTdGFja1RyYWNlJykpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzdGFjaycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IChuZXcgRXJyb3IobWVzc2FnZSkpLnN0YWNrLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qXG4gKiBFcnJvciBpbmRpY2F0aW5nIGRvY3VtZW50IGRpZG4ndCBwYXNzIHZhbGlkYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBDcnlwc2lzRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgfVxufVxuIl19