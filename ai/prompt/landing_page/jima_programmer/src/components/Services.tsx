import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: '🌐',
    title: 'Web 应用开发',
    description: '使用 React、Vue 等现代前端框架，构建高性能、响应式的 Web 应用，从企业官网到复杂后台管理系统。',
    tags: ['React', 'Vue', 'TypeScript', 'Next.js'],
  },
  {
    icon: '📱',
    title: '微信小程序开发',
    description: '原生微信小程序 + UniApp 跨端方案，覆盖微信生态内的商城、预约、社区等全场景需求。',
    tags: ['微信小程序', 'UniApp', 'Taro'],
  },
  {
    icon: '⚙️',
    title: '后端架构 & API',
    description: 'Node.js / Python / Go 技术栈，设计稳定可扩展的后端服务、RESTful API 与微服务架构。',
    tags: ['Node.js', 'Python', 'Go', 'PostgreSQL'],
  },
  {
    icon: '🎨',
    title: 'UI/UX 设计',
    description: '从用户研究到高保真原型，打造美观易用的产品体验。提供完整的设计系统与组件库交付。',
    tags: ['Figma', 'Design System', 'Prototyping'],
  },
  {
    icon: '☁️',
    title: '云部署 & DevOps',
    description: '阿里云 / AWS / CloudFlare 部署方案，CI/CD 自动化流水线，保障服务稳定高效运行。',
    tags: ['Docker', 'CI/CD', 'AWS', '阿里云'],
  },
  {
    icon: '🔍',
    title: '技术咨询 & 架构评审',
    description: '为您的技术方案提供专业评审，识别风险并提出优化建议，帮助团队少走弯路。',
    tags: ['架构设计', '性能优化', '代码审计'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            服务范围
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mt-4 mb-4">
            我能为您<span className="gradient-text">做什么</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            从前端到后端，从设计到部署，提供全链路的技术服务，一站式满足您的数字化需求
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="group bg-white p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
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
