import LayoutDefault from '../../layouts/layoutDefault';
import BestSellersCards from '../../components/BestSellersCards';
import ProductBannerSlider from '../../components/ProductBannerSlider';
import TechnoShopBenefits from '../../components/TechnoShopBenefits';
import WidgetCards from '../../components/WidgetCards';
import TechnologyBanners from '../../components/TechnologyBanners';
import '../landing/index.css';
import IncredibleProductsCards from '../../components/IncredibleProductsCards';
import UsersSugestion from '../../components/UsersSugestion';
import Brands from '../../components/Brands';


const Landing = () => {
  return (
    <>
      <header>
        <div className="container-fluid banner">
          <div className="row">
            <img
              src={require('../../assets/banner_img/bg_top.jpg')}
              alt="img"
            />
          </div>
        </div>
      </header>

      <LayoutDefault>
        <ProductBannerSlider />
        <TechnoShopBenefits />
        <IncredibleProductsCards />
        <WidgetCards />
        <BestSellersCards />
        <TechnologyBanners />
        <Brands />
        <UsersSugestion />
      </LayoutDefault>
    </>
  );
};

export default Landing;
