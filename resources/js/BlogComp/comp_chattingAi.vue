<template>
    <div class="chat-container mx-auto flex h-full max-w-2xl flex-col overflow-hidden rounded-xl border bg-white shadow-lg dark:bg-gray-950">
        <div class="chat-messages flex h-80 flex-col gap-4 overflow-y-scroll bg-gray-50 p-5 dark:bg-gray-900" ref="chatMessages">
            <div
                v-for="(message, index) in messages"
                :key="index"
                :class="[
                    'max-w-[75%] rounded-2xl p-3 text-base leading-relaxed break-words shadow',
                    message.role === 'user'
                        ? 'self-end rounded-br-2xl bg-blue-500 text-white'
                        : 'self-start rounded-bl-2xl bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100',
                ]"
            >
                <!-- If AI response contains markdown/line breaks -->
                <div v-html="formatMessage(message.content)"></div>
            </div>
        </div>
        <form @submit.prevent="sendMessage" class="chat-input-form flex border-t border-gray-200 bg-white p-4 dark:bg-gray-900">
            <input
                v-model="userPrompt"
                type="text"
                placeholder="Ask me anything..."
                class="chat-input flex-grow rounded-full border border-gray-300 p-3 text-base transition-colors outline-none focus:border-blue-500"
                :disabled="isLoading"
            />
            <button
                type="submit"
                class="send-button ml-2 transform cursor-pointer rounded-full bg-blue-500 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-600 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400"
                :disabled="isLoading"
            >
                <span v-if="!isLoading">Send</span>
                <span v-else>Thinking...</span>
            </button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ChatComponent',
    data() {
        return {
            userPrompt: '',
            messages: [{ role: 'assistant', content: 'Hello! How can I help you today?' }],
            isLoading: false,
        };
    },
    methods: {
        formatMessage(content) {
            // Replace line breaks with <br>
            return content.replace(/\n/g, '<br>');
        },
        async sendMessage() {
            if (!this.userPrompt.trim()) return;

            const userMessage = { role: 'user', content: this.userPrompt };
            this.messages.push(userMessage);
            this.isLoading = true;
            this.userPrompt = '';

            try {
                const response = await axios.post('/ai/chat', {
                    prompt: userMessage.content,
                });

                const aiResponseContent = response.data.content;
                const aiMessage = { role: 'assistant', content: aiResponseContent };
                this.messages.push(aiMessage);
            } catch (error) {
                console.error('Error sending message:', error);
                this.messages.push({
                    role: 'assistant',
                    content: 'Sorry, I am unable to respond at the moment. Please try again later.',
                });
            } finally {
                this.isLoading = false;
                this.$nextTick(() => {
                    this.scrollToBottom();
                });
            }
        },
        scrollToBottom() {
            const chatMessages = this.$refs.chatMessages;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        },
    },
};
</script>
