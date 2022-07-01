import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
   EditingState,
   SelectionState,
   SearchState,
   PagingState,
   SortingState,
   IntegratedPaging,
   IntegratedSelection,
   IntegratedSorting,
   FilteringState,
   IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
   Grid,
   Table,
   TableHeaderRow,
   TableEditRow,
   TableEditColumn,
   TableSelection,
   PagingPanel,
   TableFilterRow,
   ColumnChooser,
   TableColumnVisibility,
   Toolbar,
   SearchPanel,
} from '@devexpress/dx-react-grid-material-ui';

import {
   generateRows,
   defaultNestedColumnValues,
} from '../src/demo_data/generator';

const getRowId = (row) => row.id;

const getHiddenColumnsFilteringExtensions = (hiddenColumnNames) =>
   hiddenColumnNames.map((columnName) => ({
      columnName,
      predicate: () => false,
   }));

export default () => {
   const [selection, setSelection] = useState([]);
   const [sorting, setSorting] = useState([
      { columnName: 'city', direction: 'asc' },
      { columnName: 'firstName', direction: 'asc' },
      { columnName: 'lastName', direction: 'asc' },
      { columnName: 'car', direction: 'asc' },
      { columnName: 'position', direction: 'asc' },
   ]);
   const [defaultHiddenColumnNames] = useState(['car']);
   const [filteringColumnExtensions, setFilteringColumnExtensions] = useState(
      getHiddenColumnsFilteringExtensions(defaultHiddenColumnNames)
   );
   const onHiddenColumnNamesChange = (hiddenColumnNames) =>
      setFilteringColumnExtensions(
         getHiddenColumnsFilteringExtensions(hiddenColumnNames)
      );
   const [columns] = useState([
      {
         name: 'firstName',
         title: 'First Name',
         getCellValue: (row) => (row.user ? row.user.firstName : undefined),
      },
      {
         name: 'lastName',
         title: 'Last Name',
         getCellValue: (row) => (row.user ? row.user.lastName : undefined),
      },
      {
         name: 'car',
         title: 'Car',
         getCellValue: (row) => (row.car ? row.car.model : undefined),
      },
      { name: 'position', title: 'Position' },
      { name: 'city', title: 'City' },
   ]);
   const [rows, setRows] = useState(
      generateRows({
         columnValues: {
            id: ({ index }) => index,
            ...defaultNestedColumnValues,
         },
         length: 8,
      })
   );
   const [editingColumnExtensions] = useState([
      {
         columnName: 'firstName',
         createRowChange: (row, value) => ({
            user: { ...row.user, firstName: value },
         }),
      },
      {
         columnName: 'lastName',
         createRowChange: (row, value) => ({
            user: { ...row.user, lastName: value },
         }),
      },
      {
         columnName: 'car',
         createRowChange: (row, value) => ({ car: { model: value } }),
      },
   ]);

   const commitChanges = ({ added, changed, deleted }) => {
      let changedRows;
      if (added) {
         const startingAddedId =
            rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
         changedRows = [
            ...rows,
            ...added.map((row, index) => ({
               id: startingAddedId + index,
               ...row,
            })),
         ];
      }
      if (changed) {
         changedRows = rows.map((row) =>
            changed[row.id] ? { ...row, ...changed[row.id] } : row
         );
      }
      if (deleted) {
         const deletedSet = new Set(deleted);
         changedRows = rows.filter((row) => !deletedSet.has(row.id));
      }
      setRows(changedRows);
   };

   return (
      <Paper>
         {/* <span>Total rows selected: {selection.length}</span> */}
         <Grid rows={rows} columns={columns} getRowId={getRowId}>
            <EditingState
               columnExtensions={editingColumnExtensions}
               onCommitChanges={commitChanges}
            />
            <SearchState />
            <SortingState sorting={sorting} onSortingChange={setSorting} />
            <IntegratedSorting />
            <FilteringState defaultFilters={[]} />
            <IntegratedFiltering columnExtensions={filteringColumnExtensions} />
            <PagingState defaultCurrentPage={0} pageSize={6} />
            <SelectionState
               selection={selection}
               onSelectionChange={setSelection}
            />
            <IntegratedPaging />
            <IntegratedSelection />
            <Table />
            <TableHeaderRow showSortingControls />
            <TableColumnVisibility
               defaultHiddenColumnNames={defaultHiddenColumnNames}
               onHiddenColumnNamesChange={onHiddenColumnNamesChange}
            />
            <TableFilterRow />
            <TableEditRow />
            <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
            <TableSelection showSelectAll />
            <Toolbar />
            <SearchPanel />
            <ColumnChooser />
            <PagingPanel />
         </Grid>
      </Paper>
   );
};
