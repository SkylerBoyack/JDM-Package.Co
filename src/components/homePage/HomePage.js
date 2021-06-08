import '../homePage/HomePage.scss'
import {Link} from 'react-router-dom'
import {FaFileSignature} from 'react-icons/fa'
import {GoPackage} from 'react-icons/go'
import {MdLocalShipping} from 'react-icons/md'



const HomePage = () => {
    return(
    <div className='HomeContainer'>
        <div className="info">
            <h1 className="FindStyle">Find Your Style!</h1>   
            <br></br>
            <h2 className='descript'>
                Our goal is to provide JDM enthusiasts with <br></br> top quality aesthetic kits for their car every month! 
            </h2>
        </div>
        <div className="HowItWorks">
            <h1 className="HowJDM">How JDM Package.Co Works</h1>
          <div className='Instruc-container'>
            <div className='inst'>
              <Link to='/auth'><h1 id='FA'><FaFileSignature/></h1></Link>
              <h2 id='instText'>Create Your Account</h2>
              </div>
            <div className='inst'>
               <Link to='/packages'><h1 id='FA'><GoPackage/></h1></Link>
               <h2 id='instText'>Select Your Package</h2>
               </div>
            <div className='inst'>
                <h1 id='FA'><Link to='/cart'><h1 id='FA'><MdLocalShipping/></h1></Link></h1>
                <h2 id='instText'>Checkout And Enjoy!</h2>
                </div>
            </div>
         </div>
        
        <div className="examp-container">
          <div className="examp-Prev">
            <h1 id="PrevPack">Previous Packages</h1>
             <br></br>
             <h2 id='exampText'>Below are three Bronze Packages and the items they contained</h2>
             </div>
         <div className="examp">
             <div className='exampImg'>
               <img src="https://cdn11.bigcommerce.com/s-79xyvl/images/stencil/1280x1280/products/30986/132064/1__90375.1602168884.JPG?c=2" alt="floorMats"/>
              <img src="https://ic.carid.com/nrg-innovations/items/st-015bk-bl_1.jpg" alt="QuickReleaseWheel"/>
              <img src="https://images-na.ssl-images-amazon.com/images/I/5154Km9WDXL._AC_SY355_.jpg" alt="Tsurikawa"/>
              <img src="https://i5.walmartimages.com/asr/e256baf0-acda-43a5-a87a-321aa0ce96e0_1.2da0066318a725efb157fadd8d2db671.jpeg" alt="shiftKnob"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSri5rb7NaodOBtAAUfcqy5Z1ZTqaVGnH5i12IcXYm37sOhviWSwAZRFnFKsgqvRP-8s&usqp=CAU" alt="Stickers"/>
          </div>
          <div className='exampImg'>
               <img src="https://cdn11.bigcommerce.com/s-79xyvl/images/stencil/500x659/products/30986/132074/5__46766.1602171263.jpg?c=2" alt='floormats'/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6w82NLgXw9QC9M-8nKccV75ELsB4u41chL5DfYFEtPBxE9oZRVmKnrtoYIuc0eTzgzyYUz0&usqp=CAc" alt="steering-wheel"/>
              <img src="https://cdn.shopify.com/s/files/1/0799/1879/products/IMG_1998_1024x.jpg?v=1613893569g" alt="Tsurikawa"/>
              <img src="http://cdn.shopify.com/s/files/1/0280/5484/products/C-291350-ORANGE-500x500_0_600x.jpg?v=1598297921" alt='shiftKnob'/>
              <img src="https://i.pinimg.com/736x/0e/91/9f/0e919f6d307080e71a1815be633ed102.jpg" alt="Sticker"/>
          </div>
          <div className='exampImg'>
               <img src="https://cdn11.bigcommerce.com/s-79xyvl/images/stencil/500x659/products/30986/132073/6__02461.1602171261.jpg?c=2" alt="floorMats"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28bCOkB_v_ApqQHHaiKlJcnPQX9RF4o3U_f5iEjJMY0Bm6XwfooqX50mK8oXuGitBykpwU_g&usqp=CAc" alt="QuickReleaseWheel"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFXs91An88fXZavKmzYcv8cvQleHM5D5J5w&usqp=CAU" alt="Tsurikawa"/>
              <img src="http://cdn.shopify.com/s/files/1/0517/9939/2448/products/1a9d76_457b32d6dfef4f598641d968bc72284b_mv2_1200x1200.jpg?v=1617747054" alt="shiftKnob"/>
              <img src="https://cdn.shopify.com/s/files/1/1358/9279/products/inuyasha_head002.jpg?v=1599573161" alt="Stickers"/>
          </div>
        </div>
      </div>
            <div className='finalNote'>
                <h2>Checkout Our <Link to='/packages' id='extra'>PackagesPage</Link> to see all our available options!</h2>
             </div>
        
    </div>

    
    )
}

export default HomePage 