import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contacts from "./pages/contacts/Contacts"
import Product from "./pages/product/Product"
import Navigator from "./components/Navigator"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';


const App = () => {
  return (
     <BrowserRouter>
      <div>
       <Navigator/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App