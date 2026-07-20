import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Builder — Mini Lovable",
  description:
    "Describe what you want and generate a React component with AI in seconds.",
};

/**
 * Builder layout — full-height, no footer.
 * Navbar is already in the root layout so we just pass children through.
 */
export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex-1 flex flex-col overflow-hidden">{children}</div>;
}
