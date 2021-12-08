export var getColors = function getColors(palette, status) {
  var colors = {
    "default": {
      fill: palette.foreground,
      bg: palette.background
    },
    secondary: {
      fill: palette.foreground,
      bg: palette.background
    },
    success: {
      fill: palette.success,
      // fondo
      bg: palette.background
    },
    warning: {
      fill: palette.warning,
      bg: palette.background
    },
    error: {
      fill: palette.error,
      bg: palette.background
    }
  };
  if (!status) return colors["default"];
  return colors[status];
};