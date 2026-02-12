'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Instagram, Phone, MapPin, Clock, Star, Sparkles, Eye, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  const services = [
    {
      title: 'Classic Set',
      description: 'Individual lashes applied one-to-one for a natural, elegant look that enhances your eyes.',
      price: 'R250',
      image: '/images/classic-set.jpg',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Cluster Lashes',
      description: 'Pre-made clusters for quick application and beautiful volume.',
      price: 'R260',
      image: '/images/cluster-lashes.png',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Fluffy Clusters',
      description: 'Soft, fluffy clusters for a natural yet voluminous look.',
      price: 'R260',
      image: '/images/fluffy-clusters.jpg',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Hybrid',
      description: 'The perfect blend of classic and volume techniques for a textured, wispy look.',
      price: 'R300',
      image: '/images/hybrid.jpg',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Hybrid Set',
      description: 'Mixed classic and volume lashes for dimensional, natural-looking fullness.',
      price: 'R300',
      image: '/images/hybrid-set.png',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Lash Lift',
      description: 'Semi-permanent curl and color for your natural lashes. Wake up with gorgeous lashes!',
      price: 'R150',
      image: '/images/lash-lift.jpg',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'One Size Lashes',
      description: 'Universal fit lashes designed to suit all eye shapes perfectly.',
      price: 'R300',
      image: '/images/one-size-lashes.png',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Russian Volume',
      description: 'Ultra-fine, multiple lashes per natural lash for maximum dramatic volume.',
      price: 'R400',
      image: '/images/russian-volume.png',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Volume',
      description: 'Multiple ultra-fine lashes per natural lash for dramatic volume and fullness.',
      price: 'R350',
      image: '/images/volume.png',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Volume Set',
      description: 'Full set of volume lashes for stunning, glamorous results.',
      price: 'R350',
      image: '/images/volume-set.png',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Wispy with no Spikes',
      description: 'Soft, wispy lashes without harsh spikes for an elegant, feathery look.',
      price: 'R330',
      image: '/images/wispy-with-no-spikes.png',
      icon: <Star className="w-6 h-6" />
    },
  ]

  const gallery = [
    { image: '/images/classic-lash-extensions-closeup.jpg', title: 'Elegant Classic Extensions' },
    { image: '/images/hybrid.jpg', title: 'Beautiful Hybrid Blend' },
    { image: '/images/volume-lashes-front-view.jpg', title: 'Dramatic Volume Perfection' },
    { image: '/images/classic-set.jpg', title: 'Natural Classic Beauty' },
    { image: '/images/classic-lashes-angled-view.jpg', title: 'Timeless Classic Look' },
    { image: '/images/mega-volume-lash-set.jpg', title: 'Mega Volume Glamour' },
    { image: '/images/lash-lift.jpg', title: 'Lifted & Curled' },
    { image: '/images/fluffy-clusters.jpg', title: 'Soft Fluffy Clusters' },
    { image: '/images/hybrid-set.png', title: 'Hybrid Elegance' },
    { image: '/images/one-size-lashes.png', title: 'Universal Fit Beauty' },
    { image: '/images/russian-volume.png', title: 'Russian Volume Artistry' },
    { image: '/images/volume.png', title: 'Volumized Perfection' },
    { image: '/images/volume-set.png', title: 'Full Volume Glam' },
    { image: '/images/wispy-with-no-spikes.png', title: 'Wispy Dream Lashes' },
    { image: '/images/cluster-lashes.png', title: 'Cluster Perfection' },
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
      text: "The lash lift and tint changed my morning routine! I wake up looking fresh and ready. Highly recommend Lash Lounge by Mamzimkhulu!"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-lg'
          : 'bg-black/30 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <img
                src="/images/mamzi-lash-lounge-logo.jpg"
                alt="Lash Lounge"
                className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-white/20"
              />
              <span className={`font-display text-xl sm:text-2xl font-bold transition-colors ${
                isScrolled ? 'text-black' : 'text-white drop-shadow-lg'
              }`}>
                Lash<span className="text-primary">Lounge</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#home" className={`transition font-medium hover:text-primary ${
                isScrolled ? 'text-black' : 'text-white drop-shadow-md'
              }`}>Home</a>
              <a href="#services" className={`transition font-medium hover:text-primary ${
                isScrolled ? 'text-black' : 'text-white drop-shadow-md'
              }`}>Services</a>
              <a href="#gallery" className={`transition font-medium hover:text-primary ${
                isScrolled ? 'text-black' : 'text-white drop-shadow-md'
              }`}>Gallery</a>
              <a href="#about" className={`transition font-medium hover:text-primary ${
                isScrolled ? 'text-black' : 'text-white drop-shadow-md'
              }`}>About</a>
              <a href="#contact" className={`transition font-medium hover:text-primary ${
                isScrolled ? 'text-black' : 'text-white drop-shadow-md'
              }`}>Contact</a>
              <a
                href="https://wa.me/27671125411"
                target="_blank"
                className="bg-primary text-white px-5 lg:px-6 py-2 rounded-full hover:bg-pink-600 transition flex items-center space-x-2 font-medium shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition ${
                isScrolled
                  ? 'text-black hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t shadow-lg overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-6 space-y-3">
            <a href="#home" className="block text-black hover:text-primary transition font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" className="block text-black hover:text-primary transition font-medium py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#gallery" className="block text-black hover:text-primary transition font-medium py-2" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#about" className="block text-black hover:text-primary transition font-medium py-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="block text-black hover:text-primary transition font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a
              href="https://wa.me/27671125411"
              target="_blank"
              className="block bg-primary text-white px-6 py-3 rounded-full text-center font-medium hover:bg-pink-600 transition mt-4"
            >
              Book Now
            </a>
          </div>
        </div>
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
            Lashes by <span className="text-primary">Mamzimkhulu</span>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group w-full max-w-sm flex flex-col h-full"
              >
                <div
                  className="relative h-56 overflow-hidden flex-shrink-0 cursor-pointer"
                  onClick={() => setSelectedImage({ src: service.image, title: service.title })}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-primary p-2.5 rounded-full inline-flex mb-2">
                      {service.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-4 text-sm flex-grow">{service.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <a
                      href="https://wa.me/27671125411"
                      target="_blank"
                      className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition text-sm font-medium whitespace-nowrap"
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage({ src: item.image, title: item.title })}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                </div>
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
                alt="Mamzimkhulu"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-6">
                Meet <span className="text-primary">Mamzimkhulu</span>
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
              <p className="text-gray-300">739 M.M Tshetlho Street, Mothibistad, Northern Cape, 8474, South Africa</p>
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
      <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* About Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/images/mamzi-lash-lounge-logo.jpg"
                  alt="Logo"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="font-display text-xl font-bold">
                  Lash<span className="text-primary">Lounge</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium lash extensions, lifts, and tints by Mamzimkhulu. Enhancing your natural beauty with expert care and quality products in Kuruman.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-primary transition text-sm">Home</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-primary transition text-sm">Services</a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-400 hover:text-primary transition text-sm">Gallery</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-primary transition text-sm">About</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-primary transition text-sm">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-display text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="https://wa.me/27671125411" target="_blank" className="text-gray-400 hover:text-primary transition text-sm">
                      067 112 5411
                    </a>
                    <p className="text-gray-500 text-xs">WhatsApp Available</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">
                      739 M.M Tshetlho Street<br />
                      Mothibistad, Northern Cape<br />
                      8474, South Africa
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">By Appointment Only</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-display text-lg font-bold mb-4">Follow Us</h3>
              <p className="text-gray-400 text-sm mb-4">
                Stay updated with our latest work and special offers
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/mamzi.lash_lounge"
                  target="_blank"
                  className="bg-white/10 p-3 rounded-full hover:bg-primary transition group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition" />
                </a>
                <a
                  href="https://www.tiktok.com/@mamzi.lash_lounge"
                  target="_blank"
                  className="bg-white/10 p-3 rounded-full hover:bg-primary transition group"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/27671125411"
                  target="_blank"
                  className="bg-white/10 p-3 rounded-full hover:bg-primary transition group"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2026 Mamzimkhulu Lash Lounge. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Developed by <a href="https://sifisoft.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-pink-400 transition font-medium">SifiSoft</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition p-2 bg-black/50 rounded-full hover:bg-black/70 z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative flex flex-col items-center justify-center max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-lg">
              <h3 className="text-white font-display text-xl md:text-2xl font-bold text-center">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
