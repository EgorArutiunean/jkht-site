import { CheckCircle2 } from 'lucide-react'

import { SITE_CONTENT } from '../../data/content'
import { Container, SectionTitle } from '../ui'

export function Trust() {
  return (
    <section id="trust" className="scroll-mt-20 bg-bg py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-start px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <SectionTitle eyebrow="Доверие">
            {SITE_CONTENT.trust.title}
          </SectionTitle>
          <div className="space-y-4">
            {SITE_CONTENT.trust.bullets.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-text-secondary"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent-dark" />
                <span className="text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-surface p-6 shadow-soft transition hover:border-accent-dark">
          <div className="text-xs uppercase tracking-[0.3em] text-muted">
            Реквизиты
          </div>
          <div className="mt-4 space-y-2 text-sm text-text">
            <div>
              <span className="text-muted">ИНН:</span>{' '}
              {SITE_CONTENT.trust.inn}
            </div>
            <div>
              <span className="text-muted">ОГРН:</span>{' '}
              {SITE_CONTENT.trust.ogrn}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
