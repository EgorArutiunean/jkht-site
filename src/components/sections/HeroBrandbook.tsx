import heroBg from '../../assets/hero-bg.png'
import { SITE_CONTENT } from '../../data/content'
import { Button, Container } from '../ui'

export function HeroBrandbook() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Городская архитектура"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-white/35" />
      </div>
      <Container className="relative flex min-h-screen items-center py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left text-text">
          <div className="relative inline-flex items-center justify-center gap-4 px-4 py-3">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-accent-soft blur-2xl" />
            <div className="relative flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-accent-dark sm:h-14 sm:w-14" />
              <div className="text-sm font-semibold uppercase tracking-[0.32em] text-text">
                {SITE_CONTENT.brandName}
              </div>
            </div>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold text-text sm:text-5xl lg:text-6xl">
            {SITE_CONTENT.hero.title}
          </h1>
          <p className="mt-4 text-pretty text-base text-text-secondary sm:text-lg">
            {SITE_CONTENT.hero.subtitle}
          </p>
          <div className="mt-8">
            <a href="#contact">
              <Button size="lg">{SITE_CONTENT.hero.ctaPrimary}</Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
