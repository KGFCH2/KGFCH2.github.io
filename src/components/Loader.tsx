import { motion } from 'framer-motion';
import { User } from 'lucide-react';

interface LoaderProps {
    isLoading: boolean;
}

export const Loader = ({ isLoading }: LoaderProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5 },
        },
    };

    if (!isLoading) return null;

    return (
        <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-black to-purple-400/5"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />

            {/* Content container */}
            <motion.div
                className="relative z-10 flex flex-col items-center gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Animated circles background */}
                <div className="relative w-24 h-24">
                    {/* Outer rotating ring */}
                    <motion.div
                        className="absolute inset-0 border-2 border-transparent border-t-cyan-400 border-r-emerald-400 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />

                    {/* Middle rotating ring */}
                    <motion.div
                        className="absolute inset-2 border-2 border-transparent border-b-purple-400 border-l-cyan-400 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />

                    {/* Inner pulsing circle */}
                    <motion.div
                        className="absolute inset-6 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full opacity-30"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    {/* Center dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                            animate={{
                                boxShadow: [
                                    '0 0 0 0 rgba(34, 211, 238, 0.7)',
                                    '0 0 0 10px rgba(34, 211, 238, 0)',
                                ],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                        />
                    </div>
                </div>

                {/* Text and dots */}
                <div className="text-center">
                    <motion.h1 className="text-2xl font-bold gradient-text mb-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center justify-center gap-2">
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <User size={28} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300" />
                            </motion.div>
                            Babin Bid
                        </div>
                    </motion.h1>
                    <motion.p className="text-gray-300 text-sm mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
                        Loading portfolio...
                    </motion.p>

                    {/* Animated dots */}
                    <div className="flex justify-center gap-2">
                        {[0, 1, 2].map((dot) => (
                            <motion.div
                                key={dot}
                                className="w-2 h-2 bg-cyan-400 rounded-full"
                                animate={{
                                    y: [0, -8, 0],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: dot * 0.1,
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Loading tips */}
                <motion.p
                    className="text-xs text-gray-500 mt-8 text-center max-w-xs"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.2,
                    }}
                >
                    ✨ Building something amazing...
                </motion.p>
            </motion.div>
        </motion.div>
    );
};
