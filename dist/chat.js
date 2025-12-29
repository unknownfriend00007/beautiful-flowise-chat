/**
 * Beautiful Flowise Chat Widget v1.2.0 - Complete Build
 * STYLES + JAVASCRIPT COMBINED
 */

/* === STYLES === */
window.BEAUTIFUL_FLOWISE_STYLES = `
:root {
    --bf-primary-color: #6366f1;
    --bf-primary-dark: #4f46e5;
    --bf-bg-color: #ffffff;
    --bf-text-color: #1f2937;
    --bf-text-secondary: #6b7280;
    --bf-border-color: #e5e7eb;
    --bf-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    --bf-radius: 16px;
}
.bf-container * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.bf-container {
    position: fixed;
    z-index: 999999;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
.bf-bottom-right { bottom: 20px; right: 20px; }
.bf-bottom-left { bottom: 20px; left: 20px; }
.bf-chat-button {
    width: 60px; height: 60px; border-radius: 50%;
    background: linear-gradient(135deg, var(--bf-primary-color), var(--bf-primary-dark));
    border: none; cursor: pointer; box-shadow: var(--bf-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex; align-items: center; justify-content: center;
}
.bf-chat-button:hover { transform: scale(1.1); }
.bf-button-icon { width: 28px; height: 28px; color: white; stroke-width: 2; }
.bf-chat-window {
    position: absolute; bottom: 80px; right: 0;
    width: 400px; max-width: calc(100vw - 40px);
    height: 600px; max-height: calc(100vh - 120px);
    background: var(--bf-bg-color); border-radius: var(--bf-radius);
    box-shadow: var(--bf-shadow); display: flex; flex-direction: column;
    overflow: hidden; animation: slideUp 0.3s ease;
}
@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.bf-header {
    background: linear-gradient(135deg, var(--bf-primary-color), var(--bf-primary-dark));
    color: white; padding: 20px; display: flex;
    align-items: center; justify-content: space-between;
}
.bf-header-content { display: flex; align-items: center; gap: 12px; z-index: 1; }
.bf-avatar {
    width: 40px; height: 40px; border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: flex; align-items: center; justify-content: center; font-size: 20px;
}
.bf-title { font-size: 16px; font-weight: 600; }
.bf-subtitle { font-size: 12px; opacity: 0.9; }
.bf-minimize-btn {
    background: rgba(255, 255, 255, 0.2); border: none; color: white;
    width: 32px; height: 32px; border-radius: 8px; cursor: pointer;
    font-size: 24px; display: flex; align-items: center; justify-content: center;
}
.bf-messages {
    flex: 1; overflow-y: auto; padding: 20px;
    background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
    display: flex; flex-direction: column; gap: 16px;
}
.bf-messages::-webkit-scrollbar { width: 6px; }
.bf-messages::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
.bf-message { display: flex; gap: 10px; animation: fadeIn 0.3s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.bf-bot-message { align-self: flex-start; }
.bf-user-message { align-self: flex-end; flex-direction: row-reverse; }
.bf-message-avatar {
    width: 32px; height: 32px; border-radius: 50%;
    background: linear-gradient(135deg, var(--bf-primary-color), var(--bf-primary-dark));
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; flex-shrink: 0;
}
.bf-message-content { max-width: 75%; min-width: 60px; }
.bf-message-text {
    background: white; padding: 12px 16px; border-radius: 16px;
    color: var(--bf-text-color); font-size: 14px; line-height: 1.6;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    word-wrap: break-word; word-break: break-word;
}
.bf-bot-message .bf-message-text strong { font-weight: 600; }
.bf-bot-message .bf-message-text code {
    background: #f3f4f6; padding: 2px 6px; border-radius: 4px;
    font-family: 'Courier New', monospace; font-size: 13px; color: #be123c;
}
.bf-bot-message .bf-message-text pre {
    background: #1f2937; color: #f9fafb; padding: 12px;
    border-radius: 8px; overflow-x: auto; margin: 8px 0;
}
.bf-bot-message .bf-message-text pre code { background: transparent; padding: 0; color: #f9fafb; }
.bf-bot-message .bf-message-text ul, .bf-bot-message .bf-message-text ol { margin: 8px 0; padding-left: 20px; }
.bf-bot-message .bf-message-text li { margin: 4px 0; }
.bf-user-message .bf-message-text {
    background: linear-gradient(135deg, var(--bf-primary-color), var(--bf-primary-dark));
    color: #ffffff !important;
}
.bf-message-time { font-size: 11px; color: var(--bf-text-secondary); margin-top: 4px; }
.bf-typing { display: flex; align-items: center; gap: 10px; padding: 0 20px 10px; }
.bf-typing-dots {
    background: white; padding: 12px 16px; border-radius: 16px;
    display: flex; gap: 4px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.bf-typing-dots span {
    width: 8px; height: 8px; background: #cbd5e1; border-radius: 50%;
    animation: typing 1.4s ease-in-out infinite;
}
.bf-typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.bf-typing-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes typing { 0%, 60%, 100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-10px); opacity: 1; } }
.bf-input-container {
    padding: 16px; background: white; border-top: 1px solid var(--bf-border-color);
    display: flex; gap: 10px; align-items: flex-end;
}
.bf-input {
    flex: 1; border: 2px solid var(--bf-border-color); border-radius: 12px;
    padding: 12px 16px; font-size: 14px; font-family: inherit;
    resize: none; outline: none; max-height: 120px; min-height: 44px;
}
.bf-input:focus { border-color: var(--bf-primary-color); }
.bf-send-btn {
    background: linear-gradient(135deg, var(--bf-primary-color), var(--bf-primary-dark));
    color: white; border: none; border-radius: 12px;
    width: 44px; height: 44px; cursor: pointer; font-size: 20px;
    display: flex; align-items: center; justify-content: center;
}
.bf-send-btn:hover { transform: scale(1.05); }
.bf-footer { padding: 8px; text-align: center; background: #f9fafb; }
.bf-branding { font-size: 11px; color: #6b7280; text-decoration: none; }
`;

