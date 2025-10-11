"use client"

import * as React from "react"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet"

const navLinks = [
  { name: 'HOME', href: '#' },
  { name: 'SOBRE NÓS', href: '#about' },
  { name: 'FROTA', href: '#cars' },
  { name: 'CONTATO', href: '#contact' },
]

export function NavbarMobile() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
      <Sheet>
        <SheetTrigger asChild>
          {/* Ícone de menu */}
          <button aria-label="Abrir menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </SheetTrigger>

        <SheetContent side="top" className="bg-light p-4">
          <div className="mx-auto w-full max-w-sm">
            <SheetHeader className={'p-0'}>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Escolha uma seção para navegar</SheetDescription>
            </SheetHeader>

            {/* Links do menu */}
            <ul className="flex flex-col gap-4 mt-6">
              {navLinks.map((link) => (
                  <li key={link.name}>
                    <SheetClose asChild>
                      <a
                          href={link.href}
                          className="block text-lg font-medium tracking-wider hover:text-gray-700 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </SheetClose>
                  </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
  )
}
