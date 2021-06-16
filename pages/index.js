import Hero from '../components/Hero'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <Posts/>
      <Footer/>
    </main>
  )
}