/* === JAVASCRIPT === */
(function() {
    'use strict';

    const defaults = {
        theme: 'modern',
        primaryColor: '#6366f1',
        position: 'bottom-right',
        title: 'AI Assistant',
        subtitle: 'Online',
        welcomeMessage: 'Hi! How can I help you today?',
        placeholder: 'Type your message...',
        sendButtonText: '➤',
        showTimestamp: true,
        enableMarkdown: true,
        debug: false,
        avatar: '🤖'
    };

    class BeautifulFlowiseChat {
        constructor(config) {
            this.config = { ...defaults, ...config };
            this.chatflowid = config.chatflowid;
            this.apiHost = config.apiHost;
            this.conversationHistory = [];
            this.isOpen = false;
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
            styleSheet.textContent = window.BEAUTIFUL_FLOWISE_STYLES || '';
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
                        ${this.config.welcomeMessage ? `<div class="bf-message bf-bot-message">
                            <div class="bf-message-avatar">${this.config.avatar}</div>
                            <div class="bf-message-content">
                                <div class="bf-message-text">${this.formatMessage(this.config.welcomeMessage)}</div>
                                ${this.config.showTimestamp ? `<div class="bf-message-time">${this.getTimeString()}</div>` : ''}
                            </div>
                        </div>` : ''}
                    </div>
                    <div class="bf-typing" id="bf-typing" style="display: none;">
                        <div class="bf-message-avatar">${this.config.avatar}</div>
                        <div class="bf-typing-dots"><span></span><span></span><span></span></div>
                    </div>
                    <div class="bf-input-container">
                        <textarea class="bf-input" id="bf-input" placeholder="${this.config.placeholder}" rows="1"></textarea>
                        <button class="bf-send-btn" id="bf-send">${this.config.sendButtonText}</button>
                    </div>
                    <div class="bf-footer">
                        <a href="https://github.com/unknownfriend00007/beautiful-flowise-chat" target="_blank" class="bf-branding">Powered by Beautiful Flowise Chat</a>
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
            const message = input.value.trim();
            if (!message) return;

            this.addMessage(message, 'user');
            input.value = '';
            this.showTyping(true);

            try {
                this.log('Sending:', message);
                const response = await fetch(`${this.apiHost}/api/v1/prediction/${this.chatflowid}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ question: message, history: this.conversationHistory })
                });

                if (!response.ok) throw new Error(`API error: ${response.status}`);
                
                const data = await response.json();
                this.log('Response:', data);
                
                const botMessage = data.text || data.answer || data.response || data.output || 'No response';
                this.showTyping(false);
                this.addMessage(botMessage, 'bot');
                this.conversationHistory.push([message, botMessage]);
            } catch (error) {
                console.error('Error:', error);
                this.showTyping(false);
                this.addMessage('Sorry, something went wrong.', 'bot');
            }
        }

        addMessage(text, sender) {
            const messagesContainer = document.getElementById('bf-messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `bf-message bf-${sender}-message`;
            const formattedText = sender === 'bot' ? this.formatMessage(text) : this.escapeHtml(text);
            messageDiv.innerHTML = `
                ${sender === 'bot' ? `<div class="bf-message-avatar">${this.config.avatar}</div>` : ''}
                <div class="bf-message-content">
                    <div class="bf-message-text">${formattedText}</div>
                    ${this.config.showTimestamp ? `<div class="bf-message-time">${this.getTimeString()}</div>` : ''}
                </div>
            `;
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        formatMessage(text) {
            if (!this.config.enableMarkdown) return this.escapeHtml(text).replace(/\n/g, '<br>');
            let html = this.escapeHtml(text);
            html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
            html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
            html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
            html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
            html = html.replace(/^(\d+\. .+)$/gm, '<li>$1</li>').replace(/(<li>\d+\. .+<\/li>\n?)+/g, '<ol>$&</ol>').replace(/<li>(\d+)\. (.+?)<\/li>/g, '<li>$2</li>');
            html = html.replace(/^[\-\*] (.+)$/gm, '<li>$1</li>').replace(/(<li>.+<\/li>\n?)+/g, (m) => !m.includes('<ol>') ? '<ul>' + m + '</ul>' : m);
            html = html.replace(/\n/g, '<br>');
            return html;
        }

        showTyping(show) {
            document.getElementById('bf-typing').style.display = show ? 'flex' : 'none';
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
                console.error('BeautifulFlowiseChat: chatflowid and apiHost required');
                return;
            }
            return new BeautifulFlowiseChat(config);
        }
    };
})();