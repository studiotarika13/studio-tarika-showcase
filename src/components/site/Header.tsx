import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { CONTACT, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Logo";

export const NAV = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/studio", label: "Studio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-foreground/10 bg-background/88 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="container-studio flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" aria-label="Studio Tarika — home" className="shrink-0">
          <Wordmark className="w-[118px] md:w-[136px]" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="label-sm link-line py-1 text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground link-line-static", "aria-current": "page" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="ink" size="pillSm" className="hidden lg:inline-flex">
            <Link to="/contact">Start a conversation</Link>
          </Button>

          <DialogPrimitive.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <DialogPrimitive.Trigger
              className="label-sm flex h-10 items-center gap-3 rounded-full border border-foreground/25 px-4 md:hidden"
              aria-label="Open menu"
            >
              Menu
              <span aria-hidden className="flex flex-col gap-[5px]">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
            </DialogPrimitive.Trigger>
            <DialogPrimitive.Portal>
              <DialogPrimitive.Content className="fixed inset-0 z-[80] flex flex-col bg-paper text-foreground outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0">
                <DialogPrimitive.Title className="sr-only">Site menu</DialogPrimitive.Title>
                <DialogPrimitive.Description className="sr-only">Navigate Studio Tarika</DialogPrimitive.Description>
                <div className="container-studio flex h-16 items-center justify-between">
                  <Link to="/" aria-label="Studio Tarika — home" onClick={() => setMenuOpen(false)}>
                    <Wordmark className="w-[118px]" />
                  </Link>
                  <DialogPrimitive.Close
                    className="grid size-10 place-items-center rounded-full border border-foreground/25"
                    aria-label="Close menu"
                  >
                    <X className="size-5" aria-hidden />
                  </DialogPrimitive.Close>
                </div>
                <nav aria-label="Mobile" className="container-studio mt-10 flex flex-col">
                  {[{ to: "/", label: "Home" } as const, ...NAV].map((item, i) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="animate-rise flex items-baseline justify-between border-b border-foreground/15 py-4"
                      style={{ animationDelay: `${80 + i * 60}ms` }}
                      activeOptions={{ exact: true }}
                      activeProps={{ className: "text-olive", "aria-current": "page" }}
                    >
                      <span className="font-display text-5xl">{item.label}</span>
                      <span className="eyebrow text-muted-foreground">0{i + 1}</span>
                    </Link>
                  ))}
                </nav>
                <div className="container-studio mt-auto space-y-3 pb-10">
                  <a href={mailtoUrl()} className="block text-lg">{CONTACT.email}</a>
                  <a href={CONTACT.phoneHref} className="block text-lg">{CONTACT.phoneDisplay}</a>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-sm inline-flex items-center gap-1 text-olive"
                  >
                    WhatsApp <ArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                </div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          </DialogPrimitive.Root>
        </div>
      </div>
    </header>
  );
}
