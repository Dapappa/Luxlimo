'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import StampedeHero from './components/StampedeHero'
import EventLineup from './components/EventLineup'
import RidePackages from './components/RidePackages'
import FleetShowcase from './components/FleetShowcase'
import TripPlanner from './components/TripPlanner'
import FAQSection from './components/FAQSection'
import SocialProof from './components/SocialProof'

export default function CalgaryStampede2025Page() {
  const [activeSection, setActiveSection] = useState('lineup')
  const [daysUntilStampede, setDaysUntilStampede] = useState(0)

  useEffect(() => {
    // Calculate days until July 4, 2025
    const stampedeDate = new Date('2025-07-04')
    const today = new Date()
    const timeDiff = stampedeDate.getTime() - today.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    setDaysUntilStampede(daysDiff > 0 ? daysDiff : 0)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <StampedeHero daysUntilStampede={daysUntilStampede} />

      {/* Sticky Navigation */}
      <nav className="sticky top-20 z-40 bg-black/95 backdrop-blur-sm border-y border-gold/20">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 py-4">
            {[
              { id: 'lineup', label: 'Line-up & Dates' },
              { id: 'packages', label: 'Ride Packages' },
              { id: 'fleet', label: 'Our Fleet' },
              { id: 'planner', label: 'Trip Planner' },
              { id: 'faqs', label: 'FAQs' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gold/10 text-gold hover:bg-gold/20'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/booking"
              className="px-6 py-2 bg-red-600 text-white rounded-full text-sm font-bold hover:bg-red-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </Container>
      </nav>

      {/* Who We Serve Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-8 text-center">
              Who We Serve During Stampede
            </h2>
            
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-6 mb-8">
              <p className="text-lg text-white mb-4">
                <strong className="text-gold">Important:</strong> We are a luxury transportation company - we get you TO the events in style, not INTO them. All event tickets and access must be arranged separately through official Stampede channels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Our Stampede Clients Include:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong className="text-white">Performing Artists & Their Teams</strong> - Discrete, professional service for talent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong className="text-white">Event Organizers & Staff</strong> - Reliable transport for those running the show</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong className="text-white">Corporate Groups</strong> - Impress clients with luxury arrivals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong className="text-white">Tourists & Visitors</strong> - Navigate Calgary like a local</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong className="text-white">Local Calgarians</strong> - Skip the parking hassles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong className="text-white">Wedding & Special Events</strong> - Stampede-themed celebrations</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">What We Provide:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Luxury vehicles with professional chauffeurs</li>
                    <li>✓ Drop-off at designated public entrances</li>
                    <li>✓ Safe, reliable transportation between venues</li>
                    <li>✓ Storage for purchases while you enjoy events</li>
                    <li>✓ Flexible scheduling for multi-stop nights</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-3">What We DON'T Provide:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✗ Event tickets or special access</li>
                    <li>✗ VIP passes or backstage entry</li>
                    <li>✗ Line-skipping privileges</li>
                    <li>✗ Reserved seating at venues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Sections */}
      <section id="lineup" className="py-16 bg-black">
        <EventLineup />
      </section>

      <section id="packages" className="py-16 bg-gradient-to-b from-black to-gray-900">
        <RidePackages />
      </section>

      <section id="fleet" className="py-16 bg-black">
        <FleetShowcase />
      </section>

      <section id="planner" className="py-16 bg-gradient-to-b from-black to-gray-900">
        <TripPlanner />
      </section>

      <section id="faqs" className="py-16 bg-black">
        <FAQSection />
      </section>

      {/* Social Proof Bar */}
      <SocialProof />

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-6">
              Ready to Ride in Style?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't get stuck in traffic or searching for parking. Book your luxury Stampede transportation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="px-8 py-4 bg-red-600 text-white rounded-full text-lg font-bold hover:bg-red-700 transition-all transform hover:scale-105"
              >
                Book Your Stampede Ride
              </Link>
              <a
                href="tel:1-403-605-8133"
                className="px-8 py-4 bg-gold text-black rounded-full text-lg font-bold hover:bg-gold/90 transition-all transform hover:scale-105"
              >
                Call 1(403) 605-8133
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}