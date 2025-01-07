"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: "Forgot passwords", href: "/forgot-password" },
  { name: "Login", href: "/login" },
  { name: "Signup", href: "/signup" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div>
      {navLinks.map((link) => {
        // Check if the current pathname matches the link.href
        const isActive = pathname === link.href;
        return (
          <a
            key={link.name}
            href={link.href}
            className={isActive ? "font-bold mr-5" : "text-blue-400 mr-5"}
          >
            {link.name}
          </a>
        );
      })}
      {children}
    </div>
  );
}
