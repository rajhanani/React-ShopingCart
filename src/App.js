import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { Routes,Route } from "react-router-dom";
import { Products } from "./components/Products";
import { Product } from "./components/Product";


function App() {
  return (
    <div>
     <Nav/>

     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/product/:id" element={<Product/>}></Route>
     
     </Routes>
    </div>
  );
}

export default App;
