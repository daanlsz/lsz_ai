import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    name: '张总',
    role: '某连锁餐饮品牌 · CEO',
    avatar: '👨‍💼',
    quote: '吉马程序员帮我们从0到1搭建了整个 SaaS 系统，不只是技术过硬，更能深入理解餐饮行业的业务痛点。系统上线后，我们的运营效率提升了 40%。合作非常愉快！',
    rating: 5,
  },
  {
    name: '李老师',
    role: '在线教育平台 · 产品负责人',
    avatar: '👩‍🏫',
    quote: '我们当时要在6个月内上线一个直播教学平台，很多团队都说不可能。吉马程序员不仅按时交付，平台体验也远超预期，学生和家长都非常满意。',
    rating: 5,
  },
  {
    name: '王总',
    role: '社交电商 · 联合创始人',
    avatar: '👨‍💻',
    quote: '从需求沟通到最终上线，每个环节都非常专业。代码质量高、文档齐全、沟通及时。小程序上线后用户反馈特别好，裂变效果远超预期。',
    rating: 5,
  },
  {
    name: '赵经理',
    role: '物联网公司 · CTO',
    avatar: '👨‍🔧',
    quote: '我们设备管理后台的架构评审找到了吉马程序员，他给的方案分析和优化建议非常有价值，帮我们避免了几个潜在的严重瓶颈。',
    rating: 4,
  },
  {
    name: '陈总',
    role: '创业团队 · 创始人',
    avatar: '👩‍💼',
    quote: '作为一个非技术背景的创业者，吉马程序员给了我很多中肯的建议，帮我避开了不少坑。他做的官网和后台系统非常稳定，推荐给所有创业朋友！',
    rating: 5,
  },
  {
    name: '刘总监',
    role: '金融科技公司 · VP',
    avatar: '👨‍💼',
    quote: '数据看板项目的响应速度和处理能力超出我们的预期要求。TB级别的数据查询仍然保持秒级响应，对我们投资决策的价值非常大。',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            客户评价
          </span>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mt-4 mb-4">
            他们<span className="gradient-text">这样说</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            客户的认可，是我最大的动力
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name + t.role} delay={index * 0.08}>
              <div className="bg-light p-7 rounded-2xl border border-border hover:shadow-lg hover:border-primary/10 transition-all duration-300 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill={i < t.rating ? '#F59E0B' : '#E2E8F0'}
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted leading-relaxed mb-6 flex-1 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <span className="text-3xl">{t.avatar}</span>
                  <div>
                    <div className="font-bold text-dark text-sm">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
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
