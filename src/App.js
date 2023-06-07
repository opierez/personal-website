import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import 'bootstrap/dist/css/bootstrap.min.css' 

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner /> 
      <Skills />
      <Projects />
      <Testimonials />
    </div>
  );
}

export default App;
