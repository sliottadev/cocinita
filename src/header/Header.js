import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'

function Header(){
    return(
        <div className="Header">
            <MenuIcon className="header__menuIcon"/>
            <h5 className="header__title">Cocinita</h5>
        </div>
    )
}

export default Header;