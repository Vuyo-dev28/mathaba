import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -120px 0px' }}
      transition={{ duration: 0.7, ease: [0.2, 0.9, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const primaryServices = [
    {
      title: 'Solar Systems',
      desc: 'Design, supply, installation, maintenance and upgrades.',
      items: ['Design', 'Supply', 'Installation', 'Maintenance', 'Upgrades'],
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Security & Access Control',
      desc: 'Secure sites with modern surveillance and access solutions.',
      items: ['CCTV', 'Intercoms', 'Electric fence', 'Turnstiles', 'Boom gate'],
      image:
        'https://images.unsplash.com/photo-1557597774-9d53d82b7a3c?w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'ICT & Connectivity',
      desc: 'Reliable connectivity and workplace technology setups.',
      items: [
        'Data and network points',
        'Extended Wi‑Fi and connections',
        'Projectors and pull down screen',
        'Boardroom set‑up',
        'Microsoft 365 supply and license renewal',
      ],
      image:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&auto=format&fit=crop&q=80',
    },
  ]

  const additionalServices = [
    {
      title: 'Road Works',
      desc: 'Road maintenance and related site support.',
      image:
        'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1600&auto=format&fit=crop&q=80',
      items: ['Road marking', 'Grass cutting', 'Fit & supply of material', 'Plant hire', 'Potholes', 'Road signs', 'Road work', 'Paving'],
    },
    {
      title: 'General Construction',
      desc: 'Building, renovations, trades and on-site works.',
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&auto=format&fit=crop&q=80',
      items: ['Roofing', 'Tiling', 'Renovation', 'Plastering', 'Building', 'Plumbing', 'Fix & supply electrician', 'Painting', 'Paving', 'Carpentry'],
    },
    {
      title: 'Maintenance',
      desc: 'Upkeep, troubleshooting and ongoing support.',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&auto=format&fit=crop&q=80',
      items: ['Solar panels', 'Generators', 'ICT equipment', 'Consultancy'],
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="glow-bg"></div>
      <Navbar />

      <main className="pt-24">
        <section id="home" className="relative">
          <div
            className="absolute inset-0 -z-10 opacity-80"
            style={{
              backgroundImage:
                'radial-gradient(900px 500px at 25% 20%, rgba(255,47,110,0.32), transparent 60%), radial-gradient(800px 520px at 85% 30%, rgba(255,180,95,0.20), transparent 55%)',
            }}
          />

          <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:pt-16">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[rgb(var(--muted))]">
                  <span className="h-2 w-2 rounded-full bg-[rgb(var(--brand))]" />
                  Mathaba TL Construction and Projects Solutions
                  </div>
                </Reveal>

                <Reveal delay={0.05}>
                  <h1 className="mt-5 font-[Fraunces] text-4xl leading-[1.04] tracking-tight sm:text-6xl">
                  Premium engineering for{' '}
                  <span className="bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand2))] bg-clip-text text-transparent">
                    solar, security & ICT
                  </span>
                  .
                  </h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[rgb(var(--muted))] sm:text-base">
                  We design, supply, install, maintain, and upgrade solar systems, CCTV/intercoms/electric fence, access control, and ICT
                  infrastructure for homes and businesses.
                  </p>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <motion.a
                    href="#contact"
                    className="rounded-full bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand2))] px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_70px_rgba(255,47,110,0.22)]"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request a quote
                    </motion.a>
                    <motion.a
                    href="#services"
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore services
                    </motion.a>
                    <motion.a
                    href="mailto:erensthaba@gmail.com"
                    className="rounded-full border border-white/10 bg-white/0 px-5 py-3 text-sm font-semibold text-[rgb(var(--muted))] hover:bg-white/5 hover:text-white"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Email us
                    </motion.a>
                  </div>
                </Reveal>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    { k: '2012', v: 'Established' },
                    { k: 'Turnkey', v: 'Installations & supply' },
                    { k: 'Support', v: 'Maintenance & upgrades' },
                  ].map((s) => (
                    <Reveal key={s.k} delay={0.1}>
                      <motion.div
                        className="glass rounded-2xl p-4"
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="text-lg font-semibold">{s.k}</div>
                        <div className="text-xs text-[rgb(var(--muted))]">{s.v}</div>
                      </motion.div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={0.1}>
                  <motion.div className="glass overflow-hidden rounded-3xl" whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
                  <div
                    className="aspect-[4/5] w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url(https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1400&auto=format&fit=crop&q=80)',
                    }}
                    aria-label="Construction and project solutions"
                    role="img"
                  />
                  <div className="border-t border-white/10 p-5">
                    <p className="text-sm text-[rgb(var(--muted))]">
                      From energy to infrastructure—delivered with quality workmanship and reliable turnaround.
                    </p>
                  </div>
                  </motion.div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Services</p>
                <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">
                  What we do—end to end.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--muted))]">
                  Tailored solutions across solar, security, ICT, construction, road works and maintenance.
                </p>
              </div>
              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Talk to us
              </a>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {primaryServices.map((s) => (
                <Reveal key={s.title}>
                  <motion.div
                    className="cool-card"
                    whileHover={{ rotateX: 2, rotateY: -2 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  >
                    <div className="glass cool-card-shimmer group overflow-hidden rounded-3xl">
                      <div className="relative">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-52 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                      <p className="mt-1 text-xs text-[rgb(var(--muted))]">{s.desc}</p>
                    </div>
                      </div>
                      <div className="p-5">
                    <ul className="grid gap-2 text-sm text-[rgb(var(--muted))]">
                      {s.items.map((i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand2))]" />
                          {i}
                        </li>
                      ))}
                    </ul>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {additionalServices.map((s) => (
                <Reveal key={s.title}>
                  <motion.div
                    className="cool-card"
                    whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  >
                    <div className="glass cool-card-shimmer group overflow-hidden rounded-3xl">
                      <div className="relative">
                        <img
                          src={s.image}
                          alt={s.title}
                          className="h-56 w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-semibold">{s.title}</h3>
                          <p className="mt-1 text-xs text-[rgb(var(--muted))]">{s.desc}</p>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex flex-wrap gap-2">
                          {s.items.slice(0, 8).map((i) => (
                            <span
                              key={i}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[rgb(var(--muted))] transition group-hover:border-white/20"
                            >
                              {i}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="company" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Company profile</p>
                <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">Built for quality delivery.</h2>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Mathaba TL Construction and Project Solution (Pty) Ltd was formally established in 2012 with passion for construction,
                  marketing, supply and delivery.
                </p>

                <div className="mt-6 glass rounded-3xl p-6">
                  <p className="text-sm font-semibold">Contact</p>
                  <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                    <div><span className="text-white/90 font-semibold">Cell:</span> 076 519 9245</div>
                    <div><span className="text-white/90 font-semibold">Fax:</span> 086 459 4572</div>
                    <div><span className="text-white/90 font-semibold">Email:</span> <a className="hover:text-white" href="mailto:erensthaba@gmail.com">erensthaba@gmail.com</a></div>
                    <div><span className="text-white/90 font-semibold">Contact person:</span> Mr. Erens Lebogang Thaba</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="glass rounded-3xl p-6">
                    <p className="text-sm font-semibold">Business details</p>
                    <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                      <div><span className="text-white/90 font-semibold">Company name:</span> Mathaba tl construction and project solution (PTY) LTD</div>
                      <div><span className="text-white/90 font-semibold">Address:</span> 8990/47 Wildchestnut Street, Protea Glen Ext11, Protea Glen 1818</div>
                    </div>
                  </div>
                  <div className="glass rounded-3xl p-6">
                    <p className="text-sm font-semibold">Business classification</p>
                    <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                      <div><span className="text-white/90 font-semibold">Core business:</span> Marketing, Construction, General Trading and Projects</div>
                      <div><span className="text-white/90 font-semibold">Type:</span> (PTY) LTD</div>
                      <div><span className="text-white/90 font-semibold">Sector:</span> Security, Cleaning and General Trading</div>
                      <div><span className="text-white/90 font-semibold">SMME:</span> Micro</div>
                    </div>
                  </div>
                </div>

                <details className="mt-6 glass rounded-3xl p-6">
                  <summary className="cursor-pointer text-sm font-semibold">
                    Registrations & banking details
                  </summary>
                  <div className="mt-5 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold">Registrations</p>
                      <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                        <div><span className="text-white/90 font-semibold">Company registration no:</span> 2012/053558/07</div>
                        <div><span className="text-white/90 font-semibold">Income tax reference:</span> 9230272180</div>
                        <div><span className="text-white/90 font-semibold">VAT:</span> N/A</div>
                        <div><span className="text-white/90 font-semibold">CIDB:</span> Grade 1, GB PE</div>
                        <div><span className="text-white/90 font-semibold">BBBEE:</span> Level 1</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Banking</p>
                      <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                        <div><span className="text-white/90 font-semibold">Bank:</span> FNB</div>
                        <div><span className="text-white/90 font-semibold">Branch code:</span> 250655</div>
                        <div><span className="text-white/90 font-semibold">Branch name:</span> Maponya Branch</div>
                        <div><span className="text-white/90 font-semibold">Account number:</span> 62727057029</div>
                        <div><span className="text-white/90 font-semibold">Account type:</span> Business Account</div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-[rgb(var(--muted))]">
                    Note: Publishing banking details publicly can increase fraud risk. If you prefer, we can move this into a private PDF download.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">About</p>
            <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">Background, vision & mission.</h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="glass rounded-3xl p-6 lg:col-span-2">
                <p className="text-sm font-semibold">Background</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Mathaba tl construction and project solution (Pty) Ltd is a company that was formally established in 2012 with endless
                  passion for Construction, marketing, construction, supply and delivery. The company is established to access projects in
                  the construction, machinery, ICT equipment, mining equipment, roads maintenance and other arena as the ultimate goal is to
                  generate profit through a dynamic business approach towards the provision of quality and exceptional construction and
                  supply and delivery services together with other projects.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="glass rounded-3xl p-6">
                  <p className="text-sm font-semibold">Company vision</p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">Our vision is to provide quality service and projects.</p>
                </div>
                <div className="glass rounded-3xl p-6">
                  <p className="text-sm font-semibold">Mission (summary)</p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                    We aim to provide the best turnkey solutions for clients and trade to the best of our ability and expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 glass rounded-3xl p-6">
              <p className="text-sm font-semibold">Company mission statement</p>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                Creating favorable working environment for all employees and management is one of our principles and we therefore also make
                it our mission in our business life cycle as we intend to catalyze empowerment within the company.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-[rgb(var(--muted))]">
                {[
                  'Construction supply, Marketing and goods is our core business; achieving the priority of the customers will help us grow and survive in this fiercely competitive environment.',
                  'To encourage close and everlasting relationship with our customers therefore building their trust and confidence.',
                  'To achieve a reputation in the marketplace for outstanding delivery.',
                  'Allow customers to judge the quality of service provided. It will always encourage inspire and motivate our team ensuring a productive work environment.',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[rgb(var(--brand))]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Gallery</p>
                <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">A glimpse of our world.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--muted))]">
                  Solar, security, construction and ICT environments—built with precision and attention to detail.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <div className="glass overflow-hidden rounded-3xl lg:col-span-7">
                <img
                  className="h-80 w-full object-cover"
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=2000&auto=format&fit=crop&q=80"
                  alt="Construction project"
                  loading="lazy"
                />
              </div>
              <div className="grid gap-6 lg:col-span-5">
                {[
                  {
                    src: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=1600&auto=format&fit=crop&q=80',
                    alt: 'Solar panel installation',
                  },
                  {
                    src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1600&auto=format&fit=crop&q=80',
                    alt: 'Security camera',
                  },
                ].map((img) => (
                  <div key={img.src} className="glass overflow-hidden rounded-3xl">
                    <img className="h-[152px] w-full object-cover" src={img.src} alt={img.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="supplies" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Supply</p>
            <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">Products we supply.</h2>
            <div className="mt-8 glass rounded-3xl p-6">
              <div className="flex flex-wrap gap-2">
                {['ICT equipments', 'Promotional items', 'Electrical equipments'].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[rgb(var(--muted))]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="address" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Address</p>
            <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">Where to find us.</h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="glass rounded-3xl p-6">
                <p className="text-sm font-semibold">Gauteng</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  8990/47 Wildchestnut Street
                  <br />
                  Protea Glen Ext 11
                  <br />
                  Protea Glen 1818
                </p>
              </div>
              <div className="glass rounded-3xl p-6">
                <p className="text-sm font-semibold">Limpopo</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Stand 10154
                  <br />
                  Marulaneng
                  <br />
                  Ga‑Mphahlele 0736
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="glass rounded-3xl p-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Contact</p>
                  <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">Let’s build something.</h2>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                    Send us a message for quotations, site visits, installations, supplies, and project support.
                  </p>

                  <div className="mt-6 grid gap-2 text-sm text-[rgb(var(--muted))]">
                    <div><span className="text-white/90 font-semibold">Cell:</span> 076 519 9245</div>
                    <div><span className="text-white/90 font-semibold">Fax:</span> 086 459 4572</div>
                    <div><span className="text-white/90 font-semibold">Email:</span> <a className="hover:text-white" href="mailto:erensthaba@gmail.com">erensthaba@gmail.com</a></div>
                    <div><span className="text-white/90 font-semibold">Contact person:</span> Mr. Erens Lebogang Thaba</div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <form
                    className="grid gap-4"
                    onSubmit={(e) => {
                      e.preventDefault()
                      const formData = new FormData(e.currentTarget)
                      const name = String(formData.get('name') || '').trim()
                      const phone = String(formData.get('phone') || '').trim()
                      const topic = String(formData.get('topic') || '').trim()
                      const message = String(formData.get('message') || '').trim()
                      const subject = encodeURIComponent(`Website enquiry - ${topic || 'Mathaba TL'}`)
                      const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nTopic: ${topic}\n\n${message}`)
                      window.location.href = `mailto:erensthaba@gmail.com?subject=${subject}&body=${body}`
                    }}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/35 focus:border-white/20"
                      />
                      <input
                        name="phone"
                        placeholder="Phone (optional)"
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/35 focus:border-white/20"
                      />
                    </div>
                    <input
                      name="topic"
                      placeholder="Topic (e.g. Solar installation, CCTV, Network points)"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/35 focus:border-white/20"
                    />
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us what you need…"
                      className="w-full resize-y rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/35 focus:border-white/20"
                    />
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="submit"
                        className="rounded-full bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand2))] px-6 py-3 text-sm font-semibold text-black"
                      >
                        Send email
                      </button>
                      <p className="text-xs text-[rgb(var(--muted))]">Opens your email app with a pre-filled message.</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App