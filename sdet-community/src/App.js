// In App.js and Card.jsx, modify the import paths to:
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
// import Home from './components/Home';
import MemberProfiles from './components/MemberProfiles';
import FAQs from './components/FAQs';  // Ensure the path is correct
import Home from './components/Home';
import Partners from './components/Partners';
import NewsAndEvents from './components/NewsAndEvents';  // Remove this if not used
import MemberProfiles from './components/MemberProfiles';


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Home/>
      <AboutUs/>
      <MemberProfiles/>
      <Partners/>
      <NewsAndEvents/>
      <FAQs/>
      <Blog/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
