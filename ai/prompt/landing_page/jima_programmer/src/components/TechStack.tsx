import ScrollReveal from './ScrollReveal';

const techCategories = [
  {
    title: '前端框架',
    items: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Vue / Nuxt', level: 90 },
      { name: 'TypeScript', level: 95 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    title: '后端技术',
    items: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / FastAPI', level: 85 },
      { name: 'Go / Gin', level: 75 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    title: '数据库 & 云',
    items: [
      { name: 'PostgreSQL / MySQL', level: 90 },
      { name: 'MongoDB / Redis', level: 85 },
      { name: 'Docker / K8s', level: 80 },
      { name: 'AWS / 阿里云', level: 85 },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-20 sm:py-28 bg-light" aria-labelledby="tech-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide uppercase mb-3 bg-accent/10 px-4 py-1.5 rounded-full">
            技术栈
          </span>
          <h2 id="tech-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mt-4 mb-4">
            精通的<span className="gradient-text">技术工具</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            持续学习前沿技术，为每个项目选择最合适的技术方案
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.15}>
              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-dark mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-dark">{item.name}</span>
                        <span className="text-xs font-bold text-primary">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
