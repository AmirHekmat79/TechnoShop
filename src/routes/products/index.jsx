import { useState } from 'react';
import LayoutDefault from '../../layouts/layoutDefault';
import './index.css';
const Products = () => {
  const [Products, setProducts] = useState([
    {
      id: 1,
      name: 'هندزفری ',
      src: 'p_2.jpg',
      discount: '%5',
      price: '2,000,000',
      oldPrice: '1,159,000',
    },
    {
      id: 2,
      name: 'Iphone 13 Pro ',
      src: 'p_7.jpg',
      discount: '%2',
      price: '68,280,000',
      oldPrice: '72,990,000',
    },
    {
      id: 3,
      name: 'ساعت هوشمند ',
      src: 'p_6.jpg',
      discount: '%2',
      price: '4,000,000',
      oldPrice: '3,159,000',
    },
    {
      id: 4,
      name: ' SE  شیائومی ',
      src: 'p_19.jpg',
      discount: '%2',
      price: '16,200,000',
      oldPrice: '25,159,000',
    },
    {
      id: 5,
      name: ' Playstation 5',
      src: 'p_12.jpg',
      discount: '%5',
      price: '29,799,000',
      oldPrice: '27,159,000',
    },
    {
      id: 6,
      name: ' Iphone 14 Pro ',
      src: 'p_21.jpg',
      discount: '%5',
      price: '79,200,000',
      oldPrice: '60,159,000',
    },
    {
      id: 7,
      name: 'نوت 15  شیائومی ',
      src: 'p_20.jpg',
      discount: '%5',
      price: '28,200,000',
      oldPrice: '24,159,000',
    },
    {
      id: 8,
      name: ' سامسونگ  A23 ',
      src: 'p_17.jpg',
      discount: '%5',
      price: '32,200,000',
      oldPrice: '28,159,000',
    },
  ]);

  const [activeButton, setActiveButton] = useState(1);
  return (
    <>
      <LayoutDefault>
        <div className="container my-4">
          <div className="row my-5">
            <div className="col">
              <h5 className="acordion-title text-center">دسته بندی ها</h5>
              <div className="card quantities-classification">
                <button
                  className={
                    activeButton === 1 ? 'active-btn' : 'classification-button'
                  }
                  onClick={() => activeButtonHandler(1)}
                >
                  پربازدیدترین ها
                </button>
                <button
                  className={
                    activeButton === 2 ? 'active-btn' : 'classification-button'
                  }
                  onClick={() => activeButtonHandler(2)}
                >
                  ‌بیشترین فروش‌
                </button>
                <button
                  className={
                    activeButton === 3 ? 'active-btn' : 'classification-button'
                  }
                  onClick={() => activeButtonHandler(3)}
                >
                  پیشنهاد خریداران
                </button>
                <button
                  className={
                    activeButton === 4 ? 'active-btn' : 'classification-button'
                  }
                  onClick={() => activeButtonHandler(4)}
                >
                  ‌براساس قیمت
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            {Products.map((product) => {
              return (
                <div
                  className="col-lg-3 col-sm-6  my-3 text-center"
                  key={product.id}
                >
                  <div className="purchase-product-card">
                    <div className="product-image-container">
                      <img
                        className="product-image"
                        src={require(`../../assets/product_img/${product.src}`)}
                        alt="ProductImage"
                      />
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p className="price">تومان{product.price}</p>
                      <button className="purchase-add-btn">
                        {' '}
                        افزودن به سبد
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </LayoutDefault>
    </>
  );
  function activeButtonHandler(buttonId) {
    setActiveButton(buttonId);
    if (buttonId === 1) {
      setProducts([
        {
          id: 1,
          name: 'هندزفری ',
          src: 'p_2.jpg',
          discount: '%5',
          price: '2,000,000',
          oldPrice: '1,159,000',
        },
        {
          id: 2,
          name: 'Iphone 13 Pro ',
          src: 'p_7.jpg',
          discount: '%2',
          price: '68,280,000',
          oldPrice: '72,990,000',
        },
        {
          id: 3,
          name: 'ساعت هوشمند ',
          src: 'p_6.jpg',
          discount: '%2',
          price: '4,000,000',
          oldPrice: '3,159,000',
        },
        {
          id: 4,
          name: ' SE  شیائومی ',
          src: 'p_19.jpg',
          discount: '%2',
          price: '16,200,000',
          oldPrice: '25,159,000',
        },
        {
          id: 5,
          name: ' Playstation 5',
          src: 'p_12.jpg',
          discount: '%5',
          price: '29,799,000',
          oldPrice: '27,159,000',
        },
        {
          id: 6,
          name: ' Iphone 14 Pro ',
          src: 'p_21.jpg',
          discount: '%5',
          price: '79,200,000',
          oldPrice: '60,159,000',
        },
        {
          id: 7,
          name: 'نوت 15  شیائومی ',
          src: 'p_20.jpg',
          discount: '%5',
          price: '28,200,000',
          oldPrice: '24,159,000',
        },
        {
          id: 8,
          name: ' سامسونگ  A23 ',
          src: 'p_17.jpg',
          discount: '%5',
          price: '32,200,000',
          oldPrice: '28,159,000',
        },
      ]);
    } else if (buttonId === 2) {
      setActiveButton(buttonId);

      setProducts([
        {
          id: 5,
          name: ' Playstation 5',
          src: 'p_12.jpg',
          discount: '%5',
          price: '29,799,000',
          oldPrice: '27,159,000',
        },
        {
          id: 6,
          name: ' Iphone 14 Pro ',
          src: 'p_21.jpg',
          discount: '%5',
          price: '79,200,000',
          oldPrice: '60,159,000',
        },
        {
          id: 7,
          name: 'نوت 15  شیائومی ',
          src: 'p_20.jpg',
          discount: '%5',
          price: '28,200,000',
          oldPrice: '24,159,000',
        },
        {
          id: 8,
          name: ' سامسونگ  A23 ',
          src: 'p_17.jpg',
          discount: '%5',
          price: '32,200,000',
          oldPrice: '28,159,000',
        },
      ]);
    } else if (buttonId === 3) {
      setActiveButton(buttonId);

      setProducts([
        {
          id: 1,
          name: 'هندزفری ',
          src: 'p_2.jpg',
          discount: '%5',
          price: '2,000,000',
          oldPrice: '1,159,000',
        },
        {
          id: 2,
          name: 'Iphone 13 Pro ',
          src: 'p_7.jpg',
          discount: '%2',
          price: '68,280,000',
          oldPrice: '72,990,000',
        },
        {
          id: 3,
          name: 'ساعت هوشمند ',
          src: 'p_6.jpg',
          discount: '%2',
          price: '4,000,000',
          oldPrice: '3,159,000',
        },
        {
          id: 4,
          name: ' SE  شیائومی ',
          src: 'p_19.jpg',
          discount: '%2',
          price: '16,200,000',
          oldPrice: '25,159,000',
        },
        {
          id: 5,
          name: ' Playstation 5',
          src: 'p_12.jpg',
          discount: '%5',
          price: '29,799,000',
          oldPrice: '27,159,000',
        },
        
      ]);
    } else {
      setActiveButton(buttonId);

      setProducts([
        {
          id: 1,
          name: 'هندزفری ',
          src: 'p_2.jpg',
          discount: '%5',
          price: '2,000,000',
          oldPrice: '1,159,000',
        },
        {
          id: 2,
          name: 'Iphone 13 Pro ',
          src: 'p_7.jpg',
          discount: '%2',
          price: '68,280,000',
          oldPrice: '72,990,000',
        },

        {
          id: 7,
          name: 'نوت 15  شیائومی ',
          src: 'p_20.jpg',
          discount: '%5',
          price: '28,200,000',
          oldPrice: '24,159,000',
        },
        {
          id: 8,
          name: ' سامسونگ  A23 ',
          src: 'p_17.jpg',
          discount: '%5',
          price: '32,200,000',
          oldPrice: '28,159,000',
        },
      ]);
    }
  }
};

export default Products;
