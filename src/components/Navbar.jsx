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
    <Disclosure as="header" className="fixed inset-x-0 top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 pt-4">
            <div className="glass rounded-2xl px-4 py-3 sm:px-5">
              <div className="flex items-center justify-between gap-4">
                <a href="#home" className="group flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--brand))] shadow-[0_0_25px_rgba(255,47,110,0.55)]" />
                  </span>
                  <div className="leading-tight">
                    <div className="font-[Fraunces] text-[15px] tracking-tight">Mathaba TL</div>
                    <div className="text-[11px] text-[rgb(var(--muted))]">Construction & Projects</div>
                  </div>
                </a>

                <nav className="hidden items-center gap-1 lg:flex">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="rounded-full px-3 py-2 text-sm text-[rgb(var(--muted))] hover:bg-white/5 hover:text-white"
                    >
                      {l.name}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand2))] px-4 py-2 text-sm font-semibold text-black shadow-[0_12px_45px_rgba(255,47,110,0.22)]"
                  >
                    Get a quote
                  </a>
                </nav>

                <Disclosure.Button
                  className={cn(
                    'grid h-10 w-10 place-items-center rounded-xl ring-1 ring-white/10 transition',
                    'bg-white/5 hover:bg-white/10 lg:hidden'
                  )}
                  aria-label={open ? 'Close menu' : 'Open menu'}
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="mx-auto max-w-6xl px-4 pt-3">
              <div className="glass rounded-2xl p-3">
                <div className="grid gap-1">
                  {navLinks.map((l) => (
                    <Disclosure.Button
                      key={l.href}
                      as="a"
                      href={l.href}
                      className="rounded-xl px-4 py-3 text-sm text-[rgb(var(--muted))] hover:bg-white/5 hover:text-white"
                    >
                      {l.name}
                    </Disclosure.Button>
                  ))}
                  <Disclosure.Button
                    as="a"
                    href="#contact"
                    className="mt-1 rounded-xl bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand2))] px-4 py-3 text-sm font-semibold text-black"
                  >
                    Get a quote
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
