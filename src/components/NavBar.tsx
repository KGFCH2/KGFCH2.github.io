import { motion } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: 'hero' },
        { label: 'About', href: 'about' },
        { label: 'Skills', href: 'skills' },
        { label: 'Projects', href: 'projects' },
        { label: 'Achievements', href: 'achievements' },
        { label: 'GitHub', href: 'github' },
        { label: 'Contact', href: 'contact' },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false);
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.05, duration: 0.4 },
        }),
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-cyan-400/20"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        className="text-2xl font-bold gradient-text cursor-pointer flex items-center gap-2"
                        onClick={() => scrollToSection('hero')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <User size={28} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300" />
                        </motion.div>
                        Babin
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item, i) => (
                            <motion.button
                                key={item.label}
                                onClick={() => scrollToSection(item.href)}
                                className="px-4 py-2 text-gray-300 rounded-lg relative group overflow-hidden transition-colors duration-300"
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Background hover effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-lg"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Text */}
                                <span className="relative z-10 block group-hover:text-cyan-300 transition-colors duration-300">
                                    {item.label}
                                </span>

                                {/* Bottom border animation */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        className="md:hidden mt-4 space-y-2"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {navItems.map((item) => (
                            <motion.button
                                key={item.label}
                                onClick={() => scrollToSection(item.href)}
                                className="w-full px-4 py-3 text-left text-gray-300 rounded-lg hover:bg-cyan-400/20 hover:text-cyan-300 transition-all duration-300 relative group overflow-hidden"
                                whileHover={{ x: 8 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Background */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10">{item.label}</span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};
