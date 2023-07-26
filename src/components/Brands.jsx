import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
// import '../styles/IncredibleProducts.css'
import '../styles/brands.css';
const Brands = () => {
    const [brands] = useState([
        {id : 1 , src : 'brand-1.jpg'},
        {id : 2 , src : 'brand-2.jpg'},
        {id : 3 , src : 'brand-3.jpg'},
        {id : 4 , src : 'brand-4.jpg'},
        {id : 5 , src : 'brand-5.jpg'},
        {id : 6 , src : 'brand-6.jpg'},
        {id : 7 , src : 'brand-7.jpg'},
        {id : 8 , src : 'brand-8.jpg'},
        {id : 9 , src : 'brand-9.jpg'},
        {id : 10 , src : 'brand-10.jpg'},
    ])
    return ( <>
              <div className='container'>
                <div className='row mx-auto'>
                   <div className='card card-bg py-3'>
                   <div className='card-header'>
                   <h5 className='card-title text-primary '>
                        محبوب‌ ترین برندها    
                    </h5>
                   </div>

                   <div className='card-body'>
                   <div className='container-fluid'>
                   <div className='row justify-center items-center align-center mx-auto px-3'>
                   <Swiper 
                            loop= {true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                360:{
                                    width: 360,
                                    slidesPerView: 2,
                                },
                               576: {
                                  width: 576,
                                  slidesPerView: 3,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 4,
                                  } 
                               
                            }}
                            >
                   {
                        brands.map((brand)=>{
                            return(
                                <SwiperSlide  key={brand.id}>
                                <div className='col-8'>
                                    <div className='card brand-card badge'>
                                        <img className='rounded' width={'100px'} src={require(`../assets/brands/${brand.src}`)} alt={brand.src}/>       
                                    </div>
                                </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    </Swiper>
                   </div>
                   </div>
                   </div>
                   </div>
                </div>
              </div>
            </> );
}
 
export default Brands;