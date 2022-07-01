import React from 'react';
// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import {
   GridComponent,
   ColumnDirective,
   ColumnsDirective,
   Page,
   Inject,
   Toolbar,
   // Filter,
   Search,
} from '@syncfusion/ej2-react-grids';
import data from './STATIC_DATA.json';
import { SearchResult } from './searchResult';
import DataTable from './dataTable';

function DataGrid() {
   const toolbarOptions = ['Search'];
   const searchSettings = {
      fields: ['Name', 'Gender'],
   };

   return (
      <div style={{ margin: '10%', marginTop: '5%' }}>
         <GridComponent
            dataSource={data}
            height={260}
            // ref={(g) => setGrid(g)}
            allowPaging={true}
            pageSettings={{ pageSize: 6 }}
            allowFiltering={true}
            toolbar={toolbarOptions}
            searchSettings={searchSettings}
         >
            <ColumnsDirective>
               <ColumnDirective
                  field="Name"
                  headerText="Name"
                  textAlign="Right"
                  width="120"
               />
               <ColumnDirective
                  field="Gender"
                  headerText="Gender"
                  textAlign="Right"
                  width="150"
               />
            </ColumnsDirective>
            <Inject services={[Page, Search, Toolbar]} />
         </GridComponent>
         <div>
            <div>
               <SearchResult />
            </div>
            <div>
               <DataTable />
            </div>
         </div>
      </div>
   );
}

export default DataGrid;
