import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contacts from "./pages/contacts/Contacts"
import Product from "./pages/product/Product"
import Navigator from "./components/Navigator"
import Table from "./pages/Table/Table"
import User from "./pages/user/User"
import { BrowserRouter, Routes, Route} from 'react-router-dom';


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
          <Route path="/users" element={<Table />} /> 
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App