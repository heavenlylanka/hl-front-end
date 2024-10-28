// /app/admin-dashboard/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
}

function Page() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  // Fetch all messages
  const fetchMessages = async () => {
    try {
      const response = await axios.get<Message[]>('http://localhost:8080/admin/contact-messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Delete a message by ID
  const deleteMessage = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/admin/contact-messages/${id}`);
      setMessages(messages.filter(message => message.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  // Fetch a specific message by ID
  const fetchMessageById = async (id: number) => {
    try {
      const response = await axios.get<Message>(`http://localhost:8080/admin/contact-messages/${id}`);
      setSelectedMessage(response.data);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <h2 className="text-xl mb-4">All Contact Messages</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Message</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td className="py-2 px-4 border">{message.id}</td>
              <td className="py-2 px-4 border">{message.name}</td>
              <td className="py-2 px-4 border">{message.email}</td>
              <td className="py-2 px-4 border">{message.message}</td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => fetchMessageById(message.id)}
                  className="text-blue-500 mr-4"
                >
                  View
                </button>
                <button
                  onClick={() => deleteMessage(message.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedMessage && (
        <div className="mt-8 p-4 border rounded bg-gray-100">
          <h3 className="text-lg font-bold">Message Details</h3>
          <p><strong>ID:</strong> {selectedMessage.id}</p>
          <p><strong>Name:</strong> {selectedMessage.name}</p>
          <p><strong>Email:</strong> {selectedMessage.email}</p>
          <p><strong>Message:</strong> {selectedMessage.message}</p>
          <button
            onClick={() => setSelectedMessage(null)}
            className="mt-4 text-blue-500"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Page;
