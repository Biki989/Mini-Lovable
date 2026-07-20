/** A single saved generation entry */
export interface HistoryEntry {
  id: string;
  prompt: string;
  code: string;
  createdAt: number; // Unix timestamp in ms
}

const STORAGE_KEY = "mini-lovable-history";
const MAX_ENTRIES = 50;

/** Generate a short unique id */
function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

/** Retrieve all history entries (newest first) */
export function getHistory(): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as HistoryEntry[];
  } catch {
    return [];
  }
}

/** Add a new entry to the top of history */
export function addToHistory(prompt: string, code: string): HistoryEntry {
  const entry: HistoryEntry = {
    id: uid(),
    prompt,
    code,
    createdAt: Date.now(),
  };
  const current = getHistory();
  const updated = [entry, ...current].slice(0, MAX_ENTRIES);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // Storage full — silently ignore
  }
  return entry;
}

/** Remove a single entry by id */
export function removeFromHistory(id: string): void {
  const updated = getHistory().filter((e) => e.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

/** Clear all history */
export function clearHistory(): void {
  localStorage.removeItem(STORAGE_KEY);
}
