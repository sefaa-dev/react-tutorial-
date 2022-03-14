import { Link, Route, Routes } from "react-router-dom";
import ProducttList from "./antDesignSample/ProducttList";
import ProList from "./antDesignSample/ProducttList";
import CartHeader from "./cartSample/CartHeader";
import ProductList from "./cartSample/ProductList";
import AddCategory from "./fetchSample/AddCategory";
import FetchSample from "./fetchSample/FetchSample";
import ProductPage from "./fetchSample/ProductPage";
import AboutPage from "./routingSample/AboutPage";
import ContactPage from "./routingSample/ContactPage";
import Home from "./routingSample/Home";
import SupplierDetail from "./routingSample/SupplierDetail";
import SupplierPage from "./routingSample/SupplierPage";
import { CartProvider } from "./store/cartContext";




function App() {

  const group = {
    name: 'Moonspel',
    year: 1992,
    detail: {
      albumCount: 5
    }
  }


  const linkStyle = {
    textDecoration: 'none'
  }


  return (
    <>

    <ProducttList></ProducttList>

      {/* <CartProvider> */}
      {/* <CartHeader></CartHeader> */}
      {/* <div>
      <nav style={{display:'flex', justifyContent:'space-around'}}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/suppliers" style={linkStyle}>Suppliers</Link>
      </nav>
    </div>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/suppliers' element={<SupplierPage/>}></Route>
        <Route path='/suppliers/detail/:id' element={<SupplierDetail/>}></Route>
      </Routes> */}
      {/* <ProductList></ProductList> */}

      {/* </CartProvider> */}
    </>

  );
}

export default App;
