import '../header/Header.scss'
import {RiShoppingCartLine} from 'react-icons/ri'
// import Drop from '../card/Drop'
import axios from 'axios'
import {Link, withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setUser} from '../../redux/authReducer'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import {GiHamburgerMenu} from 'react-icons/gi'



const Header = () => { 
    const {user} = useSelector((store) => store.authReducer)
    const dispatch = useDispatch()
   

    const handleLogout = () => {
        axios.post('/auth/logout')
        .then((res) => {
            console.log(res.data)
            dispatch(setUser(res.data, window.location.reload()))
           
        })
        .catch(err => console.log(err))
    }

    if(!user)return(
        <header>     
          <div className="header-main">
            <Link to='/'><h1 className="hH1">JDM Package.Co</h1></Link>
            <Link to='/auth' ><h3 className="hH3">Login</h3></Link>
            <Link to='/packages'><h3 className="hH3">Packages</h3></Link>
            <Link to='/cart'><h2 id='GR'><RiShoppingCartLine /></h2></Link>
        </div>
         
          <div className="DropDown">
            <h1 className="hH12">JDM Package.Co</h1>
                <DropdownButton id="dropdown-basic-button" title={<h2 id="ham-icon"><GiHamburgerMenu/></h2>}>
                    <Dropdown.Item id='drop-item' as={Link} to="/">Home</Dropdown.Item>
                    <Dropdown.Item id='drop-item' as={Link} to="/auth">Login</Dropdown.Item>
                    <Dropdown.Item id='drop-item' as={Link} to="/packages">Packages</Dropdown.Item>
                    <Dropdown.Item id='drop-item' as={Link} to="/cart">Cart</Dropdown.Item>
                
                </DropdownButton>
            </div>
        </header>
    )
    if(user)return(
    <header>

      <div className="header-logged-in">
        <Link to='/'><h1 className="hH1">JDM Package.Co</h1></Link>
        <button className="auth-button-logout" onClick={handleLogout}><h4 id="logout">Logout</h4></button>
        <Link to='/packages'><h3 className="hH3">Packages</h3></Link>
        <Link to='/cart'><h2 id='GR'><RiShoppingCartLine /></h2></Link>
    </div> 
 
    <div className="DropDown">
        <h1 className="hH12">JDM Package.Co</h1>
         <DropdownButton id="dropdown-basic-button" title={<h2     id="ham-icon"><GiHamburgerMenu/></h2>}>
            <Dropdown.Item id='drop-item' as={Link} to="/">Home</Dropdown.Item>
            <Dropdown.Item id='drop-item' onClick={handleLogout}>Logout</Dropdown.Item>
            <Dropdown.Item id='drop-item' as={Link} to="/packages">Packages</Dropdown.Item>
            <Dropdown.Item id='drop-item' as={Link} to="/cart">Cart</Dropdown.Item>
        </DropdownButton>
       </div>

     </header>
  )
}

export default  withRouter(Header)