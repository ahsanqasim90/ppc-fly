
import './App.css';
import Nav from './component/Nav';
import Author from './component/Author';
import Social from './component/Social';
import Whyus from './component/Whyus';
import TopbrandTrustUs from './component/TopbrandTrustUs';
import ExploreSol from './component/ExploreSol';
import Provenprocess from './component/Provenprocess';
import Marketing from './component/Marketing';
import Client from './component/Clients';
import Clutchreview from './component/Clutchreview';
import Stratigic from './component/Stratigic'
import Testimonials from './component/Testimonials';
import SeoDevel from './component/SeoDevel';
import Map from './component/Map';
import Footer from './component/Footer';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <>
   

<div className="navbar-main-div">
  <div className="left-nav"><p> Navigating Success in the Digital Marketing Landscape.</p></div>
  <div className="right-nav"><p><a href="/" id="right-nav-id"><i className="fa-solid fa-envelope"></i>contact@ppcfly.com</a></p></div>
</div>


<Nav className='position-fixed'/>

<Author/>



<Social/>

<Whyus/>

<TopbrandTrustUs/>

<ExploreSol/>

<Provenprocess/>

<Marketing/>

<Client/>

<Clutchreview/>
<Stratigic/>



<SeoDevel/>

<Testimonials/>

<Map/>

<Footer/>





       
       
      
        
    </>
    </div>
  );
}

export default App;
