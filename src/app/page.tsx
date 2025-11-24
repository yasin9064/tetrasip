
import { ArrowRight, Bot, Image as ImageIcon, Wind, Zap, User } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="flex items-center justify-between p-6 shadow-md">
        <h1 className="text-3xl font-bold text-blue-600">Tetra Sip</h1>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden">
          <Bot size={28} className="text-gray-700" />
        </button>
      </header>
      <main>
        <section
          className="relative flex flex-col items-center justify-center min-h-[80vh] text-center p-6 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/BG.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-6xl font-extrabold text-white">Your Brand, Your Water</h2>
            <p className="text-xl text-gray-200 mt-4 max-w-3xl mx-auto">
              Create a lasting impression with custom-labeled water bottles. Perfect for events, businesses, and personal use.
            </p>
            <button className="mt-8 px-10 py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center mx-auto">
              Get a Free Quote <ArrowRight className="ml-3" />
            </button>
          </div>
        </section>

        <section id="about" className="py-24 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/images/water bottle.jpg" alt="About Tetra Sip" width={800} height={600} />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">About Tetra Sip</h3>
              <p className="text-gray-600 mt-6 text-lg">
                Tetra Sip was born from a simple idea: to provide businesses and individuals with a unique and effective way to promote their brand. We offer a wide range of customization options to help you create the perfect water bottle for your needs. Our commitment to quality and customer satisfaction is what sets us apart.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-gray-800">Our Services</h3>
            <div className="grid md:grid-cols-3 gap-12 mt-16">
              <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center items-center h-24 w-24 rounded-full bg-blue-100 mx-auto">
                  <Wind size={48} className="text-blue-500" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mt-6">Custom Labels</h4>
                <p className="text-gray-600 mt-2">Design your own label or work with our team to create the perfect design.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center items-center h-24 w-24 rounded-full bg-blue-100 mx-auto">
                  <ImageIcon size={48} className="text-blue-500" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mt-6">Bottle Options</h4>
                <p className="text-gray-600 mt-2">Choose from a variety of bottle sizes and materials.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center items-center h-24 w-24 rounded-full bg-blue-100 mx-auto">
                  <Zap size={48} className="text-blue-500" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mt-6">Fast Turnaround</h4>
                <p className="text-gray-600 mt-2">We offer fast and reliable shipping to get your bottles to you when you need them.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800">How It Works</h3>
            <div className="mt-16 flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center h-20 w-20 rounded-full bg-blue-100 text-blue-500 text-2xl font-bold">1</div>
                <h4 className="text-xl font-semibold mt-4">Choose Your Bottle</h4>
              </div>
              <div className="flex-1 h-1 bg-gray-200 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center h-20 w-20 rounded-full bg-blue-100 text-blue-500 text-2xl font-bold">2</div>
                <h4 className="text-xl font-semibold mt-4">Customize Your Label</h4>
              </div>
              <div className="flex-1 h-1 bg-gray-200 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center h-20 w-20 rounded-full bg-blue-100 text-blue-500 text-2xl font-bold">3</div>
                <h4 className="text-xl font-semibold mt-4">Approve &amp; Order</h4>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-gray-800">What Our Clients Say</h3>
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                    <User className="text-gray-500" />
                  </div>
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">CEO, Example Corp</p>
                  </div>
                </div>
                <p className="text-gray-600">&quot;The custom water bottles from Tetra Sip were a huge hit at our conference. The quality was excellent, and the design process was a breeze.&quot;</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                    <User className="text-gray-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Jane Smith</p>
                    <p className="text-sm text-gray-500">Marketing Manager, Another Inc.</p>
                  </div>
                </div>
                <p className="text-gray-600">&quot;We&apos;ve been using Tetra Sip for our corporate events for years. Their service is always reliable, and the bottles are a great way to promote our brand.&quot;</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800">Get in Touch</h3>
            <p className="text-gray-600 mt-4 text-lg">Have a question or ready to place an order? Fill out the form below, and we&apos;ll get back to you shortly.</p>
            <form className="mt-12 space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <textarea placeholder="Your Message" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows={5}></textarea>
              <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Tetra Sip. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;