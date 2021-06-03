import '../header/Header.css'
import {RiShoppingCartLine} from 'react-icons/ri'
import Card from '../card/Card'
import axios from 'axios'
import {Link, withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setUser} from '../../redux/authReducer'



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
           <div className="header-drop">
            <h1 className="hH12">JDM Package.Co</h1>
                <Card/>
            </div>
        </header>
    )
    if(user)return(<header>
      <div className="header-logged-in">
        <Link to='/'><h1 className="hH1">JDM Package.Co</h1></Link>
        <button className="auth-button-logout" onClick={handleLogout}><h4 id="logout">Logout</h4></button>
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

export default  withRouter(Header)