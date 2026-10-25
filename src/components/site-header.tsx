import { Menu, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Countries" },
  { href: "#process", label: "Process" },
  { href: "#success", label: "Success" },
  { href: "#faq", label: "FAQ" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-accent">
            <Star className="h-4 w-4 fill-current" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Winning Stars
            <span className="hidden sm:inline"> Academy</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="gold">
            <a href="#apply">Apply now</a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Winning Stars Academy</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-4">
              {links.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a href={link.href} className="text-base font-medium">
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild variant="gold" className="mt-2">
                  <a href="#apply">Apply now</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
