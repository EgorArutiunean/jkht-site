import { useState } from 'react'
import { Mail, MessageCircle, Phone, Send } from 'lucide-react'

import { SITE_CONTENT } from '../../data/content'
import { Button, Container, SectionTitle } from '../ui'

const contactCards = [
  {
    label: 'Телефон',
    value: SITE_CONTENT.contacts.phone,
    href: `tel:${SITE_CONTENT.contacts.phone}`,
    icon: Phone,
  },
  {
    label: 'Telegram',
    value: SITE_CONTENT.contacts.telegram,
    href: SITE_CONTENT.contacts.telegram,
    icon: Send,
  },
  {
    label: 'WhatsApp',
    value: SITE_CONTENT.contacts.whatsapp,
    href: `https://wa.me/${SITE_CONTENT.contacts.whatsapp.replace(/\D/g, '')}`,
    icon: MessageCircle,
  },
  {
    label: 'Email',
    value: SITE_CONTENT.contacts.email,
    href: `mailto:${SITE_CONTENT.contacts.email}`,
    icon: Mail,
  },
]

export function Contact() {
  const [status, setStatus] = useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const payload = Object.fromEntries(data.entries())
    console.log('contact-form', payload)
    setStatus('Спасибо! Мы свяжемся с вами в ближайшее время.')
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-bg-secondary py-16 sm:py-20">
      <Container className="space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <SectionTitle eyebrow="Контакты">Свяжитесь с нами</SectionTitle>
          <p className="text-pretty text-base text-text-secondary sm:text-lg">
            Открыты к диалогу и партнёрству.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon
            return (
              <a
                key={card.label}
                href={card.href}
                className="group rounded-lg border border-border bg-surface p-6 text-sm text-text-secondary shadow-soft transition hover:-translate-y-1 hover:border-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark"
              >
                <div className="flex items-center gap-3 text-text">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-white text-accent-dark transition group-hover:border-accent-dark">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="text-base font-semibold text-text">
                    {card.label}
                  </div>
                </div>
                <div className="mt-4 text-sm text-text-secondary">
                  {card.value}
                </div>
              </a>
            )
          })}
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-lg border border-border bg-surface p-6 shadow-soft md:grid-cols-[1fr_1fr_auto]"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-xs text-text-secondary">
              Имя
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="h-11 rounded-md border border-border bg-white px-3 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent-dark"
              placeholder="Ваше имя"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-phone" className="text-xs text-text-secondary">
              Телефон
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              className="h-11 rounded-md border border-border bg-white px-3 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent-dark"
              placeholder="+7..."
            />
          </div>
          <div className="flex items-end">
            <Button type="submit" size="lg" className="w-full md:w-auto">
              Отправить
            </Button>
          </div>
          {status ? (
            <div className="text-sm text-accent-dark md:col-span-3">
              {status}
            </div>
          ) : null}
        </form>
      </Container>
    </section>
  )
}
