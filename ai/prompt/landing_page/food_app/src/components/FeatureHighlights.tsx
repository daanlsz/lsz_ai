import ScrollReveal from './ScrollReveal';

const features = [
  {
    title: 'Real-time order tracking',
    description:
      'Watch your order go from restaurant to your doorstep with live GPS tracking. Get accurate ETAs and status updates at every step of the journey.',
    icon: '📍',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    alt: 'Smartphone showing live order tracking map with delivery route',
  },
  {
    title: 'Personalized recommendations',
    description:
      'Our AI learns your taste preferences and suggests dishes you will love. Discover new restaurants and cuisines matched perfectly to your palate.',
    icon: '🤖',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
    alt: 'Colorful variety of gourmet dishes arranged on a table',
  },
  {
    title: 'Lightning-fast checkout',
    description:
      'Save your favorite orders, payment methods, and delivery address for a one-tap checkout experience. Reorder your go-to meals in seconds.',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    alt: 'Person using smartphone to make contactless payment',
  },
  {
    title: 'Exclusive local restaurants',
    description:
      'Access hidden gems and local favorites you won\'t find on other apps. We partner directly with neighborhood restaurants to bring you unique flavors.',
    icon: '🏪',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    alt: 'Cozy local restaurant interior with warm lighting',
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            id="features-heading"
            className="text-4xl sm:text-5xl font-extrabold text-charcoal text-center mb-4"
          >
            Why you'll love Foodiez
          </h2>
          <p className="text-lg text-warm-gray text-center mb-16 max-w-xl mx-auto">
            Everything you need for the perfect food delivery experience
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-20 lg:gap-28">
          {features.map((feature, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal
                key={feature.title}
                direction={isEven ? 'left' : 'right'}
                delay={0.1}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:[direction:rtl]'
                  }`}
                >
                  {/* Image */}
                  <div className={isEven ? '' : 'lg:[direction:ltr]'}>
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-orange/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="relative w-full h-72 sm:h-80 lg:h-96 object-cover rounded-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={isEven ? '' : 'lg:[direction:ltr]'}>
                    <span className="text-4xl mb-4 block" role="img" aria-hidden="true">
                      {feature.icon}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
