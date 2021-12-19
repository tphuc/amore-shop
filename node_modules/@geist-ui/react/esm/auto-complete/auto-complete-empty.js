import React from 'react';
import AutoCompleteSearch from './auto-complete-searching';
var defaultProps = {
  hidden: false,
  className: ''
};

var AutoCompleteEmpty = function AutoCompleteEmpty(_ref) {
  var children = _ref.children,
      hidden = _ref.hidden,
      className = _ref.className;
  if (hidden) return null;
  return /*#__PURE__*/React.createElement(AutoCompleteSearch, {
    className: className
  }, children);
};

AutoCompleteEmpty.defaultProps = defaultProps;
AutoCompleteEmpty.displayName = 'GeistAutoCompleteEmpty';
export default AutoCompleteEmpty;