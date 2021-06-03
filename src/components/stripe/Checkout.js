import '../stripe/Checkout.css'
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
            })}</h3> <img id='checkout-img' src="https://lh3.googleusercontent.com/proxy/U1Mr-90ohNfIjEZWnJRSDDFRRDh11rA14Nz6f5LBz80oCN1gdrjuylkAL1Klp8XkrYHS8q0DkoBmrvhBNZ7hLkAN-EVYLE69TuTOTwogeFFKsNE1jX4pKt-Kw6tmIxBwtFBBszAgvD-BPXmJPiI" alt="package" />
             <button id='check-button' onClick={() => setShowItem(true)}>Purchase Package</button></>}
        </div>
      </div>
  );
}

export default Checkout;
