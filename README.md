# 🎨 Beautiful Flowise Chat v2.0.0

> A modern, buttery-smooth chat widget for Flowise AI with **dual-mode support**, **perfect memory**, **smooth streaming**, **markdown support**, and **full customization**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange.svg)](https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@9a5195d/dist/chat.js)
[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/unknownfriend00007/beautiful-flowise-chat)
[![Powered by RPS](https://img.shields.io/badge/Powered%20by-RPS-blueviolet.svg)](mailto:mail.rps.active@proton.me)

---

## 🆕 What's New in v2.0.0

### 🎨 Custom Theme - Full Control!
- 🖌️ **Complete Customization** - Define your entire color scheme
- 🎯 **Primary Color** - Header, buttons, and accents
- 💬 **User Message Colors** - Background AND text color
- 🎨 **Chat Background** - Custom window background color
- ✅ **Always Visible Text** - No more readability issues!

---

## 🚀 Quick Start

### Latest CDN (v2.0.0)
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@9a5195d/dist/chat.js"></script>
```

### 🪟 Popup Mode (Bottom-Right Bubble)

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@9a5195d/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.init({
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com"
});
</script>
```

### 📺 Full-Screen Mode (Fills Entire Page)

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@9a5195d/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.initFull({
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com"
});
</script>
```

---

## 🎨 The NEW Custom Theme

### Complete Customization with One Theme!

The `custom` theme gives you **full control** over ALL colors:

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@9a5195d/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.initFull({
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com",
    
    // Use custom theme
    theme: 'custom',
    
    // Define your brand color (header, buttons, accents)
    primaryColor: '#7c3aed',  // Your main color!
    
    // Optional: Customize user message appearance
    customUserMessageBg: 'rgba(124, 58, 237, 0.15)',  // Light tint of your color
    customUserMessageText: '#1f2937',  // Dark gray for visibility
    
    // Optional: Customize chat background
    customChatBg: '#ffffff',  // White background
    
    title: 'My AI Assistant'
});
</script>
```

### Custom Theme Options Explained

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `theme` | string | - | Set to `'custom'` to use custom theme |
| `primaryColor` | string | `'#6366f1'` | **Header bar color** - Also used for buttons & accents |
| `customUserMessageBg` | string | Auto (15% opacity of primary) | **User message background** - Can be any color/rgba |
| `customUserMessageText` | string | `'#1f2937'` | **User message text color** - Ensures visibility |
| `customChatBg` | string | `'#ffffff'` | **Chat window background** - Messages area, input, footer |

### Quick Examples

#### Example 1: Purple Brand (Auto Background)
```javascript
BeautifulFlowiseChat.initFull({
    chatflowid: "...",
    apiHost: "...",
    theme: 'custom',
    primaryColor: '#7c3aed'  // That's it! Auto-generates light tint
});
```

#### Example 2: Orange with Dark Background
```javascript
BeautifulFlowiseChat.initFull({
    chatflowid: "...",
    apiHost: "...",
    theme: 'custom',
    primaryColor: '#ff6b35',                    // Orange header
    customUserMessageBg: 'rgba(255, 107, 53, 0.2)',  // Light orange
    customUserMessageText: '#1f2937',           // Dark text
    customChatBg: '#f3f4f6'                     // Light gray background
});
```

#### Example 3: Blue Corporate (White Text on User Messages)
```javascript
BeautifulFlowiseChat.initFull({
    chatflowid: "...",
    apiHost: "...",
    theme: 'custom',
    primaryColor: '#0066cc',                    // Corporate blue
    customUserMessageBg: '#0066cc',             // Solid blue user messages
    customUserMessageText: '#ffffff',           // White text for contrast
    customChatBg: '#ffffff'                     // White background
});
```

#### Example 4: Dark Mode Custom
```javascript
BeautifulFlowiseChat.initFull({
    chatflowid: "...",
    apiHost: "...",
    theme: 'custom',
    primaryColor: '#a78bfa',                    // Light purple for dark mode
    customUserMessageBg: 'rgba(167, 139, 250, 0.25)',  // Light purple tint
    customUserMessageText: '#e0e7ff',           // Very light purple text
    customChatBg: '#1f2937'                     // Dark background
});
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
| **Custom Theme** | ✅ Full | ✅ Full |
| **Best For** | Landing pages | Dedicated chat |

---

## ✨ Features

### 🎨 Custom Theme (NEW!)
- **One Color, Everything Styled** - Set primary color and go!
- **Full Customization** - Background, text, everything adjustable
- **Auto-Generated Tints** - Smart light versions for messages
- **Dark Mode Ready** - Works with any color scheme
- **Always Readable** - Configurable text colors

### 🧠 Memory & Sessions
- **Perfect Retention** - Bot remembers your conversation
- **Chat ID Implementation** - Proper Flowise API format
- **Flowise UI Visible** - Sessions show in dashboard
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

### 🎨 Pre-Made Themes
- 🎯 **Modern** - Default gradient theme (indigo)
- 🔥 **Cloudflare** - Orange inspired design
- 💙 **Intercom** - Blue professional style
- 🌈 **Gradient** - Purple to pink gradient
- ✨ **Glassmorphism** - Transparent with blur
- 🌙 **Dark** - Dark mode friendly
- ⚫ **Minimal** - Black & white clean
- 🎨 **Custom** - Full control over all colors!

### 🎛️ Customization
- 🎨 Custom primary colors
- 📍 Positioning (bottom-right/left) - popup only
- 💬 Custom welcome messages
- 🕐 Optional timestamps
- 🤖 Custom avatar emoji
- 🎭 Two display modes
- 🖌️ Full color control with custom theme

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
    
    <script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@9a5195d/dist/chat.js"></script>
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

### Example 2: Full-Screen Mode with Custom Theme

```html
<!DOCTYPE html>
<html>
<head>
    <title>Chat with AI</title>
</head>
<body style="margin: 0; padding: 0;">
    
    <script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@9a5195d/dist/chat.js"></script>
    <script>
    BeautifulFlowiseChat.initFull({
        chatflowid: "a32ee1fe-b6bd-43e0-846b-d95b48a5ad6f",
        apiHost: "https://ruvatron-flowhybrid-3.hf.space",
        title: "AI Assistant",
        
        // Use custom theme with your brand color
        theme: "custom",
        primaryColor: "#10b981",  // Green brand color
        customUserMessageText: "#064e3b"  // Dark green for visibility
    });
    </script>
</body>
</html>
```

### Example 3: With All Options

```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@9a5195d/dist/chat.js"></script>
<script>
BeautifulFlowiseChat.init({
    // Required
    chatflowid: "your-chatflow-id",
    apiHost: "https://your-flowise-instance.com",
    
    // Streaming & Features
    enableStreaming: true,     // Enable smooth streaming (default: true)
    enableMarkdown: true,      // Format responses (default: true)
    
    // Appearance
    theme: "custom",           // Use custom theme for full control
    primaryColor: "#667eea",   // Your brand color
    
    // Custom theme colors (optional)
    customUserMessageBg: "rgba(102, 126, 234, 0.15)",
    customUserMessageText: "#1f2937",
    customChatBg: "#ffffff",
    
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

### Pre-Made Themes

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

// Custom - YOUR colors!
theme: "custom"
primaryColor: "#your-color"
```

### Custom Colors (For Pre-Made Themes)

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
| `theme` | string | `"modern"` | Theme name (use `"custom"` for full control) |
| `primaryColor` | string | `"#6366f1"` | Main color (header, buttons, accents) |
| `customUserMessageBg` | string | Auto (15% primary) | User message background color |
| `customUserMessageText` | string | `"#1f2937"` | User message text color |
| `customChatBg` | string | `"#ffffff"` | Chat window background color |
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

1. ✅ Update to v2.0.0 (has proper chatId implementation)
2. ✅ Check Flowise has Buffer Memory node
3. ✅ Enable `debug: true` to see chatId in console
4. ✅ Check Flowise UI to verify sessions are saving

### Streaming Not Working?

1. ✅ Set `enableStreaming: true` in config
2. ✅ Check Flowise supports streaming for your chatflow
3. ✅ Widget will auto-fallback to non-streaming if SSE fails
4. ✅ Enable `debug: true` to see logs

### Custom Theme Colors Not Applying?

1. ✅ Make sure you set `theme: "custom"` (not "modern" etc.)
2. ✅ Use valid color formats: hex (`#ff0000`) or rgba (`rgba(255,0,0,0.5)`)
3. ✅ Clear browser cache with `Ctrl + Shift + R`
4. ✅ Check console for errors with `debug: true`

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
| **Themes** | ✅ 8 professional | ❌ 1 basic |
| **Custom Colors** | ✅ Full control | ⚠️ Limited |
| **Mobile** | ✅ Optimized | ⚠️ Basic |
| **Code Highlighting** | ✅ Yes | ❌ No |
| **Clean Design** | ✅ Modern | ⚠️ Basic |
| **Production Ready** | ✅ Battle-tested | ⚠️ Basic |

---

## 📦 CDN Versions

### Latest (v2.0.0) - Recommended
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@9a5195d/dist/chat.js"></script>
```

### Always Latest (auto-updates)
⚠️ **Not recommended for production** - may break with updates
```html
<script src="https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@main/dist/chat.js"></script>
```

### Purge CDN Cache
If you're seeing an old version, purge the cache:
```
https://purge.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@9a5195d/dist/chat.js
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

### v2.0.0 (Latest) - 2025-12-30
- 🎨 **Custom Theme Enhanced** - Full color customization
- 🖌️ `customUserMessageBg` - User message background color
- ✍️ `customUserMessageText` - User message text color (visibility!)
- 🎨 `customChatBg` - Chat window background color
- 🤖 Auto-generates light tint if colors not specified
- ⚡ Performance optimizations for faster streaming

### v1.9.9 - 2025-12-30
- 🎨 **Custom Theme** - Single color customization
- Primary color controls everything
- Separate from other themes

### v1.9.8 - 2025-12-30
- ⚡ **Performance** - Faster streaming, reduced buffering
- 🚀 Immediate token display
- 📊 Throttled scroll updates

### v1.6.0 - 2025-12-30
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
- 🖌️ Full customization capabilities

---

<div align="center">

### ⭐ Star this repo if you find it useful!

**Powered by RPS** • [mail.rps.active@proton.me](mailto:mail.rps.active@proton.me)

</div>