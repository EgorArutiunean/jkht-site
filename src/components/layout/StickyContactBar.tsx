import { MessageCircle, Phone, Send } from 'lucide-react'

import { SITE_CONTENT } from '../../data/content'
import { Button, Container } from '../ui'

export function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/90 backdrop-blur md:hidden">
      <Container className="flex items-center gap-2 py-3 [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] px-4 sm:px-6 lg:px-8">
        <a href={`tel:${SITE_CONTENT.contacts.phone}`} className="flex-1">
          <Button size="sm" className="h-10 w-full gap-2">
            <Phone className="h-4 w-4" />
            Позвонить
          </Button>
        </a>
        <a href={SITE_CONTENT.contacts.telegram} className="flex-1">
          <Button variant="secondary" size="sm" className="h-10 w-full gap-2">
            <Send className="h-4 w-4" />
            Telegram
          </Button>
        </a>
        <a
          href={`https://wa.me/${SITE_CONTENT.contacts.whatsapp.replace(/\D/g, '')}`}
          className="flex-1"
        >
          <Button variant="ghost" size="sm" className="h-10 w-full gap-2">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </a>
      </Container>
    </div>
  )
}
