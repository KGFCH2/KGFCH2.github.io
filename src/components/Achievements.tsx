import { motion } from 'framer-motion';
import { Award, Code, BookOpen, Zap, Trophy } from 'lucide-react';

interface Achievement {
    icon: React.ReactNode;
    title: string;
    description: string;
    items: string[];
}

export const Achievements = () => {
    const achievements: Achievement[] = [
        {
            icon: <Award className="w-8 h-8 text-cyan-400" />,
            title: 'Hackathons & Competitions',
            description: 'Participated in multiple hackathons and coding competitions',
            items: [
                'Built and deployed projects under time pressure',
                'Collaborated with diverse teams',
                'Won recognition for innovation and execution',
            ],
        },
        {
            icon: <Code className="w-8 h-8 text-emerald-400" />,
            title: 'Real-World Development',
            description: 'Practical experience building production-ready applications',
            items: [
                'Full-stack frontend development',
                'Performance optimization',
                'Responsive & accessible design',
            ],
        },
        {
            icon: <BookOpen className="w-8 h-8 text-purple-400" />,
            title: 'Continuous Learning',
            description: 'Committed to staying updated with industry standards',
            items: [
                'Completed courses in React, TypeScript, and AI',
                'Explored AI/ML fundamentals',
                'Active GitHub contribution history',
            ],
        },
        {
            icon: <Zap className="w-8 h-8 text-orange-400" />,
            title: 'Problem-Solving',
            description: 'Strong foundation in algorithms and data structures',
            items: [
                'Solved 200+ DSA problems',
                'Optimized performance in production',
                'Debugged complex technical challenges',
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
        hover: {
            y: -8,
            transition: { duration: 0.3 },
        },
    };

    return (
        <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Section Title */}
                    <div className="flex items-center justify-center gap-3 mb-16">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Trophy className="text-purple-400 hover:text-purple-300 transition-colors duration-300" size={40} />
                        </motion.div>
                        <motion.h2 className="text-4xl md:text-5xl font-bold text-center gradient-text" variants={cardVariants}>
                            Achievements
                        </motion.h2>
                    </div>

                    {/* Achievements Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {achievements.map((achievement, idx) => (
                            <motion.div
                                key={idx}
                                className="glass-effect p-8 rounded-xl hover:bg-white/10 smooth-enter"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                {/* Icon and Title */}
                                <div className="flex items-start gap-4 mb-4">
                                    <motion.div className="p-3 bg-white/5 rounded-lg group-hover:bg-cyan-400/20 smooth-enter transition-all duration-300" whileHover={{ scale: 1.25, rotate: 25 }}>{achievement.icon}</motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">{achievement.title}</h3>
                                        <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{achievement.description}</p>
                                    </div>
                                </div>

                                {/* Achievement Items */}
                                <div className="space-y-3 mt-6">
                                    {achievement.items.map((item, itemIdx) => (
                                        <motion.div key={itemIdx} className="flex items-start gap-3 group/item" whileHover={{ x: 4 }}>
                                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 smooth-enter transition-transform duration-300"></div>
                                            <p className="text-gray-300 text-sm group-hover/item:text-gray-100 transition-colors duration-300">{item}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
