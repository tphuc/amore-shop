import React from 'react';
var defaultContext = {
  type: 'default',
  auto: false,
  disabled: false,
  loading: false
};
export var ButtonDropdownContext = /*#__PURE__*/React.createContext(defaultContext);
export var useButtonDropdown = function useButtonDropdown() {
  return React.useContext(ButtonDropdownContext);
};