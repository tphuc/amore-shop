import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
import React from 'react';
import PaginationItem from './pagination-item';
import { usePaginationContext } from './pagination-context';

var PaginationNext = function PaginationNext(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _usePaginationContext = usePaginationContext(),
      update = _usePaginationContext.update,
      isLast = _usePaginationContext.isLast;

  return /*#__PURE__*/React.createElement(PaginationItem, _extends({
    onClick: function onClick() {
      return update && update('next');
    },
    disabled: isLast
  }, props), children);
};

PaginationNext.displayName = 'GeistPaginationNext';
export default PaginationNext;