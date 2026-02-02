import { SITE_CONTENT } from '../../data/content'
import aboutBuilding from '../../assets/about.jpg'
import { Container, SectionTitle } from '../ui'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-bg py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <SectionTitle eyebrow="О компании">
            {SITE_CONTENT.about.title}
          </SectionTitle>
          <p className="text-pretty text-base text-text-secondary sm:text-lg">
            {SITE_CONTENT.about.text}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {SITE_CONTENT.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-surface p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent-dark"
              >
                <div className="text-2xl font-semibold text-accent-dark">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-surface shadow-soft">
            <img
              src={aboutBuilding}
              alt="Современные жилые здания"
              className="h-[320px] w-full object-cover sm:h-[420px]"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute -inset-3 rounded-[1.25rem]" />
        </div>
      </Container>
    </section>
  )
}
