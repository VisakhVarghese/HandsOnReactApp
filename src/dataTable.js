import React from 'react';
const DataTable = ({ result }) => {
   return (
      <div className="app-container">
         <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Gender</th>
               </tr>
            </thead>
            <tbody>
               {/* {result.length > 0 ? (
                  result.map((item) => (
                     <tr>
                        <td>{item.Name}</td>
                        <td>{item.Gender}</td>
                     </tr>
                  ))
               ) : (
                  <div></div>
               )} */}
            </tbody>
         </table>
      </div>
   );
};

export default DataTable;
