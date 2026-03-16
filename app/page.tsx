import Hero from '@/components/Hero'
import Services from '@/components/Services'
import FeaturedListings from '@/components/FeaturedListings'
import AboutUs from '@/components/AboutUs'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedListings />
      <AboutUs />
      <Testimonials />
      <ContactForm />
    </>
  )
}
