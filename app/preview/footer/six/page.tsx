"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Logo } from "@/components/logo";

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl z-10 mx-auto pt-36 px-6 pb-12 relative">
      <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm border border-primary/20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 justify-between">
          {/* Brand Section */}
          <div className="max-w-sm">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground font-normal mb-8">
              Your favourite automation software. Built for growing businesses and teams.
            </p>
            <div className="flex gap-4 items-center">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex gap-12 sm:gap-24">
            {/* Product Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold tracking-widest text-foreground uppercase mb-1">
                Product
              </h4>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </div>

            {/* Information Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold tracking-widest text-foreground uppercase mb-1">
                Information
              </h4>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of use
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                404
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © 2026 Layered UI. Created by{" "}
            <span className="font-semibold text-foreground cursor-pointer hover:text-primary transition-colors">
              KingTroy125
            </span>
          </div>
          <div>
            Made with <span className="font-semibold text-foreground">Layered UI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;