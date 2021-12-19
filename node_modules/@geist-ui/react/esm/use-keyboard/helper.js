import { isMac } from '../utils/collections';
import { KeyMod } from './codes';
/* istanbul ignore next */

export var getCtrlKeysByPlatform = function getCtrlKeysByPlatform() {
  return {
    CtrlCmd: isMac() ? 'metaKey' : 'ctrlKey',
    WinCtrl: isMac() ? 'ctrlKey' : 'metaKey'
  };
};
export var getActiveModMap = function getActiveModMap(bindings) {
  var modBindings = bindings.filter(function (item) {
    return !!KeyMod[item];
  });
  var activeModMap = {
    CtrlCmd: false,
    Shift: false,
    Alt: false,
    WinCtrl: false
  };
  modBindings.forEach(function (code) {
    var modKey = KeyMod[code];
    activeModMap[modKey] = true;
  });
  return activeModMap;
};