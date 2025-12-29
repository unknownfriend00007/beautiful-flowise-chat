/**
 * Beautiful Flowise Chat Widget
 * A modern, customizable alternative to default Flowise embed
 */

(function() {
    'use strict';

    // Configuration defaults
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
        enableSoundNotification: false,
        avatar: '🤖'
    };

    class BeautifulFlowiseChat {
        constructor(config) {
            this.config = { ...defaults, ...config };
            this.chatflowid = config.chatflowid;
            this.apiHost = config.apiHost;
            this.conversationHistory = [];
            this.isOpen = false;
            this.isTyping = false;
            
            this.init();
        }

        init() {
            this.injectStyles();
            this.createWidget();
            this.attachEventListeners();
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
                <!-- Chat Button -->
                <button class="bf-chat-button" id="bf-toggle-button" aria-label="Open chat">
                    <svg class="bf-button-icon bf-button-open" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <svg class="bf-button-icon bf-button-close" style="display: none;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <!-- Chat Window -->
                <div class="bf-chat-window" id="bf-chat-window" style="display: none;">
                    <!-- Header -->
                    <div class="bf-header">
                        <div class="bf-header-content">
                            <div class="bf-avatar">${this.config.avatar}</div>
                            <div class="bf-header-text">
                                <div class="bf-title">${this.config.title}</div>
                                <div class="bf-subtitle">${this.config.subtitle}</div>
                            </div>
                        </div>
                        <button class="bf-minimize-btn" id="bf-minimize" aria-label="Minimize chat">−</button>
                    </div>

                    <!-- Messages Container -->
                    <div class="bf-messages" id="bf-messages">
                        ${this.config.welcomeMessage ? `
                        <div class="bf-message bf-bot-message">
                            <div class="bf-message-avatar">${this.config.avatar}</div>
                            <div class="bf-message-content">
                                <div class="bf-message-text">${this.config.welcomeMessage}</div>
                                ${this.config.showTimestamp ? `<div class="bf-message-time">${this.getTimeString()}</div>` : ''}
                            </div>
                        </div>` : ''}
                    </div>

                    <!-- Typing Indicator -->
                    <div class="bf-typing" id="bf-typing" style="display: none;">
                        <div class="bf-typing-avatar">${this.config.avatar}</div>
                        <div class="bf-typing-dots">
                            <span></span><span></span><span></span>
                        </div>
                    </div>

                    <!-- Input Area -->
                    <div class="bf-input-container">
                        <textarea 
                            class="bf-input" 
                            id="bf-input" 
                            placeholder="${this.config.placeholder}"
                            rows="1"
                        ></textarea>
                        <button class="bf-send-btn" id="bf-send" aria-label="Send message">
                            ${this.config.sendButtonText}
                        </button>
                    </div>

                    <!-- Powered By (optional) -->
                    <div class="bf-footer">
                        <a href="https://github.com/unknownfriend00007/beautiful-flowise-chat" target="_blank" class="bf-branding">
                            Powered by Beautiful Flowise Chat
                        </a>
                    </div>
                </div>
            `;

            document.body.appendChild(container);
        }

        attachEventListeners() {
            const toggleBtn = document.getElementById('bf-toggle-button');
            const minimizeBtn = document.getElementById('bf-minimize');
            const sendBtn = document.getElementById('bf-send');
            const input = document.getElementById('bf-input');

            toggleBtn.addEventListener('click', () => this.toggleChat());
            minimizeBtn.addEventListener('click', () => this.toggleChat());
            sendBtn.addEventListener('click', () => this.sendMessage());
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });

            // Auto-resize textarea
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
            const message = input.value.trim();
            
            if (!message) return;

            // Add user message to UI
            this.addMessage(message, 'user');
            input.value = '';
            input.style.height = 'auto';

            // Show typing indicator
            this.showTyping(true);

            try {
                const response = await fetch(`${this.apiHost}/api/v1/prediction/${this.chatflowid}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        question: message,
                        history: this.conversationHistory
                    })
                });

                if (!response.ok) throw new Error('API request failed');

                const data = await response.json();
                
                // Hide typing indicator
                this.showTyping(false);
                
                // Add bot response
                const botMessage = data.text || data.answer || data.response || 'Sorry, I could not process your request.';
                this.addMessage(botMessage, 'bot');

                // Update conversation history
                this.conversationHistory.push([message, botMessage]);

            } catch (error) {
                console.error('Flowise API Error:', error);
                this.showTyping(false);
                this.addMessage('Sorry, something went wrong. Please try again.', 'bot', true);
            }
        }

        addMessage(text, sender, isError = false) {
            const messagesContainer = document.getElementById('bf-messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `bf-message bf-${sender}-message ${isError ? 'bf-error' : ''}`;
            
            messageDiv.innerHTML = `
                ${sender === 'bot' ? `<div class="bf-message-avatar">${this.config.avatar}</div>` : ''}
                <div class="bf-message-content">
                    <div class="bf-message-text">${this.escapeHtml(text)}</div>
                    ${this.config.showTimestamp ? `<div class="bf-message-time">${this.getTimeString()}</div>` : ''}
                </div>
            `;

            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        showTyping(show) {
            const typingIndicator = document.getElementById('bf-typing');
            typingIndicator.style.display = show ? 'flex' : 'none';
            
            if (show) {
                const messagesContainer = document.getElementById('bf-messages');
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        }

        getTimeString() {
            const now = new Date();
            return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        }

        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
    }

    // Global API
    window.BeautifulFlowiseChat = {
        init: function(config) {
            if (!config.chatflowid || !config.apiHost) {
                console.error('BeautifulFlowiseChat: chatflowid and apiHost are required');
                return;
            }
            return new BeautifulFlowiseChat(config);
        },
        initFull: function(config) {
            // Full-page mode
            config.position = 'fullscreen';
            return this.init(config);
        }
    };

})();