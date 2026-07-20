"use client";

import { useMemo, useState } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackConsole,
} from "@codesandbox/sandpack-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  RefreshCw,
  Copy,
  Download,
  Check,
  Eye,
  Code2,
  Terminal,
} from "lucide-react";
import { DEFAULT_CODE } from "@/lib/constants";
import { downloadProjectAsZip } from "@/lib/download";

interface PreviewPanelProps {
  code: string;
  prompt: string;
}

export function PreviewPanel({ code, prompt }: PreviewPanelProps) {
  const [copied, setCopied] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const activeCode = code || DEFAULT_CODE;

  const files = useMemo(
    () => ({
      "/App.tsx": activeCode,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeCode, refreshKey]
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    await downloadProjectAsZip(activeCode, prompt || "Generated React App");
  };

  const handleRefresh = () => {
    setRefreshKey((k) => k + 1);
  };

  return (
    <div className="flex h-full flex-col" id="preview-panel">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-border/40 bg-muted/20 px-3 py-2">
        <Tabs defaultValue="preview" className="w-full">
          <div className="flex items-center justify-between">
            <TabsList className="h-8 bg-muted/40">
              <TabsTrigger value="preview" className="text-xs gap-1.5 h-6 px-3">
                <Eye className="h-3 w-3" />
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="text-xs gap-1.5 h-6 px-3">
                <Code2 className="h-3 w-3" />
                Code
              </TabsTrigger>
              <TabsTrigger value="console" className="text-xs gap-1.5 h-6 px-3">
                <Terminal className="h-3 w-3" />
                Console
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={handleRefresh}
                      id="refresh-preview"
                    />
                  }
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </TooltipTrigger>
                <TooltipContent>Refresh preview</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={handleCopy}
                      id="copy-code"
                    />
                  }
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  {copied ? "Copied!" : "Copy code"}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={handleDownload}
                      id="download-zip"
                    />
                  }
                >
                  <Download className="h-3.5 w-3.5" />
                </TooltipTrigger>
                <TooltipContent>Download as ZIP</TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className="mt-2 flex-1 overflow-hidden rounded-lg border border-border/30">
            <SandpackProvider
              key={refreshKey}
              template="react"
              files={files}
              theme="dark"
              options={{
                externalResources: [
                  "https://cdn.tailwindcss.com",
                ],
              }}
            >
              <TabsContent value="preview" className="mt-0 h-[calc(100vh-13rem)]">
                <SandpackPreview
                  showNavigator={false}
                  showRefreshButton={false}
                  style={{ height: "100%" }}
                />
              </TabsContent>

              <TabsContent value="code" className="mt-0 h-[calc(100vh-13rem)]">
                <SandpackLayout>
                  <SandpackCodeEditor
                    showLineNumbers
                    showTabs={false}
                    readOnly={false}
                    style={{ height: "calc(100vh - 13rem)" }}
                  />
                </SandpackLayout>
              </TabsContent>

              <TabsContent value="console" className="mt-0 h-[calc(100vh-13rem)]">
                <SandpackConsole style={{ height: "100%" }} />
              </TabsContent>
            </SandpackProvider>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
