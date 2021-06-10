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
             <h2 id='exampText'>Below are examples of each tier package we offer!</h2>
             </div>
         <div className="examp">
               <h1 style={{color: "#a97142", background:'rgba(0, 0, 0, 0.35)', margin: '10px'}}>Chilly Themed Bronze 5 Item Package</h1>
             <div className='exampImg-container'>
               <img src="https://cdn11.bigcommerce.com/s-79xyvl/images/stencil/1280x1280/products/30986/132064/1__90375.1602168884.JPG?c=2" alt="floorMats"/>
              <img src="https://ic.carid.com/nrg-innovations/items/st-015bk-bl_1.jpg" alt="QuickReleaseWheel"/>
              <img src="https://images-na.ssl-images-amazon.com/images/I/5154Km9WDXL._AC_SY355_.jpg" alt="Tsurikawa"/>
              <img src="https://i5.walmartimages.com/asr/e256baf0-acda-43a5-a87a-321aa0ce96e0_1.2da0066318a725efb157fadd8d2db671.jpeg" alt="shiftKnob"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSri5rb7NaodOBtAAUfcqy5Z1ZTqaVGnH5i12IcXYm37sOhviWSwAZRFnFKsgqvRP-8s&usqp=CAU" alt="Stickers"/>
          </div>
          <h1 style={{color: "silver", background:'rgba(0, 0, 0, 0.35)', margin: '10px'}}>Summer Themed Silver 10 Item Package </h1>
          <div className='exampImg-container'>
               <img src="https://cdn11.bigcommerce.com/s-79xyvl/images/stencil/500x659/products/30986/132074/5__46766.1602171263.jpg?c=2" alt='floormats'/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6w82NLgXw9QC9M-8nKccV75ELsB4u41chL5DfYFEtPBxE9oZRVmKnrtoYIuc0eTzgzyYUz0&usqp=CAc" alt="steering-wheel"/>
              <img src="https://cdn.shopify.com/s/files/1/0799/1879/products/IMG_1998_1024x.jpg?v=1613893569g" alt="Tsurikawa"/>
              <img id='shift-img' src="http://cdn.shopify.com/s/files/1/0280/5484/products/C-291350-ORANGE-500x500_0_600x.jpg?v=1598297921" alt='shiftKnob'/>
              <img src="https://i.pinimg.com/736x/0e/91/9f/0e919f6d307080e71a1815be633ed102.jpg" alt="Sticker"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirKEwkhPDnfCP4TNFx3DF11jnO-YEHze8Ag&usqp=CAU" alt='hub'/>
              <img src="https://images-na.ssl-images-amazon.com/images/I/71buQgjgZZL._AC_SX466_.jpg" alt='led'/>
              <img id='lug-img' src="https://www.rhdjapan.com/media/catalog/product/cache/4/image/9d3082b4bec2d774d16a712307ac9d2a/8/3/83448_2_8bd95b28-a75d-46fc-80de-c3c8ce40f7ac.jpg" alt='lugs'/>
              <img src="https://i.ebayimg.com/images/g/uQ4AAOSwP4FaFcLq/s-l1600.jpg" alt='car-care'/>
              <img id='hook-img' src="https://i.pinimg.com/originals/4e/b8/b1/4eb8b1657032889207280bb970f0d3f4.jpg" alt='hook'/>
          </div>
          <h1 style={{color: "#d4af37", background:'rgba(0, 0, 0, 0.55)', margin: '10px'}}>Ae86 Themed Gold 15 Item Package</h1>
          <div className='exampImg-container-gold'>
               <img src="https://cdn11.bigcommerce.com/s-79xyvl/images/stencil/500x659/products/30986/132073/6__02461.1602171261.jpg?c=2" alt="floorMats"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28bCOkB_v_ApqQHHaiKlJcnPQX9RF4o3U_f5iEjJMY0Bm6XwfooqX50mK8oXuGitBykpwU_g&usqp=CAc" alt="QuickReleaseWheel"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFXs91An88fXZavKmzYcv8cvQleHM5D5J5w&usqp=CAU" alt="Tsurikawa"/>
              <img src="http://cdn.shopify.com/s/files/1/0517/9939/2448/products/1a9d76_457b32d6dfef4f598641d968bc72284b_mv2_1200x1200.jpg?v=1617747054" alt="shiftKnob"/>
              <img src="https://cdn.shopify.com/s/files/1/1358/9279/products/inuyasha_head002.jpg?v=1599573161" alt="Stickers"/>
              <img src="https://i5.walmartimages.com/asr/120c794d-f3f6-4e88-80ac-652966455488_1.d99b3e1b2400c0b4f219ce06009832df.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt='hub'/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVH552IRvQPggfi_Vhm1uBR-Sdt9hePcOakAxAlGLVNRcH5MchDIAspspXGE1oVl4K6rDc2gE&usqp=CAc" alt='led'/>
              <img id='lug-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxj7eezELecZFbz7NG2pKXgmHhQdIuXi02cmPlVtG2kbCP1NoQDzoWYrBX6s33fZ9UkRRCdPX&usqp=CAc" alt='lugs'/>
              <img src="https://www.chemicalguys.eu/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/c/h/chemicalguyseu-spi21716-chemical-guys-wrap-detailer-473ml_1.jpg" alt='car-care'/>
              <img src="https://sc02.alicdn.com/kf/HTB17spvNXXXXXatapXXq6xXFXXXG.jpg" alt='hook'/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3cGxM08YjeRgK5DhEW8v9LdHei6_FrHJKl4PTeiLajoC8i80O9akCJXWLSo0A8anbddWPqo&usqp=CAc" alt='hydroBreak'/>
              <img src="https://www.motostorm.it/images/products/large/caschi_integrali/caberg_driftevo_bianco.jpg" alt='helmet'/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOTBDsJu__dqv-SeAcFxOEWii-eD6onTreUQ&usqp=CAU" alt='gloves'/>
              <img src="https://images.offerup.com/8-egbjC8tOcGmX7-P33dx8m8Urk=/250x294/e746/e746373797514b319290bfe370931a42.jpg" alt='hoodie'/>
              <img src="https://saitoworks.com/wp-content/uploads/2019/12/workshop-banner-preview-tofu-86.png" alt='flag'/>
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