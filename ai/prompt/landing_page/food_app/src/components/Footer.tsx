const footerLinks = {
  Company: ['About Us', 'Careers', 'Press', 'Blog', 'Partner with Us'],
  Support: ['Help Center', 'Contact Us', 'Safety Guidelines', 'FAQs', 'Accessibility'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Do Not Sell My Info'],
};

const socials = [
  { label: 'Twitter', icon: '🐦' },
  { label: 'Instagram', icon: '📸' },
  { label: 'Facebook', icon: '📘' },
  { label: 'TikTok', icon: '🎵' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4" aria-label="Foodiez home">
              <span className="text-3xl" role="img" aria-hidden="true">🍕</span>
              <span className="text-2xl font-bold">Foodiez</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Your go-to app for fast, reliable food delivery from the best local restaurants.
              Eat what you love, when you love it.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 bg-white/10 hover:bg-orange rounded-xl flex items-center justify-center text-lg transition-all duration-200 hover:scale-110"
                >
                  <span role="img" aria-hidden="true">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/80">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-orange transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App store buttons */}
        <div className="flex flex-wrap gap-3 mb-8 pt-8 border-t border-white/10">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
            aria-label="Download on the App Store"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
            aria-label="Get it on Google Play"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            Google Play
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Foodiez, Inc. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Made with 🩷 for food lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
