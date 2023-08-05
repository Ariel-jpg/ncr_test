import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Account from "./pages/account";

function App(){
    return <BrowserRouter>
      <Routes>    
        <Route path="/" Component={Home} />
        <Route path="/account" Component={Account} />
      </Routes>
    </BrowserRouter>
}

export default App;