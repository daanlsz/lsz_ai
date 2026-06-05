import { motion } from 'framer-motion';

const floatingCards = [
  { emoji: '🍔', label: 'Burgers', delay: 0, x: -20, y: -80 },
  { emoji: '🍣', label: 'Sushi', delay: 0.3, x: 60, y: -40 },
  { emoji: '🍕', label: 'Pizza', delay: 0.6, x: 40, y: -120 },
  { emoji: '🥗', label: 'Salads', delay: 0.9, x: -50, y: -20 },
];

const trustBadges = [
  { value: '4.9', label: 'App Rating', icon: '⭐' },
  { value: '25min', label: 'Avg Delivery', icon: '🛵' },
  { value: '500+', label: 'Restaurants', icon: '🍽️' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-to-br from-cream via-white to-orange/5 overflow-hidden pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="text-center lg:text-left">
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-charcoal leading-[1.05] tracking-tight mb-6"
            >
              Your favorite food,
              <br />
              <span className="text-orange">delivered fast</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="text-lg sm:text-xl text-warm-gray max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Discover the best local restaurants, order in seconds, and get hot meals delivered
              straight to your door in under 30 minutes.
            </motion.p>

            {/* App store buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-charcoal hover:bg-black text-white font-semibold px-6 py-3.5 rounded-2xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                aria-label="Download on the App Store"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-base font-bold -mt-0.5">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-charcoal hover:bg-black text-white font-semibold px-6 py-3.5 rounded-2xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                aria-label="Get it on Google Play"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-base font-bold -mt-0.5">Google Play</div>
                </div>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <span className="text-2xl" role="img" aria-hidden="true">{badge.icon}</span>
                  <div>
                    <div className="text-lg font-bold text-charcoal">{badge.value}</div>
                    <div className="text-sm text-warm-gray">{badge.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — iPhone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating food cards */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: 1,
                  x: card.x,
                  y: [card.y, card.y - 15, card.y],
                }}
                transition={{
                  delay: 0.8 + card.delay,
                  x: { duration: 0.6 },
                  y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2"
                style={{
                  left: card.x > 0 ? undefined : '10%',
                  right: card.x > 0 ? '10%' : undefined,
                  top: '15%',
                  transform: `translate(${card.x}px, ${card.y}px)`,
                }}
              >
                <span className="text-2xl" role="img" aria-hidden="true">{card.emoji}</span>
                <span className="text-sm font-semibold text-charcoal">{card.label}</span>
              </motion.div>
            ))}

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="relative z-10"
            >
              <div className="w-72 sm:w-80 h-[560px] bg-charcoal rounded-[3rem] border-[6px] border-charcoal shadow-2xl overflow-hidden relative">
                {/* Status bar */}
                <div className="bg-orange h-8 flex items-center justify-between px-6 pt-1">
                  <span className="text-[10px] font-bold text-white">9:41</span>
                  <span className="text-[10px] font-bold text-white">●●●●○  🔋</span>
                </div>
                {/* App screen */}
                <div className="bg-white h-full rounded-t-[2rem] -mt-1 p-5 flex flex-col gap-4 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-charcoal">🍕 Foodiez</span>
                    <span className="text-xs text-warm-gray">📍 Near you</span>
                  </div>
                  {/* Search bar */}
                  <div className="bg-gray-100 rounded-xl px-4 py-3 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <span className="text-sm text-warm-gray">Search restaurants...</span>
                  </div>
                  {/* Food cards */}
                  {[
                    { name: 'Crispy Chicken Burger', resto: 'Burger House', price: '$12.99', emoji: '🍔', color: 'bg-orange/10' },
                    { name: 'Fresh Salmon Sushi', resto: 'Tokyo Roll', price: '$18.99', emoji: '🍣', color: 'bg-orange/10' },
                    { name: 'Margherita Pizza', resto: 'Pizza Roma', price: '$14.99', emoji: '🍕', color: 'bg-orange/10' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
                        {item.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-charcoal truncate">{item.name}</div>
                        <div className="text-xs text-warm-gray">{item.resto}</div>
                      </div>
                      <div className="text-sm font-bold text-orange">{item.price}</div>
                    </div>
                  ))}
                  {/* Tracking banner */}
                  <div className="bg-orange text-white rounded-2xl p-4 mt-auto">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span>🛵</span>
                      <span>Your order is on the way!</span>
                    </div>
                    <div className="text-xs mt-1 opacity-90">Arriving in 12 minutes</div>
                    <div className="mt-2 bg-white/30 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-white h-full rounded-full w-3/4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
