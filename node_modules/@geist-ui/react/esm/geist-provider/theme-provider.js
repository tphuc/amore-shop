import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useMemo, useState } from 'react';
import Themes from '../themes';
import { ThemeContext } from '../use-theme/theme-context';
import { AllThemesContext } from '../use-all-themes/all-themes-context';

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
      themeType = _ref.themeType,
      _ref$themes = _ref.themes,
      themes = _ref$themes === void 0 ? [] : _ref$themes;

  var _useState = useState({
    themes: Themes.getPresets()
  }),
      _useState2 = _slicedToArray(_useState, 2),
      allThemes = _useState2[0],
      setAllThemes = _useState2[1];

  var currentTheme = useMemo(function () {
    var theme = allThemes.themes.find(function (item) {
      return item.type === themeType;
    });
    if (theme) return theme;
    return Themes.getPresetStaticTheme();
  }, [allThemes, themeType]);
  useEffect(function () {
    if (!(themes !== null && themes !== void 0 && themes.length)) return;
    setAllThemes(function (last) {
      var safeThemes = themes.filter(function (item) {
        return Themes.isAvailableThemeType(item.type);
      });
      var nextThemes = Themes.getPresets().concat(safeThemes);
      return _extends({}, last, {
        themes: nextThemes
      });
    });
  }, [themes]);
  return /*#__PURE__*/React.createElement(AllThemesContext.Provider, {
    value: allThemes
  }, /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: currentTheme
  }, children));
};

export default ThemeProvider;