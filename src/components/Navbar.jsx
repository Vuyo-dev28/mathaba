import { Disclosure } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/cn'

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
    <Disclosure as="header" className="fixed inset-x-0 top-0 z-50 bg-[rgb(var(--bg))/0.92] backdrop-blur-xl border-b border-white/10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <a href="#home" className="flex items-center gap-3 text-[rgb(var(--fg))]">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold uppercase tracking-[0.3em] text-[rgb(var(--fg))]">
                  M
                </div>
                <div className="hidden sm:block">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-[rgb(var(--muted))]">Mathaba TL</p>
                  <p className="text-sm font-semibold">Construction</p>
                </div>
              </a>

              <nav className="hidden items-center gap-6 lg:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[rgb(var(--muted))] transition hover:text-[rgb(var(--fg))]"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="rounded-full border border-white/10 bg-[rgb(var(--brand))] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[rgb(var(--brand)/0.9)]"
                >
                  Request quote
                </a>
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

          <Disclosure.Panel className="lg:hidden">
            <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
              <div className="rounded-3xl border border-white/10 bg-[rgb(var(--bg))] p-4 shadow-sm">
                <div className="grid gap-3">
                  {navLinks.map((link) => (
                    <Disclosure.Button
                      key={link.href}
                      as="a"
                      href={link.href}
                      className="rounded-2xl px-4 py-3 text-sm text-[rgb(var(--muted))] transition hover:bg-white/5 hover:text-[rgb(var(--fg))]"
                    >
                      {link.name}
                    </Disclosure.Button>
                  ))}
                  <Disclosure.Button
                    as="a"
                    href="#contact"
                    className="rounded-2xl border border-white/10 bg-[rgb(var(--brand))] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[rgb(var(--brand)/0.9)]"
                  >
                    Request quote
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
