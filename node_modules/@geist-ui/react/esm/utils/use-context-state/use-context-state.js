import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useMemo } from 'react';
import useCurrentState from '../use-current-state';
import { capitalize } from '../collections';

var useContextState = function useContextState(initialState, options) {
  var _useCurrentState = useCurrentState(initialState),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      state = _useCurrentState2[0],
      setState = _useCurrentState2[1],
      stateRef = _useCurrentState2[2];

  var update = function update(key, next) {
    var allowChange = options !== null && options !== void 0 && options.filter ? options === null || options === void 0 ? void 0 : options.filter(key, next) : true;
    if (!allowChange) return;
    setState(function (last) {
      return _extends({}, last, _defineProperty({}, key, next));
    });
    (options === null || options === void 0 ? void 0 : options.onChange) && (options === null || options === void 0 ? void 0 : options.onChange(key, next));
  };

  var makeUpdates = function makeUpdates() {
    var keys = Object.keys(state);
    return keys.reduce(function (pre, current) {
      var updateHandler = _defineProperty({}, "set".concat(capitalize(current)), function set(nextValue) {
        update(current, nextValue);
      });

      return _extends({}, pre, updateHandler);
    }, {});
  };

  var updates = makeUpdates();
  var stateMemo = useMemo(function () {
    return _extends({
      update: update
    }, state, updates);
  }, [state]);
  return [stateMemo, setState, stateRef];
};

export default useContextState;