import { useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const screens = [
  {
    title: 'Browse Menus',
    description: 'Explore hundreds of restaurants',
    emoji: '🍽️',
    color: 'from-orange to-red-400',
  },
  {
    title: 'Quick Order',
    description: 'One-tap reordering',
    emoji: '⚡',
    color: 'from-orange to-yellow-400',
  },
  {
    title: 'Live Tracking',
    description: 'Real-time GPS updates',
    emoji: '📍',
    color: 'from-orange to-pink-400',
  },
  {
    title: 'Ratings & Reviews',
    description: 'Honest foodie feedback',
    emoji: '⭐',
    color: 'from-orange to-amber-400',
  },
  {
    title: 'Fast Checkout',
    description: 'Saved payments & address',
    emoji: '💳',
    color: 'from-orange to-orange-600',
  },
  {
    title: 'Deals & Rewards',
    description: 'Earn points on every order',
    emoji: '🎁',
    color: 'from-orange to-rose-400',
  },
];

export default function AppPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 lg:py-28 bg-cream overflow-hidden" aria-labelledby="preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            id="preview-heading"
            className="text-4xl sm:text-5xl font-extrabold text-charcoal text-center mb-4"
          >
            Explore the app
          </h2>
          <p className="text-lg text-warm-gray text-center mb-16 max-w-xl mx-auto">
            Everything you love about Foodiez, right in your pocket
          </p>
        </ScrollReveal>
      </div>

      {/* Horizontal scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
        role="list"
        aria-label="App screens preview"
      >
        {screens.map((screen, i) => (
          <motion.div
            key={screen.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-64 sm:w-72 snap-start"
            role="listitem"
          >
            <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border-[5px] border-charcoal">
              {/* Status bar */}
              <div className="bg-charcoal h-6 flex items-center justify-between px-5">
                <span className="text-[9px] font-bold text-white">9:41</span>
                <span className="text-[9px] font-bold text-white">●●●●○</span>
              </div>
              {/* Screen content */}
              <div className={`bg-gradient-to-b ${screen.color} p-5 pt-8 pb-4 flex flex-col items-center text-center gap-3 min-h-[280px]`}>
                <span className="text-5xl" role="img" aria-hidden="true">{screen.emoji}</span>
                <h3 className="text-lg font-bold text-white">{screen.title}</h3>
                <p className="text-sm text-white/80">{screen.description}</p>
                {/* Fake app elements */}
                <div className="mt-auto w-full space-y-2">
                  <div className="bg-white/20 rounded-lg h-2 w-3/4 mx-auto" />
                  <div className="bg-white/20 rounded-lg h-2 w-1/2 mx-auto" />
                  <div className="bg-white rounded-xl h-10 w-full mt-3" />
                </div>
              </div>
              {/* Home indicator */}
              <div className="flex justify-center py-1.5">
                <div className="w-24 h-1 bg-gray-300 rounded-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center mt-6 gap-2 opacity-50">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
          <path d="M5 12h14" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
        <span className="text-sm text-warm-gray">Scroll to explore</span>
      </div>
    </section>
  );
}
