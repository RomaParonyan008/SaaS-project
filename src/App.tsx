import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative">
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
