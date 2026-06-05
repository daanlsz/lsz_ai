import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
  icon: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: '智慧餐饮 SaaS 平台',
    description: '为连锁餐饮企业打造的集点餐、后厨管理、供应链、数据报表于一体的全链路 SaaS 平台。',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    color: 'from-amber-500 to-orange-600',
    icon: '🍽️',
    highlights: ['日订单处理 10万+', '覆盖 500+ 门店', '系统可用性 99.9%'],
  },
  {
    id: 2,
    title: '在线教育直播平台',
    description: '支持万人同时在线的互动教学平台，具备白板协作、实时答题、课程回放等丰富功能。',
    tags: ['Vue.js', 'WebRTC', 'Python', 'Redis'],
    color: 'from-blue-500 to-cyan-500',
    icon: '📚',
    highlights: ['万人同时在线', '延迟 < 200ms', '6个月从0到上线'],
  },
  {
    id: 3,
    title: '社交电商小程序',
    description: '基于微信生态的社交电商平台，集成分销裂变、直播带货、会员体系等核心商业功能。',
    tags: ['UniApp', 'Node.js', 'MongoDB', 'Redis'],
    color: 'from-pink-500 to-rose-500',
    icon: '🛒',
    highlights: ['月GMV破千万', '用户裂变率 300%', '小程序评分 4.8'],
  },
  {
    id: 4,
    title: '物联网设备管理后台',
    description: '面向工业场景的 IoT 设备监控与管理系统，实时数据采集、可视化大屏与智能预警。',
    tags: ['React', 'Go', 'InfluxDB', 'MQTT'],
    color: 'from-emerald-500 to-teal-600',
    icon: '🏭',
    highlights: ['管理 10万+ 设备', '毫秒级数据采集', '故障预警准确率 95%'],
  },
  {
    id: 5,
    title: '企业官网 & CMS 系统',
    description: '为多家企业打造的现代品牌官网与内容管理系统，支持多语言、SEO优化、可视化编辑。',
    tags: ['Next.js', 'TailwindCSS', 'Strapi', 'Vercel'],
    color: 'from-violet-500 to-purple-600',
    icon: '🏢',
    highlights: ['Lighthouse 满分', '多语言支持', 'SEO流量提升 200%'],
  },
  {
    id: 6,
    title: '金融数据可视化仪表盘',
    description: '为投资机构打造的实时数据看板，涵盖股票分析、风险监控、投资组合管理等核心模块。',
    tags: ['React', 'D3.js', 'FastAPI', 'ClickHouse'],
    color: 'from-indigo-500 to-blue-600',
    icon: '📊',
    highlights: ['TB级数据秒级查询', '50+ 图表类型', '实时数据刷新'],
  },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number>(0);

  const current = projects[activeProject];

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-white" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
            精选作品
          </span>
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mt-4 mb-4">
            创造过的<span className="gradient-text">优秀项目</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            每个项目都倾注了我的心血，这是其中几个代表性案例
          </p>
        </ScrollReveal>

        {/* Tab switcher */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeProject === index
                    ? 'bg-dark text-white shadow-lg shadow-dark/20'
                    : 'bg-slate-100 text-muted hover:bg-slate-200 hover:text-dark'
                }`}
              >
                <span>{project.icon}</span>
                {project.title}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-light rounded-3xl p-8 sm:p-12 border border-border overflow-hidden relative"
          >
            {/* Decorative gradient */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${current.color} opacity-[0.08] rounded-bl-full pointer-events-none`} />

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{current.icon}</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-dark">
                    {current.title}
                  </h3>
                </div>
                <p className="text-muted leading-relaxed mb-6 text-lg">
                  {current.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {current.highlights.map((h) => (
                    <div key={h} className="bg-white rounded-xl p-4 text-center border border-border">
                      <div className="text-lg font-bold text-primary">{h.split(' ').slice(0, -1).join(' ')}</div>
                      <div className="text-xs text-muted mt-1">{h.split(' ').slice(-1).join(' ')}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold bg-white text-primary border border-primary/20 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual placeholder */}
              <div className={`aspect-video rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center shadow-xl`}>
                <span className="text-7xl drop-shadow-lg">{current.icon}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
