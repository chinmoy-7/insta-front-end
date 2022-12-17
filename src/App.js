import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Layout/LandingPage";
import PostView from "./Layout/PostView";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/post" element={<PostView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
