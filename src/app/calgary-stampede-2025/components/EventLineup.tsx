'use client'

import Image from 'next/image'
import Container from '@/components/ui/Container'

const events = [
  {
    date: 'JULY 4',
    title: 'PARADE DAY',
    icon: '⭐',
    details: [
      'Shania Twain Parade Marshal',
      '6:00 AM start - downtown route',
      'Drop-off at designated public areas'
    ],
    image: '/images/stampede/stampede-parade-crowd.jpg',
    cta: 'Book Parade Package'
  },
  {
    date: 'DAILY',
    title: 'STAMPEDE EVENTS',
    icon: '🤠',
    details: [
      'Rodeo - 1:30 PM daily',
      'Evening Show - 7:30 PM nightly',
      'Midway - Open all day'
    ],
    image: '/images/stampede/stampede-rodeo-action.jpg',
    cta: 'Plan Your Day'
  },
  {
    date: 'JULY 5-12',
    title: 'CONCERT HEADLINERS',
    icon: '🎤',
    details: [
      'July 5: Shania Twain (Saddledome)',
      'July 7: Kygo (Cowboys)',
      'July 9: Khalid (Coca-Cola Stage)',
      'July 12: Alesso (Coca-Cola Stage)'
    ],
    image: '/images/stampede/stampede-concert-crowd.jpg',
    cta: 'See Full Line-up'
  },
  {
    date: 'NIGHTLY',
    title: 'PARTY VENUES',
    icon: '🏛️',
    details: [
      'Cowboys Music Festival',
      'Badlands Music Fest',
      'Nashville North',
      'Big Four Roadhouse'
    ],
    image: '/images/stampede/stampede-stage-lights.jpg',
    cta: 'Venue Transport Guide'
  }
]

export default function EventLineup() {
  return (
    <Container>
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-4">
          2025 Stampede Line-up & Key Dates
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          From the opening parade to late-night concerts, we'll get you there in luxury and comfort
        </p>
      </div>

      <div className="space-y-8">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden group">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-3xl">{event.icon}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-red-600 text-white text-sm font-bold rounded-full mb-3">
                {event.date}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{event.title}</h3>
              <ul className="space-y-2 mb-6">
                {event.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start justify-center lg:justify-start">
                    <span className="text-gold mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-gold text-black rounded-full font-bold hover:bg-gold/90 transition-all transform hover:scale-105">
                {event.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Value Days */}
      <div className="mt-16 bg-gradient-to-r from-red-900/20 to-gold/20 rounded-lg p-8 border border-gold/30">
        <h3 className="text-2xl font-bold text-gold mb-4 text-center">
          💰 Value Days - Beat the Crowds!
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <div>
            <strong className="text-white">July 3:</strong> Sneak-A-Peek (½ price admission)
          </div>
          <div>
            <strong className="text-white">July 4:</strong> Parade-to-Park free gate (11-1:30)
          </div>
          <div>
            <strong className="text-white">July 6:</strong> Tim Hortons Family Day (free until 11)
          </div>
          <div>
            <strong className="text-white">July 8:</strong> Community Day (free 10-2)
          </div>
        </div>
        <p className="text-center mt-6 text-gold font-medium">
          Book early morning rides to take advantage of these deals!
        </p>
      </div>
    </Container>
  )
}