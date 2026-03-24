"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  ArrowUpIcon,
  Zap,
  Globe,
  Rocket,
  BarChart3,
  Search,
  ExternalLink,
  RefreshCw,
  CalendarDays,
} from "lucide-react";

// ─── Keyword routing ────────────────────────────────────────────────────────

interface Route {
  keywords: string[];
  response: string;
  cta?: { label: string; href: string };
}

const ROUTES: Route[] = [
  {
    keywords: ["aeo", "answer engine", "ai search", "chatgpt", "gemini", "perplexity", "llm", "ai overview"],
    response: "AEO (Answer Engine Optimization) is what I do at Rankad.ai. We help brands become the cited answer inside ChatGPT, Gemini, and Perplexity — on autopilot. Selected into The Residency SF out of 3,500+ global applicants.",
    cta: { label: "Explore Rankad.ai →", href: "https://rankad.ai" },
  },
  {
    keywords: ["seo", "search engine", "google", "rank", "traffic", "keyword", "backlink"],
    response: "Through LK Innovations I've delivered SEO for 50+ clients — achieving up to +1100% traffic growth. From technical audits to content strategy and link building. Want to talk strategy?",
    cta: { label: "Start a project →", href: "mailto:business@liamkarlsson.com" },
  },
  {
    keywords: ["web", "website", "design", "develop", "next.js", "react", "build", "app", "freelance"],
    response: "I build fast, modern websites with Next.js, React, and Tailwind. LK Innovations AB has delivered 50+ projects with a 4.6★ Trustpilot rating. Let's build something.",
    cta: { label: "See my work →", href: "/projects" },
  },
  {
    keywords: ["rankad", "rankad.ai", "startup", "saas", "platform"],
    response: "Rankad.ai is my AI Search Optimization platform — we make brands the answer AI gives when your customers ask questions. Currently in The Residency, San Francisco.",
    cta: { label: "Visit Rankad.ai →", href: "https://rankad.ai" },
  },
  {
    keywords: ["residency", "san francisco", "sf", "silicon valley", "ycombinator", "accelerator"],
    response: "Rankad.ai was selected into The Residency in San Francisco — a founder program out of 3,500+ global applicants. We're building the future of AI search from SF.",
    cta: { label: "Read the press →", href: "/media" },
  },
  {
    keywords: ["lk innovations", "lkinnovations", "agency", "clients", "trustpilot"],
    response: "LK Innovations AB is my web agency based in Laholm, Sweden. 50+ delivered projects, 4.6★ on Trustpilot, specialising in web development and SEO.",
    cta: { label: "Visit LK Innovations →", href: "https://lkinnovations.se" },
  },
  {
    keywords: ["price", "pricing", "cost", "quote", "how much", "rate"],
    response: "Pricing depends on scope — a typical website starts around 15,000 SEK. For Rankad.ai, reach out directly for startup and enterprise plans.",
    cta: { label: "Get a quote →", href: "mailto:business@liamkarlsson.com" },
  },
  {
    keywords: ["contact", "email", "hire", "work together", "collaborate", "reach"],
    response: "Best way to reach me: business@liamkarlsson.com for web projects, or contact@rankad.ai for AI search. I respond within 24 hours.",
    cta: { label: "Send an email →", href: "mailto:business@liamkarlsson.com" },
  },
  {
    keywords: ["about", "who are you", "who is liam", "background", "story"],
    response: "I'm Liam — Swedish entrepreneur, born 2005. Co-founder of Rankad.ai, founder of LK Innovations, futures trader, and IT security nerd. Building the future of search from San Francisco.",
    cta: { label: "Read my story →", href: "/about" },
  },
  {
    keywords: ["blog", "article", "write", "read", "post"],
    response: "I write about AEO, AI search, SEO strategy, web dev, and startups. New posts every week.",
    cta: { label: "Read the blog →", href: "/blog" },
  },
  {
    keywords: ["stack", "tools", "tech", "use", "software"],
    response: "I use Next.js, Tailwind, TypeScript, Supabase, Vercel, and a stack of AI tools daily. See the full breakdown on my stack page.",
    cta: { label: "See my stack →", href: "/stack" },
  },
  {
    keywords: ["media", "press", "news", "featured", "breakit", "hallandsposten"],
    response: "I've been featured in Breakit, Hallandsposten, Skaraborgs Allehanda, Sveriges Radio, and Yuncture — mostly around Rankad.ai and The Residency selection.",
    cta: { label: "See press coverage →", href: "/media" },
  },
  {
    keywords: ["hello", "hi", "hey", "hej", "tjena", "sup"],
    response: "Hey! I'm Liam's AI assistant. Ask me about Rankad.ai, web development, SEO, or just what I'm up to in San Francisco. What can I help with?",
  },
  {
    keywords: ["help", "what can you do", "options", "capabilities"],
    response: "I can tell you about Rankad.ai and AI search, web development and SEO services, my background, press coverage, or connect you directly. Just ask anything.",
    cta: { label: "Get in touch →", href: "mailto:business@liamkarlsson.com" },
  },
  {
    keywords: ["call", "meeting", "book", "schedule", "calendar", "chat", "talk", "zoom", "demo"],
    response: "Book a quick call directly in my calendar — 15 minutes, no fluff. Pick a time that works for you.",
    cta: { label: "Book a call →", href: "https://cal.com/rankad/quick-chat-liam" },
  },
];

