# 🎨 Beautiful Flowise Chat v1.1.0

> A modern, customizable chat widget for Flowise AI instances - Drop-in replacement with beautiful UI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange.svg)](https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@main/dist/chat.js)
[![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)](https://github.com/unknownfriend00007/beautiful-flowise-chat)

## 🆕 What's New in v1.1.0

- ✅ **Fixed**: User message visibility bug (white text on white background)
- ✨ **New**: Real-time streaming support for instant responses
- 🎨 **New**: 5 professional themes (Cloudflare, Intercom, Gradient, Minimal, Dark)
- 🚀 **Improved**: Better visual hierarchy and modern design patterns
- ⚡ **Enhanced**: Smoother animations and responsive behavior

## ✨ Features

- 🎨 **Modern Design** - Professional UI with smooth animations
- 🌊 **Real-time Streaming** - See responses as they're generated
- 🎯 **Fully Customizable** - Colors, themes, positioning, and more
- 💬 **Rich Features** - Typing indicators, timestamps, auto-resize
- 🔌 **Easy Integration** - Works with ANY Flowise instance
- 📱 **Responsive** - Mobile-friendly design
- 🚀 **Zero Dependencies** - Pure vanilla JavaScript
- 🌐 **CDN Ready** - Instant deployment via jsDelivr

## 🚀 Quick Start

### CDN Usage (Recommended)

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@main/dist/chat.js"></script>
<script>
    BeautifulFlowiseChat.init({
        chatflowid: "your-chatflow-id",
        apiHost: "https://your-flowise-instance.com",
        enableStreaming: true  // Enable real-time streaming
    });
</script>
```

## ⚙️ Configuration Options

```javascript
BeautifulFlowiseChat.init({
    // Required
    chatflowid: "a32ee1fe-b6bd-43e0-846b-d95b48a5ad6f",
    apiHost: "https://ruvatron-flowhybrid-3.hf.space",
    
    // Optional
    theme: "modern",              // "modern", "cloudflare", "intercom", "gradient", "glassmorphism", "dark", "minimal"
    primaryColor: "#6366f1",      // Any hex color
    position: "bottom-right",     // "bottom-right", "bottom-left"
    enableStreaming: true,         // Enable real-time streaming responses
    title: "AI Assistant",
    subtitle: "Online",
    welcomeMessage: "Hi! How can I help you today?",
    placeholder: "Type your message...",
    sendButtonText: "➤",
    showTimestamp: true,
    avatar: "🤖"
});
```

## 🎨 Professional Themes

### Cloudflare-Inspired
```javascript
BeautifulFlowiseChat.init({
    theme: "cloudflare",
    chatflowid: "your-id",
    apiHost: "your-host"
});
```

### Intercom-Style
```javascript
BeautifulFlowiseChat.init({
    theme: "intercom",
    chatflowid: "your-id",
    apiHost: "your-host"
});
```

### Gradient Modern
```javascript
BeautifulFlowiseChat.init({
    theme: "gradient",
    chatflowid: "your-id",
    apiHost: "your-host"
});
```

### Glassmorphism
```javascript
BeautifulFlowiseChat.init({
    theme: "glassmorphism",
    primaryColor: "#8b5cf6",
    chatflowid: "your-id",
    apiHost: "your-host"
});
```

### Dark Mode
```javascript
BeautifulFlowiseChat.init({
    theme: "dark",
    primaryColor: "#10b981",
    chatflowid: "your-id",
    apiHost: "your-host"
});
```

### Minimal
```javascript
BeautifulFlowiseChat.init({
    theme: "minimal",
    chatflowid: "your-id",
    apiHost: "your-host"
});
```

## 🌊 Streaming Support

The widget now supports real-time streaming responses from Flowise:

```javascript
BeautifulFlowiseChat.init({
    chatflowid: "your-id",
    apiHost: "your-host",
    enableStreaming: true  // Default: true
});
```

When streaming is enabled:
- Responses appear in real-time as tokens are generated
- Animated cursor shows active streaming
- Automatically falls back to non-streaming if unsupported
- Better user experience with instant feedback

## 📋 API Reference

### Methods

#### `BeautifulFlowiseChat.init(config)`
Initializes a popup chat widget with the provided configuration.

#### `BeautifulFlowiseChat.initFull(config)`
Initializes a full-page chat interface.

### Configuration Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `chatflowid` | `string` | **required** | Your Flowise chatflow ID |
| `apiHost` | `string` | **required** | Your Flowise instance URL |
| `theme` | `string` | `"modern"` | UI theme |
| `primaryColor` | `string` | `"#6366f1"` | Main color |
| `enableStreaming` | `boolean` | `true` | Enable real-time streaming |
| `position` | `string` | `"bottom-right"` | Widget position |
| `title` | `string` | `"AI Assistant"` | Chat header title |
| `subtitle` | `string` | `"Online"` | Chat header subtitle |
| `welcomeMessage` | `string` | `"Hi! How can I help you today?"` | Initial bot message |
| `placeholder` | `string` | `"Type your message..."` | Input placeholder |
| `sendButtonText` | `string` | `"➤"` | Send button text |
| `showTimestamp` | `boolean` | `true` | Show message timestamps |
| `avatar` | `string` | `"🤖"` | Bot avatar (emoji or text) |

## 🔧 Bug Fixes

### v1.1.0 Fixes

1. **User Message Visibility**: Fixed white text on white background - now properly displays with gradient background and white text
2. **Streaming Support**: Added proper Server-Sent Events (SSE) handling for Flowise streaming API
3. **Theme Consistency**: Ensured all themes properly handle user message colors

## 🆚 Comparison with Default Flowise Embed

| Feature | Beautiful Flowise Chat | Default Flowise |
|---------|------------------------|------------------|
| Modern UI | ✅ | ❌ |
| Streaming support | ✅ | ⚠️ Complex setup |
| Professional themes | ✅ 6 themes | ❌ |
| Smooth animations | ✅ | ❌ |
| User message bug | ✅ Fixed | ❌ Present |
| Mobile optimized | ✅ | ⚠️ Basic |
| Zero branding | ✅ | ❌ |

## 📝 Examples

### Multiple Instances
```javascript
// Support chat
BeautifulFlowiseChat.init({
    chatflowid: "support-flow-id",
    apiHost: "https://support.flowise.com",
    theme: "intercom",
    title: "Support"
});

// Sales chat (different position)
BeautifulFlowiseChat.init({
    chatflowid: "sales-flow-id",
    apiHost: "https://sales.flowise.com",
    theme: "cloudflare",
    position: "bottom-left",
    title: "Sales"
});
```

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - free for personal and commercial use.

## 🔗 Links

- [GitHub Repository](https://github.com/unknownfriend00007/beautiful-flowise-chat)
- [Demo Page](https://unknownfriend00007.github.io/beautiful-flowise-chat/)
- [Flowise Official](https://github.com/FlowiseAI/Flowise)
- [Report Issues](https://github.com/unknownfriend00007/beautiful-flowise-chat/issues)

## 🙏 Credits

Built with ❤️ by [@unknownfriend00007](https://github.com/unknownfriend00007)

Inspired by modern chat interfaces from Cloudflare, Intercom, and other professional services.

---

**Star ⭐ this repo if you find it useful!**