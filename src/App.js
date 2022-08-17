
import './App.css';
import  Header  from './Components/Header/Header';
import  Footer  from './Components/Footer/Footer';
import { BrowserRouter, Route, Router,Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
function App() {
  return (
    <>
    <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
    <Header/>

    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/quiz" element={<Quiz/>} />
    <Route path="/result" element={<Result/>} />
   </Routes>

    </div>
    <Footer/>
    </>
  );
}

export default App;
