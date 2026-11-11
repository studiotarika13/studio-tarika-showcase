import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { DRIVE_FOLDER_URL } from "@/data/work";
import { CONTACT, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { NAV } from "./Header";
import { Wordmark } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="container-studio pt-20 md:pt-28">
        <div className="grid gap-12 border-b border-foreground/15 pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl leading-tight md:text-4xl">
              Strategy, stories and digital experiences — <em className="text-olive">thoughtfully made.</em>
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-7">
            <p className="eyebrow text-muted-foreground">Navigate</p>
            <ul className="mt-5 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-line">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">Contact</p>
            <ul className="mt-5 space-y-2.5">
              <li><a href={mailtoUrl()} className="link-line break-all">{CONTACT.email}</a></li>
              <li><a href={CONTACT.phoneHref} className="link-line">{CONTACT.phoneDisplay}</a></li>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="link-line inline-flex items-center gap-1">
                  WhatsApp <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              </li>
              <li>
                <a href={DRIVE_FOLDER_URL} target="_blank" rel="noopener noreferrer" className="link-line inline-flex items-center gap-1">
                  Portfolio folder <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-12 md:py-16">
          <Wordmark className="w-full" />
        </div>

        <div className="flex flex-col gap-2 border-t border-foreground/15 py-6 text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Studio Tarika. Founder-led by {CONTACT.founder}.</p>
          <p>Independent creative & marketing studio · India</p>
        </div>
      </div>
    </footer>
  );
}
