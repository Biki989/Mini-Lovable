"use client";

import { useState, useCallback, type KeyboardEvent } from "react";
import { Sparkles, Loader2, CornerDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { EXAMPLE_PROMPTS, MAX_PROMPT_LENGTH } from "@/lib/constants";

interface PromptInputProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

export function PromptInput({ onGenerate, isLoading }: PromptInputProps) {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = useCallback(() => {
    const trimmed = prompt.trim();
    if (!trimmed || isLoading) return;
    onGenerate(trimmed);
  }, [prompt, isLoading, onGenerate]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="flex flex-col gap-4" id="prompt-input-panel">
      {/* Textarea */}
      <div className="relative">
        <Textarea
          id="prompt-textarea"
          placeholder="Describe the React component you want to build..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value.slice(0, MAX_PROMPT_LENGTH))}
          onKeyDown={handleKeyDown}
          className="min-h-[140px] resize-none bg-muted/30 border-border/50 text-base leading-relaxed placeholder:text-muted-foreground/50 focus-visible:ring-violet-500/50"
          disabled={isLoading}
        />
        <div className="absolute bottom-2 right-3 text-xs text-muted-foreground/50">
          {prompt.length}/{MAX_PROMPT_LENGTH}
        </div>
      </div>

      {/* Generate button */}
      <Button
        onClick={handleGenerate}
        disabled={!prompt.trim() || isLoading}
        className="h-11 text-base font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-lg shadow-violet-500/20 transition-all hover:shadow-xl disabled:opacity-50 disabled:shadow-none"
        id="generate-button"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating…
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Generate
          </>
        )}
      </Button>

      {/* Keyboard shortcut hint */}
      <p className="text-xs text-muted-foreground/60 flex items-center gap-1.5">
        <CornerDownLeft className="h-3 w-3" />
        <span>
          Press{" "}
          <kbd className="rounded border border-border/50 bg-muted/40 px-1.5 py-0.5 text-[10px] font-mono">
            Ctrl
          </kbd>
          {" + "}
          <kbd className="rounded border border-border/50 bg-muted/40 px-1.5 py-0.5 text-[10px] font-mono">
            Enter
          </kbd>
          {" "}to generate
        </span>
      </p>

      {/* Example prompts */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Try an example
        </p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLE_PROMPTS.map((ex) => (
            <Badge
              key={ex.label}
              variant="outline"
              className="cursor-pointer hover:bg-violet-500/10 hover:text-violet-400 hover:border-violet-500/30 transition-colors text-xs py-1"
              onClick={() => !isLoading && setPrompt(ex.prompt)}
              id={`example-${ex.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {ex.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
