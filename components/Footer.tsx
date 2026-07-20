import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500">
              <Zap className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Mini Lovable
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Built with Next.js, Tailwind CSS &amp; OpenAI.
            {" "}
            <span className="text-muted-foreground/60">
              &copy; {new Date().getFullYear()}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
