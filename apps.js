// Add or edit apps here. Only name and category are required.
// logo: optional path or URL to a square image. Without it, a colored letter tile is used.
window.APPS = [
  // Coding agents
  { name: "Claude Code", maker: "Anthropic", category: "Coding", tagline: "Agentic coding in your terminal, IDE and web.", url: "https://claude.com/claude-code" },
  { name: "Codex", maker: "OpenAI", category: "Coding", tagline: "OpenAI's coding agent for CLI, IDE and cloud.", url: "https://openai.com/codex" },
  { name: "Cursor", maker: "Anysphere", category: "Coding", tagline: "AI-first code editor.", url: "https://cursor.com" },
  { name: "GitHub Copilot", maker: "GitHub", category: "Coding", tagline: "AI pair programmer inside your editor.", url: "https://github.com/features/copilot" },
  { name: "Lovable", maker: "Lovable", category: "App builders", tagline: "Describe an app, get a working product.", url: "https://lovable.dev" },
  { name: "v0", maker: "Vercel", category: "App builders", tagline: "Generate UI and apps from prompts.", url: "https://v0.dev" },

  // Assistants
  { name: "Claude", maker: "Anthropic", category: "Assistants", tagline: "General AI assistant.", url: "https://claude.ai" },
  { name: "ChatGPT", maker: "OpenAI", category: "Assistants", tagline: "General AI assistant.", url: "https://chatgpt.com" },
  { name: "Gemini", maker: "Google", category: "Assistants", tagline: "Google's AI assistant.", url: "https://gemini.google.com" },
  { name: "Perplexity", maker: "Perplexity", category: "Research", tagline: "Answer engine with cited sources.", url: "https://perplexity.ai" },
  { name: "NotebookLM", maker: "Google", category: "Research", tagline: "Chat with and summarize your own sources.", url: "https://notebooklm.google" },

  // Creative
  { name: "Midjourney", maker: "Midjourney", category: "Creative", tagline: "Image generation.", url: "https://midjourney.com" },
  { name: "Runway", maker: "Runway", category: "Creative", tagline: "AI video generation and editing.", url: "https://runwayml.com" },
  { name: "ElevenLabs", maker: "ElevenLabs", category: "Creative", tagline: "Voice and audio generation.", url: "https://elevenlabs.io" },

  // Productivity
  { name: "Granola", maker: "Granola", category: "Productivity", tagline: "AI notes for meetings.", url: "https://granola.ai" },
  { name: "Muse", maker: "Meta", category: "Agent platforms", tagline: "Personal AI agent that handles tasks for you. iOS, Android and WhatsApp.", url: "https://muse.ai" },
  { name: "Dots", maker: "OpenAI", category: "Agent platforms", tagline: "Always-on background agents with their own cloud computer. In ChatGPT.", url: "https://openai.com" },

  // Open source agents
  { name: "Hermes Agent", maker: "Nous Research", category: "Open source agents", tagline: "Self-improving agent with persistent memory. Runs on your own server.", url: "https://github.com/NousResearch/hermes-agent" },
  { name: "OpenClaw", maker: "Open source", category: "Open source agents", tagline: "Self-hosted agent gateway connecting chat apps to models.", url: "https://openclaw.ai" },
  { name: "OpenHands", maker: "All Hands AI", category: "Open source agents", tagline: "Open source software developer agent with sandboxed execution.", url: "https://github.com/All-Hands-AI/OpenHands" },

  // Agent platforms
  { name: "Grok Bot", maker: "xAI", category: "Agent platforms", tagline: "Always-on cloud agents (closed source, beta).", url: "https://x.ai/bot" },
  { name: "Kiro Crew", maker: "AWS", category: "Agent platforms", tagline: "Persistent open source workspace that remembers context and coordinates your tools.", url: "https://kiro.dev/crew/" },
  { name: "Kiro", maker: "AWS", category: "Coding", tagline: "Spec-driven agentic IDE.", url: "https://kiro.dev" },

  // Local / open
  { name: "Ollama", maker: "Ollama", category: "Local models", tagline: "Run open models on your machine.", url: "https://ollama.com" },

  // More
  { name: "OpenCode", maker: "Open source", category: "Open source agents", tagline: "Open source terminal coding agent that works with many models.", url: "https://opencode.ai" },
  { name: "Aider", maker: "Open source", category: "Open source agents", tagline: "Terminal pair programmer that edits your git repo.", url: "https://aider.chat" },
  { name: "Goose", maker: "Block", category: "Open source agents", tagline: "Extensible open source on-machine agent.", url: "https://block.github.io/goose" },
  { name: "Cline", maker: "Cline", category: "Open source agents", tagline: "Open source coding agent in VS Code.", url: "https://cline.bot" },
  { name: "Kilo Code", maker: "Kilo", category: "Open source agents", tagline: "Open source coding agent for editor and CLI.", url: "https://kilo.ai" },
  { name: "CrewAI", maker: "CrewAI", category: "Open source agents", tagline: "Framework for teams of cooperating agents.", url: "https://crewai.com" },
  { name: "LangGraph", maker: "LangChain", category: "Open source agents", tagline: "Framework for controllable agent workflows.", url: "https://langchain.com/langgraph" },
  { name: "Windsurf", maker: "Cognition", category: "Coding", tagline: "AI-native code editor.", url: "https://windsurf.com" },
  { name: "Devin", maker: "Cognition", category: "Coding", tagline: "Autonomous software engineer agent.", url: "https://devin.ai" },
  { name: "Amp", maker: "Sourcegraph", category: "Coding", tagline: "Coding agent for terminal and editor.", url: "https://ampcode.com" },
  { name: "Antigravity", maker: "Google", category: "Coding", tagline: "Google's agent-first development platform.", url: "https://antigravity.google" },
  { name: "Jules", maker: "Google", category: "Coding", tagline: "Asynchronous coding agent that works on your repos.", url: "https://jules.google" },
  { name: "Zed", maker: "Zed", category: "Coding", tagline: "Fast editor with built-in agents.", url: "https://zed.dev" },
  { name: "Replit", maker: "Replit", category: "App builders", tagline: "Build and host apps with an AI agent.", url: "https://replit.com" },
  { name: "Bolt", maker: "StackBlitz", category: "App builders", tagline: "Prompt to full-stack web app in the browser.", url: "https://bolt.new" },
  { name: "Grok", maker: "xAI", category: "Assistants", tagline: "xAI's assistant.", url: "https://grok.com" },
  { name: "Copilot", maker: "Microsoft", category: "Assistants", tagline: "Microsoft's assistant across Windows and Office.", url: "https://copilot.microsoft.com" },
  { name: "Le Chat", maker: "Mistral", category: "Assistants", tagline: "Mistral's assistant.", url: "https://chat.mistral.ai" },
  { name: "DeepSeek", maker: "DeepSeek", category: "Assistants", tagline: "Open-weight models with a free chat app.", url: "https://chat.deepseek.com" },
  { name: "Kling", maker: "Kuaishou", category: "Creative", tagline: "AI video generation.", url: "https://klingai.com" },
  { name: "Suno", maker: "Suno", category: "Creative", tagline: "Song and music generation.", url: "https://suno.com" },
  { name: "Udio", maker: "Udio", category: "Creative", tagline: "Music generation.", url: "https://udio.com" },
  { name: "Firefly", maker: "Adobe", category: "Creative", tagline: "Image and video generation with licensed training data.", url: "https://firefly.adobe.com" },
  { name: "FLUX", maker: "Black Forest Labs", category: "Creative", tagline: "Image generation models.", url: "https://bfl.ai" },
  { name: "HeyGen", maker: "HeyGen", category: "Creative", tagline: "AI avatar and presenter video.", url: "https://heygen.com" },
  { name: "Canva", maker: "Canva", category: "Creative", tagline: "Design with built-in AI tools.", url: "https://canva.com" },
  { name: "Figma", maker: "Figma", category: "Creative", tagline: "Interface design with AI features.", url: "https://figma.com" },
  { name: "Gamma", maker: "Gamma", category: "Productivity", tagline: "Decks, docs and sites from a prompt.", url: "https://gamma.app" },
  { name: "Fathom", maker: "Fathom", category: "Productivity", tagline: "Free AI meeting recorder and notes.", url: "https://fathom.video" },
  { name: "Otter", maker: "Otter", category: "Productivity", tagline: "Meeting transcripts and summaries.", url: "https://otter.ai" },
  { name: "Fireflies", maker: "Fireflies", category: "Productivity", tagline: "Meeting notes and search.", url: "https://fireflies.ai" },
  { name: "LM Studio", maker: "LM Studio", category: "Local models", tagline: "Desktop app for running local models (closed source, free).", url: "https://lmstudio.ai" },
  { name: "Jan", maker: "Jan", category: "Local models", tagline: "Open source offline chat app.", url: "https://jan.ai" },
  { name: "Open WebUI", maker: "Open WebUI", category: "Local models", tagline: "Self-hosted chat interface for local and remote models.", url: "https://openwebui.com" }
];
