import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  monogramOnly?: boolean;
}

export function Logo({ className = "", showTagline = false, monogramOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-prospira-accent rounded-sm ${className}`}
      aria-label="Prospira — Build Your Next Level"
    >
      {/* Precision Geometric Monogram */}
      <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center bg-prospira-surface border border-prospira-border group-hover:border-prospira-accent transition-colors duration-300 rounded">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-prospira-text group-hover:text-prospira-accent transition-colors duration-300"
          aria-hidden="true"
        >
          {/* Vertical stem of P */}
          <rect x="7" y="6" width="4" height="20" rx="1" fill="currentColor" />
          {/* Upper loop of P with forward dynamic chamfer */}
          <path
            d="M11 6H19.5C22.5 6 24.5 8 24.5 11C24.5 14 22.5 16 19.5 16H11V6Z"
            fill="currentColor"
          />
          {/* Dynamic forward slash accent in Prospira Lime */}
          <path
            d="M16 19L22 25"
            stroke="#C6F36B"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {!monogramOnly && (
        <div className="flex flex-col">
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-prospira-text group-hover:text-white transition-colors">
            PROSPIRA
          </span>
          {showTagline && (
            <span className="text-[9px] font-mono tracking-widest text-prospira-muted uppercase">
              BUILD YOUR NEXT LEVEL
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
