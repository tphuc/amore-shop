export var defaultTooltipPosition = {
  top: '-1000px',
  left: '-1000px',
  transform: 'none'
};
export var getPosition = function getPosition(placement, rect, offset) {
  var positions = {
    top: {
      top: "".concat(rect.top - offset, "px"),
      left: "".concat(rect.left + rect.width / 2, "px"),
      transform: 'translate(-50%, -100%)'
    },
    topStart: {
      top: "".concat(rect.top - offset, "px"),
      left: "".concat(rect.left, "px"),
      transform: 'translate(0, -100%)'
    },
    topEnd: {
      top: "".concat(rect.top - offset, "px"),
      left: "".concat(rect.left + rect.width, "px"),
      transform: 'translate(-100%, -100%)'
    },
    bottom: {
      top: "".concat(rect.bottom + offset, "px"),
      left: "".concat(rect.left + rect.width / 2, "px"),
      transform: 'translate(-50%, 0)'
    },
    bottomStart: {
      top: "".concat(rect.bottom + offset, "px"),
      left: "".concat(rect.left, "px"),
      transform: 'translate(0, 0)'
    },
    bottomEnd: {
      top: "".concat(rect.bottom + offset, "px"),
      left: "".concat(rect.left + rect.width, "px"),
      transform: 'translate(-100%, 0)'
    },
    left: {
      top: "".concat(rect.top + rect.height / 2, "px"),
      left: "".concat(rect.left - offset, "px"),
      transform: 'translate(-100%, -50%)'
    },
    leftStart: {
      top: "".concat(rect.top, "px"),
      left: "".concat(rect.left - offset, "px"),
      transform: 'translate(-100%, 0)'
    },
    leftEnd: {
      top: "".concat(rect.top + rect.height, "px"),
      left: "".concat(rect.left - offset, "px"),
      transform: 'translate(-100%, -100%)'
    },
    right: {
      top: "".concat(rect.top + rect.height / 2, "px"),
      left: "".concat(rect.right + offset, "px"),
      transform: 'translate(0, -50%)'
    },
    rightStart: {
      top: "".concat(rect.top, "px"),
      left: "".concat(rect.right + offset, "px"),
      transform: 'translate(0, 0)'
    },
    rightEnd: {
      top: "".concat(rect.top + rect.height, "px"),
      left: "".concat(rect.right + offset, "px"),
      transform: 'translate(0, -100%)'
    }
  };
  return positions[placement] || positions.top;
};
export var getIconPosition = function getIconPosition(placement, offsetX, offsetY) {
  var offsetAbsolute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '3px';
  var positions = {
    top: {
      top: 'auto',
      right: 'auto',
      left: '50%',
      bottom: "".concat(offsetAbsolute),
      transform: 'translate(-50%, 100%) rotate(-90deg)'
    },
    topStart: {
      top: 'auto',
      right: 'auto',
      left: "".concat(offsetX),
      bottom: "".concat(offsetAbsolute),
      transform: 'translate(0, 100%) rotate(-90deg)'
    },
    topEnd: {
      top: 'auto',
      right: "".concat(offsetX),
      left: 'auto',
      bottom: "".concat(offsetAbsolute),
      transform: 'translate(0, 100%) rotate(-90deg)'
    },
    bottom: {
      top: "".concat(offsetAbsolute),
      right: 'auto',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, -100%) rotate(90deg)'
    },
    bottomStart: {
      top: "".concat(offsetAbsolute),
      right: 'auto',
      left: "".concat(offsetX),
      bottom: 'auto',
      transform: 'translate(0, -100%) rotate(90deg)'
    },
    bottomEnd: {
      top: "".concat(offsetAbsolute),
      right: "".concat(offsetX),
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(0, -100%) rotate(90deg)'
    },
    left: {
      top: '50%',
      right: '0',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(100%, -50%) rotate(180deg)'
    },
    leftStart: {
      top: "".concat(offsetY),
      right: '0',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(100%, -50%) rotate(180deg)'
    },
    leftEnd: {
      top: 'auto',
      right: '0',
      left: 'auto',
      bottom: "".concat(offsetY),
      transform: 'translate(100%, 50%) rotate(180deg)'
    },
    right: {
      top: '50%',
      right: 'auto',
      left: '0',
      bottom: 'auto',
      transform: 'translate(-100%, -50%) rotate(0deg)'
    },
    rightStart: {
      top: "".concat(offsetY),
      right: 'auto',
      left: '0',
      bottom: 'auto',
      transform: 'translate(-100%, -50%) rotate(0deg)'
    },
    rightEnd: {
      top: 'auto',
      right: 'auto',
      left: '0',
      bottom: "".concat(offsetY),
      transform: 'translate(-100%, 50%) rotate(0deg)'
    }
  };
  return positions[placement] || positions.top;
};