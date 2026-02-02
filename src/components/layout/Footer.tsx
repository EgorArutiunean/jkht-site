import { SITE_CONTENT } from '../../data/content'
import { Container } from '../ui'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-8 py-10 text-sm text-text-secondary md:grid-cols-3 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.3em] text-text">
            Контакты
          </div>
          <div className="space-y-1">
            <div>Телефон: {SITE_CONTENT.contacts.phone}</div>
            <div>WhatsApp: {SITE_CONTENT.contacts.whatsapp}</div>
            <div>Telegram: {SITE_CONTENT.contacts.telegram}</div>
            <div>Email: {SITE_CONTENT.contacts.email}</div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.3em] text-text">
            Реквизиты
          </div>
          <div className="space-y-1">
            <div>ИНН: {SITE_CONTENT.trust.inn}</div>
            <div>ОГРН: {SITE_CONTENT.trust.ogrn}</div>
          </div>
        </div>
        <div className="space-y-3 md:text-right">
          <div className="text-xs uppercase tracking-[0.3em] text-text">
            ЖКХ Технологии
          </div>
          <div>© {year}. Все права защищены.</div>
        </div>
      </Container>
    </footer>
  )
}
