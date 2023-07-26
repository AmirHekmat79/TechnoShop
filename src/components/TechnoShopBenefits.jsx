import { useState } from "react";
const TechnoShopBenefits = () => {
    const [shopBenefits ] = useState([
        {name : 'خریداقساطی' , src : '3.png'},
        {name : 'تکنوپلاس' , src : '6.png'},
        {name : 'تکنو مارکت' , src :'1.png'} ,
        {name : 'هدیه خرید' , src :'7.png'}
    
    ])
    return (  <>
               <div className="container my-5">
                <div className="row justify-center items-center align-center">
                        {shopBenefits.map((shopBenefit)=>{
                            return (<div className="col-md-4 text-center shadow-lg mx-auto  my-2 p-2" key={shopBenefit.name} style={{ width : '120px' , height : '120px',border: '2px solid #eee' , borderRadius : '50%', }}>
                                        <img width={50} className="my-2" src={require(`../assets/Techno/minilogo/${shopBenefit.src}`)} alt={shopBenefit.name}/>
                                        <h6 className="text-info">{shopBenefit.name}</h6>
                                    </div>
                                )
                        })}
                </div>
               </div>
    
             </>);
}
 
export default TechnoShopBenefits;