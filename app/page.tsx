import Link from "next/link";
import { Footer } from "@/components/Footer";
import {
  Sparkles,
  Eye,
  Code2,
  Download,
  History,
  LayoutTemplate,
  ArrowRight,
  Zap,
  Wand2,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Sparkles,
    title: "AI Generation",
    description:
      "Describe your vision in plain English. Our AI transforms your words into polished React components.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Eye,
    title: "Live Preview",
    description:
      "See your component render instantly in the browser. No build step, no waiting.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Code2,
    title: "Code Editor",
    description:
      "View and edit the generated code with syntax highlighting. Tweak every detail.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Download,
    title: "Export as ZIP",
    description:
      "Download a complete Vite + React + Tailwind project ready to run locally.",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: History,
    title: "Project History",
    description:
      "Every generation is saved locally. Revisit and restore previous projects anytime.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: LayoutTemplate,
    title: "Example Templates",
    description:
      "Start from curated prompts — login pages, dashboards, pricing cards, and more.",
    gradient: "from-indigo-500 to-violet-600",
  },
];

const steps = [
  {
    icon: Wand2,
    step: "01",
    title: "Describe",
    description: "Type what you want to build in natural language.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Generate",
    description: "AI creates a complete React component with Tailwind CSS.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Ship It",
    description: "Preview, edit, and download your project — ready to deploy.",
  },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative overflow-hidden" id="hero-section">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-20%] left-[10%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="absolute top-[30%] right-[30%] h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[80px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-36">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-400">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered React Builder
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Build React Apps{" "}
              <span className="gradient-text">with AI</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Describe what you want to build, and watch it come to life
              instantly. No setup, no boilerplate — just your ideas turned into
              working code.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/builder">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/30 animate-pulse-glow"
                  id="hero-cta"
                >
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base font-medium"
                  id="hero-learn-more"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Floating preview card */}
          <div className="mx-auto mt-16 max-w-2xl animate-slide-up delay-300">
            <div className="glass-card p-1">
              <div className="rounded-lg bg-background/80 p-4">
                {/* Mock browser chrome */}
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                  <div className="ml-3 flex-1 rounded-md bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
                    mini-lovable.dev/builder
                  </div>
                </div>
                {/* Mock code */}
                <div className="space-y-2 font-mono text-xs leading-relaxed">
                  <div>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-cyan-400">App</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-violet-400">{"() =>"}</span>{" "}
                    <span className="text-muted-foreground">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-violet-400">return</span>{" "}
                    <span className="text-muted-foreground">(</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-emerald-400">{"<div"}</span>{" "}
                    <span className="text-cyan-300">className</span>
                    <span className="text-muted-foreground">=</span>
                    <span className="text-amber-400">
                      {'"min-h-screen flex items-center..."'}
                    </span>
                    <span className="text-emerald-400">{">"}</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-emerald-400">{"<h1>"}</span>
                    <span className="text-foreground/80">Hello, World!</span>
                    <span className="text-emerald-400">{"</h1>"}</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-emerald-400">{"</div>"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">);</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────── */}
      <section
        className="relative border-t border-border/40 bg-muted/20"
        id="features"
      >
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to{" "}
              <span className="gradient-text">build fast</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From idea to working code in seconds — powered by AI and modern
              web technologies.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`glass-card p-6 group animate-slide-up delay-${(i + 1) * 100}`}
                id={`feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-transform group-hover:scale-110`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────── */}
      <section className="border-t border-border/40" id="how-it-works">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Three steps to{" "}
              <span className="gradient-text">your next app</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`relative text-center animate-slide-up delay-${(i + 1) * 100}`}
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-violet-500/20">
                  <s.icon className="h-7 w-7 text-violet-400" />
                </div>
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-400">
                  Step {s.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────── */}
      <section className="border-t border-border/40 bg-muted/20" id="cta-section">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build something{" "}
              <span className="gradient-text">amazing</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start creating beautiful React components with just a text prompt.
            </p>
            <div className="mt-8">
              <Link href="/builder">
                <Button
                  size="lg"
                  className="h-12 px-10 text-base font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-lg shadow-violet-500/25"
                  id="final-cta"
                >
                  Launch Builder
                  <Rocket className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
