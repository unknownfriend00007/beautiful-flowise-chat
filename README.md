# 🎨 Beautiful Flowise Chat v1.6.0

> A modern, buttery-smooth chat widget for Flowise AI with **dual-mode support**, **perfect memory**, **smooth streaming**, and **markdown support**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange.svg)](https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@52bf600/dist/chat.js)
[![Version](https://img.shields.io/badge/version-1.6.0-blue.svg)](https://github.com/unknownfriend00007/beautiful-flowise-chat)
[![Powered by RPS](https://img.shields.io/badge/Powered%20by-RPS-blueviolet.svg)](mailto:mail.rps.active@proton.me)

---

## 🆕 What's New in v1.6.0

### 🎯 Dual-Mode Support (Like Official Flowise!)
- 🪟 **Popup Mode** - Classic bottom-right bubble with toggle
- 📺 **Full-Screen Mode** - Fills entire viewport for dedicated chat pages
- 🎛️ **Two Init Methods** - `init()` for popup, `initFull()` for full-screen
- 🎨 **Same Great Features** - Both modes have streaming, memory, markdown

### 🧠 Perfect Memory (v1.5.1)
- ✅ **Chat ID at Root Level** - Proper Flowise API implementation
- 💾 **Session Persistence** - Bot remembers your conversation
- 🔍 **Visible in Flowise UI** - View chat history in dashboard
- 🎲 **UUID Format** - Standard format for compatibility

### 🚀 PRIMUS-V2 Streaming
- ✨ **Buttery Smooth Streaming** - Character-by-character updates
- 💫 **Pulsing Loading Dots** - Beautiful animation while waiting
- ✍️ **Blinking Cursor** - Shows during streaming
- 🛡️ **Robust Fallback** - Auto-switches if needed

---

## 🚀 Quick Start

### 🪟 Popup Mode (Bottom-Right Bubble)

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@52bf600/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.init({
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com"
});
</script>
```

### 📺 Full-Screen Mode (Fills Entire Page)

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@52bf600/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.initFull({
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com"
});
</script>
```

---

## 🎭 Mode Comparison

| Feature | Popup Mode | Full-Screen Mode |
|---------|-----------|------------------|
| **Chat Bubble** | ✅ Bottom-right/left | ❌ No bubble |
| **Size** | 400×600px | 100vw×100vh |
| **Rounded Corners** | ✅ Yes | ❌ Square |
| **Minimize Button** | ✅ Yes | ❌ No |
| **Toggle Open/Close** | ✅ Click to toggle | ❌ Always visible |
| **Auto-focus Input** | On open | ✅ On page load |
| **Memory** | ✅ Perfect | ✅ Perfect |
| **Streaming** | ✅ Smooth | ✅ Smooth |
| **Markdown** | ✅ Full | ✅ Full |
| **Best For** | Landing pages | Dedicated chat |

---

## ✨ Features

### 🧠 Memory & Sessions
- **Perfect Retention** - Bot remembers your conversation
- **Chat ID Implementation** - Proper Flowise API format
- **Flowise UI Visible** - See chats in your dashboard
- **UUID Format** - Standard session identification

### 🌊 Streaming
- **Real-time responses** as they're generated
- **Smooth character-by-character** updates
- **Pulsing dots** while waiting
- **Blinking cursor** during streaming
- **Auto-fallback** to non-streaming if needed

### 📝 Markdown Support
- **Bold text** with `**text**` or `__text__`
- *Italic text* with `*text*` or `_text_`
- `Inline code` with `` `code` ``
- Code blocks with ` ```code``` `
- **Numbered lists**: `1. Item`
- **Bullet lists**: `- Item` or `* Item`
- **Links**: `[text](url)`
- **Headers**: `# H1`, `## H2`, `### H3`
- Line breaks preserved

### 🎨 Themes
- 🎯 **Modern** - Default gradient theme (indigo)
- 🔥 **Cloudflare** - Orange inspired design
- 💙 **Intercom** - Blue professional style
- 🌈 **Gradient** - Purple to pink gradient
- ✨ **Glassmorphism** - Transparent with blur
- 🌙 **Dark** - Dark mode friendly
- ⚫ **Minimal** - Black & white clean

### 🎛️ Customization
- 🎨 Custom primary colors
- 📍 Positioning (bottom-right/left) - popup only
- 💬 Custom welcome messages
- 🕐 Optional timestamps
- 🤖 Custom avatar emoji
- 🎭 Two display modes

---

## 📖 Usage Guide

### Example 1: Popup Mode (Basic)

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Welcome to my site!</h1>
    
    <script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@52bf600/dist/chat.js"></script>
    <script>
    BeautifulFlowiseChat.init({
        chatflowid: "a32ee1fe-b6bd-43e0-846b-d95b48a5ad6f",
        apiHost: "https://ruvatron-flowhybrid-3.hf.space",
        theme: "gradient"
    });
    </script>
</body>
</html>
```

### Example 2: Full-Screen Mode

```html
<!DOCTYPE html>
<html>
<head>
    <title>Chat with AI</title>
</head>
<body style="margin: 0; padding: 0;">
    
    <script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@52bf600/dist/chat.js"></script>
    <script>
    BeautifulFlowiseChat.initFull({
        chatflowid: "a32ee1fe-b6bd-43e0-846b-d95b48a5ad6f",
        apiHost: "https://ruvatron-flowhybrid-3.hf.space",
        title: "AI Assistant",
        theme: "modern"
    });
    </script>
</body>
</html>
```

### Example 3: With All Options

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@52bf600/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.init({
    // Required
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com",
    
    // Streaming & Features
    enableStreaming: true,     // Enable smooth streaming (default: true)
    enableMarkdown: true,      // Format responses (default: true)
    
    // Appearance
    theme: "gradient",         // Theme name (default: "modern")
    primaryColor: "#667eea",   // Custom color (optional)
    position: "bottom-right",  // "bottom-right" or "bottom-left" (popup only)
    avatar: "🤖",              // Emoji or text
    
    // Content
    title: "AI Assistant",
    subtitle: "Online",
    welcomeMessage: "Hi! How can I help you today?",
    placeholder: "Type your message...",
    
    // Misc
    showTimestamp: true,       // Show message times
    debug: false               // Console logging
});
</script>
```

---

## 🎨 Theme Showcase

### Try Different Themes

```javascript
// Modern (default) - Indigo gradient
theme: "modern"

// Cloudflare - Orange vibes
theme: "cloudflare"

// Intercom - Professional blue
theme: "intercom"

// Gradient - Purple magic
theme: "gradient"

// Glassmorphism - Transparent beauty
theme: "glassmorphism"

// Dark - Night mode
theme: "dark"

// Minimal - Clean B&W
theme: "minimal"
```

### Custom Colors

```javascript
BeautifulFlowiseChat.init({
    chatflowid: "...",
    apiHost: "...",
    theme: "modern",
    primaryColor: "#ff6b6b"  // Your brand color!
});
```

---

## 🎬 How It Works

### Popup Mode Flow

1. **Page loads** → Chat bubble appears bottom-right
2. **User clicks** → Chat window opens smoothly
3. **User types** → Message appears instantly
4. **Three dots pulse** → Waiting for AI
5. **Streaming starts** → Text builds character-by-character
6. **Done** → Markdown formatted, memory saved ✨
7. **Next message** → Bot remembers context!

### Full-Screen Mode Flow

1. **Page loads** → Chat fills entire screen
2. **Input auto-focused** → Ready to type immediately
3. **Same smooth experience** → Streaming, memory, markdown
4. **Always visible** → No toggle needed

---

## 💡 Use Cases

### 🪟 Popup Mode Perfect For:
- 💼 Business websites with support chat
- 📚 Documentation sites with AI helper
- 🛒 E-commerce with shopping assistant
- 📝 Blogs with Q&A bot
- 🏢 Corporate sites with info bot

### 📺 Full-Screen Mode Perfect For:
- 🤖 Dedicated AI chat applications
- 📱 Embedded in mobile apps (WebView)
- 💬 Chat-first interfaces
- 🎓 Educational AI tutors
- 🎮 Interactive AI experiences

---

## 🔧 API Reference

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `chatflowid` | string | **required** | Your Flowise chatflow ID |
| `apiHost` | string | **required** | Your Flowise instance URL |
| `theme` | string | `"modern"` | Theme name |
| `primaryColor` | string | `"#6366f1"` | Custom hex color |
| `position` | string | `"bottom-right"` | `"bottom-right"` or `"bottom-left"` (popup only) |
| `enableStreaming` | boolean | `true` | Enable real-time streaming |
| `enableMarkdown` | boolean | `true` | Format AI responses |
| `title` | string | `"AI Assistant"` | Chat header title |
| `subtitle` | string | `"Online"` | Chat header subtitle |
| `welcomeMessage` | string | `"Hi! How can I help..."` | First bot message |
| `placeholder` | string | `"Type your message..."` | Input placeholder |
| `sendButtonText` | string | `"➤"` | Send button content |
| `showTimestamp` | boolean | `true` | Show message times |
| `avatar` | string | `"🤖"` | Bot avatar (emoji/text) |
| `debug` | boolean | `false` | Enable console logging |

### Methods

```javascript
// Popup mode (bottom-right bubble)
const chat1 = BeautifulFlowiseChat.init(config);

// Full-screen mode (fills viewport)
const chat2 = BeautifulFlowiseChat.initFull(config);
```

---

## 🐛 Troubleshooting

### Widget Not Showing?

1. ✅ Check browser console for errors
2. ✅ Verify `chatflowid` is correct
3. ✅ Verify `apiHost` is correct (no trailing slash)
4. ✅ Check CORS settings on your Flowise instance
5. ✅ Make sure script loads before `init()` or `initFull()`

### Memory Not Working?

1. ✅ Update to v1.6.0 (has proper chatId implementation)
2. ✅ Check Flowise has Buffer Memory node
3. ✅ Enable `debug: true` to see chatId in console
4. ✅ Check Flowise UI to verify sessions are saving

### Streaming Not Working?

1. ✅ Set `enableStreaming: true` in config
2. ✅ Check Flowise supports streaming for your chatflow
3. ✅ Widget will auto-fallback to non-streaming if SSE fails
4. ✅ Enable `debug: true` to see logs

### Full-Screen Mode Issues?

1. ✅ Make sure to use `initFull()` not `init()`
2. ✅ Set body margin/padding to 0 for best results
3. ✅ Works on any viewport size (mobile-responsive)

---

## 🌟 Why Beautiful Flowise Chat?

### vs Default Flowise Embed

| Feature | Beautiful Flowise | Default Embed |
|---------|------------------|---------------|
| **Modes** | ✅ Popup + Full-screen | ⚠️ Popup only |
| **Memory** | ✅ Perfect (chatId) | ⚠️ Basic |
| **Smooth Streaming** | ✅ PRIMUS-V2 | ❌ Basic |
| **Loading Animation** | ✅ Pulsing dots | ❌ None |
| **Markdown** | ✅ Full support | ⚠️ Limited |
| **Themes** | ✅ 7 professional | ❌ 1 basic |
| **Custom Colors** | ✅ Any color | ⚠️ Limited |
| **Mobile** | ✅ Optimized | ⚠️ Basic |
| **Code Highlighting** | ✅ Yes | ❌ No |
| **Clean Design** | ✅ Modern | ⚠️ Basic |
| **Production Ready** | ✅ Battle-tested | ⚠️ Basic |

---

## 📦 CDN Versions

### Latest (v1.6.0) - Recommended
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@52bf600/dist/chat.js"></script>
```

### Always Latest (auto-updates)
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@main/dist/chat.js"></script>
```

---

## 🧪 Live Demos

### Popup Demo
👉 [**View Popup Demo**](https://htmlpreview.github.io/?https://github.com/unknownfriend00007/beautiful-flowise-chat/blob/main/examples/popup-demo.html)

### Full-Screen Demo  
👉 [**View Full-Screen Demo**](https://htmlpreview.github.io/?https://github.com/unknownfriend00007/beautiful-flowise-chat/blob/main/examples/fullscreen-demo.html)

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📝 Changelog

### v1.6.0 (Latest) - 2025-12-30
- 🎯 **Dual-mode support** - Popup and Full-screen modes
- 🪟 `init()` for popup mode
- 📺 `initFull()` for full-screen mode
- 🎨 Same features in both modes
- 📱 Mobile-responsive full-screen

### v1.5.1 - 2025-12-30
- 🧠 **Perfect Memory** - Chat ID at root level
- 🔍 **Flowise UI Visible** - Sessions show in dashboard
- 🎲 **UUID Format** - Standard session format
- 💾 **Session Persistence** - Bot remembers context

### v1.5.0 - 2025-12-29
- 📍 **User Message Alignment** - Fixed right-alignment
- 🎨 **Width Fix** - Messages display properly
- ✅ **justify-content** - Proper flex alignment

### v1.4.2
- ➕ Added "Powered by RPS" branding with mailto link
- 🎨 Hover effect on footer link

### v1.4.1
- ✨ Added pulsing loading dots animation
- 🎯 Dots appear immediately when message sent

### v1.4.0
- 🚀 PRIMUS-V2 streaming engine
- 💫 Buttery smooth updates
- 🛡️ Smart buffer handling

---

## 📄 License

MIT License - Free for personal and commercial use

Copyright (c) 2025 RPS

---

## 🔗 Links

- 📧 [Contact RPS](mailto:mail.rps.active@proton.me)
- 🐙 [GitHub Repository](https://github.com/unknownfriend00007/beautiful-flowise-chat)
- 🧪 [Popup Demo](https://htmlpreview.github.io/?https://github.com/unknownfriend00007/beautiful-flowise-chat/blob/main/examples/popup-demo.html)
- 📺 [Full-Screen Demo](https://htmlpreview.github.io/?https://github.com/unknownfriend00007/beautiful-flowise-chat/blob/main/examples/fullscreen-demo.html)
- 🐛 [Report Issues](https://github.com/unknownfriend00007/beautiful-flowise-chat/issues)
- 💡 [Request Features](https://github.com/unknownfriend00007/beautiful-flowise-chat/issues/new)

---

## 💖 Credits

**Created by RPS** with:
- 🚀 PRIMUS-V2 streaming architecture
- 🎨 Modern UI/UX principles  
- 💬 Real-world production requirements
- 🧠 Proper Flowise API implementation

---

<div align="center">

### ⭐ Star this repo if you find it useful!

**Powered by RPS** • [mail.rps.active@proton.me](mailto:mail.rps.active@proton.me)

</div>