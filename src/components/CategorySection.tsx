import { motion } from "framer-motion";
import type { Category, Tool } from "@/data/tools";
import ToolCard from "./ToolCard";

interface CategorySectionProps {
  category: Category;
  onToolClick: (tool: Tool) => void;
}

const CategorySection = ({ category, onToolClick }: CategorySectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="text-2xl">{category.icon}</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold">{category.title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.tools.map((tool, i) => (
          <ToolCard key={tool.id} tool={tool} index={i} onClick={onToolClick} />
        ))}
      </div>
    </motion.div>
  );
};

export default CategorySection;
