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
    <header className="relative z-50 flex justify-center px-4 pt-4">
      <div
        className="flex w-fit max-w-full items-center justify-center border-0 border-b-2 border-b-[#D4AF62] bg-white px-3 py-2 shadow-none"
      >
        <NavigationMenu>
          <NavigationMenuList className="gap-1 sm:gap-2">
            {navLinks.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  active={pathname === href}
                  render={<Link href={href} />}
                  className={`${navigationMenuTriggerStyle()} font-[family-name:var(--font-cormorant)] text-base tracking-wider text-stone-700 hover:bg-[#D4AF62]/10 hover:text-[#D4AF62] focus:bg-[#D4AF62]/10 data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent data-active:text-[#D4AF62] data-active:font-bold`}
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
