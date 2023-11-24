
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Iphone14pro from "./components/section1/Iphone14pro";
import Iphone14 from "./components/section2/Iphone14";
import Macbook from "./components/section3/Macbook";
 import "bootstrap/dist/css/bootstrap.min.css"
import WatchTrade from "./components/sec/WatchTrade";
import Sec7 from "./components/section4/Sec7";



function  App() {
  return (
    <div>
      <Header />
     
      <Iphone14pro />
      <Iphone14 />
      <Macbook />
      
      <WatchTrade/>
      <Sec7/>

      <Footer />
    </div>
  );
}

export default App ;



