import Slider from "./components/Slider";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return(
  <div>
  <Announcement></Announcement>
    <Navbar></Navbar>
    <Slider></Slider>
  </div>
  ) 
};

export default App;