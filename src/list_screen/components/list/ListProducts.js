import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import './ListProducts.css'

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
            <button onClick={borrar}>borrar</button>
        </div>
    )
}

 const borrar = ()=>{
    //apiRef.current.updateRows([{ id: 1, _action: 'delete' }]);
    // var deleted = document.getElementsByClassName("Mui-selected");
    // console.log("pija")
    // console.log(deleted)

    // for (let i=0; i < deleted.length; i++){
    //     console.log(deleted[i])
    //     deleted[i].style.display="none"
    // }
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
    { id:1, producto: 'Producto 1', cantidad: 'x5'},
    { id:2, producto: 'Producto 2', cantidad: 'x2'},
    { id:3, producto: 'Producto 3', cantidad: 'x5'},
    { id:4, producto: 'Producto 4', cantidad: 'x8'}
  ];

export default ListProducts
