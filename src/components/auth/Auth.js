 import {useState} from 'react'
import axios from 'axios'
import {setUser} from '../../redux/authReducer'
import {setCart} from '../../redux/cartReducer'
import {useDispatch} from 'react-redux'
import '../auth/Auth.scss'


const Auth = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showLogin, setShowLogin] = useState(false)
    const dispatch = useDispatch()
    
    const handleRegister = (e) => {
        e.preventDefault()
        axios.post('/auth/register',{email, password})
        .then((res) => {
            dispatch(setUser(res.data))
            axios.get('/api/cart')
            .then((response) => {
                dispatch(setCart(response.data))
                props.history.push('/')
            })
        }) 
        
        .catch(err => alert(err.response.data))
    }
    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('/auth/login', {email, password})
        .then((res) => {
            console.log(res.data, 'logged in')
            dispatch(setUser(res.data))
            axios.get('/api/cart').then((response) => {
                dispatch(setCart(response.data))
                props.history.push('/')
            })
        })
        .catch(err => alert(err.response.data))
    }

    const LoginTrue = () => {
        setShowLogin(!false)
    }
    const LoginFalse = () => {
        setShowLogin(false)
    }
    
    if(!showLogin)return(
    <div className='Login'>
     <div className='Login-container'>
        <h1 id="CreateOr">Login</h1>
           <form className="auth-input-box" onSubmit={handleLogin}>
             <input  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" type="email"  required/>
             <input  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type="password" required/>
              <button className="auth-button"><h4 id="loginReg">Login</h4></button>
          </form>    
          <div>
            <button id='noAcc' onClick={LoginTrue}>Don't have an account? Sign up</button>
       </div> 
      </div>
    </div>
    )
    if(showLogin)return(
        <div className='register'>
        <div className='Login-container'>
           <h1 id="CreateOr">Create Account</h1>
              <form className="auth-input-box" onSubmit={handleRegister}>
                <input  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" type="email" required/>
                <input  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type="password" required/>
                 <button className="auth-button"><h4 id="loginReg">Sign Up</h4></button>
             </form>    
              <div>
              <button  id='noAcc' onClick={LoginFalse}>Already a subscriber? Sign in</button>
            </div> 
         </div>
       </div>
    )
}

export default Auth