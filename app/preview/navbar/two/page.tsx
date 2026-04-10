'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { name: 'Features', href: '#features' },
  { name: 'Solution', href: '#solution' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="relative z-40 pt-4 px-4 sm:px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-3 lg:py-4 rounded-2xl bg-background/50 border border-border/50 backdrop-blur-md transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex gap-8 text-sm">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-150"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Desktop Buttons */}
            <div className="hidden lg:flex gap-3">
              <Button variant="outline" size="sm" className="rounded-lg">
                Login
              </Button>
              <Button size="sm" className="rounded-lg">
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden"
            >
              <Menu className={`h-6 w-6 transition-all duration-200 ${menuOpen ? 'hidden' : 'block'}`} />
              <X className={`h-6 w-6 transition-all duration-200 ${menuOpen ? 'block' : 'hidden'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${menuOpen ? 'flex' : 'hidden'
            } lg:hidden flex-col gap-4 pt-4 mt-4 border-t border-border/50`}
        >
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-150"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 pt-4">
            <Button variant="outline" size="sm" className="rounded-lg w-full">
              Login
            </Button>
            <Button size="sm" className="rounded-lg w-full">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;