import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { label: 'GitHub', href: 'https://github.com/KGFCH2', icon: Github },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/babin-bid-853728293/', icon: Linkedin },
        { label: 'Email', href: 'mailto:babinbid05@gmail.com', icon: Mail },
    ];

    return (
        <footer className="bg-black border-t border-cyan-400/20 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Main Footer Text */}
                    <p className="text-gray-300 mb-4">
                        Built with <span className="text-cyan-400">React</span>, <span className="text-emerald-400">TypeScript</span>, and{' '}
                        <span className="text-purple-400">Tailwind CSS</span>
                    </p>

                    {/* Deployment Info */}
                    <p className="text-gray-500 text-sm mb-6">
                        Deployed on <span className="text-cyan-400 font-semibold">GitHub Pages</span>
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                        {footerLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-cyan-400 smooth-enter transition-colors duration-300 flex items-center gap-2 group"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <motion.div whileHover={{ scale: 1.3, rotate: 20 }}>
                                        <Icon size={16} className="group-hover:text-cyan-400 transition-colors duration-300" />
                                    </motion.div>
                                    {link.label}
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-600 text-xs">
                        © {currentYear} Babin Bid. All rights reserved. Designed & developed with ❤️
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};
