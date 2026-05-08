import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ClientLogos from './components/ClientLogos'
import { motion } from 'framer-motion'
import { useState } from 'react'

const primaryServices = [
  {
    title: 'Solar Systems',
    desc: 'Design, supply, installation, maintenance and upgrades.',
    items: ['Design', 'Supply', 'Installation', 'Maintenance', 'Upgrades'],
    image: '/images/gallery/gallery-34.png',
  },
  {
    title: 'Security & Access Control',
    desc: 'Secure sites with modern surveillance and access solutions.',
    items: ['CCTV', 'Intercoms', 'Electric fence', 'Turnstiles', 'Boom gate'],
    image: '/images/gallery/gallery-02.png',
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
    image: '/images/gallery/gallery-09.png',
  },
]

const additionalServices = [
  {
    title: 'Road Works',
    desc: 'Road maintenance and related site support.',
    image: '/images/gallery/gallery-42.png',
    items: ['Road marking', 'Grass cutting', 'Fit & supply of material', 'Plant hire', 'Potholes', 'Road signs', 'Road work', 'Paving'],
  },
  {
    title: 'General Construction',
    desc: 'Building, renovations, trades and on-site works.',
    image: '/images/gallery/gallery-38.png',
    items: ['Roofing', 'Tiling', 'Renovation', 'Plastering', 'Building', 'Plumbing', 'Fix & supply electrician', 'Painting', 'Paving', 'Carpentry'],
  },
  {
    title: 'Maintenance',
    desc: 'Upkeep, troubleshooting and ongoing support.',
    image: '/images/gallery/gallery-36.png',
    items: ['Solar panels', 'Generators', 'ICT equipment', 'Consultancy'],
  },
]

const coreBusinessItems = [
  'Renewable energy',
  'Electrical',
  'ICT Equipments',
  'Network points',
  'Microsoft',
]

const sectorItems = [
  'Security',
  'Construction',
  'Marketing',
  'Cleaning',
  'Data and networking',
  'General trading',
]

const galleryImages = Array.from({ length: 44 }, (_, index) => ({
  src: `/images/gallery/gallery-${String(index + 1).padStart(2, '0')}.png`,
  alt: `Mathaba project gallery image ${index + 1}`,
}))

const INITIAL_GALLERY_ITEMS = 9
const GALLERY_LOAD_STEP = 9
const DEFAULT_GALLERY_IMAGE = '/images/gallery/gallery-01.png'

