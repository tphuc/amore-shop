import React from 'react';
import Themes from '../themes';
var defaultTheme = Themes.getPresetStaticTheme();
export var ThemeContext = /*#__PURE__*/React.createContext(defaultTheme);
export var useTheme = function useTheme() {
  return React.useContext(ThemeContext);
};