const FALLBACK: Route = {
  keywords: [],
  response: "Good question. The best way to get a real answer is to reach out directly — I reply fast.",
  cta: { label: "Email me →", href: "mailto:business@liamkarlsson.com" },
};

function getRoute(input: string): Route {
  const lower = input.toLowerCase();
  for (const route of ROUTES) {
    if (route.keywords.some((kw) => lower.includes(kw))) return route;
  }
  return FALLBACK;
}

// ─── Typewriter ──────────────────────────────────────────────────────────────

function useTypewriter(text: string, speed = 18) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}

// ─── Auto-resize textarea ────────────────────────────────────────────────────

function useAutoResizeTextarea({ minHeight, maxHeight }: { minHeight: number; maxHeight?: number }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const adjustHeight = useCallback((reset?: boolean) => {
    const el = textareaRef.current;
    if (!el) return;
    if (reset) { el.style.height = `${minHeight}px`; return; }
    el.style.height = `${minHeight}px`;
    el.style.height = `${Math.max(minHeight, Math.min(el.scrollHeight, maxHeight ?? Infinity))}px`;
  }, [minHeight, maxHeight]);
  useEffect(() => { if (textareaRef.current) textareaRef.current.style.height = `${minHeight}px`; }, [minHeight]);
  useEffect(() => {
    window.addEventListener("resize", () => adjustHeight());
    return () => window.removeEventListener("resize", () => adjustHeight());
  }, [adjustHeight]);
  return { textareaRef, adjustHeight };
}

// ─── Message types ───────────────────────────────────────────────────────────

interface Message {
  role: "user" | "assistant";
  text: string;
  cta?: { label: string; href: string };
}

// ─── Quick action buttons ────────────────────────────────────────────────────

const QUICK_ACTIONS = [
  { icon: <Zap className="w-3 h-3" />, label: "AEO strategy", prompt: "Tell me about AEO strategy" },
  { icon: <Search className="w-3 h-3" />, label: "AI visibility", prompt: "How do I improve AI search visibility?" },
  { icon: <Globe className="w-3 h-3" />, label: "SEO audit", prompt: "I need an SEO audit" },
  { icon: <BarChart3 className="w-3 h-3" />, label: "Growth plan", prompt: "I want a growth plan" },
  { icon: <Rocket className="w-3 h-3" />, label: "Start a project", prompt: "I want to start a web project" },
];

// ─── Main component ──────────────────────────────────────────────────────────

