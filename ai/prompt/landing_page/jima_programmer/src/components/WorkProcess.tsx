import ScrollReveal from './ScrollReveal';

const steps = [
  {
    step: '01',
    icon: '💬',
    title: '需求沟通',
    description: '深入沟通了解您的业务场景与目标，梳理功能需求，输出清晰的需求文档与技术方案建议。',
    details: ['业务分析', '技术选型建议', '需求文档', '报价方案'],
  },
  {
    step: '02',
    icon: '✏️',
    title: '方案设计',
    description: '产出产品原型与 UI 设计稿，制定技术架构方案，确认开发排期与里程碑。',
    details: ['原型设计', 'UI设计稿', '技术架构', '项目排期'],
  },
  {
    step: '03',
    icon: '🔨',
    title: '迭代开发',
    description: '采用敏捷开发模式，每周同步进度与 Demo，您随时可以看到项目的最新状态。',
    details: ['敏捷开发', '周报同步', '持续集成', '代码审查'],
  },
  {
    step: '04',
    icon: '🚀',
    title: '交付上线',
    description: '完成测试、部署上线，提供完善的文档与培训，以及长期的技术维护支持。',
    details: ['全面测试', '部署上线', '操作文档', '长期维护'],
  },
];

export default function WorkProcess() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-light" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide uppercase mb-3 bg-accent/10 px-4 py-1.5 rounded-full">
            合作流程
          </span>
          <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mt-4 mb-4">
            如何<span className="gradient-text">一起工作</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            透明、高效的协作流程，让项目推进有条不紊
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, index) => (
              <ScrollReveal key={s.step} delay={index * 0.12}>
                <div className="bg-white rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full relative group">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-extrabold text-slate-100 group-hover:text-primary/10 transition-colors select-none">
                      {s.step}
                    </span>
                    <span className="text-3xl">{s.icon}</span>
                  </div>

                  <h3 className="text-xl font-bold text-dark mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-4 text-sm">
                    {s.description}
                  </p>

                  {/* Detail list */}
                  <ul className="space-y-1.5">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-muted">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
