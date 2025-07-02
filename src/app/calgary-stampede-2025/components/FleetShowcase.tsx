'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'

const vehicles = [
  {
    name: 'Cadillac Escalade ESV',
    capacity: '6 passengers',
    features: ['WiFi', 'USB-C Charging', 'Cooler', 'Premium Sound'],
    bestFor: 'Parade mornings, executive transport',
    image: '/images/fleet/cadillac-escalade-esv.jpg'
  },
  {
    name: 'Mercedes Sprinter Jet-Van',
    capacity: '12 passengers',
    features: ['Club Seating', 'LED Mood Lighting', 'Bar Service', 'Entertainment System'],
    bestFor: 'Group concert hops, corporate events',
    image: '/images/fleet/mercedes-sprinter.jpg'
  },
  {
    name: 'Stretch Chrysler 300',
    capacity: '8 passengers',
    features: ['Full Bar', 'Privacy Partition', 'Fiber Optic Lighting', 'Premium Leather'],
    bestFor: 'Special occasions, night out',
    image: '/images/stretch-limo.jpg'
  },
  {
    name: 'Luxury Limo-Bus',
    capacity: '20 passengers',
    features: ['Dance Floor', 'Premium Sound System', 'Multiple Bars', 'Restroom'],
    bestFor: 'Large groups, corporate events',
    image: '/images/fleet/executive-coach.jpg'
  }
]

export default function FleetShowcase() {
  const [selectedVehicle, setSelectedVehicle] = useState(0)

  return (
    <Container>
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-4">
          Our Stampede Fleet
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Premium vehicles maintained to the highest standards for your comfort and safety
        </p>
      </div>

      {/* Vehicle Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {vehicles.map((vehicle, index) => (
          <button
            key={index}
            onClick={() => setSelectedVehicle(index)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedVehicle === index
                ? 'bg-gold text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {vehicle.name}
          </button>
        ))}
      </div>

      {/* Selected Vehicle Display */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src={vehicles[selectedVehicle].image}
            alt={vehicles[selectedVehicle].name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Details */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">
            {vehicles[selectedVehicle].name}
          </h3>
          <p className="text-2xl text-gold mb-6">
            Capacity: {vehicles[selectedVehicle].capacity}
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-white mb-3">Features:</h4>
            <div className="grid grid-cols-2 gap-3">
              {vehicles[selectedVehicle].features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-gray-300">
                  <span className="text-gold mr-2">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-sm text-gray-400">
              <strong className="text-white">Best for:</strong> {vehicles[selectedVehicle].bestFor}
            </p>
          </div>

          <Link
            href={`/booking?vehicle=${encodeURIComponent(vehicles[selectedVehicle].name)}&event=stampede`}
            className="mt-6 inline-block px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105"
          >
            Book This Vehicle
          </Link>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-4xl mb-3">🛡️</div>
          <h4 className="text-xl font-bold text-white mb-2">Fully Insured</h4>
          <p className="text-gray-400">Complete coverage for your peace of mind</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-4xl mb-3">👨‍✈️</div>
          <h4 className="text-xl font-bold text-white mb-2">Professional Chauffeurs</h4>
          <p className="text-gray-400">Licensed, trained, and background-checked</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-4xl mb-3">🧼</div>
          <h4 className="text-xl font-bold text-white mb-2">Impeccably Clean</h4>
          <p className="text-gray-400">Sanitized after every ride</p>
        </div>
      </div>
    </Container>
  )
}