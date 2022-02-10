import NavBar from "./components/NavBar";
import Home from "./pages/Home"
import Detail from "./pages/Detail"

import { BrowserRouter, Route, Routes} from "react-router-dom"


const App = () => {

  return (
    <BrowserRouter> 
      <div className="bg-repeat bg-yellow-200 h-full min-h-screen flex flex-col items-center px-36 py-8">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:menuId" element={<Detail />} />
        </Routes>

      </div>    
    </BrowserRouter>
  )
};

export default App;
