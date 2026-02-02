import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { StickyContactBar } from './components/layout/StickyContactBar'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { HeroBrandbook } from './components/sections/HeroBrandbook'
import { Objects } from './components/sections/Objects'
import { Philosophy } from './components/sections/Philosophy'
import { Trust } from './components/sections/Trust'
import { Values } from './components/sections/Values'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />
      <main>
        <HeroBrandbook />
        <About />
        <Philosophy />
        <Values />
        <Objects />
        <Trust />
        <Contact />
      </main>
      <Footer />
      <StickyContactBar />
    </div>
  )
}

export default App
