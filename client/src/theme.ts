import { css, space, ThemeConfig } from 'bumbag'

const theme: ThemeConfig = {
  global: {
    fontSize: 14,
    styles: {
      base: css`
        html,
        body {
          background-color: #fafafa;
        }
        form {
          width: 100%;
        }
        button::focus {
          outline: none !important;
        }
      `,
    },
  },
  breakpoints: {
    mobile: 520,
    tablet: 960,
  },
  fonts: {
    default: 'Open Sans, sans-serif',
    number: 'Helvetica, sans-serif',
    input: 'Inter, sans-serif',
  },
  fontWeights: {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    Regular: 400,
    Medium: 500,
    bold: 600,
    normal: 700,
    ExtraBlack: 900,
  },
  palette: {
    primary: '#1EA4CE',
    primary100: '#147594',

    text: '#525252',

    white: '#ffffff',
    white100: '#FEFEFE',

    ghostWhite: '#F2F0FD',
    ghostWhite100: '#d9d8e3',

    black100: 'E0E0E0',
    black300: '#A8A8A8',
    black400: '#697488',
    black: '#6F6F6F',
    black600: '#525252',
    black700: '#191919',

    grey100: '#F4F4F4',
    grey200: '#F3F0FE',
    grey300: '#E5E5E5',

    red: '#8d021f',
    red100: '#5e1914',
  },
  borderRadii: {
    default: '6px',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '50%',
  },
  borders: {
    primary: {
      color: '#F3F0FE',
      width: '1px',
    },
    thick: {
      color: '#1EA4CE',
      width: '2px',
    },
    thickGrey: {
      color: '#DFDEE2',
      width: '2px',
    },
    grey: {
      color: '#E0E0E0',
      width: '1px',
    },
  },
  lineHeights: {
    sm: 1.28,
    l: 1.38,
    xl: 1.42,
    xxl: 1.72,
  },
  altitudes: {
    100: 'box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4)',
    200: 'box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04)',
    300: 'box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04)',
  },
  spacing: {
    xs /* 4 */: space(1, 'minor'),
    sm /* 8 */: space(2, 'minor'),
    md /* 12 */: space(3, 'minor'),
    lg /* 16 */: space(4, 'minor'),
    xl /* 20 */: space(5, 'minor'),
    '2xl' /* 24 */: space(6, 'minor'),
    '3xl' /* 28 */: space(7, 'minor'),
    '4xl' /* 32 */: space(8, 'minor'),
    '5xl' /* 36 */: space(9, 'minor'),
    '6xl' /* 40 */: space(10, 'minor'),
    '7xl' /* 44 */: space(11, 'minor'),
    '8xl' /* 48 */: space(12, 'minor'),
    xxl /* 96 */: space(24, 'minor'),
  },
}

export default theme
