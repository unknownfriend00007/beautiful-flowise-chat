/**
 * Beautiful Flowise Chat Widget v1.9.7
 * Supports both Popup and Full-Screen modes
 * Created by RPS
 */

(function() {
    'use strict';

    const defaults = {
        theme: 'modern',
        primaryColor: '#6366f1',
        position: 'bottom-right',
        width: '400px',
        height: '600px',
        title: 'AI Assistant',
        subtitle: 'Online',
        welcomeMessage: 'Hi! How can I help you today?',
        placeholder: 'Type your message...',
        sendButtonText: '\u27a4',
        showTimestamp: true,
        enableStreaming: true,
        enableMarkdown: true,
        clearChatOnReload: false,
        debug: false,
        avatar: '\ud83e\udd16',
        mode: 'popup'
    };

    const styles = `
:root {
    --bf-primary-color: #6366f1;
    --bf-primary-dark: #4f46e5;
}

.bf-container * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.bf-container {
    position: fixed;
    z-index: 999999;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.bf-mode-popup {
    bottom: 20px;
    right: 20px;
}

.bf-mode-popup.bf-bottom-left { 
    bottom: 20px; 
    left: 20px;
    right: auto;
}

.bf-mode-fullscreen {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    bottom: auto;
    right: auto;
}

.bf-chat-button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--bf-primary-color), var(--bf-primary-dark));
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    transition: transform 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bf-mode-fullscreen .bf-chat-button {
    display: none !important;
}

.bf-chat-button:hover { transform: scale(1.1); }
.bf-button-icon { width: 28px; height: 28px; color: white; stroke-width: 2; }

.bf-chat-window {
    position: absolute;
    background: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: slideUp 0.3s ease;
}

.bf-mode-popup .bf-chat-window {
    bottom: 80px;
    right: 0;
    width: 400px;
    max-width: calc(100vw - 40px);
    height: 600px;
    max-height: calc(100vh - 120px);
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
}

.bf-mode-popup.bf-bottom-left .bf-chat-window {
    left: 0;
    right: auto;
}

.bf-mode-fullscreen .bf-chat-window {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    box-shadow: none;
    display: flex !important;
    animation: none;
}

@keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.bf-header {
    background: linear-gradient(135deg, var(--bf-primary-color), var(--bf-primary-dark));
    color: white;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}

.bf-header-content { display: flex; align-items: center; gap: 12px; flex: 1; }

.bf-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.bf-title { font-size: 16px; font-weight: 600; }
.bf-subtitle { font-size: 12px; opacity: 0.9; }

.bf-header-actions {
    display: flex;
    gap: 8px;
    align-items: center;
}

.bf-reset-btn {
    background: rgba(255,255,255,0.2);
    border: none;
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
}

.bf-reset-btn:hover {
    background: rgba(255,255,255,0.3);
}

.bf-minimize-btn {
    background: rgba(255,255,255,0.2);
    border: none;
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bf-mode-fullscreen .bf-minimize-btn {
    display: none;
}

.bf-messages {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background: #f9fafb;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.bf-messages::-webkit-scrollbar { width: 6px; }
.bf-messages::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }

.bf-message {
    display: flex !important;
    animation: fadeIn 0.3s;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.bf-message.bf-bot-message { 
    justify-content: flex-start !important;
}

.bf-message.bf-user-message { 
    justify-content: flex-end !important;
}

.bf-message-content {
    display: flex !important;
    flex-direction: column !important;
    max-width: 75% !important;
    margin: 0 !important;
    padding: 0 !important;
}

.bf-bot-message .bf-message-content {
    align-items: flex-start !important;
}

.bf-user-message .bf-message-content {
    align-items: flex-end !important;
}

.bf-message-text {
    padding: 12px 16px !important;
    border-radius: 16px;
    font-size: 14px;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: keep-all;
    hyphens: none;
    white-space: pre-wrap;
    display: inline-block !important;
    width: fit-content !important;
    max-width: 100% !important;
    text-align: left !important;
    margin: 0 !important;
}

.bf-bot-message .bf-message-text {
    background: white;
    color: #1f2937;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.bf-user-message .bf-message-text {
    background: rgba(99, 102, 241, 0.15) !important;
    color: #1f2937 !important;
    border: none !important;
    box-shadow: none !important;
}

.bf-message-time {
    font-size: 11px;
    color: #6b7280;
    margin-top: 4px;
    padding: 0 4px;
}

.bf-bot-message .bf-message-text p { margin: 0 0 10px 0; }
.bf-bot-message .bf-message-text p:last-child { margin-bottom: 0; }
.bf-bot-message .bf-message-text strong { font-weight: 600; color: #111827; }
.bf-bot-message .bf-message-text em { font-style: italic; }
.bf-bot-message .bf-message-text code {
    background: #f3f4f6;
    padding: 3px 7px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: #be123c;
}
.bf-bot-message .bf-message-text pre {
    background: #1f2937;
    color: #f9fafb;
    padding: 14px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 10px 0;
}
.bf-bot-message .bf-message-text pre code {
    background: transparent;
    color: #f9fafb;
    padding: 0;
}
.bf-bot-message .bf-message-text ul,
.bf-bot-message .bf-message-text ol {
    margin: 10px 0;
    padding-left: 24px;
}
.bf-bot-message .bf-message-text li { margin: 6px 0; line-height: 1.5; }
.bf-bot-message .bf-message-text a {
    color: var(--bf-primary-color);
    text-decoration: underline;
}
.bf-bot-message .bf-message-text h1,
.bf-bot-message .bf-message-text h2,
.bf-bot-message .bf-message-text h3 {
    font-weight: 600;
    color: #111827;
    margin: 14px 0 8px 0;
    line-height: 1.3;
}
.bf-bot-message .bf-message-text h1 { font-size: 18px; }
.bf-bot-message .bf-message-text h2 { font-size: 16px; }
.bf-bot-message .bf-message-text h3 { font-size: 15px; }

.bf-loading-dots {
    display: flex;
    align-items: center;
    gap: 4px;
}

.bf-loading-dots span {
    width: 8px;
    height: 8px;
    background: var(--bf-primary-color);
    border-radius: 50%;
    animation: pulse-dot 1.4s ease-in-out infinite;
}

.bf-loading-dots span:nth-child(1) { animation-delay: 0s; }
.bf-loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.bf-loading-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes pulse-dot {
    0%, 60%, 100% { 
        transform: scale(0.8);
        opacity: 0.5;
    }
    30% { 
        transform: scale(1.2);
        opacity: 1;
    }
}

.bf-streaming .bf-cursor {
    display: inline;
    animation: blink-cursor 1s step-end infinite;
    margin-left: 2px;
    font-weight: bold;
    color: var(--bf-primary-color);
}

@keyframes blink-cursor {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

.bf-input-container {
    padding: 16px;
    background: white;
    border-top: 1px solid #e5e7eb;
    display: flex;
    gap: 10px;
    align-items: flex-end;
    flex-shrink: 0;
}

.bf-input {
    flex: 1;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    padding: 12px 16px;
    font-size: 14px;
    font-family: inherit;
    resize: none;
    outline: none;
    transition: border-color 0.2s;
    max-height: 120px;
    min-height: 44px;
    color: #1f2937;
}

.bf-input:focus { border-color: var(--bf-primary-color); }

.bf-send-btn {
    background: linear-gradient(135deg, var(--bf-primary-color), var(--bf-primary-dark));
    color: white;
    border: none;
    border-radius: 12px;
    width: 44px;
    height: 44px;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    flex-shrink: 0;
}

.bf-send-btn:hover { transform: scale(1.05); }
.bf-send-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

.bf-footer {
    padding: 8px;
    text-align: center;
    background: #f9fafb;
    border-top: 1px solid #e5e7eb;
    flex-shrink: 0;
}

.bf-branding {
    font-size: 11px;
    color: #6b7280;
    text-decoration: none;
    transition: color 0.2s;
}

.bf-branding:hover {
    color: var(--bf-primary-color);
}

/* THEMES */
.bf-theme-cloudflare { 
    --bf-primary-color: #f38020; 
    --bf-primary-dark: #d96b0f; 
}
.bf-theme-cloudflare .bf-user-message .bf-message-text {
    background: rgba(243, 128, 32, 0.15) !important;
    color: #1f2937 !important;
    border: none !important;
    box-shadow: none !important;
}

.bf-theme-intercom { 
    --bf-primary-color: #1f8ded; 
    --bf-primary-dark: #1273c5; 
}
.bf-theme-intercom .bf-user-message .bf-message-text {
    background: rgba(31, 141, 237, 0.15) !important;
    color: #1f2937 !important;
    border: none !important;
    box-shadow: none !important;
}

.bf-theme-gradient { 
    --bf-primary-color: #667eea; 
    --bf-primary-dark: #764ba2; 
}
.bf-theme-gradient .bf-user-message .bf-message-text {
    background: rgba(102, 126, 234, 0.15) !important;
    color: #1f2937 !important;
    border: none !important;
    box-shadow: none !important;
}

.bf-theme-glassmorphism .bf-chat-window {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.bf-theme-glassmorphism .bf-user-message .bf-message-text {
    background: rgba(99, 102, 241, 0.15) !important;
    color: #1f2937 !important;
    border: none !important;
    box-shadow: none !important;
    backdrop-filter: blur(10px);
}

.bf-theme-dark { 
    --bf-primary-color: #6366f1; 
    --bf-primary-dark: #4f46e5; 
}
.bf-theme-dark .bf-chat-window { background: #1f2937; }
.bf-theme-dark .bf-messages { background: #111827; }
.bf-theme-dark .bf-bot-message .bf-message-text { 
    background: #374151 !important; 
    color: #f9fafb !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
}
.bf-theme-dark .bf-user-message .bf-message-text {
    background: rgba(99, 102, 241, 0.25) !important;
    color: #e0e7ff !important;
    border: none !important;
    box-shadow: none !important;
}
.bf-theme-dark .bf-input { 
    background: #374151; 
    color: #f9fafb; 
    border-color: #4b5563; 
}
.bf-theme-dark .bf-input::placeholder {
    color: #9ca3af;
}
.bf-theme-dark .bf-input-container { 
    background: #1f2937; 
    border-top-color: #374151; 
}
.bf-theme-dark .bf-footer { 
    background: #1f2937; 
    border-top-color: #374151; 
}
.bf-theme-dark .bf-branding { color: #9ca3af; }
.bf-theme-dark .bf-message-time { color: #9ca3af; }

.bf-theme-minimal { 
    --bf-primary-color: #000000; 
    --bf-primary-dark: #1f2937; 
}
.bf-theme-minimal .bf-user-message .bf-message-text {
    background: rgba(0, 0, 0, 0.06) !important;
    color: #1f2937 !important;
    border: none !important;
    box-shadow: none !important;
}
    `;

    class BeautifulFlowiseChat {
        constructor(config) {
            this.config = { ...defaults, ...config };
            this.chatflowid = config.chatflowid;
            this.apiHost = config.apiHost;
            
            // Storage key - using official Flowise pattern
            this.storageKey = `${this.chatflowid}_INTERNAL`;
            
            this.isOpen = this.config.mode === 'fullscreen';
            this.currentStreamingMessageId = null;
            this.messages = [];
            
            // DON'T generate chatId - let Flowise create it!
            this.chatId = null;
            
            this.init();
        }

        init() {
            this.injectStyles();
            this.createWidget();
            this.attachEventListeners();
            
            // Load state from localStorage
            this.loadFromStorage();
            
            this.log('Chat ID:', this.chatId || 'Not yet assigned (will be created by Flowise)');
            this.log('Mode:', this.config.mode);
            this.log('Messages loaded:', this.messages.length);
        }

        log(...args) {
            if (this.config.debug) console.log('[BeautifulFlowise]', ...args);
        }

        loadFromStorage() {
            if (this.config.clearChatOnReload) {
                this.messages = [];
                this.chatId = null;
                this.initializeWithWelcome();
                return;
            }

            try {
                const stored = localStorage.getItem(this.storageKey);
                if (stored) {
                    const data = JSON.parse(stored);
                    
                    // Load chatId if exists
                    if (data.chatId) {
                        this.chatId = data.chatId;
                        this.log('Loaded chatId from storage:', this.chatId);
                    }
                    
                    // Load messages if exists
                    if (data.messages && Array.isArray(data.messages) && data.messages.length > 0) {
                        this.messages = data.messages;
                        this.restoreMessages();
                    } else {
                        // No messages in storage, show welcome
                        this.initializeWithWelcome();
                    }
                } else {
                    // No storage, show welcome
                    this.initializeWithWelcome();
                }
            } catch (e) {
                this.log('Error loading from storage:', e);
                this.initializeWithWelcome();
            }
        }

        initializeWithWelcome() {
            this.messages = [];
            if (this.config.welcomeMessage) {
                // Add welcome message to BOTH UI and messages array
                this.messages.push({ role: 'bot', content: this.config.welcomeMessage });
                this.addMessageToUI(this.config.welcomeMessage, 'bot');
                // Save the welcome message to storage
                this.saveToStorage();
            }
        }

        saveToStorage() {
            if (this.config.clearChatOnReload) return;
            
            try {
                const data = {
                    chatId: this.chatId,
                    messages: this.messages
                };
                localStorage.setItem(this.storageKey, JSON.stringify(data));
                this.log('Saved to storage - chatId:', this.chatId, 'messages:', this.messages.length);
            } catch (e) {
                this.log('Error saving to storage:', e);
            }
        }

        restoreMessages() {
            const messagesContainer = document.getElementById('bf-messages');
            messagesContainer.innerHTML = '';
            
            this.messages.forEach(msg => {
                this.addMessageToUI(msg.content, msg.role);
            });
            
            this.scrollToBottom();
            this.log('Restored', this.messages.length, 'messages');
        }

        resetConversation() {
            if (confirm('Are you sure you want to clear the chat history?')) {
                // Clear storage
                localStorage.removeItem(this.storageKey);
                
                // Reset state
                this.chatId = null;
                this.messages = [];
                
                // Clear UI
                const messagesContainer = document.getElementById('bf-messages');
                messagesContainer.innerHTML = '';
                
                // Show welcome message
                this.initializeWithWelcome();
                
                this.log('Chat reset. ChatId cleared - will be assigned by Flowise on next message');
            }
        }

        injectStyles() {
            if (document.getElementById('beautiful-flowise-styles')) return;
            const styleSheet = document.createElement('style');
            styleSheet.id = 'beautiful-flowise-styles';
            styleSheet.textContent = styles;
            document.head.appendChild(styleSheet);
        }

        createWidget() {
            const container = document.createElement('div');
            container.id = 'beautiful-flowise-container';
            container.className = `bf-container bf-mode-${this.config.mode} bf-${this.config.position} bf-theme-${this.config.theme}`;
            container.style.setProperty('--bf-primary-color', this.config.primaryColor);
            
            const chatWindowDisplay = this.config.mode === 'fullscreen' ? 'flex' : 'none';
            
            // Don't pre-render welcome message - it will be added via loadFromStorage
            container.innerHTML = `
                <button class="bf-chat-button" id="bf-toggle-button">
                    <svg class="bf-button-icon bf-button-open" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <svg class="bf-button-icon bf-button-close" style="display: none;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div class="bf-chat-window" id="bf-chat-window" style="display: ${chatWindowDisplay};">
                    <div class="bf-header">
                        <div class="bf-header-content">
                            <div class="bf-avatar">${this.config.avatar}</div>
                            <div class="bf-header-text">
                                <div class="bf-title">${this.config.title}</div>
                                <div class="bf-subtitle">${this.config.subtitle}</div>
                            </div>
                        </div>
                        <div class="bf-header-actions">
                            <button class="bf-reset-btn" id="bf-reset" title="Reset Chat">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="1 4 1 10 7 10"></polyline>
                                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                                </svg>
                            </button>
                            <button class="bf-minimize-btn" id="bf-minimize">\u2212</button>
                        </div>
                    </div>
                    <div class="bf-messages" id="bf-messages"></div>
                    <div class="bf-input-container">
                        <textarea class="bf-input" id="bf-input" placeholder="${this.config.placeholder}" rows="1"></textarea>
                        <button class="bf-send-btn" id="bf-send">${this.config.sendButtonText}</button>
                    </div>
                    <div class="bf-footer">
                        <a href="mailto:mail.rps.active@proton.me" class="bf-branding">Powered by RPS</a>
                    </div>
                </div>
            `;
            document.body.appendChild(container);
        }

        attachEventListeners() {
            document.getElementById('bf-toggle-button').addEventListener('click', () => this.toggleChat());
            
            const minimizeBtn = document.getElementById('bf-minimize');
            if (minimizeBtn && this.config.mode === 'popup') {
                minimizeBtn.addEventListener('click', () => this.toggleChat());
            }
            
            document.getElementById('bf-reset').addEventListener('click', () => this.resetConversation());
            document.getElementById('bf-send').addEventListener('click', () => this.sendMessage());
            
            const input = document.getElementById('bf-input');
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
            input.addEventListener('input', () => {
                input.style.height = 'auto';
                input.style.height = Math.min(input.scrollHeight, 120) + 'px';
            });
            
            if (this.config.mode === 'fullscreen') {
                setTimeout(() => input.focus(), 100);
            }
        }

        toggleChat() {
            if (this.config.mode === 'fullscreen') return;
            
            this.isOpen = !this.isOpen;
            const chatWindow = document.getElementById('bf-chat-window');
            const openIcon = document.querySelector('.bf-button-open');
            const closeIcon = document.querySelector('.bf-button-close');
            if (this.isOpen) {
                chatWindow.style.display = 'flex';
                openIcon.style.display = 'none';
                closeIcon.style.display = 'block';
                document.getElementById('bf-input').focus();
            } else {
                chatWindow.style.display = 'none';
                openIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        }

        async sendMessage() {
            const input = document.getElementById('bf-input');
            const sendBtn = document.getElementById('bf-send');
            const message = input.value.trim();
            if (!message || this.currentStreamingMessageId) return;

            // Add user message
            this.addMessage(message, 'user');
            
            input.value = '';
            input.style.height = 'auto';
            sendBtn.disabled = true;

            const botMessageId = this.createPlaceholderMessage();
            this.currentStreamingMessageId = botMessageId;

            try {
                if (this.config.enableStreaming) {
                    await this.sendWithStreaming(message, botMessageId);
                } else {
                    await this.sendWithoutStreaming(message, botMessageId);
                }
            } catch (error) {
                this.log('Error:', error);
                const elem = document.getElementById(botMessageId);
                if (elem) elem.remove();
                this.addMessage('Sorry, something went wrong. Please try again.', 'bot');
            } finally {
                this.currentStreamingMessageId = null;
                sendBtn.disabled = false;
            }
        }

        async sendWithStreaming(message, botMessageId) {
            try {
                const body = { 
                    question: message, 
                    streaming: true
                };
                
                // Only send chatId if we have one
                if (this.chatId) {
                    body.chatId = this.chatId;
                }
                
                const response = await fetch(`${this.apiHost}/api/v1/prediction/${this.chatflowid}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });

                if (!response.ok) throw new Error('API failed');
                
                const contentType = response.headers.get('content-type');
                if (!contentType?.includes('text/event-stream')) {
                    const data = await response.json();
                    // Flowise returned chatId - save it!
                    if (data.chatId && data.chatId !== this.chatId) {
                        this.chatId = data.chatId;
                        this.saveToStorage();
                        this.log('\u2705 ChatId assigned by Flowise:', this.chatId);
                    }
                    const botMessage = data.text || data.answer || data.response || 'No response';
                    this.updatePlaceholderMessage(botMessageId, botMessage, false);
                    this.addMessageToStorage(botMessage, 'bot');
                    return;
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let fullText = '';
                let buffer = '';
                let streamEnded = false;

                while (!streamEnded) {
                    const { value, done } = await reader.read();
                    if (done) {
                        streamEnded = true;
                        break;
                    }

                    buffer += decoder.decode(value, { stream: true });
                    let idx;
                    
                    while ((idx = buffer.indexOf('\n')) !== -1) {
                        const line = buffer.slice(0, idx).trim();
                        buffer = buffer.slice(idx + 1);

                        if (!line || line.startsWith(':') || !line.startsWith('data:')) continue;

                        const payload = line.slice(5).trim();
                        if (payload === '[DONE]' || payload === '"[DONE]"') {
                            streamEnded = true;
                            break;
                        }

                        let token = '';
                        let metadata = null;
                        try {
                            const obj = JSON.parse(payload);
                            if (obj && typeof obj === 'object') {
                                if (obj.event === 'token' && obj.data) {
                                    token = obj.data;
                                } else if (obj.event === 'metadata' && obj.data) {
                                    metadata = obj.data;
                                } else if (typeof obj === 'string') {
                                    token = obj;
                                }
                            }
                        } catch {
                            if (payload.startsWith('"') && payload.endsWith('"')) {
                                try {
                                    token = JSON.parse(payload);
                                } catch {
                                    token = payload;
                                }
                            } else {
                                token = payload;
                            }
                        }

                        // Flowise returned chatId in metadata - save it!
                        if (metadata && metadata.chatId && metadata.chatId !== this.chatId) {
                            this.chatId = metadata.chatId;
                            this.saveToStorage();
                            this.log('\u2705 ChatId assigned by Flowise (metadata):', this.chatId);
                        }

                        if (token) {
                            fullText += token;
                            this.updatePlaceholderMessage(botMessageId, fullText, true);
                        }
                    }
                }

                if (fullText) {
                    this.updatePlaceholderMessage(botMessageId, fullText, false);
                    this.addMessageToStorage(fullText, 'bot');
                } else {
                    throw new Error('No text streamed');
                }

            } catch (error) {
                this.log('Streaming failed, using fallback:', error);
                await this.sendWithoutStreaming(message, botMessageId);
            }
        }

        async sendWithoutStreaming(message, botMessageId) {
            const body = { question: message };
            
            // Only send chatId if we have one
            if (this.chatId) {
                body.chatId = this.chatId;
            }
            
            const response = await fetch(`${this.apiHost}/api/v1/prediction/${this.chatflowid}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            if (!response.ok) throw new Error('API failed');
            const data = await response.json();
            
            // Flowise returned chatId - save it!
            if (data.chatId && data.chatId !== this.chatId) {
                this.chatId = data.chatId;
                this.saveToStorage();
                this.log('\u2705 ChatId assigned by Flowise:', this.chatId);
            }
            
            const botMessage = data.text || data.answer || data.response || 'No response';
            this.updatePlaceholderMessage(botMessageId, botMessage, false);
            this.addMessageToStorage(botMessage, 'bot');
        }

        addMessageToStorage(content, role) {
            this.messages.push({ role, content });
            this.saveToStorage();
        }

        addMessage(text, sender) {
            // Add to storage
            this.addMessageToStorage(text, sender);
            // Add to UI
            this.addMessageToUI(text, sender);
        }

        addMessageToUI(text, sender) {
            const messagesContainer = document.getElementById('bf-messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `bf-message bf-${sender}-message`;
            
            const formattedText = sender === 'bot' ? this.formatMarkdown(text) : this.escapeHtml(text);
            
            messageDiv.innerHTML = `
                <div class="bf-message-content">
                    <div class="bf-message-text">${formattedText}</div>
                    ${this.config.showTimestamp ? `<div class="bf-message-time">${this.getTimeString()}</div>` : ''}
                </div>
            `;
            messagesContainer.appendChild(messageDiv);
            this.scrollToBottom();
        }

        createPlaceholderMessage() {
            const messagesContainer = document.getElementById('bf-messages');
            const messageId = 'msg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
            const messageDiv = document.createElement('div');
            messageDiv.id = messageId;
            messageDiv.className = 'bf-message bf-bot-message';
            
            messageDiv.innerHTML = `
                <div class="bf-message-content">
                    <div class="bf-message-text">
                        <div class="bf-loading-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    ${this.config.showTimestamp ? `<div class="bf-message-time">${this.getTimeString()}</div>` : ''}
                </div>
            `;

            messagesContainer.appendChild(messageDiv);
            this.scrollToBottom();
            return messageId;
        }

        updatePlaceholderMessage(messageId, text, isStreaming) {
            const messageDiv = document.getElementById(messageId);
            if (!messageDiv) return;

            const textElement = messageDiv.querySelector('.bf-message-text');
            
            if (isStreaming) {
                const escapedText = this.escapeHtml(text).replace(/\n/g, '<br>');
                textElement.innerHTML = escapedText + '<span class="bf-cursor">|</span>';
                messageDiv.classList.add('bf-streaming');
            } else {
                textElement.innerHTML = this.formatMarkdown(text);
                messageDiv.classList.remove('bf-streaming');
            }
            
            this.scrollToBottom();
        }

        formatMarkdown(text) {
            if (!this.config.enableMarkdown) return this.escapeHtml(text).replace(/\n/g, '<br>');
            
            let html = this.escapeHtml(text);
            
            html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
            html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
            html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
            html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
            html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
            html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
            html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
            html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
            html = html.replace(/_(.+?)_/g, '<em>$1</em>');
            html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
            html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
            html = html.replace(/(<li>.+<\/li>\n?)+/g, (match) => '<ol>' + match + '</ol>');
            html = html.replace(/^[\-\*] (.+)$/gm, '<li>$1</li>');
            html = html.replace(/(<li>.+<\/li>\n?)+/g, (match) => {
                if (!match.includes('<ol>')) return '<ul>' + match + '</ul>';
                return match;
            });
            html = html.replace(/\n\n/g, '</p><p>');
            html = html.replace(/\n/g, '<br>');
            html = '<p>' + html + '</p>';
            html = html.replace(/<p><\/p>/g, '');
            html = html.replace(/<p>(<[uo]l>)/g, '$1');
            html = html.replace(/(<\/[uo]l>)<\/p>/g, '$1');
            html = html.replace(/<p>(<pre>)/g, '$1');
            html = html.replace(/(<\/pre>)<\/p>/g, '$1');
            html = html.replace(/<p>(<h[123]>)/g, '$1');
            html = html.replace(/(<\/h[123]>)<\/p>/g, '$1');
            
            return html;
        }

        scrollToBottom() {
            const container = document.getElementById('bf-messages');
            container.scrollTop = container.scrollHeight;
        }

        getTimeString() {
            return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        }

        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
    }

    window.BeautifulFlowiseChat = {
        init: function(config) {
            if (!config.chatflowid || !config.apiHost) {
                console.error('BeautifulFlowiseChat: chatflowid and apiHost are required');
                return;
            }
            return new BeautifulFlowiseChat({ ...config, mode: 'popup' });
        },
        
        initFull: function(config) {
            if (!config.chatflowid || !config.apiHost) {
                console.error('BeautifulFlowiseChat: chatflowid and apiHost are required');
                return;
            }
            return new BeautifulFlowiseChat({ ...config, mode: 'fullscreen' });
        }
    };
})();