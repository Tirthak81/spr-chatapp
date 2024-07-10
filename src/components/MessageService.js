// messageService.js

const MESSAGE_STORAGE_KEY = "messages";

// Retrieve messages from local storage
export const getMessages = () => {
  const messagesString = localStorage.getItem(MESSAGE_STORAGE_KEY);
  return messagesString ? JSON.parse(messagesString) : [];
};

// Store a new message in local storage
export const storeMessage = (message) => {
  const existingMessages = getMessages();
  const updatedMessages = [...existingMessages, message];
  localStorage.setItem(MESSAGE_STORAGE_KEY, JSON.stringify(updatedMessages));
};
