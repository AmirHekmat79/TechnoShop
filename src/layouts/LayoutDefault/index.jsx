import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const LayoutDefault = ({children}) =>{
    return (
        <>
         <Navbar/>
         <div className="content">{children}</div>
         <Footer/>
        </>
    )
}

export default LayoutDefault;