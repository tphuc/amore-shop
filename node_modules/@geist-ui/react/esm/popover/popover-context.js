import React, { useContext } from 'react';
var defaultContext = {
  disableItemsAutoClose: false,
  onItemClick: function onItemClick() {}
};
export var PopoverContext = /*#__PURE__*/React.createContext(defaultContext);
export var usePopoverContext = function usePopoverContext() {
  return useContext(PopoverContext);
};