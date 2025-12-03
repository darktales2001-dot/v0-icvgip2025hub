import { PageLayout } from "@/components/PageLayout"
import { ScheduleImage } from "@/components/ScheduleImage"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mic,
  ImageIcon,
  Eye,
  Building2,
  Calendar,
  GraduationCap,
  Coffee,
  Music,
  Award,
  Users,
  Clock,
  MapPin,
} from "lucide-react"
import scheduleImage from "@/assets/schedule.png"
import { cn } from "@/lib/utils"

const scheduleByDate = {
  dec17: {
    date: "December 17, 2025",
    day: "Wednesday",
    label: "Day 1",
    venue: "Tutorial Venue",
    events: [
      {
        time: "9:00 AM - 1:30 PM",
        title: "Tutorials and Workshops",
        type: "tutorial",
        description: "Including a coffee break",
      },
      { time: "1:30 PM - 2:30 PM", title: "Lunch", type: "break" },
      {
        time: "2:30 PM - 5:30 PM",
        title: "Tutorials and Workshops",
        type: "tutorial",
        description: "Including a coffee break",
      },
      { time: "5:30 PM - 6:30 PM", title: "Inauguration", type: "ceremony" },
      { time: "7:30 PM Onwards", title: "Dinner", type: "social" },
    ],
  },
  dec18: {
    date: "December 18, 2025",
    day: "Thursday",
    label: "Day 2",
    venue: "Auditorium Complex",
    events: [
      { time: "9:00 AM - 10:30 AM", title: "Oral Session-1", type: "oral", link: "/oral-sessions" },
      {
        time: "10:30 AM - 11:00 AM",
        title: "Plenary-1: Prof Nicu Sebe",
        type: "plenary",
        description: "Keynote Speaker",
      },
      { time: "11:00 AM - 11:30 AM", title: "Coffee Break", type: "break" },
      { time: "11:30 AM - 1:30 PM", title: "Vision India Session", type: "vision", link: "/vision-india" },
      { time: "1:30 PM - 2:30 PM", title: "Lunch", type: "break" },
      {
        time: "2:30 PM - 3:30 PM",
        title: "Plenary-2: Dr. Srinath Sridhar",
        type: "plenary",
        description: "Keynote Speaker",
      },
      {
        time: "3:30 PM - 5:30 PM",
        title: "Poster Session-1",
        type: "poster",
        link: "/poster-sessions",
        description: "Includes poster/oral papers, Vision India posters + Coffee break",
      },
      {
        time: "5:30 PM - 6:30 PM",
        title: "Plenary-3: Prof C V Jawahar",
        type: "plenary",
        description: "Keynote Speaker",
      },
      { time: "7:30 PM Onwards", title: "Dinner", type: "social" },
    ],
  },
  dec19: {
    date: "December 19, 2025",
    day: "Friday",
    label: "Day 3",
    venue: "Auditorium Complex",
    events: [
      { time: "9:00 AM - 10:30 AM", title: "Oral Session-2", type: "oral", link: "/oral-sessions" },
      {
        time: "10:30 AM - 11:00 AM",
        title: "Plenary-4: Prof. Paul Thompson",
        type: "plenary",
        description: "Keynote Speaker",
      },
      { time: "11:00 AM - 11:30 AM", title: "Coffee Break", type: "break" },
      { time: "11:30 AM - 1:30 PM", title: "Industry Session-1", type: "industry" },
      { time: "1:30 PM - 2:30 PM", title: "Lunch", type: "break" },
      { time: "2:30 PM - 4:00 PM", title: "Oral Session-3", type: "oral", link: "/oral-sessions" },
      {
        time: "4:00 PM - 5:30 PM",
        title: "Poster Session-2",
        type: "poster",
        link: "/poster-sessions",
        description: "Includes poster/oral papers, Tiny Papers Track posters + Coffee break",
      },
      { time: "5:30 PM - 6:30 PM", title: "Plenary-5: Dr P. Anandan", type: "plenary", description: "Keynote Speaker" },
      {
        time: "6:30 PM - 7:30 PM",
        title: "GBM / Student-Industry Interaction",
        type: "special",
        description: "Parallel sessions",
      },
      { time: "7:30 PM Onwards", title: "Cultural Program & Banquet", type: "social" },
    ],
  },
  dec20: {
    date: "December 20, 2025",
    day: "Saturday",
    label: "Day 4",
    venue: "Auditorium Complex",
    events: [
      { time: "9:00 AM - 10:30 AM", title: "Oral Session-4", type: "oral", link: "/oral-sessions" },
      { time: "10:30 AM - 11:00 AM", title: "Industry Session-2", type: "industry" },
      { time: "11:00 AM - 11:30 AM", title: "Coffee Break", type: "break" },
      { time: "11:30 AM - 1:30 PM", title: "Industry Session-3", type: "industry" },
      { time: "1:30 PM - 2:30 PM", title: "Lunch", type: "break" },
      { time: "2:30 PM - 4:00 PM", title: "Oral Session-5", type: "oral", link: "/oral-sessions" },
      { time: "4:00 PM - 5:00 PM", title: "Oral Session-6", type: "oral", link: "/oral-sessions" },
      { time: "5:00 PM - 6:00 PM", title: "Valedictory Function", type: "ceremony" },
      { time: "7:30 PM Onwards", title: "Dinner", type: "social" },
    ],
  },
}

