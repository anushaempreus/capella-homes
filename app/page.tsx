import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import TrustBar from '../components/TrustBar'
import About from '../components/About'
import Categories from '../components/Categories'
import Services from '../components/Services'
import Projects from '../components/Projects'
import CTA from '../components/CTA'
import Values from '../components/Values'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <TrustBar />
      <About />
      <Categories />
      <Services />
      <Projects />
      <CTA />
      <Values />
      <Footer />
    </main>
  )
}