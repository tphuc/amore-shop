import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
import React from 'react';
import PaginationItem from './pagination-item';
import { usePaginationContext } from './pagination-context';

var PaginationPrevious = function PaginationPrevious(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _usePaginationContext = usePaginationContext(),
      update = _usePaginationContext.update,
      isFirst = _usePaginationContext.isFirst;

  return /*#__PURE__*/React.createElement(PaginationItem, _extends({
    onClick: function onClick() {
      return update && update('prev');
    },
    disabled: isFirst
  }, props), children);
};

PaginationPrevious.displayName = 'GeistPaginationPrevious';
export default PaginationPrevious;