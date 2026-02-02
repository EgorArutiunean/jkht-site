import {
  BadgeCheck,
  ClipboardCheck,
  Handshake,
  ShieldCheck,
  Timer,
  Wrench,
} from 'lucide-react'

import { SITE_CONTENT } from '../../data/content'
import valuesParking from '../../assets/values-parking.svg'
import { Container, SectionTitle } from '../ui'

const icons = [
  ShieldCheck,
  Timer,
  ClipboardCheck,
  BadgeCheck,
  Handshake,
  Wrench,
]

export function Values() {
  return (
    <section id="values" className="scroll-mt-20 bg-bg py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <SectionTitle eyebrow="Ценности">
            {SITE_CONTENT.values.title}
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {SITE_CONTENT.values.items.map((item, index) => {
              const Icon = icons[index % icons.length]
              return (
              <div
                key={item}
                className="group rounded-lg border border-border bg-surface p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent-dark"
              >
                <div className="flex items-center gap-3 text-text">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white text-accent-dark transition group-hover:border-accent-dark">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="text-sm font-semibold text-text">
                    {item}
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-surface shadow-soft">
            <img
              src={valuesParking}
              alt="Парковочная инфраструктура"
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
