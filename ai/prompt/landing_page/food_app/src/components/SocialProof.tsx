import ScrollReveal from './ScrollReveal';

const partners = [
  { name: 'Burger House', emoji: '🍔' },
  { name: 'Tokyo Sushi', emoji: '🍣' },
  { name: 'Pizza Roma', emoji: '🍕' },
  { name: 'Taco Fiesta', emoji: '🌮' },
  { name: 'Green Bowl', emoji: '🥗' },
  { name: 'Noodle Bar', emoji: '🍜' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    quote: 'Foodiez has completely changed how I order food. The delivery is incredibly fast and the app is so easy to use!',
    rating: 5,
    location: 'New York, NY',
  },
  {
    name: 'Marcus Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    quote: 'I love discovering new local restaurants through Foodiez. Their personalized recommendations are always spot on.',
    rating: 5,
    location: 'Austin, TX',
  },
  {
    name: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    quote: 'The real-time order tracking gives me peace of mind. I know exactly when my food will arrive. Best delivery app out there!',
    rating: 5,
    location: 'Chicago, IL',
  },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-20 bg-white" aria-labelledby="social-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners */}
        <ScrollReveal>
          <p className="text-center text-sm font-semibold text-warm-gray uppercase tracking-widest mb-8">
            Trusted by your favorite restaurants
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-20">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl hover:bg-orange/5 hover:shadow-md transition-all duration-200"
              >
                <span className="text-3xl" role="img" aria-hidden="true">{partner.emoji}</span>
                <span className="text-xs font-semibold text-charcoal text-center">{partner.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal>
          <h2 id="social-heading" className="text-4xl sm:text-5xl font-extrabold text-charcoal text-center mb-4">
            What our customers say
          </h2>
          <p className="text-lg text-warm-gray text-center mb-12 max-w-xl mx-auto">
            Thousands of happy foodies love ordering with us
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <div className="bg-cream rounded-3xl p-6 lg:p-8 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s} className="text-orange text-lg" role="img" aria-hidden="true">⭐</span>
                  ))}
                </div>

                <blockquote className="text-base text-warm-gray leading-relaxed mb-6 flex-1 italic">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-orange/10">
                  <img
                    src={t.avatar}
                    alt={`${t.name} portrait`}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-charcoal text-sm">{t.name}</div>
                    <div className="text-xs text-warm-gray">{t.location}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
