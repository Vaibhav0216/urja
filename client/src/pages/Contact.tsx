import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useSubmitInquiry } from "@/hooks/use-inquiries";
import { MapPin, Mail, Phone, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
  });

  const { mutate, isPending } = useSubmitInquiry();

  const onSubmit = (data: InsertInquiry) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      <main className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-3xl shadow-xl overflow-hidden border border-border">
            
            {/* Contact Info Sidebar */}
            <div className="bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>
              
              <div className="relative z-10">
                <h1 className="text-4xl font-display font-bold mb-6">Get in Touch</h1>
                <p className="text-slate-300 text-lg mb-12">
                  Have a project in mind? We'd love to hear from you. Fill out the form and our engineering team will get back to you within 24 hours.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Our Location</h3>
                      <p className="text-slate-400">Maharashtra, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email Us</h3>
                      <a href="mailto:sales@urjacore.com" className="text-slate-400 hover:text-white transition-colors">sales@urjacore.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Call Us</h3>
                      <a href="tel:+919876543210" className="text-slate-400 hover:text-white transition-colors">+91 86259 47016</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                <p className="text-sm text-slate-500">
                  Business Hours: Mon - Fri, 9am - 6pm IST
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-12 bg-white">
              <h2 className="text-2xl font-bold mb-8 text-foreground">Send us a message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <input
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Company Name</label>
                    <input
                      {...register("company")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Acme Industries"
                    />
                    {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <input
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <input
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="+91 86259 47016"
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Requirement</label>
                  <textarea
                    {...register("requirement")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your project needs..."
                  />
                  {errors.requirement && <p className="text-red-500 text-xs">{errors.requirement.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
