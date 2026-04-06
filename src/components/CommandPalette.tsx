import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { allTools, categories, type Tool } from "@/data/tools";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onToolClick: (tool: Tool) => void;
}

const CommandPalette = ({ open, onClose, onToolClick }: CommandPaletteProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allTools.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.tier.toLowerCase() === q
    );
  }, [query]);

  const sectionResults = useMemo(() => {
    if (!query.trim()) return categories.map((c) => ({ label: c.title, id: c.id }));
    const q = query.toLowerCase();
    return categories
      .filter((c) => c.title.toLowerCase().includes(q))
      .map((c) => ({ label: c.title, id: c.id }));
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 z-[60] w-full max-w-xl glass rounded-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
              <Search className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tools, categories, tiers..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button onClick={onClose}>
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {sectionResults.length > 0 && (
                <div className="mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground px-3">Sections</span>
                  {sectionResults.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        onClose();
                        document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
              {results.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground px-3">Tools</span>
                  {results.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => {
                        onClose();
                        onToolClick(tool);
                      }}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors flex items-center justify-between"
                    >
                      <span>{tool.name}</span>
                      <span className="text-[10px] text-muted-foreground">{tool.category}</span>
                    </button>
                  ))}
                </div>
              )}
              {query && results.length === 0 && sectionResults.length === 0 && (
                <div className="text-center py-8 text-sm text-muted-foreground">
                  <p>No results found for "{query}"</p>
                  <p className="text-xs mt-1">Try searching for a tool name or category</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
