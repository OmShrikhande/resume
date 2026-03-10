'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon, X } from 'lucide-react'

const COMMANDS: Record<string, string> = {
  help: 'Commands: help, about, projects, skills, contact, hobbies, clear, exit',
  about: 'Devashish Pillay — Software Developer @ Planitt Solutions. Nagpur, India.',
  projects: 'QR-Dine · BioSecure · Trading Bot AI · AI Video Creator',
  skills: 'Frontend: React, Next.js, Tailwind. Backend: Node, Python, PHP. Cloud: Firebase, MongoDB.',
  contact: 'Email: devashishp.cse22@sbjit.edu.in | LinkedIn: devashishpillay | GitHub: MrDevashish-777',
  hobbies: 'Art & Sketching · Anime · Music · Cars & Racing · Video Games · Bhakti (Krishna Ji devotee)',
  'projects list': '1. QR-Dine — Smart Restaurant System\n2. BioSecure — Biometric Security\n3. Trading Bot AI — Stock Market AI\n4. AI Video Creator — Cinematic AI',
}

export const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([
    'Devashish Pillay — Portfolio v2.0',
    'Type "help" to see available commands.',
  ])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.toLowerCase().trim()

    if (cmd === 'clear') {
      setHistory([])
    } else if (cmd === 'exit') {
      setIsOpen(false)
    } else if (cmd === '') {
      setHistory(prev => [...prev, '>'])
    } else {
      const response = COMMANDS[cmd] || `"${cmd}" not found. Try "help".`
      setHistory(prev => [...prev, `> ${input}`, response])
    }
    setInput('')
  }

  if (!isOpen) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-3.5 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
        aria-label="Open terminal"
      >
        <TerminalIcon className="w-5 h-5" />
      </motion.button>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-8 right-8 z-50 w-full max-w-md h-80 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs font-medium text-muted-foreground font-mono ml-1">terminal</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 p-4 font-mono text-sm overflow-y-auto text-foreground/80">
          {history.map((line, i) => (
            <div key={i} className="mb-1 whitespace-pre-wrap leading-relaxed">
              {line.startsWith('>') ? (
                <span>
                  <span className="text-primary">›</span>
                  <span className="text-foreground">{line.slice(1)}</span>
                </span>
              ) : (
                <span className="text-muted-foreground">{line}</span>
              )}
            </div>
          ))}
          <form onSubmit={handleCommand} className="flex items-center gap-2 mt-1">
            <span className="text-primary font-bold">›</span>
            <input
              autoFocus
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50"
              placeholder="type a command..."
            />
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
