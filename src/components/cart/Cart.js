import { useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setCart} from '../../redux/cartReducer'
import '../cart/Cart.scss'
import {Link} from 'react-router-dom'

const Cart = (props) => {
 const {cart} = useSelector((store) => store.cartReducer)
 const dispatch = useDispatch()

 useEffect(() => {
  axios.get('/api/cart')
  .then((res) => {
      console.log(res.data)
      dispatch(setCart(res.data))
  }).catch(err => {
    console.log(err)
    if(err.response.status === 511){
        props.history.push('/auth')
    }
  })
 }, [dispatch])

  const handeDeleteFromCart = (package_id) => {
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
         handeDeleteFromCart(package_id)
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
        <h1  id="cart-text">Your Cart</h1>
        <div className="cart-items">
             {cart.map((item) => {
                 return(
                     <div key={item.package_cart_id}>
                    <div id="cart">
                        <h1 id="packCart">Package</h1>
                        <h2 id="items">{item.package_name}</h2>
                        <h3 id="items">Qty: {item.quantity}</h3>
                        <div id="qtyButtons">
                        <button id="cart-button" onClick={() => handleChangeQty(item.package_id, item.quantity -1)}>-</button>
                        <button id="cart-button" onClick={() => handleChangeQty(item.package_id, item.quantity +1)}>+</button>
                        </div>
                        <button id="cart-button" onClick={() => handeDeleteFromCart(item.package_id)}>Remove Package</button>
                        <Link to='/checkout'><h3 className="checkout-link">Checkout</h3></Link>
                    </div>
                </div>
                 )
             })}
             </div>
        </div>

    )
}

export default Cart