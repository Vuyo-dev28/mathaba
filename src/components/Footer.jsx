const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[rgb(var(--bg))]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-[rgb(var(--fg))]">Mathaba TL Construction</p>
            <p className="mt-3 text-sm text-[rgb(var(--muted))]">
              Delivery, installation and maintenance for solar, security, ICT and construction projects.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[rgb(var(--fg))]">Links</p>
            <div className="mt-4 grid gap-2 text-sm text-[rgb(var(--muted))]">
              <a className="hover:text-[rgb(var(--fg))]" href="#services">Services</a>
              <a className="hover:text-[rgb(var(--fg))]" href="#company">Company</a>
              <a className="hover:text-[rgb(var(--fg))]" href="#gallery">Gallery</a>
              <a className="hover:text-[rgb(var(--fg))]" href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-[rgb(var(--fg))]">Contact</p>
            <div className="mt-4 grid gap-2 text-sm text-[rgb(var(--muted))]">
              <a className="hover:text-[rgb(var(--fg))]" href="mailto:lebo@Mathabaprojects.co.za">lebo@Mathabaprojects.co.za</a>
              <span>076 519 9245</span>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-[rgb(var(--muted))]">
          © 2026 Mathaba TL Construction. Built with modern tooling.
        </div>
      </div>
    </footer>
  )
}

export default Footer
