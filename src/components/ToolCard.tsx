import { motion } from "framer-motion";
import type { Tool } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
  index: number;
  onClick: (tool: Tool) => void;
  featured?: boolean;
}

const tierColors: Record<string, string> = {
  S: "tier-badge-s",
  A: "tier-badge-a",
  B: "tier-badge-b",
  C: "tier-badge-c",
  other: "bg-muted text-muted-foreground border border-border",
};

const ToolCard = ({ tool, index, onClick, featured }: ToolCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onClick={() => onClick(tool)}
      className={`group text-left w-full glass-hover glow-border-hover rounded-2xl p-5 ${
        featured ? "p-8" : ""
      } cursor-pointer transition-transform duration-300 hover:scale-[1.03]`}
    >
      {featured && (
        <span className="text-xs font-medium text-tier-s mb-3 block">🔥 Editor's Choice</span>
      )}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className={`font-display font-semibold ${featured ? "text-xl" : "text-base"} group-hover:text-primary transition-colors`}>
          {tool.name}
        </h3>
        <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md ${tierColors[tool.tier]}`}>
          {tool.tier === "other" ? "—" : tool.tier}
        </span>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{tool.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tool.tags?.map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
            {tag}
          </span>
        ))}
        {tool.note && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent">
            {tool.note}
          </span>
        )}
      </div>
    </motion.button>
  );
};

export default ToolCard;
