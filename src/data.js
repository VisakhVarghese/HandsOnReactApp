import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AppBar from '@material-ui/core/AppBar';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import static_data from './STATIC_DATA.json';

const columns = [
   { field: 'id', headerName: 'ID', width: 90 },
   {
      field: 'first_name',
      headerName: 'First Name',
      width: 150,
      editable: true,
   },
   {
      field: 'last_name',
      headerName: 'Last Name',
      width: 150,
      editable: true,
   },

   {
      field: 'gender',
      headerName: 'Gender',
      // description: 'This column has a value getter and is not sortable.',
      width: 160,
      // valueGetter: (params) =>
      //    `${params.row.firstName || ''} ${params.row.lastName || ''}`,
   },
   {
      field: 'first_login',
      headerName: 'First Login',
      type: 'date',
      width: 110,
      editable: true,
   },
];

const rows = static_data;
const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
   toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(2),
   },
   content: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
   },
}));

export default function Data() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <CssBaseline />
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" className={classes.title}>
                  My App
               </Typography>
            </Toolbar>
         </AppBar>
         <Paper className={classes.content}>
            <div className={classes.toolbar}>
               <Typography variant="h6" component="h2" color="primary">
                  Users
               </Typography>
               {/* <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<PersonAddIcon />}
               >
                  New User
               </Button> */}
            </div>
            <div style={{ height: 500, width: '100%' }}>
               <DataGrid
                  rows={rows}
                  columns={columns}
                  // components={{
                  //    Toolbar: GridToolbar,
                  // }}
                  checkboxSelection
               />
            </div>
         </Paper>
      </div>
   );
}
