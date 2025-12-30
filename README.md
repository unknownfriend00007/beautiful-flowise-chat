# 🎨 Beautiful Flowise Chat v2.0.0

> A modern, buttery-smooth chat widget for Flowise AI with **dual-mode support**, **perfect memory**, **smooth streaming**, **markdown support**, and **full customization**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange.svg)](https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@549b123/dist/chat.js)
[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/unknownfriend00007/beautiful-flowise-chat)
[![Powered by RPS](https://img.shields.io/badge/Powered%20by-RPS-blueviolet.svg)](mailto:mail.rps.active@proton.me)

---

## 🆕 What's New in v2.0.0

- 🎨 **Custom Theme** - Full control over all colors (header, messages, background)
- 🌈 **Flexible Color Formats** - Use hex (`#7c3aed`) or rgba (`rgba(124,58,237,0.15)`)
- ✍️ **User Message Text Color** - Configurable for perfect visibility
- 🖼️ **Chat Background Color** - Customize entire window background
- ⚡ **Performance** - Faster streaming, reduced buffering

---

## 🚀 Quick Start

### CDN Link (v2.0.0)
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@549b123/dist/chat.js"></script>
```

### Basic Popup Mode
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@549b123/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.init({
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com"
});
</script>
```

### Basic Full-Screen Mode
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@549b123/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.initFull({
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com"
});
</script>
```

---

## ⚙️ Configuration Examples

### 1️⃣ Popup Mode (All Options with Preset Theme)

```javascript
BeautifulFlowiseChat.init({
    // Required
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com",
    
    // Appearance
    theme: "gradient",         // modern, cloudflare, intercom, gradient, glassmorphism, dark, minimal
    primaryColor: "#667eea",   // Override theme color (optional)
    position: "bottom-right",  // bottom-right or bottom-left
    avatar: "🤖",              // Bot avatar emoji/text
    
    // Content
    title: "AI Assistant",
    subtitle: "Online",
    welcomeMessage: "Hi! How can I help you today?",
    placeholder: "Type your message...",
    
    // Features
    enableStreaming: true,     // Real-time streaming
    enableMarkdown: true,      // Format bot responses
    showTimestamp: true,       // Show message times
    
    // Misc
    debug: false               // Console logging
});
```

### 2️⃣ Full-Screen Mode (All Options with Preset Theme)

```javascript
BeautifulFlowiseChat.initFull({
    // Required
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com",
    
    // Appearance
    theme: "dark",             // modern, cloudflare, intercom, gradient, glassmorphism, dark, minimal
    primaryColor: "#6366f1",   // Override theme color (optional)
    avatar: "🤖",              // Bot avatar emoji/text
    
    // Content
    title: "AI Assistant",
    subtitle: "Online",
    welcomeMessage: "Hi! How can I help you today?",
    placeholder: "Type your message...",
    
    // Features
    enableStreaming: true,     // Real-time streaming
    enableMarkdown: true,      // Format bot responses
    showTimestamp: true,       // Show message times
    
    // Misc
    debug: false               // Console logging
});
```

### 3️⃣ Custom Theme (Full Color Control)

```javascript
BeautifulFlowiseChat.initFull({
    // Required
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com",
    
    // Custom Theme
    theme: "custom",
    primaryColor: "#7c3aed",              // Header, buttons, accents (hex/rgba/rgb)
    customUserMessageBg: "#c4b5fd",       // User message background (optional)
    customUserMessageText: "#1f2937",     // User message text color (optional)
    customChatBg: "#ffffff",              // Chat window background (optional)
    
    // Content
    title: "My AI Assistant",
    subtitle: "Always here to help",
    welcomeMessage: "Hello! Ask me anything.",
    placeholder: "Type your message...",
    avatar: "🤖",
    
    // Features
    enableStreaming: true,
    enableMarkdown: true,
    showTimestamp: true,
    
    // Misc
    debug: false
});
```

---

## 🎨 Themes

### Pre-Made Themes

```javascript
theme: "modern"         // Indigo gradient (default)
theme: "cloudflare"     // Orange
theme: "intercom"       // Blue
theme: "gradient"       // Purple to pink
theme: "glassmorphism"  // Transparent with blur
theme: "dark"           // Dark mode
theme: "minimal"        // Black & white
theme: "custom"         // Full color control
```

### Custom Theme Details

When using `theme: "custom"`, you have full control:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `primaryColor` | string | `#6366f1` | Header, buttons, accents |
| `customUserMessageBg` | string | Auto-generated | User message background |
| `customUserMessageText` | string | `#1f2937` | User message text |
| `customChatBg` | string | `#ffffff` | Chat window background |

**Color Formats:** All options support hex (`#7c3aed`), rgb (`rgb(124,58,237)`), or rgba (`rgba(124,58,237,0.5)`)

**Auto-Generation:** If you only specify `primaryColor`, the widget automatically creates a light tint (15% opacity) for user message background.

### Custom Theme Examples

#### Purple Brand
```javascript
theme: "custom",
primaryColor: "#7c3aed"  // That's it! Auto-generates light purple for messages
```

#### Corporate Blue
```javascript
theme: "custom",
primaryColor: "#0066cc",
customUserMessageBg: "#cce5ff",
customUserMessageText: "#003d7a"
```

#### Dark Mode
```javascript
theme: "custom",
primaryColor: "#a78bfa",
customUserMessageBg: "#4c1d95",
customUserMessageText: "#e0e7ff",
customChatBg: "#1f2937"
```

---

## 📋 Configuration Reference

### Required Options

| Option | Type | Description |
|--------|------|-------------|
| `chatflowid` | string | Your Flowise chatflow ID |
| `apiHost` | string | Your Flowise instance URL |

### Appearance

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `theme` | string | `"modern"` | Theme name |
| `primaryColor` | string | `"#6366f1"` | Main color (hex/rgb/rgba) |
| `position` | string | `"bottom-right"` | Popup position (popup only) |
| `avatar` | string | `"🤖"` | Bot avatar |

### Custom Theme Colors

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `customUserMessageBg` | string | Auto | User message background |
| `customUserMessageText` | string | `"#1f2937"` | User message text |
| `customChatBg` | string | `"#ffffff"` | Chat window background |

### Content

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `title` | string | `"AI Assistant"` | Header title |
| `subtitle` | string | `"Online"` | Header subtitle |
| `welcomeMessage` | string | Auto | First bot message |
| `placeholder` | string | Auto | Input placeholder |
| `sendButtonText` | string | `"➤"` | Send button text |

### Features

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enableStreaming` | boolean | `true` | Real-time streaming |
| `enableMarkdown` | boolean | `true` | Format responses |
| `showTimestamp` | boolean | `true` | Show message times |
| `clearChatOnReload` | boolean | `false` | Clear history on refresh |

### Other

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `debug` | boolean | `false` | Console logging |

---

## ✨ Features

### Memory & Sessions
- Bot remembers conversation context
- Chat sessions persist across page reloads
- Sessions visible in Flowise dashboard
- Proper UUID-based chat IDs

### Streaming
- Real-time character-by-character responses
- Smooth streaming with blinking cursor
- Pulsing dots while waiting
- Auto-fallback to non-streaming if needed

### Markdown Support
- **Bold** and *italic* text
- `Inline code` and code blocks
- Numbered and bullet lists
- Links and headers
- Preserved line breaks

### Customization
- 8 professional themes
- Custom colors (hex/rgb/rgba)
- Popup or full-screen modes
- Custom welcome messages
- Configurable positioning
- Custom avatars

---

## 🎭 Modes

### Popup Mode
- Bottom-right or bottom-left bubble
- Click to open/close
- 400×600px window
- Minimize button
- Perfect for websites

### Full-Screen Mode
- Fills entire viewport (100vw×100vh)
- Always visible
- No toggle button
- Auto-focus on load
- Perfect for dedicated chat pages

---

## 🐛 Troubleshooting

### Widget Not Showing
- Check browser console for errors
- Verify `chatflowid` and `apiHost` are correct
- Check CORS settings on Flowise instance
- Ensure script loads before init

### Memory Not Working
- Check Flowise has Buffer Memory node
- Enable `debug: true` to see chatId in console
- Verify sessions in Flowise dashboard

### Streaming Issues
- Set `enableStreaming: true`
- Check Flowise supports streaming
- Widget auto-falls back if streaming fails
- Enable `debug: true` for logs

### Custom Theme Not Applying
- Ensure `theme: "custom"` is set
- Use valid color formats (hex/rgb/rgba)
- Clear browser cache (Ctrl + Shift + R)
- Check console with `debug: true`

---

## 📦 CDN

### Pinned Version (Recommended)
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@549b123/dist/chat.js"></script>
```

### Latest (Auto-updates)
⚠️ Not recommended for production
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@main/dist/chat.js"></script>
```

### Purge Cache
```
https://purge.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@549b123/dist/chat.js
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📝 Changelog

### v2.0.0 - 2025-12-30
- 🎨 Custom theme with full color control
- 🌈 Hex & RGBA color format support
- ✍️ User message text color option
- 🖼️ Chat background color option
- ⚡ Performance optimizations

### v1.9.9 - 2025-12-30
- 🎨 Initial custom theme
- Primary color customization

### v1.9.8 - 2025-12-30
- ⚡ Faster streaming
- 🚀 Immediate token display
- 📊 Throttled scroll updates

### v1.6.0 - 2025-12-30
- 🎯 Dual-mode support
- 🪟 Popup mode with `init()`
- 📺 Full-screen mode with `initFull()`

### v1.5.1 - 2025-12-30
- 🧠 Perfect memory implementation
- 🔍 Chat sessions visible in Flowise UI
- 🎲 UUID-based chat IDs

---

## 📄 License

MIT License - Free for personal and commercial use

Copyright (c) 2025 RPS

---

## 🔗 Links

- 📧 [Contact](mailto:mail.rps.active@proton.me)
- 🐙 [GitHub](https://github.com/unknownfriend00007/beautiful-flowise-chat)
- 🐛 [Issues](https://github.com/unknownfriend00007/beautiful-flowise-chat/issues)
- 💡 [Feature Requests](https://github.com/unknownfriend00007/beautiful-flowise-chat/issues/new)

---

<div align="center">

### ⭐ Star this repo if you find it useful!

**Powered by RPS** • [mail.rps.active@proton.me](mailto:mail.rps.active@proton.me)

</div>