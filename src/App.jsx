import Navbar from './components/Navbar'
import Footer from './components/Footer'

const primaryServices = [
  {
    title: 'Solar Systems',
    desc: 'Design, supply, installation, maintenance and upgrades.',
    items: ['Design', 'Supply', 'Installation', 'Maintenance', 'Upgrades'],
    image: '/images/solar1.jpg',
  },
  {
    title: 'Security & Access Control',
    desc: 'Secure sites with modern surveillance and access solutions.',
    items: ['CCTV', 'Intercoms', 'Electric fence', 'Turnstiles', 'Boom gate'],
    image: '/images/intercoms.jpg',
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
    image: '/images/ict.png',
  },
]

const additionalServices = [
  {
    title: 'Road Works',
    desc: 'Road maintenance and related site support.',
    image: '/images/roads1.jpg',
    items: ['Road marking', 'Grass cutting', 'Fit & supply of material', 'Plant hire', 'Potholes', 'Road signs', 'Road work', 'Paving'],
  },
  {
    title: 'General Construction',
    desc: 'Building, renovations, trades and on-site works.',
    image: '/images/roads2.jpg',
    items: ['Roofing', 'Tiling', 'Renovation', 'Plastering', 'Building', 'Plumbing', 'Fix & supply electrician', 'Painting', 'Paving', 'Carpentry'],
  },
  {
    title: 'Maintenance',
    desc: 'Upkeep, troubleshooting and ongoing support.',
    image: '/images/solar2.jpg',
    items: ['Solar panels', 'Generators', 'ICT equipment', 'Consultancy'],
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
      <Navbar />

      <main className="pt-24">
        <section id="home" className="relative overflow-hidden">
          <div className="hero-glow pointer-events-none" />
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:pt-16">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[rgb(var(--muted))]">
                  Mathaba TL Construction and Projects Solutions
                </div>

                <h1 className="mt-5 font-[Fraunces] text-5xl leading-[1.04] tracking-tight sm:text-6xl">
                  Premium engineering for solar, security & ICT.
                </h1>

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[rgb(var(--muted))] sm:text-base">
                  We design, supply, install, maintain, and upgrade solar systems, CCTV/intercoms/electric fence, access control, and ICT infrastructure for homes and businesses.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="rounded-full bg-[rgb(var(--brand))] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_70px_rgba(245,158,11,0.18)] transition hover:bg-[rgb(var(--brand)/0.9)]"
                  >
                    Request a quote
                  </a>
                  <a
                    href="#services"
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[rgb(var(--fg))] hover:bg-white/10 transition"
                  >
                    Explore services
                  </a>
                  <a
                    href="mailto:erensthaba@gmail.com"
                    className="rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-[rgb(var(--fg))] hover:bg-white/5 transition"
                  >
                    Email us
                  </a>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    { k: '2012', v: 'Established' },
                    { k: 'Turnkey', v: 'Installations & supply' },
                    { k: 'Support', v: 'Maintenance & upgrades' },
                  ].map((s) => (
                    <div key={s.k} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="text-lg font-semibold text-[rgb(var(--fg))]">{s.k}</div>
                      <div className="text-xs text-[rgb(var(--muted))]">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="glass overflow-hidden rounded-3xl">
                  <div
                    className="aspect-[4/5] w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        `url(/images/solar1.jpg)`,
                    }}
                    aria-label="Construction and project solutions"
                    role="img"
                  />
                  <div className="border-t border-white/10 p-5">
                    <p className="text-sm text-[rgb(var(--muted))]">
                      From energy to infrastructure—delivered with quality workmanship and reliable turnaround.
                    </p>
                  </div>
                </div>
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
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[rgb(var(--fg))] hover:bg-white/10"
              >
                Talk to us
              </a>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {primaryServices.map((s) => (
                <div key={s.title} className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
                  <div className="group overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-52 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">{s.title}</h3>
                    <p className="mt-1 text-xs text-[rgb(var(--muted))]">{s.desc}</p>
                    <ul className="mt-4 grid gap-2 text-sm text-[rgb(var(--muted))]">
                      {s.items.map((i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand2))]" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {additionalServices.map((s) => (
                <div key={s.title} className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
                  <div className="group overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-56 w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-[rgb(var(--fg))]">{s.title}</h3>
                    <p className="mt-1 text-xs text-[rgb(var(--muted))]">{s.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.items.slice(0, 8).map((i) => (
                        <span
                          key={i}
                          className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-[rgb(var(--muted))]"
                        >
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
                  Mathaba TL Construction and Project Solution (Pty) Ltd was formally established in 2012 with a passion for construction, marketing, supply and delivery.
                </p>

                <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold">Contact</p>
                  <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                    <div><span className="text-white/80 font-semibold">Cell:</span> 076 519 9245</div>
                    <div><span className="text-white/80 font-semibold">Fax:</span> 086 459 4572</div>
                    <div><span className="text-white/80 font-semibold">Email:</span> <a className="hover:text-[rgb(var(--fg))]" href="mailto:erensthaba@gmail.com">erensthaba@gmail.com</a></div>
                    <div><span className="text-white/80 font-semibold">Contact person:</span> Mr. Erens Lebogang Thaba</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm font-semibold">Business details</p>
                    <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                      <div><span className="text-white/80 font-semibold">Company name:</span> Mathaba TL Construction and Project Solution (PTY) LTD</div>
                      <div><span className="text-white/80 font-semibold">Address:</span> 8990/47 Wildchestnut Street, Protea Glen Ext11, Protea Glen 1818</div>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm font-semibold">Business classification</p>
                    <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                      <div><span className="text-white/80 font-semibold">Core business:</span> Marketing, Construction, General Trading and Projects</div>
                      <div><span className="text-white/80 font-semibold">Type:</span> (PTY) LTD</div>
                      <div><span className="text-white/80 font-semibold">Sector:</span> Security, Cleaning and General Trading</div>
                      <div><span className="text-white/80 font-semibold">SMME:</span> Micro</div>
                    </div>
                  </div>
                </div>

                <details className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <summary className="cursor-pointer text-sm font-semibold">Registrations & banking details</summary>
                  <div className="mt-5 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold">Registrations</p>
                      <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                        <div><span className="text-white/80 font-semibold">Company registration no:</span> 2012/053558/07</div>
                        <div><span className="text-white/80 font-semibold">Income tax reference:</span> 9230272180</div>
                        <div><span className="text-white/80 font-semibold">VAT:</span> N/A</div>
                        <div><span className="text-white/80 font-semibold">CIDB:</span> Grade 1, GB PE</div>
                        <div><span className="text-white/80 font-semibold">BBBEE:</span> Level 1</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Banking</p>
                      <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                        <div><span className="text-white/80 font-semibold">Bank:</span> FNB</div>
                        <div><span className="text-white/80 font-semibold">Branch code:</span> 250655</div>
                        <div><span className="text-white/80 font-semibold">Branch name:</span> Maponya Branch</div>
                        <div><span className="text-white/80 font-semibold">Account number:</span> 62727057029</div>
                        <div><span className="text-white/80 font-semibold">Account type:</span> Business Account</div>
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
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
                <p className="text-sm font-semibold">Background</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Mathaba TL Construction and Project Solution (Pty) Ltd is a company that was formally established in 2012 with endless passion for construction, marketing, supply and delivery. We provide construction, machinery, ICT equipment, mining equipment, roads maintenance and related services with a focus on quality and reliability.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold">Company vision</p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">Our vision is to provide quality service and projects.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold">Mission (summary)</p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                    We aim to provide the best turnkey solutions for clients and trade to the best of our ability and expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold">Company mission statement</p>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                Creating a favorable working environment for all employees and management is one of our principles. We also make it our mission to catalyze empowerment within the company.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-[rgb(var(--muted))]">
                {[
                  'Construction supply, marketing and goods is our core business; achieving the priority of the customers will help us grow and survive in this fiercely competitive environment.',
                  'To encourage close and lasting relationships with our customers to build trust and confidence.',
                  'To achieve a reputation in the marketplace for outstanding delivery.',
                  'To allow customers to judge the quality of service provided, which inspires our team and ensures a productive work environment.',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white" />
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
              <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden lg:col-span-7">
                <img
                  className="h-80 w-full object-cover"
                  src="/images/roads2.jpg"
                  alt="Construction project"
                  loading="lazy"
                />
              </div>
              <div className="grid gap-6 lg:col-span-5">
                {[
                  {
                    src: '/images/solar1.jpg',
                    alt: 'Solar panel installation',
                  },
                  {
                    src: '/images/intercoms.jpg',
                    alt: 'Security camera',
                  },
                ].map((img) => (
                  <div key={img.src} className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
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
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap gap-2">
                {['ICT equipment', 'Promotional items', 'Electrical equipment'].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-[rgb(var(--muted))]">
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
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold">Gauteng</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  8990/47 Wildchestnut Street
                  <br />
                  Protea Glen Ext 11
                  <br />
                  Protea Glen 1818
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
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
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Contact</p>
                  <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">Let’s build something.</h2>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                    Send us a message for quotations, site visits, installations, supplies, and project support.
                  </p>

                  <div className="mt-6 grid gap-2 text-sm text-[rgb(var(--muted))]">
                    <div><span className="text-white/80 font-semibold">Cell:</span> 076 519 9245</div>
                    <div><span className="text-white/80 font-semibold">Fax:</span> 086 459 4572</div>
                    <div><span className="text-white/80 font-semibold">Email:</span> <a className="hover:text-[rgb(var(--fg))]" href="mailto:erensthaba@gmail.com">erensthaba@gmail.com</a></div>
                    <div><span className="text-white/80 font-semibold">Contact person:</span> Mr. Erens Lebogang Thaba</div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <a
                      href="mailto:erensthaba@gmail.com"
                      className="rounded-full border border-white/10 bg-[rgb(var(--brand))] px-6 py-4 text-sm font-semibold text-white text-center transition hover:bg-[rgb(var(--brand)/0.9)]"
                    >
                      Email us
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border border-white/10 bg-white/10 px-6 py-4 text-sm font-semibold text-[rgb(var(--fg))] text-center transition hover:bg-white/20"
                    >
                      Request a quote
                    </a>
                  </div>
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
