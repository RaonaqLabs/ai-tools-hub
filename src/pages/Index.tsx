import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TopPicks from "@/components/TopPicks";
import CategorySection from "@/components/CategorySection";
import ToolModal from "@/components/ToolModal";
import CommandPalette from "@/components/CommandPalette";
import AiSummary from "@/components/AiSummary";
import Footer from "@/components/Footer";
import { categories, type Tool } from "@/data/tools";

const Index = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [commandOpen, setCommandOpen] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setCommandOpen((o) => !o);
    }
    if (e.key === "Escape") {
      setCommandOpen(false);
      setSelectedTool(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen">
      <Navbar onOpenCommand={() => setCommandOpen(true)} />
      <HeroSection />
      <TopPicks onToolClick={setSelectedTool} />

      <section id="categories" className="section-spacing">
        <div className="container max-w-6xl mx-auto px-6">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <CategorySection category={cat} onToolClick={setSelectedTool} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <AiSummary />
      <ToolModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} onToolClick={setSelectedTool} />
    </div>
  );
};

export default Index;
