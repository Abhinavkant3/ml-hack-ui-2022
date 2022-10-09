
import { Navigation } from "./pages/landingPage/components/navigation";
import SmoothScroll from "smooth-scroll";
import { Route, Routes } from 'react-router-dom';
import LandingPage  from './pages/landingPage/LandingPage';
import "./App.css";
import 'antd/dist/antd.css';
import DynamicCreatives from "./pages/dynamicCreatives/DynamicCreatives";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/dynamic-creatives' element={<DynamicCreatives/>} />
      </Routes>
    </div>
  );
};

export default App;
