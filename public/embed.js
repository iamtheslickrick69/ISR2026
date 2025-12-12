/**
 * AI Agent Builder - Embeddable Chat Widget
 * Version: 1.0.0
 *
 * Usage:
 * <script src="https://yourapp.com/embed.js" data-bot-id="YOUR_BOT_ID"></script>
 */

(function () {
  'use strict';

  // Get configuration from script tag
  const scriptTag = document.currentScript;
  const botId = scriptTag?.getAttribute('data-bot-id');
  const apiBase = scriptTag?.src.replace('/embed.js', '') || '';

  if (!botId) {
    console.error('AI Agent Builder: Missing data-bot-id attribute');
    return;
  }

  // State
  let config = null;
  let isOpen = false;
  let messages = [];
  let sessionId = localStorage.getItem(`ab_session_${botId}`) || generateId();
  let messageCount = 0;
  let leadCaptured = false;

  // Save session ID
  localStorage.setItem(`ab_session_${botId}`, sessionId);

  // DOM Elements
  let widget, chatWindow, launcher, messagesContainer, inputForm, inputField;

  // Initialize
  async function init() {
    try {
      // Fetch bot configuration
      const response = await fetch(`${apiBase}/api/embed/config?bot_id=${botId}`);
      if (!response.ok) throw new Error('Failed to load bot configuration');
      config = await response.json();

      // Create widget
      createWidget();
      attachEventListeners();

      // Add welcome message
      addMessage('assistant', config.welcomeMessage);
    } catch (error) {
      console.error('AI Agent Builder: Failed to initialize', error);
    }
  }

  // Generate unique ID
  function generateId() {
    return 'xxxx-xxxx-xxxx'.replace(/x/g, () =>
      Math.floor(Math.random() * 16).toString(16)
    );
  }

  // Create widget HTML
  function createWidget() {
    const position = config.appearance?.position || 'bottom-right';
    const primaryColor = config.appearance?.primaryColor || '#3B82F6';
    const isLeft = position === 'bottom-left';

    // Inject styles
    const styles = document.createElement('style');
    styles.textContent = `
      .ab-widget {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        position: fixed;
        bottom: 20px;
        ${isLeft ? 'left: 20px;' : 'right: 20px;'}
        z-index: 999999;
      }

      .ab-launcher {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: ${primaryColor};
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .ab-launcher:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 25px rgba(0,0,0,0.35);
      }

      .ab-launcher svg {
        width: 28px;
        height: 28px;
        fill: white;
      }

      .ab-chat-window {
        position: absolute;
        bottom: 80px;
        ${isLeft ? 'left: 0;' : 'right: 0;'}
        width: 380px;
        height: 520px;
        background: #1a1a24;
        border-radius: 16px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        display: none;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.1);
      }

      .ab-chat-window.open {
        display: flex;
        animation: ab-slide-up 0.3s ease;
      }

      @keyframes ab-slide-up {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .ab-header {
        background: ${primaryColor};
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .ab-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255,255,255,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .ab-avatar svg {
        width: 24px;
        height: 24px;
        fill: white;
      }

      .ab-header-info {
        flex: 1;
      }

      .ab-header-name {
        font-weight: 600;
        color: white;
        font-size: 16px;
      }

      .ab-header-status {
        font-size: 12px;
        color: rgba(255,255,255,0.8);
      }

      .ab-close-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        color: rgba(255,255,255,0.8);
      }

      .ab-close-btn:hover {
        color: white;
      }

      .ab-messages {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .ab-message {
        max-width: 80%;
        padding: 12px 16px;
        border-radius: 16px;
        font-size: 14px;
        line-height: 1.5;
        animation: ab-fade-in 0.3s ease;
      }

      @keyframes ab-fade-in {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .ab-message.user {
        background: ${primaryColor};
        color: white;
        margin-left: auto;
        border-bottom-right-radius: 4px;
      }

      .ab-message.assistant {
        background: rgba(255,255,255,0.1);
        color: white;
        margin-right: auto;
        border-bottom-left-radius: 4px;
      }

      .ab-message.typing .ab-typing-dots {
        display: flex;
        gap: 4px;
      }

      .ab-typing-dots span {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgba(255,255,255,0.6);
        animation: ab-bounce 1.4s infinite ease-in-out both;
      }

      .ab-typing-dots span:nth-child(1) { animation-delay: -0.32s; }
      .ab-typing-dots span:nth-child(2) { animation-delay: -0.16s; }

      @keyframes ab-bounce {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1); }
      }

      .ab-input-area {
        padding: 12px 16px;
        border-top: 1px solid rgba(255,255,255,0.1);
        background: rgba(0,0,0,0.2);
      }

      .ab-input-form {
        display: flex;
        gap: 8px;
      }

      .ab-input {
        flex: 1;
        padding: 12px 16px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 24px;
        background: rgba(255,255,255,0.05);
        color: white;
        font-size: 14px;
        outline: none;
      }

      .ab-input::placeholder {
        color: rgba(255,255,255,0.4);
      }

      .ab-input:focus {
        border-color: ${primaryColor};
      }

      .ab-send-btn {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: ${primaryColor};
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
      }

      .ab-send-btn:hover {
        background: ${adjustColor(primaryColor, -20)};
      }

      .ab-send-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .ab-send-btn svg {
        width: 20px;
        height: 20px;
        fill: white;
      }

      .ab-powered {
        text-align: center;
        padding: 8px;
        font-size: 11px;
        color: rgba(255,255,255,0.4);
      }

      .ab-powered a {
        color: rgba(255,255,255,0.6);
        text-decoration: none;
      }

      .ab-lead-form {
        padding: 20px;
        background: rgba(0,0,0,0.3);
        border-radius: 12px;
        margin: 12px;
      }

      .ab-lead-form h4 {
        color: white;
        margin: 0 0 8px 0;
        font-size: 16px;
      }

      .ab-lead-form p {
        color: rgba(255,255,255,0.6);
        margin: 0 0 16px 0;
        font-size: 13px;
      }

      .ab-lead-form input {
        width: 100%;
        padding: 10px 12px;
        margin-bottom: 10px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px;
        background: rgba(255,255,255,0.05);
        color: white;
        font-size: 14px;
        box-sizing: border-box;
      }

      .ab-lead-form button {
        width: 100%;
        padding: 12px;
        background: ${primaryColor};
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
      }

      @media (max-width: 480px) {
        .ab-chat-window {
          width: calc(100vw - 24px);
          height: calc(100vh - 100px);
          bottom: 70px;
          ${isLeft ? 'left: -8px;' : 'right: -8px;'}
        }
      }
    `;
    document.head.appendChild(styles);

    // Create widget container
    widget = document.createElement('div');
    widget.className = 'ab-widget';
    widget.innerHTML = `
      <div class="ab-chat-window">
        <div class="ab-header">
          <div class="ab-avatar">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          </div>
          <div class="ab-header-info">
            <div class="ab-header-name">${escapeHtml(config.name)}</div>
            <div class="ab-header-status">Online</div>
          </div>
          <button class="ab-close-btn" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="ab-messages"></div>
        <div class="ab-input-area">
          <form class="ab-input-form">
            <input type="text" class="ab-input" placeholder="Type a message..." autocomplete="off">
            <button type="submit" class="ab-send-btn" aria-label="Send">
              <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </form>
        </div>
        ${config.appearance?.showPoweredBy !== false ? '<div class="ab-powered">Powered by <a href="#">AI Agent Builder</a></div>' : ''}
      </div>
      <button class="ab-launcher" aria-label="Open chat">
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
      </button>
    `;

    document.body.appendChild(widget);

    // Get references
    chatWindow = widget.querySelector('.ab-chat-window');
    launcher = widget.querySelector('.ab-launcher');
    messagesContainer = widget.querySelector('.ab-messages');
    inputForm = widget.querySelector('.ab-input-form');
    inputField = widget.querySelector('.ab-input');
  }

  // Attach event listeners
  function attachEventListeners() {
    launcher.addEventListener('click', toggleChat);
    widget.querySelector('.ab-close-btn').addEventListener('click', toggleChat);
    inputForm.addEventListener('submit', handleSubmit);
  }

  // Toggle chat window
  function toggleChat() {
    isOpen = !isOpen;
    chatWindow.classList.toggle('open', isOpen);
    if (isOpen) {
      inputField.focus();
    }
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    const message = inputField.value.trim();
    if (!message) return;

    inputField.value = '';
    inputField.disabled = true;

    // Add user message
    addMessage('user', message);
    messageCount++;

    // Check if we should show lead capture form
    if (shouldShowLeadForm()) {
      showLeadForm();
    }

    // Show typing indicator
    const typingEl = addTypingIndicator();

    try {
      // Send message to API
      const response = await fetch(`${apiBase}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          botId,
          sessionId,
          message,
          messages: messages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();

      // Remove typing indicator
      typingEl.remove();

      if (data.content) {
        addMessage('assistant', data.content);
      }
    } catch (error) {
      typingEl.remove();
      addMessage('assistant', config.fallbackMessage || 'Sorry, something went wrong. Please try again.');
    }

    inputField.disabled = false;
    inputField.focus();
  }

  // Add message to chat
  function addMessage(role, content) {
    messages.push({ role, content });

    const messageEl = document.createElement('div');
    messageEl.className = `ab-message ${role}`;
    messageEl.textContent = content;
    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Add typing indicator
  function addTypingIndicator() {
    const typingEl = document.createElement('div');
    typingEl.className = 'ab-message assistant typing';
    typingEl.innerHTML = '<div class="ab-typing-dots"><span></span><span></span><span></span></div>';
    messagesContainer.appendChild(typingEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return typingEl;
  }

  // Check if lead form should be shown
  function shouldShowLeadForm() {
    if (leadCaptured || !config.leadCapture?.enabled) return false;

    const trigger = config.leadCapture.triggerType;
    const triggerAfter = config.leadCapture.triggerAfterMessages || 2;

    if (trigger === 'after_messages' && messageCount >= triggerAfter) {
      return true;
    }

    return false;
  }

  // Show lead capture form
  function showLeadForm() {
    const lc = config.leadCapture;
    const formEl = document.createElement('div');
    formEl.className = 'ab-lead-form';
    formEl.innerHTML = `
      <h4>${escapeHtml(lc.formTitle || 'Get in touch')}</h4>
      <p>${escapeHtml(lc.formDescription || 'Leave your details and we\'ll get back to you.')}</p>
      <form id="ab-lead-capture">
        ${lc.collectName ? `<input type="text" name="name" placeholder="Your name" ${lc.nameRequired ? 'required' : ''}>` : ''}
        ${lc.collectEmail ? `<input type="email" name="email" placeholder="Email address" ${lc.emailRequired ? 'required' : ''}>` : ''}
        ${lc.collectPhone ? `<input type="tel" name="phone" placeholder="Phone number" ${lc.phoneRequired ? 'required' : ''}>` : ''}
        <button type="submit">${escapeHtml(lc.submitButtonText || 'Submit')}</button>
      </form>
    `;

    messagesContainer.appendChild(formEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    formEl.querySelector('form').addEventListener('submit', handleLeadSubmit);
  }

  // Handle lead form submission
  async function handleLeadSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch(`${apiBase}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          botId,
          conversationId: sessionId,
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          sourcePage: window.location.href,
        }),
      });

      leadCaptured = true;
      form.parentElement.innerHTML = '<p style="color: #4ade80; text-align: center;">Thanks! We\'ll be in touch.</p>';
    } catch (error) {
      console.error('Failed to submit lead:', error);
    }
  }

  // Helper: Escape HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Helper: Adjust color brightness
  function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const num = parseInt(hex, 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amount));
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
