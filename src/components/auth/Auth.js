import {useState} from 'react'
import axios from 'axios'
import {setUser} from '../../redux/authReducer'
import {setCart} from '../../redux/cartReducer'
import {useDispatch} from 'react-redux'
import '../auth/Auth.css'


const Auth = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()
    const handleRegister = () => {
        axios.post('/auth/register',{email, password})
        .then((res) => {
            dispatch(setUser(res.data))
            axios.get('/api/cart')
            .then((response) => {
                dispatch(setCart(response.data))
                props.history.push('/')
            })
        })
        .catch(err => console.log(err))
    }
    const handleLogin = () => {
        axios.post('/auth/login', {email, password})
        .then((res) => {
            console.log(res.data)
            dispatch(setUser(res.data))
            axios.get('/api/cart').then((response) => {
                dispatch(setCart(response.data))
                props.history.push('/')
            })
        })
        .catch(err => console.log(err))
    }
    return(
        <div className='Login'>
            <div className='Login-container'>
                <h1 id="CreateOr">Create Account or Login</h1>
            <div className='auth-input-box'>
               <h3 id="inputText">Email</h3>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/>
            
              <h3 id="inputText">Password</h3>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
            </div>

            <div className='auth-button-container'>
            <button className="auth-button" onClick={handleRegister}><h4 id="loginReg">Sign Up</h4></button>
            <button className="auth-button" onClick={handleLogin}><h4 id="loginReg">Login</h4></button>
            </div>

            </div>
        </div>
    )
}

export default Auth