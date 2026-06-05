import { motion } from 'framer-motion';

const trustBadges = [
  { value: '10+', label: '年开发经验', icon: '⚡' },
  { value: '200+', label: '完成项目', icon: '🚀' },
  { value: '98%', label: '客户满意度', icon: '⭐' },
  { value: '50+', label: '合作客户', icon: '🤝' },
];

const techIcons = [
  { emoji: '⚛️', name: 'React', delay: 0, x: -30, y: -60 },
  { emoji: '🟢', name: 'Node.js', delay: 0.3, x: 70, y: -30 },
  { emoji: '🐍', name: 'Python', delay: 0.5, x: 50, y: -100 },
  { emoji: '☁️', name: 'Cloud', delay: 0.7, x: -60, y: -20 },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-bg via-white to-accent/5 overflow-hidden pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #4F46E5 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              可接新项目 · 免费咨询
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-[1.08] tracking-tight mb-6"
            >
              用代码<span className="gradient-text">创造价值</span>
              <br />
              让技术<span className="gradient-text">驱动增长</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="text-lg sm:text-xl text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              10年+全栈开发经验，为您的业务量身打造高质量 Web 应用、微信小程序与后端系统，让技术成为您最坚实的竞争力。
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:scale-95 text-lg"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                免费咨询报价
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-dark font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-lg border border-border hover:-translate-y-0.5 active:scale-95 text-lg"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                查看作品案例
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <span className="text-2xl" role="img" aria-hidden="true">{badge.icon}</span>
                  <div>
                    <div className="text-lg font-bold text-dark">{badge.value}</div>
                    <div className="text-sm text-muted">{badge.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — Code / Tech illustration */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating tech icons */}
            {techIcons.map((icon) => (
              <motion.div
                key={icon.name}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: 1,
                  y: [icon.y, icon.y - 15, icon.y],
                }}
                transition={{
                  delay: 0.8 + icon.delay,
                  y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute z-20 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 border border-border"
                style={{
                  left: icon.x > 0 ? undefined : '5%',
                  right: icon.x > 0 ? '5%' : undefined,
                  top: '15%',
                  transform: `translate(${icon.x}px, ${icon.y}px)`,
                }}
              >
                <span className="text-2xl" role="img" aria-hidden="true">{icon.emoji}</span>
                <span className="text-sm font-semibold text-dark">{icon.name}</span>
              </motion.div>
            ))}

            {/* Code editor mockup */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="relative z-10"
            >
              <div className="w-80 sm:w-96 bg-dark-secondary rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
                {/* Title bar */}
                <div className="bg-slate-800 flex items-center gap-2 px-4 py-3 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-slate-400 ml-2">main.tsx — 吉马程序员</span>
                </div>
                {/* Code content */}
                <div className="p-5 font-mono text-sm leading-relaxed bg-dark-secondary overflow-hidden">
                  <div className="text-slate-500">
                    <span className="text-purple-400">import</span> {'{'} useState, useEffect {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;
                  </div>
                  <div className="h-1" />
                  <div>
                    <span className="text-purple-400">export default function</span> <span className="text-blue-400">App</span>() {'{'}
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-cyan-400">[ready, setReady]</span> = <span className="text-yellow-400">useState</span>(<span className="text-orange-400">true</span>);
                  </div>
                  <div className="h-1" />
                  <div>
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> (
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400">&lt;</span><span className="text-red-400">div</span> <span className="text-cyan-400">className</span>=<span className="text-green-400">"app"</span><span className="text-slate-400">&gt;</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400">&lt;</span><span className="text-red-400">h1</span><span className="text-slate-400">&gt;</span>
                    <span className="text-white">🚀 启动成功!</span>
                    <span className="text-slate-400">&lt;/</span><span className="text-red-400">h1</span><span className="text-slate-400">&gt;</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400">&lt;/</span><span className="text-red-400">div</span><span className="text-slate-400">&gt;</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;);
                  </div>
                  <div>
                    {'}'}
                  </div>
                  {/* Blinking cursor */}
                  <div className="flex items-center gap-1 mt-3">
                    <span className="text-green-400">❯</span>
                    <span className="w-2 h-4 bg-primary animate-pulse rounded-sm" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
