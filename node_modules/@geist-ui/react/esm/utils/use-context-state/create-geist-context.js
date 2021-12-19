import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { useImperativeHandle } from 'react';
import useContextState from './use-context-state';
import { capitalize } from '../collections';

var makeVirtualValues = function makeVirtualValues(values) {
  var keys = Object.keys(values);
  var handlers = keys.reduce(function (pre, current) {
    var updateHandler = _defineProperty({}, "set".concat(capitalize(current)), function set(_next) {});

    return _extends({}, pre, updateHandler);
  }, {}); // eslint-disable-next-line @typescript-eslint/no-unused-vars

  var update = function update(_key, _next) {};

  return _extends({
    update: update
  }, values, handlers);
};

export var createGeistContext = function createGeistContext(name, initialStates) {
  var _ref2;

  var virtualValues = makeVirtualValues(initialStates);
  var Context = /*#__PURE__*/React.createContext(virtualValues);
  var GeistContext = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
    var defaultValues = _ref.defaultValues,
        children = _ref.children,
        onChange = _ref.onChange,
        onChangeBefore = _ref.onChangeBefore;
    var initialValues = typeof defaultValues === 'function' ? defaultValues() : defaultValues;

    var mergedValues = _extends({}, initialStates, initialValues);

    var _useContextState = useContextState(mergedValues, {
      onChange: onChange ? onChange : function () {},
      filter: onChangeBefore ? onChangeBefore : function () {
        return true;
      }
    }),
        _useContextState2 = _slicedToArray(_useContextState, 3),
        states = _useContextState2[0],
        statesRef = _useContextState2[2];

    useImperativeHandle(ref, function () {
      return statesRef.current;
    }, [statesRef.current]);
    return /*#__PURE__*/React.createElement(Context.Provider, {
      value: states
    }, children);
  });
  return _ref2 = {}, _defineProperty(_ref2, "".concat(capitalize(name), "Provider"), GeistContext), _defineProperty(_ref2, "use".concat(capitalize(name), "Context"), function useContext() {
    return React.useContext(Context);
  }), _ref2;
};