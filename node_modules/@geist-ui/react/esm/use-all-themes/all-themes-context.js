import React from 'react';
import Themes from '../themes/themes';
var defaultAllThemesConfig = {
  themes: Themes.getPresets()
};
export var AllThemesContext = /*#__PURE__*/React.createContext(defaultAllThemesConfig);
export var useAllThemes = function useAllThemes() {
  return React.useContext(AllThemesContext);
};