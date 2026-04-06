import { useEffect, useState } from "react";
import { Command, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenCommand: () => void;
}

const Navbar = ({ onOpenCommand }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-2xl px-6 py-3 ${
        scrolled
          ? "glass shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-8">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 font-display font-bold text-lg">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="gradient-text">AI Directory</span>
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <button onClick={() => scrollTo("hero")} className="hover:text-foreground transition-colors">Home</button>
          <button onClick={() => scrollTo("categories")} className="hover:text-foreground transition-colors">Categories</button>
          <button onClick={() => scrollTo("top-picks")} className="hover:text-foreground transition-colors">Top Picks</button>
        </div>
        <button
          onClick={onOpenCommand}
          className="glass-hover flex items-center gap-2 text-xs text-muted-foreground px-3 py-1.5 rounded-lg ml-4"
        >
          <Command className="w-3 h-3" />
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden sm:inline text-[10px] bg-muted px-1.5 py-0.5 rounded">⌘K</kbd>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
