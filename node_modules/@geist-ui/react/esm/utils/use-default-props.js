var useDefaultProps = function useDefaultProps(props, defaultProps) {
  var nextProps = {};
  var propsKeys = Object.keys(props || {});
  var defaultKeys = Object.keys(defaultProps || {});

  for (var _i = 0, _propsKeys = propsKeys; _i < _propsKeys.length; _i++) {
    var propsName = _propsKeys[_i];
    nextProps[propsName] = props[propsName];
  }

  for (var _i2 = 0, _defaultKeys = defaultKeys; _i2 < _defaultKeys.length; _i2++) {
    var defaultName = _defaultKeys[_i2];

    if (props[defaultName] === undefined) {
      nextProps[defaultName] = defaultProps[defaultName];
    }
  }

  return nextProps;
};

export default useDefaultProps;