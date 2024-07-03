import Navbarr from './pages/navbar/navbar';
import Intro from './pages/intro/intro';
import Crew from './pages/crew/crew';
import About from './pages/about/about';
import Works from './pages/works/works';
import Gallery from './pages/gallery/gallery';
import Contact from './pages/contact/contact';
import Footer from './pages/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='main' id='home'>
        <Navbarr />
        <Intro />
        <br />
        <h1 className='h1-heading'>Our Members</h1>
        <br />
        <Crew />
        <br />
        <h1 id='about' className='h1-heading'>About Us</h1>
        <br />
        <About />
        <br />
        <h1 id='works' className='h1-heading'>Our Works</h1>
        <br />
        <Works />
        <br />
        <h1 id='gallery' className='h1-heading'>Gallery</h1>
        <br />
        <Gallery />
        <br />
        <h1 id='contact' className='h1-heading'>Contact Us</h1>
        <br />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
