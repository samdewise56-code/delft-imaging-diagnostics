/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  ChevronRight, 
  Activity,
  Microscope,
  Stethoscope,
  ScanHeart,
  Droplet,
  Brain,
  CheckCircle2,
  CalendarDays
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      
      {/* Top Banner */}
      <div className="hidden bg-slate-900 py-2 text-sm text-slate-300 md:block">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 uppercase tracking-widest text-[10px]">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-sky-500" />
              <span>+1 (555) 123-4567</span>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-sky-500" />
              <span>info@delftimaging.com</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-sky-500" />
            <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center bg-sky-600 text-white border-2 border-sky-600">
                <ScanHeart className="h-6 w-6" />
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold tracking-tighter text-slate-900 italic uppercase">Delft</span>
                <span className="text-2xl font-light tracking-widest text-sky-600 ml-1 uppercase">Diagnostics</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex uppercase tracking-widest text-xs font-semibold text-slate-500">
              <a href="#home" className="transition-colors hover:text-sky-600">Home</a>
              <a href="#services" className="transition-colors hover:text-sky-600">Services</a>
              <a href="#about" className="transition-colors hover:text-sky-600">About Us</a>
              <a 
                href="https://wa.me/233202685139" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-slate-900 px-4 py-2 text-[10px] font-bold text-white uppercase tracking-widest transition-colors hover:bg-sky-600"
              >
                <CalendarDays className="h-4 w-4" />
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-sky-600"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
            >
              <div className="space-y-1 px-4 pb-6 pt-2 font-semibold uppercase tracking-widest text-xs">
                <a href="#home" className="block px-3 py-3 text-slate-700 border-b border-slate-100 hover:bg-slate-50 hover:text-sky-600">Home</a>
                <a href="#services" className="block px-3 py-3 text-slate-700 border-b border-slate-100 hover:bg-slate-50 hover:text-sky-600">Services</a>
                <a href="#about" className="block px-3 py-3 text-slate-700 border-b border-slate-100 hover:bg-slate-50 hover:text-sky-600">About Us</a>
                <div className="pt-4">
                  <a 
                    href="https://wa.me/233202685139" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 bg-slate-900 px-6 py-3 text-[10px] font-bold text-white transition-colors hover:bg-sky-600 uppercase"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden bg-white pt-16 md:pt-24 lg:pt-32 border-b border-slate-200 border-x">
          <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 border-slate-200">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center space-y-8 pr-8"
              >
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-4 bg-sky-50 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-700 border border-sky-200">
                    <span className="h-2 w-12 bg-sky-600"></span>
                    Precision Diagnostics
                  </span>
                  <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl xl:text-7xl leading-[0.9] uppercase">
                    Clearer Vision for <br className="hidden lg:block"/>
                    <span className="text-sky-600">Better Health.</span>
                  </h1>
                  <p className="max-w-2xl text-lg text-slate-500 sm:text-xl font-light">
                    State-of-the-art medical imaging and comprehensive diagnostic services. We deliver fast, accurate results to help you and your doctor make informed decisions.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row font-mono text-sm">
                  <a href="https://wa.me/233202685139" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-900 px-8 py-4 font-bold text-white uppercase tracking-widest transition-colors hover:bg-sky-600">
                    Book a Test
                    <ChevronRight className="h-5 w-5" />
                  </a>
                  <button className="flex items-center justify-center gap-2 bg-white px-8 py-4 font-bold text-slate-900 border border-slate-300 uppercase tracking-widest transition-colors hover:bg-slate-50">
                    Download Report
                  </button>
                </div>
                
                <div className="flex gap-12 pt-8 border-t border-slate-200">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-slate-900">99.9%</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Accuracy Rate</span>
                  </div>
                  <div className="w-px bg-slate-300"></div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-slate-900">24H</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Turnaround</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block bg-slate-900 border-l border-slate-200"
              >
                {/* Decorative blobs */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none z-0">
                  <div className="w-[500px] h-[500px] border-[40px] border-sky-500 rounded-full"></div>
                  <div className="absolute w-[300px] h-[300px] border-[20px] border-white rounded-full"></div>
                  <div className="absolute w-full h-px bg-white"></div>
                  <div className="absolute h-full w-px bg-white"></div>
                </div>
                
                <div className="relative overflow-hidden shadow-none h-full min-h-[600px] z-10 border border-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600" 
                    alt="Modern medical imaging facility" 
                    className="h-full w-full object-cover mix-blend-luminosity opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 text-white max-w-xs">
                    <div className="text-[10px] uppercase tracking-widest text-sky-400 mb-2 font-bold font-mono">System Status: Optimal</div>
                    <p className="text-sm font-light">NABL Accredited facility ensuring the highest quality standards.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Features Row */}
        <section className="relative z-20 border-b border-x border-slate-200 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-200">
              {[
                { icon: Clock, title: '24/7 Service', desc: 'Round the clock Emergency' },
                { icon: Building2, title: 'Home Collection', desc: 'Free sample collection' },
                { icon: Activity, title: 'Online Reports', desc: 'Secure & instant access' },
                { icon: Microscope, title: 'Advanced Labs', desc: 'Latest technology' },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-8 bg-white hover:bg-slate-50 transition-all cursor-pointer group"
                >
                  <div className="mb-4 flex items-center justify-center border-2 border-sky-600 p-3 text-sky-600 w-12 h-12 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase text-xs tracking-widest mb-2">{feature.title}</h3>
                    <p className="text-[11px] text-slate-400 max-w-[120px] mx-auto">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-slate-50 py-24 border-b border-slate-200">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 flex flex-col items-center text-center">
              <div className="w-12 h-1 bg-sky-600 mb-6"></div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 uppercase">Our Diagnostic Services</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 font-light">
                Offering a complete range of diagnostic facilities under one roof with the most advanced technology in the region.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-3">
              {[
                { id: 1, title: 'MRI Scan', desc: 'High-resolution 3T MRI for exceptionally detailed images of organs and tissues.', icon: Brain, img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600' },
                { id: 2, title: 'CT Scan', desc: 'Ultrafast multi-slice CT scanning for rapid and precise cross-sectional imaging.', icon: Activity, img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600' },
                { id: 3, title: 'Ultrasound', desc: 'Advanced 3D/4D ultrasound for obstetrics, abdomen, and vascular studies.', icon: ScanHeart, img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600' },
                { id: 4, title: 'Digital X-Ray', desc: 'Low-dose digital radiography providing instant high-quality bone and chest imaging.', icon: Activity, img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600' },
                { id: 5, title: 'Pathology Center', desc: 'Fully automated lab equipment for hematology, biochemistry, and microbiology.', icon: Microscope, img: 'https://plus.unsplash.com/premium_photo-1682141246821-57da8410a1ec?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { id: 6, title: 'Cardiology', desc: 'Comprehensive heart care diagnostics including ECG, Echo, and TMT.', icon: Stethoscope, img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600' }
              ].map((service) => (
                <motion.div 
                  key={service.id}
                  className="group relative flex flex-col overflow-hidden bg-white border border-slate-200 transition-all hover:bg-slate-50 cursor-pointer"
                >
                  <div className="h-48 overflow-hidden border-b border-slate-200">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center border-2 border-sky-600 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-900">{service.title}</h3>
                    <p className="mb-6 flex-1 text-[13px] text-slate-500 leading-relaxed font-light">{service.desc}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-sky-600 group-hover:text-slate-900 transition-colors">
                      Know More <ChevronRight className="h-3 w-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="bg-slate-900 py-24 text-white overflow-hidden relative border-b border-slate-200">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
             <div className="w-full h-px bg-white"></div>
          </div>
          
          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row border border-white/20 bg-white/5 p-12 backdrop-blur-sm">
              <div className="max-w-2xl">
                <div className="w-12 h-1 bg-sky-500 mb-6"></div>
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight uppercase">Need a test but can't visit the lab?</h2>
                <p className="text-slate-300 text-lg font-light">
                  Book our Free Home Collection service. Our expert phlebotomists will collect your sample safely from the comfort of your home.
                </p>
              </div>
              <div className="flex shrink-0 gap-4">
                <button className="flex items-center gap-2 bg-sky-600 px-8 py-4 text-xs font-bold text-white uppercase tracking-widest transition-colors hover:bg-slate-800">
                  <PhoneCall className="h-4 w-4" />
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Us / Why Choose Us */}
        <section id="about" className="bg-white py-24 border-b border-slate-200">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div className="relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none -left-6 -top-6">
                  <div className="w-[400px] h-[400px] border-[20px] border-sky-500"></div>
                </div>
                <div className="relative overflow-hidden border border-slate-200 shadow-none z-10 bg-slate-50">
                  <img 
                    src="https://images.unsplash.com/photo-1582719366768-de4481b828ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Medical professionals analyzing data" 
                    className="h-full w-full object-cover aspect-[4/3]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-sky-600 p-8 text-white border-2 border-white hidden md:block z-20">
                  <div className="text-4xl font-extrabold">20+</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold mt-2">Years of Trust &<br/>Medical Excellence</div>
                </div>
              </motion.div>
              
              <motion.div className="space-y-8">
                <div>
                  <div className="w-12 h-1 bg-sky-600 mb-6"></div>
                  <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
                    Why Choose Delft Imaging?
                  </h2>
                  <p className="text-lg text-slate-500 font-light">
                    We are committed to providing the highest quality diagnostic and imaging services. Our facility is equipped with cutting-edge technology and staffed by expert radiologists and pathologists.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { title: "Advanced Technology", desc: "State-of-the-art MRI, CT scan and fully automated lab analyzers." },
                    { title: "Expert Professionals", desc: "A dedicated team of highly qualified doctors and technicians." },
                    { title: "Fast & Accurate Reports", desc: "Quick turnaround time with 100% precision and reliability." },
                    { title: "Patient-Centric Approach", desc: "Comfortable environment and compassionate care for everyone." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-sky-600 text-sky-600 mt-1 uppercase text-xs font-bold">
                        0{i+1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm">{item.title}</h4>
                        <p className="text-slate-500 text-sm mt-1 font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="bg-slate-900 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-sky-600">
                  Read More About Us
                </button>
              </motion.div>
            </div>
          </div>
        </section>


      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 border-b border-slate-800 pb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-white">
                <div className="flex h-10 w-10 items-center justify-center bg-sky-600 text-white border-2 border-sky-600">
                  <ScanHeart className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tighter italic uppercase text-white leading-none">Delft</span>
                  <span className="text-[10px] font-bold tracking-widest text-sky-500 uppercase mt-1">Diagnostics</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed font-light mt-6">
                Empowering healthcare providers and patients with high-quality diagnostic imaging and pathology services. Accuracy and care you can trust.
              </p>
            </div>
            
            <div>
              <h4 className="mb-6 text-[10px] font-bold text-white uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-sky-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Our Doctors</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Career Opportunities</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Feedback</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-6 text-[10px] font-bold text-white uppercase tracking-widest">Services</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-sky-400 transition-colors">MRI Scan</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">CT Scan</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Ultrasound/Doppler</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Digital X-Ray</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Heart Checkup</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-6 text-[10px] font-bold text-white uppercase tracking-widest">Contact Info</h4>
              <ul className="space-y-4 text-sm font-light font-mono">
                <li className="flex items-start gap-4">
                  <MapPin className="h-4 w-4 shrink-0 text-sky-500 mt-1" />
                  <span>123 Medical Innovation Way,<br />Delft Tech Park, 2628 XE</span>
                </li>
                <li className="flex items-center gap-4">
                  <PhoneCall className="h-4 w-4 shrink-0 text-sky-500" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="h-4 w-4 shrink-0 text-sky-500" />
                  <span>info@delftimaging.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} DELFT IMAGING DIAGNOSTICS GROUP.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

