import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import './Buttons.css'

function Buttons() {
    return (
        <div className='listScreen__buttons'>
            <IconButton className='button__add'>
                <AddIcon className='icon__color'/>
            </IconButton>   

            <IconButton className='button__delete'>
                <DeleteForeverIcon className='icon__color'/>
            </IconButton>   
        </div>
    )
}
export default Buttons
