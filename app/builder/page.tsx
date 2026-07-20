"use client";

import { useState, useCallback } from "react";
import { PromptInput } from "@/components/PromptInput";
import { PreviewPanel } from "@/components/PreviewPanel";
import { HistoryPanel } from "@/components/HistoryPanel";
import { addToHistory, type HistoryEntry } from "@/lib/history";
import { AlertCircle } from "lucide-react";

export default function BuilderPage() {
  const [code, setCode] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [historyKey, setHistoryKey] = useState(0);

  const handleGenerate = useCallback(async (userPrompt: string) => {
    setIsLoading(true);
    setError(null);
    setPrompt(userPrompt);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `Request failed (${res.status})`);
      }

      setCode(data.code);
      addToHistory(userPrompt, data.code);
      setHistoryKey((k) => k + 1);
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleRestore = useCallback((entry: HistoryEntry) => {
    setPrompt(entry.prompt);
    setCode(entry.code);
    setError(null);
  }, []);

  return (
    <div className="flex-1 flex flex-col lg:flex-row overflow-hidden" id="builder-page">
      {/* ── Left Panel: Prompt ──────────────────────────── */}
      <aside className="w-full lg:w-[380px] xl:w-[420px] shrink-0 border-b lg:border-b-0 lg:border-r border-border/40 bg-background/60 backdrop-blur-sm overflow-y-auto">
        <div className="p-5 space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-lg font-bold tracking-tight">App Builder</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Describe what you want to build
            </p>
          </div>

          {/* Prompt input */}
          <PromptInput onGenerate={handleGenerate} isLoading={isLoading} />

          {/* Error message */}
          {error && (
            <div
              className="flex items-start gap-2.5 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive animate-fade-in"
              id="error-message"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <p className="font-medium">Generation failed</p>
                <p className="mt-0.5 text-xs opacity-80">{error}</p>
              </div>
            </div>
          )}

          {/* Loading shimmer */}
          {isLoading && (
            <div className="space-y-3" id="loading-shimmer">
              <div className="h-3 w-3/4 rounded-full animate-shimmer" />
              <div className="h-3 w-1/2 rounded-full animate-shimmer" />
              <div className="h-3 w-5/6 rounded-full animate-shimmer" />
              <div className="h-3 w-2/3 rounded-full animate-shimmer" />
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-border/30" />

          {/* History */}
          <HistoryPanel onRestore={handleRestore} refreshKey={historyKey} />
        </div>
      </aside>

      {/* ── Right Panel: Preview ───────────────────────── */}
      <main className="flex-1 min-w-0 overflow-hidden">
        <PreviewPanel code={code} prompt={prompt} />
      </main>
    </div>
  );
}
