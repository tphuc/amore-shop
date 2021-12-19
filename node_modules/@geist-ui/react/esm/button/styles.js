import _extends from "@babel/runtime/helpers/esm/extends";
import { addColorAlpha } from '../utils/color';
export var getButtonGhostColors = function getButtonGhostColors(palette, type) {
  var colors = {
    secondary: {
      bg: palette.background,
      border: palette.foreground,
      color: palette.foreground
    },
    success: {
      bg: palette.background,
      border: palette.success,
      color: palette.success
    },
    warning: {
      bg: palette.background,
      border: palette.warning,
      color: palette.warning
    },
    error: {
      bg: palette.background,
      border: palette.error,
      color: palette.error
    }
  };
  return colors[type] || null;
};
export var getButtonColors = function getButtonColors(palette, props) {
  var type = props.type,
      disabled = props.disabled,
      ghost = props.ghost;
  var colors = {
    "default": {
      bg: palette.background,
      border: palette.border,
      color: palette.accents_5
    },
    secondary: {
      bg: palette.foreground,
      border: palette.foreground,
      color: palette.background
    },
    success: {
      bg: palette.success,
      border: palette.success,
      color: '#fff'
    },
    warning: {
      bg: palette.warning,
      border: palette.warning,
      color: '#fff'
    },
    error: {
      bg: palette.error,
      border: palette.error,
      color: '#fff'
    },
    abort: {
      bg: 'transparent',
      border: 'transparent',
      color: palette.accents_5
    }
  };
  if (disabled) return {
    bg: palette.accents_1,
    border: palette.accents_2,
    color: '#ccc'
  };
  /**
   * The '-light' type is the same color as the common type,
   * only hover's color is different.
   * e.g.
   *   Color['success'] === Color['success-light']
   *   Color['warning'] === Color['warning-light']
   */

  var withoutLightType = type === null || type === void 0 ? void 0 : type.replace('-light', '');
  var defaultColor = colors["default"];
  if (ghost) return getButtonGhostColors(palette, withoutLightType) || defaultColor;
  return colors[withoutLightType] || defaultColor;
};
export var getButtonGhostHoverColors = function getButtonGhostHoverColors(palette, type) {
  var colors = {
    secondary: {
      bg: palette.foreground,
      border: palette.background,
      color: palette.background
    },
    success: {
      bg: palette.success,
      border: palette.background,
      color: 'white'
    },
    warning: {
      bg: palette.warning,
      border: palette.background,
      color: 'white'
    },
    error: {
      bg: palette.error,
      border: palette.background,
      color: 'white'
    }
  };
  var withoutLightType = type.replace('-light', '');
  return colors[withoutLightType] || null;
};
export var getButtonHoverColors = function getButtonHoverColors(palette, props) {
  var type = props.type,
      disabled = props.disabled,
      loading = props.loading,
      shadow = props.shadow,
      ghost = props.ghost;
  var defaultColor = getButtonColors(palette, props);
  var alphaBackground = addColorAlpha(defaultColor.bg, 0.85);
  var colors = {
    "default": {
      bg: palette.background,
      border: palette.foreground
    },
    secondary: {
      bg: palette.background,
      border: palette.foreground
    },
    success: {
      bg: palette.background,
      border: palette.success
    },
    warning: {
      bg: palette.background,
      border: palette.warning
    },
    error: {
      bg: palette.background,
      border: palette.error
    },
    abort: {
      bg: 'transparent',
      border: 'transparent',
      color: palette.accents_5
    },
    'secondary-light': _extends({}, defaultColor, {
      bg: alphaBackground
    }),
    'success-light': _extends({}, defaultColor, {
      bg: alphaBackground
    }),
    'warning-light': _extends({}, defaultColor, {
      bg: alphaBackground
    }),
    'error-light': _extends({}, defaultColor, {
      bg: alphaBackground
    })
  };
  if (disabled) return {
    bg: palette.accents_1,
    border: palette.accents_2,
    color: '#ccc'
  };
  if (loading) return _extends({}, defaultColor, {
    color: 'transparent'
  });
  if (shadow) return defaultColor;
  var hoverColor = (ghost ? getButtonGhostHoverColors(palette, type) : colors[type]) || colors["default"];
  return _extends({}, hoverColor, {
    color: hoverColor.color || hoverColor.border
  });
};
export var getButtonCursor = function getButtonCursor(disabled, loading) {
  if (disabled) return {
    cursor: 'not-allowed',
    events: 'auto'
  };
  if (loading) return {
    cursor: 'default',
    events: 'none'
  };
  return {
    cursor: 'pointer',
    events: 'auto'
  };
};
export var getButtonDripColor = function getButtonDripColor(palette, props) {
  var type = props.type;
  var isLightHover = type.endsWith('light');
  var hoverColors = getButtonHoverColors(palette, props);
  return isLightHover ? addColorAlpha(hoverColors.bg, 0.65) : addColorAlpha(palette.accents_2, 0.65);
};