'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Instagram, Phone, MapPin, Clock, Star, Sparkles, Eye, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: 'Classic Lash Extensions',
      description: 'Individual lashes applied one-to-one for a natural, elegant look that enhances your eyes.',
      price: 'From R350',
      image: '/images/classic-lash-extensions-closeup.jpg',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Volume Lash Extensions',
      description: 'Multiple ultra-fine lashes per natural lash for dramatic volume and fullness.',
      price: 'From R450',
      image: '/images/volume-lash-extensions-detail.jpg',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Hybrid Lash Extensions',
      description: 'The perfect blend of classic and volume techniques for a textured, wispy look.',
      price: 'From R400',
      image: '/images/classic-lashes-angled-view.jpg',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Lash Lift & Tint',
      description: 'Semi-permanent curl and color for your natural lashes. Wake up with gorgeous lashes!',
      price: 'From R250',
      image: '/images/lash-lift-natural-result.jpg',
      icon: <Sparkles className="w-6 h-6" />
    },
  ]

  const gallery = [
    '/images/classic-lash-extensions-closeup.jpg',
    '/images/volume-lash-extensions-detail.jpg',
    '/images/volume-lashes-front-view.jpg',
    '/images/hybrid-lashes-side-profile.jpg',
    '/images/classic-lashes-angled-view.jpg',
    '/images/mega-volume-lash-set.jpg',
    '/images/lash-lift-natural-result.jpg',
    '/images/russian-volume-overhead.jpg',
  ]

  const testimonials = [
    {
      name: 'Thandi M.',
      rating: 5,
      text: "Mamzi's attention to detail is incredible! My lashes look absolutely stunning and last for weeks. Best lash artist in Kuruman!"
    },
    {
      name: 'Zanele K.',
      rating: 5,
      text: "I've been getting my lashes done by Mamzi for over a year. Professional, clean environment, and the results are always perfect!"
    },
    {
      name: 'Precious N.',
      rating: 5,
      text: "The lash lift and tint changed my morning routine! I wake up looking fresh and ready. Highly recommend Lash Lounge by Mamzi Mkhulu!"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/images/mamzi-lash-lounge-logo.jpg" 
                alt="Lash Lounge" 
                className="h-16 w-16 rounded-full object-cover"
              />
              <span className="font-display text-2xl font-bold text-black">
                Lash<span className="text-primary">Lounge</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-black hover:text-primary transition">Home</a>
              <a href="#services" className="text-black hover:text-primary transition">Services</a>
              <a href="#gallery" className="text-black hover:text-primary transition">Gallery</a>
              <a href="#about" className="text-black hover:text-primary transition">About</a>
              <a href="#contact" className="text-black hover:text-primary transition">Contact</a>
              <a 
                href="https://wa.me/27671125411" 
                target="_blank"
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-pink-600 transition flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-black"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-black hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="block text-black hover:text-primary" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#gallery" className="block text-black hover:text-primary" onClick={() => setIsMenuOpen(false)}>Gallery</a>
              <a href="#about" className="block text-black hover:text-primary" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="block text-black hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a 
                href="https://wa.me/27671125411" 
                target="_blank"
                className="block bg-primary text-white px-6 py-2 rounded-full text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/client-with-branded-mirror.jpg" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Lashes by <span className="text-primary">Mamzi Mkhulu</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Enhance your natural beauty with premium lash extensions, lifts, and tints in Kuruman
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/27671125411" 
              target="_blank"
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Book Appointment</span>
            </a>
            <a 
              href="#services" 
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center space-x-2"
            >
              <span>View Services</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional lash services customized to enhance your unique beauty and boost your confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-primary p-3 rounded-full inline-flex mb-2">
                      {service.icon}
                    </div>
                    <h3 className="font-display text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <a 
                      href="https://wa.me/27671125411" 
                      target="_blank"
                      className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-4">
              Our <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-gray-600 text-lg">
              See the stunning transformations and artistry behind every set of lashes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-4">
              Client <span className="text-primary">Love</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Hear what our satisfied clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-black">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/mamzi-lash-artist-studio.jpg" 
                alt="Mamzi Mkhulu"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-6">
                Meet <span className="text-primary">Mamzi Mkhulu</span>
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                With years of experience and a passion for beauty, I specialize in creating customized lash looks that enhance your natural features and boost your confidence.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                At Lash Lounge, we use only premium quality products and maintain the highest standards of hygiene and safety. Each client receives personalized attention and a lash design tailored to their unique eye shape, lifestyle, and preferences.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Whether you're looking for a natural everyday look or dramatic volume for a special occasion, I'm here to make your lash dreams come true.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-primary p-2 rounded-full">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">Certified Lash Artist</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-primary p-2 rounded-full">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">Premium Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Book your appointment or reach out with any questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="https://wa.me/27671125411" 
              target="_blank"
              className="bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition text-center group"
            >
              <div className="bg-primary p-4 rounded-full inline-flex mb-4 group-hover:scale-110 transition">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">WhatsApp</h3>
              <p className="text-gray-300">067 112 5411</p>
            </a>

            <a 
              href="https://www.instagram.com/mamzi.lash_lounge" 
              target="_blank"
              className="bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition text-center group"
            >
              <div className="bg-primary p-4 rounded-full inline-flex mb-4 group-hover:scale-110 transition">
                <Instagram className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Instagram</h3>
              <p className="text-gray-300">@mamzi.lash_lounge</p>
            </a>

            <div className="bg-white/10 p-8 rounded-2xl text-center">
              <div className="bg-primary p-4 rounded-full inline-flex mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Location</h3>
              <p className="text-gray-300">Kuruman, Northern Cape, South Africa</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/27671125411" 
              target="_blank"
              className="bg-primary text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Book Your Appointment Today</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/images/mamzi-lash-lounge-logo.jpg" 
                alt="Logo" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-display text-xl font-bold">
                Lash<span className="text-primary">Lounge</span>
              </span>
            </div>
            
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://www.instagram.com/mamzi.lash_lounge" target="_blank" className="hover:text-primary transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@mamzi.lash_lounge" target="_blank" className="hover:text-primary transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://wa.me/27671125411" target="_blank" className="hover:text-primary transition">
                <Phone className="w-6 h-6" />
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              © 2025 Mamzi Mkhulu Lash Lounge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
