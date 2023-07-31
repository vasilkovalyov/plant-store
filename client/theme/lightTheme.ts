import { createTheme } from '@mui/material/styles';

import fontSize from './fontSize';
import colors from './colors';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: colors.green,
      contrastText: colors.white,
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          marginBottom: 14,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',
        },
        maxWidthLg: {
          maxWidth: '1200px!important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: 'Cera Pro',
          minWidth: 'auto',
        },
        sizeSmall: {
          height: 35,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 16,
          paddingRight: 16,
          borderRadius: 6,
          fontWeight: 700,
          fontSize: 16,
          letterSpacing: 0,
        },
        sizeMedium: {
          height: 40,
          paddingTop: 12,
          paddingBottom: 10,
          paddingLeft: 24,
          paddingRight: 24,
          borderRadius: 3,
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: 0,
        },
        sizeLarge: {
          height: 45,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 32,
          paddingRight: 32,
          borderRadius: 5,
          fontWeight: 700,
          fontSize: 16,
          letterSpacing: 0,
        },
        outlined: {
          borderWidth: 1,
          '&:hover': {
            borderWidth: 1,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: fontSize.fz_1_md,
          fontWeight: 400,
          color: colors.black,
          marginBottom: 10,
          display: 'block',
          position: 'relative',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: fontSize.fz_1_xxs,
          fontWeight: 500,
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            color: colors.grey_light,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          overflow: 'hidden',
          marginTop: 0,
          width: '100%',
        },
        input: {
          backgroundColor: colors.white,
          marginTop: 0,
          height: 10,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 14,
          paddingRight: 14,
          borderRadius: 6,
          overflow: 'hidden',
          color: colors.black,
          borderColor: colors.grey_light,
        },
        inputAdornedStart: {
          paddingLeft: 46,
        },
        inputAdornedEnd: {
          paddingRight: 46,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          width: '100%',
          backgroundColor: colors.white,
          marginTop: 0,
          height: 26,
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: 20,
          overflow: 'hidden',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'transparent',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        positionEnd: {
          position: 'absolute',
          right: 15,
          width: 20,
          height: 20,
          cursor: 'pointer',
        },
        positionStart: {
          position: 'absolute',
          left: 15,
          width: 20,
          height: 20,
          cursor: 'pointer',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          marginBottom: 0,
        },
      },
    },
  },
});

// **** CONTAINER ****

// **** TYPOGRAPHY ****

const baseStyle = {
  fontWeight: 700,
  marginBottom: 16,
  border: 'none',
  borderBlockColor: 'transparent',
};

theme.typography.h1 = {
  color: colors.black,
  fontSize: fontSize.fz_3_sm,
  ...baseStyle,

  [theme.breakpoints.up('lg')]: {
    fontSize: fontSize.fz_7_xs,
  },
};

theme.typography.h2 = {
  color: colors.black,
  fontSize: fontSize.fz_3_sm,
  ...baseStyle,
};

theme.typography.h3 = {
  color: colors.black,
  fontSize: fontSize.fz_2_lg,
  ...baseStyle,
};

theme.typography.h4 = {
  color: colors.black,
  fontSize: fontSize.fz_2_md,
  ...baseStyle,
};

theme.typography.h5 = {
  color: colors.black,
  fontSize: fontSize.fz_2_sm,
  ...baseStyle,
};

theme.typography.h6 = {
  color: colors.black,
  fontSize: fontSize.fz_1_lg - 1,
  ...baseStyle,
};

theme.typography.body1 = {
  color: colors.grey_medium,
  fontSize: fontSize.fz_1_xs,
  lineHeight: 1.7,
  fontWeight: 400,
};

theme.typography.body2 = {
  color: colors.black,
  fontSize: fontSize.fz_1_sm,
  fontWeight: 500,
  marginBottom: 16,
  border: 0,
};

theme.typography.caption = {
  fontSize: fontSize.fz_1_sm,
  color: colors.grey_light_1,
  fontWeight: 400,
  marginBottom: 16,
  border: 0,
  display: 'block',
};

theme.typography.subtitle1 = {
  fontSize: fontSize.fz_1_md,
  color: colors.black,
  fontWeight: 500,
  marginBottom: 16,
  border: 0,
};

// ************

export default theme;
