'use client'

import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
  Database,
  Smartphone,
  ChevronRight,
  Layers,
  BrainCircuit,
  X,
  TrendingUp,
  Rocket,
  Paintbrush,
  Sparkles,
  MapPin,
  Video,
} from 'lucide-react'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  const containerRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.08], [1, 0.96])

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 28 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const projects = [
    {
      title: 'QR-Dine',
      subtitle: 'Smart Restaurant Management',
      description:
        'A MERN Stack system with QR-code table ordering, real-time analytics, and automated waiter assignment — redefining the dining experience.',
      longDescription:
        'QR-Dine is a comprehensive solution for modern restaurants. It features a QR-code based ordering system that eliminates the need for physical menus and reduces waiter workload. The system includes real-time analytics for owners to track sales and performance, and an automated waiter assignment algorithm to ensure efficient service. Built with the MERN stack and leveraging Firebase for real-time updates.',
      tags: ['MERN', 'Firebase', 'Python', 'Cloud Functions', 'Analytics'],
      icon: <Smartphone className="w-5 h-5 text-primary" />,
      accentColor: 'bg-amber-500/10 border-amber-500/20',
      github: 'https://github.com/MrDevashish-777',
      demo: '#',
    },
    {
      title: 'BioSecure',
      subtitle: 'Biometric Security System',
      description:
        'Advanced biometric authentication incorporating multi-factor security layers for forensic and high-security applications.',
      longDescription:
        'BioSecure is an advanced security project focused on biometric authentication. It integrates multi-factor security layers, including fingerprint and facial recognition, to provide robust access control. Designed for forensic and high-security applications, it features high-precision matching algorithms and secure database management. The project demonstrates expertise in security protocols and biometric data handling.',
      tags: ['Security', 'Biometrics', 'Python', 'OpenCV', 'Database'],
      icon: <Cpu className="w-5 h-5 text-primary" />,
      accentColor: 'bg-blue-500/10 border-blue-500/20',
      github: 'https://github.com/MrDevashish-777',
      demo: '#',
    },
    {
      title: 'Trading Bot AI',
      subtitle: 'Smart Stock Analysis',
      description:
        'An AI-powered trading assistant leveraging cloud infrastructure to analyze stock market trends and automate trading strategies.',
      longDescription:
        'Leveraging AI and Cloud computing to analyze stock market trends. This project uses machine learning models to predict market movements and automates trading strategies across various platforms. Built with Python and hosted on AWS, it provides real-time alerts and comprehensive market insights.',
      tags: ['AI', 'Trading', 'Python', 'AWS', 'Machine Learning'],
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      accentColor: 'bg-emerald-500/10 border-emerald-500/20',
      github: 'https://github.com/MrDevashish-777',
      demo: '#',
    },
    {
      title: 'AI Video Creator',
      subtitle: 'Cinematic AI Production',
      description:
        "Produced 'Train Manager Tribute' using 100+ AI prompts — showcased at Delhi's National Screening, blending technology with storytelling.",
      longDescription:
        "A creative exploration of AI in filmmaking. This project involved generating high-quality cinematic content using advanced AI tools like Runway ML and Leonardo.ai. The final product, 'Train Manager Tribute', was recognized at a national level, showcasing the potential of prompt engineering in visual storytelling.",
      tags: ['Runway ML', 'Leonardo.ai', 'Pika', 'Prompt Engineering'],
      icon: <Video className="w-5 h-5 text-primary" />,
      accentColor: 'bg-purple-500/10 border-purple-500/20',
      github: 'https://github.com/MrDevashish-777',
      demo: '#',
    },
  ]

  const experiences = [
    {
      role: 'Software Developer',
      company: 'Planitt Solutions Pvt. Ltd.',
      period: 'Jul 2025 – Present',
      description:
        'Leading development of scalable web solutions and enterprise applications. Focusing on high-performance cloud architectures and AI integration.',
      icon: <Rocket className="w-4 h-4" />,
    },
    {
      role: 'Full Stack Development Intern',
      company: 'Tars Technologies, Nagpur',
      period: 'May 2025 – Jun 2025',
      description:
        'Built and deployed full-stack web applications using React, TailwindCSS, MongoDB, and Firebase. Implemented real-time features and secure authentication systems.',
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      role: 'Live Project Member',
      company: 'Crypto Forensic Technology CFT',
      period: 'Aug 2024 – Nov 2025',
      description:
        'Developed biometric security systems and managed web applications via CPanel. Integrated advanced security protocols and biometric verification.',
      icon: <Cpu className="w-4 h-4" />,
    },
  ]

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
      icon: <Layers className="w-5 h-5" />,
    },
    {
      category: 'Backend',
      items: ['Node.js', 'PHP', 'Python', 'C/C++', 'Java'],
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      category: 'Database & Cloud',
      items: ['MongoDB', 'Firebase', 'MySQL', 'Cloudinary', 'AWS'],
      icon: <Database className="w-5 h-5" />,
    },
    {
      category: 'AI & Creative',
      items: ['AI Image/Video Gen', 'Prompt Engineering', 'Graphic Design'],
      icon: <BrainCircuit className="w-5 h-5" />,
    },
  ]

  const interests = [
    {
      emoji: '🎨',
      title: 'Art & Illustration',
      description:
        'Finding poetry in pencil strokes — from quick gesture sketches to detailed illustrations, art is how I see the world.',
      bg: 'bg-orange-50 dark:bg-orange-950/20 border-orange-200/60 dark:border-orange-800/30',
    },
    {
      emoji: '🎌',
      title: 'Anime & Manga',
      description:
        'More than entertainment — these are windows into profound human stories, extraordinary worlds, and timeless emotions.',
      bg: 'bg-rose-50 dark:bg-rose-950/20 border-rose-200/60 dark:border-rose-800/30',
    },
    {
      emoji: '🎵',
      title: 'Music',
      description:
        'A universal language that transcends every boundary. From classical Indian ragas to modern beats, music moves my soul.',
      bg: 'bg-violet-50 dark:bg-violet-950/20 border-violet-200/60 dark:border-violet-800/30',
    },
    {
      emoji: '🏎️',
      title: 'Cars & Racing',
      description:
        'The elegance of precision engineering meets raw, unbridled speed. Motorsport is poetry expressed through mechanics.',
      bg: 'bg-sky-50 dark:bg-sky-950/20 border-sky-200/60 dark:border-sky-800/30',
    },
    {
      emoji: '🎮',
      title: 'Video Games',
      description:
        'Interactive art that fuses design, music, and storytelling into worlds worth getting lost in.',
      bg: 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-800/30',
    },
    {
      emoji: '🕉️',
      title: 'Bhakti & Dharma',
      description:
        'A humble devotee of Shri Krishna Ji. His wisdom, grace, and eternal teachings guide every step of my path.',
      bg: 'bg-amber-50 dark:bg-amber-950/20 border-amber-200/60 dark:border-amber-800/30',
    },
  ]

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      {/* Subtle warm background gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full bg-primary/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-xl border-b border-border/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
          <motion.a
            href="#about"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
              <span className="text-primary-foreground font-bold text-base" style={{ fontFamily: 'var(--font-playfair)' }}>D</span>
            </div>
            <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Devashish<span className="text-primary">.</span>
            </span>
          </motion.a>

          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            {[
              { label: 'About', href: '#about' },
              { label: 'Work', href: '#projects' },
              { label: 'Experience', href: '#experience' },
              { label: 'Skills', href: '#skills' },
              { label: 'Interests', href: '#interests' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-foreground transition-colors duration-200 relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 mr-1 border-r border-border/60 pr-3">
              <a
                href="https://github.com/MrDevashish-777"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/devashishpillay/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        id="about"
        className="relative pt-32 pb-24 px-6 min-h-screen flex items-center z-10"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-8"
            >
              <MapPin className="w-3 h-3" />
              Software Developer · Nagpur, India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold mb-7 leading-[1.05] tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Where Code
              <br />
              <span className="text-primary">Meets Craft.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
            >
              I&apos;m{' '}
              <span className="text-foreground font-semibold">Devashish Pillay</span> — building
              thoughtful, elegant digital experiences that balance technical excellence with a
              designer&apos;s sensibility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 hover:brightness-105 active:scale-[0.98] text-sm"
              >
                Explore My Work
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border border-border hover:bg-accent hover:border-primary/30 transition-all active:scale-[0.98] text-sm text-foreground/80 hover:text-foreground">
                Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative justify-self-center lg:justify-self-end"
          >
            <div className="relative w-64 h-64 md:w-[340px] md:h-[340px]">
              {/* Decorative rings — subtle warm tones */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-18px] rounded-full border border-dashed border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-36px] rounded-full border border-dashed border-primary/10"
              />

              {/* Image */}
              <div className="relative w-full h-full rounded-[32px] overflow-hidden border-2 border-border shadow-xl z-10 group">
                <Image
                  src="/dev_profile.jpeg"
                  alt="Devashish Pillay"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 z-20 bg-card border border-border shadow-lg p-3.5 rounded-2xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Role</p>
                  <p className="font-semibold text-sm text-foreground">Full Stack Dev</p>
                </div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1.2, ease: 'easeInOut' }}
                className="absolute -bottom-8 -left-8 z-20 bg-card border border-border shadow-lg p-3.5 rounded-2xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Paintbrush className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Passion</p>
                  <p className="font-semibold text-sm text-foreground">Creative Dev</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
        </motion.div>
      </section>

      {/* ── Selected Work ── */}
      <section id="projects" className="py-28 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Portfolio</p>
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Selected Work
            </h2>
            <div className="gold-line mt-6 max-w-[120px]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-card border border-border rounded-2xl p-7 md:p-8 cursor-pointer hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Top row */}
                <div className="flex justify-between items-start mb-8">
                  <div
                    className={`p-3 rounded-xl border ${project.accentColor} group-hover:border-primary/30 transition-colors`}
                  >
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-border hover:bg-accent hover:border-primary/20 transition-all"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4 text-muted-foreground" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-border hover:bg-accent hover:border-primary/20 transition-all"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">
                    {project.subtitle}
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium py-1 px-3 rounded-lg bg-muted border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-7 right-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-4 h-4 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── My Journey ── */}
      <section
        id="experience"
        className="py-28 px-6 z-10 relative bg-muted/30"
      >
        <div className="absolute inset-0 warm-gradient-bg pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Career</p>
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              My Journey
            </h2>
            <div className="gold-line mt-6 max-w-[120px]" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex gap-8 sm:pl-16"
                >
                  <div className="absolute left-[13px] top-5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background z-10 hidden sm:block shadow-sm shadow-primary/30" />

                  <div className="flex-1 bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors shrink-0">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-muted-foreground font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full self-start sm:self-auto shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── My Expertise ── */}
      <section id="skills" className="py-28 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Capabilities</p>
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              My Expertise
            </h2>
            <div className="gold-line mt-6 max-w-[120px]" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                    {skillGroup.icon}
                  </div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/70">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium py-1.5 px-3 rounded-lg bg-muted border border-border text-muted-foreground hover:text-foreground hover:border-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Life Beyond Code ── */}
      <section id="interests" className="py-28 px-6 z-10 relative bg-muted/30">
        <div className="absolute inset-0 warm-gradient-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">The Human Side</p>
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Life Beyond Code
            </h2>
            <div className="gold-line mt-6 max-w-[120px]" />
            <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed text-sm">
              A developer is more than their stack. These are the passions and pursuits that make
              me who I am — and quietly inform everything I build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {interests.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl border ${item.bg} transition-all duration-300 hover:shadow-md`}
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3
                  className="text-lg font-semibold mb-2 text-foreground"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 16, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-card border border-border rounded-3xl p-8 md:p-10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-muted hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-[220px] shrink-0">
                  <div className={`p-6 rounded-2xl border ${selectedProject.accentColor} flex items-center justify-center mb-6 aspect-square`}>
                    <div className="w-12 h-12 text-primary">{selectedProject.icon}</div>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg bg-muted border border-border text-[11px] font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold text-sm hover:brightness-105 transition-all shadow-sm shadow-primary/20"
                      >
                        <Github className="w-4 h-4" /> View Source
                      </a>
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-muted border border-border py-3 rounded-xl font-semibold text-sm hover:bg-accent hover:border-primary/20 transition-all text-foreground/80"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-primary font-semibold uppercase tracking-widest mb-2 text-xs">
                    {selectedProject.subtitle}
                  </p>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-foreground"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {selectedProject.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer className="py-24 px-6 border-t border-border/60 z-10 relative bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-16">
            <div className="max-w-md">
              <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">Get In Touch</p>
              <h2
                className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Let&apos;s build something
                <span className="text-primary"> meaningful.</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Currently based in Nagpur, India. Open to new opportunities, collaborations,
                and interesting conversations.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-5">
              <a
                href="mailto:devashishp.cse22@sbjit.edu.in"
                className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 hover:brightness-105 transition-all active:scale-[0.98]"
              >
                <Mail className="w-4.5 h-4.5" /> Say Hello
              </a>
              <div className="flex gap-3">
                <a
                  href="https://github.com/MrDevashish-777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-background border border-border hover:border-primary/30 hover:text-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/devashishpillay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-background border border-border hover:border-primary/30 hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:devashishp.cse22@sbjit.edu.in"
                  className="p-3 rounded-xl bg-background border border-border hover:border-primary/30 hover:text-primary transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="gold-line mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground text-xs">
            <div className="flex gap-6">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Work</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#interests" className="hover:text-primary transition-colors">Interests</a>
            </div>
            <p className="opacity-70">© 2026 Devashish Pillay — Crafted with care.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
