# 🎨 Beautiful Flowise Chat v1.1.2

> A modern, customizable chat widget for Flowise AI instances with **markdown support** and **real-time streaming**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange.svg)](https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@main/dist/chat.js)
[![Version](https://img.shields.io/badge/version-1.1.2-blue.svg)](https://github.com/unknownfriend00007/beautiful-flowise-chat)

## 🆕 What's New in v1.1.2

- ✅ **Fixed**: Streaming cursor stuck issue - cursor now properly removed
- ✨ **New**: Full markdown formatting support (bold, lists, code, links)
- 🎨 **Improved**: AI messages look professional with proper formatting
- 🐛 **Fixed**: Better SSE parsing and empty response handling
- 🚀 **Enhanced**: Smoother streaming experience

## ✨ Features

- 📝 **Markdown Support** - Bold, lists, code blocks, links automatically formatted
- 🌊 **Real-time Streaming** - See responses as they're generated
- 🎨 **Modern Design** - 7 professional themes
- 🎯 **Fully Customizable** - Colors, themes, positioning
- 💬 **Rich Formatting** - Code syntax highlighting, proper line breaks
- 🔧 **Easy Integration** - Works with ANY Flowise instance
- 📱 **Responsive** - Mobile-friendly
- 🚀 **Zero Dependencies** - Pure vanilla JavaScript

## 🚀 Quick Start

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@main/dist/chat.js"></script>
<script>
    BeautifulFlowiseChat.init({
        chatflowid: "your-chatflow-id",
        apiHost: "https://your-flowise-instance.com",
        enableStreaming: true,
        enableMarkdown: true
    });
</script>
```

## ⚙️ Configuration

```javascript
BeautifulFlowiseChat.init({
    // Required
    chatflowid: "your-id",
    apiHost: "https://your-host.com",
    
    // Optional
    theme: "modern",           // Theme name
    enableStreaming: true,     // Real-time responses
    enableMarkdown: true,      // Format AI responses
    primaryColor: "#6366f1",   // Custom color
    position: "bottom-right",  // Widget position
    title: "AI Assistant",
    welcomeMessage: "Hi! How can I help?"
});
```

## 📝 Markdown Support

AI responses automatically support:

- **Bold text** with `**text**` or `__text__`
- *Italic text* with `*text*` or `_text_`
- `Inline code` with `` `code` ``
- Code blocks with ` ```code``` `
- Numbered lists: `1. Item`
- Bullet lists: `- Item` or `* Item`
- Links: `[text](url)`
- Headers: `# H1`, `## H2`, `### H3`
- Line breaks preserved

## 🎨 Themes

- `modern` - Default gradient theme
- `cloudflare` - Orange Cloudflare-inspired
- `intercom` - Blue Intercom-style
- `gradient` - Purple gradient
- `glassmorphism` - Transparent glass effect
- `dark` - Dark mode
- `minimal` - Black & white minimalist

## 🐛 Bug Fixes in v1.1.2

### Streaming Issues Fixed
1. ✅ Cursor now properly removed after streaming completes
2. ✅ Better SSE data parsing (handles malformed events)
3. ✅ Empty responses detected and handled
4. ✅ Fallback to non-streaming if content-type not SSE
5. ✅ Buffer handling for partial chunks

### Formatting Fixed
1. ✅ AI responses now show proper markdown formatting
2. ✅ Code blocks with syntax highlighting
3. ✅ Lists properly indented
4. ✅ Links clickable and styled
5. ✅ Line breaks preserved

## 💡 Usage Example

```html
<!-- Modern theme with streaming -->
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@0da5a99/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.init({
    chatflowid: "a32ee1fe-b6bd-43e0-846b-d95b48a5ad6f",
    apiHost: "https://ruvatron-flowhybrid-3.hf.space",
    theme: "gradient",
    enableStreaming: true,
    enableMarkdown: true
});
</script>
```

## 🔗 Links

- [GitHub Repository](https://github.com/unknownfriend00007/beautiful-flowise-chat)
- [Test Page](https://raw.githubusercontent.com/unknownfriend00007/beautiful-flowise-chat/main/test-themes.html)
- [Report Issues](https://github.com/unknownfriend00007/beautiful-flowise-chat/issues)

## 📄 License

MIT License - Free for personal and commercial use

---

**⭐ Star this repo if you find it useful!**