function getEventStyle(type: string) {
  switch (type) {
    case "oral":
      return { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30", icon: Mic }
    case "poster":
      return { bg: "bg-emerald-500/10", text: "text-emerald-600", border: "border-emerald-500/30", icon: ImageIcon }
    case "vision":
      return { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-500/30", icon: Eye }
    case "industry":
      return { bg: "bg-rose-500/10", text: "text-rose-600", border: "border-rose-500/30", icon: Building2 }
    case "plenary":
      return { bg: "bg-violet-500/10", text: "text-violet-600", border: "border-violet-500/30", icon: GraduationCap }
    case "tutorial":
      return { bg: "bg-cyan-500/10", text: "text-cyan-600", border: "border-cyan-500/30", icon: GraduationCap }
    case "ceremony":
      return { bg: "bg-yellow-500/10", text: "text-yellow-600", border: "border-yellow-500/30", icon: Award }
    case "special":
      return { bg: "bg-indigo-500/10", text: "text-indigo-600", border: "border-indigo-500/30", icon: Users }
    case "social":
      return { bg: "bg-pink-500/10", text: "text-pink-600", border: "border-pink-500/30", icon: Music }
    case "break":
      return { bg: "bg-muted", text: "text-muted-foreground", border: "border-muted", icon: Coffee }
    default:
      return { bg: "bg-muted", text: "text-foreground", border: "border-border", icon: Calendar }
  }
}

function EventCard({ event }: { event: (typeof scheduleByDate.dec17.events)[0] }) {
  const style = getEventStyle(event.type)
  const Icon = style.icon
  const isBreak = event.type === "break"

  return (
    <div
      className={cn(
        "relative flex gap-4 p-4 rounded-lg border transition-all",
        style.bg,
        style.border,
        !isBreak && "hover:shadow-md cursor-pointer",
        isBreak && "opacity-70",
      )}
    >
      <div className={cn("flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center", style.bg)}>
        <Icon className={cn("h-5 w-5", style.text)} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className={cn("font-semibold text-foreground", isBreak && "text-muted-foreground")}>
              {event.link ? (
                <a href={event.link} className="hover:underline">
                  {event.title}
                </a>
              ) : (
                event.title
              )}
            </h4>
            {event.description && <p className="text-sm text-muted-foreground mt-0.5">{event.description}</p>}
          </div>
          <Badge variant="outline" className={cn("flex-shrink-0", style.text, style.border)}>
            <Clock className="h-3 w-3 mr-1" />
            {event.time}
          </Badge>
        </div>
      </div>
    </div>
  )
}

const quickLinks = [
  {
    title: "Oral Sessions",
    desc: "6 sessions across 3 days",
    icon: Mic,
    link: "/oral-sessions",
    color: "text-primary",
  },
  {
    title: "Poster Sessions",
    desc: "2 sessions with coffee breaks",
    icon: ImageIcon,
    link: "/poster-sessions",
    color: "text-emerald-600",
  },
  {
    title: "Vision India",
    desc: "Research from Indian institutions",
    icon: Eye,
    link: "/vision-india",
    color: "text-amber-600",
  },
  {
    title: "Tiny Papers",
    desc: "Short paper presentations",
    icon: GraduationCap,
    link: "/tiny-papers",
    color: "text-cyan-600",
  },
  { title: "Accepted Papers", desc: "All accepted papers", icon: Award, link: "/accept", color: "text-violet-600" },
]

export default function Index() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
          <Calendar className="h-4 w-4" />
          December 17-20, 2025
        </div>
        <h1 className="text-4xl font-bold text-foreground md:text-5xl font-serif mb-3 text-balance">
          ICVGIP 2025 Program Schedule
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Indian Conference on Computer Vision, Graphics and Image Processing
        </p>
        <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Venue: Auditorium Complex</span>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-10">
        {quickLinks.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="group p-4 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all"
          >
            <item.icon className={cn("h-6 w-6 mb-2", item.color)} />
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
          </a>
        ))}
      </div>

      {/* Schedule Image */}
      <div className="mb-10">
        <ScheduleImage src={scheduleImage} alt="ICVGIP 2025 Program Schedule" />
      </div>

      {/* Date-wise Schedule Tabs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Calendar className="h-6 w-6 text-primary" />
          Detailed Schedule by Date
        </h2>

        <Tabs defaultValue="dec17" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6 h-auto">
            {Object.entries(scheduleByDate).map(([key, dayData]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex flex-col gap-0.5 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="text-xs font-medium opacity-70">{dayData.label}</span>
                <span className="font-semibold text-sm">{dayData.day}</span>
                <span className="text-xs opacity-70">{dayData.date.split(",")[0].replace("December ", "Dec ")}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(scheduleByDate).map(([key, dayData]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{dayData.date}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {dayData.venue}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {dayData.events.length} events
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {dayData.events.map((event, idx) => (
                    <EventCard key={idx} event={event} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Plenary Speakers Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-violet-600" />
          Plenary Speakers
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Prof Nicu Sebe", time: "Dec 18", session: "Plenary-1" },
            { name: "Dr. Srinath Sridhar", time: "Dec 18", session: "Plenary-2" },
            { name: "Prof C V Jawahar", time: "Dec 18", session: "Plenary-3" },
            { name: "Prof. Paul Thompson", time: "Dec 19", session: "Plenary-4" },
            { name: "Dr P. Anandan", time: "Dec 19", session: "Plenary-5" },
          ].map((speaker) => (
            <Card key={speaker.name} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{speaker.name}</h3>
                    <p className="text-sm text-muted-foreground">{speaker.session}</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {speaker.time}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Legend */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">Event Types</h2>
        <div className="flex flex-wrap gap-2">
          {[
            { type: "oral", label: "Oral Sessions" },
            { type: "poster", label: "Poster Sessions" },
            { type: "vision", label: "Vision India" },
            { type: "industry", label: "Industry" },
            { type: "plenary", label: "Plenary" },
            { type: "ceremony", label: "Ceremony" },
            { type: "social", label: "Social" },
          ].map((item) => {
            const style = getEventStyle(item.type)
            return (
              <Badge key={item.type} variant="outline" className={cn(style.bg, style.text, style.border)}>
                {item.label}
              </Badge>
            )
          })}
        </div>
      </section>
    </PageLayout>
  )
}
