import React from 'react'
import { DataGrid } from '@material-ui/x-data-grid';

function ListProducts() {
    return (
        <div>
            <DataGrid
                rows={5}
                columns={3}
                pageSize={0}
                rowsPerPageOptions={15}
                checkboxSelection
            />            
        </div>


    )
}

export default ListProducts
