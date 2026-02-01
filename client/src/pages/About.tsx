import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Users, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main>
        {/* Header */}
        <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
          {/* abstract-geometric-shapes */}
          <img 
            src="/images/about-hero.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">About UrjaCore</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We are a focused engineering team dedicated to solving complex problems with smart electronics.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              UrjaCore Systems was founded with a single mission: to bridge the gap between heavy industrial machinery and modern digital intelligence. We believe that efficiency isn't just about saving money—it's about building sustainable, responsive systems that last.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 not-prose mb-16">
              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm text-center">
                <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Precision</h3>
                <p className="text-sm text-muted-foreground">Engineering that fits your exact specifications, no more, no less.</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm text-center">
                <div className="w-12 h-12 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Applying the latest embedded tech to solve old industrial problems.</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm text-center">
                <div className="w-12 h-12 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Partnership</h3>
                <p className="text-sm text-muted-foreground">We work as an extension of your R&D and maintenance teams.</p>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Why Choose Us?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Unlike generic IT firms, we understand hardware. We know what happens when a motor overheats, or when electrical noise interferes with a sensor. Our solutions are built to survive the factory floor, not just the server room.
            </p>
          </div>
        </section>

        {/* Team Image Section */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
           <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative h-96 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex flex-col justify-end p-12">
               <h3 className="text-white text-3xl font-bold font-display">Engineering Done Right</h3>
               <p className="text-slate-300 mt-2">From concept to deployment, we are with you every step.</p>
             </div>
             {/* engineering-team-collaborating */}
             <img 
               src="/images/team-collaboration.jpg" 
               alt="Engineering Team" 
               className="w-full h-full object-cover"
             />
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
