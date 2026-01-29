import { Zap, MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 bg-primary rounded-lg text-primary-foreground group-hover:bg-secondary transition-colors duration-300">
                <Zap className="h-6 w-6 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight leading-none text-white">UrjaCore</span>
                <span className="text-[0.65rem] font-medium tracking-widest uppercase text-slate-400">Systems</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              We design energy-focused electronics, automation, and IIoT solutions for industrial systems and OEMs.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-emerald-400 border border-slate-700">
                <CheckCircle2 className="w-3 h-3" /> GST Registered
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-blue-400 border border-slate-700">
                <CheckCircle2 className="w-3 h-3" /> Professional Invoicing
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Our Solutions</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-display font-bold text-white mb-6">Solutions</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Energy Monitoring</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Electronics Development</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Industrial Automation</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">IIoT Systems</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:contact@urjacore.com" className="hover:text-white transition-colors">contact@urjacore.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 86259 47016</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} UrjaCore Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
