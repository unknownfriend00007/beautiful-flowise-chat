# 🎨 Beautiful Flowise Chat

> A modern, customizable chat widget for Flowise AI instances - Drop-in replacement with beautiful UI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange.svg)](https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@main/dist/chat.js)

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism UI with smooth animations
- 🎯 **Fully Customizable** - Colors, themes, positioning, and more
- 💬 **Rich Features** - Typing indicators, timestamps, auto-resize
- 🔌 **Easy Integration** - Works with ANY Flowise instance
- 📱 **Responsive** - Mobile-friendly design
- 🚀 **Zero Dependencies** - Pure vanilla JavaScript
- 🌐 **CDN Ready** - Instant deployment via jsDelivr

## 🚀 Quick Start

### CDN Usage (Recommended)

Add this to your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@main/dist/chat.js"></script>
<script>
    BeautifulFlowiseChat.init({
        chatflowid: "your-chatflow-id",
        apiHost: "https://your-flowise-instance.com"
    });
</script>
```

### Pin to Specific Version

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@1.0.0/dist/chat.js"></script>
```

## ⚙️ Configuration Options

```javascript
BeautifulFlowiseChat.init({
    // Required
    chatflowid: "a32ee1fe-b6bd-43e0-846b-d95b48a5ad6f",
    apiHost: "https://ruvatron-flowhybrid-3.hf.space",
    
    // Optional
    theme: "modern",              // "modern", "glassmorphism", "dark"
    primaryColor: "#6366f1",      // Any hex color
    position: "bottom-right",     // "bottom-right", "bottom-left"
    title: "AI Assistant",
    subtitle: "Online",
    welcomeMessage: "Hi! How can I help you today?",
    placeholder: "Type your message...",
    sendButtonText: "➤",
    showTimestamp: true,
    avatar: "🤖"
});
```

## 🎨 Themes

### Modern (Default)
```javascript
BeautifulFlowiseChat.init({
    theme: "modern",
    primaryColor: "#6366f1"
});
```

### Glassmorphism
```javascript
BeautifulFlowiseChat.init({
    theme: "glassmorphism",
    primaryColor: "#8b5cf6"
});
```

### Dark
```javascript
BeautifulFlowiseChat.init({
    theme: "dark",
    primaryColor: "#10b981"
});
```

## 📦 Full Page Mode

For a full-page chat experience:

```html
<flowise-fullchatbot></flowise-fullchatbot>
<script>
    BeautifulFlowiseChat.initFull({
        chatflowid: "your-chatflow-id",
        apiHost: "https://your-flowise-instance.com"
    });
</script>
```

## 🔧 API

### Methods

#### `BeautifulFlowiseChat.init(config)`
Initializes a popup chat widget with the provided configuration.

#### `BeautifulFlowiseChat.initFull(config)`
Initializes a full-page chat interface.

### Configuration Object

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `chatflowid` | `string` | **required** | Your Flowise chatflow ID |
| `apiHost` | `string` | **required** | Your Flowise instance URL |
| `theme` | `string` | `"modern"` | UI theme |
| `primaryColor` | `string` | `"#6366f1"` | Main color |
| `position` | `string` | `"bottom-right"` | Widget position |
| `title` | `string` | `"AI Assistant"` | Chat header title |
| `subtitle` | `string` | `"Online"` | Chat header subtitle |
| `welcomeMessage` | `string` | `"Hi! How can I help you today?"` | Initial bot message |
| `placeholder` | `string` | `"Type your message..."` | Input placeholder |
| `sendButtonText` | `string` | `"➤"` | Send button text |
| `showTimestamp` | `boolean` | `true` | Show message timestamps |
| `avatar` | `string` | `"🤖"` | Bot avatar (emoji or text) |

## 🆚 Comparison with Default Flowise Embed

| Feature | Beautiful Flowise Chat | Default Flowise |
|---------|------------------------|------------------|
| Modern UI | ✅ | ❌ |
| Customizable themes | ✅ | ⚠️ Limited |
| Smooth animations | ✅ | ❌ |
| Typing indicators | ✅ | ❌ |
| Glassmorphism support | ✅ | ❌ |
| Mobile optimized | ✅ | ⚠️ Basic |
| Zero branding | ✅ | ❌ |

## 🛠️ Development

### Clone the repo
```bash
git clone https://github.com/unknownfriend00007/beautiful-flowise-chat.git
cd beautiful-flowise-chat
```

### Test locally
```bash
# Open index.html in your browser
open index.html
```

### Build
```bash
npm run build
```

## 📝 Examples

### Multiple Instances
```javascript
// Support chat
BeautifulFlowiseChat.init({
    chatflowid: "support-flow-id",
    apiHost: "https://support.flowise.com",
    title: "Support",
    primaryColor: "#10b981"
});

// Sales chat
BeautifulFlowiseChat.init({
    chatflowid: "sales-flow-id",
    apiHost: "https://sales.flowise.com",
    title: "Sales",
    primaryColor: "#f59e0b",
    position: "bottom-left"
});
```

### Custom Styling
```javascript
BeautifulFlowiseChat.init({
    chatflowid: "your-id",
    apiHost: "your-host",
    theme: "glassmorphism",
    primaryColor: "#ec4899",
    avatar: "💎",
    title: "Diamond Assistant",
    welcomeMessage: "Welcome to our premium service!"
});
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use in personal and commercial projects.

## 🔗 Links

- [GitHub Repository](https://github.com/unknownfriend00007/beautiful-flowise-chat)
- [Demo Page](https://unknownfriend00007.github.io/beautiful-flowise-chat/)
- [Flowise Official](https://github.com/FlowiseAI/Flowise)

## 🙏 Credits

Built with ❤️ by [@unknownfriend00007](https://github.com/unknownfriend00007)

Inspired by the need for a more beautiful Flowise chat experience.

---

**Star ⭐ this repo if you find it useful!**