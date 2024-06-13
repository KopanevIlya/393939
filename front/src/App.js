import Main from "./pages/Main.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
          </Routes>
     </BrowserRouter>
     </div>
    </div>
  );
}

export default App;