export function AIChatHero() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeReply, setActiveReply] = useState<Message | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 60, maxHeight: 200 });

  const { displayed, done } = useTypewriter(activeReply?.text ?? "", 16);

  // When typewriter finishes, commit to messages
  useEffect(() => {
    if (done && activeReply) {
      setMessages((prev) => [...prev, activeReply]);
      setActiveReply(null);
      setIsTyping(false);
    }
  }, [done, activeReply]);

  // Only auto-scroll on new messages — never during typewriter ticks
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const submit = (input: string) => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setValue("");
    adjustHeight(true);
    setIsTyping(true);

    const route = getRoute(trimmed);

    setTimeout(() => {
      setActiveReply({ role: "assistant", text: route.response, cta: route.cta });
    }, 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit(value);
    }
  };

  const hasMessages = messages.length > 0 || isTyping;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        style={{ backgroundColor: "rgba(10,10,10,0.9)", backdropFilter: "blur(12px)" }}
      >
        {/* gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

        {/* Message thread */}
        {hasMessages && (
          <div className="relative px-5 pt-5 pb-2 flex flex-col gap-4 max-h-72 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={cn("flex flex-col gap-1", msg.role === "user" ? "items-end" : "items-start")}>
                <div
                  className={cn(
                    "rounded-xl px-4 py-2.5 text-sm leading-relaxed max-w-[85%]",
                    msg.role === "user"
                      ? "bg-indigo-600 text-white"
                      : "text-white/80"
                  )}
                  style={msg.role === "assistant" ? { backgroundColor: "rgba(255,255,255,0.06)" } : {}}
                >
                  {msg.text}
                </div>
                {msg.role === "assistant" && msg.cta && (
                  <a
                    href={msg.cta.href}
                    target={msg.cta.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors ml-1 mt-0.5"
                  >
                    {msg.cta.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}

            {/* Typing / typewriter */}
            {isTyping && (
              <div className="flex flex-col gap-1 items-start">
                {activeReply ? (
                  <>
                    <div
                      className="rounded-xl px-4 py-2.5 text-sm leading-relaxed max-w-[85%] text-white/80"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                    >
                      {displayed}
                      <span className="inline-block w-0.5 h-4 bg-indigo-400 ml-0.5 animate-pulse align-middle" />
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-1.5 px-4 py-3 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                )}
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}

        {/* Input */}
        <div className="relative">
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => { setValue(e.target.value); adjustHeight(); }}
            onKeyDown={handleKeyDown}
            placeholder={hasMessages ? "Ask a follow-up..." : "Ask me about Rankad.ai, SEO, web development..."}
            className={cn(
              "w-full px-5 py-4 resize-none bg-transparent border-none text-sm",
              "text-white/90 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-white/25 min-h-[60px]"
            )}
            style={{ overflow: "hidden" }}
          />
        </div>

        <div className="flex items-center justify-between px-4 pb-3">
          <div className="flex items-center gap-2">
            {hasMessages && (
              <button
                type="button"
                onClick={() => { setMessages([]); setActiveReply(null); setIsTyping(false); }}
                className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                Clear
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://cal.com/rankad/quick-chat-liam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/30 hover:text-indigo-400 transition-colors"
            >
              <CalendarDays className="w-3 h-3" />
              Book a call
            </a>
            <span className="text-white/10">·</span>
            <span className="text-xs text-white/20">Powered by Rankad.ai</span>
            <button
              type="button"
              onClick={() => submit(value)}
              disabled={!value.trim() || isTyping}
              className={cn(
                "p-1.5 rounded-lg text-sm transition-all border",
                value.trim() && !isTyping
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500"
                  : "border-white/10 text-white/20 cursor-not-allowed"
              )}
            >
              <ArrowUpIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick action chips — hide once conversation started */}
      {!hasMessages && (
        <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
          {QUICK_ACTIONS.map((a) => (
            <button
              key={a.label}
              type="button"
              onClick={() => submit(a.prompt)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-white/40 hover:text-white/70 hover:border-white/20 transition-all duration-200 text-xs"
              style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              {a.icon}
              <span>{a.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
