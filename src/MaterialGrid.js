import { createGenerateClassName } from '@material-ui/core/styles';
import { createTheme as createThemeV4 } from '@material-ui/core/styles';
import { createTheme as createThemeV5 } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderV5 } from '@mui/material/styles';
import {
   ThemeProvider as ThemeProviderV4,
   StylesProvider,
} from '@material-ui/core/styles';

import React from 'react';
import Data from './data';

const generateClassName = createGenerateClassName({
   disableGlobal: true,

   seed: 'mui-jss',
});
const themeV4 = createThemeV4({
   palette: {
      primary: {
         main: '#2196f3',
      },
      secondary: {
         main: '#f50057',
      },
   },
   shape: {
      borderRadius: 8,
   },
});

const themeV5 = createThemeV5({
   palette: {
      primary: {
         main: themeV4.palette.primary.main,
      },
      secondary: {
         main: themeV4.palette.secondary.main,
      },
   },
   shape: { ...themeV4.shape },
});

const MaterialGrid = () => {
   return (
      <StylesProvider generateClassName={generateClassName}>
         <ThemeProviderV4 theme={themeV4}>
            <ThemeProviderV5 theme={themeV5}>
               <Data />
            </ThemeProviderV5>
         </ThemeProviderV4>
      </StylesProvider>
   );
};
export default MaterialGrid;
