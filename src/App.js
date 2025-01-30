import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
