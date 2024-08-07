import Basket from "./pages/Basket.js";
import Main from "./pages/Main.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductItem from "./pages/ProductItem.js";
import ShowProduct from "./components/ShowProduct/ShowProduct.js";

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/basket" element={<Basket/>}/>
              <Route path="/productitem" element={<ProductItem/>}/>
              <Route path="/productitem/:id" element={<ShowProduct/>}/>
          </Routes>
     </BrowserRouter>
     </div>
    </div>
  );
}

export default App;