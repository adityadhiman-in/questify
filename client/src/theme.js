// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF", // whiteColor
    10: "#E9EFEC", // quatenaryColor
    50: "#C4DAD2", // tertiaryColor
    100: "#6A9C89", // secondaryColor
    200: "#4D4D4D", // custom grey shade
    300: "#A3A3A3", // existing grey (optional)
    400: "#858585", // existing grey (optional)
    500: "#666666", // existing grey (optional)
    600: "#4D4D4D", // existing grey (optional)
    700: "#333333", // existing grey (optional)
    800: "#1A1A1A", // existing grey (optional)
    900: "#0A0A0A", // existing grey (optional)
    1000: "#000000", // blackColor
  },
  primary: {
    50: "#E9EFEC", // light primary, quatenaryColor
    100: "#C4DAD2", // lighter primary, tertiaryColor
    200: "#6A9C89", // light primary, secondaryColor
    300: "#16423C", // primaryColor
    400: "#16423C", // primaryColor (duplicate for better scaling)
    500: "#16423C", // primaryColor (main)
    600: "#123A34", // darker primary, custom (optional)
    700: "#0E302C", // darker primary
    800: "#0A2623", // very dark primary
    900: "#061B1A", // darkest primary
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
