import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

export function ContactInfo() {
  return (
    <Timeline defaultValue={4} className="w-full max-w-md">
      <TimelineItem step={1}>
        <TimelineHeader>
          <TimelineTitle className="font-bold">Email</TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent className="flex items-center gap-2">
          <Mail className="h-5 w-5 shrink-0 font-semibold text-primary-background" />{" "}
          <span className="text-primary-background">it@chaity.com</span>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem step={2}>
        <TimelineHeader>
          <TimelineTitle className="font-bold">Phone</TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent className="flex items-center gap-2">
          <Phone className="h-5 w-5 shrink-0 font-semibold text-primary-background" />
          <span className="text-primary-background">+8801909008004</span>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem step={3}>
        <TimelineHeader>
          <TimelineTitle className="font-bold">Address</TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent className="flex items-center gap-2">
          <MapPin className="h-5 w-5 shrink-0 font-semibold text-primary-background" />
          <span className="min-w-0 flex-1 break-words text-primary-background">
            Tipurdi,Sonargaon,Bangladesh
          </span>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem step={4}>
        <TimelineHeader>
          <TimelineTitle className="font-bold">WhatsApp</TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 shrink-0 font-semibold text-green-600" />
          <span className="text-green-600">+8801909008004</span>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
