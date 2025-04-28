"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Event = {
  id: number
  title: string
  date: string
  time: string
  description: string
  location: string
}

type EventCalendarProps = {
  events: Event[]
}

export default function EventCalendar({ events }: EventCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Get day of week for first day of month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)

  // Create array of day numbers for the month
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  // Create array for empty cells before first day
  const emptyCells = Array.from({ length: firstDayOfMonth }, (_, i) => null)

  // Combine empty cells and days
  const allCells = [...emptyCells, ...days]

  // Format month name
  const monthName = currentMonth.toLocaleString("default", { month: "long" })

  // Check if a day has events
  const hasEvents = (day: number) => {
    // Convert current calendar day to a date string for comparison
    const dateStr = `${monthName} ${day}, ${year}`

    // Check if any event matches this date
    // Note: This is a simple check that works with the format "Month Day, Year"
    // In a real app, you'd want to use proper date parsing and comparison
    return events.some((event) => {
      if (event.date === "Every Sunday") {
        // Check if this day is a Sunday
        const dayOfWeek = new Date(year, month, day).getDay()
        return dayOfWeek === 0
      }
      return event.date.includes(dateStr)
    })
  }

  // Get events for a specific day
  const getEventsForDay = (day: number) => {
    const dateStr = `${monthName} ${day}, ${year}`
    return events.filter((event) => {
      if (event.date === "Every Sunday") {
        const dayOfWeek = new Date(year, month, day).getDay()
        return dayOfWeek === 0
      }
      return event.date.includes(dateStr)
    })
  }

  // State for selected day and its events
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [dayEvents, setDayEvents] = useState<Event[]>([])

  // Handle day click
  const handleDayClick = (day: number) => {
    setSelectedDay(day)
    setDayEvents(getEventsForDay(day))
  }

  return (
    <div className="w-full">
      {/* Calendar header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-orange-900">{`${monthName} ${year}`}</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Day names */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium text-orange-800 py-2">
            {day}
          </div>
        ))}

        {/* Calendar cells */}
        {allCells.map((day, index) => (
          <div
            key={index}
            className={cn(
              "h-14 border border-orange-100 p-1",
              day ? "cursor-pointer hover:bg-orange-50" : "bg-gray-100",
              selectedDay === day ? "bg-orange-100 border-orange-300" : "",
            )}
            onClick={() => day && handleDayClick(day)}
          >
            {day && (
              <>
                <div className="text-sm font-medium">{day}</div>
                {hasEvents(day) && <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 mx-auto"></div>}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Selected day events */}
      {selectedDay && dayEvents.length > 0 && (
        <div className="mt-6 border-t border-orange-200 pt-4">
          <h4 className="font-medium text-orange-900 mb-2">
            Events for {monthName} {selectedDay}, {year}
          </h4>
          <div className="space-y-2">
            {dayEvents.map((event) => (
              <div key={event.id} className="bg-orange-50 p-3 rounded-md">
                <div className="font-medium text-orange-900">{event.title}</div>
                <div className="text-sm text-orange-700">
                  {event.time} • {event.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
