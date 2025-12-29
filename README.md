# 🎨 Beautiful Flowise Chat v1.4.2

> A modern, buttery-smooth chat widget for Flowise AI with **PRIMUS-V2 streaming**, **markdown support**, and **pulsing animations**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange.svg)](https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@7460bcf/dist/chat.js)
[![Version](https://img.shields.io/badge/version-1.4.2-blue.svg)](https://github.com/unknownfriend00007/beautiful-flowise-chat)
[![Powered by RPS](https://img.shields.io/badge/Powered%20by-RPS-blueviolet.svg)](mailto:mail.rps.active@proton.me)

---

## 🆕 What's New in v1.4.2

### 🚀 PRIMUS-V2 Streaming Engine
- ✨ **Buttery Smooth Streaming** - Character-by-character updates with no flashing
- 🎯 **Pre-created Placeholders** - Message bubbles appear instantly
- 🔄 **Smart Token Appending** - No DOM recreation, just smooth updates
- 🛡️ **Robust Buffer Handling** - Processes complete lines only
- 💪 **Fallback System** - Auto-switches to non-streaming if needed

### 🎨 UI Enhancements
- 💫 **Pulsing Loading Dots** - Beautiful animation while waiting for AI
- 🎭 **No Blank Bubbles** - Loading dots show immediately
- 🚫 **No Avatars in Messages** - Clean, spacious design
- 📝 **Perfect Headers** - Markdown `###` hidden, text styled properly
- ✍️ **Blinking Cursor** - Shows during streaming

### 🔧 Technical Improvements  
- 📦 **Disabled Send Button** - Prevents spam during streaming
- 🎯 **Better Token Extraction** - Multiple fallbacks for quirky formats
- 🧹 **Cleaner Code** - Based on production PRIMUS-V2 architecture

---

## ✨ Features

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
- **Headers**: `# H1`, `## H2`, `### H3` (symbols hidden!)
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
- 📍 Positioning (bottom-right/left)
- 💬 Custom welcome messages
- 🕐 Optional timestamps
- 🤖 Custom avatar emoji
- 📏 Adjustable size

---

## 🚀 Quick Start

### Basic Setup (2 lines!)

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@7460bcf/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.init({
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com"
});
</script>
```

### With All Options

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@7460bcf/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.init({
    // Required
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com",
    
    // Streaming
    enableStreaming: true,     // Enable smooth streaming (default: true)
    enableMarkdown: true,      // Format responses (default: true)
    
    // Appearance
    theme: "gradient",         // Theme name (default: "modern")
    primaryColor: "#667eea",   // Custom color (optional)
    position: "bottom-right",  // "bottom-right" or "bottom-left"
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

## 📖 Usage Guide

### Step 1: Get Your Flowise Details

1. Open your Flowise instance
2. Go to your chatflow
3. Click **"Embed"** or **"API"**
4. Copy your:
   - **Chatflow ID** (e.g., `a32ee1fe-b6bd-43e0-846b-d95b48a5ad6f`)
   - **API Host** (e.g., `https://your-instance.com`)

### Step 2: Add to Your Website

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Welcome to my site!</h1>
    
    <!-- Add this at the bottom before </body> -->
    <script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@7460bcf/dist/chat.js"></script>
    <script>
    BeautifulFlowiseChat.init({
        chatflowid: "YOUR_CHATFLOW_ID",
        apiHost: "https://YOUR_FLOWISE_HOST.com",
        theme: "gradient",
        enableStreaming: true
    });
    </script>
</body>
</html>
```

### Step 3: Test It!

1. Open your website
2. Look for the chat button in the bottom-right corner
3. Click to open the chat
4. Send a message and watch the smooth streaming! 🎉

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

## 🎬 Streaming Flow

### What You'll See

1. **User types** → Message appears instantly
2. **Three dots pulse** → In your theme color 🎨
3. **First token arrives** → Dots replaced by text
4. **Streaming** → Text builds character-by-character with cursor `|`
5. **Done** → Cursor removed, markdown formatted ✨

### Technical Details

- **No blank bubbles** - Loading dots appear immediately
- **No flashing** - DOM updates in place, never recreated
- **PRIMUS-V2 engine** - Production-tested architecture
- **Buffer handling** - Only processes complete lines
- **Auto-fallback** - Works even if streaming fails

---

## 💡 Examples

### Example 1: Basic Chat

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@7460bcf/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.init({
    chatflowid: "a32ee1fe-b6bd-43e0-846b-d95b48a5ad6f",
    apiHost: "https://ruvatron-flowhybrid-3.hf.space"
});
</script>
```

### Example 2: Custom Theme & Colors

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@7460bcf/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.init({
    chatflowid: "your-id",
    apiHost: "https://your-host.com",
    theme: "dark",
    primaryColor: "#10b981",
    avatar: "🧠",
    title: "Brain AI",
    welcomeMessage: "Ask me anything!"
});
</script>
```

### Example 3: Multiple Chats on Same Page

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@7460bcf/dist/chat.js"></script>
<script>
// Support chat
BeautifulFlowiseChat.init({
    chatflowid: "support-id",
    apiHost: "https://your-host.com",
    theme: "intercom",
    title: "Support",
    position: "bottom-right"
});

// Sales chat
BeautifulFlowiseChat.init({
    chatflowid: "sales-id",
    apiHost: "https://your-host.com",
    theme: "cloudflare",
    title: "Sales",
    position: "bottom-left"
});
</script>
```

---

## 🔧 API Reference

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `chatflowid` | string | **required** | Your Flowise chatflow ID |
| `apiHost` | string | **required** | Your Flowise instance URL |
| `theme` | string | `"modern"` | Theme name |
| `primaryColor` | string | `"#6366f1"` | Custom hex color |
| `position` | string | `"bottom-right"` | `"bottom-right"` or `"bottom-left"` |
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
// Initialize widget
const chat = BeautifulFlowiseChat.init(config);

// Widget is self-contained - no additional methods needed!
```

---

## 🐛 Troubleshooting

### Widget Not Showing?

1. ✅ Check browser console for errors
2. ✅ Verify `chatflowid` is correct
3. ✅ Verify `apiHost` is correct (no trailing slash)
4. ✅ Check CORS settings on your Flowise instance
5. ✅ Make sure script loads before `init()`

### Streaming Not Working?

1. ✅ Set `enableStreaming: true` in config
2. ✅ Check Flowise supports streaming for your chatflow
3. ✅ Widget will auto-fallback to non-streaming if SSE fails
4. ✅ Enable `debug: true` to see logs

### Styling Issues?

1. ✅ Widget uses scoped styles - shouldn't conflict
2. ✅ Try different themes
3. ✅ Use `primaryColor` to match your brand
4. ✅ Check z-index (widget uses `999999`)

---

## 🌟 Why Beautiful Flowise Chat?

### vs Default Flowise Embed

| Feature | Beautiful Flowise | Default Embed |
|---------|------------------|---------------|
| Smooth Streaming | ✅ PRIMUS-V2 engine | ❌ Basic |
| Loading Animation | ✅ Pulsing dots | ❌ None |
| Markdown Formatting | ✅ Full support | ⚠️ Limited |
| Themes | ✅ 7 professional | ❌ 1 basic |
| Custom Colors | ✅ Any color | ⚠️ Limited |
| Mobile Responsive | ✅ Optimized | ⚠️ Basic |
| Code Highlighting | ✅ Yes | ❌ No |
| Bubble Design | ✅ Modern | ⚠️ Basic |
| No Avatars | ✅ Clean | ❌ Always shown |
| Production Ready | ✅ Battle-tested | ⚠️ Basic |

---

## 📦 CDN Versions

### Latest (v1.4.2)
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@7460bcf/dist/chat.js"></script>
```

### Always Latest (auto-updates)
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@main/dist/chat.js"></script>
```

### Specific Version (recommended for production)
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@7460bcf/dist/chat.js"></script>
```

---

## 🧪 Test Page

Want to try before implementing? Check out our interactive test page:

👉 [**Live Demo**](https://raw.githubusercontent.com/unknownfriend00007/beautiful-flowise-chat/main/test-themes.html)

*Download and open in browser to test all themes!*

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📝 Changelog

### v1.4.2 (Latest)
- ➕ Added "Powered by RPS" branding with mailto link
- 🎨 Hover effect on footer link

### v1.4.1
- ✨ Added pulsing loading dots animation
- 🎯 Dots appear immediately when message sent
- 🌊 Smooth transition to streaming text

### v1.4.0
- 🚀 PRIMUS-V2 streaming engine implemented
- 💫 Buttery smooth character-by-character updates
- 🎯 Pre-created placeholder messages
- 🛡️ Smart buffer handling
- 💪 Auto-fallback system

### v1.3.2
- 🚫 Removed avatars from messages
- 📝 Fixed markdown header formatting (### hidden)
- 🎨 Better spacing and layout

### v1.3.1
- 🐛 Fixed blank bubble issue
- ✨ Message appears only when first token arrives
- 🎨 Improved streaming flow

### v1.3.0
- ⚡ Streaming now works perfectly
- 📝 Markdown formatting for all responses
- 👀 User messages now visible
- 🔧 Auto-fallback to non-streaming

### v1.1.2
- 🐛 Fixed streaming cursor
- 📝 Added markdown support
- ✨ Improved formatting

---

## 📄 License

MIT License - Free for personal and commercial use

Copyright (c) 2025 RPS

---

## 🔗 Links

- 📧 [Contact RPS](mailto:mail.rps.active@proton.me)
- 🐙 [GitHub Repository](https://github.com/unknownfriend00007/beautiful-flowise-chat)
- 🧪 [Test Page](https://raw.githubusercontent.com/unknownfriend00007/beautiful-flowise-chat/main/test-themes.html)
- 🐛 [Report Issues](https://github.com/unknownfriend00007/beautiful-flowise-chat/issues)
- 💡 [Request Features](https://github.com/unknownfriend00007/beautiful-flowise-chat/issues/new)

---

## 💖 Credits

**Created by RPS** with inspiration from:
- 🚀 PRIMUS-V2 streaming architecture
- 🎨 Modern UI/UX principles
- 💬 Real-world production requirements

---

<div align="center">

### ⭐ Star this repo if you find it useful!

**Powered by RPS** • [mail.rps.active@proton.me](mailto:mail.rps.active@proton.me)

</div>