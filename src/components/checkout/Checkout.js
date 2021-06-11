import '../checkout/Checkout.scss'
import { useState } from 'react';
import {useSelector} from 'react-redux'
import StripeContainer from '../stripe/StripeContainer';



function Checkout() {
    const [showItem, setShowItem] = useState(false)
    const {cart} = useSelector((store) => store.cartReducer)
    
    const total = cart.reduce((acc, el) => {
      return acc + el.package_price * el.quantity
  }, 0)


    return (
      <div className="Checkout">
        <div className='payment-container'>
            <h1 className="checkout-title">JDM Package.Co</h1>
            {showItem ? <StripeContainer/> : <> 
            <h3 className="package-and-amount">{cart.map((item)=>{
                return( 
                <div key={item.package_cart_id}>
                  {item.package_name}Package 
                  <br></br> 
                  Qty: {item.quantity}
                  </div>)
              })}</h3> 

              <img id='checkout-pic' src="https://s.clipartkey.com/mpngs/s/61-612960_package-clipart-package-black-and-white.png" alt="package-pic" />
            <h2 className='price-total'>Total ${total}</h2>
           <button id='check-button' onClick={() => setShowItem(true)}>Confirm Order</button></>}
        </div>
      </div>
  );
}

export default Checkout;
