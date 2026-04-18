import './HomePage.css'
import Header from '../../../Widgets/Header/ui/Header'
import IntroSection from '../../../Widgets/IntroSection/ui/IntroSection'
import AboutUs from '../../../Widgets/AboutUs/ui/AboutUs'
import Footer from '../../../Shared/Footer/ui/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
    
      <main>
        <IntroSection />
        <AboutUs />
      </main>

      <Footer />      

    </>
  )
}
