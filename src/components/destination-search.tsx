import { useState } from "react"
import { ArrowUpRight, Globe2, Search } from "lucide-react"
import { destinations, whatsappLink } from "@/lib/destinations"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function DestinationSearch() {
  const [query, setQuery] = useState("")
  const [region, setRegion] = useState("all")
  const [limit, setLimit] = useState(12)
  const matches = destinations.filter(country => (region !== "europe" || country.europe) && `${country.name} ${country.code} ${country.code === "GB" ? "UK Britain" : country.code === "US" ? "USA America" : country.code === "AE" ? "UAE Dubai" : ""}`.toLowerCase().includes(query.trim().toLowerCase()))
  return <div className="space-y-6">
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" aria-hidden />
        <Input className="h-12 bg-white pl-11" aria-label="Search destination countries" placeholder="Search a country, e.g. Germany, Italy, UK…" value={query} onChange={event => { setQuery(event.target.value); setLimit(12) }} />
      </div>
      <div className="flex gap-2" role="group" aria-label="Filter destinations">
        {[['all', 'All destinations'], ['europe', 'Europe']].map(([value, label]) => <Button key={value} className="h-12" variant={region === value ? 'default' : 'outline'} aria-pressed={region === value} onClick={() => { setRegion(value); setLimit(12) }}>{label}</Button>)}
      </div>
    </div>
    <p className="text-sm text-muted-foreground" role="status">{matches.length} destinations found · Explore your options with a counsellor</p>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {matches.slice(0, limit).map(country => <a key={country.code} href={whatsappLink(`Hello! I would like study abroad counselling for ${country.name}. Please guide me about available universities and application requirements.`)} target="_blank" rel="noopener noreferrer" className="group rounded-xl border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
        <div className="flex items-center justify-between"><span className="text-3xl" aria-hidden>{country.flag}</span><ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent" /></div>
        <h3 className="mt-4 text-lg font-semibold text-primary">{country.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">Explore study options & application guidance</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"><Globe2 className="h-4 w-4" /> Talk to a consultant</span>
      </a>)}
    </div>
    {!matches.length && <div className="rounded-xl border border-dashed p-8 text-center"><p>No destinations match your search.</p><Button variant="link" onClick={() => { setQuery(""); setRegion("all") }}>Clear filters</Button></div>}
    {matches.length > limit && <div className="text-center"><Button variant="outline" onClick={() => setLimit(limit + 24)}>Show more destinations</Button></div>}
    <p className="text-xs text-muted-foreground">Country listings are for counselling enquiries. Available programs and application support are confirmed during your consultation.</p>
  </div>
}
