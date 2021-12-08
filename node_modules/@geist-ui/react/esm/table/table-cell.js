import React from 'react';

var TableCell = function TableCell(_ref) {
  var columns = _ref.columns,
      row = _ref.row,
      rowIndex = _ref.rowIndex,
      emptyText = _ref.emptyText,
      onCellClick = _ref.onCellClick;

  /* eslint-disable react/jsx-no-useless-fragment */
  return /*#__PURE__*/React.createElement(React.Fragment, null, columns.map(function (column, index) {
    var currentRowValue = row[column.prop];
    var cellValue = currentRowValue || emptyText;
    var shouldBeRenderElement = column.renderHandler(currentRowValue, row, rowIndex);
    return /*#__PURE__*/React.createElement("td", {
      key: "row-td-".concat(index, "-").concat(column.prop),
      onClick: function onClick() {
        return onCellClick && onCellClick(currentRowValue, rowIndex, index);
      },
      className: column.className
    }, /*#__PURE__*/React.createElement("div", {
      className: "cell"
    }, shouldBeRenderElement ? shouldBeRenderElement : cellValue));
  }));
  /* eslint-enable */
};

export default TableCell;