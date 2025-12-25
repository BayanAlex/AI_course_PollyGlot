# 🦜 PollyGlot

**PollyGlot** in an AI-powered language translation application built with Angular and Cloudflare Workers.

## 🌐 **[Live Demo →](https://pollyglot-ai-cf4.pages.dev/)**

## 📖 Overview

PollyGlot is an intelligent real-time translation platform that leverages OpenAI's GPT-4.1 Mini model to provide natural language translations. The application offers instant translations from any language to French, Spanish, and Japanese through an intuitive chat interface.

## ✨ Key Features

- 🤖 **AI-Powered Translations**: Uses OpenAI GPT-4.1 Mini for accurate, context-aware translations
- 💬 **Interactive Chat Interface**: User-friendly conversation-style translation experience
- 🌍 **Multi-Language Support**: Translate from any language to French, Spanish, or Japanese
- ⚡ **Real-Time Processing**: Instant translation responses via Cloudflare Workers
- 🎯 **State Management**: NgRx for predictable state management
- 🔄 **Reactive Architecture**: RxJS for handling asynchronous operations
- 🎨 **Modern UI**: Responsive Angular components with SCSS styling

## 🛠️ Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 19.0.0 | Frontend framework |
| **TypeScript** | 5.6.2 | Programming language |
| **NgRx Store** | 19.2.0 | State management |
| **NgRx Effects** | 19.2.0 | Side effects management |
| **RxJS** | 7.8.0 | Reactive programming |
| **SCSS** | - | Styling |

### Backend (AI Worker)

| Technology | Version | Purpose |
|------------|---------|---------|
| **Cloudflare Workers** | - | Serverless backend runtime |
| **Wrangler** | 4.18.0 | Cloudflare Workers CLI |
| **OpenAI SDK** | 5.0.1 | AI integration |
| **TypeScript** | 5.5.2 | Programming language |

### Testing

| Technology | Version | Purpose |
|------------|---------|---------|
| **Karma** | 6.4.0 | Test runner |
| **Jasmine** | 5.4.0 | Testing framework |
| **Vitest** | 3.0.7 | Unit testing (Worker) |

## 🤖 AI Integration

### OpenAI GPT-4.1 Mini

The application uses **OpenAI's GPT-4.1 Mini** model for intelligent translation:

- **Model**: `gpt-4.1-mini`
- **Gateway**: Cloudflare AI Gateway for enhanced performance and caching
- **Temperature**: 1 (balanced creativity)
- **Max Tokens**: 2048

### AI Architecture

```
User Input → Angular Frontend → Cloudflare Worker → OpenAI API → Translation Response
                                       ↓
                              Cloudflare AI Gateway
                              (Caching & Optimization)
```

### Translation Prompt Engineering

The AI worker uses a sophisticated system prompt that:
- Translates from any language to the target language
- Handles ambiguous text intelligently
- Converts numbers to words
- Returns structured JSON responses
- Provides error handling for untranslatable content

### Supported Languages

- 🇫🇷 **French**
- 🇪🇸 **Spanish**
- 🇯🇵 **Japanese**

## 📁 Project Structure

```
PollyGlot/
├── src/                          # Frontend application
│   ├── app/
│   │   ├── chat/                # Chat component
│   │   ├── header/              # Header component
│   │   ├── language-selector/   # Language selection
│   │   ├── message/             # Message display
│   │   ├── message-input/       # User input
│   │   ├── message-list/        # Message list
│   │   ├── models/              # TypeScript interfaces
│   │   ├── services/            # HTTP & business logic
│   │   └── store/               # NgRx state management
│   │       ├── actions/         # Redux actions
│   │       ├── effects/         # Side effects
│   │       └── features/        # Feature stores
│   └── environments/            # Environment configs
│
├── pollyglot-ai-worker/         # Backend AI service
│   └── src/
│       ├── index.ts            # Main worker logic
│       ├── models.ts           # Type definitions
│       └── constants.ts        # Configuration
│
└── assets/                      # Static resources
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (LTS version recommended)
- **npm** package manager
- **Angular CLI** 19.0.7+
- **Cloudflare account** (for worker deployment)
- **OpenAI API key**

### Installation

1. **Clone the repository**:
```bash
git clone git+ssh://git@github.com/BayanAlex/AI_course_PollyGlot.git
cd PollyGlot
```

2. **Install frontend dependencies**:
```bash
npm install
```

3. **Install worker dependencies**:
```bash
cd pollyglot-ai-worker
npm install
cd ..
```

4. **Configure environment variables**:
   - Set up your OpenAI API key in Cloudflare Worker secrets
   - Configure environment files in `src/environments/`

### Development

#### Start Frontend Development Server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload on file changes.

#### Start Backend Worker Locally

```bash
cd pollyglot-ai-worker
npm run dev
```

The worker will be available at `http://localhost:8787/`.

### Building

#### Build Frontend

```bash
ng build
```

Production build artifacts will be stored in the `dist/` directory.

#### Deploy Backend Worker

```bash
cd pollyglot-ai-worker
npm run deploy
```

## 📜 Available Scripts

### Frontend

- `npm start` - Start development server (accessible from network)
- `npm run build` - Build for production
- `npm run watch` - Build with watch mode
- `npm test` - Run unit tests

### Backend Worker

- `npm run dev` - Start local development server
- `npm run deploy` - Deploy to Cloudflare Workers
- `npm test` - Run unit tests
- `npm run cf-typegen` - Generate TypeScript types

## 🌐 Environment Configuration

### Development
- Frontend: `http://localhost:4200`
- Backend Worker: `http://localhost:8787`

### Production
- Backend: Deployed on Cloudflare Workers
- AI Gateway: Cloudflare AI Gateway endpoint

## 🏗️ Architecture Highlights

### State Management (NgRx)
- **Actions**: Define state transitions
- **Effects**: Handle side effects (API calls)
- **Features**: Encapsulated feature stores for chat and language selection

### Services
- **ChatService**: Handles translation API communication
- **LanguageService**: Manages language selection
- **MockChatService**: Testing service for development

### Components
- **Standalone Components**: All components use Angular standalone API
- **Reactive Forms**: For user input handling
- **Component Communication**: Via NgRx store

## 🔒 Security

- API keys stored securely in Cloudflare Worker secrets
- CORS properly configured for cross-origin requests
- Environment-based configuration for sensitive data

## 📄 License

Private project - Part of **AI Engineer Path** course on Scrimba

## 👨‍💻 Author

### Oleksandr Shyhyda

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [NgRx Documentation](https://ngrx.io)