function App() {
  const [visibleGalleryItems, setVisibleGalleryItems] = useState(INITIAL_GALLERY_ITEMS)
  const handleImageError = (event) => {
    if (event.currentTarget.src.includes(DEFAULT_GALLERY_IMAGE)) return
    event.currentTarget.src = DEFAULT_GALLERY_IMAGE
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))] selection:bg-[rgb(var(--brand)/0.3)]">
      <Navbar />

      <main className="pt-24">
        <section id="home" className="relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 2 }}
            className="hero-glow pointer-events-none" 
          />
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:pt-16">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <motion.div 
                className="lg:col-span-7"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[rgb(var(--muted))]"
                >
                  Mathaba TL Construction and Projects Solutions
                </motion.div>

                <motion.h1 
                  variants={fadeInUp}
                  className="mt-5 font-[Fraunces] text-5xl leading-[1.04] tracking-tight sm:text-6xl text-glow"
                >
                  Premium engineering for <span className="text-[rgb(var(--brand))]">solar</span>, <span className="text-[rgb(var(--brand))]">security</span> & <span className="text-[rgb(var(--brand))]">ICT</span>.
                </motion.h1>

                <motion.p 
                  variants={fadeInUp}
                  className="mt-5 max-w-2xl text-[15px] leading-7 text-[rgb(var(--muted))] sm:text-base"
                >
                  We design, supply, install, maintain, and upgrade solar systems, CCTV/intercoms/electric fence, access control, and ICT infrastructure for homes and businesses.
                </motion.p>

                <motion.div 
                  variants={fadeInUp}
                  className="mt-8 flex flex-wrap items-center gap-3"
                >
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="rounded-full bg-[rgb(var(--brand))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(245,158,11,0.2)] transition-all hover:bg-[rgb(var(--brand2))] hover:shadow-[0_20px_60px_rgba(245,158,11,0.3)]"
                  >
                    Request a quote
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    href="#services"
                    className="rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[rgb(var(--fg))] transition-all"
                  >
                    Explore services
                  </motion.a>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  className="mt-10 grid gap-3 sm:grid-cols-3"
                >
                  {[
                    { k: '2012', v: 'Established' },
                    { k: 'Turnkey', v: 'Installations & supply' },
                    { k: 'Support', v: 'Maintenance & upgrades' },
                  ].map((s) => (
                    <motion.div 
                      key={s.k} 
                      whileHover={{ y: -5, borderColor: "rgba(var(--brand), 0.3)" }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-4 transition-colors"
                    >
                      <div className="text-lg font-semibold text-[rgb(var(--fg))]">{s.k}</div>
                      <div className="text-xs text-[rgb(var(--muted))]">{s.v}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5"
              >
                <div className="glass overflow-hidden rounded-[2.5rem] border border-white/10">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                    className="aspect-[4/5] w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(/images/gallery/gallery-01.png)`,
                    }}
                    aria-label="Construction and project solutions"
                    role="img"
                  />
                  <div className="border-t border-white/10 p-6 bg-white/5">
                    <p className="text-sm leading-relaxed text-[rgb(var(--muted))]">
                      From energy to infrastructure—delivered with quality workmanship and reliable turnaround.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* <ClientLogos /> */}

        <motion.section 
          id="services" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="mx-auto max-w-6xl px-6">
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Services</p>
                <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">
                  What we do—end to end.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--muted))]">
                  Tailored solutions across solar, security, ICT, construction, road works and maintenance.
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-[rgb(var(--fg))] hover:bg-white/10 transition-colors"
              >
                Talk to us
              </motion.a>
            </motion.div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {primaryServices.map((s) => (
                <motion.div 
                  key={s.title} 
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="cool-card rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
                >
                  <div className="group overflow-hidden cool-card-shimmer">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-52 w-full object-cover opacity-90 transition duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="p-6">
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
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {additionalServices.map((s) => (
                <motion.div 
                  key={s.title} 
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="cool-card rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
                >
                  <div className="group overflow-hidden cool-card-shimmer">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-56 w-full object-cover opacity-95 transition duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={handleImageError}
                    />
                  </div>

                  <div className="p-6">
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
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="company" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-12">
              <motion.div variants={fadeInUp} className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Company profile</p>
                <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">Built for quality delivery.</h2>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Mathaba TL Construction and Project Solution (Pty) Ltd was formally established in 2012 with a passion for construction, marketing, supply and delivery.
                </p>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 glass">
                  <p className="text-sm font-semibold">Contact</p>
                  <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                    <div><span className="text-white/80 font-semibold">Cell:</span> 076 519 9245</div>
                    <div><span className="text-white/80 font-semibold">Fax:</span> 086 459 4572</div>
                    <div><span className="text-white/80 font-semibold">Email:</span> <a className="hover:text-[rgb(var(--fg))] transition-colors" href="mailto:erensthaba@gmail.com">erensthaba@gmail.com</a></div>
                    <div><span className="text-white/80 font-semibold">Contact person:</span> Mr. Erens Lebogang Thaba</div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="lg:col-span-7">
                <div className="grid gap-6 sm:grid-cols-2">
                  <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform">
                    <p className="text-sm font-semibold">Business details</p>
                    <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                      <div><span className="text-white/80 font-semibold">Company name:</span> Mathaba TL Construction and Project Solution (PTY) LTD</div>
                      <div><span className="text-white/80 font-semibold">Address:</span> 8990/47 Wildchestnut Street, Protea Glen Ext11, Protea Glen 1818</div>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform">
                    <p className="text-sm font-semibold">Business classification</p>
                    <div className="mt-3 grid gap-2 text-sm text-[rgb(var(--muted))]">
                      <div><span className="text-white/80 font-semibold">Type:</span> (PTY) LTD</div>
                      <div><span className="text-white/80 font-semibold">SMME:</span> Micro</div>
                    </div>
                  </motion.div>
                </div>

                <motion.details 
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                  className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors"
                >
                  <summary className="cursor-pointer text-sm font-semibold outline-none">Registrations & banking details</summary>
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
                </motion.details>
              </motion.div>
            </div>

          </div>
        </motion.section>

        <motion.section
          id="business-focus"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              variants={fadeInUp}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--muted))]">Business focus</p>
              <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">Core business & sectors</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[rgb(var(--muted))]">
                These are the main areas we operate in and deliver services for across projects.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[rgb(var(--muted))]">Core business</p>
                  <ul className="mt-4 grid gap-3 text-base text-[rgb(var(--muted))]">
                    {coreBusinessItems.map((item) => (
                      <li key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                        <span className="h-2 w-2 rounded-full bg-[rgb(var(--brand2))]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[rgb(var(--muted))]">Sector</p>
                  <ul className="mt-4 grid gap-3 text-base text-[rgb(var(--muted))]">
                    {sectorItems.map((item) => (
                      <li key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                        <span className="h-2 w-2 rounded-full bg-[rgb(var(--brand2))]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="about" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="mx-auto max-w-6xl px-6">
            <motion.p variants={fadeInUp} className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">About</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">Background, vision & mission.</motion.h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <motion.div 
                variants={fadeInUp}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2 transition-colors"
              >
                <p className="text-sm font-semibold">Background</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Mathaba TL Construction and Project Solution (Pty) Ltd is a company that was formally established in 2012 with endless passion for construction, marketing, supply and delivery. We provide construction, machinery, ICT equipment, mining equipment, roads maintenance and related services with a focus on quality and reliability.
                </p>
              </motion.div>

              <div className="grid gap-6">
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform"
                >
                  <p className="text-sm font-semibold">Company vision</p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">Our vision is to provide quality service and projects.</p>
                </motion.div>
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform"
                >
                  <p className="text-sm font-semibold">Mission (summary)</p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                    We aim to provide the best turnkey solutions for clients and trade to the best of our ability and expertise.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div 
              variants={fadeInUp}
              className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 glass"
            >
              <p className="text-sm font-semibold">Company mission statement</p>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                Creating a favorable working environment for all employees and management is one of our principles. We also make it our mission to catalyze empowerment within the company.
              </p>
              <ul className="mt-4 grid gap-4 text-sm text-[rgb(var(--muted))]">
                {[
                  'Construction supply, marketing and goods is our core business; achieving the priority of the customers will help us grow and survive in this fiercely competitive environment.',
                  'To encourage close and lasting relationships with our customers to build trust and confidence.',
                  'To achieve a reputation in the marketplace for outstanding delivery.',
                  'To allow customers to judge the quality of service provided, which inspires our team and ensures a productive work environment.',
                ].map((t) => (
                  <motion.li 
                    key={t} 
                    whileHover={{ x: 5, color: "rgb(var(--fg))" }}
                    className="flex gap-3 transition-colors"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[rgb(var(--brand))]" />
                    <span>{t}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="gallery" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="mx-auto max-w-6xl px-6">
            <motion.div variants={fadeInUp} className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Gallery</p>
                <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">A glimpse of our world.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--muted))]">
                  Solar, security, construction and ICT environments—built with precision and attention to detail.
                </p>
              </div>
            </motion.div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.slice(0, visibleGalleryItems).map((img) => (
                <motion.div 
                  key={img.src} 
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden transition-transform"
                >
                  <img
                    className="h-56 w-full object-cover opacity-90 transition duration-500 hover:scale-105 hover:opacity-100"
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    onError={handleImageError}
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-3">
              <p className="text-xs text-[rgb(var(--muted))]">
                Showing {Math.min(visibleGalleryItems, galleryImages.length)} of {galleryImages.length} photos
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  visibleGalleryItems < galleryImages.length
                    ? setVisibleGalleryItems((current) =>
                        Math.min(current + GALLERY_LOAD_STEP, galleryImages.length)
                      )
                    : setVisibleGalleryItems(INITIAL_GALLERY_ITEMS)
                }
                className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-[rgb(var(--fg))] transition-all hover:bg-white/20"
              >
                {visibleGalleryItems < galleryImages.length ? 'View more' : 'Show less'}
              </motion.button>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="supplies" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="mx-auto max-w-6xl px-6">
            <motion.p variants={fadeInUp} className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Supply</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">Products we supply.</motion.h2>
            <motion.div variants={fadeInUp} className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 glass">
              <div className="flex flex-wrap gap-3">
                {['ICT equipment', 'Promotional items', 'Electrical equipment'].map((t) => (
                  <motion.span 
                    key={t} 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--brand), 0.2)", borderColor: "rgba(var(--brand), 0.4)" }}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-[rgb(var(--fg))] transition-all"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="address" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="mx-auto max-w-6xl px-6">
            <motion.p variants={fadeInUp} className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Address</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">Where to find us.</motion.h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 glass transition-transform"
              >
                <p className="text-sm font-semibold text-[rgb(var(--brand))]">Gauteng</p>
                <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">
                  8990/47 Wildchestnut Street
                  <br />
                  Protea Glen Ext 11
                  <br />
                  Protea Glen 1818
                </p>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 glass transition-transform"
              >
                <p className="text-sm font-semibold text-[rgb(var(--brand))]">Limpopo</p>
                <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">
                  Stand 10154
                  <br />
                  Marulaneng
                  <br />
                  Ga‑Mphahlele 0736
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="contact" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="mx-auto max-w-6xl px-6">
            <motion.div 
              variants={fadeInUp}
              className="rounded-[3rem] border border-white/10 bg-white/5 p-10 glass relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-[rgb(var(--brand))] opacity-5 blur-[100px] pointer-events-none" />
              
              <div className="grid gap-12 lg:grid-cols-12 lg:items-start relative z-10">
                <div className="lg:col-span-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Contact</p>
                  <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">Let’s build something.</h2>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">
                    Send us a message for quotations, site visits, installations, supplies, and project support.
                  </p>

                  <div className="mt-8 grid gap-4 text-sm text-[rgb(var(--muted))]">
                    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3"><span className="text-white/80 font-semibold">Cell:</span> 076 519 9245</motion.div>
                    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3"><span className="text-white/80 font-semibold">Fax:</span> 086 459 4572</motion.div>
                    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3"><span className="text-white/80 font-semibold">Email:</span> <a className="hover:text-[rgb(var(--fg))] transition-colors underline underline-offset-4 decoration-white/20" href="mailto:erensthaba@gmail.com">erensthaba@gmail.com</a></motion.div>
                    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3"><span className="text-white/80 font-semibold">Contact person:</span> Mr. Erens Lebogang Thaba</motion.div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="mailto:erensthaba@gmail.com"
                      className="rounded-full bg-[rgb(var(--brand))] px-8 py-5 text-sm font-semibold text-white text-center shadow-lg hover:shadow-[rgb(var(--brand)/0.2)] transition-all"
                    >
                      Email us
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="#contact"
                      className="rounded-full border border-white/10 bg-white/10 px-8 py-5 text-sm font-semibold text-[rgb(var(--fg))] text-center transition-all hover:bg-white/20"
                    >
                      Request a quote
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <motion.a
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        href="tel:+27765199245"
        aria-label="Call us at 076 519 9245"
        className="fixed bottom-6 right-4 z-50 rounded-full bg-[rgb(var(--brand))] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(245,158,11,0.35)] transition-all hover:bg-[rgb(var(--brand2))] sm:bottom-8 sm:right-8"
      >
        Call us
      </motion.a>

      <Footer />
    </div>
  )
}

export default App
