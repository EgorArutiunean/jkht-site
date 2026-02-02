import { SITE_CONTENT } from '../../data/content'
import objectsInfra from '../../assets/objects-infra.svg'
import { Container, SectionTitle } from '../ui'

export function Objects() {
  return (
    <section id="objects" className="scroll-mt-20 bg-bg-secondary py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-start px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <SectionTitle eyebrow="Объекты управления">
            {SITE_CONTENT.objects.title}
          </SectionTitle>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-dark">
            {SITE_CONTENT.objects.subtitle}
          </div>
          <p className="text-pretty text-base text-text-secondary sm:text-lg">
            {SITE_CONTENT.objects.text}
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-surface shadow-soft">
            <img
              src={objectsInfra}
              alt="Городская инфраструктура и паркинг"
              className="h-[360px] w-full object-cover sm:h-[460px]"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute -inset-3 rounded-[1.25rem]" />
        </div>
      </Container>
    </section>
  )
}
