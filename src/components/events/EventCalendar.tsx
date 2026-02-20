'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

interface Event {
  id: number
  title: string
  slug: string
  date: string
  endDate?: string
  time: string
  location: string
  type: string
  category: string
  description: string
  booth?: string | null
}

interface EventCalendarProps {
  events: Event[]
}

export default function EventCalendar({ events }: EventCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<'month' | 'list'>('month')

  // Get the first day of the month
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  
  // Get the day of week for the first day (0 = Sunday, 1 = Monday, etc.)
  const startingDayOfWeek = firstDayOfMonth.getDay()
  
  // Get total days in month
  const daysInMonth = lastDayOfMonth.getDate()
  
  // Get previous month's last day
  const lastDayOfPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()

  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  // Check if a date has events
  const getEventsForDate = (year: number, month: number, day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return events.filter(event => {
      const eventDate = event.date
      const eventEndDate = event.endDate || event.date
      return dateStr >= eventDate && dateStr <= eventEndDate
    })
  }

  // Generate calendar days
  const calendarDays = []
  
  // Previous month's days
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const day = lastDayOfPrevMonth - i
    calendarDays.push({
      day,
      isCurrentMonth: false,
      isPrevMonth: true,
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day),
      events: []
    })
  }
  
  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = getEventsForDate(currentDate.getFullYear(), currentDate.getMonth(), day)
    calendarDays.push({
      day,
      isCurrentMonth: true,
      isPrevMonth: false,
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), day),
      events: dayEvents
    })
  }
  
  // Next month's days to fill the grid
  const remainingDays = 42 - calendarDays.length // 6 rows × 7 days
  for (let day = 1; day <= remainingDays; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      isPrevMonth: false,
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, day),
      events: []
    })
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const isToday = (date: Date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Calendar Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold text-gray-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <Button onClick={goToToday} variant="outline" size="sm">
            Today
          </Button>
        </div>
        
        <div className="flex items-center gap-4">
          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setView('month')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                view === 'month'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                view === 'list'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              List
            </button>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <Button onClick={goToPreviousMonth} variant="outline" size="sm">
              ← Prev
            </Button>
            <Button onClick={goToNextMonth} variant="outline" size="sm">
              Next →
            </Button>
          </div>
        </div>
      </div>

      {view === 'month' ? (
        <>
          {/* Day Names Header */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {dayNames.map(day => (
              <div key={day} className="text-center font-semibold text-gray-700 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((calendarDay, index) => {
              const hasEvents = calendarDay.events.length > 0
              const isTodayDate = isToday(calendarDay.date)

              return (
                <div
                  key={index}
                  className={`min-h-24 p-2 border rounded-lg transition-all ${
                    !calendarDay.isCurrentMonth
                      ? 'bg-gray-50 text-gray-400'
                      : hasEvents
                      ? 'bg-primary-50 border-primary-200 hover:bg-primary-100 cursor-pointer'
                      : 'bg-white hover:bg-gray-50'
                  } ${
                    isTodayDate
                      ? 'ring-2 ring-accent-500'
                      : ''
                  }`}
                >
                  <div className={`text-sm font-semibold mb-1 ${
                    isTodayDate ? 'text-accent-600' : ''
                  }`}>
                    {calendarDay.day}
                  </div>
                  
                  {hasEvents && (
                    <div className="space-y-1">
                      {calendarDay.events.slice(0, 2).map((event) => (
                        <Link
                          key={event.id}
                          href={`/events/${event.slug}`}
                          className="block"
                        >
                          <div className="text-xs bg-primary-600 text-white px-2 py-1 rounded truncate hover:bg-primary-700 transition-colors">
                            {event.title.length > 20 ? event.title.substring(0, 20) + '...' : event.title}
                          </div>
                        </Link>
                      ))}
                      {calendarDay.events.length > 2 && (
                        <div className="text-xs text-primary-600 font-semibold px-2">
                          +{calendarDay.events.length - 2} more
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-accent-500"></div>
              <span>Today</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-primary-50 border border-primary-200"></div>
              <span>Has Events</span>
            </div>
          </div>
        </>
      ) : (
        /* List View */
        <div className="space-y-4">
          {events
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map((event) => (
              <div
                key={event.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <span className="text-sm font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>📍 {event.location}</p>
                      <p>🕐 {event.time}</p>
                      {event.booth && <p>🏢 {event.booth}</p>}
                    </div>
                  </div>
                  <div>
                    <Link href={`/events/${event.slug}`}>
                      <Button variant="primary">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          
          {events.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">No events scheduled for this period.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

