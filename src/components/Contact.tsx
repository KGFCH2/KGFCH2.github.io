import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';

export const Contact = () => {
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

    const contacts = [
        {
            icon: <Github size={32} />,
            label: 'GitHub',
            value: '@KGFCH2',
            href: 'https://github.com/KGFCH2',
            color: 'text-white',
        },
        {
            icon: <Mail size={32} />,
            label: 'Email',
            value: 'babinbid05@gmail.com',
            href: 'mailto:babinbid05@gmail.com',
            color: 'text-cyan-400',
        },
        {
            icon: <Linkedin size={32} />,
            label: 'LinkedIn',
            value: 'Babin Bid',
            href: 'https://www.linkedin.com/in/babin-bid-853728293/',
            color: 'text-blue-400',
        },
    ];

    return (
        <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Section Title */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Mail className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300" size={40} />
                        </motion.div>
                        <motion.h2 className="text-4xl md:text-5xl font-bold text-center gradient-text" variants={itemVariants}>
                            Let's Connect
                        </motion.h2>
                    </div>

                    <motion.p className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto" variants={itemVariants}>
                        Interested in collaborating or just want to chat? Feel free to reach out through any of these channels.
                    </motion.p>

                    {/* Contact Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {contacts.map((contact, idx) => (
                            <motion.a
                                key={idx}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-effect p-8 rounded-xl text-center hover:bg-white/15 smooth-enter group border border-cyan-400/20 hover:border-white/30 transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.05 }}
                            >
                                <motion.div className={`${contact.color} mb-4 flex justify-center smooth-enter`} whileHover={{ scale: 1.4, rotate: 360, y: -8 }}>
                                    {contact.icon}
                                </motion.div>
                                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">{contact.label}</h3>
                                <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">{contact.value}</p>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div className="text-center" variants={itemVariants}>
                        <p className="text-gray-300 mb-6">Or send me a message directly:</p>
                        <motion.a
                            href="mailto:your.email@example.com"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/75 smooth-enter transform transition-all duration-300 active:scale-95"
                            whileHover={{ scale: 1.1 }}
                        >
                            Send Email
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
