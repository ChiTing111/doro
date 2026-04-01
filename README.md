# 🐰 Doro

**Jesse's Personal AI Coding Agent | Jesse 的个人 AI 编程助手**

> 🚀 A powerful terminal-based AI coding agent, forked and customized from Claude Code.
>
> 🚀 一个强大的终端 AI 编程代理，基于 Claude Code 定制打造。

---

## ✨ Features | 功能特色

- 🤖 **AI-Powered Coding** — Intelligent code generation, editing, and debugging
- 🧠 **Deep Thinking Mode** — Type "ultrathink" for enhanced reasoning
- 🎙️ **Voice Mode** — Push-to-talk voice input
- 🔌 **MCP Support** — Model Context Protocol integration
- 🌐 **Multi-Provider** — Works with Alibaba Cloud Bailian (百炼), Anthropic, and more
- ⚡ **All Features Unlocked** — 45+ experimental features enabled

---

## 🛠️ Quick Start | 快速开始

### Prerequisites | 前置要求

- [Bun](https://bun.sh) >= 1.3.11
- Windows (native) / macOS / Linux

### Install Bun | 安装 Bun

```bash
# Windows (PowerShell)
irm bun.sh/install.ps1 | iex

# macOS / Linux
curl -fsSL https://bun.sh/install | bash
```

### Clone & Build | 克隆与构建

```bash
git clone https://github.com/ChiTing111/doro.git
cd doro

# Install dependencies | 安装依赖
bun install

# Build with all features | 构建（启用全部功能）
bun run build:dev:full
```

### Configure API | 配置 API

Doro is pre-configured for **Alibaba Cloud Bailian (阿里云百炼)**:

Doro 已预配置为使用 **阿里云百炼** API：

```bash
# Windows (PowerShell) - Set environment variables | 设置环境变量
$env:ANTHROPIC_API_KEY = "your-api-key"
$env:ANTHROPIC_BASE_URL = "https://coding.dashscope.aliyuncs.com/apps/anthropic"

# macOS / Linux
export ANTHROPIC_API_KEY="your-api-key"
export ANTHROPIC_BASE_URL="https://coding.dashscope.aliyuncs.com/apps/anthropic"
```

### Run | 运行

```bash
# Interactive REPL | 交互式模式
doro

# One-shot mode | 单次模式
doro -p "your prompt here"
```

---

## 📦 Build Variants | 构建版本

| Command 命令 | Output 输出 | Features 功能 | Notes 说明 |
|---|---|---|---|
| `bun run build` | `./cli` | VOICE_MODE | Production build 生产版本 |
| `bun run build:dev` | `./cli-dev` | VOICE_MODE | Dev build 开发版本 |
| `bun run build:dev:full` | `./cli-dev` | All 45+ flags 全部功能 | **Recommended 推荐** |

### Custom Feature Flags | 自定义功能标志

```bash
# Enable specific features | 启用特定功能
bun run ./scripts/build.ts --feature=ULTRAPLAN --feature=ULTRATHINK
```

---

## 🔑 Supported Providers | 支持的 API 提供商

| Provider 提供商 | Config 配置 |
|---|---|
| 🇨🇳 Alibaba Cloud Bailian 阿里云百炼 | `ANTHROPIC_BASE_URL` + `ANTHROPIC_API_KEY` |
| 🇺🇸 Anthropic Direct | `ANTHROPIC_API_KEY` |
| ☁️ AWS Bedrock | `CLAUDE_CODE_USE_BEDROCK=true` |
| 🔷 Google Vertex AI | `CLAUDE_CODE_USE_VERTEX=true` |
| 🔶 Azure Foundry | `CLAUDE_CODE_USE_FOUNDRY=true` |

---

## 🗂️ Project Structure | 项目结构

```
scripts/
  build.ts              # Build script with feature flags | 构建脚本

src/
  entrypoints/cli.tsx   # CLI entrypoint | 入口文件
  commands.ts           # Command registry | 命令注册
  tools.ts              # Tool registry | 工具注册
  QueryEngine.ts        # LLM query engine | 查询引擎

  commands/             # Slash command implementations | 斜杠命令
  tools/                # Agent tool implementations | 代理工具
  components/           # Terminal UI components | 终端 UI 组件
  services/             # API client, MCP, OAuth | 服务层
  utils/                # Utilities | 工具函数
```

---

## 🧰 Tech Stack | 技术栈

| Component 组件 | Technology 技术 |
|---|---|
| Runtime 运行时 | [Bun](https://bun.sh) |
| Language 语言 | TypeScript |
| Terminal UI 终端界面 | React + [Ink](https://github.com/vadimdemedes/ink) |
| CLI Parsing 命令解析 | [Commander.js](https://github.com/tj/commander.js) |
| Schema Validation 校验 | Zod v4 |
| Code Search 代码搜索 | ripgrep |
| Protocols 协议 | MCP, LSP |

---

## 👤 Author | 作者

**Jesse** — Built with ❤️ and AI

---

## 📄 License | 许可证

This project is a customized fork for personal use. The original Claude Code source is the property of Anthropic.

本项目为个人定制版本。原始 Claude Code 源代码归 Anthropic 所有。

---

<p align="center">
  🐰 <strong>Doro</strong> — Your AI coding companion in the terminal<br>
  🐰 <strong>Doro</strong> — 你的终端 AI 编程伙伴
</p>
