import React, { useState } from 'react';
import { View, Text, Input, Button } from '@tarojs/components';
import './index.scss';


const Index: React.FC = () => {

  const [messages, setMessages] = useState([
    { type: 'agent', content: 'Hi, how can I help you today?' },
    { type: 'user', content: "Hey, I'm having trouble with my account." },
    { type: 'agent', content: 'What seems to be the problem?' },
    { type: 'user', content: "I can't log in." }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: 'user', content: inputValue }]);
      setInputValue('');
    }
  };


  return (
    <View className='chat-container'>
      <View className='messages'>
        {messages.map((message, index) => (
          <View key={index} className={`message ${message.type}`}>
            <Text>{message.content}</Text>
          </View>
        ))}
      </View>
      <View className='input-container'>
        <Input
          className='input'
          value={inputValue}
          onInput={(e) => setInputValue(e.detail.value)}
          placeholder='Type your message...'
          focus={true}
        />
        <Button className='send-button' onClick={handleSend}>Send</Button>
      </View>
    </View>
  );
};

export default Index;
