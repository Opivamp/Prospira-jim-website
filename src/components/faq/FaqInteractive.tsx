"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqs, faqCategories, FAQItem } from "@/data/faqs";
import { Search, ChevronDown, MessageSquare, ArrowRight, HelpCircle } from "lucide-react";

export function FaqInteractive() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredFaqs = faqs.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchQuery =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-prospira-dim" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search question keywords (e.g. guest pass, shoes, cancellation, parking)..."
          className="w-full bg-prospira-surface border border-prospira-border rounded-xl pl-11 pr-4 py-3.5 text-sm text-prospira-text placeholder-prospira-dim focus:border-prospira-accent transition-colors shadow-md"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-prospira-dim hover:text-prospira-text"
          >
            CLEAR
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-12 no-scrollbar">
        {faqCategories.map((cat) => {
          const isActive = cat === selectedCategory;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all border ${
                isActive
                  ? "bg-prospira-accent text-prospira-bg border-prospira-accent font-bold shadow-md"
                  : "bg-prospira-surface text-prospira-muted border-prospira-border hover:border-prospira-muted/60 hover:text-prospira-text"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* FAQ Accordions using native <details name="prospira-faq"> */}
      {filteredFaqs.length === 0 ? (
        <div className="bg-prospira-surface border border-prospira-border rounded-xl p-12 text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-prospira-dim mx-auto" />
          <h3 className="text-lg font-bold font-display text-prospira-text">
            No matching questions found
          </h3>
          <p className="text-xs text-prospira-muted max-w-sm mx-auto">
            Try searching with broader terms or reach out directly to the concierge desk.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="px-4 py-2 bg-prospira-card border border-prospira-border text-xs font-mono text-prospira-accent rounded"
          >
            Show All Questions
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <details
              key={faq.id}
              name="prospira-faq"
              className="group bg-prospira-surface border border-prospira-border rounded-xl p-5 sm:p-6 open:border-prospira-accent/60 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base sm:text-lg text-prospira-text select-none">
                <span className="flex-1 pr-4">{faq.question}</span>
                <span className="text-[10px] font-mono text-prospira-accent px-2 py-0.5 rounded bg-prospira-card border border-prospira-border hidden sm:inline mr-3">
                  {faq.category}
                </span>
                <ChevronDown className="w-5 h-5 text-prospira-dim group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="faq-content pt-4 text-xs sm:text-sm text-prospira-muted leading-relaxed border-t border-prospira-border/50 mt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      )}

      {/* Direct Contact Banner */}
      <div className="mt-16 bg-prospira-card border border-prospira-border rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold font-display text-prospira-text">
          Can&apos;t find what you are looking for?
        </h3>
        <p className="text-xs text-prospira-muted max-w-md mx-auto">
          Our concierge team is available to discuss specific mobility needs, training accommodation, or corporate team arrangements.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-prospira-accent hover:bg-prospira-accentHover text-prospira-bg text-xs font-bold font-display uppercase tracking-wider rounded transition-colors"
          >
            <span>Ask Concierge Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
