export var getColors = function getColors(palette, status) {
  var colors = {
    "default": {
      label: palette.foreground,
      border: palette.border,
      bg: palette.foreground
    },
    secondary: {
      label: palette.foreground,
      border: palette.border,
      bg: palette.foreground
    },
    success: {
      label: palette.success,
      border: palette.success,
      bg: palette.success
    },
    warning: {
      label: palette.warning,
      border: palette.warning,
      bg: palette.warning
    },
    error: {
      label: palette.error,
      border: palette.error,
      bg: palette.error
    }
  };
  if (!status) return colors["default"];
  return colors[status];
};