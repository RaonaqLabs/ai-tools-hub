import { motion } from "framer-motion";
import { topPicks, type Tool } from "@/data/tools";
import ToolCard from "./ToolCard";

interface TopPicksProps {
  onToolClick: (tool: Tool) => void;
}

const TopPicks = ({ onToolClick }: TopPicksProps) => {
  return (
    <section id="top-picks" className="section-spacing">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-widest">Featured</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">
            Top Picks <span className="gradient-text">2026</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPicks.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} onClick={onToolClick} featured />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
