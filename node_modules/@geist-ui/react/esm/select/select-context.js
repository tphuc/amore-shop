import React from 'react';
var defaultContext = {
  visible: false,
  disableAll: false
};
export var SelectContext = /*#__PURE__*/React.createContext(defaultContext);
export var useSelectContext = function useSelectContext() {
  return React.useContext(SelectContext);
};