export type Tier = "S" | "A" | "B" | "C" | "other";
export type Tag = "🔥 Trending" | "🚀 Rising" | "⭐ Most Used";

export interface Tool {
  id: string;
  name: string;
  tier: Tier;
  category: string;
  description: string;
  useCase: string;
  tags?: Tag[];
  note?: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  tools: Tool[];
}

export const topPicks: Tool[] = [
  { id: "notebooklm", name: "Notebook LM", tier: "S", category: "Productivity", description: "Google's AI-powered research assistant that transforms documents into interactive knowledge bases.", useCase: "Research, learning, document analysis", tags: ["🔥 Trending", "⭐ Most Used"] },
  { id: "kling", name: "Kling AI", tier: "S", category: "Video Generation", description: "State-of-the-art video generation with cinematic quality and precise motion control.", useCase: "Video creation, marketing, storytelling", tags: ["🔥 Trending", "🚀 Rising"] },
  { id: "nanobanana", name: "Nano Banana Pro", tier: "S", category: "Image Generation", description: "Next-gen image synthesis with unparalleled photorealism and creative control.", useCase: "Design, art, content creation", tags: ["🚀 Rising"] },
];

export const categories: Category[] = [
  {
    id: "productivity",
    title: "Productivity",
    icon: "🚀",
    tools: [
      { id: "notebooklm", name: "Notebook LM", tier: "S", category: "Productivity", description: "Google's AI-powered research assistant that transforms documents into interactive knowledge bases.", useCase: "Research, learning, document analysis", tags: ["🔥 Trending", "⭐ Most Used"] },
      { id: "napkin", name: "Napkin AI", tier: "A", category: "Productivity", description: "Turn text into visual diagrams and infographics instantly.", useCase: "Presentations, visual thinking", tags: ["🚀 Rising"] },
      { id: "gamma", name: "Gamma AI", tier: "A", category: "Productivity", description: "Create stunning presentations, documents, and webpages with AI.", useCase: "Decks, docs, websites" },
      { id: "chronicle", name: "Chronicle AI", tier: "A", category: "Productivity", description: "AI-powered storytelling and presentation builder.", useCase: "Storytelling, pitch decks" },
      { id: "genspark", name: "Genspark AI", tier: "A", category: "Productivity", description: "Multi-agent AI search engine delivering curated, bias-free answers.", useCase: "Research, fact-checking" },
    ],
  },
  {
    id: "website",
    title: "Website Building",
    icon: "🌐",
    tools: [
      { id: "lovable", name: "Lovable AI", tier: "S", category: "Website Building", description: "Build production-ready full-stack web apps with natural language. Add-on: 21st.dev for premium components.", useCase: "Web apps, SaaS, MVPs", tags: ["🔥 Trending", "⭐ Most Used"], note: "Add-on: 21st.dev" },
      { id: "aichatbots", name: "AI Chatbots", tier: "A", category: "Website Building", description: "Intelligent conversational interfaces for customer support and engagement.", useCase: "Support, engagement" },
      { id: "framer", name: "Framer AI", tier: "B", category: "Website Building", description: "AI-powered website builder with stunning animations and interactions.", useCase: "Landing pages, portfolios", note: "Paid" },
    ],
  },
  {
    id: "image",
    title: "Image Generation",
    icon: "🎨",
    tools: [
      { id: "nanobanana", name: "Nano Banana Pro", tier: "S", category: "Image Generation", description: "Next-gen image synthesis with unparalleled photorealism and creative control.", useCase: "Design, art, content creation", tags: ["🚀 Rising"] },
      { id: "seedream", name: "Seedream 4.5", tier: "A", category: "Image Generation", description: "Advanced image generation with exceptional detail and style versatility.", useCase: "Creative design, marketing" },
      { id: "chatgpt-img", name: "ChatGPT", tier: "B", category: "Image Generation", description: "OpenAI's multimodal model with integrated image generation.", useCase: "General image creation", tags: ["⭐ Most Used"] },
      { id: "metaai-img", name: "Meta AI & MidJourney AI", tier: "B", category: "Image Generation", description: "Powerful image generators for artistic and photorealistic outputs.", useCase: "Art, marketing visuals" },
      { id: "grok-img", name: "Grok AI", tier: "B", category: "Image Generation", description: "xAI's image generation with real-time knowledge integration.", useCase: "Creative content" },
      { id: "synthid", name: "Google SynthID", tier: "other", category: "Image Generation", description: "Invisible watermarking for AI-generated images.", useCase: "Content authenticity" },
      { id: "magnific", name: "Magnific AI", tier: "other", category: "Image Generation", description: "AI image upscaling and enhancement with extraordinary detail.", useCase: "Upscaling, enhancement" },
    ],
  },
  {
    id: "video",
    title: "Video Generation",
    icon: "🎬",
    tools: [
      { id: "kling", name: "Kling AI", tier: "S", category: "Video Generation", description: "State-of-the-art video generation with cinematic quality and precise motion control.", useCase: "Video creation, marketing", tags: ["🔥 Trending", "🚀 Rising"] },
      { id: "seedance", name: "Seedance 1.5 Pro", tier: "A", category: "Video Generation", description: "High-fidelity dance and motion video generation.", useCase: "Creative video, social content" },
      { id: "flow", name: "Flow", tier: "A", category: "Video Generation", description: "Fluid video generation with smooth transitions and storytelling.", useCase: "Short films, ads" },
      { id: "hailuo", name: "Hailuo AI", tier: "B", category: "Video Generation", description: "Fast video generation with diverse styles and consistent quality.", useCase: "Quick video content" },
      { id: "wan", name: "Wan 2.6", tier: "B", category: "Video Generation", description: "Open-source video generation with competitive quality.", useCase: "Experimental video" },
      { id: "sora", name: "Sora 2 AI", tier: "C", category: "Video Generation", description: "OpenAI's video model with world-simulation capabilities.", useCase: "Creative storytelling" },
      { id: "metaai-vid", name: "Meta AI", tier: "C", category: "Video Generation", description: "Meta's video generation capabilities.", useCase: "Social video" },
      { id: "grok-vid", name: "Grok AI", tier: "C", category: "Video Generation", description: "xAI's video generation with real-time knowledge.", useCase: "Informational video" },
      { id: "lipsync", name: "Lipsync 2 Pro", tier: "other", category: "Video Generation", description: "Professional lip-sync generation for video dubbing.", useCase: "Dubbing, localization" },
    ],
  },
  {
    id: "audio",
    title: "Audio Generation",
    icon: "🎧",
    tools: [
      { id: "suno", name: "Suno AI", tier: "S", category: "Audio Generation", description: "Create full songs with vocals, instruments, and lyrics using AI.", useCase: "Music creation", tags: ["🔥 Trending"] },
      { id: "elevenlabs", name: "Eleven Labs", tier: "S", category: "Audio Generation", description: "Ultra-realistic voice synthesis and cloning.", useCase: "Voiceovers, audiobooks", tags: ["⭐ Most Used"] },
      { id: "speechma", name: "Speechma", tier: "A", category: "Audio Generation", description: "Advanced speech generation with natural intonation.", useCase: "Podcasts, narration" },
      { id: "wisprflow", name: "Wispr Flow", tier: "A", category: "Audio Generation", description: "Voice-to-text that writes the way you speak.", useCase: "Dictation, writing", tags: ["🚀 Rising"] },
    ],
  },
  {
    id: "mentions",
    title: "Honourable Mentions",
    icon: "⭐",
    tools: [
      { id: "sam2", name: "Sam 2", tier: "A", category: "Honourable Mentions", description: "Meta's Segment Anything Model 2 — real-time object segmentation in images and videos.", useCase: "Video editing, AR" },
      { id: "higgsfield", name: "Higgsfield AI", tier: "A", category: "Honourable Mentions", description: "Personalized AI video generation with your likeness.", useCase: "Personal branding" },
      { id: "openclaw", name: "Open Claw (AI Agent)", tier: "A", category: "Honourable Mentions", description: "Open-source AI agent framework for autonomous task completion.", useCase: "Automation, agents", tags: ["🚀 Rising"] },
    ],
  },
];

export const allTools = categories.flatMap((c) => c.tools);
