'use strict';

/*
 * Base Camo error.
 *
 * Adapted from es6-error package.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CamoError = exports.CamoError = function (_Error) {
  _inherits(CamoError, _Error);

  function CamoError(message) {
    _classCallCheck(this, CamoError);

    // Extending Error is weird and does not propagate `message`

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CamoError).call(this, message));

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

  return CamoError;
}(Error);

/*
 * Error indicating document didn't pass validation.
 */

var ValidationError = exports.ValidationError = function (_CamoError) {
  _inherits(ValidationError, _CamoError);

  function ValidationError(message) {
    _classCallCheck(this, ValidationError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ValidationError).call(this, message));
  }

  return ValidationError;
}(CamoError);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7Ozs7OztBQUFDOzs7Ozs7Ozs7OztJQU9BLFNBQVMsV0FBVCxTQUFTO1lBQVQsU0FBUzs7QUFDcEIsV0FEVyxTQUFTLENBQ1IsT0FBTyxFQUFFOzBCQURWLFNBQVM7Ozs7dUVBQVQsU0FBUyxhQUVaLE9BQU87O0FBR2IsVUFBTSxDQUFDLGNBQWMsUUFBTyxTQUFTLEVBQUU7QUFDckMsZ0JBQVUsRUFBRSxLQUFLO0FBQ2pCLFdBQUssRUFBRSxPQUFPO0tBQ2YsQ0FBQyxDQUFDOztBQUVILFVBQU0sQ0FBQyxjQUFjLFFBQU8sTUFBTSxFQUFFO0FBQ2xDLGdCQUFVLEVBQUUsS0FBSztBQUNqQixXQUFLLEVBQUUsTUFBSyxXQUFXLENBQUMsSUFBSTtLQUM3QixDQUFDLENBQUM7O0FBRUgsUUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDN0MsV0FBSyxDQUFDLGlCQUFpQixRQUFPLE1BQUssV0FBVyxDQUFDLENBQUM7QUFDaEQsK0NBQU87S0FDUjs7QUFFRCxVQUFNLENBQUMsY0FBYyxRQUFPLE9BQU8sRUFBRTtBQUNuQyxnQkFBVSxFQUFFLEtBQUs7QUFDakIsV0FBSyxFQUFFLEFBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUUsS0FBSztLQUNsQyxDQUFDLENBQUM7O0dBQ0o7O1NBeEJVLFNBQVM7RUFBUyxLQUFLOzs7Ozs7SUE4QnZCLGVBQWUsV0FBZixlQUFlO1lBQWYsZUFBZTs7QUFDMUIsV0FEVyxlQUFlLENBQ2QsT0FBTyxFQUFFOzBCQURWLGVBQWU7O2tFQUFmLGVBQWUsYUFFbEIsT0FBTztHQUNkOztTQUhVLGVBQWU7RUFBUyxTQUFTIiwiZmlsZSI6ImVycm9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLypcbiAqIEJhc2UgQ2FtbyBlcnJvci5cbiAqXG4gKiBBZGFwdGVkIGZyb20gZXM2LWVycm9yIHBhY2thZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBDYW1vRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIC8vIEV4dGVuZGluZyBFcnJvciBpcyB3ZWlyZCBhbmQgZG9lcyBub3QgcHJvcGFnYXRlIGBtZXNzYWdlYFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVzc2FnZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IG1lc3NhZ2VcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICB9KTtcblxuICAgIGlmIChFcnJvci5oYXNPd25Qcm9wZXJ0eSgnY2FwdHVyZVN0YWNrVHJhY2UnKSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzdGFjaycsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IChuZXcgRXJyb3IobWVzc2FnZSkpLnN0YWNrLFxuICAgIH0pO1xuICB9XG59XG5cbi8qXG4gKiBFcnJvciBpbmRpY2F0aW5nIGRvY3VtZW50IGRpZG4ndCBwYXNzIHZhbGlkYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBDYW1vRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==