import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { topPicks } from "@/data/tools";

const AiSummary = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground px-5 py-3 rounded-full font-medium text-sm shadow-lg shadow-primary/25 hover:scale-105 transition-transform flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4" />
        AI Summary
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="fixed bottom-6 right-6 z-50 w-full max-w-md glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" /> AI Summary
                </h3>
                <button onClick={() => setOpen(false)}>
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Here are today's top-ranked AI tools across all categories:
              </p>
              <div className="space-y-3">
                {topPicks.map((tool) => (
                  <div key={tool.id} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                    <span className="text-xs font-bold text-tier-s mt-0.5">S</span>
                    <div>
                      <p className="text-sm font-medium">{tool.name}</p>
                      <p className="text-xs text-muted-foreground">{tool.useCase}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                💡 Notebook LM leads productivity, Kling AI dominates video, and Nano Banana Pro sets the bar for image generation.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiSummary;
