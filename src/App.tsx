import {
  Award,
  BookOpen,
  FileCheck2,
  GraduationCap,
  Sparkles,
} from "lucide-react"

import { ApplyForm } from "@/components/apply-form"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DestinationSearch } from "@/components/destination-search"
import { destinations, whatsappLink } from "@/lib/destinations"
import { MessageCircle } from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "University admissions",
    body: "Shortlist programs, write SOPs, and submit complete applications to ranked universities.",
  },
  {
    icon: FileCheck2,
    title: "Visa filing",
    body: "Document checklists, embassy prep, and interview coaching for student visas.",
  },
  {
    icon: Award,
    title: "Scholarships",
    body: "Match merit and need-based awards so the offer is realistic for your budget.",
  },
  {
    icon: BookOpen,
    title: "Test prep guidance",
    body: "IELTS, TOEFL, PTE, and GRE planning with partner trainers when you need extra scores.",
  },
]

const steps = [
  {
    step: "01",
    title: "Free profile review",
    body: "We map grades, budget, and preferred countries in a 30-minute session.",
  },
  {
    step: "02",
    title: "University shortlist",
    body: "You get 6–10 realistic options with fees, intake, and scholarship odds.",
  },
  {
    step: "03",
    title: "Apply & track",
    body: "We file applications, follow up with admissions, and keep you updated.",
  },
  {
    step: "04",
    title: "Visa & departure",
    body: "Offer letter, visa, housing checklist, and pre-departure briefing.",
  },
]

const stories = [
  {
    name: "Ayesha K.",
    place: "MS CS · University of Texas",
    quote:
      "They handled every SOP draft and visa document. I landed a funded offer in the USA on my first cycle.",
  },
  {
    name: "Hamza R.",
    place: "MSc Data · University of Manchester",
    quote:
      "Clear timeline, no hidden fees. My UK CAS came through in three weeks after the offer.",
  },
  {
    name: "Sara M.",
    place: "BBA · York University, Canada",
    quote:
      "Scholarship matching saved our family almost CAD 8,000. The counsellor stayed available on WhatsApp.",
  },
]

export default function App() {
  return (
    <div id="top" className="min-h-svh">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(38_72%_48%_/_0.18),transparent_42%),linear-gradient(180deg,hsl(221_55%_18%_/_0.04),transparent)]" />
        <div className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Badge variant="gold" className="mb-4">
              Study abroad consultants
            </Badge>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-primary md:text-5xl lg:text-[3.4rem]">
              Your ambition. A world of possibilities.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Winning Stars Academy helps students apply for degrees and student
              visas across Europe and worldwide — from
              shortlist to embassy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <a href="#apply">Book free counselling</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#destinations">See countries</a>
              </Button>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {[
                ["1,200+", "Applications filed"],
                [String(destinations.length), "Destinations to explore"],
                ["96%", "Visa success*"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <p className="font-display text-2xl font-semibold text-primary">
                    {stat}
                  </p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80"
                alt="Students on a university campus"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <Card className="absolute -bottom-6 left-6 right-6 hidden sm:block">
              <CardContent className="flex items-center gap-3 p-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <p className="text-sm">
                  Next USA intake counselling:{" "}
                  <span className="font-semibold">Fall & Spring</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="container py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What we do
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-primary md:text-4xl">
            End-to-end support for every application
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="h-full">
              <CardHeader>
                <service.icon className="mb-2 h-8 w-8 text-accent" />
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="destinations" className="bg-secondary/60 py-20">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Destinations
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-primary md:text-4xl">
                Find your study destination
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              One counsellor, multiple embassies. We match you to the country
              that fits your grades, funds, and career plan.
            </p>
          </div>
          <DestinationSearch />
        </div>
      </section>

      <section id="process" className="container py-20">
        <h2 className="mb-10 font-display text-3xl font-semibold text-primary md:text-4xl">
          How applying with us works
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              <p className="font-display text-4xl font-semibold text-accent/40">
                {item.step}
              </p>
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section id="success" className="container py-20">
        <h2 className="mb-10 font-display text-3xl font-semibold text-primary md:text-4xl">
          Recent student wins
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <Card key={story.name}>
              <CardHeader>
                <CardTitle className="text-lg">{story.name}</CardTitle>
                <CardDescription>{story.place}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">“{story.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="bg-secondary/60 py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
              Questions families ask first
            </h2>
            <p className="mt-3 text-muted-foreground">
              Honest answers before you pay any counselling fee.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="cost">
              <AccordionTrigger>Do you charge for the first meeting?</AccordionTrigger>
              <AccordionContent>
                No. Profile review is free. You only pay if you hire us to file
                applications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="usa">
              <AccordionTrigger>
                Can you help if I only want the USA?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Many students apply only to the United States. We still
                keep a backup country if your visa timeline is tight.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="scores">
              <AccordionTrigger>
                What if my IELTS or GPA is low?
              </AccordionTrigger>
              <AccordionContent>
                We shortlist universities that accept your current scores and
                flag where a retake would unlock better scholarships.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="time">
              <AccordionTrigger>How early should I start?</AccordionTrigger>
              <AccordionContent>
                8–12 months before intake is ideal for the USA. UK and Canada
                can move faster if documents are ready.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="apply" className="container grid items-start gap-10 py-20 lg:grid-cols-2">
        <div>
          <Badge variant="gold">Apply</Badge>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">
            Tell us which country you want. We will build the plan.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Share your details on WhatsApp to discuss your country
            shortlist, intake dates, and an estimated budget.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>• All European countries and destinations worldwide</li>
            <li>• Bachelor’s, master’s, diploma, and visa-only files</li>
            <li>• Response within one business day</li>
          </ul>
        </div>
        <ApplyForm />
      </section>

      <p className="container pb-8 text-center text-xs text-muted-foreground">
        *Visa success is based on complete files we submitted in the last 24
        months. Outcomes depend on the applicant’s profile and embassy decisions.
      </p>

      <SiteFooter />
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp at 03099942232" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#187d43] px-5 py-4 font-semibold text-white shadow-xl transition hover:bg-[#126334] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700">
        <MessageCircle className="h-6 w-6" /><span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  )
}
