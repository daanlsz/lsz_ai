import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function PromoBanner() {
  return (
    <section className="py-16 bg-white" aria-labelledby="promo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative bg-gradient-to-r from-orange to-orange-dark rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl shadow-orange/25"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                  Limited Time Offer
                </span>
                <h2
                  id="promo-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight"
                >
                  Free delivery on your
                  <br />
                  first order
                </h2>
                <p className="text-white/80 text-lg max-w-md">
                  New to Foodiez? Enjoy free delivery on your very first meal. No minimum order required.
                </p>
              </div>

              <motion.a
                href="#cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-orange font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex-shrink-0"
              >
                Claim Offer
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
