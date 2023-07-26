import { useState } from 'react';
import {Autoplay ,  Navigation} from 'swiper/modules';
import { Swiper ,SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import '../styles/IncredibleProducts.css';

const IncredibleProductsCards = () => {
    const timeZone = new Date();
    let day = timeZone.getDay();
   
    const [incredibleProducts ] = useState([
        {id :1 , name : 'هندزفری ' , src : 'p_2.jpg' , discount : '%5' , price : '2,000,000' , oldPrice : '1,159,000'},
        {id :2 , name : 'Iphone 13 Pro ' , src : 'p_7.jpg' , discount : '%2' , price : '68,280,000' , oldPrice : '72,990,000'},
        {id :3 , name : 'ساعت هوشمند ' , src : 'p_6.jpg' , discount : '%2' , price : '4,000,000' , oldPrice : '3,159,000'} ,
        {id :4 , name : ' SE  شیائومی ' , src : 'p_19.jpg' , discount : '%2' , price : '16,200,000' , oldPrice : '25,159,000'},
        {id :5 , name : ' Playstation 5' , src : 'p_12.jpg' , discount : '%5' , price : '29,799,000' , oldPrice : '27,159,000'},
        {id :6 , name : ' Iphone 14 Pro ' , src : 'p_21.jpg' , discount : '%5' , price : '79,200,000' , oldPrice : '60,159,000'},
        {id :7 , name : 'نوت 15  شیائومی ' , src : 'p_20.jpg' , discount : '%5' , price : '28,200,000' , oldPrice : '24,159,000'},
        {id :8 , name : 'کیبورد گیم ' , src : 'p_14.jpg' , discount : '%5' , price : '3000000' , oldPrice : '2,300,000'} ,
        {id :9 , name : ' سامسونگ  A23 ' , src : 'p_17.jpg' , discount : '%5' , price : '32,200,000' , oldPrice : '28,159,000'}
    ])
    return ( <>
               <div className="container mb-5" id='fadeshow2'>
                <div className="row">
                <div className="card bg-white shadow py-3">
                  <div className="card-header">
                            <img  style={{maxWidth : '300px' , borderRadius : '1px'}} src={require('../assets/shegeft_1.png')} alt="bestSellers" />
                            <span className='timeZoneElement badge badg-pill p-2 bg-primary d-none d-sm-inline'>دقیقه<span className='mx-2'>{timeZone.getMinutes()}</span>  :ساعت <span className='mx-2'>{timeZone.getHours()}</span>:روز<span className='mx-2'>{setInterval(()=>{
                                   day-=1
                            },864000)}  </span> </span>
                    </div>
                        <div className='card-body px-5'>
                        <div className='container-fluid'>
                           <div className='row justify-center items-center align-center mx-auto px-3'>
                           <Swiper 
                            loop= {true}
                            modules={[Autoplay ,Navigation ]}
                            navigation
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            // breakpoints={{
                            //     360:{
                            //         width: 360,
                            //         slidesPerView: 2,
                            //     },
                            //    576: {
                            //       width: 576,
                            //       slidesPerView: 3,
                            //     },
                            //     768: {
                            //         width: 768,
                            //         slidesPerView: 4,
                            //       } 
                               
                            // }}
                            >
                      
                            {
                                incredibleProducts.map((product)=>{
                                    return(
                                      <SwiperSlide  key={product.id}>
                                      <div className='col  mx-auto'>
                                          <div className='card bg-light mx-3  rounded product-card'  style={{height : '100%'}} >
                                                    <div className='card-header mx-auto '> 
                                                        <img className='img-fluid rounded' width={'100%'} src={require(`../assets/product_img/${product.src}`)} alt={product.name} />
                                                       
                                                    </div>
                                                    <div className='card-body px-3 text-center'>
                                                        <h6>{product.name}</h6>
                                                        <div className='d-flex mx-auto justify-space-between items-center'>
                                                        <del className='text-center text-muted mx-auto'>{product.oldPrice}</del>
                                                        <div className='badge bg-primary mx-auto rounded-circle'>{product.discount}</div>
                                                        </div>
                                                        <div className='text-center  mx-auto'>{product.price}<span className='d-none d-md-inline'>تومان</span></div>
                                                    </div>
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
                    <a href="#" style={{width: '30%' , margin:'auto'}} className="btn badge text-center badge-pill px-5 py-3 btn-primary d-none d-lg-block">مشاهده بیشتر</a>
                </div>
                </div>
             </div> 
            </> );
}
 
export default IncredibleProductsCards;