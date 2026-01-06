"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface GitHubContributionsProps {
  username?: string
}

interface ContributionDay {
  date: string
  contributionCount: number
  color: string
}

export default function GitHubContributions({ username = "audgeviolin07" }: GitHubContributionsProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString())
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const query = `
          query($username: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $username) {
              contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      color
                    }
                  }
                }
              }
            }
          }
        `

        const from = new Date('2025-07-01T00:00:00Z')
        const to = new Date() // Current date/time

        const variables = {
          username,
          from: from.toISOString(),
          to: to.toISOString()
        }

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN || ''}`
          },
          body: JSON.stringify({ query, variables })
        })

        if (!response.ok) {
          throw new Error('Failed to fetch contributions')
        }

        const data = await response.json()

        if (data.errors) {
          throw new Error(data.errors[0].message)
        }

        const contributionsData: ContributionDay[] = []
        data.data.user.contributionsCollection.contributionCalendar.weeks.forEach((week: any) => {
          week.contributionDays.forEach((day: any) => {
            contributionsData.push({
              date: day.date,
              contributionCount: day.contributionCount,
              color: getContributionColor(day.contributionCount)
            })
          })
        })

        setContributions(contributionsData)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err)
        setError(true)
        setLoading(false)
      }
    }

    fetchContributions()
  }, [username])

  const getContributionColor = (count: number): string => {
    if (count === 0) return '#333333'
    if (count <= 1) return '#666666'
    if (count <= 2) return '#888888'
    if (count <= 3) return '#aaaaaa'
    return '#cccccc'
  }

  const renderContributionGrid = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-20">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-sepia-medium"></div>
        </div>
      )
    }

    if (error) {
      return (
        <div className="text-center text-sm text-muted-foreground">
          unable to load contributions
        </div>
      )
    }

    // Group contributions by weeks
    const weeks: ContributionDay[][] = []
    let currentWeek: ContributionDay[] = []

    contributions.forEach((day, index) => {
      const dayOfWeek = new Date(day.date).getDay()

      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push([...currentWeek])
        currentWeek = []
      }

      currentWeek.push(day)

      if (index === contributions.length - 1) {
        weeks.push(currentWeek)
      }
    })

    return (
      <div className="w-full flex justify-center">
        <svg width="0" height="0" className="absolute">
          <filter id="dither">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <div className="w-full max-w-fit overflow-x-auto">
          <div className="flex justify-center gap-[1px] xs:gap-[2px] sm:gap-[3px] md:gap-1 lg:gap-1.5 mx-auto w-fit">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[1px] xs:gap-[2px] sm:gap-[3px] md:gap-1 lg:gap-1.5">
                {Array.from({ length: 7 }, (_, dayIndex) => {
                  const day = week.find(d => new Date(d.date).getDay() === dayIndex)
                  return (
                    <div
                      key={dayIndex}
                      className="w-[4px] h-[4px] xs:w-[5px] xs:h-[5px] sm:w-[5px] sm:h-[5px] md:w-[6px] md:h-[6px] lg:w-[6px] lg:h-[6px] xl:w-[7px] xl:h-[7px] transition-all duration-200"
                      style={{
                        backgroundColor: day ? day.color : '#1a1a1a',
                        filter: 'url(#dither)'
                      }}
                      title={day ? `${day.contributionCount} contributions on ${day.date}` : ''}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full mt-4 md:mt-6"
    >
      <div className="mx-auto w-fit rounded-sm border border-sepia-medium/50 bg-beige-light/10 dark:bg-sepia-dark/5 px-2 py-2 sm:px-3 sm:py-2 overflow-hidden">
        <div className="mx-auto w-full">
          {renderContributionGrid()}
        </div>
        <p className="text-center text-[8px] sm:text-[10px] text-white mt-2">
          github contributions, live updated · {currentTime}
        </p>
      </div>
    </motion.div>
  )
}
