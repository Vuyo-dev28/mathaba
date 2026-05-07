const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="glass rounded-2xl p-6">
              <p className="font-[Fraunces] text-xl leading-tight">
                Mathaba TL Construction and Projects Solutions
              </p>
              <p className="mt-3 text-sm text-[rgb(var(--muted))]">
                Design, supply, installation, maintenance and upgrades for solar systems, security and ICT infrastructure.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-[rgb(var(--muted))]">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Solar</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Security</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">ICT</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Construction</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Road works</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-7 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold">Explore</p>
              <div className="mt-4 grid gap-2 text-sm text-[rgb(var(--muted))]">
                <a className="hover:text-white" href="#services">Services</a>
                <a className="hover:text-white" href="#company">Company</a>
                <a className="hover:text-white" href="#gallery">Gallery</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold">Quick links</p>
              <div className="mt-4 grid gap-2 text-sm text-[rgb(var(--muted))]">
                <a className="hover:text-white" href="#supplies">Supply</a>
                <a className="hover:text-white" href="#address">Address</a>
                <a className="hover:text-white" href="#contact">Contact</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold">Contact</p>
              <div className="mt-4 grid gap-2 text-sm text-[rgb(var(--muted))]">
                <a className="hover:text-white" href="mailto:erensthaba@gmail.com">erensthaba@gmail.com</a>
                <a className="hover:text-white" href="#contact">076 519 9245</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[rgb(var(--muted))] sm:flex-row sm:items-center">
          <p>&copy; 2026 Mathaba TL Construction and Projects Solutions. All rights reserved.</p>
          <p className="opacity-80">Built with modern tooling.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
