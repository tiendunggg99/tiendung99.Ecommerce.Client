import { Route,Routes } from "react-router-dom";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";

function Content() {
    return ( <div className="Content">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </div> );
}

export default Content;