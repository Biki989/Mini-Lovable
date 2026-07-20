/** Example prompts shown as quick-start chips in the builder UI */
export const EXAMPLE_PROMPTS = [
  {
    label: "Login Page",
    prompt:
      "Create a modern login page with email and password fields, a 'Remember me' checkbox, social login buttons, and a gradient background.",
  },
  {
    label: "Dashboard",
    prompt:
      "Create a responsive dashboard with 4 stat cards at the top, a line chart placeholder, and a recent activity list. Use a clean, modern design.",
  },
  {
    label: "Pricing Page",
    prompt:
      "Create a SaaS pricing page with 3 tiers (Free, Pro, Enterprise). Highlight the Pro tier. Include feature comparison and a FAQ section.",
  },
  {
    label: "Todo App",
    prompt:
      "Create a beautiful todo app with the ability to add, complete, and delete tasks. Include a progress bar showing completion percentage.",
  },
] as const;

/** Default placeholder code shown in the preview before any generation */
export const DEFAULT_CODE = `export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center space-y-6 p-8">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white">
          Mini Lovable
        </h1>
        <p className="text-lg text-slate-400 max-w-md">
          Enter a prompt on the left panel and click <strong className="text-violet-400">Generate</strong> to create a React component.
        </p>
        <div className="flex gap-2 justify-center flex-wrap">
          <span className="px-3 py-1 text-xs rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
            React
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            AI Powered
          </span>
        </div>
      </div>
    </div>
  );
}`;

/** Max prompt length in characters */
export const MAX_PROMPT_LENGTH = 2000;

/** App metadata */
export const APP_NAME = "Mini Lovable";
export const APP_DESCRIPTION =
  "Build React applications with AI. Describe what you want and see it come to life instantly.";
