import { SITE_CONTENT } from '../../data/content'
import heroCity from '../../assets/hero-city.svg'
import { Button, Container } from '../ui'

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-20 overflow-hidden bg-bg py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-80 w-[40rem] rounded-full bg-gradient-to-br from-accent-dark via-emerald-600/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(hsl(var(--text)/0.08)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-balance text-3xl font-semibold text-text sm:text-4xl lg:text-5xl">
              {SITE_CONTENT.hero.title.split(/(ЖКХ|инфраструктуры)/).map(
                (chunk, index) =>
                  chunk === 'ЖКХ' || chunk === 'инфраструктуры' ? (
                    <span key={index} className="text-accent">
                      {chunk}
                    </span>
                  ) : (
                    <span key={index}>{chunk}</span>
                  ),
              )}
            </h1>
            <p className="text-pretty text-base text-muted sm:text-lg">
              {SITE_CONTENT.hero.subtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${SITE_CONTENT.contacts.phone}`}>
                <Button size="lg" className="w-full sm:w-auto">
                  {SITE_CONTENT.hero.ctaPrimary}
                </Button>
              </a>
              <a href={SITE_CONTENT.contacts.telegram}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {SITE_CONTENT.hero.ctaSecondary}
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
              <img
                src={heroCity}
                alt="Современная городская инфраструктура"
                className="h-[320px] w-full object-cover sm:h-[420px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-dark via-transparent to-transparent" />
              <div className="absolute inset-0 bg-white/30" />
            </div>
            <div className="pointer-events-none absolute -inset-4 rounded-[1.25rem] border border-accent-dark" />
          </div>
        </div>
      </Container>
    </section>
  )
}
