import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export const GitHub = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
        <section id="github" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Section Title */}
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Github className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300" size={40} />
                        </motion.div>
                        <motion.h2 className="text-4xl md:text-5xl font-bold text-center gradient-text" variants={itemVariants}>
                            GitHub Activity
                        </motion.h2>
                    </div>

                    <motion.p className="text-center text-gray-300 mb-12" variants={itemVariants}>
                        Open source contributions and consistent development
                    </motion.p>

                    {/* GitHub Stats Card */}
                    <motion.div
                        className="glass-effect p-8 rounded-xl text-center mb-8"
                        variants={itemVariants}
                        whileHover={{ y: -8, scale: 1.03 }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-6 group/header">
                            <motion.div whileHover={{ scale: 1.4, rotate: -20 }}>
                                <Github className="text-cyan-400 group-hover/header:text-emerald-400 smooth-enter transition-colors duration-300" size={32} />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white group-hover/header:text-cyan-300 transition-colors duration-300">KGFCH2</h3>
                        </div>

                        <p className="text-gray-300 mb-6 max-w-md mx-auto group-hover:text-gray-100 transition-colors duration-300">
                            Active on GitHub with contributions to personal projects, learning repositories, and collaborative work.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <motion.div className="glass-effect p-4 rounded-lg hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" whileHover={{ scale: 1.08, y: -4 }}>
                                <p className="text-2xl font-bold text-cyan-400">25+</p>
                                <p className="text-gray-300 text-sm">Repositories</p>
                            </motion.div>
                            <motion.div className="glass-effect p-4 rounded-lg hover:bg-emerald-400/20 hover:border-emerald-400/50 transition-all duration-300" whileHover={{ scale: 1.08, y: -4 }}>
                                <p className="text-2xl font-bold text-emerald-400">150+</p>
                                <p className="text-gray-300 text-sm">Commits</p>
                            </motion.div>
                            <motion.div className="glass-effect p-4 rounded-lg hover:bg-purple-400/20 hover:border-purple-400/50 transition-all duration-300" whileHover={{ scale: 1.08, y: -4 }}>
                                <p className="text-2xl font-bold text-purple-400">10+</p>
                                <p className="text-gray-300 text-sm">Starred</p>
                            </motion.div>
                        </div>

                        {/* CTA Button */}
                        <motion.a
                            href="https://github.com/KGFCH2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/75 smooth-enter transition-all duration-300 group"
                            whileHover={{ scale: 1.08 }}
                        >
                            <motion.div whileHover={{ scale: 1.3, rotate: 360 }} transition={{ duration: 0.6 }}>
                                <Github size={20} />
                            </motion.div>
                            Visit GitHub Profile
                            <motion.div whileHover={{ scale: 1.3, x: 4 }}>
                                <ExternalLink size={16} />
                            </motion.div>
                        </motion.a>
                    </motion.div>

                    {/* Contribution Highlight */}
                    <motion.div className="glass-effect p-6 rounded-xl text-center" variants={itemVariants}>
                        <p className="text-gray-300 text-sm mb-3">
                            💚 Passionate about open source and sharing knowledge with the developer community 💚
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
