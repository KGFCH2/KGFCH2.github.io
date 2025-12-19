import { motion } from 'framer-motion';
import { Github, FileText, User } from 'lucide-react';

export const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
            {/* Animated background orbs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -top-40 -left-40 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse delay-700"></div>
            </div>

            <motion.div
                className="max-w-4xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Name */}
                <motion.div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <User className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300" size={40} />
                    </motion.div>
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold gradient-text"
                        variants={itemVariants}
                    >
                        Babin Bid
                    </motion.h1>
                </motion.div>

                {/* Roles */}
                <motion.div className="flex flex-wrap justify-center gap-3 mb-6" variants={itemVariants} role="list" aria-label="My roles">
                    {['Frontend Developer', 'AI Project Builder', 'Problem Solver'].map((role, idx) => (
                        <motion.span
                            key={role}
                            className="px-4 py-2 glass-effect rounded-full text-sm md:text-base font-medium text-cyan-300 border border-cyan-400/30 hover:border-cyan-400/80 hover:bg-cyan-400/20 transition-all duration-300 cursor-pointer"
                            whileHover={{ scale: 1.05, y: -4 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                            role="listitem"
                            aria-label={`Role: ${role}`}
                        >
                            {role}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Tagline */}
                <motion.p
                    className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                    variants={itemVariants}
                >
                    I build clean, performant, and future-ready web experiences.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                    variants={itemVariants}
                >
                    <motion.a
                        href="#projects"
                        className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/75 smooth-enter transform transition-all duration-300 active:scale-95 relative overflow-hidden group"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="View my projects"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-500 opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10">View Projects</span>
                    </motion.a>
                    <motion.a
                        href="https://github.com/KGFCH2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 glass-effect text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-cyan-400/20 hover:text-cyan-300 smooth-enter transform transition-all duration-300 active:scale-95 border border-white/20 hover:border-cyan-400/50 group"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Visit my GitHub profile"
                    >
                        <motion.div whileHover={{ scale: 1.4, rotate: 360 }} transition={{ duration: 0.6 }}>
                            <Github size={20} aria-hidden="true" />
                        </motion.div>
                        <span className="group-hover:text-cyan-300 transition-colors duration-300">GitHub Profile</span>
                    </motion.a>
                    <motion.a
                        href="/Babin_Bid_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 glass-effect text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-emerald-400/20 hover:text-emerald-300 smooth-enter transform transition-all duration-300 active:scale-95 border border-white/20 hover:border-emerald-400/50 group"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="View my resume"
                    >
                        <motion.div whileHover={{ scale: 1.4, rotate: 360 }} transition={{ duration: 0.6 }}>
                            <FileText size={20} aria-hidden="true" />
                        </motion.div>
                        <span className="group-hover:text-emerald-300 transition-colors duration-300">View Resume</span>
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="px-8 py-3 glass-effect text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-emerald-400/20 hover:text-cyan-500 smooth-enter transform transition-all duration-300 active:scale-95 border border-white/20 hover:border-emerald-400/50 group"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Get in touch with me"
                    >
                        <motion.div whileHover={{ scale: 1.4, rotate: 360 }} transition={{ duration: 0.6 }}>
                            <FileText size={20} aria-hidden="true" />
                        </motion.div>
                        <span className="group-hover:text-cyan-500 transition-colors duration-300">Get In Touch</span>
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="mt-16 flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-label="Scroll down to see more content"
                >
                    <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center" aria-hidden="true">
                        <div className="w-1 h-2 bg-cyan-400 rounded-full" aria-hidden="true"></div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
