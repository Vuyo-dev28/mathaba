import { Disclosure } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/cn'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Company', href: '#company' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Supply', href: '#supplies' },
  { name: 'Address', href: '#address' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-[rgb(var(--bg))/0.8] backdrop-blur-xl border-b border-white/10"
    >
      <Disclosure as="div">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <motion.a 
                  href="#home" 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-[rgb(var(--fg))]"
                >
                  <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-inner">
                    <img
                      src="/images/gallery/Mathaba_logo.png"
                      alt="Mathaba TL Construction logo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="block">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[rgb(var(--muted))] sm:text-[10px] sm:tracking-[0.32em]">Mathaba TL</p>
                    <p className="text-xs font-semibold sm:text-sm">Construction</p>
                  </div>
                </motion.a>

                <nav className="hidden items-center gap-8 lg:flex">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      whileHover={{ y: -2 }}
                      className="text-sm font-medium text-[rgb(var(--muted))] transition-colors hover:text-[rgb(var(--brand))]"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="rounded-full bg-[rgb(var(--brand))] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgb(var(--brand)/0.2)] transition-all hover:bg-[rgb(var(--brand2))]"
                  >
                    Request quote
                  </motion.a>
                </nav>

                <Disclosure.Button
                  className={cn(
                    'grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-[rgb(var(--fg))] transition hover:bg-white/10 lg:hidden',
                  )}
                  aria-label={open ? 'Close menu' : 'Open menu'}
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </Disclosure.Button>
              </div>
            </div>

            <AnimatePresence>
              {open && (
                <Disclosure.Panel static as={motion.div}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden overflow-hidden"
                >
                  <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl">
                      <div className="grid gap-2">
                        {navLinks.map((link) => (
                          <Disclosure.Button
                            key={link.href}
                            as={motion.a}
                            whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                            href={link.href}
                            className="rounded-2xl px-4 py-3 text-sm font-medium text-[rgb(var(--muted))] transition-all hover:text-[rgb(var(--fg))]"
                          >
                            {link.name}
                          </Disclosure.Button>
                        ))}
                        <Disclosure.Button
                          as={motion.a}
                          whileTap={{ scale: 0.98 }}
                          href="#contact"
                          className="mt-2 rounded-2xl bg-[rgb(var(--brand))] px-4 py-4 text-center text-sm font-semibold text-white shadow-lg transition-all"
                        >
                          Request quote
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>
    </motion.header>
  )
}
