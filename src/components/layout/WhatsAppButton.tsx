"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const whatsAppContacts = [
  {
    label: "Sales & New Projects",
    number: "0334 3709700",
    href: "https://wa.me/923343709700",
  },
  {
    label: "Support & Existing Clients",
    number: "0305 4902143",
    href: "https://wa.me/923054902143",
  },
];

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full right-0 mb-3 w-[min(85vw,18rem)] rounded-xl border border-border bg-card shadow-xl overflow-hidden"
            role="menu"
          >
            <div className="px-4 py-3 border-b border-border bg-secondary/50">
              <p className="text-sm font-semibold text-foreground">Chat with us on WhatsApp</p>
              <p className="text-xs text-muted-foreground mt-0.5">Choose a number to start a chat</p>
            </div>
            <ul className="p-2">
              {whatsAppContacts.map(({ label, number, href }) => (
                <li key={number}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-secondary transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4.5 h-4.5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {label}
                      </span>
                      <span className="text-xs text-muted-foreground">{number}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close WhatsApp contact menu" : "Open WhatsApp contact menu"}
        aria-expanded={open}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95",
          "bg-[#25D366] text-white"
        )}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </div>
  );
}
