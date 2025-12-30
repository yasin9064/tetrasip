'use client';

import { ArrowRight, Menu, X, CheckCircle, Package, Truck, Shield, Award, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#39468D]/5 to-[#9D3875]/5 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-[#39468D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="shrink-0">
              <a href="#" className="flex items-center">
                <Image 
                  src="/images/Tetra Logo.png" 
                  alt="Tetra Sip Logo" 
                  width={90} 
                  height={30}
                  className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto transition-all"
                  priority
                />
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-1">
              <a href="#" className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-[#39468D] hover:bg-[#39468D]/5 rounded-lg transition-all font-medium">Home</a>
              <a href="#designs" className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-[#39468D] hover:bg-[#39468D]/5 rounded-lg transition-all font-medium">Designs</a>
              <a href="#why-choose" className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-[#39468D] hover:bg-[#39468D]/5 rounded-lg transition-all font-medium">Why Choose Us</a>
              <a href="#services" className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-[#39468D] hover:bg-[#39468D]/5 rounded-lg transition-all font-medium">Services</a>
              <a href="#contact" className="px-3 lg:px-4 py-2 text-sm lg:text-base bg-gradient-to-r from-[#39468D] to-[#9D3875] text-white rounded-lg hover:opacity-90 transition-all font-medium shadow-lg shadow-[#39468D]/30">
                Contact
              </a>
            </nav>
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-[#39468D]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:text-[#39468D] hover:bg-[#39468D]/5 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#designs" className="block px-4 py-2 text-gray-700 hover:text-[#39468D] hover:bg-[#39468D]/5 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Designs</a>
              <a href="#why-choose" className="block px-4 py-2 text-gray-700 hover:text-[#39468D] hover:bg-[#39468D]/5 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</a>
              <a href="#services" className="block px-4 py-2 text-gray-700 hover:text-[#39468D] hover:bg-[#39468D]/5 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#contact" className="block px-4 py-2 bg-gradient-to-r from-[#39468D] to-[#9D3875] text-white rounded-lg text-center" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#39468D]/20 via-[#9D3875]/20 to-[#DF5656]/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight mb-4 sm:mb-6">
                  Premium Custom
                  <span className="block bg-gradient-to-r from-[#39468D] to-[#9D3875] bg-clip-text text-transparent">
                    Water Bottles
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                  Elevate your brand with premium quality, custom-designed water bottles. Perfect for events, corporate gifting, and special occasions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
                  <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#39468D] to-[#9D3875] text-white font-bold rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-xl shadow-[#39468D]/30 flex items-center justify-center">
                    Get Free Quote <ArrowRight className="ml-2" size={18} />
                  </button>
                  <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-white text-[#39468D] font-bold rounded-xl hover:bg-[#39468D]/5 transition-all border-2 border-[#39468D]">
                    View Designs
                  </button>
                </div>
              </div>
              <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/images/water bottle.jpg" 
                    alt="Custom Water Bottles" 
                    width={600} 
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-[#39468D] rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-[#9D3875] rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
                Why Choose <span className="bg-gradient-to-r from-[#39468D] to-[#9D3875] bg-clip-text text-transparent">Tetra Sip</span>
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
                We combine premium quality with exceptional service to deliver water bottles that make a statement
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#39468D]/5 to-[#9D3875]/5 border border-[#39468D]/10 hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#39468D] to-[#9D3875] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Premium Quality</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We use only the finest materials and cutting-edge printing technology to ensure your bottles look stunning and last long.
                </p>
              </div>
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#39468D]/5 to-[#9D3875]/5 border border-[#39468D]/10 hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#39468D] to-[#9D3875] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Package className="text-white" size={24} />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Custom Designs</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our expert design team works with you to create unique, eye-catching labels that perfectly represent your brand.
                </p>
              </div>
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#39468D]/5 to-[#9D3875]/5 border border-[#39468D]/10 hover:shadow-xl transition-all transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#39468D] to-[#9D3875] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Truck className="text-white" size={24} />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Fast Delivery</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We understand deadlines matter. Our streamlined process ensures quick turnaround times without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Designs Section */}
        <section id="designs" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-[#39468D]/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
                Our <span className="bg-gradient-to-r from-[#39468D] to-[#9D3875] bg-clip-text text-transparent">Designs</span>
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
                Explore our collection of stunning custom water bottle designs for every occasion
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { src: "/images/labels/Shrishti Sweets.jpg", title: "Shrishti Sweets", description: "Custom label for sweets brand" },
                { src: "/images/labels/TetraSip.jpg", title: "TetraSip", description: "Brand label design" },
                { src: "/images/labels/Wedding.jpg", title: "Wedding", description: "Elegant wedding label design" }
              ].map((label, index) => (
                <div key={index} className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-white">
                  <div className="aspect-square relative overflow-hidden bg-slate-50">
                    <Image 
                      src={label.src} 
                      alt={label.title} 
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{label.title}</h4>
                      <p className="text-xs sm:text-sm opacity-90">{label.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
                Our <span className="bg-gradient-to-r from-[#39468D] to-[#9D3875] bg-clip-text text-transparent">Services</span>
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
                Comprehensive solutions for all your custom water bottle needs
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-5 sm:p-6 rounded-xl border-2 border-[#39468D]/10 hover:border-[#39468D] hover:shadow-lg transition-all bg-white">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#39468D]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Shield className="text-[#39468D]" size={20} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Custom Bottles</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Wide range of sizes and styles</p>
              </div>
              <div className="p-5 sm:p-6 rounded-xl border-2 border-[#39468D]/10 hover:border-[#39468D] hover:shadow-lg transition-all bg-white">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#39468D]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <CheckCircle className="text-[#39468D]" size={20} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Healthy Water</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Pure, premium quality water</p>
              </div>
              <div className="p-5 sm:p-6 rounded-xl border-2 border-[#39468D]/10 hover:border-[#39468D] hover:shadow-lg transition-all bg-white">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#39468D]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Truck className="text-[#39468D]" size={20} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Fresh Delivery</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Timely and secure delivery</p>
              </div>
              <div className="p-5 sm:p-6 rounded-xl border-2 border-[#39468D]/10 hover:border-[#39468D] hover:shadow-lg transition-all bg-white">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#39468D]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Package className="text-[#39468D]" size={20} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Bulk Orders</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Special pricing for large orders</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#39468D] to-[#9D3875] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4">Get In Touch</h3>
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-2 sm:px-0">
                Ready to create something amazing? Let&apos;s talk about your custom water bottle needs
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              <div>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 sm:p-4 text-sm sm:text-base bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#DF5656] focus:border-transparent" 
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-3 sm:p-4 text-sm sm:text-base bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#DF5656] focus:border-transparent" 
                    />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-3 sm:p-4 text-sm sm:text-base bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#DF5656] focus:border-transparent" 
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="w-full p-3 sm:p-4 text-sm sm:text-base bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#DF5656] focus:border-transparent resize-none" 
                  ></textarea>
                  <button 
                    type="submit" 
                    className="w-full py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#39468D] to-[#9D3875] text-white font-bold rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-xl shadow-[#39468D]/30"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-[#DF5656]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Phone</h4>
                    <p className="text-sm sm:text-base text-white/80">+91-7739595607</p>
                    <p className="text-sm sm:text-base text-white/80">+91-7992346266</p>
                    <p className="text-sm sm:text-base text-white/80">+91-7970614133</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-[#DF5656]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Email</h4>
                    <p className="text-sm sm:text-base text-white/80 break-all">tetrasip04@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-[#DF5656]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Address</h4>
                    <p className="text-sm sm:text-base text-white/80">Churipatti, Kishanganj</p>
                    <p className="text-sm sm:text-base text-white/80">Bihar, India, 855107</p>
                  </div>
                </div>
                <div className="pt-4 sm:pt-8">
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Follow Us</h4>
                  <div className="flex space-x-3 sm:space-x-4">
                    <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-[#DF5656] rounded-xl flex items-center justify-center transition-all">
                      <Facebook className="text-white" size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-[#DF5656] rounded-xl flex items-center justify-center transition-all">
                      <Instagram className="text-white" size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-[#DF5656] rounded-xl flex items-center justify-center transition-all">
                      <Twitter className="text-white" size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base">&copy; 2024 Tetra Sip. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
