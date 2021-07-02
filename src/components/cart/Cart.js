import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setCart} from '../../redux/cartReducer'
import '../cart/Cart.scss'
import {Link} from 'react-router-dom'


const Cart = (props) => {
 const {cart} = useSelector((store) => store.cartReducer)
 const dispatch = useDispatch()
 const total = cart.reduce((acc, el) => {
    return acc + el.package_price * el.quantity
}, 0)



  const handleDeleteFromCart = (package_id) => {
     axios.delete(`/api/cart/${package_id}`)
     .then((res) => {
         dispatch(setCart(res.data))
     })
     .catch(err => {
         console.log(err)
         if(err.response.status === 511){
             props.history.push('/auth')
         }
     })
  }

   const handleChangeQty = (package_id, quantity) => {
     if(quantity <= 0){
         handleDeleteFromCart(package_id)
     }else{
         axios.put(`/api/cart/${package_id}`, {quantity})
          .then(res => {
              dispatch(setCart(res.data))
          })
          .catch(err => {
              console.log(err)
              if(err.response.status === 511){
                  props.history.push('/auth')
              }
          })
       }
   }

    return(
        <div id='cart-container'> 
        <h1  id="cart-text">Your Cart <br></br> Total: ${total}</h1>
        <div className="cart-items">
             {cart.map((item) => {
               return(
                     <div key={item.package_cart_id}>
                    <div id="cart">
                        <h1 id="items">{item.package_name} Package</h1>
                        <h2 id="items">Qty: {item.quantity}</h2>
                        <h2 id="items">Pacakge Price: ${item.package_price}</h2>
                        <img id='mystery-img' src='https://cdn.shopify.com/s/files/1/0164/8089/5040/products/1PLCMysterySale_250x250@2x.jpg?v=1612894325' alt='myst-pic'/>
                        <div id="qtyButtons">
                        <button id="cart-button" onClick={() => handleChangeQty(item.package_id, item.quantity -1)}>-</button>
                        <button id="cart-button" onClick={() => handleChangeQty(item.package_id, item.quantity +1)}>+</button>
                        </div>
                        <button id="cart-button" onClick={() => handleDeleteFromCart(item.package_id)}>Remove Package</button>
                    </div>
                </div>
                 )
                })}
                <Link to='/checkout'><h3 className="checkout-link">Checkout</h3></Link>
             </div>
        </div>

    )
}

export default Cart