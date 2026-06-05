import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import WorkProcess from './components/WorkProcess';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Portfolio />
        <WorkProcess />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
