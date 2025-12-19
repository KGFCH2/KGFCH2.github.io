import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Github, ExternalLink, Rocket } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    liveLink?: string;
    githubLink: string;
    featured: boolean;
}

export const Projects = () => {
    const projects: Project[] = [
        {
            id: 9,
            title: 'Babin.Portfolio',
            description: 'A cutting-edge personal portfolio website built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, and Shadcn/UI. Features professional profile, project gallery, skills matrix, achievements, research publications, and smooth animations.',
            tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Shadcn/UI'],
            liveLink: 'https://babin-portfolio.vercel.app/',
            githubLink: 'https://github.com/KGFCH2/KGFCH2.github.io',
            featured: true,
        },
        {
            id: 1,
            title: 'AI Powered ChatBot',
            description: 'Beginner-friendly Gemini-powered chatbot with FastAPI, streaming responses, optional web search, demo login, and light/dark UI.',
            tech: ['Python', 'FastAPI', 'HTML', 'CSS', 'JavaScript', 'google-generativeai'],
            githubLink: 'https://github.com/KGFCH2/AI_Powered_ChatBot',
            featured: false,
        },
        {
            id: 2,
            title: 'AquaWatch',
            description: 'A platform to monitor India’s water crisis with real-time insights, alerts, emergency contacts, and government resources.',
            tech: ['TypeScript', 'React', 'Vite', 'JSON', 'HTML'],
            liveLink: 'https://aquawatch-v1.vercel.app/',
            githubLink: 'https://github.com/KGFCH2/AquaWatch',
            featured: true,
        },
        {
            id: 3,
            title: 'BharatBus (In Progress)',
            description: 'A React + TypeScript frontend for bus booking and tracking with animations, local persistence, and operator dashboard.',
            tech: ['HTML', 'CSS', 'TypeScript', 'React', 'Vite'],
            liveLink: 'https://bharat-bus.vercel.app/',
            githubLink: 'https://github.com/KGFCH2/BharatBus',
            featured: true,
        },
        {
            id: 4,
            title: 'CargoConnect',
            description: 'A responsive web app for booking cargo transport vehicles across India with simple booking flow.',
            tech: ['TypeScript', 'JavaScript', 'HTML', 'React', 'Vite', 'Tailwind CSS'],
            liveLink: 'https://cargo-connect-new.vercel.app/',
            githubLink: 'https://github.com/KGFCH2/CargoConnect',
            featured: true,
        },
        {
            id: 5,
            title: 'CropAI India',
            description: 'An AI-powered agricultural platform for Indian farmers with crop analytics, market insights, and scalable architecture.',
            tech: ['HTML', 'CSS', 'TypeScript', 'React', 'Vite'],
            liveLink: 'https://crop-ai-india.vercel.app/',
            githubLink: 'https://github.com/KGFCH2/CropAI_India',
            featured: true,
        },
        {
            id: 6,
            title: 'ImpactSense – Earthquake Impact Prediction',
            description: 'A ML system to predict earthquake impact using geophysical data for disaster preparedness and urban planning.',
            tech: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'XGBoost'],
            githubLink: 'https://github.com/KGFCH2/ImpactSense_Earthquake_Impact_Prediction',
            featured: false,
        },
        {
            id: 7,
            title: 'India Stock Dashboard',
            description: 'An interactive Streamlit dashboard for Indian stock market analysis with indicators and price predictions.',
            tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'scikit-learn'],
            githubLink: 'https://github.com/KGFCH2/India_Stock_Dashboard',
            featured: false,
        },
        {
            id: 8,
            title: 'PersonaPath',
            description: 'A personalized career advisor with rules-based engine, 500+ skills dataset, and glassmorphism UI.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'JSON'],
            githubLink: 'https://github.com/KGFCH2/PersonaPath',
            featured: false,
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
            y: -10,
            transition: { duration: 0.3 },
        },
    };

    return (
        <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
            <div className="max-w-6xl mx-auto">
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
                            <Rocket className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300" size={40} />
                        </motion.div>
                        <motion.h2 className="text-4xl md:text-5xl font-bold gradient-text" variants={cardVariants}>
                            Featured Projects
                        </motion.h2>
                    </div>
                    <motion.p className="text-gray-300 mb-16 text-lg" variants={cardVariants}>
                        <center>A selection of projects I've built to solve real problems and explore new technologies.</center>
                    </motion.p>

                    {/* Featured Projects - Large Cards */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-8">✨ Featured</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects
                                .filter((p) => p.featured)
                                .map((project) => (
                                    <ProjectCard key={project.id} project={project} cardVariants={cardVariants} />
                                ))}
                        </div>
                    </div>

                    {/* Other Projects */}
                    <div>
                        <h3 className="text-2xl font-bold text-emerald-400 mb-8">🚀 Other Projects</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects
                                .filter((p) => !p.featured)
                                .map((project) => (
                                    <ProjectCard key={project.id} project={project} cardVariants={cardVariants} />
                                ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

interface ProjectCardProps {
    project: Project;
    cardVariants: Variants;
}

const ProjectCard = ({ project, cardVariants }: ProjectCardProps) => {
    return (
        <motion.div
            className="glass-effect p-6 rounded-xl hover:bg-cyan-400/20 smooth-enter flex flex-col h-full group border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
        >
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow group-hover:text-gray-100 transition-colors duration-300">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                    <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 border border-cyan-400/30 rounded-full text-xs font-medium text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-400/30 smooth-enter transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
                {project.liveLink && (
                    <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 border border-cyan-400/50 rounded-lg text-cyan-300 hover:bg-cyan-400/40 hover:border-cyan-400/80 smooth-enter text-sm font-medium transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div whileHover={{ scale: 1.3, rotate: -15 }}>
                            <ExternalLink size={16} />
                        </motion.div>
                        Live Demo
                    </motion.a>
                )}
                <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/40 smooth-enter text-sm font-medium transition-all duration-300 ${!project.liveLink ? 'flex-1' : ''
                        }`}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.div whileHover={{ scale: 1.3, rotate: 15 }}>
                        <Github size={16} />
                    </motion.div>
                    Code
                </motion.a>
            </div>
        </motion.div>
    );
};
