import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from './components/HeroSection';
import YourFault from './components/YourFault';
import BlueCards from './components/BlueCards';
import YouGet from './components/YouGet';
import Targetgroup from './components/Targetgroup';
import Separation from './components/Separation';
import FindOut from './components/FindOut';
import Lawyer from './components/Lawyer';
import Nonbinding from './components/Nonbinding';
import Footer from './components/Footer';
import OurClients from './components/OurClients';
import BackToTop from './components/BackToTop';
function App() {
  return (
    <div className=' overflow-hidden max-w-2560 mx-auto'>
      <HeroSection />
      <YourFault />
      <BlueCards />
      <YouGet />
      <Targetgroup />
      <Separation />
      <FindOut />
      <Lawyer />
      <OurClients />
      <Nonbinding />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
