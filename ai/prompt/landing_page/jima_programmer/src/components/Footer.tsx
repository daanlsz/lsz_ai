const footerLinks = {
  服务: ['Web应用开发', '小程序开发', '后端架构', 'UI/UX设计', '云部署', '技术咨询'],
  关于: ['关于我', '作品案例', '合作流程', '客户评价', '技术博客'],
  联系: ['电话咨询', '邮件沟通', '微信联系', 'GitHub', '知乎'],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-400 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <span className="text-3xl" role="img" aria-hidden="true">💻</span>
              <span className="text-xl font-extrabold text-white tracking-tight">
                吉马<span className="gradient-text">程序员</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              10年+全栈开发经验，用技术为您的业务创造价值。
              从前端到后端，从设计到部署，为每个项目提供最专业的技术服务。
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: 'GitHub', icon: '🐙', href: '#' },
                { label: '知乎', icon: '📝', href: '#' },
                { label: '掘金', icon: '💎', href: '#' },
                { label: '微信', icon: '💬', href: '#contact' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary hover:text-white flex items-center justify-center text-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold mb-4 text-sm">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} 吉马程序员. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
            <a href="#" className="hover:text-white transition-colors">备案号</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
