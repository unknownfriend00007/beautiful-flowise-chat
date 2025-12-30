/**
 * Beautiful Flowise Chat Widget v1.4.5
 * Buttery smooth streaming with loading animation
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
        sendButtonText: '➤',
        showTimestamp: true,
        enableStreaming: true,
        enableMarkdown: true,
        debug: false,
        avatar: '🤖'
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

.bf-bottom-right { bottom: 20px; right: 20px; }
.bf-bottom-left { bottom: 20px; left: 20px; }

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

.bf-chat-button:hover { transform: scale(1.1); }
.bf-button-icon { width: 28px; height: 28px; color: white; stroke-width: 2; }

.bf-chat-window {
    position: absolute;
    bottom: 80px;
    right: 0;
    width: 400px;
    max-width: calc(100vw - 40px);
    height: 600px;
    max-height: calc(100vh - 120px);
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: slideUp 0.3s ease;
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
}

.bf-header-content { display: flex; align-items: center; gap: 12px; }

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

.bf-minimize-btn {
    background: rgba(255,255,255,0.2);
    border: none;
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 24px;
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
    display: flex;
    gap: 10px;
    animation: fadeIn 0.3s;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.bf-bot-message { align-self: flex-start; }
.bf-user-message { align-self: flex-end; flex-direction: row-reverse; }

.bf-message-content {
    max-width: 80%;
    min-width: 80px;
}

.bf-message-text {
    background: white;
    padding: 12px 16px;
    border-radius: 16px;
    color: #1f2937;
    font-size: 14px;
    line-height: 1.6;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    word-wrap: break-word;
    word-break: break-word;
    white-space: pre-wrap;
    display: inline-block;
}

.bf-user-message .bf-message-text {
    background: linear-gradient(135deg, var(--bf-primary-color), var(--bf-primary-dark));
    color: white;
    box-shadow: 0 2px 12px rgba(99,102,241,0.3);
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

/* Loading dots - compact */
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

.bf-typing {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 20px 10px;
}

.bf-typing-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--bf-primary-color), var(--bf-primary-dark));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
}

.bf-typing-dots {
    background: white;
    padding: 12px 16px;
    border-radius: 16px;
    display: flex;
    gap: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.bf-typing-dots span {
    width: 8px;
    height: 8px;
    background: #cbd5e1;
    border-radius: 50%;
    animation: typing 1.4s ease-in-out infinite;
}

.bf-typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.bf-typing-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
    0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
    30% { transform: translateY(-10px); opacity: 1; }
}

.bf-input-container {
    padding: 16px;
    background: white;
    border-top: 1px solid #e5e7eb;
    display: flex;
    gap: 10px;
    align-items: flex-end;
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
}

.bf-send-btn:hover { transform: scale(1.05); }
.bf-send-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

