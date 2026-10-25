import { type FormEvent, useState } from "react"
import { MessageCircle } from "lucide-react"
import { destinations, whatsappLink } from "@/lib/destinations"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function ApplyForm() {
  const [country, setCountry] = useState("")
  const [program, setProgram] = useState("")

  const [error, setError] = useState("")

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!country || !program) {
      setError("Please choose a destination country and application type.")
      return
    }
    setError("")
    const data = new FormData(event.currentTarget)
    const destination = destinations.find(item => item.code === country)
    if (!destination) { setError("Please choose a valid destination."); return }
    const message = [`Hello Winning Stars Academy! I would like study abroad counselling.`, `Name: ${data.get("name")}`, `Email: ${data.get("email")}`, `Phone: ${data.get("phone")}`, `Destination: ${destination.name}`, `Application: ${program}`, `Background: ${data.get("notes") || "Not provided"}`].join("\n")
    window.location.assign(whatsappLink(message))
  }


  return (
    <Card>
      <CardHeader>
        <CardTitle>Start your application</CardTitle>
        <CardDescription>
          Tell us where you want to apply. We will map universities, visas, and
          timelines for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" required placeholder="Your name" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+92 3xx xxxxxxx"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="destination">Destination country</Label>
              <select id="destination" required value={country} onChange={event => setCountry(event.target.value)} className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">
                <option value="" disabled>Choose a country</option>
                {destinations.map(item => <option key={item.code} value={item.code}>{item.name}</option>)}
              </select>
            </div>
            <div className="grid gap-2">
              <Label>Application type</Label>
              <Select value={program} onValueChange={setProgram}>
                <SelectTrigger aria-label="Application type">
                  <SelectValue placeholder="What are you applying for?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bachelors">Bachelor’s degree</SelectItem>
                  <SelectItem value="masters">Master’s degree</SelectItem>
                  <SelectItem value="phd">PhD / research</SelectItem>
                  <SelectItem value="diploma">Diploma / college</SelectItem>
                  <SelectItem value="visa">Student visa only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="notes">Background (optional)</Label>
            <Textarea
              id="notes"
              name="notes"
              placeholder="Grades, IELTS/TOEFL, preferred intake, budget..."
            />
          </div>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <Button type="submit" variant="gold" size="lg" className="w-full">
            <MessageCircle className="mr-2 h-5 w-5" /> Continue on WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground">WhatsApp will open with your details. Review the message and press Send to contact us at 03099942232.</p>
        </form>
      </CardContent>
    </Card>
  )
}
