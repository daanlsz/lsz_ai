import ScrollReveal from './ScrollReveal';

const contactMethods = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: '电话咨询',
    value: '138-xxxx-xxxx',
    href: 'tel:13800000000',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: '邮件沟通',
    value: 'hello@jima.dev',
    href: 'mailto:hello@jima.dev',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    label: '微信联系',
    value: 'jima_dev',
    href: '#wechat',
  },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-dark to-dark-secondary rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block text-accent font-semibold text-sm tracking-wide uppercase mb-3 bg-accent/20 px-4 py-1.5 rounded-full">
                开始合作
              </span>
              <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4">
                有一个<span className="gradient-text">好想法</span>？
                <br />
                让我们一起<span className="gradient-text">实现它</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
                无论是创业项目、企业数字化转型，还是技术咨询，我都期待与您交流
              </p>
            </ScrollReveal>

            {/* Contact methods */}
            <ScrollReveal delay={0.2}>
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex flex-col items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 group"
                  >
                    <div className="text-white/60 group-hover:text-primary transition-colors">
                      {method.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-1">{method.label}</div>
                      <div className="text-white font-semibold group-hover:text-primary transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA button */}
            <ScrollReveal delay={0.4}>
              <a
                href="tel:13800000000"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 text-xl"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                立即免费咨询
              </a>
              <p className="text-slate-500 text-sm mt-4">
                48小时内回复 · 免费评估 · 无隐藏费用
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
