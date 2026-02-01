import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Cpu, Activity, BarChart3, Settings2, Zap, Factory, Cog } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 bg-slate-900 text-white">
          {/* Abstract Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
            {/* electronics-circuit-board-blue-light-technology-background */}
            <img 
              src="/images/hero-industrial.jpg" 
              alt="Background Texture" 
              className="w-full h-full object-cover mix-blend-overlay opacity-30"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide uppercase">Innovating for Industry 4.0</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 tracking-tight">
                Smart Electronics for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Efficient Energy
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                We design energy-focused electronics, automation, and IIoT solutions tailored for industrial systems and OEMs.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:-translate-y-1">
                    Get a Consultation
                  </button>
                </Link>
                <Link href="/solutions">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg backdrop-blur-sm transition-all hover:-translate-y-1">
                    View Our Solutions
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Solutions Grid */}
        <section className="py-24 bg-background relative z-20 -mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: <Zap className="w-8 h-8 text-yellow-500" />, 
                  title: "Energy Systems", 
                  desc: "Advanced monitoring and efficiency optimization for industrial power consumption." 
                },
                { 
                  icon: <Cpu className="w-8 h-8 text-blue-500" />, 
                  title: "Electronics & Embedded", 
                  desc: "Custom hardware design, PCB fabrication, and firmware development." 
                },
                { 
                  icon: <BarChart3 className="w-8 h-8 text-emerald-500" />, 
                  title: "Software & Data", 
                  desc: "Real-time dashboards, data logging, and analytics platforms." 
                },
                { 
                  icon: <Settings2 className="w-8 h-8 text-purple-500" />, 
                  title: "Automation & Retrofit", 
                  desc: "Modernizing legacy machinery with smart controllers and sensors." 
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card p-8 rounded-2xl border border-border shadow-lg shadow-black/5 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="mb-6 p-4 bg-muted/50 rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Packages */}
        <section className="py-24 bg-slate-50 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Core Offerings</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Specific solutions designed to solve your most pressing engineering challenges.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Package 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-border flex flex-col md:flex-row group"
              >
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 group-hover:bg-primary/10 transition-colors"></div>
                  {/* industrial-dashboard-monitor */}
                  <img 
                    src="/images/software-data.jpg" 
                    alt="Energy Monitoring" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                    For Plants & HVAC
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-display">Energy Monitoring & Data Logging</h3>
                  <p className="text-muted-foreground mb-6">
                    "You can't save energy you can't see." We provide complete visibility into your power consumption with real-time analytics.
                  </p>
                  <Link href="/solutions" className="flex items-center text-primary font-semibold hover:gap-2 transition-all">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Package 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-border flex flex-col md:flex-row group"
              >
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-emerald-600/20 mix-blend-multiply z-10 group-hover:bg-emerald-600/10 transition-colors"></div>
                  {/* soldering-iron-electronics-lab */}
                  <img 
                    src="/images/industrial-factory.jpg" 
                    alt="Electronics Prototyping" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
                    For Startups & R&D
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-display">Prototype → Pilot Development</h3>
                  <p className="text-muted-foreground mb-6">
                    We convert ideas into working electronics—fast. From schematic to PCB to firmware, we handle the full cycle.
                  </p>
                  <Link href="/solutions" className="flex items-center text-primary font-semibold hover:gap-2 transition-all">
                    Start a project <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">Industries We Serve</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { name: "HVAC Systems", icon: <Activity className="w-5 h-5" /> },
                { name: "Industrial Pumps", icon: <Cog className="w-5 h-5" /> },
                { name: "Blowers & Compressors", icon: <Zap className="w-5 h-5" /> },
                { name: "Machine Manufacturers", icon: <Factory className="w-5 h-5" /> },
                { name: "IIoT Devices", icon: <Cpu className="w-5 h-5" /> },
              ].map((industry, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-3 px-6 py-4 bg-white rounded-full border border-border shadow-sm hover:shadow-md hover:border-primary transition-all cursor-default"
                >
                  <div className="text-primary">{industry.icon}</div>
                  <span className="font-semibold text-foreground">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to optimize your systems?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Partner with UrjaCore for engineering solutions that drive efficiency and performance.
            </p>
            <Link href="/contact">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
                Contact Us Today
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