.bf-footer {
    padding: 8px;
    text-align: center;
    background: #f9fafb;
    border-top: 1px solid #e5e7eb;
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
.bf-theme-cloudflare { --bf-primary-color: #f38020; --bf-primary-dark: #d96b0f; }
.bf-theme-intercom { --bf-primary-color: #1f8ded; --bf-primary-dark: #1273c5; }
.bf-theme-gradient { --bf-primary-color: #667eea; --bf-primary-dark: #764ba2; }
.bf-theme-glassmorphism .bf-chat-window {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.bf-theme-dark { --bf-primary-color: #6366f1; --bf-primary-dark: #4f46e5; }
.bf-theme-dark .bf-chat-window { background: #1f2937; }
.bf-theme-dark .bf-messages { background: #111827; }
.bf-theme-dark .bf-message-text { background: #374151; color: #f9fafb; }
.bf-theme-dark .bf-user-message .bf-message-text {
    background: linear-gradient(135deg, var(--bf-primary-color), var(--bf-primary-dark));
    color: white;
}
.bf-theme-dark .bf-input { background: #374151; color: #f9fafb; border-color: #4b5563; }
.bf-theme-dark .bf-input-container { background: #1f2937; border-top-color: #374151; }
.bf-theme-dark .bf-footer { background: #1f2937; border-top-color: #374151; }
.bf-theme-dark .bf-branding { color: #9ca3af; }
.bf-theme-minimal { --bf-primary-color: #000000; --bf-primary-dark: #1f2937; }
    `;

    class BeautifulFlowiseChat {
        constructor(config) {
            this.config = { ...defaults, ...config };
            this.chatflowid = config.chatflowid;
            this.apiHost = config.apiHost;
            this.conversationHistory = [];
            this.isOpen = false;
            this.currentStreamingMessageId = null;
            this.init();
        }

        init() {
            this.injectStyles();
            this.createWidget();
            this.attachEventListeners();
        }

        log(...args) {
            if (this.config.debug) console.log('[BeautifulFlowise]', ...args);
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
            container.className = `bf-container bf-${this.config.position} bf-theme-${this.config.theme}`;
            container.style.setProperty('--bf-primary-color', this.config.primaryColor);
            
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
                <div class="bf-chat-window" id="bf-chat-window" style="display: none;">
                    <div class="bf-header">
                        <div class="bf-header-content">
                            <div class="bf-avatar">${this.config.avatar}</div>
                            <div class="bf-header-text">
                                <div class="bf-title">${this.config.title}</div>
                                <div class="bf-subtitle">${this.config.subtitle}</div>
                            </div>
                        </div>
                        <button class="bf-minimize-btn" id="bf-minimize">−</button>
                    </div>
                    <div class="bf-messages" id="bf-messages">
                        ${this.config.welcomeMessage ? `
                        <div class="bf-message bf-bot-message">
                            <div class="bf-message-content">
                                <div class="bf-message-text">${this.escapeHtml(this.config.welcomeMessage)}</div>
                                ${this.config.showTimestamp ? `<div class="bf-message-time">${this.getTimeString()}</div>` : ''}
                            </div>
                        </div>` : ''}
                    </div>
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
            document.getElementById('bf-minimize').addEventListener('click', () => this.toggleChat());
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
        }

        toggleChat() {
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
                const response = await fetch(`${this.apiHost}/api/v1/prediction/${this.chatflowid}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ question: message, streaming: true })
                });

                if (!response.ok) throw new Error('API failed');
                
                const contentType = response.headers.get('content-type');
                if (!contentType?.includes('text/event-stream')) {
                    const data = await response.json();
                    const botMessage = data.text || data.answer || data.response || 'No response';
                    this.updatePlaceholderMessage(botMessageId, botMessage, false);
                    this.conversationHistory.push([message, botMessage]);
                    return;
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let fullText = '';
                let buffer = '';
                let streamEnded = false;
                let firstTokenReceived = false;

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
                        try {
                            const obj = JSON.parse(payload);
                            if (obj && typeof obj === 'object' && obj.event === 'token' && obj.data) {
                                token = obj.data;
                            } else if (typeof obj === 'string') {
                                token = obj;
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

                        if (token) {
                            if (!firstTokenReceived) {
                                firstTokenReceived = true;
                            }
                            fullText += token;
                            this.updatePlaceholderMessage(botMessageId, fullText, true);
                        }
                    }
                }

                if (fullText) {
                    this.updatePlaceholderMessage(botMessageId, fullText, false);
                    this.conversationHistory.push([message, fullText]);
                } else {
                    throw new Error('No text streamed');
                }

            } catch (error) {
                this.log('Streaming failed, using fallback:', error);
                await this.sendWithoutStreaming(message, botMessageId);
            }
        }

        async sendWithoutStreaming(message, botMessageId) {
            const response = await fetch(`${this.apiHost}/api/v1/prediction/${this.chatflowid}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: message })
            });

            if (!response.ok) throw new Error('API failed');
            const data = await response.json();
            
            const botMessage = data.text || data.answer || data.response || 'No response';
            this.updatePlaceholderMessage(botMessageId, botMessage, false);
            this.conversationHistory.push([message, botMessage]);
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

        addMessage(text, sender) {
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
            return new BeautifulFlowiseChat(config);
        }
    };
})();