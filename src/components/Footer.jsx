import '../styles/footer.css';
const Footer = () => {
    return ( <>
              <footer className="mt-3 px-4">
                <div className="container-fluid">
                    <div className="row justify-content-center align-center">
                        <div className="col-lg-3  col-md-6 my-5">
                            <h6 className='text-primary'>درباره ما</h6>
                            <div className="divider"></div>
                            <p className='my-4 about-line'>یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی  باکیفیت و با قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند ؛ ویژگی‌هایی که فروشگاه تکنوشاپ  بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 my-5">
                            <h6 className='text-primary'>خدمات مشتریان</h6>
                            <div className="divider"></div>
                            <ul className='list-container my-4'>
                                <li className='my-2'><a href='#' className='text-decoration-none' >ارسال فوری</a></li>
                                <li className='my-2'><a href='#'  className='text-decoration-none'>پشتیبانی سریع </a></li>
                                <li className='my-2'><a href='#' className='text-decoration-none'>بازگشت وجه </a></li>
                                <li className='my-2'><a href='#' className='text-decoration-none' >بسته بندی کالا </a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3  col-md-6  my-5">
                            <h6 className='text-primary'>با تکنو شاپ  </h6>
                            <div className="divider"></div>
                            <ul className='list-container my-4'>
                                <li className='my-2'><a href='#' className='text-decoration-none' > تامین کالا همکار</a></li>
                                <li className='my-2'><a href='#'  className='text-decoration-none'>تخفیف سازمانی </a></li>
                                <li className='my-2'><a href='#' className='text-decoration-none'>تماس با ما </a></li>
                                <li className='my-2'><a href='#' className='text-decoration-none' >درباره ما </a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3  col-md-6 my-5">
                            <h6 className='text-primary'>مجوزات </h6>
                            <div className="divider"></div>
                            <div className='my-4'>
                                <img width={'90px'} src={require('../assets/License_1.png')} alt="license1" className='rounded ml-3'/>
                                <img width={'90px'} src={require('../assets/License_2.png')} alt="license2" className='rounded mx-3'/>
                            </div>
                        </div>
                    </div>
                </div>
              </footer>
            </> );
}
 
export default Footer;