import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { Tool } from "@/data/tools";

interface ToolModalProps {
  tool: Tool | null;
  onClose: () => void;
}

const tierLabel: Record<string, string> = {
  S: "S Tier — Best in class",
  A: "A Tier — Excellent",
  B: "B Tier — Good",
  C: "C Tier — Decent",
  other: "Noteworthy",
};

const tierColors: Record<string, string> = {
  S: "tier-badge-s",
  A: "tier-badge-a",
  B: "tier-badge-b",
  C: "tier-badge-c",
  other: "bg-muted text-muted-foreground border border-border",
};

const ToolModal = ({ tool, onClose }: ToolModalProps) => {
  return (
    <AnimatePresence>
      {tool && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg glass rounded-3xl p-8"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${tierColors[tool.tier]}`}>
                {tierLabel[tool.tier]}
              </span>
            </div>

            <h2 className="font-display text-2xl font-bold mb-2">{tool.name}</h2>
            <p className="text-sm text-muted-foreground mb-6">{tool.description}</p>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Category</span>
                <p className="text-sm font-medium mt-1">{tool.category}</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Use Case</span>
                <p className="text-sm font-medium mt-1">{tool.useCase}</p>
              </div>
              {tool.tags && tool.tags.length > 0 && (
                <div className="flex gap-2 pt-2">
                  {tool.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
              )}
            </div>

            <button className="mt-8 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all">
              <ExternalLink className="w-4 h-4" />
              Learn More
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ToolModal;
