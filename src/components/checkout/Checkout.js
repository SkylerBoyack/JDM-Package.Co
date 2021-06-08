import '../checkout/Checkout.scss'
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import StripeContainer from '../stripe/StripeContainer';
import {setCart} from '../../redux/cartReducer'
import { useEffect} from 'react'
import axios from 'axios'


function Checkout() {
    const [showItem, setShowItem] = useState(false)
    const {cart} = useSelector((store) => store.cartReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('/api/cart')
        .then((res) => {
            console.log(res.data)
            dispatch(setCart(res.data))
        }).catch(err => {
          console.log(err)
        })
       }, [dispatch])


    return (
      <div className="Checkout">
        <div className='payment-container'>
            <h1 className="checkout-title">JDM Package.Co</h1>
            {showItem ? <StripeContainer/> : <> <h3 className="package-and-amount">{cart.map((item)=>{
                return( <div key={item.package_cart_id}>{item.package_name} Package <br></br> Qty {item.quantity}</div> )
            })}</h3> <img id='checkout-img' src="https://s.clipartkey.com/mpngs/s/61-612960_package-clipart-package-black-and-white.png" alt="package-picture" />
             <button id='check-button' onClick={() => setShowItem(true)}>Purchase Package</button></>}
        </div>
      </div>
  );
}

export default Checkout;
