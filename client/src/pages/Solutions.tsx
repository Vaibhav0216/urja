import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Zap, Cpu, BarChart3, Settings2, Check } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      id: "energy",
      title: "Energy Systems",
      description: "Comprehensive energy management solutions designed to identify waste and optimize consumption patterns across your facility.",
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      features: [
        "Real-time power quality monitoring",
        "Load balancing analysis",
        "Peak demand management",
        "Harmonic distortion detection",
        "Predictive maintenance alerts"
      ],
      image: "/images/energy-systems.jpg"
    },
    {
      id: "electronics",
      title: "Electronics & Embedded",
      description: "End-to-end custom electronics development from concept to manufacturing tailored for industrial environments.",
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      features: [
        "Custom PCB design & layout",
        "Firmware development (C/C++, Rust)",
        "Microcontroller integration (STM32, ESP32)",
        "Ruggedized enclosure design",
        "EMC/EMI compliance testing"
      ],
      image: "/images/electronics-embedded.jpg"
    },
    {
      id: "software",
      title: "Software & Data",
      description: "Turning raw sensor data into actionable insights through custom dashboards and analytics platforms.",
      icon: <BarChart3 className="w-12 h-12 text-emerald-500" />,
      features: [
        "Cloud-based dashboard development",
        "Local HMI programming",
        "Historical data logging & reporting",
        "API integration with ERP systems",
        "Mobile companion apps"
      ],
      image: "/images/software-data.jpg"
    },
    {
      id: "automation",
      title: "Automation & Retrofit",
      description: "Breathing new life into legacy machinery by retrofitting modern sensors and smart controllers.",
      icon: <Settings2 className="w-12 h-12 text-purple-500" />,
      features: [
        "PLC logic programming",
        "Legacy machine digitalization",
        "Sensor network integration",
        "Remote monitoring capabilities",
        "Safety system upgrades"
      ],
      image: "/images/automation-retrofit.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main>
        {/* Header */}
        <div className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Solutions</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Engineering excellence applied to energy, electronics, and industrial automation.
            </p>
          </div>
        </div>

        {/* Solutions List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
          {solutions.map((solution, index) => (
            <motion.div 
              key={solution.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="p-4 bg-muted/50 rounded-2xl w-fit mb-4">
                  {solution.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{solution.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{solution.description}</p>
                
                <ul className="space-y-4 pt-4">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-primary/10 text-primary">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
