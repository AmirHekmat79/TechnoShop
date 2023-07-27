import {useRef} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus, faGift, faInfoCircle, faLayerGroup, faSearch, faTags, faUser } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    const ulRef = useRef(null);
    const shopNavIcon1 = useRef(null);
    const shopNavIcon2 = useRef(null);
    return (  <>
          <div className='nav-wrapper'>
            <nav>
              <div className='container-fluid nav-sub-container'>
                <div className='brand-logo-container'>
                  <a className='nav-brand'>تکنوشاپ</a>
               </div>
                <form className="searchbox">
                <input type="search" placeholder="Search" />
                <button type="submit" value="search">&nbsp;</button>
                </form>
                <div className="small-search-box">
                <button className="btn-search"><FontAwesomeIcon className='faSearch' icon={faSearch}></FontAwesomeIcon></button>
                <input type="text" className="input-search" placeholder="Type to Search..."/>
              </div>
                <div className='hamber-menu' onClick={navbarDisplayChecker}>
                <div className="bar1"></div>
                <div className="bar3"></div>
                <div className="bar2"></div>
                </div>
                </div>
               
                <ul ref={ulRef} className='nav-links-container'>
                 <div ref={shopNavIcon2} className='link-group-1'>
                 <li className='list-item'> <NavLink className='link text-decoration-none mx-2' to='/'><FontAwesomeIcon className="mx-2 text-primary" icon={faLayerGroup}/> خانه </NavLink></li>
                  <li className='list-item'> <NavLink className='link text-decoration-none mx-2' to='/products'><FontAwesomeIcon className="mx-2 text-primary" icon={faGift}/> دسته بندی کالاها </NavLink></li>
                  <li className='list-item'> <NavLink className='link text-decoration-none mx-2' to='/suggestions'><FontAwesomeIcon className="mx-2 text-primary" icon={faTags}/>  پیشنهادات و تخفیفات </NavLink></li>
                  <li className='list-item'> <NavLink className='link text-decoration-none mx-2' to='/aboutus'><FontAwesomeIcon className="mx-2 text-primary" icon={faInfoCircle}/> درباره ما </NavLink></li>
                 </div>
                  <div ref={shopNavIcon1} className='link-group-2'>
                  <li className='list-item'>
                          <NavLink className='link text-decoration-none ' to='/purchases'><FontAwesomeIcon  className="mx-2 mx-md-4 cartIcon text-primary" icon={faCartPlus}/></NavLink>
                      </li>
                    <li  className='list-item'>
                            <NavLink className='link text-decoration-none' to='/login'><FontAwesomeIcon  className="userIcon text-primary" icon={faUser}/></NavLink>
                    </li>
                  </div>
                </ul>
            </nav>
          </div>
    </>);
    function navbarDisplayChecker(e){
     if(ulRef.current.className === 'show') {
       shopNavIcon1.current.className = 'l-2';
       shopNavIcon2.current.className = 'l-1';
       ulRef.current.className = 'd-none';
      
     }else{
      ulRef.current.className = 'show';
      

      }

    }
}
 
export default Navbar;