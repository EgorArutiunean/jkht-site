import { SITE_CONTENT } from '../../data/content'
import missionCity from '../../assets/philosophy.png'
import { Container, SectionTitle } from '../ui'

export function Philosophy() {
  return (
    <section id="mission" className="scroll-mt-20 bg-bg-secondary py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <SectionTitle eyebrow="Философия">
            {SITE_CONTENT.philosophy.title}
          </SectionTitle>
          <p className="text-pretty text-base text-text-secondary sm:text-lg">
            {SITE_CONTENT.philosophy.text}
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-surface shadow-soft">
            <img
              src={missionCity}
              alt="Городская среда и инфраструктура"
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
