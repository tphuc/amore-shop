export var getColors = function getColors(palette, status) {
  var colors = {
    "default": {
      bg: palette.accents_8
    },
    secondary: {
      bg: palette.accents_8
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