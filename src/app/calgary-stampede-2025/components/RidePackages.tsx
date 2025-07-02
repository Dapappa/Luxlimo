'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'

const packages = [
  {
    name: 'Parade Early Bird Service',
    price: 'From $299',
    image: '/images/stampede/stampede-parade-sunrise.jpg',
    features: [
      '6 AM pickup',
      'Complimentary coffee & pastries',
      'Blankets for comfort',
      'Return ride included'
    ],
    perfectFor: 'Families, corporate groups',
    note: 'Drop-off at public viewing areas',
    popular: false
  },
  {
    name: 'Rodeo & Midway All-Day',
    price: 'From $399',
    image: '/images/stampede/stampede-family-vehicle.jpg',
    features: [
      'Noon pickup',
      'Vehicle storage for purchases',
      '11 PM return',
      'Multiple stop options'
    ],
    perfectFor: 'Tourists, families',
    popular: true
  },
  {
    name: 'Concert Crawler Pass',
    price: 'From $599',
    image: '/images/stampede/stampede-party-limo.jpg',
    features: [
      'Hourly chauffeur service',
      'Multi-venue transportation',
      'Complimentary champagne',
      'Priority pickup zones'
    ],
    perfectFor: 'Party groups, bachelor(ette)s',
    popular: true
  },
  {
    name: 'Corporate Stampede Package',
    price: 'Custom quotes',
    image: '/images/stampede/stampede-corporate-vehicle.jpg',
    features: [
      'Full-day service',
      'Professional chauffeur',
      'Client entertainment ready',
      'Custom branding available'
    ],
    perfectFor: 'Business entertainment',
    popular: false
  },
  {
    name: 'After-Dark Safe Ride',
    price: 'From $199',
    image: '/images/stampede/stampede-night-ride.jpg',
    features: [
      'Midnight-3 AM standby',
      'GPS location sharing',
      'Female drivers available',
      'Direct-to-home service'
    ],
    perfectFor: 'Solo concert-goers',
    popular: false
  },
  {
    name: 'Build Your Own',
    price: 'Get instant quote',
    image: '/images/stampede/stampede-custom-trip.jpg',
    features: [
      'Choose your vehicle',
      'Set your schedule',
      'Select your stops',
      'Add custom amenities'
    ],
    perfectFor: 'Custom needs',
    isCustom: true
  }
]

export default function RidePackages() {
  return (
    <Container>
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-4">
          Stampede Ride Packages
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Tailored transportation solutions for every Stampede experience
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative bg-gray-900 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 ${
              pkg.popular ? 'ring-2 ring-gold' : ''
            }`}
          >
            {pkg.popular && (
              <div className="absolute top-4 right-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                Popular
              </div>
            )}

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold text-gold mb-4">{pkg.price}</p>

              <ul className="space-y-2 mb-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-800 pt-4">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">Perfect for:</strong> {pkg.perfectFor}
                </p>
                {pkg.note && (
                  <p className="text-xs text-gold italic">{pkg.note}</p>
                )}
              </div>

              <Link
                href={pkg.isCustom ? '#planner' : '/booking'}
                className="mt-6 block w-full text-center px-4 py-2 bg-gold text-black rounded-full font-bold hover:bg-gold/90 transition-colors"
              >
                {pkg.isCustom ? 'Build Package' : 'Book Package'}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <div className="mt-12 bg-black/50 rounded-lg p-8 border border-gold/20">
        <h3 className="text-2xl font-bold text-gold mb-6 text-center">
          Enhance Your Ride
        </h3>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🍾</div>
            <h4 className="font-bold text-white mb-1">Catered Refreshments</h4>
            <p className="text-sm text-gray-400">Premium snacks & beverages</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🤠</div>
            <h4 className="font-bold text-white mb-1">Stetson Gift Packs</h4>
            <p className="text-sm text-gray-400">Authentic cowboy hats</p>
          </div>
          <div>
            <div className="text-3xl mb-2">📸</div>
            <h4 className="font-bold text-white mb-1">Professional Photos</h4>
            <p className="text-sm text-gray-400">Capture your group's style</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🎯</div>
            <h4 className="font-bold text-white mb-1">Red Carpet Arrival</h4>
            <p className="text-sm text-gray-400">VIP treatment at pickup</p>
          </div>
        </div>
      </div>
    </Container>
  )
}