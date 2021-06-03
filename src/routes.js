import {Switch, Route} from 'react-router-dom'
import Auth from './components/auth/Auth'
import Cart from './components/cart/Cart'
import homePage from './components/homePage/HomePage'
import Packages from './components/packages/Packages'


export default (
    <Switch>
        <Route exact path='/' component={homePage}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/packages' component={Packages}/>
    </Switch>
)