import { motion } from 'framer-motion';
import { MapPin, Mail, User, Github, FileText } from 'lucide-react';

export const About = () => {
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
        <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Section Title */}
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <User className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300" size={40} />
                        </motion.div>
                        <motion.h2 className="text-4xl md:text-5xl font-bold gradient-text" variants={itemVariants}>
                            About Me
                        </motion.h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Left Column - Photo + Bio */}
                        <motion.div className="space-y-6" variants={itemVariants}>
                            <div className="flex items-start gap-6">
                                <motion.img
                                    src="/Babin.jpeg"
                                    alt="Babin Bid"
                                    className="w-36 h-36 rounded-full object-cover border-4 border-cyan-400/20 shadow-xl"
                                    whileHover={{ scale: 1.03 }}
                                />
                                <div>
                                    <h3 className="text-2xl font-semibold text-white">Babin Bid</h3>
                                    <p className="text-sm text-cyan-300 mt-1">Frontend Developer • AI Project Builder</p>
                                    <div className="mt-4 flex gap-3">
                                        <a href="/Babin_Bid_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-emerald-400/10 text-emerald-300 rounded-md border border-emerald-400/20 hover:bg-emerald-400/20 transition-colors text-sm flex items-center gap-2">
                                            <FileText size={16} /> View Resume
                                        </a>
                                        <a href="https://github.com/KGFCH2" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-cyan-400/10 text-cyan-300 rounded-md border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors text-sm flex items-center gap-2">
                                            <Github size={16} /> GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg text-gray-300 leading-relaxed">
                                I'm a Computer Science student passionate about building scalable, user-centric web experiences.
                                With a strong foundation in frontend technologies and a growing interest in AI integration,
                                I thrive on turning ideas into real products.
                            </p>

                            <p className="text-lg text-gray-300 leading-relaxed">
                                I write clean, maintainable code and focus on performance and accessibility. Open to collaborations and research-oriented projects.
                            </p>


                        </motion.div>

                        {/* Right Column - Info Cards + Stats */}
                        <motion.div className="space-y-4" variants={itemVariants}>
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                <div className="p-4 bg-white/3 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-white">10+</div>
                                    <div className="text-xs text-gray-300">Projects</div>
                                </div>
                                <div className="p-4 bg-white/3 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-white">1</div>
                                    <div className="text-xs text-gray-300">Research Paper</div>
                                </div>
                                <div className="p-4 bg-white/3 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-white">Intern</div>
                                    <div className="text-xs text-gray-300">Experience</div>
                                </div>
                            </div>

                            <motion.div className="glass-effect p-6 rounded-lg hover:bg-emerald-400/20 smooth-enter group border border-cyan-400/20 hover:border-emerald-400/50 transition-all duration-300" whileHover={{ y: -5, scale: 1.03 }}>
                                <div className="flex items-start gap-3">
                                    <motion.div className="flex-shrink-0 mt-1" whileHover={{ scale: 1.35, rotate: 15 }}>
                                        <MapPin className="text-emerald-400 group-hover:text-cyan-500 smooth-enter transition-colors duration-300" size={24} />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1 group-hover:text-cyan-500 transition-colors duration-300">Location</h3>
                                        <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">Belur, Howrah <br />West Bengal, India</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="glass-effect p-6 rounded-lg hover:bg-cyan-400/20 smooth-enter group border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300" whileHover={{ y: -5, scale: 1.03 }}>
                                <div className="flex items-start gap-3">
                                    <motion.div className="flex-shrink-0 mt-1" whileHover={{ scale: 1.35, rotate: -15 }}>
                                        <Mail className="text-cyan-400 group-hover:text-cyan-300 smooth-enter transition-colors duration-300" size={24} />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">Collaboration</h3>
                                        <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">Open to opportunities and partnerships</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="glass-effect p-6 rounded-lg hover:bg-purple-400/20 smooth-enter group border border-cyan-400/20 hover:border-purple-400/50 transition-all duration-300" whileHover={{ y: -5, scale: 1.03 }}>
                                <h3 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">🚀 Mindset</h3>
                                <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">Continuous learner who embraces new challenges and adapts quickly to emerging technologies.</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
