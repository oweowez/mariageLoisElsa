"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/playlist", label: "Playlist" },
  { href: "/photos", label: "Photos" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div
        className="pointer-events-auto flex w-4/5 items-center justify-between rounded-2xl border border-stone-200/60 bg-[#f5f0e8]/90 backdrop-blur-md shadow-lg px-5 py-3"
      >
        <span className="font-serif text-lg tracking-wide text-foreground/70 italic">
          Elsa &amp; Loïs
        </span>
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            {navLinks.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  active={pathname === href}
                  render={<Link href={href} />}
                  className={`${navigationMenuTriggerStyle()} font-[family-name:var(--font-cormorant)] text-base tracking-wider`}
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
