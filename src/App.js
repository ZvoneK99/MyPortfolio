import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cursor from './components/Cursor/Cursor';
import NavbarComponent from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Cursor />
      <NavbarComponent />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
