import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-prospira-bg text-prospira-text px-4 py-20">
      <div className="max-w-md text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-prospira-surface border border-prospira-border flex items-center justify-center mx-auto text-prospira-accent">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-prospira-accent font-semibold">
            ERROR 404 // FLOOR BOUNDS
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-prospira-text">
            Off The Training Floor
          </h1>
          <p className="text-sm text-prospira-muted leading-relaxed">
            The page or session link you requested could not be located. It may have been reassigned or retired from the timetable.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-3 bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg font-bold font-display text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/schedule"
            className="w-full sm:w-auto px-5 py-3 bg-prospira-surface hover:bg-prospira-card border border-prospira-border text-prospira-text font-display text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-prospira-dim" />
            <span>Class Timetable</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
