# FlowPilot

<div align="center">

**AI-Powered Diagram Creation Tool - Chat, Generate, and Visualize**

[English](./README.md) | [中文](./README_CN.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

</div>

## 🎯 What is FlowPilot?

**FlowPilot** is an AI-powered diagram creation tool that brings "chat-while-you-draw" experience to life. Built with Next.js and powered by various LLM providers, it enables you to create professional draw.io diagrams through natural language conversations.

### ✨ Key Features

- 🤖 **Conversational Generation**: Describe your needs in natural language, AI generates draw.io diagrams in real-time
- 🎨 **Style Replication**: Upload reference images to replicate layouts and visual styles
- ⚙️ **Configurable Styles**: Set your drawing preferences once (sketch/formal/draft), apply globally
- 🔄 **Multi-Model Comparison**: Run up to 5 LLM models concurrently, pick the best result
- 🌐 **Multi-Language Support**: Built-in i18n support for English and Chinese
- 🎭 **PPT Generation (Beta)**: Experimental feature to generate PowerPoint presentations

## 📸 Screenshots

### Main Workspace
![Workspace](./public/example.png)

### Architecture Diagram
![Architecture](./public/architecture.png)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- An API key from one of the supported LLM providers

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/flowpilot.git
cd flowpilot

# Install dependencies
pnpm install

# Copy environment variables
cp env.example .env.local

# Configure your API keys in .env.local
# See Configuration section below
```

### Configuration

Edit `.env.local` and add your API credentials:

```env
# Example: Using OpenAI
OPENAI_API_KEY=your-api-key-here

# Example: Using Google Gemini
GOOGLE_GENERATIVE_AI_API_KEY=your-api-key-here

# Example: Using Amazon Bedrock
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1

# Optional: Custom draw.io base URL
NEXT_PUBLIC_DRAWIO_BASE_URL=https://embed.diagrams.net
```

### Running the Application

```bash
# Development mode
pnpm dev

# Production build
pnpm build
pnpm start
```

Visit `http://localhost:6002` (dev) or `http://localhost:6001` (production)

## 🎮 How to Use

### Step 1 - Configure Your Model

1. Click the **"Model Config"** button in the top right corner
2. Fill in your model provider details:
   - **Base URL**: API endpoint (e.g., `https://api.openai.com/v1`)
   - **API Key**: Your authentication key
   - **Model ID**: The model identifier (e.g., `gpt-4`, `claude-3-opus`)

### Step 2 - Set Your Preferences (Optional)

Click **"FlowBrief"** to configure:
- Task mode (blank canvas, structure cleanup, explanation)
- Visual style (professional, creative, presentation, sketch)
- Focus areas (swimlanes, data flow, narrative)
- Diagram type (sequence, activity, component, state machine, etc.)

### Step 3 - Start Creating

**Option A**: Describe your diagram in natural language
```
"Create a user authentication flow with login, registration, and password reset"
```

**Option B**: Use templates
- Click the **"Templates"** button
- Select a pre-built diagram type
- Customize as needed

### Step 4 - Multi-Model Comparison (Optional)

1. Click **"Model Comparison"**
2. Select up to 5 models to compare
3. Generate diagrams concurrently
4. Pick the best result and apply to canvas

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **AI SDK**: Vercel AI SDK
- **LLM Providers**: 
  - OpenAI (GPT-4, GPT-3.5)
  - Anthropic Claude
  - Google Gemini
  - Amazon Bedrock
  - OpenRouter
- **Diagram Engine**: react-drawio
- **UI Components**: Radix UI
- **State Management**: React Context

## 📚 Supported LLM Providers

FlowPilot supports multiple LLM providers out of the box:

| Provider | Models | Notes |
|----------|--------|-------|
| OpenAI | GPT-4, GPT-3.5 Turbo | Recommended for general use |
| Anthropic | Claude 3 (Opus, Sonnet, Haiku) | Best for complex diagrams |
| Google | Gemini Pro, Gemini Pro Vision | Good for image-based references |
| Amazon Bedrock | Claude, Titan | Enterprise option |
| OpenRouter | Various | Access to multiple models |

## 📖 Documentation

- [Architecture Guide](./docs/architecture.md) - System architecture and design decisions
- [i18n Guide](./docs/i18n-guide.md) - Internationalization implementation
- [PPT Studio](./docs/ppt-studio.md) - PowerPoint generation feature (Beta)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

This project is inspired by and built upon [next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io) by DayuanJiang. Special thanks to the original author for creating such an excellent foundation.

## 📧 Contact

For questions, suggestions, or feedback, please open an issue on GitHub.

## ⭐ Star History

If you find FlowPilot useful, please consider giving it a star!

---

<div align="center">
Made with ❤️ by the FlowPilot Team
</div>
