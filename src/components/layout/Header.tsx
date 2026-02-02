import { useState } from 'react'
import { SITE_CONTENT } from '../../data/content'
import { Button, Container } from '../ui'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="h-16" />
      <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-border bg-white/86 backdrop-blur">
        <Container className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent-dark" />
            <span className="text-sm font-semibold tracking-[0.18em] text-text">
              ЖКХ Технологии
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            {SITE_CONTENT.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm text-text-secondary transition hover:text-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="#contact">
              <Button size="sm">Связаться</Button>
            </a>
          </div>
          <button
            type="button"
            className="inline-flex h-9 items-center justify-center rounded-md border border-border px-3 text-sm text-text md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Открыть меню"
          >
            Меню
          </button>
        </Container>
        {open ? (
          <div className="border-t border-border bg-white md:hidden">
            <Container className="flex flex-col gap-4 py-4 text-sm text-text-secondary px-4 sm:px-6 lg:px-8">
              {SITE_CONTENT.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-accent-dark"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}>
                <Button size="sm" className="w-full">
                  Связаться
                </Button>
              </a>
            </Container>
          </div>
        ) : null}
      </header>
    </>
  )
}
