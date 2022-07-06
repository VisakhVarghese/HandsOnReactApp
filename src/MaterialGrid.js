import { createGenerateClassName } from '@material-ui/core/styles';
import { createTheme as createThemeV4 } from '@material-ui/core/styles';
import { createTheme as createThemeV5 } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderV5 } from '@mui/material/styles';
import {
   ThemeProvider as ThemeProviderV4,
   StylesProvider,
} from '@material-ui/core/styles';

import React, { useState } from 'react';
import Data from './data';

const generateClassName = createGenerateClassName({
   // By enabling this option, if you have non-MUI elements (e.g. `<div />`)
   // using MUI classes (e.g. `.MuiButton`) they will lose styles.
   // Make sure to convert them to use `styled()` or `<Box />` first.
   disableGlobal: true,
   // Class names will receive this seed to avoid name collisions.
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
   // const [rows] = useState([
   //    { id: 1, col1: 'Hello', col2: 'World' },
   //    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
   //    { id: 3, col1: 'MUI', col2: 'is Amazing' },
   // ]);

   // const [columns] = useState([
   //    { field: 'col1', headerName: 'Column 1', width: 150 },
   //    { field: 'col2', headerName: 'Column 2', width: 150 },
   // ]);

   return (
      <StylesProvider generateClassName={generateClassName}>
         <ThemeProviderV4 theme={themeV4}>
            <ThemeProviderV5 theme={themeV5}>
               <Data />
            </ThemeProviderV5>
         </ThemeProviderV4>
      </StylesProvider>

      // <div style={{ height: 300, width: '100%', backgroundColor: '#fff' }}>
      //    <DataGrid rows={rows} columns={columns} />
      // </div>
   );
};
export default MaterialGrid;
