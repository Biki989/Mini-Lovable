"use client";

import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2, Clock, RotateCcw } from "lucide-react";
import {
  getHistory,
  clearHistory,
  type HistoryEntry,
} from "@/lib/history";

interface HistoryPanelProps {
  /** Called when user clicks a history entry to restore it */
  onRestore: (entry: HistoryEntry) => void;
  /** Incremented whenever history changes externally (e.g. after a new generation) */
  refreshKey?: number;
}

export function HistoryPanel({ onRestore, refreshKey }: HistoryPanelProps) {
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [clearDialogOpen, setClearDialogOpen] = useState(false);

  useEffect(() => {
    setEntries(getHistory());
  }, [refreshKey]);

  const handleClear = () => {
    clearHistory();
    setEntries([]);
    setClearDialogOpen(false);
  };

  const formatDate = (ts: number) => {
    const d = new Date(ts);
    const now = new Date();
    const diff = now.getTime() - d.getTime();

    if (diff < 60_000) return "Just now";
    if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
    if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  if (entries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center" id="history-empty">
        <Clock className="mb-3 h-8 w-8 text-muted-foreground/30" />
        <p className="text-sm text-muted-foreground/60">No history yet</p>
        <p className="text-xs text-muted-foreground/40 mt-1">
          Generated components will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3" id="history-panel">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          History ({entries.length})
        </h3>
        <Dialog open={clearDialogOpen} onOpenChange={setClearDialogOpen}>
          <DialogTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-xs text-muted-foreground hover:text-destructive"
                id="clear-history-trigger"
              />
            }
          >
            <Trash2 className="mr-1.5 h-3 w-3" />
            Clear
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Clear History</DialogTitle>
              <DialogDescription>
                This will permanently delete all saved generations. This action
                cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setClearDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleClear} id="clear-history-confirm">
                Delete All
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <ScrollArea className="max-h-[280px]">
        <div className="space-y-2 pr-3">
          {entries.map((entry) => (
            <button
              key={entry.id}
              onClick={() => onRestore(entry)}
              className="group w-full rounded-lg border border-border/30 bg-muted/20 p-3 text-left transition-all hover:bg-muted/40 hover:border-violet-500/20"
              id={`history-entry-${entry.id}`}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm line-clamp-2 leading-snug">
                  {entry.prompt}
                </p>
                <RotateCcw className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/40 group-hover:text-violet-400 transition-colors" />
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground/50">
                {formatDate(entry.createdAt)}
              </p>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
