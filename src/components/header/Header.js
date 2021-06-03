import {Link} from 'react-router-dom'
import '../header/Header.css'
import {RiShoppingCartLine} from 'react-icons/ri'
import Card from '../card/Card'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setUser} from '../../redux/authReducer'


const Header = () => { 
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        axios.post('/auth/logout')
        .then((res) => {
            console.log(res.data)
            dispatch(setUser(res.data))
        })
    }

    return(
        <header>
            <div className="header-main">
            {/* <button className="auth-button" onClick={handleLogout}><h4 id="logout">Logout</h4></button> */}
                <Link to='/'><h1 className="hH1">JDM Package.Co</h1></Link>
                <Link to='/auth'><h3 className="hH3">Login</h3></Link>
                <Link to='/packages'><h3 className="hH3">Packages</h3></Link>
                <Link to='/cart'><h2 id='GR'><RiShoppingCartLine /></h2></Link>
            </div>

            <div className="header-logged-in">
                <Link to='/'><h1 className="hH1">JDM Package.Co</h1></Link>
                <button className="auth-button" onClick={handleLogout}><h3 className="hH3">Logout</h3></button>
                <Link to='/packages'><h3 className="hH3">Packages</h3></Link>
                <Link to='/cart'><h2 id='GR'><RiShoppingCartLine /></h2></Link>
            </div>

            <div className="header-drop">
            <h1 className="hH12">JDM Package.Co</h1>
                <Card/>
            </div>
           
          
        </header>
    )
}

export default Header