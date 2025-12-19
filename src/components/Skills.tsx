import { motion } from 'framer-motion';
import {
    Code,
    FileCode,
    Atom,
    Palette,
    Monitor,
    Database,
    TreePine,
    Cpu,
    Brain,
    Network,
    BarChart3,
    Table,
    Bot,
    GitBranch,
    Github,
    PenTool,
    Globe,
    Rocket,
    Package,
    Terminal,
    Wrench
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillCategory {
    title: string;
    color: string;
    skills: string[];
}

export const Skills = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: 'Frontend',
            color: 'from-cyan-400 to-blue-400',
            skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Responsive Design'],
        },
        {
            title: 'Programming & CS',
            color: 'from-emerald-400 to-green-400',
            skills: ['Python', 'Java', 'C/C++', 'SQL', 'Data Structures', 'Algorithms', 'OOP'],
        },
        {
            title: 'AI/ML Exposure',
            color: 'from-purple-400 to-pink-400',
            skills: ['ML Basics', 'TensorFlow', 'Data Analysis', 'NumPy/Pandas', 'AI Integration'],
        },
        {
            title: 'Tools & Platforms',
            color: 'from-orange-400 to-red-400',
            skills: ['Git/GitHub', 'VS Code', 'Figma', 'Vercel', 'GitHub Pages', 'Vite', 'npm'],
        },
    ];

    const skillIcons: Record<string, LucideIcon> = {
        'HTML/CSS': FileCode,
        'JavaScript': FileCode,
        'TypeScript': FileCode,
        'React': Atom,
        'Tailwind CSS': Palette,
        'Responsive Design': Monitor,
        'Python': FileCode,
        'Java': FileCode,
        'C/C++': FileCode,
        'SQL': Database,
        'Data Structures': TreePine,
        'Algorithms': Cpu,
        'OOP': Package,
        'ML Basics': Brain,
        'TensorFlow': Network,
        'Data Analysis': BarChart3,
        'NumPy/Pandas': Table,
        'AI Integration': Bot,
        'Git/GitHub': GitBranch,
        'VS Code': Code,
        'Figma': PenTool,
        'Vercel': Globe,
        'GitHub Pages': Github,
        'Vite': Rocket,
        'npm/yarn': Package,
    };

    const categoryIcons: Record<string, LucideIcon> = {
        'Frontend': Monitor,
        'Programming & CS': Terminal,
        'AI/ML Exposure': Brain,
        'Tools & Platforms': Wrench,
    };

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
            y: -10,
            transition: { duration: 0.3 },
        },
    };

    return (
        <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
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
                            <Code className="text-emerald-400 hover:text-cyan-500 transition-colors duration-300" size={40} />
                        </motion.div>
                        <motion.h2 className="text-4xl md:text-5xl font-bold text-center gradient-text" variants={cardVariants}>
                            Skills & Expertise
                        </motion.h2>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {skillCategories.map((category) => (
                            <motion.div
                                key={category.title}
                                className="glass-effect p-8 rounded-xl hover:bg-white/10 smooth-enter"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                {/* Category Title */}
                                <div className="flex items-center gap-3 mb-6">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        className={`p-1 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}
                                    >
                                        {(() => {
                                            const IconComponent = categoryIcons[category.title] || Code;
                                            return <IconComponent size={24} className="text-white drop-shadow-sm" />;
                                        })()}
                                    </motion.div>
                                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    {category.skills.map((skill) => (
                                        <motion.div
                                            key={skill}
                                            className="px-4 py-2 bg-white/5 border border-cyan-400/20 rounded-lg text-gray-300 text-sm font-medium smooth-enter transition-all duration-300 flex items-center gap-2 group"
                                            whileHover={{
                                                scale: 1.05,
                                                y: -3
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <motion.div
                                                className="text-lg text-gray-500 group-hover:text-emerald-400 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] flex items-center justify-center"
                                                whileHover={{
                                                    scale: 1.4,
                                                    rotate: 360
                                                }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                            >
                                                {(() => {
                                                    const IconComponent = skillIcons[skill] || Code;
                                                    return <IconComponent size={16} className="w-4 h-4" />;
                                                })()}
                                            </motion.div>
                                            <span className="transition-colors duration-300">
                                                {skill}
                                            </span>
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
