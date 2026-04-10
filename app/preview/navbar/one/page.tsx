"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = ["Home", "Features", "Integration", "Pricing"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <motion.nav
      className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-background/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between border border-border/50 shadow-lg shadow-primary/5">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" aria-label="home">
            <Logo />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <motion.span whileHover={{ y: -2 }} className="inline-block">
                  {item}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild size="sm" className="rounded-full px-5">
            <Link href="#">
              <span>Get started</span>
            </Link>
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          className="relative z-20 -m-2 p-2 md:hidden"
        >
          <Menu
            className={cn(
              "size-6 transition-all duration-200",
              menuOpen && "rotate-180 scale-0 opacity-0"
            )}
          />
          <X
            className={cn(
              "absolute inset-0 m-auto size-6 transition-all duration-200",
              menuOpen
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-180 scale-0 opacity-0"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 bg-background rounded-2xl border border-border p-4 shadow-xl shadow-primary/5"
          >
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href="#"
                    className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <Button asChild className="w-full rounded-full">
                <Link href="#">
                  <span>Get started</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
