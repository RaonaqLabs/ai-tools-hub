import { Sparkles } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-primary" />
        <span>Made with AI · 2026 Edition</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
        <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        <a href="#" className="hover:text-foreground transition-colors">Discord</a>
      </div>
    </div>
  </footer>
);

export default Footer;
