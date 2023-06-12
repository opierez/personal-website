import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Socials from './components/Socials'
import Blog from './components/Blog';
import 'bootstrap/dist/css/bootstrap.min.css' 

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner /> 
      <About />
      <Projects />
      <Testimonials />
      <Blog /> 
      <Socials />
    </div>
  );
}

export default App;
