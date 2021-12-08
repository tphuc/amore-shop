export var getColors = function getColors(palette, status) {
  var colors = {
    "default": {
      bg: palette.success
    },
    secondary: {
      bg: palette.secondary
    },
    success: {
      bg: palette.success
    },
    warning: {
      bg: palette.warning
    },
    error: {
      bg: palette.error
    }
  };
  if (!status) return colors["default"];
  return colors[status];
};