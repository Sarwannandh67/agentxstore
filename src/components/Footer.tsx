import React from 'react';
import { Logo } from './Logo';
import { Twitter, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
export function Footer() {
  return <footer className="py-8 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <Logo className="h-20 w-auto" />
          </div>
          <div className="flex gap-4 mb-5 px-[11px] mx-[19px] rounded-md">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
            <Youtube className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-zinc-950">
              {new Date().getFullYear()} AgentXstore. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
}