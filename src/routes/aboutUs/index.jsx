import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LayoutDefault from '../../layouts/layoutDefault';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import './index.css';

const AboutUs = () => {
  const showAnswer1 = useRef(null);
  const showAnswer2 = useRef(null);
  const showAnswer3 = useRef(null);
  const showAnswer4 = useRef(null);
  const services = [
    { id: 1, src: 'png-1.png', name: 'کارت اعتباری هدیه' },
    { id: 2, src: 'png-2.png', name: 'پیک منزل' },
    { id: 3, src: 'png-3.png', name: 'مشاوره آنلاین' },
    { id: 4, src: 'png-4.png', name: 'تضمین 100%' },
    { id: 6, src: 'png-7.png', name: 'هدیه' },
    { id: 7, src: 'png-8.png', name: 'خرید مطمئن' },
    { id: 8, src: 'png-9.png', name: 'پرداخت قسطی' },
    { id: 9, src: 'png-10.png', name: 'کیفیت خوب' },
  ];
  return (
    <>
      <LayoutDefault>
        <div className="container my-5">
          <div className="row mx-auto">
            <h5 className="card-title text-center mb-3 acordion-title font-weight-bold ">
              خدمات ما
            </h5>
            <div className="card card-bg py-3 bg-white">
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row justify-center items-center align-center mx-auto px-3">
                    <Swiper
                      loop={true}
                      modules={[Autoplay]}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        360: {
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
                        },
                      }}
                    >
                      {services.map((service) => {
                        return (
                          <SwiperSlide key={service.id}>
                            <div className="col-8">
                              <div className="card brand-card badge">
                                <img
                                  className="rounded"
                                  width={'100px'}
                                  src={require(`../../assets/ico/${service.src}`)}
                                  alt={service.src}
                                />
                              </div>
                              <div className="text-center text-primary">
                                {service.name}
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="text-center acordion-title mt-5">
                پرسش‌های متداول
              </h5>
              <div className="acordion-container bg-light">
                <div className="first-acordion">
                  <div className="content1 my-3">
                    <div
                      className="first-question"
                      onClick={showAnswer1Handler}
                    >
                      <h5>چطور میتوانم سفارشم را پیگیری کنم ؟</h5>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="text-muted"
                      />
                    </div>
                    <div ref={showAnswer1} className="first-answer d-none my-3">
                      <h6 className="text-body">
                        وارد سایت تکنوشاپ شوید. روی گزینه سفارش های من کلیک
                        کنید. در این قسمت با کلیک روی جزییات میتوانید سفارش خود
                        را ببینید. میتوانید در این قسمت روند آماده سازی و مراحل
                        ارسال سفارش خود را پیگیری کنید.
                      </h6>
                    </div>
                  </div>
                  <div className="divider-line"></div>
                </div>
                <div className="second-acordion">
                  <div className="content2 mb-3">
                    <div
                      className="second-question"
                      onClick={showAnswer2Handler}
                    >
                      <h5>چطور میتوانم سفارشم را لغو کنم ؟</h5>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="text-muted"
                      />
                    </div>
                    <div
                      ref={showAnswer2}
                      className="second-answer d-none my-3"
                    >
                      <h6 className="text-body">
                        شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله
                        ایی که از ارسال آن منصرف شدید را لغو نمایید. میتوانید
                        برای مشاهده روند لغو سفارش به توضیحات تکمیلی مراجعه
                        کنید.
                      </h6>
                    </div>
                  </div>
                  <div className="divider-line"></div>
                </div>
                <div className="third-acordion">
                  <div className="content3 mb-3">
                    <div
                      className="third-question"
                      onClick={showAnswer3Handler}
                    >
                      <h5>
                        میتوانم سفارشم را بصورت اقساطی ( اعتباری ) پرداخت کنم؟
                      </h5>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="text-muted"
                      />
                    </div>
                    <div ref={showAnswer3} className="third-answer d-none my-3">
                      <h6 className="text-body">
                        بله، تکنوشاپ تسهیلاتی را فراهم کرده، شما میتوانید تا سقف
                        20 میلیون تومان به صورت اقساط با بازپرداخت 6 ، 9 و 12
                        ماهه از سایت تکنوشاپ خرید کنید.
                      </h6>
                    </div>
                  </div>
                  <div className="divider-line"></div>
                </div>
                <div className="fourth-acordion">
                  <div className="content4">
                    <div
                      className="fourth-question"
                      onClick={showAnswer4Handler}
                    >
                      <h5>هزینه ی ارسال در تکنوشاپ چگونه محاسبه میشود؟</h5>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="text-muted"
                      />
                    </div>
                    <div
                      ref={showAnswer4}
                      className="fourth-answer d-none my-3"
                    >
                      <h6 className="text-body">
                        هزینه ارسال بر اساس شیوه ارسال متفاوت است و در زمان ثبت
                        سفارش نمایش داده می شود.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutDefault>
    </>
  );
  function showAnswer1Handler() {
    showAnswer1.current.classList.toggle('d-none');
  }
  function showAnswer2Handler() {
    showAnswer2.current.classList.toggle('d-none');
  }
  function showAnswer3Handler() {
    showAnswer3.current.classList.toggle('d-none');
  }
  function showAnswer4Handler() {
    showAnswer4.current.classList.toggle('d-none');
  }
};

export default AboutUs;
