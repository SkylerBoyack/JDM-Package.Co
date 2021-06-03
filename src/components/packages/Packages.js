import {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setCart} from '../../redux/cartReducer'
import '../packages/Packages.css'

const Packages = (props) => {
  const [packages, setPackages] = useState([])
  const {user} = useSelector((store) => store.authReducer)
  const {cart} = useSelector((store) => store.cartReducer)
  const dispatch = useDispatch()

  useEffect(() => {
      axios.get('/api/packages')
      .then((res) => {
        setPackages(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleAddToCart = (package_id) => {
      const packageBox = cart.find((packageBox) => packageBox.package_id === package_id)
      console.log(packageBox)
      if(!packageBox){
          axios.post(`/api/cart/${package_id}`)
          .then((res) => {
              dispatch(setCart(res.data))
              alert('Item added to cart!')
          })
          .catch((err) => {
              console.log(err)
              if(err.response.status === 511){
                  props.history.push('/auth')
              }
          })
      }else{
        axios.put(`/api/cart/${package_id}`, {quantity: packageBox.quantity + 1 })
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
   }
 
   return(
       <div id='packages-container'>
               <h1 id="ava">Avaliable Packages</h1>
       <div className="Avalible-Packages">
           {packages.map((packageBox) => {
               return(
                   <div className="Packs" key={packageBox.package_id}>
                       <h2 id="packagesType">{packageBox.package_name}</h2>
                       <h3 id="packages">{packageBox.package_info}</h3>
                       <h4 id="packages">Includes: {packageBox.package_items} surpirse items</h4>
                       <h4 id="packages"> Price: ${packageBox.package_price}</h4>
                       {user && <button onClick={() => handleAddToCart(packageBox.package_id)}>Add Package Cart</button>}
                   </div>
               )
           })}
       </div>
    </div>
   )
}

export default Packages