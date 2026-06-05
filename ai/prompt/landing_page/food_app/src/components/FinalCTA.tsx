import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function FinalCTA() {
  return (
    <section id="cta" className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#1A1A3E] to-charcoal" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-3xl" />
      </div>

      {/* Food emoji decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] left-[8%] text-5xl opacity-40 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        🍕
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[20%] right-[10%] text-5xl opacity-40 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        🍔
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[40%] right-[7%] text-4xl opacity-30 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        🥗
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2
            id="cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Download Foodiez and get your
            <br />
            food <span className="text-orange">faster than ever</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join over 2 million foodies who trust Foodiez for their daily meals. Available on iOS and Android.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-charcoal font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl"
              aria-label="Download on the App Store"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="text-lg font-bold -mt-0.5">App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-charcoal font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl"
              aria-label="Get it on Google Play"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-70">Get it on</div>
                <div className="text-lg font-bold -mt-0.5">Google Play</div>
              </div>
            </motion.a>
          </div>
        </ScrollReveal>

        {/* Trust badges */}
        <ScrollReveal delay={0.45}>
          <div className="flex flex-wrap gap-8 justify-center text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <span>🔒</span> Secure checkout
            </div>
            <div className="flex items-center gap-2">
              <span>⭐</span> 4.9 · 200K+ reviews
            </div>
            <div className="flex items-center gap-2">
              <span>🔔</span> Instant notifications
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
