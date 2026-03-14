import './HomePage.css'
import Header from '../../../Widgets/Header/ui/Header'
import IntroSection from '../../../Widgets/IntroSection/ui/IntroSection'
import AboutUs from '../../../Widgets/AboutUs/ui/AboutUs'

export default function HomePage() {
  return (
    <>
      <Header />
    
      <main>
        <IntroSection />
        <AboutUs />
      </main>

      <footer>
        <h1>FOOTER</h1>
      </footer>

    </>
  )
}
