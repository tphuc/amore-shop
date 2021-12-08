import React from 'react';
var defaultContext = {
  visible: false
};
export var AutoCompleteContext = /*#__PURE__*/React.createContext(defaultContext);
export var useAutoCompleteContext = function useAutoCompleteContext() {
  return React.useContext(AutoCompleteContext);
};