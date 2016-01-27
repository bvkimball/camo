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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS2E7OztBQUNULGFBRFMsWUFDVCxDQUFZLE9BQVosRUFBcUI7OEJBRFosY0FDWTs7OzsyRUFEWix5QkFFQyxVQURXOztBQUlqQixlQUFPLGNBQVAsUUFBNEIsU0FBNUIsRUFBdUM7QUFDbkMsd0JBQVksS0FBWjtBQUNBLG1CQUFPLE9BQVA7U0FGSixFQUppQjs7QUFTakIsZUFBTyxjQUFQLFFBQTRCLE1BQTVCLEVBQW9DO0FBQ2hDLHdCQUFZLEtBQVo7QUFDQSxtQkFBTyxNQUFLLFdBQUwsQ0FBaUIsSUFBakI7U0FGWCxFQVRpQjs7QUFjakIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsbUJBQXJCLENBQUosRUFBK0M7QUFDM0Msa0JBQU0saUJBQU4sUUFBOEIsTUFBSyxXQUFMLENBQTlCLENBRDJDO0FBRTNDLHFEQUYyQztTQUEvQzs7QUFLQSxlQUFPLGNBQVAsUUFBNEIsT0FBNUIsRUFBcUM7QUFDakMsd0JBQVksS0FBWjtBQUNBLG1CQUFPLElBQUssS0FBSixDQUFVLE9BQVYsQ0FBRCxDQUFxQixLQUFyQjtTQUZYLEVBbkJpQjs7S0FBckI7O1dBRFM7RUFBcUI7Ozs7OztJQThCckI7OztBQUNULGFBRFMsZUFDVCxDQUFZLE9BQVosRUFBcUI7OEJBRFosaUJBQ1k7O3NFQURaLDRCQUVDLFVBRFc7S0FBckI7O1dBRFM7RUFBd0IiLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEJhc2UgQ3J5cHNpc0Vycm9yIGVycm9yLlxuICpcbiAqIEFkYXB0ZWQgZnJvbSBlczYtZXJyb3IgcGFja2FnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIENyeXBzaXNFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgICAgIC8vIEV4dGVuZGluZyBFcnJvciBpcyB3ZWlyZCBhbmQgZG9lcyBub3QgcHJvcGFnYXRlIGBtZXNzYWdlYFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbmFtZScsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKEVycm9yLmhhc093blByb3BlcnR5KCdjYXB0dXJlU3RhY2tUcmFjZScpKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc3RhY2snLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiAobmV3IEVycm9yKG1lc3NhZ2UpKS5zdGFjayxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKlxuICogRXJyb3IgaW5kaWNhdGluZyBkb2N1bWVudCBkaWRuJ3QgcGFzcyB2YWxpZGF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkVycm9yIGV4dGVuZHMgQ3J5cHNpc0Vycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIH1cbn1cbiJdfQ==