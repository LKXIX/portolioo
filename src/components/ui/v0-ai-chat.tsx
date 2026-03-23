"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  ArrowUpIcon,
  Paperclip,
  PlusIcon,
  Zap,
  Globe,
  Rocket,
  BarChart3,
  Search,
} from "lucide-react";

interface UseAutoResizeTextareaProps {
  minHeight: number;
  maxHeight?: number;
}

function useAutoResizeTextarea({ minHeight, maxHeight }: UseAutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }
      textarea.style.height = `${minHeight}px`;
      const newHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY)
      );
      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) textarea.style.height = `${minHeight}px`;
  }, [minHeight]);

  useEffect(() => {
    const handleResize = () => adjustHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [adjustHeight]);

  return { textareaRef, adjustHeight };
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-white/50 hover:text-white/80 transition-all duration-200 text-xs"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export function AIChatHero() {
  const [value, setValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        setValue("");
        adjustHeight(true);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative rounded-2xl border border-white/10 bg-dark/80 backdrop-blur-sm overflow-hidden shadow-2xl">
        {/* Subtle gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

        <div className="relative">
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about AI search, SEO, or web..."
            className={cn(
              "w-full px-5 py-4",
              "resize-none",
              "bg-transparent",
              "border-none",
              "text-light text-sm",
              "focus:outline-none",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-light/30 placeholder:text-sm",
              "min-h-[60px]"
            )}
            style={{ overflow: "hidden" }}
          />
        </div>

        <div className="flex items-center justify-between px-4 pb-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="group p-1.5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1"
            >
              <Paperclip className="w-3.5 h-3.5 text-light/40 group-hover:text-light/70" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-2 py-1 rounded-lg text-xs text-light/40 transition-colors border border-dashed border-white/10 hover:border-white/20 hover:bg-white/5 flex items-center gap-1"
            >
              <PlusIcon className="w-3 h-3" />
              New chat
            </button>
            <button
              type="button"
              className={cn(
                "p-1.5 rounded-lg text-sm transition-all border",
                value.trim()
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/30"
                  : "border-white/10 text-light/30"
              )}
            >
              <ArrowUpIcon className="w-4 h-4" />
              <span className="sr-only">Send</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
        <ActionButton icon={<Zap className="w-3 h-3" />} label="AEO strategy" />
        <ActionButton icon={<Search className="w-3 h-3" />} label="AI visibility" />
        <ActionButton icon={<Globe className="w-3 h-3" />} label="SEO audit" />
        <ActionButton icon={<BarChart3 className="w-3 h-3" />} label="Growth plan" />
        <ActionButton icon={<Rocket className="w-3 h-3" />} label="Start a project" />
      </div>
    </div>
  );
}
