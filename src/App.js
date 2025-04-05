import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main className="bg-gray-900 text-white">
        <section id="home" className="min-h-screen pt-16">
          <Home />
        </section>

        <section id="about" className="min-h-screen pt-16">
          <About />
        </section>
        
        <section id="experience" className="min-h-screen pt-16">
          <Experience />
        </section>
        
        <section id="projects" className="min-h-screen pt-16">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen pt-16">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;