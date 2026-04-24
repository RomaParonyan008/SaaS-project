import { motion } from 'framer-motion';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Integrations', 'API'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Templates'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <motion.a
              href="#"
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Nexus
            </motion.a>
            <p className="text-gray-400 mt-4 text-sm">
              Empowering teams to build better products, faster.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            2024 Nexus. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['twitter', 'github', 'linkedin'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="capitalize">{social}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
