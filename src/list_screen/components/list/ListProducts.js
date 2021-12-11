import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import './ListProducts.css'
import { red } from '@mui/material/colors';
import { Checkbox } from '@mui/material';

function ListProducts() {
    return (        
        <div className='list_products'>
            <DataGrid
                rows={rows}
                columns={columns}
                pagination = {null}
                hideFooter = {true}
                autoHeight={true}
                checkboxSelection
                headerHeight={0}
                sx={{
                    backgroundColor: 'white',
                    width:'100%'
                }}
            />
        </div>
    )
}

const columns = [
    {
        field: 'producto',
        headerName: 'Producto',
        width: 280,
        editable: false,
    },
    {
        field: 'cantidad',
        headerName: 'Cantidad',
        width: 50,
        editable: false,
    }  
  ];
  
  const rows = [
    { id:1, producto: 'Producto 1', cantidad: 'x'+'5'},
    { id:2, producto: 'Producto 2', cantidad: 'x'+'2'},
    { id:3, producto: 'Producto 3', cantidad: 'x'+'5'},
    { id:4, producto: 'Producto 4', cantidad: 'x'+'8'}
  ];

export default ListProducts
