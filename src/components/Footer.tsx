import React from 'react';
import { Logo } from './Logo';
import { Twitter, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <Logo className="h-20 w-auto" />
          </div>
          <div className="flex gap-4 mb-4">
            <Twitter className="h-5 w-5 text-gray-500 hover:text-gray-700" />
            <Linkedin className="h-5 w-5 text-gray-500 hover:text-gray-700" />
            <Youtube className="h-5 w-5 text-gray-500 hover:text-gray-700" />
            <Instagram className="h-5 w-5 text-gray-500 hover:text-gray-700" />
            <Facebook className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              {new Date().getFullYear()} AgentXstore. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
