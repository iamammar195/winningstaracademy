import { whatsappLink } from "@/lib/destinations"
import { Mail, MapPin, Phone, Star, MessageCircle } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Star className="h-5 w-5 fill-accent text-accent" />
            <p className="font-display text-xl font-semibold">
              Winning Stars Academy
            </p>
          </div>
          <p className="max-w-sm text-sm text-primary-foreground/70">
            Study abroad consultancy for students applying to universities and
            visas across the USA, UK, Canada, Australia, and Europe.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
            Visit
          </p>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Main Boulevard, Lahore, Pakistan
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+923099942232" className="hover:underline">03099942232</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              hello@winningstarsacademy.com
            </li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline"><MessageCircle className="h-4 w-4 text-accent" /> WhatsApp counselling</a></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
            Hours
          </p>
          <p className="text-sm text-primary-foreground/80">
            Mon–Sat · 10:00 AM – 7:00 PM
          </p>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Free first counselling session for new applicants.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Winning Stars Academy. All rights reserved.
      </div>
    </footer>
  )
}
