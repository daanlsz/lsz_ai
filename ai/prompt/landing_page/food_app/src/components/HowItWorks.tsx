import ScrollReveal from './ScrollReveal';

const steps = [
  {
    step: '01',
    icon: '🔍',
    title: 'Browse restaurants',
    description:
      'Explore hundreds of local restaurants with detailed menus, real photos, and honest reviews from fellow foodies.',
    color: 'bg-orange/10',
  },
  {
    step: '02',
    icon: '📱',
    title: 'Order in seconds',
    description:
      'Customize your meal, apply special instructions, and check out instantly with saved payment methods.',
    color: 'bg-orange/10',
  },
  {
    step: '03',
    icon: '🛵',
    title: 'Fast delivery',
    description:
      'Track your order in real-time as our delivery partners bring your food hot and fresh, typically in under 30 minutes.',
    color: 'bg-orange/10',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-cream" aria-labelledby="how-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            id="how-heading"
            className="text-4xl sm:text-5xl font-extrabold text-charcoal text-center mb-4"
          >
            How it works
          </h2>
          <p className="text-lg text-warm-gray text-center mb-16 max-w-xl mx-auto">
            Get your favorite meals delivered in three simple steps
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.2}>
              <div className="relative text-center group">
                {/* Step connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-14 left-[60%] w-[80%] h-[2px] border-t-2 border-dashed border-orange/30" />
                )}

                {/* Icon circle */}
                <div
                  className={`w-28 h-28 ${s.color} rounded-3xl flex items-center justify-center text-5xl mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange/20 transition-all duration-300`}
                  role="img"
                  aria-hidden="true"
                >
                  {s.icon}
                </div>

                {/* Step number */}
                <span className="inline-block text-xs font-bold text-orange uppercase tracking-widest mb-2">
                  Step {s.step}
                </span>

                <h3 className="text-xl font-bold text-charcoal mb-3">{s.title}</h3>
                <p className="text-base text-warm-gray leading-relaxed max-w-xs mx-auto">
                  {s.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
