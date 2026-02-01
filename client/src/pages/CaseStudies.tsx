import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      title: "HVAC Energy Monitoring System",
      client: "Large Commercial Complex",
      challenge: "The client faced rising electricity bills with no visibility into which AHUs (Air Handling Units) were consuming excess power.",
      solution: "We deployed a network of IoT-enabled energy meters connected to a central dashboard that logged consumption patterns every minute.",
      result: "Identified 3 faulty units and optimized scheduling, resulting in a 15% reduction in monthly energy costs.",
      tags: ["Energy Monitoring", "IoT", "Dashboard"],
      image: "/images/case-hvac.jpg"
    },
    {
      title: "Industrial Pump Health Monitoring",
      client: "Chemical Processing Plant",
      challenge: "Unexpected pump failures were causing costly downtime and production halts.",
      solution: "Designed a custom embedded device with vibration and temperature sensors attached to critical pump housings.",
      result: "Predictive maintenance alerts now warn operators 48 hours before potential failure, eliminating unplanned downtime.",
      tags: ["Predictive Maintenance", "Embedded Systems", "Sensors"],
      image: "/images/case-industrial-pipes.jpg"
    },
    {
      title: "Prototype Controller for Start-up",
      client: "AgriTech Start-up",
      challenge: "Client needed a custom automated irrigation controller but lacked internal electronics expertise.",
      solution: "Developed a custom PCB with soil moisture sensor inputs, valve control relays, and LoRaWAN connectivity for remote operation.",
      result: "Delivered 5 functional prototypes in 4 weeks, allowing the client to secure Series A funding.",
      tags: ["Prototyping", "PCB Design", "AgriTech"],
      image: "/images/case-circuit-board.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main>
        <div className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real-world examples of how UrjaCore delivers value through engineering.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 gap-12">
            {cases.map((study, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg flex flex-col lg:flex-row group"
              >
                <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-8 lg:p-12 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl font-display font-bold mb-2">{study.title}</h2>
                  <p className="text-primary font-medium mb-8">Client: {study.client}</p>

                  <div className="space-y-6 flex-grow">
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">The Challenge</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">Our Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="font-bold text-lg mb-2 text-emerald-600">The Result</h3>
                    <p className="text-foreground font-medium text-lg italic">"{study.result}"</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
